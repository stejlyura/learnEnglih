import React from "react";
import Link from "next/link";
import { ArticleHeaderNav, QuoteCallout, MethodCard } from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { LongreadSelectorDropdown } from "@/features/longread-selector";
import { LONGREADS } from "@/entities/longread";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "sec-1", title: "01. Закон рабочей памяти: 4±1 слота по Нельсону Ковану" },
  { id: "sec-2", title: "02. Когнитивный чанкинг: От шахматных гроссмейстеров к речи" },
  { id: "sec-3", title: "03. Базальные ганглии: Start/Stop нейроны и моторное сжатие" },
  { id: "sec-4", title: "04. Теория экземпляров Логана vs Алгоритмический синтаксис" },
  { id: "sec-5", title: "05. Когнитивная архитектура «Frame-and-Slot» в живой речи" },
  { id: "sec-6", title: "06. 4-шаговый алгоритм создания несгораемых речевых чанков" },
] as const;

export default function ChunkArchitecturePage() {
  return (
    <>
      <ArticleHeaderNav
        title="CHUNKING MEMORY ARCHITECTURE"
        badge="Cognitive Science"
        activeRoute="/longreads/chunk-architecture"
      />

      <article className="longread-container prose-editorial" id="top">
        {/* Top Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 rounded-2xl bg-white/[0.03] border border-white/10">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Библиотека исследований SLA</span>
            <span>•</span>
            <span className="text-indigo-400 font-semibold">Статья 03 из {LONGREADS.length}</span>
          </div>
          <LongreadSelectorDropdown currentSlug="chunk-architecture" />
        </div>

        <div className="article-meta-top">
          <span>Когнитивная психология & Нейроархитектура памяти</span>
          <span>•</span>
          <span>Время чтения: 15 минут</span>
        </div>

        <h1 className="article-title">
          Архитектура Памяти на Чанках: Как Мозг Кодирует, Сжимает и Мгновенно Извлекает Речевые Блоки
        </h1>

        <p className="article-lead">
          Лимиты оперативной памяти человека (4±1 слота по Ковану), шахматные гроссмейстеры и лингвистика, стриарные нейроны базальных ганглиев и архитектура Frame-and-Slot: почему оперирование блоками снижает нагрузку на мозг на 75%.
        </p>

        <div className="article-info-strip">
          <div className="info-item"><span>Целевой фокус:</span> <strong>Спонтанная речь без пауз на созвонах</strong></div>
          <div className="info-item"><span>Научный базис:</span> <strong>Nelson Cowan, Chase & Simon, Ann Graybiel (MIT), Alison Wray</strong></div>
          <div className="info-item"><span>Ключевой выигрыш:</span> <strong>Прямое извлечение O(1) вместо расчета грамматики</strong></div>
        </div>

        {/* Table of Contents */}
        <TableOfContents items={TOC_ITEMS} />

        {/* SECTION 1 */}
        <section id="sec-1">
          <h2 className="chapter-heading">01. Закон рабочей памяти: 4±1 слота по Нельсону Ковану</h2>

          <p>
            Долгое время считалось, что объем кратковременной памяти равен «магическому числу 7±2» Джорджа Миллера (1956). Однако современная когнитивная наука под руководством Нельсона Кована (Nelson Cowan, <em>The magical number 4 in short-term memory</em>) доказала: реальный объем активного фокуса внимания взрослого человека составляет всего <strong>4±1 информационные единицы</strong>.
          </p>

          <p>
            Когда на рабочем митинге вы пытаетесь сказать сложную мысль, собирая её по одному слову:
          </p>

          <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2 mb-6">
            <div className="text-rose-400 font-bold text-xs uppercase tracking-wider">
              ❌ Пословная сборка: «We should have taken into account potential delays»
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs pt-2">
              <div className="p-2 rounded bg-black/40 border border-white/5">Слот 1: We</div>
              <div className="p-2 rounded bg-black/40 border border-white/5">Слот 2: should</div>
              <div className="p-2 rounded bg-black/40 border border-white/5">Слот 3: have</div>
              <div className="p-2 rounded bg-black/40 border border-white/5">Слот 4: taken</div>
            </div>
            <div className="text-xs text-rose-300 font-bold pt-2 border-t border-rose-500/20">
              Лимит 4 слотов исчерпан! Слова into, account, potential, delays вызывают переполнение буфера. Возникает сбой синтаксиса и долгое «эээ...».
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-2 mb-6">
            <div className="text-indigo-400 font-bold text-xs uppercase tracking-wider">
              ⚡ Блочное мышление уровня C1: Чанк как неделимый атомарный токен
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs pt-2">
              <div className="p-2.5 rounded bg-black/40 border border-indigo-500/30 text-emerald-300">
                Слот 1: [We should have taken into account] (1 целый чанк)
              </div>
              <div className="p-2.5 rounded bg-black/40 border border-indigo-500/30 text-cyan-300">
                Слот 2: [potential release delays] (1 предметный чанк)
              </div>
            </div>
            <div className="text-xs text-emerald-300 font-medium pt-2 border-t border-indigo-500/20">
              Использовано всего 2 слота из 4. Слоты 3 и 4 свободны для интонации, зрительного контакта и восприятия реакции собеседника.
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section id="sec-2">
          <h2 className="chapter-heading">02. Когнитивный чанкинг: От шахматных гроссмейстеров к речи</h2>

          <p>
            В 1973 году нобелевский лауреат Герберт Саймон и Уильям Чейз (Chase & Simon, <em>Perception in chess</em>) поставили эксперимент, доказавший природу экспертного мастерства:
          </p>

          <p>
            Гроссмейстерам и новичкам на 5 секунд показывали доску с фигурами из реальной партии. Гроссмейстеры воспроизводили более 20 фигур, любители — всего 4–5. Но когда фигуры расставили хаотично без шахматной логики, гроссмейстеры не смогли вспомнить ничего, показав результат новичков.
          </p>

          <QuoteCallout cite="Герберт Саймон, лауреат Нобелевской премии">
            «Эксперт отличается от дилетанта не объемом оперативной памяти, а величиной и связностью информационных чанков (Chunks), из которых он видит поле действий».
          </QuoteCallout>

          <p>
            В языке происходит то же самое. Спикер уровня C1 не думает быстрее. Он видит языковое поле **готовыми речевыми позициями**.
          </p>
        </section>

        {/* SECTION 3 */}
        <section id="sec-3">
          <h2 className="chapter-heading">03. Базальные ганглии: Start/Stop нейроны и моторное сжатие</h2>

          <p>
            Профессор Энн Грейбил (Ann Graybiel, McGovern Institute for Brain Research at MIT) раскрыла анатомию формирования привычек и автоматизмов в стриарном контуре (базальных ганглиях):
          </p>

          <MethodCard borderAccentColor="#818CF8">
            <h4 style={{ color: "#FFF", marginBottom: "8px" }}>Нейронный механизм спайки (Action Chunking):</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-0">
              При первых попытках произнести связку <em>«As far as I know»</em> нейроны коры активируются на каждом слове отдельно. Спустя десятки повторений в стриарном теле формируются граничные нейроны: <strong>START-нейроны</strong> (вспыхивают на слове «As») и <strong>STOP-нейроны</strong> (завершают цикл на «know»). Вся цепочка артикуляции выполняется как единый моторный залп ствола мозга без участия сознательного контроля.
            </p>
          </MethodCard>
        </section>

        {/* SECTION 4 */}
        <section id="sec-4">
          <h2 className="chapter-heading">04. Теория экземпляров Логана vs Алгоритмический синтаксис</h2>

          <p>
            В психолингвистике десятилетиями спорили две школы:
          </p>

          <div className="grid-2col my-6">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-slate-400 font-bold text-xs uppercase tracking-wider">
                Алгоритмический расчет (Chomsky)
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Мозг запускает вычислительные правила грамматики для каждого предложения. Сложность $O(N)$. Слишком медленно для живого темпа речи (&gt;400 мс).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-2">
              <div className="text-indigo-400 font-bold text-xs uppercase tracking-wider">
                Экземплярный поиск (Logan & Bybee)
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Мозг хранит базу сотен тысяч реальных речевых следов (Exemplars). Выборка происходит за один такт ассоциативного поиска со сложностью $O(1)$ за &lt;150 мс.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="sec-5">
          <h2 className="chapter-heading">05. Когнитивная архитектура «Frame-and-Slot» в живой речи</h2>

          <p>
            Профессор Элисон Рэй (Alison Wray, <em>Formulaic Language and the Lexicon</em>, Cambridge University Press) доказала: речь носителей на 70% состоит из **полуфиксированных рамок (Formulaic Frames)**:
          </p>

          <div className="space-y-3.5 my-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="text-xs text-slate-400">Ввод очевидной предпосылки</div>
                <div className="font-mono text-cyan-300 font-bold text-sm sm:text-base">
                  It goes without saying that...
                </div>
                <div className="font-mono text-emerald-300 text-xs sm:text-sm">
                  ...we need to test this thoroughly.
                </div>
              </div>
              <span className="self-start md:self-auto text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                Frame + Slot
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="text-xs text-slate-400">Мягкое указание на расхождение</div>
                <div className="font-mono text-cyan-300 font-bold text-sm sm:text-base">
                  I was under the impression that...
                </div>
                <div className="font-mono text-emerald-300 text-xs sm:text-sm">
                  ...the release was postponed.
                </div>
              </div>
              <span className="self-start md:self-auto text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                Frame + Slot
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="text-xs text-slate-400">Фокусировка на узком месте</div>
                <div className="font-mono text-cyan-300 font-bold text-sm sm:text-base">
                  What bothers me the most is...
                </div>
                <div className="font-mono text-emerald-300 text-xs sm:text-sm">
                  ...the lack of clear specs.
                </div>
              </div>
              <span className="self-start md:self-auto text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                Frame + Slot
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="text-xs text-slate-400">Прогнозирование рисков</div>
                <div className="font-mono text-cyan-300 font-bold text-sm sm:text-base">
                  It&apos;s only a matter of time before...
                </div>
                <div className="font-mono text-emerald-300 text-xs sm:text-sm">
                  ...our servers hit capacity limits.
                </div>
              </div>
              <span className="self-start md:self-auto text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                Frame + Slot
              </span>
            </div>
          </div>

          <p>
            Пока ваш речевой аппарат на автопилоте произносит 2-секундный каркас <em>«I was under the impression that...»</em>, сознание успевает без паники сформулировать суть смыслового слота.
          </p>
        </section>

        {/* SECTION 6 */}
        <section id="sec-6">
          <h2 className="chapter-heading">06. 4-шаговый алгоритм создания несгораемых речевых чанков</h2>

          <p>
            Чтобы превратить новую фразу в автоматический процедурный чанк:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
              <span className="text-xs font-mono font-bold text-cyan-400">ШАГ 1: CAPTURE (ВЫДЕЛЕНИЕ)</span>
              <p className="text-xs text-slate-300 mb-0">
                Никогда не выписывать изолированные слова. Выписывать только неделимый блок вместе с предлогом и служебными частицами.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
              <span className="text-xs font-mono font-bold text-indigo-400">ШАГ 2: COMPRESSION (СЖАТИЕ)</span>
              <p className="text-xs text-slate-300 mb-0">
                Привязать блок к коммуникативному импульсу или рабочей ситуации, исключив мысленный перевод на русский.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
              <span className="text-xs font-mono font-bold text-emerald-400">ШАГ 3: MOTOR ENCODING</span>
              <p className="text-xs text-slate-300 mb-0">
                10 повторений вслух на скорость (Speed Bursting) до формирования единого артикуляционного импульса без пауз.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
              <span className="text-xs font-mono font-bold text-amber-400">ШАГ 4: SLOT SWAPPING</span>
              <p className="text-xs text-slate-300 mb-0">
                Подставить в рамку 4–5 разных окончаний из ваших реальных рабочих задач (деплой, баг, рефакторинг, сроки).
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-cyan-950/40 border border-indigo-500/30 text-center space-y-3 mt-8">
            <h3 className="text-lg font-bold text-white">Все лонгриды в едином меню:</h3>
            <p className="text-xs text-slate-300 max-w-xl mx-auto">
              Используйте каталог для изучения всех 9 материалов или перейдите к интерактивному тренажеру для отработки фраз на практике.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/longreads"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-500 hover:bg-indigo-400 text-white transition-all shadow-lg"
              >
                Открыть каталог лонгридов →
              </Link>
              <Link
                href="/learn-chunks"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-all"
              >
                Перейти в тренажер чанков (100+ фраз)
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
