"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Sparkles, 
  Clock, 
  Link2, 
  BookOpen, 
  Smartphone, 
  Home,
  ChevronRight,
  Flame, 
  Grid3X3,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/shared/lib";
import { openPwaInstallModal } from "@/features/pwa";

interface HeaderNavItem {
  readonly title: string;
  readonly href: string;
  readonly desc: string;
  readonly icon: React.ReactNode;
}

const HEADER_LINKS: readonly HeaderNavItem[] = [
  { 
    title: "Таблица Времен", 
    href: "/tense-matrix", 
    desc: "Present, Past, Future в готовых чанках",
    icon: <Grid3X3 className="w-5 h-5 text-indigo-400" />
  },
  { 
    title: "Времена Plug & Play", 
    href: "/tense-chunks", 
    desc: "Готовые шаблоны видовременных форм",
    icon: <Clock className="w-5 h-5 text-indigo-400" />
  },
  { 
    title: "Плотные Связки", 
    href: "/dense-structure", 
    desc: "Устранение пауз и связки речи",
    icon: <Link2 className="w-5 h-5 text-violet-400" />
  },
  { 
    title: "Чанки из Аудита", 
    href: "/audit-chunks", 
    desc: "Антидоты к 7 фоссилизированным калькам",
    icon: <Flame className="w-5 h-5 text-rose-400" />
  },
  { 
    title: "Вопросы & Условия", 
    href: "/question-conditional-chunks", 
    desc: "What–How + 4 Conditionals под Support и Sales",
    icon: <Sparkles className="w-5 h-5 text-emerald-400" />
  },
  { 
    title: "Дискурс & Дебаты", 
    href: "/discourse-chunks", 
    desc: "63 каркаса C1: ввод позиции, уступка и синтез",
    icon: <MessageSquare className="w-5 h-5 text-cyan-400" />
  },
  { 
    title: "Лонгриды", 
    href: "/longreads", 
    desc: "Исследования SLA: Мозг C1, Беглость, Чанки, Дискурс",
    icon: <BookOpen className="w-5 h-5 text-cyan-300" />
  },
] as const;

export function AppHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isItemActive = (href: string) => {
    if (href === "/longreads") {
      return (
        pathname.startsWith("/longreads") ||
        pathname === "/chunks" ||
        pathname === "/fluency-guide" ||
        pathname === "/methodology"
      );
    }
    return pathname === href;
  };

  // Lock body scroll and handle escape key when menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);


  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          {/* Brand Group */}
          <Link href="/" className="brand-group min-w-0" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-logo-icon shrink-0">EN</div>
            <div className="min-w-0 truncate">
              <div className="brand-title truncate">Fluency Architecture</div>
              <div className="brand-subtitle hidden xs:block truncate">B2 → C1 Conversational</div>
            </div>
          </Link>

          {/* Desktop Nav (screens >= 1024px) */}
          <nav className="header-nav hidden lg:flex">
            {HEADER_LINKS.map((item) => {
              const isActive = isItemActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn("nav-link", isActive && "active")}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={openPwaInstallModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer"
              title="Инструкция по установке на телефон"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>PWA</span>
            </button>

            <Link 
              href="/learn-chunks" 
              className="btn-header-cta text-xs sm:text-sm px-3.5 sm:px-5 py-2 shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Тренажер</span>
              <span className="text-[11px] opacity-80 font-mono hidden xs:inline">100+</span>
            </Link>

            {/* Mobile / Tablet Burger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-white bg-white/10 hover:bg-white/15 active:scale-95 border border-white/15 transition-all cursor-pointer shadow-sm"
              aria-label="Открыть меню"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5 text-cyan-300" />
              <span className="text-xs font-bold uppercase tracking-wider">Меню</span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Burger Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[1000] flex justify-end">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div 
            className="relative w-full max-w-sm sm:max-w-md h-full bg-[#0b0f19] border-l border-white/10 shadow-2xl flex flex-col z-[1001] overflow-y-auto animate-in slide-in-from-right duration-250 ease-out"
            role="dialog"
            aria-modal="true"
            aria-label="Навигационное меню"
          >
            {/* Drawer Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-5 bg-[#0b0f19]/95 backdrop-blur-md border-b border-white/10">
              <Link 
                href="/" 
                className="brand-group" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="brand-logo-icon">EN</div>
                <div>
                  <div className="brand-title text-base">Fluency Architecture</div>
                  <div className="brand-subtitle text-xs">B2 → C1 Conversational</div>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-all cursor-pointer active:scale-95"
                aria-label="Закрыть меню"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 p-4 sm:p-5 space-y-4">
              {/* Highlight CTA: Trainer */}
              <Link
                href="/learn-chunks"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-4 rounded-2xl bg-gradient-to-r from-indigo-600/30 to-cyan-500/20 hover:from-indigo-600/40 hover:to-cyan-500/30 border border-indigo-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-indigo-500/30 text-cyan-300">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-white text-sm sm:text-base">Интерактивный Тренажер</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30">
                    100+ фраз
                  </span>
                </div>
                <p className="text-xs text-slate-300 pl-8">
                  Флешкарты и быстрые квизы для доведения разговорных блоков до автоматизма.
                </p>
              </Link>

              {/* Navigation Items */}
              <div className="space-y-1">
                <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Разделы и материалы
                </div>

                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-xl transition-all",
                    pathname === "/"
                      ? "bg-indigo-600/20 text-cyan-300 border border-indigo-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-slate-300">
                      <Home className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Главная страница</div>
                      <div className="text-xs text-slate-400">Обзор системы беглости</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>

                {HEADER_LINKS.map((item) => {
                  const isActive = isItemActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-3 rounded-xl transition-all",
                        isActive
                          ? "bg-indigo-600/20 text-cyan-300 border border-indigo-500/30 font-medium"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5">
                          {item.icon}
                        </div>
                        <div>
                          <div className={cn("font-semibold text-sm", isActive ? "text-cyan-300" : "text-white")}>
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-400">{item.desc}</div>
                        </div>
                      </div>
                      <ChevronRight className={cn("w-4 h-4", isActive ? "text-cyan-400" : "text-slate-500")} />
                    </Link>
                  );
                })}
              </div>

              {/* Install PWA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openPwaInstallModal();
                  }}
                  className="w-full text-left p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 active:bg-white/15 border border-cyan-500/30 flex items-center justify-between transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-300 group-hover:scale-105 transition-transform">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-cyan-300">Установить PWA на телефон</div>
                      <div className="text-xs text-slate-400">iOS Safari и Android без интернета</div>
                    </div>
                  </div>
                  <span className="text-[11px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-mono font-semibold">
                    Установить
                  </span>
                </button>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 sm:p-5 border-t border-white/10 text-center text-xs text-slate-500 bg-[#080c14]">
              Fluency Architecture • B2 → C1 Lexical System
            </div>
          </div>
        </div>
      )}
    </>
  );
}
