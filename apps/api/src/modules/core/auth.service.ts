import { Injectable } from '@nestjs/common';
import type { Role, TenantContext } from '@barbearia/shared';

/** Foundation stub — JWT issuance/verification lands in a follow-up PR. */
@Injectable()
export class AuthService {
  buildContext(input: {
    userId: string;
    tenantId: string;
    role: Role;
  }): TenantContext {
    return {
      userId: input.userId,
      tenantId: input.tenantId,
      role: input.role,
    };
  }
}
