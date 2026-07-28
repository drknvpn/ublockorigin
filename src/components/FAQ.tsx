import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useReveal } from '@/hooks/useUtils';

const FAQS = [
  {
    q: 'Какие списки подключать и в каком порядке?',
    a: 'Сначала подключите RuNoAds — основной список с 17 000+ правил для русскоязычных сайтов. Затем добавьте EvilTube (если смотрите Shorts) или EvilTubeNoShorts (если хотите убрать Shorts). Для максимальной эффективности используйте RuNoAds + один из YouTube-фильтров.',
  },
  {
    q: 'Чем отличается EvilTube от EvilTubeNoShorts?',
    a: 'EvilTube убирает рекламу и мусор в интерфейсе YouTube, но оставляет раздел Shorts активным. EvilTubeNoShorts дополнительно полностью скрывает Shorts: раздел на главной, кнопку в меню, Shorts в рекомендациях и вкладку на каналах.',
  },
  {
    q: 'Работают ли фильтры и в uBlock Origin, и в AdGuard?',
    a: 'Да, все три списка совместимы с обоими расширениями. Формат правил поддерживается обоими продуктами.',
  },
  {
    q: 'Нужно ли обновлять фильтры вручную?',
    a: 'Нет. Оба расширения автоматически обновляют подписки раз в несколько дней. При необходимости можно обновить списки вручную в настройках расширения.',
  },
  {
    q: 'Фильтры сломали сайт. Что делать?',
    a: 'Откройте иконку расширения на проблемной странице и выключите блокировку для этого сайта. Если проблема повторяется, сообщите об этом в репозитории проекта на GitHub.',
  },
  {
    q: 'Эти списки бесплатные?',
    a: 'Да, все фильтры распространяются свободно по принципу открытого исходного кода. Проект некоммерческий.',
  },
];

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal panel rounded-lg overflow-hidden"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left"
      >
        <span className="font-heading font-medium text-[13.5px] text-white/85">{q}</span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          style={{ color: 'var(--accent)' }}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-3.5 font-mono text-[11.5px] text-white/45 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 badge mb-3" style={{ borderColor: 'rgba(168,197,218,0.2)' }}>
            <span className="text-white/50">частые вопросы</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight text-white">
            Вопросы и <span className="text-shimmer">ответы</span>
          </h2>
        </div>
        <div className="space-y-2.5">
          {FAQS.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
