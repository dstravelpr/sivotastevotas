const officials = [
  {
    level: 'Ejecutivo Estatal',
    levelClass: 'level--estatal',
    title: 'Gobernador/a',
    count: '1 puesto — toda la isla',
    term: 'Término: 4 años',
    salary: '~$70,000/año',
    powers: [
      'Jefe/a del poder ejecutivo de Puerto Rico.',
      'Firma o veta todo proyecto de ley aprobado por la Asamblea Legislativa.',
      'Nombra al Secretario de Estado, secretarios de gabinete y jueces del Tribunal Supremo.',
      'Administra el presupuesto anual de ~$12 billones.',
      'Puede declarar estado de emergencia y movilizar la Guardia Nacional.',
      'Representa a Puerto Rico ante el gobierno federal y otras jurisdicciones.',
    ],
  },
  {
    level: 'Representación Federal',
    levelClass: 'level--federal',
    title: 'Comisionado/a Residente',
    count: '1 puesto — toda la isla',
    term: 'Término: 4 años (único oficial con término de 4 años en el Congreso)',
    salary: '~$174,000/año',
    powers: [
      'Único representante de Puerto Rico ante el Congreso de los EE.UU.',
      'Habla en la Cámara de Representantes federal, pero NO vota en el pleno.',
      'Sí vota en comités del Congreso — donde se escriben las leyes.',
      'Gestiona fondos federales críticos: FEMA, HUD, Medicare, Medicaid.',
      'Cabildea por intereses de Puerto Rico en Washington D.C.',
      'Es esencial para los fondos de reconstrucción post-María aún pendientes.',
    ],
  },
  {
    level: 'Legislativo Estatal',
    levelClass: 'level--estatal',
    title: 'Senado de PR',
    count: '27 senadores',
    term: 'Término: 4 años',
    salary: '~$49,000/año',
    powers: [
      'Cámara alta de la Asamblea Legislativa de Puerto Rico.',
      '16 senadores por distrito (2 por cada uno de los 8 distritos) + 11 por acumulación.',
      'Aprueban, enmienden o derogan leyes que afectan tu vida diaria.',
      'Confirman o rechazan los nombramientos del Gobernador/a.',
      'Aprueban el presupuesto anual del gobierno de PR.',
      'Pueden destituir a funcionarios mediante procesos de destitución.',
    ],
  },
  {
    level: 'Legislativo Estatal',
    levelClass: 'level--estatal',
    title: 'Cámara de Representantes',
    count: '51 representantes',
    term: 'Término: 4 años',
    salary: '~$49,000/año',
    powers: [
      'Cámara baja de la Asamblea Legislativa de Puerto Rico.',
      '40 representantes por distrito + 11 por acumulación.',
      'Originan todos los proyectos de ley relacionados con gastos e impuestos.',
      'Aprueban el presupuesto del gobierno — cada dólar que se gasta.',
      'Fiscalizan el ejecutivo y pueden investigar al gobierno.',
      'Aprueban o rechazan nombramientos del Gobernador.',
    ],
  },
  {
    level: 'Ejecutivo Municipal',
    levelClass: 'level--municipal',
    title: 'Alcalde/sa',
    count: '78 alcaldes — uno por municipio',
    term: 'Término: 4 años',
    salary: 'Varía por municipio (~$55,000–$85,000/año)',
    powers: [
      'Jefe/a del poder ejecutivo de tu municipio.',
      'Administra servicios directos: recogido de basura, agua, parques, cementerios.',
      'Otorga permisos de construcción, uso de terreno y licencias.',
      'Maneja el presupuesto municipal — dinero de tus impuestos municipales.',
      'Desarrolla proyectos de vivienda, infraestructura y desarrollo económico local.',
      'En muchos municipios, la diferencia entre candidatos es de cientos de votos.',
    ],
  },
  {
    level: 'Legislativo Municipal',
    levelClass: 'level--municipal',
    title: 'Legislatura Municipal',
    count: 'Varía por municipio (entre 12 y 20 miembros)',
    term: 'Término: 4 años',
    salary: 'Varía (~$12,000–$25,000/año)',
    powers: [
      'Aprueban ordenanzas municipales que regulan la vida en tu pueblo.',
      'Aprueban y fiscalizan el presupuesto propuesto por el alcalde/alcaldesa.',
      'Regulan zonificación, ruido, permisos de negocio y temas locales.',
      'Pueden investigar al gobierno municipal.',
      'El cuerpo legislativo más cercano y accesible a la ciudadanía.',
      'Sus decisiones afectan directamente tu barrio y comunidad.',
    ],
  },
]

export default function OfficialsSection() {
  return (
    <section className="section section--gray" id="oficiales">
      <div className="container">
        <div className="officials-intro">
          <span className="section__eyebrow">Estructura de Gobierno</span>
          <h2 className="section__title">¿Quién Gobierna Puerto Rico?</h2>
          <p className="section__subtitle">
            Cada cuatro años, elegimos a estas personas para que tomen decisiones en nuestro nombre.
            Conoce exactamente qué poder tiene cada uno — y por qué importa quién gana.
          </p>
        </div>

        <div className="officials-grid">
          {officials.map((o) => (
            <div className="official-card" key={o.title}>
              <span className={`official-card__level ${o.levelClass}`}>{o.level}</span>
              <h3 className="official-card__title">{o.title}</h3>
              <p className="official-card__count">{o.count}</p>
              <ul className="official-card__powers">
                {o.powers.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <div className="official-card__footer">
                <span>{o.term}</span>
                <span>{o.salary}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
