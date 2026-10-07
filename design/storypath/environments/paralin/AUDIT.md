# Paralin environmental asset audit

Audited 7 October 2026. **15 APPROVED WITH NOTES for complete decorative assemblies; 0 unconditional approvals; 0 rejected files.** Approval does not establish a final art direction or approve these as clean modular building bases.

## Technical verification

- All 15: valid PNG signatures and chunk CRCs, successful full decode, 1536 x 1024 RGBA, genuine transparency. No baked checkerboard observed in alpha-aware white/dark composites.
- The coloured background visible in the original previews is hidden RGB content, not an opaque background. Use an alpha-aware renderer; do not discard alpha.
- Every file has alpha 0–254, with no alpha-255 pixels. Surfaces are almost opaque (254/255), not exactly opaque. Preserved without correction.
- Faint nonzero-alpha pixels reach canvas edges in 13 files. Only raised-02 and raised-03 have a wholly clear outer border. This is not proof of major object clipping; avoid automatic alpha-bounds trimming. Hillside foliage and shop awnings have particularly little room.
- Source PNG bytes were copied unchanged and SHA-256 verified. The only rename removes the duplicate final `.png` extension; originals remain untouched.

## Visual findings and permitted use

- Consistent front/left three-quarter facade view, saturated warm colours, corrugated roofs, louvres, galleries, gutters and water tanks. These are plausible Caribbean architectural cues, not proof of local cultural validation.
- This is a polished, dimensional illustrated/rendered style. Similar views work within families, but camera height and scale are not calibrated across families. No current master environment exists to certify a camera or style match.
- Warm highlights and lit lamps are broadly consistent; coloured variants are often more saturated than their base. Shadows and lighting are baked and cannot independently follow a scene day/night cycle.
- Whole-building silhouettes remain legible in 384px-wide review renders. Fine stock, louvres, flowers and railing detail compress heavily. Final gameplay-scale readability remains conditional on a defined camera and target size.
- Plants, pots, furniture, tanks, terrain and shop contents are inseparable. Suitable as complete decorative assemblies; **needs revision if clean building-only modular assets are required**. Shop goods must not substitute for dynamic curriculum manipulatives.
- No obvious missing major structural section was seen; tight roof/side margins and faint edge residue need care when packing textures. No asset was edited, regenerated, cropped, rescaled or recompressed for import.

## Per-file manifest

All rows have dimensions 1536 x 1024, actual RGBA transparency and status **APPROVED WITH NOTES**. Intended use: complete decorative environment assembly for prototyping.

| Imported file (exact path) | Category / subtype | Variant / observed colour | Fully transparent pixels | Notes |
|---|---|---|---:|---|
| `design/storypath/environments/paralin/architecture/residential/hillside/paralin-house-hillside-01-base.png` | residential / hillside | base / yellow | 24.27% | House, stepped terrain, retaining walls, stairs, tank and dense planting form one inseparable assembly. Requires a matching slope; not a free-standing house base. Side vegetation is very tightly framed. |
| `design/storypath/environments/paralin/architecture/residential/hillside/paralin-house-hillside-01-pink.png` | residential / hillside | pink / pink | 23.71% | House, stepped terrain, retaining walls, stairs, tank and dense planting form one inseparable assembly. Requires a matching slope; not a free-standing house base. Side vegetation is very tightly framed. |
| `design/storypath/environments/paralin/architecture/residential/hillside/paralin-house-hillside-02-blue.png` | residential / hillside | blue / blue | 24.01% | House, stepped terrain, retaining walls, stairs, tank and dense planting form one inseparable assembly. Requires a matching slope; not a free-standing house base. Side vegetation is very tightly framed. |
| `design/storypath/environments/paralin/architecture/residential/raised/paralin-house-raised-01-base.png` | residential / raised | base / green | 36.25% | House includes tank/stand, porch furniture, plants, stairs and supports. Open undercroft largely cuts out correctly. Place as a complete assembly; no separate occlusion or movable props. |
| `design/storypath/environments/paralin/architecture/residential/raised/paralin-house-raised-02-base.png` | residential / raised | base / purple | 37.84% | House includes tank/stand, porch furniture, plants, stairs and supports. Open undercroft largely cuts out correctly. Place as a complete assembly; no separate occlusion or movable props. |
| `design/storypath/environments/paralin/architecture/residential/raised/paralin-house-raised-03-base.png` | residential / raised | base / pink | 38.43% | House includes tank/stand, porch furniture, plants, stairs and supports. Open undercroft largely cuts out correctly. Place as a complete assembly; no separate occlusion or movable props. |
| `design/storypath/environments/paralin/architecture/residential/small-single-storey/paralin-house-small-01-base.png` | residential / small-single-storey | base / yellow | 38.83% | House includes tank, foundation, porch furniture, pots and dense perimeter planting. Readable silhouette; repeated planting limits modular variety. |
| `design/storypath/environments/paralin/architecture/residential/small-single-storey/paralin-house-small-02-base.png` | residential / small-single-storey | base / blue | 36.98% | House includes tank, foundation, porch furniture, pots and dense perimeter planting. Readable silhouette; repeated planting limits modular variety. |
| `design/storypath/environments/paralin/architecture/residential/small-single-storey/paralin-house-small-03-base.png` | residential / small-single-storey | base / coral | 36.15% | House includes tank, foundation, porch furniture, pots and dense perimeter planting. Readable silhouette; repeated planting limits modular variety. |
| `design/storypath/environments/paralin/architecture/residential/two-storey/paralin-house-two-storey-01-base.png` | residential / two-storey | base / yellow | 26.23% | House includes both galleries, plants, steps and lamps. Roof has little top padding. Near-eye-level facade perspective needs matching scene camera; not an aerial map sprite. |
| `design/storypath/environments/paralin/architecture/residential/two-storey/paralin-house-two-storey-02-pink.png` | residential / two-storey | pink / pink | 26.08% | House includes both galleries, plants, steps and lamps. Roof has little top padding. Near-eye-level facade perspective needs matching scene camera; not an aerial map sprite. |
| `design/storypath/environments/paralin/architecture/residential/two-storey/paralin-house-two-storey-03-blue.png` | residential / two-storey | blue / blue | 25.86% | House includes both galleries, plants, steps and lamps. Roof has little top padding. Near-eye-level facade perspective needs matching scene camera; not an aerial map sprite. |
| `design/storypath/environments/paralin/architecture/commercial/corner-shop/paralin-shop-corner-01-base.png` | commercial / corner-shop | base / yellow/teal | 28.86% | Shop includes pavement/curb, plants, counter, stocked shelves, refrigerator and lit lamps. Stock cannot serve as dynamic countable learning objects. Blank sign supports a separate accessible label. Awning is close to the right edge. |
| `design/storypath/environments/paralin/architecture/commercial/corner-shop/paralin-shop-corner-02-green.png` | commercial / corner-shop | green / green | 27.90% | Shop includes pavement/curb, plants, counter, stocked shelves, refrigerator and lit lamps. Stock cannot serve as dynamic countable learning objects. Blank sign supports a separate accessible label. Awning is close to the right edge. |
| `design/storypath/environments/paralin/architecture/commercial/corner-shop/paralin-shop-corner-03-blue.png` | commercial / corner-shop | blue / blue | 27.50% | Shop includes pavement/curb, plants, counter, stocked shelves, refrigerator and lit lamps. Stock cannot serve as dynamic countable learning objects. Blank sign supports a separate accessible label. Awning is close to the right edge. |
| `design/storypath/environments/paralin/architecture/mixed-use/restaurant-residence/paralin-mixed-use-restaurant-residence-01-base.png` | mixed-use / restaurant-residence | base / sage-teal | 21.50% | Restaurant, upper residence, awnings, seating, menu board, planters, lighting and pavement are baked into one assembly. Menu and stocked interior are decorative only, not dynamic curriculum content. |
| `design/storypath/environments/paralin/architecture/mixed-use/restaurant-residence/paralin-mixed-use-restaurant-residence-02-coral.png` | mixed-use / restaurant-residence | coral / coral-teal | 21.32% | Restaurant, upper residence, awnings, seating, menu board, planters, lighting and pavement are baked into one assembly. Menu and stocked interior are decorative only, not dynamic curriculum content. |
| `design/storypath/environments/paralin/architecture/mixed-use/restaurant-residence/paralin-mixed-use-restaurant-residence-03-blue.png` | mixed-use / restaurant-residence | blue / blue-teal | 21.41% | Restaurant, upper residence, awnings, seating, menu board, planters, lighting and pavement are baked into one assembly. Menu and stocked interior are decorative only, not dynamic curriculum content. |

## Filename mapping

Each source filename is the imported filename plus one trailing `.png`; the JSON manifest records both exact names. Original numbering and `base` variant labels are preserved, including hillside-01-pink and hillside-02-blue. These are received names, not inferred asset IDs.

## Before constructing Paralin

Define the scene camera, building scale, ground anchors and target display sizes. Decide whether decorated assemblies are acceptable or whether building/vegetation/terrain/props need separate exports. Set texture padding policy, and revisit the 254 alpha ceiling only if it causes visible compositing problems. The 18 stops, Paralin, Aaliyah and Theo remain unchanged.

## Review and provenance

`asset-manifest.json` includes source names, paths, hashes, pixel counts and alpha bounds (inclusive coordinates). `review.html` is a local development review sheet outside the application and public directory. It displays original files at selectable sizes and backgrounds; it does not assemble a world.
