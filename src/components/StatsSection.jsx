const stats = [
  {
    num: '47%',
    numAccent: false,
    label: 'No votó en 2020',
    note: 'De los ~2.3 millones de electores registrados, casi la mitad no fue a votar.',
    color: 'red',
  },
  {
    num: '1.2M',
    numAccent: true,
    label: 'Votos emitidos en 2020',
    note: 'La elección más importante del cuatrienio decidida por solo 1 de cada 2 electores.',
    color: 'blue',
  },
  {
    num: '78',
    numAccent: false,
    label: 'Alcaldes elegidos',
    note: 'En municipios pequeños, la diferencia entre candidatos puede ser de cientos de votos.',
    color: 'red',
  },
  {
    num: '$12B',
    numAccent: true,
    label: 'Presupuesto anual de PR',
    note: 'El gobernador/a que eliges controla cómo se gasta cada dólar de este presupuesto.',
    color: 'blue',
  },
]

export default function StatsSection() {
  return (
    <section className="section section--dark" id="impacto">
      <div className="container">
        <span className="section__eyebrow">Los Números No Mienten</span>
        <h2 className="section__title">El Costo de No Votar</h2>
        <p className="section__subtitle">
          Cuando decides no votar, no te quedas neutral — le cedes tu poder a alguien más.
          Estos números muestran exactamente lo que está en juego.
        </p>

        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className={`stat-card stat-card--${s.color}`}>
              <div className="stat-card__num">
                {s.numAccent
                  ? <><span className="num-accent">{s.num.slice(0, -1)}</span>{s.num.slice(-1)}</>
                  : s.num}
              </div>
              <div className="stat-card__label">{s.label}</div>
              <p className="stat-card__note">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
