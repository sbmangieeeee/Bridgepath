# Information Architecture

## Curriculum layer

`Curriculum edition → Standard → Subject → Strand → Unit → Concept → Objective → Evidence requirement`

## Child layer

`Village → District/location → Adventure → Mission → Learning stop → Activity`

Activities are typed as story, demonstration, guided task, practice, mini-game, review, or application. Questions are versioned content within activities. A stop may address several objectives but has one primary objective.

## Runtime domains

- **Family:** parent account, consent, adult verification, guardians, child profiles, device sessions.
- **Curriculum:** editions, objectives, mappings, evidence requirements.
- **Content:** versioned adventures, stops, activities, questions, audio manifests.
- **Learning:** append-only attempts and evidence, derived status, support signals.
- **Adventure:** location access, current stop, results, rewards.
- **Reporting:** plain-language projections over learning evidence.

Academic evidence, adventure progress, rewards, and resume state are separate. The server derives coverage and mastery; clients may never assign mastery.

## Route groups

- Public: launch, family explanation, privacy/consent, help.
- Authentication: parent register/login/recovery, child device entry.
- Child: resume, orientation, village, location, path, lesson, results, preferences.
- Parent: family overview, child report, curriculum detail, activity, recommendations, privacy.
- Deferred: administration, authoring UI, teacher/classroom, diagnostics.
