# VietAuction Frontend Progress

This file tracks implementation status and completed work for the VietAuction frontend. Update it before handing off every repository task, following the rules in `AGENTS.md`.

Last updated: 2026-10-11

## Current verified state

- Delivery: source changes are delivered through `codex/*` → `develop`, then a `develop` → `master` pull request. The Vercel project was removed at the product owner's request; this repository does not currently have an authorized hosting/deployment target.
- Catalogue: landing, `/auctions`, and `/auctions/[auctionId]` are wired to the typed public catalogue adapter. The active cloud `DB_AUCTION` development dataset was re-seeded as utf8mb4 with 12 multi-asset catalogue records; browser/API rendering verification remains pending.
- User flows: login, registration, account profile and logout have frontend/API integration source. Password recovery, activation, seller submission, registration payment and live bidding still include UI-only or unavailable states until their backend contracts exist.
- UI baseline: shared tokens, responsive shell, accessible state components, route loading/error states and core metadata are implemented in source. Automated validation and browser review for the latest source are pending because the current delivery instruction is source-only (no local build/deploy).

## Status legend

- `Planned`: scope agreed, implementation has not started.
- `In progress`: a usable foundation exists, but required states or acceptance criteria remain.
- `Complete`: implementation and required validation have passed.
- `Blocked`: progress requires a product decision, external dependency, or unavailable resource.

## Delivery milestones

| Phase                            | Status      | Completed                                                                                                                                                                                                                                                                                    | Remaining                                                                                                                                                                     |
| -------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P0 — Foundation and shared shell | In progress | Canonical routes, shared header/footer, Gilroy tokens, button/form baseline, not-found, global and catalogue loading states, recoverable route error state, server-only API client, auth BFF and HttpOnly session cookies | Shared offline/retry policy, refresh-token rotation, latest source validation |
| P1 — Public discovery            | In progress | Landing, list and dynamic detail consume the typed public catalogue API; list filters/sort/pagination use URL query state; About, Contact, legal metadata and responsive public shell | Advanced filters/chips, detail lightbox, bid preview, sold/unsold states, About FAQ and buyer/seller process content |
| P2 — Participation               | In progress | Registration and live-room UI prototypes with explicit simulation/disabled states | Backend eligibility, registration, payment and live-bid contracts; closed/paused/outbid state data; durable bid history |
| P3 — Authentication and account  | In progress | Login/register/logout/profile integration source, server-protected account routes, noindex account/auth metadata, shared account layout | Verified deployed API configuration, refresh/activation/password APIs, invalid-token account states, account list filters/actions |
| P4 — Seller journey              | In progress | Responsive four-step local draft wizard, validation, image preview, review and success state | Submission API, documents, reorder/cover controls, category-specific fields, failure/retry flow, object URL cleanup |
| P5 — Assets and hardening        | In progress | Local page artwork, responsive breakpoints, focus/reduced-motion baseline, metadata/Open Graph defaults and accessibility state announcements | Category-specific production assets, full gallery/dossier content, accessibility/browser audit, Lighthouse and E2E coverage |

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

### 2026-10-10 — Require automatic Vercel production deployment

- Status: Complete.
- Changes:
  - Added standing authorization and a mandatory production-deployment workflow to `AGENTS.md`.
  - Required validation before deployment, deployment URL verification, progress logging and explicit blocker handling.
  - Kept Git commit/push authorization separate from deployment authorization.
- Validation:
  - Confirmed the repository is linked to the `vietauction-web` Vercel project.
  - Confirmed Vercel CLI `63.1.2` is available.
  - `git diff --check`: passed.
  - `vercel deploy --prod --yes`: passed; Vercel built all 39 routes and reported deployment `READY`.
  - Production URL: `https://vietauction-web-zeta.vercel.app`.
- Remaining limitations:
  - None.
- Next action:
  - Apply this validation, deployment and progress-recording workflow to every subsequent repository task.

### 2026-10-10 — Audit backend API and plan frontend integration

- Status: Complete.
- Changes:
  - Cloned and ran the Spring Boot backend with a workspace-local MySQL database.
  - Audited the runtime Swagger contract across 45 paths, 59 operations and 29 schemas.
  - Added `API_INTEGRATION_PLAN.md` with readiness findings, contract gaps, screen mappings, architecture and phased delivery order.
- Validation:
  - Backend `./mvnw -DskipTests -Djava.version=17 package`: passed.
  - Backend `./mvnw -Djava.version=17 test`: passed; no test sources currently exist.
  - Swagger UI and `/v3/api-docs`: HTTP 200.
  - Public catalog, auth, error-envelope and CORS behavior inspected through live HTTP requests.
  - `git diff --check`: passed.
  - `vercel deploy --prod --yes`: passed; all 39 frontend routes built and deployment reported `READY`.
  - Production URL: `https://vietauction.vercel.app` (HTTP 200).
- Remaining limitations:
  - Backend authentication and most auction-domain endpoints remain placeholder implementations and cannot replace frontend mocks yet.
- Next action:
  - Begin the Phase 0 backend vertical slice: authentication plus typed, database-backed auction list/detail endpoints.

### 2026-10-11 — Pull and verify latest frontend and backend

- Status: Complete.
- Changes:
  - Fast-forwarded frontend `master` from `b44ec89` to `24f0b65`, adding the PM2 production ecosystem configuration.
  - Fast-forwarded backend `master` from `44e6376` to `19bbb13`, including the production deployment workflow, Java 21 Docker image, JWT error response changes and initial login implementation.
  - Updated `API_INTEGRATION_PLAN.md` to reflect the latest authentication and production-configuration findings.
  - Preserved all pre-existing uncommitted documentation and font files.
- Validation:
  - Frontend `npm run typecheck`: passed.
  - Frontend `npm run lint`: passed with the same two retained warnings.
  - Frontend `npm run build`: passed with 39 generated routes.
  - Backend `./mvnw -Djava.version=17 test`: passed; no test sources currently exist.
  - Backend `./mvnw -DskipTests -Djava.version=17 package`: passed with retained entity/mapper warnings.
  - Latest backend started against the workspace-local MySQL database; Swagger UI and OpenAPI JSON return HTTP 200.
  - Runtime catalog, invalid-login and production-CORS behavior inspected.
  - `git diff --check`: passed.
  - Initial unscoped Vercel deployment was rejected as unauthorized; the authenticated, project-scoped retry succeeded.
  - `vercel deploy --prod --yes --scope phuuthanh2003s-projects`: passed; all 39 routes built and deployment reported `READY`.
  - Production URL: `https://vietauction.vercel.app`.
- Remaining limitations:
  - Backend master still has no automated tests, most domain APIs remain placeholders, production CORS blocks the active Vercel domain and production configuration contains literal credentials.
- Next action:
  - Complete the backend authentication vertical slice and move production secrets to injected environment variables.

### 2026-10-11 — Connect login and profile to the backend

- Status: In progress.
- Changes:
  - Added `https://vietauction.vercel.app` to backend REST CORS and enabled CORS in the Spring Security filter chain.
  - Loaded the existing local `seedData.sql`, providing three banks and four deterministic user accounts.
  - Replaced the frontend mock login with same-origin Next.js auth Route Handlers and secure `HttpOnly` access/refresh cookies.
  - Added server-side account route protection, authenticated session lookup, backend-connected profile read/update and logout.
  - Removed localStorage token persistence and updated the shared header to show the authenticated account state.
  - Documented the server-only `API_BASE_URL` configuration in `.env-example`.
- Validation:
  - Backend `./mvnw -Djava.version=17 test`: passed; no test sources currently exist.
  - Backend `./mvnw -DskipTests -Djava.version=17 package`: passed with the retained entity/mapper warnings.
  - Production-origin CORS preflight: HTTP 200 with the expected allow-origin, methods, headers and credentials values.
  - Seeded backend login: HTTP 200; frontend login, session, profile update and logout BFF flow: HTTP 200; session after logout: HTTP 401.
  - Frontend `npm run typecheck`, `npm run lint` and `npm run build`: passed with no lint warnings; 43 routes generated.
  - Login and account profile inspected at desktop and mobile widths; no horizontal overflow found.
  - `vercel deploy --prod --yes --scope phuuthanh2003s-projects`: passed; deployment `dpl_CNBLsUkbppsywScyZvpReKaPc6hu` reported `READY` and was aliased to `https://vietauction.vercel.app`.
  - Production home and login routes return HTTP 200; unauthenticated session correctly returns HTTP 401.
- Remaining limitations:
  - The seed file contains banks and users only; auction/product APIs still have no data and remain placeholder implementations.
  - Registration, refresh token, activation and password service methods remain unimplemented in the backend.
  - Production auth cannot be enabled safely until the backend has a public HTTPS URL; the current VPS endpoint is HTTP-only and the old Railway endpoint returns 404.
  - Backend CORS changes are local and have not been committed, pushed or deployed.
- Next action:
  - Put the backend behind HTTPS, inject its URL as Vercel `API_BASE_URL`, then implement refresh-token rotation and typed auction list/detail endpoints with seeded auction data.

### 2026-10-11 — Establish project engineering rule and complete registration

- Status: In progress.
- Changes:
  - Added a project-specific `.github/copilot-instructions.md` rule derived from the supplied prompt while preserving VietAuction's actual paper/ink/gold, Gilroy, square-border and `.va-*` design system.
  - Updated `AGENTS.md` and `INSTRUCTIONS.md` so every task is approached as a Senior Fullstack Developer & Frontend Architect with end-to-end ownership.
  - Added backend-specific `AGENTS.md` guidance for Spring Boot contracts, security, transactions and tests.
  - Implemented backend registration with duplicate checks, BCrypt hashing, MEMBER/ACTIVE defaults, transactional user/token creation and typed validation.
  - Fixed login to accept either username or email.
  - Connected the frontend registration form to the backend through a same-origin BFF route and shared `HttpOnly` cookie handling.
  - Added automatic redirect from `/login` and `/register` to the account area when a valid session already exists.
  - Expanded registration UX to collect the backend-required identity and address fields with responsive validation and truthful error states.
- Validation:
  - Backend unit tests: three passed, covering successful registration, duplicate username and login by email.
  - Backend package: passed on Java 17 compatibility mode with the retained Token builder and ProductMapper warnings.
  - Live local flow: registration, immediate session, protected account access, logout and email login all returned HTTP 200; duplicate registration returned HTTP 400 with the expected message.
  - Login-to-account and authenticated `/login` redirect verified in the browser.
  - Registration inspected at desktop and mobile widths with one visible semantic `h1` and no horizontal overflow.
  - Frontend production deployment passed on Vercel (`dpl_CCGKqB4Y6H7P6hrspssrLxdTd3Kx`) and reached `READY` at `https://vietauction.vercel.app`.
  - Production home, login and registration routes each returned HTTP 200 after deployment.
- Remaining limitations:
  - Production authentication remains blocked on a public HTTPS backend URL and Vercel `API_BASE_URL` configuration.
  - Refresh token, activation, forgot/reset password and change-password services remain unimplemented in the backend.
  - Backend and frontend changes are local and have not been committed or pushed.
- Next action:
  - Add HTTPS for the backend, configure the Vercel server-only API URL, then implement refresh-token rotation and the remaining account-recovery services.

### 2026-10-11 — Configure backend HTTPS and move delivery to CI/CD

- Status: In progress.
- Changes:
  - Added Caddy on the VPS as a persistent reverse proxy for `api.103.140.249.73.sslip.io`, with automatic Let's Encrypt certificate management and HTTP-to-HTTPS redirection.
  - Added server-only `API_BASE_URL=https://api.103.140.249.73.sslip.io` to the linked Vercel project for Production and Preview.
  - Redeployed the frontend once so the new Vercel environment variable became active; this occurred before the user replaced the delivery policy.
  - Replaced automatic/manual build and deployment instructions with a source-first policy: edit, commit and push GitHub; CI/CD owns builds and deployments.
  - Added a backend refresh-token strategy covering one-time rotation, token-family reuse detection, hashed storage, multi-device sessions and BFF retry behavior.
- Validation:
  - DNS for `api.103.140.249.73.sslip.io` resolves to `103.140.249.73`.
  - HTTPS Swagger request returned HTTP 200 with successful TLS verification; HTTP returned a 308 redirect to HTTPS.
  - Vercel lists `API_BASE_URL` for both Production and Preview.
  - Vercel deployment `dpl_GwrtfvtydM9RdVTiAKdxqzwz9eLb` reached `READY` and was aliased to `https://vietauction.vercel.app` before the delivery-policy correction.
  - End-to-end registration exposed that the currently running backend image still returns the old message-only registration response, so production session creation correctly remains unavailable until CI/CD deploys the new backend source.
  - `git diff --check` passed for both repositories; no new build was run after the user corrected the delivery policy.
  - Frontend commit `de997dc` and backend commit `9e3fb36` were pushed to `origin/codex/auth-integration`; direct backend `master` push was correctly rejected by branch protection requiring a pull request.
- Remaining limitations:
  - The HTTPS hostname uses `sslip.io` as an operational temporary domain; replace it with a controlled VietAuction subdomain when DNS access is available.
  - Backend source must be promoted through the repository's `prod` workflow before production login/registration uses the completed token response.
  - Protected branches still require review and merge; no pull request was opened because the user authorized source push, not PR creation.
  - Direct public ports `8080` and `3306` remain a VPS hardening concern; source delivery does not authorize changing firewall/container networking.
- Next action:
  - Push the reviewed frontend and backend source to GitHub, then promote the backend through the existing CI/CD workflow without manual VPS builds.

### 2026-10-11 — Standardize develop-to-master delivery workflow

- Status: Complete.
- Changes:
  - Updated frontend and backend agent rules so every task starts from the latest `develop` branch on a short-lived `codex/*` branch.
  - Defined the required delivery sequence: commit and push the task branch, merge it into `develop`, push `develop`, then create or update a `develop` → `master` pull request.
  - Explicitly prohibited direct coding on `master`, force-pushes, branch-protection bypasses and automatic release-PR merges.
  - Merged the authentication work into `develop` for both repositories.
  - Created frontend PR `vietauction/vietauction-web#8` and backend PR `vietauction/vietauction-backend#12`, both targeting `master` from `develop`.
- Validation:
  - Frontend `develop` pushed at merge commit `e77d70a`.
  - Backend `develop` pushed at merge commit `82587ea`.
  - Both pull requests are open and attached to the task.
  - `git diff --check` passed; no build or deployment command was run.
- Remaining limitations:
  - Both release pull requests require repository review before merging into `master`.
- Next action:
  - Review CI and code review results on PR #8 and PR #12; merge only after approval.

### 2026-10-11 — Revert production authentication connectivity changes

- Status: Complete.
- Changes:
  - Reverted the frontend API timeout, PM2 API environment and deployment workflow changes from the previous task.
  - Reverted the backend production datasource/mail environment injection and deployment workflow changes from the previous task.
- Validation:
  - Reverts were applied as new Git commits so repository history remains intact.
  - `git diff --check` passed in both repositories; no build, deployment, restart or VPS mutation was performed.
- Remaining limitations:
  - Production authentication remains blocked by the existing MySQL permission error for `DB_AUCTION`.
- Next action:
  - Decide on the intended database credential and deployment configuration before implementing a replacement fix.

### 2026-10-11 — Connect public discovery to the multi-asset catalogue API

- Status: Source complete; awaiting CI verification and development seed application.
- Changes:
  - Added a server-only typed auction catalogue adapter that normalizes the Spring response, prices, states, pagination and category labels into the existing frontend model.
  - Replaced mock reads on the landing page, `/auctions`, and `/auctions/[auctionId]` with the public API.
  - Changed list filters to send server-backed keyword, category, state, sort and pagination query parameters.
  - Added truthful API error and empty states; backend fields not yet provided, including registration fee, organizer, location and dossier documents, render as “Chưa công bố”.
  - Added the paused auction status to the shared status badge.
- Validation:
  - `git diff --check` was run. Typecheck, lint, build, browser review, API execution, database seed execution and deployment were intentionally not run under the current source-only instruction.
- Remaining limitations:
  - The catalogue requires the updated backend source and development `seedData.sql` to be applied before local pages show data rather than the recoverable API state.
  - Registration, payment and live bidding remain unavailable from API-backed detail pages because their backend contracts are not implemented.
  - Dedicated art, real-estate and vehicle imagery and category-specific asset attributes remain outstanding.
- Next action:
  - Apply the development seed in an authorized environment, verify the public catalogue HTTP contract, then complete category-specific gallery assets and the read-only detail dossier.

### 2026-10-11 — Standardize UI baseline and correct progress status

- Status: Source complete; awaiting CI/browser verification.
- Changes:
  - Added a shared, responsive loading skeleton for generic content, catalogue grids and detail pages; added global recoverable route error UI and dedicated loading boundaries for catalogue routes.
  - Standardized accessible state announcements, visible keyboard focus, a skip-navigation link and skip targets across the shared/public/auth/seller/account routes updated in this task.
  - Tightened mobile navigation and catalogue filter dialog semantics, gallery button semantics, form error associations and decorative icon treatment.
  - Added canonical metadata for core public pages, Open Graph/Twitter defaults, a production-domain metadata base, and `noindex` metadata for account/auth/action routes.
  - Added distinct landing catalogue empty and temporary-service-error messaging rather than treating both as the same empty state.
  - Replaced the stale milestone claims above with the currently verified delivery, API and hosting status; historical deployment notes remain as dated history only.
- Validation:
  - `git diff --check`: passed.
  - Typecheck, lint, build, browser inspection, API execution and deployment are intentionally not run under the current source-only instruction.
- Remaining limitations:
  - No offline boundary or automated accessibility/E2E suite exists yet.
  - Several account, seller and participation screens remain UI prototypes until their backend contracts are delivered.
  - Current state has not been visually revalidated after these source edits.
- Next action:
  - Add the public catalogue data in an authorized development environment, then complete category-specific content/asset states and perform the deferred browser accessibility audit.

### 2026-10-11 — Normalize cloud development data as UTF-8

- Status: Complete.
- Changes:
  - Removed the temporary frontend mojibake compatibility layer so user text is rendered exactly as supplied by the API.
  - Backed up the previous cloud `DB_AUCTION` dataset locally, then cleared and re-seeded the requested database using `seedData.sql` with utf8mb4 client encoding.
  - Aligned the live `product.weight` column with the existing multi-asset backend contract by allowing null values before the seed was retried.
- Validation:
  - Re-seed validation passed: 4 users, 4 categories, 12 products, 12 auctions and 15 image records.
  - Confirmed the seeded address fields return `Hà Nội`, `Đống Đa`, `Láng Thượng` and `123 Đường Láng` as UTF-8.
  - `git diff --check`: passed; no build or deployment is performed.
- Remaining limitations:
  - Browser and public API rendering are not rechecked in this task.
- Next action:
  - Verify the account profile and public catalogue in a browser against the re-seeded cloud database.

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
