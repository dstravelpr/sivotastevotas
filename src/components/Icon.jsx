/**
 * Line-icon set — 24×24, stroke = currentColor.
 * Used across the informational card grids (Temas, ¡Vótate!, Vota por la Persona)
 * for a crisp, cohesive look. Color is inherited via currentColor.
 */
const PATHS = {
  // ── Temas ──
  droplet: <path d="M12 2.7s6 6.3 6 10.3a6 6 0 1 1-12 0c0-4 6-10.3 6-10.3Z" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  economy: (
    <>
      <path d="M3 17l5-5 3 3 7-8" />
      <path d="M15 7h5v5" />
    </>
  ),
  landmark: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V10m5 11V10m4 11V10m5 11V10" />
      <path d="M12 3 3 8h18l-9-5Z" />
    </>
  ),
  health: (
    <>
      <path d="M3 12h4l2 5 4-11 2 6h6" />
    </>
  ),
  storm: (
    <>
      <path d="M4 8h13a3 3 0 1 0-3-3" />
      <path d="M2 12h15a3 3 0 1 1-3 3" />
      <path d="M4 16h9a2.5 2.5 0 1 1-2.5 2.5" />
    </>
  ),
  shield: <path d="M12 2 5 5v6c0 4 3 7 7 9 4-2 7-5 7-9V5l-7-3Z" />,
  book: (
    <>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5V4.5Z" />
      <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" />
    </>
  ),
  // ── ¡Vótate! ──
  chart: (
    <>
      <path d="M3 21h18" />
      <path d="M6 21v-7m5 7V6m5 15v-10" />
    </>
  ),
  ballot: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  cycle: (
    <>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v5h-5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" />
    </>
  ),
  // ── Vota por la Persona ──
  folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />,
  money: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
}

export default function Icon({ name, size = 26, className = '' }) {
  const glyph = PATHS[name]
  if (!glyph) return null
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  )
}
