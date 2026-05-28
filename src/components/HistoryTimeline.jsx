const events = [
  { year: '1493', title: 'Llegada a Borikén', desc: 'Cristóbal Colón llega a la isla en su segundo viaje. Los taínos llamaban a su tierra Borikén. Comienza cinco siglos de historia política turbulenta.' },
  { year: '1868', title: 'Grito de Lares', desc: 'Primera gran rebelión contra el dominio español. Aunque fue suprimida en horas, el Grito de Lares encendió la llama del movimiento independentista puertorriqueño.' },
  { year: '1897', title: 'Carta Autonómica', desc: 'España concede autonomía a Puerto Rico bajo presión. Apenas meses después de tener gobierno propio por primera vez, todo cambiaría.' },
  { year: '1898', title: 'Invasión Americana y Tratado de París', desc: 'EE.UU. invade Puerto Rico como parte de la Guerra Hispanoamericana. España cede PR a EE.UU. en el Tratado de París. Puerto Rico pasa de una potencia colonial a otra sin que su pueblo fuera consultado.' },
  { year: '1900', title: 'Ley Foraker', desc: 'Primer gobierno civil americano en Puerto Rico. EE.UU. nombra al gobernador, al Consejo Ejecutivo y al Secretario de Estado. Los puertorriqueños solo elegían la Cámara de Delegados.' },
  { year: '1917', title: 'Ley Jones-Shafroth: Ciudadanía Americana', desc: 'EE.UU. concede ciudadanía americana a los puertorriqueños — justo a tiempo para que pudieran ser reclutados para la Primera Guerra Mundial. Pero sin estados, PR seguía sin voto presidencial.' },
  { year: '1948', title: 'Primer Gobernador Elegido por el Pueblo', desc: 'Luis Muñoz Marín se convierte en el primer gobernador elegido directamente por los puertorriqueños. Un hito histórico en la democracia de la isla.' },
  { year: '1950', title: 'Revolución Nacionalista', desc: 'Pedro Albizu Campos y el Partido Nacionalista lideran levantamientos armados en varios municipios, incluyendo Jayuya. El movimiento es sofocado militarmente.' },
  { year: '1952', title: 'Estado Libre Asociado (ELA)', desc: 'Puerto Rico adopta su propia Constitución y se convierte en Estado Libre Asociado. El PPD de Muñoz Marín promueve el ELA como alternativa al status colonial. Comienza el debate que dura hasta hoy.' },
  { year: '1967', title: 'Primer Plebiscito de Estatus', desc: 'El primer plebiscito sobre el estatus político. El ELA gana con el 60.4% de los votos. El PNP y el PIP boicotean. El debate sobre el futuro de Puerto Rico queda sin resolver.' },
  { year: '1968', title: 'Luis A. Ferré Gana la Gobernación', desc: 'El fundador del Partido Nuevo Progresista (PNP) gana las elecciones. Primera victoria del partido estadista. Puerto Rico inicia décadas de alternancia entre PPD y PNP.' },
  { year: '1993', title: 'Segundo Plebiscito', desc: 'El ELA gana de nuevo, pero por un margen muy estrecho: 48.6% vs 46.3% para la estadidad. La isla sigue dividida. El estatus sigue sin resolverse.' },
  { year: '1998', title: 'Tercer Plebiscito: "Ninguna de las Anteriores"', desc: '"Ninguna de las anteriores" gana con el 50.3% en un plebiscito boicoteado por el PPD. La estadidad obtiene el 46.5%. La ambigüedad del proceso invalida los resultados ante el Congreso.' },
  { year: '2006', title: 'Crisis Fiscal y Cierre del Gobierno', desc: 'Puerto Rico enfrenta su primera crisis fiscal moderna. El gobierno cierra por falta de fondos. Comienza una espiral de deuda que llevará a la isla al borde de la quiebra.' },
  { year: '2016', title: 'PROMESA y la Junta de Supervisión Fiscal', desc: 'El Congreso de EE.UU. aprueba PROMESA, creando la Junta de Control Fiscal para supervisar las finanzas de Puerto Rico. La Junta tiene poder de veto sobre el presupuesto — una limitación a la democracia local.' },
  { year: '2017', title: 'Huracán María y Plebiscito', desc: 'El Huracán María arrasa Puerto Rico causando más de 3,000 muertes. Meses antes, un plebiscito no vinculante da 97% a la estadidad con solo 23% de participación.' },
  { year: '2019', title: 'El Verano del \'19', desc: 'Cientos de miles de puertorriqueños salen a las calles tras revelarse chats indignantes del gobernador Ricardo Rosselló. Es la mayor protesta en la historia de Puerto Rico. Rosselló renuncia.' },
  { year: '2020', title: 'Plebiscito: Estadidad Gana con 52.5%', desc: 'En el plebiscito de estatus más concurrido, la estadidad gana con 52.5% de los votos. Sin embargo, el Congreso aún no ha actuado. El futuro de Puerto Rico sigue en manos del voto.' },
  { year: '2024+', title: 'Las Próximas Elecciones', desc: 'El gobernador/a, el Comisionado Residente, 27 senadores, 51 representantes y 78 alcaldes están en juego. El futuro de Puerto Rico — su estatus, su economía, sus servicios — se decide en las urnas. ¿Estarás ahí?' },
]

export default function HistoryTimeline() {
  return (
    <section className="section section--dark" id="historia">
      <div className="container">
        <div className="timeline-intro">
          <span className="section__eyebrow">Historia Política</span>
          <h2 className="section__title">Puerto Rico: La Lucha por el Voto</h2>
          <p className="section__subtitle">
            Durante siglos, los puertorriqueños no podían votar. Hoy que podemos,
            muchos no lo hacen. Conoce la historia que nos trajo hasta aquí.
          </p>
        </div>

        <div className="timeline">
          {events.map((e) => (
            <div className="timeline-item" key={e.year}>
              <div className="timeline-item__year">{e.year}</div>
              <div className="timeline-item__title">{e.title}</div>
              <p className="timeline-item__desc">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
