# Bridgepath production route QA

- Last verified: 29 July 2026
- Branch: `agent/update-bridgepath-visual-environments`
- Current route: Welcome → StoryPath → Arouca Groove → Corner Shop Challenge
- Canonical URL: `/storypath`; `/karina` is redirect-only compatibility
- Viewports: mobile 390×844, tablet 820×1180, desktop 1440×900
- Framework: Next.js 16 / React 19

## Outcome

The complete production walking skeleton is navigable and the five Corner Shop phases complete successfully. All 18 map hotspots have semantic names, Stop 5 is available, and completion persists after refresh. Automated production E2E coverage passes at all three responsive profiles.

## Findings

1. **High — market character layers await visual approval.** Approved runtime mentor files exist, but Mr. Ali and every customer are intentionally omitted from the three current market compositions.
2. **High — two customer source exports remain missing.** Miss Maria and Mr. Thomas cannot be composed without approved Scene Designer source artwork.
3. **High — market activity layers await visual approval.** Approved rice/flour runtime files exist, but products and other activity objects are intentionally omitted from the current composition-preview state.
4. **Medium — Welcome has no help/settings controls.** Utility controls begin on the StoryPath route.
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
- Replaced stale StoryPath Village E2E coverage with production route tests at mobile, tablet and desktop sizes.
- Canonicalized navigation and assertions on `/storypath` and added direct E2E coverage for the `/karina` compatibility redirect.
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
