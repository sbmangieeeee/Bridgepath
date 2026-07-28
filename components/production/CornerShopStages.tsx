"use client";

import { useState } from "react";
import { CANONICAL_ASSETS } from "@/lib/production/assets";
import type { MarketStage } from "@/lib/production/market";
import type { Activity } from "@/lib/production/types";
import { CharacterLayer, ExplorerPairLayer } from "./CharacterLayer";
import { anchorStyle, CORNER_SHOP_ANCHORS, CORNER_SHOP_ASSET_METADATA, SceneFrame, visibleAssetStyle } from "./SceneFrame";

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

type CustomerPhase = "entering" | "shopping" | "incorrect" | "correct" | "departing" | "ready-next";

export function CommunityMissionStage({ onContinue }: { onContinue: () => void }) {
  const [marketStage, setMarketStage] = useState<MarketStage>("introduction");
  const [customerPhase, setCustomerPhase] = useState<CustomerPhase>("entering");
  const [productNotice, setProductNotice] = useState("");

  if (marketStage === "introduction") {
    return <section className="market-mission-stage" aria-labelledby="mission-title" data-market-stage={marketStage}>
      <SceneFrame scene="corner-shop-entrance" background={CANONICAL_ASSETS.marketEnvironmentStructure}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="scene-character scene-shopkeeper" style={visibleAssetStyle(CORNER_SHOP_ASSET_METADATA.mrAli, CORNER_SHOP_ANCHORS.entrance.shopkeeper, "height")} src={CANONICAL_ASSETS.mrAli.runtimePath} alt="Mr. Ali" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="scene-anchored-layer entrance-counter" style={visibleAssetStyle(CORNER_SHOP_ASSET_METADATA.entranceCounter, CORNER_SHOP_ANCHORS.entrance.checkout, "width")} src={CANONICAL_ASSETS.marketCounter.runtimePath} alt="" />
        <section className="market-activity-panel market-introduction-dialogue">
          <p className="stage-kicker">Corner Shop Challenge</p>
          <h2 id="mission-title">Mr. Ali needs help serving customers</h2>
          <p>“Could you check Auntie Joy’s order while I organise the shelves?”</p>
          <button className="primary" onClick={() => setMarketStage("serving-customer")}>Help Mr. Ali</button>
        </section>
      </SceneFrame>
    </section>;
  }

  if (marketStage === "mission-complete") {
    return <section className="visual-stage reflection-stage" aria-labelledby="mission-title">
      <p className="celebration-mark" aria-hidden="true">✓</p>
      <h2 id="mission-title">Customer served!</h2>
      <p>The Corner Shop scene is ready for the next approved customer.</p>
      <button className="primary" onClick={onContinue}>See results</button>
    </section>;
  }

  const productsVisible = ["shopping", "incorrect", "correct"].includes(customerPhase);
  return <section className="market-mission-stage" aria-labelledby="mission-title" data-market-stage={marketStage}>
    <SceneFrame scene="corner-shop-gameplay" background={CANONICAL_ASSETS.marketCashierView}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`scene-character scene-customer customer-${customerPhase}`}
        style={anchorStyle(CORNER_SHOP_ANCHORS.gameplay.customer)}
        src={CANONICAL_ASSETS.auntieJoy.runtimePath}
        alt="Auntie Joy"
        onAnimationEnd={() => {
          if (customerPhase === "entering") setCustomerPhase("shopping");
          if (customerPhase === "departing") setCustomerPhase("ready-next");
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="scene-anchored-layer cashier-counter-layer" style={visibleAssetStyle(CORNER_SHOP_ASSET_METADATA.childViewCounter, CORNER_SHOP_ANCHORS.gameplay.counter, "width")} src={CANONICAL_ASSETS.marketCounterChildView.runtimePath} alt="" />
      {productsVisible && <div className="checkout-products" aria-label="Auntie Joy’s products">
        <button className="checkout-product" style={anchorStyle(CORNER_SHOP_ANCHORS.gameplay.rice)} onClick={() => setProductNotice("Rice costs $12.")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={CANONICAL_ASSETS.rice.runtimePath} alt="" /><span>Rice</span><strong>$12</strong>
        </button>
        <button className="checkout-product" style={anchorStyle(CORNER_SHOP_ANCHORS.gameplay.flour)} onClick={() => setProductNotice("Flour costs $8.")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={CANONICAL_ASSETS.flour.runtimePath} alt="" /><span>Flour</span><strong>$8</strong>
        </button>
      </div>}
      <section className="market-activity-panel gameplay-activity">
        <p className="stage-kicker">Customer 1: Auntie Joy</p>
        <h2 id="mission-title">{customerPhase === "ready-next" ? "Ready for the next customer" : "What is the order total?"}</h2>
        {customerPhase === "entering" && <p role="status">Auntie Joy is walking to the counter…</p>}
        {["shopping", "incorrect", "correct"].includes(customerPhase) && <>
          <p>Rice is $12 and flour is $8.</p>
          <div className="market-answer-options" aria-label="Order total answers">
            {[18, 20, 22].map((answer) => <button key={answer} onClick={() => setCustomerPhase(answer === 20 ? "correct" : "incorrect")}>${answer}</button>)}
          </div>
          <p className="product-notice" aria-live="polite">{productNotice}</p>
        </>}
        {customerPhase === "incorrect" && <p className="market-feedback incorrect" role="alert">Not quite. Start at $12 and count on $8 more.</p>}
        {customerPhase === "correct" && <div className="market-feedback correct" role="status"><span aria-hidden="true">✓</span> Correct — $12 + $8 = $20.<button className="primary" onClick={() => setCustomerPhase("departing")}>Complete transaction</button></div>}
        {customerPhase === "departing" && <p role="status">Auntie Joy’s products are cleared. She is leaving the counter.</p>}
        {customerPhase === "ready-next" && <>
          <p>Auntie Joy’s products are cleared and the checkout is ready.</p>
          <p className="asset-status">Miss Maria and Mr. Thomas still need approved transparent source assets.</p>
          <button className="primary" onClick={() => setMarketStage("mission-complete")}>Finish transaction preview</button>
        </>}
      </section>
    </SceneFrame>
  </section>;
}

export function ReflectionStage({ onReturn }: { onReturn: () => void }) {
  return <section className="visual-stage reflection-stage" aria-labelledby="reflection-title"><p className="celebration-mark" aria-hidden="true">✓</p><h2 id="reflection-title">Mission complete!</h2><p>You helped Mr. Ali check the order.</p><ul><li>Estimated first</li><li>Found the exact total</li><li>Checked the change</li></ul><div className="results-action"><button className="primary" onClick={onReturn}>Back to Arouca Groove</button></div></section>;
}
