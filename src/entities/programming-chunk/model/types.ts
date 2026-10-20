export type ProgrammingStack = "javascript" | "typescript" | "react" | "nodejs";

export type ProgrammingCategory =
  | "mechanics"      // Механики движка, память, рантайм
  | "async"          // Асинхронное программирование, промисы, очереди
  | "utilities"      // Базовые функции, утилиты, функциональные паттерны
  | "architecture"   // Архитектура хуков, рендеринг, жизненный цикл
  | "typing";        // Метатипизация, generic-утилиты, type narrowing

export type ProgrammingLevel = "junior_to_mid" | "mid_to_senior" | "staff";

export interface ProgrammingPracticeDrill {
  readonly challenge: string;
  readonly expectedOutput: string;
  readonly hint: string;
}

export interface ProgrammingChunkItem {
  readonly id: string;
  readonly stack: ProgrammingStack;
  readonly stackName: string;
  readonly category: ProgrammingCategory;
  readonly categoryName: string;
  readonly title: string;
  readonly subtitle: string;
  readonly level: ProgrammingLevel;
  readonly cognitiveTrap: string;      // Как пишут без чанка / типичный антипаттерн
  readonly mentalModel: string;        // Как мыслит топовый разработчик готовым блоком
  readonly codeSnippet: string;        // Чистый, строго типизированный код чанка
  readonly keyTakeaways: readonly string[];
  readonly realWorldUseCase: string;   // Продакшен-сценарий
  readonly tags: readonly string[];
  readonly practiceDrill?: ProgrammingPracticeDrill;
}

export interface ProgrammingFilterState {
  readonly selectedStack: ProgrammingStack | "all";
  readonly selectedCategory: ProgrammingCategory | "all";
  readonly searchQuery: string;
}
