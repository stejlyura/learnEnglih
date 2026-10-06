import React from "react";
import { ArticleHeaderNav, QuoteCallout, MethodCard } from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { LongreadSelectorDropdown } from "@/features/longread-selector";
import { SpeakButton } from "@/features/speech-pronounce";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "sec-1", title: "01. Стресс и амигдалярный перехват: Почему мозг зависает на звонках" },
  { id: "sec-2", title: "02. Тактическая эмпатия Криса Восса и фреймворк деэскалации L.A.S.T." },
  { id: "sec-3", title: "03. Архитектура вопросов в B2B Sales: SPIN и квалификация Economic Buyer" },
  { id: "sec-4", title: "04. Искоренение внутреннего перевода (L1) в боевых переговорах" },
  { id: "sec-5", title: "05. Психологический фрейминг: Неприятие потерь и защита маржи" },
  { id: "sec-6", title: "06. Протокол автоматизации речевых блоков для Support и Sales" },
] as const;

export default function SupportSalesFluencyPage({
  isUnified = false,
}: {
  readonly isUnified?: boolean;
} = {}) {
  return (
    <>
      {!isUnified && (
        <ArticleHeaderNav
          title="CUSTOMER SUPPORT & B2B SALES FLUENCY"
          badge="Executive Fluency C1"
          activeRoute="/longreads/support-sales-fluency"
        />
      )}

      <article className="longread-container prose-editorial" id="top">
        {!isUnified && (
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Библиотека исследований SLA</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">Support & Sales Fluency</span>
            </div>
            <LongreadSelectorDropdown currentSlug="support-sales-fluency" />
          </div>
        )}

        <div className="article-meta-top">
          <span>Customer Support & B2B Sales</span>
          <span>•</span>
          <span>Время чтения: 16 минут</span>
          <span>•</span>
          <span className="text-emerald-400">Уровень: B2 → C1 Executive</span>
        </div>

        <h1 className="article-title">
          Психолингвистика Речевой Беглости и Прямого Мышления в Customer Support и B2B Sales
        </h1>

        <p className="article-lead">
          Как говорить без пауз и внутреннего перевода при острой эскалации разгневанного клиента или защите стоимости перед CFO. Когнитивная хронометрия стресса, тактическая эмпатия переговорщиков ФБР, SPIN-вопросы и деинсталляция ступора на звонках.
        </p>

        <div className="article-info-strip">
          <div className="info-item">
            <span>Научный базис:</span>{" "}
            <strong>Chris Voss (FBI), Neil Rackham (SPIN), Daniel Kahneman, Judith Kroll (RHM)</strong>
          </div>
          <div className="info-item">
            <span>Главная цель:</span>{" "}
            <strong>Снижение задержки ответа под стрессом с 1.8 с до 250 мс</strong>
          </div>
          <div className="info-item">
            <span>Ключевой метод:</span>{" "}
            <strong>Tactical Empathy Chunks + Value Framing + Zero Subvocal Translation</strong>
          </div>
        </div>

        {/* Table of Contents */}
        <TableOfContents items={TOC_ITEMS} />

        {/* SECTION 1 */}
        <section id="sec-1">
          <h2 className="chapter-heading">
            01. Стресс и амигдалярный перехват: Почему мозг зависает на звонках
          </h2>

          <p>
            В спокойной обстановке при переписке в чате или чтении документации задержка в 1–2 секунды абсолютно незаметна. Однако в живом синхронном диалоге — на первой линии поддержки при критическом сбое (Severity 1 Outage) или на демо-созвоне с вице-президентом — допустимый лимит тишины падает до <strong>200–350 миллисекунд</strong>.
          </p>

          <p>
            Когда клиент повышает голос, выражает сарказм или неожиданно требует скидку 40%, в мозге русскоязычного специалиста разворачивается <strong>амигдалярный перехват (Amygdala Hijack)</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30">
              <div className="text-rose-400 font-bold text-xs uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>❌ Пословный перевод под стрессом</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-500/20">Задержка: 1500–3000 мс</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Миндалевидное тело блокирует префронтальную кору (DLPFC). Мозг судорожно вспоминает грамматические правила, пытается перевести русскую фразу по словам и зависает со звуком «эээ/ммм».
              </p>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-rose-300 font-mono">
                Клиент кричит → Выброс адреналина → Попытка составить Present Perfect → Паника → «Sorry, wait one minute...»
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>⚡ Автоматический Чанкинг C1</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/20">Задержка: &lt; 250 мс</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Базальные ганглии мгновенно активируют заученный речевой монолит (Exemplar). Речь стартует на выдохе без участия грамматического процессора.
              </p>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-emerald-300 font-mono">
                «I hear how critical this is for your team, and I am taking personal ownership of this right now.»
              </div>
            </div>
          </div>

          <QuoteCallout cite="Даниэль Канеман, лауреат Нобелевской премии по экономике">
            «Под воздействием угрозы или когнитивного стресса мозг стремится сбросить аналитическую Систему 2. Если у вас нет готовых паттернов Системы 1, ваша речь превращается в хаотичный набор примитивных реакций».
          </QuoteCallout>
        </section>

        {/* SECTION 2 */}
        <section id="sec-2" className="mt-14 pt-8">
          <h2 className="chapter-heading">
            02. Тактическая эмпатия Криса Восса и фреймворк деэскалации L.A.S.T.
          </h2>

          <p>
            Бывший ведущий переговорщик ФБР по освобождению заложников <strong>Крис Восс (Chris Voss)</strong> установил, что попытки рационального переубеждения разъяренного человека приводят к эскалации конфликта. Первые 15 секунд должны быть отданы <em>тактической эмпатии</em>.
          </p>

          <MethodCard
            title="Фреймворк деэскалации L.A.S.T. для Customer Support"
            badge="Customer Care Mastery"
            badgeClass="tier-1"
          >
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-cyan-300 font-bold text-sm">
                    1. Listen & Label (Слушать и маркировать эмоцию)
                  </h4>
                  <SpeakButton text="It sounds like this downtime completely disrupted your scheduled release today." size="sm" />
                </div>
                <p className="text-xs text-slate-300 mb-1">
                  Не спорьте с фактами. Назовите вслух боль и состояние клиента:
                </p>
                <div className="text-xs font-mono text-white bg-black/30 p-2 rounded border border-cyan-500/20">
                  “It sounds like this downtime completely disrupted your scheduled release today.”
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-cyan-300 font-bold text-sm">
                    2. Apologize & Align (Выравнивание без признания юридической вины)
                  </h4>
                  <SpeakButton text="I am genuinely sorry for the disruption this has caused your workflow." size="sm" />
                </div>
                <p className="text-xs text-slate-300 mb-1">
                  Выразите сочувствие ситуации, не создавая юридических рисков для компании:
                </p>
                <div className="text-xs font-mono text-white bg-black/30 p-2 rounded border border-cyan-500/20">
                  “I am genuinely sorry for the disruption this has caused your workflow.”
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-cyan-300 font-bold text-sm">
                    3. Solve & State Action (Четкий план с таймлайном)
                  </h4>
                  <SpeakButton text="Here is what we are doing right now: our tier-3 engineers are analyzing the logs, and I will update you every thirty minutes." size="sm" />
                </div>
                <p className="text-xs text-slate-300 mb-1">
                  Устраните неопределенность конкретными действиями и периодичностью апдейтов:
                </p>
                <div className="text-xs font-mono text-white bg-black/30 p-2 rounded border border-cyan-500/20">
                  “Here is what we are doing right now: our tier-3 engineers are analyzing the logs, and I will update you every 30 minutes.”
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-cyan-300 font-bold text-sm">
                    4. Thank & Transition (Благодарность и возвращение инициативы)
                  </h4>
                  <SpeakButton text="We truly appreciate your patience while we get this sorted out for you." size="sm" />
                </div>
                <p className="text-xs text-slate-300 mb-1">
                  Замените «Sorry for waiting» на признание ценности времени клиента:
                </p>
                <div className="text-xs font-mono text-white bg-black/30 p-2 rounded border border-cyan-500/20">
                  “We truly appreciate your patience while we get this sorted out for you.”
                </div>
              </div>
            </div>
          </MethodCard>

          <h3 className="text-lg font-bold text-white mt-8 mb-4">
            Контраст: Опасные кальки vs Профессиональные C1-чанки поддержки
          </h3>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-3 font-semibold text-rose-400">❌ Опасная калька / Роботизированный ответ</th>
                  <th className="p-3 font-semibold text-emerald-400">⚡ Нативный C1 Чанк Поддержки</th>
                  <th className="p-3 font-semibold text-slate-400">Психологический эффект</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-3 font-mono text-rose-300">“Calm down, please.”</td>
                  <td className="p-3 font-mono text-emerald-300 font-medium">“I completely understand why this is so frustrating.”</td>
                  <td className="p-3 text-slate-300">Снимает сопротивление вместо провоцирования агрессии.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-rose-300">“It is not our problem, it is third-party.”</td>
                  <td className="p-3 font-mono text-emerald-300 font-medium">“While this is rooted in an upstream provider, our priority is restoring your access.”</td>
                  <td className="p-3 text-slate-300">Демонстрация взрослой ответственности без инфантилизма.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-rose-300">“You should read the docs.”</td>
                  <td className="p-3 font-mono text-emerald-300 font-medium">“Let me walk you through this step-by-step so you never run into this again.”</td>
                  <td className="p-3 text-slate-300">Партнерская забота вместо пассивной агрессии.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-rose-300">“I cannot do anything.”</td>
                  <td className="p-3 font-mono text-emerald-300 font-medium">“Here is what I can do right now to keep your team moving forward.”</td>
                  <td className="p-3 text-slate-300">Фокус на возможностях, блокирующий эскалацию к начальству.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="sec-3" className="mt-14 pt-8">
          <h2 className="chapter-heading">
            03. Архитектура вопросов в B2B Sales: SPIN и квалификация Economic Buyer
          </h2>

          <p>
            В корпоративных продажах (B2B SaaS / Enterprise) побеждает не тот, кто непрерывно расхваливает функции продукта, а тот, кто задает **высокоточные вопросы**, заставляющие клиента осознать финансовые потери от текущего положения дел.
          </p>

          <p>
            Методология **SPIN** (Нил Рэкхем) раскладывается на 4 уровня вопросов:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">1. Situation (Ситуация)</span>
                <SpeakButton text="Could you walk me through how your team currently handles your outbound sequence?" size="sm" />
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                “Could you walk me through how your team currently handles [Process]?”
              </div>
              <div className="text-xs text-slate-400">
                Сбор фактов без давления: как выстроен текущий рабочий процесс.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">2. Problem (Проблема)</span>
                <SpeakButton text="Where are you seeing the biggest drop-off in your conversion funnel?" size="sm" />
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                “Where are you seeing the biggest drop-off in [Metric]?”
              </div>
              <div className="text-xs text-slate-400">
                Локализация узкого горлышка и скрытого недовольства текущим решением.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">3. Implication (Последствия)</span>
                <SpeakButton text="If this bottleneck remains unresolved, how will that impact your Q4 ARR targets?" size="sm" />
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                “If this bottleneck remains unresolved, how will that impact [Key Goal]?”
              </div>
              <div className="text-xs text-slate-400">
                Перевод проблемы в денежные потери и угрозу годовым KPI.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">4. Need-Payoff (Ценность решения)</span>
                <SpeakButton text="What would it mean for your sales capacity if we automated that entire workflow?" size="sm" />
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                “What would it mean for your team if we automated [Manual Task]?”
              </div>
              <div className="text-xs text-slate-400">
                Клиент сам формулирует вслух экономическую выгоду от внедрения продукта.
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-white mt-8 mb-4">
            Квалификация ЛПР и процесса закупок (MEDDIC): Без робости и грубости
          </h3>

          <p>
            Начинающие сейлзы часто боятся задавать прямые вопросы о деньгах, выдавая неловкие фразы вроде <em>«Who decides here?»</em> или <em>«What is your budget?»</em>. Это отталкивает топ-менеджеров.
          </p>

          <div className="space-y-3 my-6">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/20 to-slate-900 border border-cyan-500/20">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-cyan-400">Выход на Economic Buyer (ЛПР)</span>
                <SpeakButton text="Beyond yourself, who else on the executive leadership team would need to sign off on this initiative?" size="sm" />
              </div>
              <div className="text-sm font-mono text-white font-medium">
                “Beyond yourself, who else on the executive leadership team would need to sign off on this initiative?”
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Признает статус собеседника и деликатно выявляет реальную цепочку утверждения.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/20 to-slate-900 border border-emerald-500/20">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-emerald-400">Квалификация процесса закупок (Procurement Process)</span>
                <SpeakButton text="What does the typical legal and procurement evaluation look like within your organization?" size="sm" />
              </div>
              <div className="text-sm font-mono text-white font-medium">
                “What does the typical legal and procurement evaluation look like within your organization?”
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Показывает профессиональное понимание корпоративных процедур без спешки.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/20 to-slate-900 border border-indigo-500/20">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-indigo-400">Цена бездействия (Cost of Inaction)</span>
                <SpeakButton text="What is the cost to your organization if you choose to maintain the status quo for another quarter?" size="sm" />
              </div>
              <div className="text-sm font-mono text-white font-medium">
                “What is the cost to your organization if you choose to maintain the status quo for another quarter?”
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Заставляет оценить убытки от откладывания сделки на следующий квартал.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="sec-4" className="mt-14 pt-8">
          <h2 className="chapter-heading">
            04. Искоренение внутреннего перевода (L1) в боевых переговорах
          </h2>

          <p>
            В психолингвистической модели Джудит Кролл (Revised Hierarchical Model) владение языком проходит две стадии:
          </p>

          <ol style={{ paddingLeft: "24px", marginBottom: "24px", lineHeight: "1.8" }}>
            <li>
              <strong>Word Association (B1–B2):</strong> Концепт → Русское слово → Поиск английского аналога → Сборка синтаксиса. (Убийственная задержка).
            </li>
            <li>
              <strong>Concept Mediation (C1 Native-like):</strong> Концепт (эмоция, интенция, возражение) → Мгновенный английский речевой блок без промежуточной активации русского языка.
            </li>
          </ol>

          <p>
            Чтобы перевести мозг на стадию <em>Concept Mediation</em> в продажах и саппорте, необходимо заблокировать внутренний перевод через **интенциональное связывание**:
          </p>

          <MethodCard
            title="Таблица ментальных связок: Интенция → Готовый Чанк"
            badge="Direct Wiring"
            badgeClass="tier-2"
          >
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="text-xs text-amber-400 font-semibold">Интенция: Защитить время команды без грубости</div>
                  <div className="text-sm text-white font-mono mt-0.5">“To make sure we respect your calendar today, what is the single biggest question you need answered?”</div>
                </div>
                <SpeakButton text="To make sure we respect your calendar today, what is the single biggest question you need answered?" size="sm" />
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="text-xs text-emerald-400 font-semibold">Интенция: Смягчить плохую новость об отсутствии фичи</div>
                  <div className="text-sm text-white font-mono mt-0.5">“While that specific integration is not on our immediate roadmap, here is how our current clients achieve the exact same result.”</div>
                </div>
                <SpeakButton text="While that specific integration is not on our immediate roadmap, here is how our current clients achieve the exact same result." size="sm" />
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="text-xs text-cyan-400 font-semibold">Интенция: Фиксация обязательств в конце звонка</div>
                  <div className="text-sm text-white font-mono mt-0.5">“Just to ensure we are completely aligned on next steps, I will send the summary by 5 PM, and you will review it with your CFO by Thursday.”</div>
                </div>
                <SpeakButton text="Just to ensure we are completely aligned on next steps, I will send the summary by 5 PM, and you will review it with your CFO by Thursday." size="sm" />
              </div>
            </div>
          </MethodCard>
        </section>

        {/* SECTION 5 */}
        <section id="sec-5" className="mt-14 pt-8">
          <h2 className="chapter-heading">
            05. Психологический фрейминг: Неприятие потерь и защита маржи
          </h2>

          <p>
            В теории перспектив Даниэля Канемана и Амоса Тверски доказано: <strong>психологическая боль от потери в 2–2.5 раза сильнее удовольствия от равной выгоды</strong>.
          </p>

          <p>
            Неопытный сейлз говорит языком приобретения: <em>«Our platform will help you save 15% on infrastructure»</em>. Это воспринимается как абстрактный бонус.  
            Опытный переговорщик C1 использует <strong>фрейминг потерь (Loss Framing)</strong>:
          </p>

          <QuoteCallout cite="Фрейминг неприятия потерь (Loss Aversion Formula)">
            «Right now, every week of delayed migration is silently costing your team approximately $8,000 in redundant cloud licensing. Our platform halts that revenue leak on day one.»
          </QuoteCallout>

          <h3 className="text-lg font-bold text-white mt-8 mb-4">
            Трехступенчатая защита цены при возражении «Too Expensive»
          </h3>

          <div className="space-y-4 my-6">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                Шаг 1. Валидация и согласие (Acknowledge)
              </div>
              <div className="text-sm font-mono text-white mb-1">
                “I completely appreciate that upfront investment is a key metric in your vendor selection.”
              </div>
              <div className="text-xs text-slate-400">
                Никаких споров. Вы подтверждаете, что цена важна.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                Шаг 2. Изоляция и контраст рисков (Isolate & Contrast)
              </div>
              <div className="text-sm font-mono text-white mb-1">
                “That being said, when our enterprise customers tested cheaper alternatives, they found that the absence of dedicated 99.99% SLA ended up costing them triple in unexpected downtime.”
              </div>
              <div className="text-xs text-slate-400">
                Показываем скрытую цену дешевых аналогов.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                Шаг 3. Перевод на окупаемость (Pivot to ROI)
              </div>
              <div className="text-sm font-mono text-white mb-1">
                “If we can demonstrate that this investment pays for itself within the first 60 days, would you be comfortable moving forward with this tier?”
              </div>
              <div className="text-xs text-slate-400">
                Условное закрытие (Conditional Close): фокус на возврате инвестиций.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 */}
        <section id="sec-6" className="mt-14 pt-8">
          <h2 className="chapter-heading">
            06. Протокол автоматизации речевых блоков для Support и Sales
          </h2>

          <p>
            Для закрепления нативного мышления на уровне мышечной памяти речевого аппарата и базальных ганглиев используйте ежедневный 15-минутный протокол:
          </p>

          <MethodCard
            title="Ежедневный 3-шаговый боевой тренинг"
            badge="Daily Protocol"
            badgeClass="tier-1"
          >
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-bold text-sm mb-1">
                  1. Дрилл быстрой подстановки слотов (Speed Slot-Swapping) — 5 минут
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  Берете опорную рамку <code>“What seems to be the main roadblock preventing your team from [X]?”</code> и за 30 секунд без единой паузы проговариваете 5 рабочих окончаний:
                </p>
                <ul className="text-xs text-slate-400 space-y-1 list-disc pl-5">
                  <li>...from signing off on this agreement?</li>
                  <li>...from hitting your outbound quota this month?</li>
                  <li>...from scheduling the security audit?</li>
                  <li>...from rolling this out to your engineering reps?</li>
                  <li>...from approving the custom Net-60 terms?</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-sm mb-1">
                  2. Акустический шэдоуинг звонков носителей (Shadowing) — 5 минут
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Слушайте реальные записи звонков американских Account Executives и сессий деэскалации поддержки (Gong, Chorus, YouTube). Повторяйте речь с отставанием в 150 миллисекунд. Копируйте интонационное падение в конце утвердительных предложений — это придает речи спокойный авторитет переговорщика.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-sm mb-1">
                  3. 5-секундный стресс-тест возражений (Pressure Simulation) — 5 минут
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Рандомно запускайте карточку с жестким возражением (<em>«Your product is completely broken, cancel my subscription right now!»</em>). Ваша задача — сделать вдох и выдать первые 10 слов на одном дыхании за 1 секунду:
                </p>
                <div className="text-xs font-mono text-emerald-300 bg-black/30 p-2.5 rounded border border-emerald-500/20 mt-1">
                  “I hear how urgent this is, and I am stepping in personally to resolve this immediately.”
                </div>
              </div>
            </div>
          </MethodCard>

          <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-slate-900 border border-emerald-500/30">
            <h3 className="text-base font-bold text-white mb-2">
              🎯 Резюме: Авторитетная коммуникация на английском
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-0">
              Свободное владение английским в Customer Support и B2B Sales — это не знание сотен редких книжных идиом. Это <strong>скорость и психологическая точность извлечения 150 ключевых речевых блоков</strong> в момент эмоционального напряжения. Когда заученные чанки снимают нагрузку с оперативной памяти, вы можете направить 100% внимания на эмоции, потребности и цели вашего собеседника.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
