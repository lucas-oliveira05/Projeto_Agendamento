# Architecture

## Posicionamento

SaaS multi-tenant para barbearias — **"funcionário digital da barbearia"**.

Foco: **Agenda + CRM + Recuperação automática + (futuro) IA**.

Proposta: *"Você corta. O sistema cuida do resto."*

Spec completa: [docs/PRODUCT_SPEC.md](docs/PRODUCT_SPEC.md).

## Stack

| Camada | Escolha | Justificativa |
|--------|---------|---------------|
| Monorepo | pnpm + Turborepo | Apps/packages já scaffoldados; CI paralelo |
| API | NestJS + Fastify adapter | Módulos = domínios; DI; OpenAPI |
| Web | Next.js (App Router) | SSR para `/barbearia/[slug]`; dashboards |
| ORM | Prisma | Migrations versionadas; tipagem |
| DB | PostgreSQL | Isolamento por `tenant_id`; produção hospedada |
| Cache/Fila | Redis + BullMQ | Jobs: lembretes, waitlist, recovery, webhooks |
| Auth | JWT + refresh; RBAC | SUPER_ADMIN, OWNER, BARBER, CUSTOMER |
| Validação | Zod (shared) | Contratos únicos API/web |
| Notificações | `NotificationProvider` → Brevo (MVP) | Sem acoplar Brevo ao domínio |
| Pagamentos | `PaymentProvider` (stub MVP 1) | Cakto/Stripe/etc. via abstração |
| Mobile | Expo (MVP 4) | Mesma API |
| Hosting | API/workers em container; DB gerenciado | staging + production |

## Diagrama

```text
Clients (Next.js / Public booking / Expo later)
        ↓
   NestJS API
        ↓
 Domain modules + Event bus
        ↓
 PostgreSQL          Redis + BullMQ workers
        ↓                    ↓
                    Brevo / WhatsApp / Payment / AI providers
```

## Multi-tenancy

- Cada barbearia = linha em `tenants`.
- Todo dado de negócio: `tenant_id` NOT NULL + índices compostos.
- `tenant_id` **nunca** vem do frontend: JWT / `tenant_users`.
- Guards Nest + queries filtradas; testes cross-tenant obrigatórios.
- Concorrência de agenda: constraint + transaction (sem depender só do UI).

## Módulos (`apps/api/src/modules/`)

| Módulo | Responsabilidade | MVP |
|--------|------------------|-----|
| `core/` | Auth, users, tenants, RBAC | 1 |
| `booking/` | Services, appointments, waitlist | 1 |
| `crm/` | Customers, leads, history | 1–2 |
| `sales/` | Products, packages, orders | 1 |
| `automation/` | Events, rules, jobs | 1 |
| `communication/` | NotificationService + providers | 1 |
| `billing/` | SaaS plans, subscriptions | 1 |
| `analytics/` | KPIs, revenue_recovered | 1–2 |
| `intelligence/` | Behavior, predictions, recovery | 2 |
| `ai/` | AIService, tools, conversations | 3 |

## Packages

- `packages/database` — Prisma schema + migrations
- `packages/shared` — Zod DTOs, enums, types
- `packages/ui` — componentes compartilhados
- `packages/config` — tooling (tsconfig, eslint)

## Camadas (API)

```text
Controller → Application services → Domain → Infrastructure (Prisma, providers)
```

Princípios: SOLID, Clean Architecture, Repository + Service, DI, event-driven.

## Roadmap de fases

1. **Arquitetura** (este documento) — docs no GitHub
2. **Foundation** — bootstrap Nest/Next/Prisma + auth + tenant isolation
3. **MVP 1** — agenda, booking público, pacotes, waitlist, Brevo, financeiro básico
4. **MVP 2** — CRM, Customer Intelligence, recovery
5. **MVP 3** — WhatsApp Business API + agente IA
6. **MVP 4** — Android (Expo)

## Decisões

| Decisão | Status |
|---------|--------|
| GitHub = source of truth | Adotado |
| PostgreSQL (não SQLite prod) | Adotado |
| NestJS + Next.js + Prisma | Adotado |
| Recovery completo no MVP 2 | Adotado |
| IA só via tools autorizadas | Adotado |
| Branches feature + PR | Adotado |
