import { useState } from 'react'

export default function SubscribeSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="section section--blue section--center">
      <div className="container">
        <span className="section__eyebrow">Mantente al Día</span>
        <h2 className="section__title">Suscríbete a Nuestra Lista</h2>
        <p className="section__subtitle" style={{ margin: '0 auto' }}>
          Recibe recordatorios importantes sobre las elecciones, fechas clave
          para el registro de votantes y actualizaciones de la campaña.
          Sin spam, solo información que importa.
        </p>

        {!submitted ? (
          <>
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Tu dirección de correo electrónico"
              />
              <button type="submit">¡Me Apunto!</button>
            </form>
            <p className="subscribe-note">
              Tu información es privada. No la compartimos con nadie.
            </p>
          </>
        ) : (
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🇵🇷</div>
            <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#A8D1FF' }}>
              ¡Gracias! Estás en la lista.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>
              Te avisaremos con información importante sobre las próximas elecciones.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
