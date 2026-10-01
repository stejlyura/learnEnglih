"use client";

import React, { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal <= 0) {
        setProgress(0);
        return;
      }
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const pct = Math.min(100, Math.max(0, (currentScroll / scrollTotal) * 100));
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="reading-progress"
      role="progressbar"
      aria-label="Прогресс чтения страницы"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        width: `${progress}%`,
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        background: "linear-gradient(90deg, #6366F1, #06B6D4, #10B981)",
        zIndex: 9999,
        transition: "width 0.1s ease-out",
        pointerEvents: "none",
      }}
    />
  );
}
