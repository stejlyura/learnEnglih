"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  AUDIT_CHUNKS_DATA, 
  AuditChunkCategory, 
  AuditChunkItem 
} from "@/entities/chunk";
import { 
  Volume2, 
  Copy, 
  Check, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Flame, 
  Brain, 
  FileText, 
  ExternalLink,
  Play,
  Pause,
  Layers,
  ArrowRight
} from "lucide-react";
import { cn } from "@/shared/lib";

type ViewMode = "list" | "flashcards" | "speed-swap";

const CATEGORY_TABS: readonly { id: AuditChunkCategory; label: string; count: number; badgeColor: string }[] = [
  { id: "all", label: "Все чанки", count: 18, badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" },
  { id: "fossilized", label: "🔥 Фоссилизированные кальки", count: 7, badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30" },
  { id: "grammar_gaps", label: "🧩 Грамматические пробелы", count: 5, badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
  { id: "lexical_c1", label: "💎 C1 Дипломатия & Связки", count: 4, badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
  { id: "noticing", label: "🎯 Точность & Noticing", count: 2, badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
] as const;

export default function AuditChunksPage() {
  const [activeCategory, setActiveCategory] = useState<AuditChunkCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("list");

  // Flashcards state
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());

  // Speed-swap state
  const [speedSwapIndex, setSpeedSwapIndex] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Audio / Copy state
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const filteredChunks = useMemo(() => {
    return AUDIT_CHUNKS_DATA.filter((chunk) => {
      if (activeCategory !== "all" && chunk.category !== activeCategory) {
        return false;
      }
      if (!searchQuery.trim()) {
        return true;
      }
      const q = searchQuery.toLowerCase();
      return (
        chunk.title.toLowerCase().includes(q) ||
        chunk.target.toLowerCase().includes(q) ||
        chunk.trap.toLowerCase().includes(q) ||
        chunk.triggerRu.toLowerCase().includes(q) ||
        chunk.why.toLowerCase().includes(q) ||
        chunk.context.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, searchQuery]);

  // Flashcards filtered deck
  const flashcardDeck = useMemo(() => {
    return filteredChunks.length > 0 ? filteredChunks : AUDIT_CHUNKS_DATA;
  }, [filteredChunks]);

  const currentFlashcard = flashcardDeck[cardIndex % flashcardDeck.length];

  // Speed-swap current item
  const currentSpeedSwapItem = filteredChunks[speedSwapIndex % filteredChunks.length] || AUDIT_CHUNKS_DATA[0];

  // Timer effect for speed swap
  useEffect(() => {
    if (isTimerRunning) {
      timerIntervalRef.current = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isTimerRunning]);

  const handleStartTimer = () => {
    setTimerSeconds(60);
    setIsTimerRunning(true);
  };

  const handlePauseTimer = () => {
    setIsTimerRunning((prev) => !prev);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(60);
  };

  // Text-to-speech helper
  const handleSpeak = (text: string, id: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    if (speakingId === id) {
      setSpeakingId(null);
      return;
    }

    const cleanText = text.replace(/\[.*?\]/g, "").replace(/[❌✅]/g, "").trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "en-US";
    utterance.rate = 0.95;

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  // Copy helper
  const handleCopy = (text: string, id: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const toggleMastered = (id: string) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % flashcardDeck.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + flashcardDeck.length) % flashcardDeck.length);
  };

  return (
    <div className="main-wrapper pb-24">
      {/* ─── Hero Section ─── */}
      <div className="mb-10 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span>Клинический SLA Аудит • 18 Персональных Чанков</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/tests/diagnostic_audit_report.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Полный клинический отчет</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a
              href="/tests/diagnostic_test.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Повторить тест</span>
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Чанки-Антидоты из Персонального Аудита
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Персональный набор речевых блоков, составленный по результатам вашей диагностики. Выжигание 7 подтвержденных русских калек (High Confidence Traps), устранение скрытых синтаксических сбоев и укрепление сильных C1-островков речи.
          </p>
        </div>

        {/* Audit Highlights Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3.5 rounded-2xl bg-rose-950/20 border border-rose-500/25">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Flame className="w-4 h-4" />
              <span>Кальки L1</span>
            </div>
            <div className="text-2xl font-black text-rose-200">7 узлов</div>
            <div className="text-[11px] text-slate-400 mt-1">feel myself, advices, actual, comfortable...</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/25">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <AlertTriangle className="w-4 h-4" />
              <span>Синтаксис</span>
            </div>
            <div className="text-2xl font-black text-amber-200">5 пробелов</div>
            <div className="text-[11px] text-slate-400 mt-1">mixed cond, high time, at expense of...</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-cyan-950/20 border border-cyan-500/25">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>C1 Связки</span>
            </div>
            <div className="text-2xl font-black text-cyan-200">4 чанка</div>
            <div className="text-[11px] text-slate-400 mt-1">inclined to think, inversion, despite...</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/25">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Точность</span>
            </div>
            <div className="text-2xl font-black text-emerald-200">2 узла</div>
            <div className="text-[11px] text-slate-400 mt-1">stop to do, congratulate on...</div>
          </div>
        </div>
      </div>

      {/* ─── Filter & Mode Controls ─── */}
      <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 mb-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по ошибке, чанку-антидоту или русскому триггеру..."
              className="w-full bg-slate-950/70 border border-white/15 focus:border-indigo-400 focus:outline-none rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 transition-all pl-10"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={cn(
                "flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer",
                viewMode === "list"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Список ({filteredChunks.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("flashcards")}
              className={cn(
                "flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer",
                viewMode === "flashcards"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Shock Карточки</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("speed-swap")}
              className={cn(
                "flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer",
                viewMode === "speed-swap"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Speed-Swap (60s)</span>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORY_TABS.map((tab) => {
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveCategory(tab.id);
                  setCardIndex(0);
                  setIsFlipped(false);
                  setSpeedSwapIndex(0);
                }}
                className={cn(
                  "shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer",
                  isSelected
                    ? "bg-white/15 text-white border-white/30 shadow-md"
                    : "bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-slate-200"
                )}
              >
                <span>{tab.label}</span>
                <span className={cn("px-1.5 py-0.2 rounded-md text-[10px] font-mono border", tab.badgeColor)}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Mode 1: List View ─── */}
      {viewMode === "list" && (
        <div className="space-y-4">
          {filteredChunks.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/60 rounded-3xl border border-white/10">
              <p className="text-slate-300 text-base">Ничего не найдено по фильтрам.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-3 text-cyan-400 hover:underline text-xs font-semibold cursor-pointer"
              >
                Сбросить фильтры
              </button>
            </div>
          ) : (
            filteredChunks.map((chunk) => {
              const isFossilized = chunk.category === "fossilized";
              const isGrammar = chunk.category === "grammar_gaps";
              const isMastered = masteredIds.has(chunk.id);

              return (
                <div
                  key={chunk.id}
                  className={cn(
                    "p-5 sm:p-6 rounded-2xl border transition-all bg-slate-900/70 backdrop-blur-md relative overflow-hidden group",
                    isFossilized 
                      ? "border-rose-500/25 hover:border-rose-500/50 shadow-lg shadow-rose-950/10" 
                      : isGrammar
                      ? "border-amber-500/25 hover:border-amber-500/50 shadow-lg shadow-amber-950/10"
                      : "border-cyan-500/25 hover:border-cyan-500/50 shadow-lg shadow-cyan-950/10"
                  )}
                >
                  {/* Subtle top indicator bar */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-1",
                      isFossilized ? "bg-gradient-to-r from-rose-500 to-amber-500" : isGrammar ? "bg-gradient-to-r from-amber-500 to-indigo-500" : "bg-gradient-to-r from-cyan-500 to-emerald-500"
                    )}
                  />

                  {/* Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border",
                          isFossilized
                            ? "bg-rose-500/15 text-rose-300 border-rose-500/30"
                            : isGrammar
                            ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
                            : "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                        )}
                      >
                        {chunk.categoryName}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {chunk.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleSpeak(chunk.audioText, chunk.id)}
                        className={cn(
                          "p-2 rounded-xl border transition-all cursor-pointer",
                          speakingId === chunk.id
                            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 animate-pulse"
                            : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
                        )}
                        title="Прослушать произношение"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopy(chunk.target, chunk.id)}
                        className="p-2 rounded-xl bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
                        title="Скопировать чанк"
                      >
                        {copiedId === chunk.id ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleMastered(chunk.id)}
                        className={cn(
                          "px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex items-center gap-1",
                          isMastered
                            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                            : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-slate-200"
                        )}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{isMastered ? "Освоено" : "В прогрессе"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Contrast Matrix: ❌ Ложная калька vs ✅ Нативный эталон */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                    {/* Ложная колея */}
                    <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/20">
                      <div className="text-[11px] font-bold text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>Ловушка интерференции (Калька)</span>
                      </div>
                      <div className="font-mono text-sm text-rose-200 font-semibold line-through decoration-rose-500/60">
                        {chunk.trap}
                      </div>
                      <div className="text-xs text-rose-300/80 mt-1 italic">
                        Триггер: {chunk.triggerRu}
                      </div>
                    </div>

                    {/* Нативный эталон */}
                    <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                      <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Чанк-Антидот (Эталон речи)</span>
                      </div>
                      <div className="font-mono text-base text-emerald-200 font-bold">
                        {chunk.target}
                      </div>
                      <div className="text-xs text-emerald-300/80 mt-1">
                        Дрилл: <code className="bg-emerald-900/40 px-1 py-0.5 rounded text-[11px]">{chunk.drillPrompt}</code>
                      </div>
                    </div>
                  </div>

                  {/* Linguistic Reason & Context */}
                  <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <p className="leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                      <strong className="text-indigo-300">Почему возникает сбой: </strong>
                      {chunk.why}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-slate-400">
                      <div>
                        <span className="text-slate-500 font-medium">Контекст в работе: </span>
                        <span className="text-slate-200 font-medium font-mono text-xs">{chunk.context}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* ─── Mode 2: Shock & Contrast Flashcards ─── */}
      {viewMode === "flashcards" && currentFlashcard && (
        <div className="max-w-2xl mx-auto">
          {/* Deck Header & Counter */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-semibold text-slate-400">
              Карточка <span className="text-white font-bold font-mono">{(cardIndex % flashcardDeck.length) + 1}</span> из <span className="font-mono">{flashcardDeck.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Освоено: {masteredIds.size}</span>
              </span>
            </div>
          </div>

          {/* Interactive Card */}
          <div
            onClick={() => setIsFlipped((prev) => !prev)}
            className={cn(
              "min-h-[380px] p-6 sm:p-8 rounded-3xl border transition-all cursor-pointer select-none flex flex-col justify-between shadow-2xl relative overflow-hidden group",
              !isFlipped
                ? "bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border-white/15 hover:border-indigo-400/40 hover:shadow-indigo-500/10"
                : "bg-gradient-to-br from-slate-900 via-emerald-950/30 to-slate-950 border-emerald-500/30 shadow-emerald-500/10"
            )}
          >
            {/* Top pill inside card */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-slate-200 border border-white/10">
                {currentFlashcard.categoryName}
              </span>
              <span className="text-xs text-slate-400">
                {!isFlipped ? "👆 Кликните, чтобы открыть антидот" : "✅ Антидот открыт"}
              </span>
            </div>

            {/* Main Card Content */}
            <div className="my-auto py-6 text-center space-y-4">
              {!isFlipped ? (
                <>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                    Русский речевой триггер
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {currentFlashcard.triggerRu}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Как сказать это на созвоне без русской кальки и без формулярных затыков?
                  </p>
                </>
              ) : (
                <div className="space-y-5 text-left">
                  {/* Calque Warning */}
                  <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/30">
                    <div className="text-[11px] font-bold text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5" />
                      <span>Ложная колея (Запрещено говорить)</span>
                    </div>
                    <div className="font-mono text-base text-rose-200 font-semibold line-through decoration-rose-500">
                      {currentFlashcard.trap}
                    </div>
                  </div>

                  {/* Target Antidote */}
                  <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40">
                    <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Нативный Чанк-Антидот</span>
                    </div>
                    <div className="font-mono text-xl sm:text-2xl text-emerald-200 font-bold">
                      {currentFlashcard.target}
                    </div>
                  </div>

                  {/* Explanation & Context */}
                  <p className="text-xs text-slate-300 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                    <strong>Суть сбоя: </strong>
                    {currentFlashcard.why}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Actions inside card */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => handleSpeak(currentFlashcard.audioText, currentFlashcard.id)}
                className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-cyan-200 font-semibold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>Озвучить эталон</span>
              </button>

              <button
                type="button"
                onClick={() => toggleMastered(currentFlashcard.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer",
                  masteredIds.has(currentFlashcard.id)
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                    : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
                )}
              >
                <Check className="w-3.5 h-3.5" />
                <span>{masteredIds.has(currentFlashcard.id) ? "Запомнил!" : "Отметить освоенным"}</span>
              </button>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4 mt-6">
            <button
              type="button"
              onClick={handlePrevCard}
              className="flex-1 py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Предыдущий</span>
            </button>

            <button
              type="button"
              onClick={handleNextCard}
              className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
            >
              <span>Следующий</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ─── Mode 3: Speed-Swapping Drill (60-Second Blitz) ─── */}
      {viewMode === "speed-swap" && currentSpeedSwapItem && (
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Speed Swap Header & Timer */}
          <div className="bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Speed-Swapping Тренажер • Метод Роберта ДеКейзера
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-2">
                  Процедурализация за 60 секунд
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
                  Зафиксируйте жесткий каркас чанка и проговорите вслух 5 рабочих контекстов менее чем за минуту.
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="flex flex-col items-center sm:items-end gap-2 shrink-0">
                <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-2xl border border-white/15">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-cyan-300">
                    {String(Math.floor(timerSeconds / 60)).padStart(2, "0")}:{String(timerSeconds % 60).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-1">
                    {!isTimerRunning ? (
                      <button
                        type="button"
                        onClick={handleStartTimer}
                        className="p-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white cursor-pointer transition-all"
                        title="Запустить таймер"
                      >
                        <Play className="w-4 h-4 fill-white" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handlePauseTimer}
                        className="p-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-white cursor-pointer transition-all"
                        title="Пауза"
                      >
                        <Pause className="w-4 h-4 fill-white" />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleResetTimer}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 cursor-pointer transition-all"
                      title="Сброс"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Target Frame */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/15 mb-6">
              <div className="text-xs font-semibold text-slate-400 mb-1">
                Базовый речевой каркас со слотом:
              </div>
              <div className="text-xl sm:text-2xl font-black text-cyan-300 font-mono">
                {currentSpeedSwapItem.target}
              </div>
              <div className="text-xs text-slate-400 mt-1 italic">
                Отрабатываемая ошибка: <span className="text-rose-300 line-through">{currentSpeedSwapItem.trap}</span>
              </div>
            </div>

            {/* 5 Rapid Contexts to Say Out Loud */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Проговорите вслух 5 рабочих сценариев:
              </div>
              {currentSpeedSwapItem.speedSwaps.map((example, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all group"
                >
                  <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="flex-1 font-mono text-xs sm:text-sm text-slate-100 font-medium">
                    {example}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleSpeak(example, `${currentSpeedSwapItem.id}-${idx}`)}
                    className="opacity-0 group-hover:opacity-100 p-1 rounded-md text-slate-400 hover:text-cyan-300 transition-all cursor-pointer shrink-0"
                    title="Прослушать"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Navigator */}
            <div className="flex items-center justify-between gap-4 mt-8 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setSpeedSwapIndex((prev) => (prev - 1 + filteredChunks.length) % filteredChunks.length);
                  handleResetTimer();
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Предыдущий чанк</span>
              </button>

              <span className="text-xs font-mono text-slate-400">
                {(speedSwapIndex % filteredChunks.length) + 1} / {filteredChunks.length}
              </span>

              <button
                type="button"
                onClick={() => {
                  setSpeedSwapIndex((prev) => (prev + 1) % filteredChunks.length);
                  handleResetTimer();
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-white px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-all cursor-pointer shadow-lg shadow-indigo-600/20"
              >
                <span>Следующий чанк</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Footer Section & Cross-links ─── */}
      <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10">
        <h3 className="text-lg font-bold text-white tracking-tight mb-2">
          Связь с базой знаний и другими разделами
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-2xl leading-relaxed">
          Чанки-антидоты разработаны на основе 11-й главы библиотеки SLA и диагностического аудита. Для закрепления блочной речи переходите в соседние модули:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/learn-chunks"
            className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/40 hover:bg-white/10 transition-all group"
          >
            <div className="text-xs text-cyan-400 font-bold mb-1">База 100+ Чанков</div>
            <div className="text-sm font-bold text-white group-hover:text-cyan-200">
              Тренажер базовых блоков →
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Разговорные фразы, тайм-байеры и вежливые рамки
            </div>
          </Link>

          <Link
            href="/tense-chunks"
            className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/40 hover:bg-white/10 transition-all group"
          >
            <div className="text-xs text-indigo-400 font-bold mb-1">Времена Plug & Play</div>
            <div className="text-sm font-bold text-white group-hover:text-indigo-200">
              24 временных разъема →
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Present Perfect, Past Continuous и сослагательность
            </div>
          </Link>

          <Link
            href="/dense-structure"
            className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/40 hover:bg-white/10 transition-all group"
          >
            <div className="text-xs text-violet-400 font-bold mb-1">Плотные Связки</div>
            <div className="text-sm font-bold text-white group-hover:text-violet-200">
              3 Уровня сочленений →
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Соединение мыслей без заиканий и пауз
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
