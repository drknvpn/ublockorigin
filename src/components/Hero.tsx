import { ShieldCheck, ArrowDown } from 'lucide-react';
import { useReveal } from '@/hooks/useUtils';

export function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="top" className="relative pt-32 pb-16 px-4">
      <div ref={ref} className="reveal mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 badge mb-6" style={{ borderColor: 'rgba(168,197,218,0.2)' }}>
          <ShieldCheck className="w-3 h-3" style={{ color: 'var(--accent)' }} strokeWidth={2} />
          <span className="text-white/50">uBlock Origin · AdGuard</span>
        </div>

        <h1 className="font-heading font-bold tracking-tight text-[2.2rem] leading-[1.08] sm:text-5xl text-white">
          Чистый интернет<br />
          <span className="text-shimmer">без рекламы</span>
        </h1>

        <p className="mt-5 mx-auto max-w-xl text-[13px] sm:text-[14px] text-white/45 font-mono leading-relaxed">
          Кастомные списки фильтров для uBlock Origin и AdGuard.
          Более 17 000 правил — русскоязычные сайты, YouTube.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#filters"
            className="bracket inline-flex items-center gap-2 px-5 py-2.5 rounded-lg panel-mid panel-hover font-heading font-medium text-[13px] text-white"
          >
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} strokeWidth={2} />
            Смотреть фильтры
          </a>
          <a
            href="#install"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg panel font-mono text-[12px] text-white/50 hover:text-white/80 transition-colors"
          >
            Как установить
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="mt-10 divider max-w-xs mx-auto" />

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[11px] font-mono text-white/30">
          <span>17 000+ правил</span>
          <span>·</span>
          <span>Яндекс · Mail · VK · MAX</span>
          <span>·</span>
          <span>Open Source</span>
        </div>
      </div>
    </section>
  );
}
