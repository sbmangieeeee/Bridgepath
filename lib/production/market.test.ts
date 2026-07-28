import { describe, expect, it } from "vitest";
import { advanceMarketCustomer, MARKET_CUSTOMERS } from "./market";

describe("Corner Shop customer sequence", () => {
  it("uses five distinct approved mentors as customers", () => {
    expect(MARKET_CUSTOMERS.map((customer) => customer.name)).toEqual([
      "Auntie Joy",
      "Coach Devon",
      "Ms. Leela Maharaj",
      "Miss Maria",
      "Mr. Thomas",
    ]);
    expect(new Set(MARKET_CUSTOMERS.map((customer) => customer.id)).size).toBe(5);
    expect(MARKET_CUSTOMERS.filter((customer) => customer.assetPath !== null)).toHaveLength(3);
  });

  it("advances to the next customer", () => {
    expect(advanceMarketCustomer(1, 5)).toEqual({
      activeCustomerIndex: 2,
      marketStage: "serving-customer",
    });
  });

  it("moves to mission completion after the final customer", () => {
    expect(advanceMarketCustomer(4, 5)).toEqual({
      activeCustomerIndex: 4,
      marketStage: "mission-complete",
    });
  });
});
