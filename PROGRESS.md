# VietAuction Frontend Progress

This file tracks implementation status and completed work for the VietAuction frontend. Update it before handing off every repository task, following the rules in `AGENTS.md`.

Last updated: 2026-10-10

## Status legend

- `Planned`: scope agreed, implementation has not started.
- `In progress`: a usable foundation exists, but required states or acceptance criteria remain.
- `Complete`: implementation and required validation have passed.
- `Blocked`: progress requires a product decision, external dependency, or unavailable resource.

## Delivery milestones

| Phase | Status | Completed | Remaining |
| --- | --- | --- | --- |
| P0 — Foundation and shared shell | In progress | Canonical routes, shared header/footer, Gilroy typography, design tokens, button baseline, typed auction fixtures, not-found page, legacy redirects | Repository adapters, shared form/state components, global loading/error/session/offline states, signed-in header |
| P1 — Public discovery | In progress | Landing page, auction list, basic filters/sort/pagination, dynamic detail, About, Contact, legal pages | Advanced and category filters, removable chips, list loading/error states, detail lightbox, bid preview, sold/unsold/unavailable states, About FAQ and buyer/seller processes |
| P2 — Participation | In progress | Registration form with three consents and mock payment method, live room with confirmation and accepted/rejected bids | Eligibility states, already-registered/closed states, final registration confirmation, connecting/outbid/paused/ended live states, long bid history |
| P3 — Authentication and account | In progress | Login, registration, forgot/reset password, activation, shared account layout, profile, security, auctions, transactions and submitted assets | Invalid/expired token states, signed-in session UI, full validation, account loading/empty/error fixtures, search/filter/pagination, transaction and asset actions |
| P4 — Seller journey | In progress | Four-step seller wizard, per-step validation, local draft, image preview, review and success | Supporting documents, image reorder, manual cover selection, complete category fields, submission failure, object URL cleanup, richer asset-tracking actions |
| P5 — Assets and hardening | Planned | Local page artwork, responsive baseline, typecheck/lint/build baseline | Category-specific production imagery, complete galleries, organizer marks, accessibility/focus audit, reduced motion, metadata/Open Graph, Lighthouse and E2E coverage |

## Task log

### 2026-10-10 — Configure mandatory progress tracking

- Status: Complete.
- Changes:
  - Added this progress tracker with milestone status and remaining work.
  - Added mandatory progress-update rules to `AGENTS.md`.
  - Required progress updates to be included in the same commit as their task.
- Validation:
  - Documentation structure reviewed.
  - Repository diff checked before commit.
- Remaining limitations:
  - Milestones remain intentionally marked `In progress` until all states and acceptance criteria in `FRONTEND_UI_SPEC.md` pass.
- Next action:
  - Begin P0 foundation completion: mock repositories, shared state components, form validation foundation and global route states.

### 2026-10-10 — Build frontend UI foundation from the specification

- Status: In progress.
- Changes:
  - Added canonical public, authentication, auction, account, seller and legal routes.
  - Added shared header/footer, auction components, typed auction fixtures and local UI simulations.
  - Applied the landing-page paper/ink/gold visual system and self-hosted Gilroy typography across the project.
  - Replaced legacy pages with redirects to canonical routes.
  - Added high-resolution login artwork and local page assets.
- Validation:
  - `npm run typecheck`: passed.
  - `npm run lint`: passed with two retained warnings in `configs/api.config.ts` and `stores/auth.store.ts`.
  - `npm run build`: passed with 39 generated routes.
  - Core routes and responsive desktop/mobile flows were inspected in the browser.
- Remaining limitations:
  - Advanced filters, full screen-state coverage, account workflows, asset coverage and accessibility hardening remain incomplete.
- Next action:
  - Follow the milestone order above, starting with P0 foundation completion.

### 2026-10-10 — Correct shared footer styling

- Status: Complete.
- Changes:
  - Corrected the shared footer class composition so internal pages receive the landing-page dark background, gold accents and high-contrast text.
- Validation:
  - `npm run typecheck`: passed.
  - `npm run lint`: passed with the same two retained warnings.
  - Footer inspected on the auction list preview.
- Remaining limitations:
  - None specific to the footer color correction.
- Next action:
  - Continue P0 foundation completion.

## Entry template

Copy this section for future tasks:

```md
### YYYY-MM-DD — Task title

- Status: Planned | In progress | Complete | Blocked.
- Changes:
  - Material change.
- Validation:
  - Command or manual check and result.
- Remaining limitations:
  - Known limitation or `None`.
- Next action:
  - Recommended next task.
```
