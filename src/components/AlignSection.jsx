import Icon from './Icon'

const checklist = [
  {
    icon: 'folder',
    q: '¿Cuál es su récord?',
    desc: 'Investiga su historial real — lo que ha hecho, no lo que promete. Las acciones pasadas predicen las futuras.',
  },
  {
    icon: 'money',
    q: '¿Quién financia su campaña?',
    desc: 'Mira de dónde viene su dinero. Quien paga la campaña muchas veces espera algo a cambio.',
  },
  {
    icon: 'target',
    q: '¿Se alinea con TUS valores?',
    desc: 'Lee sus posturas en los temas que te importan: agua, energía, economía, estatus. Compara con lo que tú crees.',
  },
  {
    icon: 'search',
    q: '¿Es transparente?',
    desc: 'Busca señalamientos, querellas o investigaciones. Un buen líder no le teme a la rendición de cuentas.',
  },
]

export default function AlignSection() {
  return (
    <section className="align" id="alinea">
      <div className="container">
        <span className="section__eyebrow align__eyebrow">Tu Mejor Defensa</span>
        <h2 className="section__title align__title">
          Vota por la Persona,<br />No por el Partido
        </h2>
        <p className="section__subtitle align__sub">
          El gobierno de Puerto Rico vive una lucha de poder interna — querellas,
          investigaciones y casos de corrupción. Desde 2020, el FBI ha arrestado a
          alcaldes, legisladores y funcionarios de <strong>distintos partidos</strong>.
          Ningún color te protege de la corrupción. Tu defensa más poderosa es simple:
          conoce a quién eliges.
        </p>

        <div className="align__checklist-intro">Antes de votar, investiga:</div>

        <div className="align-grid">
          {checklist.map((c) => (
            <div className="align-card" key={c.q}>
              <span className="align-card__icon"><Icon name={c.icon} size={28} /></span>
              <h3 className="align-card__q">{c.q}</h3>
              <p className="align-card__desc">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="align-closing">
          <p className="align-closing__lead">El partido es una etiqueta. La persona es quien gobierna.</p>
          <p className="align-closing__big">
            Vota por quien mejor se alinee con <span className="accent">tus valores</span> —
            no por el color de la papeleta.
          </p>
          <a href="#registrate" className="btn btn--red align-closing__cta">Regístrate y Vota Informado/a</a>
        </div>
      </div>
    </section>
  )
}
