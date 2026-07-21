"use client";
/* eslint-disable @next/next/no-img-element -- transparent character art is deliberately positioned as scene decoration */

import { useEffect, useMemo, useState } from "react";
import { coveragePercent, deriveLearningStatus, type EvidenceStage } from "@/lib/learning";
import { clearState, INITIAL_STATE, loadState, saveState, type BridgepathState, type ChildProfile } from "@/lib/storage";

type Screen = "launch" | "roles" | "parent-setup" | "child-entry" | "dashboard" | "orientation" | "village" | "path" | "lesson" | "results";

type HubDestination = {
  id: "adventure" | "customize" | "minigames" | "achievements" | "parent";
  name: string;
  description: string;
  asset: string;
  state: "active" | "preview" | "adult";
  position: string;
  animation: string;
  previewTitle?: string;
  previewMessage?: string;
};

const HUB_DESTINATIONS: HubDestination[] = [
  { id: "customize", name: "Customize Explorer", description: "Choose your explorer's look and travel gear.", asset: "/hub-customize.png", state: "preview", position: "hub-customize", animation: "animate-open", previewTitle: "Customize Explorer", previewMessage: "Soon you’ll be able to choose outfits, colours, and adventure gear that travel with you through Storypath Village." },
  { id: "minigames", name: "Mini-games", description: "Replay quick learning games you have unlocked.", asset: "/hub-minigames.png", state: "preview", position: "hub-minigames", animation: "animate-flags", previewTitle: "Mini-games", previewMessage: "Quick village games will appear here after you discover them in an adventure. They will always connect to something you have learned." },
  { id: "adventure", name: "Adventure", description: "Enter Storypath Village and continue your learning journey.", asset: "/hub-adventure.png", state: "active", position: "hub-adventure", animation: "animate-glow" },
  { id: "achievements", name: "My Achievements", description: "See your own milestones and village badges.", asset: "/hub-achievements.png", state: "preview", position: "hub-achievements", animation: "animate-shimmer", previewTitle: "My Achievements", previewMessage: "Your private board will collect personal bests, completed missions, and village badges. It will not rank you against children outside your family." },
  { id: "parent", name: "Parent Area", description: "Adults can manage profiles, privacy, and learning progress.", asset: "/hub-parent.png", state: "adult", position: "hub-parent", animation: "animate-lantern" },
];

const SYMBOLS = ["🌞", "🥭", "🐢", "⭐", "🌺", "⚽"];
const STOPS = ["A market mystery", "Money in action", "Make the total", "Market rush", "Budget mission", "Village celebration"];
const COINS = [1, 5, 10, 20];

function Button({ children, onClick, variant = "primary", disabled = false, type = "button", ariaLabel }: { children: React.ReactNode; onClick?: () => void; variant?: "primary" | "secondary" | "ghost"; disabled?: boolean; type?: "button" | "submit"; ariaLabel?: string }) {
  return <button className={`button ${variant}`} onClick={onClick} disabled={disabled} type={type} aria-label={ariaLabel}>{children}</button>;
}

export default function BridgepathApp() {
  const [ready, setReady] = useState(false);
  const [state, setState] = useState<BridgepathState>(INITIAL_STATE);
  const [screen, setScreen] = useState<Screen>("launch");

  useEffect(() => {
    const saved = loadState();
    // Browser persistence is the prototype's external store; hydrate it after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) saveState(state);
  }, [state, ready]);

  const activeChild = state.children.find((child) => child.id === state.activeChildId) ?? state.children[0];
  const status = useMemo(() => deriveLearningStatus(state.evidence), [state.evidence]);
  const progress = coveragePercent(state.completedStops);

  function update(next: Partial<BridgepathState>) {
    setState((current) => ({ ...current, ...next, lastActiveAt: new Date().toISOString() }));
  }

  if (!ready) return <main className="loading" aria-live="polite">Opening the path…</main>;

  const common = { state, update, setScreen, activeChild, status, progress };

  return (
    <main className={`app-shell ${activeChild?.reducedMotion ? "reduce-motion" : ""}`}>
      <a className="skip-link" href="#main-content">Skip to activity</a>
      {screen !== "launch" && <header className="topbar">
        <button className="brand" onClick={() => setScreen(state.activeChildId ? "village" : "launch")} aria-label="Bridgepath home">
          <span className="brand-mark" aria-hidden="true">B</span><span>Bridgepath</span>
        </button>
        <div className="top-actions">
          {activeChild && screen !== "roles" && <span className="streak" title="Learning rhythm">🔥 {state.streak} day</span>}
          {state.parentEmail && <button className="text-button" onClick={() => setScreen("dashboard")}>Parent view</button>}
        </div>
      </header>}
      <div id="main-content">
        {screen === "launch" && <Launch setScreen={setScreen} returning={Boolean(state.activeChildId)} hasParent={Boolean(state.parentEmail)} childName={activeChild?.name} />}
        {screen === "roles" && <RoleSelect setScreen={setScreen} hasFamily={state.children.length > 0} />}
        {screen === "parent-setup" && <ParentSetup {...common} />}
        {screen === "child-entry" && <ChildEntry {...common} />}
        {screen === "dashboard" && <Dashboard {...common} setScreen={(next) => { setScreen(next); setState((current) => ({ ...current })); }} onReset={() => { clearState(); setState(INITIAL_STATE); setScreen("launch"); }} />}
        {screen === "orientation" && <Orientation {...common} />}
        {screen === "village" && <Village {...common} />}
        {screen === "path" && <AdventurePath {...common} />}
        {screen === "lesson" && <Lesson {...common} />}
        {screen === "results" && <Results {...common} />}
      </div>
    </main>
  );
}

function Launch({ setScreen, returning, hasParent, childName }: { setScreen: (s: Screen) => void; returning: boolean; hasParent: boolean; childName?: string }) {
  const [preview, setPreview] = useState<HubDestination | null>(null);

  function enter(destination: HubDestination) {
    if (destination.id === "adventure") window.location.assign("/karina");
    else if (destination.id === "parent") setScreen(hasParent ? "dashboard" : "parent-setup");
    else setPreview(destination);
  }

  return (
    <section className="launch-scene" aria-label="Bridgepath Adventures main hub">
      <div className="launch-wash" />
      <div className="launch-title" aria-label="Bridgepath Adventures">
        <span>Bridgepath</span>
        <strong>Adventures</strong>
      </div>
      {returning && <p className="launch-returning">Welcome back, {childName}</p>}
      <div className="hub-paths" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <nav className="hub-destinations" aria-label="Choose an area of Storypath Village">
        {HUB_DESTINATIONS.map((destination) => (
          <button
            key={destination.id}
            className={`hub-destination ${destination.position} ${destination.animation} state-${destination.state}`}
            onClick={() => enter(destination)}
            aria-label={`${destination.name}. ${destination.description}${destination.state === "preview" ? " Preview available." : destination.state === "adult" ? " Adult protected." : ""}`}
          >
            <img src={destination.asset} alt="" />
            <span className="hub-label"><strong>{destination.name}</strong><small>{destination.state === "preview" ? "Preview" : destination.state === "adult" ? "Adult protected" : returning ? "Continue" : "Begin here"}</small></span>
          </button>
        ))}
      </nav>
      <img className="launch-guides" src="/niko-zuri-v2.png" alt="Niko and Zuri welcome you to Storypath Village" />
      <p className="hub-instruction">Choose a path</p>
      {preview && <div className="preview-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setPreview(null); }}><section className="hub-preview" role="dialog" aria-modal="true" aria-labelledby="hub-preview-title"><button className="preview-close" onClick={() => setPreview(null)} aria-label="Close preview">×</button><img src={preview.asset} alt="" /><p className="eyebrow">Coming to Storypath Village</p><h2 id="hub-preview-title">{preview.previewTitle}</h2><p>{preview.previewMessage}</p><Button onClick={() => setPreview(null)}>Back to the village</Button></section></div>}
    </section>
  );
}

function RoleSelect({ setScreen, hasFamily }: { setScreen: (s: Screen) => void; hasFamily: boolean }) {
  return <section className="page centered"><p className="eyebrow">Choose your path</p><h1>Who is exploring today?</h1><p className="lede">Children never need an email. A parent or guardian manages family privacy and profiles.</p><div className="role-grid"><button className="role-card child-card" onClick={() => setScreen(hasFamily ? "child-entry" : "parent-setup")}><span aria-hidden="true">🧭</span><strong>I’m a Child</strong><small>{hasFamily ? "Find my saved adventure" : "Ask a grown-up to set up your path"}</small></button><button className="role-card parent-card" onClick={() => setScreen(hasFamily ? "dashboard" : "parent-setup")}><span aria-hidden="true">🌱</span><strong>I’m a Parent</strong><small>Create profiles and understand learning progress</small></button></div></section>;
}

function ParentSetup({ state, update, setScreen }: Shared) {
  const [step, setStep] = useState(state.consentedAt ? 2 : 0);
  const [email, setEmail] = useState(state.parentEmail);
  const [name, setName] = useState("");
  const [standard, setStandard] = useState<3 | 4 | 5>(3);
  const [avatar, setAvatar] = useState("🦜");
  const [pin, setPin] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);

  function addChild() {
    const child: ChildProfile = { id: crypto.randomUUID(), name: name.trim() || "Explorer", standard, avatar, pin: pin.length === 4 ? pin : ["🌞", "🥭", "🐢", "⭐"], narration: true, reducedMotion: false };
    update({ children: [...state.children, child], activeChildId: child.id });
    setScreen("orientation");
  }

  return <section className="page form-page"><div className="stepper" aria-label={`Step ${step + 1} of 3`}><span className={step >= 0 ? "active" : ""}>Account</span><span className={step >= 1 ? "active" : ""}>Consent</span><span className={step >= 2 ? "active" : ""}>Child</span></div>{step === 0 && <form onSubmit={(e) => { e.preventDefault(); update({ parentEmail: email }); setStep(1); }}><p className="eyebrow">Parent account</p><h1>Start your family path</h1><label>Email address<input type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></label><p className="notice">Prototype mode: email is stored only in this browser. Production email verification and adult verification require approved providers.</p><Button type="submit">Continue securely</Button></form>}{step === 1 && <div><p className="eyebrow">Plain-language consent</p><h1>Your child’s learning data belongs to your family.</h1><ul className="check-list"><li>We store a nickname, Standard, preferences, answers, hints, and progress.</li><li>We do not collect a child’s email, voice, photograph, location, chat, or advertising profile.</li><li>You can export or erase this prototype’s data from Parent view.</li></ul><label className="checkbox"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} /> I am this child’s parent or guardian and consent to this local prototype storing learning progress.</label><p className="warning">Pilot activation remains blocked until a legally approved adult-verification provider is integrated.</p><Button disabled={!consent} onClick={() => { update({ consentedAt: new Date().toISOString() }); setStep(2); }}>Record consent</Button></div>}{step === 2 && <form onSubmit={(e) => { e.preventDefault(); addChild(); }}><p className="eyebrow">Child profile</p><h1>Who is joining the adventure?</h1><div className="two-cols"><label>Nickname<input required maxLength={24} value={name} onChange={(e) => setName(e.target.value)} placeholder="Kai" /></label><label>School level<select value={standard} onChange={(e) => setStandard(Number(e.target.value) as 3 | 4 | 5)}><option value={3}>Standard 3</option><option value={4}>Standard 4</option><option value={5}>Standard 5</option></select></label></div><fieldset><legend>Choose an avatar</legend><div className="choice-row">{["🦜", "🐢", "🦋", "🐕"].map((item) => <button type="button" aria-pressed={avatar === item} className="avatar-choice" onClick={() => setAvatar(item)} key={item}>{item}</button>)}</div></fieldset><fieldset><legend>Choose four picture signs ({pin.length}/4)</legend><div className="choice-row">{SYMBOLS.map((item) => <button type="button" aria-pressed={pin.includes(item)} className="pin-choice" onClick={() => setPin((current) => current.includes(item) ? current.filter((x) => x !== item) : current.length < 4 ? [...current, item] : current)} key={item}>{item}</button>)}</div></fieldset><Button type="submit" disabled={pin.length !== 4}>Meet Niko and Zuri</Button></form>}</section>;
}

type Shared = { state: BridgepathState; update: (next: Partial<BridgepathState>) => void; setScreen: (s: Screen) => void; activeChild?: ChildProfile; status: EvidenceStage; progress: number };

function ChildEntry({ state, update, setScreen }: Shared) {
  const [code, setCode] = useState("");
  const [selected, setSelected] = useState<ChildProfile | null>(null);
  const [pin, setPin] = useState<string[]>([]);
  const validCode = code.toUpperCase() === state.familyCode;
  const validPin = selected && pin.join("") === selected.pin.join("");
  return <section className="page centered narrow"><p className="eyebrow">Child entry</p><h1>Find your family path</h1>{!validCode ? <><label className="wide-label">Family code<input value={code} onChange={(e) => setCode(e.target.value)} placeholder="PATH-326" autoCapitalize="characters" /></label><p className="hint">Ask your grown-up for the code shown in Parent view.</p></> : !selected ? <div className="profile-list">{state.children.map((child) => <button className="profile-card" key={child.id} onClick={() => setSelected(child)}><span>{child.avatar}</span><strong>{child.name}</strong><small>Standard {child.standard}</small></button>)}</div> : <><h2>Tap your four picture signs</h2><div className="pin-display" aria-live="polite">{pin.map((x, i) => <span key={`${x}-${i}`}>{x}</span>)}</div><div className="choice-row">{SYMBOLS.map((symbol) => <button className="pin-choice" key={symbol} onClick={() => setPin((current) => current.length < 4 ? [...current, symbol] : current)}>{symbol}</button>)}</div><Button variant="ghost" onClick={() => setPin([])}>Start signs again</Button><Button disabled={!validPin} onClick={() => { update({ activeChildId: selected.id }); setScreen(state.completedStops ? "village" : "orientation"); }}>Open my path</Button></>}</section>;
}

function Orientation({ setScreen, activeChild }: Shared) {
  const [step, setStep] = useState(0);
  const messages = [`Hi ${activeChild?.name}! I’m Niko. Tap anything that glows.`, "I’m Zuri. Each big marker is one step along your learning path.", "Mistakes help us find a better path. Try this tiny challenge!"];
  return <section className="page centered orientation"><p className="eyebrow">Two-minute orientation</p><div className="guide-scene"><img className="orientation-guides" src="/niko-zuri-v2.png" alt="Niko and Zuri" /><div className="dialogue"><h1>{messages[step]}</h1></div></div>{step < 2 ? <Button onClick={() => setStep(step + 1)}>Follow the glow</Button> : <div className="tiny-challenge"><p>Which basket shows 5 mangoes?</p><button onClick={() => setScreen("village")} aria-label="Basket with 5 mangoes">🥭🥭🥭🥭🥭</button><button onClick={() => setStep(2)} aria-label="Basket with 3 mangoes">🥭🥭🥭</button><p className="hint">Count each mango, then choose the basket with five.</p></div>}</section>;
}

function Village({ setScreen, activeChild, state, progress }: Shared) {
  return <section className="village page"><div className="village-heading"><div><p className="eyebrow">Welcome back, {activeChild?.name}</p><h1>Storypath Village</h1><p>{state.completedStops ? `Your place is saved after “${STOPS[Math.max(0, state.completedStops - 1)]}”.` : "Riverside Market needs a quick-thinking helper."}</p></div><div className="progress-orb"><strong>{progress}%</strong><span>Market path</span></div></div><div className="map" role="group" aria-label="Village locations"><button className="map-place market" onClick={() => setScreen("path")}><span>🧺</span><strong>Riverside Market</strong><small>{state.completedStops ? "Continue adventure" : "New mission"}</small></button><button className="map-place library" disabled><span>📚</span><strong>Village Library</strong><small>Future path</small></button><button className="map-place workshop" disabled><span>🪚</span><strong>Workshop</strong><small>Future path</small></button></div><details className="map-list"><summary>Use a simple location list</summary><button onClick={() => setScreen("path")}>Riverside Market — available</button><span>Village Library — future</span><span>Workshop — future</span></details></section>;
}

function AdventurePath({ setScreen, state, progress }: Shared) {
  return <section className="adventure-board page"><div className="adventure-overlay" /><header className="unit-banner"><div><p>Standard 3 Mathematics · Unit 1</p><h1>Market Day</h1><span>Build totals, pay, and check change</span></div><div className="unit-progress"><strong>{progress}%</strong><small>complete</small></div></header><img className="path-guides" src="/niko-zuri-v2.png" alt="Niko and Zuri standing beside the Market Day path" /><ol className="node-path" aria-label="Market Day learning path">{STOPS.map((stop, index) => { const available = index <= state.completedStops; return <li className={`${index < state.completedStops ? "complete" : index === state.completedStops ? "current" : "locked"} node-${index + 1}`} key={stop}><button disabled={!available} onClick={() => setScreen("lesson")} aria-label={`${stop}. ${index < state.completedStops ? "Complete" : index === state.completedStops ? "Start this step" : "Locked"}`}><span className="node-icon">{index < state.completedStops ? "✓" : index === 0 ? "★" : index === 3 ? "🧺" : index === 5 ? "🏁" : index + 1}</span></button><div className="node-label"><strong>{index === state.completedStops && index === 0 ? "START" : stop}</strong>{index === state.completedStops && <small>Next step</small>}</div></li>; })}</ol><aside className="path-mission"><p className="eyebrow">Current mission</p><h2>{STOPS[Math.min(state.completedStops, 5)]}</h2><p>{state.completedStops ? "Your place is saved. Continue from the glowing step." : "Auntie Anisa needs help preparing the market for the village evening."}</p><Button onClick={() => setScreen("lesson")}>{state.completedStops ? "Continue step" : "Start unit"}</Button></aside></section>;
}

function Lesson({ state, update, setScreen }: Shared) {
  const stop = Math.min(state.completedStops, 5);
  const [selected, setSelected] = useState<number[]>([]);
  const [feedback, setFeedback] = useState("");
  const [localAttempts, setLocalAttempts] = useState(0);
  const targets = [0, 0, 17, 25, 12, 30];
  const target = targets[stop];

  function record(stage: EvidenceStage, correct: boolean, supportUsed: boolean, context: string) {
    const evidence = [...state.evidence, { id: crypto.randomUUID(), stage, correct, supportUsed, context, occurredAt: new Date().toISOString() }];
    update({ evidence, attempts: state.attempts + 1 });
  }

  function finish(stage: EvidenceStage, context: string, supportUsed = false) {
    record(stage, true, supportUsed, context);
    update({ completedStops: Math.min(6, stop + 1) });
    setScreen(stop === 5 ? "results" : "path");
  }

  if (stop === 0) return <StoryLesson onDone={() => finish("introduced", "market-story")} />;
  if (stop === 1) return <DemoLesson onDone={() => finish("guided", "vendor-demonstration")} />;

  const sum = selected.reduce((a, b) => a + b, 0);
  const stage: EvidenceStage = stop === 2 ? "guided" : stop === 3 ? "practised" : "applied";
  const context = stop === 2 ? "exact-payment" : stop === 3 ? "market-queue" : stop === 4 ? "budget-choice" : "final-mission";

  function check() {
    const correct = sum === target;
    const attempts = localAttempts + 1;
    setLocalAttempts(attempts);
    record(stage, correct, attempts >= 2, context);
    if (correct) setFeedback("That works! You made the exact total.");
    else if (attempts >= 2) setFeedback(`Let’s make a smaller path. Start with ${Math.floor(target / 10) * 10}, then add ${target % 10}. Learning is still open.`);
    else setFeedback(sum < target ? `You have $${sum}. You need $${target - sum} more.` : `You have $${sum}. Take away $${sum - target}.`);
  }

  return <section className="page lesson-page"><div className="lesson-card"><p className="eyebrow">Stop {stop + 1} of 6 · {STOPS[stop]}</p><h1>{stop === 3 ? "Serve the next customer" : stop === 5 ? "Final mission: prepare the event basket" : "Make the exact payment"}</h1><p>{stop === 3 ? `A customer’s fruit costs $${target}. Build the total accurately—there is no time limit.` : `Choose money that adds up to $${target}. You can use a value more than once.`}</p><div className="payment-tray" aria-label={`Current payment: $${sum}`}><span>Payment tray</span><strong>${sum}</strong><div>{selected.map((coin, index) => <button key={`${coin}-${index}`} onClick={() => setSelected(selected.filter((_, i) => i !== index))} aria-label={`Remove ${coin} dollar value`}>${coin}</button>)}</div></div><div className="money-row" aria-label="Available money">{COINS.map((coin) => <button onClick={() => setSelected([...selected, coin])} key={coin}><small>TT</small>${coin}</button>)}</div><div className={`feedback ${feedback ? "show" : ""}`} aria-live="polite">{feedback}</div><div className="actions"><Button variant="ghost" onClick={() => { setSelected([]); setFeedback(""); }}>Clear tray</Button><Button onClick={check}>Check payment</Button>{sum === target && feedback && <Button onClick={() => { update({ completedStops: Math.min(6, stop + 1) }); setScreen(stop === 5 ? "results" : "path"); }}>Continue path</Button>}</div>{localAttempts >= 2 && sum !== target && <div className="support-card"><strong>Try the stepping-stone hint</strong><p>Tap $10 first. Keep adding until you reach the tens, then use $1 values for the ones.</p></div>}</div></section>;
}

function StoryLesson({ onDone }: { onDone: () => void }) {
  const text = "The village evening starts soon, but Auntie Anisa still has three orders to prepare. Niko thinks careful totals can get Market Day back on track.";
  return <section className="page lesson-page"><div className="story-panel"><span className="vendor-avatar">AA</span><p className="eyebrow">A market mystery</p><h1>“Every dollar has a job today.”</h1><p>{text}</p><div className="actions"><Button onClick={onDone}>See money in action</Button></div></div></section>;
}

function DemoLesson({ onDone }: { onDone: () => void }) {
  const text = "A mango costs twelve dollars. One ten-dollar note and two one-dollar coins make twelve. Ten plus two is twelve.";
  return <section className="page lesson-page"><div className="lesson-card"><p className="eyebrow">Interactive demonstration</p><h1>Auntie Anisa builds a total</h1><div className="demo-equation"><span>$10</span><b>+</b><span>$1</span><b>+</b><span>$1</span><b>=</b><strong>$12</strong></div><p>{text}</p><div className="actions"><Button onClick={onDone}>Let me try with help</Button></div></div></section>;
}

function Results({ setScreen, status, state }: Shared) {
  return <section className="page centered results"><div className="celebration" aria-hidden="true">🌟 🧺 🌟</div><p className="eyebrow">Market Day complete</p><h1>You carried the learning into the adventure.</h1><p>Auntie Anisa’s orders are ready and the village evening can begin.</p><div className="result-grid"><div><strong>{state.evidence.filter((e) => e.correct).length}</strong><span>successful moments</span></div><div><strong>{status}</strong><span>current evidence stage</span></div><div><strong>100%</strong><span>Market path covered</span></div></div><p className="notice">Mastery takes successful independent evidence across more than one context. Finishing once does not automatically mark mastery.</p><Button onClick={() => setScreen("village")}>Return to Storypath Village</Button></section>;
}

function Dashboard({ state, update, setScreen, activeChild, status, progress, onReset }: Shared & { onReset: () => void }) {
  const needsSupport = state.evidence.filter((event) => !event.correct).length >= 2;
  function exportData() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "bridgepath-family-data.json";
    link.click();
    URL.revokeObjectURL(link.href);
  }
  return <section className="page dashboard"><div className="dashboard-head"><div><p className="eyebrow">Family learning view</p><h1>{activeChild?.name ?? "Your child"}’s path</h1><p>Plain-language progress from the same evidence used in the adventure.</p></div><div className="child-switcher">{state.children.map((child) => <button key={child.id} aria-pressed={state.activeChildId === child.id} onClick={() => { state.activeChildId = child.id; setScreen("dashboard"); }}>{child.avatar} {child.name}</button>)}</div></div><div className="dashboard-grid"><article className="feature-card"><span>Current adventure</span><h2>Market Day</h2><p>Standard {activeChild?.standard} · Mathematics</p><div className="meter" aria-label={`${progress}% covered`}><i style={{ width: `${progress}%` }} /></div><strong>{progress}% of this pilot path covered</strong><Button onClick={() => setScreen("village")}>Open child experience</Button></article><article><span>Learning evidence</span><h2 className="capitalize">{status}</h2><p>{status === "applied" || status === "mastered" ? "Used money skills in an independent mission." : "Building totals with guidance and practice."}</p></article><article><span>Learning rhythm</span><h2>{state.streak} day</h2><p>Last active {state.lastActiveAt ? new Date(state.lastActiveAt).toLocaleDateString() : "today"}. No punishment for missed days.</p></article><article className={needsSupport ? "support" : ""}><span>Support signal</span><h2>{needsSupport ? "A little support may help" : "No support flag yet"}</h2><p>{needsSupport ? "Try making a $17 total together using household objects as $10, $5, and $1 values." : "Keep asking your child to explain how they know a total is correct."}</p></article></div><section className="activity-table"><h2>Recent learning evidence</h2>{state.evidence.length ? <ul>{[...state.evidence].reverse().slice(0, 6).map((event) => <li key={event.id}><span className={event.correct ? "success-dot" : "try-dot"}>{event.correct ? "✓" : "↻"}</span><div><strong>{event.context.replaceAll("-", " ")}</strong><small>{event.correct ? "Successful" : "Tried again"}{event.supportUsed ? " · support used" : " · independently"}</small></div><time>{new Date(event.occurredAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</time></li>)}</ul> : <p className="empty">Learning activity will appear here after the first market stop.</p>}</section><details className="privacy-tools"><summary>Family privacy and prototype controls</summary><p>Family code: <strong>{state.familyCode}</strong></p><p>Consent recorded: {state.consentedAt ? new Date(state.consentedAt).toLocaleString() : "No"}</p><div className="actions"><Button variant="secondary" onClick={exportData}>Export family data</Button><Button variant="ghost" onClick={() => { if (window.confirm("Erase this browser’s Bridgepath prototype data?")) onReset(); }}>Erase local data</Button></div><p className="warning">This prototype does not activate a real pilot account. Approved adult verification, production authentication, Supabase policies, and legal review remain required.</p></details></section>;
}
