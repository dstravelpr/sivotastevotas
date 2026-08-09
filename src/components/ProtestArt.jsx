/**
 * Protest-banner artwork for the "Caso en Desarrollo" cards.
 * Inline SVG so it stays crisp, themeable, and present in the prerendered HTML.
 */

const HEAD = "'Big Shoulders Display', Impact, 'Arial Black', sans-serif"

/* ── EXIGIMOS AGUA ─────────────────────────────────────────────
   Based on the banners being used in the 2026 water protests:
   dripping faucet + droplet + heavy brush-style lettering.        */
export function ExigimosAgua() {
  return (
    <svg
      viewBox="0 0 440 210"
      className="protest-art"
      role="img"
      aria-label="Pancarta de protesta: Exigimos Agua"
    >
      <g fill="#111111">
        {/* wall mount + body */}
        <rect x="16" y="46" width="16" height="40" rx="3" />
        <rect x="32" y="54" width="58" height="24" rx="4" />
        {/* valve stem + handle */}
        <rect x="54" y="30" width="14" height="26" rx="3" />
        <rect x="38" y="18" width="46" height="12" rx="6" />
        <circle cx="61" cy="24" r="9" />
        {/* spout */}
        <path d="M90 56h16v28a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8V56z" />
      </g>

      {/* pressure ticks */}
      <g stroke="#2C7BE5" strokeWidth="6" strokeLinecap="round">
        <path d="M14 30 4 22" />
        <path d="M20 20 16 8" />
        <path d="M36 12 34 2" opacity="0.7" />
      </g>

      {/* falling droplet + splash */}
      <path
        d="M96 106c0 0 22 24 22 36a22 22 0 0 1-44 0c0-12 22-36 22-36z"
        fill="#1E6FD9"
      />
      <path d="M88 122c-3 6-5 11-5 16a13 13 0 0 0 6 11" fill="none" stroke="#8FC4FF" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
      <g stroke="#2C7BE5" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M52 176c14-9 26-12 44-12s30 3 44 12" opacity="0.9" />
        <path d="M40 190c18-13 34-17 56-17s38 4 56 17" opacity="0.55" />
        <path d="M150 130l12-8" />
        <path d="M156 148l14-3" />
        <path d="M44 130l-12-8" opacity="0.8" />
      </g>

      {/* lettering */}
      <g fontFamily={HEAD} fontWeight="900" fill="#111111" transform="skewX(-7)">
        <text x="188" y="86" fontSize="65" letterSpacing="1">EXIGIMOS</text>
        <text x="196" y="164" fontSize="96" letterSpacing="2">AGUA</text>
      </g>

      {/* navy underline swoosh */}
      <path
        d="M196 180c56-9 116-11 190-4-70 12-132 14-190 8z"
        fill="#0B2A63"
      />
    </svg>
  )
}

/* ── ¿Y LA LUZ? ────────────────────────────────────────────────
   Dead bulb with a snapped filament — the blackout complaint
   everyone in PR already says out loud.                          */
export function YLaLuz() {
  return (
    <svg
      viewBox="0 0 440 210"
      className="protest-art"
      role="img"
      aria-label="Pancarta de protesta: ¿Y la luz?"
    >
      {/* dead rays — short, gray, going nowhere */}
      <g stroke="#9A9A9A" strokeWidth="6" strokeLinecap="round" opacity="0.55">
        <path d="M95 16v-12" />
        <path d="M46 34l-9-9" />
        <path d="M144 34l9-9" />
        <path d="M28 84H14" />
        <path d="M162 84h14" />
      </g>

      {/* glass */}
      <circle cx="95" cy="80" r="45" fill="#1A1A1A" />
      <circle cx="95" cy="80" r="45" fill="none" stroke="#111111" strokeWidth="5" />
      {/* faint highlight so it still reads as glass */}
      <path d="M68 62a32 32 0 0 1 20-19" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" opacity="0.18" />

      {/* snapped filament */}
      <g stroke="#CF0A2C" strokeWidth="5" fill="none" strokeLinecap="round">
        <path d="M80 104V88l7-16 6 14" />
        <path d="M110 104V88l-6-14" />
      </g>
      {/* break sparks */}
      <g stroke="#CF0A2C" strokeWidth="3.5" strokeLinecap="round" opacity="0.9">
        <path d="M96 60l5-7" />
        <path d="M101 66l8-2" />
      </g>

      {/* cracks */}
      <g stroke="#6E6E6E" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M62 66l14 10-8 12" />
        <path d="M122 100l-11-8" />
      </g>

      {/* screw base */}
      <g fill="#111111">
        <path d="M79 118h32v8H79z" />
        <path d="M81 130h28v8H81z" />
        <path d="M84 142h22v9a6 6 0 0 1-6 6h-10a6 6 0 0 1-6-6z" />
      </g>

      {/* lettering */}
      <g fontFamily={HEAD} fontWeight="900" fill="#111111" transform="skewX(-7)">
        <text x="192" y="84" fontSize="58" letterSpacing="1">¿Y LA</text>
        <text x="198" y="164" fontSize="96" letterSpacing="2">LUZ?</text>
      </g>

      {/* red underline swoosh */}
      <path d="M198 180c50-9 104-11 172-4-64 12-120 14-172 8z" fill="#CF0A2C" />
    </svg>
  )
}

/* ── NO A ESENCIA ──────────────────────────────────────────────
   Original artwork: Cabo Rojo cliffs + lighthouse behind a
   prohibition ring over luxury-development towers.               */
export function NoAEsencia() {
  return (
    <svg
      viewBox="0 0 440 210"
      className="protest-art"
      role="img"
      aria-label="Pancarta de protesta: No a Esencia — Cabo Rojo no se vende"
    >
      {/* sea + cliff silhouette behind the emblem */}
      <g opacity="0.5">
        <path
          d="M0 158c34-4 52-26 78-26s36 14 62 14 40-20 70-20 46 16 78 16 48-12 76-12 46 8 76 6v74H0z"
          fill="#0B2A63"
          opacity="0.35"
        />
        <path
          d="M0 176c40-6 60 8 96 8s54-12 88-12 52 12 88 12 56-14 84-10v36H0z"
          fill="#0B2A63"
          opacity="0.5"
        />
      </g>

      {/* development towers (the thing being rejected) */}
      <g fill="#111111" opacity="0.92">
        <rect x="62" y="86" width="26" height="70" />
        <rect x="92" y="66" width="30" height="90" />
        <rect x="126" y="98" width="22" height="58" />
        {/* crane */}
        <rect x="96" y="40" width="4" height="28" />
        <rect x="76" y="38" width="52" height="5" />
        <path d="M124 43v12" stroke="#111111" strokeWidth="3" />
      </g>
      {/* tower windows */}
      <g fill="#FFFFFF" opacity="0.55">
        <rect x="68" y="96" width="6" height="8" /><rect x="78" y="96" width="6" height="8" />
        <rect x="68" y="112" width="6" height="8" /><rect x="78" y="112" width="6" height="8" />
        <rect x="99" y="78" width="7" height="9" /><rect x="110" y="78" width="7" height="9" />
        <rect x="99" y="96" width="7" height="9" /><rect x="110" y="96" width="7" height="9" />
        <rect x="132" y="110" width="6" height="8" />
      </g>

      {/* prohibition ring + slash */}
      <g stroke="#CF0A2C" strokeWidth="15" fill="none" strokeLinecap="round">
        <circle cx="105" cy="105" r="70" />
        <path d="M56 56l98 98" />
      </g>

      {/* lettering */}
      <g fontFamily={HEAD} fontWeight="900" transform="skewX(-7)">
        <text x="212" y="76" fontSize="52" fill="#CF0A2C" letterSpacing="2">NO A</text>
        <text x="212" y="148" fontSize="67" fill="#111111" letterSpacing="1">ESENCIA</text>
      </g>

      <text
        x="214"
        y="180"
        fontFamily={HEAD}
        fontWeight="900"
        fontSize="16"
        fill="#0B2A63"
        letterSpacing="2.2"
      >
        CABO ROJO NO SE VENDE
      </text>
    </svg>
  )
}
