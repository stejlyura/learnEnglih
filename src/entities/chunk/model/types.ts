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

export type AuditChunkCategory =
  | "all"
  | "fossilized"
  | "grammar_gaps"
  | "lexical_c1"
  | "noticing";

export interface AuditChunkItem {
  readonly id: string;
  readonly title: string;
  readonly target: string;
  readonly trap: string;
  readonly triggerRu: string;
  readonly why: string;
  readonly context: string;
  readonly category: Exclude<AuditChunkCategory, "all">;
  readonly categoryName: string;
  readonly drillPrompt: string;
  readonly audioText: string;
  readonly speedSwaps: readonly string[];
}

export type TimeHorizon = "present" | "past" | "future" | "spoken";
export type TenseAspect = "simple" | "continuous" | "perfect" | "perfect_continuous" | "modal";

export interface TenseExampleSentence {
  readonly en: string;
  readonly ru: string;
  readonly context: string;
}

export interface TenseMatrixItem {
  readonly id: string;
  readonly tenseKey: string;
  readonly nameEn: string;
  readonly nameRu: string;
  readonly horizon: TimeHorizon;
  readonly aspect: TenseAspect;
  readonly formula: string;
  readonly formulaNeg: string;
  readonly formulaQuest: string;
  readonly coreMeaning: string;
  readonly timeMarkers: readonly string[];
  readonly readyChunk: string;
  readonly chunkRu: string;
  readonly sentences: readonly TenseExampleSentence[];
  readonly lifeTip: string;
}
