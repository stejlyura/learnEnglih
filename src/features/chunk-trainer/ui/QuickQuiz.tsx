"use client";

import React, { useState } from "react";
import { ChunkItem } from "@/entities/chunk";
import { SpeakButton } from "@/features/speech-pronounce";
import { Button } from "@/shared/ui";
import { cn } from "@/shared/lib";

interface QuickQuizProps {
  readonly chunks: readonly ChunkItem[];
}

export function QuickQuiz({ chunks }: QuickQuizProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  if (chunks.length < 4) {
    return (
      <div className="text-center py-12 glass-panel rounded-2xl">
        <p className="text-slate-400">Нужно как минимум 4 чанка для запуска квиза.</p>
      </div>
    );
  }

  const currentTarget = chunks[questionIndex % chunks.length];

  // Pick 3 random distractors from chunks
  const distractors = chunks
    .filter((c) => c.id !== currentTarget.id)
    .slice(0, 3);

  // Deterministic 4 options
  const options = [currentTarget, ...distractors].sort((a, b) => a.id.localeCompare(b.id));

  const handleSelect = (id: string) => {
    if (isAnswered) return;
    setSelectedOption(id);
    setIsAnswered(true);
    if (id === currentTarget.id) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setQuestionIndex((prev) => prev + 1);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Quiz Progress Header */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>
          Вопрос <strong className="text-white">{questionIndex + 1}</strong>
        </span>
        <span className="text-cyan-400 font-semibold">
          Очки: {score} из {questionIndex + (isAnswered ? 1 : 0)}
        </span>
      </div>

      {/* Question Card */}
      <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 space-y-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
            Как носитель естественно скажет по-английски:
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 leading-snug">
            «{currentTarget.trans}»
          </h3>
          {currentTarget.note && (
            <p className="text-xs text-slate-400 mt-1">
              Ситуация: {currentTarget.note}
            </p>
          )}
        </div>

        {/* Options */}
        <div className="space-y-2.5 pt-2">
          {options.map((option) => {
            const isSelected = selectedOption === option.id;
            const isCorrect = option.id === currentTarget.id;

            let buttonStyle = "bg-white/5 border-white/10 hover:border-indigo-500/40 text-slate-200";

            if (isAnswered) {
              if (isCorrect) {
                buttonStyle = "bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-semibold";
              } else if (isSelected) {
                buttonStyle = "bg-rose-500/20 border-rose-500/60 text-rose-300";
              } else {
                buttonStyle = "opacity-40 border-white/5";
              }
            }

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.id)}
                disabled={isAnswered}
                className={cn(
                  "w-full text-left p-4 rounded-xl border text-sm transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer",
                  buttonStyle
                )}
              >
                <span className="font-mono">{option.clean || option.text}</span>
                {isAnswered && isCorrect && (
                  <span className="text-emerald-400 text-xs font-bold">✓ Верно</span>
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <span className="text-rose-400 text-xs font-bold">✕ Неверно</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback & Explanation */}
        {isAnswered && (
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="bg-black/30 rounded-xl p-3 border border-white/5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-slate-300">Пример в живой речи:</span>
                <SpeakButton text={currentTarget.exEn} size="sm" />
              </div>
              <p className="font-serif italic text-indigo-200 text-sm mb-1">
                &ldquo;{currentTarget.exEn}&rdquo;
              </p>
              <p className="text-xs text-slate-400">{currentTarget.exRu}</p>
            </div>

            <Button variant="primary" className="w-full" onClick={handleNext}>
              Следующий вопрос →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
