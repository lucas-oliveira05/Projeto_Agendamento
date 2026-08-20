# Security

## Secrets

Nunca no Git / frontend:

- Senhas, API keys, tokens, JWT secrets
- Credenciais DB, Brevo, WhatsApp, gateway, IA

Usar Environment Variables / GitHub Secrets / Secret Manager.  
Apenas `.env.example` versionado (vazio).

## Auth e RBAC

| Role | Escopo |
|------|--------|
| SUPER_ADMIN | Plataforma SaaS |
| OWNER | Tenant (dono) |
| BARBER | Agenda / operações do barbeiro |
| CUSTOMER | Self-service do cliente |

- Password hashing (argon2/bcrypt)
- JWT + refresh token
- Rate limiting
- HTTPS em staging/production

## Tenant isolation

- `tenant_id` só do contexto autenticado
- Queries sempre filtradas
- Testes automatizados de vazamento cross-tenant
- SUPER_ADMIN com caminhos explícitos de plataforma

## IA (§39)

A IA **nunca**:

- Executa SQL
- Acessa o banco diretamente
- Acessa outro tenant
- Altera/exclui dados sem tools autorizadas

Toda ação via `AIToolRegistry` + audit log (prompt, tool, params, resultado, user, tenant).

## App security

- Validation + sanitization
- XSS protection
- CSRF quando necessário (cookies)
- Audit logs

## LGPD

Schema preparado desde MVP 1:

- Consentimento / opt-out de campanhas
- Exportação e exclusão (handlers completos em fase seguinte)
- Retenção de assinatura cancelada (não apagar dados imediatamente)

## Concorrência

Reserva de horário: transaction + constraint no PostgreSQL — nunca só frontend.
