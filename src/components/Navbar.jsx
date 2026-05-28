import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#inicio" className="navbar__logo" style={{ textDecoration: 'none' }}>
        <Logo size={36} wordmark horizontal />
      </a>
      <ul className="navbar__links">
        <li><a href="#impacto">Impacto</a></li>
        <li><a href="#por-que">¿Por Qué?</a></li>
        <li><a href="#oficiales">Oficiales</a></li>
        <li><a href="#historia">Historia</a></li>
        <li><a href="#registrate" className="nav-cta">¡Regístrate!</a></li>
      </ul>
    </nav>
  )
}
