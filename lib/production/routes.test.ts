import { describe, expect, it } from "vitest";
import { PRODUCTION_ROUTE_ORDER, PRODUCTION_ROUTES } from "./routes";

describe("production walking-skeleton routes", () => {
  it("connects entrance, Karina, Arouca Groove, and Corner Shop in order", () => {
    expect(PRODUCTION_ROUTE_ORDER).toEqual([
      "/",
      "/karina",
      "/arouca-groove",
      "/arouca-groove/corner-shop-challenge",
    ]);
    expect(new Set(Object.values(PRODUCTION_ROUTES)).size).toBe(4);
  });
});
