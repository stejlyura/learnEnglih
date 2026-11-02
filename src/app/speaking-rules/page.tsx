"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  EditorialLayout,
  ChunkResponsiveSelector,
  ChunkSelectorItem,
  QuoteCallout,
  MethodCard,
} from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { SpeakButton } from "@/features/speech-pronounce";
import {
  SPEAKING_RULES_META,
  SPEAKING_RULES_CHUNKS,
} from "@/entities/chunk";
import {
  Copy,
  Check,
  Search,
  Sparkles,
  ChevronDown,
  ShieldAlert,
  CheckCircle2,
  Zap,
  ArrowRight,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "intro", title: "01. Психолингвистика: Почему школьные правила тормозят устную речь" },
  { id: "principles", title: "02. 9 Практических Правил Живого Английского (Без Академизма)" },
  { id: "traps", title: "03. Топ-5 Разрушительных Русских Калек в Диалоге" },
  { id: "catalog", title: "04. Интерактивная База Готовых Разговорных Чанков" },
  { id: "speed-drill", title: "05. Speed-Swapper (Тренажер Мгновенной Подстановки)" },
  { id: "protocol", title: "06. Протокол Внедрения Чанков в Рабочие Созвоны" },
] as const;

const SELECTOR_ITEMS: readonly ChunkSelectorItem[] = [
  { id: "all", label: "Все чанки", icon: "⚡", count: SPEAKING_RULES_CHUNKS.length, description: "Полный репертуар разговорных правил" },
  { id: "svo-order", label: "SVO & Порядок слов", icon: "📐", count: 5, description: "Неразрывность Subject + Verb и закон обстоятельств" },
  { id: "softening-hedging", label: "Смягчение & Вежливость", icon: "🕊️", count: 6, description: "Hedging: как просить и отказывать без грубости" },
  { id: "embedded-questions", label: "Косвенные вопросы", icon: "❓", count: 5, description: "Прямой порядок слов после вводных фраз" },
  { id: "time-frames", label: "Времена & Процессы", icon: "⏱️", count: 5, description: "Continuous прямо сейчас vs Stative Verbs" },
  { id: "past-vs-perfect", label: "Прошлое vs Перфект", icon: "🔄", count: 5, description: "Точная точка времени vs результат к моменту речи" },
  { id: "future-intentions", label: "Будущее: Will vs План", icon: "🚀", count: 4, description: "Решение на созвоне vs утвержденный план" },
  { id: "deduction-modals", label: "Модальные догадки", icon: "🔮", count: 4, description: "Must be (95%), Can't be (0%), Might (50%)" },
  { id: "reactions-tags", label: "Реакции & Слушание", icon: "💬", count: 4, description: "Neither do I, Fair enough, активный фидбек" },
  { id: "cause-contrast", label: "Причины & Контраст", icon: "⚖️", count: 5, description: "Живые связки Since, That being said, Just in case" },
] as const;

interface RuleDrillPreset {
  readonly title: string;
  readonly head: string;
  readonly category: string;
  readonly ruleNote: string;
  readonly slots: readonly string[];
}

const DRILL_PRESETS: readonly RuleDrillPreset[] = [
  {
    title: "Earlier today, I had a chance to [slot]",
    head: "Earlier today, I had a chance to",
    category: "01. SVO & Порядок слов",
    ruleNote: "Обстоятельство времени вынесено вперед с паузой. Subject и Verb остаются неразрывными.",
    slots: [
      "review the pull request you submitted.",
      "walk through the acceptance criteria with the product owner.",
      "reproduce the concurrency glitch on staging.",
      "verify the token refresh mechanism across clusters.",
      "discuss the migration timeline with the lead architect.",
    ],
  },
  {
    title: "Would you mind if I [slot]?",
    head: "Would you mind if I",
    category: "02. Смягчение & Вежливость (Hedging)",
    ruleNote: "После if используется глагол в Past Simple. Ответ согласия: «Not at all, go ahead!».",
    slots: [
      "took over this ticket to expedite the hotfix?",
      "shared my screen for two minutes to show the bug?",
      "pushed back the release date by twenty-four hours?",
      "looped in our DevOps engineer for additional context?",
      "simplified this API contract before merging?",
    ],
  },
  {
    title: "Do you happen to know where [slot] is?",
    head: "Do you happen to know where",
    category: "03. Косвенные Вопросы",
    ruleNote: "Инверсия исчезает: глагол is ставится строго после подлежащего, а не перед ним.",
    slots: [
      "the latest architectural RFC is located?",
      "our shared staging credentials are stored?",
      "the updated Figma layout is hosted?",
      "the incident retrospective document was uploaded?",
      "the new deployment webhook is configured?",
    ],
  },
  {
    title: "I'm currently looking into [slot]",
    head: "I'm currently looking into",
    category: "04. Времена & Процессы (Continuous)",
    ruleNote: "Present Continuous подчеркивает временный процесс прямо сейчас, без статических глаголов.",
    slots: [
      "the memory leak reported in the background worker.",
      "the intermittent connection drops on the WebSocket.",
      "the discrepancy between staging and production telemetry.",
      "the elevated error rates on third-party webhooks.",
      "the root cause of the database timeout during peak traffic.",
    ],
  },
  {
    title: "Have you had a chance to [slot] yet?",
    head: "Have you had a chance to",
    category: "05. Past vs Present Perfect",
    ruleNote: "Результат важен прямо сейчас: отсутствие точной даты в прошлом требует Present Perfect.",
    slots: [
      "test the hotfix build on staging yet?",
      "take a look at the revised pull request yet?",
      "review the sprint retro action items yet?",
      "sync with the customer success team yet?",
      "verify the automated rollback script yet?",
    ],
  },
  {
    title: "I'll take care of [slot] right after this call",
    head: "I'll take care of",
    category: "06. Will vs План (Спонтанное решение)",
    ruleNote: "Will выражает решительное обещание, данное прямо во время онлайн-диалога.",
    slots: [
      "updating the deployment documentation right after this call.",
      "pinging the security lead about our token policy.",
      "restarting the caching layer on staging.",
      "merging the hotfix branch into main.",
      "scheduling the follow-up design review.",
    ],
  },
  {
    title: "That must be why [slot]",
    head: "That must be why",
    category: "07. Модальная Догадка (95% уверенность)",
    ruleNote: "Must be для логического вывода на основе фактов, без категоричной самоуверенности.",
    slots: [
      "the query execution time exceeded three seconds.",
      "the authentication headers were stripped by the reverse proxy.",
      "the background worker terminated silently.",
      "the end-to-end tests failed on the checkout step.",
      "the response payloads were getting truncated.",
    ],
  },
  {
    title: "Since we're already discussing this, why don't we [slot]?",
    head: "Since we're already discussing this, why don't we",
    category: "08. Связки Причин и Контраста",
    ruleNote: "Since заменяет тяжеловесное because of; why don't we мягко предлагает действие.",
    slots: [
      "standardize our error responses across all microservices?",
      "finalize the API payload contract right now?",
      "assign this backlog ticket to the upcoming sprint?",
      "agree on the database indexing strategy before Monday?",
      "document this workaround in the shared knowledge base?",
    ],
  },
];

export default function SpeakingRulesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedChunkId, setExpandedChunkId] = useState<string | null>(null);

  // Drill state
  const [selectedDrillIndex, setSelectedDrillIndex] = useState<number>(0);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState<number>(0);

  const activeDrill = DRILL_PRESETS[selectedDrillIndex];
  const activeFullDrillSentence = useMemo(() => {
    const slot = activeDrill.slots[selectedSlotIndex] || activeDrill.slots[0];
    return `${activeDrill.head} ${slot}`;
  }, [activeDrill, selectedSlotIndex]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId((curr) => (curr === id ? null : curr));
    }, 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedChunkId((prev) => (prev === id ? null : id));
  };

  // Filter chunks based on category tab & search query
  const filteredChunks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return SPEAKING_RULES_CHUNKS.filter((item) => {
      if (activeTab !== "all" && item.category !== activeTab) {
        return false;
      }

      if (!query) return true;

      return (
        item.chunk.toLowerCase().includes(query) ||
        item.meaningRu.toLowerCase().includes(query) ||
        item.formula.toLowerCase().includes(query) ||
        item.context.toLowerCase().includes(query) ||
        item.exampleEn.toLowerCase().includes(query) ||
        item.exampleRu.toLowerCase().includes(query) ||
        item.ruleTitle.toLowerCase().includes(query) ||
        item.trapRu.toLowerCase().includes(query)
      );
    });
  }, [activeTab, searchQuery]);

  return (
    <EditorialLayout
      title="Правила Живой Речи (Speaking Rules & Chunks)"
      badge="Разговор ⚡"
      badgeColor="secondary"
      readTime="15 мин"
      metaCategory="Коммуникативная Практика B2 → C1"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8">
        {/* Main Editorial Content */}
        <div className="space-y-16">
          {/* Section 01: Intro */}
          <section id="intro" className="scroll-mt-24 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono text-sm font-bold">
                01
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Психолингвистика: Почему школьные правила тормозят устную речь
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Разница между пассивным знанием справочника и оперативной памятью в онлайн-диалоге.
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-base">
              Традиционное преподавание английского языка перегружает мозг студента сотнями второстепенных
              правил: согласование времен из 16 шагов, латинские исключения множественного числа,
              архаичные книжные инверсии (<em>«Scarcely had I entered...»</em>) и вымученные смешанные кондиционалы.
            </p>

            <p className="text-slate-300 leading-relaxed text-base">
              В реальной коммуникации на созвоне в Slack, Zoom или при защите архитектурного решения
              у человека есть всего <strong>400–600 миллисекунд</strong> на генерацию фразы. В этот момент
              попытка вспомнить академическую таблицу правил вызывает ступор (когнитивную перегрузку).
            </p>

            <QuoteCallout cite="Майкл Льюис (Michael Lewis), The Lexical Approach (1993)">
              «Язык состоит не из грамматикализованной лексики, а из лексикализованной грамматики.
              Беглость речи достигается не генерацией предложений по правилам с нуля, а мгновенным
              извлечением готовых полуфиксированных блоков (префабов).»
            </QuoteCallout>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-rose-500/[0.04] border border-rose-500/20 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Школьный подход (Академический тупик)</span>
                </div>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                  <li>Сборка предложения из отдельных изолированных слов по грамматическим формулам.</li>
                  <li>Постоянный мысленный перевод с русского на английский через падежные аналогии.</li>
                  <li>Страх ошибиться в редком времени, приводящий к мучительному мычанию («эээ... ммм...»).</li>
                  <li>Прямолинейные резкие фразы, звучащие грубо для англоязычных коллег.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Чанк-подход (Живая автоматизация)</span>
                </div>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                  <li>Готовые речевые каркасы с одним сменным слотом (Plug & Play).</li>
                  <li>9 фундаментальных коммуникативных принципов, покрывающих 95% устной речи.</li>
                  <li>Естественная дипломатия (Hedging) и вежливые косвенные вопросы на автомате.</li>
                  <li>Снижение нагрузки на оперативную память с 7 элементов до 1 готового блока.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 02: 9 Rules */}
          <section id="principles" className="scroll-mt-24 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono text-sm font-bold">
                02
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  9 Практических Правил Живого Английского (Без Академизма)
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Концентрированный кодекс устной речи: только то, что звучит естественно и защищает от ошибок.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {SPEAKING_RULES_META.map((rule) => (
                <div
                  key={rule.id}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/30 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {rule.number}
                      </span>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {rule.title}
                      </h3>
                    </div>
                    <span className="text-xs text-indigo-300 font-mono px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 self-start sm:self-auto">
                      {rule.formula}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {rule.whyItMatters}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-xl bg-rose-500/[0.04] border border-rose-500/20">
                      <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider block mb-1">
                        Опасная привычка:
                      </span>
                      <span className="text-slate-300">{rule.ruleBadHabit}</span>
                      <div className="mt-1.5 font-mono text-rose-300/80">{rule.trapRu}</div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20">
                      <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                        Рабочий стандарт:
                      </span>
                      <span className="text-slate-300">{rule.ruleBestPractice}</span>
                      <div className="mt-1.5 font-mono text-emerald-300/90">{rule.antidoteEn}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 03: Traps & Antidotes */}
          <section id="traps" className="scroll-mt-24 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-mono text-sm font-bold">
                03
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Топ-5 Разрушительных Русских Калек в Диалоге
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Типичные ловушки прямого перевода из русского языка, которые сразу выдают языковой барьер.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <MethodCard
                badge="Калька 01"
                title="Инверсия в косвенном вопросе: «Do you know where is the server?»"
                borderAccentColor="#ef4444"
              >
                <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <p>
                    <strong>Почему это ошибка:</strong> Когда перед вопросом появляется вводная фраза (<em>Do you know, Could you tell me, I wonder</em>), предложение перестает быть прямым вопросом. Инверсия отменяется, порядок слов возвращается в прямой.
                  </p>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 font-mono space-y-1">
                    <div className="text-rose-400">❌ Ошибка: «Do you know what time does the meeting start?»</div>
                    <div className="text-emerald-400">✅ Норма: «Do you know what time the meeting starts?»</div>
                  </div>
                </div>
              </MethodCard>

              <MethodCard
                badge="Калька 02"
                title="Ответ «Me too» на отрицательное высказывание"
                borderAccentColor="#ef4444"
              >
                <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <p>
                    <strong>Почему это ошибка:</strong> Если коллега говорит <em>«I don&apos;t like this library»</em> или <em>«I haven&apos;t seen this error before»</em>, ответ <em>«Me too»</em> означает, что вы как раз любите эту библиотеку или видели эту ошибку!
                  </p>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 font-mono space-y-1">
                    <div className="text-rose-400">❌ Ошибка: «I don&apos;t understand this code.» — «Me too!»</div>
                    <div className="text-emerald-400">✅ Норма: «I don&apos;t understand this code.» — «Neither do I.» (или «Me neither.»)</div>
                  </div>
                </div>
              </MethodCard>

              <MethodCard
                badge="Калька 03"
                title="Голый приказ вместо смягчения: «Send me the link, please»"
                borderAccentColor="#f59e0b"
              >
                <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <p>
                    <strong>Почему это ошибка:</strong> В русском «Пожалуйста, пришли мне ссылку» звучит нормально. В английском повелительное наклонение (<em>Send me</em>) даже со словом <em>please</em> воспринимается как сухое распоряжение руководителя к подчиненному.
                  </p>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 font-mono space-y-1">
                    <div className="text-rose-400">❌ Ошибка: «Give me access to this repo, please.»</div>
                    <div className="text-emerald-400">✅ Норма: «Could you possibly grant me access to this repo when you have a second?»</div>
                  </div>
                </div>
              </MethodCard>

              <MethodCard
                badge="Калька 04"
                title="Использование «will» в придаточных времени и условий (после if / when / as soon as)"
                borderAccentColor="#6366f1"
              >
                <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <p>
                    <strong>Почему это ошибка:</strong> В русском мы говорим «Я напишу тебе, когда я <em>закончу</em> (будущее время)». В английском после союзов времени <em>when, as soon as, before, until, if</em> будущее время грамматически заменяется на Present Simple.
                  </p>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 font-mono space-y-1">
                    <div className="text-rose-400">❌ Ошибка: «I will let you know as soon as the build will finish.»</div>
                    <div className="text-emerald-400">✅ Норма: «I&apos;ll let you know as soon as the build finishes.»</div>
                  </div>
                </div>
              </MethodCard>

              <MethodCard
                badge="Калька 05"
                title="Разрыв подлежащего и глагола: «Yesterday told me the lead that...»"
                borderAccentColor="#ec4899"
              >
                <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <p>
                    <strong>Почему это ошибка:</strong> В русском свободный порядок слов. В английском глагол не может стоять перед подлежащим без вспомогательной вопросительной конструкции.
                  </p>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 font-mono space-y-1">
                    <div className="text-rose-400">❌ Ошибка: «In the morning noticed our QA that the button is broken.»</div>
                    <div className="text-emerald-400">✅ Норма: «In the morning, our QA noticed that the button was broken.»</div>
                  </div>
                </div>
              </MethodCard>
            </div>
          </section>

          {/* Section 04: Interactive Chunks Catalog */}
          <section id="catalog" className="scroll-mt-24 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono text-sm font-bold">
                  04
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    Интерактивная База Готовых Разговорных Чанков
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Поиск по формулам, ситуациям, переводам и ловушкам. Всего: {SPEAKING_RULES_CHUNKS.length} чанков.
                  </p>
                </div>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Поиск по фразе, контексту или переводу (например: mind, pull request, deploy, ловушка)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-white/10"
                >
                  Очистить
                </button>
              )}
            </div>

            {/* Responsive Category Selector */}
            <ChunkResponsiveSelector
              items={SELECTOR_ITEMS}
              activeId={activeTab}
              onSelect={setActiveTab}
            />

            {/* Chunks List */}
            <div className="space-y-4">
              {filteredChunks.length === 0 ? (
                <div className="p-8 text-center rounded-2xl bg-white/[0.02] border border-white/10 text-slate-400 text-sm">
                  По запросу «{searchQuery}» ничего не найдено. Попробуйте изменить фильтр или поисковую фразу.
                </div>
              ) : (
                filteredChunks.map((item) => {
                  const isExpanded = expandedChunkId === item.id;
                  const isCopied = copiedId === item.id;

                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all overflow-hidden"
                    >
                      {/* Main Card Header */}
                      <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                              {item.categoryName}
                            </span>
                            <span className="text-xs text-slate-400 truncate">
                              {item.context}
                            </span>
                          </div>

                          <div className="text-lg sm:text-xl font-bold text-white tracking-tight break-words flex items-center gap-2">
                            <span>{item.chunk}</span>
                          </div>

                          <div className="text-sm text-cyan-300 font-medium">
                            {item.meaningRu}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                          <SpeakButton
                            text={item.chunk.replace(/\[.*?\]/g, "")}
                            size="md"
                          />
                          <button
                            type="button"
                            onClick={() => handleCopy(item.chunk, item.id)}
                            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:text-white transition-colors cursor-pointer"
                            title="Скопировать чанк"
                          >
                            {isCopied ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleExpand(item.id)}
                            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:text-white transition-colors cursor-pointer"
                            title="Подробнее"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>
                      </div>

                      {/* Expandable Details */}
                      {isExpanded && (
                        <div className="px-5 pb-5 pt-2 border-t border-white/5 space-y-4 bg-white/[0.01]">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                            <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                              <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider block">
                                Формула чанка:
                              </span>
                              <div className="font-mono text-indigo-300 font-semibold">
                                {item.formula}
                              </div>
                            </div>

                            <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                              <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider block">
                                Почему это важно (Правило):
                              </span>
                              <div className="text-slate-300">
                                {item.ruleSummaryRu}
                              </div>
                            </div>
                          </div>

                          {/* Trap vs Antidote */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div className="p-3 rounded-xl bg-rose-500/[0.05] border border-rose-500/20 space-y-1">
                              <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                                <ShieldAlert className="w-3.5 h-3.5" />
                                Типичная русская калька (Trap):
                              </span>
                              <div className="text-slate-300">
                                {item.trapRu}
                              </div>
                            </div>

                            <div className="p-3 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/20 space-y-1">
                              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Как сказать нативно (Antidote):
                              </span>
                              <div className="text-slate-300">
                                {item.antidoteRu}
                              </div>
                            </div>
                          </div>

                          {/* Real World Example */}
                          <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 space-y-2">
                            <div className="flex items-center justify-between text-xs text-slate-400">
                              <span className="font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                                Живой пример из практики:
                              </span>
                              <SpeakButton text={item.exampleEn} size="sm" />
                            </div>
                            <div className="text-sm font-medium text-white">
                              {item.exampleEn}
                            </div>
                            <div className="text-xs text-slate-400">
                              {item.exampleRu}
                            </div>
                          </div>

                          {/* Drill Slots */}
                          {item.drillSlots && item.drillSlots.length > 0 && (
                            <div className="space-y-2 pt-1">
                              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                                Сменные рабочие слоты для тренировки:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {item.drillSlots.map((slot, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-mono"
                                  >
                                    + {slot}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </section>

          {/* Section 05: Speed-Swapper Drill */}
          <section id="speed-drill" className="scroll-mt-24 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono text-sm font-bold">
                05
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Speed-Swapper (Тренажер Мгновенной Подстановки)
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Закрепите речевой каркас: кликайте по слотам, слушайте эталонное произношение и проговаривайте вслух.
                </p>
              </div>
            </div>

            {/* Preset Selector */}
            <div className="flex flex-wrap gap-2">
              {DRILL_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSelectedDrillIndex(idx);
                    setSelectedSlotIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                    selectedDrillIndex === idx
                      ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/20"
                      : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {preset.title}
                </button>
              ))}
            </div>

            {/* Drill Interactive Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-indigo-950/30 to-slate-950/80 border border-indigo-500/30 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-3 gap-2">
                <span className="font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                  {activeDrill.category}
                </span>
                <span className="text-slate-400 italic">
                  {activeDrill.ruleNote}
                </span>
              </div>

              {/* Live Render of Full Sentence */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Сформированное предложение (Ready-to-speak sentence):
                </span>
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight leading-relaxed">
                  <span className="text-indigo-400 underline decoration-indigo-500/50 underline-offset-4">
                    {activeDrill.head}
                  </span>{" "}
                  <span className="text-cyan-300">
                    {activeDrill.slots[selectedSlotIndex]}
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <SpeakButton
                    text={activeFullDrillSentence}
                    size="md"
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(activeFullDrillSentence, "drill-live")}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-colors cursor-pointer"
                  >
                    {copiedId === "drill-live" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Скопировано</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Скопировать фразу</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Slot Options to Click */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  Выберите сменный контекстный слот:
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {activeDrill.slots.map((slot, idx) => {
                    const isSelected = selectedSlotIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedSlotIndex(idx)}
                        className={`w-full p-3.5 rounded-xl text-left text-xs font-mono transition-all flex items-center justify-between border cursor-pointer ${
                          isSelected
                            ? "bg-indigo-500/20 border-indigo-500 text-white shadow-sm"
                            : "bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{slot}</span>
                        {isSelected && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-sans font-semibold bg-indigo-500 text-white shrink-0 ml-2">
                            Выбрано
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Section 06: Routine & Implementation Protocol */}
          <section id="protocol" className="scroll-mt-24 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-sm font-bold">
                06
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Протокол Внедрения Чанков в Рабочие Созвоны
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  14-дневный пошаговый алгоритм перевода пассивного знания в беглый навык.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                  <BookOpen className="w-4 h-4" />
                  <span>Дни 1–4: Калибровка</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Выберите 3 чанка из раздела <em>Смягчение</em> и <em>Косвенные вопросы</em>.
                  Повесьте стикер рядом с монитором. Задача: применить их хотя бы в 2 письменных сообщениях в Slack.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Zap className="w-4 h-4" />
                  <span>Дни 5–9: Speed-Drill</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  По 5 минут в день тренируйтесь в Speed-Swapper. Произносите готовые связки вслух в нормальном темпе
                  до тех пор, пока каркас не перестанет требовать мыслительных усилий.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Lightbulb className="w-4 h-4" />
                  <span>Дни 10–14: Живой созвон</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  На следующем дейли или статус-колле используйте связку <em>«Earlier today I had a chance to...»</em>
                  или <em>«I&apos;ll take care of it right after...»</em>. Вы заметите, как мгновенно повысится беглость.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-base font-bold text-white">
                  Хотите закрепить грамматику времен и устойчивых связок?
                </div>
                <div className="text-xs text-slate-400">
                  Перейдите в смежные разделы для тренировки репертуара с Have/Had и таблицы времен.
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href="/have-chunks"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all"
                >
                  <span>Чанки Have/Had</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/tense-chunks"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold border border-white/10 transition-all"
                >
                  <span>Времена</span>
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Sticky Desktop Table of Contents */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-4">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                Навигация по разделам
              </span>
              <TableOfContents items={TOC_ITEMS} />
            </div>

            <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Быстрый совет</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Не учите правила изолированно. Учите неизменяемый каркас и подставляйте реальные задачи из своего дня.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </EditorialLayout>
  );
}
