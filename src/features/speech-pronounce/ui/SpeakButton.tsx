"use client";

import React, { useState } from "react";
import { speakText } from "../lib/speak";
import { cn } from "@/shared/lib";

interface SpeakButtonProps {
  readonly text: string;
  readonly size?: "sm" | "md";
  readonly className?: string;
}

export function SpeakButton({ text, size = "md", className }: SpeakButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(true);
    speakText(text);
    setTimeout(() => setIsPlaying(false), 1200);
  };

  return (
    <button
      type="button"
      onClick={handleSpeak}
      title="Послушать произношение носителя"
      aria-label="Прослушать произношение"
      className={cn(
        "inline-flex items-center justify-center rounded-lg transition-all cursor-pointer border",
        size === "sm" ? "w-7 h-7 text-xs" : "w-8 h-8 text-sm",
        isPlaying
          ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/40 scale-105"
          : "bg-white/5 text-slate-400 hover:text-cyan-300 hover:bg-white/10 border-white/10 hover:border-cyan-500/30",
        className
      )}
    >
      <svg
        className={cn("w-4 h-4 transition-transform", isPlaying && "animate-pulse scale-110")}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
    </button>
  );
}
