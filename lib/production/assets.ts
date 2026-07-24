export type CanonicalAssetRole =
  | "home"
  | "country"
  | "town"
  | "schoolInstruction"
  | "classChallenge"
  | "classroom"
  | "marketEnvironmentStructure"
  | "marketCounter"
  | "marketCounterChildView"
  | "marketCashierView"
  | "explorers";

export type CanonicalAsset = {
  readonly role: CanonicalAssetRole;
  readonly runtimePath: `/${string}`;
  readonly sourcePath: string;
  readonly description: string;
};

export const CANONICAL_ASSETS: Readonly<Record<CanonicalAssetRole, CanonicalAsset>> = {
  home: { role: "home", runtimePath: "/assets/screens/bridgepath-welcome-direction.png", sourcePath: "design/approved/bridgepath-welcome-direction.png", description: "Bridgepath illustrated entrance" },
  country: { role: "country", runtimePath: "/assets/maps/karina-country-map.png", sourcePath: "public/assets/maps/karina-country-map.png", description: "Karina illustrated country environment" },
  town: { role: "town", runtimePath: "/assets/maps/arouca-grove-journey-map.png", sourcePath: "public/assets/maps/arouca-grove-journey-map.png", description: "Arouca Groove 18-stop map" },
  schoolInstruction: { role: "schoolInstruction", runtimePath: "/assets/screens/school-instruction-template.png", sourcePath: "public/assets/screens/school-instruction-template.png", description: "Classroom lesson environment with a blank teaching surface" },
  classChallenge: { role: "classChallenge", runtimePath: "/assets/screens/guided-exercise-template.png", sourcePath: "public/assets/screens/guided-exercise-template.png", description: "Notebook exercise environment with blank pages" },
  classroom: { role: "classroom", runtimePath: "/assets/environments/classroom-environment.png", sourcePath: "public/assets/environments/classroom-environment.png", description: "Classroom environment" },
  marketEnvironmentStructure: { role: "marketEnvironmentStructure", runtimePath: "/assets/environments/market-env-structure.png", sourcePath: "design/approved/scene-designer/market/market-env-structure.png", description: "Corner Shop introduction environment" },
  marketCounter: { role: "marketCounter", runtimePath: "/assets/foregrounds/market-counter.png", sourcePath: "design/approved/scene-designer/market/market-counter.png", description: "Transparent Corner Shop counter and register foreground" },
  marketCounterChildView: { role: "marketCounterChildView", runtimePath: "/assets/foregrounds/market-counter-child-view.png", sourcePath: "design/approved/scene-designer/market/market-counter-child-view.png", description: "Transparent child-handoff counter and register foreground" },
  marketCashierView: { role: "marketCashierView", runtimePath: "/assets/environments/market-cashier-view.png", sourcePath: "design/approved/scene-designer/market/market-cashier-view.png", description: "Corner Shop serving-customer environment" },
  explorers: { role: "explorers", runtimePath: "/niko-zuri-v2.png", sourcePath: "public/niko-zuri-v2.png", description: "Transparent Niko and Zuri pair" },
} as const;

export const PENDING_MARKET_CHARACTER_ASSETS = [
  { role: "mrAli", filename: "mr-ali-transparent.png", dimensions: "minimum 1200 px tall", transparency: "genuine RGBA transparency", placement: "behind the left side of market-counter.png, visible approximately waist-up" },
  ...[
    ["missMaria", "miss-maria-transparent.png"],
    ["auntieJoy", "auntie-joy-transparent.png"],
    ["coachDevon", "coach-devon-transparent.png"],
    ["mrThomas", "mr-thomas-transparent.png"],
    ["msLeelaMaharaj", "ms-leela-maharaj-transparent.png"],
  ].map(([role, filename]) => ({
    role,
    filename,
    dimensions: "minimum 1200 px tall",
    transparency: "genuine RGBA transparency",
    placement: "opposite the counter in market-cashier-view.png, full figure grounded on the floor",
  })),
] as const;
