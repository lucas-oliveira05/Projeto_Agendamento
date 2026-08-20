# Automations

Automações de produto e de engenharia.

## Produto (planejado)

- Recuperação automática de clientes
- Notificações e lembretes (ex.: Brevo)
- Waitlist e follow-ups

## Engenharia

- GitHub Actions: lint, typecheck, unit/integration tests, build, security checks
- Se etapa crítica falhar, o PR não está pronto para merge

```text
Push / PR
  → Install
  → Lint
  → Type Check
  → Unit Tests
  → Integration Tests
  → Build
  → Success
```
