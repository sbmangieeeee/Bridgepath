import { describe, expect, it } from "vitest";
import { access } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { CANONICAL_ASSETS, MENTOR_RUNTIME_ASSETS } from "./assets";

describe("canonical production assets", () => {
  it("defines one unique runtime asset for every production role", () => {
    const assets = Object.values(CANONICAL_ASSETS);
    expect(assets).toHaveLength(20);
    expect(new Set(assets.map((asset) => asset.role)).size).toBe(20);
    expect(new Set(assets.map((asset) => asset.runtimePath)).size).toBe(20);
    expect(CANONICAL_ASSETS.msLeela.runtimePath).toBe("/assets/characters/mentors/ms-leela-maharaj-transparent.png");
    expect(CANONICAL_ASSETS.marketCashierRegister.runtimePath).toBe("/assets/foregrounds/corner-shop-register-cashier-view.png");
  });

  it("registers unique, valid, genuinely transparent mentor PNGs", async () => {
    const filenames = MENTOR_RUNTIME_ASSETS.map((asset) => path.basename(asset.runtimePath));
    expect(new Set(filenames).size).toBe(filenames.length);
    expect(filenames.every((filename) => filename.endsWith("-transparent.png"))).toBe(true);

    for (const asset of MENTOR_RUNTIME_ASSETS) {
      const filePath = path.join(process.cwd(), "public", asset.runtimePath);
      await expect(access(filePath)).resolves.toBeUndefined();
      const image = sharp(filePath);
      const metadata = await image.metadata();
      expect(metadata.format).toBe("png");
      expect(metadata.hasAlpha).toBe(true);
      expect(metadata.channels).toBe(4);
      expect(metadata.width).toBeGreaterThan(0);
      expect(metadata.height).toBeGreaterThan(0);
      const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
      let transparentPixels = 0;
      for (let index = 3; index < data.length; index += info.channels) {
        if (data[index] < 255) transparentPixels += 1;
      }
      expect(transparentPixels).toBeGreaterThan(0);
    }
  });
});
