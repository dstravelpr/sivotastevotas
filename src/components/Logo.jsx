/**
 * Campaign Logo — "La V Boricua"
 *
 * Two triangles (red left / blue right) converging to a single bottom point.
 * A white PR star is superimposed on top where both colors meet.
 * Wordmark: VOTA BORICUA
 */
export default function Logo({
  size = 40,
  wordmark = true,
  horizontal = true,
}) {
  const starPoints =
    '140,220 147,239 167,239 151,251 157,271 140,259 124,271 130,251 113,239 134,239'

  const mark = (
    <svg
      width={size}
      height={Math.round(size * 305 / 280)}
      viewBox="0 0 280 305"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0 }}
    >
      {/* Left arm — RED triangle */}
      <polygon points="10,10 96,10 140,290" fill="#CF0A2C" />
      {/* Right arm — Traditional PR light blue */}
      <polygon points="270,10 184,10 140,290" fill="#3F76BC" />
      {/* White PR star — superimposed on top of both arms */}
      <polygon points={starPoints} fill="#FFFFFF" />
    </svg>
  )

  if (!wordmark) return mark

  return (
    <div
      className={`logo-wrap${horizontal ? ' logo-wrap--h' : ' logo-wrap--v'}`}
      aria-label="Vota Boricua"
    >
      {mark}
      <div className="logo-wordmark">
        <span className="logo-wm-1">VOTA</span>
        <span className="logo-wm-2">BORICUA</span>
      </div>
    </div>
  )
}
