import React from "react";
import Link from "next/link";
import { ArticleHeaderNav, ChunkItemRow, QuoteCallout } from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { LongreadSelectorDropdown } from "@/features/longread-selector";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "chunk-1", title: "01. Что такое лексический чанк и главный парадокс беглости" },
  { id: "chunk-2", title: "02. Нейробиология: Закон рабочей памяти Миллера и Кована" },
  { id: "chunk-3", title: "03. 4 вида чанков: От коллокаций до полуфиксированных рамок" },
  { id: "chunk-4", title: "04. Книжный английский против Живой речи на созвонах" },
  { id: "chunk-5", title: "05. Пошаговая методика: Как находить, учить и внедрять чанки" },
  { id: "chunk-6", title: "06. База 30 самых нужных рабочих чанков (без духоты)" },
  { id: "chunk-7", title: "07. Плотные структурные чанки (Dense Chunks): 3 уровня очередности" },
  { id: "chunk-8", title: "08. Временные чанки Plug & Play: 24 шаблона от 1 до последнего" },
] as const;

export default function ChunksPage() {
  return (
    <>
      <ArticleHeaderNav
        title="LEXICAL CHUNKS"
        badge="The Fluency Key"
        badgeColor="secondary"
      />

      <article className="longread-container prose-editorial" id="top">
        {/* Top Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 rounded-2xl bg-white/[0.03] border border-white/10">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Библиотека лонгридов</span>
            <span>•</span>
            <span className="text-cyan-400 font-semibold">Всего 9 материалов</span>
          </div>
          <LongreadSelectorDropdown currentSlug="chunks" />
        </div>

        <div className="article-meta-top">
          <span>Прикладная когнитивная лингвистика</span>
          <span>•</span>
          <span>Время чтения: 14 минут</span>
        </div>

        <h1 className="article-title">
          Лексические Чанки: Как Мозг Носителей Говорит Блоками без Зависаний
        </h1>

        <p className="article-lead">
          Почему попытка строить фразы по одному слову гарантирует затыки и звуки «эээ», как работают речевые чанки в рабочей памяти и по какой методике их тренировать, чтобы звучать естественно и легко.
        </p>

        <div className="article-info-strip">
          <div className="info-item"><span>Научная база:</span> <strong>The Lexical Approach (Michael Lewis, Pawley & Syder)</strong></div>
          <div className="info-item"><span>Ключевой эффект:</span> <strong>Разгрузка оперативной памяти мозга в 4 раза</strong></div>
          <div className="info-item"><span>Фокус:</span> <strong>Живая речь на созвонах vs тяжелый книжный язык</strong></div>
        </div>

        <TableOfContents items={TOC_ITEMS} />

        {/* SECTION 1 */}
        <section id="chunk-1">
          <h2 className="chapter-heading">01. Что такое лексический чанк и главный парадокс беглости</h2>

          <p>
            <strong>Лексический чанк (Lexical Chunk / Formulaic Sequence)</strong> — это устойчивая связка из 2–6 слов, которая хранится в долговременной памяти мозга и извлекается речевым аппаратом <strong>как единое неделимое целое</strong>, словно это одно длинное слово, без обдумывания грамматических правил на ходу.
          </p>

          <p>
            В 1983 году лингвисты Эндрю Поли и Джордж Сайдер (Andrew Pawley & Frances Syder) опубликовали фундаментальную работу: <em>«Две загадки для лингвистической теории: Нативный выбор и Нативная беглость»</em>. Они поставили простой эксперимент:
          </p>

          <QuoteCallout cite="Pawley & Syder, 1983">
            «Если бы носитель языка собирал предложения по законам традиционной грамматики (согласовывая времена, подбирая окончания, артикли и предлоги для каждого слова), то из-за ограниченной пропускной способности коры головного мозга человек не мог бы говорить со скоростью выше 40–50 слов в минуту. Но в реальности носители говорят со скоростью 140–180 слов в минуту без малейшего умственного напряжения. Как это возможно?»
          </QuoteCallout>

          <p>
            Ответ перевернул всю современную методику преподавания языков: носители <strong>не собирают предложения с нуля</strong>. От 70% до 80% живой английской речи состоит из сотен тысяч заранее готовых полуфабрикатов — <em>чанков</em>.
          </p>

          <p>
            Спустя 10 лет Майкл Льюис (Michael Lewis) сформулировал манифест Лексического Подхода (The Lexical Approach):
            <br /><br />
            <strong>«Language consists of grammaticalised lexis, not lexicalised grammar.»</strong><br />
            <em>(«Язык состоит из готовых лексических блоков, в которые уже вшита грамматика, а не из абстрактных правил, в которые подставляются слова»).</em>
          </p>
        </section>

        {/* SECTION 2 */}
        <section id="chunk-2">
          <h2 className="chapter-heading">02. Нейробиология: Закон рабочей памяти Миллера и Кована</h2>

          <p>
            Чтобы понять, почему без чанков невозможно избавиться от мычания («эээ»), нужно посмотреть на физиологические ограничения оперативной памяти (Working Memory).
          </p>

          <p>
            Знаменитое исследование Джорджа Миллера («Магическое число 7±2»), дополненное современными исследованиями Нельсона Кована, доказало: в условиях активной речевой нагрузки оперативная память человека способна одновременно удерживать всего <strong>3–4 независимых смысловых слота (Chunks of Information)</strong>.
          </p>

          <h3 className="sub-heading">Сравнение двух подходов в реальном времени</h3>

          <div className="method-card">
            <div className="method-card-header">
              <span className="method-badge" style={{ background: "rgba(244, 63, 94, 0.15)", color: "var(--accent-rose)", borderColor: "rgba(244, 63, 94, 0.3)" }}>
                Сценарий А: Пословная сборка (Уровень B2)
              </span>
            </div>
            <h4>Вы хотите сказать: «Если мы поторопимся, пострадают тесты»</h4>
            <p>
              Мозг начинает выстраивать цепочку из одиночных слов:<br />
              <span className="formula-tag">1. If</span> + <span className="formula-tag">2. we</span> + <span className="formula-tag">3. rush</span> + <span className="formula-tag">4. tests</span> ... <strong style={{ color: "var(--accent-rose)" }}>СТОП!</strong>
            </p>
            <p>
              Все 4 слота рабочей памяти мгновенно заполнены. Внутренний редактор начинает лихорадочно проверять: <em>«Какое время после if? Нужен ли предлог? Будет ли will в главной части?»</em>. Происходит переполнение стека (Stack Overflow). Речь блокируется. Рот открыт, и в эфир летит долгое: <strong>«Эээээ...»</strong>.
            </p>
          </div>

          <div className="method-card">
            <div className="method-card-header">
              <span className="method-badge" style={{ background: "rgba(16, 185, 129, 0.15)", color: "var(--accent-emerald)", borderColor: "rgba(16, 185, 129, 0.3)" }}>
                Сценарий Б: Чанковое мышление (Уровень C1 / Native)
              </span>
            </div>
            <h4>Та же самая мысль, собранная из двух готовых блоков</h4>
            <p>
              Носитель достает из памяти два готовых речевых токена:<br />
              <strong style={{ color: "var(--accent-emerald)" }}>[If we rush this out]</strong> (Слот 1) + <strong style={{ color: "var(--accent-emerald)" }}>[tests will take a hit]</strong> (Слот 2).
            </p>
            <p>
              В оперативной памяти занято <strong>всего 2 слота из 4 доступных</strong>. Никаких правил согласования времен мозг не вычисляет — конструкция <em>«take a hit»</em> извлекается из базальных ганглиев целиком. Результат: ноль секунд колебаний, плавная и чистая речь за 1.5 секунды.
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="chunk-3">
          <h2 className="chapter-heading">03. 4 вида чанков: От коллокаций до полуфиксированных рамок</h2>

          <p>
            Чанки в английском языке делятся на четыре конкретных функциональных типа:
          </p>

          <ol className="editorial-steps">
            <li>
              <h4>Коллокации (Collocations)</h4>
              <p>
                Пары слов, которые статистически слиплись в языке. Ошибка B2 — пытаться переводить их буквально со своего языка.
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", fontSize: "0.95rem", lineHeight: "1.75" }}>
                <li>❌ <em>do a mistake</em> ➔ ✅ <strong>make a mistake</strong></li>
                <li>❌ <em>fast result</em> ➔ ✅ <strong>quick win</strong></li>
                <li>❌ <em>heavy problem</em> ➔ ✅ <strong>tough challenge</strong></li>
                <li>❌ <em>take an agreement</em> ➔ ✅ <strong>reach an agreement</strong></li>
              </ul>
            </li>

            <li>
              <h4>Полностью фиксированные формулы (Fixed Expressions)</h4>
              <p>
                Застывшие фразы, в которых нельзя изменить ни порядок слов, ни артикль. Они используются как социальные или логические маяки:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", fontSize: "0.95rem", lineHeight: "1.75" }}>
                <li><strong>By the way</strong> — кстати</li>
                <li><strong>At the end of the day</strong> — в конечном счете / в сухом остатке</li>
                <li><strong>As a matter of fact</strong> — собственно говоря / более того</li>
                <li><strong>Out of the blue</strong> — ни с того ни с сего</li>
              </ul>
            </li>

            <li>
              <h4>Полуфиксированные рамки со слотами (Sentence Frames / Sentence Stems)</h4>
              <p>
                <strong>Это самый ценный тип чанков для беглости речи.</strong> Это каркас фразы со свободной переменной <span className="formula-tag">[X]</span> на конце. Вы стреляете готовым каркасом (это дает вам 1.5 секунды времени), а мозг успевает сгенерировать только само окончание:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", fontSize: "0.95rem", lineHeight: "1.75" }}>
                <li><strong>The thing is, [X]...</strong> <em>(«The thing is, we don&apos;t have enough data yet.»)</em></li>
                <li><strong>It&apos;s only a matter of time before [X]...</strong> <em>(«...before this server crashes.»)</em></li>
                <li><strong>What I&apos;m trying to get at is [X]...</strong> <em>(«...we need a simpler solution.»)</em></li>
                <li><strong>There&apos;s no point in [verb-ing]...</strong> <em>(«...refactoring this whole module now.»)</em></li>
                <li><strong>From what I can tell, [X]...</strong> <em>(«...the API is behaving normally.»)</em></li>
              </ul>
            </li>

            <li>
              <h4>Дискурсивные организаторы (Discourse Markers)</h4>
              <p>
                Чанки, которые показывают собеседнику направление вашей мысли и покупают время:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", fontSize: "0.95rem", lineHeight: "1.75" }}>
                <li><strong>Having said that,...</strong> — тем не менее / при этом...</li>
                <li><strong>On top of that,...</strong> — ко всему прочему / кроме того...</li>
                <li><strong>Speaking of which,...</strong> — кстати об этом...</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* SECTION 4 */}
        <section id="chunk-4">
          <h2 className="chapter-heading">04. Книжный английский против Живой речи на созвонах</h2>

          <p>
            Самая частая ловушка людей с уровнем B2: попытка говорить на созвоне так, как пишут академические эссе или официальные юридические соглашения.
          </p>

          <p>
            Фразы вроде <em>«It&apos;s a classic situation where gaining fast delivery forces us to sacrifice some test coverage»</em> выглядят солидно на бумаге. Но в реальном живом разговоре на созвоне <strong>носители так НЕ говорят</strong>. В разговорном английском действует закон: <strong>короткие клаузы, простые активные глаголы и минимум отглагольных существительных</strong>.
          </p>

          <div className="space-y-4 my-8">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1 md:w-1/4">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Ситуация</span>
                <strong className="text-white text-sm sm:text-base">Компромисс по качеству</strong>
              </div>
              <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 md:w-5/12">
                <span className="text-[11px] font-bold text-rose-400 block mb-0.5">Книжный стиль (Затыки):</span>
                <div className="font-mono text-xs sm:text-sm text-rose-200">Gaining speed forces us to sacrifice test coverage</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/30 md:w-5/12">
                <span className="text-[11px] font-bold text-emerald-400 block mb-0.5">Живой чанк на созвоне:</span>
                <div className="font-mono text-xs sm:text-sm text-emerald-200 font-semibold">&ldquo;If we rush it out, testing will take a hit.&rdquo;</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1 md:w-1/4">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Ситуация</span>
                <strong className="text-white text-sm sm:text-base">Оптимизация</strong>
              </div>
              <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 md:w-5/12">
                <span className="text-[11px] font-bold text-rose-400 block mb-0.5">Книжный стиль (Затыки):</span>
                <div className="font-mono text-xs sm:text-sm text-rose-200">We should perform an optimization procedure on queries</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/30 md:w-5/12">
                <span className="text-[11px] font-bold text-emerald-400 block mb-0.5">Живой чанк на созвоне:</span>
                <div className="font-mono text-xs sm:text-sm text-emerald-200 font-semibold">&ldquo;We need to clean up these queries.&rdquo;</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1 md:w-1/4">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Ситуация</span>
                <strong className="text-white text-sm sm:text-base">Застрял на задаче</strong>
              </div>
              <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 md:w-5/12">
                <span className="text-[11px] font-bold text-rose-400 block mb-0.5">Книжный стиль (Затыки):</span>
                <div className="font-mono text-xs sm:text-sm text-rose-200">I am experiencing insurmountable difficulties with auth</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/30 md:w-5/12">
                <span className="text-[11px] font-bold text-emerald-400 block mb-0.5">Живой чанк на созвоне:</span>
                <div className="font-mono text-xs sm:text-sm text-emerald-200 font-semibold">&ldquo;I&apos;m totally stuck on auth.&rdquo;</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1 md:w-1/4">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Ситуация</span>
                <strong className="text-white text-sm sm:text-base">Отложить вопрос</strong>
              </div>
              <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 md:w-5/12">
                <span className="text-[11px] font-bold text-rose-400 block mb-0.5">Книжный стиль (Затыки):</span>
                <div className="font-mono text-xs sm:text-sm text-rose-200">Let us postpone this discussion until our next sync</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/30 md:w-5/12">
                <span className="text-[11px] font-bold text-emerald-400 block mb-0.5">Живой чанк на созвоне:</span>
                <div className="font-mono text-xs sm:text-sm text-emerald-200 font-semibold">&ldquo;Let&apos;s table this for now.&rdquo;</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1 md:w-1/4">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Ситуация</span>
                <strong className="text-white text-sm sm:text-base">Приблизительная оценка</strong>
              </div>
              <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 md:w-5/12">
                <span className="text-[11px] font-bold text-rose-400 block mb-0.5">Книжный стиль (Затыки):</span>
                <div className="font-mono text-xs sm:text-sm text-rose-200">In accordance with my preliminary mental calculations</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/30 md:w-5/12">
                <span className="text-[11px] font-bold text-emerald-400 block mb-0.5">Живой чанк на созвоне:</span>
                <div className="font-mono text-xs sm:text-sm text-emerald-200 font-semibold">&ldquo;Off the top of my head, around three days.&rdquo;</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1 md:w-1/4">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Ситуация</span>
                <strong className="text-white text-sm sm:text-base">Рискованное решение</strong>
              </div>
              <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 md:w-5/12">
                <span className="text-[11px] font-bold text-rose-400 block mb-0.5">Книжный стиль (Затыки):</span>
                <div className="font-mono text-xs sm:text-sm text-rose-200">This choice carries considerable risks for our architecture</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/30 md:w-5/12">
                <span className="text-[11px] font-bold text-emerald-400 block mb-0.5">Живой чанк на созвоне:</span>
                <div className="font-mono text-xs sm:text-sm text-emerald-200 font-semibold">&ldquo;It&apos;s a bit of a slippery slope.&rdquo;</div>
              </div>
            </div>
          </div>

          <QuoteCallout>
            «Хороший разговорный C1 звучит просто и легко, а не тяжело и вычурно. Сила беглости — в скорости и точности коротких глагольных связок».
          </QuoteCallout>
        </section>

        {/* SECTION 5 */}
        <section id="chunk-5">
          <h2 className="chapter-heading">05. Пошаговая методика: Как находить, учить и внедрять чанки</h2>

          <p>
            Просто прочитать список чанков — бесполезно. Они останутся в пассивной памяти. Чтобы чанк перешел в активный речевой аппарат, мозг должен сформировать для него <strong>моторную программу артикуляции</strong>.
          </p>

          <ol className="editorial-steps">
            <li>
              <h4>Охота за чанками (Chunk Spotting)</h4>
              <p>
                Когда вы слушаете подкаст или читаете англоязычный Slack / GitHub, включите режим охотника: <strong>выписывайте не слова, а контекстные связки</strong>.
              </p>
              <p>
                Услышали фразу: <em>«That feature didn&apos;t move the needle for our users»</em>. Не выписывайте перевод слова <em>needle</em> («игла»). Выпишите готовый чанк: <span className="formula-tag">move the needle</span> = принести реальный ощутимый результат.
              </p>
            </li>

            <li>
              <h4>Упражнение «Slot-and-Filler» (Дрилл замены переменной)</h4>
              <p>
                Возьмите полуфиксированную рамку и произнесите вслух 5 разных вариантов окончания, меняя только переменную в слоте:
              </p>
              <div style={{ background: "rgba(0,0,0,0.35)", padding: "18px 22px", borderRadius: "14px", fontFamily: "var(--font-mono)", fontSize: "0.95rem", lineHeight: "1.75", margin: "16px 0", border: "1px solid rgba(255,255,255,0.06)" }}>
                Каркас: <strong>«The bottleneck here is [X]»</strong><br />
                • The bottleneck here is database write latency.<br />
                • The bottleneck here is QA bandwidth.<br />
                • The bottleneck here is third-party API limits.<br />
                • The bottleneck here is client sign-off.<br />
                • The bottleneck here is our deployment pipeline.
              </div>
              <p>
                После пятого повторения первая часть фразы автоматизируется навсегда. На реальном созвоне рот начнет фразу сам, пока голова думает о сути проблемы.
              </p>
            </li>

            <li>
              <h4>Правило 24 часов (Immediate Output)</h4>
              <p>
                Любой выписанный чанк умирает в памяти через 48 часов, если вы не воспроизвели его голосом. В течение первых суток после знакомства с чанком вы обязаны один раз сказать его вслух:
              </p>
              <ul style={{ paddingLeft: "20px", fontSize: "0.95rem", lineHeight: "1.75" }}>
                <li>На утреннем стендапе перед командой;</li>
                <li>В 5-минутном утреннем монологе наедине с собой;</li>
                <li>Или проговорить его в голосовом диалоге с ChatGPT / Claude.</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* SECTION 6 */}
        <section id="chunk-6">
          <h2 className="chapter-heading">06. База 30 самых нужных рабочих чанков (без лишней духоты)</h2>

          <p>
            Скомпонованный арсенал живых блоков, которые используются каждый день на созвонах в международных компаниях:
          </p>

          <div className="method-card">
            <h4>1. Описание проблем и блокеров</h4>
            <ul style={{ paddingLeft: "20px", lineHeight: "1.85" }}>
              <li><strong>get bogged down in [X]</strong> — увязнуть в мелочах или рутине <em>(«Let&apos;s not get bogged down in edge cases right now.»)</em></li>
              <li><strong>run into a roadblock</strong> — наткнуться на непреодолимое препятствие <em>(«We ran into a roadblock with the third-party auth provider.»)</em></li>
              <li><strong>take a hit</strong> — пострадать / просесть <em>(«Performance took a hit after the latest release.»)</em></li>
              <li><strong>be short on bandwidth</strong> — не иметь свободных людей / ресурса <em>(«The backend team is short on bandwidth this sprint.»)</em></li>
              <li><strong>a slippery slope</strong> — опасный компромисс / скользкая дорожка <em>(«Skipping code reviews is a slippery slope.»)</em></li>
              <li><strong>iron out the kinks</strong> — устранить мелкие шероховатости <em>(«We just need another day to iron out a few kinks in staging.»)</em></li>
            </ul>
          </div>

          <div className="method-card">
            <h4>2. Выражение сомнения и мягкое несогласие</h4>
            <ul style={{ paddingLeft: "20px", lineHeight: "1.85" }}>
              <li><strong>I&apos;m not so sure about that</strong> — я не уверен в этом (гораздо мягче и нативнее, чем «I disagree»)</li>
              <li><strong>It&apos;s a tough call</strong> — сложный выбор / неоднозначное решение <em>(«Whether to migrate now or later is a tough call.»)</em></li>
              <li><strong>Don&apos;t get me wrong,...</strong> — не поймите меня неправильно... <em>(«Don&apos;t get me wrong, the UI looks great, but...»)</em></li>
              <li><strong>The way I see it,...</strong> — то, как я на это смотрю...</li>
              <li><strong>There&apos;s no point in [verb-ing]</strong> — нет никакого смысла делать это <em>(«There&apos;s no point in optimizing before we have metrics.»)</em></li>
              <li><strong>I have mixed feelings about [X]</strong> — у меня двоякое впечатление насчет этого</li>
            </ul>
          </div>

          <div className="method-card">
            <h4>3. Управление решениями и действиями</h4>
            <ul style={{ paddingLeft: "20px", lineHeight: "1.85" }}>
              <li><strong>table this for now</strong> — отложить обсуждение вопроса на потом <em>(«Let&apos;s table this and focus on the release blocker.»)</em></li>
              <li><strong>circle back to [X]</strong> — вернуться к теме позже <em>(«Let&apos;s circle back to performance at the end of the meeting.»)</em></li>
              <li><strong>cut corners</strong> — делать тяп-ляп / срезать углы <em>(«We definitely can&apos;t cut corners on data security.»)</em></li>
              <li><strong>keep someone in the loop</strong> — держать в курсе событий <em>(«Keep me in the loop if the deployment fails.»)</em></li>
              <li><strong>move the needle</strong> — дать заметный бизнес-результат <em>(«Will this rewrite actually move the needle for our users?»)</em></li>
              <li><strong>call the shots</strong> — принимать финальное решение <em>(«The tech lead calls the shots on architecture.»)</em></li>
            </ul>
          </div>

          <div className="method-card">
            <h4>4. Разговорные связки и заполнение пауз</h4>
            <ul style={{ paddingLeft: "20px", lineHeight: "1.85" }}>
              <li><strong>At the end of the day,...</strong> — в сухом остатке / в конечном счете...</li>
              <li><strong>When it comes to [X],...</strong> — когда речь заходит о... <em>(«When it comes to speed, Go is hard to beat.»)</em></li>
              <li><strong>Off the top of my head,...</strong> — навскидку / первое, что приходит в голову...</li>
              <li><strong>Long story short,...</strong> — короче говоря...</li>
              <li><strong>For what it&apos;s worth,...</strong> — к слову / если это имеет значение...</li>
              <li><strong>Speaking of which,...</strong> — кстати об этом / к слову о том, что ты сказал...</li>
            </ul>
          </div>

          <QuoteCallout>
            «Забудьте про сборку предложений из отдельных кирпичей. Говорите блоками. Когда вы доверяете языку и выстреливаете готовые чанки, речевой затык исчезает сам собой».
          </QuoteCallout>
        </section>

        {/* SECTION 7 */}
        <section id="chunk-7">
          <h2 className="chapter-heading">07. Плотные структурные чанки (Dense Chunks): 3 уровня очередности</h2>

          <p>
            Конструкции вроде <em>«I haven&apos;t gotten around to»</em> или <em>«I was supposed to»</em> в лингвистике называют <strong>Dense Structural Chunks</strong> (исследования Alison Wray и Douglas Biber). В них на отрезке из 3–4 слов спрессовано несколько грамматических правил (предлоги, требующие герундия, пассивная модальность, сжатая результативность).
          </p>

          <p>
            Осваивать их нужно строго по <strong>трем уровням очередности (Learning Priority)</strong>:
          </p>

          {/* TIER 1 */}
          <div className="method-card">
            <div className="method-card-header">
              <span className="tier-badge tier-1">Уровень 1 • Неделя 1</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Фундамент координации и стендапов</span>
            </div>

            <ChunkItemRow
              num="1"
              title="I was supposed to [verb], but..."
              trans="«Я должен был по плану / договоренности, но...»"
              exEn="I was supposed to finish the API endpoint today, but staging was completely down."
              exRu="Я должен был закончить эндпоинт сегодня, но стейджинг лежал."
            />
            <ChunkItemRow
              num="2"
              title="We ended up [verb-ing]..."
              trans="«В итоге вышло так, что мы... / В конечном счете мы...»"
              exEn="We evaluated three cloud providers, but ended up sticking with AWS."
              exRu="Мы оценили трех провайдеров, но в итоге решили остаться на AWS."
            />
            <ChunkItemRow
              num="3"
              title="I managed to [verb]..."
              trans="«Мне удалось / получилось сделать (преодолев трудности)»"
              exEn="After three hours of debugging, I managed to reproduce the deadlock locally."
              exRu="После трех часов дебага мне удалось воспроизвести взаимную блокировку локально."
            />
            <ChunkItemRow
              num="4"
              title="I didn't mean to [verb]..."
              trans="«Я не хотел / сделал это ненарочно (быстрое снятие вины)»"
              exEn="Sorry about the broken build, I didn't mean to push to master directly."
              exRu="Прости за сломанную сборку, я случайно запушил напрямую в мастер."
            />
            <ChunkItemRow
              num="5"
              title="It took me a while to [verb]..."
              trans="«У меня ушло довольно много времени на то, чтобы...»"
              exEn="It took me a while to understand how this legacy billing module processes refunds."
              exRu="У меня ушла куча времени на то, чтобы понять, как этот старый биллинг обрабатывает возвраты."
            />
            <ChunkItemRow
              num="6"
              title="We're about to [verb]..."
              trans="«Мы вот-вот сделаем / находимся в шаге от...»"
              exEn="Hold on a second, we're about to trigger the production deployment right now."
              exRu="Секунду, мы прямо сейчас вот-вот запустим деплой на прод."
            />
          </div>

          {/* TIER 2 */}
          <div className="method-card">
            <div className="method-card-header">
              <span className="tier-badge tier-2">Уровень 2 • Неделя 2</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Процессы, привычки и объяснения задержек</span>
            </div>

            <ChunkItemRow
              num="7"
              title="I haven't gotten around to [verb-ing] yet"
              trans="«У меня пока руки не дошли сделать это» (строго с -ing!)"
              exEn="I haven't gotten around to writing the documentation yet, will tackle it this afternoon."
              exRu="У меня пока руки не дошли написать документацию, займусь этим после обеда."
            />
            <ChunkItemRow
              num="8"
              title="I happened to [verb]..."
              trans="«Я случайно / так совпало, что я...»"
              exEn="I happened to check the error logs and noticed a huge spike in database connection timeouts."
              exRu="Я случайно глянул в логи ошибок и заметил огромный всплеск таймаутов базы."
            />
            <ChunkItemRow
              num="9"
              title="I'm not used to [verb-ing]..."
              trans="«Я пока не привык к тому, чтобы...» (строго с -ing!)"
              exEn="I'm not used to working without local database seeds, so setup is taking longer."
              exRu="Я пока не привык работать без локальных сидов базы, поэтому настройка идет дольше."
            />
            <ChunkItemRow
              num="10"
              title="I feel like [verb-ing / clause]..."
              trans="«Мне кажется / не покидает ощущение, что...»"
              exEn="I feel like we're overcomplicating this state management architecture."
              exRu="Мне кажется, мы излишне усложняем архитектуру управления состоянием."
            />
            <ChunkItemRow
              num="11"
              title="What it boils down to is [noun / verb-ing]..."
              trans="«В сухом остатке всё сводится к...»"
              exEn="What it boils down to is cutting query latency by 40% before Black Friday."
              exRu="К чему всё сводится — нужно срезать задержку запросов на 40% до Черной Пятницы."
            />
            <ChunkItemRow
              num="12"
              title="I'm looking forward to [verb-ing]..."
              trans="«Жду с нетерпением...» (строго с -ing!)"
              exEn="I'm really looking forward to collaborating with the mobile infrastructure team."
              exRu="С нетерпением жду совместной работы с командой мобильной инфраструктуры."
            />
          </div>

          {/* TIER 3 */}
          <div className="method-card">
            <div className="method-card-header">
              <span className="tier-badge tier-3">Уровень 3 • Неделя 3–4</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Дипломатия, сожаления и гипотезы C1</span>
            </div>

            <ChunkItemRow
              num="13"
              title="I was wondering if you could [verb]..."
              trans="«Я тут подумал, не мог бы ты...» (высшая степень нативной вежливости)"
              exEn="I was wondering if you could jump on a quick five-minute call to align on acceptance criteria?"
              exRu="Я тут подумал, не мог бы ты созвониться со мной на 5 минут, чтобы сверить критерии приемки?"
            />
            <ChunkItemRow
              num="14"
              title="I can't help but feel that [X]..."
              trans="«Не могу отделаться от ощущения, что...»"
              exEn="I can't help but feel that releasing on a Friday afternoon is asking for trouble."
              exRu="Не могу отделаться от ощущения, что релизить в пятницу днем — это напрашиваться на неприятности."
            />
            <ChunkItemRow
              num="15"
              title="We should have [past participle]..."
              trans="«Нам следовало (сделать иначе в прошлом)...»"
              exEn="In hindsight, we should have pinned our docker dependencies before migrating."
              exRu="Оглядываясь назад, нам следовало зафиксировать версии докера до начала миграции."
            />
            <ChunkItemRow
              num="16"
              title="Could we have avoided this if we had [past participle]...?"
              trans="«Могли ли мы избежать этого, если бы...?»"
              exEn="Could we have avoided this data corruption if we had run schema migrations in dry-run mode?"
              exRu="Могли ли мы избежать повреждения данных, если бы прогнали миграции в тестовом режиме?"
            />
            <ChunkItemRow
              num="17"
              title="If it hadn't been for [X], we would have [past participle]..."
              trans="«Если бы не X, мы бы уже...»"
              exEn="If it hadn't been for that third-party outage, we would have shipped the release on time."
              exRu="Если бы не падение внешнего сервиса, мы бы выпустили релиз строго вовремя."
            />
            <ChunkItemRow
              num="18"
              title="It's not worth [verb-ing]..."
              trans="«Это не стоит того, чтобы тратить силы на...»"
              exEn="It's not worth refactoring this legacy controller when we're deprecating the service next sprint."
              exRu="Не стоит рефакторить этот старый контроллер, раз уж мы выводим сервис из эксплуатации в следующем спринте."
            />
          </div>
        </section>

        {/* SECTION 8 */}
        <section id="chunk-8">
          <h2 className="chapter-heading">08. Временные чанки Plug & Play: 24 шаблона от 1 до последнего</h2>

          <p>
            В реальной устной речи никто не высчитывает формулы времен (исследования Joan Bybee, Exemplar Theory). Носители используют <strong>жесткие временные каркасы со свободным слотом</strong>. Грамматика времени уже согласована внутри блока — вы подставляете только само действие.
          </p>

          <p>
            Полный каталог с примерами доступен на странице <Link href="/tense-chunks" className="text-emerald-400 font-bold hover:underline">Временные чанки Plug & Play →</Link>.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <Link href="/tense-chunks" className="btn-primary-glow">
              ⚡ Открыть все 24 временных чанка
            </Link>
            <Link href="/learn-chunks" className="btn-secondary-glass">
              Практиковать в интерактивном тренажере →
            </Link>
          </div>
        </section>

        <footer className="article-footer">
          <p>
            Материал входит в образовательный комплекс <strong>English Learn</strong>. Полный обзор преодоления речевого барьера и серкумлокуции читайте в{" "}
            <Link href="/fluency-guide" className="text-cyan-400 font-bold hover:underline">руководстве по беглой речи</Link>, а тренировка карточек доступна в{" "}
            <Link href="/learn-chunks" className="text-emerald-400 font-bold hover:underline">базе чанков</Link>.
          </p>
          <p style={{ marginTop: "12px", color: "var(--text-dim)" }}>2026 • Практическая методология беглости B2 → C1</p>
        </footer>
      </article>
    </>
  );
}
