import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { TenancyService } from './tenancy.service.js';

describe('TenancyService', () => {
  const service = new TenancyService();
  const ctx = {
    userId: '11111111-1111-1111-1111-111111111111',
    tenantId: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    role: 'OWNER' as const,
  };

  it('allows same tenant resource', () => {
    assert.doesNotThrow(() =>
      service.assertResourceAccess(ctx, ctx.tenantId),
    );
  });

  it('denies other tenant resource', () => {
    assert.throws(
      () =>
        service.assertResourceAccess(
          ctx,
          'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        ),
      /CROSS_TENANT_ACCESS_DENIED/,
    );
  });
});
