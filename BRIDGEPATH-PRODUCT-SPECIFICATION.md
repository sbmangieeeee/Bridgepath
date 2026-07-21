# Bridgepath Product Specification — Approval Draft

> **Geography correction (17 July 2026):** `BRIDGEPATH-CANONICAL-GEOGRAPHY.md` controls. Karina contains six named towns; Arouca Groove is the current playable town and contains all 18 Standard 3 Mathematics stops. Earlier Market Village, Storypath Country, twelve-stop, and one-town-per-Standard-and-subject assumptions are superseded.

**Status:** Product discovery draft for founder approval  
**Date:** 14 July 2026  
**Scope:** Product and experience specification only. This document does not approve implementation, vendor contracts, legal compliance, payment, or launch.

## 1. Executive summary

Bridgepath is a Caribbean educational adventure platform for children in Standards 3–5. Its purpose is not simply to prepare children to answer SEA-style questions. It should help a child understand curriculum concepts early, use them in unfamiliar situations, and give parents a trustworthy view of what the child has covered, can apply independently, and may need help with before the end-of-term report.

The child experiences one persistent fictional country called Karina. Its country map shows Arouca Groove, Gasparillo, Lopinot, Barataria, Masara, and Chaconia together in one frame. Arouca Groove is the current playable Standard 3 Mathematics town and contains all 18 curriculum-derived stops. The other five towns are reserved for future learning journeys and have no approved curriculum assignments yet.

The initial product boundary is Mathematics and English across Standards 3–5 for children, parents, and eventually schools. The first content boundary is the Standard 3 Mathematics town. The first vertical slice is one complete Market Day adventure inside that town, focused on money and multi-step problem solving, subject to exact Ministry objective mapping and local educator approval. Town names, including the prototype name Riverside, remain provisional.

The first pilot should prove four things:

1. children can navigate the world and complete a teaching-to-application loop without constant adult help;
2. story context improves conceptual application rather than disguising worksheets;
3. evidence collected during play produces a parent report that is accurate and understandable;
4. parent-owned accounts, multiple child profiles, storage, recovery, and family data separation are safe enough for a controlled family pilot.

## 2. Approved direction inherited from discovery

The following decisions are treated as approved unless explicitly revised:

- Children are the primary learners. Parents are the first monitoring and purchasing audience. Schools are a later distribution and management audience.
- Bridgepath covers Standards 3–5 because support should begin before Standard 5 revision pressure.
- The learning promise is: **understand it, use it, and carry it into the adventure**.
- Explicit teaching and demonstration precede independent performance.
- The experience is a responsive web product for the first pilot.
- Storypath is a fictional Caribbean country, not a recreation of Trinidad and Tobago and not a collection of real towns.
- The child sees fiction-first town names once approved. The parent sees the formal Standard, subject, strand, objectives, evidence, and coverage.
- The world is shown at three levels: country overview, detailed town map, and sequential adventure path.
- The Karina Country Map shows six named towns together in one frame.
- Arouca Groove is the current playable Standard 3 Mathematics town and contains all 18 stops.
- Gasparillo, Lopinot, Barataria, Masara, and Chaconia remain reserved for future learning journeys without Standard, subject, or stop assignments.
- Future towns are visible but unavailable. They may be muted or closed, but should not create pressure or expose unfinished curriculum promises as if they were complete.
- A parent can create and manage multiple child profiles.
- Children do not require email addresses.
- Parents see formal curriculum mapping and actionable recommendations.
- Recorded narration is excluded from the first vertical slice. All content must work without audio, while the content model remains ready for future narration.
- UX/UI, core functionality, trustworthy storage, and family-data safety precede payment and broad deployment.

### Superseded or reconciled directions

- **Superseded:** Storypath Country and one-town-per-Standard-and-subject geography.  
  **Current:** Karina contains six named towns; Arouca Groove holds the complete current 18-stop journey and the other towns are unassigned future journeys.
- **Clarified:** the six approved environment backgrounds are reusable locations inside Arouca Groove, not towns.
- **Reconciled:** “the child can choose a path” does not mean unrestricted curriculum skipping. The child can choose where to look and, later, which available side activity to take, while core prerequisite learning retains a clear recommended sequence.
- **Deferred:** Caribbean recorded voice. The pilot is text-first and silent-capable.

## 3. Product boundaries

### Long-term Bridgepath product boundary

- Standards 3–5 Mathematics and English remain the long-term learning scope, but future journeys are not yet assigned to Karina's five reserved towns.
- One persistent Caribbean-inspired fictional country.
- Child learning experience, parent reporting and controls, and later read-only school/class progress visibility.
- Curriculum coverage, instruction, guided practice, application, remediation, and longitudinal evidence.
- Optional age-appropriate adventure, customization, achievements, and mini-games only when they support learning, belonging, or creative play.

The long-term boundary does not imply that all of this ships in the pilot.

### First content boundary

- Standard 3 Mathematics only.
- Arouca Groove as the container for all 18 Standard 3 Mathematics stops.
- Enough curriculum and story planning to demonstrate how multiple adventures could eventually form the town, without claiming the town is complete.

### First vertical slice

- One complete Market Day adventure.
- Parent registration and consent gate suitable for testing, subject to approved verification.
- Creation and selection of multiple child profiles.
- Child entry without email.
- Country-to-town-to-path navigation.
- Teaching, guided practice, mini-game, remediation, independent mission, results, resume, and parent reporting.
- No recorded voice, payment, teacher accounts, public social systems, or full Standard 3 coverage.

## 4. Assumptions

- Initial families are primarily in Trinidad and Tobago.
- The Ministry of Education curriculum is authoritative for formal mapping.
- A qualified Trinidad and Tobago primary Mathematics educator will approve exact objectives, examples, misconceptions, scaffolds, and evidence rules.
- The controlled pilot is 20–50 families and is not open to unrestricted child use.
- A parent or guardian owns the family account and authorizes each persistent child profile.
- The pilot team can support illustration, curriculum writing, product/design, engineering, parent support, and privacy review.
- Children may use shared household devices, intermittent connections, smaller Android phones, tablets, Chromebooks, iPads, or Windows laptops.
- Not every parent knows curriculum terminology. Reporting must offer plain-language meaning before formal detail.
- The existing prototype and art are direction-setting references, not production-ready security or content systems.
- Local survey responses are directional, not representative research: four responses indicate interest and a need for earlier visibility, but cannot establish market size or feature priority.

## 5. Users and roles

### Child learner

A Standard 3–5 child who enters Storypath, receives instruction, completes missions, asks for help, resumes progress, and sees only their own adventure and private achievements.

### Parent or guardian owner

The adult who creates the family account, provides required consent, creates child profiles, manages access, views curriculum evidence, exports or deletes data, and receives suggested ways to help.

### Additional guardian — later

An explicitly invited adult with revocable access. Ownership, reporting visibility, and sensitive permissions must be unambiguous. This role is not required in the first slice unless safe family use proves impossible without it.

### School coordinator and teacher — later

A school coordinator may register a school or class and provision private learner IDs through a separately reviewed consent and relationship model. A teacher may view a class dashboard showing each child's coverage, evidence state, recent activity, and support needs. Teachers do not create assignments, reorder learning paths, edit evidence, or manually declare mastery. Bridgepath remains the curriculum-aligned learning experience; the school view helps adults understand use and progress rather than turning Bridgepath into a learning-management system. This role requires separate school, parent, procurement, and privacy discovery and is not part of the first pilot.

### Bridgepath content and operations roles — internal, later

Curriculum reviewer, writer, editor, illustrator, support agent, privacy administrator, and content publisher. Internal tooling is outside the pilot UI, but approval provenance and safe support processes are dependencies.

## 6. Jobs to be done

### Parent jobs

- When school reporting arrives too late, show me which curriculum areas my child has encountered, understands, and can apply so I can act earlier.
- When my child appears to be doing well in class, give me evidence that is broader than a class rank and relevant to national expectations.
- When my child struggles, tell me the likely concept—not just the wrong question—and give me a small, practical next action.
- When I cannot provide daily lessons, give my child a trustworthy, self-directed learning experience and show me what happened.
- When I have more than one child, let me switch cleanly between them without mixing progress.

### Child jobs

- Help me know what to do next without making me feel I am staring at a syllabus.
- Teach me before judging me.
- Let my correct academic actions matter to the story.
- When I get stuck, help me understand and try again without taking learning away.
- Let me return to a place and characters that remember my progress.

### Future school jobs

- Show patterns across learners without replacing teacher judgment.
- Identify concepts requiring reteaching and distinguish lack of exposure from attempted difficulty.
- Give every learner a private school-issued access ID and show progress against a versioned curriculum.
- Observe rather than manipulate: no assignments, evidence editing, or teacher-controlled mastery.

## 7. Product principles

1. **Teach before testing.** A child should not need to guess a new method from feedback alone.
2. **Application over question rehearsal.** Missions require the child to recognize concepts inside real situations and worded problems.
3. **Fiction for children, traceability for adults.** Storypath remains coherent while every activity has an auditable curriculum purpose.
4. **Evidence, not score theatre.** Accuracy, support level, context, recency, and independence matter more than a single percentage.
5. **Mistakes open support.** Errors reduce complexity, restore models, and create a new chance; they do not remove instruction.
6. **One obvious next action.** Exploration must not create disorientation.
7. **Private encouragement.** No public rankings, manipulative scarcity, shame, gambling-like reveals, or punitive streak loss.
8. **Caribbean by lived detail.** Avoid postcard shorthand, stereotypes, and constant steelpan as a cultural signal.
9. **Safe by data boundary.** Child data ownership, isolation, consent, retention, and deletion shape the product from the start.
10. **Accessible without special pleading.** Text, keyboard, touch, zoom, reduced motion, and alternative representations are part of the core experience.

### Reference-product synthesis

- **Bookworm Adventures supplies the visual and fantasy reference:** an illustrated full-screen landing hub, characters within the environment, landmarks as destinations, and a sense of entering a storybook world.
- **Duolingo supplies the onboarding and progression reference:** short setup, one obvious next action, optional future starting-point check, small learning sessions, and a visible node path.
- **Khan Academy supplies the instructional and reporting reference:** credible explanation, curriculum traceability, parent/teacher visibility, and progress that is more meaningful than rewards.
- **Bridgepath must remain original:** these are functional principles, not permission to reproduce protected characters, layouts, visual systems, dialogue, or assets.

## 8. World model

### Child-facing hierarchy

`Karina Country Map → Arouca Groove Journey Map → Town location → Curriculum stop → Mission → Activity`

### Proposed geography

Karina is one country joined by rivers, roads, hills, coast, bridges, and recurring characters. Its six named towns are visible together on the Karina Country Map. Arouca Groove contains the complete current 18-stop Standard 3 Mathematics journey; the other five towns remain unassigned future journeys.

The country overview shows all six towns. Arouca Groove is available and the other five are muted, locked, or marked as future journeys with accessible state descriptions and no launch promises. Selecting Arouca Groove opens its detailed 18-stop journey map.

### Why this model

- It keeps the full scope visible without forcing a child to navigate through a separate subject region first.
- It gives each Standard-and-subject curriculum a contained progression and age-calibrated story.
- Parent setup can direct a child immediately to the relevant town while preserving a sense of a larger country.
- It preserves a shared country identity and allows characters and story consequences to cross town boundaries later.
- It avoids presenting six curriculum folders as arbitrary towns only if geography, relationships, and story exist beyond the curriculum labels.

### Risk control

Every town must have a dramatic premise, local relationships, evolving places, and consequences unrelated to “finishing a unit.” Town names and landmarks must be fiction-first. The product should never label the child-facing place “Standard 3 Mathematics Town,” even though that mapping is explicit for parents and schools.

## 9. Complete first-time walkthrough

1. **Launch hub.** Full-screen Storypath Village image, Bridgepath Adventures title, Niko and Zuri at the crossroads, and five in-world destinations. Adventure and Parent Area operate; Customize Explorer, Mini-games, and My Achievements open polished private previews. No narration plays.
2. **Role decision.** Adventure for an unconfigured family explains that an adult needs to set up the first explorer. Parent Area opens the adult path. Sensitive actions require an adult boundary, not child progress.
3. **Parent registration.** Adult enters email and secure authentication details, country/eligibility, terms acceptance, and guardian attestation. Duplicate email, weak credential, offline, and service-error states preserve safe progress and explain the next action.
4. **Email verification.** The parent receives a time-limited verification link. Resend is rate-limited and does not disclose whether unrelated emails have accounts.
5. **Adult verification and consent.** Before persistent child data activates, the approved process explains data collected, why, retention, processors, parent rights, and how to withdraw. It produces a versioned consent receipt. Email verification alone is not described as proof of guardianship.
6. **Family setup.** Parent chooses Add a child or, later, Connect an existing child. Empty, interrupted, and resumed setup states return to the last safe step.
7. **Create child profile.** Parent enters a nickname/display name, Standard, selects the starting subject/town available to that child, chooses an optional avatar and text/motion preferences, and creates a four-symbol picture PIN. In the first slice, Standard 3 Mathematics is the only playable selection. The UI discourages full legal names. No voice, photograph, location, or free-text biography is requested.
8. **Add another child.** Parent can repeat the flow or continue with one profile. Each child has clearly separate state.
9. **Parent first view.** Before learning evidence exists, the dashboard confirms the selected Standard, subject, and corresponding town, shows “Not started,” and gives one action: Let [nickname] begin. Formal mapping is expandable. As more towns launch, the parent may enable the appropriate town without changing the child's recorded evidence.
10. **Child device entry.** On a trusted family device, the child enters a family code, chooses their profile, and enters the picture PIN. Rate limiting, forgotten PIN, wrong profile, and account recovery protect privacy. The system never reveals another family’s names after an invalid code.
11. **Playable orientation.** Niko and Zuri teach tap/click, keyboard selection, drag alternatives, submit, feedback, help, and returning home through a two-minute fictional task. It can be replayed later.
12. **Country reveal.** The learner sees all six Storypath towns together in one country frame. The town selected by the parent for the child's Standard and subject is highlighted as the clear next destination; unavailable or unselected towns remain visible but muted.
13. **Town selection.** Selecting the available town reveals its eventual fiction-first name, short story premise, and an Enter action. Future towns disclose “More adventures are being prepared” without dates or curriculum pressure. The map does not require the child to travel through a separate subject area.
14. **Standard 3 Mathematics town map.** The learner sees a detailed Caribbean-inspired town with Market Square available and other future locations visible. A list/map alternative exposes the same locations. The current prototype may use Riverside as a working label, but the final name is undecided.
15. **Market Day adventure detail.** Child-language goals say, for example, “Work out totals, choose how to pay, and check change.” Estimated time and resumability are clear.
16. **Adventure path.** A mostly linear, illustrated route contains encounter, demonstration, guided activity, market queue, support/review, final mission, and resolution. Completed, current, available-review, and future states are differentiated without colour alone.
17. **Encounter.** Niko and Zuri learn that event preparations are behind. Auntie Anisa needs help at the market. Dialogue is brief, visible, step-controlled, and skippable/replayable.
18. **Demonstration.** Auntie Anisa models prices, combining values, estimating, choosing payment, and checking an answer. The child can move backward or replay text panels.
19. **Guided practice.** The child forms totals and payments using concrete money representations plus a keyboard-friendly selection alternative. Hints progressively reveal the model.
20. **Mini-game.** The child fulfils a small customer queue. Accuracy and explanation matter more than speed. Timing is off by default or fully optional and can never control evidence quality.
21. **Support branch.** Repeated difficulty slows the task, reduces choices, returns to concrete models, separates one step from another, and then offers a parallel retry. The child can pause without losing access.
22. **Independent application.** The child buys event supplies within a budget, checks change, revises a choice after a price change, and explains or selects why an answer is reasonable.
23. **Resolution.** The event can proceed. Results name the concepts demonstrated, the support used, and the next story step; they do not reduce the experience to a score.
24. **Return home.** The hub or town path shows one “Continue” action, the last safe stop, and a non-punitive learning rhythm.
25. **Updated parent view.** Parent reauthenticates if needed, selects the child, and sees plain-language evidence plus the formal curriculum mapping, recency, support level, and a suggested offline activity.

## 10. Child flows

### Core flows

- Enter on trusted device → select profile → picture PIN → resume.
- Launch hub → Adventure → country → selected Standard 3 Mathematics town → current adventure → current learning stop.
- Complete orientation or replay it from Help.
- Learn → guided attempt → practice → independent application → reflection.
- Request a hint before submitting.
- Receive targeted feedback after an error.
- Enter remediation after repeated errors and retry a parallel problem.
- Pause at any activity; resume at the last safe boundary with in-progress work restored when reliable.
- Review a completed stop without duplicating rewards or evidence.
- Switch child only through a clear exit/profile gate.

### Child-visible progress language

- Ready
- Next stop
- Completed
- Try again with help
- Review
- More adventures coming later

Terms such as objective, strand, denominator, mastery threshold, and curriculum edition do not appear on the child path.

## 11. Parent flows

- Register, verify email, complete approved adult verification, and consent.
- Resume abandoned registration without duplicate family records.
- Create, edit, archive, or delete multiple child profiles.
- Reset a child PIN after parent reauthentication.
- Select a child and view overview, curriculum detail, recent evidence, support needs, and suggested action.
- Distinguish not introduced, introduced, practising, independent application, and needs support.
- View the evidence behind a status: activity type, date, support level, context, and curriculum/content version.
- Export family/child records in an understandable format.
- Withdraw consent, unlink a relationship where applicable, and request deletion with clear consequences and status.
- Manage trusted devices and end child sessions.
- Recover parent access without disclosing family details.
- Later, invite or revoke an additional guardian through a verified, time-limited flow.

## 12. Returning flows

### Returning child

The launch hub highlights Adventure. After child entry, Niko or Zuri identifies the last safe stop and offers one dominant “Continue Market Day” action. The child may choose the town map or review, but is not forced through repeated introductions.

### Returning parent

Parent Area opens login or, with a valid parent session, the dashboard. Sensitive privacy, child-linking, export, deletion, and device controls always require recent parent authentication.

### Interrupted session

The product restores the most recent confirmed safe boundary. If an activity has trustworthy resumable state, it offers “Continue where I was” or “Restart this activity.” It must not claim completion, award rewards, or append evidence from an ambiguous partial attempt.

### Content version changed

Historical evidence remains tied to its original version. A child with an active incompatible resume is moved to the nearest safe start and receives a neutral explanation. No historical mastery is silently rewritten.

## 13. Information architecture

### Internal curriculum hierarchy

`Curriculum edition → Standard → Subject → Strand → Unit → Concept → Objective → Evidence requirement`

### Child adventure hierarchy

`Karina Country Map → Arouca Groove Journey Map → Location → Curriculum stop → Mission → Activity`

### Mapping rules

- A learning stop has one primary objective and may support secondary objectives.
- An activity is a reusable type: story, demonstration, guided task, practice, mini-game, review, or application.
- Questions and scenarios are versioned content within activities, not the fundamental progress unit.
- Each evidence event references the child, objective, activity/content version, context, support level, attempt, and time.
- Academic progress, adventure progress, rewards, and resume state are separate concepts.
- Parent percentages use an explicit, versioned denominator and never mix curriculum editions silently.

### Route groups

- Public and help
- Parent authentication, verification, consent, and recovery
- Child device entry
- Child hub, country, town, path, activities, results, and preferences
- Parent family overview, child report, recommendations, and account/privacy controls
- Internal administration and schools remain outside the first pilot UI

## 14. Learning model

Each substantial learning session follows a stable seven-stage arc:

1. encounter a meaningful problem;
2. introduce the concept in child language;
3. demonstrate a method with concrete and pictorial representations;
4. try with guidance;
5. practise in a short game-like activity;
6. apply independently in a changed context;
7. reflect and establish a safe stopping point.

Sessions target 10–15 minutes, but no essential activity uses a strict response timer. Longer adventures are composed of resumable learning stops. Worked examples, manipulatives, language, numerical notation, and context must agree. Worded problems assess comprehension without deliberately obscuring the mathematics.

## 15. Curriculum-to-adventure model

Curriculum does not become a story merely by changing “John has five apples” to a fictional name. Each adventure begins with an authentic community need whose resolution naturally requires the target concept.

For every adventure, content design must document:

- approved objective(s) and curriculum edition;
- prerequisite knowledge;
- child-facing purpose;
- story problem and why the concept is necessary;
- concrete, pictorial, and symbolic representations;
- common misconceptions;
- teaching script;
- guided and independent evidence opportunities;
- remediation variants;
- transfer context different from the demonstration;
- parent explanation and offline action;
- cultural and accessibility review notes.

The story may create emotional stakes, choices, and visible change, but cannot require unrelated play before instruction. Every required action must teach, practise, apply, reflect on, or meaningfully contextualize the active learning.

### Bridgepath lesson-to-mission pattern

A town location introduces a concept, allows guided practice, and then sends the child into a community mission where the concept becomes necessary. For example, a marketplace or home lesson could introduce number value, quantities, fractions, or measurement; guided practice would establish the representation; and an application mission might ask the child to collect ingredients from neighbours and then measure them while baking a cake. This is a reusable narrative pattern, not yet an approved first-slice objective bundle. Number value, money, fractions, and measurement must not be combined into one adventure unless the signed curriculum mapping and evidence plan support that scope.

## 16. Mastery and evidence model

### Evidence states

- **Introduced:** the child encountered instruction; no independent claim.
- **Guided:** the child completed work with material support or step-level prompting.
- **Practised:** the child produced relevant attempts in familiar contexts.
- **Applied:** the child succeeded independently in a changed or multi-step context.
- **Mastered:** multiple sufficiently independent observations across time and/or contexts satisfy an educator-approved rule.
- **Needs support:** recent evidence shows persistent misconception or dependence on scaffolding; this is not a permanent label.

### Required safeguards

- One high score or guided completion cannot establish mastery.
- The client never declares mastery directly.
- Guessing, retries, hint use, and scaffolding affect the interpretation of evidence without punishing the child.
- Recency and content/curriculum versions remain visible.
- Repeated instances of the same question do not count as distinct contexts.
- Lack of activity is “not yet observed,” not failure.
- A parent can inspect why a status was assigned.

## 17. Mistakes, consequences, and remediation

### First error

Give specific explanatory feedback tied to the misconception, preserve the child’s work where useful, and invite another attempt.

### Repeated error

Reduce the number of simultaneous decisions, restore a concrete model, demonstrate a smaller analogous step, and then provide a parallel—not identical—retry.

### Continued difficulty

Offer optional review or a safe stop, record a support signal, and tell the parent the concept and a suggested action. The child can continue instruction and review.

### Adventure consequence

Academic errors may change a reversible mission detail: fewer optional decorations are selected initially, a customer waits, or characters revise the plan. They must never consume hearts, permanently lose items, block teaching, or shame the learner. Completing remediation restores the route forward.

## 18. Progression and prerequisites

The first town uses a bounded, mostly linear core path because it provides a clear next action and makes prerequisite sequencing testable. Choice appears through review, optional support, later side activities, and—once content depth exists—choice among two currently appropriate adventures.

Progression rules:

- Instruction unlocks the first guided activity.
- Guided completion can unlock practice but not claim independent application.
- Independent mission access requires the relevant teaching stops, not a currency or streak.
- Failed independent application opens support and retry; it does not relock instruction.
- Review is always available after completion.
- Future towns are content-gated, not child-performance-gated in the pilot.
- Standards 4 and 5 towns must define prerequisite handling for new learners without forcing them to replay an entire earlier town.

## 19. Game systems

### Included in the vertical slice

- Story progression and visible town change.
- Private, concept-specific acknowledgements.
- A non-punitive learning rhythm showing current and best consistency with grace days.
- Limited mission rewards separated from academic evidence.
- Private preview destinations for customization, mini-games, and achievements.

### Rules

- No public leaderboard, cross-family names, chat, trading, loot boxes, paid random rewards, or energy that blocks learning.
- No reward is evidence of mastery.
- Mini-games must state their learning purpose and accessible equivalent.
- Streak language must support returning without threatening loss or disappointment.
- Rewards should reinforce identity, contribution, collection, or visible world restoration more than accumulation.

## 20. Content systems

The product needs versioned, reviewable content that can express:

- world, town, location, adventure, mission, and path metadata;
- dialogue and story panels;
- demonstrations with ordered steps;
- manipulative and selection activities;
- hints with progression levels;
- misconception-specific feedback;
- parallel retries and remediation branches;
- accessibility text, keyboard alternatives, reduced-motion behavior, and transcripts;
- future audio manifests containing exact text, speaker, locale, timing, caption/transcript, and failure fallback;
- evidence requirements and curriculum references;
- parent explanations and offline activities;
- content status, reviewer, approval date, and version history.

The first slice may use a structured repository rather than a CMS. The product requirement is safe versioning and review, not a particular authoring vendor.

## 21. Parent reporting

### Overview hierarchy

1. **What to know now:** one plain-language summary.
2. **Where the child is:** Not started, Learned with help, Practising, Can use independently, or Needs support.
3. **Evidence:** what the child did, when, in what context, and with what support.
4. **Curriculum detail:** Standard, subject, strand, concept, objective, curriculum edition, and coverage denominator.
5. **What to do next:** a short Bridgepath recommendation and an offline conversation/activity.

### Reporting requirements

- Switch cleanly among multiple children.
- Separate coverage from performance and mastery.
- Distinguish “not introduced” from “attempted and struggling.”
- Avoid national percentile or class comparison until a valid, representative norming study exists.
- Do not imply SEA prediction from ordinary activity data.
- Explain uncertainty when evidence is insufficient or old.
- Show support/hint level and independent application.
- Reconcile all summaries with append-only, versioned evidence.

## 22. Authentication and relationship model

### Parent

- Real parent authentication is required for the pilot.
- Email verification confirms control of an email address, not guardianship.
- Sensitive controls require recent reauthentication.
- Recovery must not expose child names, progress, or family membership.

### Child

- No email is required.
- Recommended provisional model: family/device code → profile selection → four-symbol picture PIN → server-issued child session.
- Picture PINs are not stored or compared as plain text.
- Wrong attempts are rate-limited without revealing whether a guessed family or child exists.
- Trusted-device resume is revocable by the parent and scoped to one family.

### Relationships

- The parent owner creates child profiles and controls consent.
- Every child record, session, progress event, resume, and reward belongs to exactly one authorized family relationship.
- Additional guardian access, if introduced, is explicit, time-limited during invitation, revocable, and auditable.
- Connecting an existing profile requires a short-lived, single-use code and parent confirmation; invalid, expired, or reused codes reveal no child information.
- Shared-device switching ends the previous child context before another begins.

## 23. Accessibility

Target WCAG 2.2 AA for the core product, supplemented by testing with children and assistive technology.

- DOM-first controls with semantic names and visible focus.
- Keyboard and switch-compatible essential flows.
- Touch targets of at least 44 × 44 CSS pixels where feasible.
- A list alternative for country and town maps.
- A non-drag alternative for every essential drag interaction.
- Text remains visible; no instruction depends on audio.
- 200% text zoom without loss of content or action.
- Status is not communicated by colour alone.
- Reduced-motion behavior removes nonessential movement and preserves meaning.
- No strict response timers; optional timing can be disabled.
- Plain language, short steps, replay/back controls, and alternative representations.
- Loading, errors, previews, locks, and progress states are announced meaningfully.
- Future narration must have matching text and transcripts; failed audio cannot block an activity.

W3C guidance emphasizes sufficient time and alternative content for complex information; these are core learning requirements, not polish.

## 24. Caribbean context and cultural integrity

Storypath should feel recognizable through ordinary life rather than national symbols pasted onto generic fantasy.

Potential references include mixed residential/shopfront architecture, covered galleries, markets, schoolyards, libraries, workshops, recreation grounds, drains, hills, village roads, gardens, rainy-season light, mango, poui, coconut, immortelle, and flamboyant. Community stories may involve market shopping, doubles ingredients, fruit portions, maxi-taxi planning, cricket scoring, pan-yard preparation, gardening, tailoring, building, libraries, and family events.

Characters should reflect Afro-Trinidadian, Indo-Trinidadian, mixed, and other locally recognizable families without assigning personality or occupation by ethnicity. Instruction uses Standard English. Dialogue may carry natural Trinidad and Tobago rhythm and carefully reviewed expressions, without making dialect a joke or comprehension barrier.

Required review includes local children, parents, educators, writers, and illustrators. A reference board or NALIS bibliography cannot substitute for community review. Music and future voice should be locally informed but avoid treating steelpan as the only acoustic identity. If youthful narration is later desired, use a safeguarded professional process; an adult performer with a natural youthful delivery may reduce the privacy and labour risks of recording a child.

## 25. Privacy and child safety

The pilot collects only what is necessary for accounts, learning, safety, support, and legally approved research. It excludes advertising, behavioral marketing, public profiles, chat, voice capture, photographs, precise location, contacts, and child-authored public text.

Before launch, Bridgepath requires:

- a data inventory and purpose for every field/event;
- approved parent verification and consent process;
- versioned notices and consent receipts;
- retention and deletion schedule;
- parent access, correction, export, withdrawal, and deletion flows;
- processor and hosting-region review;
- least-privilege staff access and auditability;
- threat model and authorization tests;
- backup restoration and deletion verification;
- incident response and family notification playbook;
- research consent separate from product consent where required;
- a child-readable privacy explanation.

Trinidad and Tobago’s Data Protection Act, Chapter 22:04, is the primary legal baseline. Counsel must determine which provisions are in force and which other jurisdictions apply. FTC COPPA guidance is a useful higher-protection reference for verifiable parental consent, minimization, parent access, and schools, but is not Trinidad and Tobago legal advice. Open registration cannot launch until counsel approves the verification method.

## 26. Analytics and validation

### Necessary product and learning events

- registration/verification/consent state changes;
- child profile creation and safe session entry;
- map, town, adventure, and learning-stop starts/completions;
- teaching step viewed or replayed;
- attempt, error category, hint level, remediation entry, retry, and independent evidence;
- pause, interruption, resume, duplicate submission, and recovery;
- report viewed and recommended action opened;
- accessibility preferences and technical failures, without sensitive behavioral profiling.

### Pilot questions and measures

- Can at least 80% of tested children complete core navigation without facilitator instruction?
- Do children correctly explain what the Market Day mission is asking them to do?
- Do independent application results align with educator judgment?
- Can parents correctly interpret coverage versus independent use?
- Can parents name an appropriate next action after viewing the report?
- Where do children replay teaching, request hints, or enter remediation?
- Are session length and stopping points comfortable rather than optimized for compulsion?
- Do shared-device, accessibility, or bandwidth conditions create exclusion?

Registration, raw time spent, streak length, and return rate are diagnostic measures—not proof of learning or success.

## 27. Recommended vertical slice

### Candidate comparison

| Candidate | Adventure fit | Evidence variety | Production risk | Decision |
|---|---|---:|---:|---|
| Market Day: totals, payment, budget, change, estimation | Strong everyday community need; naturally supports a vendor teacher and multi-step finale | Concrete money, calculation, choice, estimation, explanation, transfer | Requires careful currency representation and exact objective limits | **Recommended** |
| Workshop/Garden: measurement and perimeter | Strong building/growing story with manipulatives | Measure, compare, calculate, plan | More device calibration and spatial-interaction complexity | Later town adventure |
| Cricket/recreation: scoring and data representation | High local relevance and clear changing data | Totals, tables, charts, interpretation | Risks assuming cricket knowledge and broadening objectives | Later, after cultural/educator testing |

### Curriculum basis

The official Ministry Mathematics curriculum guide for Standard 3 includes one- and multi-step addition and subtraction problems involving whole numbers and money, including bills and best-buy contexts, and calls for estimation, inverse checking, multiple representations, explanations, and mathematical games. It also includes multiplication/division problems involving money. The first slice must select an exact, bounded subset with an educator; it must not claim the entire money domain.

### Market Day sequence

1. Event preparation is behind schedule.
2. Auntie Anisa demonstrates prices, totals, estimation, and checking.
3. Child manipulates notes/coins or uses an accessible alternative.
4. Guided exact-payment activities introduce progressive hints.
5. A short queue practises totals and payment without compulsory speed.
6. A support branch isolates misconceptions.
7. The child chooses three supplies within a budget, responds to one price change, verifies change, and explains reasonableness.
8. The town’s event proceeds and the parent report updates.

## 28. Functional requirements

### Accounts and family

- FR-01 Parent can register, authenticate, verify email, recover access, and reauthenticate.
- FR-02 Child activation is blocked until the approved consent/verification state exists.
- FR-03 Parent can create and manage multiple isolated child profiles.
- FR-04 Child can enter without email using an approved family/device flow.
- FR-05 Parent can reset child access, revoke trusted devices, export, withdraw consent, and request deletion.

### World and navigation

- FR-06 Launch hub exposes five accessible destinations; three future modes are previews only.
- FR-07 Adventure routes new families to adult setup and returning children to their saved state.
- FR-08 Karina Country Map shows all six named towns together, with Arouca Groove available and the other five reserved for future journeys.
- FR-09 The available town opens a detailed town map and a sequential adventure path.
- FR-10 Maps have equivalent semantic/list navigation.

### Learning

- FR-11 Activities support demonstration, guided work, practice, remediation, and independent application.
- FR-12 Every essential pointer/drag action has a keyboard/non-drag alternative.
- FR-13 Errors trigger misconception-relevant feedback and progressive support.
- FR-14 Progress saves at defined safe boundaries and duplicate submissions are idempotent.
- FR-15 Historical evidence references curriculum and content versions.
- FR-16 Derived learning status is server-authoritative and cannot be assigned by the client.
- FR-17 Review does not duplicate academic evidence or rewards.

### Reporting

- FR-18 Parent can switch children without data leakage.
- FR-19 Dashboard separates coverage, support, independent application, and mastery.
- FR-20 Parent can expand plain-language status into formal curriculum mapping and evidence.
- FR-21 Report includes a relevant offline action and indicates insufficient evidence honestly.

## 29. Non-functional requirements

- NFR-01 Core flows meet WCAG 2.2 AA and pass manual keyboard, touch, zoom, reduced-motion, and sampled screen-reader testing.
- NFR-02 Supported phone, tablet, Chromebook-class, and desktop layouts remain usable in portrait and landscape.
- NFR-03 No family can read or mutate another family’s child, evidence, reward, resume, or consent data.
- NFR-04 Sensitive data is protected in transit and at rest; secrets and child PIN verification material are never exposed to clients or logs.
- NFR-05 Account, consent, relationship, and evidence changes are auditable.
- NFR-06 Resume and evidence writes tolerate retries and reconnects without duplication.
- NFR-07 Text/core interactions function when audio is absent or fails.
- NFR-08 Essential pages provide useful loading and constrained-bandwidth behavior.
- NFR-09 Backup restoration, export, and deletion are verified end to end before pilot.
- NFR-10 No uncaught browser error or critical/high security or accessibility defect remains in supported pilot flows.
- NFR-11 The product provides safe failure messages without account enumeration or child-data disclosure.
- NFR-12 Curriculum and content versions preserve historical interpretation.

## 30. Edge and failure states

- Duplicate parent email, unverified email, expired verification, repeated resend.
- Abandoned consent or family setup and safe resumption.
- Verification provider unavailable or inconclusive.
- Parent has no child, one child, or multiple children.
- Incorrect family code, wrong picture PIN, too many attempts, forgotten PIN.
- Expired, reused, incorrect, or intercepted child-link code.
- Shared device retains the wrong child session.
- Child profile deleted or consent withdrawn during an active session.
- Offline at activity start, during an attempt, at evidence submission, or at reward presentation.
- Duplicate attempt/reward submission after reconnect.
- Client state conflicts with confirmed server state.
- Content missing, withdrawn, updated, or incompatible with saved resume.
- Audio absent or future audio fails.
- Unsupported drag, reduced motion, 200% zoom, screen reader, or keyboard-only use.
- Repeated errors, exhausted hints, optional retry declined, or session stopped mid-remediation.
- No evidence, insufficient evidence, stale evidence, conflicting evidence, or an objective removed from the active curriculum edition.
- A future placement check is skipped, interrupted, or produces uncertain evidence; it must recommend a starting point rather than permanently label or lock the child.
- Export generation fails, deletion is pending, or backup contains data scheduled for deletion.
- Parent session expires while viewing sensitive controls.
- Service error must preserve a safe route home and a support reference without exposing internals.

## 31. Acceptance criteria

### Experience

- A new family can register, complete approved consent, create two children, and enter each child separately.
- A keyboard-only child can reach the Standard 3 Mathematics town and complete every essential Market Day activity.
- A returning child resumes at the correct safe boundary after interruption in every activity type.
- Children understand which town and node are available without seeing formal curriculum folder labels.
- Future towns and hub modes are discoverable previews, not broken or misleading controls.

### Learning

- Correct, incorrect, repeated-error, remediated, and independent journeys produce educator-approved states.
- One guided or high-scoring attempt cannot produce mastery.
- Independent application changes context and includes multi-step reasoning, checking, or explanation.
- Repeated errors change scaffolding without locking instruction.
- Educator review confirms that successful final-mission evidence reflects the signed objectives.

### Parent reporting

- Parent summary reconciles with objective-level, versioned evidence.
- Parent can distinguish not covered, practising, independent, and needs support.
- Multiple-child switching never shows the previous child’s evidence.
- Parent percentages state their curriculum edition and denominator.

### Safety and operations

- Authorization tests demonstrate no cross-family access.
- Invalid link and login flows disclose no child information.
- Consent withdrawal, export, deletion, device revocation, and backup restoration are verified.
- No critical/high accessibility or security defects remain.
- Legal/privacy, curriculum, cultural, and pilot readiness gates are signed by named reviewers.

## 32. Dependencies

- Official Ministry curriculum guide and exact Standard 3 objective mapping.
- Named qualified local Mathematics reviewer.
- Trinidad and Tobago cultural review group including children and parents.
- Approved adult verification/consent method and legal advice.
- Data inventory, retention schedule, processor review, and threat model.
- Original world, town, character, activity, and destination illustration pipeline.
- Complete Market Day script, question set, misconception model, evidence rubric, and parent activity.
- Authentication, family relationship, storage, authorization, versioning, and recovery capabilities.
- Real-device/accessibility testing capacity.
- Pilot recruitment, research consent, support, and incident processes.
- Hosting, backup, export, deletion, and monitoring decision before pilot; payment is not a prerequisite for the controlled slice.

## 33. Principal risks

| Risk | Consequence | Mitigation |
|---|---|---|
| World becomes curriculum folders with scenery | Weak fantasy and child attachment | Fiction-first town premises, recurring relationships, cross-location consequences, child research |
| Six towns feel like curriculum folders on a country map | World loses coherence and children see the disguise | Give each town a dramatic identity, relationships, evolving locations, and cross-town continuity; never use curriculum labels as child-facing names |
| Market Day scope expands across too many objectives | Unreliable teaching and missed schedule | Signed objective subset and hard content boundary |
| Parent report overclaims mastery or national standing | Misleads families | Multi-observation evidence, uncertainty language, no percentile/SEA prediction without validation |
| Open registration precedes adult verification decision | Pilot delay or legal exposure | Controlled cohorts and legal gate before activation |
| Storage is built before family isolation rules | Cross-child/family leakage and costly rework | Make ownership, authorization, consent, and auditability storage requirements from day one |
| Illustration/audio becomes critical path | Incomplete slice | Layered reusable 2D art; no recorded narration in first slice |
| Game rewards overshadow learning | Guessing, anxiety, weak transfer | Academic evidence separate from rewards; no hearts/energy/public ranks |
| Caribbean setting becomes stereotyped | Loss of trust and authenticity | Paid local review and ordinary-life reference base |
| Shared devices mix child state | Incorrect evidence and privacy breach | Explicit child context, session boundary, parent device controls, tests |
| School dashboard expands into assignment management | Product focus and child progression become teacher-controlled | Lock the school concept to provisioning and read-only progress visibility; run separate consent/workflow discovery |

## 34. Deferred decisions and features

- Recorded narration, voice casting, music production, and audio controls.
- Payment model, subscriptions, trials, discounts, and school procurement.
- School registration, class IDs, teacher dashboards, and organization reporting; assignments and teacher manipulation of learning/evidence are outside the intended model.
- Additional guardian role unless required for the pilot.
- Full CMS selection.
- Native apps and app-store distribution.
- Full offline content/account operation.
- Free-roaming avatar movement and canvas game engine.
- Public or social features, multiplayer, trading, and leaderboards.
- Inventory depth, companion abilities, extensive customization, side quests, and advanced mini-games.
- Optional starting-point/placement check and adaptive diagnostics; national benchmarking remains separate and requires valid norming.
- Final names and visual identity for future towns.
- Standards 4–5 story order and cross-town finales.

## 35. Open decisions

| Decision | Options | Recommendation | Consequence | Blocking? |
|---|---|---|---|---|
| Adult verification | Specialist identity/consent provider; disclosed nominal card transaction; other counsel-approved method | Obtain legal recommendation using a method proportionate to risk and geography; do not call email verification guardianship proof | Affects activation, cost, drop-off, and operations | **Pilot launch** |
| Pilot eligibility | Trinidad and Tobago only; selected diaspora; broader open registration | Trinidad and Tobago controlled cohorts first | Simplifies legal, cultural, support, and research scope | **Pilot recruitment** |
| Exact Market Day objectives | Narrow addition/subtraction money subset; include multiplication/division; broader money unit | Start with the smallest coherent subset that supports totals, budget, payment, checking/change and educator-approved transfer | Determines teaching script and evidence rubric | **Content production** |
| Six-town geography | Clustered towns; coast/interior spread; road-and-river network; island-and-mainland arrangement | Test compositions that keep all six towns understandable in one frame while still looking like a believable country | Shapes country map, navigation clarity, and long-term lore | Design, not product gate |
| Town names | Name all six now; name only the first; use working labels internally | Keep all fiction-first names provisional until the country and town stories are developed; expose accessible “future town” information without premature public names | Avoids locking identity before story design | No |
| Child access | Family code + profile + picture PIN; trusted-device profile picker + PIN; parent starts each session | Support trusted-device picker plus PIN, with family code for new devices and parent recovery | Balances independence, shared-device risk, and usability | **Auth design** |
| Persistence under interruption | Safe-boundary only; full in-activity resume; broad offline mode | Safe-boundary persistence everywhere, richer resume only where deterministic; defer broad offline | Reduces conflict/duplication while meeting real conditions | **Learning runtime** |
| First-path choice | Strict linear; bounded branches; free choice | Mostly linear core with review/support and later appropriate side choices | Clear for children and prerequisites; less initial agency | No |
| Timing in market queue | No timer; optional timer; default timer | No required timer; if tested later, optional and excluded from mastery | Protects accessibility and evidence validity | No |
| Starting-point check | No assessment; optional short check after profile setup; mandatory placement test | Later test an optional, low-pressure check that recommends a starting node without changing the child's Standard or permanently locking content | Could reduce repetition, but requires validated item coverage and careful child messaging | Post-slice research |
| School access model | Parent-only accounts; school-provisioned learner IDs; linked parent-and-school relationships | Treat school IDs and a read-only class dashboard as a separate phase; prohibit assignments and evidence/mastery editing | Expands usefulness while preserving Bridgepath's learning flow and requiring separate consent design | School phase |
| Preferred data/auth platform | Supabase/PostgreSQL; Firebase; other reviewed service | Carry Supabase/PostgreSQL as preferred candidate because relationships, evidence, and curriculum mapping are relational; validate regions, contracts, backup, deletion, authorization, and cost in engineering review | Vendor choice affects implementation, not product truth | Engineering gate |
| September 2026 timing | Controlled pilot; prototype study; delay | Pilot only if governance, curriculum, safety, and complete slice gates pass; otherwise run a prototype study and do not relabel it production | Protects families and evidence quality | **Go/no-go** |

## 36. Readiness for CEO review

### Ready for review

- The core problem, audience, world hierarchy, product/content/slice boundaries, parent value, learning philosophy, first adventure, and major safety principles are defined.
- The country model is now explicit: Karina has six named towns; Arouca Groove contains all 18 current stops; future towns remain unassigned; the Karina Country Map and Arouca Groove Journey Map are separate pending designs.
- The official Standard 3 Mathematics guide provides a credible basis for Market Day.
- The specification states what the child sees versus what the parent sees.

### Not yet ready for implementation approval

- Exact Market Day objective IDs and evidence rubric are not signed by a named local educator.
- Adult verification, consent language, legal applicability, and pilot eligibility are unresolved.
- The six-town geography, fiction-first town names, and first-town story bible need child/local review.
- Storage/auth vendor and operational controls need engineering/security review.
- The Market Day content, low-fidelity walkthrough, and parent report interpretation require usability testing.
- Pilot success thresholds need owner names and a research protocol.

### Recommended approval decision

Approve this document as the product-specification basis only if it accurately captures the intended product. Then send it through CEO review to pressure-test demand, focus, differentiation, and whether the first slice is strong enough. Engineering planning should follow only after the blocking curriculum, legal, safety, and prototype evidence is materially resolved.

## Research basis

Sources were accessed on 14 July 2026. Firsthand competitive walkthroughs remain incomplete and should be recorded separately from official documentation and inference.

- Trinidad and Tobago Ministry of Education, Mathematics Infant 1–Standard 5 curriculum guide: https://learn.moe.gov.tt/mod/resource/view.php?id=2782394
- Ministry curriculum guides: https://www.moe.gov.tt/curriculum-guides/
- Ministry primary resources and SEA assessment framework links: https://www.moe.gov.tt/primary-school-resources/
- Duolingo teaching method: https://blog.duolingo.com/duolingo-teaching-method/
- Khan Academy child-account guidance: https://support.khanacademy.org/hc/en-us/articles/202262994-How-do-I-create-or-link-child-accounts-to-my-parent-account
- SplashLearn parent reporting: https://support.splashlearn.com/hc/en-us/articles/12275144246546-How-can-parents-view-and-track-their-child-s-progress-reports
- UNICEF RITEC child wellbeing in digital play: https://www.unicef.org/innocenti/projects/responsible-innovation-technology-children
- W3C cognitive accessibility: https://www.w3.org/WAI/cognitive/
- Trinidad and Tobago Data Protection Act, Chapter 22:04: https://agla.gov.tt/downloads/laws/22.04.pdf
- FTC COPPA FAQs: https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions
