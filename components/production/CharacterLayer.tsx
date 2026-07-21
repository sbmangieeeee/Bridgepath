/* eslint-disable @next/next/no-img-element -- approved transparent character art is positioned inside an independent character layer */

import { CANONICAL_ASSETS } from "@/lib/production/assets";

type CharacterName = "Ms. Leela" | "Mr. Ali" | "Niko" | "Zuri";

export function ExplorerPairLayer() {
  return <figure className="explorer-pair-layer" aria-label="Niko and Zuri">
    <img src={CANONICAL_ASSETS.explorers.runtimePath} alt="" />
    <figcaption className="sr-only">Niko and Zuri</figcaption>
  </figure>;
}

export function CharacterLayer({ name, position = "left" }: { name: CharacterName; position?: "left" | "right" | "centre" }) {
  const explorer = name === "Niko" || name === "Zuri";
  return <figure className={`character-layer character-${name.toLowerCase().replace(/[^a-z]+/g, "-")} position-${position}`}>
    {explorer ? <div className={`explorer-sprite ${name.toLowerCase()}`}><img src={CANONICAL_ASSETS.explorers.runtimePath} alt="" /></div> : <div className="character-placeholder" aria-hidden="true"><span>{name === "Ms. Leela" ? "ML" : "MA"}</span></div>}
    <figcaption>{name}</figcaption>
  </figure>;
}
