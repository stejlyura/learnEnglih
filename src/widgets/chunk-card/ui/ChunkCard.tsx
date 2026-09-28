"use client";

import React, { useState } from "react";
import { ChunkItem } from "@/entities/chunk";
import { SpeakButton } from "@/features/speech-pronounce";
import { cn } from "@/shared/lib";

interface ChunkCardProps {
  readonly chunk: ChunkItem;
  readonly isBookmarked?: boolean;
  readonly onToggleBookmark?: (id: string) => void;
  readonly className?: string;
}

export function ChunkCard({
  chunk,
  isBookmarked = false,
  onToggleBookmark,
  className,
}: ChunkCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(chunk.clean || chunk.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className={cn("single-chunk-card", className)}>
      <div>
        {/* Header: Badge & Quick Actions */}
        <div className="chunk-card-meta">
          <span className="module-badge">{chunk.catName}</span>
          <div className="flex items-center gap-1.5">
            <SpeakButton text={chunk.clean || chunk.text} size="sm" />
            <button
              type="button"
              onClick={handleCopy}
              title="Скопировать фразу"
              className="w-7 h-7 inline-flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 text-xs transition-colors cursor-pointer"
            >
              {copied ? (
                <span className="text-emerald-400 font-bold text-[10px]">✓</span>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
            {onToggleBookmark && (
              <button
                type="button"
                onClick={() => onToggleBookmark(chunk.id)}
                title={isBookmarked ? "Удалить из сохраненных" : "Сохранить в избранное"}
                className={cn(
                  "w-7 h-7 inline-flex items-center justify-center rounded-lg border text-xs transition-colors cursor-pointer",
                  isBookmarked
                    ? "bg-amber-500/20 text-amber-400 border-amber-500/40"
                    : "bg-white/5 text-slate-400 hover:text-white border-white/10 hover:bg-white/10"
                )}
              >
                ★
              </button>
            )}
          </div>
        </div>

        {/* Chunk text */}
        <h3 className="chunk-item-title">
          {chunk.text}
        </h3>

        {/* Translation */}
        <div className="chunk-item-trans">
          {chunk.trans}
        </div>

        {/* Real-life example box */}
        <div className="chunk-item-ex-box">
          <div className="flex items-start justify-between gap-2">
            <div className="chunk-item-ex-en">
              &ldquo;{chunk.exEn}&rdquo;
            </div>
            <SpeakButton text={chunk.exEn} size="sm" />
          </div>
          <div className="chunk-item-ex-ru">
            {chunk.exRu}
          </div>
        </div>
      </div>

      {/* Note / Context hint */}
      {chunk.note && (
        <div className="chunk-item-note">
          <span>💡</span>
          <span>{chunk.note}</span>
        </div>
      )}
    </div>
  );
}
