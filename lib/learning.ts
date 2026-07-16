export type EvidenceStage = "introduced" | "guided" | "practised" | "applied" | "mastered";

export type Evidence = {
  id: string;
  stage: EvidenceStage;
  correct: boolean;
  supportUsed: boolean;
  context: string;
  occurredAt: string;
};

export function deriveLearningStatus(evidence: Evidence[]): EvidenceStage {
  if (!evidence.length) return "introduced";
  const independent = evidence.filter((event) => event.correct && !event.supportUsed);
  const contexts = new Set(independent.map((event) => event.context));
  if (independent.length >= 3 && contexts.size >= 2) return "mastered";
  if (independent.some((event) => event.stage === "applied")) return "applied";
  if (evidence.some((event) => event.stage === "practised")) return "practised";
  if (evidence.some((event) => event.stage === "guided")) return "guided";
  return "introduced";
}

export function coveragePercent(completedStops: number, totalStops = 6) {
  return Math.min(100, Math.round((completedStops / totalStops) * 100));
}
