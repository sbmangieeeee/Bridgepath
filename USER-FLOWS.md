# User Flows

## First launch and family setup

`Launch → Role choice → Parent account → Plain-language consent → Child profile → Four-symbol PIN → Playable orientation → Village → Market path`

Abandoned steps preserve only already submitted local data. Production registration must resume through a verified parent session. A child without a family profile is redirected to a grown-up rather than asked for contact details.

## Returning child

`Role choice → Family code → Profile → Picture PIN → Saved village state → Next learning stop`

Production recovery is parent-only. Incorrect codes/PINs must return generic messages, rate-limit attempts, and disclose no family names. Trusted-device resume may bypass entry but not parent privacy controls.

## Parent review

`Parent authentication → Child selector → Current adventure → Coverage → Evidence stage → Support signal → Recent evidence → Suggested offline action`

Parents may add children, connect an existing child with a short-lived single-use code, export data, withdraw consent, unlink guardians, and request deletion. Expired, reused, and invalid codes expose no child details.

## Learning session

`Encounter → Demonstration → Guided payment → Practice queue → Budget application → Final mission → Reflection`

Every learning stop is a resume boundary. Incorrect attempts receive difference-based feedback. After repeated errors, the task reduces choices and restores a concrete tens-and-ones model. Support remains available; challenge consequences never lock instruction.

## Interruption and errors

- Save completion idempotently at stop boundaries; retain in-progress state locally only when safe.
- On reconnect, reconcile server truth before replaying unsent evidence.
- Loading, empty, unavailable-content, and server failures offer retry or safe return.
- Duplicate completion events do not duplicate evidence or rewards.
