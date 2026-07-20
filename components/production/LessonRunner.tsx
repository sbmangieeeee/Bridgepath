"use client";

import { useState } from "react";
import { LESSON_PHASES, nextLessonPhase, previousLessonPhase } from "@/lib/production/lesson";
import type { Activity, LessonPhase } from "@/lib/production/types";

export function LessonRunner({ title, activities }: { title: string; activities: readonly Activity[] }) {
  const [phase, setPhase] = useState<LessonPhase>(LESSON_PHASES[0]);
  const activity = activities.find((item) => item.phase === phase);
  const next = nextLessonPhase(phase);
  const previous = previousLessonPhase(phase);

  if (!activity) return <p role="alert">This lesson phase has not been configured.</p>;

  return <section className="lesson-runner" aria-labelledby="lesson-title">
    <p className="production-eyebrow">Arouca Groove · Stop 5 of 18</p>
    <h1 id="lesson-title">{title}</h1>
    <ol className="phase-list" aria-label="Lesson phases">
      {LESSON_PHASES.map((item, index) => <li key={item} aria-current={item === phase ? "step" : undefined}>{index + 1}. {activities.find((entry) => entry.phase === item)?.title}</li>)}
    </ol>
    <article className="phase-card" aria-live="polite">
      <p>Phase {LESSON_PHASES.indexOf(phase) + 1} of {LESSON_PHASES.length}</p>
      <h2>{activity.title}</h2>
      <p>{activity.placeholder}</p>
    </article>
    <nav className="runner-actions" aria-label="Lesson phase controls">
      <button disabled={!previous} onClick={() => previous && setPhase(previous)}>Previous phase</button>
      <button disabled={!next} onClick={() => next && setPhase(next)}>{next ? "Next phase" : "Lesson placeholder complete"}</button>
    </nav>
  </section>;
}
