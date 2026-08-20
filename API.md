# API

Documentação da API será preenchida quando o app `apps/api` for implementado.

## Planejado

- Autenticação multi-tenant
- Recursos: agenda, clientes, serviços, pacotes, waitlist, recovery
- Versionamento e contratos estáveis
- Autorização por tenant em todas as rotas sensíveis

## Convenções (a reforçar na implementação)

- Erros previsíveis e tipados
- Validação de entrada
- Sem secrets em logs
- Idempotência onde houver risco de retry (agendamentos, pagamentos)
