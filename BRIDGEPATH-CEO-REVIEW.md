---
status: ACTIVE
mode: SELECTIVE_EXPANSION
date: 2026-07-14
---

# Bridgepath CEO Review

> **Curriculum discovery note (15 July 2026):** Named Standard 3 Mathematics settings, stories, and vertical slices in this historical review are provisional. The current educational path proposal is `STANDARD-3-MATHEMATICS-TOWN-LEARNING-JOURNEY.md`, supported by `STANDARD-3-MATHEMATICS-EXPERIENCE-CLUSTERS.md`.

This is the working record of the founder-level review of the Bridgepath Product Specification. It does not authorize implementation, design review, engineering review, deployment, or launch.

## Vision

Bridgepath gives parents an earlier, clearer answer to three questions: what their child should be learning, what the child can use independently, and what should happen next. Children experience that curriculum through Kairana, a persistent fictional Caribbean country containing six towns and future learning journeys.

The product must be more than curriculum questions placed inside game artwork. Teaching, practice, and the application mission form one causal adventure: the child learns a concept because the community problem requires it, then uses it across connected situations to produce a visible outcome.

## Confirmed product structure

`Welcome hub → Kairana Country Map → Arouca Grove Journey Map → curriculum stop → structured learning path → multi-scene final mission → parent evidence and next action`

Kairana's towns are Arouca Grove, Gasparillo, Lopinot, Barataria, Masara, and Chaconia. Arouca Grove contains all 18 Standard 3 Mathematics stops. The other five towns are reserved for future learning journeys and do not yet represent specific Standards, subjects, or curriculum stops.

## Approach decision

Use a staged complete family loop:

1. Validate Market Day through small formative topic studies as the internal vertical slice.
2. Refine the reusable learning, mission, evidence, and reporting model.
3. Prove reuse with a second, materially different Mathematics topic and accept a full-town schedule and cost.
4. Complete the full Standard 3 Mathematics town.
5. Run a full-town private pilot with named, consented families.
6. Release publicly only after the complete town and required learning, account, storage, safety, commercial, and operational gates pass.

“Public release” means registration or ordinary household use beyond a named, consented research cohort. Before the full town is complete, Bridgepath may run small formative topic studies with children and parents to validate navigation, learning transfer, report interpretation, and production assumptions. Those studies test individual topics and the reusable model; they are not a full-town pilot or a public product launch.

## First audience and conditions

- First jurisdiction and curriculum: Trinidad and Tobago Ministry of Education, Standard 3 Mathematics.
- The Kairana Country Map shows all six towns. Arouca Grove is the only available town; the other five are visibly muted, locked, or marked as future journeys, with no launch dates or curriculum promises.
- First learner: a child currently enrolled in Standard 3, using a parent-managed profile.
- Target buyer and initial account owner: a Trinidad and Tobago parent or guardian who wants earlier curriculum visibility and a clear next action.
- Initial devices: shared-family Android phones/tablets, iPhone/iPad Safari, Chromebook-class laptops, and Windows laptops, including constrained connections.
- First release eligibility: Trinidad and Tobago families unless legal review approves a broader cohort.

## Scope decisions

| # | Proposal | Decision | Consequence |
|---|---|---|---|
| 1 | Complete all Standard 3 Mathematics before public release | Accepted | Market Day remains an internal proof point, not the public content boundary. |
| 2 | Add a short Welcome Checkpoint after town selection | Accepted | It recommends a starting location but cannot declare mastery or permanently lock content. |
| 3 | Add school-compatible identity and evidence foundations | Accepted as foundation only | First release remains Parent and Child; school registration and dashboards come later. |
| 4 | Add a Bridgepath-generated weekly learning plan | Accepted | Parent chooses the household rhythm and sees planned, completed, in-progress, and support states. |
| 5 | Require multi-scene community application missions | Accepted | A longer themed question set does not qualify as independent application. |
| 6 | Structure the town as connected adventure chapters | Accepted | Each curriculum topic becomes a self-contained adventure connected by recurring characters, changing locations, and a larger town arc. |
| 7 | Replace prototype browser storage with a real per-child data foundation | Accepted | Preserve useful UI work, but use parent authentication, isolated child profiles, stable learner IDs, secure child sessions, and versioned evidence before persistent progress is implemented. |
| 8 | Use a guided town path with meaningful chapter choices | Accepted | Bridgepath recommends the best next adventure; the child chooses among a small set of suitable chapters; only genuine prerequisites restrict access; completed adventures remain replayable. |
| 9 | Separate curriculum coverage from current learning readiness | Accepted | The parent summary shows curriculum explored alongside concepts used independently, being practised, or needing support; the formal Ministry objective mapping remains available in an expandable view. |
| 10 | Require repeated independent evidence before a stable readiness claim | Accepted | One unsupported chapter mission records successful application; stronger independent readiness requires another unsupported observation in a changed context or after time has passed. Hint use provides support without punishment. |
| 11 | Let Bridgepath plan the weekly learning while parents set the rhythm | Accepted | Parents choose learning days or a weekly session target and may request extra practice; they cannot mark work complete, assign mastery, or bypass prerequisite logic. |
| 12 | Use educator-approved adventure boundaries rather than rigid curriculum-heading boundaries | Accepted | Each child-facing adventure has one coherent curriculum concept, but a large official topic may become multiple adventures and tightly related objectives may be combined; formal reporting remains objective-level. |
| 13 | Let the Welcome Checkpoint offer optional “Show What I Know” challenges | Accepted | The checkpoint recommends a starting point and opens suitable chapters; earlier topics can be challenged independently rather than auto-completed, remain replayable, and still require later evidence for stable readiness. |
| 14 | Build a reusable activity and scene system with distinctive application missions | Accepted | Tested interaction components are populated with interchangeable characters, expressions, dialogue, props, values, backgrounds, and feedback; each adventure retains an original multi-scene mission and visible story consequence. |
| 15 | Use Niko and Zuri as recurring guides with rotating town residents | Accepted | The guides create attachment and continuity; residents provide context-specific teaching, community problems, and varied character configurations within reusable scenes. |
| 16 | Make the parent dashboard an actionable curriculum overview | Accepted | The default view answers what was covered, the child’s current readiness by concept, priority areas for improvement, and what Bridgepath recommends next; formal evidence and curriculum objectives remain expandable. |
| 17 | Add an optional evidence-linked parent-help section | Accepted | Short household activities use ordinary contexts and materials, remain secondary to the dashboard, and do not shift instructional responsibility from Bridgepath to the parent. |
| 18 | Validate separate single-child and multi-child family plans | Accepted as commercial hypothesis | Private research remains free; parent interviews and disclosed pricing tests determine prices, profile limits, and the value difference. School licensing remains a later model. |
| 19 | Treat September 2026 as a private family alpha and production checkpoint | Accepted | Target real family accounts, isolated child progress, complete onboarding/country/town UX, Market Day, one materially different second adventure, reusable components, and an evidence-backed parent dashboard. Forecast full-town completion from measured throughput; do not force a premature public launch. |
| 20 | Limit the September alpha to as many as 10 named families | Accepted | The alpha is free, consented, closely supported, and used for formative learning and product research. A larger cohort belongs to the later paid/full-product stage after the complete-town gates pass. |
| 21 | Report curriculum readiness without claiming national or SEA comparison | Accepted | The first product reports evidence against approved objectives and clearly distinguishes it from an SEA prediction, national percentile, or representative benchmark. Any later comparison requires separate assessment expertise and validation. |
| 22 | Require parents to create child profiles in the September alpha | Accepted | Children do not register independently. Parent-created profiles use a simplified child entry after setup; existing-profile linking and its code/recovery complexity are deferred. |

## Guardrail discovered during review

Security is not a later feature after storage. Credential handling, family ownership, authorization, protected child access, input validation, and data isolation must exist in the first persistent implementation. Later phases may add formal hardening, audits, incident drills, payment controls, and production deployment operations.

The internal Market Day experience may continue using clearly labelled prototype or research data. The moment Bridgepath creates persistent family accounts or remotely stores child information, the minimum controls above become mandatory.

The accepted persistent-data boundary is:

`Parent account → family relationship → isolated child profile → child session → versioned learning events → server-derived progress → parent plan and dashboard`

Academic evidence, adventure state, rewards, and resume state remain separate. The client may submit attempts and activity events, but it cannot assign mastery, change curriculum coverage, or read another child’s records. School roles are not built now; the relationship model must permit a later parent-consented, read-only school relationship without duplicating the learner’s evidence.

## What Market Day must validate

Market Day is successful only if it provides evidence for these hypotheses:

- a child can understand welcome hub → country → town → adventure path without facilitator navigation;
- explicit teaching and guided practice prepare the child for a changed, multi-scene application mission;
- the mission requires connected decisions rather than repeated themed questions;
- evidence distinguishes help, practice, and independent application;
- a parent correctly interprets the report and can state the next action;
- the adventure and activity structure can be reused for at least one materially different Mathematics topic.

Market Day alone cannot validate complete curriculum coverage, long-term retention, full-town attachment, willingness to pay, school use, or production operations.

## September 2026 alpha boundary

The September alpha is not the public Standard 3 Mathematics release. It must demonstrate the complete family loop with production-quality foundations and enough real content to measure whether the town can be completed responsibly:

- parent authentication, family setup, and separate child profiles;
- protected child entry and persistent per-child progress;
- welcome hub, six-town country map, Standard 3 Mathematics town, and guided adventure path;
- Market Day plus one materially different curriculum adventure;
- reusable teaching, practice, remediation, story-scene, evidence, resume, and reporting components;
- a parent dashboard showing coverage, readiness, priorities, next steps, and optional parent help;
- private formative use under an approved research and privacy protocol.

After the second adventure, actual content, art, review, and engineering effort must be used to forecast the remaining town. A calendar target cannot override the complete-town definition or public-release gates.

## Stage exit gates

| Stage | Required evidence to proceed |
|---|---|
| Market Day prototype | In a fixed formative round of eight children, at least seven complete core navigation without facilitator instruction; the educator-approved rubric confirms final-mission success reflects the signed-off curriculum objectives; tested parents distinguish coverage from independent use and identify the intended next action. This is a formative usability gate, not statistical proof of efficacy. |
| Reusability proof | A second, materially different Standard 3 Mathematics topic is produced using the same learning/evidence model without redesigning the core product; actual effort and asset volume are recorded. |
| Full-town production | Authoritative curriculum inventory, topic/adventure boundaries, minimum story framework, evidence requirements, content templates, and production estimate are approved. |
| Full-town private pilot | Before recruitment, the founder, curriculum educator, research lead, and privacy reviewer approve the cohort, duration, consent, delayed-transfer task, parent-action measures, success thresholds, stopping rules, and accountable owner. Named, consented families can then onboard, resume, complete planned work, and interpret reports; children attempt delayed parallel problems after time has passed; parents can act on recommendations; no unresolved high-risk child-data or accessibility defect remains. |
| Public family release | Complete-town definition met; full-town pilot learning thresholds pass; legal eligibility and adult/consent method are approved; authorization, export/deletion, backup, support, incident, accessibility, and content-review gates are verified; and the founder makes an explicit commercial-release or free-beta go/no-go based on the approved pricing-intent study. |

## Definition of a complete Standard 3 Mathematics town

The town is complete only when:

1. every in-scope objective in the approved curriculum edition appears in the authoritative inventory;
2. every objective maps to at least one teaching experience and the required evidence opportunities;
3. each approved topic has an adventure with teaching, guided practice, practice, remediation, independent application, and a safe resume boundary;
4. prerequisite and Welcome Checkpoint behavior is defined;
5. the parent report reconciles with versioned evidence and the curriculum denominator;
6. educator, cultural, accessibility, and editorial reviews are complete;
7. the connected town arc has an opening, visible changes across adventures, and a cumulative finale without making review content inaccessible.

The exact number of topics and adventures is not guessed in this review. It must be counted from the official curriculum with the named educator before schedule or cost is approved. Until the inventory and second-adventure measurement pass their gates, the commitment to produce the complete town is a founder direction, not an executable schedule.

Each topic adventure must contain the seven learning functions, but it does not require seven separate bespoke game screens. A minimum reusable template includes one encounter, one explicit demonstration, guided attempts with progressive help, varied practice, misconception-specific remediation, one changed-context independent mission, reflection, and safe resume boundaries. The curriculum educator determines the number of items and observations needed for the objective; production estimates must record scenes, activities, item variants, art states, and review cycles.

## Curriculum source and revision rule

The initial authoritative source is the Republic of Trinidad and Tobago Ministry of Education, Curriculum Planning and Development Division, **Mathematics Infant 1–Standard 5 Curriculum Guide (2013)**, as published through the Ministry learning portal. The inventory records the source, publication year, access date, and objective references. A later Ministry edition creates a new curriculum edition; it does not silently rewrite historical evidence or active family reports.

## Low-cost school compatibility invariants

The family release requires only:

- stable learner IDs independent of display names;
- family-owned child profiles and explicit relationship records;
- append-only curriculum/content provenance while evidence is retained, with authorized whole-record export and deletion satisfying privacy obligations;
- role-scoped authorization capable of adding a read-only relationship later;
- no school organization, roster, teacher, assignment, or class-dashboard implementation.

## Commercial validation

Payment processing remains deferred. Willingness to pay does not. Before public release, parent interviews and a clearly disclosed pricing-intent test must establish which problem parents would pay to solve, the acceptable monthly range, and what evidence creates trust. Survey interest and compliments do not count as purchase validation. The founder must approve the sample and success threshold before the pricing test runs. A paid or commercial public release is blocked on this decision; a free public beta may proceed only through a separate explicit founder go/no-go. Choosing a free beta waives only the commercial threshold—it never waives curriculum, learning, consent, privacy, security, accessibility, support, or operational gates.

## Accessibility and operating conditions

- Accessibility target: WCAG 2.2 AA for all essential flows, with manual keyboard testing, 200% zoom, reduced motion, touch, and sampled screen-reader testing.
- Primary research matrix: Android Chrome, iPad Safari, and Chromebook Chrome; current and previous major browser versions at the time of each gate.
- Public-release matrix adds iPhone Safari and Windows Edge/Chrome after verification; unverified platforms are labelled best-effort.
- Every essential pointer or drag action has a keyboard/non-drag alternative; no instruction depends on audio or strict timing.
- Constrained-connectivity testing covers slow initial load, interruption before and after evidence submission, reconnect, duplicate submission, and resume at the last confirmed safe boundary.
- The exact page-weight and latency budgets are set during engineering review after art delivery is measured; the release gate requires documented budgets and passing results rather than an invented number now.

## Glossary

- **Topic adventure:** one curriculum topic expressed as a self-contained teaching-to-application chapter inside the town.
- **Structured learning path:** the controlled sequence of story encounter, teaching, demonstration, guided work, practice, support, checkpoint, and final mission.
- **Independent application:** the child recognizes and uses the concept in a changed context without answer-level help.
- **Multi-scene mission:** connected decisions across more than one location or state, including at least one changed condition and a visible outcome.
- **Complete town:** the approved Standard 3 Mathematics curriculum inventory plus the content, evidence, story, review, and operational requirements listed above.
- **Support state:** current evidence of repeated misconception or dependence on scaffolding; not a permanent learner label.

## Explicitly deferred

- School registration, teacher dashboards, and school-issued learner IDs.
- Independent child registration, cross-family child linking, and existing-profile link codes.
- Teacher assignments, path manipulation, evidence editing, or manual mastery decisions; these are outside the intended school model.
- Payment.
- Recorded narration.
- Standards 3 English and Standards 4–5 towns.
- Public social features, leaderboards, chat, or behavioral marketing.
- Free roaming, multiplayer, and advanced game systems.

## Current unresolved decisions

| Decision | Owner | Required evidence | Blocks |
|---|---|---|---|
| Standard 3 Mathematics curriculum-to-adventure inventory and adventure granularity | Founder + named curriculum educator | Official curriculum audit and topic clustering workshop | Full-town production estimate |
| Welcome Checkpoint recommendation evidence | Founder + curriculum educator | Objective/prerequisite model and child test | Personalized starting flow |
| Parent weekly-plan defaults and missed-work behavior | Founder | Parent interviews and prototype comprehension test | Family dashboard finalization and public family release |
| Mission evidence shown to parents | Founder + curriculum educator | Market Day evidence prototype and parent interpretation test | Parent report finalization |
| Pricing-intent method and success threshold | Founder | Parent interview evidence and proposed test | Commercial go/no-go, not prototype work |
| Adult verification, legal applicability, and eligibility | Legal/privacy reviewer | Written legal recommendation | Persistent child activation/public release |
| Six-town geography, first-town name, and minimum story bible | Founder + cultural/creative reviewers | Map concepts and local child/parent review | Full-town art/content production |
| Full-town schedule and cost | Founder | Curriculum count, second-adventure production measurement, art/review throughput, and confirmed reviewer availability/cost | Full-town production approval and public release commitment |

## Principal delivery risks

- Producing the full town before testing a second adventure could scale an expensive or weak content pattern.
- A two-person founder/AI build can compress software work but not educator approval, child research, illustration, or legal review.
- Multi-scene missions multiply writing, state, art, accessibility, and QA needs; reusable patterns must be proven across two different topics.
- Delaying private family exposure until the town is complete would create a large unvalidated bet.
- School-compatible abstractions can become speculative; only the listed invariants belong in the family release.

## Major issue disposition

| Issue | Concern and options considered | Recommendation and consequence | Founder approval | Blocks first vertical slice |
|---|---|---|---|---|
| Persistent family data | Extend browser storage; rebuild per-child storage; or build family and school systems together | Rebuild around parent authentication, isolated child profiles, secure child sessions, and versioned events. Useful UI work remains, but family-wide prototype state does not. | Approved | Yes, once persistent data is used |
| Child path freedom | Strictly linear; guided choice; or fully open town | Use guided choice. Bridgepath recommends the next chapter and protects real prerequisites while the child chooses among suitable adventures. | Approved | Yes, for town/path UX |
| Parent progress meaning | One percentage; coverage plus readiness; or formal mapping only | Separate curriculum coverage from readiness, with expandable formal objectives. This avoids equating exposure with understanding. | Approved | Yes, for truthful reporting |
| Readiness evidence | One mission; repeated independent evidence; or a separate formal test | Record application after one unsupported mission; require another changed-context or delayed observation for stable readiness. | Approved | Yes, for evidence claims |
| Adventure boundaries | One official heading per adventure; educator-approved grouping; or story-first grouping | Use educator-approved boundaries and preserve objective-level mapping. This protects both chapter quality and auditability. | Approved | Yes, for full-town estimate; not Market Day |
| Prior knowledge | Force all chapters; allow evidence-based challenges; or auto-complete from placement | Offer “Show What I Know.” Earlier adventures remain replayable and failure opens teaching without penalty. | Approved | No |
| Content production | Bespoke mechanics; reusable systems with unique missions; or one repeated template | Build a tested component library and invest originality in characters, context, dialogue, town change, and multi-scene application missions. | Approved | Yes, for the second-adventure reuse proof |
| September scope | Force a public full-town release; run a two-adventure private alpha; or test UI only | Run a private alpha with the full family loop and two materially different adventures. Forecast the remaining town from measured throughput. | Approved | Defines the milestone |
| National comparison | Bridgepath-user percentile; curriculum readiness; or curriculum completion presented as SEA readiness | Report only curriculum evidence initially. National or SEA comparison requires separate representative validation. | Approved | Yes, for parent copy and claims |
| Parent/child setup | Parent-created profiles; existing-child linking; or independent child registration | Parent creates every alpha child profile. Defer linking and independent registration. | Approved | Yes, for authentication scope |
| Commercial model | One family price; per-child price; or school-first sales | Validate a single-child plan and a multi-child family plan. Keep school licensing later. | Approved as hypothesis | No; blocks commercial launch decision |

## Product strengths

- The parent problem is specific and consequential: term reports arrive late, classroom rank does not reveal curriculum gaps, and parents need a trustworthy next action before Standard 5 revision pressure peaks.
- The six-town country supports a clear long-term product without exposing formal curriculum folders as the child’s primary identity.
- The learning model requires explicit teaching, guided practice, remediation, independent application, and later confirmation; this differentiates Bridgepath from themed question banks.
- The parent and child experiences share the same evidence while presenting it at the appropriate level: adventure progress for children and formal objective mapping for parents.
- A recurring-guide and rotating-resident cast can build attachment while keeping community missions varied and culturally situated.
- The September alpha now has a complete validation loop without pretending to be a complete public product.

## Critical risks

1. The full Standard 3 Mathematics inventory has not yet been converted into approved adventure boundaries, so full-town schedule and cost remain unknown.
2. “Adventure” can still collapse into decorated exercises unless every final mission requires connected decisions, changed contexts, and a visible community outcome.
3. The founder/AI team can accelerate software and drafting, but cannot replace named educator approval, child research, cultural review, illustration capacity, or privacy/legal review.
4. Authentication and remote child storage create immediate authorization and consent obligations; security cannot be postponed until deployment.
5. Reusable components could become repetitive unless character configurations, dialogue, environments, misconceptions, mission structure, and town consequences vary meaningfully.
6. Parent trust will be damaged by ambiguous percentages, premature mastery language, SEA predictions, or national-comparison claims unsupported by representative evidence.
7. Six visible towns could feel like six locked curriculum folders unless each gains a distinct story premise, community tension, visual identity, and lasting world consequence.

## Recommended scope reductions and expansions

### Reduce now

- Remove existing-child connection, independent child registration, school registration, teacher dashboards, payments, recorded narration, and advanced game systems from the September alpha.
- Do not build all six towns, a complete country-navigation simulation, or bespoke mechanics for every topic.
- Do not make SEA-readiness, national-ranking, efficacy, or mastery claims beyond observed curriculum evidence.

### Preserve or expand now

- Preserve the complete thin family loop: parent setup, child profile, child entry, welcome, country, first town, guided path, learning adventure, persisted evidence, and parent report.
- Build Market Day and one materially different second adventure so reusability is tested rather than assumed.
- Include the minimum school-compatible invariants—stable learner IDs, explicit relationships, provenance, and role-scoped authorization—without school UI.
- Treat parent-report comprehension, changed-context application, delayed evidence, accessibility, and data isolation as product requirements rather than cleanup.

## Decisions locked before design finalization

- One fictional Caribbean country with exactly six curriculum towns.
- Standard 3 Mathematics is the first town; the child sees an adventure-led fictional name while parents see the formal mapping.
- Welcome hub → country map → town → guided adventure path is the primary hierarchy.
- Each coherent curriculum concept becomes an adventure chapter within a connected town story.
- The child receives guided choice, not a completely linear or completely open curriculum.
- Niko and Zuri are recurring guides; town residents rotate by adventure.
- Learning components are reusable; application missions and story consequences must remain distinctive.
- Coverage and readiness are separate; stable readiness requires repeated independent evidence.
- The parent dashboard shows overview, status, improvement priorities, next steps, evidence, and optional parent help.
- September is a free private alpha for up to 10 named families, not a public launch.
- Parent-created child profiles are the only alpha activation route.
- The first product makes curriculum-readiness claims only.

## Decisions that may safely wait

- Final town and country names, final palette, and detailed visual identity after local child and cultural review.
- Exact single-child and family-plan pricing and profile limits until pricing interviews are complete.
- Standards 3 English and Standards 4–5 content order.
- School organization, roster, dashboard, and licensing workflows.
- Existing-child linking, additional-guardian workflows beyond the minimum legal/account requirement, and school-issued IDs.
- Recorded narration, full CMS selection, payments, native applications, free roaming, inventory depth, and optional advanced mini-games.
- National benchmarking or SEA-readiness research.

## Revised first vertical slice

The first vertical slice is **Market Day as one complete family evidence loop**, not the whole September alpha and not the public content boundary:

1. A parent authenticates, creates one child profile, selects Standard 3, and completes required consent steps under the approved alpha protocol.
2. The child enters through the simplified child route, passes orientation, sees the six-town country, and enters the available Standard 3 Mathematics town.
3. The town presents a small guided path leading into Market Day.
4. Market Day includes encounter, explicit teaching, demonstration, guided manipulation, varied practice, misconception-specific remediation, a multi-scene independent application mission, reflection, and safe resume boundaries.
5. Attempts, hint use, independent application, adventure state, and resume state persist separately and idempotently for that child.
6. The parent dashboard reconciles the evidence into coverage, current readiness, improvement priority, next action, and optional parent help without claiming mastery or SEA prediction.
7. The same loop works after interruption, repeated error, logout/login, and shared-device profile switching without leaking another child’s data.

The September alpha adds a second materially different adventure to this slice, proving that the component, content, evidence, and reporting model can be reused before full-town production is approved.

## Verdict

**Approve with required revisions.**

The product direction is strong enough to proceed to specification revision, but not yet to design review, engineering review, or implementation as a production family platform. The six-town structure, learning model, parent value, September alpha, and first vertical slice are now coherent. Advancement is conditional on the checklist below and the named external approvals.

## Specification changes required before the next gstack stage

- [ ] Replace the earlier September public-pilot framing with the approved private alpha boundary of up to 10 named families.
- [ ] Distinguish explicitly among the long-term six-town product, the full Standard 3 Mathematics public content boundary, the Market Day vertical slice, and the two-adventure September alpha.
- [ ] Add the guided-choice path rule and the evidence-based “Show What I Know” behavior.
- [ ] Replace family-wide/client-derived progress assumptions with parent authentication, isolated child profiles, secure child sessions, versioned events, and server-derived reporting requirements.
- [ ] Separate curriculum coverage, successful application, and repeated independent readiness in terminology, data requirements, and parent copy.
- [ ] Define the parent dashboard hierarchy and the optional evidence-linked parent-help section.
- [ ] Define the reusable activity/scene contract and the requirement for distinctive multi-scene missions without prescribing implementation technology.
- [ ] Complete the official Standard 3 Mathematics objective inventory with the named local educator and approve adventure boundaries and prerequisites.
- [ ] Select the second alpha adventure specifically to test a materially different concept, activity configuration, misconception pattern, and mission structure.
- [ ] Add the September alpha research protocol: cohort, devices, consent, measures, success thresholds, stopping rules, support owner, and privacy handling.
- [ ] Resolve adult verification, legal eligibility, retention, export/deletion, incident handling, processor review, and child-readable privacy copy before persistent child activation.
- [ ] Add explicit claims guidance prohibiting national-percentile, SEA-prediction, and unsupported mastery language.
- [ ] Define a minimum story bible and six-town reveal rules so unavailable towns create curiosity without dates, false promises, or curriculum-folder presentation.
- [ ] Define the commercial-validation plan for single-child and multi-child family plans without adding payment implementation to the alpha.
