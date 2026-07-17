# Bridgepath Production Asset Manifest

> **Last updated:** 17 July 2026  
> **Status:** Founder-approved reusable environment and screen-reference library

This manifest records approved reusable visual assets and their production boundaries. Clean environment images are backgrounds only. Characters, dialogue, questions, answers, products, prices, recipes, scores, activity objects, feedback, progress states, and accessible interface controls must remain separate dynamic layers.

## Production environment backgrounds

| Filename | Environment / screen type | Intended mentors | Reusable content zones | Elements that must remain dynamic | Approval status |
|---|---|---|---|---|---|
| `public/assets/environments/classroom-environment.png` | School classroom background | Ms. Leela Maharaj; Mr. Kareem Joseph | Bulletin board, small chalkboard, teacher desk, learner desks, open floor and doorway | Characters, lesson content, dialogue, questions, answers, manipulatives, board writing, activity objects, progress and controls | Founder-approved background |
| `public/assets/environments/market-environment.png` | Market / corner-shop background | Mr. Ali | Main counter, open wall, shelves, side counter and empty crates | Characters, products, prices, labels, money, quantities, dialogue, questions, answers and controls | Founder-approved background |
| `public/assets/environments/bakery-environment.png` | Bakery / food-preparation background | Miss Maria | Central island, back counter, tray rack, ovens and storage surfaces | Characters, ingredients, recipes, measurements, portions, food, labels, dialogue, questions, answers and controls | Founder-approved background |
| `public/assets/environments/mas-workshop-environment.png` | Mas workshop / practical-making background | Auntie Joy; Mr. Kareem Joseph where the school-to-workshop sequence requires him | Central worktable, clear back wall, tool board and material storage | Characters, designs, patterns, measurements, task materials, activity objects, dialogue, questions, answers and controls | Founder-approved background |
| `public/assets/environments/community-centre-environment.png` | Multipurpose community-centre background | Context-dependent recurring mentor; Auntie Joy for community-event planning | Noticeboard, central table, floor area, storage units and stacked seating | Characters, event information, schedules, signs, activity objects, dialogue, questions, answers, scores and controls | Founder-approved background |
| `public/assets/environments/recreation-grounds-environment.png` | Recreation grounds / shared-space background | Coach Devon; Mr. Thomas for buildability and safety constraints | Open field, pitch, scoreboard, stands and boundary areas | Characters, routes, equipment, schedules, measurements, scores, activity markers, dialogue, questions, answers and controls | Founder-approved background |

## Approved screen-composition references

These images include baked interface elements and are therefore design references, not interactive production screens. Their buttons, labels, symbols and content areas must be rebuilt as accessible DOM/SVG controls and dynamic content.

| Filename | Environment / screen type | Intended mentors | Reusable content zones | Elements that must remain dynamic | Approval status |
|---|---|---|---|---|---|
| `design/references/screens/school-instruction-template.png` | Classroom instruction composition reference | Ms. Leela Maharaj; Mr. Kareem Joseph | Large central teaching surface and contextual classroom perimeter | All teaching content, characters, dialogue, questions, demonstrations, replay/continue actions, back/help/pause/settings controls, focus states and accessibility semantics | Founder-approved composition reference; baked controls are non-production |
| `design/references/screens/guided-exercise-template.png` | Guided exercise composition reference | Ms. Leela Maharaj; Mr. Kareem Joseph | Open notebook pages and surrounding work surface | Instructions, questions, answers, manipulatives, feedback, hint/audio/check actions, back/help/pause/settings controls, focus states and accessibility semantics | Founder-approved composition reference; baked controls are non-production |

## Production rules

- Do not edit, crop, recolour, add to, or regenerate these approved files without a new founder decision.
- Environment images remain background layers only.
- Do not place essential text or interaction semantics inside raster imagery.
- Recreate all controls as accessible interface elements with keyboard, touch, focus, text-scaling and assistive-technology support.
- Keep content and character placement responsive so important environmental zones remain usable across supported breakpoints.
