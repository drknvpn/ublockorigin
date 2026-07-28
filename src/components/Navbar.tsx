import { ShieldCheck, Github } from 'lucide-react';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-5 pt-4">
        <div className="glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400/30 to-violet-400/30 border border-white/15">
              <ShieldCheck className="w-5 h-5 text-sky-300" strokeWidth={2.2} />
            </span>
            <span className="font-heading font-semibold text-[15px] tracking-tight">
              RuNoAds<span className="text-sky-300">.</span>
            </span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-[13px] text-white/65 font-mono">
            <a href="#filters" className="hover:text-white transition-colors">Фильтры</a>
            <a href="#install" className="hover:text-white transition-colors">Установка</a>
            <a href="#extensions" className="hover:text-white transition-colors">Расширения</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>
          <a
            href="https://github.com/drknvpn/ublockorigin"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[13px] font-mono text-white/70 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
