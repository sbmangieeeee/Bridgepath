"use client";

import { useState } from "react";
import { CANONICAL_ASSETS } from "@/lib/production/assets";
import type { MarketStage } from "@/lib/production/market";
import type { Activity } from "@/lib/production/types";
import { CharacterLayer, ExplorerPairLayer } from "./CharacterLayer";
import { SceneFrame } from "./SceneFrame";

export function TeacherLessonStage({ lesson, onContinue }: { lesson: NonNullable<Activity["lesson"]>; onContinue: () => void }) {
  const [replay, setReplay] = useState(0);
  return <section className="visual-stage template-stage classroom-stage" style={{ backgroundImage: `url(${CANONICAL_ASSETS.schoolInstruction.runtimePath})` }} aria-labelledby="teacher-stage-title">
    <CharacterLayer name="Ms. Leela" position="left" />
    <div className="teaching-board" key={replay}>
      <p className="stage-kicker">{lesson.topic}</p>
      <h2 id="teacher-stage-title">{lesson.equation}</h2>
      <div className="math-demo"><p><strong>Estimate:</strong> {lesson.estimate}</p><p><strong>Exact total:</strong> {lesson.exactTotal}</p><p><strong>Inverse check:</strong> {lesson.inverseCheck}</p></div>
    </div>
    <div className="template-controls teacher-template-controls"><button className="template-replay" onClick={() => setReplay((value) => value + 1)}>Replay</button><button className="template-continue" onClick={onContinue}>Continue</button></div>
  </section>;
}

export function NotebookStage({ onContinue }: { onContinue: () => void }) {
  const [estimate, setEstimate] = useState("");
  const [exact, setExact] = useState("");
  const [hint, setHint] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [checkedCorrect, setCheckedCorrect] = useState(false);
  const correct = Number(exact) === 21 && Number(estimate) >= 18 && Number(estimate) <= 22;
  function check() {
    if (!estimate || !exact) setFeedback("Add an estimate and an exact total before checking.");
    else if (Number(exact) !== 21) setFeedback("Your exact total needs another look. Make 20 from 14 + 6, then add the 1 left over.");
    else if (Number(estimate) < 18 || Number(estimate) > 22) setFeedback("Your exact total is right. Try an estimate close to 14 + 7 before continuing.");
    else { setFeedback("That works. Your estimate is reasonable and the exact total is $21."); setCheckedCorrect(true); }
  }
  return <section className="visual-stage template-stage notebook-stage" style={{ backgroundImage: `url(${CANONICAL_ASSETS.classChallenge.runtimePath})` }} aria-labelledby="notebook-title">
    <div className="notebook-paper"><p className="stage-kicker">Class Challenge</p><h2 id="notebook-title">$14 + $7</h2><p>Estimate the total, then find the exact amount.</p>
      <div className="answer-fields"><label>Estimate ($)<input inputMode="numeric" value={estimate} onChange={(event) => { setEstimate(event.target.value); setCheckedCorrect(false); }} /></label><label>Exact total ($)<input inputMode="numeric" value={exact} onChange={(event) => { setExact(event.target.value); setCheckedCorrect(false); }} /></label></div>
      {hint && <p className="hint-box">Try splitting $7 into $6 and $1. What happens when $14 gets $6 more?</p>}
      <p className="feedback" aria-live="polite">{feedback}</p>
    </div>
    <div className="template-controls challenge-template-controls"><button className="template-hint" onClick={() => setHint(true)}>Hint</button>{checkedCorrect && correct ? <button className="template-check primary" onClick={onContinue}>Continue</button> : <button className="template-check" onClick={check}>Check answer</button>}</div>
  </section>;
}

export function CommunityTransitionStage({ onGoBack, onContinue }: { onGoBack: () => void; onContinue: () => void }) {
  return <section className="visual-stage mission-choice-stage" style={{ backgroundImage: `url(${CANONICAL_ASSETS.classroom.runtimePath})` }} aria-labelledby="transition-title">
    <ExplorerPairLayer />
    <div className="mission-choice-copy"><h2 id="transition-title">Would you like to go back to class, or are you ready for a mission?</h2><div className="mission-choice-actions"><button onClick={onGoBack}>Go back to class</button><button className="primary" onClick={onContinue}>Start mission</button></div></div>
  </section>;
}

export function CommunityMissionStage({ onContinue }: { onContinue: () => void }) {
  const [marketStage, setMarketStage] = useState<MarketStage>("introduction");

  if (marketStage === "introduction") {
    return <section className="market-mission-stage" aria-labelledby="mission-title" data-market-stage={marketStage}>
      <SceneFrame
        scene="introduction"
        background={CANONICAL_ASSETS.marketEnvironmentStructure}
        foreground={CANONICAL_ASSETS.marketCounter}
        overlay={<section className="market-dialogue-overlay">
          <p className="stage-kicker">Corner Shop Challenge</p>
          <h2 id="mission-title">Corner Shop introduction</h2>
          <button className="primary" onClick={() => setMarketStage("child-handoff")}>View child handoff</button>
        </section>}
      />
    </section>;
  }

  if (marketStage === "child-handoff") {
    return <section className="market-mission-stage" aria-labelledby="mission-title" data-market-stage={marketStage}>
      <SceneFrame
        scene="child-handoff"
        background={CANONICAL_ASSETS.marketEnvironmentStructure}
        foreground={CANONICAL_ASSETS.marketCounterChildView}
        overlay={<section className="market-dialogue-overlay">
          <p className="stage-kicker">Corner Shop Challenge</p>
          <h2 id="mission-title">Child handoff view</h2>
          <button className="primary" onClick={() => setMarketStage("serving-customer")}>View cashier position</button>
        </section>}
      />
    </section>;
  }

  return <section className="market-mission-stage" aria-labelledby="mission-title" data-market-stage={marketStage}>
    <SceneFrame
      scene="cashier"
      background={CANONICAL_ASSETS.marketCashierView}
      foreground={CANONICAL_ASSETS.marketCashierRegister}
      overlay={<section className="market-dialogue-overlay">
        <p className="stage-kicker">Corner Shop Challenge</p>
        <h2 id="mission-title">Cashier view</h2>
        <button className="primary" onClick={onContinue}>Finish composition preview</button>
      </section>}
    />
  </section>;
}

export function ReflectionStage({ onReturn }: { onReturn: () => void }) {
  return <section className="visual-stage reflection-stage" aria-labelledby="reflection-title"><p className="celebration-mark" aria-hidden="true">✓</p><h2 id="reflection-title">Mission complete!</h2><p>You completed the Corner Shop composition preview.</p><div className="results-action"><button className="primary" onClick={onReturn}>Back to Arouca Groove</button></div></section>;
}
