"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, BookOpen, ChevronDown, Check } from "lucide-react";
import { cn } from "@/shared/lib";

export interface LongreadTabItem {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly categoryLabel: string;
  readonly icon: string;
  readonly readTime: string;
  readonly badge: string;
  readonly badgeColor: string;
}

export const LONGREAD_TABS: readonly LongreadTabItem[] = [
  {
    id: "native-brain",
    slug: "native-brain",
    title: "Мозг Носителя и Нейробиология C1",
    shortTitle: "Мозг Носителя C1",
    categoryLabel: "Нейробиология",
    icon: "🧠",
    readTime: "17 мин",
    badge: "Нейробиология",
    badgeColor: "cyan",
  },
  {
    id: "fluency-guide",
    slug: "fluency-guide",
    title: "Архитектура Беглости B2 → C1",
    shortTitle: "Архитектура Беглости",
    categoryLabel: "Беглость C1",
    icon: "⚡",
    readTime: "18 мин",
    badge: "Беглость",
    badgeColor: "emerald",
  },
  {
    id: "chunks",
    slug: "chunks",
    title: "Фундамент Лексических Чанков",
    shortTitle: "Лексические Чанки",
    categoryLabel: "Фундамент",
    icon: "🧱",
    readTime: "14 мин",
    badge: "Чанки",
    badgeColor: "cyan",
  },
  {
    id: "methodology",
    slug: "methodology",
    title: "Научные Методологии Изучения (SLA)",
    shortTitle: "Методология SLA",
    categoryLabel: "Daily-Рутина",
    icon: "📐",
    readTime: "14 мин",
    badge: "Методология",
    badgeColor: "amber",
  },
  {
    id: "memory-consolidation",
    slug: "memory-consolidation",
    title: "Наука Памяти: Консолидация и Сон",
    shortTitle: "Память и Сон",
    categoryLabel: "Консолидация",
    icon: "🧬",
    readTime: "16 мин",
    badge: "Память",
    badgeColor: "emerald",
  },
  {
    id: "chunk-architecture",
    slug: "chunk-architecture",
    title: "Архитектура Памяти на Чанках",
    shortTitle: "Архитектура Чанков",
    categoryLabel: "Когнитивистика",
    icon: "🧩",
    readTime: "15 мин",
    badge: "Архитектура",
    badgeColor: "indigo",
  },
  {
    id: "neural-weights",
    slug: "neural-weights",
    title: "Матрица или Веса? Синтез Речи",
    shortTitle: "Матрица или Веса",
    categoryLabel: "Коннекционизм",
    icon: "🔬",
    readTime: "18 мин",
    badge: "Нейросети",
    badgeColor: "violet",
  },
  {
    id: "direct-thinking",
    slug: "direct-thinking",
    title: "Мышление Без Перевода с Русского",
    shortTitle: "Без Перевода",
    categoryLabel: "Психолингвистика",
    icon: "⚡",
    readTime: "17 мин",
    badge: "Чанки C1",
    badgeColor: "emerald",
  },
  {
    id: "support-sales-fluency",
    slug: "support-sales-fluency",
    title: "Support & Sales Fluency: Психолингвистика Речи и Прямого Мышления",
    shortTitle: "Support & Sales 🎯",
    categoryLabel: "Support & Sales",
    icon: "🤝",
    readTime: "16 мин",
    badge: "Практика 🤝",
    badgeColor: "emerald",
  },
  {
    id: "discourse-architecture",
    slug: "discourse-architecture",
    title: "Дискурсивная Архитектура Спонтанной Речи и Каталог Каркасов C1",
    shortTitle: "Дискурс C1 (63 каркаса)",
    categoryLabel: "Дебаты & Речь",
    icon: "💎",
    readTime: "18 мин",
    badge: "Дискурс 💎",
    badgeColor: "cyan",
  },
] as const;

interface LongreadNativeSwitchProps {
  readonly activeSlug: string;
  readonly onSelect: (slug: string) => void;
  readonly className?: string;
}

export function LongreadNativeSwitch({
  activeSlug,
  onSelect,
  className,
}: LongreadNativeSwitchProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const activeItem =
    LONGREAD_TABS.find((tab) => tab.slug === activeSlug) || LONGREAD_TABS[0];

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
      checkScroll();
    }
  };

  return (
    <div className={cn("w-full sticky top-[60px] z-30 bg-[#080C14]/95 backdrop-blur-md border-b border-white/10 py-2.5 transition-all shadow-lg", className)}>
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        {/* Desktop View (md: and up): Horizontal Segmented Rail with Smooth Scroll */}
        <div className="hidden md:flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 shrink-0 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Лонгриды:</span>
          </div>

          <div className="relative flex-1 min-w-0">
            {canScrollLeft && (
              <button
                type="button"
                onClick={() => scrollByAmount(-220)}
                className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-slate-900 border border-white/20 text-white shadow-xl flex items-center justify-center hover:bg-indigo-600 transition-all cursor-pointer"
                aria-label="Назад"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
            )}

            <div
              ref={scrollRef}
              onScroll={checkScroll}
              onWheel={handleWheel}
              className="overflow-x-auto flex items-center gap-2 py-1 px-1 scroll-smooth select-none scrollbar-none"
              style={{ scrollbarWidth: "none" }}
            >
              {LONGREAD_TABS.map((tab) => {
                const isActive = tab.slug === activeSlug;
                return (
                  <button
                    key={tab.slug}
                    type="button"
                    onClick={() => onSelect(tab.slug)}
                    className={cn(
                      "shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer border",
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white border-cyan-400/50 shadow-md shadow-indigo-600/30 scale-[1.02]"
                        : "bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white border-white/10 hover:border-white/20"
                    )}
                  >
                    <span className="text-base shrink-0 leading-none">{tab.icon}</span>
                    <span className="whitespace-nowrap">{tab.shortTitle}</span>
                    <span
                      className={cn(
                        "text-[10px] font-mono px-1.5 py-0.5 rounded-full font-bold",
                        isActive ? "bg-white/25 text-white" : "bg-white/10 text-slate-400"
                      )}
                    >
                      {tab.readTime}
                    </span>
                  </button>
                );
              })}
            </div>

            {canScrollRight && (
              <button
                type="button"
                onClick={() => scrollByAmount(220)}
                className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-slate-900 border border-white/20 text-white shadow-xl flex items-center justify-center hover:bg-indigo-600 transition-all cursor-pointer"
                aria-label="Вперед"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile View (< md): Native Segment Switch + Drawer Trigger */}
        <div className="md:hidden flex flex-col gap-2">
          {/* Active Article Bar with Dropdown Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileDrawerOpen((prev) => !prev)}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-white shadow-md cursor-pointer"
            aria-expanded={isMobileDrawerOpen}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-xl shrink-0">{activeItem.icon}</span>
              <div className="text-left min-w-0">
                <div className="text-xs font-bold text-white truncate">
                  {activeItem.shortTitle}
                </div>
                <div className="text-[10px] text-cyan-300 font-mono">
                  {activeItem.categoryLabel} • {activeItem.readTime}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0 pl-2">
              <span className="text-[11px] font-semibold text-slate-400">Сменить</span>
              <ChevronDown className={cn("w-4 h-4 text-cyan-400 transition-transform duration-200", isMobileDrawerOpen && "rotate-180")} />
            </div>
          </button>

          {/* Quick Icon Chips Strip */}
          <div className="overflow-x-auto flex items-center gap-1.5 py-1 scrollbar-none">
            {LONGREAD_TABS.map((tab) => {
              const isActive = tab.slug === activeSlug;
              return (
                <button
                  key={tab.slug}
                  type="button"
                  onClick={() => onSelect(tab.slug)}
                  className={cn(
                    "shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all active:scale-95 cursor-pointer",
                    isActive
                      ? "bg-cyan-500/20 border-cyan-400 text-white shadow-sm ring-1 ring-cyan-400/40"
                      : "bg-white/5 border-white/10 text-slate-300 hover:text-white"
                  )}
                >
                  <span className="text-sm">{tab.icon}</span>
                  <span className="truncate max-w-[110px]">{tab.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Full Selector Drawer */}
          {isMobileDrawerOpen && (
            <div className="mt-2 p-2 rounded-2xl bg-[#0e1422] border border-white/15 shadow-2xl space-y-1 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-2 py-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 flex items-center justify-between">
                <span>Выберите лонгрид (6 материалов)</span>
                <span className="text-slate-400 font-normal">Тапните для перехода</span>
              </div>
              {LONGREAD_TABS.map((tab, idx) => {
                const isActive = tab.slug === activeSlug;
                return (
                  <button
                    key={tab.slug}
                    type="button"
                    onClick={() => {
                      onSelect(tab.slug);
                      setIsMobileDrawerOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all border cursor-pointer",
                      isActive
                        ? "bg-indigo-600/30 border-cyan-400/50 text-white"
                        : "bg-white/[0.02] hover:bg-white/[0.05] border-transparent text-slate-300"
                    )}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-lg shrink-0">{tab.icon}</span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">
                          {idx + 1}. {tab.shortTitle}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {tab.categoryLabel} • {tab.readTime}
                        </div>
                      </div>
                    </div>
                    {isActive ? (
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500">#{idx + 1}</span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
