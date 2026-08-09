import { ExigimosAgua, NoAEsencia, YLaLuz } from './ProtestArt'

const chain = [
  { step: 'Tú', label: 'Tu Voto', sub: 'El día de las elecciones', color: 'red' },
  { step: '→', arrow: true },
  { step: 'Gobernador/a', label: 'Quien Eliges', sub: 'Jefe del poder ejecutivo', color: 'blue' },
  { step: '→', arrow: true },
  { step: 'Agencias que Deciden Tu Agua, Tu Tierra y Tu Luz', label: 'A Quienes Nombra', sub: 'AAA · AEE · OGPe · DRNA', color: 'red' },
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
          El gobernador o gobernadora nombra a quienes dirigen la AAA, la AEE, la OGPe y el DRNA —
          las agencias que deciden si sale agua por tu pluma, si hay luz y qué se construye en tu pueblo.
          Algunos de esos puestos, como el Secretario de la Gobernación, ni siquiera pasan por
          confirmación de la Legislatura. Por eso tu voto por gobernador pesa tanto.
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

        {/* Dos casos vivos, lado a lado */}
        <div className="case-grid">

          {/* ── Agua ── */}
          <article className="case-card">
            <div className="case-card__art"><ExigimosAgua /></div>
            <div className="case-card__tag">En Desarrollo · Agosto 2026</div>
            <h3 className="case-card__title">Te Racionan el Agua</h3>
            <p className="case-card__body">
              El gobierno declaró <strong>estado de emergencia por sequía</strong> y la AAA
              comenzó racionamiento de hasta 48 horas en comunidades de Canóvanas y Río Grande.
              Su presidente ejecutivo, Luis González, advirtió que el agua
              &ldquo;no va a ser suficiente&rdquo; y que las restricciones podrían extenderse
              a otras zonas. Esto llega después de meses de averías en el Superacueducto y la
              planta Sergio Cuevas. Vecinos de San Juan y otros pueblos convocaron una
              <strong> protesta el 4 de agosto</strong> frente a las oficinas centrales de la AAA;
              legisladores denuncian una gestión improvisada que reacciona solo cuando la
              crisis ya explotó.
            </p>
            <p className="case-card__lesson">
              La sequía es natural. Una infraestructura que no aguanta una sequía
              es <strong>una decisión política</strong> — décadas de no invertir.
              La Junta de Gobierno de la AAA la nombra quien gobierna.
            </p>
            <p className="case-card__sources">
              Fuentes: El Nuevo Día, Metro PR, Primera Hora, Telemundo PR · Información de carácter público.
            </p>
          </article>

          {/* ── Esencia ── */}
          <article className="case-card">
            <div className="case-card__art"><NoAEsencia /></div>
            <div className="case-card__tag">En Desarrollo · Agosto 2026</div>
            <h3 className="case-card__title">Y Aprueban Esencia</h3>
            <p className="case-card__body">
              Mientras tanto, en Cabo Rojo avanza <strong>Esencia</strong>: un megaproyecto
              turístico y residencial de unos $2,000 millones sobre cerca de 2,000 cuerdas en
              el sector Los Pozos, frente a la bahía de Boquerón. La propia AAA
              <strong> le negó formalmente la conexión</strong> al sistema público de agua, por lo
              que los desarrolladores pidieron perforar pozos privados; el proyecto necesitaría
              entre <strong>1.25 y 2 millones de galones diarios</strong>. El 1 de agosto de 2026
              la OGPe aprobó su consulta de ubicación <strong>sin vistas públicas</strong>, pese a
              que más de 800 residentes pidieron un proceso participativo. La Ley 82 de 2026 le
              impone barreras económicas a quien intente impugnar permisos.
            </p>
            <p className="case-card__lesson">
              Los permisos no caen del cielo. La OGPe, el DRNA y las leyes que los rigen
              dependen de <strong>quién gobierna y quién legisla</strong> — y a ambos los eliges tú.
            </p>
            <p className="case-card__sources">
              Fuentes: NotiCel, Telemundo PR, El Diario, La Perla del Sur, La Calle · Información de carácter público.
            </p>
          </article>

          {/* ── Aguirre / Generación ── */}
          <article className="case-card case-card--wide">
            <div className="case-card__art"><YLaLuz /></div>
            <div className="case-card__text">
              <div className="case-card__tag">En Desarrollo · Agosto 2026</div>
              <h3 className="case-card__title">$5,000 Millones y una Firma que Nadie Autorizó</h3>
              <p className="case-card__body">
                El gobierno contrató <strong>400 megavatios de generación temporera</strong> en la
                Central Aguirre — un acuerdo valorado en unos <strong>$5,000 millones</strong>. La
                empresa Enchanted Rock, cuya capacidad técnica y financiera fue determinante para
                que el contrato se aprobara, confirmó que <strong>su nombre y su firma fueron usados
                sin autorización</strong> en el proceso de contratación. Las otras dos empresas del
                consorcio, Power Expectations y Reyes Contractor, no tenían experiencia comparable en
                proyectos de esta escala. La Junta de Supervisión Fiscal calificó el asunto de
                &ldquo;sumamente preocupante&rdquo;, dijo que debe investigarse, y evalúa
                <strong> revocar la aprobación y referir el caso a las autoridades</strong>.
                A 57 días de firmado no había progreso significativo, ni fianza de cumplimiento
                (~$1,180 millones), ni un solo hito cumplido — y desde agosto de 2025 ya se había
                advertido que la propuesta no evidenciaba capacidad financiera adecuada.
              </p>
              <p className="case-card__lesson">
                Quien detectó esto fue la Junta de Supervisión Fiscal — que los boricuas
                <strong> no elegimos</strong>. La Junta de Gobierno de la AEE, que autorizó la
                contratación, <strong>sí</strong> la nombra quien gobierna. Cuando el control de
                calidad tiene que venir de afuera, es porque el de adentro falló.
              </p>
              <p className="case-card__sources">
                Fuentes: Bloomberg, Metro PR, El Nuevo Día · Información de carácter público.
                Las alegaciones están bajo investigación y no constituyen una determinación de culpabilidad.
              </p>
            </div>
          </article>
        </div>

        {/* Cierre que une los tres casos */}
        <div className="case-tie">
          <p className="case-tie__line">
            Te racionan el agua. Al megaproyecto le buscan millones de galones.
            Y un contrato de $5,000 millones se firma con un nombre que nadie autorizó.
          </p>
          <p className="case-tie__punch">Tu agua. Tu tierra. Tu luz.</p>
          <p className="case-tie__sub">Las tres las decide la misma gente.</p>
        </div>

        <div className="accountability__cta">
          <a href="#registrate" className="btn btn--red">Elige Quién Tiene Ese Poder</a>
        </div>
      </div>
    </section>
  )
}
