import { Download, ExternalLink } from 'lucide-react';
import { EXTENSIONS } from '@/data/filters';
import { useReveal } from '@/hooks/useUtils';

function ExtensionCard({ ext, index }: { ext: typeof EXTENSIONS[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal bracket panel-mid panel-hover rounded-xl p-5"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <span className="text-lg">{ext.emoji}</span>
        <div>
          <h3 className="font-heading font-bold text-[16px] tracking-tight text-white">{ext.name}</h3>
          <p className="font-mono text-[10.5px] text-white/35">блокировщик рекламы</p>
        </div>
      </div>
      <p className="font-mono text-[11.5px] text-white/45 leading-relaxed mb-4">
        {ext.description}
      </p>
      <div className="divider mb-4" />
      <div className="space-y-2">
        {ext.links.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-2 px-3 py-2 rounded-lg panel hover:border-white/20 transition"
          >
            <span className="flex items-center gap-2 min-w-0">
              <Download className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--accent)' }} />
              <span className="font-mono text-[11.5px] text-white/60 group-hover:text-white/90 truncate">
                {l.name}
              </span>
            </span>
            <span className="flex items-center gap-1.5 shrink-0">
              <span className="badge text-white/35">{l.store}</span>
              <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-white/50 transition" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function Extensions() {
  return (
    <section id="extensions" className="relative px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 badge mb-3" style={{ borderColor: 'rgba(168,197,218,0.2)' }}>
            <Download className="w-3 h-3" style={{ color: 'var(--accent)' }} />
            <span className="text-white/50">установка расширений</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight text-white">
            Где <span className="text-shimmer">скачать</span>
          </h2>
          <p className="mt-2 mx-auto max-w-md font-mono text-[12px] text-white/40 leading-relaxed">
            Ссылки на официальные магазины расширений для разных браузеров.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {EXTENSIONS.map((e, i) => (
            <ExtensionCard key={e.id} ext={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
