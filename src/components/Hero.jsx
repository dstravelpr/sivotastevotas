export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__star" aria-hidden="true">★</div>

      <div className="hero__content">
        <div className="hero__eyebrow">Próximas Elecciones · Puerto Rico</div>

        <h1 className="hero__title">
          SI VOTAS,
          <span className="line-red">TE VOTAS</span>
          <span className="line-small">Tu silencio también es una decisión</span>
        </h1>

        <p className="hero__subtitle">
          Las próximas elecciones decidirán el rumbo de Puerto Rico por los próximos cuatro años.
          Los temas en juego te afectan directamente. Aquí te decimos por qué tu voto importa.
        </p>

        <div className="hero__actions">
          <a href="#por-que" className="btn btn--red">¿Por Qué Votar?</a>
          <a href="#noticias" className="btn btn--outline-white">Últimas Noticias</a>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Descubre más</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
