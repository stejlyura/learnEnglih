"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib";
import { openPwaInstallModal } from "@/features/pwa";

interface HeaderNavItem {
  readonly title: string;
  readonly href: string;
}

const HEADER_LINKS: readonly HeaderNavItem[] = [
  { title: "Лексические Чанки", href: "/chunks" },
  { title: "Времена Plug & Play", href: "/tense-chunks" },
  { title: "Плотные Связки", href: "/dense-structure" },
  { title: "Архитектура Беглости", href: "/fluency-guide" },
  { title: "Методология", href: "/methodology" },
] as const;

export function AppHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand Group */}
        <Link href="/" className="brand-group min-w-0">
          <div className="brand-logo-icon shrink-0">EN</div>
          <div className="min-w-0 truncate">
            <div className="brand-title truncate">Fluency Architecture</div>
            <div className="brand-subtitle hidden xs:block truncate">B2 → C1 Conversational</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="header-nav hidden xl:flex">
          {HEADER_LINKS.map((item) => {
            const isActive = pathname === item.href;
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
            <span>📱 PWA</span>
          </button>

          <Link href="/learn-chunks" className="btn-header-cta text-xs sm:text-sm px-3.5 sm:px-5 py-2">
            <span>⚡ Тренажер</span>
            <span className="text-[11px] opacity-80 font-mono hidden xs:inline">100+</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10 cursor-pointer"
            aria-label="Меню"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-white/10 mt-3 pt-3 pb-2 space-y-1.5">
          {HEADER_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-lg text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-indigo-600/30 text-cyan-300 border border-indigo-500/30"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                )}
              >
                {item.title}
              </Link>
            );
          })}

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openPwaInstallModal();
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 hover:from-indigo-500/30 hover:to-cyan-500/30 text-cyan-300 border border-cyan-500/40 flex items-center justify-between transition-all cursor-pointer"
            >
              <span>📱 Установить PWA на телефон</span>
              <span className="text-[11px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-mono">
                iOS / Android
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
