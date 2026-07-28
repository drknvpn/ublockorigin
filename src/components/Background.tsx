export function Noise() {
  return (
    <>
      <div className="noise" aria-hidden />
      <div className="scanline" aria-hidden />
    </>
  );
}

export function Aurora() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="aurora animate-floaty"
        style={{
          width: 520,
          height: 520,
          top: '-8%',
          left: '-6%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.55), transparent 70%)',
        }}
      />
      <div
        className="aurora animate-floaty2"
        style={{
          width: 600,
          height: 600,
          top: '20%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.45), transparent 70%)',
        }}
      />
      <div
        className="aurora animate-floaty"
        style={{
          width: 480,
          height: 480,
          bottom: '-12%',
          left: '30%',
          background: 'radial-gradient(circle, rgba(45,212,191,0.4), transparent 70%)',
          animationDelay: '4s',
        }}
      />
      <div
        className="aurora animate-floaty2"
        style={{
          width: 380,
          height: 380,
          bottom: '10%',
          right: '18%',
          background: 'radial-gradient(circle, rgba(244,114,182,0.35), transparent 70%)',
          animationDelay: '2s',
        }}
      />
    </div>
  );
}
