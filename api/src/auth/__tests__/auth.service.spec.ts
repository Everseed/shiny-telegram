import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth.service';
import { PrismaService } from '../../prisma/prisma.service';
import { MailerService } from '@nestjs-modules/mailer';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let prismaService: PrismaService;
  let mailerService: MailerService;

  const mockPrismaService = {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
    magicLink: {
      upsert: jest.fn(),
      findUnique: jest.fn(),
      delete: jest.fn(),
    },
  };

  const mockMailerService = {
    sendMail: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: MailerService,
          useValue: mockMailerService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prismaService = module.get<PrismaService>(PrismaService);
    mailerService = module.get<MailerService>(MailerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createMagicLink', () => {
    const email = 'test@example.com';
    const mockUser = { id: '1', email };

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should create magic link for new user', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(null);
      mockPrismaService.user.create.mockResolvedValueOnce(mockUser);
      mockPrismaService.magicLink.upsert.mockResolvedValueOnce({ token: 'test-token' });

      await service.createMagicLink(email);

      expect(prismaService.user.findUnique).toHaveBeenCalledWith({ where: { email } });
      expect(prismaService.user.create).toHaveBeenCalledWith({ data: { email } });
      expect(prismaService.magicLink.upsert).toHaveBeenCalled();
      expect(mailerService.sendMail).toHaveBeenCalled();
    });

    it('should create magic link for existing user', async () => {
      mockPrismaService.user.findUnique.mockResolvedValueOnce(mockUser);
      mockPrismaService.magicLink.upsert.mockResolvedValueOnce({ token: 'test-token' });

      await service.createMagicLink(email);

      expect(prismaService.user.create).not.toHaveBeenCalled();
      expect(prismaService.magicLink.upsert).toHaveBeenCalled();
      expect(mailerService.sendMail).toHaveBeenCalled();
    });
  });

  describe('verifyMagicLink', () => {
    const token = 'test-token';
    const mockUser = { id: '1', email: 'test@example.com' };

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should verify valid magic link', async () => {
      const mockMagicLink = {
        token,
        id: '1',
        userId: '1',
        expiresAt: new Date(Date.now() + 1000 * 60),
        user: mockUser,
      };

      mockPrismaService.magicLink.findUnique.mockResolvedValueOnce(mockMagicLink);
      mockPrismaService.magicLink.delete.mockResolvedValueOnce(mockMagicLink);

      const result = await service.verifyMagicLink(token);

      expect(result).toEqual(mockUser);
      expect(prismaService.magicLink.delete).toHaveBeenCalledWith({
        where: { id: mockMagicLink.id },
      });
    });

    it('should throw for invalid token', async () => {
      mockPrismaService.magicLink.findUnique.mockResolvedValueOnce(null);

      await expect(service.verifyMagicLink(token)).rejects.toThrow(UnauthorizedException);
    });

    it('should throw for expired token', async () => {
      const mockMagicLink = {
        token,
        userId: '1',
        expiresAt: new Date(Date.now() - 1000 * 60),
        user: mockUser,
      };

      mockPrismaService.magicLink.findUnique.mockResolvedValueOnce(mockMagicLink);

      await expect(service.verifyMagicLink(token)).rejects.toThrow(UnauthorizedException);
    });
  });
}); 