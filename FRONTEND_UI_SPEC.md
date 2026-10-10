# VietAuction Frontend UI Specification

| Field                  | Value                                                  |
| ---------------------- | ------------------------------------------------------ |
| Status                 | Implementation-ready for frontend UI with mock data    |
| Version                | 1.1                                                    |
| Updated                | 2026-10-10                                             |
| Visual source of truth | Landing page, `INSTRUCTIONS.md`, and `app/globals.css` |
| Delivery tracker       | Google Sheet tab `UI-CHECKLIST`                        |
| Backend status         | Explicitly out of scope for this phase                 |

When this document and an existing screen disagree, use this priority order:

1. `INSTRUCTIONS.md` for product-wide UI/UX rules.
2. `app/globals.css` for implemented semantic tokens.
3. This specification for screen behavior, route migration, states, and acceptance criteria.
4. Existing route code only as migration input, not as a visual source of truth.

## 1. Document purpose

This specification defines the UI/UX scope for the next VietAuction frontend implementation phase. The goal is to complete responsive screens, reusable components, realistic mock interactions, and all important visual states before backend integration.

The landing page and `INSTRUCTIONS.md` are the canonical visual references. This document describes product behavior and acceptance criteria without replacing those design rules.

## 2. Scope

### Included

- Public, guest, and member-facing screens.
- Responsive desktop, tablet, and mobile layouts.
- Reusable UI components and design-system primitives.
- Mock data, local component state, and local storage where useful for demonstrations.
- Form validation and simulated success/error states.
- Simulated countdowns, bidding events, filters, sorting, and pagination.
- Loading, skeleton, empty, error, permission, and session states.
- Accessibility, keyboard navigation, and reduced-motion support.

### Excluded

- Backend API integration.
- WebSocket integration.
- Real authentication, authorization, cookies, or session management.
- Payment gateway integration.
- Real file uploads or cloud storage.
- OAuth providers.
- Email activation and password-reset delivery.
- PDF generation.
- Staff and operational backoffice screens.

## 3. Product direction

VietAuction is a multi-category asset-auction platform. The UI must not hard-code jewelry-specific language into shared flows. Category-specific fields may appear after the user selects an asset category.

The primary user journeys are:

1. Discover an auction.
2. Review the asset and auction dossier.
3. Register for an auction.
4. Follow and participate in a live auction.
5. Review bids, results, and transactions.
6. Submit an owned asset for valuation.
7. Track submitted assets and valuation status.

## 4. Information architecture

### Public routes

| Route                   | Purpose                             |
| ----------------------- | ----------------------------------- |
| `/`                     | Landing page and featured auctions  |
| `/auctions`             | Search, filter, and browse auctions |
| `/auctions/[auctionId]` | Asset and auction detail            |
| `/about`                | Company, process, trust, and FAQ    |
| `/contact`              | Support request form                |
| `/terms`                | Terms of service                    |
| `/privacy`              | Privacy policy                      |
| `/auction-rules`        | Auction rules                       |
| `/seller-rules`         | Seller rules                        |

### Guest routes

| Route                     | Purpose                        |
| ------------------------- | ------------------------------ |
| `/login`                  | Sign in with email or username |
| `/register`               | Create a basic member account  |
| `/forgot-password`        | Request password reset         |
| `/reset-password/[token]` | Set a new password             |
| `/activate/[token]`       | Account activation result      |

### Auction routes

| Route                            | Purpose                        |
| -------------------------------- | ------------------------------ |
| `/auctions/[auctionId]/register` | Review conditions and register |
| `/auctions/[auctionId]/live`     | Live bidding room              |

### Member routes

| Route                       | Purpose                                     |
| --------------------------- | ------------------------------------------- |
| `/account/profile`          | Personal information and verification state |
| `/account/security`         | Password and two-factor-authentication UI   |
| `/account/auctions`         | Registered, live, and completed auctions    |
| `/account/transactions`     | Transaction list and details                |
| `/account/assets`           | Submitted and approved assets               |
| `/account/assets/[assetId]` | Submitted asset detail and status history   |
| `/sell`                     | Multi-step asset submission                 |

## 5. Shared application shell

### Header

- Use one shared `SiteHeader` component.
- Support `overlay` and `solid` variants.
- Desktop navigation: Trang chủ, Tài sản, Về chúng tôi, Liên hệ.
- Show Đăng nhập and Gửi tài sản actions for guest demonstrations.
- Show account menu for signed-in mock states.
- Mobile navigation must be keyboard accessible and close after route selection.
- Active route must be indicated by text and border, not color alone.

### Footer

- Show platform description, navigation, support, and legal links.
- Use the landing-page paper/ink/gold visual system.
- Every public and member page must end with the shared footer or an intentional task-completion surface.

### Global states

- Page loading skeleton.
- Section loading skeleton.
- Empty state with a clear next action.
- Recoverable error with Retry.
- Permission denied.
- Session expired.
- Offline and reconnecting.
- Not found.

## 6. Shared component inventory

- `SiteHeader`
- `SiteFooter`
- `PageHeader`
- `AuctionCard`
- `AuctionStatusBadge`
- `AuctionCountdown`
- `MoneyValue`
- `LotNumber`
- `FilterPanel`
- `AppliedFilterChips`
- `Pagination`
- `AssetGallery`
- `AuctionSummaryPanel`
- `BidHistory`
- `BidConfirmationDialog`
- `StateNotice`
- `EmptyState`
- `ErrorState`
- `SkeletonCard`
- `FormField`
- `FileDropzone`
- `StepIndicator`
- `AccountSidebar`
- `DetailDrawer`
- `ConfirmDialog`
- `Toast`

Components must expose variants through props rather than route-specific duplicated markup.

## 7. Screen specifications

### 7.1 Landing page

Required sections:

- Hero with one primary and one secondary action.
- Trust commitments.
- Featured auctions using `AuctionCard`.
- Three-step participation process.
- Seller call to action.
- Trust and transparency content without unsupported performance metrics.
- Shared footer.

Acceptance criteria:

- Featured cards link to a mock dynamic auction detail route.
- Countdown uses simulated time instead of fixed text.
- Hero remains readable with video disabled or unavailable.
- Mobile navigation exposes all primary routes.
- No unsupported numerical claims are presented as facts.

### 7.2 Auction list

Required filters:

- Keyword or lot number.
- Category.
- Auction status.
- Price range.
- Auction date range.
- Location.
- Verified asset.
- Auction organizer.

Conditional category filters:

- Jewelry: gemstone, metal, brand, certificate, weight.
- Real estate: location, property type, area.
- Vehicle: brand, production year, condition.

Required behavior:

- Filters, sorting, and pagination work against mock data.
- Current filters are represented in the URL query string.
- Applied filters appear as removable chips.
- Clear all restores the default result set.
- The result count matches the displayed mock result set.
- Mobile uses a filter drawer or bottom sheet.
- Empty result state explains which filters can be cleared.

### 7.3 Auction detail

Required sections:

- Breadcrumb and lot number.
- Asset gallery with thumbnails and lightbox.
- Status, title, current or starting price, and countdown.
- Primary action based on auction state.
- Registration fee, deposit, bid step, and auction schedule.
- Asset description.
- Asset dossier and verification information.
- Auction organizer and auctioneer information.
- Bid history preview.
- Related auctions.

Required states:

- Upcoming and registration open.
- Upcoming and registration closed.
- Live.
- Ended with result.
- Ended without a successful sale.
- Asset unavailable.

### 7.4 Auction registration

- Show asset summary and key auction terms.
- Show registration fee and deposit separately.
- Require three explicit consent checkboxes.
- Display a mock payment-method selection.
- Display processing, success, failure, and already-registered states.
- Use a page for the main task and a dialog only for final confirmation.

### 7.5 Live auction room

- Show authoritative-looking server-time label as simulated data.
- Show current price, next minimum bid, bid step, and remaining time.
- Step buttons update the proposed bid amount locally.
- Bid submission always opens a confirmation dialog.
- Simulate accepted, rejected, and outbid events.
- Bid history updates locally and highlights the latest bid.
- Provide connecting, connected, reconnecting, and ended states.
- Announce price and auction-state changes through `aria-live`.
- Disable bid controls when the auction is not active.

### 7.6 Authentication

Login:

- One identifier field: Email hoặc tên đăng nhập.
- Password field with show/hide control.
- Remember-me checkbox.
- Correct forgot-password route.
- Frontend validation, loading, and failure message.
- No inactive Google or Apple buttons.
- Image composition must remain visible on common desktop ratios.

Registration:

- Full name, email, phone, password, confirm password, and legal consent.
- Password requirements and strength feedback.
- Do not request identity documents or bank details during initial registration.
- Provide mock success and existing-account error states.

Recovery:

- Forgot-password request screen.
- Reset-password screen.
- Activation result screen.
- Invalid and expired token states.
- Resend action as a simulated frontend state.

### 7.7 Sell an asset

The flow uses four steps:

1. Category and basic information.
2. Category-specific characteristics and provenance.
3. Images and supporting documents.
4. Contact details, review, and confirmation.

Required behavior:

- Previous and next preserve local form state.
- Each step validates before advancing.
- Draft may be saved to local storage.
- Uploaded files use local preview only.
- User can reorder, remove, and select a cover image.
- Category-specific fields appear only when relevant.
- A review screen precedes final submission.
- Submission ends on a dedicated success state.

### 7.8 Member area

Use one shared account layout with sidebar navigation.

Profile:

- Personal details.
- Contact details.
- Address.
- Verification status.
- Mock save confirmation.

Security:

- Change-password form.
- Two-factor-authentication setup UI.
- Active-session list as mock data.

My auctions:

- Tabs for registered, live, completed, and not won.
- Search, status filter, and pagination.
- Bid-history detail drawer.

Transactions:

- Transaction list with status and amount.
- Detail drawer.
- Mock payment-method selection.
- Success and failure states.

My assets:

- Submitted requests.
- Awaiting valuation.
- Awaiting owner confirmation.
- Approved and scheduled.
- Rejected or cancelled.
- Asset detail with status timeline and mock actions.

Do not display fabricated balances, membership tiers, favorites, or limits as actual account data.

### 7.9 About, contact, and legal

About:

- Company introduction.
- Buyer and seller processes.
- Trust principles.
- FAQ accordion.
- Contact and registration actions.

Contact:

- Name, phone, email, subject, and message.
- Frontend validation.
- Simulated submitting, success, and failure states.
- Alternative support information.

Legal pages:

- Terms of service.
- Privacy policy.
- Auction rules.
- Seller rules.

## 8. Interaction-state requirements

Every interactive screen must define:

- Default.
- Hover.
- Focus-visible.
- Active or selected.
- Disabled.
- Loading.
- Validation error.
- Success.
- Empty.
- Recoverable error.

High-risk actions require confirmation:

- Registering for an auction.
- Placing a bid.
- Withdrawing a bid.
- Rejecting a valuation.
- Logging out.

Toasts are only for transient confirmation. Critical errors and required next actions must remain visible in the page or dialog.

## 9. Mock-data architecture

- Store mock data in dedicated typed modules, not inside page components.
- Define reusable types for auction, asset, bid, transaction, user, and asset submission.
- Use stable mock IDs so routes and deep links work consistently.
- Separate mock data from visual components so future API integration replaces the data adapter rather than page markup.
- Simulated timers and events must clean up intervals when components unmount.
- Local storage may be used only for draft form data and demonstration preferences.

Suggested structure:

```text
data/
  mock-auctions.ts
  mock-assets.ts
  mock-bids.ts
  mock-transactions.ts
  mock-account.ts

types/
  auction.ts
  asset.ts
  bid.ts
  transaction.ts

features/
  auctions/
  bidding/
  account/
  asset-submission/
```

## 10. Responsive behavior

- Mobile body text must be at least 16px.
- Primary controls must be at least 44px high or wide.
- Desktop sidebars become drawers or stacked sections on mobile.
- Sticky panels must not cover content or trap keyboard focus.
- Dense tables become responsive cards or horizontally scrollable regions with clear labels.
- Auction actions may use a mobile sticky action bar when needed.
- Verify common widths: 375px, 768px, 1024px, and 1440px.

## 11. Accessibility

- One `h1` per page and ordered heading hierarchy.
- Semantic header, navigation, main, aside, section, and footer landmarks.
- Labels associated with every form control.
- Visible focus indicators.
- Keyboard-accessible menus, dialogs, drawers, tabs, and gallery controls.
- Dialogs trap focus and return focus to their trigger.
- Status does not depend on color alone.
- Meaningful image alt text; decorative images use empty alt text.
- Live bid and countdown updates use restrained `aria-live` announcements.
- Motion respects `prefers-reduced-motion`.

## 12. Visual system

- Paper: `#f5f1e9`.
- Ink: `#16130f`.
- Gold: `#cba765`.
- Dark: `#181510`.
- Warm white: `#fffdf9`.
- Warm border: `#d8cdbd`.
- `Gilroy Bold Việt hoá` is the self-hosted typeface for the VietAuction wordmark and every heading from H1 through H6.
- `Gilroy Medium Việt hoá` is the self-hosted typeface for body copy, navigation, forms, lot numbers, dates, counters, and other non-price numeric data.
- `Gilroy SemiBold Việt hoá` is reserved for monetary prices so the current price and financial amounts remain prominent.
- Use crisp borders and restrained shadows.
- Avoid decorative gradients, rounded-card inflation, and unrelated blue/orange application colors.
- Motion duration is normally 180–240ms with a 2–4px translation or subtle image scale.

## 13. Delivery phases

### Phase P0 — Foundation

- Shared header and footer.
- Route naming cleanup.
- Shared components and states.
- Typography, spacing, and responsive baseline.

### Phase P1 — Public discovery

- Landing.
- Auction list and functional mock filters.
- Dynamic mock auction detail.
- About, contact, legal, and 404.

### Phase P2 — Participation

- Auction registration.
- Live auction simulation.
- Bid confirmation and event states.

### Phase P3 — Authentication and account

- Login, registration, activation, and recovery.
- Profile, security, auctions, transactions, and assets.

### Phase P4 — Seller journey

- Multi-step asset submission.
- Draft, image preview, review, and success states.
- Submitted-asset status tracking.

## 14. Definition of done

A screen is complete when:

- Desktop, tablet, and mobile layouts are implemented.
- All visible primary controls respond to interaction.
- Mock data and local state produce realistic behavior.
- Default, loading, empty, error, success, and disabled states exist where relevant.
- Keyboard navigation and focus behavior pass manual review.
- No unsupported numerical or account claims appear as real data.
- Links resolve to valid routes.
- Assets are local or served from an approved stable source.
- The screen uses shared tokens and components from the VietAuction design system.
- Lint, typecheck, and production build pass.
- The page beginning, information-dense area, and page ending pass visual inspection.

## 15. Current-to-target implementation map

The project currently contains ten page entry points. The target architecture keeps legacy URLs working through redirects while moving all navigation and new code to canonical URLs.

| Current route       | Target route                 | Decision             | Required work                                                                                                                             |
| ------------------- | ---------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                 | `/`                          | Refactor             | Reuse shared header/footer, dynamic mock auction links, real countdown, mobile navigation, and no unsupported metrics.                    |
| `/auction-list`     | `/auctions`                  | Replace and redirect | Move static data to typed fixtures; implement working search, filters, sorting, pagination, query-string state, empty and loading states. |
| `/auction-detail`   | `/auctions/[auctionId]`      | Replace and redirect | Resolve a stable mock ID; build gallery, dossier, organizer, registration status, related auctions, and unavailable/not-found states.     |
| `/auction-realtime` | `/auctions/[auctionId]/live` | Replace and redirect | Convert to a client-side simulation with connection, bid confirmation, accepted, rejected, outbid, reconnecting, and ended states.        |
| `/sent-possestion`  | `/sell`                      | Replace and redirect | Fix spelling, implement a four-step wizard, local draft, previews, review, and dedicated success state.                                   |
| `/profile`          | `/account/profile`           | Move and redirect    | Introduce the shared account shell; remove fabricated balance, tier, favorites, and bidding-limit claims.                                 |
| `/login`            | `/login`                     | Rebuild UI behavior  | Use one identifier field, local mock auth state, show/hide password, correct recovery route, and remove inactive social sign-in.          |
| `/regsiter`         | `/register`                  | Fix and redirect     | Add labels, validation, password requirements, consent links, loading, success, and existing-account states.                              |
| `/about`            | `/about`                     | Extend               | Preserve the approved hero asset; add trust principles, buyer/seller process, FAQ, and verified CTA routes.                               |
| `/contact`          | `/contact`                   | Extend               | Add controlled validation, submitting, success, failure, and alternative support states.                                                  |

New routes required by this specification:

- `/forgot-password`
- `/reset-password/[token]`
- `/activate/[token]`
- `/auctions/[auctionId]/register`
- `/account/security`
- `/account/auctions`
- `/account/transactions`
- `/account/assets`
- `/account/assets/[assetId]`
- `/terms`
- `/privacy`
- `/auction-rules`
- `/seller-rules`
- `not-found.tsx`

Migration rules:

- Use permanent redirects for spelling-only and canonical route migrations once target pages exist.
- Update all internal links before enabling redirects.
- Preserve query parameters when redirecting `/auction-list` to `/auctions`.
- Do not keep duplicate page implementations after migration.
- Middleware must not require a real access token during the mock-UI phase. Protected-page demonstrations use a deterministic local mock session.

## 16. Locked design tokens

### 16.1 Color

| Semantic token         | Value     | Use                                                         |
| ---------------------- | --------- | ----------------------------------------------------------- |
| `paper` / `background` | `#f5f1e9` | Default page background                                     |
| `ink` / `foreground`   | `#16130f` | Primary text and high-contrast controls                     |
| `gold` / `accent`      | `#cba765` | Premium emphasis, borders, large accents, dark-surface text |
| `dark` / `primary`     | `#181510` | Primary CTA and dark editorial sections                     |
| `warm-white` / `card`  | `#fffdf9` | Form, card, popover, and content surfaces                   |
| `warm-border`          | `#d8cdbd` | Default dividers and borders                                |
| `muted`                | `#e6ddce` | Secondary surface                                           |
| `muted-foreground`     | `#675e53` | Secondary text on paper                                     |
| `secondary`            | `#7a5b2e` | Accessible gold-derived text on light surfaces              |
| `destructive`          | `#a63a32` | Errors and destructive actions                              |
| `status-live`          | `#9f332d` | Live auction status                                         |
| `status-upcoming`      | `#8a6d3c` | Upcoming status                                             |
| `status-ended`         | `#726a61` | Ended status                                                |
| `status-verified`      | `#3f7258` | Verification and success                                    |

Rules:

- Do not introduce page-specific blue or orange application palettes.
- Gold `#cba765` is not body-text color on paper; use `#7a5b2e` for small text.
- Every semantic color includes a text label or icon.
- Imagery behind text requires a dark contrast veil between 55% and 90% depending on crop.
- Live-auction dark surfaces may use the defined `.dark` token set; public discovery pages default to the paper theme.

### 16.2 Typography

| Role               | Font             | Size                             | Line height | Weight |
| ------------------ | ---------------- | -------------------------------- | ----------- | ------ |
| Logo/wordmark      | `Gilroy` | `20–32px` by context              | `1`         | `700` |
| Landing display H1 | `Gilroy` | `clamp(44px, 5.2vw, 80px)`       | `0.98–1.04` | `700` |
| Functional page H1 | `Gilroy` | `36px` mobile, `48px` desktop    | `1.04`      | `700` |
| Section H2         | `Gilroy` | `30px` mobile, `36–48px` desktop | `1.08`      | `700` |
| Card/detail H3–H6  | `Gilroy` | `20–24px`                        | `1.20–1.30` | `700` |
| Body               | `Gilroy` | `16px` minimum                   | `1.50–1.65` | `500` |
| Small body         | `Gilroy` | `14px`                           | `1.45–1.60` | `500` |
| Text metadata      | `Gilroy` | `12px`                           | `1.35–1.50` | `500–700` |
| Navigation         | `Gilroy` | `15–16px`                        | `1.4`       | `500` |
| Price              | `Gilroy` | `12–32px` by context             | `1.1–1.3`   | `600` |
| Counter/code/date  | `Gilroy` | `12–32px` by context             | `1.1–1.3`   | `500` |

Typography rules:

- Do not rely on a browser-installed Gilroy file. Use the six local OTF files through `next/font/local`.
- Use `Gilroy Bold Việt hoá` for the wordmark and H1–H6.
- Use `Gilroy Medium Việt hoá` for paragraphs, form text, navigation, countdowns, lot codes, dates, times, and non-price numeric data.
- Use `Gilroy SemiBold Việt hoá` and the shared `.font-price` class for all monetary prices.
- Uppercase is reserved for short metadata and eyebrows.
- Avoid font weights above 700 except for very short labels.

Agent implementation checklist:

- Every JSX output of `formatMoney(...)` has `.font-price` on the rendered element or its dedicated price wrapper.
- Countdown, lot code, date, time, counter, and other non-price numeric data use Medium `500`; use `.font-numeric` only when tabular-number alignment is useful.
- Every H1–H6 element and the VietAuction wordmark resolve to Bold `700`.
- No route or component introduces a different font family, a remote font, or a page-specific `font-family` declaration without explicit user approval.
- Any typography-role change must update `AGENTS.md`, `INSTRUCTIONS.md`, this section, and the shared rules in `app/globals.css` together.

### 16.3 Spacing, sizing, and layout

- Base rhythm: `4px`.
- Approved spacing steps: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 128px`.
- Content maximum width: `1320px`.
- Horizontal page padding: `20px` mobile, `24px` tablet, `32px` desktop.
- Section vertical padding: `80px` mobile and `120–130px` desktop.
- Dense functional page top/bottom padding: `32–40px` top and `64–80px` bottom.
- Touch target: minimum `44 × 44px`; primary form controls default to `48px` height.
- Default card radius: `4px` or square editorial edge. Larger rounding is reserved for avatars, media controls, and real pill-shaped interactions.
- Default card shadow: none. A restrained shadow is permitted only for floating overlays and dialogs.

### 16.4 Responsive breakpoints

| Breakpoint | Width    | Expected behavior                                                                            |
| ---------- | -------- | -------------------------------------------------------------------------------------------- |
| Base       | `<640px` | One-column flow, full-width primary CTA, mobile menu, drawer filters, stacked detail/actions |
| `sm`       | `640px`  | Two-column form fields only when labels remain readable                                      |
| `md`       | `768px`  | Tablet navigation decisions, two-column content where appropriate                            |
| `lg`       | `1024px` | Desktop header, persistent list sidebar, detail side panel                                   |
| `xl`       | `1280px` | Full 1320px editorial grid with page padding                                                 |

No component may rely only on breakpoint hiding. A usable alternative must remain available.

### 16.5 Motion

| Token         | Duration | Use                                  |
| ------------- | -------- | ------------------------------------ |
| `motion-fast` | `120ms`  | Checkbox, icon, focus, pressed state |
| `motion-base` | `180ms`  | Color, border, menu, tooltip         |
| `motion-slow` | `240ms`  | Drawer, dialog, section entrance     |

- Hover translation is limited to `2–4px`.
- Media hover scale is limited to `1.04–1.05`.
- No looping decorative animation on functional pages.
- `prefers-reduced-motion` removes translation, scale, smooth scrolling, and non-essential entrances.

## 17. Screen-state matrix

| Screen group        | Required states                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Landing             | Default, poster fallback, video unavailable, mobile menu open, reduced motion                                         |
| Auction list        | Default, filters applied, no results, loading skeleton, recoverable error, mobile filter drawer                       |
| Auction detail      | Upcoming/open, upcoming/closed, live, ended/sold, ended/unsold, unavailable, not found                                |
| Registration        | Eligible, not signed in, incomplete profile, terms unchecked, processing, success, failed, already registered, closed |
| Live auction        | Connecting, connected, proposed bid, confirm bid, accepted, rejected, outbid, reconnecting, paused, ended             |
| Login               | Default, invalid form, submitting, invalid credentials, success, session expired                                      |
| Register            | Default, password feedback, invalid form, submitting, existing account, success                                       |
| Recovery            | Request, sending, sent, invalid token, expired token, resetting, success                                              |
| Seller wizard       | New, step invalid, draft saved, previewing upload, review, submitting, success, simulated failure                     |
| Account lists       | Loading, populated, empty, filtered empty, recoverable error                                                          |
| Profile/security    | View, editing, invalid, saving, saved, mock permission failure                                                        |
| About/contact/legal | Default; contact also requires submitting, success, and failure                                                       |

State implementation rules:

- Use query parameters only for shareable filter, sort, pagination, tab, and demonstrable error-state controls.
- Use component state for transient interactions such as dialogs, menus, and pending buttons.
- Use local storage only for seller drafts, dismissed onboarding, and explicitly documented demo preferences.
- A developer-only mock-state switch may be used during QA but must not appear in the production navigation.

## 18. Mock data contracts

Mock records are typed, stable, and stored outside page files. All monetary values use integer Vietnamese đồng; formatting happens in display utilities.

```ts
type AuctionStatus =
  | "draft"
  | "upcoming"
  | "registration-open"
  | "live"
  | "ended"
  | "cancelled"

type Auction = {
  id: string
  slug: string
  lotNumber: string
  title: string
  category: AssetCategory
  status: AuctionStatus
  startPrice: number
  currentPrice?: number
  bidStep: number
  depositAmount: number
  registrationFee: number
  registrationOpenAt: string
  registrationCloseAt: string
  startsAt: string
  endsAt: string
  location: string
  organizerId: string
  assetId: string
  bidCount: number
  verified: boolean
}

type Asset = {
  id: string
  category: AssetCategory
  title: string
  summary: string
  description: string
  provenance: string[]
  images: AssetImage[]
  documents: AssetDocument[]
  attributes: Record<string, string | number | boolean>
}

type Bid = {
  id: string
  auctionId: string
  bidderLabel: string
  amount: number
  createdAt: string
  result: "accepted" | "rejected" | "outbid"
}

type AssetSubmission = {
  id: string
  status:
    | "draft"
    | "submitted"
    | "valuating"
    | "owner-review"
    | "approved"
    | "scheduled"
    | "rejected"
    | "cancelled"
  category?: AssetCategory
  basicInfo: Record<string, string>
  categoryDetails: Record<string, string | number | boolean>
  files: LocalFilePreview[]
  contact: ContactDetails
  updatedAt: string
}
```

Required fixture coverage:

- At least 12 auctions across live, upcoming, ended/sold, ended/unsold, and cancelled states.
- At least four asset categories: jewelry/gemstones, art/antiques, real estate, and vehicles.
- One complete asset dossier per category.
- At least 15 bid records for live-room pagination/scroll behavior.
- At least one empty account and one populated account fixture.
- At least one success and one recoverable-error fixture for every form flow.

Suggested adapter boundary:

```ts
interface AuctionRepository {
  list(input: AuctionListQuery): Promise<Paginated<AuctionSummary>>
  getById(id: string): Promise<AuctionDetail | null>
  getBids(id: string): Promise<Bid[]>
}
```

The mock repository implements this contract now. A future API repository must replace it without changing page composition or visual components.

## 19. Shared component contracts

| Component               | Minimum public contract                                         | Notes                                                                        |
| ----------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `SiteHeader`            | `variant: "overlay" \| "solid"`, `session`, `activePath`        | One component for landing and functional screens; keyboard-safe mobile menu. |
| `SiteFooter`            | `variant?: "default" \| "landing"`                              | Must include discovery, support, and legal links.                            |
| `AuctionCard`           | `auction`, `density`, `showCountdown`, `priorityImage?`         | No route-specific duplicated card markup.                                    |
| `AuctionStatusBadge`    | `status`, `label?`                                              | Maps status to semantic token plus visible text.                             |
| `AuctionCountdown`      | `endsAt`, `onElapsed?`, `compact?`                              | Cleans timer on unmount; has static reduced-motion presentation.             |
| `MoneyValue`            | `value`, `currency`, `emphasis?`                                | Uses `Intl.NumberFormat("vi-VN")`; no preformatted fixture strings.          |
| `FilterPanel`           | `value`, `options`, `onChange`, `onClear`                       | Same model for desktop sidebar and mobile drawer.                            |
| `AppliedFilterChips`    | `filters`, `onRemove`, `onClearAll`                             | Each removal is keyboard accessible.                                         |
| `AssetGallery`          | `images`, `activeIndex`, `onIndexChange`                        | Thumbnail navigation, lightbox, alt text, keyboard arrows.                   |
| `AuctionSummaryPanel`   | `auction`, `registrationState`, `onPrimaryAction`               | Primary CTA varies by state.                                                 |
| `BidConfirmationDialog` | `amount`, `currentPrice`, `bidStep`, `pending`, `onConfirm`     | Focus trap and explicit monetary confirmation.                               |
| `StateNotice`           | `kind`, `title`, `description`, `action?`                       | Shared empty, error, offline, permission, and session-expired presentation.  |
| `FormField`             | `name`, `label`, `description?`, `error?`, `required?`          | Generates stable IDs and `aria-describedby`.                                 |
| `FileDropzone`          | `files`, `accept`, `maxFiles`, `onAdd`, `onRemove`, `onReorder` | Local preview only in this phase.                                            |
| `StepIndicator`         | `steps`, `currentStep`, `completedSteps`                        | Uses text and number, not color alone.                                       |
| `AccountSidebar`        | `items`, `activePath`, `session`                                | Becomes a select/menu on small screens.                                      |
| `ConfirmDialog`         | `title`, `description`, `confirmLabel`, `tone`, `pending`       | Used only for consequential actions.                                         |

Component rules:

- Prefer semantic props over arbitrary class-name APIs for visual variants.
- Components may accept `className` for layout composition but not to bypass locked visual tokens.
- Buttons built from `components/ui/button.tsx` must be restyled to match the minimum 44–48px target and the editorial `4px` radius before broad reuse.
- Forms must use the existing React Hook Form and Zod dependencies for consistent frontend validation.

## 20. Asset specification

### 20.1 Approved local assets

| Asset                             | Dimensions  | Intended use           | Required treatment                                                  |
| --------------------------------- | ----------- | ---------------------- | ------------------------------------------------------------------- |
| `/assets/landing/hero.mp4`        | Video       | Landing hero           | Autoplay muted loop, poster fallback, no essential content in video |
| `/assets/landing/hero-poster.jpg` | `1920×1080` | Landing hero fallback  | Cover crop; keep focal area readable under veil                     |
| `/assets/landing/products/1.jpg`  | `768×769`   | Auction-card fixture   | Near-square crop                                                    |
| `/assets/landing/products/4.jpg`  | `768×769`   | Auction-card fixture   | Near-square crop                                                    |
| `/assets/landing/products/5.jpg`  | `768×769`   | Auction-card fixture   | Near-square crop                                                    |
| `/assets/pages/login-v2.png`      | `1792×2400` | Login split-screen art | Portrait crop, focal point around `62% center`                      |
| `/assets/pages/register.webp`     | `1792×2400` | Registration art       | Portrait crop with bottom copy-safe area                            |
| `/assets/pages/about.webp`        | `2752×1536` | About hero             | Wide editorial crop                                                 |
| `/assets/pages/contact.webp`      | `1792×2400` | Contact/support art    | Portrait crop                                                       |
| `/assets/image01.jpg`             | `650×500`   | Legacy fallback only   | Replace when the related template is removed                        |

### 20.2 Asset rules

- Replace every `lh3.googleusercontent.com/aida-public/...` reference with a local project asset before a screen is complete.
- Use `next/image` for content images unless a CSS background or video is required.
- Auction-card source images should be at least `1200px` on the long edge; detail-gallery images should be at least `1600px`.
- Supported source format preference: AVIF/WebP for photography, SVG for icons and logos, PNG only when transparency or existing approved art requires it.
- Store auction assets under `public/assets/auctions/<auction-id>/` and reusable page art under `public/assets/pages/`.
- File names use lowercase kebab-case and describe content, not generation IDs.
- Each informative image has object-specific Vietnamese alt text. Decorative images use `alt=""`.
- Never hotlink temporary generative-image or Google preview URLs in production UI.

Additional assets required to finish all fixtures:

- Four category-cover images.
- At least three detail-gallery images for each complete mock asset.
- Organizer logo placeholders or a consistent monogram treatment.
- Neutral empty-state illustration or icon system.
- Optional VietAuction wordmark SVG; until supplied, retain the text wordmark.

## 21. Content specification

- Primary interface language is Vietnamese.
- Use “Tài sản” for the browse navigation label and “Phiên đấu giá” when referring to an auction event.
- Use “Gửi tài sản” for the seller CTA and `/sell` as its canonical route.
- Use “Email hoặc tên đăng nhập” as the single login identifier label.
- Use “Giá khởi điểm”, “Giá hiện tại”, “Bước giá”, “Tiền đặt trước”, and “Phí đăng ký” consistently.
- Do not use “sưu tầm” as the default product verb for real estate, vehicles, or general assets.
- Do not claim “hàng đầu”, guaranteed valuation time, verified provenance, member tier, balance, favorite count, or bidding limit unless labelled as demonstration data.
- Form errors state the problem and resolution, for example: “Số điện thoại chưa đúng định dạng. Vui lòng nhập 10 chữ số.”
- Empty states explain why the list is empty and expose one next action.
- Destructive confirmation text names the action and affected item.

## 22. Acceptance tests

### 22.1 Global shell

- Header uses the same four navigation labels on every route.
- Active navigation is communicated by text/border and `aria-current`.
- Mobile menu opens, closes with Escape, closes after route selection, and returns focus to its trigger.
- Footer appears on all public and member pages except intentionally focused auth screens.
- No internal link resolves to a 404.

### 22.2 Auction discovery

- Search by title or lot number updates the result set.
- Every filter changes mock results and can be removed independently.
- Sorting supports at least newest, ending soon, price ascending, and price descending.
- Pagination preserves filters and sort in the URL.
- Zero results display a clear-all action.
- Card status, price label, CTA, and countdown match the auction state.

### 22.3 Detail and registration

- Gallery works by pointer and keyboard.
- The primary CTA changes correctly for all detail states.
- Registration cannot advance with unchecked required consent.
- Fee and deposit are never combined into one ambiguous amount.
- Processing prevents duplicate submission.
- Success, already-registered, closed, and failure states remain visible after the action.

### 22.4 Live auction

- Bid controls are disabled before connection and after auction end.
- A bid cannot be submitted below the next minimum amount.
- Confirmation shows the exact formatted amount.
- Accepted, rejected, and outbid simulations update visible state.
- Reconnecting state keeps history visible and prevents submission.
- Price changes are announced without repeatedly reading the entire page.

### 22.5 Forms and account

- Every control has a programmatic label.
- Invalid fields receive focus on submit and connect error text with `aria-describedby`.
- Seller-wizard Back/Next preserves values.
- Refresh restores a saved seller draft after explicit opt-in.
- Account pages work with both populated and empty fixtures.
- No fabricated financial or membership claim is presented as real user data.

### 22.6 Responsive and visual QA

Test at `375×812`, `768×1024`, `1024×768`, and `1440×900`:

- No horizontal page overflow.
- No overlapping sticky header, drawer, dialog, or action bar.
- Primary CTA remains visible or reachable without precision scrolling.
- Body text is at least `16px` on mobile.
- Touch targets are at least `44px`.
- Long Vietnamese labels wrap without clipping.
- Image focal points remain meaningful at every crop.

### 22.7 Engineering QA

- `npm run lint` passes without new errors.
- `npm run typecheck` passes.
- `npm run build` passes.
- Browser console has no uncaught errors or failed local asset requests.
- All timer effects, subscriptions, and simulated events clean up on unmount.
- No page component contains large duplicated fixture arrays.

## 23. SEO, metadata, and performance

- Every public route defines a unique Vietnamese title and description.
- Auction detail metadata derives from the stable mock record.
- Use one `h1` per page and semantic heading order.
- Add Open Graph image metadata for landing, about, and auction details.
- Legal and authentication-result screens may use `noindex` when appropriate.
- Use canonical target URLs, never legacy aliases, in metadata.
- Prioritize only the landing hero or first meaningful detail image.
- Lazy-load below-the-fold media and reserve dimensions to prevent layout shift.
- Avoid client components when no interaction or browser API is needed.
- Target Lighthouse baselines for public pages: Accessibility `≥95`, Best Practices `≥90`, SEO `≥90`; performance regressions require documented review rather than invented guarantees.

## 24. Implementation order and dependencies

1. **Foundation:** route constants, mock types/repositories, design tokens, button/form normalization, global state components.
2. **Shared shell:** one header, one footer, account layout, legal/help links, not-found page.
3. **Discovery:** landing cards, auction list, filters, query state, dynamic detail.
4. **Participation:** registration and live-auction simulation.
5. **Authentication:** login, registration, recovery, activation, and mock session selection.
6. **Account:** profile, security, auctions, transactions, and submitted assets.
7. **Seller:** four-step submission, local preview, draft, review, success, and asset timeline.
8. **Hardening:** asset localization, state coverage, responsive QA, accessibility, metadata, lint, typecheck, and build.

Dependencies:

- Dynamic detail, registration, and live room depend on stable auction IDs and the mock repository.
- Account lists depend on the shared account layout and state components.
- Seller asset tracking depends on the submission data contract and local draft adapter.
- Full QA begins only after remote temporary assets and legacy route links are removed.

## 25. Assumptions and decision log

The following decisions are locked for this frontend-only phase unless the product owner changes them explicitly:

- VietAuction remains a multi-category asset-auction platform; jewelry is one category, not the entire global product vocabulary.
- Vietnamese is the primary UI language. English localization is not included in this phase.
- Canonical URLs use `/auctions`, `/sell`, `/register`, and `/account/*`; current URLs remain as redirects.
- Authentication, payment, upload, WebSocket, and authorization behavior are simulated locally.
- Public pages default to the light paper theme. Dark surfaces are used intentionally for hero, footer, and live-auction emphasis; a visible theme switch is not required.
- Existing approved local page artwork is retained. Temporary remote `aida-public` images are not approved production assets.
- Desktop and mobile are both release requirements; tablet is not treated as a stretched desktop layout.
- No automatic commit or push occurs after implementation without explicit user instruction.

Questions that require product-owner input only if these assumptions change:

- Whether VietAuction should become jewelry-only instead of multi-category.
- Whether English localization is required in the first release.
- Whether a visible light/dark theme control is a product feature.
- Whether exact legal, fee, deposit, and identity-verification copy has been approved by legal/operations.
- Whether new photography should be generated or supplied for all remaining auction fixtures.
