export type ChunkCategory =
  | "frames"        // Рамка со слотом
  | "work"          // Работа & Созвоны
  | "time-buyers"   // Покупка времени (Анти-эээ)
  | "hedging"       // Дипломатия & Вежливость
  | "social"        // Живые социальные реакции
  | "verbs"         // Глагольные связки
  | "collocations"  // Глагольные коллокации
  | "agreement"     // Дипломатия & Согласие
  | "doubts";       // Дипломатия & Сомнения

export interface ChunkItem {
  readonly id: string;
  readonly text: string;
  readonly clean: string;
  readonly cat: ChunkCategory;
  readonly catName: string;
  readonly trans: string;
  readonly exEn: string;
  readonly exRu: string;
  readonly note: string;
}

export interface TenseChunkItem {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly trans: string;
  readonly exEn: string;
  readonly exRu: string;
  readonly block: string;
  readonly tenseName: string;
  readonly tip?: string;
}

export interface DenseChunkItem {
  readonly id: string;
  readonly tier: 1 | 2 | 3;
  readonly tierName: string;
  readonly title: string;
  readonly trans: string;
  readonly exEn: string;
  readonly exRu: string;
  readonly description?: string;
}
