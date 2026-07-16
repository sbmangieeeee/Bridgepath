import { describe, expect, it } from "vitest";
import { coveragePercent, deriveLearningStatus, type Evidence } from "./learning";

const event = (partial: Partial<Evidence>): Evidence => ({
  id: crypto.randomUUID(),
  stage: "guided",
  correct: true,
  supportUsed: false,
  context: "exact-payment",
  occurredAt: new Date().toISOString(),
  ...partial,
});

describe("deriveLearningStatus", () => {
  it("does not mark mastery from one successful attempt", () => {
    expect(deriveLearningStatus([event({ stage: "applied" })])).toBe("applied");
  });

  it("requires three independent successes in two contexts for mastery", () => {
    expect(deriveLearningStatus([
      event({ stage: "applied", context: "budget" }),
      event({ stage: "applied", context: "budget" }),
      event({ stage: "applied", context: "change" }),
    ])).toBe("mastered");
  });

  it("excludes supported attempts from mastery evidence", () => {
    expect(deriveLearningStatus([
      event({ stage: "applied", context: "budget" }),
      event({ stage: "applied", context: "change" }),
      event({ stage: "applied", context: "change", supportUsed: true }),
    ])).toBe("applied");
  });
});

describe("coveragePercent", () => {
  it("derives bounded path coverage", () => {
    expect(coveragePercent(3)).toBe(50);
    expect(coveragePercent(9)).toBe(100);
  });
});
