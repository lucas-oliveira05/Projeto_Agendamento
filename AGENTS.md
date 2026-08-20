# AGENTS.md — regras para IA de desenvolvimento

O GitHub é a **fonte oficial e central** deste projeto. Continuidade deve ser possível só com README, Issues, PRs, CHANGELOG, roadmap e docs — sem depender da memória da sessão.

## Antes de modificar

1. Ler README e ARCHITECTURE
2. Verificar Issues, branch atual e alterações pendentes
3. Entender a estrutura e dependências
4. Não sobrescrever código sem analisar impacto
5. **Nunca** apagar ou substituir o projeto inteiro para implementar uma feature — trabalhar incrementalmente

## Nova funcionalidade

1. Criar ou identificar Issue
2. Criar branch `feature/...` (não desenvolver tudo em `main`)
3. Implementar + testes
4. Rodar lint / typecheck / build quando existirem
5. Atualizar documentação e CHANGELOG se relevante
6. Commit convencional (`feat:`, `fix:`, `fix:`, `refactor:`, `test:`, `docs:`)
7. Push e Pull Request
8. Merge só após CI verde e revisão

## Commits

Usar mensagens claras. Evitar: `update`, `changes`, `fix`, `teste`, `final`, `final2`.

## Secrets

Nunca commitar senhas, API keys, tokens, `.env` com valores reais. Usar `.env.example` vazio + GitHub Secrets / Secret Manager.

## Banco

Preferir PostgreSQL hospedado com migrations versionadas. Não usar SQLite local como banco principal de produção.
