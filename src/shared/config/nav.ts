export interface NavItem {
  readonly title: string;
  readonly href: string;
  readonly description: string;
  readonly badge?: string;
  readonly category: "core" | "trainer" | "methodology";
  readonly readTime?: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  {
    title: "Лексические Чанки",
    href: "/longreads?article=chunks",
    description: "Когнитивная механика блочной речи. Почему носители говорят готовыми блоками, а не отдельными словами.",
    badge: "Фундамент",
    category: "core",
    readTime: "12 мин",
  },
  {
    title: "Времена Plug & Play",
    href: "/tense-chunks",
    description: "Времена без школьных формул. 20 готовых речевых блоков для прошедшего, настоящего и будущего.",
    badge: "Времена",
    category: "core",
    readTime: "10 мин",
  },
  {
    title: "Таблица Времен (Матрица)",
    href: "/tense-matrix",
    description: "Вся таблица времен Present, Past, Future в готовых предложениях и рабочих чанках.",
    badge: "Интерактив",
    category: "trainer",
  },
  {
    title: "Плотные Связки (3 Уровня)",
    href: "/dense-structure",
    description: "От базовых оправданий до тонкой дипломатии и естественных связующих оборотов.",
    badge: "Связность",
    category: "core",
    readTime: "14 мин",
  },
  {
    title: "Тренажер & База Чанков",
    href: "/learn-chunks",
    description: "Интерактивная база из 100+ живых фраз. Поиск, фильтры, карточки для запоминания и озвучка носителя.",
    badge: "Интерактив",
    category: "trainer",
  },
  {
    title: "Чанки из Аудита",
    href: "/audit-chunks",
    description: "Персональные чанки-антидоты: устранение 7 фоссилизированных калек и скрытых грамматических пробелов.",
    badge: "Аудит 🎯",
    category: "trainer",
  },
  {
    title: "Архитектура Беглости B2 → C1",
    href: "/longreads?article=fluency-guide",
    description: "Преодоление речевого затыка, серкумлокуция (обход забытых слов) и искоренение мычания «эээ/ммм».",
    badge: "Беглость",
    category: "core",
    readTime: "16 мин",
  },
  {
    title: "Методология & Рутина",
    href: "/longreads?article=methodology",
    description: "Аудит техники шэдоуинга, модель 4 потоков Пола Нейшна и готовый 25-минутный ежедневный протокол.",
    badge: "Система",
    category: "methodology",
    readTime: "8 мин",
  },
  {
    title: "Вопросы & Условия (Wh + If)",
    href: "/question-conditional-chunks",
    description: "9 Wh-вопросов (What, Which, Where...) и 4 вида Conditionals (Zero, 1st, 2nd, 3rd) для Support и Sales.",
    badge: "Переговоры 🎯",
    category: "core",
    readTime: "12 мин",
  },
  {
    title: "Библиотека Лонгридов",
    href: "/longreads",
    description: "Единый хаб с нативным свитчером: фундаментальные исследования SLA для уровней B2 → C1.",
    badge: "Лонгриды 📚",
    category: "methodology",
    readTime: "9 материалов",
  },
] as const;
