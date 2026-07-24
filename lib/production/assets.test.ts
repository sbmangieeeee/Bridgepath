import { describe, expect, it } from "vitest";
import { CANONICAL_ASSETS } from "./assets";

describe("canonical production assets", () => {
  it("defines one unique runtime asset for every production role", () => {
    const assets = Object.values(CANONICAL_ASSETS);
    expect(assets).toHaveLength(11);
    expect(new Set(assets.map((asset) => asset.role)).size).toBe(11);
    expect(new Set(assets.map((asset) => asset.runtimePath)).size).toBe(11);
  });
});
