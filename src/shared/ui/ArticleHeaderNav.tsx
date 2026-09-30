"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ArticleHeaderNavProps {
  readonly title: string;
  readonly badge: string;
  readonly badgeColor?: "emerald" | "secondary" | "primary";
  readonly activeRoute?: string;
}

export function ArticleHeaderNav({
  title,
  badge,
  badgeColor = "secondary",
  activeRoute,
}: ArticleHeaderNavProps) {
  const currentPath = usePathname();
  const pathname = activeRoute || currentPath;

  const getBadgeClass = () => {
    if (badgeColor === "emerald") return "bg-emerald-500/15 text-emerald-400";
    if (badgeColor === "primary") return "bg-indigo-500/15 text-indigo-400";
    return "bg-cyan-500/15 text-cyan-400";
  };

  return (
    <header className="article-header-nav">
      <div className="header-content">
        <Link href="#top" className="header-title">
          <span>{title}</span>
          <span className={`header-badge ${getBadgeClass()}`}>{badge}</span>
        </Link>
        <div className="header-links">
          <Link
            href="/chunks"
            className={pathname === "/chunks" ? "text-cyan-400 font-bold" : ""}
          >
            Чанки
          </Link>
          <Link
            href="/tense-chunks"
            className={pathname === "/tense-chunks" ? "text-emerald-400 font-bold" : ""}
          >
            Времена
          </Link>
          <Link
            href="/tense-matrix"
            className={pathname === "/tense-matrix" ? "text-cyan-300 font-bold" : ""}
          >
            Матрица
          </Link>
          <Link
            href="/audit-chunks"
            className={pathname === "/audit-chunks" ? "text-rose-400 font-bold" : ""}
          >
            Аудит 🎯
          </Link>
          <Link
            href="/dense-structure"
            className={pathname === "/dense-structure" ? "text-indigo-400 font-bold" : ""}
          >
            Плотные связки
          </Link>
          <Link
            href="/learn-chunks"
            className={pathname === "/learn-chunks" ? "text-cyan-400 font-bold" : ""}
          >
            База и тренажер
          </Link>
          <Link
            href="/methodology"
            className={pathname === "/methodology" ? "text-blue-400 font-bold" : ""}
          >
            Методология
          </Link>
          <Link
            href="/fluency-guide"
            className={pathname === "/fluency-guide" ? "text-white font-bold" : ""}
          >
            Архитектура речи
          </Link>
          <Link
            href="/longreads"
            className={pathname.startsWith("/longread") ? "text-cyan-300 font-bold" : "text-cyan-400"}
          >
            Все лонгриды 📚
          </Link>
        </div>
      </div>
    </header>
  );
}
