"use client";

import React, { useState } from "react";
import { AuditChunkItem } from "@/entities/chunk";
import { SpeakButton } from "@/features/speech-pronounce";
import { Copy, Check, AlertTriangle, CheckCircle2 } from "lucide-react";

export interface AuditChunkRowProps {
  readonly chunk: AuditChunkItem;
  readonly index?: number;
}

export const AuditChunkRow = React.memo(function AuditChunkRow({
  chunk,
  index,
}: AuditChunkRowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(chunk.target);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="chunk-item-row group">
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          {index !== undefined && (
            <span className="chunk-item-num">#{index + 1}</span>
          )}
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold">
            {chunk.categoryName}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleCopy}
            title="Скопировать антидот"
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
          <SpeakButton text={chunk.audioText || chunk.target} size="sm" />
        </div>
      </div>

      {/* Target Title (Clean Cyan Mono font) */}
      <div className="chunk-item-title flex items-baseline gap-2">
        <span>{chunk.title}</span>
      </div>

      {/* Trigger in Russian */}
      <div className="chunk-item-trans">
        Когда хотите сказать: «{chunk.triggerRu}»
      </div>

      {/* Trap vs Antidote Comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
        {/* Trap */}
        <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/25">
          <div className="flex items-center gap-1.5 text-rose-400 text-xs font-bold uppercase tracking-wider mb-1">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Ловушка (Калька L1)</span>
          </div>
          <div className="text-sm font-mono text-rose-200 line-through decoration-rose-500/60 decoration-2">
            {chunk.trap}
          </div>
        </div>

        {/* Antidote */}
        <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
          <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Антидот (Native C1)</span>
          </div>
          <div className="text-sm font-mono font-bold text-emerald-200">
            {chunk.target}
          </div>
        </div>
      </div>

      {/* Conversational Context Quote */}
      <div className="chunk-item-ex-box">
        <div className="chunk-item-ex-en">&ldquo;{chunk.context}&rdquo;</div>
        <div className="chunk-item-ex-ru">{chunk.drillPrompt}</div>
      </div>

      {/* Why / Linguistic Note */}
      <div className="chunk-item-note">
        <span>💡</span>
        <span>{chunk.why}</span>
      </div>
    </div>
  );
});
