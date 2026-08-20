# Contributing

## Fluxo

1. Abrir ou usar uma Issue
2. Branch a partir de `develop`: `feature/<nome>`, `fix/<nome>`, etc.
3. Implementar com commits convencionais
4. Rodar lint / testes / build quando disponíveis
5. Abrir Pull Request para `develop`
6. CI verde + review → merge
7. Promoção estável: `develop` → `main` via PR

Não desenvolver tudo diretamente em `main`.

## Commits

Exemplos:

```text
feat: create multi-tenant authentication
fix: prevent duplicate appointments
docs: update architecture documentation
```

Evitar: `update`, `changes`, `fix`, `teste`, `final`.

## Checklist do PR

- [ ] Testes
- [ ] Lint
- [ ] Build
- [ ] Segurança / auth por tenant
- [ ] Migrations (se houver)
- [ ] Impacto em outras features
- [ ] Docs atualizadas se necessário

## Issues

Labels: `bug`, `feature`, `enhancement`, `security`, `infrastructure`, `documentation`.

Milestones: MVP 1–4 (ver Issues / Projects no GitHub).
