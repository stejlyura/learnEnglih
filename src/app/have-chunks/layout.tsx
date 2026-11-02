import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Архитектура Have / Has / Have Had: Речевые Чанки (B2 → C1)",
  description: "Полный репертуар лексических чанков с have, has, have had, had had и каузативом. Разбор 3 главных калек русскоязычных и интерактивный тренажер беглости.",
  openGraph: {
    title: "Архитектура Have / Has / Have Had: Речевые Чанки (B2 → C1)",
    description: "Как перестать путать 'I had' и 'I have had', убрать кальку 'I have this for 2 years' и автоматизировать каузатив и 3rd Conditionals.",
    type: "article",
  },
};

export default function HaveChunksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
