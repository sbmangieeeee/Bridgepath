# Bridgepath

> **Current experience-design status (15 July 2026):** Bridgepath now has definitive proposed character documentation for its core companions: the [shared companion guide](./BRIDGEPATH-CORE-COMPANION-CHARACTER-GUIDE.md), [Niko Character Bible](./NIKO-CHARACTER-BIBLE.md), and [Zuri Character Bible](./ZURI-CHARACTER-BIBLE.md). These documents establish character identity, visual construction, wardrobe, expression, animation, educational behaviour, dialogue, accessibility, and production consistency. They are ready for founder and Trinidad and Tobago cultural review—not artwork or implementation.

Bridgepath is a responsive, story-led learning adventure for Trinidad and Tobago children in Standards 3–5. The repository currently contains an exploratory Market Day prototype plus the planning and discovery documents needed to define the first curriculum-validated Standard 3 Mathematics slice.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Prototype progress is stored in the browser. It is intentionally not a production account system.

## Validation

```bash
npm test
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

## Pilot blockers

Production activation remains blocked on curriculum sign-off, cultural review, legal approval of adult verification, live authentication/Supabase policies, processor review, and child usability testing. See [PLAN.md](./PLAN.md).
