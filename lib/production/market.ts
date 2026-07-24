export type MarketStage = "introduction" | "child-handoff" | "serving-customer" | "mission-complete";

export type MarketCustomer = {
  readonly id: `customer-${string}`;
  readonly assetPath: `/${string}` | null;
  readonly dialogue: string | null;
  readonly approved: boolean;
};

export const MARKET_CUSTOMER_SLOTS: readonly MarketCustomer[] = Array.from(
  { length: 5 },
  (_, index) => ({
    id: `customer-${String(index + 1).padStart(2, "0")}` as const,
    assetPath: null,
    dialogue: null,
    approved: false,
  }),
);

export const APPROVED_MARKET_CUSTOMERS = MARKET_CUSTOMER_SLOTS.filter(
  (customer) => customer.approved && customer.assetPath !== null,
);

export function advanceMarketCustomer(activeCustomerIndex: number, customerCount: number) {
  if (customerCount <= 0 || activeCustomerIndex >= customerCount - 1) {
    return { activeCustomerIndex, marketStage: "mission-complete" as const };
  }
  return { activeCustomerIndex: activeCustomerIndex + 1, marketStage: "serving-customer" as const };
}
