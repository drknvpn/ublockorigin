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
    <div className={`relative pl-12 ${last ? '' : 'step-line'}`}>
      <span className="absolute left-0 top-0 grid place-items-center w-10 h-10 rounded-xl glass border border-white/15 text-sky-300">
        {icon}
      </span>
      <div className="mb-1.5 flex items-center gap-2">
        <span className="font-mono text-[11px] text-white/40">Шаг {n}</span>
      </div>
      <h4 className="font-heading font-semibold text-[15px] mb-2">{title}</h4>
      <div className="font-mono text-[12.5px] text-white/60 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

function CodeLine({ children }: { children: React.ReactNode }) {
  return (
    <code className="block px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-[11.5px] text-sky-200/90 overflow-x-auto whitespace-pre">
      {children}
    </code>
  );
}

function CopyChip({ text }: { text: string }) {
  const { copied, copy } = useCopy();
  return (
    <button
      onClick={() => copy(text)}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md glass-soft hover:bg-white/10 transition text-[11px] font-mono text-sky-300 ${copied ? 'copied-flash' : ''}`}
    >
      {copied ? <Check className="w-3 h-3" /> : <Clipboard className="w-3 h-3" />}
      {copied ? 'Скопировано' : 'Копировать'}
    </button>
  );
}

export function Install() {
  const [tab, setTab] = useState<Tab>('ublock');
  const ref = useReveal<HTMLDivElement>();
  const ruUrl = FILTERS[0].url;

  return (
    <section id="install" className="relative px-5 py-20">
      <div ref={ref} className="reveal mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 badge mb-4">
            <Settings className="w-3.5 h-3.5 text-sky-300" />
            <span className="text-white/70">Инструкция</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight">
            Как <span className="text-gradient">установить</span>
          </h2>
          <p className="mt-3 mx-auto max-w-xl font-mono text-[13.5px] text-white/55 leading-relaxed">
            Добавление кастомного списка фильтров занимает меньше минуты. Выберите ваше расширение.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="glass rounded-2xl p-1.5 inline-flex gap-1">
            <button
              onClick={() => setTab('ublock')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-medium text-[14px] transition ${
                tab === 'ublock' ? 'bg-white/10 text-white border border-white/15' : 'text-white/55 hover:text-white/80'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-sky-300" />
              uBlock Origin
            </button>
            <button
              onClick={() => setTab('adguard')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-medium text-[14px] transition ${
                tab === 'adguard' ? 'bg-white/10 text-white border border-white/15' : 'text-white/55 hover:text-white/80'
              }`}
            >
              <Layers className="w-4 h-4 text-violet-300" />
              AdGuard
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="glass rounded-3xl p-6 sm:p-9">
          {tab === 'ublock' ? (
            <div className="space-y-7">
              <Step n={1} icon={<Settings className="w-4.5 h-4.5" />} title="Откройте настройки uBlock Origin">
                Нажмите на иконку расширения в панели браузера, затем на значок шестерёнки{' '}
                <span className="text-white/80">«Открыть панель управления»</span>.
              </Step>
              <Step n={2} icon={<ListPlus className="w-4.5 h-4.5" />} title="Перейдите во вкладку «Списки фильтров»">
                В панели управления выберите вкладку{' '}
                <span className="text-white/80">«Списки фильтров»</span> в верхней панели.
              </Step>
              <Step n={3} icon={<ChevronRight className="w-4.5 h-4.5" />} title="Найдите раздел «Импорт…»">
                Прокрутите вниз до раздела{' '}
                <span className="text-white/80">«Списки, которые можно добавить по ссылке»</span>{' '}
                и раскройте его.
              </Step>
              <Step n={4} icon={<Clipboard className="w-4.5 h-4.5" />} title="Вставьте ссылку на фильтр">
                <p>Вставьте URL списка в текстовое поле. Начните с основного списка RuNoAds:</p>
                <div className="flex items-center gap-2 mt-2">
                  <CodeLine>{ruUrl}</CodeLine>
                  <CopyChip text={ruUrl} />
                </div>
              </Step>
              <Step n={5} icon={<Check className="w-4.5 h-4.5" />} title="Примените изменения" last>
                Нажмите <span className="text-white/80">«Применить изменения»</span> в верхнем левом углу.
                Иконка обновления станет красной — кликните по ней, чтобы обновить фильтры.
                Повторите шаги 3–5 для EvilTube или EvilTubeNoShorts.
              </Step>
            </div>
          ) : (
            <div className="space-y-7">
              <Step n={1} icon={<Settings className="w-4.5 h-4.5" />} title="Откройте настройки AdGuard">
                Нажмите на иконку AdGuard в панели браузера, затем{' '}
                <span className="text-white/80">«Настройки»</span> →{' '}
                <span className="text-white/80">«Блокировщик рекламы»</span>.
              </Step>
              <Step n={2} icon={<ListPlus className="w-4.5 h-4.5" />} title="Перейдите в «Фильтры»">
                В меню слева выберите{' '}
                <span className="text-white/80">«Фильтры»</span> → вкладка{' '}
                <span className="text-white/80">«Пользовательские»</span>.
              </Step>
              <Step n={3} icon={<ChevronRight className="w-4.5 h-4.5" />} title="Добавьте новый фильтр">
                Нажмите кнопку{' '}
                <span className="text-white/80">«+ Добавить фильтр»</span> (или импорт по ссылке).
              </Step>
              <Step n={4} icon={<Clipboard className="w-4.5 h-4.5" />} title="Вставьте ссылку и название">
                <p>Вставьте URL и задайте имя. Начните с RuNoAds:</p>
                <div className="flex items-center gap-2 mt-2">
                  <CodeLine>{ruUrl}</CodeLine>
                  <CopyChip text={ruUrl} />
                </div>
              </Step>
              <Step n={5} icon={<Check className="w-4.5 h-4.5" />} title="Подпишитесь и обновите" last>
                Нажмите <span className="text-white/80">«Подписаться»</span>, затем обновите фильтры.
                Повторите для EvilTube или EvilTubeNoShorts при необходимости.
              </Step>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
