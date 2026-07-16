# Bridgepath Engineering Architecture Plan

## Status

Engineering review draft for founder approval. This document defines architecture and phased execution only. It does not authorise implementation.

**Review target:** the approved Bridgepath product specification, Standard 3 Mathematics curriculum journey, 18 child-facing destinations, recurring character system, Storypath Primary School-to-town flow, design system, and existing exploratory prototype.

**Founder decisions incorporated:**

1. The first release/content boundary is the complete 18-destination Standard 3 Mathematics town.
2. The first implementation milestone is one complete Corner Shop vertical slice.
3. The platform uses reusable domain models and activity plugins that can later serve all six towns.
4. Versioned, schema-validated repository content packages are the first authoring adapter; the immutable published bundle is the permanent contract.
5. Parents authenticate through Supabase. Children use server-issued, revocable child sessions under a parent-owned family.
6. Academic evidence is append-only; server-derived projections produce current status and reports.
7. The activity runtime is a typed registry of purpose-built plugins behind one lifecycle/evidence contract.
8. Progress is server-authoritative with an IndexedDB outbox for short-disconnection recovery.
9. The production stack is Next.js, React, TypeScript, Supabase Auth, and PostgreSQL.
10. The existing monolithic prototype is retired incrementally through a strangler replacement.
11. Authorization and persistence are tested against an isolated local Supabase/PostgreSQL environment, not mocks alone.
12. Content is delivered in route-level immutable bundles with controlled prefetching.

## 1. Engineering architecture summary

Bridgepath should be one modular web application with five explicit layers:

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Experience delivery                                                  │
│ Next.js routes, maps, school scenes, activities, parent dashboard    │
├──────────────────────────────────────────────────────────────────────┤
│ Runtime contracts                                                    │
│ content loader, activity registry, session orchestration, resume     │
├──────────────────────────────────────────────────────────────────────┤
│ Domain services                                                      │
│ family, progression, evidence, mastery, reporting, rewards, consent  │
├──────────────────────────────────────────────────────────────────────┤
│ Adapters                                                             │
│ Supabase Auth/Postgres/Storage, content bundles, email, verification │
├──────────────────────────────────────────────────────────────────────┤
│ Durable records                                                      │
│ relational state + append-only academic evidence + projections       │
└──────────────────────────────────────────────────────────────────────┘
```

The application is not organised around eighteen custom destination pages. A destination is a content composition: school lesson, transition, story scene, community mission, registered activity plugins, support branches, evidence requirements, reward, and progression metadata. React components implement reusable mechanics; immutable bundles configure them.

The server owns every trust decision. Browsers may render content, hold temporary interaction state, and submit observations. They may not authenticate a parent, choose a child authorization scope, classify an observation as independent, assign mastery, grant a reward, or advance protected progress without server validation.

The architecture deliberately does **not** event-source the whole product. Family relationships, sessions, consent, preferences, rewards, and adventure progress are ordinary relational records. Only academic observations are immutable append-only events because their historical meaning and auditability matter.

## 2. Recommended technical stack

### Selected stack

| Concern | Recommendation | Reason |
|---|---|---|
| Application | Next.js 16 App Router, React 19, TypeScript strict mode | Existing foundation; server and client composition; route splitting; accessible DOM interaction |
| Server boundary | Next.js Route Handlers and server-only application services on Node runtime | Keeps child sessions, content validation, and evidence commands off the client |
| Parent authentication | Supabase Auth through server-side cookie integration | Managed recovery/verification while parents remain the only Auth users |
| Database | Supabase PostgreSQL with migrations, constraints, transactions, RLS, and indexed projections | Natural fit for curriculum, families, evidence provenance, and reporting |
| Child authentication | Bridgepath child-session service with opaque token in secure HTTP-only cookie | Children need no email and receive only child-scoped capabilities |
| Content authoring | Repository YAML/JSON packages validated against versioned schemas | Diffable, reviewable, testable first-town authoring without a premature CMS |
| Published content | Immutable JSON bundles and versioned asset manifests in object storage/CDN; registry row in PostgreSQL | Permanent vendor-neutral contract and exact evidence provenance |
| Runtime validation | JSON Schema for published contract plus TypeScript generated types; a validator such as Ajv | Cross-language/vendor contract without trusting TypeScript compile time alone |
| Forms/commands | Explicit request schemas and server validation; avoid accepting arbitrary bundle objects from clients | Small, auditable command surface |
| Client recovery | IndexedDB outbox and versioned activity-resume snapshots | Survives short outages without making the client authoritative |
| Animation | CSS first; Motion for React only for orchestrated transitions | Reduced cost and good reduced-motion control |
| Audio | HTML Audio/Web Audio adapter behind audio manifest; no recorded voice in first build | Future-ready without coupling activity logic to recordings |
| Unit/component tests | Vitest and Testing Library | Existing TypeScript toolchain and fast domain/plugin feedback |
| Integration tests | Local Supabase CLI/PostgreSQL with deterministic migrations and seeds | Tests real RLS, constraints, transactions, and projections |
| Browser tests | Playwright across Chromium, WebKit, and supported mobile/tablet emulation | Existing tool; complete parent/child flow coverage |
| Accessibility | axe automation plus manual keyboard, screen-reader, switch, touch, zoom, and reduced-motion checks | Automation alone cannot establish WCAG 2.2 AA |
| Observability | Structured redacted server logs, error tracking, request IDs, projection lag and command metrics | Diagnoses failures without logging child responses unnecessarily |
| Deployment | Vercel plus managed Supabase is the leading candidate; final regions/contracts remain an approval gate | Small-team operations and native Next.js delivery; adapter boundaries preserve exit options |

### Stack comparison

| Option | Strength | Main weakness | Verdict |
|---|---|---|---|
| Next.js + Supabase/PostgreSQL | Relational evidence, one TypeScript application, RLS defence, existing codebase | Requires strict server/client boundary and region review | **Selected** |
| Next.js + Firebase/Firestore | Realtime SDKs, emulator, offline support | Denormalised curriculum/evidence, last-write-wins conflicts, rules/query coupling | Rejected for core records |
| React SPA + separate API + PostgreSQL | Strong deployment separation | Adds CORS, sessions, two deployments, duplicated DX and observability | Defer until scale justifies services |

Use established framework primitives before new infrastructure. Next.js route handlers provide the backend-for-frontend boundary, and PostgreSQL provides constraints, transactions, views, recursive prerequisite queries, and RLS. Do not add GraphQL, microservices, Kafka, Redis, or a workflow platform to the first town without a measured need.

## 3. System boundaries

```text
                       PUBLISHED, IMMUTABLE
Authoring package ──validate──> content bundle + assets
       │                            │
       │ review/sign-off            ├──> CDN/object storage
       └──> release registry ────────┘
                                         │
                                         v
Browser ──HTTPS commands──> Next.js server boundary ──SQL──> PostgreSQL
  │                              │                        │
  │ renders registered plugins   │ validates child       ├─ relational state
  │ queues unsent commands       │ validates bundle      ├─ evidence events
  │ never assigns mastery        │ classifies evidence   └─ derived projections
  │                              │                        │
  └<── content/results/resume ────┴<── projection/read ───┘
```

### Domain boundaries

1. **Identity and family:** parents, families, relationships, consent, adult verification, child profiles, PIN credentials, trusted devices, and sessions.
2. **Curriculum registry:** curriculum editions, subjects, strands, concepts, objectives, prerequisite graph, evidence requirements, and denominator versions.
3. **Content publishing:** authoring packages, validation, review state, immutable bundle release, asset manifests, and release registration.
4. **Story and activity runtime:** town/destination manifests, scene orchestration, registered plugins, hints, remediation, resume, and completion commands.
5. **Academic evidence:** append-only observations, idempotent command receipt, server classification, misconception signals, and deletion/anonymisation workflow.
6. **Progression and adventure:** destination availability, school/mission phase, safe boundaries, world consequences, ordinary progress, and resume pointers.
7. **Mastery projections:** versioned rules, objective status, support state, explanation records, and rebuild operations.
8. **Rewards and rhythm:** private rewards, environmental changes, streak/grace state, and duplicate-grant prevention. Never imported into academic evidence.
9. **Reporting:** parent-facing projections, formal curriculum mapping, evidence drill-down, recommendations, and export.
10. **Operations:** audit records, support tooling, deletion/export jobs, content rollout, feature flags, monitoring, and incident response.
11. **Future schools:** organisations, classes, provisioning identifiers, and read-only progress grants behind a separate consent and authorization phase.

### Dependency rule

Dependencies point inward toward domain contracts:

```text
UI/routes ──> application use cases ──> domain rules <── repository interfaces
                                                    ^
                                                    │
                                    Supabase/content/email adapters
```

Domain modules must not import React, Next.js request objects, Supabase clients, or vendor storage SDKs. Adapters translate vendor data into domain commands and records.

## 4. Domain and data model

### Core relationship diagram

```text
auth.users (parent)
       │ 1
       v
parent_profiles ──< family_memberships >── families ──< child_profiles
                                                 │             │
                                                 │             ├── child_credentials
                                                 │             ├── child_sessions
                                                 │             ├── learning_sessions
                                                 │             ├── adventure_progress
                                                 │             └── reward_grants
                                                 │
                                                 ├── consent_records
                                                 ├── adult_verifications
                                                 └── trusted_devices

curriculum_editions ──< strands ──< concepts ──< objectives
                                              └──< objective_prerequisites
                                                        │
content_releases ──< content_objective_mappings >────────┘
       │
       └──< learning_sessions ──< academic_evidence_events
                                         │
                                         ├──> objective_projections
                                         ├──> destination_projections
                                         ├──> support_recommendations
                                         └──> parent_report_revisions
```

### Content and curriculum entities

| Entity | Essential fields and invariants |
|---|---|
| `Town` | stable ID; child-facing slug; Standard; subject; status; manifest reference. Exactly six active product slots, though only one is published initially |
| `Destination` | stable ID; town ID; sequence; prerequisite destination IDs; content release ID; availability; safe-boundary policy |
| `CurriculumEdition` | stable ID; authority; jurisdiction; Standard; subject; effective/version dates; denominator version; status |
| `CurriculumStrand` | edition ID; code; formal name; sequence |
| `Concept` | stable ID; strand ID; formal and plain-language labels; version |
| `Objective` | objective code; edition ID; concept ID; exact text; evidence requirement ID; active status |
| `Prerequisite` | source objective/destination; required objective/destination; relation type; minimum instructional state; version |
| `ContentRelease` | bundle ID; semantic/content version; schema version; SHA-256 digest; storage URL; status; reviewer IDs; published time; supersedes ID |
| `ContentObjectiveMapping` | release/activity ID; objective ID; role (primary/revisit/transfer); evidence opportunity type |

### Narrative and learning entities inside the immutable bundle

| Entity | Contract |
|---|---|
| `SchoolLesson` | stable lesson ID/version; teacher character; concept IDs; ordered scenes/activities; teaching representations; guided-evidence limits; completion boundary |
| `StoryScene` | scene ID/version; character assignments; text panels; stage direction tokens; asset/audio references; accessibility text; next-scene conditions |
| `Character` | stable character ID; approved identity metadata; role tags; asset variants; expression IDs; no curriculum authority embedded |
| `CommunityMission` | mission ID/version; destination; resident assignment; real need; activity sequence; independent-evidence contract; consequence; resolution |
| `Activity` | activity ID/version; registered type ID; configuration schema version; objective mappings; mode; support policy; resume policy |
| `Question` | stable question ID/version; activity ID; prompt/representation; response schema; misconception mappings; no client mastery weights |
| `MiniGame` | an Activity whose registered plugin declares game affordances, accessible equivalent, practice purpose, and non-academic consequence |
| `Hint` | hint ID/version; misconception/step applicability; level; model restoration; whether use changes independence classification |
| `Misconception` | stable code; objective; detection rule owned by server/plugin; feedback key; remediation path ID |
| `RemediationPath` | trigger codes; ordered support activities; smaller analogous demonstration; parallel retry; safe-stop option |
| `Reward` | stable reward definition; grant condition separate from academic rule; private/world effect; idempotent grant key template |

### Learner and account entities

| Entity | Essential fields and invariants |
|---|---|
| `ChildProfile` | UUID; family ID; nickname; Standard; avatar; preferences; activation/consent state; no email |
| `ParentChildRelationship` | represented by family membership/ownership plus child family; later explicit guardian grants; role, status, provenance, revoked time |
| `ChildCredential` | child ID; picture-PIN Argon2id hash; credential version; failure counters/lock metadata; never expose hash |
| `ChildSession` | UUID; token hash; child/family/device IDs; issued/expires/revoked/last-used; scope version; previous session invalidated on switch |
| `LearningSession` | child; town/destination; bundle ID/version/digest; state; current activity; revision; started/updated/completed; safe boundary |
| `ActivityResume` | session/activity/type/schema versions; opaque plugin snapshot; revision; server/client timestamps; safe flag; expiry |
| `AcademicEvidenceEvent` | immutable fields defined in Section 7; application roles cannot update rows |
| `ProgressState` | ordinary current adventure/destination state, unlocked/completed nodes, last safe boundary, version |
| `RewardGrant` | child; reward ID/version; source completion; idempotency key; granted/revoked reason; not academic evidence |
| `ParentReportRevision` | child; projection versions; summary keys/parameters; supporting evidence IDs; generated time; status/explanation |

### Data ownership

- Published content is globally readable only after release and contains no learner data.
- Every learner record carries a `child_id`; family-scoped records also carry `family_id` where it improves policy clarity and indexing.
- Academic event rows are immutable to application roles. Privacy deletion is a privileged, audited workflow rather than ordinary DELETE access.
- Server-generated IDs use UUIDv7 or another sortable collision-safe ID; browser idempotency keys are random UUIDs scoped by child session and command type.

## 5. Content and configuration model

### Permanent published-bundle contract

```text
bundle/
├── manifest.json                 # IDs, versions, digest, dependencies
├── curriculum.json               # edition/objective references only
├── town.json                     # town and destination path metadata
├── characters.json               # assignments and approved asset refs
├── lessons/
│   └── <lesson-id>.json
├── missions/
│   └── <mission-id>.json
├── activities/
│   └── <activity-id>.json
├── questions/
│   └── <question-set-id>.json
├── support/
│   ├── misconceptions.json
│   ├── hints.json
│   └── remediation.json
├── rewards.json
├── audio-manifest.json           # may contain text-only future entries
├── assets.json                    # immutable URLs, sizes, dimensions, alt use
└── accessibility.json            # reading order, instructions, equivalents
```

Repository YAML may improve human authoring, but the publisher always emits canonical JSON. A future CMS is acceptable only if it produces the same contract and passes the same validator, review, test, digest, and publication gates.

### Publication pipeline

```text
Draft package
   │
   ├─ schema validation
   ├─ reference integrity (IDs, objectives, characters, assets)
   ├─ plugin registry/config validation
   ├─ prerequisite cycle detection
   ├─ evidence-contract validation
   ├─ accessibility completeness
   ├─ forbidden-content/privacy checks
   ├─ educator/cultural/reviewer approvals
   └─ automated content simulations
          │
          v
Canonicalise ──> hash ──> immutable upload ──> DB registration ──> staged rollout
```

Invalid content fails before publication and remains inaccessible to child routes. Content files cannot set server evidence classification, SQL, arbitrary scripts, component names, raw HTML, or authorization behaviour. They may reference only stable registered activity type IDs and configuration schema versions.

### Separation of concerns

| Layer | Owns | Must not own |
|---|---|---|
| Curriculum | formal hierarchy, objective meaning, prerequisites, evidence requirements | story dialogue, rewards, UI layout |
| Narrative | characters, community need, scenes, consequences, continuity | mastery thresholds, authorization, raw database fields |
| Interaction configuration | registered mechanic choice, allowed parameters, assets, prompts, support references | executable code, security-sensitive classification, arbitrary styling |
| Plugin implementation | input validation, interaction mechanics, snapshot format, raw observations, accessibility behaviour | mastery decisions, destination story, family authorization |
| Learner data | sessions, observations, progress, projections, rewards | editable copies of published curriculum/narrative content |

Evidence records reference `bundle_id`, `bundle_version`, `bundle_digest`, `activity_id`, `activity_version`, `question_id/version` where applicable, `objective_id`, and `curriculum_edition_id`. Historical evidence never silently follows a “latest” content pointer.

## 6. State and progression model

Bridgepath must keep five kinds of state separate because they answer different questions:

| State | Question answered | Source of truth |
|---|---|---|
| Academic evidence | What did the child demonstrate, with what support and in what context? | Append-only evidence events |
| Academic projection | What is the current curriculum interpretation of that evidence? | Rebuildable server projections |
| Adventure progress | What story destination and mission has the child reached? | Relational progression records |
| Resume state | Where can this particular interaction safely resume? | Versioned server snapshot plus local pending outbox |
| Rewards/rhythm | What non-academic recognition has been earned? | Separate relational records |

### Destination progression

```text
available -> school_started -> instruction_complete -> guided_complete
          -> travel_to_destination -> mission_active
          -> support_branch -> mission_active
          -> applied_complete -> story_resolved -> review_available
```

- Instruction unlocks practice; rewards or scores never substitute for instruction.
- Guided success unlocks independent application. Repeated difficulty opens support rather than relocking content.
- Prerequisites form a versioned directed acyclic graph. Publication fails if it contains a cycle, orphan, or unreachable required destination.
- A destination can be revisited without duplicating its one-time story reward. New observations may still be recorded.
- Objective status and support status are separate dimensions. A child may have applied a concept and still have a current support recommendation.

### Activity-session lifecycle

```text
created -> active -> pending_sync -> synced -> completed
                    |             |        -> abandoned
                    |             -> conflict_resolved
                    -> expired/re-authenticate
```

The server owns the authoritative sequence number and accepted snapshot. IndexedDB holds only family-scoped pending commands and the last safe presentation snapshot. It is not an offline database and is cleared on child switching, consent withdrawal, or logout. Reconnect replays commands using idempotency keys; it never recomputes mastery or rewards in the browser.

## 7. Mastery and evidence model

Each immutable academic observation records:

- stable event ID and client-generated idempotency key;
- child, child-session, activity-session, and attempt identifiers;
- curriculum edition, objective IDs, bundle ID/version/digest, activity type/config version, and item version;
- raw event kind and server classification;
- context and representation tags;
- independence level, support level, hints, retries, misconception signals, response/outcome, and optional latency;
- server time, optional client time, session sequence, schema version, and privacy lifecycle status.

Application roles cannot edit or delete these events. Privacy erasure uses a privileged, audited workflow that deletes or irreversibly anonymises them according to the approved retention policy.

### Evidence ingestion

```text
Activity command
  -> authenticate child session and origin
  -> load immutable activity configuration
  -> validate command and idempotency key
  -> plugin emits a raw observation
  -> server classifies evidence
  -> transaction writes receipt + event + progress/reward effects
  -> enqueue projection rebuild
  -> return accepted sequence and safe resume snapshot
```

The plugin owns interaction rules and raw observation semantics. The server evidence service alone decides whether an observation is guided, practised, independently applied, or eligible for mastery.

### Projection and mastery rules

- `introduced`, `guided`, `practised`, `applied`, and `mastered` remain distinct.
- One guided attempt, one question type, or a client claim cannot produce mastery.
- Mastery requires multiple observations across time, representations, and contexts, including independent application.
- Every projection records its mastery-rule version, input evidence IDs, computed time, explanation codes, and projection revision.
- Rule changes rebuild projections from immutable history without rewriting events.
- Projection changes never appear unexplained: internal provenance supports the parent summary and educator audit.
- Rewards, streaks, time-on-screen, and story completion are never academic evidence.

## 8. Parent reporting architecture

Parent reporting uses indexed, rebuildable read models rather than querying the event stream for every page view.

| View | Content |
|---|---|
| Family overview | each child, current town/destination, recent activity, support signal, next recommended action |
| Child curriculum overview | formal Standard 3 Mathematics mapping, coverage denominator and curriculum edition |
| Objective detail | plain-language state, recency, independence/support, contexts used, misconception pattern, next action |
| Activity history | bounded/paginated learning sessions, not an exhaustive surveillance feed |
| Parent help | optional conversation prompt or household activity tied to an objective |

Plain-language labels map from projections: Learned, Practising, Can use independently, and Needs support. The expanded view exposes the formal objective mapping. Percentages always state their curriculum edition and denominator. Bridgepath will not claim a national percentile or SEA prediction without a separately validated assessment and norming programme.

Projection rows retain evidence provenance and rule version internally. Summaries are parameterised, reviewed templates rather than unrestricted generated claims. A failed or delayed projection displays a last-updated state and retries safely; it does not silently show fabricated zero progress.

## 9. Authentication and family model

```text
Supabase parent identity
  -> verified family membership + active consent
  -> choose child profile
  -> verify picture PIN (server-side, rate-limited)
  -> issue opaque child-session token in Secure, HttpOnly cookie
  -> child routes resolve exactly one child and published content scope
```

- Picture PINs are salted and hashed with a memory-hard algorithm; raw PINs never persist or enter analytics.
- Family codes are high-entropy and revocable. Error messages do not disclose whether a child, family, or link code exists.
- Switching profiles revokes the prior child session before issuing the next. Shared-device switching clears in-memory state, caches, outbox entries, and personalised media.
- Child cookies are `Secure`, `HttpOnly`, appropriately `SameSite`, narrowly scoped, short-lived, rotated, and revocable. Mutations enforce origin/CSRF protections.
- Parent-only operations require a current parent session and, for privacy/security changes, recent reauthentication.
- Consent status gates child activation and every child-session renewal.
- Supabase Row Level Security provides defence in depth, but child requests never receive database credentials or a service-role key. All writes pass through constrained Next.js server endpoints.
- Parent access, additional guardian relationships, school visibility, and child ownership are explicit relational grants with status, provenance, and revocation.

School entities may be included in migrations only where they prevent future destructive changes. No teacher login, roster UI, assignments, or school reporting enters this release.

## 10. Mini-game and activity runtime integration

The activity runtime is a typed registry, not a generic game engine and not a series of hard-coded pages. Each registered plugin declares:

- stable activity type ID and supported configuration-schema versions;
- validated input and versioned resume snapshot;
- raw observation vocabulary;
- keyboard, pointer, touch, reduced-motion, text-zoom, screen-reader, and no-audio behaviour;
- recoverable and terminal error behaviour;
- contract tests, accessibility tests, and content-author guidance.

A shared runtime shell owns session creation, save boundaries, hints, retry policy, remediation routing, focus recovery, progress feedback, rewards presentation, telemetry allow-listing, and command submission. Visual themes and assets remain separate from mechanic logic so a mechanic can look native to different destinations.

The Corner Shop slice proves five distinct types: story scene, illustrated explanation, money manipulative/number builder, receipt repair, and basket-and-budget application mission.

New destinations should normally compose registered types. A new plugin requires an explicit learning need, architecture review, accessibility acceptance, threat review, and reusable contract tests. Content cannot inject executable JavaScript, SQL, arbitrary HTML, evidence classifications, or authorization rules.

## 11. Audio, assets, and accessibility

Recorded narration is deferred, but the architecture preserves a versioned audio manifest containing text, locale, speaker, duration, transcript/caption, asset digest, and fallback behaviour. No activity may depend on audio to function.

- Assets use immutable digested URLs, responsive formats, explicit dimensions, and graceful fallbacks.
- Child instructions remain visible and replayable; future narration, music, and effects have separate preferences.
- Essential activities are DOM/SVG-first and keyboard/switch operable. A canvas-based optional mechanic must expose an equivalent semantic interaction contract.
- Focus is restored meaningfully after feedback, modal dismissal, route transitions, resume, and errors.
- Status never relies on colour, motion, sound, or iconography alone.
- Required activity targets include 200% zoom, reduced motion, visible focus, 44-by-44 CSS-pixel targets where feasible, no strict timers, and WCAG 2.2 AA.

Accessibility metadata is required by the content schema. A bundle missing labels, alternatives, transcripts, reading-order information, or no-audio instructions cannot be published.

## 12. Repository and module structure

```text
app/
  (public)/          launch and family explanation
  (auth)/            parent registration, login, recovery, consent
  (child)/           country, town, destination, activity runtime
  (parent)/          family and curriculum reporting
  api/               constrained server endpoints
src/
  domains/           family, curriculum, content, learning, progression,
                     rewards, reporting
  application/       use cases and transaction orchestration
  adapters/          supabase, content storage, email, adult verification
  runtime/           activity registry, shared shell, plugins, sessions
content/
  schemas/           canonical bundle and plugin configuration schemas
  towns/std3-math/   authoring packages and fixtures
supabase/
  migrations/ seed/ tests/
tests/
  unit/ contract/ integration/ e2e/ accessibility/ visual/
public/assets/       approved source assets; published assets are digested
prototype/           temporary isolated visual reference during migration
```

Domain code depends on interfaces, not Supabase SDK calls or Next.js request objects. Route handlers translate HTTP concerns into application commands. Database adapters implement transactions and RLS-aware queries.

The current `BridgepathApp` monolith, local-storage repository, and client mastery rules are prototype references only. They must not be imported into production domain modules. Approved visual assets, design tokens, copy, and test intent may be reused.

### Major-system contract matrix

| System | Responsibility and inputs/outputs | Persistent model and transitions | Failure/security/accessibility/test obligations | First slice / deferred |
|---|---|---|---|---|
| Curriculum registry | Accept approved editions/objectives/prerequisites; expose immutable mapping | edition, strand, unit, concept, objective, evidence requirement | reject broken references/cycles; educator approval and schema tests | Corner Shop objectives / remaining editions |
| Content publisher | Validate authoring package; emit signed/digested immutable bundle and manifest | draft -> validated -> approved -> published -> withdrawn | never execute content; fail closed; a11y completeness and compatibility fixtures | Corner Shop bundle / CMS adapter |
| Identity and family | Parent auth, consent, guardians, children and links | family membership and consent lifecycles | generic errors, recent reauth, RLS allow/deny suite | one owner and multiple children / schools and guardians |
| Child-session service | Exchange profile/PIN for one-child capability; revoke/switch | issued -> active -> rotated/revoked/expired | hashed token/PIN, rate limits, secure cookie, shared-device clearing | family-device flow / richer trusted-device policy |
| Experience orchestrator | Resolve next allowed destination/activity from content and progress | destination and activity-session states | server unlock decisions, safe unavailable/resume UI, transition tests | School and Corner Shop / all 18 destinations |
| Activity runtime | Render registered plugin inside shared learning shell | config, attempt, snapshot, command sequence | no arbitrary code; mandatory keyboard/touch/no-audio contract tests | five plugins / justified future plugins |
| Resume/sync | Preserve safe progress through brief interruptions | accepted snapshot, pending command receipt, sequence | bounded IndexedDB, child scoping, conflicts and corruption tests | brief outage resilience / full offline excluded |
| Evidence ingestion | Validate/classify observations and write exactly once | immutable event and idempotency receipt | server authority, transactionality, abuse and duplicate tests | Corner Shop evidence / broader observation vocabulary |
| Mastery/projections | Convert evidence into explainable curriculum state | rebuildable projection, rule version and provenance | never rewrite evidence; lag/failure shown; rebuild/reconciliation tests | relevant objectives / complete town denominator |
| Progression | Manage academic prerequisites and story advancement separately | objective, destination and adventure progress | no reward-based academic unlock; cycle and transition tests | Corner Shop path / town completion |
| Rewards/rhythm | Award private, non-academic recognition once | reward ledger and consistency record | no gambling/public ranking; idempotency tests | resolution reward / richer collections |
| Parent reporting | Translate projections into formal and plain-language read models | family/child/objective summary revisions | family-only access, uncertainty/recency, screen-reader/report reconciliation | Corner Shop report / full town trends |
| Asset/audio service | Deliver digested responsive assets and future manifests | asset metadata and audio preference | safe fallback, no essential audio, performance/a11y checks | silent illustrated content / recorded narration |
| School boundary | Reserve non-destructive organisation relationships only if required | optional organisation/member placeholders | no access grants or UI without separate privacy design | not operational / later school product |

### Principal failure modes

Every critical failure needs an explicit user state, recovery path, and test. Invalid content or an unregistered plugin fails publication. Expired sessions request neutral re-entry without accepting mutations. Duplicate commands return the original receipt. Stale two-tab commands receive a conflict and latest safe snapshot. Projection lag preserves last-good reporting with an updated time. Asset failure preserves equivalent text and retry. Consent withdrawal revokes sessions immediately. Cross-family requests are denied both by the endpoint and RLS. Deletion blocks new writes and runs idempotently. Database/storage/migration failures alert operations and never partially award progress. Detailed scenarios are maintained in `BRIDGEPATH-ENGINEERING-TEST-PLAN.md`.

## 13. Testing strategy

Automated tests are layered so fast domain feedback does not replace real authorization and persistence testing.

| Layer | Environment | Required coverage |
|---|---|---|
| Unit | Vitest, pure TypeScript | mastery rules, prerequisites, progression, reward idempotency, summary mapping |
| Content contract | schemas and registry | bundle structure, references, DAG, plugin configs, accessibility fields, immutable digest |
| Plugin contract | runtime harness | lifecycle, raw observations, resume, keyboard/touch, errors, reduced motion |
| Integration | isolated local Supabase/Postgres | migrations, constraints, transactions, RLS, family separation, deletion, projection rebuild |
| Route/API | Next.js server with local infrastructure | cookies, CSRF/origin, validation, idempotency, status/error contracts |
| End to end | Playwright | complete fresh/returning parent and child journeys on supported viewports |
| Accessibility | automated plus manual AT sampling | semantics, focus, zoom, contrast, no-audio, screen reader and keyboard completion |
| Visual | approved screenshot baselines | launch, country, town, runtime, support, results, parent dashboard |
| Resilience/performance | controlled browser/network tests | reconnect, duplicate delivery, asset failure, projection delay, route budgets |

### Coverage map

```text
Parent browser
  registration -> consent -> child creation -> reporting
       |              |             |              |
       +------ Next.js server endpoints ------------+
                         |
                 Supabase Auth/Postgres
                  | RLS | migrations | projections

Child browser
  family entry -> child session -> country/town -> activity runtime
       |               |                 |
       +------ command/idempotency API ---+
                         |
              evidence -> projection -> parent read model

Test ownership
  Vitest: domain rules
  schema/plugin harness: content and mechanics
  local Supabase: authorization and persistence
  Playwright: full cross-boundary journeys
```

### Critical journeys

- Parent registers, verifies, consents, creates two children, and sees separate reports.
- Child without email enters through family code/profile/PIN; wrong attempts disclose nothing.
- Profile switching revokes the old session and clears sibling state.
- Child completes Corner Shop through teaching, guided work, remediation, independent application, and results.
- Pause/refresh/reconnect at every safe boundary resumes without duplicate rewards or evidence.
- Duplicate and out-of-order commands are rejected or resolved idempotently.
- Parent projection reconciles with exact evidence and bundle/rule versions.
- Cross-family reads/writes fail at endpoint and RLS layers.
- Consent withdrawal, export, and deletion work end to end.
- Invalid or unavailable content fails before entry and offers a safe return path.

Existing prototype tests remain useful only as behavioural references. They do not prove production authorization, persistence, evidence integrity, or recovery.

## 14. Security and privacy architecture

### Trust boundaries

- The browser is untrusted. It may request an action and render a response; it cannot assign mastery, unlocks, rewards, ownership, evidence classification, or consent.
- Published content is validated data, not trusted executable code.
- Parent Supabase tokens are verified server-side. Child sessions are Bridgepath-issued opaque capabilities bound to one child and stored only as hashes server-side.
- The Supabase service role is restricted to server adapters and administrative jobs, never browser bundles.

### Required controls before child data

- threat model and data inventory;
- approved adult/parent verification adapter and consent receipt;
- least-privilege RLS and explicit negative authorization tests;
- encryption in transit and provider-managed encryption at rest;
- secrets outside source control with rotation and environment separation;
- rate limits for login, recovery, codes, PINs, evidence, and exports;
- allow-listed telemetry with no raw child responses, PINs, precise location, free text, photos, voice, advertising identifiers, or behavioural marketing;
- auditable consent, guardian changes, exports, deletion, administrative access, and projection-rule changes;
- retention, backup, restoration, breach-response, processor, and deletion procedures.

Security is not a final phase. The implementation sequence starts with boundaries and tests; later hardening adds operational review, monitoring, incident drills, dependency scanning, and deployment controls. Payment architecture is intentionally excluded until the learning and family core is stable.

## 15. First vertical-slice architecture

The first slice is the Corner Shop destination within the Standard 3 Mathematics town. It is not the whole first release; it proves the complete reusable architecture that the other 17 destinations will use.

### Included journey

```text
Welcome hub
 -> Parent role and real authentication
 -> consent/adult-verification adapter boundary
 -> create child + picture PIN
 -> child session
 -> country map -> Standard 3 Mathematics town
 -> Storypath School instruction
 -> travel to Mr Ali's Corner Shop
 -> story scene
 -> money/number demonstration
 -> guided receipt repair
 -> basket-and-budget mission
 -> optional remediation and retry
 -> story resolution/reward
 -> evidence projection
 -> parent curriculum report and help activity
```

The content focus is multi-item totals, budget/difference/change, estimation, and inverse checking. Profit/loss and any objective not validated for this destination are deferred. Prerequisites are handled by either a small readiness check or explicit pilot eligibility; the slice must not imply full-town coverage.

### Slice exit criteria

- All five plugin types use the same activity/session/evidence contracts.
- New/returning, correct/incorrect, supported/independent, interrupted/resumed, duplicate, and expired-session paths reconcile.
- No client mutation can manufacture evidence, mastery, progress, rewards, or sibling access.
- The parent report explains what the child demonstrated and what to do next.
- Keyboard/no-audio completion and supported mobile layouts pass.
- Production data is stored in local integration infrastructure during development, not browser local storage.

## 16. Phased implementation plan

| Phase | Outcome | Principal work | Exit gate |
|---|---|---|---|
| 0. Contracts and governance | foundations are reviewable before UI migration | curriculum/evidence/bundle schemas, threat model, retention draft, provider decisions, performance/browser matrix | schemas approved; critical legal/provider blockers named |
| 1. Production foundation | real family and child boundary | Next.js route groups, migrations/RLS, parent auth, consent adapter, child profiles/PIN/session, deterministic seeds | cross-family/RLS suite passes; profile switching revokes |
| 2. Publisher and runtime | reusable content delivery | canonical bundle publisher, registry, immutable storage, runtime shell, first five plugins, IndexedDB outbox | invalid bundles cannot publish; plugin contract suite passes |
| 3. Corner Shop slice | full learning/reporting loop | approved UX parity, content package, progression, evidence, projections, rewards, parent report | slice exit criteria and Playwright journeys pass |
| 4. Complete Standard 3 Mathematics town | all 18 approved destinations | compose destinations in dependency-aware batches, add only justified plugins, educator review | complete curriculum denominator reconciles; full path passes |
| 5. Pilot hardening | safe family pilot | device/a11y/security/performance QA, export/deletion, backups, monitoring, support and incident drills | no critical/high defect; operational gates approved |

Suggested content batches preserve the approved educational sequence: destinations 1-6, 7-10, 11-15, and 16-18. Each batch goes through content validation, educator review, integration tests, child UX review, and parent-report reconciliation.

### Parallel work lanes

After contracts are approved, work can proceed in four coordinated lanes:

1. Domain schemas, migrations, RLS, sessions, and evidence services.
2. Content schemas, publisher, curriculum packages, and review fixtures.
3. Production route shell, design system integration, runtime, and plugin UI.
4. Test infrastructure, deterministic seeds, Playwright, accessibility, and CI.

The lanes reunite at the Corner Shop slice. Content should not outrun registered plugins, and UI should not invent server state.

### Concrete implementation tasks

1. Freeze and catalogue prototype behaviours/assets; place production work behind separate routes or feature flag.
2. Define canonical IDs, schemas, error vocabulary, idempotency contract, and database migration conventions.
3. Build family/consent/child session migrations and negative RLS tests first.
4. Implement parent authentication and the child-session boundary.
5. Build content validation/publishing and seed the Corner Shop bundle.
6. Build runtime shell and five plugins with contract/accessibility tests.
7. Implement evidence transaction, outbox reconciliation, projections, progression, and rewards.
8. Build the parent read model and evidence-backed summaries.
9. Replace prototype flows one at a time after production parity tests.
10. Expand through all 18 destinations, then complete pilot hardening.

## 17. Acceptance criteria

The engineering plan is successfully implemented when:

- Standard 3 Mathematics has a signed, versioned curriculum edition and complete 18-destination bundle set.
- Evidence always references the exact immutable content experienced.
- Parent and child trust boundaries pass real local Postgres/RLS tests.
- Child-session switching cannot expose sibling memory, caches, progress, or commands.
- Every required activity works with keyboard, touch, no audio, reduced motion, and 200% zoom.
- Every command is safely idempotent and every activity has a documented resume boundary.
- Mastery projections can be rebuilt with a new rule version while preserving history and explanations.
- Parent percentages and statuses reconcile with the versioned curriculum denominator and evidence provenance.
- Export, consent withdrawal, deletion/anonymisation, backup restore, and incident procedures are demonstrated.
- Supported browser/device journeys meet approved performance budgets and have no uncaught errors.
- The prototype local-storage/client-authority implementation is fully retired from production routes.

Initial performance budgets, subject to Gate 0 benchmarking on representative Caribbean connections and mid-tier devices, are: LCP at or below 2.5 seconds, INP at or below 200 milliseconds, CLS at or below 0.1, route-owned initial JavaScript at or below 200 KB gzip excluding framework runtime, current content data at or below 150 KB compressed, and responsive first-view media at or below 1.5 MB. Bundles load by route/destination with connection-aware prefetch of the likely next stop, never the entire town by default.

## 18. Open engineering decisions

These decisions do not invalidate the architecture, but some block pilot activation:

| Decision | Needed by | Owner/input |
|---|---|---|
| Supabase/hosting regions, contracts, backups, and pilot cost | Phase 0 | founder plus privacy/legal review |
| adult/parent verification method and provider | before persistent child activation | legal/privacy decision |
| retention, deletion versus anonymisation, and backup-erasure rules | before schema freeze | legal/privacy plus engineering |
| signed objective mapping and mastery evidence thresholds | before Corner Shop publication | qualified local educator |
| supported device/browser matrix and final performance budgets | before pilot hardening | product/engineering research |
| readiness check versus pilot eligibility for Corner Shop prerequisites | before slice child testing | curriculum/product |
| operational email, monitoring, and asset-storage providers | before hosted environment | engineering/provider review |
| final town/place names and cultural review | before public content | founder and local cultural reviewers |

Proposed tracked TODOs are the eight decisions above plus: produce the threat model, write bundle/plugin JSON schemas, define the error/idempotency catalogue, approve the first five plugin accessibility contracts, and document prototype retirement parity. No existing `TODOS.md` was changed during this review.

## 19. Readiness verdict

**Verdict: DONE_WITH_CONCERNS.** The engineering direction is coherent, reusable across six towns, and appropriately sized around a Corner Shop slice followed by the full 18-destination Standard 3 Mathematics release. It protects the central product promise: children experience a world, while the platform preserves rigorous, auditable curriculum evidence.

The plan is ready for founder approval and Phase 0 contract work. It is not approval to activate child accounts or launch a pilot. Adult verification, retention/deletion, provider-region review, signed curriculum/mastery mapping, and real infrastructure authorization tests remain release gates.

### What already exists

- A working Next.js/React/TypeScript prototype with approved visual direction for the launch hub, country map, town path, lesson flow, and parent dashboard.
- Prototype learning rules and browser storage that are useful as behavioural references.
- Vitest and Playwright scaffolding with early learning and journey tests.
- Approved product, curriculum journey, experience design, character integration, and design documentation.

### Explicitly not in scope

- Content for English or the other five towns.
- Teacher accounts, class rosters, assignments, school dashboards, or school consent workflows.
- A CMS user interface; repository authoring is the first adapter.
- Full offline mode, native applications, microservices, GraphQL, or a full canvas game engine.
- Payments, subscriptions, recorded narration, public profiles, chat, leaderboards, multiplayer, or behavioural marketing.
- Adaptive diagnostics, national ranking, or SEA outcome prediction.

### Review limitations

The architecture review used the local specification, curriculum/experience documents, reference images, code, and primary Next.js/Supabase documentation. The optional independent Claude CLI review was unavailable in this environment. The gstack review logger and dashboard scripts require Bash and a committed Git repository; this Windows workspace currently has neither a runnable Bash toolchain nor an initial commit, so no review-history entry was fabricated. The referenced supplementary `review-sections.md` file was also absent. These are review-tooling limitations, not Bridgepath architecture blockers.

## GSTACK REVIEW REPORT

**Plan:** `BRIDGEPATH-ENGINEERING-ARCHITECTURE-PLAN.md`

**Scope:** First implementation slice is Corner Shop; first release content boundary is the complete 18-destination Standard 3 Mathematics town; reusable platform boundary supports all six Standard/subject towns.

**Review coverage:** 10 founder decisions resolved across scope, content, identity, evidence, activities, resilience, stack, migration, testing, and performance. Architecture, code quality, test strategy, failure recovery, and performance were reviewed. The lake is fully specified for implementation planning; production remains unbuilt.

**Critical silent failure gaps after plan:** 0. Every identified critical path has an explicit error, recovery, or test requirement.

**Outside voice:** Skipped because the Claude CLI and authentication were unavailable.

**UNRESOLVED DECISIONS:**
- Approve Supabase/hosting region, data-processing terms, backup, export, deletion, and pilot cost.
- Approve the verifiable-parent method and consent operations with counsel.
- Approve the retention/deletion/anonymisation schedule.
- Obtain signed educator approval for exact Corner Shop objectives and mastery evidence.
- Confirm the supported-device matrix, benchmarked performance budgets, and Corner Shop prerequisite approach.
