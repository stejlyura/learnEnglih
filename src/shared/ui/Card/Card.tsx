import React from "react";
import { cn } from "../../lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly elevated?: boolean;
  readonly children: React.ReactNode;
}

export function Card({ elevated = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-200",
        elevated ? "glass-panel-elevated shadow-lg" : "glass-panel shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
