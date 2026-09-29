"use client";

import React from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/shared/config";
import { openPwaInstallModal } from "@/features/pwa";

export function AppFooter() {
  return (
    <footer
      className="w-full mt-auto border-t border-white/10 bg-slate-950/80 backdrop-blur-md pt-12 pb-12"
      style={{ paddingBottom: "max(48px, calc(48px + env(safe-area-inset-bottom, 0px)))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white text-xs font-bold">
                EN
              </div>
              <span className="font-bold text-white tracking-tight">Fluency Architecture</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-4">
              Интерактивная система беглого разговорного английского без зависаний и зубрежки правил. Переход от уровня B2 к свободному C1 через лексические чанки.
            </p>
            <button
              type="button"
              onClick={openPwaInstallModal}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors cursor-pointer"
            >
              <span>📱 Установить PWA на iPhone / Android</span>
            </button>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Ключевые модули
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Принципы методики
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Лексический подход Майкла Льюиса (Lexical Approach)</li>
              <li>• Разговорные формулы вместо книжного синтаксиса</li>
              <li>• Модель 4 сбалансированных потоков Пола Нейшна</li>
              <li>• Автоматизм вместо пословного перевода в голове</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>Разговорный английский для жизни, путешествий и общения.</span>
          <span>Next.js 16 • React 19 • PWA Offline Ready</span>
        </div>
      </div>
    </footer>
  );
}
