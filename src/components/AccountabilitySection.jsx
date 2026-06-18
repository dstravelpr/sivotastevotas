const chain = [
  { step: 'Tú', label: 'Tu Voto', sub: 'El día de las elecciones', color: 'red' },
  { step: '→', label: '', sub: '', arrow: true },
  { step: 'Gobernador/a', label: 'Quien Eliges', sub: 'Jefe del poder ejecutivo', color: 'blue' },
  { step: '→', label: '', sub: '', arrow: true },
  { step: 'Secretario/a de la Gobernación', label: 'A Quien Nombra', sub: 'SIN confirmación de la Legislatura', color: 'red' },
]

export default function AccountabilitySection() {
  return (
    <section className="accountability" id="rendicion">
      <div className="container">
        <span className="section__eyebrow accountability__eyebrow">Rendición de Cuentas</span>
        <h2 className="section__title accountability__title">
          El Gobernador Nombra.<br />Tú Eliges al Gobernador.
        </h2>
        <p className="section__subtitle accountability__sub">
          El Secretario de la Gobernación es uno de los puestos más poderosos del país —
          y el gobernador lo nombra directamente, sin que la Legislatura lo confirme.
          Controla nombramientos en las agencias y procesos de contratación, incluyendo
          los que se pagan con fondos federales. Por eso tu voto por gobernador pesa tanto.
        </p>

        {/* Cadena de poder */}
        <div className="power-chain">
          {chain.map((c, i) =>
            c.arrow ? (
              <span className="power-chain__arrow" key={i} aria-hidden="true">→</span>
            ) : (
              <div className={`power-node power-node--${c.color}`} key={i}>
                <span className="power-node__step">{c.step}</span>
                <span className="power-node__label">{c.label}</span>
                <span className="power-node__sub">{c.sub}</span>
              </div>
            )
          )}
        </div>

        {/* Caso vivo */}
        <div className="case-card">
          <div className="case-card__tag">Caso en Desarrollo · 2026</div>
          <h3 className="case-card__title">
            Cuando el Poder Sin Filtro Llega a los Tribunales
          </h3>
          <p className="case-card__body">
            En junio de 2026, el exsecretario del Departamento de Desarrollo Económico
            (DDEC), Sebastián Negrón Reichard, presentó una querella ante el Panel sobre
            el Fiscal Especial Independiente (PFEI) contra el Secretario de la Gobernación,
            Francisco Domenech. La querella alega que se ejerció presión indebida para
            obstaculizar una investigación sobre irregularidades en un proceso de
            contratación pagado con <strong>fondos federales</strong>, y que miembros del
            comité de evaluación se sintieron intimidados. El Secretario de la Gobernación
            ha <strong>rechazado categóricamente</strong> las acusaciones. El caso está
            bajo evaluación del PFEI. Hasta el Senado federal de los EE.UU. cuestionó a la
            gobernadora sobre el manejo de esos fondos.
          </p>
          <p className="case-card__lesson">
            Sea cual sea el resultado, la lección cívica es la misma: este nivel de poder
            lo ocupa una persona que <strong>nadie eligió y nadie confirmó</strong> — solo
            el gobernador la nombró. La única forma en que la ciudadanía influye sobre ese
            puesto es eligiendo a quien lo nombra. <strong>Ese es tu voto.</strong>
          </p>
          <p className="case-card__sources">
            Fuentes: El Nuevo Día, El Vocero, Telemundo PR, Primera Hora · Información de carácter
            público. Las alegaciones están bajo investigación y no constituyen una determinación de culpabilidad.
          </p>
        </div>

        <div className="accountability__cta">
          <a href="#registrate" className="btn btn--red">Elige Quién Tiene Ese Poder</a>
        </div>
      </div>
    </section>
  )
}
