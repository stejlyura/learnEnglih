"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BookOpen, 
  ChevronDown, 
  Brain, 
  Sparkles, 
  Search, 
  Clock, 
  Check, 
  ArrowRight,
  X
} from "lucide-react";
import { LONGREADS } from "@/entities/longread";
import { cn } from "@/shared/lib";

interface LongreadSelectorDropdownProps {
  readonly currentSlug?: string;
  readonly className?: string;
}

export function LongreadSelectorDropdown({ 
  currentSlug, 
  className 
}: LongreadSelectorDropdownProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine current active item
  const currentItem = LONGREADS.find((item) => 
    item.slug === currentSlug || item.href === pathname || pathname.startsWith(item.href)
  );

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const filteredItems = LONGREADS.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.shortTitle.toLowerCase().includes(query) ||
      item.categoryLabel.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className={cn("relative inline-block text-left", className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 active:bg-white/15 text-slate-200 border border-white/15 transition-all shadow-sm cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <BookOpen className="w-4 h-4 text-cyan-400" />
        <span className="font-medium text-slate-400 hidden xs:inline">Меню лонгридов:</span>
        <span className="text-white font-bold truncate max-w-[180px] sm:max-w-[240px]">
          {currentItem ? currentItem.shortTitle : "Выбрать лонгрид"}
        </span>
        <ChevronDown className={cn("w-4 h-4 text-slate-400 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div 
          className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-[calc(100vw-32px)] sm:w-[460px] max-w-[460px] max-h-[80vh] bg-[#0c121e] border border-white/15 rounded-2xl shadow-2xl z-[1100] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
          role="menu"
        >
          {/* Header */}
          <div className="p-3.5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span>Библиотека лонгридов ({LONGREADS.length})</span>
            </div>
            <Link
              href="/longreads"
              onClick={() => setIsOpen(false)}
              className="text-[11px] text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
            >
              <span>Все лонгриды</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Quick Search */}
          <div className="p-2 border-b border-white/10">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Поиск по названию или теме..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-7 py-1.5 text-xs rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                autoFocus
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* List */}
          <div className="overflow-y-auto p-2 space-y-1 divide-y divide-white/5">
            {filteredItems.map((item) => {
              const isSelected = item.id === currentItem?.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-start gap-3 p-2.5 rounded-xl transition-all group",
                    isSelected 
                      ? "bg-cyan-500/15 border border-cyan-500/30 text-white" 
                      : "hover:bg-white/5 text-slate-300 hover:text-white"
                  )}
                  role="menuitem"
                >
                  <div className="mt-0.5 shrink-0">
                    {isSelected ? (
                      <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-lg bg-white/5 text-slate-400 group-hover:text-cyan-300 flex items-center justify-center text-xs font-mono">
                        {item.category === "neuroscience" ? "🧠" : item.category === "memory" ? "🧬" : "📖"}
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {item.shortTitle}
                      </span>
                      {item.featured && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mb-1 leading-snug">
                      {item.subtitle}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500">
                      <span className="text-slate-400">{item.categoryLabel}</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-0.5">
                        <Clock className="w-2.5 h-2.5" />
                        {item.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="text-center py-6 text-xs text-slate-500">
                Ничего не найдено по запросу «{searchQuery}»
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-2.5 bg-black/40 border-t border-white/10 text-center">
            <Link
              href="/longreads"
              onClick={() => setIsOpen(false)}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Открыть каталог всех лонгридов →</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
