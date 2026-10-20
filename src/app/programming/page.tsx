import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ProgrammingShowcase } from "@/widgets/programming-showcase";
import { ArrowLeft, Code, Sparkles, Cpu, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Инженерные Чанки: JavaScript, TypeScript, React, Node.js | Fluency Architecture",
  description: "Освойте блочное мышление в кодинге: готовые производственные чанки механик движка, асинхронности, хуков React и строгой типизации TypeScript.",
};

export default function ProgrammingPage() {
  return (
    <div className="min-h-screen py-10">
      {/* Ambient Glows */}
      <div className="glow-wrapper" aria-hidden="true">
        <div className="glow-bg glow-top-left opacity-30" />
        <div className="glow-bg glow-bottom-right opacity-30" />
      </div>

      <div className="main-wrapper">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Вернуться на главную</span>
          </Link>
        </div>

        {/* Page Hero */}
        <section className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-4">
            <Code className="w-3.5 h-3.5" />
            <span>Модуль Программирования • Fullstack Senior Chunks</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Перестаньте писать код посимвольно.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
              Мыслите проверенными инженерными чанками.
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Как носители английского говорят устойчивыми фразами, так и senior-разработчики оперируют неделимыми блоками архитектурных инвариантов.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl font-black text-amber-400">🟨 JS</div>
              <div className="text-[11px] text-slate-400 mt-1">Event Loop & Память</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl font-black text-blue-400">🔷 TS</div>
              <div className="text-[11px] text-slate-400 mt-1">Infer & Mapped Types</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl font-black text-cyan-400">⚛️ React</div>
              <div className="text-[11px] text-slate-400 mt-1">Хуки & Race Conditions</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl font-black text-emerald-400">🟩 Node.js</div>
              <div className="text-[11px] text-slate-400 mt-1">Стримы & Backpressure</div>
            </div>
          </div>
        </section>

        {/* Methodology Feature Strip */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-start gap-3">
            <Cpu className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-bold text-white">Механики Движка</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Понимание работы V8, Garbage Collection и очередей микротасок предотвращает утечки памяти и зависания UI.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-start gap-3">
            <Zap className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-bold text-white">Асинхронная Надежность</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Каскадная отмена AbortController, экспоненциальный retry и очереди с ограничением параллелизма.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-bold text-white">Zero Any & Type Safety</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Делаем невалидные состояния непредставимыми на уровне компилятора через discriminated unions и assertNever.
              </p>
            </div>
          </div>
        </section>

        {/* Main Interactive Showcase */}
        <ProgrammingShowcase />
      </div>
    </div>
  );
}
