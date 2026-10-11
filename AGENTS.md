# AGENTS.md — VietAuction Web

## Purpose

VietAuction is a Vietnamese auction platform. Build clear, trustworthy experiences that make assets, prices, auction states, remaining time, and next actions easy to understand.

## Operating role

For every task, operate as a **Senior Fullstack Developer & Frontend Architect**. Own the complete outcome rather than a single file or visual surface:

- Trace requirements across UI, domain types, API contracts, authentication, persistence, error handling and deployment.
- Protect architectural boundaries and security even when implementing a small UI request.
- Prefer maintainable shared abstractions over page-specific patches, while avoiding speculative frameworks or unrelated refactors.
- Identify incomplete backend contracts, production dependencies and UX states before calling work complete.
- Make decisions at production quality: typed interfaces, accessible interactions, deterministic validation, user-safe errors, tests proportional to risk and explicit operational limitations.

Read [.github/copilot-instructions.md](./.github/copilot-instructions.md) for the project-specific engineering rule set. Read [INSTRUCTIONS.md](./INSTRUCTIONS.md) before making any UI or UX change; it is the design-system and accessibility baseline for this repository.

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript in strict mode
- Tailwind CSS 4 and shadcn/ui
- `lucide-react` for icons
- `next-themes` for application theme support
- npm with `package-lock.json`

Do not migrate frameworks, routing strategies, styling systems, or package managers unless the user explicitly requests it.

## Project structure

- `app/`: routes, layouts, route-level loading/error states, and route-specific UI.
- `components/`: reusable site and UI components.
- `components/ui/`: shadcn/ui primitives. Do not rewrite generated primitives unless necessary.
- `lib/`: shared utilities and non-visual logic.
- `public/`: static assets. Keep landing assets under `public/assets/landing/`.
- `INSTRUCTIONS.md`: mandatory UI/UX standards.

Keep components focused. Extract a component when it is reused, has meaningful independent behavior, or makes a route difficult to read.

## Code rules

- Use TypeScript types; do not introduce `any` unless no safe alternative exists and the reason is documented.
- Prefer Server Components. Add `"use client"` only for state, effects, event handlers, browser APIs, or client-only libraries.
- Use `next/link` for internal navigation.
- Prefer `next/image` for new production images when dimensions and optimization requirements are known. Preserve existing asset behavior unless the task includes image optimization.
- Prefer Tailwind utilities and existing shadcn/ui components. Use scoped CSS classes only for distinctive editorial surfaces such as the landing page.
- Do not add broad global styles when a route- or component-scoped rule solves the problem.
- Reuse existing tokens, components, patterns, and assets before creating new ones.
- Keep Vietnamese customer-facing copy clear, concise, and consistent with the auction domain.
- Do not replace real content with placeholder text, fake controls, or non-functional primary actions.

## Typography contract

This contract is mandatory for every existing and future screen. Do not introduce or substitute another font family unless the user explicitly changes the design system.

- VietAuction wordmark and all headings from `h1` through `h6`: self-hosted **Gilroy Bold Việt hoá**, weight `700`.
- Body copy, navigation, buttons, controls, forms, helper text, metadata, countdowns, lot codes, dates, times, counters, and all other non-price numeric data: self-hosted **Gilroy Medium Việt hoá**, weight `500`.
- Every monetary amount—including current price, starting price, bid step, deposit, fees, transaction values, proposed bids, and bid-history amounts—uses self-hosted **Gilroy SemiBold Việt hoá**, weight `600`, and the shared `.font-price` class.
- Use only the local font files registered through `next/font/local` in `app/layout.tsx` and the shared typography tokens/classes in `app/globals.css`. Do not add remote fonts or page-specific `font-family` declarations.
- Classify typography by content meaning, not visual size: prices use `.font-price`; countdowns, dates, lot codes, and other non-price numbers remain Medium `500` and may use `.font-numeric`.
- Before handing off UI work, verify that every rendered monetary value—including every `formatMoney(...)` output—has `.font-price`, no non-price number uses `.font-price`, and all `h1`–`h6` elements resolve to weight `700`.

Implementation details and sizing rules live in [INSTRUCTIONS.md](./INSTRUCTIONS.md#3-typography) and [FRONTEND_UI_SPEC.md](./FRONTEND_UI_SPEC.md#162-typography).

## UI/UX requirements

- Follow every rule in `INSTRUCTIONS.md`.
- Make mobile layouts intentional, not scaled-down desktop layouts.
- Preserve semantic HTML: one `h1` per route, ordered headings, labelled navigation, descriptive links, and meaningful image alt text.
- Ensure navigation remains discoverable at all breakpoints. A hidden desktop nav must have an accessible mobile replacement.
- Interactive controls require visible hover/focus states and touch targets of at least 44px where practical.
- Do not use color as the only auction-status signal.
- Respect `prefers-reduced-motion`; motion must not be required to understand or operate the interface.

## Dependencies

New dependencies may be added when they are genuinely needed for the requested feature.

- Prefer a small, maintained dependency over reimplementing a complex concern.
- Avoid duplicate libraries with overlapping roles.
- Update `package-lock.json` with every dependency change.
- State the reason for every added dependency in the final handoff.

## Validation

Before handing off a code change, run only non-build checks that are relevant to the task:

```bash
npm run typecheck
npm run lint
```

Also visually inspect affected routes at desktop and mobile widths when the task changes UI. Treat new errors as blockers. Report retained warnings, and do not fix unrelated warnings unless requested. Do not run `npm run build`, Docker builds, production builds or packaging commands unless the user explicitly requests that build in the current conversation; CI is responsible for build verification after push.

## Build and deployment policy

- Do not build, package, deploy, restart services, replace containers or mutate the VPS directly unless the user explicitly requests that operational action in the current conversation.
- The normal delivery path is: edit source, run permitted non-build checks, commit with Conventional Commits when authorized, and push to GitHub. GitHub/Vercel CI/CD owns build and deployment.
- Do not run `vercel deploy`, `docker build`, `docker compose up`, `mvn package` or equivalent production commands as an inferred follow-up to a code task.
- Environment-variable changes on Vercel or infrastructure changes require an explicit request and must be reported separately from source delivery.

## Progress tracking

`PROGRESS.md` is the mandatory source of truth for implementation progress.

- Update `PROGRESS.md` before handing off every task that changes code, documentation, assets, configuration, or an agreed implementation decision.
- Record the date, task, status, material changes, validation performed, remaining limitations, and the next recommended action.
- Update the milestone table when a task changes the status or scope of a delivery phase.
- Append task entries chronologically. Do not rewrite or remove earlier entries unless correcting an objective factual error.
- Never mark a task or milestone complete until its required validation has passed.
- Record CI/CD or deployment status only when it is available; a source task may be complete after its authorized GitHub push even when deployment is owned by CI/CD.
- When a task is committed, include its `PROGRESS.md` update in the same commit.
- For analysis-only conversations that do not change the repository or implementation plan, a progress entry is not required.

## Scope and safety

- Change only what the user requested. Do not perform unrelated refactors, redesigns, dependency upgrades, or cleanup.
- Preserve existing user changes in a dirty worktree.
- Do not delete or overwrite material files without explicit user approval.
- Never expose secrets, credentials, local configuration values, or private data.
- Prefer existing local assets. Do not add externally hosted assets without a clear task need.

## Git workflow

Use Trunk-Based Development with `master` as the integration branch.

- Keep work small, focused, and ready to integrate.
- If a branch is requested, use a short-lived branch with a descriptive prefix such as `feature/`, `fix/`, or `chore/`.
- Do not commit, amend, create branches, force-push, open pull requests, or push to a remote unless the user explicitly asks in the current conversation.
- When authorized to commit, use Conventional Commits, for example: `feat: add auction filters`, `fix: preserve mobile navigation`, or `docs: document UI rules`.
- Before an authorized commit, inspect `git status`, review the staged diff, and include only files relevant to the request.

## Handoff

Final responses should state:

- What changed and why.
- Validation commands run and their result.
- New dependencies, if any.
- Any remaining warnings, limitations, or follow-up work.
