"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/shared/config";
import { CHUNKS_DATA } from "@/entities/chunk";
import { SpeakButton } from "@/features/speech-pronounce";

export default function HomePage() {
  const [randomChunkIndex, setRandomChunkIndex] = useState(0);

  const sampleChunk = CHUNKS_DATA[randomChunkIndex % CHUNKS_DATA.length];

  const handleNextChunk = () => {
    setRandomChunkIndex((prev) => (prev + 1) % CHUNKS_DATA.length);
  };

  return (
    <>
      {/* Ambient Glows */}
      <div className="glow-bg glow-top-left" />
      <div className="glow-bg glow-bottom-right" />

      <div className="main-wrapper">
        {/* Hero Section */}
        <section className="hero-banner">
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            <span>Интерактивная система беглой разговорной речи B2 → C1</span>
          </div>

          <h1 className="hero-title">
            Хватит переводить по одному слову.<br />
            <span className="highlight">Говорите готовыми речевыми блоками.</span>
          </h1>

          <p className="hero-desc">
            Носители языка не рассчитывают времена по формулам в уме. В их памяти хранятся готовые лексические чанки (Lexical Chunks). Освойте блочное мышление для свободного, непринужденного общения в жизни и работе.
          </p>

          <div className="hero-btn-row">
            <Link href="/learn-chunks" className="btn-primary-glow">
              <span>⚡ Открыть интерактивный тренажер</span>
              <span className="text-xs opacity-75 font-mono">(100+ фраз)</span>
            </Link>
            <Link href="/chunks" className="btn-secondary-glass">
              📖 Начать с фундамента (Чанки) →
            </Link>
          </div>
        </section>

        {/* Interactive Widget: "Chunk of the Moment" */}
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

        {/* Curriculum Grid (All 6 core modules) */}
        <section className="my-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Карта обучения: 6 практических модулей
            </h2>
            <p className="text-sm text-slate-400">
              Пошаговый переход от грамматических затыков к чистой, естественной беглости носителя.
            </p>
          </div>

          <div className="modules-grid">
            {NAV_ITEMS.map((item, idx) => (
              <Link key={item.href} href={item.href} className="module-card">
                <div>
                  <div className="module-top-row">
                    <span className="module-num">0{idx + 1}</span>
                    {item.badge && <span className="module-badge">{item.badge}</span>}
                  </div>
                  <h3 className="module-title">{item.title}</h3>
                  <p className="module-desc">{item.description}</p>
                </div>

                <div className="module-footer-row">
                  <span>{item.readTime ? `Чтение: ${item.readTime}` : "Интерактивный тренажер"}</span>
                  <span className="arrow">Перейти →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Cognitive Comparison Table */}
        <section className="chunk-showcase-box max-w-4xl mx-auto my-16">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
            Сравнение подходов: Почему традиционная сборка не работает
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-3">
              <div className="text-rose-400 font-bold text-xs uppercase tracking-wider">
                ❌ Пословная сборка (Ступор B2)
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Вы формулируете русскую мысль, переводите каждое слово по словарю, вспоминаете правила согласования времен и падежей.
              </p>
              <div className="text-xs text-rose-300 font-semibold pt-2 border-t border-rose-500/20">
                Результат: пауза 5–10 секунд, мучительное «эээ...» и потеря нити живого разговора.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
                ⚡ Блочное мышление (Уровень C1)
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Мозг извлекает готовые полуфабрикаты речи (например, <em>«What I&apos;m trying to get at is...»</em>) как единые неделимые блоки.
              </p>
              <div className="text-xs text-emerald-300 font-semibold pt-2 border-t border-emerald-500/20">
                Результат: свободная оперативная память, плавная и расслабленная речь без запинок.
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
