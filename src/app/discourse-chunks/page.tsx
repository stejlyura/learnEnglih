"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
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
  DISCOURSE_CHUNKS,
  DISCOURSE_BLOCKS,
  COMPARATIVE_REGISTERS,
  METHODOLOGY_STAGES,
  DiscourseChunkItem,
  DiscourseBlockId,
} from "@/entities/chunk";
import {
  Copy,
  Check,
  Search,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Volume2,
  Layers,
  ChevronDown,
  Timer,
  Play,
  Pause,
  RotateCcw,
  ShieldCheck,
  BookOpen,
  Scale,
  Brain,
  MessageSquare,
  Zap,
} from "lucide-react";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "intro", title: "01. Психолингвистика: Когнитивная компрессия и порождение речи" },
  { id: "catalog", title: "02. Систематизированный репертуар 63 дискурсивных каркасов C1" },
  { id: "registers", title: "03. Сравнительный анализ регистров: От школьного B1 к зрелому C1" },
  { id: "drill-swapper", title: "04. Интерактивный Speed-Swapper (Скоростная субституция)" },
  { id: "protocol-432", title: "05. Протокол 4-3-2: Прогрессивное сжатие времени речи" },
] as const;

const SELECTOR_ITEMS: readonly ChunkSelectorItem[] = [
  { id: "all", label: "Все 63 каркаса", icon: "💎", count: 63, description: "Полный функциональный каталог B2–C1" },
  { id: "block-positioning", label: "01. Ввод позиции", icon: "🎯", count: 10, description: "Эпистемическая модальность и суждения" },
  { id: "block-cohesion", label: "02. Логическая когезия", icon: "🔗", count: 11, description: "Развертывание кумулятивной цепочки" },
  { id: "block-disagreement", label: "03. Смягченное несогласие", icon: "🛡️", count: 11, description: "Бесконфликтная деконструкция" },
  { id: "block-concession", label: "04. Уступка и концессия", icon: "🤝", count: 10, description: "Частичное согласие и контртезис" },
  { id: "block-maneuvering", label: "05. Когнитивные паузы", icon: "⏱️", count: 10, description: "Заполнение пауз без мычания (1.5–3 сек)" },
  { id: "block-synthesis", label: "06. Синтез и резюме", icon: "✨", count: 11, description: "Метадискурс и компрессионный итог" },
  { id: "tab-registers", label: "Регистры: B1 vs C1", icon: "⚖️", count: 7, description: "Социопрагматика Face-Saving" },
  { id: "tab-swapper", label: "Speed Swapper Drill", icon: "⚡", description: "Тренажер незамкнутых слотов" },
  { id: "tab-timer", label: "Таймер 4-3-2", icon: "⏳", description: "Прогрессивное сжатие речи" },
] as const;

interface DrillPreset {
  readonly title: string;
  readonly head: string;
  readonly slots: readonly string[];
}

const DRILL_PRESETS: readonly DrillPreset[] = [
  {
    title: "The strongest case, in my view, is for...",
    head: "The strongest case, in my view, is for",
    slots: [
      "...prioritizing client retention over rapid acquisition.",
      "...consolidating disparate microservices back into a modular monolith.",
      "...establishing an automated compliance verification gate before deployment.",
      "...investing in observability tooling to curb mean time to recovery.",
    ],
  },
  {
    title: "I see where you are coming from, but...",
    head: "I see where you are coming from, but",
    slots: [
      "...unit economics simply will not scale on that cloud infrastructure.",
      "...our engineering headcount cannot absorb two parallel pilots.",
      "...customer feedback highlights simplicity over feature density.",
      "...delaying the security patch exposes our user data to exploit risks.",
    ],
  },
  {
    title: "Admittedly, [...], but...",
    head: "Admittedly, upfront migration costs are high, but",
    slots: [
      "...long-term operational savings justify the outlay.",
      "...the productivity gains become obvious within two weeks.",
      "...our round-the-clock enterprise SLA is unmatched in the industry.",
      "...the caching layer has stabilized performance under heavy spikes.",
    ],
  },
  {
    title: "That is an interesting angle; let me think about that...",
    head: "That is an interesting angle; let me think about that",
    slots: [
      "...before committing to a specific database engine.",
      "...in the context of our multi-region redundancy goals.",
      "...to evaluate the trade-offs between throughput and latency.",
      "...and circle back with hard telemetry metrics tomorrow.",
    ],
  },
  {
    title: "What it boils down to is that...",
    head: "What it boils down to is that",
    slots: [
      "...we must defend our gross margins before committing to international expansion.",
      "...our platform requires automated end-to-end regression guarantees.",
      "...the enterprise client demands a legally binding SLA before signing.",
      "...our current tech stack cannot sustain another doubling of concurrency.",
    ],
  },
];

export default function DiscourseChunksPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedChunkId, setExpandedChunkId] = useState<string | null>(null);

  // Speed-swapper drill selection
  const [selectedDrill, setSelectedDrill] = useState<DrillPreset>(DRILL_PRESETS[0]);

  // 4-3-2 Timer state
  const [timerStage, setTimerStage] = useState<4 | 3 | 2>(4);
  const [timeLeft, setTimeLeft] = useState<number>(240);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning]);

  const handleSetTimerStage = (stage: 4 | 3 | 2) => {
    setIsTimerRunning(false);
    setTimerStage(stage);
    setTimeLeft(stage * 60);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimeLeft(timerStage * 60);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleCopy = (text: string, id: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId((curr) => (curr === id ? null : curr));
      }, 2000);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedChunkId((prev) => (prev === id ? null : id));
  };

  // Filter chunks based on category and search
  const filteredChunks = useMemo(() => {
    return DISCOURSE_CHUNKS.filter((chunk) => {
      // Tab filter
      if (activeTab === "tab-registers" || activeTab === "tab-swapper" || activeTab === "tab-timer") {
        return false;
      }
      if (activeTab !== "all") {
        const targetBlock = activeTab.replace("block-", "");
        if (chunk.blockId !== targetBlock) {
          return false;
        }
      }

      // Search query filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        chunk.frameEn.toLowerCase().includes(q) ||
        chunk.authenticExampleEn.toLowerCase().includes(q) ||
        chunk.pragmaticFunctionRu.toLowerCase().includes(q) ||
        chunk.russianEquivalent.toLowerCase().includes(q) ||
        chunk.blockNameRu.toLowerCase().includes(q)
      );
    });
  }, [activeTab, searchQuery]);

  // Group filtered chunks by block
  const groupedChunks = useMemo(() => {
    const groups: { [key in DiscourseBlockId]?: DiscourseChunkItem[] } = {};
    for (const chunk of filteredChunks) {
      if (!groups[chunk.blockId]) {
        groups[chunk.blockId] = [];
      }
      groups[chunk.blockId]!.push(chunk);
    }
    return groups;
  }, [filteredChunks]);

  return (
    <EditorialLayout
      title="Дискурсивная Архитектура Спонтанной Речи: 63 Чанка Аргументации B2 → C1"
      metaCategory="Когнитивная компрессия & Репертуар дебатов"
      readTime="Каталог 63 каркасов • Практика"
      badge="Дискурс C1 💎"
      badgeColor="primary"
      activeRoute="/discourse-chunks"
      lead="Полный функциональный репертуар префабрицированных предикативных рамок, полуфиксированных конструкций и метадискурсивных маркеров. 63 аутентичных каркаса, разбитых по 6 прагматическим блокам, с интерактивной озвучкой, тренажером слотов и протоколом прогрессивной компрессии 4-3-2."
      infoItems={[
        { label: "Объем каталога", value: "63 специализированных каркаса аргументации" },
        { label: "Прагматические блоки", value: "6 категорий: от ввода позиции до итогового синтеза" },
        { label: "Когнитивный эффект", value: "Освобождение кратковременной памяти (MLR +240%)" },
      ]}
      topBanner={
        <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg my-6">
          <div>
            <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Фундаментальный Лонгрид: Психолингвистика Дискурсивной Архитектуры</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1">
              Когнитивные механизмы Левелта, когнитивная компрессия, модель Face-Saving Браун-Левинсона и 18 источников.
            </div>
          </div>
          <Link
            href="/longreads?article=discourse-architecture"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer self-start sm:self-auto"
          >
            <span>Читать исследование →</span>
          </Link>
        </div>
      }
    >
      {/* Category selector */}
      <ChunkResponsiveSelector
        items={SELECTOR_ITEMS}
        activeId={activeTab}
        onSelect={setActiveTab}
        title="Прагматические блоки каталога"
      />

      {/* Search Input Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск по каркасу, примеру, переводу или функции (напр. 'view', 'concede', 'boils down', 'несогласие')..."
          className="w-full pl-10 pr-4 py-3 bg-white/[0.03] hover:bg-white/[0.05] focus:bg-white/[0.07] border border-white/10 focus:border-cyan-500/50 rounded-2xl text-sm text-white placeholder-slate-400 focus:outline-none transition-all shadow-inner"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-white cursor-pointer"
          >
            Очистить
          </button>
        )}
      </div>

      {activeTab === "all" && !searchQuery && <TableOfContents items={TOC_ITEMS} />}

      {/* SECTION 1: INTRO */}
      {(activeTab === "all" || activeTab === "intro") && !searchQuery && (
        <section id="intro" className="my-10 pt-4">
          <h2 className="chapter-heading">
            01. Психолингвистика: Когнитивная компрессия и порождение речи
          </h2>

          <p>
            Устойчивое заблуждение в методике преподавания языков сводится к предположению, что переход к уровню C1 обусловлен экстенсивным накоплением низкочастотной лексики объемом свыше 10 000 изолированных слов.
          </p>

          <p>
            Эмпирические корпусные исследования показывают обратную зависимость: устная спонтанная коммуникация носителей языка <strong>на 95–97% формируется за счет ядерного массива первых 2 000–3 000 слов</strong>. Качественная трансформация спикера C1 обусловлена не размером пассивного словаря, а структурной плотностью применения <strong>устойчивых формульных каркасов</strong>.
          </p>

          <QuoteCallout cite="Виллем Левелт (Willem Levelt), модель речепорождения">
            «Попытка конструировать синтагмы аналитически, соединяя каждое слово по правилам грамматики, мгновенно парализует кратковременную память. Готовые полуфиксированные каркасы обеспечивают когнитивную компрессию: мозг извлекает блок целиком, освобождая ресурсы исключительно для открытого информационного слота».
          </QuoteCallout>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
              <div className="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5" />
                <span>Когнитивная компрессия</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-0">
                Мозг оперирует каркасом как неделимой сущностью, сокращая нагрузку на префронтальную кору до 75%.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/20">
              <div className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Temporal Fluency</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-0">
                Перенос пауз строго на границы синтаксических блоков и удлинение отрезка непрерывной речи (MLR).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Face-Saving Acts</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-0">
                Защита от конфронтации: мягкое выражение несогласия и тактические уступки по модели Браун и Левинсона.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: CATALOG OF 63 CHUNKS */}
      {(activeTab === "all" || activeTab.startsWith("block-")) && (
        <section id="catalog" className="my-10 pt-4">
          <div className="flex items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="chapter-heading mb-1">
                02. Систематизированный репертуар 63 дискурсивных каркасов C1
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-0">
                Разбивка по 6 прагматическим функциям с аутентичным контекстом, нативной озвучкой и быстрой подстановкой слотов.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shrink-0">
              Найдено: {filteredChunks.length} из 63
            </span>
          </div>

          <div className="space-y-12">
            {DISCOURSE_BLOCKS.map((block) => {
              const blockChunks = groupedChunks[block.id] || [];
              if (blockChunks.length === 0) return null;

              const badgeColors: Record<string, string> = {
                cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
                emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
                amber: "bg-amber-500/20 text-amber-300 border-amber-500/30",
                indigo: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
                violet: "bg-violet-500/20 text-violet-300 border-violet-500/30",
                rose: "bg-rose-500/20 text-rose-300 border-rose-500/30",
              };

              return (
                <div key={block.id} className="space-y-4">
                  {/* Block Header Banner */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{block.icon}</span>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {block.titleRu}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5 mb-0">
                          {block.descriptionRu}
                        </p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-xl text-xs font-mono font-bold border shrink-0 self-start sm:self-auto ${badgeColors[block.badgeColor] || "bg-white/10 text-white"}`}>
                      {blockChunks.length} {blockChunks.length === 1 ? "каркас" : "каркасов"}
                    </span>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 gap-4">
                    {blockChunks.map((chunk) => {
                      const isExpanded = expandedChunkId === chunk.id;
                      const isCopied = copiedId === chunk.id;

                      return (
                        <div
                          key={chunk.id}
                          className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-500/30 transition-all shadow-sm"
                        >
                          {/* Top row */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-white/5 text-slate-300 border border-white/10">
                                {chunk.blockNumber} • {chunk.blockNameRu}
                              </span>
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                                {chunk.slotType}
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <button
                                type="button"
                                onClick={() => handleCopy(chunk.frameEn, chunk.id)}
                                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
                                title="Скопировать каркас"
                              >
                                {isCopied ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                              <SpeakButton text={chunk.audioText} size="sm" />
                            </div>
                          </div>

                          {/* Chunk Frame Heading */}
                          <div className="text-base sm:text-lg font-bold text-white tracking-wide font-mono mb-2 flex flex-wrap items-center gap-2">
                            <span className="text-cyan-300">{chunk.frameEn}</span>
                          </div>

                          {/* Russian Equivalent & Pragmatic Role */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 rounded-xl bg-black/30 border border-white/5 mb-3 text-xs">
                            <div>
                              <span className="text-slate-400 font-semibold">Перевод / Русский аналог:</span>
                              <div className="text-slate-200 mt-0.5 font-medium">
                                {chunk.russianEquivalent}
                              </div>
                            </div>
                            <div>
                              <span className="text-slate-400 font-semibold">Прагматическая функция:</span>
                              <div className="text-slate-300 mt-0.5">
                                {chunk.pragmaticFunctionRu}
                              </div>
                            </div>
                          </div>

                          {/* Authentic Example */}
                          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-3">
                            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                              <span>Аутентичный контекст употребления:</span>
                              <SpeakButton text={chunk.authenticExampleEn} size="sm" />
                            </div>
                            <div className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                              «{chunk.authenticExampleEn}»
                            </div>
                          </div>

                          {/* Slot Swapper Expandable Toggle */}
                          <div className="border-t border-white/5 pt-2.5">
                            <button
                              type="button"
                              onClick={() => toggleExpand(chunk.id)}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors"
                            >
                              <span>Варианты скоростной субституции слота ({chunk.slotSwaps.length})</span>
                              <ChevronDown
                                className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                              />
                            </button>

                            {isExpanded && (
                              <div className="mt-3 space-y-2 pl-3 border-l-2 border-cyan-500/40">
                                {chunk.slotSwaps.map((swap, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] text-xs font-mono text-slate-200"
                                  >
                                    <span className="leading-relaxed">{swap}</span>
                                    <SpeakButton text={swap} size="sm" />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* No Results Message */}
      {filteredChunks.length === 0 && activeTab !== "tab-registers" && activeTab !== "tab-swapper" && activeTab !== "tab-timer" && (
        <div className="text-center py-12 px-4 rounded-3xl bg-white/[0.02] border border-white/10 my-8">
          <div className="text-3xl mb-2">🔍</div>
          <div className="text-base font-bold text-white mb-1">Ничего не найдено</div>
          <div className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
            По запросу «{searchQuery}» нет совпадений. Попробуйте изменить формулировку или сбросьте фильтры.
          </div>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveTab("all");
            }}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all cursor-pointer"
          >
            Сбросить фильтры
          </button>
        </div>
      )}

      {/* SECTION 3: COMPARATIVE REGISTERS */}
      {(activeTab === "all" || activeTab === "tab-registers") && !searchQuery && (
        <section id="registers" className="my-12 pt-6">
          <div className="flex items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="chapter-heading mb-1">
                03. Сравнительный анализ регистров: От школьного B1 к зрелому C1
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-0">
                Смена прагматического регистра по модели сохранения лица (Face-Saving Acts) Браун и Левинсона.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20 shrink-0">
              7 ключевых паттернов
            </span>
          </div>

          <div className="space-y-4">
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
                    Socio-Pragmatic Shift
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  {/* B1-B2 Basic */}
                  <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                    <div className="text-[11px] font-bold text-rose-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>❌ Базовый шаблон (B1–B2)</span>
                      <SpeakButton text={reg.basicExample} size="sm" />
                    </div>
                    <div className="text-xs font-mono text-rose-300 mb-1.5 font-semibold">
                      {reg.basicTemplateB1B2}
                    </div>
                    <div className="text-xs text-slate-300 italic">
                      «{reg.basicExample}»
                    </div>
                  </div>

                  {/* C1 Advanced Frame */}
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                    <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>✅ Дискурсивный каркас (Solid C1)</span>
                      <SpeakButton text={reg.advancedExample} size="sm" />
                    </div>
                    <div className="text-xs font-mono text-emerald-300 mb-1.5 font-semibold">
                      {reg.advancedFrameC1}
                    </div>
                    <div className="text-xs text-slate-300 italic">
                      «{reg.advancedExample}»
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-amber-300">Лингвистический и социопрагматический эффект: </span>
                  {reg.socioPragmaticEffectRu}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 4: SPEED SWAPPER INTERACTIVE STUDIO */}
      {(activeTab === "all" || activeTab === "tab-swapper") && !searchQuery && (
        <section id="drill-swapper" className="my-12 pt-6">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="chapter-heading mb-1">
                04. Интерактивный Speed-Swapper (Тренажер Скоростной Субституции)
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-0">
                Выработайте мгновенную гибкость оперирования незамкнутыми слотами под любые предметные домены.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shrink-0">
              Drill Studio
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-black border border-indigo-500/30 shadow-xl">
            {/* Template selector pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {DRILL_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedDrill(preset)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedDrill.title === preset.title
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {preset.title.split(",")[0]}...
                </button>
              ))}
            </div>

            {/* Anchor Frame Box */}
            <div className="p-4 rounded-2xl bg-black/50 border border-indigo-500/30 mb-6">
              <div className="text-[11px] uppercase tracking-wider font-semibold text-indigo-400 mb-1">
                Якорный каркас (Стабильное основание):
              </div>
              <div className="text-lg font-mono font-bold text-white flex items-center justify-between gap-3">
                <span className="text-cyan-300">{selectedDrill.head}</span>
                <SpeakButton text={selectedDrill.head} size="sm" />
              </div>
            </div>

            {/* Dynamic Slot List */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Произнесите вслух каркас с каждым из 4 слотов:
              </div>
              {selectedDrill.slots.map((slot, index) => {
                const fullSentence = `${selectedDrill.head} ${slot}`;
                return (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-indigo-500/40 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-slate-200 group-hover:text-white">
                        {slot}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        type="button"
                        onClick={() => handleCopy(fullSentence, `drill-${index}`)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
                        title="Скопировать целиком"
                      >
                        {copiedId === `drill-${index}` ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <SpeakButton text={fullSentence} size="sm" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: 4-3-2 PROTOCOL TIMER */}
      {(activeTab === "all" || activeTab === "tab-timer") && !searchQuery && (
        <section id="protocol-432" className="my-12 pt-6">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="chapter-heading mb-1">
                05. Метод Прогрессивной Компрессии: Интерактивный Таймер 4-3-2
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-0">
                Классический протокол автоматизации формульной беглости под нарастающим дефицитом времени.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/10 text-rose-300 border border-rose-500/20 shrink-0">
              4-3-2 Drill
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-rose-950/30 via-slate-900 to-black border border-rose-500/30 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left Column: Instructions */}
              <div>
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Timer className="w-4 h-4 text-rose-400" />
                  <span>Правила выполнения раунда</span>
                </h3>
                <ol className="text-xs text-slate-300 space-y-2 pl-4 list-decimal leading-relaxed">
                  <li>
                    Выберите спорный рабочий тезис (например: перенос релиза, рефакторинг legacy, SLA).
                  </li>
                  <li>
                    <strong>Раунд 1 (4 минуты):</strong> Изложите аргументацию вслух, обязательно задействовав минимум 5 разных каркасов.
                  </li>
                  <li>
                    <strong>Раунд 2 (3 минуты):</strong> Повторите тот же тезис быстрее, отсекая описательные длинноты.
                  </li>
                  <li>
                    <strong>Раунд 3 (2 минуты):</strong> Финальная компрессия. Мозг вынужден говорить исключительно монолитными формульными мостами.
                  </li>
                </ol>
              </div>

              {/* Right Column: Timer Display & Controls */}
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-black/60 border border-rose-500/20 text-center">
                {/* Round selection tabs */}
                <div className="flex gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => handleSetTimerStage(4)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      timerStage === 4 ? "bg-rose-600 text-white shadow-md" : "bg-white/5 text-slate-400 hover:bg-white/10"
                    }`}
                  >
                    4 мин (Раунд 1)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSetTimerStage(3)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      timerStage === 3 ? "bg-rose-600 text-white shadow-md" : "bg-white/5 text-slate-400 hover:bg-white/10"
                    }`}
                  >
                    3 мин (Раунд 2)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSetTimerStage(2)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      timerStage === 2 ? "bg-rose-600 text-white shadow-md" : "bg-white/5 text-slate-400 hover:bg-white/10"
                    }`}
                  >
                    2 мин (Раунд 3)
                  </button>
                </div>

                {/* Big Time readout */}
                <div className="text-5xl sm:text-6xl font-mono font-extrabold text-white tracking-widest my-3">
                  {formatTime(timeLeft)}
                </div>

                {/* Control buttons */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    type="button"
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    {isTimerRunning ? (
                      <>
                        <Pause className="w-4 h-4" />
                        <span>Пауза</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span>Старт речи</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleResetTimer}
                    className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                    title="Сбросить таймер"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Сброс</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* METHODOLOGY STEPS OVERVIEW */}
      {!searchQuery && (activeTab === "all") && (
        <section className="my-12 pt-6 border-t border-white/10">
          <h2 className="chapter-heading mb-6">
            Методология дидактической автоматизации формульных единиц
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {METHODOLOGY_STAGES.map((stage) => (
              <div
                key={stage.id}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      Этап {stage.number}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      Protocol
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {stage.titleRu}
                  </h4>
                  <div className="text-xs text-cyan-300/80 mb-2 font-medium">
                    {stage.subtitleRu}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {stage.descriptionRu}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] text-slate-300">
                  <span className="font-semibold text-slate-200">Ключевое действие: </span>
                  {stage.actionItem}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </EditorialLayout>
  );
}
