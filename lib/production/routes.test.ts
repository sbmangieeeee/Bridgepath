import { describe, expect, it } from "vitest";
import { PRODUCTION_ROUTE_ORDER, PRODUCTION_ROUTES } from "./routes";

describe("production walking-skeleton routes", () => {
  it("connects Welcome, StoryPath, Arouca Groove, and Corner Shop in order", () => {
    expect(PRODUCTION_ROUTE_ORDER).toEqual([
      "/",
      "/storypath",
      "/arouca-groove",
      "/arouca-groove/corner-shop-challenge",
    ]);
    expect(PRODUCTION_ROUTES.legacyCountry).toBe("/karina");
    expect(new Set(Object.values(PRODUCTION_ROUTES)).size).toBe(5);
  });
});
