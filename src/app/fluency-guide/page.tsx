import React from "react";
import Link from "next/link";
import { ArticleHeaderNav, QuoteCallout, MethodCard } from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { LongreadSelectorDropdown } from "@/features/longread-selector";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "chapter-1", title: "01. Парадокс уровня B2: Почему вы всё понимаете, но зависаете на созвонах" },
  { id: "chapter-2", title: "02. Серкумлокуция: Механика мгновенного описания любого забытого слова" },
  { id: "chapter-3", title: "03. Ликвидация «Эээ»: Сила немой паузы, замок губ и 25 дискурсивных мостов" },
  { id: "chapter-4", title: "04. Деловая речь: Фреймворк PREP для спонтанных ответов и дипломатичный C1 Hedging" },
  { id: "chapter-5", title: "05. Ежедневный протокол тренировок: Что конкретно делать каждый день" },
  { id: "chapter-6", title: "06. Промпты для AI-спарринга и 30-дневный пошаговый план" },
] as const;

export default function FluencyGuidePage({ isUnified = false }: { readonly isUnified?: boolean } = {}) {
  return (
    <>
      {!isUnified && (
        <ArticleHeaderNav
          title="ARCHITECTING FLUENCY"
          badge="B2 → C1"
          activeRoute="/fluency-guide"
        />
      )}

      <article className="longread-container prose-editorial" id="top">
        {!isUnified && (
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Библиотека лонгридов</span>
              <span>•</span>
              <span className="text-cyan-400 font-semibold">Всего 9 материалов</span>
            </div>
            <LongreadSelectorDropdown currentSlug="fluency-guide" />
          </div>
        )}

        <div className="article-meta-top">
          <span>Прикладная когнитивная лингвистика</span>
          <span>•</span>
          <span>Время чтения: 18 минут</span>
        </div>

        <h1 className="article-title">Как Перестать Мычать и Начать Говорить на С1: Архитектура Мышления, Серкумлокуция и Английский без Пауз</h1>

        <p className="article-lead">
          Подробный разбор того, почему специалисты с крепким B2 застревают на созвонах, как устроен речевой затык в мозге, как мгновенно описывать забытые слова и выстроить ежедневную тренировку без репетиторов и зубрежки.
        </p>

        <div className="article-info-strip">
          <div className="info-item"><span>Целевой уровень:</span> <strong>B2 → C1</strong></div>
          <div className="info-item"><span>Ключевой фокус:</span> <strong>Спонтанная речь без «эээ», серкумлокуция, митинги</strong></div>
          <div className="info-item"><span>Система практики:</span> <strong>25 минут в день (Deliberate Practice)</strong></div>
        </div>

        {/* Table of Contents */}
        <TableOfContents items={TOC_ITEMS} />

        {/* CHAPTER 1 */}
        <section id="chapter-1">
          <h2 className="chapter-heading">01. Парадокс уровня B2: Почему вы всё понимаете, но зависаете на созвонах</h2>

          <p>
            Каждый специалист, дошедший до уровня Upper-Intermediate (B2), сталкивается с мучительным когнитивным диссонансом. Вы свободно читаете техническую документацию, архитектурные гайды и отраслевые статьи на английском. Вы без труда понимаете 90% речи спикеров на конференциях и коллег на демо. Вы можете написать развернутый pull request review или аргументированное письмо клиенту.
          </p>

          <p>
            Но как только на онлайн-встрече вам задают внезапный вопрос: <em>«What&apos;s your take on our database partitioning strategy?»</em> — тело сковывает легкий стресс, в голове возникает гулкая пустота, рот открывается, и вместо четкого ответа в эфир летит долгое, беспомощное: <strong>«Э-э-э-э-э... well... how to say...»</strong>.
          </p>

          <p>
            Первая инстинктивная реакция человека — обвинить свой словарный запас. Начинается судорожное скачивание приложений с флеш-карточками, заучивание списков из 500 продвинутых слов вроде <em>«ubiquitous»</em> или <em>«paradigm shift»</em>. Но на следующем митинге проблема повторяется с точностью до миллисекунды.
          </p>

          <QuoteCallout cite="Майкл Льюис, автор The Lexical Approach">
            «Беглость речи (Fluency) не имеет практически никакой корреляции с объемом пассивного словарного запаса после преодоления отметки в 3 500 слов. Беглость — это исключительно скорость извлечения и способность удерживать непрерывность речевого потока при временном отказе памяти».
          </QuoteCallout>

          <h3 className="sub-heading">Три нейрокогнитивных сбоя, рождающих затык</h3>

          <p>
            Чтобы устранить проблему, нужно понимать её физиологию. В мозгу взрослого человека на уровне B2 параллельно происходят три процесса:
          </p>

          <MethodCard>
            <div className="method-card-header">
              <span className="tier-badge tier-1">Сбой №1</span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>Mental Lexicon Competition</span>
            </div>
            <h4 style={{ color: "#FFF", marginBottom: "8px" }}>1. Семантическая конкуренция узлов памяти</h4>
            <p className="mb-0">
              В ментальном лексиконе слова хранятся не по алфавиту, а в виде нейронной паутины ассоциаций (Semantic Spreading Activation). Когда вы хотите сказать концепт «узкое место в системе», активируются десятки смежных понятий: <em>slow, delay, traffic, queue, limit</em>. Мозг начинает параллельный перебор. На родном языке эта стадия занимает 50–100 миллисекунд. На английском B2 — 600–1200 миллисекунд. Эта секундная задержка переживается как паника.
            </p>
          </MethodCard>

          <MethodCard>
            <div className="method-card-header">
              <span className="tier-badge tier-2">Сбой №2</span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>The Monitor Hypothesis</span>
            </div>
            <h4 style={{ color: "#FFF", marginBottom: "8px" }}>2. Гиперактивный внутренний цензор (Krashen&apos;s Monitor)</h4>
            <p className="mb-0">
              Годы традиционного школьного изучения грамматики вырастили в вас строгого внутреннего контролера. Перед тем как выпустить фразу в речевой аппарат, цензор успевает задать три вопроса: <em>«Какое время использовать? Нужен артикль &quot;the&quot; или &quot;a&quot;? Подходит ли предлог?»</em>. В результате фраза блокируется еще до того, как язык успел совершить первое движение.
            </p>
          </MethodCard>

          <MethodCard>
            <div className="method-card-header">
              <span className="tier-badge tier-3">Сбой №3</span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>Word-by-Word Generation</span>
            </div>
            <h4 style={{ color: "#FFF", marginBottom: "8px" }}>3. Сборка из отдельных кирпичей вместо готовых модулей</h4>
            <p className="mb-0">
              Человек на B2 строит английское предложение как конструктор Lego из единичных кубиков: [Существительное] + [Глагол] + [Предлог] + [Прилагательное]. Носитель языка говорит <strong>готовыми чанками (Lexical Chunks)</strong> по 3–5 слов, извлекая их как единый архивный файл. Когда оперативная память разгружена, речь льется непрерывно.
            </p>
          </MethodCard>
        </section>

        {/* CHAPTER 2 */}
        <section id="chapter-2">
          <h2 className="chapter-heading">02. Серкумлокуция: Механика мгновенного описания любого забытого слова</h2>

          <p>
            Носители английского языка забывают слова точно так же часто, как и вы. Разница между человеком с уровнем B2 и человеком с уровнем C1 заключается не в том, что второй помнит все слова в мире, а в том, <strong>что происходит в момент, когда слово вылетело из головы</strong>.
          </p>

          <p>
            Человек на B2 впадает в ступор, отводит взгляд в потолок и начинает мучительно выжимать из памяти единственный забытый термин. Человек на C1 включает <strong>серкумлокуцию (Circumlocution)</strong> — мгновенное и элегантное описание понятия другими словами.
          </p>

          <h3 className="sub-heading">Четырёхмерная матрица дескрипции (4D Description Framework)</h3>

          <p>
            Если нужное слово не всплыло в сознании за 0.5 секунды, не пытайтесь его вспомнить. Немедленно опишите его через 4 опорные точки:
          </p>

          <ol className="editorial-steps">
            <li>
              <h4>Категория (Superordinate Category)</h4>
              <p>К какому классу понятий, инструментов или процессов это относится? Используйте шаблоны: <span className="formula-tag">It&apos;s a type of mechanism that...</span> или <span className="formula-tag">It&apos;s essentially a policy designed to...</span></p>
            </li>
            <li>
              <h4>Функция и Действие (Purpose &amp; Function)</h4>
              <p>Что эта сущность делает? Какую проблему она решает в реальном мире? Шаблоны: <span className="formula-tag">What it actually allows you to do is...</span> или <span className="formula-tag">Its primary job is to ensure that...</span></p>
            </li>
            <li>
              <h4>Контекст и Триггер (Context of Occurrence)</h4>
              <p>В какой момент времени и в какой ситуации вы с этим сталкиваетесь? Шаблоны: <span className="formula-tag">You typically encounter this when...</span> или <span className="formula-tag">We run into this whenever a node fails...</span></p>
            </li>
            <li>
              <h4>Отношение и Аналогия (Analogy or Contrast)</h4>
              <p>На что это похоже в других сферах или чему прямо противоположно? Шаблоны: <span className="formula-tag">It works pretty much like a buffer between X and Y...</span> или <span className="formula-tag">It&apos;s the exact opposite of synchronous execution...</span></p>
            </li>
          </ol>

          <h3 className="sub-heading">Примеры из реальной работы: Как звучит серкумлокуция</h3>

          <div className="space-y-4 my-8">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="md:w-1/4">
                <strong className="text-white text-base block">Bottleneck</strong>
                <span className="text-xs text-slate-400">Узкое место системы</span>
              </div>
              <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 md:w-5/12">
                <span className="text-[11px] font-bold text-rose-400 block mb-0.5">Ступор на B2:</span>
                <div className="text-xs sm:text-sm text-rose-200">ээээ... our system is slow here... wait, how to say узкое место...</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/30 md:w-5/12">
                <span className="text-[11px] font-bold text-emerald-400 block mb-0.5">Элегантный C1 обход:</span>
                <div className="text-xs sm:text-sm text-emerald-200 font-semibold">&ldquo;The exact term escapes me, but it&apos;s basically the single stage in our pipeline where throughput drops and delays everything downstream.&rdquo;</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="md:w-1/4">
                <strong className="text-white text-base block">Trade-off</strong>
                <span className="text-xs text-slate-400">Компромисс</span>
              </div>
              <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 md:w-5/12">
                <span className="text-[11px] font-bold text-rose-400 block mb-0.5">Ступор на B2:</span>
                <div className="text-xs sm:text-sm text-rose-200">ммм... we win in speed but lose in money... it&apos;s a... uhhh...</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/30 md:w-5/12">
                <span className="text-[11px] font-bold text-emerald-400 block mb-0.5">Элегантный C1 обход:</span>
                <div className="text-xs sm:text-sm text-emerald-200 font-semibold">&ldquo;It&apos;s a classic situation where gaining fast delivery forces us to sacrifice some test coverage.&rdquo;</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="md:w-1/4">
                <strong className="text-white text-base block">Redundancy</strong>
                <span className="text-xs text-slate-400">Отказоустойчивое дублирование</span>
              </div>
              <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 md:w-5/12">
                <span className="text-[11px] font-bold text-rose-400 block mb-0.5">Ступор на B2:</span>
                <div className="text-xs sm:text-sm text-rose-200">эээ... we have two servers if one dies... how is it... double?</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/30 md:w-5/12">
                <span className="text-[11px] font-bold text-emerald-400 block mb-0.5">Элегантный C1 обход:</span>
                <div className="text-xs sm:text-sm text-emerald-200 font-semibold">&ldquo;An architectural fail-safe where a parallel replica mirrors state to guarantee zero downtime if the master node crashes.&rdquo;</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="md:w-1/4">
                <strong className="text-white text-base block">Deprecate</strong>
                <span className="text-xs text-slate-400">Выводить из эксплуатации</span>
              </div>
              <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 md:w-5/12">
                <span className="text-[11px] font-bold text-rose-400 block mb-0.5">Ступор на B2:</span>
                <div className="text-xs sm:text-sm text-rose-200">we will delete this API later... not delete, but... ммм...</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/30 md:w-5/12">
                <span className="text-[11px] font-bold text-emerald-400 block mb-0.5">Элегантный C1 обход:</span>
                <div className="text-xs sm:text-sm text-emerald-200 font-semibold">&ldquo;Phasing out this legacy endpoint gradually and advising all clients to migrate to v2.&rdquo;</div>
              </div>
            </div>
          </div>

          <h3 className="sub-heading">Фразы-спасатели: Как легально признаться, что слово вылетело</h3>

          <p>
            Вместо того чтобы краснеть и мычать, носители используют готовые речевые мосты с легкой профессиональной самоиронией. Это звучит абсолютно органично:
          </p>

          <ul className="pl-6 mb-6 space-y-2">
            <li><em>«The exact technical term escapes me for a second, but what it essentially does is...»</em></li>
            <li><em>«I&apos;m blanking on the specific word, but the core mechanism is...»</em></li>
            <li><em>«It&apos;s right on the tip of my tongue — basically, the tool we use to manage...»</em></li>
            <li><em>«How can I best put this... imagine a buffer that prevents...»</em></li>
          </ul>

          <p>
            В 9 случаях из 10 коллега на том конце провода с улыбкой скажет: <em>«Oh, you mean connection pooling?»</em> — на что вы невозмутимо отвечаете: <em>«Spot on, connection pooling! So, with that in place...»</em>. Диалог не прервался, контакт не потерян, вы выглядите как уверенный эксперт.
          </p>
        </section>

        {/* CHAPTER 3 */}
        <section id="chapter-3">
          <h2 className="chapter-heading">03. Ликвидация «Эээ»: Сила немой паузы, замок губ и 25 дискурсивных мостов</h2>

          <p>
            Паразитные звуки «эээ», «ммм», «ну-у-у» появляются по одной фундаментальной причине: <strong>иррациональный страх тишины</strong>.
          </p>

          <p>
            В славянской культуре общения пауза длиннее полутора секунд часто воспринимается как заминка или потеря инициативы. Поэтому речевой аппарат автоматически включает связки («эээ»), посылая в пространство звуковой маркер: <em>«Не перебивайте меня, я ещё на связи, я просто генерирую мысль»</em>.
          </p>

          <p>
            В англоязычной деловой культуре (особенно в США, Великобритании и международных технологических компаниях) восприятие прямо противоположное:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 shadow-card space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block">
                ❌ Постоянное «Ээээ / Мммм»
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-0">
                Воспринимается слушателями как <strong>неуверенность, слабая подготовка, хаос в мыслях</strong> или некомпетентность в обсуждаемом вопросе.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 shadow-card space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                ✓ Чистая немая пауза (1.5–2 сек)
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-0">
                Воспринимается как <strong>взвешенность, авторитет, аналитическая глубина</strong> и признак зрелого лидера (Executive Presence).
              </p>
            </div>
          </div>

          <h3 className="sub-heading">Физиологический прием: «Дыхательный замок» (The Breath Lock)</h3>

          <p>
            Невозможно сказать «эээ» с закрытым ртом. Это чистая анатомия. Вот простой телесный алгоритм, который нужно довести до автоматизма:
          </p>

          <ol className="editorial-steps">
            <li>
              <h4>Сомкните губы (Lip Seal)</h4>
              <p>В момент, когда следующее слово или мысль не готова, физически плотно сомкните губы. Рот закрыт — звука нет.</p>
            </li>
            <li>
              <h4>Сделайте короткий вдох носом</h4>
              <p>Вместо голосового выдоха через связки сделайте плавный, спокойный вдох через нос. Это насыщает мозг кислородом и снимает микростресс.</p>
            </li>
            <li>
              <h4>Держите зрительный контакт</h4>
              <p>Не отводите взгляд вверх или в пол. Спокойно смотрите в камеру или на лицо собеседника. Для него эта пауза выглядит как работа глубокой инженерной мысли над решением.</p>
            </li>
            <li>
              <h4>Начните говорить на выдохе с первого готового чанка</h4>
              <p>Открывайте рот только тогда, когда готов целый блок из 3–4 слов, а не одиночное слово.</p>
            </li>
          </ol>

          <h3 className="sub-heading">25 Дискурсивных Мостов (Time-Buyers): Законная покупка времени</h3>

          <p>
            Если чистая немая пауза поначалу кажется вам некомфортной, замените паразитный звук на <strong>дискурсивные заполнители (Discourse Fillers)</strong>. Они звучат абсолютно нативно и дают вашему мозгу от 2 до 4 секунд на формулирование аргумента:
          </p>

          <MethodCard>
            <h4 style={{ color: "#FFF", marginBottom: "12px" }}>Группа 1: Старт ответа на неожиданный вопрос (выигрыш 2.5–3.5 секунды)</h4>
            <ul className="pl-5 space-y-2 text-slate-300">
              <li><em>«That&apos;s a very fair question to bring up at this stage...»</em></li>
              <li><em>«If we look at this from a slightly broader perspective...»</em></li>
              <li><em>«To put it in perspective, there are two distinct angles here...»</em></li>
              <li><em>«That&apos;s an interesting problem, and honestly, the answer depends on our priority...»</em></li>
              <li><em>«Off the top of my head, looking at the preliminary numbers...»</em></li>
            </ul>
          </MethodCard>

          <MethodCard>
            <h4 style={{ color: "#FFF", marginBottom: "12px" }}>Группа 2: Зависание посреди фразы (выигрыш 1.5–2 секунды)</h4>
            <ul className="pl-5 space-y-2 text-slate-300">
              <li><em>«...or, to frame it a bit more accurately...»</em></li>
              <li><em>«...what this essentially boils down to is...»</em></li>
              <li><em>«...the underlying premise behind this choice is that...»</em></li>
              <li><em>«...let&apos;s just assume for a moment that...»</em></li>
              <li><em>«...how can I best structure this thought...»</em></li>
            </ul>
          </MethodCard>

          <MethodCard>
            <h4 style={{ color: "#FFF", marginBottom: "12px" }}>Группа 3: Необходимость скорректировать формулировку</h4>
            <ul className="pl-5 space-y-2 text-slate-300">
              <li><em>«Scratch that — what I really wanted to highlight was...»</em></li>
              <li><em>«Let me backtrack for just a second to clarify that last point...»</em></li>
              <li><em>«Or rather, looking at the root cause...»</em></li>
            </ul>
          </MethodCard>
        </section>

        {/* CHAPTER 4 */}
        <section id="chapter-4">
          <h2 className="chapter-heading">04. Деловая речь: Фреймворк PREP для спонтанных ответов и дипломатичный C1 Hedging</h2>

          <p>
            Худшая стратегия на созвоне — начать говорить без структуры в надежде, что мысль оформится сама по ходу движения. Именно так рождаются бесконечные путаные предложения с пятью придаточными, в которых говорящий забывает, с чего он начал.
          </p>

          <h3 className="sub-heading">Фреймворк PREP: Железный каркас любого ответа</h3>

          <p>
            PREP — это универсальная матрица спонтанного ответа, используемая в международном консалтинге и технологических гигантах. Она укладывается в 4 шага:
          </p>

          <div className="space-y-3.5 my-8">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-emerald-500/30 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-3">
              <div className="md:w-1/4">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono font-bold text-xs border border-emerald-500/30">
                  P • Point
                </span>
                <div className="text-xs text-slate-400 mt-2">Главный тезис в лоб (1 фраза)</div>
              </div>
              <div className="md:w-3/4 p-3 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-xs sm:text-sm text-emerald-200">
                &ldquo;I strongly believe we should defer the database migration until Q3.&rdquo;
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-indigo-500/30 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-3">
              <div className="md:w-1/4">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 font-mono font-bold text-xs border border-indigo-500/30">
                  R • Reason
                </span>
                <div className="text-xs text-slate-400 mt-2">Логическое обоснование: почему</div>
              </div>
              <div className="md:w-3/4 p-3 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-xs sm:text-sm text-indigo-200">
                &ldquo;Because attempting it during the peak sales quarter introduces an unacceptable risk of revenue-impacting downtime.&rdquo;
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-amber-500/30 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-3">
              <div className="md:w-1/4">
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-mono font-bold text-xs border border-amber-500/30">
                  E • Example
                </span>
                <div className="text-xs text-slate-400 mt-2">Конкретная метрика или факт</div>
              </div>
              <div className="md:w-3/4 p-3 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-xs sm:text-sm text-amber-200">
                &ldquo;For instance, during last year&apos;s Black Friday, our existing replica setup already ran at 85% capacity without any schema alterations.&rdquo;
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-cyan-500/30 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-3">
              <div className="md:w-1/4">
                <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs border border-cyan-500/30">
                  P • Point
                </span>
                <div className="text-xs text-slate-400 mt-2">Вывод и следующий шаг</div>
              </div>
              <div className="md:w-3/4 p-3 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-xs sm:text-sm text-cyan-200">
                &ldquo;So focusing on load testing right now is much safer than touching the database core.&rdquo;
              </div>
            </div>
          </div>

          <h3 className="sub-heading">Дипломатичный язык (C1 Hedging): Как критиковать и возражать без грубости</h3>

          <p>
            На уровне B2 нехватка гибких речевых конструкций приводит к тому, что человек звучит либо чересчур грубо и агрессивно (<em>«No, this architecture is wrong!»</em>), либо слишком робко и неуверенно (<em>«Maybe I don&apos;t know, but perhaps...»</em>).
          </p>

          <p>
            Уровень C1 решает это с помощью <strong>Hedging (смягчение категоричности)</strong>:
          </p>

          <div className="dialogue-box">
            <div className="dialogue-line">
              <span className="speaker-name b2">Резко (B2):</span>
              <span>&ldquo;Your estimate is completely unrealistic. We cannot do this by Friday.&rdquo;</span>
            </div>
            <div className="dialogue-line">
              <span className="speaker-name c1">Дипломатично (C1):</span>
              <span>&ldquo;Given our current commitments and testing requirements, delivering this full scope by Friday might be a bit of an uphill battle. Could we explore shipping an MVP first?&rdquo;</span>
            </div>
          </div>

          <div className="dialogue-box">
            <div className="dialogue-line">
              <span className="speaker-name b2">Резко (B2):</span>
              <span>&ldquo;I don&apos;t understand what you mean. You explained it poorly.&rdquo;</span>
            </div>
            <div className="dialogue-line">
              <span className="speaker-name c1">Дипломатично (C1):</span>
              <span>&ldquo;Just to make sure we&apos;re 100% aligned on the acceptance criteria, could you unpack that last workflow a bit more?&rdquo;</span>
            </div>
          </div>

          <div className="dialogue-box">
            <div className="dialogue-line">
              <span className="speaker-name b2">Резко (B2):</span>
              <span>&ldquo;That feature will never scale. It is a bad idea.&rdquo;</span>
            </div>
            <div className="dialogue-line">
              <span className="speaker-name c1">Дипломатично (C1):</span>
              <span>&ldquo;I see the rationale behind that feature, but my main reservation is how well it will hold up once concurrent users exceed 50,000.&rdquo;</span>
            </div>
          </div>

          <h3 className="sub-heading">Управление митингом: Как вклиниться и как не дать себя перебить</h3>

          <ul className="pl-6 mb-6 space-y-3">
            <li><strong>Как взять слово (Taking the Floor):</strong><br />
              <em>«If I could just chime in here for a second on the backend impact...»</em><br />
              <em>«To bounce off what Sarah just pointed out, there&apos;s another angle we need to consider...»</em>
            </li>
            <li><strong>Как защитить свою речь, если вас перебивают (Holding the Floor):</strong><br />
              <em>«Hold that thought for just two seconds — my final point on this is...»</em><br />
              <em>«Let me just finish this thought, and then I’d love to get your perspective on it.»</em>
            </li>
            <li><strong>Как мягко остановить оффтоп (Facilitation):</strong><br />
              <em>«We&apos;re getting a bit deep into the weeds here. Let&apos;s table this and circle back in a dedicated sync.»</em>
            </li>
          </ul>
        </section>

        {/* CHAPTER 5 */}
        <section id="chapter-5">
          <h2 className="chapter-heading">05. Ежедневный протокол тренировок: Что конкретно делать каждый день</h2>

          <p>
            Большинство людей годами остаются на B2, потому что используют <strong>пассивные методы</strong>: смотрят сериалы на Netflix с субтитрами, слушают подкасты во время пробежки или читают статьи на Medium.
          </p>

          <p>
            Эти действия развивают <em>пассивное распознавание (Wernicke&apos;s area)</em>, но ни на один миллиметр не тренируют <em>моторные центры генерации речи (Broca&apos;s area)</em>. Разговаривать — это мышечный навык, точно такой же, как игра на гитаре или плавание. Нельзя научиться плавать, наблюдая за чемпионатом мира с трибуны.
          </p>

          <h3 className="sub-heading">Архитектура 25-минутного ежедневного спринта (Deliberate Practice)</h3>

          <MethodCard>
            <div className="method-card-header">
              <span className="tier-badge tier-1">Блок 1 • 5 минут</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Утренний поток сознания (Self-Talk)</span>
            </div>
            <p>
              <strong>Когда:</strong> Во время утреннего кофе, душа или сборов на работу.<br />
              <strong>Что делать:</strong> Говорите вслух (или уверенным полушёпотом) исключительно на английском. Проговаривайте план на рабочий день: <em>«Alright, what&apos;s on my radar today? First, I need to review that auth pull request. If the pipeline passes, we&apos;ll merge by noon...»</em>.<br />
              <strong>Железное правило:</strong> Ни одного слова на русском. Если забыли слово — не лезьте в телефон, немедленно опишите его через 4D-модель.<br />
              <strong>Результат:</strong> Запуск англоязычного смыслового кластера (L1 suppression / L2 priming) до начала рабочего дня.
            </p>
          </MethodCard>

          <MethodCard>
            <div className="method-card-header">
              <span className="tier-badge tier-2">Блок 2 • 10 минут</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Моторный тренажёр: Чередование по дням</span>
            </div>
            <p>
              <strong>Понедельник / Среда / Пятница — Методика 4/3/2 (Maurice &amp; Paul Nation):</strong><br />
              Возьмите любую рабочую тему (например: «Архитектура нашего сервиса авторизации» или «Сложный баг прошлой недели»). Включите диктофон на телефоне:
            </p>
            <ul className="pl-5 space-y-1.5 my-2 text-sm text-slate-300">
              <li><strong>Раунд 1 (4 минуты):</strong> Рассказывайте тему непрерывно 4 минуты. Не останавливайтесь. Если застряли — описывайте обходными путями.</li>
              <li><strong>Отдых (1 минута):</strong> Просто переведите дыхание.</li>
              <li><strong>Раунд 2 (3 минуты):</strong> Расскажите <em>ту же самую историю</em> за 3 минуты. Придется отбросить лишнее и ускорить извлечение слов.</li>
              <li><strong>Раунд 3 (2 минуты):</strong> Максимальная компрессия! Ту же самую мысль за 2 минуты без единого «эээ».</li>
            </ul>
            <p className="mt-3">
              <strong>Вторник / Четверг / Суббота — Delayed Shadowing (Теневой повтор с задержкой):</strong><br />
              Включите экспертный нативный подкаст (<em>Lenny&apos;s Podcast, Lex Fridman, The Pragmatic Engineer, Huberman Lab</em>). Повторяйте речь спикера вслух с задержкой ровно в <strong>1.5–2 секунды</strong>. Копируйте интонацию, понижение голоса в конце утверждений и естественные паузы. 8–10 минут.
            </p>
          </MethodCard>

          <MethodCard>
            <div className="method-card-header">
              <span className="tier-badge tier-3">Блок 3 • 10 минут</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Интерактивный спарринг с Голосовым AI</span>
            </div>
            <p className="mb-0">
              Включите голосовой режим (Voice Mode) в ChatGPT, Claude или Gemini на смартфоне. Используйте проверенные готовые промпты, приведенные в следующей главе. AI будет давать вам случайные понятия для серкумлокуции, задавать жесткие стресс-вопросы и фиксировать каждый паразит «эээ».
            </p>
          </MethodCard>
        </section>

        {/* CHAPTER 6 */}
        <section id="chapter-6">
          <h2 className="chapter-heading">06. Промпты для AI-спарринга и 30-дневный пошаговый план</h2>

          <p>
            Скопируйте эти промпты и отправьте их в чат перед запуском голосового режима. Они превратят языковую модель в требовательного персонального коуча по беглости:
          </p>

          <h3 className="sub-heading">Промпт 1: Тренажер Серкумлокуции и Забытых Слов</h3>
          <pre className="code-block">{`Act as an aggressive fluency coach for an advanced non-native English speaker. 
Your goal is to test my circumlocution skills. 
Pick a specific technical, business, or everyday concept (e.g. "load balancer", "amortization", "reciprocity", "bottleneck", "circuit breaker"), but DO NOT tell me what it is. 
Instead, tell me: "Explain the concept of [CONCEPT] without using the word itself or any of its root words. You have 30 seconds."
After I finish speaking, evaluate my response:
1. Did I explain the concept clearly and accurately?
2. Did you detect any vocalized pauses like "um", "uh", or "eee"?
3. Provide 2 native C1 idioms or collocations that could express it more succinctly.
Let's begin with the first word now!`}</pre>

          <h3 className="sub-heading">Промпт 2: Стресс-интервью и ответы по схеме PREP</h3>
          <pre className="code-block">{`Act as a tough Engineering Director at a top-tier tech company. 
Ask me an unexpected, challenging question about technical trade-offs, architecture choices, deadlines, or conflict resolution. 
Wait for my spoken answer. 
Evaluate my answer strictly against the PREP framework:
- Point: Did I state a clear thesis in my opening sentence?
- Reason: Was my rationale sound and convincing?
- Example: Did I provide a concrete illustration or metric?
- Point: Did I stick the landing cleanly?
Flag every hesitation sound ("uh", "um", "er") and suggest 2 higher-level C1 phrases I should have used. 
Ask me the first tough question now.`}</pre>

          <h3 className="sub-heading">Пошаговый 30-дневный маршрут перехода с B2 на C1</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-card flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white mb-0">Неделя 1</h4>
                  <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">Дни 1–7</span>
                </div>
                <div className="text-xs font-semibold text-slate-200 mb-2">Ликвидация «эээ» через замок губ</div>
                <p className="text-xs text-slate-400 leading-relaxed mb-0">
                  Каждый раз, когда зависаете на слове — плотно сжимайте губы и делайте вдох носом. Ни одного вокализованного звука. Измерьте количество «эээ» на первом и седьмом дне.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-card flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white mb-0">Неделя 2</h4>
                  <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">Дни 8–14</span>
                </div>
                <div className="text-xs font-semibold text-slate-200 mb-2">Внедрение 4D-серкумлокуции</div>
                <p className="text-xs text-slate-400 leading-relaxed mb-0">
                  Ежедневно объясняйте по 5 случайных рабочих понятий голосовому AI по промпту №1. Запретите себе заглядывать в словарь во время речи.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-card flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white mb-0">Неделя 3</h4>
                  <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">Дни 15–21</span>
                </div>
                <div className="text-xs font-semibold text-slate-200 mb-2">Автоматизация ответов по схеме PREP</div>
                <p className="text-xs text-slate-400 leading-relaxed mb-0">
                  Все реплики на реальных рабочих созвонах и в тренировках стройте строго: Тезис → Обоснование → Пример → Вывод.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-card flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white mb-0">Неделя 4</h4>
                  <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">Дни 22–30</span>
                </div>
                <div className="text-xs font-semibold text-slate-200 mb-2">Разгон темпа речи и плотности (4/3/2)</div>
                <p className="text-xs text-slate-400 leading-relaxed mb-0">
                  Три раза в неделю проводите сессии сжатия 4/3/2 на рабочие темы. Замерьте темп речи: цель — стабильные 140–160 слов в минуту без заиканий.
                </p>
              </div>
            </div>
          </div>

          <QuoteCallout>
            «Свободный английский на уровне C1 — это не знание Шекспира наизусть. Это спокойная уверенность в том, что какая бы ситуация ни произошла на митинге, ваш речевой аппарат найдет выход за доли секунды».
          </QuoteCallout>
        </section>

        {/* Footer */}
        <footer className="article-footer">
          <p>Материалы систематизированы для проекта <strong>English Learn</strong>. Ознакомьтесь с <Link href="/chunks">Мастерством чанков</Link>, <Link href="/tense-chunks">Временными чанками</Link> и базой в <Link href="/learn-chunks">Карточках чанков</Link>.</p>
          <p style={{ marginTop: "8px" }}>2026 • Методология осознанной беглости B2 → C1</p>
        </footer>
      </article>
    </>
  );
}
