# Teacher Lesson composition review

Verified 4 August 2026 against the real Welcome → StoryPath → Arouca Groove → Corner Shop Challenge flow.

The untouched 1672×941 `school-instruction-template.png` remains the classroom and whiteboard environment. The untouched 422×1326 `ms-leela-maharaj-transparent.png` remains a separate full-body layer. Accessible lesson content, Replay/Continue controls and the HUD remain independent DOM layers.

| Viewport | Rendered Ms. Leela bounds (x, y, w, h) | Ground offset | Review image |
|---|---:|---:|---|
| 1440×900 | 21.6, 160.2, 229.1, 720 | 19.8 px | `desktop-1440x900.png` |
| 820×1180 | 12.3, 540.5, 195.3, 613.6 | 26.0 px | `tablet-820x1180.png` |
| 390×844 | 9.8, 447.3, 104.8, 329.2 | 67.5 px | `mobile-390x844.png` |

The named placement variables are `--teacher-scene-left`, `--teacher-scene-bottom` and `--teacher-scene-height`. They preserve the character asset aspect ratio and respond to the classroom cover crop. At every verified viewport, the figure is fully inside the scene, the feet meet the visible floor, the lesson copy does not intersect the character bounds and no horizontal or vertical overflow is introduced.
