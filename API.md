# API

REST API versionada, documentada com **OpenAPI/Swagger**.

## Base

- Prefix: `/api/v1`
- Auth: Bearer JWT (+ refresh)
- Public booking: `/api/v1/public/tenants/:slug/...`

## Domínios

| Path | Módulo |
|------|--------|
| `/auth` | core |
| `/tenants` | core |
| `/users` | core |
| `/barbers` | booking / core |
| `/customers` | crm |
| `/leads` | crm |
| `/services` | booking |
| `/products` | sales |
| `/appointments` | booking |
| `/packages` | sales |
| `/waitlist` | booking |
| `/notifications` | communication |
| `/automations` | automation |
| `/recovery` | intelligence (MVP 2) |
| `/reports` | analytics |
| `/payments` | sales / billing |
| `/subscriptions` | billing |
| `/whatsapp` | communication (MVP 3) |
| `/ai` | ai (MVP 3) |

## Regras

- `tenant_id` derivado do token / membership — nunca confiar no body
- Validação Zod / class-validator no boundary
- Erros tipados e previsíveis
- Idempotência em webhooks e reservas sensíveis
- Sem secrets em logs

## Status de agendamento

`PENDING` · `AWAITING_CONFIRMATION` · `CONFIRMED` · `IN_PROGRESS` · `COMPLETED` · `CANCELLED` · `NO_SHOW` · `RESCHEDULED`

## OpenAPI

Exposto em `/api/docs` (dev/staging). Contrato gerado a partir dos controllers NestJS.
