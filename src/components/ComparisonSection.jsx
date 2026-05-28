const yesItems = [
  'Tienes voz directa en quién maneja el presupuesto de $12 billones de Puerto Rico.',
  'Decides quién nombra a los jueces del Tribunal Supremo y los secretarios de estado.',
  'Influyes en el alcalde/alcaldesa que da los servicios de tu municipio — agua, basura, permisos.',
  'Participas en el debate sobre el estatus político de Puerto Rico con representación real.',
  'Envías un mensaje claro a los políticos: la ciudadanía está atenta y activa.',
  'Proteges los fondos federales negociados por el Comisionado Residente en Washington.',
]

const noItems = [
  'Otro elector — que puede tener intereses distintos a los tuyos — decide por ti.',
  'Los politicos saben que no votas y no tienen incentivo para servirte.',
  'Las decisiones sobre tu vecindario, tus escuelas y tus carreteras se toman sin ti.',
  'La inercia favorece a quienes están en el poder — el cambio no ocurre sin participación.',
  'Los fondos federales y contratos pueden ir a comunidades con mayor participación electoral.',
  'Tu abstención es contada como aprobación del status quo.',
]

export default function ComparisonSection() {
  return (
    <section className="section" style={{ padding: 0 }}>
      <div className="comparison-header" style={{ padding: '4rem 2rem 0' }}>
        <span className="section__eyebrow">La Decisión Más Importante</span>
        <h2 className="section__title">Votas vs. No Votas</h2>
        <p className="section__subtitle">
          No votar no es una posición neutral. Es una decisión activa con consecuencias reales.
        </p>
      </div>

      <div className="comparison-grid">
        <div className="comparison-col comparison-col--yes">
          <span className="comparison-col__icon">✊</span>
          <h3 className="comparison-col__title">Cuando Votas</h3>
          <p className="comparison-col__subtitle">Ejerces tu poder</p>
          <ul className="comparison-list">
            {yesItems.map((item) => (
              <li key={item}>
                <span className="ci">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="comparison-col comparison-col--no">
          <span className="comparison-col__icon">😶</span>
          <h3 className="comparison-col__title">Cuando No Votas</h3>
          <p className="comparison-col__subtitle">Cedes tu poder</p>
          <ul className="comparison-list">
            {noItems.map((item) => (
              <li key={item}>
                <span className="ci">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
