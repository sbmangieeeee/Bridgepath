import { describe, expect, it } from "vitest";
import { AROUCA_GROOVE, AROUCA_GROOVE_STOPS, KARINA } from "./arouca-groove";

describe("Arouca Groove definition", () => {
  it("belongs to Karina and contains the exact ordered 18 approved stops", () => {
    expect(KARINA.name).toBe("Karina");
    expect(AROUCA_GROOVE.name).toBe("Arouca Groove");
    expect(AROUCA_GROOVE.countryId).toBe(KARINA.id);
    expect(AROUCA_GROOVE_STOPS).toHaveLength(18);
    expect(AROUCA_GROOVE_STOPS.map(({ order, name }) => [order, name])).toEqual([
      [1, "The Grand Library Book Hunt"], [2, "The Harbour Storehouse"], [3, "The Kite-Maker's Yard"], [4, "The Parcel Post Mystery"], [5, "The Corner Shop Challenge"], [6, "The Busy Delivery Depot"], [7, "The Big Bakehouse"], [8, "The Tailor's Loft"], [9, "The Builders' Yard"], [10, "The Mas Camp"], [11, "The Maxi Route Adventure"], [12, "The Playground Project"], [13, "The Farmers' Market"], [14, "Water Park Adventure"], [15, "Sports Day at the Savannah"], [16, "The Mangrove Count"], [17, "The Community Radio Station"], [18, "The Grand Community Fair"],
    ]);
  });
});
