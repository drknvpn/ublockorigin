import { useState } from 'react';
import { ShieldCheck, Settings, ListPlus, Check, Clipboard, Layers, ChevronRight } from 'lucide-react';
import { useReveal, useCopy } from '@/hooks/useUtils';
import { FILTERS } from '@/data/filters';

type Tab = 'ublock' | 'adguard';

function Step({
  n,
  icon,
  title,
  children,
  last,
}: {
  n: number;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={`relative pl-11 ${last ? '' : 'step-line'}`}>
      <span className="absolute left-0 top-0 grid place-items-center w-9 h-9 rounded-lg panel border border-white/10">
        {icon}
      </span>
      <span className="font-mono text-[10px] text-white/30">шаг {n}</span>
      <h4 className="font-heading font-semibold text-[14px] text-white mb-1.5">{title}</h4>
      <div className="font-mono text-[12px] text-white/45 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

function CodeLine({ children }: { children: React.ReactNode }) {
  return (
    <code className="block px-3 py-2 rounded-md bg-black/30 border border-white/8 text-[10.5px] overflow-x-auto whitespace-nowrap"
      style={{ color: 'var(--accent)' }}>
      {children}
    </code>
  );
}

function CopyChip({ text }: { text: string }) {
  const { copied, copy } = useCopy();
  return (
    <button
      onClick={() => copy(text)}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md panel font-mono text-[10.5px] transition hover:border-white/20 shrink-0 ${copied ? 'copied-flash' : ''}`}
      style={{ color: 'var(--accent)' }}
    >
      {copied ? <Check className="w-3 h-3" /> : <Clipboard className="w-3 h-3" />}
      {copied ? 'ок' : 'копировать'}
    </button>
  );
}

export function Install() {
  const [tab, setTab] = useState<Tab>('ublock');
  const ref = useReveal<HTMLDivElement>();
  const ruUrl = FILTERS[0].url;

  return (
    <section id="install" className="relative px-4 py-16">
      <div ref={ref} className="reveal mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 badge mb-3" style={{ borderColor: 'rgba(168,197,218,0.2)' }}>
            <Settings className="w-3 h-3" style={{ color: 'var(--accent)' }} />
            <span className="text-white/50">инструкция</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight text-white">
            Как <span className="text-shimmer">установить</span>
          </h2>
          <p className="mt-2 mx-auto max-w-md font-mono text-[12px] text-white/40 leading-relaxed">
            Добавление списка фильтров занимает меньше минуты. Выберите расширение.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="panel rounded-lg p-1 inline-flex gap-1">
            <button
              onClick={() => setTab('ublock')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-heading font-medium text-[13px] transition ${
                tab === 'ublock' ? 'panel-mid text-white' : 'text-white/40 hover:text-white/70'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
              uBlock Origin
            </button>
            <button
              onClick={() => setTab('adguard')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-heading font-medium text-[13px] transition ${
                tab === 'adguard' ? 'panel-mid text-white' : 'text-white/40 hover:text-white/70'
              }`}
            >
              <Layers className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
              AdGuard
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="panel-mid rounded-xl p-6 sm:p-8">
          {tab === 'ublock' ? (
            <div className="space-y-6">
              <Step n={1} icon={<Settings className="w-4 h-4" style={{ color: 'var(--accent)' }} />} title="Откройте настройки uBlock Origin">
                Нажмите на иконку расширения, затем на значок шестерёнки{' '}
                <span className="text-white/70">«Открыть панель управления»</span>.
              </Step>
              <Step n={2} icon={<ListPlus className="w-4 h-4" style={{ color: 'var(--accent)' }} />} title="Вкладка «Списки фильтров»">
                В панели управления выберите вкладку{' '}
                <span className="text-white/70">«Списки фильтров»</span>.
              </Step>
              <Step n={3} icon={<ChevronRight className="w-4 h-4" style={{ color: 'var(--accent)' }} />} title="Раздел «Импорт…»">
                Прокрутите вниз до{' '}
                <span className="text-white/70">«Списки, которые можно добавить по ссылке»</span>.
              </Step>
              <Step n={4} icon={<Clipboard className="w-4 h-4" style={{ color: 'var(--accent)' }} />} title="Вставьте ссылку">
                <p>Начните с основного списка RuNoAds:</p>
                <div className="flex items-center gap-2 mt-1">
                  <CodeLine>{ruUrl}</CodeLine>
                  <CopyChip text={ruUrl} />
                </div>
              </Step>
              <Step n={5} icon={<Check className="w-4 h-4" style={{ color: 'var(--accent)' }} />} title="Примените изменения" last>
                Нажмите <span className="text-white/70">«Применить изменения»</span>, затем кликните
                по красной иконке обновления. Повторите шаги 3–5 для EvilTube или EvilTubeNoShorts.
              </Step>
            </div>
          ) : (
            <div className="space-y-6">
              <Step n={1} icon={<Settings className="w-4 h-4" style={{ color: 'var(--accent)' }} />} title="Откройте настройки AdGuard">
                Нажмите на иконку AdGuard, затем{' '}
                <span className="text-white/70">«Настройки»</span> →{' '}
                <span className="text-white/70">«Блокировщик рекламы»</span>.
              </Step>
              <Step n={2} icon={<ListPlus className="w-4 h-4" style={{ color: 'var(--accent)' }} />} title="Раздел «Фильтры»">
                В меню слева выберите{' '}
                <span className="text-white/70">«Фильтры»</span> →{' '}
                <span className="text-white/70">«Пользовательские»</span>.
              </Step>
              <Step n={3} icon={<ChevronRight className="w-4 h-4" style={{ color: 'var(--accent)' }} />} title="Добавьте фильтр">
                Нажмите <span className="text-white/70">«+ Добавить фильтр»</span>.
              </Step>
              <Step n={4} icon={<Clipboard className="w-4 h-4" style={{ color: 'var(--accent)' }} />} title="Вставьте ссылку и название">
                <p>Начните с RuNoAds:</p>
                <div className="flex items-center gap-2 mt-1">
                  <CodeLine>{ruUrl}</CodeLine>
                  <CopyChip text={ruUrl} />
                </div>
              </Step>
              <Step n={5} icon={<Check className="w-4 h-4" style={{ color: 'var(--accent)' }} />} title="Подпишитесь и обновите" last>
                Нажмите <span className="text-white/70">«Подписаться»</span>, затем обновите фильтры.
                Повторите для EvilTube или EvilTubeNoShorts.
              </Step>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
