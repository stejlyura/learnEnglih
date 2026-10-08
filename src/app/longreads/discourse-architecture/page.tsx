import React from "react";
import Link from "next/link";
import { ArticleHeaderNav, QuoteCallout, MethodCard } from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { LongreadSelectorDropdown } from "@/features/longread-selector";
import { SpeakButton } from "@/features/speech-pronounce";
import {
  DISCOURSE_CHUNKS,
  DISCOURSE_BLOCKS,
  COMPARATIVE_REGISTERS,
  METHODOLOGY_STAGES,
} from "@/entities/chunk";
import { Sparkles, ArrowRight, ExternalLink } from "lucide-react";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "sec-1", title: "01. Психолингвистические основания беглости речи и когнитивная компрессия" },
  { id: "sec-2", title: "02. Систематизированный репертуар дискурсивных каркасов аргументации (63 единицы)" },
  { id: "sec-3", title: "03. Сравнительный анализ дискурсивных регистров: B1–B2 vs Solid B2/C1" },
  { id: "sec-4", title: "04. Методология дидактической автоматизации формульных единиц в спонтанном дискурсе" },
  { id: "sec-5", title: "05. Заключение" },
  { id: "sec-6", title: "06. Научные источники & Библиография" },
] as const;

export default function DiscourseArchitecturePage({
  isUnified = false,
}: {
  readonly isUnified?: boolean;
} = {}) {
  return (
    <>
      {!isUnified && (
        <ArticleHeaderNav
          title="DISCOURSE ARCHITECTURE & ARGUMENT FRAMES"
          badge="C1 Fluency SLA"
          activeRoute="/longreads/discourse-architecture"
        />
      )}

      <article className="longread-container prose-editorial" id="top">
        {!isUnified && (
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Библиотека исследований SLA</span>
              <span>•</span>
              <span className="text-cyan-400 font-semibold">Дискурсивная Архитектура</span>
            </div>
            <LongreadSelectorDropdown currentSlug="discourse-architecture" />
          </div>
        )}

        <div className="article-meta-top">
          <span>Когнитивная лингвистика & SLA</span>
          <span>•</span>
          <span>Время чтения: 18 минут</span>
          <span>•</span>
          <span className="text-cyan-400">Уровень: B2 → C1 Academic & Business</span>
        </div>

        <h1 className="article-title">
          Дискурсивная Архитектура Спонтанной Речи: Когнитивные Механизмы, Функциональный Каталог Лексических Каркасов B2–C1 и Прикладные Методы Автоматизации
        </h1>

        <p className="article-lead">
          Почему свободная речь на 97% состоит из первых 3 000 частотных слов, как полуфиксированные предикативные рамки снимают перегрузку с оперативной памяти и как интериоризировать 63 целевых каркаса аргументации для спонтанных дебатов и переговоров.
        </p>

        <div className="article-info-strip">
          <div className="info-item">
            <span>Научный базис:</span>{" "}
            <strong>Willem Levelt (Speech Production), Michael Lewis, Pawley & Syder, Brown & Levinson</strong>
          </div>
          <div className="info-item">
            <span>Ключевой эффект:</span>{" "}
            <strong>Когнитивная компрессия + увеличение длины непрерывного пробега (MLR)</strong>
          </div>
          <div className="info-item">
            <span>Прикладной каталог:</span>{" "}
            <strong>63 формульных каркаса в 6 прагматических категориях</strong>
          </div>
        </div>

        {/* Interactive Hub Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg my-6">
          <div>
            <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Интерактивный тренажер 63 каркасов с озвучкой</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1">
              Фильтрация по 6 блокам, скоростная субституция незамкнутых слотов и таймер прогрессивной компрессии 4-3-2.
            </div>
          </div>
          <Link
            href="/discourse-chunks"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer self-start sm:self-auto"
          >
            <span>Открыть тренажер →</span>
          </Link>
        </div>

        <TableOfContents items={TOC_ITEMS} />

        {/* SECTION 1 */}
        <section id="sec-1">
          <h2 className="chapter-heading">
            01. Психолингвистические основания беглости речи и когнитивная компрессия
          </h2>

          <p>
            Устойчивое заблуждение в прикладной лингвистике и методике преподавания языков сводится к предположению, что переход от продуктивного порогового уровня к свободному владению языком в диапазоне B2–C1 обусловлен экстенсивным накоплением низкочастотной лексики объемом свыше 10 000 изолированных единиц.
          </p>

          <p>
            Эмпирические корпусные исследования показывают обратную зависимость: лексический состав спонтанной устной коммуникации носителей языка и высококомпетентных билингвов <strong>на 95–97% формируется за счет ядерного массива первых 2 000–3 000 наиболее частотных слов</strong>. Сравнительный анализ речевой продукции кандидатов экзаменационных систем уровней B1, B2 и C1 свидетельствует о том, что различия в обращении к редкой лексике за пределами двухтысячного частотного порога минимальны и составляют не более одного слова на 33 лексические единицы.
          </p>

          <QuoteCallout cite="Pawley & Syder (1983), Michael Lewis (1993)">
            «Качественная трансформация речевого профиля спикера обусловлена не размером пассивного словаря, а структурной организацией высказывания — плотностью и точностью применения устойчивых формульных последовательностей, полуфиксированных предикативных рамок и дискурсивных маркеров».
          </QuoteCallout>

          <p>
            В рамках лексического подхода язык концептуализируется не как набор грамматических правил, заполняемых изолированными словами, а как <strong>лексикализованная грамматика</strong>, состоящая из готовых смысловых блоков.
          </p>

          <p>
            В психолингвистической модели порождения речи Виллема Левелта (Willem Levelt) вербализация мысли проходит три взаимосвязанных этапа:
          </p>

          <ol style={{ paddingLeft: "24px", marginBottom: "20px", lineHeight: "1.8" }}>
            <li><strong>Концептуализацию</strong> коммуникативного намерения;</li>
            <li><strong>Формулирование</strong> синтаксической и фонологической структуры;</li>
            <li><strong>Непосредственную артикуляцию</strong>.</li>
          </ol>

          <p>
            Попытка конструировать синтагмы аналитически, соединяя каждое изолированное слово по правилам грамматики, неизбежно перегружает кратковременную рабочую память. Это выражается в потере беглости, сбоях когезии и патологической паузации в середине фразовых единств.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30">
              <div className="text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                ❌ Аналитическая пословная сборка (B1–B2)
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Каждое слово извлекается отдельно. Мозг тратит ресурсы рабочей памяти на согласование времен, артиклей и предлогов. Паузы локализуются <em>внутри</em> синтагм, сигнализируя о лексическом ступоре.
              </p>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-rose-300 font-mono">
                MLR: 3–4 слова между паузами • Дисфлюэнтные «эээ/ммм»
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                ✅ Когнитивная компрессия каркасами (Solid C1)
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Мозг извлекает полуфиксированный каркас как единую неделимую сущность. Паузы переносятся <em>строго на границы</em> блоков, создавая акустическую непрерывность и выигрывая 1.5–2 секунды на концептуализацию мысли.
              </p>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-emerald-300 font-mono">
                MLR: 12–18 слов между паузами • Непрерывный темпоральный поток
              </div>
            </div>
          </div>

          <p>
            В прикладном анализе временных параметров устной речи (<strong>Temporal Fluency</strong>) ключевое значение приобретают средняя длина непрерывного отрезка речи между паузами (<strong>Mean Length of Run — MLR</strong>) и характер локализации пауз. Начинающий спикер делает остановки внутри базовых синтаксических групп, выдавая процесс лексического поиска, тогда как сформированный спикер уровня C1 переносит паузы исключительно на границы синтаксических блоков и активно применяет стратегии когнитивного маневрирования.
          </p>
        </section>

        {/* SECTION 2 */}
        <section id="sec-2">
          <h2 className="chapter-heading">
            02. Систематизированный репертуар дискурсивных каркасов аргументации
          </h2>

          <p>
            Корпус включает <strong>63 специализированных каркаса</strong>, сгруппированных по 6 фундаментальным прагматическим функциям аргументативного взаимодействия. Представленные единицы отобраны с учетом исключения как элементарных клише школьного регистра, так и чрезмерно архаичных академических связок.
          </p>

          <div className="space-y-10 my-8">
            {DISCOURSE_BLOCKS.map((block) => {
              const blockChunks = DISCOURSE_CHUNKS.filter((c) => c.blockId === block.id);
              return (
                <div key={block.id} className="p-6 rounded-3xl bg-white/[0.02] border border-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{block.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-0">
                          {block.titleRu}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5 mb-0">
                          {block.descriptionRu}
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shrink-0">
                      {blockChunks.length} каркасов
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-300 border-collapse">
                      <thead>
                        <tr className="border-b border-white/10 text-slate-400 font-semibold">
                          <th className="py-2.5 pr-4">Речевой каркас (Frame)</th>
                          <th className="py-2.5 pr-4">Аутентичный пример контекстного употребления</th>
                          <th className="py-2.5 pr-4">Прагматическая функция</th>
                          <th className="py-2.5">Русский эквивалент</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {blockChunks.map((chunk) => (
                          <tr key={chunk.id} className="hover:bg-white/[0.02] transition-colors">
                            <td className="py-3 pr-4 font-mono font-semibold text-cyan-300 align-top whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <span>{chunk.frameEn}</span>
                                <SpeakButton text={chunk.authenticExampleEn} size="sm" />
                              </div>
                            </td>
                            <td className="py-3 pr-4 text-slate-200 align-top leading-relaxed">
                              «{chunk.authenticExampleEn}»
                            </td>
                            <td className="py-3 pr-4 text-slate-400 align-top">
                              {chunk.pragmaticFunctionRu}
                            </td>
                            <td className="py-3 text-slate-300 font-medium align-top">
                              {chunk.russianEquivalent}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="sec-3">
          <h2 className="chapter-heading">
            03. Сравнительный анализ дискурсивных регистров: от элементарной связности к академической риторике
          </h2>

          <p>
            Качественный переход от коммуникативного плато B1–B2 к беглости C1 заключается не в отказе от базовых связок, а в <strong>смене дискурсивного регистра</strong>.
          </p>

          <p>
            Спикер базового уровня использует изолированные союзы и предикаты высокой степени прямолинейности (<em>«I don't agree», «Also...», «In conclusion...»</em>), что часто воспринимается в англоязычной профессиональной среде как излишняя ригидность или коммуникативная незрелость.
          </p>

          <QuoteCallout cite="Пенелопа Браун и Стивен Левинсон (Brown & Levinson, 1987), Теория Вежливости">
            «Спикер уровня C1 оперирует префабрицированными каркасами, реализующими прагматические стратегии вежливости и сохранения лица (Face-Saving Acts). Мягкие предикативные рамки снижают угрозу негативного лица оппонента, позволяя выдвигать радикальные возражения без разрушения партнерских отношений».
          </QuoteCallout>

          <div className="space-y-4 my-8">
            {COMPARATIVE_REGISTERS.map((reg) => (
              <div
                key={reg.id}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 transition-all shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {reg.functionRu}
                  </span>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Регистровый переход B2 → C1
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                    <div className="text-[11px] font-bold text-rose-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>Базовый шаблон (B1–B2)</span>
                      <SpeakButton text={reg.basicExample} size="sm" />
                    </div>
                    <div className="text-xs font-mono text-rose-300 mb-1 font-semibold">
                      {reg.basicTemplateB1B2}
                    </div>
                    <div className="text-xs text-slate-300 italic">
                      «{reg.basicExample}»
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                    <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>Дискурсивный каркас (Solid C1)</span>
                      <SpeakButton text={reg.advancedExample} size="sm" />
                    </div>
                    <div className="text-xs font-mono text-emerald-300 mb-1 font-semibold">
                      {reg.advancedFrameC1}
                    </div>
                    <div className="text-xs text-slate-300 italic">
                      «{reg.advancedExample}»
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-amber-300">Социопрагматический эффект: </span>
                  {reg.socioPragmaticEffectRu}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="sec-4">
          <h2 className="chapter-heading">
            04. Методология дидактической автоматизации формульных единиц в спонтанном дискурсе
          </h2>

          <p>
            Формирование рецептивного знания дискурсивных каркасов не обеспечивает их автоматической активации в стрессовых условиях спонтанного диалога. Перевод префабрицированных единиц из пассивного репертуара в спонтанную моторно-артикуляционную продукцию требует последовательной реализации дидактического цикла, опирающегося на феномены <strong>фонологической петли</strong> и <strong>семантического прайминга</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <MethodCard
              badge="ЭТАП 01 • Моторная память"
              badgeClass="tier-1"
              title="Слуховое моделирование и просодическая интеграция"
              subtitle="Акустическое теневое повторение (Shadowing)"
            >
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Первый этап направлен на преодоление сегментного восприятия фраз. Практика акустического теневого повторения (Shadowing) за носителями языка позволяет автоматизировать произнесение формульного каркаса как <strong>единого неделимого фонетического слова</strong>.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mb-0">
                Особое внимание уделяется редукции безударных функциональных элементов, межсловному связыванию (linking) и мелодике нисходяще-восходящего тона, характерного для концессивных маркеров (*Admittedly...*, *Having said that...*). Артикуляционная программа воспроизводится мускульно, не требуя послогового планирования.
              </p>
            </MethodCard>

            <MethodCard
              badge="ЭТАП 02 • Синтаксическая гибкость"
              badgeClass="tier-1"
              title="Вариативная субституция незамкнутых слотов"
              subtitle="Скоростная тренировка подстановок"
            >
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Второй этап ориентирован на выработку гибкости оперирования полуфиксированными каркасами. Спикер тренирует мгновенное подключение к стабильному дискурсивному основанию различных семантических переменных.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mb-0">
                Задается фиксированный каркас (<em>The strongest case, in my view, is for...</em>), к которому говорящий в высоком темпе подставляет разнообразные субстантивные и герундиальные группы из смежных доменов. Это разрушает жесткую ассоциацию каркаса с узким контекстом.
              </p>
            </MethodCard>

            <MethodCard
              badge="ЭТАП 03 • Temporal Fluency"
              badgeClass="tier-2"
              title="Метод прогрессивной компрессии временных интервалов"
              subtitle="Протокол 4-3-2 под нарастающим давлением"
            >
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Для интеграции каркасов в условия реального временного дефицита применяется классический протокол 4-3-2. Говорящий выбирает проблемный тезис и излагает аргументацию партнеру или на диктофон в течение <strong>четырех минут</strong>, соблюдая условие включения минимум пяти целевых каркасов.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mb-0">
                После паузы аналогичная задача решается за <strong>три минуты</strong>, а затем — за <strong>две минуты</strong>. Прогрессивное сжатие временных рамок вынуждает когнитивный аппарат отсекать второстепенную описательную лексику и опираться исключительно на формульные мосты.
              </p>
            </MethodCard>

            <MethodCard
              badge="ЭТАП 04 • Рефлекторное извлечение"
              badgeClass="tier-2"
              title="Контекстуализированное интервальное извлечение"
              subtitle="Кризисно-триггерные карточки повторения"
            >
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Заключительный этап нейтрализует забывание посредством специализированной каталогизации. Картотеки интервального повторения формируются по <strong>функционально-триггерному критерию</strong>.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mb-0">
                На лицевой стороне карточки задается кризис: <em>«Необходимо вежливо оспорить категоричное утверждение коллеги»</em> или <em>«Задача выиграть три секунды времени при неожиданном вопросе»</em>. Оборотная сторона содержит соответствующий прагматический каркас.
              </p>
            </MethodCard>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="sec-5">
          <h2 className="chapter-heading">05. Заключение</h2>

          <p>
            Анализ психолингвистических механизмов устной речи показывает, что подлинная беглость на уровнях B2–C1 достигается не экстенсивным накоплением многотысячного пассивного словаря, а <strong>интериоризацией дискурсивного каркаса</strong>.
          </p>

          <p>
            Освоение компактного инвентаря из 50–70 префабрицированных конструкций снимает когнитивную нагрузку с кратковременной памяти, оптимизирует темпоральные параметры речепорождения и позволяет гибко управлять аргументацией в условиях спонтанного диалога.
          </p>

          <p>
            Систематическое применение дидактических методов автоматизации обеспечивает плавный переход от конструирования фраз по изолированным грамматическим правилам к аутентичному, связному и риторически зрелому ведению дискуссии.
          </p>
        </section>

        {/* SECTION 6: SOURCES */}
        <section id="sec-6" className="my-10 pt-6 border-t border-white/10">
          <h2 className="chapter-heading">06. Научные источники & Библиография</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-400">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              1. Byrne, S. <em>An examination of successful language use at B1, B2 and C1</em>. UCLan e-Thesis.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              2. TEFL Institute. <em>What Is the Lexical Approach to Language Teaching?</em>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              3. Lewis, M. (1993). <em>The Lexical Approach: The State of ELT and a Way Forward</em>. Language Teaching Publications.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              4. Bastow, S. <em>Lexical approach and chunking in modern language pedagogy</em>.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              5. Teast (2026). <em>The Lexical Approach: Teaching Vocabulary in Context</em>.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              6. NUCZU. <em>The Lexical-Grammatical Approach to Spoken Production</em>.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              7. Huang, L. (2011). <em>Discourse markers in spoken English: A corpus study of native speech</em>. Univ. of Birmingham.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              8. ECE. <em>Fluency and Coherence: Scoring IELTS Speaking Band 8.0+</em>.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              9. Abblino. <em>Chunking for Language Learners: Speak Naturally with Phrase Frames</em>.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              10. CEFR C1. <em>C1 Speaking Useful Expressions & Formulaic Sequences</em>.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              11. IELTS Liz. <em>Linking Words & Discourse Cohesion for Advanced Arguments</em>.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              12. Test-English. <em>Discourse markers – Linking words and pragmatic concession</em>.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              13. Scribd Research. <em>Common English Vocabulary Chunks in Spontaneous Dialogue</em>.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              14. Academic English. <em>How to Debate & Express Nuanced Opinions (C1–C2)</em>.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              15. ESL Lounge. <em>C1 CEFR Vocabulary & Sentence Frames Reference</em>.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              16. Bham Corpus. <em>Discourse Markers and Gap-Fillers in Spoken English</em>.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              17. JALT Publications. <em>The lexical approach: A systematic way of building oral fluency</em>.
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              18. Oxford TEFL. <em>Speaking Unplugged: 30 Activities for Spontaneous Speech Automation</em>.
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
