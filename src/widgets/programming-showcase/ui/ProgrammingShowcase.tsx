"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, Sparkles, Layers, SlidersHorizontal } from "lucide-react";
import {
  PROGRAMMING_CHUNKS,
  PROGRAMMING_STACKS,
  PROGRAMMING_CATEGORIES,
  ProgrammingStack,
  ProgrammingCategory,
  ProgrammingChunkItem,
} from "@/entities/programming-chunk";
import { ProgrammingCard } from "./ProgrammingCard";

export function ProgrammingShowcase() {
  const [selectedStack, setSelectedStack] = useState<ProgrammingStack | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<ProgrammingCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChunks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PROGRAMMING_CHUNKS.filter((chunk: ProgrammingChunkItem) => {
      // Filter by stack
      if (selectedStack !== "all" && chunk.stack !== selectedStack) {
        return false;
      }

      // Filter by category
      if (selectedCategory !== "all" && chunk.category !== selectedCategory) {
        return false;
      }

      // Filter by search query
      if (query.length > 0) {
        const inTitle = chunk.title.toLowerCase().includes(query);
        const inSubtitle = chunk.subtitle.toLowerCase().includes(query);
        const inTrap = chunk.cognitiveTrap.toLowerCase().includes(query);
        const inModel = chunk.mentalModel.toLowerCase().includes(query);
        const inCode = chunk.codeSnippet.toLowerCase().includes(query);
        const inTags = chunk.tags.some((t) => t.toLowerCase().includes(query));

        if (!inTitle && !inSubtitle && !inTrap && !inModel && !inCode && !inTags) {
          return false;
        }
      }

      return true;
    });
  }, [selectedStack, selectedCategory, searchQuery]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header & Description */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Архитектура мышления топового разработчика</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Чанки для умелого программирования
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
          Вместо посимвольного набора кода по памяти — извлекайте готовые производственные блоки и ментальные инварианты. Механики движка, асинхронные потоки, строгие типы и архитектура хуков.
        </p>
      </div>

      {/* Control Bar: Stacks & Search */}
      <div className="space-y-4 mb-8 bg-slate-900/40 p-4 sm:p-5 rounded-2xl border border-slate-800">
        {/* Stack Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {PROGRAMMING_STACKS.map((stack) => {
            const isActive = selectedStack === stack.id;
            return (
              <button
                key={stack.id}
                onClick={() => setSelectedStack(stack.id as ProgrammingStack | "all")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]"
                    : "bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-slate-700/60"
                }`}
              >
                <span>{stack.icon}</span>
                <span>{stack.label}</span>
                {"count" in stack && (
                  <span className="text-[10px] opacity-75 font-mono px-1.5 py-0.2 rounded-full bg-black/20">
                    {stack.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Categories & Search Filter */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full text-xs">
            <SlidersHorizontal className="w-4 h-4 text-slate-500 shrink-0 ml-1 mr-1" />
            {PROGRAMMING_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as ProgrammingCategory | "all")}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-slate-200 text-slate-900 font-bold"
                      : "bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по чанкам, коду, тегам..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950/70 border border-slate-700/80 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
        <div className="flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>
            Показано <strong>{filteredChunks.length}</strong> из {PROGRAMMING_CHUNKS.length} инженерных чанков
          </span>
        </div>
        {(selectedStack !== "all" || selectedCategory !== "all" || searchQuery.length > 0) && (
          <button
            onClick={() => {
              setSelectedStack("all");
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-indigo-400 hover:underline"
          >
            Сбросить фильтры
          </button>
        )}
      </div>

      {/* Cards Grid */}
      {filteredChunks.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredChunks.map((chunk) => (
            <ProgrammingCard key={chunk.id} chunk={chunk} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
          <Filter className="w-8 h-8 text-slate-600 mx-auto" />
          <h4 className="text-base font-semibold text-slate-300">Ничего не найдено</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Попробуйте изменить поисковый запрос или сбросить фильтры стека и категорий.
          </p>
        </div>
      )}
    </section>
  );
}
