const stats = [
  {
    num: '42%',
    numAccent: false,
    label: 'No votó en 2024',
    note: 'De los ~2.3 millones de electores registrados, 42% no fue a votar en las últimas elecciones generales.',
    color: 'red',
  },
  {
    num: '1.4M',
    numAccent: true,
    label: 'Votos emitidos en 2024',
    note: 'Solo 1.4 millones de boricuas decidieron quién gobierna a los 3.2 millones restantes.',
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
    num: '$13B',
    numAccent: true,
    label: 'Presupuesto anual de PR',
    note: 'El gobernador/a que eliges controla cómo se gasta cada dólar de este presupuesto — más los fondos federales pendientes.',
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
