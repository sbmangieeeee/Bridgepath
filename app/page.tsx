import { PARALIN_STOPS } from "@/lib/production/arouca-groove";

export default function Home() {
  return <main>
    <h1>Storypath</h1>
    <p>Concept rebuild in progress.</p>
    <h2>Paralin</h2>
    <p>A Caribbean-inspired community with Aaliyah and Theo.</p>
    <p>The world is the interface. The learner makes the consequential choices.</p>
    <h2>Standard 3 Mathematics: 18 protected stops</h2>
    <p>These are working experience names. Their mathematical purposes, sequence,
      dependencies, transfer requirements, and evidence remain protected.</p>
    <ol aria-label="Protected learning stops">
      {PARALIN_STOPS.map((stop) => <li key={stop.id}>{stop.name}</li>)}
    </ol>
    <p>Artwork, character appearances, geography, and interface design are being
      reconsidered. This text checkpoint is not the new visual direction.</p>
  </main>;
}
