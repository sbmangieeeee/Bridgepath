"use client";

import Link from "next/link";
import { useState } from "react";
import { LESSON_PHASES, nextLessonPhase, previousLessonPhase } from "@/lib/production/lesson";
import { EMPTY_PROGRESS } from "@/lib/production/progress";
import { LocalStorageProgressAdapter } from "@/lib/production/storage";
import type { Activity, EvidenceEvent, LessonPhase } from "@/lib/production/types";
import { CommunityMissionStage, CommunityTransitionStage, NotebookStage, ReflectionStage, TeacherLessonStage } from "./CornerShopStages";

export function LessonRunner({ title, activities }: { title: string; activities: readonly Activity[] }) {
  const [phase, setPhase] = useState<LessonPhase>(LESSON_PHASES[0]);
  const [hudNotice, setHudNotice] = useState("");
  const activity = activities.find((item) => item.phase === phase);
  const next = nextLessonPhase(phase);
  const previous = previousLessonPhase(phase);

  if (!activity) return <p role="alert">This lesson phase has not been configured.</p>;

  return <section className="lesson-runner" aria-labelledby="lesson-title">
    <h1 className="sr-only" id="lesson-title">{title}</h1>
    {phase !== "reflection-results" && <nav className="lesson-hud" aria-label="Lesson controls">
      {previous
        ? <button className="phase-back" onClick={() => setPhase(previous)} aria-label={`Back to ${activities.find((entry) => entry.phase === previous)?.title}`}>←</button>
        : <Link className="phase-back" href="/arouca-groove" aria-label="Back to Arouca Groove">←</Link>}
      <Link href="/" aria-label="Bridgepath home">⌂</Link>
      <button type="button" aria-label="Help" onClick={() => setHudNotice("Use the controls in the illustrated scene to continue.")}>?</button>
      <button type="button" aria-label="Settings" onClick={() => setHudNotice("Settings are coming later.")}>⚙</button>
    </nav>}
    <p className="lesson-hud-notice" aria-live="polite">{hudNotice}</p>
    {phase === "school-introduction" && <TeacherLessonStage onContinue={() => advance("introduced")} />}
    {phase === "guided-exercise" && <NotebookStage onContinue={() => advance("guided")} />}
    {phase === "community-transition" && <CommunityTransitionStage onGoBack={() => setPhase("school-introduction")} onContinue={() => next && setPhase(next)} />}
    {phase === "community-mission" && <CommunityMissionStage onContinue={() => advance("applied")} />}
    {phase === "reflection-results" && <ReflectionStage onReturn={completeAndReturn} />}
  </section>;

  function advance(stage: EvidenceEvent["stage"]) {
    const currentActivity = activities.find((item) => item.phase === phase);
    if (!currentActivity) return;
    const adapter = new LocalStorageProgressAdapter(window.localStorage);
    const current = adapter.load();
    const event: EvidenceEvent = { id: crypto.randomUUID(), stopId: "arouca-groove-stop-5", activityId: currentActivity.id, phase, stage, outcome: "completed", occurredAt: new Date().toISOString() };
    adapter.save({ ...current, activeStopId: "arouca-groove-stop-5", activePhase: next, evidence: [...current.evidence, event], updatedAt: event.occurredAt });
    if (next) setPhase(next);
  }

  function completeAndReturn() {
    const adapter = new LocalStorageProgressAdapter(window.localStorage);
    const current = adapter.load();
    adapter.save({ ...EMPTY_PROGRESS, ...current, completedStopIds: [...new Set([...current.completedStopIds, "arouca-groove-stop-5"])], activeStopId: null, activePhase: null, updatedAt: new Date().toISOString() });
    window.location.href = "/arouca-groove";
  }
}
