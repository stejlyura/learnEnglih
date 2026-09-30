import { ToCItem } from "@/widgets/table-of-contents";

export type LongreadCategory = 
  | "neuroscience" 
  | "memory" 
  | "chunks" 
  | "methodology" 
  | "audit";

export interface LongreadItem {
  readonly id: string;
  readonly slug: string;
  readonly href: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly subtitle: string;
  readonly description: string;
  readonly category: LongreadCategory;
  readonly categoryLabel: string;
  readonly readTime: string;
  readonly badge: string;
  readonly badgeColor: "cyan" | "emerald" | "indigo" | "violet" | "amber" | "rose";
  readonly targetLevel: string;
  readonly scientificPillars: readonly string[];
  readonly toc: readonly ToCItem[];
  readonly featured?: boolean;
}
