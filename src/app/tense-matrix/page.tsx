"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  TENSE_MATRIX_DATA, 
  TimeHorizon, 
  TenseAspect, 
  TenseMatrixItem 
} from "@/entities/chunk";
import { 
  Volume2, 
  Copy, 
  Check, 
  Sparkles, 
  Clock, 
  Calendar, 
  Zap, 
  Layers, 
  Grid3X3, 
  ListFilter, 
  ChevronRight, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight,
  RotateCcw,
  BookOpen
} from "lucide-react";
import { cn } from "@/shared/lib";

type ViewMode = "cards" | "matrix" | "quiz";

const HORIZON_TABS: readonly { id: TimeHorizon | "all"; label: string; count: number; color: string }[] = [
  { id: "all", label: "Все времена (All)", count: 16, color: "text-white" },
  { id: "present", label: "🟢 Настоящее (Present)", count: 4, color: "text-emerald-400" },
  { id: "past", label: "🟠 Прошедшее (Past)", count: 4, color: "text-amber-400" },
  { id: "future", label: "🔵 Будущее (Future)", count: 4, color: "text-cyan-400" },
  { id: "spoken", label: "🟣 Разговорные эквиваленты", count: 4, color: "text-purple-400" },
] as const;

export default function TenseMatrixPage() {
  const [activeHorizon, setActiveHorizon] = useState<TimeHorizon | "all">("all");
  const [activeAspect, setActiveAspect] = useState<TenseAspect | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("matrix");

  // Audio / Copy state
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [speakingKey, setSpeakingKey] = useState<string | null>(null);

  // Quiz state
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnsweredCount, setQuizAnsweredCount] = useState(0);

  const filteredTenses = useMemo(() => {
    return TENSE_MATRIX_DATA.filter((item) => {
      if (activeHorizon !== "all" && item.horizon !== activeHorizon) {
        return false;
      }
      if (activeAspect !== "all" && item.aspect !== activeAspect) {
        return false;
      }
      if (!searchQuery.trim()) {
        return true;
      }
      const q = searchQuery.toLowerCase();
      const inName = item.nameEn.toLowerCase().includes(q) || item.nameRu.toLowerCase().includes(q);
      const inFormula = item.formula.toLowerCase().includes(q);
      const inChunk = item.readyChunk.toLowerCase().includes(q) || item.chunkRu.toLowerCase().includes(q);
      const inSentences = item.sentences.some(
        (s) => s.en.toLowerCase().includes(q) || s.ru.toLowerCase().includes(q)
      );
      return inName || inFormula || inChunk || inSentences;
    });
  }, [activeHorizon, activeAspect, searchQuery]);

  // Audio synthesis helper
  const handleSpeak = (text: string, key: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();
    if (speakingKey === key) {
      setSpeakingKey(null);
      return;
    }

    const clean = text.replace(/\[.*?\]/g, "").trim();
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = "en-US";
    utterance.rate = 0.95;

    utterance.onend = () => setSpeakingKey(null);
    utterance.onerror = () => setSpeakingKey(null);

    setSpeakingKey(key);
    window.speechSynthesis.speak(utterance);
  };

  // Copy helper
  const handleCopy = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    }
  };

  // Matrix lookup map
  const matrixLookup = useMemo(() => {
    const map = new Map<string, TenseMatrixItem>();
    TENSE_MATRIX_DATA.forEach((item) => {
      map.set(`${item.horizon}_${item.aspect}`, item);
    });
    return map;
  }, []);

  // Quick quiz questions
  const quizQuestions = useMemo(() => [
    {
      promptRu: "«Я все утро дебажу этот баг и пока не нашел первопричину»",
      correctKey: "present_perfect_continuous",
      explanation: "Процесс начался утром, непрерывно длился до этой минуты и продолжается — это Present Perfect Continuous (have been V-ing)."
    },
    {
      promptRu: "«Вчера в 15:00 мы проводили стресс-тесты базы данных»",
      correctKey: "past_continuous",
      explanation: "Действие длилось в точно зафиксированный момент прошлого (at 3 PM yesterday) — это Past Continuous (were V-ing)."
    },
    {
      promptRu: "«К пятнице мы закроем все критические блокеры»",
      correctKey: "future_perfect",
      explanation: "Результат будет готов К определенному дедлайну в будущем (by Friday) — это Future Perfect (will have V3)."
    },
    {
      promptRu: "«К тому моменту как начался созвон, я уже пофиксил баг»",
      correctKey: "past_perfect",
      explanation: "Действие произошло ДО другого события в прошлом (by the time the call started) — это Past Perfect (had V3)."
    },
    {
      promptRu: "«Завтра в 11:00 у меня встреча 1-на-1 с директором (встреча в календаре)»",
      correctKey: "present_continuous_future",
      explanation: "100% зафиксированная договоренность между людьми в календаре выражается через Present Continuous for Future."
    },
    {
      promptRu: "«Раньше мы сами держали железные сервера, а теперь перешли в облако»",
      correctKey: "used_to",
      explanation: "Привычка или состояние в прошлом, которое полностью закончилось — это оборот Used to V1."
    }
  ], []);

  const currentQuiz = quizQuestions[quizQuestionIndex % quizQuestions.length];

  const handleAnswerQuiz = (tenseKey: string) => {
    if (selectedQuizAnswer !== null) return;
    setSelectedQuizAnswer(tenseKey);
    setQuizAnsweredCount((prev) => prev + 1);
    if (tenseKey === currentQuiz.correctKey) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    setSelectedQuizAnswer(null);
    setQuizQuestionIndex((prev) => (prev + 1) % quizQuestions.length);
  };

  return (
    <div className="main-wrapper pb-24">
      {/* ─── Hero Section ─── */}
      <div className="mb-10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>Интерактивная Таблица Времен • 16 Категорий • 60+ Предложений</span>
          </div>

          <Link
            href="/tense-chunks"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Лонгрид: Теория Plug & Play</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Таблица Времен в Готовых Чанках
          </h1>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Вся система английских времен (Present, Past, Future) без школьного вычисления формул. Готовые речевые блоки и рабочие предложения под реальные рабочие ситуации созвонов, деплоев и переписки.
          </p>
        </div>

        {/* Horizon Quick Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <button
            type="button"
            onClick={() => setActiveHorizon("present")}
            className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/25 hover:border-emerald-500/50 text-left transition-all cursor-pointer"
          >
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
              🟢 Present (4)
            </div>
            <div className="text-lg font-bold text-emerald-200">Настоящее</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Simple, Continuous, Perfect, Perf. Cont.</div>
          </button>

          <button
            type="button"
            onClick={() => setActiveHorizon("past")}
            className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/25 hover:border-amber-500/50 text-left transition-all cursor-pointer"
          >
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
              🟠 Past (4)
            </div>
            <div className="text-lg font-bold text-amber-200">Прошедшее</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Simple, Continuous, Perfect, Perf. Cont.</div>
          </button>

          <button
            type="button"
            onClick={() => setActiveHorizon("future")}
            className="p-3.5 rounded-2xl bg-cyan-950/20 border border-cyan-500/25 hover:border-cyan-500/50 text-left transition-all cursor-pointer"
          >
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
              🔵 Future (4)
            </div>
            <div className="text-lg font-bold text-cyan-200">Будущее</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Simple, Continuous, Perfect, Perf. Cont.</div>
          </button>

          <button
            type="button"
            onClick={() => setActiveHorizon("spoken")}
            className="p-3.5 rounded-2xl bg-purple-950/20 border border-purple-500/25 hover:border-purple-500/50 text-left transition-all cursor-pointer"
          >
            <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
              🟣 Spoken (4)
            </div>
            <div className="text-lg font-bold text-purple-200">Разговорные</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Be going to, Used to, Was supposed to...</div>
          </button>
        </div>
      </div>

      {/* ─── Filter & Mode Controls ─── */}
      <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 mb-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по фразе, формуле или переводу..."
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

          {/* Mode Tabs */}
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("matrix")}
              className={cn(
                "flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer",
                viewMode === "matrix"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span>Таблица 4×3</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("cards")}
              className={cn(
                "flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer",
                viewMode === "cards"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Карточки ({filteredTenses.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("quiz")}
              className={cn(
                "flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer",
                viewMode === "quiz"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Экспресс-Тест</span>
            </button>
          </div>
        </div>

        {/* Horizon Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {HORIZON_TABS.map((tab) => {
            const isSelected = activeHorizon === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveHorizon(tab.id)}
                className={cn(
                  "shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer",
                  isSelected
                    ? "bg-white/15 text-white border-white/30 shadow-md"
                    : "bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-slate-200"
                )}
              >
                <span className={tab.color}>{tab.label}</span>
                <span className="px-1.5 py-0.2 rounded-md text-[10px] font-mono bg-white/10 text-slate-300">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── View 1: 4x3 Matrix Grid View ─── */}
      {viewMode === "matrix" && (
        <div className="space-y-6">
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl backdrop-blur-md">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 w-36">
                    Время \ Аспект
                  </th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-indigo-300">
                    Simple (Факт)
                  </th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    Continuous (Процесс)
                  </th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Perfect (Результат)
                  </th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-amber-300">
                    Perfect Cont. (Длительность)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {(["present", "past", "future"] as const).map((horizon) => {
                  const horizonName = horizon === "present" ? "PRESENT (Настоящее)" : horizon === "past" ? "PAST (Прошедшее)" : "FUTURE (Будущее)";
                  const horizonColor = horizon === "present" ? "text-emerald-400" : horizon === "past" ? "text-amber-400" : "text-cyan-400";

                  return (
                    <tr key={horizon} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 align-top font-bold text-xs uppercase tracking-wider border-r border-white/5">
                        <span className={horizonColor}>{horizonName}</span>
                      </td>

                      {(["simple", "continuous", "perfect", "perfect_continuous"] as const).map((aspect) => {
                        const item = matrixLookup.get(`${horizon}_${aspect}`);
                        if (!item) return <td key={aspect} className="p-4">--</td>;

                        return (
                          <td key={aspect} className="p-4 align-top border-r border-white/5 last:border-r-0 max-w-xs">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-sm text-white">{item.tenseKey}</span>
                                <button
                                  type="button"
                                  onClick={() => handleSpeak(item.sentences[0].en, item.id)}
                                  className={cn(
                                    "p-1 rounded-md text-slate-400 hover:text-white cursor-pointer transition-all",
                                    speakingKey === item.id && "text-cyan-300 animate-pulse"
                                  )}
                                  title="Прослушать"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <div className="text-[11px] font-mono text-indigo-300 bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-500/20 inline-block">
                                {item.formula}
                              </div>

                              <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-xs">
                                <div className="font-medium text-slate-200 font-mono text-[11px]">
                                  {item.sentences[0].en}
                                </div>
                                <div className="text-[10px] text-slate-400 mt-1">
                                  {item.sentences[0].ru}
                                </div>
                              </div>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Spoken Essentials Strip */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-950/30 via-slate-900 to-slate-900 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
                <Sparkles className="w-4 h-4" />
              </span>
              <h3 className="font-bold text-white text-base">
                Как на самом деле говорят носители: 4 Разговорных Эквивалента
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              {TENSE_MATRIX_DATA.filter((item) => item.horizon === "spoken").map((item) => (
                <div key={item.id} className="p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/40 transition-all">
                  <div className="font-bold text-xs text-purple-300 mb-1">{item.nameEn}</div>
                  <div className="font-mono text-xs text-white font-medium mb-1.5">{item.sentences[0].en}</div>
                  <div className="text-[11px] text-slate-400">{item.sentences[0].ru}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── View 2: Detailed Cards View ─── */}
      {viewMode === "cards" && (
        <div className="space-y-6">
          {filteredTenses.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/60 rounded-3xl border border-white/10">
              <p className="text-slate-300 text-base">Ничего не найдено по вашему запросу.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveHorizon("all");
                  setActiveAspect("all");
                }}
                className="mt-3 text-cyan-400 hover:underline text-xs font-semibold cursor-pointer"
              >
                Сбросить фильтры
              </button>
            </div>
          ) : (
            filteredTenses.map((item) => {
              const isPresent = item.horizon === "present";
              const isPast = item.horizon === "past";
              const isFuture = item.horizon === "future";

              const borderColor = isPresent 
                ? "border-emerald-500/30 hover:border-emerald-500/60" 
                : isPast 
                ? "border-amber-500/30 hover:border-amber-500/60" 
                : isFuture 
                ? "border-cyan-500/30 hover:border-cyan-500/60" 
                : "border-purple-500/30 hover:border-purple-500/60";

              return (
                <div
                  key={item.id}
                  className={cn(
                    "p-6 rounded-3xl bg-slate-900/80 backdrop-blur-md border transition-all shadow-xl space-y-5",
                    borderColor
                  )}
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            "px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider",
                            isPresent
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : isPast
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                              : isFuture
                              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                              : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          )}
                        >
                          {item.horizon.toUpperCase()}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                          {item.nameEn}
                        </h2>
                      </div>
                      <div className="text-xs text-slate-300 mt-1">{item.nameRu}</div>
                    </div>

                    {/* Formula Pill */}
                    <div className="bg-black/50 border border-white/10 px-3.5 py-1.5 rounded-xl font-mono text-xs text-cyan-300">
                      {item.formula}
                    </div>
                  </div>

                  {/* Core Meaning & Markers */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Когда употребляется:
                      </div>
                      <p className="text-slate-200 leading-relaxed">{item.coreMeaning}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Маркеры времени:
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {item.timeMarkers.map((marker) => (
                          <span
                            key={marker}
                            className="px-2 py-0.5 rounded-md bg-white/10 text-slate-300 font-mono text-[11px]"
                          >
                            {marker}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Ready Chunk Banner */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900 border border-indigo-500/30">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 mb-1">
                      ⚡️ Готовый речевой чанк со слотом:
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white font-mono">
                      {item.readyChunk}
                    </div>
                    <div className="text-xs text-indigo-200/80 mt-1 italic">
                      {item.chunkRu}
                    </div>
                  </div>

                  {/* 4 Practical Sentences Grid */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Рабочие предложения под ключ:
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.sentences.map((sent, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                {sent.context}
                              </span>
                              <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                <button
                                  type="button"
                                  onClick={() => handleSpeak(sent.en, `${item.id}-${idx}`)}
                                  className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
                                  title="Прослушать"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleCopy(sent.en)}
                                  className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
                                  title="Копировать"
                                >
                                  {copiedText === sent.en ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              </div>
                            </div>
                            <div className="font-mono text-xs sm:text-sm font-semibold text-slate-100">
                              {sent.en}
                            </div>
                          </div>
                          <div className="text-xs text-slate-400 mt-2 pt-2 border-t border-white/5">
                            {sent.ru}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Life Tip */}
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                    <strong>💡 Лайфхак носителя: </strong>
                    {item.lifeTip}
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* ─── View 3: Express Quiz View ─── */}
      {viewMode === "quiz" && (
        <div className="max-w-xl mx-auto space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-indigo-500/30 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30">
                Вопрос {(quizQuestionIndex % quizQuestions.length) + 1} из {quizQuestions.length}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Правильно: <strong className="text-emerald-400">{quizScore}</strong> / {quizAnsweredCount}
              </span>
            </div>

            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">
              Какое время или конструкцию нужно использовать?
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-6">
              {currentQuiz.promptRu}
            </h2>

            {/* Answer Options */}
            <div className="space-y-3">
              {[
                { key: "present_perfect_continuous", label: "Present Perfect Continuous (have been V-ing)" },
                { key: "past_continuous", label: "Past Continuous (was / were V-ing)" },
                { key: "future_perfect", label: "Future Perfect (will have V3 by Friday)" },
                { key: "past_perfect", label: "Past Perfect (had V3 before...)" },
                { key: "present_continuous_future", label: "Present Continuous for Calendar Future" },
                { key: "used_to", label: "Used To (Прошлые привычки)" }
              ].map((opt) => {
                const isSelected = selectedQuizAnswer === opt.key;
                const isCorrect = opt.key === currentQuiz.correctKey;
                const showFeedback = selectedQuizAnswer !== null;

                return (
                  <button
                    key={opt.key}
                    type="button"
                    disabled={showFeedback}
                    onClick={() => handleAnswerQuiz(opt.key)}
                    className={cn(
                      "w-full text-left p-4 rounded-2xl border font-mono text-xs sm:text-sm font-semibold transition-all cursor-pointer",
                      !showFeedback && "bg-white/5 border-white/10 hover:bg-white/10 hover:border-indigo-400/50 text-slate-200",
                      showFeedback && isCorrect && "bg-emerald-500/20 border-emerald-500/60 text-emerald-200 shadow-md",
                      showFeedback && isSelected && !isCorrect && "bg-rose-500/20 border-rose-500/60 text-rose-200"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span>{opt.label}</span>
                      {showFeedback && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation box after answer */}
            {selectedQuizAnswer !== null && (
              <div className="mt-6 p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs sm:text-sm text-slate-200 animate-in fade-in duration-200">
                <div className="font-bold text-indigo-300 mb-1">
                  {selectedQuizAnswer === currentQuiz.correctKey ? "✅ Верно!" : "❌ Ошибка в выборе"}
                </div>
                <p>{currentQuiz.explanation}</p>
                <button
                  type="button"
                  onClick={handleNextQuiz}
                  className="mt-4 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  Следующий вопрос →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── Footer Cross-Navigation ─── */}
      <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10">
        <h3 className="text-lg font-bold text-white tracking-tight mb-2">
          Связанные материалы по временам и беглости речи
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-2xl leading-relaxed">
          Закрепляйте времена методом Speed-Swapping и тренируйте персональные чанки-антидоты:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/tense-chunks"
            className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/40 hover:bg-white/10 transition-all group"
          >
            <div className="text-xs text-indigo-400 font-bold mb-1">Теоретический Лонгрид</div>
            <div className="text-sm font-bold text-white group-hover:text-indigo-200">
              Времена Plug & Play →
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Исследования Joan Bybee и Nick Ellis по блочной грамматике
            </div>
          </Link>

          <Link
            href="/audit-chunks"
            className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-rose-500/40 hover:bg-white/10 transition-all group"
          >
            <div className="text-xs text-rose-400 font-bold mb-1">Персональные Чанки</div>
            <div className="text-sm font-bold text-white group-hover:text-rose-200">
              Чанки из Аудита →
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Антидоты к 7 фоссилизированным ошибкам L1
            </div>
          </Link>

          <Link
            href="/learn-chunks"
            className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/40 hover:bg-white/10 transition-all group"
          >
            <div className="text-xs text-cyan-400 font-bold mb-1">База 100+ Чанков</div>
            <div className="text-sm font-bold text-white group-hover:text-cyan-200">
              Интерактивный тренажер →
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Флешкарты и спид-дрилл под реальные созвоны
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
