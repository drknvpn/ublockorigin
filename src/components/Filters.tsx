import { Check, X, Copy, Star, ShieldCheck, Layers } from 'lucide-react';
import { FILTERS, type FilterBlock } from '@/data/filters';
import { useReveal, useCopy } from '@/hooks/useUtils';

function CopyButton({ url }: { url: string }) {
  const { copied, copy } = useCopy();
  return (
    <button
      onClick={() => copy(url)}
      className={`group/copy relative flex items-center gap-2 w-full px-3.5 py-2.5 rounded-xl glass-soft hover:bg-white/10 transition text-left ${copied ? 'copied-flash' : ''}`}
      aria-label="Скопировать ссылку"
    >
      <span className="font-mono text-[11.5px] text-white/55 truncate flex-1">{url}</span>
      <span className="flex items-center gap-1.5 text-[12px] font-mono text-sky-300 shrink-0">
        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        {copied ? 'Готово' : 'Копировать'}
      </span>
    </button>
  );
}

function FilterCard({ filter, index }: { filter: FilterBlock; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  const isMain = filter.priority === 'main';
  return (
    <article
      ref={ref}
      className="reveal glass glass-hover rounded-3xl p-6 sm:p-7 flex flex-col"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <span className={`grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br ${filter.accent} border border-white/15 text-2xl`}>
            {filter.emoji}
          </span>
          <div>
            <h3 className="font-heading font-bold text-xl leading-tight tracking-tight">
              {filter.name}
            </h3>
            <p className="font-mono text-[12px] text-white/55 mt-0.5">{filter.tagline}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          {isMain ? (
            <span className="badge text-sky-200 border-sky-300/30 bg-sky-400/10">
              <ShieldCheck className="w-3 h-3" /> Основной
            </span>
          ) : (
            <span className="badge text-violet-200 border-violet-300/30 bg-violet-400/10">
              <Layers className="w-3 h-3" /> Дополнительный
            </span>
          )}
          {filter.recommended === 'recommended' && (
            <span className="badge text-amber-200 border-amber-300/30 bg-amber-400/10">
              <Star className="w-3 h-3 fill-amber-300 text-amber-300" /> Рекомендуется
            </span>
          )}
        </div>
      </div>

      {/* Summary */}
      <p className="font-mono text-[13px] leading-relaxed text-white/65 mb-5">
        {filter.summary}
      </p>

      {/* Blocks */}
      <div className="mb-4">
        <p className="font-heading font-medium text-[13px] text-white/85 mb-2.5 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Что блокируется
        </p>
        <ul className="space-y-1.5">
          {filter.blocks.map((b) => (
            <li key={b} className="flex items-start gap-2 font-mono text-[12.5px] text-white/60">
              <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Not blocks */}
      {filter.notBlocks && filter.notBlocks.length > 0 && (
        <div className="mb-4">
          <p className="font-heading font-medium text-[13px] text-white/85 mb-2.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            Что НЕ блокируется
          </p>
          <ul className="space-y-1.5">
            {filter.notBlocks.map((b) => (
              <li key={b} className="flex items-start gap-2 font-mono text-[12.5px] text-white/55">
                <X className="w-3.5 h-3.5 text-rose-400 mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Audience */}
      <div className="glass-soft rounded-xl px-3.5 py-2.5 mb-5">
        <p className="font-mono text-[12px] text-white/55">
          <span className="text-white/40">Для кого: </span>
          {filter.audience}
        </p>
      </div>

      {/* Copy link */}
      <div className="mt-auto">
        <CopyButton url={filter.url} />
      </div>
    </article>
  );
}

export function Filters() {
  return (
    <section id="filters" className="relative px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 badge mb-4">
            <Layers className="w-3.5 h-3.5 text-sky-300" />
            <span className="text-white/70">Три списка фильтров</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight">
            Каталог <span className="text-gradient">фильтров</span>
          </h2>
          <p className="mt-3 mx-auto max-w-xl font-mono text-[13.5px] text-white/55 leading-relaxed">
            RuNoAds — основной список, подключается первым. EvilTube и EvilTubeNoShorts —
            дополнительные, поверх основного.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FILTERS.map((f, i) => (
            <FilterCard key={f.name} filter={f} index={i} />
          ))}
        </div>

        {/* Usage tip */}
        <div className="mt-10 glass rounded-2xl px-5 py-4 flex items-start gap-3 max-w-3xl mx-auto">
          <Star className="w-5 h-5 text-amber-300 mt-0.5 shrink-0 fill-amber-300/40" />
          <p className="font-mono text-[12.5px] text-white/65 leading-relaxed">
            <span className="text-white/90 font-medium">Совет:</span> для максимальной эффективности
            используйте все три файла вместе. Сначала подключите <span className="text-sky-300">RuNoAds</span>,
            затем добавьте <span className="text-violet-300">EvilTube</span> или{' '}
            <span className="text-emerald-300">EvilTubeNoShorts</span> по предпочтению.
          </p>
        </div>
      </div>
    </section>
  );
}
