export type MarketStage = "introduction" | "child-handoff" | "serving-customer" | "mission-complete";

export type MarketCustomer = {
  readonly id: `customer-${string}`;
  readonly name: string;
  readonly assetPath: `/${string}` | null;
  readonly requiredAssetFilename: `${string}.png`;
};

export const MARKET_CUSTOMERS: readonly MarketCustomer[] = [
  { id: "customer-01", name: "Miss Maria", assetPath: null, requiredAssetFilename: "miss-maria-transparent.png" },
  { id: "customer-02", name: "Auntie Joy", assetPath: null, requiredAssetFilename: "auntie-joy-transparent.png" },
  { id: "customer-03", name: "Coach Devon", assetPath: null, requiredAssetFilename: "coach-devon-transparent.png" },
  { id: "customer-04", name: "Mr. Thomas", assetPath: null, requiredAssetFilename: "mr-thomas-transparent.png" },
  { id: "customer-05", name: "Ms. Leela Maharaj", assetPath: null, requiredAssetFilename: "ms-leela-maharaj-transparent.png" },
];

export function advanceMarketCustomer(activeCustomerIndex: number, customerCount: number) {
  if (customerCount <= 0 || activeCustomerIndex >= customerCount - 1) {
    return { activeCustomerIndex, marketStage: "mission-complete" as const };
  }
  return { activeCustomerIndex: activeCustomerIndex + 1, marketStage: "serving-customer" as const };
}
