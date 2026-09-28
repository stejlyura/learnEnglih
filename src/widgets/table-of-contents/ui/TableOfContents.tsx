"use client";

import React, { useEffect, useState } from "react";

export interface ToCItem {
  readonly id: string;
  readonly title: string;
}

interface TableOfContentsProps {
  readonly items: readonly ToCItem[];
  readonly className?: string;
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="toc-box">
      <div className="toc-title">
        <span>📑</span>
        <span>Содержание</span>
      </div>
      <ul className="toc-list">
        {items.map((item, idx) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={isActive ? "active" : ""}
              >
                <span className="toc-num">0{idx + 1}.</span>
                <span>{item.title.replace(/^\d+\.\s*/, "")}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
