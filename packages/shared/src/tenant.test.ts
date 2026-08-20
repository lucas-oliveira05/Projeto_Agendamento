import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { assertTenantScope } from './index.js';

describe('assertTenantScope', () => {
  it('allows same tenant', () => {
    assert.doesNotThrow(() =>
      assertTenantScope(
        '11111111-1111-1111-1111-111111111111',
        '11111111-1111-1111-1111-111111111111',
      ),
    );
  });

  it('blocks cross-tenant access', () => {
    assert.throws(
      () =>
        assertTenantScope(
          '11111111-1111-1111-1111-111111111111',
          '22222222-2222-2222-2222-222222222222',
        ),
      /CROSS_TENANT_ACCESS_DENIED/,
    );
  });
});
