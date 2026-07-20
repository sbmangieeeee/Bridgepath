import { describe, expect, it } from "vitest";
import { EMPTY_PROGRESS } from "./progress";
import { LocalStorageProgressAdapter } from "./storage";

describe("LocalStorageProgressAdapter", () => {
  it("saves, loads, and clears progress behind the storage interface", () => {
    const adapter = new LocalStorageProgressAdapter(localStorage, "test-progress");
    const progress = { ...EMPTY_PROGRESS, completedStopIds: ["stop-1"], updatedAt: "2026-07-20T00:00:00.000Z" };
    adapter.save(progress);
    expect(adapter.load()).toEqual(progress);
    adapter.clear();
    expect(adapter.load()).toEqual(EMPTY_PROGRESS);
  });
});
