"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Character = "niko" | "zuri";

const expressions = [
  ["excited", "Excited", "Meaningful reveal", "Wide eyes · lifted brows · open smile"],
  ["curious", "Curious", "Ready to investigate", "Upward gaze · soft mouth · idea gesture"],
  ["thinking", "Thinking", "Quiet reasoning", "Eyes track away · brows gather · chin supported"],
  ["confused", "Confused", "Calm uncertainty", "Uneven brows · searching gaze · no distress"],
  ["surprised", "Surprised", "Changed condition", "Rounded eyes · lifted brows · open mouth"],
  ["determined", "Determined", "Grounded retry", "Focused gaze · lowered brows · steady shoulders"],
  ["proud", "Proud", "Shared achievement", "Lifted chin · warm eyes · hand to heart"],
  ["celebrating", "Celebrating", "Team resolution", "Whole-body lift · closed happy eyes · raised arms"],
  ["disappointed", "Disappointed", "Still connected", "Lower gaze · softened shoulders · never shamed"],
  ["encouraging", "Encouraging", "Same eye level", "Direct warmth · open smile · inviting gesture"],
  ["empathetic", "Empathetic", "Quiet presence", "Soft brows · small smile · open posture"],
  ["playful", "Playful", "Never mocking", "Side tilt · wink · bright shared grin"],
] as const;

const poses = [
  ["welcome", "Welcoming", "Open invitation"],
  ["point", "Pointing", "Content stays clear"],
  ["examine", "Examining", "Eyes and hands agree"],
  ["listen", "Listening", "At the speaker's level"],
  ["try", "Trying an idea", "Reversible first test"],
  ["mistake", "Recognising", "No facepalm or shame"],
  ["revise", "Revising", "Evidence changes the plan"],
  ["encourage", "Encouraging", "Beside, not above"],
  ["map", "Shared map", "Explorer chooses the route"],
  ["celebrate", "Team celebration", "World result over score"],
] as const;

const wardrobes = [
  ["everyday", "Everyday adventure", "Identity anchor"],
  ["rain", "Rainy morning", "Raincoat · umbrella · protected bag"],
  ["sport", "Sports Day", "Team bib · trainers · water bottle"],
  ["library", "Library visit", "Book bag · borrowed book · quiet layer"],
  ["market", "Market morning", "Sun hat · shopping list · reusable tote"],
  ["mas", "Mas camp workshop", "Maker apron · safe tools · paint protection"],
] as const;

const views = ["Front", "Three-quarter", "Profile", "Rear"];
const navItems = [["overview", "Overview"], ["turnarounds", "Views"], ["expressions", "Expressions"], ["poses", "Poses"], ["wardrobe", "Wardrobe"], ["validation", "Validate"]] as const;

function CharacterToggle({ value, onChange }: { value: Character; onChange: (value: Character) => void }) {
  return (
    <div className="lab-toggle" aria-label="Choose character">
      {(["niko", "zuri"] as Character[]).map((character) => (
        <button
          type="button"
          key={character}
          className={value === character ? "is-active" : ""}
          aria-pressed={value === character}
          onClick={() => onChange(character)}
        >
          <span className={`toggle-dot ${character}`} />
          {character === "niko" ? "Niko" : "Zuri"}
        </button>
      ))}
    </div>
  );
}

function CharacterAvatar({ character }: { character: Character }) {
  return <span className={`character-avatar ${character}`} role="img" aria-label={`${character === "niko" ? "Niko" : "Zuri"} neutral portrait`} />;
}

export default function CharacterDesignLab() {
  const [character, setCharacter] = useState<Character>("niko");
  const [activeSection, setActiveSection] = useState("overview");
  const characterName = character === "niko" ? "Niko" : "Zuri";
  const turnaround = `/design-lab/${character}-turnaround-v1.png`;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-18% 0px -65% 0px", threshold: [0, 0.15, 0.4] });
    navItems.forEach(([id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="design-lab">
      <nav className="lab-nav" aria-label="Design Lab sections">
          <a className="lab-brand" href="#top"><span>BRIDGEPATH</span> Character Lab</a>
          <div className="lab-links">
            {navItems.map(([id, label]) => <a key={id} onClick={() => setActiveSection(id)} className={activeSection === id ? "is-active" : ""} aria-current={activeSection === id ? "location" : undefined} href={`#${id}`}>{label}</a>)}
          </div>
          <span className="lab-status">Internal · concept v1</span>
      </nav>

      <header className="lab-hero" id="top">

        <div className="hero-copy">
          <p className="eyebrow">Visual validation prototype</p>
          <h1>Choose your explorer.<br /><em>Keep a companion beside you.</em></h1>
          <p className="hero-intro">A child plays as Niko or Zuri. The unselected character travels beside them, while local mentors teach. Progress always belongs to the child profile—not the character.</p>
          <div className="explorer-picker" aria-label="Preview explorer choice">
            <button type="button" className={character === "niko" ? "is-selected" : ""} aria-pressed={character === "niko"} onClick={() => setCharacter("niko")}><CharacterAvatar character="niko" /><span><strong>Play as Niko</strong><small>Zuri accompanies you</small></span></button>
            <button type="button" className={character === "zuri" ? "is-selected" : ""} aria-pressed={character === "zuri"} onClick={() => setCharacter("zuri")}><CharacterAvatar character="zuri" /><span><strong>Play as Zuri</strong><small>Niko accompanies you</small></span></button>
          </div>
        </div>

        <div className="hero-plate" aria-label="Niko and Zuri character overview">
          <div className="hero-glow" />
          <Image src="/design-lab/niko-zuri-pair.png" alt="Niko and Zuri standing together in their everyday adventure clothing" fill priority sizes="(max-width: 720px) 100vw, 56vw" />
          <span className="height-rule" aria-hidden="true"><i>9 years</i><b /></span>
        </div>
      </header>

      <section className="lab-section overview-section" id="overview">
        <div className="section-heading">
          <div><p className="section-number">01 · Overview</p><h2>Equal status, different habits</h2></div>
          <p>They share scale, finish, and narrative weight. Difference comes from silhouette, colour, stance, and how each approaches uncertainty.</p>
        </div>
        <div className="identity-grid">
          <article className="identity-card niko-card">
            <span className="identity-index">N</span><CharacterAvatar character="niko" />
            <div><p className="identity-role">First mover</p><h3>Niko</h3><p>High curls · coral / teal · diagonal pouch · forward readiness</p></div>
          </article>
          <article className="team-rule">
            <p>Explorer model</p><strong>One is played. One accompanies.</strong><span>The choice changes point of view, not learning outcomes. Mentors still teach; both children can wonder, mistake, revise, and help.</span>
          </article>
          <article className="identity-card zuri-card">
            <span className="identity-index">Z</span><CharacterAvatar character="zuri" />
            <div><p className="identity-role">Pattern finder</p><h3>Zuri</h3><p>Twin puffs · violet / mango · vertical pack · grounded attention</p></div>
          </article>
        </div>
      </section>

      <section className="lab-section" id="turnarounds">
        <div className="section-heading sticky-heading">
          <div><p className="section-number">02 · Turnaround</p><h2>One child from every angle</h2></div>
          <CharacterToggle value={character} onChange={setCharacter} />
        </div>
        <div className="turnaround-feature">
          <div className="sheet-frame">
            <span className="concept-ribbon">Approved direction · concept asset</span>
            <Image src={turnaround} alt={`${characterName} front, three-quarter, profile and rear turnaround views`} width={1536} height={1024} sizes="(max-width: 900px) 96vw, 72vw" />
          </div>
          <aside className={`anchor-panel ${character}`}>
            <p>Recognition anchors</p>
            <h3>{characterName}</h3>
            <ul>
              {(character === "niko"
                ? ["High rounded curl mass", "Coral sides around a teal centre", "Diagonal field-pouch line", "One foot ready, never frantic"]
                : ["Twin textured puff silhouette", "Violet upper / mango lower blocks", "Compact vertical roll-top pack", "Grounded stance, never timid"]
              ).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </aside>
        </div>
        <div className={`view-strip ${character}`}>
          {views.map((view, index) => (
            <article key={view}>
              <div className={`turnaround-crop crop-${index}`} role="img" aria-label={`${characterName} ${view.toLowerCase()} view`} style={{ backgroundImage: `url(${turnaround})` }} />
              <span>0{index + 1}</span><strong>{view}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-section" id="expressions">
        <div className="section-heading sticky-heading">
          <div><p className="section-number">03 · Expressions</p><h2>Emotion without performance pressure</h2></div>
          <CharacterToggle value={character} onChange={setCharacter} />
        </div>
        <div className="prototype-note"><strong>Illustrated expression study</strong><span>These character-specific plates now test recognisability, emotional clarity, and child-safe learning use. Final production cleanup remains pending.</span></div>
        <div className="expression-grid">
          {expressions.map(([id, label, use, cue], index) => (
            <article className={`expression-card ${character}`} key={id}>
              <span className="tile-index">{String(index + 1).padStart(2, "0")}</span>
              <div className={`expression-portrait ${character} expression-crop-${index}`} role="img" aria-label={`${characterName} looking ${label.toLowerCase()}`} style={{backgroundImage:`url(/design-lab/${character}-expressions-v2.png)`}} />
              <h3>{label}</h3><p>{use}</p><small>{cue}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-section" id="poses">
        <div className="section-heading sticky-heading">
          <div><p className="section-number">04 · Core poses</p><h2>Action that leaves room</h2></div>
          <CharacterToggle value={character} onChange={setCharacter} />
        </div>
        <div className="prototype-note"><strong>Illustrated pose study</strong><span>Character-specific plates test body language, content clearance, eye line, and believable prop contact.</span></div>
        <div className="pose-grid">
          {poses.map(([id, label, note], index) => (
            <article className={`pose-card ${character}`} key={id}>
              <span className="tile-index">{String(index + 1).padStart(2, "0")}</span>
              <div
                className={`pose-stage illustrated-pose ${character} pose-crop-${index}`}
                role="img"
                aria-label={`${characterName} ${label.toLowerCase()} pose`}
                style={{ backgroundImage: `url(/design-lab/${character}-poses-v1.png)` }}
              >
                {id === "point" && <span className="content-safe">content remains clear</span>}
              </div>
              <h3>{label}</h3><p>{note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-section" id="wardrobe">
        <div className="section-heading sticky-heading">
          <div><p className="section-number">05 · Wardrobe</p><h2>Context changes. Identity stays.</h2></div>
          <CharacterToggle value={character} onChange={setCharacter} />
        </div>
        <div className="wardrobe-grid">
          {wardrobes.map(([id, label, note], index) => (
            <article className={`wardrobe-card ${character}`} key={id}>
              <div className={`wardrobe-stage wardrobe-crop-${index}`} role="img" aria-label={`${characterName} dressed for ${label.toLowerCase()}`} style={{backgroundImage:`url(/design-lab/${character}-wardrobes-v1.png)`}} />
              <div><span>{note}</span><h3>{label}</h3><p>{character === "niko" ? "Niko keeps curls, coral/teal recognition and his diagonal carry line." : "Zuri keeps twin puffs, violet/mango recognition and her vertical backpack line."}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-section detail-section" id="details">
        <div className="section-heading"><div><p className="section-number">06 · Signature details</p><h2>Recognition lives in construction</h2></div></div>
        <div className="detail-grid">
          <article className="detail-board niko-detail"><CharacterAvatar character="niko" /><h3>Niko</h3><ul><li>Curl volume stays high and naturally irregular.</li><li>Coral opens around a calm teal centre.</li><li>Pouch crosses left shoulder to right hip.</li><li>Bag contains ordinary tools, never answers.</li></ul></article>
          <article className="contact-board"><div className="contact-demo"><span className="hand" /><span className="map-edge" /></div><h3>Prop contact</h3><p>Hands carry weight. Fingers meet edges. Eyes follow the contact point. Props never float or swap sides.</p></article>
          <article className="detail-board zuri-detail"><CharacterAvatar character="zuri" /><h3>Zuri</h3><ul><li>Puffs stay textured, never perfect spheres.</li><li>Violet and mango remain distinct at distance.</li><li>Backpack sits vertically on both shoulders.</li><li>Accessories stay quiet and task-safe.</li></ul></article>
        </div>
      </section>

      <section className="lab-section" id="small-scale">
        <div className="section-heading"><div><p className="section-number">07 · Scale and contrast</p><h2>Still themselves when the world gets small</h2></div><p>Identity cannot depend on facial detail or full colour.</p></div>
        <div className="scale-grid">
          <article className="scale-card light"><span>Full colour · light</span><div className="pair-mini full" /></article>
          <article className="scale-card dark"><span>Full colour · dark</span><div className="pair-mini full" /></article>
          <article className="scale-card cream"><span>Full silhouette</span><div className="pair-mini silhouette" /></article>
          <article className="scale-card teal"><span>Two-colour test</span><div className="pair-mini duotone" /></article>
          <article className="avatar-test"><CharacterAvatar character="niko" /><CharacterAvatar character="zuri" /><div><strong>40 px avatars</strong><span>Hair and colour blocking survive.</span></div></article>
          <article className="lesson-test"><div className="lesson-copy"><small>Try this</small><strong>Which plan keeps the total under $50?</strong><button type="button">Choose a plan</button></div><div className="lesson-companions"><CharacterAvatar character="niko" /><CharacterAvatar character="zuri" /></div></article>
        </div>
      </section>

      <section className="lab-section" id="pair-dynamic">
        <div className="section-heading"><div><p className="section-number">08 · Play relationship</p><h2>The roles change. Their equality does not.</h2></div><CharacterToggle value={character} onChange={setCharacter} /></div>
        <div className="dynamic-flow">
          <article className="dynamic-step niko-step"><span>01</span><CharacterAvatar character={character} /><div><small>Selected explorer</small><strong>The child&apos;s point of view</strong><p>Chooses, tries, revises and owns progress.</p></div></article>
          <span className="flow-arrow">→</span>
          <article className="dynamic-step zuri-step"><span>02</span><CharacterAvatar character={character === "niko" ? "zuri" : "niko"} /><div><small>Adventure companion</small><strong>Notices without correcting</strong><p>Supports the selected explorer as an equal.</p></div></article>
          <span className="flow-arrow">→</span>
          <article className="dynamic-step learner-step"><span>03</span><div className="learner-symbol">M</div><div><small>Local mentor</small><strong>Introduces and demonstrates</strong><p>Teaching never defaults to the companion.</p></div></article>
        </div>
      </section>

      <section className="lab-section validation-section" id="validation">
        <div className="section-heading"><div><p className="section-number">09 · Founder review</p><h2>What this prototype must prove</h2></div><p>Use this list before authorising final character art.</p></div>
        <div className="validation-grid">
          {["They look nine, not preschool or teenage.", "They feel equal in finish, scale, and agency.", "Silhouettes remain distinct without colour.", "Colours remain distinct at avatar size.", "A child would want to play as either explorer.", "The companion never becomes the default teacher.", "They belong naturally in the Storypath world.", "Both explorer choices feel equally complete."].map((item, index) => (
            <label key={item}><input type="checkbox" /><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></label>
          ))}
        </div>
        <div className="approval-callout"><p>Current concept status</p><strong>Direction ready for review, not final art.</strong><span>Turnarounds establish identity. Expressions, poses, and wardrobe variants remain labelled development plates until commissioned and culturally reviewed.</span></div>
      </section>

      <footer className="lab-footer"><span>Bridgepath Character Design Lab · Internal</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
