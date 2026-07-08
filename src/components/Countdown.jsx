import { useState, useEffect } from 'react'

// Elecciones Generales de Puerto Rico — colegios abren 9:00 AM AST
const ELECTION_DATE = new Date('2028-11-07T09:00:00-04:00')

function getTimeLeft() {
  const diff = ELECTION_DATE.getTime() - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
  }
}

export default function Countdown() {
  // null during SSR/prerender and first paint — the ticking values only exist
  // client-side, so server and client markup always match (no hydration mismatch)
  const [t, setT] = useState(null)

  useEffect(() => {
    setT(getTimeLeft())
    const id = setInterval(() => setT(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = t
    ? [['Días', t.days], ['Horas', t.hours], ['Min', t.mins], ['Seg', t.secs]]
    : [['Días', '—'], ['Horas', '—'], ['Min', '—'], ['Seg', '—']]

  return (
    <div className="countdown" role="timer" aria-label="Tiempo restante para las elecciones generales de Puerto Rico 2028">
      <span className="countdown__label">Elecciones Generales · 7 de noviembre de 2028</span>
      <div className="countdown__units">
        {units.map(([label, val]) => (
          <div className="countdown__unit" key={label}>
            <span className="countdown__num">{typeof val === 'number' ? String(val).padStart(2, '0') : val}</span>
            <span className="countdown__unit-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
