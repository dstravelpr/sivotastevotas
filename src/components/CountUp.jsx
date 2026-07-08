import { useState, useEffect, useRef } from 'react'

/**
 * Animates a stat string like "42%", "1.4M", "78" or "$13B" counting up
 * when it scrolls into view.
 *
 * SSR/SEO note: the initial render shows the FINAL value, so prerendered
 * HTML gives crawlers the real stat. The 0→target animation only kicks in
 * client-side when the element first becomes visible.
 */
export default function CountUp({ value, duration = 1600 }) {
  const match = value.match(/^([^0-9]*)([\d.]+)(.*)$/)
  const prefix = match ? match[1] : ''
  const target = match ? parseFloat(match[2]) : 0
  const suffix = match ? match[3] : ''
  const decimals = match && match[2].includes('.') ? match[2].split('.')[1].length : 0

  const [display, setDisplay] = useState(match ? match[2] : value)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !match) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return
        started.current = true
        io.disconnect()

        const t0 = performance.now()
        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setDisplay((target * eased).toFixed(decimals))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!match) return <span>{value}</span>

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}
