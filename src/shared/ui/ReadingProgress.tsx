"use client";

import React, { useEffect, useState } from "react";

export function ReadingProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        setWidth(Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="reading-progress"
      style={{
        width: `${width}%`,
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        background: "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), var(--accent-emerald))",
        zIndex: 1000,
        transition: "width 0.1s ease-out",
        pointerEvents: "none",
      }}
    />
  );
}
