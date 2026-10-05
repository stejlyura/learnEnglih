"use client";

import React from "react";
import { ChunkCategory } from "@/entities/chunk";
import { ChunkResponsiveSelector, ChunkSelectorItem } from "@/shared/ui";
import { cn } from "@/shared/lib";

export type TrainerMode = "list" | "flashcards" | "quiz";

interface TrainerFilterBarProps {
  readonly currentCategory: ChunkCategory | "all";
  readonly onSelectCategory: (cat: ChunkCategory | "all") => void;
  readonly searchQuery: string;
  readonly onSearchChange: (q: string) => void;
  readonly mode: TrainerMode;
  readonly onModeChange: (m: TrainerMode) => void;
  readonly totalCount: number;
}

const CATEGORY_ITEMS: readonly ChunkSelectorItem[] = [
  { id: "all", label: "Все категории", icon: "✨" },
  { id: "frames", label: "Рамки [X]", icon: "🧩" },
  { id: "work", label: "Работа & Созвоны", icon: "💼" },
  { id: "time-buyers", label: "Покупка времени", icon: "⏱️" },
  { id: "hedging", label: "Дипломатия", icon: "🛡️" },
  { id: "social", label: "Живые реакции", icon: "💬" },
  { id: "verbs", label: "Глагольные связки", icon: "⚡" },
] as const;

export function TrainerFilterBar({
  currentCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  mode,
  onModeChange,
  totalCount,
}: TrainerFilterBarProps) {
  return (
    <div className="controls-box">
      {/* Top Controls: Search Bar & Mode Switcher */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-4">
        {/* Search */}
        <div className="search-input-wrap max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Поиск по фразе, переводу или слову..."
            className="search-input"
          />
          <span className="search-icon">🔍</span>
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1 bg-black/40 p-1.5 rounded-xl border border-white/10 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => onModeChange("list")}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",
              mode === "list"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            📋 Список ({totalCount})
          </button>
          <button
            type="button"
            onClick={() => onModeChange("flashcards")}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",
              mode === "flashcards"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            🎴 Карточки
          </button>
          <button
            type="button"
            onClick={() => onModeChange("quiz")}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",
              mode === "quiz"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            ⚡ Квиз
          </button>
        </div>
      </div>

      {/* Responsive Category Selector: Desktop Horizontal Scroll Rail + Mobile Tactile Icon Dock */}
      <ChunkResponsiveSelector
        items={CATEGORY_ITEMS}
        activeId={currentCategory}
        onSelect={(id) => onSelectCategory(id as ChunkCategory | "all")}
        title="Категории чанков"
      />
    </div>
  );
}
