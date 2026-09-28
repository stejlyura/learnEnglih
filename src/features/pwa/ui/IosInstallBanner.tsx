"use client";

import React, { useState } from "react";
import { usePwaInstall } from "../model/usePwaInstall";

export function IosInstallBanner() {
  const { isIos, isStandalone, canPrompt, promptInstall, isDismissed, dismiss } = usePwaInstall();
  const [showManualModal, setShowManualModal] = useState(false);

  // If already running inside standalone PWA mode, don't show
  if (isStandalone) {
    return null;
  }

  return (
    <>
      {/* Floating Install Prompt Banner (Auto-shows once if not dismissed) */}
      {!isDismissed && (
        <aside
          role="region"
          aria-label="Установка приложения"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-[420px] z-[999] bg-[#111827]/95 border border-indigo-500/30 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-2xl shadow-black/60 text-slate-100 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                EN
              </div>
              <div>
                <h3 className="font-semibold text-sm text-white leading-tight">
                  Установить приложение
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Быстрый доступ без браузера и офлайн-режим
                </p>
              </div>
            </div>
            <button
              onClick={dismiss}
              aria-label="Закрыть уведомление"
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors hover:bg-white/5"
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
                  в панели Safari
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold shrink-0">
                  2
                </span>
                <span>
                  Выберите <strong className="text-white">«На экран "Домой"»</strong>{" "}
                  <svg className="inline w-4 h-4 text-emerald-400 align-text-bottom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold shrink-0">
                  3
                </span>
                <span>Нажмите <strong className="text-white">«Добавить»</strong> в верхнем углу</span>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={dismiss}
                  className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-medium transition-colors"
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
                  onClick={dismiss}
                  className="px-3 py-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Позже
                </button>
                <button
                  onClick={promptInstall}
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow-md shadow-indigo-600/30 transition-colors"
                >
                  Установить
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-3.5 pt-3 border-t border-white/10 text-xs text-slate-300">
              <p>Добавьте сайт на главный экран через меню браузера для быстрого запуска.</p>
              <div className="mt-2 flex justify-end">
                <button
                  onClick={dismiss}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  Понятно
                </button>
              </div>
            </div>
          )}
        </aside>
      )}

      {/* Manual Modal (Opened on demand via header or footer button) */}
      {showManualModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowManualModal(false)}
        >
          <div
            className="bg-[#111827] border border-indigo-500/30 rounded-2xl max-w-md w-full p-6 text-slate-100 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowManualModal(false)}
              aria-label="Закрыть окно"
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                EN
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Установка на iPhone / Телефон</h3>
                <p className="text-xs text-slate-400">Работает как нативное приложение</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0 text-xs">
                  1
                </span>
                <div>
                  <strong className="text-white block mb-0.5">Кнопка «Поделиться»</strong>
                  В Safari на iPhone нажмите иконку квадрата со стрелочкой вверх в нижней строке меню.
                </div>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0 text-xs">
                  2
                </span>
                <div>
                  <strong className="text-white block mb-0.5">На экран «Домой»</strong>
                  Прокрутите список действий вниз и выберите строку с иконкой «+ На экран Домой».
                </div>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0 text-xs">
                  3
                </span>
                <div>
                  <strong className="text-white block mb-0.5">Готово!</strong>
                  Нажмите «Добавить». Иконка появится на рабочем столе и будет открываться на весь экран без адресной строки браузера.
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setShowManualModal(false)}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-indigo-600/30"
              >
                Понятно, спасибо
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
