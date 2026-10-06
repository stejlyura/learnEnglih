"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  EditorialLayout,
  MethodCard,
  QuoteCallout,
  ChunkResponsiveSelector,
  ChunkSelectorItem,
} from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { SpeakButton } from "@/features/speech-pronounce";
import {
  WH_QUESTION_CHUNKS,
  CONDITIONAL_CHUNKS,
  WhQuestionChunkItem,
  ConditionalChunkItem,
  WhQuestionWord,
  ConditionalLevel,
} from "@/entities/chunk";
import {
  Copy,
  Check,
  Search,
  Sparkles,
  ArrowRight,
  HelpCircle,
  GitBranch,
  Volume2,
  Layers,
  ChevronDown,
} from "lucide-react";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "intro", title: "01. Психолингвистика: Почему вопросы и условия нельзя собирать пословно" },
  { id: "wh-questions", title: "02. 9 Ключевых Wh-Вопросов для Support и Sales" },
  { id: "conditionals", title: "03. 4 Вида Conditionals как Инструменты Переговоров" },
  { id: "speed-drill", title: "04. Интерактивный Speed-Swapper (Тренажер Быстрой Подстановки)" },
] as const;

const SELECTOR_ITEMS: readonly ChunkSelectorItem[] = [
  { id: "all", label: "Все чанки", icon: "⚡", count: 40, description: "Wh-вопросы + 4 Conditionals" },
  { id: "wh-all", label: "Все Wh-Вопросы", icon: "❓", count: 27, description: "What, Which, Where, Who, Whom, Whose, When, Why, How" },
  { id: "wh-What", label: "What", icon: "💡", count: 3, description: "Блокеры, условия и влияние" },
  { id: "wh-Which", label: "Which", icon: "🎯", count: 3, description: "Выбор тарифа и локализация" },
  { id: "wh-Where", label: "Where", icon: "📍", count: 3, description: "Узкие места и юрисдикция" },
  { id: "wh-Who", label: "Who", icon: "👤", count: 3, description: "ЛПР и ключевой контакт" },
  { id: "wh-Whom", label: "Whom", icon: "🏛️", count: 3, description: "Юр. лица и эскалация" },
  { id: "wh-Whose", label: "Whose", icon: "💼", count: 3, description: "Бюджет и владение зоной" },
  { id: "wh-When", label: "When", icon: "⏱️", count: 3, description: "Дедлайны и тайминги" },
  { id: "wh-Why", label: "Why", icon: "🔍", count: 3, description: "Причины смены вендора и RCA" },
  { id: "wh-How", label: "How", icon: "🧭", count: 3, description: "Оценка потерь и пилот" },
  { id: "cond-all", label: "Все Conditionals", icon: "🔀", count: 12, description: "Zero, First, Second, Third" },
  { id: "cond-zero", label: "Zero (If + Pres, Pres)", icon: "🛡️", count: 3, description: "SLA и регламенты" },
  { id: "cond-first", label: "First (If + Pres, Will + V)", icon: "🚀", count: 3, description: "Закрытие сделок и шаги" },
  { id: "cond-second", label: "Second (If + Past, Would + V)", icon: "💭", count: 3, description: "Гипотетические торги" },
  { id: "cond-third", label: "Third (If + Past Perf, Would have + V3)", icon: "⏪", count: 3, description: "Post-Mortem и анализ" },
  { id: "speed-drill", label: "Speed Swapping Drill", icon: "🔥", description: "Интерактивная отработка" },
] as const;

export default function QuestionConditionalChunksPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedChunkId, setExpandedChunkId] = useState<string | null>(null);

  // Drill state
  const [selectedDrillItem, setSelectedDrillItem] = useState<{
    readonly title: string;
    readonly head: string;
    readonly slots: readonly string[];
  }>({
    title: "What seems to be the primary roadblock...",
    head: "What seems to be the primary roadblock",
    slots: [
      "...preventing your team from deploying this update?",
      "...preventing your team from signing off on the security review?",
      "...preventing your team from finalizing your Q4 tech roadmap?",
      "...preventing your team from adopting the new billing interface?",
    ],
  });

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

  // Filtered Wh questions
  const filteredWhQuestions = useMemo(() => {
    return WH_QUESTION_CHUNKS.filter((chunk) => {
      // Tab filter
      if (activeTab === "cond-all" || activeTab.startsWith("cond-") || activeTab === "speed-drill") {
        return false;
      }
      if (activeTab.startsWith("wh-") && activeTab !== "wh-all") {
        const word = activeTab.replace("wh-", "");
        if (chunk.word !== word) return false;
      }

      // Search filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        chunk.targetEn.toLowerCase().includes(q) ||
        chunk.targetRu.toLowerCase().includes(q) ||
        chunk.formula.toLowerCase().includes(q) ||
        chunk.roleRu.toLowerCase().includes(q) ||
        chunk.word.toLowerCase().includes(q) ||
        chunk.context.toLowerCase().includes(q)
      );
    });
  }, [activeTab, searchQuery]);

  // Filtered Conditionals
  const filteredConditionals = useMemo(() => {
    return CONDITIONAL_CHUNKS.filter((chunk) => {
      // Tab filter
      if (activeTab === "wh-all" || activeTab.startsWith("wh-") || activeTab === "speed-drill") {
        return false;
      }
      if (activeTab.startsWith("cond-") && activeTab !== "cond-all") {
        const level = activeTab.replace("cond-", "");
        if (chunk.level !== level) return false;
      }

      // Search filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        chunk.targetEn.toLowerCase().includes(q) ||
        chunk.targetRu.toLowerCase().includes(q) ||
        chunk.formula.toLowerCase().includes(q) ||
        chunk.businessRole.toLowerCase().includes(q) ||
        chunk.levelName.toLowerCase().includes(q) ||
        chunk.context.toLowerCase().includes(q)
      );
    });
  }, [activeTab, searchQuery]);

  const totalResultsCount = filteredWhQuestions.length + filteredConditionals.length;

  return (
    <EditorialLayout
      title="Чанки Вопросов & Условий: What–How и 4 Conditionals"
      metaCategory="Customer Support & B2B Sales Speech"
      readTime="Время изучения: 12 минут"
      badge="Dialogue Toolkit"
      badgeColor="emerald"
      activeRoute="/question-conditional-chunks"
      lead="Полная коллекция готовых речевых блоков для двух самых сложных зон в переговорах: 9 вопросительных слов (What, Which, Where, Who, Whom, Whose, When, Why, How) и 4 условные конструкции (Zero, First, Second, Third), упакованные под задачи Customer Support и B2B Sales без пословного перевода."
      infoItems={[
        { label: "Вопросительная сетка", value: "9 Wh-слов с готовыми слотами под квалификацию и деэскалацию" },
        { label: "Условные блоки", value: "Zero (SLA), 1st (Commitments), 2nd (Testing), 3rd (Post-Mortem)" },
        { label: "Озвучка и практика", value: "Нативная озвучка каждого чанка + интерактивный тренажер слотов" },
      ]}
      topBanner={
        <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/20 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg my-6">
          <div>
            <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Исследование: Как говорить и думать без пауз на звонках</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1">
              Разбор амигдалярного перехвата (Amygdala Hijack), тактической эмпатии ФБР и SPIN-вопросов.
            </div>
          </div>
          <Link
            href="/longreads?article=support-sales-fluency"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer self-start sm:self-auto"
          >
            <span>Читать исследование →</span>
          </Link>
        </div>
      }
    >
      {/* Category selector with PC horizontal scroll and mobile tactile dock */}
      <ChunkResponsiveSelector
        items={SELECTOR_ITEMS}
        activeId={activeTab}
        onSelect={setActiveTab}
        title="Категории речевых чанков"
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
          placeholder="Поиск по слову, контексту, переводу или формуле (напр. 'SLA', 'CFO', 'Which', 'Zero')..."
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

      {/* SECTION 1: INTRO PSYCHOLINGUISTICS */}
      {(activeTab === "all" || activeTab === "intro") && !searchQuery && (
        <section id="intro" className="my-10 pt-4">
          <h2 className="chapter-heading">
            01. Психолингвистика: Почему вопросы и условия нельзя собирать пословно
          </h2>

          <p>
            В спонтанном разговоре формулирование вопроса или условного предложения (<em>Conditional</em>) — это две самые частые причины затыков и звуков «эээ/ммм».
          </p>

          <p>
            Когда менеджер по продажам или специалист поддержки пытается собрать условное предложение <em>Third Conditional</em> (например: «Если бы наш мониторинг сработал раньше, мы бы предотвратили этот даунтайм»), классическая школьная грамматика требует одновременно вычислить:
          </p>

          <ol style={{ paddingLeft: "24px", marginBottom: "20px", lineHeight: "1.8" }}>
            <li>Какое это условие: реальное, нереальное в настоящем или нереальное в прошлом?</li>
            <li>Какую форму выбрать для придаточного: <em>had + V3</em> или <em>was/were</em>?</li>
            <li>Какой модальный глагол нужен в главном предложении: <em>would</em>, <em>could</em> или <em>might</em>?</li>
            <li>Не забыть форму <em>have</em> и третью форму глагола <em>prevented</em>.</li>
          </ol>

          <p>
            Это занимает <strong>до 2.5 секунд</strong> времени процессора оперативной памяти. Собеседник видит зависшего специалиста с бегающими глазами, теряет доверие и начинает давить.
          </p>

          <QuoteCallout cite="Джоан Байби (Joan Bybee), профессор лингвистики Университета Нью-Мексико">
            «Человеческий мозг не хранит правила сборки синтаксических деревьев на лету. Вопросы и условные предложения хранятся как готовые спаянные каркасы: жесткая предикативная голова (The Anchor) и пустой смысловой слот (The Slot). В момент речи мозг извлекает монолит целиком».
          </QuoteCallout>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
              <div className="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>9 Wh-Вопросов как Стратегические Рычаги</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-0">
                Каждое вопросительное слово — это инструмент управления вниманием собеседника: от выявления узких мест воронки (<em>Where</em>) до юридической маршрутизации договоров (<em>Whom</em>) и квалификации бюджета (<em>Whose</em>).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5" />
                <span>4 Уровня Conditionals как Режимы Переговоров</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-0">
                <strong>Zero</strong> фиксирует жесткие правила SLA. <strong>First</strong> создает мотивацию подписания. <strong>Second</strong> безопасно прощупывает уступки без риска. <strong>Third</strong> проводит зрелый ретроспективный разбор сбоев.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: WH QUESTIONS */}
      {filteredWhQuestions.length > 0 && (
        <section id="wh-questions" className="my-10 pt-4">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="chapter-heading mb-1">
                02. 9 Ключевых Wh-Вопросов для Support и Sales
              </h2>
              <p className="text-xs text-slate-400 mb-0">
                What, Which, Where, Who, Whom, Whose, When, Why, How в контексте квалификации MEDDIC, деэскалации и защиты интересов компании.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shrink-0">
              {filteredWhQuestions.length} {filteredWhQuestions.length === 1 ? "чанк" : "чанков"}
            </span>
          </div>

          <div className="space-y-4">
            {filteredWhQuestions.map((chunk) => {
              const isExpanded = expandedChunkId === chunk.id;
              const isCopied = copiedId === chunk.id;

              return (
                <div
                  key={chunk.id}
                  className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-500/30 transition-all shadow-sm"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {chunk.word}
                      </span>
                      <span className="text-xs font-semibold text-slate-300">
                        {chunk.roleRu}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                        {chunk.context}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(chunk.targetEn, chunk.id)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
                        title="Скопировать чанк"
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

                  {/* Formula Strip */}
                  <div className="text-[11px] font-mono text-cyan-400/90 mb-2">
                    Формула: {chunk.formula}
                  </div>

                  {/* English Target */}
                  <div className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                    “{chunk.targetEn}”
                  </div>

                  {/* Russian Translation */}
                  <div className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
                    {chunk.targetRu}
                  </div>

                  {/* Why it works */}
                  <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-xs text-slate-300 mb-3">
                    <span className="text-cyan-400 font-semibold">Психологический эффект: </span>
                    {chunk.whyItWorks}
                  </div>

                  {/* Slot Swapper Expandable Toggle */}
                  <div className="border-t border-white/5 pt-3">
                    <button
                      type="button"
                      onClick={() => toggleExpand(chunk.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors"
                    >
                      <span>Варианты слотов для тренировки ({chunk.slotSwaps.length})</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="mt-2.5 space-y-1.5 pl-2 border-l-2 border-cyan-500/30">
                        {chunk.slotSwaps.map((swap, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white/[0.02] text-xs font-mono text-slate-300 hover:text-white"
                          >
                            <span>{swap}</span>
                            <SpeakButton text={`${chunk.word} ... ${swap}`} size="sm" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* SECTION 3: CONDITIONALS */}
      {filteredConditionals.length > 0 && (
        <section id="conditionals" className="my-10 pt-4">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="chapter-heading mb-1">
                03. 4 Вида Conditionals как Инструменты Переговоров
              </h2>
              <p className="text-xs text-slate-400 mb-0">
                Zero (SLA и факты), First (стимул к сделке), Second (прощупывание условий), Third (RCA и разбор сорванных сделок).
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 shrink-0">
              {filteredConditionals.length} {filteredConditionals.length === 1 ? "блок" : "блоков"}
            </span>
          </div>

          <div className="space-y-4">
            {filteredConditionals.map((chunk) => {
              const isExpanded = expandedChunkId === chunk.id;
              const isCopied = copiedId === chunk.id;

              // Color badge styling depending on conditional level
              const levelBadgeStyle = {
                zero: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
                first: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
                second: "bg-amber-500/20 text-amber-300 border-amber-500/30",
                third: "bg-rose-500/20 text-rose-300 border-rose-500/30",
              }[chunk.level];

              return (
                <div
                  key={chunk.id}
                  className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-emerald-500/30 transition-all shadow-sm"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold border ${levelBadgeStyle}`}>
                        {chunk.levelName}
                      </span>
                      <span className="text-xs font-semibold text-slate-300">
                        {chunk.businessRole}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                        {chunk.context}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(chunk.targetEn, chunk.id)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
                        title="Скопировать предложение"
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

                  {/* Grammar Formula */}
                  <div className="text-[11px] font-mono text-emerald-400/90 mb-2">
                    Конструкция: {chunk.formula}
                  </div>

                  {/* English Target */}
                  <div className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                    “{chunk.targetEn}”
                  </div>

                  {/* Russian Translation */}
                  <div className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
                    {chunk.targetRu}
                  </div>

                  {/* Two part breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-xs">
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Условие (Condition):</span>
                      <span className="font-mono text-white">{chunk.conditionPart}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-xs">
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Следствие (Result):</span>
                      <span className="font-mono text-white">{chunk.resultPart}</span>
                    </div>
                  </div>

                  {/* Why it works */}
                  <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-xs text-slate-300 mb-3">
                    <span className="text-emerald-400 font-semibold">Переговорная функция: </span>
                    {chunk.whyItWorks}
                  </div>

                  {/* Slot Swapper */}
                  <div className="border-t border-white/5 pt-3">
                    <button
                      type="button"
                      onClick={() => toggleExpand(chunk.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 cursor-pointer transition-colors"
                    >
                      <span>Рабочие вариации формулы ({chunk.slotSwaps.length})</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="mt-2.5 space-y-1.5 pl-2 border-l-2 border-emerald-500/30">
                        {chunk.slotSwaps.map((swap, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white/[0.02] text-xs font-mono text-slate-300 hover:text-white"
                          >
                            <span>{swap}</span>
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
        </section>
      )}

      {/* No Results Message */}
      {totalResultsCount === 0 && (
        <div className="text-center py-12 px-4 rounded-3xl bg-white/[0.02] border border-white/10 my-8">
          <div className="text-3xl mb-2">🔍</div>
          <div className="text-base font-bold text-white mb-1">Ничего не найдено</div>
          <div className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
            По запросу «{searchQuery}» нет совпадений. Попробуйте ввести «SLA», «CFO», «What», «GDPR» или выберите другую вкладку.
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

      {/* SECTION 4: SPEED DRILL (Slot Swapping Interactive Studio) */}
      {(activeTab === "all" || activeTab === "speed-drill") && !searchQuery && (
        <section id="speed-drill" className="my-12 pt-6">
          <h2 className="chapter-heading mb-2">
            04. Интерактивный Speed-Swapper (Тренажер Быстрой Подстановки)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6">
            Методика тренировки беглости: выберите каркас предложения и произнесите вслух все 4 варианта за 20 секунд. Нажимайте на слот для мгновенного прослушивания нативного произношения.
          </p>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-black border border-indigo-500/30 shadow-xl">
            {/* Template Selector Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                type="button"
                onClick={() =>
                  setSelectedDrillItem({
                    title: "What seems to be the primary roadblock...",
                    head: "What seems to be the primary roadblock",
                    slots: [
                      "...preventing your team from deploying this update?",
                      "...preventing your team from signing off on the security review?",
                      "...preventing your team from finalizing your Q4 tech roadmap?",
                      "...preventing your team from adopting the new billing interface?",
                    ],
                  })
                }
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedDrillItem.head.includes("roadblock")
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                What seems to be...
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedDrillItem({
                    title: "If you commit to an annual contract today...",
                    head: "If you commit to an annual contract today, we will",
                    slots: [
                      "...waive all onboarding and implementation fees.",
                      "...include two extra admin seats at no cost.",
                      "...guarantee price protection against future rate hikes.",
                      "...assign a dedicated enterprise solutions architect to your account.",
                    ],
                  })
                }
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedDrillItem.head.includes("commit")
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                1st Cond: If you commit...
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedDrillItem({
                    title: "If we offered customized Net-60 terms...",
                    head: "If we offered customized Net-60 terms, would your CFO",
                    slots: [
                      "...approve the proposal this week?",
                      "...be open to signing the multi-year agreement?",
                      "...waive the third-party security escrow requirement?",
                      "...authorize the Q4 pilot rollout next Tuesday?",
                    ],
                  })
                }
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedDrillItem.head.includes("Net-60")
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                2nd Cond: If we offered...
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedDrillItem({
                    title: "If we had engaged the CISO earlier...",
                    head: "If we had engaged the CISO earlier, we would have",
                    slots: [
                      "...cleared the compliance review before their budget freeze.",
                      "...uncovered their legacy API constraints before the demo.",
                      "...closed this enterprise deal before the end of Q3.",
                      "...prevented the competitor from locking in the contract.",
                    ],
                  })
                }
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedDrillItem.head.includes("CISO")
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                3rd Cond: If we had engaged...
              </button>
            </div>

            {/* Drill Head Display */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-4">
              <div className="text-[11px] font-mono uppercase text-indigo-400 font-semibold mb-1">
                Жесткая голова чанка (The Anchor):
              </div>
              <div className="text-base sm:text-lg font-bold text-white flex items-center justify-between gap-3">
                <span>“{selectedDrillItem.head} ...”</span>
                <SpeakButton text={selectedDrillItem.head} size="sm" />
              </div>
            </div>

            {/* Slots List */}
            <div className="space-y-2.5">
              <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold px-1">
                Сменные слоты (The Slots) — повторяйте вслух на скорость:
              </div>
              {selectedDrillItem.slots.map((slot, index) => {
                const fullSentence = `${selectedDrillItem.head} ${slot.replace(/^\.\.\./, "")}`;
                return (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-indigo-500/30 flex items-center justify-between gap-3 transition-all cursor-pointer group"
                    onClick={() => handleCopy(fullSentence, `drill-${index}`)}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-slate-200 group-hover:text-white transition-colors truncate">
                        {slot}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        onClick={() => handleCopy(fullSentence, `drill-${index}`)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                        title="Скопировать целое предложение"
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

      {/* FOOTER CTA TO LONGREADS */}
      <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-sm font-bold text-white mb-0.5">
            Хотите понять нейробиологию беглой речи глубже?
          </div>
          <div className="text-xs text-slate-400">
            Изучите полную коллекцию из 7 исследований SLA и психолингвистики в нашей библиотеке.
          </div>
        </div>
        <Link
          href="/longreads"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all shrink-0 cursor-pointer"
        >
          <span>В библиотеку лонгридов</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </EditorialLayout>
  );
}
