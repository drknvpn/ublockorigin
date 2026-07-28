import { Github, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative px-5 pt-10 pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400/30 to-violet-400/30 border border-white/15">
                <ShieldCheck className="w-5 h-5 text-sky-300" />
              </span>
              <div>
                <p className="font-heading font-semibold text-[15px]">RuNoAds Filter Lists</p>
                <p className="font-mono text-[11.5px] text-white/45">Открытый проект · 17 000+ правил</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/drknvpn/ublockorigin"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-soft hover:bg-white/10 transition font-mono text-[12.5px] text-white/70 hover:text-white"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="#top"
                className="px-4 py-2.5 rounded-xl glass-soft hover:bg-white/10 transition font-mono text-[12.5px] text-white/70 hover:text-white"
              >
                Наверх
              </a>
            </div>
          </div>
          <div className="mt-7 pt-6 border-t border-white/10 text-center">
            <p className="font-mono text-[11px] text-white/35 leading-relaxed">
              Фильтры распространяются свободно. Проект не связан с uBlock Origin и AdGuard.
              Используйте на свой страх и риск.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
