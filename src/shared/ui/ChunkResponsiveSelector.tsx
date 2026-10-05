"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/shared/lib";

export interface ChunkSelectorItem {
  readonly id: string;
  readonly label: string;
  readonly icon?: React.ReactNode | string;
  readonly count?: number;
  readonly badge?: string;
  readonly description?: string;
}

interface ChunkResponsiveSelectorProps {
  readonly items: readonly ChunkSelectorItem[];
  readonly activeId: string;
  readonly onSelect: (id: string) => void;
  readonly title?: string;
  readonly className?: string;
  readonly rightElement?: React.ReactNode;
}

export function ChunkResponsiveSelector({
  items,
  activeId,
  onSelect,
  title,
  className,
  rightElement,
}: ChunkResponsiveSelectorProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

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
  }, [checkScroll, items]);

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  // Convert vertical mouse wheel into horizontal scroll on PC
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
      checkScroll();
    }
  };

  // Mouse drag-to-scroll support for desktop
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftState(el.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeftState - walk;
    checkScroll();
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className={cn("w-full mb-6", className)}>
      {/* Header bar (if title or rightElement provided) */}
      {(title || rightElement) && (
        <div className="flex items-center justify-between gap-3 mb-3 px-1">
          {title && (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
                {title}
              </span>
            </div>
          )}
          {rightElement && <div className="ml-auto">{rightElement}</div>}
        </div>
      )}

      {/* Desktop View (md: and up): Horizontal Smooth Scroll Rail with chevron controls */}
      <div className="hidden md:block relative group">
        {/* Left Scroll Button */}
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scrollByAmount(-240)}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-900/90 border border-white/20 text-white shadow-xl flex items-center justify-center hover:bg-indigo-600 transition-all cursor-pointer"
            aria-label="Прокрутить влево"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={cn(
            "overflow-x-auto flex items-center gap-2.5 py-1.5 px-1 scroll-smooth select-none",
            "scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent",
            isDragging ? "cursor-grabbing" : "cursor-grab"
          )}
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.id)}
                className={cn(
                  "shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer shadow-sm border",
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white border-cyan-400/50 shadow-md shadow-indigo-600/30 scale-[1.02]"
                    : "bg-slate-900/70 hover:bg-slate-800/90 text-slate-300 hover:text-white border-white/10 hover:border-white/20"
                )}
              >
                {item.icon && (
                  <span className="text-base shrink-0 leading-none">
                    {item.icon}
                  </span>
                )}
                <span>{item.label}</span>
                {item.count !== undefined && (
                  <span
                    className={cn(
                      "text-[11px] font-mono px-1.5 py-0.5 rounded-full font-bold",
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-white/10 text-slate-400"
                    )}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        {canScrollRight && (
          <button
            type="button"
            onClick={() => scrollByAmount(240)}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-900/90 border border-white/20 text-white shadow-xl flex items-center justify-center hover:bg-indigo-600 transition-all cursor-pointer"
            aria-label="Прокрутить вправо"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Mobile View (< md): Enhanced Touchable Icon Selector Dock */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2 rounded-2xl bg-slate-900/60 border border-white/10">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.id)}
                className={cn(
                  "flex items-center gap-2.5 p-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer border relative active:scale-95",
                  isActive
                    ? "bg-gradient-to-r from-indigo-950/80 to-cyan-950/80 border-cyan-400/60 shadow-md ring-1 ring-cyan-400/30"
                    : "bg-white/[0.03] hover:bg-white/[0.06] border-white/5 text-slate-300"
                )}
              >
                {item.icon && (
                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0 border",
                      isActive
                        ? "bg-cyan-500/25 border-cyan-400/40 text-white"
                        : "bg-white/5 border-white/10 text-slate-300"
                    )}
                  >
                    {item.icon}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div
                    className={cn(
                      "text-xs font-bold truncate leading-tight",
                      isActive ? "text-white" : "text-slate-300"
                    )}
                  >
                    {item.label}
                  </div>
                  {item.count !== undefined && (
                    <div className="text-[10px] text-slate-400 mt-0.5 font-mono">
                      {item.count} {item.count === 1 ? "чанк" : item.count < 5 ? "чанка" : "чанков"}
                    </div>
                  )}
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
