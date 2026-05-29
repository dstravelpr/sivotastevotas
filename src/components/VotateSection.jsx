const powerCards = [
  {
    icon: '📊',
    title: 'Los Políticos Saben Quién Vota',
    desc: 'Los partidos tienen bases de datos detalladas de cada elector. Saben si votaste en las últimas 3 elecciones. Los precintos con alta participación reciben más atención, más servicios y más inversión. Si no votas, eres invisible en esa base de datos — y ellos lo saben.',
  },
  {
    icon: '🗳️',
    title: 'El Margen de Victoria Puede Ser Tuyo',
    desc: 'En las elecciones de 2020, varios alcaldes ganaron por menos de 300 votos. En algunos municipios, la diferencia fue de decenas. Tu voto no es uno entre millones — en una elección local, puede literalmente decidir el resultado.',
  },
  {
    icon: '🔄',
    title: 'Cada 4 Años Eres Su Jefe/a',
    desc: 'Ningún gobernador, alcalde ni senador tiene su puesto garantizado. Cada cuatro años, el contrato se vence. Tú decides si lo renuevas o lo terminas. Esa es la mecánica real de la democracia: el poder lo tienes tú, prestado a ellos temporeramente.',
  },
  {
    icon: '🎯',
    title: 'Tu Abstención Es Su Mayor Aliado',
    desc: 'Un funcionario que sabe que no votas no tiene incentivo para servirte. ¿Para qué arreglar tus calles si no apareces en las urnas? El abstencionismo no es neutralidad — es un cheque en blanco para quienes están en el poder. Ellos cuentan con que no vayas.',
  },
]

const voteConnections = [
  {
    vote: 'Tu Voto',
    arrow: '→',
    post: 'Gobernador/a',
    controls: 'Controla $13B del presupuesto, nombra jueces, firma o veta cada ley',
    color: 'red',
  },
  {
    vote: 'Tu Voto',
    arrow: '→',
    post: 'Alcalde/sa',
    controls: 'Decide tus calles, tu agua, tus permisos, los servicios de tu barrio',
    color: 'blue',
  },
  {
    vote: 'Tu Voto',
    arrow: '→',
    post: 'Senado / Cámara',
    controls: 'Escribe y aprueba cada ley: educación, salud, energía, seguridad',
    color: 'red',
  },
  {
    vote: 'Tu Voto',
    arrow: '→',
    post: 'Comisionado/a Residente',
    controls: 'Tu única voz en el Congreso federal — gestiona fondos de Washington',
    color: 'blue',
  },
]

export default function VotateSection() {
  return (
    <section className="votate-section" id="votate">

      {/* ── Big Statement ─────────────────────────────────────── */}
      <div className="votate-hero">
        <div className="container">
          <span className="section__eyebrow votate-eyebrow">Tu Poder Real</span>
          <h2 className="votate-title">
            <span className="votate-title__red">TE VOTAS.</span>
            <span className="votate-title__white">SI VOTAS.</span>
          </h2>
          <p className="votate-subtitle">
            Tu boleta no es un papel — es el único instrumento legal con el que los
            ciudadanos controlan a quienes los gobiernan. Ellos llegan al poder
            porque tú los pusiste. Y tú los puedes sacar.
          </p>
        </div>
      </div>

      {/* ── Power Cards ───────────────────────────────────────── */}
      <div className="container">
        <div className="votate-cards">
          {powerCards.map((c) => (
            <div className="votate-card" key={c.title}>
              <span className="votate-card__icon">{c.icon}</span>
              <h3 className="votate-card__title">{c.title}</h3>
              <p className="votate-card__desc">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Civic Connection ──────────────────────────────── */}
        <div className="votate-connections">
          <h3 className="votate-connections__title">Tu Voto → Su Poder → Tu Vida</h3>
          <p className="votate-connections__sub">
            Cada casilla en tu papeleta conecta directamente con decisiones que afectan tu día a día.
          </p>
          <div className="votate-connect-grid">
            {voteConnections.map((v) => (
              <div className={`votate-connect-card votate-connect-card--${v.color}`} key={v.post}>
                <div className="votate-connect-card__top">
                  <span className="votate-connect-card__vote">{v.vote}</span>
                  <span className="votate-connect-card__arrow">{v.arrow}</span>
                  <span className="votate-connect-card__post">{v.post}</span>
                </div>
                <p className="votate-connect-card__controls">{v.controls}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Closing Statement ─────────────────────────────── */}
        <div className="votate-closing">
          <p className="votate-closing__text">
            Tu boleta es el contrato entre ciudadano y gobierno.
          </p>
          <p className="votate-closing__cta">
            Si no cumplen — <strong>los votas.</strong>
          </p>
        </div>
      </div>

    </section>
  )
}
