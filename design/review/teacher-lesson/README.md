# Teacher Lesson composition review

Verified 4 August 2026 against the real Welcome → StoryPath → Arouca Groove → Corner Shop Challenge flow.

The untouched 1672×941 `school-instruction-template.png` remains the classroom and whiteboard environment. The untouched 422×1326 `ms-leela-maharaj-transparent.png` remains a separate full-body layer. Accessible lesson content, Replay/Continue controls and the HUD remain independent DOM layers.

| Viewport | Rendered Ms. Leela bounds (x, y, w, h) | Ground offset | Review image |
|---|---:|---:|---|
| 1440×900 | 21.6, 160.2, 229.1, 720 | 19.8 px | `desktop-1440x900.png` |
| 1180×820 | 17.7, 146.0, 208.8, 656 | 18.0 px | `tablet-landscape-1180x820.png` |
| 844×390 | 100.0, 78.0, 92.9, 292 | 20 px | `mobile-landscape-844x390.png` |
| 390×844 portrait | Gameplay is intentionally hidden | n/a | `mobile-portrait-390x844.png` |

The named placement variables are `--teacher-scene-left`, `--teacher-scene-bottom` and `--teacher-scene-height`. At 844×390 they resolve to `calc(50% - 322px)`, `20px` and `292px`. The measured whiteboard frame ends at y=329; the dedicated 44px navigation row begins at y=337, leaving an 8px clear gap and ending at y=381. The character, whiteboard and classroom plate retain one proportional scene composition, while the navigation remains a separate accessible HTML region. No horizontal or vertical overflow is introduced.

At 390×844 the reusable gameplay shell shows the accessible HTML dialog “Turn your device sideways to continue.” The mounted gameplay subtree becomes inert and `aria-hidden`, so it is neither operable nor exposed behind the prompt. Returning to landscape removes the prompt automatically. E2E verification rotates after entering Class Challenge values and confirms the current phase and both field values survive the round trip without a reload.
