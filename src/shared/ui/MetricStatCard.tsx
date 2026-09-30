import React from "react";
import { cn } from "@/shared/lib";

export interface MetricStatCardProps {
  readonly label: string;
  readonly value: string | number;
  readonly description?: string;
  readonly icon?: React.ReactNode;
  readonly variant?: "rose" | "amber" | "cyan" | "emerald" | "indigo";
  readonly className?: string;
}

const VARIANT_STYLES = {
  rose: {
    card: "bg-rose-950/20 border-rose-500/25",
    label: "text-rose-400",
    value: "text-rose-200",
  },
  amber: {
    card: "bg-amber-950/20 border-amber-500/25",
    label: "text-amber-400",
    value: "text-amber-200",
  },
  cyan: {
    card: "bg-cyan-950/20 border-cyan-500/25",
    label: "text-cyan-400",
    value: "text-cyan-200",
  },
  emerald: {
    card: "bg-emerald-950/20 border-emerald-500/25",
    label: "text-emerald-400",
    value: "text-emerald-200",
  },
  indigo: {
    card: "bg-indigo-950/20 border-indigo-500/25",
    label: "text-indigo-400",
    value: "text-indigo-200",
  },
} as const;

export const MetricStatCard = React.memo(function MetricStatCard({
  label,
  value,
  description,
  icon,
  variant = "indigo",
  className,
}: MetricStatCardProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div className={cn("p-3.5 rounded-2xl border transition-all", styles.card, className)}>
      <div className={cn("flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1", styles.label)}>
        {icon}
        <span>{label}</span>
      </div>
      <div className={cn("text-2xl font-black", styles.value)}>{value}</div>
      {description && <div className="text-[11px] text-slate-400 mt-1 truncate">{description}</div>}
    </div>
  );
});

export function MetricStatGrid({
  children,
  className,
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-4 gap-3 my-6", className)}>
      {children}
    </div>
  );
}
