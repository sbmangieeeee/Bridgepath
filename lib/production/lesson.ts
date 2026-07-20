import type { LessonPhase } from "./types";

export const LESSON_PHASES: readonly LessonPhase[] = [
  "school-introduction",
  "guided-exercise",
  "community-transition",
  "community-mission",
  "reflection-results",
];

export function nextLessonPhase(current: LessonPhase): LessonPhase | null {
  const index = LESSON_PHASES.indexOf(current);
  return index < 0 || index === LESSON_PHASES.length - 1 ? null : LESSON_PHASES[index + 1];
}

export function previousLessonPhase(current: LessonPhase): LessonPhase | null {
  const index = LESSON_PHASES.indexOf(current);
  return index <= 0 ? null : LESSON_PHASES[index - 1];
}
