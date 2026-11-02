import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Правила Живой Речи и Разговорные Чанки (Speaking Rules B2 → C1) | English Learn",
  description: "9 фундаментальных правил общения на английском без академического занудства: жесткий SVO-порядок, дипломатичное смягчение (hedging), косвенные вопросы, времена и живые реакции.",
  openGraph: {
    title: "Правила Живой Речи и Разговорные Чанки (Speaking Rules B2 → C1)",
    description: "Практический арсенал разговорного английского: готовые речевые блоки, разбор русских калек и интерактивный Speed-Swapper.",
    type: "article",
  },
};

export default function SpeakingRulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
