import { AuditChunkItem } from "./types";

export const AUDIT_CHUNKS_DATA: readonly AuditChunkItem[] = [
  // ─── 1. ФОССИЛИЗИРОВАННЫЕ КАЛЬКИ (ВЫЖЕЧЬ В ПЕРВУЮ ОЧЕРЕДЬ) ───
  {
    id: "l1_reflexive_trap",
    title: "Чувствую себя (без myself)",
    target: "I feel [adjective]",
    trap: "❌ I feel myself confident / tired",
    triggerRu: "«Я чувствую себя уверенно на переговорах с клиентами»",
    why: "В русском глагол требует возвратности («себя»). В английском feel — связочный глагол (linking verb) для состояния. Фраза «feel myself» в разговорной речи имеет неловкую интимно-физиологическую коннотацию!",
    context: "I feel confident leading the executive sales presentation today.",
    category: "fossilized",
    categoryName: "Фоссилизированная калька",
    drillPrompt: "I feel [Adjective] — НИКАКИХ pronouns!",
    audioText: "I feel confident leading the executive sales presentation today.",
    speedSwaps: [
      "I feel confident about hitting our quarterly revenue quota.",
      "I feel exhausted after that three-hour contract negotiation.",
      "I don't feel comfortable offering such a steep discount without VP approval.",
      "I feel ready to close this enterprise account.",
      "Do you feel good about the customer feedback on our pitch?"
    ]
  },
  {
    id: "l1_uncountable_trap",
    title: "Советы (Неисчисляемое advice)",
    target: "a piece of advice / actionable advice",
    trap: "❌ several useful advices / many advices",
    triggerRu: "«Руководитель продаж дал мне несколько очень ценных советов»",
    why: "Advice в английском — строго неделимое вещественное существительное (Mass Noun). Множественного числа advices в английском языке НЕ СУЩЕСТВУЕТ.",
    context: "The VP of Sales gave us a crucial piece of advice regarding enterprise negotiation.",
    category: "fossilized",
    categoryName: "Фоссилизированная калька",
    drillPrompt: "a piece of advice / two pieces of advice / actionable advice",
    audioText: "The VP of Sales gave us a crucial piece of advice regarding enterprise negotiation.",
    speedSwaps: [
      "Could you give me a quick piece of advice on handling this pricing objection?",
      "Here are two pieces of advice for qualifying leads on the discovery call.",
      "I received some really actionable advice during my 1-on-1 with the sales director.",
      "Let me give you a word of advice before the prospect demonstration.",
      "That was the best piece of advice I've heard all quarter."
    ]
  },
  {
    id: "l1_false_friend_actual",
    title: "Актуальный (Relevant vs Actual)",
    target: "a pressing / relevant / topical issue",
    trap: "❌ This is a very actual question for us",
    triggerRu: "«Это очень актуальный для нашего отдела продаж вопрос»",
    why: "Actual = только «фактический, подлинный, реальный» (The actual cost was $500). Актуальный в значении насущный/важный = pressing, relevant, topical, current.",
    context: "Shortening our average sales cycle remains our most pressing issue this quarter.",
    category: "fossilized",
    categoryName: "Фоссилизированная калька",
    drillPrompt: "a pressing issue / relevant discussion / topical problem",
    audioText: "Shortening our average sales cycle remains our most pressing issue this quarter.",
    speedSwaps: [
      "That is a very pressing objection that we need to address immediately.",
      "Is this case study still relevant to the prospect's industry?",
      "We need up-to-date ROI benchmarks, not outdated sales metrics.",
      "This topic is especially relevant for our enterprise account executives.",
      "Let's focus on the most pressing customer pain points first."
    ]
  },
  {
    id: "l1_comfortable_convenient",
    title: "Удобно по времени (Convenient vs Comfortable)",
    target: "Is [time] convenient for you? / Does [time] work?",
    trap: "❌ Are you comfortable to call at 3 PM?",
    triggerRu: "«Вам удобно созвониться на демо сегодня в 15:00?»",
    why: "Comfortable относится к телу, одежде, креслу или душевному спокойствию. Время встречи, график, логистика — строго CONVENIENT или разговорное DOES [TIME] WORK FOR YOU.",
    context: "Would 3:30 PM be convenient for a quick discovery call?",
    category: "fossilized",
    categoryName: "Фоссилизированная калька",
    drillPrompt: "Does [time] work for you? / Is [time] convenient?",
    audioText: "Would 3:30 PM be convenient for a quick discovery call?",
    speedSwaps: [
      "Does 2 PM work for you to review the custom proposal?",
      "Would tomorrow morning be convenient for our contract sync?",
      "Let me know what time is most convenient for your decision-making committee.",
      "Does Friday afternoon still work for the product demonstration?",
      "If 4 PM isn't convenient, we can reschedule our sales demo to tomorrow."
    ]
  },
  {
    id: "g4_past_modals",
    title: "Дедукция о прошлом (Must have + V3)",
    target: "He must have [V3] / couldn't have [V3]",
    trap: "❌ He should execute the script at night / He must execute",
    triggerRu: "«Клиент, должно быть, уже подписал договор»",
    why: "Should execute относится к долгу в настоящем или будущем. Для логического умозаключения о прошлом с 95% уверенностью требуется формула: Modal + HAVE + V3.",
    context: "The deal went through; the client must have received the revised proposal.",
    category: "fossilized",
    categoryName: "Фоссилизированная калька",
    drillPrompt: "Must have [V3] (95% уверенность о прошлом)",
    audioText: "The deal went through; the client must have received the revised proposal.",
    speedSwaps: [
      "The prospect must have forwarded our deck to their CFO.",
      "They couldn't have chosen a competitor without reviewing our ROI model.",
      "The buyer must have signed the agreement by now.",
      "Alex must have resolved the customer's security concerns yesterday.",
      "We must have missed a key stakeholder in the buying committee."
    ]
  },
  {
    id: "g6_participle_clause",
    title: "Причастный оборот (Having reviewed vs After reviewed)",
    target: "Having reviewed the requirements, we...",
    trap: "❌ After reviewed the contract, we signed it",
    triggerRu: "«Изучив требования заказчика, мы составили персональное КП»",
    why: "Гибридной конструкции «After + V2» в английском не существует. Либо предлог с герундием (After reviewing), либо C1-перфектное причастие (Having reviewed).",
    context: "Having reviewed the client's RFP requirements, we submitted a tailored proposal.",
    category: "fossilized",
    categoryName: "Фоссилизированная калька",
    drillPrompt: "Having [V3]..., [Main Clause] — C1 плотность мысли",
    audioText: "Having reviewed the client's RFP requirements, we submitted a tailored proposal.",
    speedSwaps: [
      "Having qualified the lead, we scheduled an executive demonstration.",
      "Having negotiated the pricing terms, I notified the legal department.",
      "Having addressed all compliance questions, we closed the deal.",
      "Having consulted with the sales director, we offered a two-year discount.",
      "Having clarified their budget constraints, we adjusted the proposal."
    ]
  },
  {
    id: "n1_spot_error_preposition",
    title: "Прибытие (Arrive AT/IN vs Arrive TO)",
    target: "arrive AT a building / office, arrive IN a city",
    trap: "❌ We arrived to the client office / атака на верное arrive at",
    triggerRu: "«Мы прибыли в штаб-квартиру клиента за 15 минут до встречи»",
    why: "Конструкция arrive TO грамматически запрещена! Arrive AT используется для конкретных зданий, офисов и точек. Arrive IN — для городов и стран.",
    context: "We arrived at the client's headquarters right on schedule for the negotiation.",
    category: "fossilized",
    categoryName: "Фоссилизированная калька",
    drillPrompt: "arrive AT [building/office] vs arrive IN [city/country]",
    audioText: "We arrived at the client's headquarters right on schedule for the negotiation.",
    speedSwaps: [
      "We arrived at the prospect's office early this morning.",
      "Our enterprise team just arrived in London for the Global Sales Summit.",
      "Did you arrive at the boardroom on time for the pitch?",
      "Once we arrive at the client's facility, we'll begin the product showcase.",
      "The sales delegation arrives at the conference center at 9 AM."
    ]
  },

  // ─── 2. ГРАММАТИЧЕСКИЕ ПРОБЕЛЫ (СИНТАКСИС & СЛОЖНЫЕ СТРУКТУРЫ) ───
  {
    id: "g1_mixed_conditional",
    title: "Смешанные условия (Запрет WOULD в If)",
    target: "If you had [V3]..., we wouldn't [V1] now",
    trap: "❌ If you would qualify yesterday, we wouldn't have this stalled deal",
    triggerRu: "«Если бы ты квалифицировал бюджет на первом звонке, сделка сейчас не зависла бы»",
    why: "В русском: «если БЫ вы сделали... мы БЫ не...». В английском в придаточном условия (If-clause) слово WOULD КАТЕГОРИЧЕСКИ ЗАПРЕЩЕНО. Условие в прошлом = had + V3, следствие в настоящем = wouldn't + V1.",
    context: "If we had identified the economic buyer last month, the contract wouldn't be stalled now.",
    category: "grammar_gaps",
    categoryName: "Грамматический пробел",
    drillPrompt: "If you had [V3], we wouldn't [V1] now",
    audioText: "If we had identified the economic buyer last month, the contract wouldn't be stalled now.",
    speedSwaps: [
      "If you had addressed their pricing concerns earlier, we wouldn't be renegotiating today.",
      "If we had sent the case studies in advance, the prospect wouldn't have doubts now.",
      "If they had approved the pilot terms, our pipeline wouldn't be bottlenecked.",
      "If I had completed that MEDDIC sales training, I would qualify enterprise leads much better now.",
      "If we had aligned on the implementation timeline, the client wouldn't be hesitating."
    ]
  },
  {
    id: "g5_subjunctive_time",
    title: "Сослагательное время (It's high time + Past)",
    target: "It's high time we [Past Simple]...",
    trap: "❌ It's high time we will stop / update the sales script",
    triggerRu: "«Давно пора обновить наш скрипт квалификации лидов»",
    why: "Конструкции It's high time / It's about time требуют Past Subjunctive (формы прошедшего времени) для выражения назревшего, безотлагательного действия в настоящем.",
    context: "It's high time we stopped relying on generic pitch decks and focused on client ROI.",
    category: "grammar_gaps",
    categoryName: "Грамматический пробел",
    drillPrompt: "It's high time we [Past Simple] — действие назрело!",
    audioText: "It's high time we stopped relying on generic pitch decks and focused on client ROI.",
    speedSwaps: [
      "It's high time we revamped our outbound prospecting cadences.",
      "It's high time we updated our competitor battlecards.",
      "It's high time we hired another senior Account Executive for enterprise deals.",
      "It's high time sales leadership addressed our lead response latency.",
      "It's high time we automated our contract generation workflow."
    ]
  },
  {
    id: "c1_at_the_expense_of",
    title: "Ценой маржинальности (At the expense of)",
    target: "at the expense of [margin / trust]",
    trap: "❌ Speed shouldn't come by price of margin / in cost of",
    triggerRu: "«Рост выручки не должен достигаться ценой маржинальности сделок»",
    why: "Русская идиома «ценой чего-либо» буквально калькируется в нелепые «by price of». В нативном деловом английском сейлз-руководителей это исключительно: at the expense of.",
    context: "We need to hit our quarterly revenue target, but not at the expense of profit margin.",
    category: "grammar_gaps",
    categoryName: "Грамматический пробел",
    drillPrompt: "at the expense of [noun] — идиоматическая связка",
    audioText: "We need to hit our quarterly revenue target, but not at the expense of profit margin.",
    speedSwaps: [
      "Closing deals quickly must never come at the expense of long-term client trust.",
      "He gained short-term commission at the expense of high customer churn.",
      "We closed the deal without doing so at the expense of our standard contract terms.",
      "Never offer heavy discounts at the expense of product value perception.",
      "The sales quota was reached at the expense of team morale."
    ]
  },
  {
    id: "c1_sensitive_sensible",
    title: "Разумный vs Чувствительный (Sensible vs Sensitive)",
    target: "a sensible choice / sensible decision",
    trap: "❌ It was a very sensitive decision (в знач. разумное)",
    triggerRu: "«Это было очень разумное и взвешенное решение клиента»",
    why: "Sensitive = конфиденциальный, секретный (sensitive customer pricing). Sensible = разумный, здравомыслящий, прагматичный (a sensible commercial decision).",
    context: "Choosing an annual billing cycle with a 15% discount is a sensible decision for the client.",
    category: "grammar_gaps",
    categoryName: "Грамматический пробел",
    drillPrompt: "a sensible decision (разумное) vs sensitive data (конфиденциальное)",
    audioText: "Choosing an annual billing cycle with a 15% discount is a sensible decision for the client.",
    speedSwaps: [
      "That sounds like a very sensible commercial compromise for both parties.",
      "Piloting our software across one department first was a sensible move.",
      "Be careful: this proposal contains highly sensitive commercial pricing data.",
      "It is sensible to map the stakeholder hierarchy before scheduling a demo.",
      "The customer suggested a sensible rollout schedule for next quarter."
    ]
  },
  {
    id: "n3_spot_error_tense_since",
    title: "Согласование с Since (Past vs Present Perfect)",
    target: "Ever since [Past Simple], [Present Perfect]",
    trap: "❌ Ever since we launched the offer, conversion is improving (сбой времён)",
    triggerRu: "«С тех пор как мы внедрили ценностные продажи, средний чек вырос на 40%»",
    why: "После союза since (или ever since) ставится точка отсчета в прошлом (Past Simple), а в главном предложении — накопившийся результат (Present Perfect).",
    context: "Ever since we implemented the value-based selling framework, our average deal size has grown by 40%.",
    category: "grammar_gaps",
    categoryName: "Грамматический пробел",
    drillPrompt: "Ever since [Past Simple], we have [V3]",
    audioText: "Ever since we implemented the value-based selling framework, our average deal size has grown by 40%.",
    speedSwaps: [
      "Ever since we hired Marcus as VP of Sales, quarterly pipeline has doubled.",
      "Ever since the new pricing model launched, customer acquisition costs have dropped.",
      "Ever since our sales team adopted consultative selling, win rates have consistently improved.",
      "Ever since we introduced automated follow-ups, lead drop-off has decreased.",
      "Ever since we revamped our demo deck, prospect engagement has surged."
    ]
  },

  // ─── 3. C1 ЛЕКСИКА, ДИПЛОМАТИЯ И СВЯЗКИ ───
  {
    id: "c1_hedging_diplomacy",
    title: "Дипломатическое суждение (C1 Hedging)",
    target: "I'm inclined to think that...",
    trap: "❌ I 100% think that your budget is too low / You must buy now",
    triggerRu: "«Я склонен полагать, что клиенту стоит предложить рассрочку»",
    why: "Один из ключевых дипломатических C1-чанков переговорщика! Позволяет мягко выдвигать коммерческие гипотезы и защищать позицию компании без конфронтации с клиентом.",
    context: "I'm inclined to think that offering net-45 terms will get this enterprise deal signed today.",
    category: "lexical_c1",
    categoryName: "C1 Дипломатия & Связки",
    drillPrompt: "I'm inclined to think that [hypothesis] — C1 смягчение",
    audioText: "I'm inclined to think that offering net-45 terms will get this enterprise deal signed today.",
    speedSwaps: [
      "I'm inclined to think we should postpone the hard close until the CFO joins the call.",
      "I'm inclined to agree with Sarah regarding the tiered pricing structure.",
      "I'm inclined to think this prospect is not yet ready for our enterprise tier.",
      "I'm inclined to believe our biggest hurdle here is timing, not budget.",
      "I'm inclined to suggest a structured quarterly payment plan rather than an upfront discount."
    ]
  },
  {
    id: "c1_economic_economical",
    title: "Экономный vs Экономический (Economical vs Economic)",
    target: "an economical solution (cost-effective)",
    trap: "❌ It is an economic solution that will save your budget",
    triggerRu: "«Это очень экономичное решение для автоматизации ваших продаж»",
    why: "Economic относится к макроэкономике страны или рыночному сектору (economic growth). Economical означает экономный, выгодный, окупаемый (ROI-positive).",
    context: "Automating lead qualification will be the most economical decision your sales team makes this year.",
    category: "lexical_c1",
    categoryName: "C1 Дипломатия & Связки",
    drillPrompt: "an economical approach (экономный) vs economic policy (макроэкономика)",
    audioText: "Automating lead qualification will be the most economical decision your sales team makes this year.",
    speedSwaps: [
      "We need to offer a more economical subscription tier for mid-market clients.",
      "Consolidating your sales tools into one platform is much more economical.",
      "The retail sector is navigating significant economic headwinds right now.",
      "Our software offers an economical alternative to expanding your headcount.",
      "Is there a more economical package available for small sales teams?"
    ]
  },
  {
    id: "c1_despite_in_spite",
    title: "Вопреки и несмотря на (Despite vs In spite of)",
    target: "Despite [noun] / In spite of [noun]",
    trap: "❌ Despite of the price objections, we closed the deal",
    triggerRu: "«Несмотря на жесткие возражения клиента, мы успешно закрыли сделку»",
    why: "Despite употребляется БЕЗ предлога of (Despite the objections). Выражение In spite ВСЕГДА требует предлога of (In spite of the objections).",
    context: "Despite aggressive competitor pricing, our team closed the multi-year enterprise contract.",
    category: "lexical_c1",
    categoryName: "C1 Дипломатия & Связки",
    drillPrompt: "Despite [noun] / In spite of [noun] — чистое управление",
    audioText: "Despite aggressive competitor pricing, our team closed the multi-year enterprise contract.",
    speedSwaps: [
      "Despite the prospect's initial hesitation, customer sentiment turned overwhelmingly positive.",
      "In spite of tough procurement reviews, the contract was signed before the fiscal deadline.",
      "Despite challenging macroeconomic conditions, our sales reps exceeded their quotas.",
      "In spite of intense contract negotiations, we preserved our target profit margins.",
      "Despite tight customer budgets during Q4, our inbound sales pipeline surged."
    ]
  },
  {
    id: "g2_inversion",
    title: "Отрицательная инверсия (Only after did we...)",
    target: "Only after [doing] did we realize...",
    trap: "❌ Only after talking to the CFO we realized (прямой порядок слов)",
    triggerRu: "«Только поговорив с финдиректором, мы поняли истинный бюджет клиента»",
    why: "Продвинутая C1-конструкция ведения переговоров. После ограничительных фраз Only after... ставится вспомогательный глагол перед подлежащим.",
    context: "Only after interviewing the economic buyer did we discover their true operational pain points.",
    category: "lexical_c1",
    categoryName: "C1 Дипломатия & Связки",
    drillPrompt: "Only after [V-ing] did we [V1] — C1 эмфаза",
    audioText: "Only after interviewing the economic buyer did we discover their true operational pain points.",
    speedSwaps: [
      "Only after analyzing the customer churn report did we adjust our onboarding sales pitch.",
      "Only after engaging their procurement team did we realize the timeline had shifted.",
      "Only after demonstrating our ROI calculator did the client approve the enterprise tier.",
      "Only after asking targeted discovery questions did we uncover their real buying criteria.",
      "Only after closing the pilot project did the client commit to a company-wide rollout."
    ]
  },

  // ─── 4. ЗАМЕЧАНИЕ ОШИБОК & ПРЕДОТВРАЩЕНИЕ ГИПЕРКОРРЕКЦИИ ───
  {
    id: "g3_gerund_infinitive_meaning",
    title: "Смена значения глагола (Stop to do vs Stop doing)",
    target: "Stop to do (цель) vs Stop doing (привычка)",
    trap: "❌ We stopped pitching features (когда хотели сделать паузу ради обсуждения болей)",
    triggerRu: "«Мы сделали паузу, чтобы выслушать клиента vs Мы прекратили питчить»",
    why: "Stop + Infinitive (Stop to do) выражает цель остановки: сделать паузу ради чего-то. Stop + Gerund (Stop doing) означает отказ от привычки или прекращение действия навсегда.",
    context: "Let's stop to review the prospect's business objectives before demonstrating feature specs.",
    category: "noticing",
    categoryName: "Точность & Noticing",
    drillPrompt: "Stop to [do] (purpose) vs Stop [doing] (quit)",
    audioText: "Let's stop to review the prospect's business objectives before demonstrating feature specs.",
    speedSwaps: [
      "Let's stop to align on our negotiation strategy before joining the customer call.",
      "Our sales team stopped offering unapproved discounts to protect deal margins.",
      "We should stop to listen to the customer instead of pitching prematurely.",
      "Please stop interrupting the client when they are explaining their budget concerns.",
      "They stopped to evaluate whether this account genuinely fits our ideal customer profile."
    ]
  },
  {
    id: "n4_spot_error_congratulate",
    title: "Поздравление (Congratulate ON vs With)",
    target: "congratulate [someone] ON [something]",
    trap: "❌ I want to congratulate you with your deal / promotion",
    triggerRu: "«Хочу поздравить тебя с закрытием крупнейшей корпоративной сделки года»",
    why: "Русская калька: «поздравляю С чем-то» (with). В английском языке глагол congratulate управляет ИСКЛЮЧИТЕЛЬНО предлогом ON.",
    context: "I'd like to congratulate the sales team on closing our largest enterprise contract of the year.",
    category: "noticing",
    categoryName: "Точность & Noticing",
    drillPrompt: "congratulate [someone] ON [achievement] — железная коллокация",
    audioText: "I'd like to congratulate the sales team on closing our largest enterprise contract of the year.",
    speedSwaps: [
      "I want to congratulate you on exceeding your quarterly revenue quota by 130%!",
      "Let's congratulate Alex on signing three Fortune 500 accounts this month.",
      "We congratulated our top Account Executive on earning the Sales Rep of the Year award.",
      "I must congratulate you on delivering a flawless demo to the board of directors.",
      "The entire sales floor was congratulated on breaking our company's all-time ARR record."
    ]
  }
] as const;
