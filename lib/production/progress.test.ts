import { describe, expect, it } from "vitest";
import { calculateProgress, EMPTY_PROGRESS } from "./progress";

describe("calculateProgress", () => {
  it("deduplicates completed stops and caps progress at 100 percent", () => {
    expect(calculateProgress({ ...EMPTY_PROGRESS, completedStopIds: ["one", "one", "two"] }, 18)).toEqual({ completed: 2, total: 18, percent: 11 });
    expect(calculateProgress({ ...EMPTY_PROGRESS, completedStopIds: ["one", "two"] }, 1).percent).toBe(100);
  });
});
