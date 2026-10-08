/* eslint-disable @next/next/no-img-element -- approved scene layers must retain source geometry */

import type { ReactNode } from "react";
import type { CanonicalAsset } from "@/lib/production/assets";

export const MARKET_ARTBOARD_WIDTH = 1672;
export const MARKET_ARTBOARD_HEIGHT = 941;
export const MARKET_GROUND_Y = 875;

export type MarketComposition = "introduction" | "child-handoff" | "cashier";

export function SceneFrame({
  background,
  foreground,
  overlay,
  scene,
}: {
  background: CanonicalAsset;
  foreground: CanonicalAsset;
  overlay: ReactNode;
  scene: MarketComposition;
}) {
  return <section className="market-scene-viewport" data-market-composition={scene}>
    <div className="market-scene-artboard">
      <div className="market-visual-layer market-background-visual">
        <img className="market-background-layer" src={background.runtimePath} data-asset-role={background.role} alt="" />
      </div>
      <div className="market-visual-layer market-character-layers" aria-hidden="true" />
      <div className={`market-visual-layer market-counter-visual market-counter-${scene}`}>
        <img className="market-counter-art" src={foreground.runtimePath} data-asset-role={foreground.role} alt="" />
      </div>
      <div className="market-visual-layer market-activity-object-layers" aria-hidden="true" />
    </div>
    <div className="market-composition-overlay">{overlay}</div>
  </section>;
}
