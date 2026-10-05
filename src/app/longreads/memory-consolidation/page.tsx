import React from "react";
import Link from "next/link";
import { ArticleHeaderNav, QuoteCallout, MethodCard } from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { LongreadSelectorDropdown } from "@/features/longread-selector";
import { LONGREADS } from "@/entities/longread";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "part-1", title: "01. Молекулярный фундамент памяти: Закон Хебба и каскад LTP" },
  { id: "part-2", title: "02. Комплементарные системы обучения: Гиппокамп и Неокортекс" },
  { id: "part-3", title: "03. Сон: Медленноволновые волны-рипплы и семантическая интеграция REM" },
  { id: "part-4", title: "04. Эффект тестирования: Почему пассивное чтение бесполезно" },
  { id: "part-5", title: "05. Желательные трудности Бьорка и сила интерливинга" },
  { id: "part-6", title: "06. Математика забывания: От Эббингауза к современному FSRS" },
] as const;

export default function MemoryConsolidationPage({ isUnified = false }: { readonly isUnified?: boolean } = {}) {
  return (
    <>
      {!isUnified && (
        <ArticleHeaderNav
          title="MEMORY CONSOLIDATION & OPTIMAL LEARNING"
          badge="Neurobiology"
          activeRoute="/longreads/memory-consolidation"
        />
      )}

      <article className="longread-container" id="top">
        {!isUnified && (
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Библиотека исследований SLA</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">Статья 02 из {LONGREADS.length}</span>
            </div>
            <LongreadSelectorDropdown currentSlug="memory-consolidation" />
          </div>
        )}

        <div className="article-meta-top">
          <span>Молекулярная нейробиология & Когнитивная психология памяти</span>
          <span>•</span>
          <span>Время чтения: 16 минут</span>
        </div>

        <h1 className="article-title">
          Наука Консолидации Памяти: Долговременная Потенциация (LTP), Фазы Сна, Эффект Тестирования и Желательные Трудности
        </h1>

        <p className="article-lead">
          Как мозг физически превращает новые речевые чанки в долговременную память, почему традиционное перечитывание правил не оставляет следов в синапсах и как построить обучение по законам нейробиологии.
        </p>

        <div className="article-info-strip">
          <div className="info-item"><span>Целевая аудитория:</span> <strong>Все уровни (SLA Mastery)</strong></div>
          <div className="info-item"><span>Научный базис:</span> <strong>LTP (Bliss & Lømo), Testing Effect (Roediger & Karpicke), Bjork</strong></div>
          <div className="info-item"><span>Главный закон:</span> <strong>Retrieval Practice запускает реконсолидацию синапсов</strong></div>
        </div>

        {/* Table of Contents */}
        <TableOfContents items={TOC_ITEMS} />

        {/* PART 1 */}
        <section id="part-1">
          <h2 className="chapter-heading">01. Молекулярный фундамент памяти: Закон Хебба и каскад LTP</h2>

          <p>
            Память — это не архив текстовых файлов в глубине черепа. Память — это <strong>изменение проводимости синаптических контактов</strong> между миллиардами нейронов коры.
          </p>

          <p>
            В 1949 году канадский нейрофизиолог Дональд Хебб сформулировал аксиому нейропластичности: <em>«Нейроны, которые возбуждаются вместе, связываются вместе» (Neurons that fire together, wire together)</em>.
          </p>

          <MethodCard borderAccentColor="#10B981">
            <div className="method-card-header">
              <span className="tier-badge tier-1">Молекулярный механизм LTP</span>
              <span className="text-xs text-slate-400">Bliss & Lømo, 1973</span>
            </div>
            <h4 style={{ color: "#FFF", marginBottom: "8px" }}>Долговременная Потенциация (Long-Term Potentiation)</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-0">
              Когда речевой чанк повторяется с осознанным ментальным усилием, пресинаптический нейрон выбрасывает глутамат. Активируются <strong>NMDA-рецепторы</strong>, внутрь клетки устремляются ионы кальция Ca²⁺, запуская экспрессию генов и синтез нейротрофического фактора мозга <strong>BDNF</strong>. На дендритах физически вырастают новые шипики. Проводимость синапса возрастает в разы.
            </p>
          </MethodCard>

          <p>
            <strong>Следствие для языка:</strong> Изучение изолированных слов стимулирует одиночные слабые синапсы, которые быстро атрофируются. Изучение **цельных лексических чанков** синхронно активирует моторную кору, слуховую петлю и семантические узлы, формируя прочный нейронный кластер.
          </p>
        </section>

        {/* PART 2 */}
        <section id="part-2">
          <h2 className="chapter-heading">02. Комплементарные системы обучения: Гиппокамп и Неокортекс</h2>

          <p>
            Модель комплементарных систем (Complementary Learning Systems, McClelland, McNaughton & O&apos;Reilly) объясняет биологическое ограничение:
          </p>

          <div className="grid-2col my-6">
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2">
              <div className="text-amber-400 font-bold text-xs uppercase tracking-wider">
                ⚡ Гиппокамп (Быстрый Кэш)
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Быстро записывает новую информацию с одного раза. Высокая пластичность, но ограниченный объем. Если не консолидировать данные — они стираются через 24–48 часов под давлением новых стимулов.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
              <div className="text-cyan-400 font-bold text-xs uppercase tracking-wider">
                🏛️ Неокортекс (Постоянная Память)
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Распределенная нейросеть коры. Учится медленно, через множество повторений, но сохраняет структуры годами. Обеспечивает интуитивную спонтанность речи.
              </p>
            </div>
          </div>
        </section>

        {/* PART 3 */}
        <section id="part-3">
          <h2 className="chapter-heading">03. Сон: Медленноволновые волны-рипплы и семантическая интеграция REM</h2>

          <p>
            Исследования лабораторий Яна Борна (Jan Born, University of Tübingen) и Мэттью Уокера (Matthew Walker, UC Berkeley) привели к фундаментальному выводу: <strong>память закрепляется не на занятии, а во сне</strong>.
          </p>

          <div className="space-y-4 my-6">
            <MethodCard>
              <h4 style={{ color: "#38BDF8", marginBottom: "8px" }}>1. Медленноволновой сон (NREM 3) и Sharp-Wave Ripples</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-0">
                Во время глубокого сна гиппокамп генерирует высокочастотные всплески (150–250 Гц) — <em>Sharp-Wave Ripples</em>. В этот момент паттерны нейронов, активированные при дневном изучении чанков, <strong>проигрываются повторно со скоростью в 10–20 раз быстрее реальности</strong>. Происходит физическая перезапись в неокортекс.
              </p>
            </MethodCard>

            <MethodCard>
              <h4 style={{ color: "#A855F7", marginBottom: "8px" }}>2. Фаза быстрого сна (REM) и языковая интуиция</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-0">
                В фазе REM мозг интегрирует новые чанки в глобальную семантическую паутину, соединяя грамматику с ассоциациями и эмоциями. Именно после полноценного REM-сна фразы начинают звучать «естественно» без сознательного перевода.
              </p>
            </MethodCard>
          </div>

          <QuoteCallout cite="Мэттью Уокер, профессор нейробиологии UC Berkeley">
            «Сон — это не пассивный отдых мозга, а активный биохимический монтажный цех. Лишая себя 2 часов сна после интенсивной учебы, вы выбрасываете до 60% сформированных синаптических связей».
          </QuoteCallout>
        </section>

        {/* PART 4 */}
        <section id="part-4">
          <h2 className="chapter-heading">04. Эффект тестирования: Почему пассивное чтение бесполезно</h2>

          <p>
            В 2006 году психологи Генри Редигер и Джеффри Карпике (Henry Roediger & Jeffrey Karpicke, <em>Psychological Science</em>) провели знаковый эксперимент, перевернувший методологию обучения:
          </p>

          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3 my-6 font-mono text-xs sm:text-sm">
            <div className="text-cyan-400 font-bold">РЕЗУЛЬТАТЫ УДЕРЖАНИЯ ЗНАНИЙ ЧЕРЕЗ 1 НЕДЕЛЮ:</div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Группа «Чтение + 3 перечитывания»:</span>
              <span className="text-rose-400 font-bold">28% сохранено</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Группа «Чтение + 3 теста на извлечение»:</span>
              <span className="text-emerald-400 font-bold">67% сохранено (+140% прирост!)</span>
            </div>
          </div>

          <p>
            <strong>Феномен реконсолидации (Reconsolidation):</strong> Когда вы заставляете себя вспомнить чанк из головы без подсказки, нейронный след временно становится пластичным, мозг заново синтезирует белки в синапсе, делая его устойчивым к угасанию. Перечитывание конспекта или просмотр готового перевода карточки этого эффекта не дает.
          </p>
        </section>

        {/* PART 5 */}
        <section id="part-5">
          <h2 className="chapter-heading">05. Желательные трудности Бьорка и сила интерливинга</h2>

          <p>
            Профессор Роберт Бьорк (Robert Bjork, UCLA) сформулировал закон <strong>Desirable Difficulties (Желательные трудности)</strong>:
          </p>

          <QuoteCallout cite="Роберт Бьорк, UCLA">
            «Сиюминутная легкость выполнения (Performance) прямо противоположна долговременному сохранению (Storage Strength). Если материал дается вам без труда — глубокого обучения не происходит».
          </QuoteCallout>

          <div className="grid-2col my-6">
            <MethodCard borderAccentColor="#F59E0B">
              <h4 style={{ color: "#FBBF24", marginBottom: "8px" }}>Интерливинг (Interleaving)</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-0">
                Чередование разнородных времен и конструкций в случайном порядке. Заставляет мозг на каждой фразе заново определять контекст, что развивает гибкость спонтанной речи.
              </p>
            </MethodCard>

            <MethodCard borderAccentColor="#06B6D4">
              <h4 style={{ color: "#22D3EE", marginBottom: "8px" }}>Интервалы (Spacing)</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-0">
                Повторение в тот момент, когда информация начала забываться. Усилие по «вытягиванию» полузабытого материала укрепляет синапсы в 3 раза сильнее.
              </p>
            </MethodCard>
          </div>
        </section>

        {/* PART 6 */}
        <section id="part-6">
          <h2 className="chapter-heading">06. Математика забывания: От Эббингауза к современному FSRS</h2>

          <p>
            Память угасает по экспоненте (Герман Эббингауз, 1885). Для преодоления кривой забывания оптимальный график повторений строится по закону растущих интервалов:
          </p>

          <ul className="space-y-2 my-4 text-xs sm:text-sm text-slate-300 pl-5">
            <li><strong>Интервал 1:</strong> через 20 минут после первого знакомства (фиксация в рабочей памяти).</li>
            <li><strong>Интервал 2:</strong> через 24 часа (после ночной фазы сна и консолидации).</li>
            <li><strong>Интервал 3:</strong> через 3–4 дня.</li>
            <li><strong>Интервал 4:</strong> через 10–14 дней.</li>
            <li><strong>Интервал 5:</strong> через 30–45 дней (полная интеграция в процедурные нейросети).</li>
          </ul>

          <p>
            Современный алгоритм <strong>FSRS (Free Spaced Repetition Scheduler)</strong> динамически пересчитывает интервалы на основе трех параметров: сложности материала (Difficulty), стабильности следа (Stability) и текущей вероятности извлечения (Retrievability).
          </p>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-indigo-950/40 border border-emerald-500/30 text-center space-y-3 mt-8">
            <h3 className="text-lg font-bold text-white">Перейти к следующему исследованию:</h3>
            <p className="text-xs text-slate-300 max-w-xl mx-auto">
              Узнайте, как мозг упаковывает синтаксические деревья в атомарные ментальные токены и почему базальные ганглии оперируют конструкциями «Frame-and-Slot».
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/longreads/chunk-architecture"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg"
              >
                Читать: Архитектура Памяти на Чанках →
              </Link>
              <Link
                href="/longreads"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-all"
              >
                Все лонгриды каталога
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
