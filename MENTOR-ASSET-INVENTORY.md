# Bridgepath Approved Mentor Asset Inventory

> **Audited:** 4 August 2026
> **Scope:** Asset inventory and runtime preparation only; no scene placement or layout changes

Approval is established by repository history, not file presence alone. Commit `4f264b3` introduced the approved production model sheets. Commit `51cbd72` later introduced six founder-approved, single-character Scene Designer source exports. Only those six sources can currently support faithful runtime cut-outs.

## Complete cast inventory

| Character | Latest approved design reference | Latest approved single-character source | Source properties and background | Verified runtime PNG | Runtime dimensions; visible-pixel bbox | Body/detail review | Clothing or role variant | Latest approved design? | Runtime ready? | Conflicts, defects and required follow-up |
|---|---|---|---|---|---|---|---|---|---|---|
| Ms. Leela Maharaj | `design/characters/ms-leela-maharaj/ms-leela-maharaj-production-model-sheet-v2.png` | `design/approved/scene-designer/mentors/ms-leela-maharaj-source.png` | PNG, 1024×1536, RGB; opaque magenta chroma background | `public/assets/characters/mentors/ms-leela-maharaj-transparent.png` | 422×1326 RGBA; bbox `(23,23)–(399,1303)` | Full body; complete head, hair, hands, clothing and shoes | Teaching/professional | Yes; v2 supersedes v1 | Yes | v1 model sheet is outdated. No baked background, clipping, text, watermark, stray object or material edge halo found in runtime review. Not approved as a customer variant. |
| Mr. Kareem Joseph | `design/characters/mr-kareem-joseph/mr-kareem-joseph-production-model-sheet-v1.png` | `design/approved/scene-designer/mentors/mr-kareem-joseph-source.png` | PNG, 1024×1536, RGB; opaque green chroma background | `public/assets/characters/mentors/mr-kareem-joseph-transparent.png` | 488×1419 RGBA; bbox `(24,24)–(464,1395)` | Full body; complete head, hair, hands, clothing and shoes | Standard mathematics mentor | Yes | Yes | No competing approved revision. No baked background, clipping, text, watermark, stray object or material edge halo found. No casual/customer variant found. |
| Miss Maria | `design/characters/miss-maria/miss-maria-production-model-sheet-v1.png` | None | Model sheet only: PNG, 1536×1024, RGB; opaque beige composite with labels, poses and props | None; reserved canonical filename `miss-maria-transparent.png` | Not applicable | Model sheet contains complete full-body turnarounds, but no isolated approved character export | Food-preparation mentor with apron | Yes as design reference | No | A model sheet is not a runtime source. Requires a new clean single-character export; no cut-out was fabricated. No casual/customer variant found. |
| Mr. Ali | `design/characters/mr-ali/mr-ali-production-model-sheet-v1.png` | `design/approved/scene-designer/mentors/mr-ali-source.png` | PNG, 1024×1536, RGB; opaque magenta chroma background | `public/assets/characters/mentors/mr-ali-transparent.png` | 517×1395 RGBA; bbox `(24,24)–(493,1371)` | Full body; complete head, hair, hands, apron, clothing and shoes | Shopkeeper/work-apron | Yes | Yes | No competing approved revision. No baked background, clipping, text, watermark, stray object or material edge halo found. Scene use remains intentionally deferred. |
| Auntie Joy | `design/characters/auntie-joy/auntie-joy-production-model-sheet-v1.png` | `design/approved/scene-designer/mentors/auntie-joy-source.png` | PNG, 1024×1536, RGB; opaque magenta chroma background | `public/assets/characters/mentors/auntie-joy-transparent.png` | 450×1345 RGBA; bbox `(23,23)–(427,1322)` | Full body; complete head, textured hair, hands, clothing and shoes | Maker/practical | Yes | Yes | Fine semi-transparent hair-edge pixels are preserved. No baked background, clipping, text, watermark, stray object or material edge halo found. Not approved as a customer variant. |
| Coach Devon | `design/characters/coach-devon/coach-devon-production-model-sheet-v1.png` | `design/approved/scene-designer/mentors/coach-devon-source.png` | PNG, 1024×1536, RGB; opaque green chroma background | `public/assets/characters/mentors/coach-devon-transparent.png` | 477×1340 RGBA; bbox `(23,23)–(454,1317)` | Full body; complete head, hair, hands, clothing and shoes | Sports/coach | Yes | Yes | No competing approved revision. No baked background, clipping, text, watermark, stray object or material edge halo found. Not approved as a customer variant. |
| Mr. Thomas | `design/characters/mr-thomas/mr-thomas-production-model-sheet-v1.png` | None | Model sheet only: PNG, 1536×1024, RGB; opaque beige composite with labels, poses and props | None; reserved canonical filename `mr-thomas-transparent.png` | Not applicable | Model sheet contains complete full-body turnarounds, but no isolated approved character export | Workshop/carpentry mentor | Yes as design reference | No | Requires a new clean single-character Scene Designer export. No cut-out was fabricated. No casual/customer variant found. |
| Ms. Alana Pierre | `design/characters/ms-alana-pierre/ms-alana-pierre-production-model-sheet-v1.png` | `design/approved/scene-designer/mentors/ms-alana-pierre-source.png` | PNG, 1024×1536, RGB; opaque green chroma background | `public/assets/characters/mentors/ms-alana-pierre-transparent.png` | 440×1405 RGBA; bbox `(24,24)–(416,1381)` | Full body; complete head, hair, hands, ID badge, clothing and shoes | Librarian/professional | Yes | Yes | No competing approved revision. No baked background, clipping, text, watermark, stray object or material edge halo found. No casual/customer variant found. |
| Ms. Keisha Ramoutar | `design/characters/ms-keisha-ramoutar/ms-keisha-ramoutar-production-model-sheet-v1.png` | None | Model sheet only: PNG, 1536×1024, RGB; opaque beige composite with labels, poses and props | None; reserved canonical filename `ms-keisha-ramoutar-transparent.png` | Not applicable | Model sheet contains complete full-body turnarounds, but no isolated approved character export | Delivery/logistics mentor | Yes as design reference | No | Requires a new clean single-character Scene Designer export. No cut-out was fabricated. No casual/customer variant found. |

All six runtime files are PNG/RGBA, contain both fully transparent and partially transparent pixels, retain approximately 23–24 px of natural transparent padding, and have unique canonical filenames. The contact sheet was reviewed on a neutral two-tone checker field at a consistent character height. No white, grey or checker pattern is baked into the runtime pixels.

## Variants and conflicts

- No approved casual or Corner Shop customer-specific single-character exports were found for any mentor.
- The standard, teaching, maker, sports, librarian and shopkeeper files remain registered only for their documented mentor roles. They are not registered as Corner Shop customer assets.
- `ms-leela-maharaj-production-model-sheet-v1.png` is superseded by v2 and remains preserved as design history.
- The cast-sheet v1/v2 files are overview references, not competing runtime exports.
- Model sheets and Scene Designer sources are not duplicates: the former establish the approved design system; the latter are isolated source exports suitable for background removal.
- No uncertain file was deleted or archived.

## Explorer master references

- Niko: `design/characters/niko/niko-production-model-sheet.png` is the latest approved master reference. Approved wardrobe sheets and turnarounds remain separate variants.
- Zuri: `design/characters/zuri/zuri-production-model-sheet.png` is the latest approved master reference. Commit `553c535` adds later approved wardrobe turnarounds without replacing the model-sheet master.
- No Niko or Zuri artwork was modified by this audit.

## Visual proof

- Contact sheet: `design/review/mentor-runtime-contact-sheet.png`
- Individual runtime previews are the six canonical files listed in the inventory table.
