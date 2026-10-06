"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EditorialLayout, ChunkItemRow, MethodCard, QuoteCallout, ChunkResponsiveSelector, ChunkSelectorItem } from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { LongreadSelectorDropdown } from "@/features/longread-selector";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "pareto-concept", title: "01. Лингвистический закон Парето: почему вам не нужны 12 таблиц" },
  { id: "part-1-core", title: "02. ЧАСТЬ 1: Золотые 80% (Ядро ежедневной речи — 7 времен и связок)" },
  { id: "part-2-rare", title: "03. ЧАСТЬ 2: Оставшиеся 20% (Для сложных переговоров, отчетов и C1)" },
  { id: "summary-cheat", title: "04. Сводная шпаргалка: Какое время выбрать за 0.2 секунды" },
] as const;

interface CheatItem {
  readonly question: string;
  readonly tense: string;
  readonly example: string;
}

const CHEAT_ITEMS: readonly CheatItem[] = [
  {
    question: "Действие происходит регулярно или это регламент продаж?",
    tense: "Present Simple",
    example: "I usually handle [enterprise accounts], while [Sarah] takes care of [inbound leads]",
  },
  {
    question: "Активные переговоры или сделка прямо сейчас на этой неделе?",
    tense: "Present Continuous",
    example: "I'm currently negotiating [contract terms] and addressing [pricing objections]",
  },
  {
    question: "Результат готов к этой минуте (отправлено КП, утверждена скидка)?",
    tense: "Present Perfect",
    example: "I've already [sent over the quote], so we can [schedule the demo]",
  },
  {
    question: "Переговоры или отработка возражения тянутся давно?",
    tense: "Present Perfect Continuous",
    example: "We've been dealing with [budget freeze pushback] since [last quarter]",
  },
  {
    question: "Сделка закрыта или решение принято в зафиксированный момент прошлого?",
    tense: "Past Simple",
    example: "The client signed [the agreement] yesterday because [we offered free onboarding]",
  },
  {
    question: "Вас прервали посреди презентации или разбора тарифов?",
    tense: "Past Continuous",
    example: "I was in the middle of [presenting the pricing tiers] when [their VP joined]",
  },
  {
    question: "Берете прямое обязательство перед клиентом или руководителем?",
    tense: "I'll make sure to",
    example: "I'll make sure to [send the revised SOW] right after [this call]",
  },
  {
    question: "Сроки сделки сдвинулись по независящим от вас причинам?",
    tense: "I was supposed to",
    example: "I was supposed to [close the deal yesterday], but [their CFO requested a security audit]",
  },
] as const;

const MATRIX_VIEW_ITEMS: readonly ChunkSelectorItem[] = [
  { id: "all", label: "Вся матрица (100%)", icon: "🌐", description: "Все 12 временных форм" },
  { id: "core", label: "Золотые 80% (Ядро)", icon: "🔥", count: 7, description: "Ядро спонтанной речи" },
  { id: "secondary", label: "Редкие 20% (Теория)", icon: "📚", count: 5, description: "Сложные переговоры и C1" },
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
      lead="Честное разделение всей системы времен английского языка для продаж. Сначала — 7 ключевых времен и конструкций со слотами, на которых держится 80% всех переговоров с клиентами, демо и планерок. Затем — остальные 20%, нужные для многоступенчатых тендеров и уровня C1."
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
          Главная трагедия традиционного преподавания английского языка — это <strong>принцип искусственной равнозначности</strong>. В таблицах на 12 ячеек время <em>Present Simple</em> нарисовано абсолютно такого же размера, как и <em>Future Perfect Continuous</em>.
        </p>

        <p>
          Студент тратит одинаковое количество часов на заучивание времен, которые носители используют тысячи раз в день, и конструкций, которые встречаются раз в три месяца. В реальных бизнес-переговорах распределение частотности драматически асимметрично:
        </p>

        <QuoteCallout cite="Корпусные исследования B2B Business English (COCA, BNC, Enron Corpus)">
          «Более 83.4% всех спонтанных высказываний в бизнес-коммуникациях и переговорах обслуживаются всего 5 базовыми видовременными формами и 2 модально-аспектуальными конструкциями обязательств».
        </QuoteCallout>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <div className="p-6 rounded-2xl bg-emerald-950/25 border border-emerald-500/30 hover:border-emerald-500/50 transition-all shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ⭐ Золотые 80% (7 времен и связок)
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Ядро профессиональной речи</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Present Simple, Past Simple, Present Continuous, Present Perfect, Present Perfect Continuous, Past Continuous + взятие ответственности и сорвавшиеся планы.
              </p>
            </div>
            <div className="text-xs text-emerald-300 font-semibold pt-3 mt-4 border-t border-emerald-500/20">
              Результат: 9 из 10 диалогов на встречах, созвонах с клиентами, демо и закрытии сделок.
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-purple-950/25 border border-purple-500/30 hover:border-purple-500/50 transition-all shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                📚 Оставшиеся 20% (5 времен)
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Периферия и сложные тендеры</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Past Perfect, Past Perfect Continuous, Future Continuous, Future Perfect, Future Perfect Continuous.
              </p>
            </div>
            <div className="text-xs text-purple-300 font-semibold pt-3 mt-4 border-t border-purple-500/20">
              Результат: нужны при разборе хронологии сорвавшихся тендеров или в формальных C1-докладах для инвесторов.
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
            Каждый чанк ниже построен по принципу <strong>жесткая голова + свободный слот в скобках [X]</strong>. Заучивайте их целиком — мозг сам подставит в слот текущую переговорную задачу.
          </p>

          {/* 1. Present Simple */}
          <MethodCard
            badge="80% #1 • Present Simple"
            badgeClass="tier-1"
            subtitle="Регулярные процессы продаж, воронка и регламенты"
          >
            <ChunkItemRow
              num="1.1"
              title="I usually handle [X], while [someone] takes care of [Y]"
              trans="«Обычно я отвечаю за [X], в то время как [имя] занимается [Y]»"
              exEn="I usually handle enterprise accounts, while Sarah takes care of inbound qualification."
              exRu="Обычно я веду корпоративные сделки, пока Сара отвечает за квалификацию входящих лидов."
              tip="Формула: Subject + V1. Описывает распределение зон ответственности в отделе продаж."
            />

            <ChunkItemRow
              num="1.2"
              title="Our sales team runs [event] every [day/week] at [time]"
              trans="«Наша команда проводит [событие] каждый [день] в [время]»"
              exEn="Our sales team runs weekly pipeline reviews every Monday at 10 AM."
              exRu="Наш отдел продаж проводит ревью воронки каждый понедельник в 10:00."
            />

            <ChunkItemRow
              num="1.3"
              title="It doesn't make sense to [verb]..."
              trans="«Нет никакого смысла [делать что-то]»"
              exEn="It doesn't make sense to pitch advanced features before qualifying the prospect's budget."
              exRu="Нет никакого смысла презентовать сложные фичи до квалификации бюджета клиента."
            />
          </MethodCard>

          {/* 2. Past Simple */}
          <MethodCard
            badge="80% #2 • Past Simple"
            badgeClass="tier-1"
            subtitle="Завершенные этапы сделки с точной привязкой ко времени"
          >
            <ChunkItemRow
              num="2.1"
              title="We decided to [verb] yesterday because [reason]"
              trans="«Вчера мы решили [сделать X], потому что [причина]»"
              exEn="We decided to offer a 15% discount yesterday because the prospect committed to an annual contract."
              exRu="Вчера мы решили предоставить скидку 15%, потому что клиент согласился на годовой контракт."
              tip="Формула: Subject + V2 / didn't + V1. Главный маркер — yesterday, last week, ago."
            />

            <ChunkItemRow
              num="2.2"
              title="We closed [X] yesterday afternoon without [problem]"
              trans="«Мы закрыли [сделку] вчера днем без [уступок]»"
              exEn="We closed the enterprise deal yesterday afternoon without any concessions on payment terms."
              exRu="Мы закрыли корпоративную сделку вчера днем без единой уступки по условиям оплаты."
            />

            <ChunkItemRow
              num="2.3"
              title="Did you get a chance to discuss [X] with [someone] yesterday?"
              trans="«Удалось ли тебе вчера обсудить [договор/цену] с [клиентом]?»"
              exEn="Did you get a chance to discuss the Master Services Agreement with their legal counsel yesterday?"
              exRu="Удалось вчера обсудить рамочный договор с их юристом?"
            />
          </MethodCard>

          {/* 3. Present Continuous */}
          <MethodCard
            badge="80% #3 • Present Continuous"
            badgeClass="tier-1"
            subtitle="Активные переговоры прямо сейчас / Сделка этой недели"
          >
            <ChunkItemRow
              num="3.1"
              title="I'm currently working on [X] and looking into [Y]"
              trans="«Я сейчас как раз прорабатываю [X] и параллельно разбираюсь с [Y]»"
              exEn="I'm currently reviewing the customer's redlines on our Master Services Agreement."
              exRu="Я сейчас как раз разбираю правки клиента в нашем договоре."
              tip="Формула: am/is/are + V-ing. Главный ответ на вопрос руководителя «Над чем ты сейчас работаешь?»."
            />

            <ChunkItemRow
              num="3.2"
              title="We're looking into why [metric] is [dropping/slowing down]"
              trans="«Мы прямо сейчас выясняем, почему [метрика] падает / снижается»"
              exEn="We're looking into why inbound lead conversion dropped during the last campaign."
              exRu="Мы прямо сейчас выясняем, почему упала конверсия входящих лидов в прошлой кампании."
            />

            <ChunkItemRow
              num="3.3"
              title="Are you still negotiating [X] with that [prospect]?"
              trans="«Ты все еще ведешь переговоры по [вопросу] с тем [клиентом]?»"
              exEn="Are you still negotiating customized payment terms with that fintech prospect?"
              exRu="Ты все еще ведешь переговоры по индивидуальным условиям оплаты с тем финтех-клиентом?"
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
              exEn="I've already sent over the revised proposal with custom pricing, so we can schedule the executive review now."
              exRu="Я уже отправил обновленное КП со спецценой, так что мы можем назначать финальную встречу."
              tip="Формула: have/has + V3. Результат важен прямо сейчас, время не имеет значения."
            />

            <ChunkItemRow
              num="4.2"
              title="Have you had a chance to [verb] yet?"
              trans="«У тебя уже была возможность [ознакомиться с офером]?»"
              exEn="Have you had a chance to review the terms of the Master Services Agreement yet?"
              exRu="У вас уже была возможность ознакомиться с условиями договора (MSA)?"
            />

            <ChunkItemRow
              num="4.3"
              title="We haven't received [X] from [someone] yet"
              trans="«Мы пока еще не получили [подтверждение] от [клиента]»"
              exEn="We haven't received the final sign-off from their CFO yet, so let's hold off on onboarding."
              exRu="Мы пока не получили финального подтверждения от их финдиректора, так что придержим старт онбординга."
            />
          </MethodCard>

          {/* 5. Present Perfect Continuous */}
          <MethodCard
            badge="80% #5 • Present Perfect Continuous"
            badgeClass="tier-1"
            subtitle="Тянущиеся переговоры или возражение со времени в прошлом"
          >
            <ChunkItemRow
              num="5.1"
              title="We've been dealing with [X] since [time]"
              trans="«Мы работаем с [этим возражением] еще с [такого-то времени]»"
              exEn="We've been dealing with budget freeze pushback on this account since last quarter."
              exRu="Мы отрабатываем возражение о заморозке бюджетов по этой сделке еще с прошлого квартала."
              tip="Формула: have/has been + V-ing. Подчеркивает затянувшийся цикл сделки."
            />

            <ChunkItemRow
              num="5.2"
              title="I've been working on [X] all morning without [result]"
              trans="«Я все утро сижу над [презентацией] и пока без [результата]»"
              exEn="I've been working on tailoring the enterprise pitch deck all morning without finding their key decision maker."
              exRu="Я всё утро кастомизирую корпоративную презентацию, пока не найдя их реального ЛПР."
            />

            <ChunkItemRow
              num="5.3"
              title="How long have you been dealing with [pain point]?"
              trans="«Как давно вы сталкиваетесь с [этой неэффективностью]?»"
              exEn="How long have you been dealing with this drop in pipeline conversion?"
              exRu="Как давно вы наблюдаете этот спад конверсии в вашей воронке продаж?"
            />
          </MethodCard>

          {/* 6. Past Continuous */}
          <MethodCard
            badge="80% #6 • Past Continuous"
            badgeClass="tier-1"
            subtitle="Прерванное действие / Что происходило в момент подключения ЛПР"
          >
            <ChunkItemRow
              num="6.1"
              title="I was in the middle of [verb-ing] when [event happened]"
              trans="«Я был прямо посреди процесса [X], когда произошло [Y]»"
              exEn="I was in the middle of presenting the pricing tiers when their VP of Operations joined the call."
              exRu="Я был прямо посреди разбора тарифных планов, когда к созвону подключился их вице-президент по операциям."
              tip="Формула: was/were + V-ing. Идеально объясняет прерывание вашей мысли на созвоне."
            />

            <ChunkItemRow
              num="6.2"
              title="I was just about to [verb] when [event happened]"
              trans="«Я как раз собирался [сделать X], когда [произошло Y]»"
              exEn="I was just about to follow up with the lead when their procurement officer sent the signed contract."
              exRu="Я как раз собирался написать лиду, когда их специалист по закупкам прислал подписанный договор."
            />

            <ChunkItemRow
              num="6.3"
              title="We were looking into [X], but [blocker/priority]"
              trans="«Мы как раз изучали [условия], но [клиент утвердил стандартный вариант]»"
              exEn="We were looking into custom SLA terms, but their legal counsel approved our standard Master Services Agreement."
              exRu="Мы как раз прорабатывали индивидуальный SLA, но их юрист утвердил наш типовой договор."
            />
          </MethodCard>

          {/* 7. Future & Spoken Leftover */}
          <MethodCard
            badge="80% #7 • Обязательства и срывы планов"
            badgeClass="tier-1"
            subtitle="Только то, что реально звучит на переговорах"
          >
            <ChunkItemRow
              num="7.1"
              title="I'll make sure to [verb] right after [event]"
              trans="«Я обязательно проконтролирую / отправлю [документы] сразу после [события]»"
              exEn="I'll make sure to email the revised quote and onboarding timeline right after this call."
              exRu="Я обязательно отправлю обновленный расчет цен и график внедрения сразу после созвона."
              tip="Взятие личной ответственности на переговорах без лишней воды."
            />

            <ChunkItemRow
              num="7.2"
              title="I was supposed to [verb], but [blocker happened]"
              trans="«Я должен был [закрыть сделку вчера], но [возник блокер]»"
              exEn="I was supposed to close this enterprise account yesterday, but their CFO requested an additional security audit."
              exRu="Я должен был закрыть этого корпоративного клиента вчера, но их финдиректор запросил дополнительный аудит безопасности."
              tip="Дипломатичное объяснение сдвига сроков закрытия без чувства вины."
            />

            <ChunkItemRow
              num="7.3"
              title="I'm meeting with [person] tomorrow to [verb]"
              trans="«Я встречаюсь с [клиентом] завтра, чтобы [зафиксировать условия]»"
              exEn="I'm meeting with their economic buyer tomorrow morning to finalize contract pricing."
              exRu="Я встречаюсь с их лицом, распоряжающимся бюджетом, завтра утром, чтобы зафиксировать стоимость контракта."
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
          <h2 className="chapter-heading">03. Периферия и Сложные Контексты (Тендеры, Анализ Потерь и C1)</h2>

          <p>
            Эти конструкции <strong>не нужны для ежедневного общения</strong>. Не заучивайте их наизусть, если еще не автоматизировали ЧАСТЬ 1. Обращайтесь к ним только при разборе проигранных тендеров (Deal Loss Analysis), подготовке официальных коммерческих предложений для совета директоров или на C1-собеседованиях.
          </p>

          {/* 8. Past Perfect */}
          <MethodCard
            badge="20% #1 • Past Perfect (Had + V3)"
            badgeClass="tier-3"
            subtitle="Предпрошедшее: действие случилось ДО другого момента в переговорах"
          >
            <ChunkItemRow
              num="8.1"
              title="By the time [event happened], we had already [past participle] [X]"
              trans="«К тому моменту как [произошло X], мы уже успели [доказать ROI]»"
              exEn="By the time their procurement team requested a price breakdown, we had already demonstrated clear ROI to their executive board."
              exRu="К тому моменту как отдел закупок запросил детализацию цены, мы уже доказали окупаемость совету директоров."
              tip="Используется только для фиксации хронологии: сначала Had Done, потом Did."
            />

            <ChunkItemRow
              num="8.2"
              title="We hadn't noticed [X] until [event happened]"
              trans="«Мы не знали, что [конкурент повторил КП], пока не [произошло событие]»"
              exEn="We hadn't realized that the competitor had matched our quote until their procurement officer called us."
              exRu="Мы не знали, что конкурент повторил наше ценовое предложение, пока нам не позвонил их специалист по закупкам."
            />
          </MethodCard>

          {/* 9. Past Perfect Continuous */}
          <MethodCard
            badge="20% #2 • Past Perfect Continuous"
            badgeClass="tier-3"
            subtitle="Длительность до точки в прошлом (причина затягивания сделки)"
          >
            <ChunkItemRow
              num="9.1"
              title="We had been [verb-ing] for [duration] before we [event happened]"
              trans="«Мы вели [клиента] на протяжении [стольких месяцев], прежде чем [вышли на тендер]»"
              exEn="We had been nurturing that prospective account for eight months before they finally issued the RFP."
              exRu="Мы прогревали этого потенциального клиента восемь месяцев, прежде чем они наконец объявили тендер."
              tip="Формула: had been + V-ing. Классика ретроспективы сложных корпоративных продаж."
            />

            <ChunkItemRow
              num="9.2"
              title="The deal stalled because [competitor] had been [verb-ing] for [time]"
              trans="«Сделка зависла, потому что [конкурент демпинговал цены] в течение [недель]»"
              exEn="The deal stalled because our competitor had been offering aggressive price dumping for several weeks."
              exRu="Сделка зависла, потому что конкурент несколько недель подряд агрессивно демпинговал цены."
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
              trans="«Я буду проводить [демо] в интервале с [такого-то] до [такого-то часа]»"
              exEn="I'll be conducting product demonstrations between 2 PM and 5 PM tomorrow."
              exRu="Я буду проводить демонстрации продукта завтра с 14:00 до 17:00."
              tip="Формула: will be + V-ing. Предупреждение о занятости на клиентских встречах."
            />

            <ChunkItemRow
              num="10.2"
              title="Will you be [verb-ing] later today?"
              trans="«Вы будете [презентовать кейс] сегодня по графику?» (ультра-вежливый вопрос клиенту)"
              exEn="Will you be presenting our business case to the buying committee later today?"
              exRu="Вы будете сегодня презентовать наше бизнес-обоснование закупочному комитету?"
            />
          </MethodCard>

          {/* 11. Future Perfect */}
          <MethodCard
            badge="20% #4 • Future Perfect (Will have + V3)"
            badgeClass="tier-3"
            subtitle="Результат будет готов строго К дедлайну / К концу квартала"
          >
            <ChunkItemRow
              num="11.1"
              title="We will have [past participle] [X] by [deadline]"
              trans="«Мы полностью выполним [план по выручке] к [такому-то сроку]»"
              exEn="We will have exceeded our quarterly revenue quota by the end of this month."
              exRu="Мы перевыполним наш квартальный план по выручке к концу этого месяца."
              tip="Главный маркер — предлог BY (к определенному моменту закрытия периода)."
            />

            <ChunkItemRow
              num="11.2"
              title="By the time [event happens], we will have [past participle] [X]"
              trans="«К тому моменту как [начнется новый финансовый год], мы уже успеем [продлить контракт]»"
              exEn="By the time the new fiscal year begins, we will have closed the contract renewal."
              exRu="К моменту начала нового финансового года мы уже закроем продление контракта."
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
              trans="«К [дате] исполнится ровно [столько-то лет], как я [веду ключевых клиентов]»"
              exEn="By next quarter, our account executive will have been managing top enterprise accounts for five straight years."
              exRu="К следующему кварталу наш ведущий менеджер по продажам будет вести ключевых корпоративных клиентов уже ровно пять лет подряд."
              tip="Редкая форма. Используется для подчеркивания экспертного стажа сейлза."
            />
          </MethodCard>

          {/* 13. Used To & Mixed Conditionals */}
          <MethodCard
            badge="20% #6 • Стратегические сопоставления и Смешанные условия"
            badgeClass="tier-3"
            subtitle="Эволюция подходов к продажам и отработка ошибок"
          >
            <ChunkItemRow
              num="13.1"
              title="We used to [verb], but now we [verb]"
              trans="«Раньше мы обычно [делали холодные рассылки], а теперь [закрываем сделки через Social Selling]»"
              exEn="We used to rely purely on cold email outreach, but now our sales reps close deals through multi-channel social selling."
              exRu="Раньше мы полагались исключительно на холодные рассылки, а теперь наши менеджеры закрывают сделки через мультиканальные продажи."
              tip="Used to — только то, что полностью закончилось в методике продаж."
            />

            <ChunkItemRow
              num="13.2"
              title="If we had [past participle] [X], we wouldn't [verb] now"
              trans="«Если бы мы [квалифицировали бюджет на первом звонке], сейчас мы бы не [спорили о скидках]»"
              exEn="If we had qualified their budget during the first discovery call, we wouldn't be renegotiating discounts now."
              exRu="Если бы мы квалифицировали их бюджет на первом созвоне, сейчас нам бы не пришлось пересогласовывать скидки."
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
              <div className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-white/10 text-cyan-300 border border-white/10 self-start md:self-auto shrink-0">
                {item.tense}
              </div>
            </div>
          ))}
        </div>

        <QuoteCallout cite="Правило Сейлз-Автоматизма">
          «Не вычисляйте формулы. Свяжите каждую переговорную ситуацию с одним готовым каркасом. Когда клиент задает неожиданный вопрос или просит скидку, нужный глагольный блок должен вылетать за 0.2 секунды на полном автопилоте».
        </QuoteCallout>
      </section>

      <footer className="article-footer">
        <p>
          Материал входит в образовательный комплекс <strong>English Learn</strong>. Практика блочного переключения доступна в{" "}
          <Link href="/tense-chunks" className="text-emerald-400 font-bold hover:underline">tense-chunks</Link>, база 100+ фраз — в{" "}
          <Link href="/learn-chunks" className="text-cyan-400 font-bold hover:underline">learn-chunks</Link>, а персональные антидоты — в{" "}
          <Link href="/audit-chunks" className="text-rose-400 font-bold hover:underline">audit-chunks</Link>.
        </p>
        <p style={{ marginTop: "12px", color: "var(--text-dim)" }}>2026 • English Learn Tense Matrix Methodology</p>
      </footer>
    </EditorialLayout>
  );
}
