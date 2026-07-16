# Bridgepath Design System

## Status

Approved visual direction as of 15 July 2026. This document replaces the earlier “Caribbean Pathfinder” direction, editorial brand-guide styling, Fraunces/Source Sans typography, flat map mockups, and destination assets placed over a separate background.

The three current direction images are:

- `design/approved/bridgepath-welcome-direction.png`
- `design/approved/storypath-country-direction.png`
- `design/approved/market-village-direction.png`

They establish composition, atmosphere, material language, illustration quality, and navigation hierarchy. They are concept references rather than final production artwork. Final assets require local cultural review, responsive composition planning, accessibility overlays, and clean separation of essential text from raster artwork.

### Core companion character source of truth

Niko and Zuri are governed by:

- `BRIDGEPATH-CORE-COMPANION-CHARACTER-GUIDE.md`;
- `NIKO-CHARACTER-BIBLE.md`; and
- `ZURI-CHARACTER-BIBLE.md`.

The welcome-direction image remains a composition and mood reference, not a model sheet. The character bibles control identity, proportions, silhouettes, wardrobe, expressions, behaviour, dialogue boundaries, accessibility, illustration, and animation until deliberately revised and approved.

## Product Context

- **What this is:** A Caribbean educational adventure that helps children in Standards 3–5 understand and complete the Mathematics and English curriculum while giving parents clear evidence of progress.
- **Primary child structure:** One fictional Caribbean country containing exactly six towns: Mathematics and English for Standards 3, 4, and 5.
- **First curriculum area:** Standard 3 Mathematics. Its final town name and identity remain open pending Curriculum Discovery approval.
- **First vertical slice:** Not yet selected. Market Day remains a brainstorming example, not an approved content boundary.
- **Primary users:** Children and parents. School progress views may follow, but do not shape the family-first alpha experience.
- **Memorable promise:** “This feels like a real Caribbean adventure world I want to enter—not a school app dressed up as a game.”

## Design Vision — The Living Adventure World

Bridgepath is a premium, hand-painted Caribbean story-adventure whose learning structure is embedded in the world. The child should feel that they are entering places, following roads, helping residents, and changing the community through what they learn.

The distinctive idea is:

> Learning changes the world.

Bridgepath may borrow spatial hierarchy from classic adventure launch screens and progression clarity from modern learning paths, but its identity comes from one coherent Caribbean world, recurring characters, environmental storytelling, and curriculum missions with visible community consequences.

The experience must never feel like curriculum folders disguised as towns, a dashboard covered by a game skin, or disconnected icons floating above scenery.

## Core Design Principles

### 1. The world is the navigation

Buildings, paths, bridges, gardens, signs, stalls, and community spaces act as destinations. Interactive overlays provide semantics and accessibility, but the visible object belongs to the painted environment.

Avoid floating cards, generic circular app icons, detached destination cut-outs, and navigation bars competing with the world.

### 2. Every screen is another camera level in the same place

The child moves through a consistent zoom hierarchy:

1. **Welcome crossroads:** Niko and Zuri at the centre of the village, with launch destinations at the ends of branching paths.
2. **Storypath Country:** A high aerial view showing all six towns in one frame.
3. **Town curriculum map:** A closer aerial view where roads and stepping stones connect topic chapters and missions.
4. **Mission location:** A close environmental scene such as the market, bakery, garden, or workshop.
5. **Learning activity:** A focused interaction stage that retains environmental context without visual distraction.

Lighting, architecture, vegetation, materials, marker design, and colour must remain recognisable at every zoom level.

### 3. Adventure first, curriculum legible underneath

Children see places, residents, missions, and progress along a path. Parents see the formal curriculum edition, strand, concept, objective, evidence, support level, and next action.

Child labels use language such as “Market Village,” “Help prepare the orders,” and “Final mission.” Formal curriculum terminology belongs in parent views and optional adult detail.

### 4. Clarity is designed into the scenery

Composition, landmark silhouettes, open ground, paths, lighting, and contrast create hierarchy before interface decoration is added. A child should understand where to go next without scanning a dashboard.

### 5. Caribbean identity is lived in

Show ordinary community life: covered galleries, market stalls, family homes, schoolyards, libraries, workshops, recreation grounds, drains, gardens, hills, village roads, humid light, and rainy-season detail.

Use mango, poui, coconut, immortelle, flamboyant, and kitchen-garden planting. Avoid resort imagery, pirate fantasy, generic jungle worlds, flag-colour branding, and steelpan as the only cultural shorthand.

### 6. Progress improves the environment

Rewards should restore, decorate, open, or animate the world: a repaired bridge, completed stall, planted garden, lit pavilion, community noticeboard, or event preparation. Avoid excessive currencies, chests, confetti, collectible clutter, gambling-like reveals, hearts, energy, and public rankings.

### 7. Warm for children, credible for adults

Child screens are expressive, tactile, and world-first. Parent screens are calm, structured, evidence-first, and visually related through colour and materials rather than game decoration.

## Approved Illustration Direction

- **Medium:** Premium hand-painted 2D storybook illustration.
- **Perspective:** Cinematic eye-level composition for the welcome hub; high three-quarter aerial perspective for country and town maps; closer environmental stages for missions.
- **Detail:** Rich enough to reward looking, with strong silhouettes and deliberate calm zones around interactive targets.
- **Lighting:** Warm late-afternoon Caribbean light with natural shadows and atmospheric depth.
- **Texture:** Painted wood, weathered brass, enamel, stone, paper, fabric, foliage, water, and sun-warmed plaster.
- **Characters:** Expressive, age-appropriate, and recognisable without preschool exaggeration. Niko and Zuri anchor the welcome hub and selected story moments, but do not appear on the town curriculum map by default.
- **Residents:** Recurring community characters make each chapter feel situated. Avoid using Niko and Zuri as decoration on every screen.
- **Continuity:** Buildings visible on the country map should plausibly appear again when the learner enters the corresponding town.

### Production rules

- Plan interactive art in layers: background, midground, foreground, environmental animation, and semantic hotspot layer.
- Do not bake essential instructions, progress states, or controls into raster art.
- Recreate approved plaques, titles, and markers as SVG/HTML where possible so text remains sharp, localisable, and accessible.
- Maintain an art bible for architecture, vegetation, materials, lighting, perspective, character scale, and landmark silhouettes.
- Generated concept images guide direction only and must not be treated as final culturally reviewed production assets.

## Colour Philosophy

The palette comes from the approved painted world: sea and river, sunlight, vegetation, flowers, earth, and weathered village materials. It is expressive in the child world and restrained in parent reporting.

| Token | Hex | Primary use |
|---|---:|---|
| Lagoon Teal | `#087D78` | Brand anchor, active enamel, links, focused progress |
| Mango Gold | `#F6B83C` | Current mission, primary action, warm discovery light |
| Rainforest Green | `#2E7A4F` | Completed progress, growth, positive evidence |
| Hibiscus Red | `#C63B2B` | Warm emphasis and support alerts; never failure alone |
| Raincloud Blue | `#466A8A` | Information, water-linked accents, calm secondary controls |
| Sunwash Cream | `#FFF4D8` | Light surfaces, marker outlines, instruction backgrounds |
| Cocoa Ink | `#2C211C` | Primary text, outlines, dark wood, strong contrast |
| Mist Stone | `#D9DED4` | Unavailable states, quiet dividers, subdued parent surfaces |
| Weathered Brass | `#A97835` | Marker rims, plaques, checkpoint detail |
| Paper White | `#FFFAF0` | Focused lesson and parent content surfaces |

### Contrast and state rules

- Cocoa Ink on Sunwash Cream is the default reading combination.
- Sunwash Cream may be used on Lagoon Teal, Rainforest Green, Raincloud Blue, and Hibiscus Red for short labels after contrast verification.
- Mango Gold carries Cocoa Ink, not white, for text.
- State is never communicated through colour alone. Pair colour with shape, icon, label, pattern, or position.
- Closed towns are muted with Mist Stone and Weathered Brass, but remain visible and inviting rather than dark or ominous.

## Typography

### Brand wordmark

“Bridgepath Adventures” uses a custom illustrated wordmark inspired by hand-painted village signage. It should feel dimensional and adventurous without copying the lettering of any reference product. Produce it as an original vector lockup rather than relying on generated text inside background art.

### Interface type

- **Story, map, and chapter titles:** Bree Serif, 400. Friendly, sturdy, and readable on wooden plaques without feeling editorial or preschool-like.
- **Body, controls, instructions, numerals, and reporting:** Atkinson Hyperlegible Next, 400–800. Its distinct character forms support children, parents, text enlargement, and number-heavy Mathematics activities.
- **Data and money:** Atkinson Hyperlegible Next with tabular numerals where alignment matters.
- **Fallbacks:** Bree Serif → Georgia → serif; Atkinson Hyperlegible Next → Segoe UI → sans-serif.

### Type scale

- Illustrated wordmark: responsive artwork, not ordinary heading text.
- World title: `clamp(2.25rem, 5vw, 4.5rem)` / 1.0.
- Chapter title: `clamp(1.75rem, 3.5vw, 3rem)` / 1.05.
- Section heading: `1.5rem` / 1.2.
- Child instruction: minimum `1.125rem` / 1.5.
- Parent body: `1rem` / 1.55.
- Essential label: minimum `0.875rem` / 1.35; prefer `1rem` on child screens.

Use sentence case. Uppercase is reserved for short plaques and map stamps with generous tracking.

## Materials, Shape, and Depth

- **Base spacing unit:** 8 px.
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96.
- **Child target size:** At least 44 × 44 CSS pixels; aim for 56 × 56 or larger on maps and manipulatives.
- **Compact radius:** 6 px for adult inputs and small labels.
- **Panel radius:** 12–16 px for lesson and parent surfaces.
- **Story surface radius:** Irregular illustrated edge or 18–24 px when a DOM panel must feel tactile.
- **Map markers:** Circular medallions with a distinct rim, centre symbol, ground shadow, and non-colour state cue.
- **Depth:** Use warm directional shadows and material edges. Avoid universal bubbly cards and heavy black elevation.

## Iconography

- Use bold, simple pictograms that remain understandable at small map scale.
- Children should recognise objects before reading labels: basket, tiles, shop awning, crates, parcels, fruit fraction, measuring tape, coins, building blocks, chart, lantern.
- Icons use carved, enamelled, painted, stitched, or printed treatments appropriate to their surface.
- Use one consistent stroke weight and viewing angle within each icon family.
- Do not use emoji as production icons.
- Locks are reserved for genuinely unavailable content or adult-protected areas. They do not imply failure or required child progress for privacy access.

## Navigation and Core Components

### Environmental hotspot

The visible target is part of the illustration. A transparent semantic button aligns to it and provides keyboard focus, screen-reader text, touch interaction, and a contextual label.

- Resting state: no floating label unless needed for comprehension.
- Hover/focus: warm rim light, slightly brighter path, and a small wooden or paper label.
- Touch: first tap focuses and reveals the label; second tap or explicit action enters.
- Focus ring: high-contrast cream and gold outline independent of the illustration.
- Responsive implementation must reposition hotspots with art-directed coordinates, not one untested percentage set.

### Wooden plaque

Used for world, town, and chapter titles. Keep it slim so it identifies the place without becoming a floating dashboard header. Essential text is rendered as HTML/SVG over or within the plaque.

### Map marker

- **Completed:** Lagoon Teal or Rainforest Green centre plus a cream check.
- **Current:** Larger Mango Gold centre, active glow, and directional emphasis.
- **Upcoming:** Warm stone and weathered brass with its subject icon still visible.
- **Mission checkpoint:** Larger silhouette, landmark relationship, and distinct rim or banner.
- **Support branch:** Raincloud Blue with a helping-hand symbol; never presented as punishment.

### Stepping-stone trail

Use small cream stones physically embedded in roads and footpaths. The trail must visibly connect every sequential node and cross the environment plausibly. Avoid red dots, generic dashed lines, or paths that float above rivers and buildings.

### Child HUD

Keep it sparse:

- Back or home at upper left.
- Settings/help at upper right.
- Small progress indicator when useful.
- No persistent currency, hearts, energy, countdowns, public rank, or crowded resource bar.

### Lesson stage

The world becomes quieter when teaching begins. Use a focused cream learning surface, contextual environmental crop, one dominant instruction, large manipulatives, persistent help, and one primary action. Characters appear only when teaching or story context benefits from them.

### Parent evidence surface

Use clean Paper White panels, Cocoa Ink text, restrained Lagoon Teal, thin borders, and limited illustration. Parent views prioritise:

1. concepts covered;
2. current evidence state;
3. improvement areas;
4. what comes next;
5. optional ways to help at home;
6. expandable formal curriculum mapping.

Avoid game currencies, child-map clutter, unexplained percentages, and SEA score prediction.

## Screen-by-Screen Direction

### 1. Welcome crossroads

- Full-screen village illustration.
- “Bridgepath Adventures” centred at the top as an original illustrated wordmark.
- Niko and Zuri centred at the crossroads.
- Five destinations physically located at the ends of branching paths: Adventure, Customize Explorer, Mini-games, My Achievements, and Parent Area.
- No welcome plaque, login card, bottom menu, or floating destination cards.
- Parent Area remains reachable regardless of child progress.

### 2. Storypath Country

- Show exactly six towns in one frame.
- The first town is bright and available; five future towns remain visible but subdued.
- Do not expose Standard or subject names on the child map unless needed during onboarding or selection confirmation.
- Distinguish towns through geography and landmark silhouettes while preserving one coherent country.
- Country geography must remain stable across future artwork.

### 3. Provisional Standard 3 Mathematics town

- The approved image previously labelled Market Village is a visual composition reference for a Standard 3 Mathematics town map; it does not approve the setting, name, landmarks, or curriculum structure.
- Do not place Niko and Zuri on the map by default; let the map, landmarks, and route remain clear.
- Use a closer aerial view with a connected stepping-stone curriculum path.
- Do not hard-code the earlier twelve-chapter Market Village hypothesis. Follow the approved Curriculum Discovery structure once reviewed.
- Small markers represent lessons or practice. Larger landmarks represent chapter missions and checkpoints.
- The first vertical-slice landmark and context remain open pending curriculum and educator validation.
- The route should pass through real community contexts rather than isolated academic zones.
- Use `STANDARD-3-MATHEMATICS-TOWN-LEARNING-JOURNEY.md` as the locked educational sequence and `STANDARD-3-MATHEMATICS-TOWN-EXPERIENCE-DESIGN.md` as the proposed child-facing destination layer. The latter's names and settings are design hypotheses for review, not approved final geography, landmarks, cast, stories, or artwork.

### 4. Adventure chapter

- Introduce a concrete community need and resident.
- Use the stable sequence: encounter → introduction → demonstration → guided activity → mini-game → independent application → reflection.
- Story consequences change the environment; incorrect answers trigger teaching and support rather than loss of access.

### 5. Lesson and activity

- One dominant task per screen.
- Keep text visible even when future narration is added.
- Use large drag/select controls, immediate explanatory feedback, replayable demonstrations, and no strict timer.
- Use DOM, HTML, CSS, and SVG for core learning; never require canvas to understand or complete essential content.

### 6. Results and rewards

- Show what the learner demonstrated, not only a score.
- Connect evidence to a visible story resolution and environmental improvement.
- Use one meaningful keepsake or world change rather than multiple currencies and badges.

### 7. Parent dashboard

- Calm adult layout with child selector, curriculum coverage, readiness states, recent evidence, support needs, recommended next action, and optional home activity.
- Allow formal mapping to expand without forcing every parent through curriculum terminology.
- Use plain-language states: Introduced, Practising, Can use independently, and Needs support.

## Motion and Transitions

- **Approach:** Expressive in the world, intentional in lessons, restrained in parent reporting.
- Micro feedback: 80–120 ms.
- Labels and focus states: 150–220 ms.
- Map highlights and marker activation: 220–350 ms.
- Camera zoom or scene transition: 450–700 ms.
- Use ease-out for arrival, ease-in for departure, and ease-in-out for spatial movement.
- Preferred world motion: lantern glow, fabric lift, leaves moving, water shimmer, path illumination, doors opening, and community activity.
- Avoid constant bouncing, pulsing everywhere, parallax that harms readability, or motion used as the only status cue.
- Reduced motion replaces camera travel and path drawing with short fades or instant changes.

## Audio

- Recorded voice is out of the current scope.
- Core instructions and interactions work without audio.
- Future ambient sound and effects begin only after user interaction.
- Keep separate controls for future narration, music, and effects.
- Any future narration must retain visible text and replay controls.
- Caribbean sound should come from a varied acoustic environment, not constant steelpan shorthand.

## Accessibility

- Target WCAG 2.2 AA.
- Provide semantic buttons for every essential illustrated destination and node.
- Provide a keyboard- and switch-accessible list alternative to country and town maps.
- Preserve visible focus against both bright and dark artwork.
- Support 200% text enlargement without losing access to map destinations.
- Use 44 × 44 CSS-pixel minimum targets where feasible.
- Do not convey progress, completion, support, or availability through colour alone.
- Provide captions/transcripts for future audio and a reduced-motion mode.
- Never place essential instructions only inside an image.
- Test hotspot alignment independently on phone, tablet, desktop, portrait, and landscape compositions.

## Responsive Behaviour

- Do not simply crop the desktop world until destinations disappear.
- Create art-directed desktop, tablet, and phone crops or layered compositions.
- Keep the primary path and current destination in the strongest visible region.
- On small screens, allow bounded vertical exploration of the town path when it improves readability.
- A semantic destination list remains available when illustration crop, zoom, or assistive technology makes the map difficult to use.

## Risks and Guardrails

1. **Art continuity:** Independently generated scenes can drift in architecture, scale, light, and geography. Maintain an approved environment bible and reusable asset library.
2. **Responsive hotspots:** Percentage overlays can misalign when art crops. Use art-directed breakpoints and automated plus manual alignment tests.
3. **Visual density:** Rich maps can hide the next action. Preserve calm zones, strong trail contrast, landmark scale, and optional labels.
4. **Raster text:** Generated words may be inaccurate or inaccessible. Rebuild titles and controls as vector/DOM elements.
5. **Production cost:** Full-scene art is expensive. Reuse buildings, foliage, props, marker components, and lighting treatments without making towns feel duplicated.
6. **Cultural authenticity:** Visual warmth is not cultural validation. Trinidad and Tobago children, parents, educators, writers, and illustrators must review final environments and dialogue.
7. **Reference imitation:** Borrow composition and interaction principles only. Do not reproduce protected layouts, artwork, characters, buildings, dialogue, or distinctive branded systems.
8. **Curriculum rigidity:** The map must accommodate curriculum revisions and content versions without repainting the entire world.

## Decisions Log

| Date | Decision | Rationale |
|---|---|---|
| 15 July 2026 | Replace “Caribbean Pathfinder” with “The Living Adventure World” | The earlier editorial identity did not match the founder’s desired immersive adventure experience. |
| 15 July 2026 | Make the environment itself the navigation | Integrated destinations feel like a real world, unlike separate icons placed over a background. |
| 15 July 2026 | Use a continuous camera hierarchy | Welcome, country, town, mission, and lesson must feel like different zoom levels of one coherent place. |
| 15 July 2026 | Approve a hand-painted Caribbean story-adventure style | It provides warmth, magic, memorability, and cultural specificity without preschool styling. |
| 15 July 2026 | Use Bree Serif and Atkinson Hyperlegible Next | The pairing balances story-game personality with child, numeral, and reporting legibility. |
| 15 July 2026 | Use Lagoon Teal, Mango Gold, and environmental colours | The palette is grounded in the approved world and supports clear active/completed states. |
| 15 July 2026 | Remove characters from the town curriculum map | The detailed environment and mission path need visual priority; characters remain for the welcome hub and narrative moments. |
| 15 July 2026 | Use environmental change as the primary reward language | It strengthens story consequence without reward clutter or manipulative retention mechanics. |
