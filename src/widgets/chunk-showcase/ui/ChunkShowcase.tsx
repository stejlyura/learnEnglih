"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CHUNKS_DATA } from "@/entities/chunk";
import { SpeakButton } from "@/features/speech-pronounce";

export function ChunkShowcase() {
  const [randomChunkIndex, setRandomChunkIndex] = useState(0);

  const sampleChunk = CHUNKS_DATA[randomChunkIndex % CHUNKS_DATA.length];

  const handleNextChunk = () => {
    setRandomChunkIndex((prev) => (prev + 1) % CHUNKS_DATA.length);
  };

  return (
    <section className="chunk-showcase-box max-w-4xl mx-auto">
      <div className="showcase-header">
        <div>
          <span className="showcase-tag">Разговорный блок момента</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Прокачайте автоматизм прямо сейчас
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleNextChunk}
            className="btn-secondary-glass text-xs py-2 px-3 flex items-center gap-1.5 cursor-pointer"
          >
            <span>🔄 Другая фраза</span>
          </button>
          <Link href="/learn-chunks" className="btn-primary-glow text-xs py-2 px-3">
            Все 100+ фраз →
          </Link>
        </div>
      </div>

      <div className="py-2">
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="module-badge">{sampleChunk.catName}</span>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Послушать носителя:</span>
            <SpeakButton text={sampleChunk.clean || sampleChunk.text} size="sm" />
          </div>
        </div>

        <div className="chunk-headline">
          {sampleChunk.text}
        </div>

        <div className="chunk-meaning">
          «{sampleChunk.trans}»
        </div>

        {/* Conversational Example Box */}
        <div className="chunk-quote-card">
          <div className="flex items-start justify-between gap-3">
            <div className="chunk-quote-en">
              &ldquo;{sampleChunk.exEn}&rdquo;
            </div>
            <SpeakButton text={sampleChunk.exEn} size="sm" />
          </div>
          <div className="chunk-quote-ru">{sampleChunk.exRu}</div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5">
          <span>💡 {sampleChunk.note}</span>
          <span className="text-indigo-400 font-semibold">Без зависаний и зубрежки правил</span>
        </div>
      </div>
    </section>
  );
}
