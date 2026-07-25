"use client";

import { useState } from "react";
import { CANONICAL_ASSETS, PENDING_MARKET_CHARACTER_ASSETS } from "@/lib/production/assets";
import { MARKET_CUSTOMERS, type MarketStage } from "@/lib/production/market";
import type { Activity } from "@/lib/production/types";
import { CharacterLayer, ExplorerPairLayer } from "./CharacterLayer";

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
  const [activeCustomerIndex] = useState(0);
  const activeCustomer = MARKET_CUSTOMERS[activeCustomerIndex];
  const background = marketStage === "serving-customer" ? CANONICAL_ASSETS.marketCashierView : CANONICAL_ASSETS.marketEnvironmentStructure;
  const counter = marketStage === "introduction" ? CANONICAL_ASSETS.marketCounter : CANONICAL_ASSETS.marketCounterChildView;
  const mrAliRequirement = PENDING_MARKET_CHARACTER_ASSETS[0];
  const missingCustomers = PENDING_MARKET_CHARACTER_ASSETS.slice(1);

  return <section className="market-mission-stage" aria-labelledby="mission-title" data-market-stage={marketStage}>
    <div className="market-scene-frame">
      {/* Approved full-scene art must preserve its source aspect ratio rather than use an optimizing crop. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="market-scene-background" src={background.runtimePath} alt="" />
      {marketStage !== "mission-complete" && <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={`market-counter-layer market-counter-${marketStage}`} src={counter.runtimePath} alt="" />
      </>}
      {marketStage === "child-handoff" && <ExplorerPairLayer />}
      <section className="market-dialogue-panel">
        {marketStage === "introduction" && <>
          <p className="stage-kicker">Corner Shop Challenge</p>
          <h2 id="mission-title">Mr. Ali needs help serving customers</h2>
          <p>Niko and Zuri are ready to take over the counter.</p>
          <p className="asset-status" role="status">Mr. Ali’s approved transparent character layer is pending: <code>{mrAliRequirement.filename}</code>.</p>
          <button className="primary" onClick={() => setMarketStage("child-handoff")}>Take over the counter</button>
        </>}
        {marketStage === "child-handoff" && <>
          <p className="stage-kicker">Counter handoff</p>
          <h2 id="mission-title">Niko and Zuri are ready</h2>
          <p>They move behind the counter and get ready to serve.</p>
          <button className="primary" onClick={() => setMarketStage("serving-customer")}>Serve first customer</button>
        </>}
        {marketStage === "serving-customer" && <>
          <p className="stage-kicker">Serving customers</p>
          <h2 id="mission-title">Customer {activeCustomerIndex + 1} of {MARKET_CUSTOMERS.length}: {activeCustomer.name}</h2>
          <p>Today’s customers are Miss Maria, Auntie Joy, Coach Devon, Mr. Thomas and Ms. Leela Maharaj.</p>
          <p className="asset-status" role="status">The mentor sequence is ready, but serving is blocked until their approved transparent character layers are supplied.</p>
          <ul className="missing-asset-list">{missingCustomers.map((asset) => <li key={asset.filename}><code>{asset.filename}</code></li>)}</ul>
          <button onClick={() => setMarketStage("child-handoff")}>Back to handoff</button>
        </>}
        {marketStage === "mission-complete" && <>
          <p className="stage-kicker">Corner Shop Challenge</p>
          <h2 id="mission-title">All customers served</h2>
          <p>Niko and Zuri have completed the shift.</p>
          <button className="primary" onClick={onContinue}>See results</button>
        </>}
      </section>
    </div>
  </section>;
}

export function ReflectionStage({ onReturn }: { onReturn: () => void }) {
  return <section className="visual-stage reflection-stage" aria-labelledby="reflection-title"><p className="celebration-mark" aria-hidden="true">✓</p><h2 id="reflection-title">Mission complete!</h2><p>You helped Mr. Ali check the order.</p><ul><li>Estimated first</li><li>Found the exact total</li><li>Checked the change</li></ul><div className="results-action"><button className="primary" onClick={onReturn}>Back to Arouca Groove</button></div></section>;
}
