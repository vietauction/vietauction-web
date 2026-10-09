# VietAuction UI/UX Instructions

This file is the design baseline for all future UI and UX changes in this project. Preserve existing behavior unless a task explicitly changes it.

## 1. Product principles

- Make auction status, pricing, time remaining, and next actions easy to identify at a glance.
- Prefer clear Vietnamese labels over internal terminology or decorative copy.
- Build trust through consistent layouts, calm motion, verified information, and visible contact/help paths.
- Do not introduce a new visual direction for one page. Extend the closest existing pattern instead.

## 2. Typography

- App UI: use `Inter` for body text and `Be Vietnam Pro` for conventional application headings.
- Editorial landing (`.dgs-landing`): use `DgsDisplay` for headings/body and `DgsMono` only for labels, metadata, counters, and navigation accents.
- Use sentence case for normal UI. Use uppercase only for concise eyebrow labels or metadata.
- Keep body copy at least 16px on mobile. Avoid text below 12px; 11–12px is reserved for non-essential metadata.
- Maintain readable line height: 1.5–1.65 for body text, 1.0–1.15 for display headings.

## 3. Layout and spacing

- Use a 4px spacing rhythm. Typical section padding: 80px mobile, 120–130px desktop.
- Keep content within `max-width: 1320px` for editorial landing sections and `max-w-screen-2xl` for application routes.
- Mobile is a first-class layout, not a scaled desktop view. Grids must reflow to one column when content would become cramped.
- Hero sections need one visible primary CTA and a clear secondary action.
- Every route must finish with an intentional closing surface: footer, legal/help links, or an explicit task completion state.

## 4. Color and surface rules

- App routes use the existing token system in `app/globals.css`; do not hard-code a new palette when an existing token fits.
- The editorial landing uses paper `#f5f1e9`, ink `#16130f`, gold `#cba765`, and dark footer `#181510`.
- Text must remain legible over imagery. Use a contrast veil rather than lowering text opacity too far.
- Do not use color as the only way to convey auction state; include a text label such as “Đang diễn ra” or “Sắp mở”.

## 5. Components and interactions

- Reuse `SiteHeader`, `SiteFooter`, and existing UI components when their visual variant fits. Add a scoped variant instead of changing every route unintentionally.
- Navigation must remain discoverable at all widths. Desktop navigation may collapse on mobile only when a keyboard-accessible menu replaces it.
- Interactive controls need a visible hover/focus state and a comfortable touch target (at least 44px high or wide).
- Links must lead to valid routes. Avoid visual-only buttons for primary user flows.
- Respect `prefers-reduced-motion`; no essential information may depend on animation.

## 6. Content and assets

- Use content and images that match the active VietAuction category. Do not leave jewelry, real-estate, or architecture copy mixed on the same flow without a stated product reason.
- Use real, licensed project assets. Optimize images and provide meaningful alt text.
- Do not display invented performance claims as factual metrics; label demonstrations clearly or connect to a verified source.

## 7. Accessibility and QA

- Use semantic landmarks: one `h1` per page, ordered headings, labelled navigation, and a footer when the page has site-wide navigation/contact details.
- Test desktop, mobile, keyboard navigation, and both light/dark token contexts when applicable.
- Before handoff, run typecheck, build, and lint. Treat new lint errors as blockers; document any retained warnings.
- Visually inspect the hero, an information-heavy section, and the page ending after every landing-page change.
