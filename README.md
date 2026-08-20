# Projeto Agendamento

SaaS multi-tenant para barbearias — o **"funcionário digital da barbearia"**.

> Você corta. O sistema cuida do resto.

Agenda + CRM + pacotes + fila de espera + automações + **recuperação automática de clientes** + (futuro) agente de IA.

**GitHub é a fonte oficial do código:** https://github.com/lucas-oliveira05/Projeto_Agendamento

## Problema

Barbearias perdem leads, furam agenda com cancelamentos, sofrem no-shows e deixam clientes antigos esfriarem — enquanto o barbeiro está ocupado cortando.

## Proposta de valor

**Transforme sua barbearia em uma máquina de agendamentos e clientes recorrentes.**

Ciclo: captar → converter → agendar → confirmar → atender → vender → fidelizar → **recuperar** → reagendar.

Métrica-estrela: **Revenue Recovered** (receita recuperada por automações).

## Stack

| Camada | Tecnologia |
|--------|------------|
| Monorepo | pnpm + Turborepo |
| API | NestJS (Fastify) |
| Web | Next.js App Router |
| ORM / DB | Prisma + PostgreSQL |
| Filas | Redis + BullMQ |
| Auth | JWT + refresh + RBAC |
| Notificações | NotificationProvider → Brevo |
| Mobile | Expo (MVP 4) |

Detalhes: [ARCHITECTURE.md](ARCHITECTURE.md) · Spec: [docs/PRODUCT_SPEC.md](docs/PRODUCT_SPEC.md)

## Estrutura

```text
apps/web · apps/api · apps/mobile
packages/shared · database · ui · config
docs/ · tests/ · infrastructure/ · .github/
```

## Como executar

```bash
git clone https://github.com/lucas-oliveira05/Projeto_Agendamento.git
cd Projeto_Agendamento
cp .env.example .env
```

Scripts de install/dev serão adicionados no bootstrap MVP 1 (`feature/mvp1-foundation`).

## Variáveis de ambiente

Ver [.env.example](.env.example). Nunca commitar valores reais.

## Testes e CI

GitHub Actions: lint, typecheck, unit, integration, build, security. Ver [CONTRIBUTING.md](CONTRIBUTING.md).

## Deploy

development → staging → production. Ver [DEPLOYMENT.md](DEPLOYMENT.md).

## Branches

`main` (estável) ← `develop` ← `feature/*` via Pull Request.

## Documentação

| Doc | Conteúdo |
|-----|----------|
| [docs/PRODUCT_SPEC.md](docs/PRODUCT_SPEC.md) | Spec de produto |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Arquitetura |
| [DATABASE.md](DATABASE.md) | Banco |
| [API.md](API.md) | API |
| [SECURITY.md](SECURITY.md) | Segurança |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Deploy |
| [AUTOMATIONS.md](AUTOMATIONS.md) | Automações |
| [AI.md](AI.md) | IA |
| [INTEGRATIONS.md](INTEGRATIONS.md) | Integrações |
| [AGENTS.md](AGENTS.md) | Regras para IA |
| [CHANGELOG.md](CHANGELOG.md) | Changelog |

## Roadmap

### MVP 1
- [ ] Auth + multi-tenant
- [ ] Barbeiros, clientes, serviços
- [ ] Agenda + agendamento online
- [ ] Dashboard básico
- [ ] WhatsApp deep-link
- [ ] Brevo (confirmação / lembrete)
- [ ] Pacotes + fila de espera
- [ ] Financeiro básico

### MVP 2
- [ ] CRM + leads
- [ ] Customer Intelligence + recovery
- [ ] Campanhas, avaliações, produtos/estoque

### MVP 3
- [ ] WhatsApp Business API + agente IA
- [ ] Upsell / insights avançados

### MVP 4
- [ ] Android (Expo)
- [ ] Push, indicação, white label

## Licença

[MIT](LICENSE)
