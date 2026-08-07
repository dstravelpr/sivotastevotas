const ITEMS = [
  'SI VOTAS, TE VOTAS Y LOS VOTAMOS.',
  '7 DE NOVIEMBRE 2028',
  'TU VOTO ES TU PODER',
  '¡REGÍSTRATE HOY!',
  'VOTA BORICUA',
]

export default function Marquee() {
  // Content duplicated so the loop is seamless; hidden from screen readers
  const strip = (
    <div className="marquee__strip">
      {ITEMS.map((item) => (
        <span className="marquee__item" key={item}>
          {item}
          <span className="marquee__star">★</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {strip}
        {strip}
      </div>
    </div>
  )
}
