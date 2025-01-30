import { Controller, Post, Body, Get, Query, Patch, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body('email') email: string) {
    await this.authService.createMagicLink(email);
    return { message: 'Magic link envoyé' };
  }

  @Get('verify')
  async verify(@Query('token') token: string) {
    const user = await this.authService.verifyMagicLink(token);
    return user;
  }

  @Patch('users/:id/onboarding')
  async completeOnboarding(@Param('id') id: string) {
    return this.authService.completeOnboarding(id);
  }
} 