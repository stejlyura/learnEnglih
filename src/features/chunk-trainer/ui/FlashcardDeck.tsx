"use client";

import React, { useState } from "react";
import { ChunkItem } from "@/entities/chunk";
import { SpeakButton } from "@/features/speech-pronounce";
import { Badge, Button } from "@/shared/ui";
import { cn } from "@/shared/lib";

interface FlashcardDeckProps {
  readonly chunks: readonly ChunkItem[];
}

export function FlashcardDeck({ chunks }: FlashcardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());

  if (chunks.length === 0) {
    return (
      <div className="text-center py-16 glass-panel rounded-2xl">
        <p className="text-slate-400">Нет карточек в этой категории.</p>
      </div>
    );
  }

  const currentChunk = chunks[currentIndex % chunks.length];
  const isMastered = masteredIds.has(currentChunk.id);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % chunks.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + chunks.length) % chunks.length);
  };

  const handleToggleMastered = () => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(currentChunk.id)) {
        next.delete(currentChunk.id);
      } else {
        next.add(currentChunk.id);
      }
      return next;
    });
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Progress & Stats */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Карточка <strong className="text-white">{(currentIndex % chunks.length) + 1}</strong> из{" "}
          <strong className="text-white">{chunks.length}</strong>
        </span>
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-medium">
            Освоено: {masteredIds.size}
          </span>
          <span>•</span>
          <span className="text-indigo-400 font-medium">
            Осталось: {chunks.length - masteredIds.size}
          </span>
        </div>
      </div>

      {/* 3D Flashcard */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="cursor-pointer perspective-[1000px] min-h-[320px] select-none"
      >
        <div
          className={cn(
            "relative w-full min-h-[320px] rounded-3xl p-8 transition-transform duration-300 transform-style-3d border shadow-xl flex flex-col justify-between",
            isFlipped
              ? "bg-slate-900 border-indigo-500/50 shadow-indigo-500/10"
              : "bg-slate-950/90 border-white/15 hover:border-white/25 shadow-black/50"
          )}
        >
          {/* Card Top */}
          <div className="flex items-center justify-between">
            <Badge variant="indigo">{currentChunk.catName}</Badge>
            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
              {isFlipped ? "Английский (Оригинал)" : "Русский (Нажми для переворота)"}
            </span>
          </div>

          {/* Card Content */}
          <div className="my-auto py-6 text-center">
            {!isFlipped ? (
              <div className="space-y-3">
                <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {currentChunk.trans}
                </p>
                {currentChunk.note && (
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Контекст: {currentChunk.note}
                  </p>
                )}
                <div className="pt-4 text-xs text-cyan-400/80 font-medium">
                  Нажмите на карточку, чтобы увидеть английский чанк
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <h3 className="font-mono text-2xl sm:text-3xl font-black text-sky-300 tracking-tight">
                    {currentChunk.clean || currentChunk.text}
                  </h3>
                  <SpeakButton text={currentChunk.clean || currentChunk.text} size="md" />
                </div>
                <div className="bg-black/40 rounded-2xl p-4 border border-white/10 max-w-md mx-auto text-left">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-serif italic text-indigo-200 text-sm leading-relaxed mb-1">
                      &ldquo;{currentChunk.exEn}&rdquo;
                    </p>
                    <SpeakButton text={currentChunk.exEn} size="sm" className="shrink-0" />
                  </div>
                  <p className="text-xs text-slate-400">{currentChunk.exRu}</p>
                </div>
              </div>
            )}
          </div>

          {/* Card Bottom */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5">
            <span>Пробел или клик — перевернуть</span>
            {isMastered && (
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                ✓ Выучено
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Navigation and Mastery Controls */}
      <div className="flex items-center justify-between gap-3">
        <Button variant="outline" size="sm" onClick={handlePrev}>
          ← Назад
        </Button>

        <Button
          variant={isMastered ? "secondary" : "cyan"}
          size="sm"
          onClick={handleToggleMastered}
        >
          {isMastered ? "Снять отметку" : "✓ Запомнил"}
        </Button>

        <Button variant="primary" size="sm" onClick={handleNext}>
          Следующая →
        </Button>
      </div>
    </div>
  );
}
