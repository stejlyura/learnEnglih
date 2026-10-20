import React from "react";
import Link from "next/link";
import { LandingTracks } from "@/widgets/landing-tracks";
import { Sparkles, Code, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Ambient Glows */}
      <div className="glow-wrapper" aria-hidden="true">
        <div className="glow-bg glow-top-left" />
        <div className="glow-bg glow-bottom-right" />
      </div>

      <div className="main-wrapper">
        {/* Unified Hero Section */}
        <section className="hero-banner">
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            <span>Единая платформа блочного мышления: Язык & Программирование</span>
          </div>

          <h1 className="hero-title">
            Хватит собирать конструкции по одному элементу.<br />
            <span className="highlight">Мыслите готовыми неделимыми блоками.</span>
          </h1>

          <p className="hero-desc">
            Носители английского не переводят слова по словарю — они используют лексические чанки. Senior-разработчики не изобретают синтаксис на ходу — они применяют готовые инженерные инварианты. Освойте чанковое мышление для топового уровня в карьере.
          </p>

          <div className="hero-btn-row">
            <Link href="/programming" className="btn-primary-glow flex items-center gap-2">
              <Code className="w-4 h-4 text-cyan-300" />
              <span>💻 Чанки Программирования</span>
              <span className="text-xs opacity-75 font-mono">(JS, TS, React, Node)</span>
            </Link>

            <Link href="/learn-chunks" className="btn-secondary-glass flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-violet-300" />
              <span>🇬🇧 Английский B2 → C1 (100+ фраз)</span>
            </Link>
          </div>
        </section>

        {/* Dual Track Interactive Interface */}
        <LandingTracks />
      </div>
    </>
  );
}
