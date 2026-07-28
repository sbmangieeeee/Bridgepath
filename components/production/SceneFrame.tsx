/* eslint-disable @next/next/no-img-element -- approved scene layers must retain their source geometry */

import type { CSSProperties, ReactNode } from "react";
import type { CanonicalAsset } from "@/lib/production/assets";

export const SCENE_WIDTH = 1672;
export const SCENE_HEIGHT = 941;

export type SceneAnchor = {
  readonly x: number;
  readonly groundY: number;
  readonly maxHeight: number;
  readonly scale?: number;
  readonly zIndex: number;
  readonly entranceFrom?: "left" | "right";
};

export type VisibleBounds = {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
};

export type SceneAssetMetadata = {
  readonly width: number;
  readonly height: number;
  readonly visibleBounds: VisibleBounds;
};

export const CORNER_SHOP_ASSET_METADATA = {
  mrAli: { width: 517, height: 1395, visibleBounds: { x: 24, y: 24, width: 469, height: 1347 } },
  entranceCounter: { width: 1672, height: 941, visibleBounds: { x: 78, y: 138, width: 1519, height: 681 } },
  childViewCounter: { width: 1672, height: 941, visibleBounds: { x: 22, y: 249, width: 1627, height: 587 } },
  cashierRegister: { width: 889, height: 789, visibleBounds: { x: 15, y: 15, width: 859, height: 759 } },
  auntieJoy: { width: 450, height: 1345, visibleBounds: { x: 23, y: 23, width: 404, height: 1299 } },
} as const satisfies Record<string, SceneAssetMetadata>;

export const CORNER_SHOP_ANCHORS = {
  entrance: {
    shopkeeper: { x: 451, groundY: 800, maxHeight: 720, scale: 1, zIndex: 2 },
    checkout: { x: 836, groundY: 915, maxHeight: 1400, scale: 1, zIndex: 3 },
  },
  gameplay: {
    customer: { x: 980, groundY: 825, maxHeight: 650, scale: 1, zIndex: 2, entranceFrom: "right" },
    counter: { x: 836, groundY: 930, maxHeight: 1500, scale: 1, zIndex: 3 },
    register: { x: 1370, groundY: 520, maxHeight: 300, scale: 1, zIndex: 3 },
    rice: { x: 760, groundY: 620, maxHeight: 140, scale: 1, zIndex: 4 },
    flour: { x: 980, groundY: 620, maxHeight: 145, scale: 1, zIndex: 4 },
  },
} as const satisfies Record<string, Record<string, SceneAnchor>>;

export function visibleAssetStyle(
  asset: SceneAssetMetadata,
  placement: SceneAnchor,
  constrainBy: "height" | "width",
): CSSProperties {
  const bounds = asset.visibleBounds;
  const scale = constrainBy === "height"
    ? placement.maxHeight / bounds.height
    : placement.maxHeight / bounds.width;
  const visibleCenterX = bounds.x + bounds.width / 2;
  const visibleBottomY = bounds.y + bounds.height;

  return {
    left: `${((placement.x - visibleCenterX * scale) / SCENE_WIDTH) * 100}%`,
    top: `${((placement.groundY - visibleBottomY * scale) / SCENE_HEIGHT) * 100}%`,
    width: `${((asset.width * scale) / SCENE_WIDTH) * 100}%`,
    height: "auto",
    zIndex: placement.zIndex,
  };
}

export function anchorStyle(anchor: SceneAnchor): CSSProperties {
  return {
    left: `${(anchor.x / SCENE_WIDTH) * 100}%`,
    bottom: `${((SCENE_HEIGHT - anchor.groundY) / SCENE_HEIGHT) * 100}%`,
    height: `${(anchor.maxHeight / SCENE_HEIGHT) * 100}%`,
    transform: `translateX(-50%) scale(${anchor.scale ?? 1})`,
    transformOrigin: "bottom center",
    zIndex: anchor.zIndex,
  };
}

export function SceneFrame({
  background,
  children,
  scene,
}: {
  background: CanonicalAsset;
  children: ReactNode;
  scene: "corner-shop-entrance" | "corner-shop-gameplay";
}) {
  return <div className="scene-frame-shell">
    <div className="scene-frame" data-scene={scene}>
      <img className="scene-environment" src={background.runtimePath} alt="" />
      {children}
    </div>
  </div>;
}
