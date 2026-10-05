import React from "react";
import { ArticleHeaderNav, QuoteCallout, MethodCard } from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { LongreadSelectorDropdown } from "@/features/longread-selector";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "nw-sec-1", title: "01. Символьная матрица vs Синаптические веса связей (PDP)" },
  { id: "nw-sec-2", title: "02. Семантические пространства коры (Huth et al., Nature 2016)" },
  { id: "nw-sec-3", title: "03. Хронометрия порождения речи: Модель WEAVER++ Виллема Левелта" },
  { id: "nw-sec-4", title: "04. Spreading Activation, латеральное торможение и ступор B2" },
  { id: "nw-sec-5", title: "05. Инкрементальный синтаксис: Почему мозг не ждет конца фразы" },
  { id: "nw-sec-6", title: "06. Грамматика конструкций Голдберг и протокол тренировки весов" },
] as const;

export default function NeuralWeightsPage({ isUnified = false }: { readonly isUnified?: boolean } = {}) {
  return (
    <>
      {!isUnified && (
        <ArticleHeaderNav
          title="NEURAL WEIGHTS & SPEECH SYNTHESIS"
          badge="Cognitive Neuroscience"
          activeRoute="/longreads/neural-weights"
        />
      )}

      <article className="longread-container prose-editorial" id="top">
        {!isUnified && (
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Библиотека исследований SLA</span>
              <span>•</span>
              <span className="text-violet-400 font-semibold">Новое фундаментальное исследование</span>
            </div>
            <LongreadSelectorDropdown currentSlug="neural-weights" />
          </div>
        )}

        <div className="article-meta-top">
          <span>Нейробиология памяти & Коннекционизм (PDP)</span>
          <span>•</span>
          <span>Время чтения: 18 минут</span>
        </div>

        <h1 className="article-title">
          Как Слова и Предложения Хранятся в Памяти: Матрица vs Синаптические Веса и Синтез Речи
        </h1>

        <p className="article-lead">
          Хранятся ли слова в голове как ячейки таблицы или это непрерывные веса синапсов? Как мозг за 350 миллисекунд проходит путь от бессловесной мысли к активации лемм и мышечному выбросу звука, и почему носители говорят инкрементально.
        </p>

        <div className="article-info-strip">
          <div className="info-item"><span>Научные основы:</span> <strong>McClelland & Rumelhart (PDP), Alex Huth (Nature), Willem Levelt, Adele Goldberg</strong></div>
          <div className="info-item"><span>Ключевой инсайт:</span> <strong>Слова не «лежат» в памяти — они вспыхивают как аттракторы в синаптической сети</strong></div>
          <div className="info-item"><span>Скорость доступа:</span> <strong>350–400 мс (норма) против 900–1400 мс (пословный перевод)</strong></div>
        </div>

        {/* Table of Contents */}
        <TableOfContents items={TOC_ITEMS} />

        {/* SECTION 1 */}
        <section id="nw-sec-1">
          <h2 className="chapter-heading">01. Символьная матрица vs Синаптические веса связей (PDP)</h2>

          <p>
            В школьной педагогике и популярной психологии укоренилась наивная иллюзия: будто человеческая память — это гигантская словарная матрица или электронная картотека, где у каждого слова есть своя фиксированная ячейка (слово, транскрипция, перевод).
          </p>

          <p>
            Однако исследования в области коннекционизма и параллельной распределенной обработки (Parallel Distributed Processing — PDP, <em>McClelland & Rumelhart</em>) доказали: <strong>в биологическом мозге нет дискретных ячеек, файлов или символьных таблиц</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30">
              <div className="text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                💻 Компьютерная модель: Символьная матрица (RAM / DB)
              </div>
              <ul className="text-xs space-y-2 text-slate-300">
                <li>• Данные хранятся по фиксированному физическому адресу памяти: <code className="text-rose-300">0x04F2: &quot;decision&quot;</code></li>
                <li>• Чтобы связать слова, создается таблица смежности или указатель.</li>
                <li>• Если повредить ячейку, слово стирается целиком.</li>
                <li>• Время доступа $O(1)$ по индексу, но нулевая ассоциативная гибкость.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/30">
              <div className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">
                🧠 Нейробиологическая модель: Синаптические веса (PDP)
              </div>
              <ul className="text-xs space-y-2 text-slate-300">
                <li>• Единица хранения — не нейрон, а <strong>синаптический вес (w_ij)</strong> между нейронами.</li>
                <li>• Концепт слова распределен по миллионам синапсов коры (сенсорных, моторных, эмоциональных).</li>
                <li>• В состоянии покоя слова «не существует» — существуют только веса синапсов.</li>
                <li>• При активации возникает резонансный паттерн: <strong>нейронный ансамбль Хебба</strong>.</li>
              </ul>
            </div>
          </div>

          <QuoteCallout cite="Джеймс Макклелланд, Stanford University (PDP Research Group)">
            Память мозга — это не хранилище статических объектов, а ландшафт энергетических аттракторов. Каждое слово — это глубокая воронка в синаптическом поле, в которую скатывается волна активации.
          </QuoteCallout>
        </section>

        {/* SECTION 2 */}
        <section id="nw-sec-2">
          <h2 className="chapter-heading">02. Семантические пространства коры (Huth et al., Nature 2016)</h2>

          <p>
            В 2016 году группа исследователей Калифорнийского университета в Беркли под руководством Джека Галланта и Алекса Хута опубликовала в журнале <em>Nature</em> работу, перевернувшую представления о ментальном лексиконе: <em>«Natural speech reveals the semantic maps that tile human cerebral cortex»</em>.
          </p>

          <p>
            С помощью воксельной фМРТ ученые сканировали активность мозга испытуемых, слушавших часы естественной связной речи. Результаты показали:
          </p>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 my-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-sm">1</span>
              <div>
                <h4 className="text-white font-bold text-sm">Топологическая непрерывность вместо изолированных полок</h4>
                <p className="text-xs text-slate-400">Семантические зоны покрывают кору в виде гладких, непрерывных градиентов. Одно и то же слово активирует сразу несколько анатомических кластеров в зависимости от контекста.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-sm">2</span>
              <div>
                <h4 className="text-white font-bold text-sm">Многомерные векторы признаков (Embedding Space)</h4>
                <p className="text-xs text-slate-400">Мозг кодирует смысл слова не через словарные дефиниции, а через координаты в высокоразмерном семантическом пространстве: визуальные, тактильные, абстрактные и моторные признаки суммируются в единый вектор активации.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm">3</span>
              <div>
                <h4 className="text-white font-bold text-sm">Предложение как динамическая траектория</h4>
                <p className="text-xs text-slate-400">Предложение в мозге — это непрерывная линия скольжения по аттракторному ландшафту. Переход от слова к слову определяется синаптическими весами переходных вероятностей.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="nw-sec-3">
          <h2 className="chapter-heading">03. Хронометрия порождения речи: Модель WEAVER++ Виллема Левелта</h2>

          <p>
            Как мозг превращает абстрактный импульс намерения в артикуляцию звуков? В Институте психолингвистики Макса Планка Виллем Левелт (Willem Levelt) создал архитектуру <strong>WEAVER++</strong>, измерив миллисекундный хронометраж каждого шага:
          </p>

          <div className="space-y-4 my-8">
            <div className="p-4 rounded-xl bg-black/40 border-l-4 border-cyan-400 border border-white/5">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-1">
                <span>ЭТАП 1: КОНЦЕПТУАЛИЗАЦИЯ</span>
                <span>0 – 100 мс</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">Preverbal Message (Довербальное намерение)</div>
              <p className="text-xs text-slate-300">В префронтальной коре возникает намерение передать смысл. Слов и грамматики еще нет — есть только чистый эмоционально-смысловой концепт.</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border-l-4 border-indigo-400 border border-white/5">
              <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-1">
                <span>ЭТАП 2: ВЫБОР ЛЕММЫ (LEMMA SELECTION)</span>
                <span>100 – 200 мс</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">Лексико-синтаксическая спецификация</div>
              <p className="text-xs text-slate-300">В левой средней височной извилине (MTG) извлекается лемма — абстрактная смысловая единица с синтаксическими свойствами (переходный глагол, требует дополнения), но <em>еще без звучания</em>.</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border-l-4 border-violet-400 border border-white/5">
              <div className="flex items-center justify-between text-xs font-mono text-violet-400 mb-1">
                <span>ЭТАП 3: ФОНОЛОГИЧЕСКОЕ КОДИРОВАНИЕ (LEXEME)</span>
                <span>200 – 300 мс</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">Активация звукового скелета (Лексема)</div>
              <p className="text-xs text-slate-300">Задняя верхняя височная извилина активирует фонологический образ слова, делит его на метрические слоги и передает по дугообразному пучку (Arcuate Fasciculus) вперед.</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border-l-4 border-emerald-400 border border-white/5">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-1">
                <span>ЭТАП 4: ФОНЕТИЧЕСКИЙ СИНТЕЗ И ВЫБРОС ЗВУКА</span>
                <span>300 – 400 мс</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">Моторная программа зоны Брока</div>
              <p className="text-xs text-slate-300">Премоторная кора и дополнительная моторная зона (SMA) формируют команды для мышц губ, языка и гортани. Происходит физический выброс звуковой волны в воздух.</p>
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="nw-sec-4">
          <h2 className="chapter-heading">04. Spreading Activation, латеральное торможение и ступор B2</h2>

          <p>
            Почему же на уровне B2 этот процесс дает сбой и растягивается с 350 мс до 1200+ мс?
          </p>

          <p>
            В синаптической сети активация распространяется во все стороны по закону <strong>Spreading Activation (Collins & Loftus)</strong>:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-slate-300 my-4">
            <li>При возникновении концепта <em>«уволить / расстаться с сотрудником»</em> ток распространяется сразу на десяток смежных лемм: <code className="text-cyan-300">fire</code>, <code className="text-cyan-300">dismiss</code>, <code className="text-cyan-300">lay off</code>, <code className="text-cyan-300">let go</code>.</li>
            <li><strong>Латеральное торможение (Lateral Inhibition):</strong> Чтобы человек не заикался, сильнейший узел должен подавить конкурентов через ГАМК-интернейроны по принципу <em>Winner-Take-All</em>.</li>
            <li><strong>Интерференция родного языка (L1):</strong> У студента B2 русская лемма <em>«уволить»</em> имеет колоссальный синаптический вес. Она активируется за 60 мс и побеждает в конкурсе! Мозгу приходится включать экстренное торможение префронтальной коры, подавляя русскую лемму и лихорадочно ища английский перевод.</li>
          </ul>

          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-sm">
            <strong>Анатомия ступора:</strong> В момент задержки в голове идет ожесточенная нейронная война между сильной русской леммой и слабыми английскими синапсами. Итог — долгое мычание «эээ...», пока префронтальная кора вручную не переключит контур.
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="nw-sec-5">
          <h2 className="chapter-heading">05. Инкрементальный синтаксис: Почему мозг не ждет конца фразы</h2>

          <p>
            Школьное правило <em>«Сначала подумай всё предложение до точки, а потом говори»</em> противоречит биофизике речевого аппарата.
          </p>

          <p>
            Психолингвистические эксперименты с отслеживанием движений глаз (Ferreira, 2002) доказали, что человеческая речь строго <strong>инкрементальна (Incremental Processing)</strong>:
          </p>

          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 my-6">
            <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-3">
              ⚡ Опережающее окно планирования (Lookahead Window: 150–250 мс)
            </div>
            <p className="text-sm text-slate-300 mb-4">
              Мозг начинает артикуляцию первого слова или чанка, когда хвост предложения еще вообще не закодирован в фонетику!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-cyan-400 font-bold mb-1">0 – 500 мс (Говорение)</div>
                <div className="text-white font-bold">&quot;To be completely honest,&quot;</div>
                <div className="text-slate-400 mt-1">Артикуляция стартового чанка</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-indigo-400 font-bold mb-1">Фоновый расчет (200 мс)</div>
                <div className="text-white font-bold">&quot;we&apos;re falling behind&quot;</div>
                <div className="text-slate-400 mt-1">Поиск леммы смыслового блока</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-emerald-400 font-bold mb-1">Фоновый расчет (400 мс)</div>
                <div className="text-white font-bold">&quot;schedule.&quot;</div>
                <div className="text-slate-400 mt-1">Подготовка финального термина</div>
              </div>
            </div>
          </div>

          <p>
            Если вы говорите по одному изолированному слову, опережающее окно схлопывается в ноль: на каждом слове речевой поток рвется, потому что следующее слово не успело рассчитаться в височной коре. Чанки дают мозгу <strong>буфер времени в 500–800 мс</strong>, позволяя генерировать мысли абсолютно гладко.
          </p>
        </section>

        {/* SECTION 6 */}
        <section id="nw-sec-6">
          <h2 className="chapter-heading">06. Грамматика конструкций Голдберг и протокол тренировки весов</h2>

          <p>
            Профессор Адель Голдберг (Adele Goldberg, Princeton) в теории <strong>Construction Grammar</strong> доказала: язык состоит не из слов и правил их склейки, а из заученных функциональных конструкций.
          </p>

          <p>
            Чтобы перестроить синаптические веса связей с матричного пословного перевода на автоматическую беглость уровня C1, используйте следующий протокол:
          </p>

          <div className="space-y-4 my-6">
            <MethodCard
              badge="Шаг 1: Transitional Probabilities"
              title="Тренировка переходных вероятностей чанка"
            >
              <p className="text-sm text-slate-300">
                Произносите связки (например, &apos;take into account&apos;, &apos;come to terms with&apos;) на одном дыхании 10–15 раз подряд. Это доводит синаптический вес перехода между словами внутри блока до величины &gt; 0.95, делая паузу между ними физиологически невозможной.
              </p>
            </MethodCard>

            <MethodCard
              badge="Шаг 2: Frame-and-Slot Drilling"
              title="Фиксация рамки с быстрой подстановкой слотов"
            >
              <p className="text-sm text-slate-300">
                Возьмите конструкцию: [It&apos;s not that X, it&apos;s just that Y]. Удерживая жесткий каркас, за 60 секунд подставьте 5 разных аргументов без остановки речевого потока. Это обучает мозг разделять грамматическую раму и лексические переменные.
              </p>
            </MethodCard>

            <MethodCard
              badge="Шаг 3: Discourse Primers"
              title="Инсталляция речевых инициализаторов"
            >
              <p className="text-sm text-slate-300">
                Всегда начинайте спонтанный ответ с автоматизированного предикативного чанка (&apos;The way I see it...&apos;, &apos;As far as I can tell...&apos;). Это выигрывает для префронтальной коры 600 миллисекунд на расчет сути ответа.
              </p>
            </MethodCard>
          </div>
        </section>
      </article>
    </>
  );
}
