"use client";

import React from "react";
import { SpeakButton } from "@/features/speech-pronounce";

interface ChunkItemRowProps {
  readonly num?: string | number;
  readonly title: string;
  readonly trans: string;
  readonly exEn: string;
  readonly exRu?: string;
  readonly tip?: string;
  readonly badge?: string;
  readonly badgeClass?: string;
}

export function ChunkItemRow({
  num,
  title,
  trans,
  exEn,
  exRu,
  tip,
  badge,
  badgeClass = "tier-1",
}: ChunkItemRowProps) {
  return (
    <div className="chunk-item-row">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          {num && <span className="chunk-item-num">#{num}</span>}
          {badge && <span className={`tier-badge ${badgeClass}`}>{badge}</span>}
        </div>
        <SpeakButton text={exEn || title} size="sm" />
      </div>

      <div className="chunk-item-title">{title}</div>
      <div className="chunk-item-trans">{trans}</div>

      <div className="chunk-item-ex">“{exEn}”</div>
      {exRu && <div className="chunk-item-ex-ru">{exRu}</div>}

      {tip && (
        <div className="text-xs text-cyan-400 mt-2 flex items-center gap-1.5">
          <span>💡</span>
          <span>{tip}</span>
        </div>
      )}
    </div>
  );
}
