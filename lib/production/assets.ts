export type CanonicalAssetRole =
  | "home"
  | "country"
  | "town"
  | "schoolInstruction"
  | "classChallenge"
  | "classroom"
  | "market"
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
  market: { role: "market", runtimePath: "/assets/environments/market-environment.png", sourcePath: "public/assets/environments/market-environment.png", description: "Corner Shop environment" },
  explorers: { role: "explorers", runtimePath: "/niko-zuri-v2.png", sourcePath: "public/niko-zuri-v2.png", description: "Transparent Niko and Zuri pair" },
} as const;
