// ───────────────────────────────────────────────────────────
// Tweaks panel + host protocol
// ───────────────────────────────────────────────────────────

const tweakStyles = `
.tweaks {
  position: fixed; bottom: 20px; right: 20px; z-index: 200;
  width: 280px;
  background: var(--bg-2); border: 1px solid var(--line);
  border-radius: var(--radius-lg); box-shadow: var(--shadow);
  font: 500 12px var(--font-mono);
  overflow: hidden;
}
.tweaks-head {
  padding: 12px 16px; border-bottom: 1px solid var(--line);
  display: flex; align-items: center; justify-content: space-between;
  font-weight: 700; letter-spacing: .08em; text-transform: uppercase; font-size: 11px;
}
.tweaks-body { padding: 14px 16px 16px; display: flex; flex-direction: column; gap: 14px; max-height: 60vh; overflow-y: auto; }
.tk-label { font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: var(--fg-faint); margin-bottom: 6px; }
.tk-seg { display: flex; gap: 4px; background: var(--bg-3); padding: 3px; border-radius: var(--radius); }
.tk-seg button {
  flex: 1; padding: 7px 4px; border-radius: calc(var(--radius) - 2px);
  font: 600 10.5px var(--font-mono); color: var(--fg-dim);
  text-transform: capitalize;
}
.tk-seg button.on { background: var(--accent); color: var(--bg); }
.tk-slider { width: 100%; accent-color: var(--accent); }
.tk-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.tk-check { width: 34px; height: 20px; background: var(--bg-3); border-radius: 999px; position: relative; cursor: pointer; border: 1px solid var(--line); }
.tk-check::after { content:''; position:absolute; top:1px; left:1px; width:16px; height:16px; border-radius:50%; background: var(--fg-faint); transition: all .15s; }
.tk-check.on { background: var(--accent); border-color: var(--accent); }
.tk-check.on::after { left: 15px; background: var(--bg); }
`;

function useTweaks(defaults) {
  const [tk, setTk] = React.useState(defaults);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === '__activate_edit_mode') setVisible(true);
      if (e.data?.type === '__deactivate_edit_mode') setVisible(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const update = (patch) => {
    setTk(prev => {
      const next = { ...prev, ...patch };
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
      return next;
    });
  };

  return [tk, update, visible];
}

function Seg({ value, options, onChange }) {
  return (
    <div className="tk-seg">
      {options.map(o => (
        <button key={o} className={value === o ? 'on' : ''} onClick={() => onChange(o)}>{o}</button>
      ))}
    </div>
  );
}

function TweaksPanel({ tk, update }) {
  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <span>Tweaks</span>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
      </div>
      <div className="tweaks-body">
        <div>
          <div className="tk-label">Theme</div>
          <Seg value={tk.theme} options={['engine', 'signal', 'print']} onChange={v => update({ theme: v })} />
        </div>
        <div>
          <div className="tk-label">Hero variant</div>
          <Seg value={tk.heroVariant} options={['split', 'boot', 'orbit']} onChange={v => update({ heroVariant: v })} />
        </div>
        <div>
          <div className="tk-label">Accent hue · {tk.accentHue}°</div>
          <input className="tk-slider" type="range" min="0" max="360" value={tk.accentHue}
            onChange={e => update({ accentHue: +e.target.value })} />
        </div>
        <div>
          <div className="tk-label">Project list layout</div>
          <Seg value={tk.projectLayout} options={['grid', 'list']} onChange={v => update({ projectLayout: v })} />
        </div>
        <div className="tk-row">
          <div className="tk-label" style={{ margin: 0 }}>Show stats bar</div>
          <div className={'tk-check' + (tk.showStats ? ' on' : '')} onClick={() => update({ showStats: !tk.showStats })} />
        </div>
        <div className="tk-row">
          <div className="tk-label" style={{ margin: 0 }}>Show workshop section</div>
          <div className={'tk-check' + (tk.showWorkshop ? ' on' : '')} onClick={() => update({ showWorkshop: !tk.showWorkshop })} />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { useTweaks, TweaksPanel, tweakStyles });
