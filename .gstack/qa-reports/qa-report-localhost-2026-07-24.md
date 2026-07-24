# Bridgepath production route QA

- Date: 24 July 2026
- Branch: `agent/update-bridgepath-visual-environments`
- Route: Welcome → Karina → Arouca Groove → Corner Shop Challenge
- Viewports: mobile 390×844, tablet 820×1180, desktop 1440×900
- Framework: Next.js 16 / React 19

## Outcome

The complete production walking skeleton is navigable and the five Corner Shop phases complete successfully. All 18 map hotspots have semantic names, Stop 5 is available, and completion persists after refresh. Automated production E2E coverage passes at all three responsive profiles.

## Findings

1. **High — approved mentor sprites are absent.** Mr. Ali and Ms. Leela remain labelled placeholders because the repository contains model sheets but no approved transparent runtime cut-outs.
2. **High — customer artwork is absent.** A larger grounded Corner Shop customer cannot be composed without inventing art.
3. **High — product artwork is absent.** Rice, fruit and juice now have separate accessible interactive DOM layers, but approved transparent product images are not present.
4. **Medium — Welcome has no help/settings controls.** Utility controls begin on the Karina route.
5. **Medium — persistence is browser-local only.** This is suitable for the walking skeleton, not the production account/evidence model.
6. **Medium — dependency audit reports four high-severity findings.** These need a focused dependency/security review before pilot release.

## Fixes verified

- Added dynamic `0/18` and `1/18` progress to the approved map plaque.
- Kept lesson back/home/help/settings controls available on reflection/results.
- Moved the Corner Shop register left and away from clipping.
- Layered the Mr. Ali placeholder behind the register and preserved a waist-up slot for the approved sprite.
- Moved Niko and Zuri away from the register controls and behind the mobile activity surface.
- Converted products into separate accessible interactive DOM layers while preserving names and prices as text.
- Added a high-visibility focus ring to the scrollable country map.
- Replaced stale Storypath Village E2E coverage with production route tests at mobile, tablet and desktop sizes.
- Added a Windows-safe E2E production-server runner.

## Screenshots

Screenshots are stored in `.gstack/qa-reports/screenshots/`. Files ending in `-before.png` show the PR baseline; files ending in `-after.png` show the refined Corner Shop composition.

## Health snapshot

- Console/load: 100
- Route/navigation: 100
- Functional: 92
- Responsive visual composition: 78
- Accessibility: 88
- Content/canonical geography: 100
- Overall: 91/100

Remaining visual score is blocked primarily by missing approved transparent artwork, not by an authorization to generate replacements.
