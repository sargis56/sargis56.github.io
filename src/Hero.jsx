// ───────────────────────────────────────────────────────────
// Three hero variants: split · boot · orbit
// ───────────────────────────────────────────────────────────
const { useState, useEffect, useRef, useMemo } = React;

const heroStyles = `
section.hero {
  min-height: calc(100svh - 110px);
  padding: 96px 0 24px;
  position: relative;
}
@media (max-height: 720px) { section.hero { min-height: 0; } }

/* ── SPLIT ───────────────────────────────────────────────── */
.split { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.split-stage {
  position: relative; width: 100%; max-width: 1280px; height: 70vh; min-height: 520px;
  margin: 0 auto; padding: 0 32px;
}
.split-half {
  position: absolute; top: 0; bottom: 0;
  display: flex; flex-direction: column; justify-content: center;
  gap: 18px; transition: filter .3s ease;
}
.split-half.left  { left: 32px;  right: calc(100% - var(--divide, 50%)); align-items: flex-start; padding-right: 40px; }
.split-half.right { right: 32px; left:  var(--divide, 50%);              align-items: flex-end;   padding-left: 40px; text-align: right; }
.split-role {
  font: 500 clamp(36px, 6.2vw, 92px)/.92 var(--font-display);
  letter-spacing: -0.02em; text-wrap: balance;
}
.split-half.left  .split-role .em { color: var(--accent); }
.split-half.right .split-role .em { color: var(--accent-2); }
.split-chips { display: flex; flex-wrap: wrap; gap: 8px; max-width: 360px; }
.split-half.right .split-chips { justify-content: flex-end; }
.split-divider {
  position: absolute; top: 8%; bottom: 8%; left: var(--divide, 50%);
  width: 1px; background: linear-gradient(180deg, transparent, var(--line) 15%, var(--line) 85%, transparent);
  transition: left .15s linear;
}
.split-divider::before, .split-divider::after {
  content: ''; position: absolute; left: 50%; transform: translateX(-50%);
  width: 7px; height: 7px; border-radius: 50%;
}
.split-divider::before { top: -4px;    background: var(--accent); box-shadow: 0 0 12px var(--accent); }
.split-divider::after  { bottom: -4px; background: var(--accent-2); box-shadow: 0 0 12px var(--accent-2); }
.split-center {
  position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);
  text-align: center; z-index: 2; pointer-events: none;
  display: flex; flex-direction: column; gap: 14px; align-items: center;
}
.split-name { font: 500 13px var(--font-mono); letter-spacing: .3em; text-transform: uppercase; }
.split-amp  { font: 400 clamp(40px, 7vw, 80px)/1 var(--font-display); color: var(--fg-faint); }
[data-theme="print"] .split-amp { font-style: italic; }
.split-ctas {
  display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
  margin-top: 28px; animation: slideUp .5s ease both;
}
[data-theme="print"] .split-stage[data-hover="left"]  .split-half.right,
[data-theme="print"] .split-stage[data-hover="right"] .split-half.left  { filter: opacity(.4); }
.split-stage[data-hover="left"]  .split-half.right { filter: brightness(.55) saturate(.6); }
.split-stage[data-hover="right"] .split-half.left  { filter: brightness(.55) saturate(.6); }
@media (max-width: 1060px) {
  .split-stage { height: auto; min-height: 0; padding: 40px 20px 0; }
  .split-half { position: static; padding: 24px 0 !important; align-items: flex-start !important; text-align: left !important; }
  .split-half.right .split-chips { justify-content: flex-start; }
  .split-divider { display: none; }
  .split-center { position: static; transform: none; padding: 12px 0 28px; order: -1; align-items: flex-start; }
  .split-stage { display: flex; flex-direction: column; }
}

/* ── BOOT ────────────────────────────────────────────────── */
.boot { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0; }
.term {
  width: min(860px, 92vw);
  border: 1px solid var(--line); border-radius: var(--radius-lg);
  background: color-mix(in oklch, var(--bg-2) 80%, transparent);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow);
  overflow: hidden;
}
.term-bar {
  display: flex; align-items: center; gap: 8px;
  padding: 12px 16px; border-bottom: 1px solid var(--line);
  font: 500 11px var(--font-mono); color: var(--fg-faint);
}
.term-dot { width: 11px; height: 11px; border-radius: 50%; background: var(--bg-3); }
.term-body { padding: 28px 28px 36px; font: 400 15px/1.9 var(--font-mono); min-height: clamp(240px, 42svh, 360px); }
.term-line { white-space: pre-wrap; }
.term-prompt { color: var(--accent); }
.term-key { color: var(--fg-faint); }
.term-val { color: var(--fg); }
.term-hi  { color: var(--accent-2); }
.term-cursor { display: inline-block; width: 9px; height: 1.2em; background: var(--accent); vertical-align: text-bottom; animation: blink 1s step-end infinite; }
.boot-reveal {
  margin-top: 28px; height: 48px;
  display: flex; gap: 12px; justify-content: center; align-items: center;
}
.boot-reveal .btn { opacity: 0; transform: translateY(12px); pointer-events: none; transition: opacity .35s ease, transform .35s ease; }
.boot-reveal.done .btn { opacity: 1; transform: translateY(0); pointer-events: auto; }
.boot-reveal.done .btn:nth-child(2) { transition-delay: .06s; }
.boot-reveal.done .btn:nth-child(3) { transition-delay: .12s; }
.boot-skip {
  position: absolute; inset: 0; display: grid; place-items: center;
  font: 500 11px var(--font-mono); color: var(--fg-faint); letter-spacing: .1em;
  transition: opacity .2s; cursor: pointer;
}
.boot-reveal.done .boot-skip { opacity: 0; pointer-events: none; }

/* ── ORBIT ───────────────────────────────────────────────── */
.orbit { display: grid; place-items: center; position: relative; overflow: hidden; }
.orbit-core { text-align: center; z-index: 2; padding: 0 24px; }
.orbit-name {
  font: 500 clamp(56px, 12vw, 180px)/.88 var(--font-display);
  letter-spacing: -0.03em; text-wrap: balance;
}
[data-theme="print"] .orbit-name { font-weight: 400; }
.orbit-roles {
  margin-top: 22px; font: 500 14px var(--font-mono);
  letter-spacing: .18em; text-transform: uppercase; color: var(--fg-dim);
}
.orbit-roles .sep { color: var(--accent); margin: 0 14px; }
.orbit-ctas { margin-top: 36px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.orbit-field { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
.orbit-card {
  position: absolute; width: 200px;
  border: 1px solid var(--line); border-radius: var(--radius);
  background: var(--bg-2);
  padding: 10px; pointer-events: auto; cursor: pointer;
  transition: transform .1s linear, border-color .2s;
  box-shadow: var(--shadow);
}
.orbit-card:hover { border-color: var(--accent); }
.orbit-card .ph { aspect-ratio: 16/10; margin-bottom: 8px; }
.orbit-card-title { font: 600 12px var(--font-mono); letter-spacing: .04em; }
.orbit-card-tag { font: 500 10px var(--font-mono); color: var(--fg-faint); }
@media (max-width: 860px) { .orbit-field { display: none; } }
`;

// ── Variant: SPLIT ──────────────────────────────────────────
function HeroSplit({ onOpenProject }) {
  const stage = useRef(null);
  const [divide, setDivide] = useState(50);
  const [hover, setHover] = useState(null);

  const onMove = (e) => {
    const r = stage.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const d = Math.max(34, Math.min(66, x));
    setDivide(d);
    setHover(x < 45 ? 'left' : x > 55 ? 'right' : null);
  };
  const onLeave = () => { setDivide(50); setHover(null); };

  const gameChips = ['Unreal', 'Unity', 'C++', 'OpenGL', 'Netcode'];
  const aiChips   = ['PyTorch', 'RAG', 'Transformers', 'GPT-4', 'Next.js'];

  return (
    <section className="hero split" id="top" data-screen-label="Hero">
      <div
        ref={stage}
        className="split-stage"
        style={{ '--divide': divide + '%' }}
        data-hover={hover || ''}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div className="split-center">
          <div className="split-name">{PROFILE.name}</div>
          <div className="split-amp">&amp;</div>
        </div>

        <div className="split-half left">
          <h1 className="split-role">Game<br/><span className="em">Developer</span></h1>
          <div className="split-chips">
            {gameChips.map(c => <span key={c} className="chip">{c}</span>)}
          </div>
        </div>

        <div className="split-divider" />

        <div className="split-half right">
          <h1 className="split-role">AI<br/><span className="em">Engineer</span></h1>
          <div className="split-chips">
            {aiChips.map(c => <span key={c} className="chip">{c}</span>)}
          </div>
        </div>
      </div>
      <div className="split-ctas">
        <a className="btn btn-primary" href="#highlights">View work ↓</a>
        <a className="btn" href={PROFILE.links.resume} target="_blank">Resume</a>
        <a className="btn" href="#contact">Contact</a>
      </div>
    </section>
  );
}

// ── Variant: BOOT ───────────────────────────────────────────
function HeroBoot() {
  const lines = useMemo(() => ([
    { t: '$ ', cls: 'term-prompt' }, { t: 'whoami\n' },
    { t: 'name:     ', cls: 'term-key' }, { t: PROFILE.name + '\n', cls: 'term-val' },
    { t: 'roles:    ', cls: 'term-key' }, { t: 'game_developer', cls: 'term-hi' }, { t: ' && ' }, { t: 'ai_engineer\n', cls: 'term-hi' },
    { t: 'location: ', cls: 'term-key' }, { t: PROFILE.location + '\n', cls: 'term-val' },
    { t: 'shipped:  ', cls: 'term-key' }, { t: 'EQUINOX (Steam) · WOE (itch) · RAG chatbot → 5k users\n', cls: 'term-val' },
    { t: 'status:   ', cls: 'term-key' }, { t: 'open_to_work\n', cls: 'term-hi' },
    { t: '\n$ ', cls: 'term-prompt' }, { t: 'ls ./projects --featured\n' },
    { t: 'equinox/  woe/  indie-recommender/  fake-news/  gfx-engine/\n', cls: 'term-val' },
  ]), []);

  const full = useMemo(() => lines.map(l => l.t).join(''), [lines]);
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (n >= full.length) { setDone(true); return; }
    const id = setTimeout(() => setN(n + 1), full[n] === '\n' ? 120 : 14);
    return () => clearTimeout(id);
  }, [n, full]);

  const skip = () => setN(full.length);

  // render typed portion preserving spans
  let rem = n;
  const out = [];
  for (let i = 0; i < lines.length && rem > 0; i++) {
    const seg = lines[i];
    const take = Math.min(seg.t.length, rem);
    out.push(<span key={i} className={seg.cls || ''}>{seg.t.slice(0, take)}</span>);
    rem -= take;
  }

  return (
    <section className="hero boot" id="top" data-screen-label="Hero">
      <div>
        <div className="term" onClick={skip}>
          <div className="term-bar">
            <span className="term-dot" /><span className="term-dot" /><span className="term-dot" />
            <span style={{ marginLeft: 8 }}>sargis@portfolio — bash</span>
          </div>
          <div className="term-body">
            <div className="term-line">{out}{!done && <span className="term-cursor" />}</div>
          </div>
        </div>
        <div className={'boot-reveal' + (done ? ' done' : '')} style={{ position: 'relative' }}>
          <a className="btn btn-primary" href="#highlights">View work ↓</a>
          <a className="btn" href={PROFILE.links.resume} target="_blank">Resume</a>
          <a className="btn" href="#contact">Contact</a>
          <button className="boot-skip" onClick={skip}>click to skip</button>
        </div>
      </div>
    </section>
  );
}

// ── Variant: ORBIT ──────────────────────────────────────────
function HeroOrbit({ onOpenProject }) {
  const [m, setM] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const h = (e) => setM({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  const sat = useMemo(() => {
    const picks = PROJECTS.filter(p => p.featured || ['gfx-engine','fake-news','hexes'].includes(p.id)).slice(0, 6);
    const slots = [
      { x: 14, y: 22, d: 1.4 }, { x: 80, y: 16, d: 1.0 },
      { x: 9,  y: 68, d: 0.9 }, { x: 84, y: 72, d: 1.5 },
      { x: 46, y: 10, d: 0.7 }, { x: 50, y: 84, d: 1.1 },
    ];
    return picks.map((p, i) => ({ p, ...slots[i] }));
  }, []);

  return (
    <section className="hero orbit" id="top" data-screen-label="Hero">
      <div className="orbit-field">
        {sat.map(({ p, x, y, d }, i) => (
          <div
            key={p.id}
            className="orbit-card"
            onClick={() => onOpenProject?.(p.id)}
            style={{
              left: x + '%', top: y + '%',
              transform: `translate(-50%,-50%) translate(${-m.x * d * 30}px, ${-m.y * d * 30}px)`,
              animation: `float ${5 + i}s ease-in-out ${i * .4}s infinite`,
            }}
          >
            {p.cover
              ? <div className="ph"><img src={p.cover} alt="" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:p.coverFocus||'center'}} /></div>
              : <div className="ph"><Artwork project={p} /></div>}
            <div className="orbit-card-title">{p.title}</div>
            <div className="orbit-card-tag">{p.tags.map(t => TAGS[t]).join(' · ')}</div>
          </div>
        ))}
      </div>
      <div className="orbit-core">
        <h1 className="orbit-name">Sargis<br/>Nahapetyan</h1>
        <div className="orbit-roles">
          Game Developer<span className="sep">×</span>AI Engineer
        </div>
        <div className="orbit-ctas">
          <a className="btn btn-primary" href="#highlights">View work ↓</a>
          <a className="btn" href={PROFILE.links.resume} target="_blank">Resume</a>
          <a className="btn" href="#contact">Contact</a>
        </div>
      </div>
    </section>
  );
}

function Hero({ variant, onOpenProject }) {
  if (variant === 'boot')  return <HeroBoot />;
  if (variant === 'orbit') return <HeroOrbit onOpenProject={onOpenProject} />;
  return <HeroSplit onOpenProject={onOpenProject} />;
}

Object.assign(window, { Hero, heroStyles });
