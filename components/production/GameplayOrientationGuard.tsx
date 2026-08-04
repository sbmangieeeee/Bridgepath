"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";

const MOBILE_PORTRAIT_QUERY = "(max-width: 600px) and (orientation: portrait)";

function subscribeToOrientation(onChange: () => void) {
  const media = window.matchMedia(MOBILE_PORTRAIT_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function isMobilePortrait() {
  return window.matchMedia(MOBILE_PORTRAIT_QUERY).matches;
}

export function GameplayOrientationGuard({ children }: { children: ReactNode }) {
  const portraitBlocked = useSyncExternalStore(subscribeToOrientation, isMobilePortrait, () => false);
  const promptRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (portraitBlocked) promptRef.current?.focus();
  }, [portraitBlocked]);

  return <div className={`gameplay-orientation-shell${portraitBlocked ? " is-portrait-blocked" : ""}`}>
    <div className="gameplay-orientation-content" aria-hidden={portraitBlocked || undefined} inert={portraitBlocked || undefined}>
      {children}
    </div>
    {portraitBlocked && <section
      ref={promptRef}
      className="gameplay-orientation-prompt"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gameplay-orientation-title"
      aria-describedby="gameplay-orientation-description"
      tabIndex={-1}
    >
      <p className="orientation-symbol" aria-hidden="true">↻</p>
      <h2 id="gameplay-orientation-title">Turn your device sideways to continue.</h2>
      <p id="gameplay-orientation-description">Your place is saved. The lesson will be ready when your screen is wide.</p>
    </section>}
  </div>;
}
