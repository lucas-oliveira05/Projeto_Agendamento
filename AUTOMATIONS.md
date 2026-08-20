# Automations

## Modelo

`Event → Trigger → Action`

## Eventos (MVP 1+)

| Evento | Ação típica |
|--------|-------------|
| `appointment_created` | Confirmação (Brevo) |
| `appointment_tomorrow` | Lembrete |
| `appointment_completed` | Pós-venda |
| `appointment_cancelled` | Consultar waitlist |
| `customer_due_for_return` | Recovery (MVP 2) |
| `customer_inactive` | Reativação (MVP 2) |
| `package_expiring` | Aviso de vencimento |

## Jobs (BullMQ)

- E-mails / notificações
- Lembretes
- Waitlist
- Recovery / campanhas (MVP 2)
- Webhooks
- Relatórios
- IA (MVP 3)

## Anti-spam

- Frequency cap
- Horário permitido
- Opt-out / consentimento
- `last_recovery_message_at`
- Limite configurável pelo OWNER

## Abstração

```text
Domain service → NotificationService → NotificationProvider → Brevo
```

Não acoplar Brevo (ou WhatsApp) diretamente ao domínio de agendamento.
