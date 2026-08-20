import { z } from 'zod';

export const RoleSchema = z.enum([
  'SUPER_ADMIN',
  'OWNER',
  'BARBER',
  'CUSTOMER',
]);
export type Role = z.infer<typeof RoleSchema>;

export const AppointmentStatusSchema = z.enum([
  'PENDING',
  'AWAITING_CONFIRMATION',
  'CONFIRMED',
  'IN_PROGRESS',
  'COMPLETED',
  'CANCELLED',
  'NO_SHOW',
  'RESCHEDULED',
]);
export type AppointmentStatus = z.infer<typeof AppointmentStatusSchema>;

export const TenantContextSchema = z.object({
  userId: z.string().uuid(),
  tenantId: z.string().uuid(),
  role: RoleSchema,
});
export type TenantContext = z.infer<typeof TenantContextSchema>;

/** Tenant id must come from auth context — never from untrusted client body. */
export function assertTenantScope(
  contextTenantId: string,
  resourceTenantId: string,
): void {
  if (contextTenantId !== resourceTenantId) {
    throw new Error('CROSS_TENANT_ACCESS_DENIED');
  }
}
