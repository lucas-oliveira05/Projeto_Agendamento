# Database

## Princípios

- Banco de **produção** hospedado externamente
- Preferência: **PostgreSQL**
- Não usar SQLite local como banco principal da aplicação
- Toda alteração de estrutura gera **migration** versionada
- Nunca usar dados reais de produção em testes

## Layout planejado

```text
packages/database/
├── migrations/
├── seeds/
└── schema/
```

## Environments

| Ambiente | Uso |
|----------|-----|
| development | Dev local / CI |
| staging | Homologação |
| production | Clientes reais |

## Backups

Código no GitHub ≠ backup de dados. Infra deve ter backup independente de:

- Banco de dados
- Arquivos / uploads
- Configurações críticas
