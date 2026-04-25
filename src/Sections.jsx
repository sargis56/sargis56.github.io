// ───────────────────────────────────────────────────────────
// Supporting sections: stats · experience · skills · workshop · about · contact
// ───────────────────────────────────────────────────────────

const sectionStyles = `
/* ── Stats bar ──────────────────────────────────────────── */
.stats {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  border: 1px solid var(--line); border-radius: var(--radius-lg);
  background: var(--bg-2); overflow: hidden;
}
.stat { padding: 28px 26px; border-right: 1px solid var(--line); }
.stat:last-child { border-right: none; }
.stat-val {
  font: 600 clamp(32px, 4vw, 48px)/1 var(--font-display);
  letter-spacing: -.02em; color: var(--accent);
}
[data-theme="print"] .stat-val { font-weight: 400; }
.stat-label { font: 500 12px/1.4 var(--font-mono); color: var(--fg-dim); margin-top: 10px; max-width: 24ch; }
a.stat { transition: background .15s; }
a.stat:hover { background: var(--bg-3); }
a.stat .stat-label::after { content: ' →'; color: var(--accent); }
@media (max-width: 860px) { .stat { border-right: none; border-bottom: 1px solid var(--line); } }

/* ── Experience timeline ────────────────────────────────── */
.xp { display: flex; flex-direction: column; }
.xp-row {
  display: grid; grid-template-columns: 180px 1px 1fr;
  gap: 32px; padding: 28px 0;
}
.xp-when { font: 500 12px var(--font-mono); color: var(--fg-faint); letter-spacing: .04em; text-align: right; padding-top: 4px; }
.xp-line { background: var(--line); position: relative; }
.xp-line::before {
  content: ''; position: absolute; left: 50%; top: 8px; transform: translateX(-50%);
  width: 9px; height: 9px; border-radius: 50%;
  background: var(--bg); border: 2px solid var(--accent);
}
.xp-row:hover .xp-line::before { background: var(--accent); box-shadow: 0 0 12px var(--accent); }
.xp-role { font: 600 19px var(--font-display); }
.xp-org  { font: 500 13px var(--font-mono); color: var(--accent); margin: 4px 0 10px; }
.xp-org a:hover { text-decoration: underline; }
.xp-sum  { color: var(--fg-dim); max-width: 64ch; line-height: 1.6; font-size: 14.5px; }
@media (max-width: 720px) {
  .xp-row { grid-template-columns: 1px 1fr; gap: 20px; }
  .xp-when { grid-column: 2; text-align: left; order: -1; padding: 0 0 6px; }
  .xp-line { grid-row: 1 / span 2; }
}

/* ── Skills ─────────────────────────────────────────────── */
.skills { display: grid; gap: 28px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
.skill-group { border-left: 2px solid var(--line); padding-left: 18px; }
.skill-group:hover { border-color: var(--accent); }
.skill-head { font: 600 11px var(--font-mono); letter-spacing: .12em; text-transform: uppercase; color: var(--fg-dim); margin-bottom: 12px; }
.skill-chips { display: flex; flex-wrap: wrap; gap: 7px; }

/* ── Workshop / mods ────────────────────────────────────── */
.mods-intro {
  display: grid; gap: 32px; grid-template-columns: 1.2fr 1fr;
  padding: 28px; border: 1px solid var(--line); border-radius: var(--radius-lg);
  background: var(--bg-2); align-items: center;
}
@media (max-width: 860px) { .mods-intro { grid-template-columns: 1fr; } }
.mods-blurb { font-size: 15px; line-height: 1.7; color: var(--fg-dim); }
.mods-blurb strong { color: var(--fg); }
.mods-figure { text-align: center; display: flex; flex-direction: column; gap: 16px; }
.mods-figure-img {
  width: 100%; aspect-ratio: 16/7; object-fit: cover;
  border-radius: var(--radius); border: 1px solid var(--line);
  background: var(--bg-3);
}
.mods-figure-cap { font: 500 11px var(--font-mono); color: var(--fg-faint); letter-spacing: .04em; }
.mods-total {
  font: 600 clamp(40px, 5vw, 64px)/1 var(--font-display); color: var(--accent);
  letter-spacing: -.02em; display: block;
}
[data-theme="print"] .mods-total { font-weight: 400; }
.mods-total-label { font: 500 11px var(--font-mono); letter-spacing: .12em; text-transform: uppercase; color: var(--fg-faint); margin-top: 8px; }
.mods-skills { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 18px; }
.mods-subhead {
  display: flex; align-items: baseline; justify-content: space-between; gap: 16px;
  margin: 36px 0 16px; font-size: 12px; flex-wrap: wrap;
}
.mods-all { font: 500 12px var(--font-mono); color: var(--accent); }
.mods-all:hover { text-decoration: underline; }
.mods-grid { display: grid; gap: 14px; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
.mod {
  border: 1px solid var(--line); border-radius: var(--radius);
  background: var(--bg-2); padding: 16px 18px;
  display: flex; align-items: center; gap: 16px;
  transition: border-color .15s;
}
.mod:hover { border-color: var(--accent); }
.mod-ico {
  width: 44px; height: 44px; border-radius: var(--radius);
  background: var(--bg-3); border: 1px solid var(--line);
  display: grid; place-items: center;
  font: 700 10px var(--font-mono); color: var(--fg-faint);
  flex-shrink: 0;
}
.mod-body { flex: 1; min-width: 0; }
.mod-title { font: 600 14px var(--font-display); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mod-kind  { font: 500 11px var(--font-mono); color: var(--fg-faint); }
.mod-subs  { font: 700 15px var(--font-mono); color: var(--accent); text-align: right; }
.mod-subs span { display: block; font: 500 9px var(--font-mono); color: var(--fg-faint); letter-spacing: .08em; }

/* ── About ──────────────────────────────────────────────── */
.about { display: grid; gap: 48px; grid-template-columns: 1fr 1.4fr; align-items: start; }
@media (max-width: 860px) { .about { grid-template-columns: 1fr; } }
.about-photo {
  aspect-ratio: 4/5; width: 100%;
  border: 1px solid var(--line); border-radius: var(--radius-lg);
  overflow: hidden; background: var(--bg-2);
}
.about-photo img {
  width: 100%; height: 100%; display: block;
  object-fit: cover; object-position: 70% 30%;
}
@media (max-width: 860px) { .about-photo { max-width: 360px; } }
.about-bio { font-size: 17px; line-height: 1.7; color: var(--fg); max-width: 58ch; }
.about-bio p + p { margin-top: 16px; }
.edu { margin-top: 32px; border-top: 1px solid var(--line); padding-top: 24px; }
.edu-row { display: flex; justify-content: space-between; gap: 16px; padding: 10px 0; font-size: 14px; }
.edu-school { font-weight: 600; }
.edu-cred { color: var(--fg-dim); }
.edu-note {
  margin-top: 4px; font: 500 12px var(--font-mono);
  color: var(--accent); letter-spacing: 0.02em;
}
.edu-when { font: 500 12px var(--font-mono); color: var(--fg-faint); white-space: nowrap; }

/* ── Contact ────────────────────────────────────────────── */
.contact {
  text-align: center; padding: 80px 24px;
  border: 1px solid var(--line); border-radius: var(--radius-lg);
  background:
    radial-gradient(ellipse 60% 80% at 50% 0%, color-mix(in oklch, var(--accent) 12%, transparent), transparent 70%),
    var(--bg-2);
}
.contact-title { font: 500 clamp(32px, 5vw, 56px)/1.1 var(--font-display); letter-spacing: -.01em; }
[data-theme="print"] .contact-title { font-weight: 400; font-style: italic; }
.contact-sub { color: var(--fg-dim); margin: 14px auto 32px; max-width: 48ch; }
.contact-ctas { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.contact-links {
  margin-top: 36px; display: flex; gap: 24px; justify-content: center;
  font: 500 13px var(--font-mono); color: var(--fg-dim);
}
.contact-links a:hover { color: var(--accent); }

/* ── Resume picker ─────────────────────────────────────── */
.resume-picker {
  margin: 40px auto 0;
  max-width: 640px;
  display: flex; flex-direction: column; gap: 16px;
  align-items: center;
}
.resume-picker-label {
  font: 500 11px var(--font-mono); letter-spacing: .14em;
  text-transform: uppercase; color: var(--fg-faint);
  display: flex; align-items: center; gap: 12px;
}
.resume-picker-label::before,
.resume-picker-label::after {
  content: ''; width: 32px; height: 1px; background: var(--line);
}
.resume-picker-row {
  display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%;
}
@media (max-width: 560px) {
  .resume-picker-row { grid-template-columns: 1fr; }
}
.resume-card {
  position: relative;
  display: grid; gap: 4px;
  padding: 18px 22px 20px;
  border: 1px solid var(--line); border-radius: var(--radius);
  background: var(--bg);
  text-align: left;
  transition: border-color .15s, transform .15s, background .15s;
}
.resume-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  background: var(--bg-3);
}
.resume-card-kicker {
  font: 600 10px var(--font-mono); letter-spacing: .14em;
  text-transform: uppercase; color: var(--accent);
}
.resume-card-title {
  font: 600 18px var(--font-display); letter-spacing: -.005em;
  margin-top: 2px;
}
[data-theme="print"] .resume-card-title { font-weight: 400; }
.resume-card-sub {
  font: 500 12px var(--font-mono); color: var(--fg-dim);
  letter-spacing: .02em; margin-top: 2px;
}
.resume-card-arrow {
  position: absolute; top: 16px; right: 18px;
  font: 600 16px var(--font-mono); color: var(--fg-faint);
  transition: color .15s, transform .15s;
}
.resume-card:hover .resume-card-arrow {
  color: var(--accent); transform: translate(2px, -2px);
}

.footer {
  padding: 32px 0 40px; text-align: center;
  font: 500 11px var(--font-mono); color: var(--fg-faint); letter-spacing: .06em;
}
`;

function StatsBar() {
  return (
    <div className="stats">
      {STATS.map((s, i) => {
        const Tag = s.href ? 'a' : 'div';
        return (
          <Tag key={i} className="stat" href={s.href}>
            <div className="stat-val">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </Tag>
        );
      })}
    </div>
  );
}

function Experience() {
  return (
    <div className="xp">
      {EXPERIENCE.map((e, i) => (
        <div key={i} className="xp-row">
          <div className="xp-when">{e.when}</div>
          <div className="xp-line" />
          <div>
            <div className="xp-role">{e.role}</div>
            <div className="xp-org">{e.href ? <a href={e.href}>{e.org} →</a> : e.org}</div>
            <p className="xp-sum">{e.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      {Object.entries(SKILLS).map(([group, items]) => (
        <div key={group} className="skill-group">
          <div className="skill-head">{group}</div>
          <div className="skill-chips">
            {items.map(s => <span key={s} className="chip">{s}</span>)}
          </div>
        </div>
      ))}
    </div>
  );
}

function Workshop() {
  const total = MODS.reduce((a, m) => a + m.subs, 0);
  const fmt = n => n.toLocaleString();
  const skills = ['Lua scripting', '3D modelling', 'Rigging & animation', 'Texturing', 'Source Engine', 'Hammer Editor'];
  return (
    <>
      <div className="mods-intro">
        <div>
          <p className="mods-blurb">
            <strong>Steam Workshop</strong> is where players publish custom content (weapons, characters, maps) for the games they love, and other players install it with one click. I've been building and shipping mods there since <strong>2017</strong>: scripting behaviour in <strong>Lua</strong>, modelling and rigging assets in Blender and 3DS Max, and wiring it all into the <strong>Source Engine</strong>. It's how I learned to ship for real players and keep things working after launch.
          </p>
          <div className="mods-skills">
            {skills.map(s => <span key={s} className="chip">{s}</span>)}
          </div>
        </div>
        <div className="mods-figure">
          <img className="mods-figure-img" src="assets/projects/misc-1.jpg" alt="3D weapon model" loading="lazy" />
          <div>
            <span className="mods-total">{fmt(total)}+</span>
            <div className="mods-total-label">Subscribers · {MODS_TOTAL} mods published · 8+ yrs</div>
          </div>
          <div className="mods-figure-cap">Weapon model render · 3DS Max</div>
        </div>
      </div>
      <div className="mods-subhead">
        <span className="mono dim">Most popular · {MODS.length} of {MODS_TOTAL}</span>
        {MODS_WORKSHOP_URL && MODS_WORKSHOP_URL !== '#' && (
          <a className="mods-all" href={MODS_WORKSHOP_URL} target="_blank">View all {MODS_TOTAL} on Steam ↗</a>
        )}
      </div>
      <div className="mods-grid">
        {MODS.map((m, i) => {
          const Tag = m.href ? 'a' : 'div';
          return (
            <Tag key={i} className="mod" href={m.href} target={m.href ? '_blank' : undefined} rel={m.href ? 'noopener' : undefined}>
              <div className="mod-ico">{m.game === "Garry's Mod" ? 'GMOD' : 'PVK'}</div>
              <div className="mod-body">
                <div className="mod-title">{m.title}</div>
                <div className="mod-kind">{m.kind} · {m.game}</div>
              </div>
              <div className="mod-subs">{fmt(m.subs)}<span>SUBS</span></div>
            </Tag>
          );
        })}
      </div>
    </>
  );
}

function About() {
  return (
    <div className="about">
      <div className="about-photo"><img src="assets/sargis.jpg" alt="Sargis Nahapetyan" /></div>
      <div>
        <div className="about-bio">
          <p>{PROFILE.bio}</p>
          <p className="dim">Outside of work I'm usually modding. My Garry's Mod and PVKII workshop content has reached over 150,000 players. I also spent three years as a TA at Humber, teaching Linear Algebra, Graphics, and both major engines.</p>
        </div>
        <div className="edu">
          {EDUCATION.map((e, i) => (
            <div key={i} className="edu-row">
              <div>
                <div className="edu-school">{e.school}</div>
                <div className="edu-cred">{e.cred}</div>
                {e.note && <div className="edu-note">{e.note}</div>}
              </div>
              <div className="edu-when">{e.when}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <>
      <div className="contact">
        <h2 className="contact-title">Let's build something.</h2>
        <p className="contact-sub">Open to game programming and applied-AI roles. Toronto-based, remote-friendly.</p>
        <div className="contact-ctas">
          <a className="btn btn-primary" href={'mailto:' + PROFILE.email}>Email me</a>
          <a className="btn" href={PROFILE.links.linkedin} target="_blank" rel="noopener">LinkedIn</a>
        </div>

        <div className="resume-picker">
          <div className="resume-picker-label">Grab a resume</div>
          <div className="resume-picker-row">
            <a className="resume-card" href="Resume - AI.html" target="_blank">
              <span className="resume-card-kicker">01 / for</span>
              <span className="resume-card-title">AI &amp; ML roles</span>
              <span className="resume-card-sub">RAG · LLMs · fine-tuning · evals</span>
              <span className="resume-card-arrow">→</span>
            </a>
            <a className="resume-card" href="Resume - Gaming.html" target="_blank">
              <span className="resume-card-kicker">02 / for</span>
              <span className="resume-card-title">Game dev roles</span>
              <span className="resume-card-sub">Engines · gameplay · graphics · shipped</span>
              <span className="resume-card-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="contact-links">
          <a href={'mailto:' + PROFILE.email}>{PROFILE.email}</a>
        </div>
      </div>
      <div className="footer">© {new Date().getFullYear()} {PROFILE.name} · built with care</div>
    </>
  );
}

function SectionHead({ kicker, title, sub }) {
  return (
    <header className="section-head">
      <div>
        <div className="section-kicker">{kicker}</div>
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-sub">{sub}</p>}
      </div>
      <div className="rule" />
    </header>
  );
}

Object.assign(window, { StatsBar, Experience, Skills, Workshop, About, Contact, SectionHead, sectionStyles });
