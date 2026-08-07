import Countdown from './Countdown'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg-gradient" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__eyebrow">Próximas Elecciones · Puerto Rico</div>

        <h1 className="hero__title">
          SI VOTAS,
          <span className="line-red">TE VOTAS</span>
          <span className="line-punch">Y LOS VOTAMOS.</span>
        </h1>

        <p className="hero__subtitle">
          Tu silencio también es una decisión. Las próximas elecciones decidirán el rumbo
          de Puerto Rico por los próximos cuatro años — y tú tienes el poder de cambiarlas.
        </p>

        <div className="hero__actions">
          <a href="#impacto" className="btn btn--red">Ver el Impacto</a>
          <a href="#registrate" className="btn btn--outline-white">¡Regístrate a Votar!</a>
        </div>

        <Countdown />
      </div>

      <div className="hero__flag-bar" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>


    </section>
  )
}
