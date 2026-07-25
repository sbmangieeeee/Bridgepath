# Bridgepath Production Asset Manifest

> **Last updated:** 24 July 2026
> **Status:** Production runtime inventory for draft PR #1

Clean environments are backgrounds only. Characters, dialogue, questions, answers, products, prices, feedback, progress and controls remain separate accessible layers.

## Production runtime sequence

1. `public/assets/screens/bridgepath-welcome-direction.png`
2. `public/assets/maps/karina-country-map.png` — internal canonical geography asset; the current user-facing label is StoryPath.
3. `public/assets/maps/arouca-grove-journey-map.png`
4. `public/assets/screens/school-instruction-template.png`
5. `public/assets/screens/guided-exercise-template.png`
6. `public/assets/environments/classroom-environment.png`
7. `public/assets/environments/market-env-structure.png`
8. `public/assets/foregrounds/market-counter.png`
9. `public/assets/foregrounds/market-counter-child-view.png`
10. `public/assets/environments/market-cashier-view.png`
11. `public/niko-zuri-v2.png`

Production selects these through `lib/production/assets.ts`.

## Approved runtime inventory

| Asset | Dimensions | Alpha | Production role |
|---|---:|---|---|
| `bridgepath-welcome-direction.png` | 1536×1024 | No | Welcome |
| `karina-country-map.png` | 1536×1024 | No | StoryPath country navigation |
| `arouca-grove-journey-map.png` | 2752×1536 | No | Arouca Groove 18-stop map |
| `school-instruction-template.png` | 1536×1024 | No | Teacher Lesson |
| `guided-exercise-template.png` | 1536×1024 | No | Class Challenge |
| `classroom-environment.png` | 1536×1024 | No | Mission choice |
| `market-env-structure.png` | 1672×941 | No | Corner Shop introduction background |
| `market-counter.png` | 1672×941 | Genuine RGBA | Introduction counter/register foreground |
| `market-counter-child-view.png` | 1672×941 | Genuine RGBA | Child handoff and serving counter foreground |
| `market-cashier-view.png` | 1672×941 | No | Serving-customer background |
| `niko-zuri-v2.png` | 2048×1536 | Genuine RGBA | Niko and Zuri pair |
| `ms-leela-maharaj-teacher-standing-transparent.png` | 465×1344 | Genuine RGBA | Tightly bounded, ground-anchored Teacher Lesson character layer beside the whiteboard |

The untouched Scene Designer market exports are preserved under `design/approved/scene-designer/market/`. The runtime counter copies remove only the supplied green matte to alpha; their approved RGB artwork is otherwise unchanged. The previous market background is retained at `design/archive/superseded-market/market-environment-2026-07-20.png`.

Other approved reusable backgrounds remain in `public/assets/environments/`: bakery, Mas workshop, community centre and recreation grounds. They are not selected by the current production route.

## Exact missing Corner Shop assets

- `mr-ali-transparent.png`: minimum 1200 px tall, genuine RGBA transparency; behind the left side of `market-counter.png`, visible approximately waist-up.
- `miss-maria-transparent.png`
- `auntie-joy-transparent.png`
- `coach-devon-transparent.png`
- `mr-thomas-transparent.png`
- `ms-leela-maharaj-transparent.png`

Each customer layer must be minimum 1200 px tall with genuine RGBA transparency and render one at a time opposite the counter, full figure grounded on the cashier-view floor. The approved production model sheets establish character appearance but are opaque reference sheets, not runtime cut-outs.
- Separate transparent grocery/product layers for every approved customer task. Filenames, products and dimensions require founder-approved task content and therefore are not invented here.

The existing mentor model sheets are opaque and are not approved runtime cut-outs. No approved mentor-customer layers or task-product layers are present.

The Teacher Lesson uses `public/assets/characters/ms-leela-maharaj-teacher-standing-transparent.png`, isolated from the approved front-facing pose in `design/characters/ms-leela-maharaj/ms-leela-maharaj-production-model-sheet-v2.png`. It remains separate from the classroom background and all lesson content.

## Production rules

- Do not crop, recolour, regenerate or add painted content to approved artwork.
- Do not bake dynamic content into raster backgrounds or foreground furniture.
- Essential text, prices, questions, answers and controls must be accessible DOM elements.
- Character and product layers require genuine transparency.
- Preserve aspect ratios; do not stretch or crop the Scene Designer compositions.
