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

      <p className="footer__copy">© {new Date().getFullYear()} SiVotasTeVotas.com — Todos los derechos reservados</p>
      <p className="footer__disclaimer">
        Proyecto educativo y apartidista. No afiliado a ningún partido político ni candidato.
        Su único propósito es promover la participación electoral en Puerto Rico.
      </p>
    </footer>
  )
}
