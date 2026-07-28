export function Noise() {
  return (
    <>
      <div className="noise" aria-hidden />
      <div className="scanline" aria-hidden />
    </>
  );
}

export function AmbientGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="glow"
        style={{
          width: 700,
          height: 500,
          top: '-15%',
          left: '-10%',
          background: 'radial-gradient(ellipse, rgba(168,197,218,0.07) 0%, transparent 65%)',
          animation: 'floaty 20s ease-in-out infinite',
        }}
      />
      <div
        className="glow"
        style={{
          width: 500,
          height: 500,
          bottom: '-10%',
          right: '-8%',
          background: 'radial-gradient(ellipse, rgba(168,197,218,0.05) 0%, transparent 65%)',
          animation: 'floaty 26s ease-in-out infinite reverse',
          animationDelay: '5s',
        }}
      />
    </div>
  );
}
