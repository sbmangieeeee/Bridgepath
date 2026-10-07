import { describe, expect, it } from "vitest";
import { PARALIN, PARALIN_STOPS, CORNER_SHOP_ACTIVITIES, STORYPATH_WORLD } from "./arouca-groove";

describe("Paralin definition", () => {
  it("belongs to Storypath and contains the exact ordered 18 approved stops", () => {
    expect(STORYPATH_WORLD.name).toBe("Storypath");
    expect(PARALIN.name).toBe("Paralin");
    expect(PARALIN.countryId).toBe(STORYPATH_WORLD.id);
    expect(PARALIN_STOPS).toHaveLength(18);
    expect(PARALIN_STOPS.map(({ order, name }) => [order, name])).toEqual([
      [1, "The Grand Library Book Hunt"], [2, "The Harbour Storehouse"], [3, "The Kite-Maker's Yard"], [4, "The Parcel Post Mystery"], [5, "The Corner Shop Challenge"], [6, "The Busy Delivery Depot"], [7, "The Big Bakehouse"], [8, "The Tailor's Loft"], [9, "The Builders' Yard"], [10, "The Mas Camp"], [11, "The Maxi Route Adventure"], [12, "The Playground Project"], [13, "The Farmers' Market"], [14, "Water Park Adventure"], [15, "Sports Day at the Savannah"], [16, "The Mangrove Count"], [17, "The Community Radio Station"], [18, "The Grand Community Fair"],
    ]);
  });

  it("uses the approved child-facing lesson phase labels", () => {
    expect(CORNER_SHOP_ACTIVITIES.map(({ title }) => title)).toEqual([
      "Teacher lesson",
      "Notebook exercise",
      "Journey into the community",
      "Community mission",
      "Reflection and results",
    ]);
  });
});
