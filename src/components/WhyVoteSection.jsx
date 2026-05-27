const reasons = [
  {
    num: '01',
    title: 'El Estatus de PR se Decide en las Urnas',
    desc: 'La estadidad, la independencia o el ELA — ninguna opción avanza sin representantes que luchen por ella en Washington. El Comisionado Residente que eliges es tu única voz en el Congreso federal.',
  },
  {
    num: '02',
    title: 'La Junta Fiscal Controla Tu Dinero',
    desc: 'La Junta de Supervisión Fiscal tiene poder de veto sobre el presupuesto de PR. Los legisladores que eliges son los únicos que pueden resistirla y negociar mejores condiciones para el pueblo.',
  },
  {
    num: '03',
    title: 'LUMA, AEE y Tu Luz Eléctrica',
    desc: 'El contrato de LUMA, las tarifas de la AEE y el futuro energético de PR son decisiones del gobierno. El gobernador/a que elijas decide si renovamos ese contrato o buscamos alternativas.',
  },
  {
    num: '04',
    title: 'Fondos Post-María Aún en Juego',
    desc: 'Billones de dólares en fondos federales de reconstrucción post-María siguen sin distribuirse. Un gobierno activo y capaz es esencial para que ese dinero llegue a las comunidades que lo necesitan.',
  },
  {
    num: '05',
    title: 'Seguridad Pública en Tu Barrio',
    desc: 'El Superintendente de la Policía es nombrado por el gobernador/a. Los fiscales que persiguen el crimen dependen de la estructura que el gobierno establece. Tu voto decide quién pone orden.',
  },
  {
    num: '06',
    title: 'Tu Municipio es Tu Alcalde',
    desc: 'En muchos municipios, la diferencia entre candidatos es de cientos de votos. El alcalde/alcaldesa decide sobre tus calles, tu agua, tus permisos y los servicios de tu comunidad directamente.',
  },
  {
    num: '07',
    title: 'Salud y Educación Pública',
    desc: 'La asignación de presupuesto para hospitales públicos, escuelas y la reforma educativa está en manos de los legisladores que eliges. Una legislatura comprometida puede transformar ambos sistemas.',
  },
  {
    num: '08',
    title: 'Tu Voto Pesa Más de lo que Crees',
    desc: 'En 2020, solo el 52% de los electores registrados votó. Eso significa que una minoría muy activa decide por todos. Tu voto tiene mucho más peso de lo que imaginas — especialmente a nivel local.',
  },
]

export default function WhyVoteSection() {
  return (
    <section className="section section--gray" id="por-que">
      <div className="container">
        <span className="section__eyebrow">¿Por Qué Participar?</span>
        <h2 className="section__title">8 Razones para Votar en Estas Elecciones</h2>
        <p className="section__subtitle">
          No son abstractas. Son las razones que afectan tu factura de luz,
          tus calles, tu seguridad y el futuro de tu isla.
        </p>

        <div className="reasons-grid">
          {reasons.map((r) => (
            <div className="reason-card" key={r.num}>
              <div className="reason-card__num">{r.num}</div>
              <h3 className="reason-card__title">{r.title}</h3>
              <p className="reason-card__desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
