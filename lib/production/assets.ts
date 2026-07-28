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
  | "marketCashierRegister"
  | "msLeela"
  | "mrKareem"
  | "mrAli"
  | "auntieJoy"
  | "coachDevon"
  | "msAlana"
  | "rice"
  | "flour"
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
  marketCashierRegister: { role: "marketCashierRegister", runtimePath: "/assets/foregrounds/corner-shop-register-cashier-view.png", sourcePath: "design/approved/scene-designer/market/corner-shop-register-cashier-view-transparent.png", description: "Transparent cashier-view register foreground" },
  msLeela: { role: "msLeela", runtimePath: "/assets/characters/mentors/ms-leela-maharaj.png", sourcePath: "design/approved/scene-designer/mentors/ms-leela-maharaj-source.png", description: "Transparent Ms. Leela mentor layer" },
  mrKareem: { role: "mrKareem", runtimePath: "/assets/characters/mentors/mr-kareem-joseph.png", sourcePath: "design/approved/scene-designer/mentors/mr-kareem-joseph-source.png", description: "Transparent Mr. Kareem Joseph mentor layer" },
  mrAli: { role: "mrAli", runtimePath: "/assets/characters/mentors/mr-ali.png", sourcePath: "design/approved/scene-designer/mentors/mr-ali-source.png", description: "Transparent Mr. Ali shopkeeper layer" },
  auntieJoy: { role: "auntieJoy", runtimePath: "/assets/characters/mentors/auntie-joy.png", sourcePath: "design/approved/scene-designer/mentors/auntie-joy-source.png", description: "Transparent Auntie Joy customer layer" },
  coachDevon: { role: "coachDevon", runtimePath: "/assets/characters/mentors/coach-devon.png", sourcePath: "design/approved/scene-designer/mentors/coach-devon-source.png", description: "Transparent Coach Devon mentor layer" },
  msAlana: { role: "msAlana", runtimePath: "/assets/characters/mentors/ms-alana-pierre.png", sourcePath: "design/approved/scene-designer/mentors/ms-alana-pierre-source.png", description: "Transparent Ms. Alana Pierre mentor layer" },
  rice: { role: "rice", runtimePath: "/assets/products/rice.png", sourcePath: "design/approved/scene-designer/market/products/rice-source.png", description: "Transparent interactive rice product" },
  flour: { role: "flour", runtimePath: "/assets/products/flour.png", sourcePath: "design/approved/scene-designer/market/products/flour-source.png", description: "Transparent interactive flour product" },
  explorers: { role: "explorers", runtimePath: "/niko-zuri-v2.png", sourcePath: "public/niko-zuri-v2.png", description: "Transparent Niko and Zuri pair" },
} as const;

export const PENDING_MARKET_CHARACTER_ASSETS = [
  { role: "missMaria", filename: "miss-maria-source.png", dimensions: "1024 × 1536 source export", transparency: "flat chroma RGB source suitable for a verified RGBA runtime derivative", placement: "opposite the cashier-view register, full figure grounded on the floor" },
  { role: "mrThomas", filename: "mr-thomas-source.png", dimensions: "1024 × 1536 source export", transparency: "flat chroma RGB source suitable for a verified RGBA runtime derivative", placement: "opposite the cashier-view register, full figure grounded on the floor" },
] as const;
