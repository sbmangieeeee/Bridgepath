"use client";

/* eslint-disable @next/next/no-img-element -- approved entrance art remains an unmodified interface layer */

import Link from "next/link";
import { useState } from "react";
import { CANONICAL_ASSETS } from "@/lib/production/assets";

const PREVIEW_DESTINATIONS = [
  { id: "customise", label: "Customise your explorer", className: "home-hotspot-customise" },
  { id: "achievements", label: "Achievements", className: "home-hotspot-achievements" },
  { id: "games", label: "Mini-games", className: "home-hotspot-games" },
  { id: "family", label: "Family area", className: "home-hotspot-family" },
] as const;

export function BridgepathHome() {
  const [notice, setNotice] = useState("");
  return <main className="bridgepath-home">
    <img className="home-art" src={CANONICAL_ASSETS.home.runtimePath} alt="" />
    <h1 className="sr-only">Bridgepath Adventures</h1>
    <Link className="illustrated-hotspot home-hotspot-adventure" href="/karina" aria-label="Enter the adventure through the map hut"><span className="sr-only">Enter adventure</span></Link>
    {PREVIEW_DESTINATIONS.map((destination) => <button className={`illustrated-hotspot ${destination.className}`} key={destination.id} type="button" aria-label={`${destination.label}. Coming later.`} onClick={() => setNotice(`${destination.label} — Coming later.`)}><span className="sr-only">{destination.label}</span></button>)}
    <p className="scene-notice" aria-live="polite">{notice}</p>
  </main>;
}
