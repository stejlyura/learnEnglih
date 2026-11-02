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
  HAVE_CHUNKS,
  HAVE_TRAP_CASES,
} from "@/entities/chunk";
import {
  Copy,
  Check,
  Search,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "intro", title: "01. Психолингвистика: Почему have had ломает мозг русскоязычным" },
  { id: "matrix-4way", title: "02. Разница на пальцах: I have vs I had vs I have had vs I had had" },
  { id: "traps", title: "03. Топ-3 роковых грамматических калек и чанки-антидоты" },
  { id: "catalog", title: "04. Интерактивный репертуар всех чанков с Have / Has" },
  { id: "speed-drill", title: "05. Интерактивный Speed-Swapper (Тренажер Быстрой Подстановки)" },
  { id: "protocol", title: "06. 14-дневный протокол интериоризации речевых блоков" },
] as const;

const SELECTOR_ITEMS: readonly ChunkSelectorItem[] = [
  { id: "all", label: "Все чанки", icon: "⚡", count: 35, description: "Полный репертуар всех конструкций с have" },
  { id: "have-had", label: "Have had / Has had", icon: "🔄", count: 10, description: "Present Perfect смыслового have: опыт, длительность, результат" },
  { id: "collocations", label: "Коллокации & Идиомы", icon: "💎", count: 9, description: "Устойчивые связки: have a point, have mixed feelings..." },
  { id: "have-to", label: "Have to (Долженствование)", icon: "🎯", count: 5, description: "Речевые рамки: have to admit, don't have to worry..." },
  { id: "have-got", label: "Have got (Живая речь)", icon: "💬", count: 4, description: "Разговорные формы: I've got a feeling, have you got a second..." },
  { id: "causative", label: "Каузатив (Делегирование)", icon: "🛠️", count: 3, description: "have something done / have someone do" },
  { id: "had-had", label: "Had had & 3rd Conditional", icon: "⏪", count: 3, description: "Предпрошедшее и упущенные возможности в прошлом" },
  { id: "modal-have", label: "Модальные перфекты", icon: "🔮", count: 4, description: "should have had, could have had, would have had to..." },
] as const;

interface DrillPreset {
  readonly title: string;
  readonly head: string;
  readonly slots: readonly string[];
  readonly category: string;
}

const DRILL_PRESETS: readonly DrillPreset[] = [
  {
    title: "Have you had a chance to [slot]?",
    head: "Have you had a chance to",
    category: "Have Had (Вежливый фоллоу-ап)",
    slots: [
      "...look at the pull request I opened yesterday?",
      "...review the updated service level agreement?",
      "...test the latest staging build on iOS?",
      "...glance over the revised quarterly estimates?",
      "...sync with our DevOps engineer regarding the SSL certs?",
    ],
  },
  {
    title: "I've had a lot on my plate recently [slot]",
    head: "I've had a lot on my plate recently",
    category: "Have Had (Объяснение загрузки)",
    slots: [
      "...coordinating the new security compliance audit.",
      "...dealing with unexpected production latency spikes.",
      "...preparing the product architecture presentation for investors.",
      "...managing the migration from our legacy monolithic database.",
      "...onboarding four new junior engineers across squads.",
    ],
  },
  {
    title: "All you have to do is [slot]",
    head: "All you have to do is",
    category: "Have to (Четкие инструкции)",
    slots: [
      "...pass the bearer token in the authorization header.",
      "...run the database migration script in terminal.",
      "...approve the deployment workflow in GitHub Actions.",
      "...drop the environment secrets into your local .env file.",
      "...click the verification link sent to your corporate email.",
    ],
  },
  {
    title: "If we had had more [slot], we would have [result]",
    head: "If we had had more",
    category: "Had Had (3rd Conditional / Ретроспектива)",
    slots: [
      "runway before the launch, we would have rewritten the authentication service.",
      "automated test coverage, we would have caught that race condition earlier.",
      "clarity on client requirements, we would have avoided two weeks of rework.",
      "DevOps support on the team, we would have automated the rollout completely.",
      "time to investigate telemetry, we would have mitigated the memory leak.",
    ],
  },
  {
    title: "We will have our team [slot]",
    head: "We will have our team",
    category: "Causative Have (Делегирование)",
    slots: [
      "look into this database indexing anomaly right after standup.",
      "backfill the missing telemetry metrics before the release window.",
      "audit the third-party webhook payloads for potential vulnerabilities.",
      "verify this edge-case regression on Android 14 devices.",
      "rotate all compromised API keys across our production clusters.",
    ],
  },
];

export default function HaveChunksPage() {
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
    if (slot.startsWith("...")) {
      return `${activeDrill.head} ${slot.replace("...", "").trim()}`;
    }
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

    return HAVE_CHUNKS.filter((item) => {
      // Category filter
      if (activeTab !== "all" && item.category !== activeTab) {
        return false;
      }

      // Search filter
      if (!query) return true;

      return (
        item.chunk.toLowerCase().includes(query) ||
        item.meaningRu.toLowerCase().includes(query) ||
        item.formula.toLowerCase().includes(query) ||
        item.context.toLowerCase().includes(query) ||
        item.exampleEn.toLowerCase().includes(query) ||
        item.exampleRu.toLowerCase().includes(query)
      );
    });
  }, [activeTab, searchQuery]);

  return (
    <EditorialLayout
      title="Архитектура Have / Has / Have Had"
      badge="Грамматическая Беглость ⚡"
      badgeColor="secondary"
      readTime="14 мин"
      metaCategory="Фундаментальная Грамматика B2 → C1"
      activeRoute="/have-chunks"
      lead={
        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
          Полный репертуар речевых чанков с глаголом have: от Present Perfect (have had) и каузатива до дипломатических связок и 3rd Conditionals.
        </p>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 01: Psycholinguistics */}
          <section id="intro" className="scroll-mt-24 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono text-sm font-bold">
                01
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Психолингвистика: Почему have had ломает мозг русскоязычным
              </h2>
            </div>

            <p className="text-slate-300 leading-relaxed text-base">
              В русском языке категория перфекта отсутствует как класс. Когда мы говорим:{" "}
              <em className="text-cyan-300">«У меня был завал на этой неделе»</em> или{" "}
              <em className="text-cyan-300">«Этот ноутбук у меня уже 3 года»</em>, наш мозг генерирует
              либо прошедшее время (<em>был</em>), либо настоящее (<em>у меня есть</em>).
            </p>

            <QuoteCallout cite="Michael Lewis • The Lexical Approach">
              Попытка пословно переводить русское &laquo;у меня есть уже 2 года&raquo; порождает самую устойчивую фоссилизированную ошибку русскоязычных: &laquo;I have this 2 years&raquo;. Носитель же мыслит лексическим каркасом длительности: I&apos;ve had this for...
            </QuoteCallout>

            <p className="text-slate-300 leading-relaxed text-base">
              Конструкция <span className="font-mono text-indigo-300 font-semibold">have had</span> — это не
              «два раза повторенное слово из-за ошибки». Это:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-xs uppercase tracking-wider font-mono text-indigo-400 font-semibold block mb-1">
                  1. Вспомогательный HAVE
                </span>
                <p className="text-sm text-slate-300">
                  Служит маркером времени <strong>Present Perfect</strong> — соединяет прошлое событие с настоящим моментом.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-semibold block mb-1">
                  2. Смысловой HAD (V3)
                </span>
                <p className="text-sm text-slate-300">
                  Третья форма глагола <em>have</em> в значении обладания, пережитого опыта или физического действия.
                </p>
              </div>
            </div>
          </section>

          {/* Section 02: 4-Way Matrix */}
          <section id="matrix-4way" className="scroll-mt-24 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono text-sm font-bold">
                02
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Разница на пальцах: I have vs I had vs I have had vs I had had
              </h2>
            </div>

            <p className="text-slate-300 leading-relaxed text-base">
              Чтобы навсегда убрать колебания перед репликой, зафиксируйте разницу четырех временных горизонтов:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* I have */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    Present Simple
                  </span>
                  <span className="text-xs text-slate-400">Прямо сейчас / Вообще</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">I have a meeting</div>
                <p className="text-xs text-slate-300">
                  Факт настоящего времени. Встреча запланирована или проходит прямо сейчас.
                </p>
                <div className="text-xs text-emerald-300/80 italic">
                  «У меня созвон в календаре»
                </div>
              </div>

              {/* I had */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    Past Simple
                  </span>
                  <span className="text-xs text-slate-400">Отрезанное прошлое</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">I had a meeting yesterday</div>
                <p className="text-xs text-slate-300">
                  Событие полностью завершилось в прошлом, время закрыто точным маркером (yesterday, on Monday).
                </p>
                <div className="text-xs text-amber-300/80 italic">
                  «Вчера у меня была встреча (и она кончилась)»
                </div>
              </div>

              {/* I have had */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-indigo-500/30 space-y-2 shadow-lg shadow-indigo-500/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                    Present Perfect
                  </span>
                  <span className="text-xs text-indigo-300">Мост в настоящее</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">I&apos;ve had 3 meetings today</div>
                <p className="text-xs text-slate-300">
                  Период времени (today, this week) еще продолжается! Или результат прямо влияет на текущую секунду.
                </p>
                <div className="text-xs text-indigo-300 italic">
                  «Сегодня у меня уже было 3 созвона (день еще идет)»
                </div>
              </div>

              {/* I had had */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-violet-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider">
                    Past Perfect
                  </span>
                  <span className="text-xs text-slate-400">Предпрошедшее</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">We had already had 2 outages</div>
                <p className="text-xs text-slate-300">
                  Событие случилось ДО другого момента в прошлом («By the time we launched, we had had...»).
                </p>
                <div className="text-xs text-violet-300 italic">
                  «До того как мы запустились, у нас уже было 2 сбоя»
                </div>
              </div>
            </div>
          </section>

          {/* Section 03: Traps */}
          <section id="traps" className="scroll-mt-24 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-mono text-sm font-bold">
                03
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Топ-3 роковых грамматических калек и чанки-антидоты
              </h2>
            </div>

            <p className="text-slate-300 leading-relaxed text-base">
              В устной речи русскоязычные специалисты совершают эти три ошибки в 9 случаях из 10.
              Запомните готовые антидоты:
            </p>

            <div className="space-y-4">
              {HAVE_TRAP_CASES.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{item.title}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/30 text-xs">
                      <span className="text-rose-400 font-bold block mb-1">Опасная калька:</span>
                      <code className="text-rose-200 font-mono text-sm block">{item.wrongRu}</code>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs">
                      <span className="text-emerald-400 font-bold block mb-1">Нативный чанк-антидот:</span>
                      <code className="text-emerald-200 font-mono text-sm block">{item.correctEn}</code>
                      <span className="text-slate-400 block mt-1">{item.correctRu}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-2">
                    {item.explanation}
                  </p>

                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Формула: {item.formulaRule}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 04: Interactive Catalog */}
          <section id="catalog" className="scroll-mt-24 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono text-sm font-bold">
                  04
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    Интерактивный репертуар всех чанков с Have / Has
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Поиск по формулам, переводам и контекстам. Всего: {HAVE_CHUNKS.length} чанков.
                  </p>
                </div>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Поиск по фразе, формуле или переводу (например: plate, laptop, meeting, каузатив)..."
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
                  По запросу «{searchQuery}» ничего не найдено. Попробуйте изменить параметры поиска или переключить категорию.
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
                            title={isExpanded ? "Свернуть" : "Развернуть детали"}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                isExpanded ? "rotate-180 text-cyan-400" : ""
                              }`}
                            />
                          </button>
                        </div>
                      </div>

                      {/* Expandable Details Drawer */}
                      {isExpanded && (
                        <div className="px-5 pb-5 pt-2 border-t border-white/5 bg-slate-950/40 space-y-4 text-xs animate-in fade-in duration-200">
                          {/* Formula */}
                          <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 space-y-1">
                            <span className="text-indigo-400 font-mono font-bold block uppercase tracking-wider text-[11px]">
                              Грамматическая формула блока:
                            </span>
                            <code className="text-indigo-200 font-mono text-xs block">
                              {item.formula}
                            </code>
                          </div>

                          {/* Trap Alert if exists */}
                          {item.trapRu && (
                            <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-1">
                              <span className="text-rose-400 font-semibold block text-[11px]">
                                ⚠️ Типичная ошибка русскоязычных:
                              </span>
                              <p className="text-slate-300 text-xs leading-relaxed">
                                {item.trapRu}
                              </p>
                            </div>
                          )}

                          {/* Real-world Example in Context */}
                          <div className="space-y-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                            <span className="text-slate-400 uppercase tracking-wider font-semibold text-[10px] block">
                              Пример в реальном контексте:
                            </span>
                            <div className="flex items-start justify-between gap-3">
                              <div className="space-y-0.5">
                                <p className="text-slate-100 font-mono text-sm leading-relaxed">
                                  {item.exampleEn}
                                </p>
                                <p className="text-slate-400 text-xs italic">
                                  {item.exampleRu}
                                </p>
                              </div>
                              <SpeakButton
                                text={item.exampleEn}
                                size="sm"
                              />
                            </div>
                          </div>

                          {/* Drill slots preview */}
                          {item.drillSlots && item.drillSlots.length > 0 && (
                            <div className="space-y-1">
                              <span className="text-slate-400 uppercase tracking-wider font-semibold text-[10px] block">
                                Варианты подстановки слотов:
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                {item.drillSlots.map((slot, idx) => (
                                  <div
                                    key={idx}
                                    className="p-1.5 rounded-lg bg-white/5 text-slate-300 font-mono text-[11px]"
                                  >
                                    {slot}
                                  </div>
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
                  Интерактивный Speed-Swapper (Тренажер Быстрой Подстановки)
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Выработайте беглость: зафиксируйте неизменяемый чанк и на лету подставляйте рабочие слоты.
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
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-3">
                <span className="font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                  {activeDrill.category}
                </span>
                <span>Нажимайте на варианты ниже для тренировки</span>
              </div>

              {/* Live Render of Full Sentence */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Сформированное предложение (Ready-to-speak chunk):
                </span>
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight leading-relaxed">
                  <span className="text-indigo-400 underline decoration-indigo-500/50 underline-offset-4">
                    {activeDrill.head}
                  </span>{" "}
                  <span className="text-cyan-300">
                    {activeDrill.slots[selectedSlotIndex].replace("...", "")}
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
                  Выберите сменный слот для подстановки:
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {activeDrill.slots.map((slot, idx) => {
                    const isSelected = selectedSlotIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedSlotIndex(idx)}
                        className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm font-mono transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-cyan-950/40 border-cyan-500 text-white font-semibold shadow-sm"
                            : "bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{slot}</span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Section 06: Protocol */}
          <section id="protocol" className="scroll-mt-24 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-sm font-bold">
                06
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                14-дневный протокол интериоризации речевых блоков
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <MethodCard
                badge="01"
                title="Noticing (Замечание)"
              >
                <p className="text-sm text-slate-300 leading-relaxed mt-2">
                  Перестаньте слушать английскую речь как отдельные слова. Фиксируйте связки: когда носитель говорит &laquo;I&apos;ve had a chance&raquo;, отметьте, почему он не сказал &laquo;I had&raquo;.
                </p>
              </MethodCard>
              <MethodCard
                badge="02"
                title="Substitutions (Субституция)"
              >
                <p className="text-sm text-slate-300 leading-relaxed mt-2">
                  Возьмите 3 ключевых чанка дня (например, Have had on my plate, All you have to do is, Have you had a chance to) и проговорите вслух по 5 своих реальных рабочих задач.
                </p>
              </MethodCard>
              <MethodCard
                badge="03"
                title="Immediate Usage (Применение)"
              >
                <p className="text-sm text-slate-300 leading-relaxed mt-2">
                  Вставьте заготовленный блок в первое же сообщение в Slack или созвон. Одно реальное применение закрепляет паттерн в долговременной памяти лучше 100 карточек.
                </p>
              </MethodCard>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">
                  Готовы проверить себя по всей сетке времен?
                </h4>
                <p className="text-xs text-slate-400">
                  Посмотрите интерактивную матрицу всех 12 времен с готовыми чанками.
                </p>
              </div>
              <Link
                href="/tense-matrix"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shrink-0"
              >
                <span>Таблица Времен (Матрица)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>

        {/* Sidebar Column: Table of Contents */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
          <TableOfContents items={TOC_ITEMS} />

          {/* Quick Helper Box */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Главная шпаргалка</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span>
                  <strong>I have had</strong> — незавершенный период времени (this week, today) или длительность со <em>since/for</em>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold shrink-0">✓</span>
                <span>
                  <strong>I had</strong> — только когда есть точная дата в прошлом (yesterday, on Monday, last sprint).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 font-bold shrink-0">✓</span>
                <span>
                  <strong>I had had</strong> — предпрошедшее событие до другого прошлого момента или 3rd Conditional.
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </EditorialLayout>
  );
}
