import React from "react";

interface QuoteCalloutProps {
  readonly children: React.ReactNode;
  readonly cite?: string;
  readonly className?: string;
}

export function QuoteCallout({ children, cite, className = "" }: QuoteCalloutProps) {
  return (
    <blockquote className={`quote-callout ${className}`}>
      {children}
      {cite && <cite>{cite}</cite>}
    </blockquote>
  );
}
