# AI

Arquitetura preparada desde o início; implementação completa no **MVP 3**.

## Componentes

- `AIService`
- `AIProvider`
- `AIToolRegistry`
- `AIConversationService`
- `AIActionService`

## Tools autorizadas

`get_available_slots` · `create_appointment` · `cancel_appointment` · `reschedule_appointment` · `get_customer` · `get_customer_history` · `get_customer_package` · `join_waitlist` · `get_services` · `get_barbers` · `send_confirmation`

## Segurança

- Sem SQL / acesso direto ao DB
- Sem cross-tenant
- Sem deletes/alterações arbitrárias
- Audit: prompt, resposta, tool, params, resultado, user, tenant, timestamp

## Handoff

Se a IA não resolver → transferir para barbeiro com histórico e motivo.

## Recovery + IA

Fluxo futuro: sistema detecta retorno → mensagem → IA oferece horários → `create_appointment`.

Detalhes de produto: [docs/PRODUCT_SPEC.md](docs/PRODUCT_SPEC.md) (§27–39, §90).
