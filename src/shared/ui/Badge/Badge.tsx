import React from "react";
import { cn } from "../../lib/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  readonly variant?: "indigo" | "cyan" | "emerald" | "amber" | "rose" | "subtle";
  readonly children: React.ReactNode;
}

export function Badge({ variant = "indigo", children, className, ...props }: BadgeProps) {
  const variantClass = {
    indigo: "badge-indigo",
    cyan: "badge-cyan",
    emerald: "badge-emerald",
    amber: "badge-amber",
    rose: "badge-rose",
    subtle: "bg-white/5 text-slate-300 border border-white/10",
  }[variant];

  return (
    <span className={cn("badge-pill", variantClass, className)} {...props}>
      {children}
    </span>
  );
}
