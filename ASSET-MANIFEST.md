# Bridgepath Production Asset Manifest

> **Last updated:** 4 August 2026
> **Status:** Production runtime inventory for draft PR #1

The founder-rejected path-and-star mark is not a production asset. Its only retained copy is archived at `design/archive/rejected-branding/bridgepath-mark.svg`; no replacement logo is approved.

Clean environments are backgrounds only. Characters, dialogue, questions, answers, products, prices, feedback, progress and controls remain separate accessible layers.

## Production runtime sequence

1. `public/assets/screens/bridgepath-welcome-direction.png`
2. `public/assets/maps/karina-country-map.png` — approved legacy asset filename for the canonical StoryPath country map; it does not make Karina a current product name.
3. `public/assets/maps/arouca-grove-journey-map.png`
4. `public/assets/screens/school-instruction-template.png`
5. `public/assets/screens/guided-exercise-template.png`
6. `public/assets/environments/classroom-environment.png`
7. `public/assets/environments/market-env-structure.png`
8. `public/assets/foregrounds/market-counter.png`
9. `public/assets/foregrounds/market-counter-child-view.png`
10. `public/assets/environments/market-cashier-view.png`
11. `public/niko-zuri-v2.png`
12. `public/assets/foregrounds/corner-shop-register-cashier-view.png`
13. `public/assets/characters/mentors/*.png`
14. `public/assets/products/rice.png`
15. `public/assets/products/flour.png`

Production selects these through `lib/production/assets.ts`.

The complete nine-mentor approval, transparency, bounding-box, variant and edge audit is recorded in `MENTOR-ASSET-INVENTORY.md`. The review contact sheet is `design/review/mentor-runtime-contact-sheet.png`.

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
| `characters/mentors/ms-leela-maharaj-transparent.png` | 422×1326 | Genuine RGBA | Teaching/professional mentor; Teacher Lesson runtime layer |
| `characters/mentors/mr-kareem-joseph-transparent.png` | 488×1419 | Genuine RGBA | Standard mathematics mentor runtime layer |
| `characters/mentors/mr-ali-transparent.png` | 517×1395 | Genuine RGBA | Shopkeeper mentor runtime layer; scene use deferred |
| `characters/mentors/auntie-joy-transparent.png` | 450×1345 | Genuine RGBA | Maker/practical mentor runtime layer; not an approved customer variant |
| `characters/mentors/coach-devon-transparent.png` | 477×1340 | Genuine RGBA | Sports mentor runtime layer; not an approved customer variant |
| `characters/mentors/ms-alana-pierre-transparent.png` | 440×1405 | Genuine RGBA | Librarian/professional mentor runtime layer |
| `foregrounds/corner-shop-register-cashier-view.png` | 889×789 | Genuine RGBA | Tightly bounded cashier-view register |
| `products/rice.png` | 554×834 | Genuine RGBA | Separate interactive checkout product |
| `products/flour.png` | 564×860 | Genuine RGBA | Separate interactive checkout product |

The untouched Scene Designer market exports are preserved under `design/approved/scene-designer/market/`. The runtime counter copies remove only the supplied green matte to alpha; their approved RGB artwork is otherwise unchanged. The previous market background is retained at `design/archive/superseded-market/market-environment-2026-07-20.png`.

## Shared market compositions

All three current Corner Shop compositions use one cover-scaled **1672×941** coordinate system (`MARKET_ARTBOARD_WIDTH`, `MARKET_ARTBOARD_HEIGHT`) and a shared ground line at **y=875**. Every background, character slot, counter and activity-object slot occupies the same artboard bounds; accessible dialogue and controls remain a separate DOM overlay.

| Composition | Background | Counter foreground | Measured grounding adjustment |
|---|---|---|---:|
| Introduction | `market-env-structure.png` | `market-counter.png` | +57 px y (`6.0574%` of artboard height) |
| Child handoff | `market-env-structure.png` | `market-counter-child-view.png` | +40 px y (`4.2508%`) |
| Cashier view | `market-cashier-view.png` | `corner-shop-register-cashier-view.png` | Reconstruct source y=86 px, then +15 px ground offset (`1.5941%`) |

The two chroma-derived front-counter exports retain a reported thin green fringe along the keyed edge. It remains unchanged pending visual approval; no unapproved repainting or edge cleanup is authorized.

The current composition-preview intentionally renders **no Mr. Ali, customers, products or other activity objects**. The empty character and activity-object layers remain in the shared scene structure. Ms. Leela is rendered only in the preceding Teacher Lesson, outside these three market compositions. Approved runtime files remain inventoried below but are not evidence that those layers are active.

Other approved reusable backgrounds remain in `public/assets/environments/`: bakery, Mas workshop, community centre and recreation grounds. They are not selected by the current production route.

## Exact missing mentor assets

- `miss-maria-transparent.png` — requires an approved isolated Scene Designer export
- `mr-thomas-transparent.png` — requires an approved isolated Scene Designer export
- `ms-keisha-ramoutar-transparent.png` — requires an approved isolated Scene Designer export

Each customer layer must be minimum 1200 px tall with genuine RGBA transparency and render one at a time opposite the counter, full figure grounded on the cashier-view floor. The approved production model sheets establish character appearance but are opaque reference sheets, not runtime cut-outs.
- Separate transparent grocery/product layers for every approved customer task. Filenames, products and dimensions require founder-approved task content and therefore are not invented here.

Miss Maria, Mr. Thomas and Ms. Keisha Ramoutar still lack approved isolated Scene Designer source exports. They must not be invented or cut from model sheets. No mentor currently has an approved casual or Corner Shop customer-specific runtime export; role variants must not be substituted for those missing assets.

The runtime mentor and product derivatives remove only the flat chroma-key backgrounds from the approved sources listed in `design/approved/scene-designer/ASSET-NOTES.md`. Their visible artwork is unchanged. The cashier-view register source already has genuine alpha; its runtime copy trims only invisible padding.

## Production rules

- Do not crop, recolour, regenerate or add painted content to approved artwork.
- Do not bake dynamic content into raster backgrounds or foreground furniture.
- Essential text, prices, questions, answers and controls must be accessible DOM elements.
- Character and product layers require genuine transparency.
- Preserve aspect ratios; do not stretch or crop the Scene Designer compositions.
