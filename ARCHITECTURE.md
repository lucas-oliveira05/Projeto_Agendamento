# Architecture

## Princípios

- Monorepo multi-app (web, api, mobile)
- Multi-tenancy desde o núcleo
- GitHub como source of truth; CI/CD via GitHub Actions
- Separação development / staging / production

## Estrutura

```text
apps/
  web/       # Frontend
  api/       # Backend / API
  mobile/    # App mobile (ex.: Android)
packages/
  shared/    # Tipos e utilitários compartilhados
  database/  # Schema, migrations, seeds
  ui/        # Componentes de UI compartilhados
  config/    # Configuração compartilhada
docs/
tests/
infrastructure/
```

## Fluxo de dados (conceitual)

```text
Client (web/mobile)
    ↓
API
    ↓
PostgreSQL (+ Redis quando aplicável)
    ↓
Integrações (Brevo, WhatsApp, pagamentos, IA)
```

## Stack

A definir no próximo marco de produto. Documentar aqui assim que for escolhida.

## Decisões

| Decisão | Status |
|---------|--------|
| Source of truth = GitHub | Adotado |
| PostgreSQL como DB principal | Preferência adotada |
| SQLite como DB de produção | Rejeitado |
| Branches feature + PR | Adotado |
