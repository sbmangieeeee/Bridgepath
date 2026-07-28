import { describe, expect, it } from "vitest";
import { CANONICAL_ASSETS } from "./assets";

describe("canonical production assets", () => {
  it("defines one unique runtime asset for every production role", () => {
    const assets = Object.values(CANONICAL_ASSETS);
    expect(assets).toHaveLength(20);
    expect(new Set(assets.map((asset) => asset.role)).size).toBe(20);
    expect(new Set(assets.map((asset) => asset.runtimePath)).size).toBe(20);
    expect(CANONICAL_ASSETS.msLeela.runtimePath).toBe("/assets/characters/mentors/ms-leela-maharaj.png");
    expect(CANONICAL_ASSETS.marketCashierRegister.runtimePath).toBe("/assets/foregrounds/corner-shop-register-cashier-view.png");
  });
});
