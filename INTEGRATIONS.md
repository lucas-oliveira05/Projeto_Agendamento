# Integrations

Credenciais apenas em secrets.

| Integração | Abstração | MVP |
|------------|-----------|-----|
| Brevo | `NotificationProvider` | 1 (confirmação, lembrete, waitlist, pós-venda) |
| WhatsApp deep-link | `wa.me` | 1 |
| WhatsApp Business API | Communication module | 3 |
| Payment gateway | `PaymentProvider` | stub 1; real depois |
| AI provider | `AIProvider` | 3 |

## Payment events (webhook-ready)

`subscription_created` · `payment_approved` · `payment_failed` · `subscription_cancelled` · `subscription_expired` · `subscription_renewed`

Idempotência obrigatória nos handlers.

## Planos SaaS

| Plano | Foco |
|-------|------|
| STARTER | Básico |
| PROFESSIONAL | CRM + automações + pacotes |
| PREMIUM | IA + WhatsApp + automações avançadas |

Limites: barbeiros, clientes, agendamentos, mensagens, automações, IA.
