# VietAuction UI/UX Instructions

This file is the mandatory design baseline for every existing and future VietAuction screen. The landing page is the canonical visual source. Preserve existing behavior unless a task explicitly changes it.

## 0. Architecture enforcement

- Approach every UI task as a Senior Fullstack Developer & Frontend Architect: validate the user journey, data contract, loading/error/empty states, accessibility and responsive behavior together.
- Reuse semantic tokens from `app/globals.css`, `.va-*` primitives and `components/ui/` before introducing a new style or component.
- Do not invent generic token names from external templates. VietAuction's actual paper/ink/gold tokens and component contracts are the source of truth.
- Do not add raw HEX values, arbitrary pixel values or inline styles in feature code when an existing token or spacing step expresses the same intent. A new value must first be justified and promoted to a documented shared token.
- Keep business and transport logic out of presentational components. Protected API traffic goes through same-origin Next.js Route Handlers; credentials and JWTs must never be stored in browser localStorage.
- Every data-driven screen must deliberately handle default, loading, empty, validation/error, disabled and success states applicable to its flow.

## 1. Product principles

- Make auction status, pricing, time remaining, and next actions easy to identify at a glance.
- Prefer clear Vietnamese labels over internal terminology or decorative copy.
- Build trust through consistent layouts, calm motion, verified information, and visible contact/help paths.
- Do not introduce a page-specific visual direction. Extend the landing-derived tokens and shared patterns below.

## 2. Canonical design source

- Treat the home landing page as the source of truth for color, typography, spacing, borders, buttons, cards, imagery, and motion.
- Global design tokens live in `app/globals.css`. Reuse semantic tokens and `.va-*` primitives before adding route-specific values.
- Shared navigation and footer must visually belong to the same paper/ink/gold system as the landing page.
- Functional screens may use denser layouts than the landing page, but must not switch to a separate brand system.

## 3. Typography

| Content role                                                               | Required font and weight           | Required implementation                                                               |
| -------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------- |
| VietAuction wordmark and H1–H6                                             | `Gilroy Bold Việt hoá` (`700`)     | Use semantic heading elements; the shared wordmark may use `.va-logo`.                |
| Body, navigation, buttons, controls, forms, helper text, and metadata      | `Gilroy Medium Việt hoá` (`500`)   | Inherit the global `font-sans`; do not declare a page-specific font family.           |
| Countdown, lot code, date, time, counter, and other non-price numeric data | `Gilroy Medium Việt hoá` (`500`)   | Use `.font-numeric` when tabular-number alignment is useful; never use `.font-price`. |
| Any monetary amount                                                        | `Gilroy SemiBold Việt hoá` (`600`) | Always apply `.font-price`; it may be combined with `.font-numeric`.                  |

Typography implementation rules:

- Classify text by meaning, not by its displayed size. A small price is still SemiBold `600`; a large countdown is still Medium `500`.
- `.font-price` is mandatory for every monetary value, including current price, starting price, bid step, deposit, registration fee, transaction amount, proposed bid, and bid-history amount.
- Every rendered output of `formatMoney(...)` must have `.font-price` on the output element or its dedicated price wrapper.
- Do not apply `.font-price` to countdowns, dates, times, lot IDs, quantities, percentages, or counters unless the value itself is money.
- Do not add Google Fonts, other remote fonts, fallback brand fonts, or raw page/component-level `font-family` declarations.
- Keep the local Medium (`500`), SemiBold (`600`), and Bold (`700`) files registered in `app/layout.tsx`; keep shared typography behavior in `app/globals.css`.
- When adding or changing price UI, review every affected `formatMoney(...)` call before handoff.
- Use sentence case for normal UI. Use uppercase only for concise eyebrow labels or metadata.
- Keep body copy at least 16px on mobile. Avoid text below 12px; 11–12px is reserved for non-essential metadata.
- Maintain readable line height: 1.5–1.65 for body text, 1.0–1.15 for display headings.
- Do not synthesize or substitute typography weights: use local Medium (`500`), SemiBold (`600`), and Bold (`700`) font files through `next/font/local`.

## 4. Layout and spacing

- Use a 4px spacing rhythm. Typical section padding: 80px mobile, 120–130px desktop.
- Keep all primary content within a shared maximum width of 1320px.
- Mobile is a first-class layout, not a scaled desktop view. Grids must reflow to one column when content would become cramped.
- Hero sections need one visible primary CTA and a clear secondary action.
- Every route must finish with an intentional closing surface: footer, legal/help links, or an explicit task completion state.

## 5. Color and surface rules

- Core palette: paper `#f5f1e9`, ink `#16130f`, gold `#cba765`, dark `#181510`, warm white `#fffdf9`, and warm border `#d8cdbd`.
- Use dark ink for primary actions, gold for premium emphasis, and paper/warm-white surfaces for content. Do not reintroduce blue/orange application palettes.
- Use accessible darker gold derivatives for small text on paper; the canonical gold may be used for backgrounds, borders, large accents, and text on dark surfaces.
- Semantic live, upcoming, ended, verified, destructive, and success colors are permitted. Always pair them with a text label or icon and harmonize their surrounding surface with the core palette.
- Text must remain legible over imagery. Use a contrast veil rather than lowering text opacity too far.
- Do not use color as the only way to convey auction state; include a text label such as “Đang diễn ra” or “Sắp mở”.

## 6. Components and interactions

- Reuse `SiteHeader`, `SiteFooter`, `.va-container`, `.va-card`, `.va-field`, `.va-button-*`, and existing UI components.
- Prefer crisp editorial borders and restrained shadows. Avoid decorative rounded cards, pills, and gradients unless they express state or a real interaction.
- Navigation must remain discoverable at all widths. Desktop navigation may collapse on mobile only when a keyboard-accessible menu replaces it.
- Interactive controls need a visible hover/focus state and a comfortable touch target (at least 44px high or wide).
- Links must lead to valid routes. Avoid visual-only buttons for primary user flows.
- Use restrained motion from the landing page: 180–240ms transitions and subtle 2–4px translation or image scale. Respect `prefers-reduced-motion`; no essential information may depend on animation.

## 7. Content and assets

- Use content and images that match the active VietAuction category. Do not leave jewelry, real-estate, or architecture copy mixed on the same flow without a stated product reason.
- Use real, licensed project assets. Optimize images and provide meaningful alt text.
- Do not display invented performance claims as factual metrics; label demonstrations clearly or connect to a verified source.

## 8. Accessibility and QA

- Use semantic landmarks: one `h1` per page, ordered headings, labelled navigation, and a footer when the page has site-wide navigation/contact details.
- Test desktop, mobile, keyboard navigation, and both light/dark token contexts when applicable.
- Before handoff, run typecheck and lint when permitted. Production builds are owned by CI/CD unless the user explicitly requests a local build; treat new validation errors as blockers and document retained warnings.
- Visually inspect the hero, an information-heavy section, and the page ending after every landing-page change.
- Inspect shared header/footer plus at least one dense functional screen whenever global tokens change.
