import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__flag" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
        <Logo size={64} wordmark={false} />
      </div>

      <div className="footer__logo">
        <span className="accent">Si</span>Votas<span className="accent">Te</span>Votas
      </div>
      <p className="footer__tagline">Participa en las próximas elecciones de Puerto Rico</p>

      <div className="footer__links">
        <a href="#impacto">El Impacto</a>
        <a href="#por-que">¿Por Qué Votar?</a>
        <a href="#oficiales">Oficiales</a>
        <a href="#votate">¡Vótate!</a>
        <a href="#historia">Historia Electoral</a>
        <a href="#registrate">Regístrate</a>
        <a href="https://www.ceepur.org" target="_blank" rel="noopener noreferrer">CEE — Registro Oficial</a>
      </div>

      <div className="footer__about" id="sobre">
        <h2 className="footer__about-title">Sobre Este Proyecto</h2>
        <p>
          <strong>Vota Boricua</strong> es una iniciativa ciudadana independiente, educativa y
          apartidista, creada en Puerto Rico para combatir el abstencionismo electoral.
          No estamos afiliados a ningún partido político ni candidato, no recibimos fondos
          de comités políticos, y no le decimos a nadie por quién votar — solo que vote.
        </p>
        <p>
          Los datos electorales que publicamos provienen de fuentes públicas y verificables:
          la Comisión Estatal de Elecciones (CEE), certificaciones oficiales de resultados,
          y la prensa de Puerto Rico (El Nuevo Día, El Vocero, Metro PR, Primera Hora,
          Telemundo PR). Cuando un caso está bajo investigación, lo decimos claramente.
        </p>
      </div>

      <p className="footer__copy">© {new Date().getFullYear()} SiVotasTeVotas.com — Todos los derechos reservados</p>
      <p className="footer__disclaimer">
        Proyecto educativo y apartidista. No afiliado a ningún partido político ni candidato.
        Su único propósito es promover la participación electoral en Puerto Rico.
      </p>
    </footer>
  )
}
