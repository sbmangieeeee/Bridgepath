import { describe, expect, it } from "vitest";
import { advanceMarketCustomer, MARKET_CUSTOMER_SLOTS } from "./market";

describe("Corner Shop customer sequence", () => {
  it("reserves five distinct approved-asset slots without inventing customers", () => {
    expect(MARKET_CUSTOMER_SLOTS).toHaveLength(5);
    expect(new Set(MARKET_CUSTOMER_SLOTS.map((customer) => customer.id)).size).toBe(5);
    expect(MARKET_CUSTOMER_SLOTS.every((customer) => !customer.approved && customer.assetPath === null)).toBe(true);
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
