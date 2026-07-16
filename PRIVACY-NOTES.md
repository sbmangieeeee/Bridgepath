# Prototype Privacy Notes

This implementation stores a parent email, consent timestamp, child nickname, Standard, avatar, picture PIN, preferences, answers, hints, and progress in browser local storage. It sends none of that data to a Bridgepath server because no production backend is configured.

This is not production security: the picture PIN is not hashed, browser storage is readable on the device, and email is not verified. These choices make the local prototype testable but are prohibited for the pilot. Production requires server-side sessions, protected PIN verification, rate limiting, approved adult verification, consent provenance, RLS, audit logging, retention, export/deletion, incident response, and processor agreements.
