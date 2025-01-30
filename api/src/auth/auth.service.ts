import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MailerService } from '@nestjs-modules/mailer';
import { randomBytes } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private mailerService: MailerService,
  ) {}

  async createMagicLink(email: string): Promise<void> {
    const token = randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    let user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await this.prisma.user.create({
        data: { email },
      });
    }

    await this.prisma.magicLink.upsert({
      where: { userId: user.id },
      create: {
        token,
        expiresAt,
        userId: user.id,
      },
      update: {
        token,
        expiresAt,
      },
    });

    await this.mailerService.sendMail({
      to: email,
      subject: 'Votre lien de connexion LearnLab',
      html: `
        <h1>Bienvenue sur LearnLab !</h1>
        <p>Cliquez sur le lien ci-dessous pour vous connecter :</p>
        <a href="${process.env.FRONTEND_URL}/auth/verify?token=${token}">Se connecter</a>
        <p>Ce lien expire dans 15 minutes.</p>
      `,
    });
  }

  async verifyMagicLink(token: string) {
    const magicLink = await this.prisma.magicLink.findUnique({
      where: { token },
      include: { 
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            onboardingCompleted: true,
          }
        } 
      },
    });

    if (!magicLink || magicLink.expiresAt < new Date()) {
      throw new UnauthorizedException('Lien invalide ou expiré');
    }

    // Supprimer le magic link après utilisation
    await this.prisma.magicLink.delete({
      where: { id: magicLink.id },
    });

    return magicLink.user;
  }

  async completeOnboarding(userId: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { onboardingCompleted: true },
    });
  }
} 