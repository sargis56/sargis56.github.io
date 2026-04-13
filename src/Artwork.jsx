// Designed cover graphics for projects that don't have screenshots.
// Theme-aware (uses CSS vars) so they reskin with the rest of the site.

const artworkStyles = `
.art {
  position: absolute; inset: 0;
  background: var(--bg-2);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  container-type: size;
}
.art-grain {
  position: absolute; inset: 0; pointer-events: none;
  background-image: radial-gradient(var(--line) 1px, transparent 1px);
  background-size: 14px 14px;
  opacity: .35;
  mask: linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent);
}
.art-glow {
  position: absolute; width: 60%; aspect-ratio: 1; border-radius: 50%;
  background: radial-gradient(closest-side, var(--accent), transparent 70%);
  opacity: .18; filter: blur(10px);
}

/* ── chat (recommender) ───────────────────────── */
.art-chat-stack {
  position: relative; width: 76%; max-width: 360px;
  display: flex; flex-direction: column; gap: 7cqh;
  font-family: var(--font-mono);
}
.art-bubble {
  border-radius: 14px; padding: 6cqh 7%;
  font-size: clamp(9px, 5.5cqh, 14px); line-height: 1.45;
  border: 1px solid var(--line);
  background: var(--bg);
  width: fit-content; max-width: 88%;
  box-shadow: 0 2px 0 rgba(0,0,0,.04);
}
.art-bubble.user {
  align-self: flex-end;
  background: color-mix(in oklch, var(--accent) 16%, var(--bg));
  border-color: color-mix(in oklch, var(--accent) 40%, var(--line));
  color: var(--fg);
}
.art-bubble.bot { align-self: flex-start; color: var(--fg-dim); }
.art-bubble.bot::before {
  content: '✦'; color: var(--accent); margin-right: 6px; font-weight: 700;
}
.art-chips {
  display: flex; gap: 5px; flex-wrap: wrap; margin-top: 5cqh;
}
.art-chip {
  font-size: clamp(8px, 4.6cqh, 11px); padding: 3px 8px; border-radius: 999px;
  background: var(--bg-3); border: 1px solid var(--line);
  color: var(--fg); white-space: nowrap;
}
.art-chip.hi {
  border-color: var(--accent);
  color: var(--accent);
}
.art-cursor {
  display: inline-block; width: 5px; height: 1em; vertical-align: -1px;
  background: var(--accent); margin-left: 2px;
  animation: artBlink 1s step-end infinite;
}
@keyframes artBlink { 50% { opacity: 0; } }

/* ── paper (research) ─────────────────────────── */
.art-paper-stack { position: relative; width: 56%; max-width: 260px; aspect-ratio: 1/1.3; }
.art-sheet {
  position: absolute; inset: 0;
  background: var(--bg); border: 1px solid var(--line);
  border-radius: 6px;
  box-shadow: 0 8px 24px -12px rgba(0,0,0,.25);
}
.art-sheet.s2 { transform: rotate(-5deg) translate(-6%, 4%); opacity: .55; }
.art-sheet.s1 { transform: rotate(3deg) translate(5%, -3%); opacity: .75; }
.art-sheet.s0 {
  padding: 9% 10%;
  display: flex; flex-direction: column;
}
.art-paper-kicker {
  font: 600 clamp(7px,3.2cqh,9px) var(--font-mono); letter-spacing: .12em;
  text-transform: uppercase; color: var(--fg-faint);
}
.art-paper-title {
  font: 700 clamp(11px,5.6cqh,16px)/1.25 var(--font-display, var(--font-sans));
  color: var(--fg); margin: 6% 0 8%;
  text-wrap: balance;
}
.art-paper-lines i {
  display: block; height: clamp(2px,1.6cqh,4px); border-radius: 2px;
  background: var(--line); margin-bottom: 5%;
}
.art-paper-chart {
  margin-top: auto;
  display: flex; gap: 6%; align-items: flex-end; height: 22%;
}
.art-paper-chart i {
  flex: 1; background: var(--bg-3);
  border: 1px solid var(--line); border-bottom: none;
  border-radius: 3px 3px 0 0;
}
.art-paper-chart i.hi { background: color-mix(in oklch, var(--accent) 25%, var(--bg-3)); border-color: var(--accent); }
.art-stamp {
  position: absolute; right: -8%; top: 10%;
  transform: rotate(10deg);
  font: 800 clamp(8px,3.8cqh,10px) var(--font-mono); letter-spacing: .1em;
  color: var(--accent); border: 2px solid var(--accent);
  padding: 3px 8px; border-radius: 4px;
  background: var(--bg);
}

/* ── wire (3d / three.js) ─────────────────────── */
.art-wire-svg {
  position: relative; width: 78%; height: 86%;
  color: var(--accent);
}
.art-wire-svg .grid line { stroke: var(--line); stroke-width: 1; }
.art-wire-svg .ring { fill: none; stroke: currentColor; stroke-width: 1; opacity: .35; }
.art-wire-svg .ring.r2 { opacity: .55; }
.art-wire-svg .globe-shell { fill: none; stroke: currentColor; stroke-width: 1.2; }
.art-wire-svg .globe-lon { fill: none; stroke: currentColor; stroke-width: .9; opacity: .55; }
.art-wire-svg .globe-lat { stroke: currentColor; stroke-width: .9; opacity: .55; }
.art-wire-svg .node { fill: var(--bg); stroke: currentColor; stroke-width: 1.2; }
.art-wire-svg .node.solid { fill: currentColor; }
.art-wire-axes line { stroke: var(--fg-faint); stroke-width: 1; }
.art-wire-axes text {
  font: 600 7px var(--font-mono); fill: var(--fg-faint);
  letter-spacing: .1em;
}
.art-wire-spin { transform-origin: 100px 60px; animation: artWireSpin 24s linear infinite; }
@keyframes artWireSpin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .art-wire-spin { animation: none; } }

/* ── label (typographic fallback) ─────────────── */
.art-label-inner {
  position: relative; text-align: center; padding: 0 10%;
  display: flex; flex-direction: column; align-items: center; gap: 8cqh;
}
.art-label-mark {
  width: 16cqh; height: 16cqh; min-width: 28px; min-height: 28px;
  border-radius: 8px;
  border: 1px solid var(--accent);
  display: grid; place-items: center;
  color: var(--accent);
  background: color-mix(in oklch, var(--accent) 10%, var(--bg));
}
.art-label-mark svg { width: 56%; height: 56%; }
.art-label-title {
  font: 700 clamp(13px,9cqh,24px)/1.15 var(--font-display, var(--font-sans));
  color: var(--fg); letter-spacing: -.01em; text-wrap: balance;
}
.art-label-tags {
  font: 500 clamp(8px,4.2cqh,11px) var(--font-mono);
  letter-spacing: .08em; text-transform: uppercase;
  color: var(--fg-faint);
}
`;

// ─────────────────────────────────────────────────

function ArtChat({ prompt = "cozy roguelikes under 4 hrs?", chips = ["Hades", "Crypt of the ND", "Moonlighter"] }) {
  return (
    <div className="art">
      <div className="art-glow" style={{ left: '-10%', top: '-20%' }} />
      <div className="art-grain" />
      <div className="art-chat-stack">
        <div className="art-bubble user">{prompt}</div>
        <div className="art-bubble bot">
          Here's what I'd start with<span className="art-cursor" />
          <div className="art-chips">
            {chips.map((c, i) => <span key={c} className={'art-chip' + (i === 0 ? ' hi' : '')}>{c}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArtWire() {
  const cx = 100, cy = 60, R = 30;
  const lats = [-0.55, 0, 0.55];
  const orbits = [
    { rx: 56, ry: 19, rot: -14, t: 0.12, r: 3.2 },
    { rx: 78, ry: 27, rot: 9,   t: 0.58, r: 4.2, solid: true },
    { rx: 94, ry: 34, rot: -4,  t: 0.83, r: 2.6 },
  ];
  const pt = (o) => {
    const a = o.t * Math.PI * 2;
    return { x: Math.cos(a) * o.rx, y: Math.sin(a) * o.ry };
  };
  return (
    <div className="art">
      <div className="art-glow" style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '70%' }} />
      <svg className="art-wire-svg" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet">
        {/* perspective floor grid */}
        <g className="grid">
          {[-80,-48,-20,0,20,48,80].map(x => <line key={'v'+x} x1={cx+x*0.35} y1={92} x2={cx+x} y2={118} />)}
          {[96,102,109,118].map(y => <line key={'h'+y} x1={4} y1={y} x2={196} y2={y} />)}
        </g>
        {/* axes gizmo */}
        <g className="art-wire-axes" transform="translate(18 18)">
          <line x1="0" y1="0" x2="14" y2="0" /><text x="16" y="2">X</text>
          <line x1="0" y1="0" x2="0" y2="-12" /><text x="-2" y="-14">Y</text>
          <line x1="0" y1="0" x2="-9" y2="7" /><text x="-16" y="12">Z</text>
        </g>
        {/* orbit rings + bodies */}
        <g className="art-wire-spin">
          {orbits.map((o, i) => (
            <g key={i} transform={`rotate(${o.rot} ${cx} ${cy})`}>
              <ellipse className={'ring r'+i} cx={cx} cy={cy} rx={o.rx} ry={o.ry} />
              {(() => { const p = pt(o); return (
                <circle className={'node' + (o.solid ? ' solid' : '')} cx={cx+p.x} cy={cy+p.y} r={o.r} />
              ); })()}
            </g>
          ))}
        </g>
        {/* wireframe globe */}
        <g>
          <circle className="globe-shell" cx={cx} cy={cy} r={R} />
          {[0.28, 0.62, 0.9].map((k,i) => (
            <ellipse key={'lon'+i} className="globe-lon" cx={cx} cy={cy} rx={R*k} ry={R} />
          ))}
          {lats.map((s,i) => (
            <line key={'lat'+i} className="globe-lat" x1={cx-R*Math.cos(Math.asin(s))} x2={cx+R*Math.cos(Math.asin(s))} y1={cy+R*s} y2={cy+R*s} />
          ))}
          <circle className="node solid" cx={cx} cy={cy} r="2.4" />
        </g>
      </svg>
    </div>
  );
}

function ArtPaper({ kicker = "Research · 28 pp", title, stamp = "Peer reviewed" }) {
  const bars = [38, 62, 90, 54, 71];
  return (
    <div className="art">
      <div className="art-glow" style={{ right: '-15%', bottom: '-25%' }} />
      <div className="art-grain" />
      <div className="art-paper-stack">
        <div className="art-sheet s2" />
        <div className="art-sheet s1" />
        <div className="art-sheet s0">
          <div className="art-paper-kicker">{kicker}</div>
          <div className="art-paper-title">{title}</div>
          <div className="art-paper-lines">
            <i style={{ width: '100%' }} /><i style={{ width: '92%' }} />
            <i style={{ width: '96%' }} /><i style={{ width: '70%' }} />
          </div>
          <div className="art-paper-chart">
            {bars.map((h, i) => <i key={i} className={i === 2 ? 'hi' : ''} style={{ height: h + '%' }} />)}
          </div>
          {stamp && <span className="art-stamp">{stamp}</span>}
        </div>
      </div>
    </div>
  );
}

const GLYPHS = {
  controller: <path d="M6 9h2m-1-1v2m8 0h.01M17 9h.01M5.5 7h13a3 3 0 0 1 2.9 3.7l-1 4A3 3 0 0 1 17.5 17H17l-2-2h-6l-2 2h-.5a3 3 0 0 1-2.9-2.3l-1-4A3 3 0 0 1 5.5 7Z" />,
  spark: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8M5.6 18.4l2.8-2.8m7.2-7.2 2.8-2.8" />,
  code: <path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 5l-4 14" />,
};

function ArtLabel({ title, tags = [], glyph = 'spark' }) {
  return (
    <div className="art">
      <div className="art-glow" style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }} />
      <div className="art-grain" />
      <div className="art-label-inner">
        <div className="art-label-mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{GLYPHS[glyph] || GLYPHS.spark}</svg>
        </div>
        <div className="art-label-title">{title}</div>
        {tags.length > 0 && <div className="art-label-tags">{tags.slice(0, 3).join(' · ')}</div>}
      </div>
    </div>
  );
}

function Artwork({ project }) {
  const art = project.art || {};
  switch (art.kind) {
    case 'chat':
      return <ArtChat prompt={art.prompt} chips={art.chips} />;
    case 'wire':
      return <ArtWire />;
    case 'paper':
      return <ArtPaper kicker={art.kicker} title={art.title || project.title} stamp={art.stamp} />;
    default:
      return <ArtLabel title={project.title} tags={project.tech} glyph={art.glyph || (project.tags?.includes('game') ? 'controller' : project.tags?.includes('ai') ? 'spark' : 'code')} />;
  }
}

Object.assign(window, { Artwork, artworkStyles });
