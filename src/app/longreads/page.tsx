"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Search, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  Zap, 
  X
} from "lucide-react";
import { LONGREADS, LongreadCategory } from "@/entities/longread";
import { LongreadSelectorDropdown } from "@/features/longread-selector";
import { cn } from "@/shared/lib";

const CATEGORY_TABS: readonly { readonly id: "all" | LongreadCategory; readonly label: string; readonly icon: string }[] = [
  { id: "all", label: "Все лонгриды", icon: "📚" },
  { id: "neuroscience", label: "Нейробиология C1", icon: "🧠" },
  { id: "memory", label: "Память и Обучение", icon: "🧬" },
  { id: "chunks", label: "Речевые Чанки", icon: "🧩" },
  { id: "methodology", label: "Методология SLA", icon: "📐" },
  { id: "audit", label: "Аудит & Кальки", icon: "🎯" },
] as const;

export default function LongreadsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | LongreadCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return LONGREADS.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.scientificPillars.some((p) => p.toLowerCase().includes(query)) ||
        item.toc.some((t) => t.title.toLowerCase().includes(query))
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* Ambient background glow */}
      <div className="glow-wrapper" aria-hidden="true">
        <div className="glow-bg glow-top-left" />
        <div className="glow-bg glow-bottom-right" />
      </div>

      <div className="main-wrapper py-8 sm:py-12">
        {/* Hub Header */}
        <section className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>База Прикладных Знаний & Исследований</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Библиотека Лонгридов: <br />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              Наука Беглости & Архитектура Памяти
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Фундаментальные исследования когнитивной нейробиологии, теории усвоения второго языка (SLA), консолидации памяти во сне и блочного речевого синтеза на уровне B2 → C1.
          </p>

          {/* Quick Menu Selector Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <span className="text-xs text-slate-400 font-medium">Быстрый переход к материалу:</span>
            <LongreadSelectorDropdown />
          </div>
        </section>

        {/* Search & Category Filter Controls */}
        <section className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск по исследованию, автору (Friston, Cowan, Bjork) или теме..."
                className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Total Results Counter */}
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Найдено лонгридов: <strong className="text-white">{filteredItems.length}</strong> из {LONGREADS.length}</span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORY_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              const count = tab.id === "all" 
                ? LONGREADS.length 
                : LONGREADS.filter((l) => l.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={cn(
                    "px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer",
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                      : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 border border-transparent"
                  )}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                  <span className="text-[10px] opacity-75 font-mono px-1.5 py-0.2 rounded-full bg-white/10">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Featured Research Highlights (shown when viewing all) */}
        {selectedCategory === "all" && !searchQuery && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-cyan-400">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Новые научные исследования (C1, Память, Чанкинг)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {LONGREADS.filter((l) => l.featured).map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group relative flex flex-col justify-between p-5 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-cyan-500/30 hover:border-cyan-400/60 transition-all hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        {item.badge}
                      </span>
                      <span className="text-xs text-slate-400 inline-flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        {item.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-cyan-400 font-semibold group-hover:text-cyan-300">
                    <span>Читать исследование</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Longreads Grid */}
        <section>
          <div className="flex items-center justify-between gap-2 mb-4">
            <h2 className="text-lg font-bold text-white">
              {selectedCategory === "all" ? "Все материалы каталога" : CATEGORY_TABS.find((t) => t.id === selectedCategory)?.label}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item, idx) => (
              <article
                key={item.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-500">#{String(idx + 1).padStart(2, "0")}</span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        {item.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                    <Link href={item.href}>
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.subtitle}
                  </p>

                  {/* Scientific Pillars */}
                  {item.scientificPillars.length > 0 && (
                    <div className="mb-4">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1.5">
                        Научные исследования & авторы:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.scientificPillars.map((pillar) => (
                          <span
                            key={pillar}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5 font-mono"
                          >
                            {pillar}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Table of contents snippet */}
                  <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-xs space-y-1 mb-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Ключевые главы лонгрида:
                    </div>
                    {item.toc.slice(0, 3).map((tocItem) => (
                      <div key={tocItem.id} className="text-slate-400 truncate flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 shrink-0" />
                        <span className="truncate">{tocItem.title}</span>
                      </div>
                    ))}
                    {item.toc.length > 3 && (
                      <div className="text-[11px] text-cyan-400/80 font-medium pt-0.5">
                        + еще {item.toc.length - 3} глав
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    Уровень: <strong className="text-white">{item.targetLevel}</strong>
                  </div>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer group-hover:scale-105"
                  >
                    <span>Читать лонгрид</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
              <Search className="w-8 h-8 text-slate-500 mx-auto mb-3" />
              <h3 className="text-base font-bold text-white mb-1">Ничего не найдено</h3>
              <p className="text-xs text-slate-400 mb-4">
                Попробуйте изменить поисковый запрос или выбрать другую категорию
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 text-white hover:bg-white/15"
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
