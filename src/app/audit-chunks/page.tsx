"use client";

import React, { useState, useMemo } from "react";
import { 
  AUDIT_CHUNKS_DATA, 
  AuditChunkCategory, 
} from "@/entities/chunk";
import { 
  EditorialLayout, 
  MetricStatGrid, 
  MetricStatCard, 
  AuditChunkRow 
} from "@/shared/ui";
import { AuditFlashcards, AuditSpeedSwap } from "@/features/audit-trainer";
import { LongreadSelectorDropdown } from "@/features/longread-selector";
import { 
  Flame, 
  AlertTriangle, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  RotateCcw, 
  ExternalLink,
  Layers,
  Zap,
  Search
} from "lucide-react";
import { cn } from "@/shared/lib";

type ViewMode = "list" | "flashcards" | "speed-swap";

const CATEGORY_TABS: readonly { id: AuditChunkCategory; label: string; count: number }[] = [
  { id: "all", label: "Все чанки", count: 18 },
  { id: "fossilized", label: "🔥 Фоссилизированные кальки", count: 7 },
  { id: "grammar_gaps", label: "🧩 Грамматические пробелы", count: 5 },
  { id: "lexical_c1", label: "💎 C1 Дипломатия & Связки", count: 4 },
  { id: "noticing", label: "🎯 Точность & Noticing", count: 2 },
] as const;

export default function AuditChunksPage() {
  const [activeCategory, setActiveCategory] = useState<AuditChunkCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("list");

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

  return (
    <EditorialLayout
      title="Чанки-Антидоты из Персонального Аудита"
      metaCategory="Клинический SLA Аудит • 18 Персональных Чанков"
      readTime="Практика & Заучивание"
      badge="Аудит 🎯"
      badgeColor="primary"
      activeRoute="/audit-chunks"
      lead="Персональный набор речевых блоков, составленный по результатам вашей диагностики. Выжигание 7 подтвержденных русских калек (High Confidence Traps), устранение скрытых синтаксических сбоев и укрепление сильных C1-островков речи."
      infoItems={[
        { label: "Методология", value: "SLA Clinical Diagnostic & Defossilization Protocol" },
        { label: "Целевой эффект", value: "Искоренение мычания и затыков на созвонах" },
        { label: "Формат", value: "18 отобранных антидотов с дриллами и озвучкой" },
      ]}
      topBanner={
        <>
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Библиотека лонгридов</span>
              <span>•</span>
              <span className="text-rose-400 font-semibold">Всего 9 материалов</span>
            </div>
            <LongreadSelectorDropdown currentSlug="audit-chunks" />
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-cyan-950/20 to-slate-900 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg my-6">
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              <span>Диагностический аудит речи</span>
            </div>
            <div className="text-xs text-slate-300 mt-0.5">
              Сводная клиническая карта зафиксированных ошибок, интерференции и персональных зон роста.
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="/tests/diagnostic_audit_report.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Отчет</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
            <a
              href="/tests/diagnostic_test.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Тест</span>
            </a>
          </div>
        </div>
        </>
      }
    >
      {/* Clinical Highlights Metric Cards */}
      <section id="audit-overview">
        <MetricStatGrid>
          <MetricStatCard
            label="Кальки L1"
            value="7 узлов"
            description="feel myself, advices, actual..."
            icon={<Flame className="w-4 h-4" />}
            variant="rose"
          />
          <MetricStatCard
            label="Синтаксис"
            value="5 пробелов"
            description="mixed cond, high time, at expense..."
            icon={<AlertTriangle className="w-4 h-4" />}
            variant="amber"
          />
          <MetricStatCard
            label="C1 Связки"
            value="4 чанка"
            description="inclined to think, inversion..."
            icon={<Sparkles className="w-4 h-4" />}
            variant="cyan"
          />
          <MetricStatCard
            label="Точность"
            value="2 узла"
            description="noticing & accuracy"
            icon={<CheckCircle2 className="w-4 h-4" />}
            variant="emerald"
          />
        </MetricStatGrid>
      </section>

      {/* View Mode Switcher */}
      <div id="audit-modes" className="flex items-center justify-between gap-3 p-1.5 rounded-2xl bg-white/5 border border-white/10 my-6">
        <button
          type="button"
          onClick={() => setViewMode("list")}
          className={cn(
            "flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer",
            viewMode === "list"
              ? "bg-indigo-600 text-white shadow-md"
              : "text-slate-400 hover:text-white"
          )}
        >
          <Layers className="w-4 h-4" />
          <span>Все чанки ({filteredChunks.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode("flashcards")}
          className={cn(
            "flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer",
            viewMode === "flashcards"
              ? "bg-indigo-600 text-white shadow-md"
              : "text-slate-400 hover:text-white"
          )}
        >
          <Sparkles className="w-4 h-4" />
          <span>Флешкарты контраста</span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode("speed-swap")}
          className={cn(
            "flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer",
            viewMode === "speed-swap"
              ? "bg-indigo-600 text-white shadow-md"
              : "text-slate-400 hover:text-white"
          )}
        >
          <Zap className="w-4 h-4" />
          <span>60с Блиц-своп</span>
        </button>
      </div>

      {/* Category Filter Pills & Search */}
      <div id="audit-categories" className="controls-box">
        <div className="search-input-wrap">
          <Search className="search-icon w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск по кальке, английскому чанку или русскому триггеру..."
            className="search-input"
          />
        </div>

        <div className="filter-pills-row">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={cn(
                "filter-pill-btn",
                activeCategory === tab.id && "active"
              )}
            >
              <span>{tab.label}</span>
              <span className="ml-1.5 opacity-70 text-xs">({tab.count})</span>
            </button>
          ))}
        </div>
      </div>

      <div id="audit-content">
        {/* Mode 1: List View with tense-chunks aesthetic */}
        {viewMode === "list" && (
          <div className="method-card">
            <div className="method-card-header">
              <span className="block-badge">Каталог антидотов</span>
              <span className="text-xs text-slate-400">
                Показано: {filteredChunks.length} из {AUDIT_CHUNKS_DATA.length}
              </span>
            </div>

            {filteredChunks.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                Ничего не найдено по запросу «{searchQuery}».
              </div>
            ) : (
              filteredChunks.map((chunk, idx) => (
                <AuditChunkRow key={chunk.id} chunk={chunk} index={idx} />
              ))
            )}
          </div>
        )}

        {/* Mode 2: Flashcards View */}
        {viewMode === "flashcards" && (
          <AuditFlashcards
            deck={filteredChunks.length > 0 ? filteredChunks : AUDIT_CHUNKS_DATA}
          />
        )}

        {/* Mode 3: Speed-Swap View */}
        {viewMode === "speed-swap" && (
          <AuditSpeedSwap
            items={filteredChunks.length > 0 ? filteredChunks : AUDIT_CHUNKS_DATA}
          />
        )}
      </div>
    </EditorialLayout>
  );
}
