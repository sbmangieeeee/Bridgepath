# Bridgepath Production Asset Manifest

> **Last updated:** 20 July 2026
> **Status:** Founder-approved reusable environment and screen-reference library

This manifest records approved reusable visual assets and their production boundaries. Clean environment images are backgrounds only. Characters, dialogue, questions, answers, products, prices, recipes, scores, activity objects, feedback, progress states, and accessible interface controls must remain separate dynamic layers.

## Final production runtime sequence

1. `public/assets/screens/bridgepath-welcome-direction.png` — Bridgepath home; exact copy of `design/approved/bridgepath-welcome-direction.png`.
2. `public/assets/maps/karina-country-map.png` — Karina country environment supplied by the founder on 20 July 2026.
3. `public/assets/maps/arouca-grove-journey-map.png` — Arouca Groove and its 18 illustrated medallions.
4. `public/assets/screens/school-instruction-template.png` — Teacher Lesson environment with a blank dynamic teaching surface.
5. `public/assets/screens/guided-exercise-template.png` — Class Challenge environment with blank notebook pages.
6. `public/assets/environments/classroom-environment.png` — classroom mission choice.
7. `public/assets/environments/market-environment.png` — Corner Shop mission.
8. `public/niko-zuri-v2.png` — transparent Niko and Zuri scene layer.

Production components select these through `lib/production/assets.ts`. Earlier runtime images and screen directions are retained under `design/archive/` and must not be selected by production components.

## Production environment backgrounds

| Filename | Environment / screen type | Intended mentors | Reusable content zones | Elements that must remain dynamic | Approval status |
|---|---|---|---|---|---|
| `public/assets/environments/classroom-environment.png` | School classroom background | Ms. Leela Maharaj; Mr. Kareem Joseph | Bulletin board, small chalkboard, teacher desk, learner desks, open floor and doorway | Characters, lesson content, dialogue, questions, answers, manipulatives, board writing, activity objects, progress and controls | Founder-approved background |
| `public/assets/environments/market-environment.png` | Market / corner-shop background | Mr. Ali | Main counter, open wall, shelves, side counter and empty crates | Characters, products, prices, labels, money, quantities, dialogue, questions, answers and controls | Founder-approved background |
| `public/assets/environments/bakery-environment.png` | Bakery / food-preparation background | Miss Maria | Central island, back counter, tray rack, ovens and storage surfaces | Characters, ingredients, recipes, measurements, portions, food, labels, dialogue, questions, answers and controls | Founder-approved background |
| `public/assets/environments/mas-workshop-environment.png` | Mas workshop / practical-making background | Auntie Joy; Mr. Kareem Joseph where the school-to-workshop sequence requires him | Central worktable, clear back wall, tool board and material storage | Characters, designs, patterns, measurements, task materials, activity objects, dialogue, questions, answers and controls | Founder-approved background |
| `public/assets/environments/community-centre-environment.png` | Multipurpose community-centre background | Context-dependent recurring mentor; Auntie Joy for community-event planning | Noticeboard, central table, floor area, storage units and stacked seating | Characters, event information, schedules, signs, activity objects, dialogue, questions, answers, scores and controls | Founder-approved background |
| `public/assets/environments/recreation-grounds-environment.png` | Recreation grounds / shared-space background | Coach Devon; Mr. Thomas for buildability and safety constraints | Open field, pitch, scoreboard, stands and boundary areas | Characters, routes, equipment, schedules, measurements, scores, activity markers, dialogue, questions, answers and controls | Founder-approved background |

## Production map assets

| Filename | Environment / screen type | Intended mentors | Reusable content zones | Elements that must remain dynamic | Approval status |
|---|---|---|---|---|---|
| `public/assets/maps/arouca-grove-journey-map.png` | Arouca Groove Journey Map; complete Standard 3 Mathematics 18-stop town journey | Recurring mentors appear at their curriculum-linked locations; the map itself remains character-free | Eighteen numbered stop medallions, connected stepping-stone route, fixed `Arouca Groove` town title, and blank progress plaque | Progress value such as `0/18` in the blank plaque; stop availability/completion states; accessible stop names and hit areas; focus states; home/settings actions and country-map return navigation | Founder-approved production asset; Stop 6 delivery-van icon correction approved |

## Approved full-screen production templates

These images are approved full-screen visual templates. Essential content and working controls remain accessible DOM layers aligned over their blank teaching surfaces.

| Filename | Environment / screen type | Intended mentors | Reusable content zones | Elements that must remain dynamic | Approval status |
|---|---|---|---|---|---|
| `public/assets/screens/school-instruction-template.png` | Full-screen classroom instruction template | Ms. Leela Maharaj; Mr. Kareem Joseph | Large blank central teaching surface and contextual classroom perimeter | All teaching content, characters, dialogue, questions, demonstrations, replay/continue actions, navigation controls, focus states and accessibility semantics | Founder-supplied production replacement, 20 July 2026 |
| `public/assets/screens/guided-exercise-template.png` | Full-screen Class Challenge template | Ms. Leela Maharaj; Mr. Kareem Joseph | Blank open notebook pages and surrounding work surface | Instructions, questions, answers, manipulatives, feedback, hint/check/continue actions, navigation controls, focus states and accessibility semantics | Founder-supplied production replacement, 20 July 2026 |

## Production rules

- Do not edit, crop, recolour, add to, or regenerate these approved files without a new founder decision.
- Environment images remain background layers only.
- Do not place essential text or interaction semantics inside raster imagery.
- Recreate all controls as accessible interface elements with keyboard, touch, focus, text-scaling and assistive-technology support.
- Keep content and character placement responsive so important environmental zones remain usable across supported breakpoints.
