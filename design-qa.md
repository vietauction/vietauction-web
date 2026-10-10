# VietAuction landing page QA

source visual truth: user-provided SOSCALE landing-page prompt at `/Users/phungthanh/.codex/attachments/d0fe6ca0-efaf-49cf-ac9f-124cd6dc918e/Văn bản đã dán.txt`.
implementation: `http://localhost:3001/`.
viewport: Chrome desktop capture, 1470 × 778 CSS px, default density.
state: default desktop hero after entrance animation.

## Comparison evidence

- Full view: the implementation preserves the requested full-viewport black hero, image reveal through a large wordmark, three-column navigation, lilac CTA, bottom-anchored headline, and verification row.
- Focused regions: top navigation/CTA, masked wordmark, and bottom conversion copy were checked in the rendered browser view. No focused-region P0/P1/P2 mismatch remains.

## Required fidelity surfaces

- Fonts and typography: self-hosted Gilroy Việt hoá is the active system—Bold (`700`) for the wordmark and H1–H6, Medium (`500`) for body and non-price numeric data, and SemiBold (`600`) for monetary prices.
- Spacing and layout rhythm: desktop reference-unit positioning and compact breakpoints are implemented in scoped landing-page CSS; the hero is fixed and non-scrolling.
- Colors and visual tokens: black stage, cool gray navigation, lilac CTA, green verification marks, and white copy match the prompt's palette.
- Image quality and asset fidelity: the existing architectural asset is used as the hero image so the creative is relevant to VietAuction instead of the prompt's fashion reference.
- Copy/content: SOSCALE messaging is adapted to VietAuction auction discovery, verified asset records, and Vietnamese navigation routes.

## Interaction checks

- Primary CTA and navigation links point to existing project routes.
- Compact menu state is implemented with Escape and outside-pointer close behavior.
- `npm run typecheck`: passed.
- `npm run build`: passed.
- Browser console errors: none observed.

final result: passed
