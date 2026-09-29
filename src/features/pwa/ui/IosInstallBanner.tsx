"use client";

import React, { useState, useEffect } from "react";
import { usePwaInstall } from "../model/usePwaInstall";

export function openPwaInstallModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-pwa-install-modal"));
  }
}

export function IosInstallBanner() {
  const { isIos, isStandalone, canPrompt, promptInstall, isDismissed, dismiss } = usePwaInstall();
  const [showManualModal, setShowManualModal] = useState(false);

  useEffect(() => {
    const handleOpen = () => setShowManualModal(true);
    window.addEventListener("open-pwa-install-modal", handleOpen);
    return () => window.removeEventListener("open-pwa-install-modal", handleOpen);
  }, []);

  return (
    <>
      {/* Floating Install Prompt Banner (Auto-shows once if not dismissed and not in standalone PWA) */}
      {!isStandalone && !isDismissed && (
        <aside
          role="region"
          aria-label="Установка приложения"
          className="fixed bottom-4 left-3 right-3 sm:left-auto sm:right-6 sm:w-[400px] max-w-[calc(100vw-1.5rem)] z-[999] bg-[#111827]/95 border border-indigo-500/40 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-2xl shadow-black/80 text-slate-100"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-base shadow-md shrink-0">
                EN
              </div>
              <div>
                <h3 className="font-semibold text-sm text-white leading-tight">
                  Установить приложение
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Быстрый запуск с иконки и офлайн-режим
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Закрыть уведомление"
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors hover:bg-white/5 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {isIos ? (
            <div className="mt-3.5 pt-3 border-t border-white/10 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold shrink-0">
                  1
                </span>
                <span>
                  Нажмите кнопку <strong className="text-white">Поделиться</strong>{" "}
                  <svg className="inline w-4 h-4 text-cyan-400 align-text-bottom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>{" "}
                  в нижней панели Safari
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold shrink-0">
                  2
                </span>
                <span>
                  Выберите <strong className="text-white">«На экран &quot;Домой&quot;»</strong>{" "}
                  <svg className="inline w-4 h-4 text-emerald-400 align-text-bottom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold shrink-0">
                  3
                </span>
                <span>Нажмите <strong className="text-white">«Добавить»</strong> в верхнем правом углу</span>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setShowManualModal(true)}
                  className="text-xs text-cyan-400 hover:underline cursor-pointer"
                >
                  Инструкция с картинками →
                </button>
                <button
                  type="button"
                  onClick={dismiss}
                  className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Понятно
                </button>
              </div>
            </div>
          ) : canPrompt ? (
            <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-300">Установка в 1 клик</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={dismiss}
                  className="px-3 py-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Позже
                </button>
                <button
                  type="button"
                  onClick={promptInstall}
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow-md shadow-indigo-600/30 transition-colors cursor-pointer"
                >
                  Установить
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-3.5 pt-3 border-t border-white/10 text-xs text-slate-300">
              <p>Добавьте сайт на главный экран через меню браузера для быстрого запуска.</p>
              <div className="mt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setShowManualModal(true)}
                  className="text-xs text-cyan-400 hover:underline cursor-pointer"
                >
                  Подробнее →
                </button>
                <button
                  type="button"
                  onClick={dismiss}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Понятно
                </button>
              </div>
            </div>
          )}
        </aside>
      )}

      {/* Manual Modal (Opened on demand via header or footer button or banner) */}
      {showManualModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowManualModal(false)}
        >
          <div
            className="bg-[#0E1524] border border-indigo-500/40 rounded-3xl max-w-md w-full p-6 text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowManualModal(false)}
              aria-label="Закрыть окно"
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
                EN
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-tight">Установка PWA на iPhone</h3>
                <p className="text-xs text-cyan-400 font-medium">Работает офлайн без адресной строки</p>
              </div>
            </div>

            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0 text-xs mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-white block mb-0.5">Откройте Safari и нажмите «Поделиться»</strong>
                  <span className="text-xs text-slate-400 leading-relaxed block">
                    В нижней панели Safari найдите иконку квадрата со стрелочкой вверх (Share / Поделиться).
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0 text-xs mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-white block mb-0.5">Выберите «На экран &quot;Домой&quot;»</strong>
                  <span className="text-xs text-slate-400 leading-relaxed block">
                    Прокрутите список действий вниз и нажмите на пункт с иконкой плюсика <strong>«На экран &quot;Домой&quot;»</strong> (Add to Home Screen).
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0 text-xs mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-white block mb-0.5">Нажмите «Добавить»</strong>
                  <span className="text-xs text-slate-400 leading-relaxed block">
                    В правом верхнем углу подтвердите нажатием кнопки <strong>«Добавить»</strong>. Иконка появится на рабочем столе iPhone и будет запускаться как нативное приложение!
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
              {canPrompt && (
                <button
                  type="button"
                  onClick={async () => {
                    await promptInstall();
                    setShowManualModal(false);
                  }}
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  ⚡ Установить в 1 клик (Android / PC)
                </button>
              )}
              <button
                type="button"
                onClick={() => setShowManualModal(false)}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer text-center"
              >
                Понятно, закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
