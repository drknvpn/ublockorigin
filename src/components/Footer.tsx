import { Github, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative px-4 pt-8 pb-10">
      <div className="mx-auto max-w-5xl">
        <div className="panel-mid rounded-xl px-6 py-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4" style={{ color: 'var(--accent)' }} strokeWidth={2} />
              <div>
                <p className="font-heading font-semibold text-[13px] text-white">RuNoAds Filter Lists</p>
                <p className="font-mono text-[10.5px] text-white/35">открытый проект · 17 000+ правил</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/drknvpn/ublockorigin"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg panel font-mono text-[11.5px] text-white/55 hover:text-white/85 transition hover:border-white/20"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href="#top"
                className="px-3.5 py-2 rounded-lg panel font-mono text-[11.5px] text-white/55 hover:text-white/85 transition hover:border-white/20"
              >
                наверх
              </a>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-white/8 text-center">
            <p className="font-mono text-[10px] text-white/25 leading-relaxed">
              Фильтры распространяются свободно. Проект не связан с uBlock Origin и AdGuard.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
