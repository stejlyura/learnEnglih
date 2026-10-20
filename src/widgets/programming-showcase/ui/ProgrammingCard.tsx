"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal, AlertTriangle, Lightbulb, Zap, Code2, ChevronDown, ChevronUp } from "lucide-react";
import { ProgrammingChunkItem } from "@/entities/programming-chunk";
import { cn } from "@/shared/lib";

interface ProgrammingCardProps {
  readonly chunk: ProgrammingChunkItem;
}

const LEVEL_LABELS: Record<ProgrammingChunkItem["level"], { label: string; color: string }> = {
  junior_to_mid: { label: "Junior → Middle", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  mid_to_senior: { label: "Middle → Senior", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
  staff: { label: "Staff / Lead", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
};

const STACK_BADGES: Record<ProgrammingChunkItem["stack"], { label: string; icon: string; border: string }> = {
  javascript: { label: "JavaScript", icon: "🟨", border: "border-amber-500/30" },
  typescript: { label: "TypeScript", icon: "🔷", border: "border-blue-500/30" },
  react: { label: "React", icon: "⚛️", border: "border-cyan-500/30" },
  nodejs: { label: "Node.js", icon: "🟩", border: "border-emerald-500/30" },
};

export function ProgrammingCard({ chunk }: ProgrammingCardProps) {
  const [copied, setCopied] = useState(false);
  const [showDrill, setShowDrill] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(chunk.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API not available
    }
  };

  const levelInfo = LEVEL_LABELS[chunk.level];
  const stackInfo = STACK_BADGES[chunk.stack];

  return (
    <div className={cn(
      "group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-xl overflow-hidden flex flex-col",
      stackInfo.border
    )}>
      {/* Card Header */}
      <div className="p-5 sm:p-6 border-b border-slate-800/80 bg-slate-950/40">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono font-medium flex items-center gap-1.5">
              <span>{stackInfo.icon}</span>
              <span>{stackInfo.label}</span>
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800/60 text-slate-400 border border-slate-700/60">
              {chunk.categoryName}
            </span>
          </div>

          <span className={cn("text-xs font-semibold px-2.5 py-0.5 rounded-full border", levelInfo.color)}>
            {levelInfo.label}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
          {chunk.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
          {chunk.subtitle}
        </p>
      </div>

      {/* Cognitive Comparison: Trap vs Mental Model */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800/80 bg-slate-950/20 text-xs">
        <div className="p-4 sm:p-5 flex flex-col justify-start space-y-1.5 bg-rose-950/10">
          <div className="flex items-center gap-1.5 font-bold text-rose-400 uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Ловушка (Антипаттерн)</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {chunk.cognitiveTrap}
          </p>
        </div>

        <div className="p-4 sm:p-5 flex flex-col justify-start space-y-1.5 bg-emerald-950/10">
          <div className="flex items-center gap-1.5 font-bold text-emerald-400 uppercase tracking-wider">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Блочное мышление (Senior Chunk)</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {chunk.mentalModel}
          </p>
        </div>
      </div>

      {/* Code Snippet Box */}
      <div className="relative bg-[#070b12] border-t border-b border-slate-800/90 flex-1 flex flex-col">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-950/60 border-b border-slate-800/60 text-xs text-slate-400">
          <div className="flex items-center gap-2 font-mono">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span>{chunk.stack === "typescript" ? "chunk.ts" : "chunk.js"}</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-xs font-mono font-medium active:scale-95"
            title="Скопировать готовый чанк"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Скопировано!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Копировать чанк</span>
              </>
            )}
          </button>
        </div>

        <pre className="p-4 overflow-x-auto text-xs font-mono text-slate-200 leading-relaxed selection:bg-indigo-500/40">
          <code>{chunk.codeSnippet}</code>
        </pre>
      </div>

      {/* Real-world Use Case & Takeaways */}
      <div className="p-5 space-y-3 bg-slate-950/40 text-xs">
        <div className="flex items-start gap-2 text-indigo-300 bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-3">
          <Zap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-indigo-200 font-semibold">Продакшен-применение: </strong>
            <span className="text-slate-300">{chunk.realWorldUseCase}</span>
          </div>
        </div>

        <div className="space-y-1 pt-1">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Ключевые инварианты:
          </div>
          <ul className="space-y-1 text-slate-400">
            {chunk.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-indigo-400 mt-0.5">•</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice Drill Drawer */}
        {chunk.practiceDrill && (
          <div className="pt-2 border-t border-slate-800/80">
            <button
              onClick={() => setShowDrill(!showDrill)}
              className="w-full flex items-center justify-between text-left text-xs font-semibold text-cyan-400 hover:text-cyan-300 py-1 transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                <span>Практический челлендж на закрепление</span>
              </span>
              {showDrill ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {showDrill && (
              <div className="mt-2.5 p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/20 space-y-2.5 animate-fadeIn">
                <p className="text-slate-200 font-medium">{chunk.practiceDrill.challenge}</p>
                <div className="text-slate-400">
                  <span className="text-cyan-300 font-semibold">Ожидаемый результат: </span>
                  {chunk.practiceDrill.expectedOutput}
                </div>
                <div>
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="text-[11px] text-amber-400 hover:underline font-mono"
                  >
                    {showHint ? "Скрыть подсказку" : "💡 Показать подсказку"}
                  </button>
                  {showHint && (
                    <div className="mt-1 text-amber-300/90 text-xs bg-amber-950/20 p-2 rounded-lg border border-amber-500/20">
                      {chunk.practiceDrill.hint}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Tags footer */}
      <div className="px-5 py-2.5 border-t border-slate-800/60 bg-slate-950/70 flex flex-wrap gap-1.5">
        {chunk.tags.map((tag) => (
          <span key={tag} className="text-[10px] font-mono text-slate-500 hover:text-slate-400">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
