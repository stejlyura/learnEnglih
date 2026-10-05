"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EditorialLayout, ChunkItemRow, MethodCard, QuoteCallout, ChunkResponsiveSelector, ChunkSelectorItem } from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { LongreadSelectorDropdown } from "@/features/longread-selector";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "tense-1", title: "01. Научные исследования: Почему таблицы времен убивают спонтанную речь" },
  { id: "tense-2", title: "02. Принцип Plug & Play: Жесткая голова и свободный слот" },
  { id: "tense-3", title: "03. Блок 1 (#1–#4): Present Perfect (Результат к этой минуте)" },
  { id: "tense-4", title: "04. Блок 2 (#5–#7): Present Perfect Continuous (Длительный процесс)" },
  { id: "tense-5", title: "05. Блок 3 (#8–#10): Past Continuous (Фон и прерывание)" },
  { id: "tense-6", title: "06. Блок 4 (#11–#12): Обязательства и срывы планов (Практический остаток)" },
  { id: "tense-7", title: "07. Метод тренировки Speed Swapping" },
] as const;

const TENSE_BLOCK_ITEMS: readonly ChunkSelectorItem[] = [
  { id: "all", label: "Все 12 чанков", icon: "⚡", count: 12 },
  { id: "block-1", label: "Present Perfect", icon: "🎯", count: 4, description: "Результат к этой минуте" },
  { id: "block-2", label: "Perfect Continuous", icon: "⏱️", count: 3, description: "Длительный процесс" },
  { id: "block-3", label: "Past Continuous", icon: "🌊", count: 3, description: "Фон и прерывание" },
  { id: "block-4", label: "Обязательства & Планы", icon: "🤝", count: 2, description: "Взятие ответственности" },
  { id: "speed-swap", label: "Speed Swapping", icon: "🚀", description: "Метод тренировки" },
] as const;

export default function TenseChunksPage() {
  const [activeBlock, setActiveBlock] = useState<string>("all");

  return (
    <EditorialLayout
      title="Временные Чанки Plug & Play: Как Говорить во Временах без Таблиц и Расчетов"
      metaCategory="Нейробиология видовременных форм"
      readTime="Время чтения: 7 минут"
      badge="Plug & Play"
      badgeColor="emerald"
      activeRoute="/tense-chunks"
      lead="Почему математическое вычисление 12 временных форм в голове гарантирует затыки, как исследования Joan Bybee и Nick Ellis доказывают блочную природу грамматики и 12 практических разъемов, закрывающих 90% реальной речи."
      infoItems={[
        { label: "Научная база", value: "Exemplar-Based Linguistics (Joan Bybee, Nick Ellis)" },
        { label: "Ключевой навык", value: "Zero-Latency Tense Switching (переключение времен за 0.2 сек)" },
        { label: "Формат", value: "12 отобранных чанков-разъемов под реальные задачи" },
      ]}
      topBanner={
        <>
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Библиотека лонгридов</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">Всего 9 материалов</span>
            </div>
            <LongreadSelectorDropdown currentSlug="tense-chunks" />
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-cyan-950/20 to-slate-900 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg my-6">
            <div>
              <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>📊 Интерактивная Таблица Времен в Готовых Чанках (Парето 80/20)</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
                  80% vs 20%
                </span>
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">
                Сетка Present, Past, Future с готовыми рабочими предложениями под ключ и озвучкой.
              </div>
            </div>
            <Link
              href="/tense-matrix"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer self-start sm:self-auto"
            >
              <span>Открыть матрицу времен →</span>
            </Link>
          </div>
        </>
      }
    >
      {/* Responsive Block Selector: Desktop Horizontal Scroll Rail + Mobile Tactile Icon Dock */}
      <ChunkResponsiveSelector
        items={TENSE_BLOCK_ITEMS}
        activeId={activeBlock}
        onSelect={setActiveBlock}
        title="Разделы видовременных чанков"
      />

      {activeBlock === "all" && <TableOfContents items={TOC_ITEMS} />}

      {/* SECTION 1: Shown in all or when intro relevant */}
      {activeBlock === "all" && (
        <>
          <section id="tense-1">
            <h2 className="chapter-heading">01. Научные исследования: Почему таблицы времен убивают спонтанную речь</h2>

            <p>
              Когда человеку на рабочем митинге нужно сказать простую мысль во времени <em>Present Perfect Continuous</em> (например, «я все утро дебажу этот баг»), традиционная грамматическая модель требует выполнить в уме 5 последовательных шагов:
            </p>

            <ol style={{ paddingLeft: "24px", marginBottom: "24px", lineHeight: "1.8" }}>
              <li>Выбрать подлежащее (<em>I</em> или <em>We</em>).</li>
              <li>Выбрать форму вспомогательного глагола (<em>have</em> или <em>has</em>).</li>
              <li>Присоединить третью форму глагола to be (<em>been</em>).</li>
              <li>Вспомнить смысловой глагол <em>debug</em> и прикрепить суффикс <em>-ing</em>.</li>
              <li>Выбрать предлог времени (<em>for</em> или <em>since</em>).</li>
            </ol>

            <p>
              В условиях реального разговора эта вычислительная цепочка занимает <strong>от 1.5 до 3 секунд</strong>. Человек замирает, отводит взгляд, рот зависает в полуоткрытом состоянии и издает звук <strong>«ээээ»</strong>.
            </p>

            <QuoteCallout cite="Джоан Байби (Joan Bybee), «Language, Usage and Cognition», Cambridge University Press">
              «Грамматика естественного языка не хранится в мозге как абстрактная алгебра правил. Она организована как сеть высокочастотных лексических экземпляров (Exemplars). Носители языка говорят грамматически правильно не потому, что быстро считают формулы, а потому, что выстреливают готовые аспектуальные блоки».
            </QuoteCallout>

            <p>
              Исследования профессора Ника Эллиса (Nick C. Ellis) по когнитивной обработке глагольных форм подтвердили: взрослые учащиеся терпят крах в 80% случаев, если пытаются сознательно конструировать видовременные формы (<em>Explicit Computation</em>) в реальном времени. Но когда они заучивают <strong>готовые аспектуальные рамки (Formulaic Aspectual Frames)</strong>, беглость возрастает мгновенно.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="tense-2" className="mt-14 pt-8">
            <h2 className="chapter-heading">02. Принцип Plug & Play: Жесткая голова и свободный слот</h2>

            <p>
              Временной чанк Plug & Play устроен гениально просто:
            </p>

            <MethodCard
              title="Архитектура речевого разъема"
              badge="Принцип сборки"
              badgeClass="tier-2"
            >
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-bold text-base mb-1">1. Жесткая голова (The Head)</h4>
                  <p className="text-sm text-slate-300 leading-relaxed mb-0">
                    Вспомогательные глаголы, предлоги и временные формы уже на 100% согласованы. Ошибиться грамматически невозможно, потому что вы произносите их как одно неделимое слово.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">2. Свободный слот (The Slot)</h4>
                  <p className="text-sm text-slate-300 leading-relaxed mb-0">
                    Сюда подставляется только действие текущей секунды: конкретный тикет, баг или фича.
                  </p>
                </div>
              </div>
            </MethodCard>

            <p>
              Ниже представлен выверенный каталог из <strong>12 практических временных чанков</strong>. Все искусственные и редкие академические нагромождения отброшены — оставлено только то, что звучит на реальных митингах.
            </p>
          </section>
        </>
      )}

      {/* SECTION 3: Present Perfect */}
      {(activeBlock === "all" || activeBlock === "block-1") && (
        <section id="tense-3" className="mt-14 pt-8">
          <h2 className="chapter-heading">03. Блок 1 (#1–#4): Present Perfect (Результат к этой минуте)</h2>
          <p>Снимает 60% страха перед временами группы Perfect. Обозначает факт, актуальный прямо сейчас.</p>

          <MethodCard
            badge="Блок 1 • Чанки 1–4"
            badgeClass="tier-1"
            subtitle="Present Perfect"
          >
            <ChunkItemRow
              num="1"
              title="I've already [past participle] [X]"
              trans="«Я уже сделал это (к этой минуте всё готово)»"
              exEn="I've already patched the vulnerability on staging."
              exRu="Я уже пропатчил уязвимость на стейджинге."
            />

            <ChunkItemRow
              num="2"
              title="Have you had a chance to [verb] yet?"
              trans="«У тебя уже была возможность глянуть / сделать?» (самый частый рабочий вопрос)"
              exEn="Have you had a chance to look over the new API contract yet?"
              exRu="У тебя получилось уже глянуть новый контракт API?"
            />

            <ChunkItemRow
              num="3"
              title="We've run into an issue with [X]"
              trans="«Мы столкнулись с проблемой в... (прямо сейчас боремся с ней)»"
              exEn="We've run into an issue with CORS on the new subdomain."
              exRu="Мы наткнулись на проблему с CORS на новом поддомене."
            />

            <ChunkItemRow
              num="4"
              title="I haven't seen [X] yet"
              trans="«Я пока этого не видел / до меня это еще не дошло»"
              exEn="I haven't seen the updated design mockups yet, could you share the link?"
              exRu="Я еще не видел обновленные макеты, скинешь ссылку?"
            />
          </MethodCard>
        </section>
      )}

      {/* SECTION 4: Present Perfect Continuous */}
      {(activeBlock === "all" || activeBlock === "block-2") && (
        <section id="tense-4" className="mt-14 pt-8">
          <h2 className="chapter-heading">04. Блок 2 (#5–#7): Present Perfect Continuous (Длительный процесс)</h2>
          <p>Описывает процесс, который начался в прошлом и без остановки тянется до текущей секунды.</p>

          <MethodCard
            badge="Блок 2 • Чанки 5–7"
            badgeClass="tier-1"
            subtitle="Present Perfect Continuous"
          >
            <ChunkItemRow
              num="5"
              title="I've been working on [X] all morning"
              trans="«Я всё утро пилю / делаю эту задачу»"
              exEn="I've been working on optimizing SQL queries all morning."
              exRu="Я все утро оптимизирую SQL-запросы."
            />

            <ChunkItemRow
              num="6"
              title="We've been dealing with [X] since [time]"
              trans="«Мы воюем с этой проблемой с такого-то времени»"
              exEn="We've been dealing with these connection drops since yesterday's release."
              exRu="Мы воюем с этими обрывами соединений со вчерашнего релиза."
            />

            <ChunkItemRow
              num="7"
              title="How long have you been seeing this error?"
              trans="«Как давно у вас воспроизводится эта ошибка?» (дебаг)"
              exEn="How long have you been seeing this 504 gateway timeout in production?"
              exRu="Как давно вы наблюдаете этот 504-й таймаут на проде?"
            />
          </MethodCard>
        </section>
      )}

      {/* SECTION 5: Past Continuous */}
      {(activeBlock === "all" || activeBlock === "block-3") && (
        <section id="tense-5" className="mt-14 pt-8">
          <h2 className="chapter-heading">05. Блок 3 (#8–#10): Past Continuous (Фон и прерывание)</h2>
          <p>Идеально для объяснения инцидентов: чем именно вы занимались, когда произошел сбой.</p>

          <MethodCard
            badge="Блок 3 • Чанки 8–10"
            badgeClass="tier-1"
            subtitle="Past Continuous"
          >
            <ChunkItemRow
              num="8"
              title="I was in the middle of [verb-ing] when [X] happened"
              trans="«Я был прямо посреди процесса, когда...»"
              exEn="I was in the middle of running migrations when the database disconnected."
              exRu="Я был прямо посреди наката миграций, когда отвалилась база данных."
            />

            <ChunkItemRow
              num="9"
              title="I was just about to [verb] when..."
              trans="«Я как раз собирался сделать это, когда...»"
              exEn="I was just about to ping you when your message popped up in Slack."
              exRu="Я как раз собирался написать тебе, когда твое сообщение всплыло в слаке."
            />

            <ChunkItemRow
              num="10"
              title="We were looking into [X], but..."
              trans="«Мы как раз исследовали этот вопрос, но...»"
              exEn="We were looking into Kafka partitions, but higher priority bugs came in."
              exRu="Мы как раз изучали партиции в Кафке, но прилетели более горящие баги."
            />
          </MethodCard>
        </section>
      )}

      {/* SECTION 6: Essential Spoken Leftover */}
      {(activeBlock === "all" || activeBlock === "block-4") && (
        <section id="tense-6" className="mt-14 pt-8">
          <h2 className="chapter-heading">06. Блок 4 (#11–#12): Обязательства и срывы планов (Практический остаток)</h2>
          <p>Все абстрактные условные формулы отброшены. Из остальных блоков в реальной работе инженера нужны ровно две вещи: взятие ответственности и объяснение сорвавшегося плана.</p>

          <MethodCard
            badge="Блок 4 • Чанки 11–12"
            badgeClass="tier-1"
            subtitle="Responsibility & Broken Plans"
          >
            <ChunkItemRow
              num="11"
              title="I'll make sure to [verb]..."
              trans="«Я лично проконтролирую / обязательно сделаю это»"
              exEn="I'll make sure to check the logs right after the call."
              exRu="Я обязательно проверю логи сразу после созвона."
              tip="Взятие личной ответственности на митинге без лишней воды."
            />

            <ChunkItemRow
              num="12"
              title="I was supposed to [verb], but [blocker]..."
              trans="«Я должен был [сделать X], но [возник блокер]...»"
              exEn="I was supposed to finish this yesterday, but the API was down."
              exRu="Я должен был закончить это вчера, но лежал API."
              tip="Дипломатичное объяснение задержки без самобичевания."
            />
          </MethodCard>
        </section>
      )}

      {/* SECTION 7 */}
      {(activeBlock === "all" || activeBlock === "speed-swap") && (
        <section id="tense-7" className="mt-14 pt-8">
          <h2 className="chapter-heading">07. Метод тренировки Speed Swapping</h2>

          <p>
            Чтобы временной каркас перешел из пассивного понимания в автоматический спинномозговой рефлекс:
          </p>

          <ol className="editorial-steps">
            <li>
              <h4>Изолируйте жесткую голову (The Head)</h4>
              <p>
                Произнесите каркас <strong>I was in the middle of</strong> слитно, на одном выдохе: <em>«Ай-уоз-ин-зэ-мидл-ов»</em>. Не допускайте пауз между словами.
              </p>
            </li>

            <li>
              <h4>Дрилл замены действия за 20 секунд</h4>
              <p>
                Быстро, не задумываясь о временах, подставьте 3 действия из своей работы:
              </p>
              <div style={{ background: "rgba(0,0,0,0.35)", padding: "18px 22px", borderRadius: "14px", fontFamily: "var(--font-mono)", fontSize: "0.95rem", lineHeight: "1.75", margin: "16px 0", border: "1px solid rgba(255,255,255,0.06)" }}>
                1. I was in the middle of refactoring when the alert fired.<br />
                2. I was in the middle of writing unit tests when my laptop rebooted.<br />
                3. I was in the middle of testing when the client called.
              </div>
            </li>

            <li>
              <h4>Критерий готовности</h4>
              <p>
                Чанк считается внедренным, когда рот начинает произносить временную конструкцию <strong>автоматически за 0.2 секунды</strong>, а голова успевает сформулировать саму суть проблемы.
              </p>
            </li>
          </ol>

          <QuoteCallout cite="Методология Tense Chunks">
            «Забудьте про раздутые таблицы времен. В реальном мире никто не рассчитывает грамматику. Освойте эти 12 шаблонов — и вы закроете 90% рабочих ситуаций на созвонах».
          </QuoteCallout>
        </section>
      )}

      {activeBlock !== "all" && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setActiveBlock("all")}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all cursor-pointer border border-white/10 shadow-sm"
          >
            ← Показать все 12 чанков и руководство
          </button>
        </div>
      )}

      <footer className="article-footer">
        <p>
          Материал входит в образовательный комплекс <strong>English Learn</strong>. Полная матрица времен по Парето доступна в{" "}
          <Link href="/tense-matrix" className="text-cyan-400 font-bold hover:underline">tense-matrix</Link>, база фраз — в{" "}
          <Link href="/learn-chunks" className="text-emerald-400 font-bold hover:underline">learn-chunks</Link>, а плотные сочленения — в{" "}
          <Link href="/dense-structure" className="text-indigo-400 font-bold hover:underline">dense-structure</Link>.
        </p>
        <p style={{ marginTop: "12px", color: "var(--text-dim)" }}>2026 • Plug & Play Tense Chunks Methodology</p>
      </footer>
    </EditorialLayout>
  );
}
