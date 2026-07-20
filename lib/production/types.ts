export type LessonPhase =
  | "school-introduction"
  | "guided-exercise"
  | "community-transition"
  | "community-mission"
  | "reflection-results";

export type Activity = {
  id: string;
  phase: LessonPhase;
  title: string;
  placeholder: string;
};

export type EvidenceEvent = {
  id: string;
  stopId: string;
  activityId: string;
  phase: LessonPhase;
  outcome: "completed" | "needs-support";
  occurredAt: string;
};

export type LearningStop = {
  id: string;
  order: number;
  name: string;
  slug: string;
  activities?: readonly Activity[];
};

export type Town = {
  id: string;
  name: string;
  countryId: string;
  stops: readonly LearningStop[];
};

export type Country = {
  id: string;
  name: string;
  towns: readonly Pick<Town, "id" | "name">[];
};

export type Progress = {
  completedStopIds: string[];
  activeStopId: string | null;
  activePhase: LessonPhase | null;
  evidence: EvidenceEvent[];
  updatedAt: string | null;
};
