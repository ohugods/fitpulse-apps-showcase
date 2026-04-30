import { useMemo, useState } from 'react';
import './App.css';
import { MOBILE_SCREENS, SCREEN_CATEGORIES, type ScreenCategory } from './screens';

function App() {
  const [activeCategory, setActiveCategory] = useState<ScreenCategory | 'all'>('all');
  const [selectedSlug, setSelectedSlug] = useState(MOBILE_SCREENS[0]?.slug ?? '');

  const filteredScreens = useMemo(() => {
    if (activeCategory === 'all') return MOBILE_SCREENS;
    return MOBILE_SCREENS.filter((screen) => screen.category === activeCategory);
  }, [activeCategory]);

  const selectedScreen =
    MOBILE_SCREENS.find((screen) => screen.slug === selectedSlug) ?? filteredScreens[0] ?? null;

  return (
    <main className="layout">
      <header className="topbar">
        <div>
          <p className="eyebrow">Dalmasio Mobile Lab</p>
          <h1>FitPulse - Showcase dinamico de telas</h1>
          <p className="subtitle">
            Catalogo interativo com todas as telas do diretorio stitch_fitpulse_modern_training.
          </p>
        </div>
      </header>

      <section className="categories">
        <button
          className={activeCategory === 'all' ? 'chip active' : 'chip'}
          onClick={() => setActiveCategory('all')}
          type="button"
        >
          Todas
        </button>
        {(Object.keys(SCREEN_CATEGORIES) as ScreenCategory[]).map((key) => (
          <button
            key={key}
            className={activeCategory === key ? 'chip active' : 'chip'}
            onClick={() => setActiveCategory(key)}
            type="button"
          >
            {SCREEN_CATEGORIES[key]}
          </button>
        ))}
      </section>

      <section className="content">
        <aside className="list">
          {filteredScreens.map((screen) => (
            <button
              key={screen.slug}
              type="button"
              className={selectedScreen?.slug === screen.slug ? 'screen-row active' : 'screen-row'}
              onClick={() => setSelectedSlug(screen.slug)}
            >
              <span className="screen-title">{screen.title}</span>
              <span className="screen-tag">{SCREEN_CATEGORIES[screen.category]}</span>
            </button>
          ))}
        </aside>

        <article className="preview">
          {selectedScreen ? (
            <>
              <div className="preview-header">
                <h2>{selectedScreen.title}</h2>
                <a href={`/screens/${selectedScreen.slug}.html`} target="_blank" rel="noreferrer">
                  Abrir tela em aba
                </a>
              </div>
              <iframe
                title={selectedScreen.title}
                src={`/screens/${selectedScreen.slug}.html`}
                className="frame"
              />
            </>
          ) : (
            <p>Nenhuma tela encontrada.</p>
          )}
        </article>
      </section>
    </main>
  );
}

export default App;
