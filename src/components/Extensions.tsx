import { Download, ExternalLink } from 'lucide-react';
import { EXTENSIONS } from '@/data/filters';
import { useReveal } from '@/hooks/useUtils';

function ExtensionCard({ ext, index }: { ext: typeof EXTENSIONS[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal glass glass-hover rounded-3xl p-6 sm:p-7"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="grid place-items-center w-12 h-12 rounded-2xl glass-soft border border-white/15 text-2xl">
          {ext.emoji}
        </span>
        <div>
          <h3 className="font-heading font-bold text-xl tracking-tight">{ext.name}</h3>
          <p className="font-mono text-[12px] text-white/50">Блокировщик рекламы</p>
        </div>
      </div>
      <p className="font-mono text-[12.5px] text-white/60 leading-relaxed mb-5">
        {ext.description}
      </p>
      <div className="space-y-2.5">
        {ext.links.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl glass-soft hover:bg-white/10 transition"
          >
            <span className="flex items-center gap-2.5">
              <Download className="w-4 h-4 text-sky-300 shrink-0" />
              <span className="font-mono text-[12.5px] text-white/75 group-hover:text-white">
                {l.name}
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="badge text-white/50">{l.store}</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60 transition" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function Extensions() {
  return (
    <section id="extensions" className="relative px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 badge mb-4">
            <Download className="w-3.5 h-3.5 text-sky-300" />
            <span className="text-white/70">Установка расширений</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight">
            Где <span className="text-gradient">скачать</span>
          </h2>
          <p className="mt-3 mx-auto max-w-xl font-mono text-[13.5px] text-white/55 leading-relaxed">
            Ссылки на официальные магазины расширений для разных браузеров.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {EXTENSIONS.map((e, i) => (
            <ExtensionCard key={e.id} ext={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
