# Security

## Secrets

Nunca colocar no GitHub:

- Senhas, API keys, tokens, secrets
- Chaves privadas, credenciais de banco
- Credenciais Brevo / WhatsApp / gateway / IA

Usar: Environment Variables, GitHub Secrets, Secret Manager.

Apenas [.env.example](.env.example) no repositório, sem valores reais.

## Autorização

- Isolamento rigoroso entre tenants
- Revisar impacto de authorization em cada PR sensível

## CI

PRs devem passar por checks de segurança quando os jobs existirem. Falha crítica bloqueia merge.

## Dados

- Sem dados reais de produção em testes
- Backups de dados dos clientes independentes do GitHub
