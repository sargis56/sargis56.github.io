// ───────────────────────────────────────────────────────────
// App: compose nav + hero + sections + modal + tweaks
// ───────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">SN<span className="caret">_</span></a>
        <div className="nav-links">
          <a href="#highlights">Work</a>
          <a href="#mods">Modding</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
        </div>
        <a href="#contact" className="nav-cta">Get in touch</a>
      </div>
    </nav>
  );
}

function App() {
  const [tk, update, tweaksVisible] = useTweaks(window.TWEAK_DEFAULTS);
  const [openId, setOpenId] = React.useState(null);

  // apply theme + accent to <html>
  React.useEffect(() => {
    const r = document.documentElement;
    r.dataset.theme = tk.theme;
    r.style.setProperty('--accent-hue', tk.accentHue);
  }, [tk.theme, tk.accentHue]);

  const navProject = React.useCallback((dir) => {
    setOpenId(cur => {
      const idx = PROJECTS.findIndex(p => p.id === cur);
      const next = (idx + dir + PROJECTS.length) % PROJECTS.length;
      return PROJECTS[next].id;
    });
  }, []);

  return (
    <>
      <style>{heroStyles}</style>
      <style>{artworkStyles}</style>
      <style>{projectStyles}</style>
      <style>{sectionStyles}</style>
      <style>{tweakStyles}</style>

      <div className="bg-texture" />
      <Nav />

      <main className="shell">
        <Hero variant={tk.heroVariant} onOpenProject={setOpenId} />

        <span id="highlights" style={{ display: 'block', height: 0, scrollMarginTop: 90 }} />

        {tk.showStats && (
          <section style={{ paddingTop: 0, paddingBottom: 60 }} data-screen-label="Stats">
            <div className="wrap"><StatsBar /></div>
          </section>
        )}

        <section id="work" data-screen-label="Featured Work">
          <div className="wrap">
            <SectionHead kicker="01 / Selected work" title="Featured" sub="The projects I'm most proud of. Click any card for the full story." />
            <FeaturedStrip onOpen={setOpenId} />
          </div>
        </section>

        <section data-screen-label="All Projects">
          <div className="wrap">
            <SectionHead kicker="02 / Archive" title="All projects" />
            <ProjectGrid layout={tk.projectLayout} onOpen={setOpenId} />
          </div>
        </section>

        {tk.showWorkshop && (
          <section id="mods" data-screen-label="Workshop">
            <div className="wrap">
              <SectionHead kicker="03 / Community" title="Game modding" sub="Custom content I've built and shipped to Steam's player community, and the skills it taught me." />
              <Workshop />
            </div>
          </section>
        )}

        <section id="experience" data-screen-label="Experience">
          <div className="wrap">
            <SectionHead kicker="04 / History" title="Experience" />
            <Experience />
          </div>
        </section>

        <section id="skills" data-screen-label="Skills">
          <div className="wrap">
            <SectionHead kicker="05 / Arsenal" title="Skills" />
            <Skills />
          </div>
        </section>

        <section id="about" data-screen-label="About">
          <div className="wrap">
            <SectionHead kicker="06 / About" title="About me" />
            <About />
          </div>
        </section>

        <section id="contact" data-screen-label="Contact">
          <div className="wrap"><Contact /></div>
        </section>
      </main>

      {openId && (
        <ProjectModal id={openId} onClose={() => setOpenId(null)} onNav={navProject} />
      )}

      {tweaksVisible && <TweaksPanel tk={tk} update={update} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
