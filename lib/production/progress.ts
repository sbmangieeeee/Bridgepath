import type { Progress } from "./types";

export const EMPTY_PROGRESS: Progress = {
  completedStopIds: [],
  activeStopId: null,
  activePhase: null,
  evidence: [],
  updatedAt: null,
};

export function calculateProgress(progress: Progress, totalStops: number) {
  const completed = new Set(progress.completedStopIds).size;
  return {
    completed,
    total: totalStops,
    percent: totalStops <= 0 ? 0 : Math.min(100, Math.round((completed / totalStops) * 100)),
  };
}
