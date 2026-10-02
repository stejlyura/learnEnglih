"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down more than 350px
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrolled > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Подняться наверх"
      title="Подняться наверх"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-11 h-11 rounded-full bg-slate-900/50 hover:bg-slate-900/90 backdrop-blur-md border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 ease-out ${
        isVisible
          ? "opacity-40 hover:opacity-100 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUp className="w-5 h-5 stroke-[2.2]" />
    </button>
  );
}
