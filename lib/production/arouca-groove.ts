import type { Activity, Country, LearningStop, Town } from "./types";

export const STORYPATH_WORLD: Country = {
  id: "storypath-world",
  name: "Storypath",
  towns: [{ id: "paralin", name: "Paralin" }],
};

const STOP_NAMES = [
  "The Grand Library Book Hunt",
  "The Harbour Storehouse",
  "The Kite-Maker's Yard",
  "The Parcel Post Mystery",
  "The Corner Shop Challenge",
  "The Busy Delivery Depot",
  "The Big Bakehouse",
  "The Tailor's Loft",
  "The Builders' Yard",
  "The Mas Camp",
  "The Maxi Route Adventure",
  "The Playground Project",
  "The Farmers' Market",
  "Water Park Adventure",
  "Sports Day at the Savannah",
  "The Mangrove Count",
  "The Community Radio Station",
  "The Grand Community Fair",
] as const;

const slugify = (name: string) => name.toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const PARALIN_STOPS: readonly LearningStop[] = STOP_NAMES.map((name, index) => ({
  id: `paralin-stop-${index + 1}`,
  order: index + 1,
  name,
  slug: slugify(name),
}));

export const CORNER_SHOP_ACTIVITIES: readonly Activity[] = [
  { id: "corner-shop-school-introduction", phase: "school-introduction", title: "Teacher lesson", placeholder: "Meet your teacher and get ready to learn." },
  { id: "corner-shop-guided-exercise", phase: "guided-exercise", title: "Notebook exercise", placeholder: "Open your notebook and get ready to practise." },
  { id: "corner-shop-community-transition", phase: "community-transition", title: "Journey into the community", placeholder: "Get ready to carry what you learned into Paralin." },
  { id: "corner-shop-community-mission", phase: "community-mission", title: "Community mission", placeholder: "Meet your community mentor and get ready for the mission." },
  { id: "corner-shop-reflection-results", phase: "reflection-results", title: "Reflection and results", placeholder: "Look back on your journey and see your results." },
];

export const PARALIN: Town = {
  id: "paralin",
  name: "Paralin",
  countryId: STORYPATH_WORLD.id,
  stops: PARALIN_STOPS.map((stop) => stop.order === 5 ? { ...stop, activities: CORNER_SHOP_ACTIVITIES } : stop),
};
