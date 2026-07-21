"use client";

/* eslint-disable @next/next/no-img-element -- approved country art remains an unmodified visual layer */

import Link from "next/link";
import { useState } from "react";
import { CANONICAL_ASSETS } from "@/lib/production/assets";
import { KARINA } from "@/lib/production/arouca-groove";

const TOWN_PINS = [
  [21, 31], [44.6, 21], [63.7, 22], [85.3, 31], [34.3, 63], [73.5, 64],
] as const;

export function CountryMap() {
  const [notice, setNotice] = useState("");
  return <main className="country-stage">
    <h1 className="sr-only">Karina country map</h1>
    <nav className="scene-hud" aria-label="Country controls">
      <Link href="/" aria-label="Back to Bridgepath">←</Link>
      <Link href="/" aria-label="Bridgepath home">⌂</Link>
      <button type="button" aria-label="Help" onClick={() => setNotice("Choose a town pin. Arouca Groove is open now.")}>?</button>
      <button type="button" aria-label="Settings" onClick={() => setNotice("Settings are coming later.")}>⚙</button>
    </nav>
    <div className="country-pan" tabIndex={0} aria-label="Scrollable Karina country map">
      <div className="country-artboard">
        <img className="country-background" src={CANONICAL_ASSETS.country.runtimePath} alt="" />
        {KARINA.towns.map((town, index) => {
          const style = { left: `${TOWN_PINS[index][0]}%`, top: `${TOWN_PINS[index][1]}%` };
          return town.id === "arouca-groove"
            ? <Link className="town-pin-hotspot" style={style} href="/arouca-groove" aria-label="Arouca Groove. Available." key={town.id}><span className="sr-only">Arouca Groove</span></Link>
            : <button className="town-pin-hotspot" style={style} type="button" aria-label={`${town.name}. Coming later.`} onClick={() => setNotice(`${town.name} — Coming later.`)} key={town.id}><span className="sr-only">{town.name}</span></button>;
        })}
      </div>
    </div>
    <p className="country-notice" aria-live="polite">{notice}</p>
  </main>;
}
