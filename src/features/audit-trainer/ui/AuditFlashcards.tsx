"use client";

import React, { useState } from "react";
import { AuditChunkItem } from "@/entities/chunk";
import { SpeakButton } from "@/features/speech-pronounce";
import { Check, CheckCircle2, ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { cn } from "@/shared/lib";

export interface AuditFlashcardsProps {
  readonly deck: readonly AuditChunkItem[];
}

export function AuditFlashcards({ deck }: AuditFlashcardsProps) {
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());

  if (deck.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        Нет карточек для отображения.
      </div>
    );
  }

  const currentFlashcard = deck[cardIndex % deck.length];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % deck.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + deck.length) % deck.length);
  };

  const toggleMastered = (id: string) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="max-w-2xl mx-auto my-6">
      {/* Deck Header & Counter */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs font-semibold text-slate-400">
          Карточка{" "}
          <span className="text-white font-bold font-mono">
            {(cardIndex % deck.length) + 1}
          </span>{" "}
          из <span className="font-mono">{deck.length}</span>
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
          "min-h-[360px] p-6 sm:p-8 rounded-3xl border transition-all cursor-pointer select-none flex flex-col justify-between shadow-2xl relative overflow-hidden group",
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
            <div className="space-y-4 text-left">
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
        <div
          className="flex items-center justify-between pt-4 border-t border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Озвучить:</span>
            <SpeakButton text={currentFlashcard.audioText || currentFlashcard.target} size="sm" />
          </div>

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
            <span>
              {masteredIds.has(currentFlashcard.id) ? "Запомнил!" : "Отметить освоенным"}
            </span>
          </button>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-4 mt-6">
        <button
          type="button"
          onClick={handlePrevCard}
          className="flex-1 py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Предыдущий</span>
        </button>

        <button
          type="button"
          onClick={handleNextCard}
          className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <span>Следующий</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
