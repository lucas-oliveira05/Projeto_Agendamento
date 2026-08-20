# Database

## Princípios

- **PostgreSQL** hospedado em produção
- Migrations versionadas via **Prisma** em `packages/database`
- Todo dado de negócio com `tenant_id`
- Sem dados reais de produção em testes
- Backup de dados independente do GitHub

## Layout

```text
packages/database/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── seeds/
└── README.md
```

## Entidades — MVP 1

| Grupo | Tabelas |
|-------|---------|
| Core | `users`, `tenants`, `tenant_users`, `barbers` |
| Booking | `services`, `appointments`, `appointment_status_history`, `waitlists` |
| CRM light | `customers` (leads via status ou tabela mínima) |
| Sales | `packages`, `package_purchases`, `package_usages`, `payments` |
| Comm | `notifications`, `notification_templates` |
| Billing SaaS | `plans`, `subscriptions` |
| Audit / LGPD | `audit_logs`, campos de consentimento / opt-out |

## Entidades — MVP 2+ (schema previsto)

- `customer_behavior`, `customer_return_predictions`
- `recovery_campaigns`, `recovery_messages`, `recovery_events`
- `leads` (se separado), `reviews`, `products`, `product_sales`
- `whatsapp_conversations`, `ai_conversations`, `ai_actions`

## Relacionamentos (núcleo)

```text
tenants 1─* tenant_users *─1 users
tenants 1─* barbers | customers | services | appointments | packages
barbers 1─* appointments
customers 1─* appointments | package_purchases
services 1─* appointments
packages 1─* package_purchases 1─* package_usages
```

## Concorrência de agenda

Impedir duas reservas no mesmo slot para o mesmo barbeiro:

- Transaction
- Constraint de exclusão / unique parcial em intervalo de tempo
- Validação sempre no backend

## Ambientes

| Ambiente | Uso |
|----------|-----|
| development | Local / CI |
| staging | Homologação |
| production | Clientes reais |

## Seeds

Seeds apenas sintéticos (tenant demo, barbeiro, serviços) — nunca PII real.
