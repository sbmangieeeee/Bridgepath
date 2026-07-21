"use client";

import { useState } from "react";
import { CANONICAL_ASSETS } from "@/lib/production/assets";
import { CharacterLayer, ExplorerPairLayer } from "./CharacterLayer";

export function TeacherLessonStage({ onContinue }: { onContinue: () => void }) {
  const [replay, setReplay] = useState(0);
  return <section className="visual-stage template-stage classroom-stage" style={{ backgroundImage: `url(${CANONICAL_ASSETS.schoolInstruction.runtimePath})` }} aria-labelledby="teacher-stage-title">
    <CharacterLayer name="Ms. Leela" position="left" />
    <div className="teaching-board" key={replay}>
      <p className="stage-kicker">Estimate first. Then find the exact total.</p>
      <h2 id="teacher-stage-title">$12 + $8</h2>
      <div className="math-demo"><p><strong>Estimate:</strong> $12 is close to $10. $10 + $8 is about <strong>$18</strong>.</p><p><strong>Exact total:</strong> $12 + $8 = <strong>$20</strong>.</p><p><strong>Inverse check:</strong> $20 − $8 = <strong>$12</strong>.</p></div>
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
  const [total, setTotal] = useState("");
  const [change, setChange] = useState("");
  const [feedback, setFeedback] = useState("");
  const correct = Number(total) === 25 && Number(change) === 5;
  function check() {
    if (!total || !change) setFeedback("Enter both the order total and the change.");
    else if (Number(total) !== 25) setFeedback("Check the total first. Combine $12 and $8 to make $20, then add $5.");
    else if (Number(change) < 0) setFeedback("The $30 budget is more than the $25 total, so the change cannot be negative.");
    else if (Number(change) !== 5) setFeedback("The total is correct. Count from $25 up to the $30 budget to find the change.");
    else setFeedback("Order checked: $25 total, within the $30 budget, with $5 change.");
  }
  return <section className="visual-stage market-stage" style={{ backgroundImage: `url(${CANONICAL_ASSETS.market.runtimePath})` }} aria-labelledby="mission-title">
    <CharacterLayer name="Mr. Ali" position="left" /><ExplorerPairLayer />
    <section className="cash-register" aria-label="Corner Shop cash register">
      <div className="register-display"><p className="stage-kicker">Mr. Ali’s order</p><h2 id="mission-title">Check the order</h2><p>Budget: <strong>$30</strong></p><ul className="product-list"><li><span>Rice</span><strong>$12</strong></li><li><span>Fruit</span><strong>$8</strong></li><li><span>Juice</span><strong>$5</strong></li></ul>
        <div className="answer-fields"><label>Order total ($)<input inputMode="numeric" value={total} onChange={(event) => setTotal(event.target.value)} /></label><label>Change from $30 ($)<input inputMode="numeric" value={change} onChange={(event) => setChange(event.target.value)} /></label></div>
        <p className="feedback" aria-live="polite">{feedback}</p>
      </div>
      <div className="register-keypad" aria-hidden="true">{[7,8,9,4,5,6,1,2,3,0].map((key) => <i key={key}>{key}</i>)}</div>
      <div className="register-controls"><button onClick={check}>Check</button><button className="primary" disabled={!correct} onClick={onContinue}>Finish</button></div>
    </section>
  </section>;
}

export function ReflectionStage({ onReturn }: { onReturn: () => void }) {
  return <section className="visual-stage reflection-stage" aria-labelledby="reflection-title"><p className="celebration-mark" aria-hidden="true">✓</p><h2 id="reflection-title">Mission complete!</h2><p>You helped Mr. Ali check the order.</p><ul><li>Estimated first</li><li>Found the exact total</li><li>Checked the change</li></ul><div className="results-action"><button className="primary" onClick={onReturn}>Back to Arouca Groove</button></div></section>;
}
