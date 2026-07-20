import type { Activity, Country, LearningStop, Town } from "./types";

export const KARINA: Country = {
  id: "karina",
  name: "Karina",
  towns: [
    { id: "arouca-groove", name: "Arouca Groove" },
    { id: "gasparillo", name: "Gasparillo" },
    { id: "lopinot", name: "Lopinot" },
    { id: "barataria", name: "Barataria" },
    { id: "masara", name: "Masara" },
    { id: "chaconia", name: "Chaconia" },
  ],
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

export const AROUCA_GROOVE_STOPS: readonly LearningStop[] = STOP_NAMES.map((name, index) => ({
  id: `arouca-groove-stop-${index + 1}`,
  order: index + 1,
  name,
  slug: slugify(name),
}));

export const CORNER_SHOP_ACTIVITIES: readonly Activity[] = [
  { id: "corner-shop-school-introduction", phase: "school-introduction", title: "Teacher lesson", placeholder: "Placeholder: an approved teacher will introduce and teach the mathematics concept here." },
  { id: "corner-shop-guided-exercise", phase: "guided-exercise", title: "Notebook exercise", placeholder: "Placeholder: the learner will complete an approved guided exercise in their notebook here." },
  { id: "corner-shop-community-transition", phase: "community-transition", title: "Journey to the mission", placeholder: "Placeholder: the approved transition will connect the school learning to a real need in Arouca Groove." },
  { id: "corner-shop-community-mission", phase: "community-mission", title: "Mentor mission", placeholder: "Placeholder: the learner will meet the approved mentor and apply the concept in a practical mission here." },
  { id: "corner-shop-reflection-results", phase: "reflection-results", title: "Reflection and results", placeholder: "Placeholder: approved reflection and results content will be added here." },
];

export const AROUCA_GROOVE: Town = {
  id: "arouca-groove",
  name: "Arouca Groove",
  countryId: KARINA.id,
  stops: AROUCA_GROOVE_STOPS.map((stop) => stop.order === 5 ? { ...stop, activities: CORNER_SHOP_ACTIVITIES } : stop),
};
