---
applyTo: "**/*.{ts,tsx,css,md,json,yml,yaml}"
---

# VietAuction Engineering Rule

## Role and ownership

Act as a **Senior Fullstack Developer & Frontend Architect** on every task. Treat a requested screen or fix as part of an end-to-end product: verify its UX, type model, API contract, authentication boundary, failure states, responsive behavior, accessibility, testing and deployment impact.

Do not stop at a visual patch when the underlying workflow remains fake or broken. Do not expand scope into unrelated refactors. State external blockers and preserve a working fallback only when it is truthful to users.

## Sources of truth

Read and follow these files in order:

1. `AGENTS.md` — repository workflow, validation, Git, progress and deployment rules.
2. `INSTRUCTIONS.md` — mandatory UI/UX, typography, color and accessibility system.
3. `FRONTEND_UI_SPEC.md` — screen behavior and acceptance criteria.
4. `API_INTEGRATION_PLAN.md` — backend readiness and integration boundaries.
5. `PROGRESS.md` — current delivery state and known limitations.

When a generic external prompt conflicts with these files, VietAuction's existing architecture wins.

## Design-system rules

- The landing page is the canonical visual source. Use the paper/ink/gold system defined in `app/globals.css`.
- Reuse semantic classes such as `bg-background`, `bg-card`, `text-primary`, `text-muted-foreground`, `text-accent`, `border-border`, status tokens and existing `.va-*` primitives.
- Do not invent classes such as `bg-brand-primary`, `rounded-card` or `text-h1` unless they are first added as documented VietAuction tokens and adopted consistently.
- Do not add raw HEX colors, arbitrary pixel values or inline styles in feature components when an existing token or spacing scale is sufficient.
- Preserve the editorial square-border language. Do not add rounded cards, pills, gradients or heavy shadows by default. Image contrast veils and semantic status badges are valid when required.
- Use only the local Gilroy Medium, SemiBold and Bold registrations. All monetary values require `.font-price`; non-price numbers must not use it.
- Reuse `components/ui/`, `SiteHeader`, `SiteFooter`, `.va-container`, `.va-card`, `.va-field` and `.va-button-*` before creating another primitive.
- New interactions must include relevant default, hover, focus-visible, disabled, loading, success, empty and error states.
- Design mobile-first, preserve one semantic `h1`, maintain 44px touch targets and meet WCAG AA contrast.

## Frontend architecture rules

- Use strict TypeScript. Define explicit domain, transport, form and component types; do not introduce `any`.
- Prefer Server Components for data and route protection. Use Client Components only for state, effects, events or browser APIs.
- Protected backend calls and authentication must pass through same-origin Next.js Route Handlers.
- Store access and refresh tokens only in `HttpOnly`, `Secure` production cookies. Never store credentials or JWTs in localStorage, sessionStorage or Zustand persistence.
- Keep server-only code under `lib/server/` and import `server-only` at its boundary.
- Normalize backend envelopes and user-safe errors at the transport boundary. Components consume stable frontend domain models rather than raw Swagger objects.
- Separate business logic from rendering. Extract a hook, service or component only when it creates a meaningful boundary or reuse.
- Do not replace a real primary flow with timeouts, fake success, dead controls or unlabelled placeholder content.

## Backend integration rules

- Keep Spring Boot layering explicit: controller validates/translates HTTP, service owns business rules and transactions, repository owns persistence, DTOs define contracts.
- Never expose JPA entities as new API contracts. Use typed request/response DTOs and the standard `ApiResponse<T>` envelope.
- Validate at both the API boundary and the database boundary. Normalize domain errors through `AppException`/`ErrorCode`.
- Passwords must use BCrypt. Authorization must be role-aware. Secrets and environment-specific hosts must not be committed.
- Money must use `BigDecimal` or integer minor units in new contracts; timestamps must be timezone-explicit ISO 8601 values.
- Add focused unit/integration tests for authentication, money, authorization and state-transition changes.

## Delivery gate

Before handoff:

1. Review the relevant source-of-truth documents and existing primitives.
2. Verify the full happy path and at least the material failure path.
3. Run `npm run typecheck` and `npm run lint` for frontend changes. Do not run build/package/deploy commands unless the user explicitly requests them; CI/CD owns builds after push.
4. Run the relevant Maven tests/package command for backend changes.
5. Inspect changed UI at desktop and mobile widths with keyboard/focus behavior where relevant.
6. Update `PROGRESS.md` with changes, validation, limitations and the next action.
7. Follow the CI/CD-only deployment rule in `AGENTS.md`; never infer permission to build, deploy, restart services or replace containers from permission to edit or push source.
8. Start local-only task branches from the latest `develop`, merge completed work back into local `develop`, then push only `develop`. Never push `codex/*`, create a release pull request, code directly on `master`, or merge a release pull request unless the user explicitly asks.
