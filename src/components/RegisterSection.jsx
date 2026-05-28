export default function RegisterSection() {
  return (
    <section className="register-section" id="registrate">
      <h2 className="register-section__title">
        ¿ESTÁS<br />REGISTRADO/A<br />PARA VOTAR?
      </h2>
      <p className="register-section__body">
        La Comisión Estatal de Elecciones (CEE) es el organismo oficial de Puerto Rico
        para el registro de votantes. El proceso es gratuito y toma solo minutos.
        Sin registro, no hay voto.
      </p>
      <div className="register-actions">
        <a
          href="https://www.ceepur.org"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--white"
        >
          Ir a CEEpur.org →
        </a>
        <a
          href="https://www.ceepur.org/es-pr/Paginas/Registro-de-Electores.aspx"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline-white"
        >
          Verificar mi Registro
        </a>
      </div>
    </section>
  )
}
