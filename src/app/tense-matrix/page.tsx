"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EditorialLayout, ChunkItemRow } from "@/shared/ui";

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
        { label: "Принцип слотов", value: "Каждый чанк по формуле We&apos;ve been dealing with [X] since [time]" },
        { label: "Формат", value: "Готовые рабочие блоки под ключ с озвучкой" },
      ]}
    >

        {/* Quick View Filter Switcher */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900 border border-indigo-500/30 flex flex-wrap items-center justify-between gap-3 my-6">
          <div className="text-xs sm:text-sm font-semibold text-slate-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Фильтр просмотра матрицы:</span>
          </div>

          <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Вся матрица (100%)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("core")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "core"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🔥 Золотые 80% (Ядро)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("secondary")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "secondary"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📚 Редкие 20% (Теория)
            </button>
          </div>
        </div>

        <nav className="toc-box">
          <div className="toc-title">Содержание матрицы</div>
          <ul className="toc-list">
            <li>
              <a href="#pareto-concept">
                <span className="toc-num">01.</span> Лингвистический закон Парето: почему вам не нужны 12 таблиц
              </a>
            </li>
            <li>
              <a href="#part-1-core">
                <span className="toc-num">02.</span> ЧАСТЬ 1: Золотые 80% (Ядро ежедневной речи — 7 времен и связок)
              </a>
            </li>
            <li>
              <a href="#part-2-rare">
                <span className="toc-num">03.</span> ЧАСТЬ 2: Оставшиеся 20% (Для редких контекстов, отчетов и C1)
              </a>
            </li>
            <li>
              <a href="#summary-cheat">
                <span className="toc-num">04.</span> Сводная шпаргалка: Какое время выбрать за 0.2 секунды
              </a>
            </li>
          </ul>
        </nav>

        {/* SECTION 1: PARETO CONCEPT */}
        <section id="pareto-concept">
          <h2 className="chapter-heading">01. Лингвистический закон Парето: почему вам не нужны 12 таблиц</h2>

          <p>
            Главная трагедия школьного и вузовского преподавания английского языка — это <strong>принцип искусственной равнозначности</strong>. В таблицах на 12 ячеек время <em>Present Simple</em> нарисовано абсолютно такого же размера, как и <em>Future Perfect Continuous</em>.
          </p>

          <p>
            В результате у человека возникает когнитивное искажение: ему кажется, что он обязан помнить все 12 формул с одинаковой скоростью. Но в реальной жизни носителей языка:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                🔥 Золотые 80% (7 конструкций)
              </div>
              <div className="text-base font-bold text-white mb-2">Ядро профессиональной речи</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Present Simple, Past Simple, Present Continuous, Present Perfect, Present Perfect Continuous, Past Continuous + взятие ответственности и сорвавшиеся планы. В них происходит <strong>9 из 10 диалогов</strong> на дейликах и созвонах.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30">
              <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
                📚 Оставшиеся 20% (5 времен)
              </div>
              <div className="text-base font-bold text-white mb-2">Периферия и сложные отчеты</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Past Perfect, Past Perfect Continuous, Future Continuous, Future Perfect, Future Perfect Continuous. Нужны только при разборе длинных хронологий инцидентов (Post-Mortem) или в формальных C1-докладах.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SECTION 2: PART 1 - GOLDEN 80% */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {(activeTab === "all" || activeTab === "core") && (
          <section id="part-1-core" className="pt-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ЧАСТЬ 1 • ЗОЛОТЫЕ 80%
              </span>
            </div>
            <h2 className="chapter-heading">02. Ядро Ежедневной Речи: 7 Времен и Связок со Слотами</h2>

            <p>
              Каждый чанк ниже построен по принципу <strong>жесткая голова + свободный слот в скобках [X]</strong>. Заучивайте их целиком — мозг сам подставит в слот текущую рабочую задачу.
            </p>

            {/* 1. Present Simple */}
            <div className="method-card">
              <div className="method-card-header">
                <span className="block-badge" style={{ background: "rgba(16, 185, 129, 0.2)", borderColor: "rgba(16, 185, 129, 0.4)", color: "#6EE7B7" }}>
                  80% #1 • Present Simple
                </span>
                <span style={{ fontWeight: 700, color: "#FFF" }}>Регулярные факты, процессы и архитектура</span>
              </div>

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
            </div>

            {/* 2. Past Simple */}
            <div className="method-card">
              <div className="method-card-header">
                <span className="block-badge" style={{ background: "rgba(16, 185, 129, 0.2)", borderColor: "rgba(16, 185, 129, 0.4)", color: "#6EE7B7" }}>
                  80% #2 • Past Simple
                </span>
                <span style={{ fontWeight: 700, color: "#FFF" }}>Завершенные факты с точной привязкой ко времени</span>
              </div>

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
            </div>

            {/* 3. Present Continuous */}
            <div className="method-card">
              <div className="method-card-header">
                <span className="block-badge" style={{ background: "rgba(16, 185, 129, 0.2)", borderColor: "rgba(16, 185, 129, 0.4)", color: "#6EE7B7" }}>
                  80% #3 • Present Continuous
                </span>
                <span style={{ fontWeight: 700, color: "#FFF" }}>Процесс прямо сейчас / Временная задача этой недели</span>
              </div>

              <ChunkItemRow
                num="3.1"
                title="I&apos;m currently working on [X] and looking into [Y]"
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
            </div>

            {/* 4. Present Perfect */}
            <div className="method-card">
              <div className="method-card-header">
                <span className="block-badge" style={{ background: "rgba(16, 185, 129, 0.2)", borderColor: "rgba(16, 185, 129, 0.4)", color: "#6EE7B7" }}>
                  80% #4 • Present Perfect
                </span>
                <span style={{ fontWeight: 700, color: "#FFF" }}>Свежий результат к этой минуте / Отсутствие даты</span>
              </div>

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
            </div>

            {/* 5. Present Perfect Continuous */}
            <div className="method-card">
              <div className="method-card-header">
                <span className="block-badge" style={{ background: "rgba(16, 185, 129, 0.2)", borderColor: "rgba(16, 185, 129, 0.4)", color: "#6EE7B7" }}>
                  80% #5 • Present Perfect Continuous
                </span>
                <span style={{ fontWeight: 700, color: "#FFF" }}>Тянущийся процесс со времени в прошлом</span>
              </div>

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
            </div>

            {/* 6. Past Continuous */}
            <div className="method-card">
              <div className="method-card-header">
                <span className="block-badge" style={{ background: "rgba(16, 185, 129, 0.2)", borderColor: "rgba(16, 185, 129, 0.4)", color: "#6EE7B7" }}>
                  80% #6 • Past Continuous
                </span>
                <span style={{ fontWeight: 700, color: "#FFF" }}>Прерванное действие / Что происходило в момент сбоя</span>
              </div>

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
            </div>

            {/* 7. Future & Spoken Leftover */}
            <div className="method-card">
              <div className="method-card-header">
                <span className="block-badge" style={{ background: "rgba(16, 185, 129, 0.2)", borderColor: "rgba(16, 185, 129, 0.4)", color: "#6EE7B7" }}>
                  80% #7 • Обязательства и срывы планов
                </span>
                <span style={{ fontWeight: 700, color: "#FFF" }}>Только то, что реально звучит на митингах</span>
              </div>

              <ChunkItemRow
                num="7.1"
                title="I&apos;ll make sure to [verb] right after [event]"
                trans="«Я обязательно проконтролирую / сделаю [X] сразу после [события]»"
                exEn="I&apos;ll make sure to check the logs right after this standup call."
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
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SECTION 3: PART 2 - SECONDARY 20% */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {(activeTab === "all" || activeTab === "secondary") && (
          <section id="part-2-rare" className="pt-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                ЧАСТЬ 2 • ОСТАВШИЕСЯ 20%
              </span>
            </div>
            <h2 className="chapter-heading">03. Периферия и Сложные Контексты (Теория, Post-Mortem и C1)</h2>

            <p>
              Эти конструкции <strong>не нужны для ежедневного общения</strong>. Не заучивайте их наизусть, если еще не автоматизировали ЧАСТЬ 1. Обращайтесь к ним только при написании инцидент-репортов, формальных технических документов или при подготовке к C1-интервью.
            </p>

            {/* 8. Past Perfect */}
            <div className="method-card">
              <div className="method-card-header">
                <span className="block-badge" style={{ background: "rgba(168, 85, 247, 0.2)", borderColor: "rgba(168, 85, 247, 0.4)", color: "#D8B4FE" }}>
                  20% #1 • Past Perfect (Had + V3)
                </span>
                <span style={{ fontWeight: 700, color: "#FFF" }}>Предпрошедшее: действие случилось ДО другого момента в прошлом</span>
              </div>

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
            </div>

            {/* 9. Past Perfect Continuous */}
            <div className="method-card">
              <div className="method-card-header">
                <span className="block-badge" style={{ background: "rgba(168, 85, 247, 0.2)", borderColor: "rgba(168, 85, 247, 0.4)", color: "#D8B4FE" }}>
                  20% #2 • Past Perfect Continuous
                </span>
                <span style={{ fontWeight: 700, color: "#FFF" }}>Длительность до точки в прошлом (причина аварии)</span>
              </div>

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
            </div>

            {/* 10. Future Continuous */}
            <div className="method-card">
              <div className="method-card-header">
                <span className="block-badge" style={{ background: "rgba(168, 85, 247, 0.2)", borderColor: "rgba(168, 85, 247, 0.4)", color: "#D8B4FE" }}>
                  20% #3 • Future Continuous
                </span>
                <span style={{ fontWeight: 700, color: "#FFF" }}>Процесс в конкретный временной интервал будущего</span>
              </div>

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
            </div>

            {/* 11. Future Perfect */}
            <div className="method-card">
              <div className="method-card-header">
                <span className="block-badge" style={{ background: "rgba(168, 85, 247, 0.2)", borderColor: "rgba(168, 85, 247, 0.4)", color: "#D8B4FE" }}>
                  20% #4 • Future Perfect (Will have + V3)
                </span>
                <span style={{ fontWeight: 700, color: "#FFF" }}>Результат будет готов строго К дедлайну</span>
              </div>

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
            </div>

            {/* 12. Future Perfect Continuous */}
            <div className="method-card">
              <div className="method-card-header">
                <span className="block-badge" style={{ background: "rgba(168, 85, 247, 0.2)", borderColor: "rgba(168, 85, 247, 0.4)", color: "#D8B4FE" }}>
                  20% #5 • Future Perfect Continuous
                </span>
                <span style={{ fontWeight: 700, color: "#FFF" }}>Подсчет стажа / непрерывной длительности к будущей дате</span>
              </div>

              <ChunkItemRow
                num="12.1"
                title="By [date], I will have been [verb-ing] for [duration]"
                trans="«К [дате] исполнится ровно [столько-то лет], как я [работаю здесь]»"
                exEn="By next November, I will have been working at this company for exactly five years."
                exRu="В следующем ноябре исполнится ровно пять лет, как я работаю в этой компании."
                tip="Редкая форма. Используется для юбилеев и годовщин проектов."
              />
            </div>

            {/* 13. Used To & Mixed Conditionals */}
            <div className="method-card">
              <div className="method-card-header">
                <span className="block-badge" style={{ background: "rgba(168, 85, 247, 0.2)", borderColor: "rgba(168, 85, 247, 0.4)", color: "#D8B4FE" }}>
                  20% #6 • Привычки прошлого и Смешанные условия
                </span>
                <span style={{ fontWeight: 700, color: "#FFF" }}>Архитектурные сопоставления и сослагательность</span>
              </div>

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
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SECTION 4: SUMMARY CHEAT SHEET */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section id="summary-cheat" className="pt-8">
          <h2 className="chapter-heading">04. Сводная Шпаргалка: Как Выбрать Время за 0.2 Секунды</h2>

          <p>
            Вместо того чтобы держать в голове всю таблицу, задайте себе <strong>один вопрос</strong>:
          </p>

          <div className="space-y-2.5 my-6">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <span className="text-emerald-400 font-bold font-mono text-sm shrink-0">01.</span>
              <div className="text-xs sm:text-sm text-slate-200">
                <strong>Действие происходит регулярно или это свойство системы?</strong> ➔ <span className="text-emerald-300 font-bold">Present Simple</span> (<code>I usually handle [X]</code>)
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <span className="text-emerald-400 font-bold font-mono text-sm shrink-0">02.</span>
              <div className="text-xs sm:text-sm text-slate-200">
                <strong>Действие происходит прямо сейчас в эту секунду?</strong> ➔ <span className="text-emerald-300 font-bold">Present Continuous</span> (<code>I&apos;m currently working on [X]</code>)
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <span className="text-emerald-400 font-bold font-mono text-sm shrink-0">03.</span>
              <div className="text-xs sm:text-sm text-slate-200">
                <strong>Результат готов к этой минуте (без точной даты)?</strong> ➔ <span className="text-emerald-300 font-bold">Present Perfect</span> (<code>I&apos;ve already [V3] [X]</code>)
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <span className="text-emerald-400 font-bold font-mono text-sm shrink-0">04.</span>
              <div className="text-xs sm:text-sm text-slate-200">
                <strong>Процесс тянется с утра/со вчера и вы устали?</strong> ➔ <span className="text-emerald-300 font-bold">Present Perfect Continuous</span> (<code>We&apos;ve been dealing with [X] since [time]</code>)
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <span className="text-emerald-400 font-bold font-mono text-sm shrink-0">05.</span>
              <div className="text-xs sm:text-sm text-slate-200">
                <strong>Действие завершилось в зафиксированный момент прошлого?</strong> ➔ <span className="text-emerald-300 font-bold">Past Simple</span> (<code>We decided to [verb] yesterday</code>)
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <span className="text-emerald-400 font-bold font-mono text-sm shrink-0">06.</span>
              <div className="text-xs sm:text-sm text-slate-200">
                <strong>Вас прервали посреди процесса?</strong> ➔ <span className="text-emerald-300 font-bold">Past Continuous</span> (<code>I was in the middle of [verb-ing] when...</code>)
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <span className="text-emerald-400 font-bold font-mono text-sm shrink-0">07.</span>
              <div className="text-xs sm:text-sm text-slate-200">
                <strong>Берете обязательство на себя?</strong> ➔ <span className="text-emerald-300 font-bold">I&apos;ll make sure to</span> (<code>I&apos;ll make sure to [verb]...</code>)
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <span className="text-emerald-400 font-bold font-mono text-sm shrink-0">08.</span>
              <div className="text-xs sm:text-sm text-slate-200">
                <strong>План сорвался по внешним причинам?</strong> ➔ <span className="text-emerald-300 font-bold">I was supposed to</span> (<code>I was supposed to [verb], but [blocker]</code>)
              </div>
            </div>
          </div>

          <blockquote className="quote-callout">
            «Сконцентрируйтесь только на ЧАСТИ 1. Автоматизируйте 7 золотых конструкций до автоматизма — и ваш английский на созвонах станет звучать чище, чем у 80% коллег».
            <cite>Принцип Парето в SLA-методологии</cite>
          </blockquote>
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
