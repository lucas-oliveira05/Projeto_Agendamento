# Deployment

## Ambientes

| Ambiente | Papel |
|----------|--------|
| development | Desenvolvimento |
| staging | Homologação |
| production | Clientes reais |

## Fluxo recomendado

```text
GitHub
  → Pull Request
  → Tests (CI)
  → Merge
  → Deploy Staging
  → Validation
  → Production
```

Deploy automatizado sempre que possível (CI/CD).

## Regras

- Não deployar em production sem CI verde
- Secrets só via ambiente / secret manager
- Migrations aplicadas de forma controlada por ambiente
