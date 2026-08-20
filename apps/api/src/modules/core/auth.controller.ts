import { Body, Controller, Post } from '@nestjs/common';
import { RoleSchema } from '@barbearia/shared';
import { AuthService } from './auth.service';
import { z } from 'zod';

const LoginStubSchema = z.object({
  userId: z.string().uuid(),
  tenantId: z.string().uuid(),
  role: RoleSchema,
});

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  /** Dev-only context stub until real JWT auth is wired. */
  @Post('context')
  context(@Body() body: unknown) {
    const parsed = LoginStubSchema.parse(body);
    return this.auth.buildContext(parsed);
  }
}
