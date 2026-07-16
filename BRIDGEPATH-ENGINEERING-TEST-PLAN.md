# Bridgepath Engineering Test Plan

**Status:** Proposed with the engineering architecture; implementation has not begun.

## Purpose

This plan verifies the production replacement, not the current local-storage prototype. The test environment uses deterministic content and family seed data against isolated local Supabase/PostgreSQL infrastructure.

## Affected production routes

- Public: welcome hub, family explanation, help and privacy.
- Parent auth: registration, verification, login, recovery, consent and recent reauthentication.
- Family: child creation, picture PIN, profile selection, switching, linking, export and deletion.
- Child: entry, country map, Standard 3 Mathematics town, Storypath School, Corner Shop, activity runtime, support, results and resume.
- Parent: family overview, child curriculum detail, evidence-backed support recommendations and recent activity.
- Server: child-session issue/revoke, content manifest, activity session, command/evidence ingestion, resume, projections, rewards and privacy operations.

## Critical path matrix

| Path | Expected result | Main test layers |
|---|---|---|
| Parent registers and consents | verified family exists; child data remains inactive before approval | route integration, database, Playwright |
| Parent creates two children | unique PIN hashes and isolated profiles | database, RLS, Playwright |
| Child enters with picture PIN | one short-lived revocable child session is issued | route integration, security, Playwright |
| Profile switch | previous child session and local family-scoped state are invalidated | integration, Playwright |
| Content publish | only schema-valid, accessible, reference-complete bundles become available | contract, integration |
| Corner Shop learning journey | all five plugins share lifecycle/evidence/resume contracts | plugin contract, Playwright |
| Incorrect/repeated errors | scaffolding changes; content remains accessible | unit, plugin, Playwright |
| Interrupted/reconnected command | accepted once; correct safe resume returned | integration, resilience, Playwright |
| Projection rebuild | new rule version changes projection without rewriting evidence | unit, database integration |
| Parent report | summary reconciles to evidence IDs, bundle version and rule version | integration, Playwright |
| Consent withdrawal/deletion | sessions revoke and data follows approved lifecycle | integration, Playwright, operations |

## Edge and abuse cases

- Incorrect, expired, reused, malformed, and brute-forced family/link/PIN codes disclose no profile information.
- Child attempts parent endpoints, sibling IDs, another family ID, unpublished content, arbitrary objective IDs, fabricated mastery, reward inflation, and replayed commands.
- Two tabs submit the same or conflicting command; idempotency and sequence rules return deterministic results.
- Session expires before, during, and after submission; accepted work is distinguished from unaccepted work.
- Connection fails during each plugin type; commands remain bounded and resume at the declared safe boundary.
- IndexedDB is missing, unavailable, corrupt, stale, or belongs to the previous child.
- Content bundle, plugin version, asset, or audio manifest is missing or does not match the active session.
- Projection processing is delayed or fails; parent views retain last-good data with an explicit updated time.
- Duplicate projection jobs, database retries, storage outages, and migration failures cannot duplicate evidence or rewards.
- Text is enlarged to 200%; keyboard-only, screen-reader, reduced-motion, audio-off, failed-audio, portrait and landscape paths remain complete.

## Failure-mode expectations

| Failure | Child/parent experience | System behaviour | Required proof |
|---|---|---|---|
| Invalid bundle | destination unavailable with safe return | publication rejected; no partial activation | contract test |
| Missing plugin | activity never opens | bundle rejected or rollout withdrawn | registry/integration test |
| Expired child session | neutral re-entry prompt | no mutation; token revoked/rotated | route and E2E test |
| Duplicate command | original accepted result | same receipt returned; no duplicate side effects | transaction test |
| Sequence conflict | reload latest safe state | reject stale mutation with conflict metadata | integration/E2E test |
| Projection delay | last updated status | durable retry; evidence remains intact | worker/integration test |
| Asset failure | readable alternative and retry | layout remains usable; failure logged without child data | browser test |
| Consent revoked | child access ends safely | all sessions revoked; privacy workflow starts | integration/E2E test |
| Cross-family attempt | generic denied response | endpoint and RLS both deny; security audit event | negative RLS test |
| Deletion during session | signed-out privacy message | new writes blocked; lifecycle is idempotent | integration test |

## Performance and compatibility

Benchmark the approved routes on representative Android hardware, iPhone/iPad Safari, Chromebook-class devices, Windows, portrait/landscape, and constrained Caribbean connections. Provisional budgets are LCP 2.5 seconds, INP 200 milliseconds, CLS 0.1, route-owned initial JavaScript 200 KB gzip excluding framework runtime, current content data 150 KB compressed, and first-view responsive media 1.5 MB. A later benchmark may tighten or replace these values before pilot approval.

## Manual gates

Automation does not pass a milestone alone. Each release candidate requires:

- local educator reconciliation of objectives, misconceptions, and mastery evidence;
- target-age child usability sessions for navigation, explanations, support and stopping points;
- parent comprehension review of progress language and suggested help;
- keyboard and screen-reader sampling on real browsers;
- shared-device privacy review;
- export/deletion and backup-restore exercise;
- console/network inspection and approved visual-baseline review.

## Initial production test backlog

1. Deterministic family, child, curriculum, bundle, evidence and projection fixtures.
2. Migration forward tests and constraints.
3. RLS allow/deny matrix for parent, child, sibling, other family and administrative workflows.
4. Bundle and plugin compatibility fixtures, including intentionally invalid packages.
5. Domain tests for progression, mastery rules, projection explanations, rewards and summaries.
6. API tests for validation, cookies, origin/CSRF, rate limits, idempotency and sequence conflicts.
7. Playwright projects for desktop, tablet and phone journeys.
8. Accessibility harness and manual-assistive-technology checklist.
9. Network/resume and duplicate-delivery fault injection.
10. Performance baselines and visual snapshots for every review gate.
