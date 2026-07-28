import { ShieldCheck, Github } from 'lucide-react';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-5xl px-4 pt-4">
        <div className="panel-mid rounded-xl px-5 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-accent" style={{ color: 'var(--accent)' }} strokeWidth={2} />
            <span className="font-heading font-semibold text-[14px] tracking-tight text-white">
              RuNoAds
            </span>
          </a>
          <nav className="hidden sm:flex items-center gap-5 text-[12px] text-white/50 font-mono">
            <a href="#filters" className="hover:text-white/90 transition-colors">фильтры</a>
            <a href="#install" className="hover:text-white/90 transition-colors">установка</a>
            <a href="#extensions" className="hover:text-white/90 transition-colors">расширения</a>
            <a href="#faq" className="hover:text-white/90 transition-colors">faq</a>
          </nav>
          <a
            href="https://github.com/drknvpn/ublockorigin"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[12px] font-mono text-white/45 hover:text-white/85 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
