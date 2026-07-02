import Icon from './Icon'

const issues = [
  { icon: 'droplet', title: 'Crisis del Agua', desc: 'Más de 110,000 clientes afectados por averías en el Superacueducto. Meses de interrupciones en San Juan, Bayamón, Guaynabo, Carolina y más. La directiva de la AAA la nombra el gobierno que TÚ eliges — décadas de falta de inversión son una decisión política. Tu voto en 2028 decide si esto cambia.', urgent: true },
  { icon: 'bolt', title: 'Energía Eléctrica', desc: 'LUMA, la AEE, los apagones y el futuro energético de Puerto Rico. Las tarifas récord y la transición a energía renovable dependen del gobierno que elijas.' },
  { icon: 'economy', title: 'Crisis Económica', desc: 'La Junta de Supervisión Fiscal controla el presupuesto. El costo de vida, los empleos y la deuda pública requieren líderes con visión y fuerza negociadora.' },
  { icon: 'landmark', title: 'Estatus Político', desc: 'Estadidad, ELA mejorado o independencia — el debate más largo de nuestra historia. Los representantes que elijas determinarán cuánto avanza esta conversación en Washington.' },
  { icon: 'health', title: 'Salud Pública', desc: 'Hospitales públicos subfinanciados, escasez de médicos y la fragilidad del sistema de salud. El gobernador/a asigna el presupuesto que determina la calidad de atención que recibes.' },
  { icon: 'storm', title: 'Reconstrucción Post-María', desc: 'Billones en fondos federales de HUD y FEMA siguen sin llegar a las comunidades. La gestión de estos fondos requiere liderazgo efectivo y honesto.' },
  { icon: 'shield', title: 'Seguridad Ciudadana', desc: 'Crimen, violencia doméstica y corrupción policial son temas urgentes. El gobernador/a nombra al Superintendente de Policía y define las prioridades de seguridad.' },
  { icon: 'book', title: 'Educación', desc: 'Las escuelas públicas han perdido miles de estudiantes. El presupuesto de educación, los maestros y la reforma del sistema dependen directamente de los legisladores que elegimos.' },
]

export default function IssuesSection() {
  return (
    <section className="section section--dark" id="temas">
      <div className="container">
        <span className="section__eyebrow">Lo Que Está en Juego</span>
        <h2 className="section__title">Los Temas que Definen Estas Elecciones</h2>
        <p className="section__subtitle">
          Cada uno de estos problemas tiene una solución — y esa solución pasa
          por las personas que elegimos el día de las elecciones.
        </p>

        <div className="issues-grid">
          {issues.map((issue) => (
            <div className={`issue-card${issue.urgent ? ' issue-card--urgent' : ''}`} key={issue.title}>
              {issue.urgent && <span className="issue-card__badge">URGENTE</span>}
              <span className="issue-card__icon"><Icon name={issue.icon} size={30} /></span>
              <h3 className="issue-card__title">{issue.title}</h3>
              <p className="issue-card__desc">{issue.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
