import { describe, expect, it } from "vitest";
import { LESSON_PHASES, nextLessonPhase, previousLessonPhase } from "./lesson";

describe("lesson phase progression", () => {
  it("uses the approved ordered five-phase flow", () => {
    expect(LESSON_PHASES).toEqual(["school-introduction", "guided-exercise", "community-transition", "community-mission", "reflection-results"]);
    expect(nextLessonPhase("school-introduction")).toBe("guided-exercise");
    expect(nextLessonPhase("reflection-results")).toBeNull();
    expect(previousLessonPhase("school-introduction")).toBeNull();
  });
});
