# Deployment

## Ambientes

| Ambiente | Papel |
|----------|--------|
| development | Dev local + CI |
| staging | Homologação |
| production | Clientes reais |

## Stack de runtime

- **API + workers:** containers (Docker)
- **Web:** Vercel ou container
- **PostgreSQL:** gerenciado (staging/production)
- **Redis:** gerenciado (filas BullMQ)

## Fluxo CI/CD

```text
PR → GitHub Actions (lint, typecheck, tests, build, security)
  → Merge develop
  → Deploy staging (quando configurado)
  → Validação
  → Merge main → production
```

## Secrets

Somente via env / GitHub Secrets / Secret Manager. Nunca no frontend nem no Git.

## Migrations

Aplicar migrations Prisma de forma controlada por ambiente (`migrate deploy` em staging/prod).

## Health

Endpoints de health na API; monitoramento de workers e jobs.
