"use client";

/* eslint-disable @next/next/no-img-element -- the approved map is an unmodified visual layer beneath semantic hotspots */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AROUCA_GROOVE_STOPS } from "@/lib/production/arouca-groove";
import { EMPTY_PROGRESS } from "@/lib/production/progress";
import { LocalStorageProgressAdapter } from "@/lib/production/storage";
import type { Progress } from "@/lib/production/types";
import { CANONICAL_ASSETS } from "@/lib/production/assets";

const HOTSPOTS = [[8.8,18],[18.7,27],[44.6,21.8],[60.2,23.2],[75,24.5],[89.4,33.4],[90.3,48.6],[77,61.3],[66,56.2],[49.8,48.8],[27,51.4],[12,52],[8.5,70.4],[26.2,77],[42.2,90.1],[65.4,86.4],[79.8,87.7],[92.8,84.3]] as const;

export function AroucaGrooveMap() {
  const [progress, setProgress] = useState<Progress>(EMPTY_PROGRESS);
  const [listOpen, setListOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const listDialog = useRef<HTMLDialogElement>(null);

  // Browser persistence hydrates after mount so the route remains statically renderable.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setProgress(new LocalStorageProgressAdapter(window.localStorage).load()), []);
  useEffect(() => {
    const dialog = listDialog.current;
    if (!dialog) return;
    if (listOpen && !dialog.open) dialog.showModal();
    if (!listOpen && dialog.open) dialog.close();
  }, [listOpen]);

  return <main className="town-map-stage">
    <h1 className="sr-only">Arouca Groove</h1>
    <nav className="town-map-hud" aria-label="Town map controls">
      <Link href="/karina" aria-label="Back to Karina">←</Link>
      <Link href="/" aria-label="Bridgepath home">⌂</Link>
      <button type="button" aria-label="Help" onClick={() => setNotice("Choose an illustrated numbered stop. Stop 5 is open now.")}>?</button>
      <button type="button" aria-label="Settings" onClick={() => setNotice("Settings are coming later.")}>⚙</button>
      <button type="button" aria-label="Open accessible 18-stop list" aria-haspopup="dialog" onClick={() => setListOpen(true)}>☰</button>
    </nav>
    <p className="map-pan-hint">Scroll sideways to reach every stop.</p>
    <p className="town-map-notice" aria-live="polite">{notice}</p>
    <section className="journey-map-section" aria-label="Arouca Groove town map">
      <div className="journey-map-scroll" tabIndex={0} aria-label="Scrollable map containing all 18 Arouca Groove stops">
        <div className="journey-map-art">
          <img className="journey-map-background" src={CANONICAL_ASSETS.town.runtimePath} alt="" />
          {AROUCA_GROOVE_STOPS.map((stop, index) => {
            const completed = progress.completedStopIds.includes(stop.id);
            const available = stop.order === 5;
            const style = { left: `${HOTSPOTS[index][0]}%`, top: `${HOTSPOTS[index][1]}%` };
            return available
              ? <Link className={`map-hotspot available ${completed ? "completed" : ""}`} href="/arouca-groove/corner-shop-challenge" style={style} aria-label={`${stop.name}. ${completed ? "Completed. Play again" : "Available"}`} key={stop.id}><span>{completed ? "✓" : stop.order}</span></Link>
              : <button className="map-hotspot locked" disabled style={style} aria-label={`${stop.name}. Locked, coming later`} key={stop.id}><span>{stop.order}</span></button>;
          })}
        </div>
      </div>
    </section>
    <dialog className="stop-drawer" ref={listDialog} aria-labelledby="stop-drawer-title" onClose={() => setListOpen(false)} onCancel={() => setListOpen(false)}>
      <div className="stop-drawer-header"><h2 id="stop-drawer-title">Arouca Groove: 18 stops</h2><button type="button" onClick={() => setListOpen(false)} aria-label="Close 18-stop list">Close</button></div>
      <ol>{AROUCA_GROOVE_STOPS.map((stop) => {
        const completed = progress.completedStopIds.includes(stop.id);
        return <li key={stop.id}><strong>{stop.order}. {stop.name}</strong>{stop.order === 5 ? <Link href="/arouca-groove/corner-shop-challenge">{completed ? "Completed — Play again" : "Available — Start challenge"}</Link> : <span>Locked — Coming later</span>}</li>;
      })}</ol>
    </dialog>
  </main>;
}
