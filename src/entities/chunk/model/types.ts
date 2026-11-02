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

export type HaveChunkCategory =
  | "all"
  | "have-had"         // Have had / Has had (Present Perfect)
  | "collocations"     // Have/Has устойчивые коллокации
  | "have-to"          // Have to / Has to (Долженствование)
  | "have-got"         // Have got / Has got (Разговорное)
  | "causative"        // Causative have (Делегирование)
  | "had-had"          // Had had (Past Perfect & Conditionals)
  | "modal-have";      // Modal + Have (should have, could have)

export interface HaveChunkItem {
  readonly id: string;
  readonly chunk: string;
  readonly category: Exclude<HaveChunkCategory, "all">;
  readonly categoryName: string;
  readonly formula: string;
  readonly meaningRu: string;
  readonly context: string;
  readonly trapRu?: string;
  readonly exampleEn: string;
  readonly exampleRu: string;
  readonly drillSlots?: readonly string[];
}

export type SpeakingRuleCategory =
  | "all"
  | "svo-order"          // Жесткий порядок слов и обстоятельств
  | "softening-hedging"   // Смягчение, вежливость и непрямые просьбы
  | "embedded-questions"  // Косвенные вопросы (без обратной инверсии)
  | "time-frames"         // Состояние vs Процесс (Continuous vs Stative)
  | "past-vs-perfect"     // Точное прошлое vs Связь с моментом речи
  | "future-intentions"   // Will vs Going to vs Present Continuous
  | "deduction-modals"    // Модальные глаголы уверенности (Must/Can't/Might)
  | "reactions-tags"      // Активное слушание, Tag-вопросы и эллипсис
  | "cause-contrast";     // Разговорные связки причин и противопоставлений

export interface SpeakingRuleItem {
  readonly id: string;
  readonly ruleId: string;
  readonly ruleTitle: string;
  readonly ruleSummaryRu: string;
  readonly chunk: string;
  readonly clean: string;
  readonly category: Exclude<SpeakingRuleCategory, "all">;
  readonly categoryName: string;
  readonly formula: string;
  readonly meaningRu: string;
  readonly context: string;
  readonly trapRu: string;
  readonly antidoteRu: string;
  readonly exampleEn: string;
  readonly exampleRu: string;
  readonly drillSlots?: readonly string[];
}


