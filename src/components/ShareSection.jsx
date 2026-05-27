import { useState } from 'react'

const SITE_URL = 'https://www.sivotastevotas.com'
const SHARE_TEXT = 'Si Votas, Te Votas 🇵🇷 — Las razones para votar en las próximas elecciones de Puerto Rico'

export default function ShareSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(SITE_URL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}`
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SITE_URL)}`
  const waUrl = `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + ' ' + SITE_URL)}`

  return (
    <section className="section section--red" id="comparte">
      <div className="container">
        <span className="section__eyebrow">Amplifica el Mensaje</span>
        <h2 className="section__title">Comparte Esta Campaña</h2>
        <p className="section__subtitle">
          Cada persona que compartes puede ser un voto más. Una conversación
          en WhatsApp, un post en Facebook — puede marcar la diferencia.
        </p>

        <div className="share-grid">
          <a href={fbUrl} target="_blank" rel="noopener noreferrer" className="share-btn share-btn--fb">
            📘 Compartir en Facebook
          </a>
          <a href={xUrl} target="_blank" rel="noopener noreferrer" className="share-btn share-btn--x">
            𝕏 Compartir en X
          </a>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="share-btn share-btn--wa">
            💬 Enviar por WhatsApp
          </a>
          <button onClick={handleCopy} className="share-btn share-btn--copy">
            {copied ? '✓ ¡Copiado!' : '🔗 Copiar enlace'}
          </button>
        </div>
      </div>
    </section>
  )
}
