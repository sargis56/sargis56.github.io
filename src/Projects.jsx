// ───────────────────────────────────────────────────────────
// Projects: featured strip · filterable grid · deep-dive modal
// ───────────────────────────────────────────────────────────

const projectStyles = `
/* ── Featured ───────────────────────────────────────────── */
.feat-grid {
  display: grid; gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
}
.feat {
  position: relative;
  border: 1px solid var(--line); border-radius: var(--radius-lg);
  background: var(--bg-2);
  overflow: hidden; cursor: pointer;
  transition: transform .25s ease, border-color .2s, box-shadow .25s;
  display: flex; flex-direction: column;
}
.feat:hover { transform: translateY(-6px); border-color: var(--accent); box-shadow: var(--shadow); }
.feat-media { aspect-ratio: 16/9; border-radius: 0; border: none; border-bottom: 1px solid var(--line); }
.feat-media img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform .5s ease; }
.feat:hover .feat-media img { transform: scale(1.06); }
.feat-body { padding: 22px 22px 24px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
.feat-top { display: flex; align-items: center; gap: 10px; }
.feat-idx { font: 700 11px var(--font-mono); color: var(--accent); letter-spacing: .1em; }
.feat-title { font: 600 26px/1.1 var(--font-display); letter-spacing: -.01em; }
[data-theme="print"] .feat-title { font-weight: 400; font-size: 30px; }
.feat-tagline { color: var(--fg-dim); font-size: 15px; }
.feat-meta { margin-top: auto; display: flex; flex-wrap: wrap; gap: 6px; }
.feat-role {
  font: 500 11px var(--font-mono); letter-spacing: .04em;
  color: var(--fg-faint); margin-top: 2px;
}
.feat-cta {
  position: absolute; top: 16px; right: 16px;
  width: 38px; height: 38px; border-radius: 50%;
  border: 1px solid var(--line); background: var(--bg);
  display: grid; place-items: center;
  font: 600 16px var(--font-mono); color: var(--fg-dim);
  transition: all .2s;
}
.feat:hover .feat-cta { background: var(--accent); color: var(--bg); border-color: var(--accent); transform: rotate(45deg); }

/* ── Filter pills ───────────────────────────────────────── */
.filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
.filter {
  padding: 8px 16px; border-radius: 999px;
  border: 1px solid var(--line); background: var(--bg-2);
  font: 500 12px var(--font-mono); letter-spacing: .04em;
  color: var(--fg-dim); cursor: pointer; transition: all .15s;
  white-space: nowrap;
}
.filter:hover { color: var(--fg); border-color: var(--fg-faint); }
.filter.on { background: var(--accent); color: var(--bg); border-color: var(--accent); }
.filter .count { opacity: .6; margin-left: 6px; }

/* ── Grid layouts ───────────────────────────────────────── */
.proj-grid { display: grid; gap: 16px; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
.proj-grid.list { grid-template-columns: 1fr; gap: 0; }

.pcard {
  border: 1px solid var(--line); border-radius: var(--radius);
  background: var(--bg-2); padding: 18px;
  cursor: pointer; transition: all .2s;
  display: flex; flex-direction: column; gap: 10px;
  animation: slideUp .35s ease both;
}
.pcard:hover { border-color: var(--accent); transform: translateY(-3px); }
.pcard-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
.pcard-title { font: 600 17px var(--font-display); letter-spacing: -.005em; }
.pcard-tags { display: flex; gap: 6px; flex-shrink: 0; }
.pcard-tag {
  font: 600 9px var(--font-mono); letter-spacing: .08em; text-transform: uppercase;
  padding: 3px 7px; border-radius: 4px; background: var(--bg-3); color: var(--fg-dim);
  white-space: nowrap;
}
.pcard-tag.game { color: var(--accent); }
.pcard-tag.ai   { color: var(--accent-2); }
.pcard-tagline { color: var(--fg-dim); font-size: 13.5px; line-height: 1.45; }
.pcard-tech { display: flex; flex-wrap: wrap; gap: 5px; margin-top: auto; }
.pcard-tech .chip { font-size: 10px; padding: 3px 8px; }

/* list rows */
.proj-grid.list .pcard {
  flex-direction: row; align-items: center; gap: 20px;
  border-radius: 0; border-width: 0 0 1px 0; padding: 20px 8px;
  background: transparent;
}
.proj-grid.list .pcard:hover { transform: none; background: var(--bg-2); }
.proj-grid.list .pcard-head { flex-direction: column; align-items: flex-start; gap: 4px; min-width: 220px; }
.proj-grid.list .pcard-tagline { flex: 1; }
.proj-grid.list .pcard-tech { margin: 0; justify-content: flex-end; max-width: 300px; }
@media (max-width: 760px) { .proj-grid.list .pcard { flex-direction: column; align-items: flex-start; } }

/* ── Modal ──────────────────────────────────────────────── */
.modal-backdrop {
  position: fixed; inset: 0; z-index: 100;
  background: color-mix(in oklch, var(--bg) 70%, black 20%);
  backdrop-filter: blur(6px);
  display: grid; place-items: center; padding: 32px;
  animation: backdropIn .2s ease both;
}
.modal {
  width: min(980px, 100%); max-height: 88vh; overflow-y: auto;
  background: var(--bg-2); border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  animation: modalIn .3s cubic-bezier(.2,.9,.3,1.2) both;
}
.modal-media { aspect-ratio: 21/9; border: none; border-bottom: 1px solid var(--line); border-radius: 0; }
.modal-media img { width: 100%; height: 100%; display: block; object-fit: cover; }
.modal-body { padding: 32px 36px 40px; }
.modal-head { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 8px; flex-wrap: wrap; }
.modal-title { font: 600 38px/1.05 var(--font-display); letter-spacing: -.01em; }
[data-theme="print"] .modal-title { font-weight: 400; font-size: 44px; }
.modal-tagline { color: var(--fg-dim); font-size: 16px; margin-bottom: 20px; }
.modal-grid { display: grid; gap: 32px; grid-template-columns: 2fr 1fr; }
@media (max-width: 720px) { .modal-grid { grid-template-columns: 1fr; } .modal-body { padding: 24px; } }
.modal-bullets { display: flex; flex-direction: column; gap: 12px; }
.modal-bullets li { list-style: none; position: relative; padding-left: 22px; color: var(--fg); line-height: 1.55; }
.modal-bullets li::before {
  content: '▸'; position: absolute; left: 0; color: var(--accent);
  font: 600 13px var(--font-mono);
}
.modal-aside { display: flex; flex-direction: column; gap: 22px; }
.modal-label { font: 600 10px var(--font-mono); letter-spacing: .14em; text-transform: uppercase; color: var(--fg-faint); margin-bottom: 8px; }
.modal-role { font: 500 14px var(--font-mono); color: var(--accent); }
.modal-tech { display: flex; flex-wrap: wrap; gap: 6px; }
.modal-links { display: flex; flex-direction: column; gap: 8px; }
.modal-links a {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 14px; border: 1px solid var(--line); border-radius: var(--radius);
  font: 500 13px var(--font-mono); transition: all .15s;
}
.modal-links a:hover { border-color: var(--accent); color: var(--accent); }
.modal-gallery { margin-top: 36px; }
.modal-gallery-grid {
  display: grid; gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.modal-gallery-grid img {
  width: 100%; aspect-ratio: 16/9; object-fit: cover;
  border-radius: 6px; border: 1px solid var(--line);
  cursor: zoom-in; transition: border-color .15s, transform .15s;
}
.modal-gallery-grid img:hover { border-color: var(--accent); transform: translateY(-2px); }
.lightbox {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(0,0,0,.92); display: grid; place-items: center;
  padding: 40px; cursor: zoom-out; animation: backdropIn .15s ease both;
}
.lightbox img {
  max-width: calc(100vw - 80px); max-height: calc(100vh - 80px); object-fit: contain;
  border-radius: 4px; cursor: zoom-out;
}
.lightbox-close {
  position: absolute; top: 18px; right: 18px;
  width: 40px; height: 40px; border-radius: 50%;
  background: rgba(0,0,0,.5); border: 1px solid rgba(255,255,255,.25);
  color: #fff; font: 400 22px/1 var(--font-mono);
  display: grid; place-items: center; cursor: pointer;
}
.lightbox-close:hover { background: var(--accent); border-color: var(--accent); }
.lightbox-nav {
  position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%);
  font: 500 12px var(--font-mono); color: rgba(255,255,255,.6);
  display: flex; gap: 16px; align-items: center;
}
.lightbox-nav button { color: rgba(255,255,255,.9); padding: 6px 10px; }
.lightbox-nav button:hover { color: var(--accent); }
.modal-nav {
  display: flex; justify-content: space-between; align-items: center;
  padding: 16px 24px; border-top: 1px solid var(--line);
  font: 500 12px var(--font-mono); color: var(--fg-dim);
}
.modal-nav button:hover { color: var(--accent); }
.modal-close {
  position: absolute; top: 16px; right: 16px;
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--bg); border: 1px solid var(--line);
  font: 400 20px var(--font-mono); display: grid; place-items: center;
  transition: all .15s;
}
.modal-close:hover { background: var(--accent); color: var(--bg); transform: rotate(90deg); }
`;

const LINK_LABELS = {
  steam: 'Steam', itch: 'itch.io', hf: 'Hugging Face',
  github: 'GitHub', live: 'Live demo', site: 'Website', paper: 'Read the paper',
};

function Media({ project, cls, focus }) {
  if (project.cover) {
    return (
      <div className={'ph ' + cls}>
        <img src={project.cover} alt={project.title} loading="lazy"
             style={{ objectPosition: focus || project.coverFocus || 'center' }} />
      </div>
    );
  }
  return <div className={'ph ' + cls}><Artwork project={project} /></div>;
}

function FeaturedStrip({ onOpen }) {
  const feats = PROJECTS.filter(p => p.featured);
  return (
    <div className="feat-grid">
      {feats.map((p, i) => (
        <article key={p.id} className="feat" onClick={() => onOpen(p.id)}>
          <Media project={p} cls="feat-media" />
          <div className="feat-body">
            <div className="feat-top">
              <span className="feat-idx">{String(i + 1).padStart(2, '0')}</span>
              {p.tags.map(t => <span key={t} className={'pcard-tag ' + t}>{TAGS[t]}</span>)}
            </div>
            <h3 className="feat-title">{p.title}</h3>
            <div className="feat-role">{p.role}</div>
            <p className="feat-tagline">{p.tagline}</p>
            <div className="feat-meta">
              {p.tech.slice(0, 4).map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>
          <div className="feat-cta">↗</div>
        </article>
      ))}
    </div>
  );
}

function ProjectGrid({ layout, onOpen }) {
  const [filter, setFilter] = React.useState('all');
  const counts = React.useMemo(() => {
    const c = { all: PROJECTS.length };
    PROJECTS.forEach(p => p.tags.forEach(t => c[t] = (c[t] || 0) + 1));
    return c;
  }, []);
  const shown = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(filter));

  return (
    <>
      <div className="filters">
        {Object.entries(TAGS).map(([k, label]) =>
          (counts[k] || k === 'all') && (
            <button key={k} className={'filter' + (filter === k ? ' on' : '')} onClick={() => setFilter(k)}>
              {label}<span className="count">{counts[k] || 0}</span>
            </button>
          )
        )}
      </div>
      <div className={'proj-grid ' + (layout === 'list' ? 'list' : '')}>
        {shown.map(p => (
          <article key={p.id + filter} className="pcard" onClick={() => onOpen(p.id)}>
            <div className="pcard-head">
              <h4 className="pcard-title">{p.title}</h4>
              <div className="pcard-tags">
                {p.tags.map(t => <span key={t} className={'pcard-tag ' + t}>{TAGS[t]}</span>)}
              </div>
            </div>
            <p className="pcard-tagline">{p.tagline}</p>
            <div className="pcard-tech">
              {p.tech.slice(0, 4).map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function ProjectModal({ id, onClose, onNav }) {
  const idx = PROJECTS.findIndex(p => p.id === id);
  const p = PROJECTS[idx];
  const [zoom, setZoom] = React.useState(-1);

  React.useEffect(() => { setZoom(-1); }, [id]);

  const zoomRef = React.useRef(zoom); zoomRef.current = zoom;
  const navRef = React.useRef(onNav); navRef.current = onNav;
  const closeRef = React.useRef(onClose); closeRef.current = onClose;
  const imgsRef = React.useRef(p?.images); imgsRef.current = p?.images;

  React.useEffect(() => {
    const h = (e) => {
      const z = zoomRef.current, imgs = imgsRef.current;
      if (e.key === 'Escape') { z >= 0 ? setZoom(-1) : closeRef.current(); }
      if (e.key === 'ArrowRight') { z >= 0 && imgs ? setZoom((z + 1) % imgs.length) : navRef.current(1); }
      if (e.key === 'ArrowLeft')  { z >= 0 && imgs ? setZoom((z - 1 + imgs.length) % imgs.length) : navRef.current(-1); }
    };
    window.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', h);
      document.body.style.overflow = '';
    };
  }, []);

  if (!p) return null;
  const links = Object.entries(p.links || {}).filter(([, v]) => v);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} data-screen-label={'Project: ' + p.title}>
        <Media project={p} cls="modal-media" />
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <div className="modal-head">
            <h2 className="modal-title">{p.title}</h2>
            <div style={{ display: 'flex', gap: 6, marginLeft: 'auto' }}>
              {p.tags.map(t => <span key={t} className={'pcard-tag ' + t}>{TAGS[t]}</span>)}
            </div>
          </div>
          <p className="modal-tagline">{p.tagline}</p>

          <div className="modal-grid">
            <ul className="modal-bullets">
              {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <aside className="modal-aside">
              <div>
                <div className="modal-label">My role</div>
                <div className="modal-role">{p.role}</div>
              </div>
              <div>
                <div className="modal-label">Tech</div>
                <div className="modal-tech">
                  {p.tech.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
              {links.length > 0 && (
                <div>
                  <div className="modal-label">Links</div>
                  <div className="modal-links">
                    {links.map(([k, v]) => (
                      <a key={k} href={v} target="_blank">{LINK_LABELS[k] || k}<span>↗</span></a>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
          {p.images && p.images.length > 1 && (
            <div className="modal-gallery">
              <div className="modal-label">Screenshots · {p.images.length}</div>
              <div className="modal-gallery-grid">
                {p.images.map((src, i) => (
                  <img key={src} src={src} alt="" loading="lazy" onClick={() => setZoom(i)} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="modal-nav">
          <button onClick={() => onNav(-1)}>← {PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length].title}</button>
          <span className="faint">{idx + 1} / {PROJECTS.length}</span>
          <button onClick={() => onNav(1)}>{PROJECTS[(idx + 1) % PROJECTS.length].title} →</button>
        </div>
      </div>
      {zoom >= 0 && p.images && (
        <div className="lightbox" onClick={e => { e.stopPropagation(); setZoom(-1); }}>
          <img src={p.images[zoom]} alt="" />
          <button className="lightbox-close" aria-label="Close">×</button>
          {p.images.length > 1 && (
            <div className="lightbox-nav" onClick={e => e.stopPropagation()}>
              <button onClick={() => setZoom((zoom - 1 + p.images.length) % p.images.length)}>←</button>
              <span>{zoom + 1} / {p.images.length}</span>
              <button onClick={() => setZoom((zoom + 1) % p.images.length)}>→</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { FeaturedStrip, ProjectGrid, ProjectModal, Media, projectStyles });
