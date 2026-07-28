export type MarketStage = "introduction" | "child-handoff" | "serving-customer" | "mission-complete";

export type MarketCustomer = {
  readonly id: `customer-${string}`;
  readonly name: string;
  readonly assetPath: `/${string}` | null;
  readonly requiredAssetFilename: `${string}.png`;
};

export const MARKET_CUSTOMERS: readonly MarketCustomer[] = [
  { id: "customer-01", name: "Auntie Joy", assetPath: "/assets/characters/mentors/auntie-joy.png", requiredAssetFilename: "auntie-joy.png" },
  { id: "customer-02", name: "Coach Devon", assetPath: "/assets/characters/mentors/coach-devon.png", requiredAssetFilename: "coach-devon.png" },
  { id: "customer-03", name: "Ms. Leela Maharaj", assetPath: "/assets/characters/mentors/ms-leela-maharaj.png", requiredAssetFilename: "ms-leela-maharaj.png" },
  { id: "customer-04", name: "Miss Maria", assetPath: null, requiredAssetFilename: "miss-maria-source.png" },
  { id: "customer-05", name: "Mr. Thomas", assetPath: null, requiredAssetFilename: "mr-thomas-source.png" },
];

export function advanceMarketCustomer(activeCustomerIndex: number, customerCount: number) {
  if (customerCount <= 0 || activeCustomerIndex >= customerCount - 1) {
    return { activeCustomerIndex, marketStage: "mission-complete" as const };
  }
  return { activeCustomerIndex: activeCustomerIndex + 1, marketStage: "serving-customer" as const };
}
