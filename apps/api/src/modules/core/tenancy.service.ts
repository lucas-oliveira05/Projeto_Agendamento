import { Injectable } from '@nestjs/common';
import { assertTenantScope, type TenantContext } from '@barbearia/shared';

@Injectable()
export class TenancyService {
  assertResourceAccess(ctx: TenantContext, resourceTenantId: string): void {
    assertTenantScope(ctx.tenantId, resourceTenantId);
  }
}
