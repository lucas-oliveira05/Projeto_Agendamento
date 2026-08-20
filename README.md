# Projeto Agendamento

SaaS de agendamento multi-tenant (barbearias e negócios similares): agenda, clientes, pacotes, automações e recuperações — com o **GitHub como fonte oficial do código**.

## Problema que resolve

Negócios de serviço perdem tempo e receita com agendas manuais, faltas, clientes inativos e falta de follow-up. Este produto centraliza agendamento online, CRM leve, pacotes, fila de espera e notificações em um sistema multi-tenant.

## Principais funcionalidades (roadmap)

Ver seção [Roadmap](#roadmap). O núcleo planejado inclui autenticação multi-tenant, agenda, agendamento online, CRM, pacotes, waitlist, Brevo, recuperação automática, WhatsApp, Customer Intelligence, agente de IA e app Android.

## Arquitetura

Monorepo com apps e packages compartilhados. Detalhes em [ARCHITECTURE.md](ARCHITECTURE.md).

```text
Projeto_Agendamento/
├── apps/          # web, api, mobile
├── packages/      # shared, database, ui, config
├── docs/
├── tests/
├── infrastructure/
└── .github/
```

Stack tecnológica: **a definir** (será travada quando o prompt de produto 1–97 for aplicado). Preferência de banco: **PostgreSQL** hospedado (não SQLite como banco principal).

## Source of truth

- Repositório: https://github.com/lucas-oliveira05/Projeto_Agendamento
- Fluxo: **GitHub → desenvolvimento → commit → push → GitHub**
- Ambiente local é só clone temporário para execução e testes
- Continuidade: README, Issues, PRs, CHANGELOG, docs — não depender da memória da IA

## Como executar

1. Clone o repositório (não trate a pasta local como armazenamento permanente):

```bash
git clone https://github.com/lucas-oliveira05/Projeto_Agendamento.git
cd Projeto_Agendamento
```

2. Copie variáveis de ambiente:

```bash
cp .env.example .env
```

3. Preencha `.env` localmente (nunca commitar valores reais).

4. Instalação e scripts de app serão documentados aqui quando a stack for definida.

## Variáveis de ambiente

Ver [.env.example](.env.example). Secrets reais ficam em Environment Variables / GitHub Secrets / Secret Manager — nunca no Git.

## Como testar

CI via GitHub Actions (`.github/workflows/ci.yml`). Comandos locais serão adicionados com a stack.

## Deploy

Ambientes: **development**, **staging**, **production**. Ver [DEPLOYMENT.md](DEPLOYMENT.md). Deploy automatizado após PR + testes + merge, sempre que possível.

## Branches e PRs

- `main` — versão estável
- `develop` — integração
- `feature/*` — funcionalidades

Fluxo: Issue → branch → implementação → testes → PR → CI → review → merge. Detalhes em [CONTRIBUTING.md](CONTRIBUTING.md) e [AGENTS.md](AGENTS.md).

## Documentação

| Documento | Conteúdo |
|-----------|----------|
| [ARCHITECTURE.md](ARCHITECTURE.md) | Arquitetura |
| [DATABASE.md](DATABASE.md) | Banco e migrations |
| [API.md](API.md) | API |
| [SECURITY.md](SECURITY.md) | Segurança |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Deploy e ambientes |
| [AI.md](AI.md) | Agente / IA |
| [AUTOMATIONS.md](AUTOMATIONS.md) | Automações |
| [INTEGRATIONS.md](INTEGRATIONS.md) | Integrações |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Como contribuir |
| [CHANGELOG.md](CHANGELOG.md) | Histórico de versões |
| [AGENTS.md](AGENTS.md) | Regras para IA |

## Roadmap

- [x] Arquitetura inicial (scaffold)
- [ ] Autenticação
- [ ] Multi-tenancy
- [ ] Agenda
- [ ] Agendamento online
- [ ] CRM
- [ ] Pacotes
- [ ] Fila de espera
- [ ] Brevo
- [ ] Recuperação automática
- [ ] WhatsApp
- [ ] Customer Intelligence
- [ ] Agente IA
- [ ] Android

Atualizar este checklist conforme o desenvolvimento avançar.

## Licença

[MIT](LICENSE)
