"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { LongreadNativeSwitch, LONGREAD_TABS } from "@/features/longread-switcher";
import NativeBrainPage from "./native-brain/page";
import MemoryConsolidationPage from "./memory-consolidation/page";
import ChunkArchitecturePage from "./chunk-architecture/page";
import NeuralWeightsPage from "./neural-weights/page";
import DirectThinkingPage from "./direct-thinking/page";
import FluencyGuidePage from "@/app/fluency-guide/page";
import ChunksPage from "@/app/chunks/page";
import MethodologyPage from "@/app/methodology/page";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

function LongreadsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const articleParam = searchParams.get("article");

  const currentSlug =
    articleParam && LONGREAD_TABS.some((t) => t.slug === articleParam)
      ? articleParam
      : "native-brain";

  const handleSelect = (slug: string) => {
    router.replace(`/longreads?article=${slug}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentIndex = LONGREAD_TABS.findIndex((t) => t.slug === currentSlug);
  const prevTab = currentIndex > 0 ? LONGREAD_TABS[currentIndex - 1] : null;
  const nextTab = currentIndex < LONGREAD_TABS.length - 1 ? LONGREAD_TABS[currentIndex + 1] : null;

  const renderActiveArticle = () => {
    switch (currentSlug) {
      case "native-brain":
        return <NativeBrainPage isUnified />;
      case "fluency-guide":
        return <FluencyGuidePage isUnified />;
      case "chunks":
        return <ChunksPage isUnified />;
      case "methodology":
        return <MethodologyPage isUnified />;
      case "memory-consolidation":
        return <MemoryConsolidationPage isUnified />;
      case "chunk-architecture":
        return <ChunkArchitecturePage isUnified />;
      case "neural-weights":
        return <NeuralWeightsPage isUnified />;
      case "direct-thinking":
        return <DirectThinkingPage isUnified />;
      default:
        return <NativeBrainPage isUnified />;
    }
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Native Switch Bar: Sticky top horizontal scroll on PC & native dock/drawer on Mobile */}
      <LongreadNativeSwitch
        activeSlug={currentSlug}
        onSelect={handleSelect}
      />

      {/* Main Reading View */}
      <main className="w-full">
        {renderActiveArticle()}
      </main>

      {/* Unified Article Footer Sequential Switcher */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 mt-8 border-t border-white/10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-slate-400 border border-white/10">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Материал {currentIndex + 1} из {LONGREAD_TABS.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevTab ? (
            <button
              type="button"
              onClick={() => handleSelect(prevTab.slug)}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-cyan-500/30 text-left transition-all cursor-pointer group"
            >
              <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:-translate-x-1 group-hover:text-cyan-400 transition-all shrink-0" />
              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Предыдущий лонгрид
                </div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                  {prevTab.shortTitle}
                </div>
                <div className="text-xs text-slate-400">
                  {prevTab.categoryLabel} • {prevTab.readTime}
                </div>
              </div>
            </button>
          ) : <div />}

          {nextTab ? (
            <button
              type="button"
              onClick={() => handleSelect(nextTab.slug)}
              className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-cyan-500/30 text-right transition-all cursor-pointer group sm:col-start-2"
            >
              <div className="min-w-0 text-left sm:text-right flex-1">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Следующий лонгрид
                </div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                  {nextTab.shortTitle}
                </div>
                <div className="text-xs text-slate-400">
                  {nextTab.categoryLabel} • {nextTab.readTime}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 group-hover:text-cyan-400 transition-all shrink-0" />
            </button>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}

export default function LongreadsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
            <span>Загрузка лонгрида...</span>
          </div>
        </div>
      }
    >
      <LongreadsContent />
    </Suspense>
  );
}
