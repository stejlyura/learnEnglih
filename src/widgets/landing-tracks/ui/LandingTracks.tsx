"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Code, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Zap, 
  Terminal,
  Grid3X3,
  Clock,
  Link2,
  Flame,
  MessageSquare,
  ShieldCheck
} from "lucide-react";
import { NAV_ITEMS } from "@/shared/config";
import { ChunkShowcase } from "@/widgets/chunk-showcase";
import { ProgrammingShowcase } from "@/widgets/programming-showcase";
import { PROGRAMMING_CHUNKS } from "@/entities/programming-chunk";
import { cn } from "@/shared/lib";

export type ActiveTrack = "all" | "english" | "programming";

export function LandingTracks() {
  const [activeTrack, setActiveTrack] = useState<ActiveTrack>("all");

  return (
    <div className="w-full">
      {/* Track Selection Switcher Bar */}
      <div className="flex justify-center mb-10 sm:mb-14">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md">
          <button
            onClick={() => setActiveTrack("all")}
            className={cn(
              "flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200",
              activeTrack === "all"
                ? "bg-slate-800 text-white shadow-lg border border-slate-700"
                : "text-slate-400 hover:text-white"
            )}
          >
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Все направления</span>
          </button>

          <button
            onClick={() => setActiveTrack("english")}
            className={cn(
              "flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200",
              activeTrack === "english"
                ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/30"
                : "text-slate-400 hover:text-white"
            )}
          >
            <BookOpen className="w-4 h-4 text-violet-300" />
            <span>🇬🇧 Английский B2 → C1</span>
          </button>

          <button
            onClick={() => setActiveTrack("programming")}
            className={cn(
              "flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200",
              activeTrack === "programming"
                ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-600/30"
                : "text-slate-400 hover:text-white"
            )}
          >
            <Code className="w-4 h-4 text-cyan-300" />
            <span>💻 Программирование</span>
          </button>
        </div>
      </div>

      {/* DUAL TRACK OVERVIEW CARDS (Visible when 'all' or default) */}
      {(activeTrack === "all") && (
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Выберите направление развития
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Блочное мышление — универсальный когнитивный закон беглости: в разговорной речи и в написании продакшен-кода.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* TRACK 1: ENGLISH */}
            <div className="relative rounded-3xl bg-gradient-to-b from-indigo-950/40 via-slate-900/60 to-slate-950/90 border border-indigo-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-indigo-500/50 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl p-2.5 rounded-2xl bg-indigo-500/15 border border-indigo-500/30">
                    🇬🇧
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {NAV_ITEMS.length} разделов • 100+ фраз
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                  Разговорный Английский (B2 → C1)
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Хватит переводить русские предложения по одному слову и заикаться в поисках времен. Говорите готовыми лексическими чанками (Lexical Chunks), как носители.
                </p>

                <div className="my-6 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Времена Plug & Play:</strong> 20 шаблонов вместо школьных правил</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Плотные связки & Дипломатия:</strong> устранение мычания «эээ»</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Дискурсивные каркасы:</strong> 63 шаблона для созвонов и дебатов</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActiveTrack("english")}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
                >
                  Развернуть трек на этой странице ↓
                </button>
                <Link
                  href="/learn-chunks"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-indigo-600/30"
                >
                  <span>Открыть тренажер речи</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* TRACK 2: PROGRAMMING */}
            <div className="relative rounded-3xl bg-gradient-to-b from-cyan-950/40 via-slate-900/60 to-slate-950/90 border border-cyan-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-cyan-500/50 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl p-2.5 rounded-2xl bg-cyan-500/15 border border-cyan-500/30">
                    💻
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    4 стека • JS, TS, React, Node.js
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  Программирование & Топовый Кодинг
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Хватит писать код посимвольно и натыкаться на одни и те же баги. Освойте чанки механик движка, асинхронных очередей, хуков React и строгой типизации TypeScript.
                </p>

                {/* 4 Stacks Badges */}
                <div className="my-6 grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                    <div className="font-bold text-amber-400 flex items-center gap-1.5">
                      <span>🟨</span>
                      <span>JavaScript</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Event loop, microtasks, WeakMap</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                    <div className="font-bold text-blue-400 flex items-center gap-1.5">
                      <span>🔷</span>
                      <span>TypeScript</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Infer, mapped types, assertNever</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                    <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                      <span>⚛️</span>
                      <span>React</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Хуки, race condition, state machine</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                    <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <span>🟩</span>
                      <span>Node.js</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Стримы, backpressure, shutdown</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActiveTrack("programming")}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Развернуть трек на этой странице ↓
                </button>
                <Link
                  href="/programming"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-cyan-600/30"
                >
                  <span>База чанков кодинга</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TRACK DETAILS: PROGRAMMING */}
      {(activeTrack === "programming" || activeTrack === "all") && (
        <section className="my-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                <Code className="w-4 h-4" />
                <span>Инженерные блоки кодинга</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Каталог Чанков Программирования
              </h2>
            </div>

            <Link
              href="/programming"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <span>Открыть в отдельном окне</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <ProgrammingShowcase />
        </section>
      )}

      {/* TRACK DETAILS: ENGLISH */}
      {(activeTrack === "english" || activeTrack === "all") && (
        <section className="my-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
                <BookOpen className="w-4 h-4" />
                <span>Речевые блоки английского</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Английский B2 → C1: Интерактивная База
              </h2>
            </div>

            <Link
              href="/learn-chunks"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 text-xs font-semibold border border-indigo-500/30 transition-colors"
            >
              <span>Тренажер 100+ фраз</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Interactive Widget: "Chunk of the Moment" */}
          <ChunkShowcase />

          {/* Curriculum Grid (All core modules) */}
          <div className="mt-14">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Карта обучения английскому ({NAV_ITEMS.length} разделов)
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Пошаговый переход от грамматических затыков к чистой, естественной беглости носителя.
              </p>
            </div>

            <div className="modules-grid">
              {NAV_ITEMS.map((item, idx) => (
                <Link key={item.href} href={item.href} className="module-card">
                  <div>
                    <div className="module-top-row">
                      <span className="module-num">{String(idx + 1).padStart(2, "0")}</span>
                      {item.badge && <span className="module-badge">{item.badge}</span>}
                    </div>
                    <h4 className="module-title">{item.title}</h4>
                    <p className="module-desc">{item.description}</p>
                  </div>

                  <div className="module-footer-row">
                    <span>{item.readTime ? `Чтение: ${item.readTime}` : "Интерактивный тренажер"}</span>
                    <span className="arrow">Перейти →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COGNITIVE FOUNDATION COMPARISON (Applies to both) */}
      <section className="chunk-showcase-box max-w-4xl mx-auto my-16">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
          Почему пословный перевод и посимвольный кодинг ведут в ступор
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="text-rose-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span>❌</span>
                <span>Поэлементная сборка (Ступор)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                В английском вы мучительно переводите каждое слово по словарю. В кодинге — вспоминаете синтаксис методов, плодите вложенные if/else и наступаете на утечки памяти и race conditions.
              </p>
            </div>
            <div className="text-xs text-rose-300 font-semibold pt-3 border-t border-rose-500/20">
              Итог: Паузы, спагетти-код, усталость мозга и постоянные баги в рантайме.
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span>⚡</span>
                <span>Блочное мышление (Senior & C1)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Мозг извлекает готовые полуфабрикаты: устойчивые речевые каркасы в английском (<em>«What I&apos;m trying to get at is...»</em>) и проверенные архитектурные инварианты в коде (<em>AbortController с таймером, assertNever, useReducer state machine</em>).
              </p>
            </div>
            <div className="text-xs text-emerald-300 font-semibold pt-3 border-t border-emerald-500/20">
              Итог: Освобожденная оперативная память, уверенная речь и отказоустойчивый код.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
