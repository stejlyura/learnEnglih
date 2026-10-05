"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EditorialLayout, ChunkItemRow, MethodCard, QuoteCallout, ChunkResponsiveSelector, ChunkSelectorItem } from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { LongreadSelectorDropdown } from "@/features/longread-selector";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "pareto-concept", title: "01. Лингвистический закон Парето: почему вам не нужны 12 таблиц" },
  { id: "part-1-core", title: "02. ЧАСТЬ 1: Золотые 80% (Ядро ежедневной речи — 7 времен и связок)" },
  { id: "part-2-rare", title: "03. ЧАСТЬ 2: Оставшиеся 20% (Для редких контекстов, отчетов и C1)" },
  { id: "summary-cheat", title: "04. Сводная шпаргалка: Какое время выбрать за 0.2 секунды" },
] as const;

interface CheatItem {
  readonly question: string;
  readonly tense: string;
  readonly example: string;
}

const CHEAT_ITEMS: readonly CheatItem[] = [
  {
    question: "Действие происходит регулярно или это свойство системы?",
    tense: "Present Simple",
    example: "I usually handle [X], while [someone] takes care of [Y]",
  },
  {
    question: "Действие происходит прямо сейчас в эту секунду?",
    tense: "Present Continuous",
    example: "I'm currently working on [X] and looking into [Y]",
  },
  {
    question: "Результат готов к этой минуте (без точной даты в прошлом)?",
    tense: "Present Perfect",
    example: "I've already [V3] [X], so we can [next step]",
  },
  {
    question: "Процесс тянется с утра/со вчера и вы устали?",
    tense: "Present Perfect Continuous",
    example: "We've been dealing with [X] since [time]",
  },
  {
    question: "Действие завершилось в зафиксированный момент прошлого?",
    tense: "Past Simple",
    example: "We decided to [verb] yesterday because [reason]",
  },
  {
    question: "Вас прервали посреди непрерывного процесса?",
    tense: "Past Continuous",
    example: "I was in the middle of [verb-ing] when [event happened]",
  },
  {
    question: "Берете прямое обязательство на себя?",
    tense: "I'll make sure to",
    example: "I'll make sure to [verb] right after [event]",
  },
  {
    question: "План сорвался по независимым внешним причинам?",
    tense: "I was supposed to",
    example: "I was supposed to [verb], but [blocker happened]",
  },
] as const;

const MATRIX_VIEW_ITEMS: readonly ChunkSelectorItem[] = [
  { id: "all", label: "Вся матрица (100%)", icon: "🌐", description: "Все 12 временных форм" },
  { id: "core", label: "Золотые 80% (Ядро)", icon: "🔥", count: 7, description: "Ядро спонтанной речи" },
  { id: "secondary", label: "Редкие 20% (Теория)", icon: "📚", count: 5, description: "Сложные отчеты и C1" },
] as const;

export default function TenseMatrixPage() {
  const [activeTab, setActiveTab] = useState<"all" | "core" | "secondary">("all");

  return (
    <EditorialLayout
      title="Матрица Времен по Принципу Парето: 80% Практики vs 20% Теории"
      metaCategory="Нейролингвистическая матрица глагольных форм"
      readTime="Время чтения: 9 минут"
      badge="Парето 80 / 20"
      badgeColor="primary"
      activeRoute="/tense-matrix"
      lead="Честное разделение всей системы времен английского языка. Сначала — 7 ключевых времен и конструкций со слотами, на которых держится 80% всех рабочих созвонов и переписок. Затем — остальные 20%, нужные только для сложных отчетов и уровня C1."
      infoItems={[
        { label: "Закон Парето", value: "80% речи закрывается 7 ключевыми временами" },
        { label: "Принцип слотов", value: "Каждый чанк по формуле We've been dealing with [X] since [time]" },
        { label: "Формат", value: "Готовые рабочие блоки под ключ с озвучкой" },
      ]}
      topBanner={
        <>
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Библиотека лонгридов</span>
              <span>•</span>
              <span className="text-cyan-400 font-semibold">Всего 9 материалов</span>
            </div>
            <LongreadSelectorDropdown currentSlug="tense-matrix" />
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg my-6">
            <div>
              <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>⚡ Временные Чанки Plug & Play (Базовая теория)</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  12 Разъемов
                </span>
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">
                Изучите принцип жесткой головы и свободного слота перед работой с полной матрицей.
              </div>
            </div>
            <Link
              href="/tense-chunks"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer self-start sm:self-auto"
            >
              <span>Лонгрид Tense Chunks →</span>
            </Link>
          </div>
        </>
      }
    >
      {/* Responsive Matrix Mode Selector: Desktop Horizontal Scroll Rail + Mobile Tactile Icon Dock */}
      <ChunkResponsiveSelector
        items={MATRIX_VIEW_ITEMS}
        activeId={activeTab}
        onSelect={(id) => setActiveTab(id as "all" | "core" | "secondary")}
        title="Режим отображения матрицы"
      />

      {/* Reusable Table of Contents */}
      <TableOfContents items={TOC_ITEMS} />

      {/* SECTION 1: PARETO CONCEPT */}
      <section id="pareto-concept" className="mb-20">
        <h2 className="chapter-heading">01. Лингвистический закон Парето: почему вам не нужны 12 таблиц</h2>

        <p>
          Главная трагедия школьного и вузовского преподавания английского языка — это <strong>принцип искусственной равнозначности</strong>. В таблицах на 12 ячеек время <em>Present Simple</em> нарисовано абсолютно такого же размера, как и <em>Future Perfect Continuous</em>.
        </p>

        <p>
          В результате у человека возникает когнитивное искажение: ему кажется, что он обязан помнить все 12 формул с одинаковой скоростью. Но в реальной жизни носителей языка:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div className="p-6 rounded-2xl bg-emerald-950/25 border border-emerald-500/30 hover:border-emerald-500/50 transition-all shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                🔥 Золотые 80% (7 конструкций)
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Ядро профессиональной речи</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Present Simple, Past Simple, Present Continuous, Present Perfect, Present Perfect Continuous, Past Continuous + взятие ответственности и сорвавшиеся планы.
              </p>
            </div>
            <div className="text-xs text-emerald-300 font-semibold pt-3 mt-4 border-t border-emerald-500/20">
              Результат: 9 из 10 рабочих диалогов на дейликах, созвонах и код-ревью.
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-purple-950/25 border border-purple-500/30 hover:border-purple-500/50 transition-all shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                📚 Оставшиеся 20% (5 времен)
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Периферия и сложные отчеты</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Past Perfect, Past Perfect Continuous, Future Continuous, Future Perfect, Future Perfect Continuous.
              </p>
            </div>
            <div className="text-xs text-purple-300 font-semibold pt-3 mt-4 border-t border-purple-500/20">
              Результат: нужны только при разборе хронологий инцидентов (Post-Mortem) или в формальных C1-докладах.
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: PART 1 - GOLDEN 80% */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {(activeTab === "all" || activeTab === "core") && (
        <section id="part-1-core" className="mt-16 pt-10 border-t border-white/5">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ЧАСТЬ 1 • ЗОЛОТЫЕ 80%
            </span>
          </div>
          <h2 className="chapter-heading">02. Ядро Ежедневной Речи: 7 Времен и Связок со Слотами</h2>

          <p>
            Каждый чанк ниже построен по принципу <strong>жесткая голова + свободный слот в скобках [X]</strong>. Заучивайте их целиком — мозг сам подставит в слот текущую рабочую задачу.
          </p>

          {/* 1. Present Simple */}
          <MethodCard
            badge="80% #1 • Present Simple"
            badgeClass="tier-1"
            subtitle="Регулярные факты, процессы и архитектура"
          >
            <ChunkItemRow
              num="1.1"
              title="I usually handle [X], while [someone] takes care of [Y]"
              trans="«Обычно я отвечаю за [X], в то время как [имя] занимается [Y]»"
              exEn="I usually handle backend deployments, while Alex takes care of the UI."
              exRu="Обычно я отвечаю за бэкенд-деплой, пока Алекс занимается интерфейсом."
              tip="Формула: Subject + V1. Описывает ваши постоянные обязанности."
            />

            <ChunkItemRow
              num="1.2"
              title="Our team runs [event] every [day/week] at [time]"
              trans="«Наша команда проводит [событие] каждый [день] в [время]»"
              exEn="Our team runs daily standups every morning at 10 AM."
              exRu="Наша команда проводит дейлики каждое утро в 10:00."
            />

            <ChunkItemRow
              num="1.3"
              title="It doesn't make sense to [verb]..."
              trans="«Нет никакого смысла [делать что-то]»"
              exEn="It doesn't make sense to refactor this legacy module right before the release."
              exRu="Нет никакого смысла рефакторить этот легаси-модуль прямо перед релизом."
            />
          </MethodCard>

          {/* 2. Past Simple */}
          <MethodCard
            badge="80% #2 • Past Simple"
            badgeClass="tier-1"
            subtitle="Завершенные факты с точной привязкой ко времени"
          >
            <ChunkItemRow
              num="2.1"
              title="We decided to [verb] yesterday because [reason]"
              trans="«Вчера мы решили [сделать X], потому что [причина]»"
              exEn="We decided to postpone the release yesterday because QA found a blocker."
              exRu="Вчера мы решили отложить релиз, потому что тестировщики нашли блокер."
              tip="Формула: Subject + V2 / didn't + V1. Главный маркер — yesterday, last week, ago."
            />

            <ChunkItemRow
              num="2.2"
              title="We released [X] yesterday afternoon without [problem]"
              trans="«Мы зарелизили [X] вчера во второй половине дня без [проблем]»"
              exEn="We released version 2.4 yesterday afternoon without any downtime."
              exRu="Мы зарелизили версию 2.4 вчера днем без единого сбоя."
            />

            <ChunkItemRow
              num="2.3"
              title="Did you get a chance to discuss [X] with [someone] yesterday?"
              trans="«Удалось ли тебе вчера обсудить [X] с [человеком]?»"
              exEn="Did you get a chance to discuss the schema changes with Dmitry yesterday?"
              exRu="Удалось вчера обсудить изменения в схеме с Дмитрием?"
            />
          </MethodCard>

          {/* 3. Present Continuous */}
          <MethodCard
            badge="80% #3 • Present Continuous"
            badgeClass="tier-1"
            subtitle="Процесс прямо сейчас / Временная задача этой недели"
          >
            <ChunkItemRow
              num="3.1"
              title="I'm currently working on [X] and looking into [Y]"
              trans="«Я сейчас как раз пилю [X] и параллельно разбираюсь с [Y]»"
              exEn="I'm currently working on auth middleware and looking into token expiration."
              exRu="Я сейчас как раз пилю мидлвар авторизации и разбираюсь с истечением токенов."
              tip="Формула: am/is/are + V-ing. Главный ответ на вопрос «чем ты сейчас занят?»."
            />

            <ChunkItemRow
              num="3.2"
              title="We're looking into why [component] is [failing/timing out]"
              trans="«Мы прямо сейчас выясняем, почему [компонент] падает / отваливается»"
              exEn="We're looking into why the payment webhook is timing out under heavy load."
              exRu="Мы выясняем, почему платежный вебхук отваливается под высокой нагрузкой."
            />

            <ChunkItemRow
              num="3.3"
              title="Are you still debugging that [X]?"
              trans="«Ты все еще отлаживаешь этот [баг]?»"
              exEn="Are you still debugging that memory leak in the billing worker?"
              exRu="Ты все еще отлаживаешь ту утечку памяти в биллинге?"
            />
          </MethodCard>

          {/* 4. Present Perfect */}
          <MethodCard
            badge="80% #4 • Present Perfect"
            badgeClass="tier-1"
            subtitle="Свежий результат к этой минуте / Отсутствие даты"
          >
            <ChunkItemRow
              num="4.1"
              title="I've already [past participle] [X], so we can [next step]"
              trans="«Я уже сделал [X], так что мы можем переходить к [Y]»"
              exEn="I've already deployed the patch to staging, so we can verify it now."
              exRu="Я уже выкатил патч на стейджинг, так что мы можем сразу его проверить."
              tip="Формула: have/has + V3. Результат важен прямо сейчас, время не имеет значения."
            />

            <ChunkItemRow
              num="4.2"
              title="Have you had a chance to [verb] yet?"
              trans="«У тебя уже была возможность [сделать X]?»"
              exEn="Have you had a chance to review my pull request yet?"
              exRu="У тебя уже получилось глянуть мой пулл-реквест?"
            />

            <ChunkItemRow
              num="4.3"
              title="We haven't received [X] from [someone] yet"
              trans="«Мы пока еще не получили [X] от [кого-то]»"
              exEn="We haven't received the updated API credentials from the client yet."
              exRu="Мы пока еще не получили обновленные ключи API от клиента."
            />
          </MethodCard>

          {/* 5. Present Perfect Continuous */}
          <MethodCard
            badge="80% #5 • Present Perfect Continuous"
            badgeClass="tier-1"
            subtitle="Тянущийся процесс со времени в прошлом"
          >
            <ChunkItemRow
              num="5.1"
              title="We've been dealing with [X] since [time]"
              trans="«Мы воюем с [этой проблемой] еще с [такого-то времени]»"
              exEn="We've been dealing with intermittent 504 timeouts since yesterday's migration."
              exRu="Мы воюем с периодическими 504-ми таймаутами со вчерашней миграции."
              tip="Формула: have/has been + V-ing. Подчеркивает продолжительность и накопившуюся усталость."
            />

            <ChunkItemRow
              num="5.2"
              title="I've been working on [X] all morning without [result]"
              trans="«Я все утро сижу над [X] и пока без [результата]»"
              exEn="I've been working on this race condition all morning without finding the root cause."
              exRu="Я все утро сижу над этой гонкой состояний и пока не нашел первопричину."
            />

            <ChunkItemRow
              num="5.3"
              title="How long have you been seeing [error/issue]?"
              trans="«Как давно у вас воспроизводится [эта ошибка]?»"
              exEn="How long have you been seeing this database connection spike?"
              exRu="Как давно вы наблюдаете этот скачок соединений к базе данных?"
            />
          </MethodCard>

          {/* 6. Past Continuous */}
          <MethodCard
            badge="80% #6 • Past Continuous"
            badgeClass="tier-1"
            subtitle="Прерванное действие / Что происходило в момент сбоя"
          >
            <ChunkItemRow
              num="6.1"
              title="I was in the middle of [verb-ing] when [event happened]"
              trans="«Я был прямо посреди процесса [X], когда произошло [Y]»"
              exEn="I was in the middle of deploying when my team lead pinged me to take another task."
              exRu="Я был прямо посреди деплоя, когда тимлид написал мне с просьбой взять другую задачу."
              tip="Формула: was/were + V-ing. Идеально объясняет прерывание вашей работы."
            />

            <ChunkItemRow
              num="6.2"
              title="I was just about to [verb] when [event happened]"
              trans="«Я как раз собирался [сделать X], когда [произошло Y]»"
              exEn="I was just about to message you when your pull request alert arrived."
              exRu="Я как раз собирался написать тебе, когда прилетел алерт о твоем PR."
            />

            <ChunkItemRow
              num="6.3"
              title="We were looking into [X], but [blocker/priority]"
              trans="«Мы как раз изучали [X], но [вмешался блокер или приоритет]»"
              exEn="We were looking into migrating to GraphQL, but security priorities took over."
              exRu="Мы как раз присматривались к GraphQL, но приоритеты безопасности перевесили."
            />
          </MethodCard>

          {/* 7. Future & Spoken Leftover */}
          <MethodCard
            badge="80% #7 • Обязательства и срывы планов"
            badgeClass="tier-1"
            subtitle="Только то, что реально звучит на митингах"
          >
            <ChunkItemRow
              num="7.1"
              title="I'll make sure to [verb] right after [event]"
              trans="«Я обязательно проконтролирую / сделаю [X] сразу после [события]»"
              exEn="I'll make sure to check the logs right after this standup call."
              exRu="Я обязательно проверю логи сразу после этого дейлика."
              tip="Взятие личной ответственности на митинге без лишней воды."
            />

            <ChunkItemRow
              num="7.2"
              title="I was supposed to [verb], but [blocker happened]"
              trans="«Я должен был [сделать X], но [возник блокер]»"
              exEn="I was supposed to finish this yesterday, but the staging API was completely down."
              exRu="Я должен был закончить это вчера, но стейджинг API лежал."
              tip="Дипломатичное объяснение сорвавшегося плана без чувства вины."
            />

            <ChunkItemRow
              num="7.3"
              title="I'm meeting with [person] tomorrow to [verb]"
              trans="«Я встречаюсь с [человеком] завтра, чтобы [обсудить задачу] (встреча в календаре)»"
              exEn="I'm meeting with the tech lead tomorrow morning to finalize the architecture."
              exRu="Я встречаюсь с техлидом завтра утром, чтобы утвердить архитектуру."
            />
          </MethodCard>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: PART 2 - SECONDARY 20% */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {(activeTab === "all" || activeTab === "secondary") && (
        <section id="part-2-rare" className="mt-14 pt-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
              ЧАСТЬ 2 • ОСТАВШИЕСЯ 20%
            </span>
          </div>
          <h2 className="chapter-heading">03. Периферия и Сложные Контексты (Теория, Post-Mortem и C1)</h2>

          <p>
            Эти конструкции <strong>не нужны для ежедневного общения</strong>. Не заучивайте их наизусть, если еще не автоматизировали ЧАСТЬ 1. Обращайтесь к ним только при написании инцидент-репортов, формальных технических документов или при подготовке к C1-интервью.
          </p>

          {/* 8. Past Perfect */}
          <MethodCard
            badge="20% #1 • Past Perfect (Had + V3)"
            badgeClass="tier-3"
            subtitle="Предпрошедшее: действие случилось ДО другого момента в прошлом"
          >
            <ChunkItemRow
              num="8.1"
              title="By the time [event happened], we had already [past participle] [X]"
              trans="«К тому моменту как [произошло X], мы уже успели [сделать Y]»"
              exEn="By the time the client joined the incident call, we had already resolved the outage."
              exRu="К тому моменту как клиент подключился к созвону, мы уже устранили аварию."
              tip="Используется только для фиксации хронологии: сначала Had Done, потом Did."
            />

            <ChunkItemRow
              num="8.2"
              title="We hadn't noticed [X] until [event happened]"
              trans="«Мы не замечали [X] до тех пор, пока не произошло [Y]»"
              exEn="We hadn't noticed the regression until several enterprise customers complained."
              exRu="Мы не замечали регрессию, пока несколько крупных клиентов не пожаловались."
            />
          </MethodCard>

          {/* 9. Past Perfect Continuous */}
          <MethodCard
            badge="20% #2 • Past Perfect Continuous"
            badgeClass="tier-3"
            subtitle="Длительность до точки в прошлом (причина аварии)"
          >
            <ChunkItemRow
              num="9.1"
              title="We had been [verb-ing] for [duration] before we [event happened]"
              trans="«Мы занимались [этим] на протяжении [стольких месяцев], прежде чем [запустились]»"
              exEn="We had been working on the migration for four months before we finally shipped it."
              exRu="Мы работали над миграцией 4 месяца, прежде чем наконец зарелизили её."
              tip="Формула: had been + V-ing. Классика технических постмортемов."
            />

            <ChunkItemRow
              num="9.2"
              title="The server crashed because it had been [verb-ing] for [time]"
              trans="«Сервер упал, потому что он непрерывно [находился в состоянии X] в течение [дней]»"
              exEn="The container crashed because it had been leaking memory for several days straight."
              exRu="Контейнер упал, потому что из него несколько дней подряд текла память."
            />
          </MethodCard>

          {/* 10. Future Continuous */}
          <MethodCard
            badge="20% #3 • Future Continuous"
            badgeClass="tier-3"
            subtitle="Процесс в конкретный временной интервал будущего"
          >
            <ChunkItemRow
              num="10.1"
              title="I'll be [verb-ing] between [time] and [time]"
              trans="«Я буду плотно заниматься [X] в интервале с [такого-то] до [такого-то часа]»"
              exEn="I'll be monitoring the production logs between 2 PM and 4 PM during the cutover."
              exRu="Я буду мониторить логи прода с 14:00 до 16:00 во время переключения."
              tip="Формула: will be + V-ing. Предупреждение о недоступности."
            />

            <ChunkItemRow
              num="10.2"
              title="Will you be [verb-ing] later today?"
              trans="«Ты будешь [делать X] сегодня по своему графику?» (ультра-вежливый вопрос)"
              exEn="Will you be attending the architecture committee sync later today?"
              exRu="Ты будешь на встрече архитектурного комитета сегодня?"
            />
          </MethodCard>

          {/* 11. Future Perfect */}
          <MethodCard
            badge="20% #4 • Future Perfect (Will have + V3)"
            badgeClass="tier-3"
            subtitle="Результат будет готов строго К дедлайну"
          >
            <ChunkItemRow
              num="11.1"
              title="We will have [past participle] [X] by [deadline]"
              trans="«Мы полностью завершим [X] к [такому-то сроку]»"
              exEn="We will have closed all critical blockers by Friday afternoon."
              exRu="Мы закроем все критические блокеры к вечеру пятницы."
              tip="Главный маркер — предлог BY (к определенному моменту)."
            />

            <ChunkItemRow
              num="11.2"
              title="By the time [event happens], we will have [past participle] [X]"
              trans="«К тому моменту как [произойдет событие], мы уже успеем [сделать X]»"
              exEn="By the time clients log in tomorrow, the database migration will have finished."
              exRu="К моменту как клиенты завтра зайдут, миграция базы уже завершится."
            />
          </MethodCard>

          {/* 12. Future Perfect Continuous */}
          <MethodCard
            badge="20% #5 • Future Perfect Continuous"
            badgeClass="tier-3"
            subtitle="Подсчет стажа / непрерывной длительности к будущей дате"
          >
            <ChunkItemRow
              num="12.1"
              title="By [date], I will have been [verb-ing] for [duration]"
              trans="«К [дате] исполнится ровно [столько-то лет], как я [работаю здесь]»"
              exEn="By next November, I will have been working at this company for exactly five years."
              exRu="В следующем ноябре исполнится ровно пять лет, как я работаю в этой компании."
              tip="Редкая форма. Используется для юбилеев и годовщин проектов."
            />
          </MethodCard>

          {/* 13. Used To & Mixed Conditionals */}
          <MethodCard
            badge="20% #6 • Привычки прошлого и Смешанные условия"
            badgeClass="tier-3"
            subtitle="Архитектурные сопоставления и сослагательность"
          >
            <ChunkItemRow
              num="13.1"
              title="We used to [verb], but now we [verb]"
              trans="«Раньше мы обычно [делали так], а теперь [делаем иначе]»"
              exEn="We used to manage our own bare-metal servers, but now we run everything on AWS."
              exRu="Раньше мы сами обслуживали железные сервера, а теперь крутим всё в AWS."
              tip="Used to — только то, что полностью закончилось и больше не происходит."
            />

            <ChunkItemRow
              num="13.2"
              title="If we had [past participle] [X], we wouldn't [verb] now"
              trans="«Если бы мы [сделали X в прошлом], сейчас мы бы не [мучились с Y]»"
              exEn="If we had run end-to-end tests earlier, we wouldn't be troubleshooting in production now."
              exRu="Если бы мы прогнали сквозные тесты раньше, сейчас мы бы не дебажили на проде."
              tip="Запрет WOULD в If-части! Условие в прошлом = had + V3."
            />
          </MethodCard>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 4: SUMMARY CHEAT SHEET */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="summary-cheat" className="mt-14 pt-8">
        <h2 className="chapter-heading">04. Сводная Шпаргалка: Как Выбрать Время за 0.2 Секунды</h2>

        <p>
          Вместо того чтобы держать в голове всю таблицу, задайте себе <strong>один вопрос</strong>:
        </p>

        <div className="space-y-3.5 my-8">
          {CHEAT_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-3.5 shadow-sm"
            >
              <div className="flex items-start gap-3.5">
                <span className="text-emerald-400 font-bold font-mono text-sm px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                  0{idx + 1}.
                </span>
                <div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {item.question}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-1">
                    Пример: <span className="text-slate-300">{item.example}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 pl-11 md:pl-0">
                <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs sm:text-sm font-bold font-mono">
                  ➔ {item.tense}
                </span>
              </div>
            </div>
          ))}
        </div>

        <QuoteCallout cite="Принцип Парето в SLA-методологии">
          «Сконцентрируйтесь только на ЧАСТИ 1. Автоматизируйте 7 золотых конструкций до автоматизма — и ваш английский на созвонах станет звучать чище, чем у 80% коллег».
        </QuoteCallout>
      </section>

      {/* Footer Navigation */}
      <footer className="article-footer">
        <p>
          Материал входит в образовательный комплекс <strong>English Learn</strong>. Ознакомьтесь с базовой теорией в{" "}
          <Link href="/tense-chunks" className="text-cyan-400 font-bold hover:underline">tense-chunks</Link>, картотекой фраз в{" "}
          <Link href="/learn-chunks" className="text-emerald-400 font-bold hover:underline">learn-chunks</Link>, и персональными антидотами в{" "}
          <Link href="/audit-chunks" className="text-rose-400 font-bold hover:underline">audit-chunks</Link>.
        </p>
        <p style={{ marginTop: "12px", color: "var(--text-dim)" }}>2026 • Pareto 80/20 Tense Matrix</p>
      </footer>
    </EditorialLayout>
  );
}
