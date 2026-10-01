"use client";

import React from "react";
import { ArticleHeaderNav } from "./ArticleHeaderNav";

export interface InfoItem {
  readonly label: string;
  readonly value: string;
}

export interface EditorialLayoutProps {
  readonly title: string;
  readonly metaCategory?: string;
  readonly readTime?: string;
  readonly badge: string;
  readonly badgeColor?: "emerald" | "secondary" | "primary" | "rose" | "amber";
  readonly activeRoute?: string;
  readonly lead?: React.ReactNode;
  readonly infoItems?: readonly InfoItem[];
  readonly topBanner?: React.ReactNode;
  readonly children: React.ReactNode;
}

export function EditorialLayout({
  title,
  metaCategory,
  readTime,
  badge,
  badgeColor = "secondary",
  activeRoute,
  lead,
  infoItems,
  topBanner,
  children,
}: EditorialLayoutProps) {
  const resolvedBadgeColor =
    badgeColor === "rose" || badgeColor === "amber" ? "primary" : badgeColor;

  return (
    <>
      <ArticleHeaderNav
        title={title}
        badge={badge}
        badgeColor={resolvedBadgeColor}
        activeRoute={activeRoute}
      />

      <article className="longread-container prose-editorial" id="top">
        {(metaCategory || readTime) && (
          <div className="article-meta-top">
            {metaCategory && <span>{metaCategory}</span>}
            {metaCategory && readTime && <span>•</span>}
            {readTime && <span>{readTime}</span>}
          </div>
        )}

        <h1 className="article-title">{title}</h1>

        {lead && <p className="article-lead">{lead}</p>}

        {infoItems && infoItems.length > 0 && (
          <div className="article-info-strip">
            {infoItems.map((item, idx) => (
              <div key={idx} className="info-item">
                <span>{item.label}:</span> <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        )}

        {topBanner}

        {children}
      </article>
    </>
  );
}
