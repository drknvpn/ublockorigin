import { ShieldCheck, Sparkles, ArrowDown } from 'lucide-react';
import { useReveal } from '@/hooks/useUtils';

export function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="top" className="relative pt-36 pb-20 px-5">
      <div ref={ref} className="reveal mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 badge mb-7">
          <Sparkles className="w-3.5 h-3.5 text-sky-300" />
          <span className="text-white/70">Кастомные списки фильтров</span>
        </div>
        <h1 className="font-heading font-extrabold tracking-tight text-[2.6rem] leading-[1.05] sm:text-6xl sm:leading-[1.04]">
          Чистый интернет<br />
          <span className="text-gradient">без рекламы и мусора</span>
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-[15px] sm:text-base text-white/60 font-mono leading-relaxed">
          Подборка фильтров для <span className="text-white/85">uBlock Origin</span> и{' '}
          <span className="text-white/85">AdGuard</span>. Более 17 000 правил для русскоязычных
          сайтов и YouTube. Установка в один клик.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#filters"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover font-heading font-medium text-[15px]"
          >
            <ShieldCheck className="w-4.5 h-4.5 text-sky-300" />
            Смотреть фильтры
          </a>
          <a
            href="#install"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-soft hover:bg-white/10 transition font-mono text-[14px] text-white/75 hover:text-white"
          >
            Как установить
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] font-mono text-white/45">
          <span>17 000+ правил</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Яндекс · Mail.ru · VK · MAX</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>uBlock Origin + AdGuard</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Open Source</span>
        </div>
      </div>
    </section>
  );
}
