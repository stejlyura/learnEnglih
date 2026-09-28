"use client";

import React, { useState, useMemo } from "react";
import { CHUNKS_DATA, ChunkCategory } from "@/entities/chunk";
import { TrainerFilterBar, TrainerMode, FlashcardDeck, QuickQuiz } from "@/features/chunk-trainer";
import { ChunkCard } from "@/widgets/chunk-card";

export default function LearnChunksPage() {
  const [currentCategory, setCurrentCategory] = useState<ChunkCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [mode, setMode] = useState<TrainerMode>("list");
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredChunks = useMemo(() => {
    return CHUNKS_DATA.filter((chunk) => {
      // Category match
      if (currentCategory !== "all" && chunk.cat !== currentCategory) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inText = chunk.text.toLowerCase().includes(query);
        const inTrans = chunk.trans.toLowerCase().includes(query);
        const inExEn = chunk.exEn.toLowerCase().includes(query);
        const inExRu = chunk.exRu.toLowerCase().includes(query);
        return inText || inTrans || inExEn || inExRu;
      }
      return true;
    });
  }, [currentCategory, searchQuery]);

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="main-wrapper">
      {/* Page Header */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            <span>Интерактивная база &amp; тренажер • 100 чанков</span>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 hover:from-indigo-500 hover:to-cyan-500 text-white border border-indigo-500/40 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-lg hover:shadow-indigo-500/25 cursor-pointer"
          >
            <span>📖 Как учить правильно</span>
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Репозиторий Базовых Лексических Чанков
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Готовые речевые блоки вместо пословного конструирования. Учите чанки целиком — и речевой аппарат перестанет зависать на митингах и в беседах.
        </p>
      </div>

      {/* Filter and Mode Controls */}
      <TrainerFilterBar
        currentCategory={currentCategory}
        onSelectCategory={setCurrentCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        mode={mode}
        onModeChange={setMode}
        totalCount={filteredChunks.length}
      />

      {/* Main Mode View */}
      {mode === "list" && (
        <div>
          {filteredChunks.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/60 rounded-3xl border border-white/10">
              <p className="text-slate-400 text-base">Ничего не найдено по вашему запросу.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setCurrentCategory("all");
                }}
                className="mt-3 text-cyan-400 hover:underline text-xs font-semibold cursor-pointer"
              >
                Сбросить фильтры
              </button>
            </div>
          ) : (
            <div className="chunks-grid">
              {filteredChunks.map((chunk) => (
                <ChunkCard
                  key={chunk.id}
                  chunk={chunk}
                  isBookmarked={bookmarkedIds.has(chunk.id)}
                  onToggleBookmark={handleToggleBookmark}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {mode === "flashcards" && (
        <div className="py-6">
          <FlashcardDeck chunks={filteredChunks} />
        </div>
      )}

      {mode === "quiz" && (
        <div className="py-6">
          <QuickQuiz chunks={filteredChunks} />
        </div>
      )}

      {/* Instruction Modal from legacy/html/learn-chanks.html */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#0E1524] border border-indigo-500/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-rose-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-sm font-bold"
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider font-extrabold text-cyan-400 block mb-1">
                Психолингвистическая инструкция
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Как учить чанки, чтобы они всплывали на автомате
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-black/30 border border-white/10 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-3 text-white font-bold text-base mb-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span>Никогда не учите отдельные слова</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-0">
                  Мозг тратит до 1.5 секунд на сборку фразы из отдельных слов. Чанк — это уже собранный архивированный файл в вашей памяти. Учите связку целиком: не <code className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">barrier</code>, а <code className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">run into a barrier</code>.
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-3 text-white font-bold text-base mb-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span>Связывайте с моторной памятью (Произносите вслух)</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-0">
                  Чтение глазами развивает только пассивное понимание. Чтобы речевой аппарат не застревал на созвоне, каждый чанк нужно проговорить вслух <strong>минимум 5 раз на одном выдохе</strong>.
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-3 text-white font-bold text-base mb-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <span>Подставляйте свои переменные (Slot Swapping)</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-0">
                  Для рамок со слотами <code className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">[X]</code> сразу придумывайте 2–3 примера из вашей реальной работы или жизни. Чем эмоциональнее и ближе к вам пример, тем крепче нейронный след.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors cursor-pointer text-sm"
            >
              Понятно, перейти к тренировке
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
