# Teacher Lesson composition review

Verified 4 August 2026 against the real Welcome → StoryPath → Arouca Groove → Corner Shop Challenge flow.

The untouched 1672×941 `school-instruction-template.png` remains the classroom and whiteboard environment. The untouched 422×1326 `ms-leela-maharaj-transparent.png` remains a separate full-body layer. Accessible lesson content, Replay/Continue controls and the HUD remain independent DOM layers.

| Viewport | Rendered Ms. Leela bounds (x, y, w, h) | Ground offset | Review image |
|---|---:|---:|---|
| 1440×900 | 21.6, 160.2, 229.1, 720 | 19.8 px | `desktop-1440x900.png` |
| 1180×820 | 17.7, 146.0, 208.8, 656 | 18.0 px | `tablet-landscape-1180x820.png` |
| 844×390 | 12.7, 69.4, 99.3, 312 | 8.6 px | `mobile-landscape-844x390.png` |
| 390×844 portrait | Gameplay is intentionally hidden | n/a | `mobile-portrait-390x844.png` |

The named placement variables are `--teacher-scene-left`, `--teacher-scene-bottom` and `--teacher-scene-height`. At 844×390 they resolve from `max(.5rem, 1.5vw)`, `2.2dvh` and `min(80dvh, 312px)`. They preserve the character asset aspect ratio and respond to the classroom cover crop. At every landscape viewport, the figure is fully inside the scene, the feet meet the visible floor, the lesson copy does not intersect the character bounds and no horizontal or vertical overflow is introduced.

At 390×844 the reusable gameplay shell shows the accessible HTML dialog “Turn your device sideways to continue.” The mounted gameplay subtree becomes inert and `aria-hidden`, so it is neither operable nor exposed behind the prompt. Returning to landscape removes the prompt automatically. E2E verification rotates after entering Class Challenge values and confirms the current phase and both field values survive the round trip without a reload.
