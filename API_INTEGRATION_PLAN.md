# VietAuction Frontend–Backend Integration Plan

Last audited: 2026-10-11

## 1. Runtime baseline

The backend repository was audited from a local runtime rather than source inspection alone.

- Repository: `vietauction/vietauction-backend`
- Stack: Spring Boot 3.2.5, Spring Security, JPA/Hibernate, MySQL, JWT, Spring WebSocket/STOMP and Springdoc OpenAPI.
- Declared Java version: 21. The current code also builds and runs on Java 17 when Maven is invoked with `-Djava.version=17`.
- Local API: `http://localhost:8080`
- Swagger UI: `http://localhost:8080/swagger-ui/index.html`
- OpenAPI JSON: `http://localhost:8080/v3/api-docs`
- OpenAPI inventory: 45 paths, 59 operations, 29 schemas and 14 controller tags.
- Standard response envelope: `success`, `message`, `data`, `meta`, `errors`, `timestamp`.

The local runtime passed Maven packaging and tests. There are currently no test sources, so the successful test command only verifies compilation and Maven lifecycle configuration.

## 2. Current API readiness

### 2.1 Endpoint inventory

| Domain                |         Operations | Current readiness                                                                                                                                                                                              |
| --------------------- | -----------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authentication        |                  7 | Login and registration authenticate/create users and issue JWT/refresh tokens; Spring Security logout revokes tokens; refresh, activation, password recovery and password change remain no-op or return `null` |
| Users                 |                  8 | Database-backed reads/updates exist; depends on working authentication and authorization                                                                                                                       |
| Auctions              | 5 public + 2 admin | Public list/detail now use a typed, database-backed catalogue contract; create, state update and delete remain placeholders                                                                                |
| Products              | 5 public + 2 admin | Public contract is typed, but controller operations return empty/dummy data and do not call the service                                                                                                        |
| Bids and registration |                  6 | Placeholder responses; no typed request/response contract                                                                                                                                                      |
| Approval requests     |                  7 | Placeholder responses; GET operations incorrectly expose a request body in OpenAPI                                                                                                                             |
| Product categories    |                  4 | Public list/detail reads are typed and database-backed; create and delete remain placeholders                                                                                                                |
| Images                |                  4 | Placeholder responses; upload media type and payload are not defined                                                                                                                                           |
| Transactions          |                  4 | Placeholder responses                                                                                                                                                                                          |
| VNPay                 |                  2 | Placeholder responses                                                                                                                                                                                          |
| Banks                 |                  2 | Implemented and database-backed                                                                                                                                                                                |
| Dashboard             |                  1 | Placeholder response                                                                                                                                                                                           |

### 2.2 Runtime findings

- `GET /api/v1/auctions` returns a valid paginated envelope, but always with an empty list.
- `GET /api/v1/products` returns a valid paginated envelope, but always with an empty list.
- `POST /api/v1/auth/login` authenticates by username or email, rotates stored tokens and returns token/user DTOs. Seeded login succeeds and bad credentials use the normalized authentication handler.
- `POST /api/v1/auth/register` now validates the complete member profile, rejects duplicate username/email, hashes the password, creates an ACTIVE MEMBER and returns an authenticated token/user response in one transaction.
- `GET /api/v1/auctions/{id}` and several placeholder endpoints fail with HTTP 400 while serializing a raw empty `Object`.
- `GET /api/v1/products/{id}` returns HTTP 200 with every field set to `null`, even for a missing product.
- `GET /api/v1/product-categories` currently returns HTTP 400.
- The STOMP endpoint `/ws` exists, but there are no `@MessageMapping` handlers and no server-side topic publication flow.
- Swagger applies bearer authentication globally, but the Spring Security rules expose a different and in places much broader set of public operations.
- The working tree now allows `https://vietauction.vercel.app` for REST CORS and enables Spring Security CORS processing. A live local preflight returns HTTP 200 with the expected headers. The change is not active on production until the backend is committed and deployed; WebSocket origins still need a separate review.

The backend is therefore suitable for contract discovery and incremental integration scaffolding, but not yet for replacing the frontend mock data across complete user journeys.

## 3. Contract mismatches to resolve

### Authentication

- Frontend login/logout, session lookup and profile read/update now use same-origin Next.js Route Handlers.
- Access and refresh tokens are stored in secure, HTTP-only cookies rather than Zustand/localStorage.
- The server-only backend URL is configured through `API_BASE_URL`, with `http://localhost:8080` used for local development.
- Login, registration, the Spring Security logout handler and user profile operations work against local data through the Next.js BFF.
- Refresh-token rotation, activation and password-reset service methods still need implementation before connecting the complete authentication flow.
- Production integration remains blocked on a public HTTPS backend URL. The old Railway endpoint returns 404 and the current VPS endpoint is HTTP-only, which is not acceptable for credentials or JWT transport.

### Auction model

Backend auction states are `WAITING`, `ONGOING`, `FINISHED`, `PAUSED`, `DELETED`; frontend states are `upcoming`, `registration-open`, `live`, `ended`, `cancelled`. A documented state mapping is required, and the backend currently has no state representing an open registration window.

The frontend auction model also needs fields that the current Swagger auction response does not define, including lot number, slug, registration window, current price, bid count, organizer, verification state, location, provenance, display attributes and image gallery.

### Pagination and filtering

- Auction, product and transaction list endpoints default to page `1`.
- User pagination uses Spring's zero-based page index.
- The frontend should receive one normalized pagination model. The backend should standardize page numbering before broad integration.
- Current auction filters only include state and dates. The UI additionally requires keyword, category, verification, price range and sorting.

### Money and dates

- Monetary entity fields currently use floating-point values. Auction prices, deposits, fees and transaction amounts should use `BigDecimal` or integer minor units to prevent rounding errors.
- All API timestamps should be ISO 8601 with an explicit timezone. The frontend should keep timestamps as strings at the transport boundary and format them only in the view layer.

### Security and configuration

- Move JWT, payment and mail credentials out of committed YAML into environment variables and rotate all exposed credentials.
- The newly added `application-prod.yml` still contains literal datasource and mail values, while the production Docker workflow does not inject application environment variables. Correct this before relying on the production profile.
- Align Swagger security declarations with actual public/protected operations.
- Restrict admin, staff and manager routes with role checks rather than authentication alone.
- Do not expose state-changing auction, approval, transaction or account operations through broad public matcher rules.
- Configure allowed frontend origins from environment variables, including local development and the active Vercel production domain.
- Replace `ddl-auto: update` with versioned migrations such as Flyway or Liquibase before shared environments are used.

## 4. Recommended frontend architecture

### 4.1 Transport boundary

Use Next.js Route Handlers as a small backend-for-frontend layer for authentication and protected REST calls:

```text
Browser UI
  -> /api/* Next.js Route Handler
    -> Spring Boot /api/v1/*
```

Benefits:

- Access and refresh tokens can be stored in secure, HTTP-only cookies.
- Browser code does not need to know the backend host or persist bearer tokens.
- Error and pagination envelopes can be normalized once.
- Production REST integration does not depend on browser CORS.

Public server-rendered catalog requests may call Spring Boot directly from Server Components through a server-only `API_BASE_URL`. Live auction WebSocket traffic should connect directly to the backend after STOMP destinations, authentication and production origins are implemented.

### 4.2 Domain adapters

Introduce interfaces with both mock and HTTP implementations so screens can migrate independently:

```text
repositories/
  auctions/
    auction.repository.ts
    auction.mock.ts
    auction.http.ts
  auth/
  account/
  products/
  transactions/
```

The selected adapter should be controlled centrally, not inside page components. This keeps current mock UI usable while backend contracts are being completed and makes it possible to switch one domain at a time.

### 4.3 Shared API modules

Recommended frontend modules:

- `lib/api/server-client.ts`: server-only Spring Boot client.
- `lib/api/browser-client.ts`: same-origin client for Next.js Route Handlers.
- `lib/api/envelope.ts`: `ApiResponse<T>`, `ApiError` and normalized pagination types.
- `lib/api/error.ts`: maps backend validation and domain errors to form fields and user-safe messages.
- `lib/api/session.ts`: cookie/session handling and refresh-token rotation.
- `lib/api/contracts/`: generated OpenAPI types plus intentional frontend view models.
- `repositories/`: domain-specific mapping between transport DTOs and UI models.

Generate transport types from `/v3/api-docs` once the backend removes anonymous `Object` contracts. Do not use generated transport types directly in React components; map them to stable frontend domain models.

### 4.4 Data lifecycle

- Use Server Components and Next.js `fetch` caching for public auction discovery and detail data.
- Use TanStack Query for interactive client-side account, bidding, filtering and mutation flows.
- Keep Zustand only for ephemeral client state; do not store access or refresh tokens in localStorage.
- Invalidate domain query keys after mutations instead of manually synchronizing multiple stores.

## 5. Screen-to-API integration map

| Frontend flow                | Intended backend operations                                                                                      | Readiness                                                                                                                       |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Landing and auction list     | `GET /auctions`, `GET /products`, `GET /product-categories`                                                      | Blocked by empty/untyped auction data and broken category endpoint                                                              |
| Auction detail               | `GET /auctions/{id}`, `GET /products/{id}`, `GET /products/{productId}/images`, `GET /auctions/{auctionId}/bids` | Blocked by placeholder responses                                                                                                |
| Login                        | `POST /auth/login`, `POST /auth/refresh-token`, logout handler                                                   | Username/email login, logout and frontend HttpOnly session flow work locally; blocked on refresh and a production HTTPS API URL |
| Registration and activation  | `POST /auth/register`, `POST /auth/activate`                                                                     | Registration is integrated locally; activation remains blocked by the no-op service                                             |
| Password recovery            | `POST /auth/forgot-password`, `POST /auth/reset-password`                                                        | Blocked by no-op auth service                                                                                                   |
| Account profile/security     | `GET/PUT /users/{id}`, `POST /auth/change-password`, `GET /banks`                                                | Profile read/update is integrated locally; password change remains blocked by the no-op auth service                            |
| Account auctions             | User registrations and bid-history operations                                                                    | Missing a complete typed user-auction query contract                                                                            |
| Transactions                 | `GET /transactions`, state/payment-method mutations                                                              | Blocked by placeholder responses                                                                                                |
| Seller wizard/assets         | `POST/PUT /products`, image operations, approval-request operations                                              | Blocked by placeholder services and untyped image/approval contracts                                                            |
| Auction registration/payment | Registration create endpoint and VNPay checkout/callback                                                         | Registration mutation is missing; payment is placeholder                                                                        |
| Live auction                 | Bid REST operations plus `/ws` STOMP destinations                                                                | Blocked by placeholder bid controller and missing message handlers                                                              |

About, Contact, legal and static marketing pages do not require backend integration.

## 6. Proposed delivery order

### Phase 0 — Stabilize the backend contract

1. Remove hard-coded secrets and rotate exposed credentials.
2. Decide Java 17 or Java 21 and make README, POM, CI and runtime consistent.
3. Implement authentication and JWT refresh/logout behavior.
4. Replace every raw `Object` request/response with validated DTOs.
5. Implement auction, product, category, image, registration, bid, transaction, approval and payment services.
6. Add role-based authorization and align OpenAPI security with Spring Security.
7. Standardize pagination, errors, enum values, money and timestamps.
8. Add database migrations, deterministic development seed data and integration tests.
9. Add OpenAPI operation descriptions, response codes and examples.

Exit criteria: representative happy/error requests succeed, OpenAPI contains no anonymous domain payloads, and contract tests cover authentication, catalog, registration and bidding.

### Phase 1 — Add the frontend integration foundation

1. Add server-only API environment variables for local, preview and production.
2. Add typed API envelope, error normalization and pagination normalization.
3. Add Next.js Route Handlers for authentication and protected REST access.
4. Add mock/HTTP repository adapters and a controlled migration flag.
5. Generate OpenAPI transport types and check contract drift in CI.

### Phase 2 — Integrate public read-only journeys

1. Auction list, filters and pagination.
2. Auction detail, product information and images.
3. Loading, empty, error and unavailable states.
4. Server-rendered metadata for auction detail pages.

This phase should be shipped before authentication because it has lower risk and provides immediate visible value.

### Phase 3 — Integrate authentication and account

1. Login, refresh, logout and route protection.
2. Registration, activation and password recovery.
3. Profile, security, account auction history and transactions.
4. Session-expired and insufficient-permission UX.

### Phase 4 — Integrate the seller journey

1. Product draft/submission.
2. Multipart image upload, ordering and deletion.
3. Approval state tracking and revision requests.
4. Submitted-asset timeline and transaction handover.

### Phase 5 — Integrate participation and realtime bidding

1. Eligibility and auction registration.
2. Registration fee/payment status.
3. Authenticated STOMP connection, reconnect and heartbeat behavior.
4. Bid confirmation, accepted/rejected/outbid events and bid history.
5. Auction paused/extended/ended and user-kicked events.
6. Reconciliation through REST after every reconnect.

### Phase 6 — Production hardening

1. Contract, integration and end-to-end tests for critical journeys.
2. Observability, structured logs and frontend error reporting.
3. Rate limiting and abuse protection for auth, bidding and payment endpoints.
4. Accessibility, performance and failure-mode audits.
5. Remove mock adapters only after every mapped screen has live-data test coverage.

## 7. Immediate next task

Start with Phase 0 on the backend. The smallest useful vertical slice is:

1. Put the backend behind HTTPS and inject the URL as Vercel `API_BASE_URL`.
2. Add HTTP integration coverage around the existing auth unit tests, then implement and test refresh/activation/password flows; register and logout now work.
3. Extend seed data with products, images and auctions.
4. Add a typed `AuctionResponse` containing the fields required by the list and detail screens.
5. Implement `GET /api/v1/auctions` and `GET /api/v1/auctions/{id}` against seeded data.
6. Integrate only the auction list and detail pages behind the mock/HTTP adapter.

This slice validates authentication, mapping, pagination, error handling and deployment without coupling the whole frontend to unfinished endpoints.
