import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import { PrismaService } from '../../prisma/prisma.service';
import { MailerService } from '@nestjs-modules/mailer';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  const mockAuthService = {
    createMagicLink: jest.fn(),
    verifyMagicLink: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('login', () => {
    it('should create magic link', async () => {
      const email = 'test@example.com';
      await controller.login({ email });
      expect(authService.createMagicLink).toHaveBeenCalledWith(email);
    });

    it('should return success message', async () => {
      const email = 'test@example.com';
      const result = await controller.login({ email });
      expect(result).toEqual({ message: 'Magic link envoyé' });
    });
  });

  describe('verify', () => {
    it('should verify magic link', async () => {
      const token = 'test-token';
      const mockUser = { id: 1, email: 'test@example.com' };
      mockAuthService.verifyMagicLink.mockResolvedValueOnce(mockUser);

      const result = await controller.verify(token);
      expect(authService.verifyMagicLink).toHaveBeenCalledWith(token);
      expect(result).toEqual(mockUser);
    });
  });
}); 