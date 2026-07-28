import { Check, X, Copy, Star, ShieldCheck, Layers } from 'lucide-react';
import { FILTERS, type FilterBlock } from '@/data/filters';
import { useReveal, useCopy } from '@/hooks/useUtils';

function CopyButton({ url }: { url: string }) {
  const { copied, copy } = useCopy();
  return (
    <button
      onClick={() => copy(url)}
      className={`group/copy flex items-center gap-2 w-full px-3 py-2.5 rounded-lg panel font-mono text-left transition hover:border-white/20 ${copied ? 'copied-flash' : ''}`}
      aria-label="Скопировать ссылку"
    >
      <span className="text-[10.5px] text-white/40 truncate flex-1">{url}</span>
      <span className="flex items-center gap-1 text-[10.5px] shrink-0" style={{ color: 'var(--accent)' }}>
        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
        {copied ? 'ок' : 'копировать'}
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
      className="reveal bracket panel-mid panel-hover rounded-xl p-5 flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{filter.emoji}</span>
            <h3 className="font-heading font-bold text-[17px] leading-none tracking-tight text-white truncate">
              {filter.name}
            </h3>
          </div>
          <p className="font-mono text-[11px] text-white/40 truncate">{filter.tagline}</p>
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          {isMain ? (
            <span className="badge" style={{ color: 'var(--accent)', borderColor: 'rgba(168,197,218,0.2)', background: 'rgba(168,197,218,0.06)' }}>
              <ShieldCheck className="w-2.5 h-2.5" /> основной
            </span>
          ) : (
            <span className="badge text-white/45">
              <Layers className="w-2.5 h-2.5" /> доп.
            </span>
          )}
          {filter.recommended === 'recommended' && (
            <span className="badge text-amber-200/70" style={{ borderColor: 'rgba(251,191,36,0.2)', background: 'rgba(251,191,36,0.05)' }}>
              <Star className="w-2.5 h-2.5 fill-amber-300/50 text-amber-300/70" /> рек.
            </span>
          )}
        </div>
      </div>

      {/* Summary */}
      <p className="font-mono text-[12px] leading-relaxed text-white/50 mb-4">
        {filter.summary}
      </p>

      <div className="divider mb-4" />

      {/* Blocks */}
      <div className="mb-3">
        <p className="font-heading font-medium text-[12px] text-white/70 mb-2 flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-emerald-400/70" />
          блокирует
        </p>
        <ul className="space-y-1">
          {filter.blocks.map((b) => (
            <li key={b} className="flex items-start gap-1.5 font-mono text-[11.5px] text-white/45 leading-relaxed">
              <Check className="w-3 h-3 text-emerald-400/60 mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Not blocks */}
      {filter.notBlocks && filter.notBlocks.length > 0 && (
        <div className="mb-3">
          <p className="font-heading font-medium text-[12px] text-white/70 mb-2 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-rose-400/70" />
            не блокирует
          </p>
          <ul className="space-y-1">
            {filter.notBlocks.map((b) => (
              <li key={b} className="flex items-start gap-1.5 font-mono text-[11.5px] text-white/40 leading-relaxed">
                <X className="w-3 h-3 text-rose-400/60 mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Audience */}
      <div className="panel rounded-lg px-3 py-2 mb-4">
        <p className="font-mono text-[11px] text-white/40 leading-relaxed">
          <span className="text-white/30">для кого: </span>
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
    <section id="filters" className="relative px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 badge mb-3" style={{ borderColor: 'rgba(168,197,218,0.2)' }}>
            <Layers className="w-3 h-3" style={{ color: 'var(--accent)' }} />
            <span className="text-white/50">3 списка</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight text-white">
            Каталог <span className="text-shimmer">фильтров</span>
          </h2>
          <p className="mt-2 mx-auto max-w-md font-mono text-[12px] text-white/40 leading-relaxed">
            RuNoAds — основной, подключается первым. EvilTube или EvilTubeNoShorts — поверх основного.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FILTERS.map((f, i) => (
            <FilterCard key={f.name} filter={f} index={i} />
          ))}
        </div>

        {/* Usage tip */}
        <div className="mt-6 panel rounded-xl px-4 py-3 flex items-start gap-3 max-w-2xl mx-auto">
          <Star className="w-3.5 h-3.5 text-amber-300/60 mt-0.5 shrink-0 fill-amber-300/20" />
          <p className="font-mono text-[11.5px] text-white/45 leading-relaxed">
            <span className="text-white/70">Совет:</span> для максимальной эффективности используйте
            два файла вместе. Сначала <span style={{ color: 'var(--accent)' }}>RuNoAds</span>,
            затем один из YouTube-фильтров на выбор.
          </p>
        </div>
      </div>
    </section>
  );
}
