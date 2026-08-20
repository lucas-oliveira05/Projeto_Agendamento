# PRODUCT_SPEC — Prompt mestre SaaS multi-tenant para barbearias

Fonte oficial de produto no GitHub. Versão consolidada (§1–97) com recuperação automática como diferencial central.

## 1. Papel da IA de desenvolvimento

Atuar como engenheiro sênior, arquiteto SaaS multi-tenant, UX, CRM, agendamento, WhatsApp, IA aplicada, PostgreSQL, APIs REST, segurança e produto B2B.

Missão: projetar e desenvolver SaaS completo para barbearias (inspiração conceitual Booksy, arquitetura e identidade próprias) com foco em:

**AGENDAMENTO + CRM + VENDAS + PACOTES + FILA DE ESPERA + AUTOMAÇÃO + RECUPERAÇÃO DE CLIENTES + FUTURO AGENTE DE IA.**

Multi-tenant comercial desde o início.

## 2. Visão

Não é só agenda — é o **"funcionário digital da barbearia"**.

Tagline: **"Você corta. O sistema cuida do resto."**

O sistema cuida de: agendamentos, confirmações, lembretes, leads, clientes, recuperação, pacotes, fila, pós-venda, relacionamento, vendas, automação, comunicação e, futuramente, atendimento por IA.

## 3. Dores

1. Barbeiro ocupa o dia atendendo
2. Não responde todos os leads
3. Pedidos de horário no WhatsApp esquecidos
4. Leads sem follow-up
5. Clientes antigos param de voltar
6. Cancelamentos furam a agenda
7. Clientes esquecem horário
8. No-shows
9. Não sabe serviços que mais vendem
10. Não sabe faturamento
11. Dono não acompanha cada barbeiro
12. Remarcação difícil
13. Horários lotados = perda
14. Pacotes manuais
15. Sem tempo para pós-venda
16. Sem tempo para recuperar clientes
17. Base de clientes subutilizada

## 4. Proposta de valor

**"Transforme sua barbearia em uma máquina de agendamentos e clientes recorrentes."**

Ciclo: CAPTAR → RESPONDER → CONVERTER → AGENDAR → CONFIRMAR → ATENDER → VENDER → FIDELIZAR → RECUPERAR → REAGENDAR

## 5. Modelo SaaS

Assinatura mensal. Cada barbearia = **TENANT** com isolamento absoluto de dados.

## 6. Tipos de usuário

- **SUPER ADMIN** — plataforma (barbearias, assinaturas, MRR, churn, logs, métricas)
- **OWNER** — barbeiros, serviços, produtos, pacotes, clientes, leads, faturamento, horários, automações, fila, campanhas, integrações
- **BARBEIRO** — agenda própria, CRUD agendamento, venda, clientes, indicadores, WhatsApp, bloquear/encaixar
- **CLIENTE** — conta, escolher barbearia/barbeiro/serviço/pacote/horário, agendar, cancelar, remarcar, waitlist, histórico, pacotes, notificações

## 7–8. Dashboards

**Dono:** Hoje / Semana / Mês (faturamento, atendimentos, ocupação, no-shows, ticket, ranking barbeiros/serviços).

**Barbeiro:** faturamento (dia/semana/mês), cortes, ticket, serviços/produtos, clientes novos/recorrentes, agenda, ocupação.

## 9. Agenda

Visões dia/semana/mês. Campos: cliente, telefone, barbeiro, serviço, pacote, data, horário, duração, valor, status.

Status: Pendente, Aguardando confirmação, Confirmado, Em atendimento, Concluído, Cancelado, No-show, Reagendado.

## 10. Agendamento online

Página pública `/barbearia/[slug]`: serviço → barbeiro → data → horários → dados → confirmação. Aparece na agenda do barbeiro.

## 11–12. Serviços e produtos

Serviços: nome, descrição, preço, duração, barbeiros habilitados, status.

Produtos: nome, SKU, preço, custo, estoque, estoque mínimo, status.

## 13. Pacotes

Ex.: 4 cortes / premium 8 cortes. Campos: nome, quantidade, serviços, valor, validade. Controle automático de restantes. Cliente vê pacote, usados, restantes, validade.

## 14. Fila de espera

Horário lotado → entrar na fila. Cancelamento → detectar vaga → prioridade → notificar → reserva temporária → confirmar.

## 15. CRM

Status: Novo Lead → Contatado → Interessado → Agendamento pendente → Agendado → Cliente → Cliente recorrente → Perdido.

Dados: nome, telefone, WhatsApp, e-mail, origem, últimos contatos/cortes, próximo agendamento, histórico, valor gasto, serviços.

## 16–31. Recuperação automática (diferencial)

Funcionalidade estratégica: identificar quem deixa de retornar e recuperar.

- `average_visit_interval` a partir do histórico
- `estimated_next_visit`
- Segmentos: recorrente, próximo do retorno, atrasado, inativo, perdido
- Níveis: lembrete → atrasado → reativação → win-back
- Frequency cap + `last_recovery_message_at` + config OWNER
- Personalização (nome, barbeiro/serviço favorito, pacote, horários)
- Previsões por serviço (`next_cut_estimate`, `next_beard_estimate`) e por barbeiro/horário preferido
- Futuro: conversa com IA até agendar
- `recovery_status = postponed` se "agora não"
- Campanhas por filtros (30/60/90 dias, valor, sem pacote, one-shot)
- Métricas: elegíveis, enviadas, respostas, agendamentos, **receita recuperada**, taxa
- ROI das automações no dashboard do dono

## 32–34. WhatsApp, Brevo, eventos

- Deep-link Abrir WhatsApp; arquitetura pronta para WhatsApp Business API
- Brevo via `NotificationProvider` (confirmação, lembrete, fila, pós-venda, recovery, campanhas)
- Event → Trigger → Action (`appointment_*`, `customer_due_for_return`, `package_expiring`, …)

## 35–39. Agente de IA (futuro)

`AIService`, `AIProvider`, `AIToolRegistry`, `AIConversationService`, `AIActionService`.

Tools: slots, create/cancel/reschedule appointment, customer/history/package, waitlist, services, barbers, send_confirmation.

Handoff humano. Sem SQL/DB direto/cross-tenant. Audit completo.

## 40–45. Pós-venda, avaliações, no-show, financeiro, KPIs, insights

Avaliação 1–5; no-show com receita perdida; pagamentos Pix/dinheiro/cartão; KPIs (receita, ticket, ocupação, retenção, churn, CAC, LTV, MRR, revenue recovered); insights automáticos.

## 46–50. Pacotes + recovery, upsell, indicação, fidelidade

Aviso último corte do pacote; cliente ideal para pacote; recovery+upsell; arquitetura de indicação e fidelidade.

## 51–53. QR Code, mobile UX, princípio UX

QR → página de agendamento. Dashboard mobile do barbeiro. **"Se o barbeiro precisa pensar demais, a UI está errada."**

## 54–56. Assinatura SaaS e pagamentos

Planos STARTER / PROFESSIONAL / PREMIUM. `PaymentProvider` (não acoplar a um gateway). Status ACTIVE / PAST_DUE / SUSPENDED / CANCELED. Retenção de dados.

## 57. Entidades (PostgreSQL)

users, tenants, tenant_users, barbers, customers, leads, services, products, product_sales, appointments, appointment_status_history, packages, package_purchases, package_usages, waitlists, notifications, notification_templates, automation_rules, payments, subscriptions, reviews, audit_logs, customer_behavior, customer_return_predictions, recovery_campaigns, recovery_messages, recovery_events, whatsapp_conversations, ai_conversations, ai_actions.

## 58–62. Customer Intelligence

Frequência, ticket, intervalo, favoritos, probabilidade de retorno, health score 0–100, RFM, recovery inteligente por comportamento individual, anti-spam (cap, horário, opt-out, consentimento).

## 63–73. API, arquitetura, filas, segurança, LGPD, concorrência, observabilidade, backup, escala, mobile

REST OpenAPI. Clean Architecture / SOLID / DI / events. Redis+BullMQ. JWT, RBAC, rate limit, tenant isolation. LGPD. Lock/constraint de horário. Logs, health, metrics. Backups. Escala 100→10k tenants. Android primeiro, iOS depois.

## 74–77. MVPs

### MVP 1
Cadastro, login, multi-tenant, barbearias, barbeiros, clientes, serviços, agenda, agendamento online, dashboard, WhatsApp link, confirmação/lembretes Brevo, pacotes, fila, financeiro básico.

### MVP 2
CRM, leads, Customer Intelligence, recovery, segmentação, campanhas, avaliações, produtos, estoque, fidelidade.

### MVP 3
WhatsApp Business API, agente IA, atendimento/agendamento automático, recovery inteligente, upsell, insights.

### MVP 4
Android, push, indicação, marketplace, white label, domínio custom, mais integrações.

## 78–79. Métricas

**REVENUE RECOVERED** — métrica-estrela do produto.

SUPER ADMIN: MRR, ARR, churn, CAC, LTV, ARPU, tenants, uso, agendamentos, mensagens, revenue recovered agregado.

## 80–82. Testes, DevOps, docs

Unit/integration/API/E2E (multi-tenant, conflito horário, pacotes, jobs, recovery, IA). Docker, CI/CD, envs, migrations. Docs na raiz do repo.

## 83–91. Estratégia e fases de implementação

Analisar → arquitetura → banco → API → UX → segurança → multi-tenant → backend → frontend → integrações → testes → deploy.

Fases: Arquitetura → UX → MVP → Integrações → Automações → Intelligence → IA → Android.

## 92. Regras críticas

Sem código desnecessário; sem acoplar providers ao domínio; sem secrets no frontend; sem cross-tenant; sem validação crítica só no UI; sem double-booking; IA sem DB direto; automações com frequency cap e consentimento.

## 93. Módulos

CORE · BOOKING · CRM · SALES · AUTOMATION · CUSTOMER INTELLIGENCE · COMMUNICATION · AI · ANALYTICS · BILLING

## 94–97. Diferencial e objetivo

Posicionar como sistema que **nunca esquece um cliente** — Agenda + CRM + Recovery + IA.

Ciclo: lead → CRM → resposta → agenda → confirmação → atendimento → comportamento → previsão → recovery → reagendamento.

Objetivo: barbeiro foca em cortar; a plataforma opera o resto como produto SaaS comercial real (segurança, escala, UX, modularidade, observabilidade).

---

Ver também: [ARCHITECTURE.md](../ARCHITECTURE.md), [DATABASE.md](../DATABASE.md), [API.md](../API.md).
