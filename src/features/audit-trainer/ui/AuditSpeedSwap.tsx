"use client";

import React, { useState, useEffect, useRef } from "react";
import { AuditChunkItem } from "@/entities/chunk";
import { SpeakButton } from "@/features/speech-pronounce";
import { Play, Pause, RotateCcw, ChevronRight } from "lucide-react";

export interface AuditSpeedSwapProps {
  readonly items: readonly AuditChunkItem[];
}

export function AuditSpeedSwap({ items }: AuditSpeedSwapProps) {
  const [speedSwapIndex, setSpeedSwapIndex] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentItem = items[speedSwapIndex % items.length];

  useEffect(() => {
    if (isTimerRunning) {
      timerIntervalRef.current = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isTimerRunning]);

  const handleStartTimer = () => {
    if (timerSeconds === 0) setTimerSeconds(60);
    setIsTimerRunning(true);
  };

  const handlePauseTimer = () => {
    setIsTimerRunning(false);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(60);
  };

  const handleNextItem = () => {
    setSpeedSwapIndex((prev) => (prev + 1) % items.length);
  };

  if (!currentItem) {
    return (
      <div className="text-center py-12 text-slate-400">
        Нет элементов для тренажера.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-6 space-y-6">
      <div className="bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Speed-Swapping Тренажер • Метод Роберта ДеКейзера
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-2">
              Процедурализация за 60 секунд
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
              Зафиксируйте жесткий каркас чанка и проговорите вслух 5 рабочих контекстов менее чем за минуту.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex flex-col items-center sm:items-end gap-2 shrink-0">
            <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-2xl border border-white/15">
              <span className="text-2xl sm:text-3xl font-black font-mono text-cyan-300">
                {String(Math.floor(timerSeconds / 60)).padStart(2, "0")}:
                {String(timerSeconds % 60).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-1">
                {!isTimerRunning ? (
                  <button
                    type="button"
                    onClick={handleStartTimer}
                    className="p-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white cursor-pointer transition-all"
                    title="Запустить таймер"
                  >
                    <Play className="w-4 h-4 fill-white" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handlePauseTimer}
                    className="p-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-white cursor-pointer transition-all"
                    title="Пауза"
                  >
                    <Pause className="w-4 h-4 fill-white" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleResetTimer}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 cursor-pointer transition-all"
                  title="Сброс"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Current Target Frame */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/15 mb-6">
          <div className="text-xs font-semibold text-slate-400 mb-1">
            Базовый речевой каркас со слотом:
          </div>
          <div className="text-xl sm:text-2xl font-black text-cyan-300 font-mono">
            {currentItem.target}
          </div>
          <div className="text-xs text-slate-400 mt-1 italic">
            Отрабатываемая ошибка:{" "}
            <span className="text-rose-300 line-through">{currentItem.trap}</span>
          </div>
        </div>

        {/* Rapid Contexts */}
        <div className="space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Проговорите вслух 5 рабочих сценариев:
          </div>
          {currentItem.speedSwaps.map((example, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all group"
            >
              <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div className="flex-1 font-mono text-xs sm:text-sm text-slate-100 font-medium">
                {example}
              </div>
              <div className="shrink-0 opacity-80 group-hover:opacity-100">
                <SpeakButton text={example} size="sm" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={handleNextItem}
            className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-indigo-600/25"
          >
            <span>Следующий чанк</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
