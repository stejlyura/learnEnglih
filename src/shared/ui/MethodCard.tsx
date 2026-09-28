import React from "react";

interface MethodCardProps {
  readonly title?: string;
  readonly badge?: string;
  readonly badgeClass?: string;
  readonly subtitle?: string;
  readonly children: React.ReactNode;
  readonly borderAccentColor?: string;
  readonly className?: string;
}

export function MethodCard({
  title,
  badge,
  badgeClass = "tier-1",
  subtitle,
  children,
  borderAccentColor,
  className = "",
}: MethodCardProps) {
  const customStyle = borderAccentColor ? { borderLeft: `3px solid ${borderAccentColor}` } : undefined;

  return (
    <div className={`method-card ${className}`} style={customStyle}>
      {(title || badge || subtitle) && (
        <div className="method-card-header">
          {badge && <span className={`tier-badge ${badgeClass}`}>{badge}</span>}
          {title && <h4 className="text-white font-bold text-lg mb-0">{title}</h4>}
          {subtitle && <span className="text-slate-400 text-sm font-semibold">{subtitle}</span>}
        </div>
      )}
      {children}
    </div>
  );
}
