# Paralin Environment Production Workflow

> **Status:** Working process guidance, 7 October 2026  
> **Scope:** Reusable 2D environmental vocabulary for Paralin  
> **Inspiration:** [Create a Monkey Island Game with AI — Art, Puzzles & Voice Acting](https://www.youtube.com/watch?v=3sg2aHYAruw&t=8s)

This document records a production method inspired by the linked process. It does not copy that video's art, story, interface, or content. Storypath remains its own Caribbean educational adventure with Paralin, Aaliyah, Theo, and the protected 18-stop Standard 3 Mathematics architecture.

## Core idea

Build Paralin from a reusable visual vocabulary rather than eighteen unrelated scenes. Houses, shops, mixed-use buildings, roofs, windows, galleries, roads, drains, vegetation, utility poles, market stalls, maxis, signs, furniture, crates, food, school objects, and other props become authored pieces. Scenes are compositions of those pieces, with learning content and interaction layered separately.

The current building PNGs are complete decorative assemblies. They are useful vocabulary references and environment prototypes, but they are not automatically clean modular bases. Their baked plants, furniture, pavement, lighting, terrain, menus, and shop stock must remain documented until a later production pass separates anything that needs independent interaction or animation.

## Production sequence

1. **Choose the playable visual grammar.** Establish camera angle, scale, lighting, silhouette language, material treatment, walkable-space assumptions, and a small representative set of Paralin locations. Generate or collect candidates, compare them at gameplay scale, and select a direction before expanding the library.

2. **Annotate the environment.** For each proposed scene, record walkable areas, interaction surfaces, landmarks, entrances, occlusion boundaries, dynamic props, resident positions, and accessible labels. A beautiful image is not yet a usable game scene.

3. **Separate the layers.** Keep the base environment free of characters, transient UI, essential instructions, inventory items, and state-specific props. Store actors and interactive props as separate layers whenever they can change, animate, be collected, or carry mathematical meaning.

4. **Build variants from a canonical reference.** A colour variant, open/closed state, repaired/damaged state, or seasonal state should preserve the same camera, proportions, anchor points, lighting logic, and silhouette. Record the relationship between base and variant in the manifest.

5. **Create a small vocabulary before a full scene.** Validate one residential group, one commercial group, one mixed-use group, one street segment, and a few vegetation/prop families together. Check spacing, scale, shadows, overlaps, and readability before mapping them across Paralin.

6. **Use a scene specification.** Describe each composition in data: asset IDs, positions, scale, layer order, walkable polygons, interaction spots, hotspot IDs, state flags, and the learning purpose. Keep scene content out of hard-coded component logic where practical.

7. **Make interaction state explicit.** A prop may be present, hidden, collected, open, repaired, occupied, or transformed. State transitions should be testable and saveable. Dynamic mathematics objects must never be confused with baked decorative stock or signage.

8. **Build review tools early.** Maintain an asset gallery, alpha/background checker, scale checker, scene composition preview, hotspot overlay, walkable-area view, and anchor/origin guide. These are development tools, not public Storypath screens.

9. **Animate only after anchors are stable.** For characters and moving props, define a canonical pose/origin first. Prefer a short controlled image-to-video or frame workflow when it preserves consistency better than independently generated frames. Check foot/contact points, frame bounds, looping, and reduced-motion behaviour.

10. **Integrate one vertical experience.** Choose one approved learning context, compose it from the vocabulary, connect its teaching, practice, application, feedback, and evidence, then test the whole flow. Do not expand to all 18 stops until the reusable system works.

## Paralin-specific guardrails

- The visual language should feel lived-in and recognisably Trinidadian/Caribbean without becoming tourism imagery or a generic tropical setting.
- The environment supports the protected mathematics; it does not rename, merge, remove, or reinterpret the 18 stops.
- The world should communicate place and activity, while essential text, controls, labels, and curriculum feedback remain accessible dynamic layers.
- Baked food, shelves, signs, prices, menus, plants, or tools are decorative unless explicitly promoted to a separately authored interactive asset.
- Aaliyah and Theo remain new characters. Do not use old Niko/Zuri artwork, silhouettes, palettes, or animation decisions as defaults.
- Preserve source files and provenance. Do not silently crop, flatten, upscale, recolour, or regenerate an approved candidate.
- Every asset receives an audit status: `APPROVED`, `APPROVED WITH NOTES`, `NEEDS REVISION`, `REFERENCE ONLY`, or `REJECT`.

## Definition of ready

An environment asset is ready for composition when its PNG integrity, alpha behaviour, dimensions, visual consistency, intended layer, anchor/padding behaviour, gameplay-scale readability, cultural review status, and provenance are recorded. A scene is ready for implementation when its assets, layer order, walkable area, hotspots, interaction spots, dynamic states, accessibility labels, and curriculum role are specified.

## What we are carrying forward

The inspiration process is most useful as a discipline of decomposition: concept → annotation → separated assets → reusable states → scene data → editor/review → vertical experience → polish. Storypath applies that discipline to a world where learning changes the community and where the learner makes the consequential choice.
