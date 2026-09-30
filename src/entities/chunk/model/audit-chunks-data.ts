import { AuditChunkItem } from "./types";

export const AUDIT_CHUNKS_DATA: readonly AuditChunkItem[] = [
  // ─── 1. ФОССИЛИЗИРОВАННЫЕ КАЛЬКИ (ВЫЖЕЧЬ В ПЕРВУЮ ОЧЕРЕДЬ) ───
  {
    id: "l1_reflexive_trap",
    title: "Чувствую себя (без myself)",
    target: "I feel [adjective]",
    trap: "❌ I feel myself confident / tired",
    triggerRu: "«Я чувствую себя уверенно на созвонах»",
    why: "В русском глагол требует возвратности («себя»). В английском feel — связочный глагол (linking verb) для состояния. Фраза «feel myself» в разговорной речи имеет неловкую интимно-физиологическую коннотацию!",
    context: "I feel confident leading the technical demonstration today.",
    category: "fossilized",
    categoryName: "Фоссилизированная калька",
    drillPrompt: "I feel [Adjective] — НИКАКИХ pronouns!",
    audioText: "I feel confident presenting the architecture proposal today.",
    speedSwaps: [
      "I feel confident about our release schedule.",
      "I feel exhausted after that two-hour debugging session.",
      "I don't feel comfortable making this architectural trade-off.",
      "I feel ready to merge this pull request.",
      "Do you feel good about the progress we made?"
    ]
  },
  {
    id: "l1_uncountable_trap",
    title: "Советы (Неисчисляемое advice)",
    target: "a piece of advice / actionable advice",
    trap: "❌ several useful advices / many advices",
    triggerRu: "«Он дал мне несколько очень полезных советов»",
    why: "Advice в английском — строго неделимое вещественное существительное (Mass Noun). Множественного числа advices в английском языке НЕ СУЩЕСТВУЕТ.",
    context: "The staff engineer gave us a crucial piece of advice regarding caching.",
    category: "fossilized",
    categoryName: "Фоссилизированная калька",
    drillPrompt: "a piece of advice / two pieces of advice / actionable advice",
    audioText: "The staff engineer gave us a crucial piece of advice regarding caching.",
    speedSwaps: [
      "Could you give me a quick piece of advice on this PR?",
      "Here are two pieces of advice for optimizing database queries.",
      "I received some really actionable advice during the 1-on-1.",
      "Let me give you a word of advice before the client demo.",
      "That was the best piece of advice I've heard all sprint."
    ]
  },
  {
    id: "l1_false_friend_actual",
    title: "Актуальный (Relevant vs Actual)",
    target: "a pressing / relevant / topical issue",
    trap: "❌ This is a very actual question for us",
    triggerRu: "«Это очень актуальный для нашей команды вопрос»",
    why: "Actual = только «фактический, подлинный, реальный» (The actual cost was $500). Актуальный в значении насущный/важный = pressing, relevant, topical, current.",
    context: "Migrating from Webpack to Vite remains our most pressing issue this quarter.",
    category: "fossilized",
    categoryName: "Фоссилизированная калька",
    drillPrompt: "a pressing issue / relevant discussion / topical problem",
    audioText: "Migrating from Webpack to Vite remains our most pressing issue this quarter.",
    speedSwaps: [
      "That is a very pressing issue that we need to address immediately.",
      "Is this documentation still relevant to the new microservice?",
      "We need up-to-date benchmarks, not outdated assumptions.",
      "This topic is especially relevant for our platform engineering team.",
      "Let's focus on the most pressing customer blockers first."
    ]
  },
  {
    id: "l1_comfortable_convenient",
    title: "Удобно по времени (Convenient vs Comfortable)",
    target: "Is [time] convenient for you? / Does [time] work?",
    trap: "❌ Are you comfortable to call at 3 PM?",
    triggerRu: "«Тебе удобно созвониться сегодня в 15:00?»",
    why: "Comfortable относится к телу, одежде, креслу или душевному спокойствию. Время встречи, график, логистика — строго CONVENIENT или разговорное DOES [TIME] WORK FOR YOU.",
    context: "Would 3:30 PM be convenient for a quick alignment sync?",
    category: "fossilized",
    categoryName: "Фоссилизированная калька",
    drillPrompt: "Does [time] work for you? / Is [time] convenient?",
    audioText: "Would 3:30 PM be convenient for a quick alignment sync?",
    speedSwaps: [
      "Does 2 PM work for you to review the deployment logs?",
      "Would tomorrow morning be convenient for our 1-on-1?",
      "Let me know what time is most convenient for your timezone.",
      "Does Friday afternoon still work for our sprint planning?",
      "If 4 PM isn't convenient, we can push it to tomorrow."
    ]
  },
  {
    id: "g4_past_modals",
    title: "Дедукция о прошлом (Must have + V3)",
    target: "He must have [V3] / couldn't have [V3]",
    trap: "❌ He should execute the script at night / He must execute",
    triggerRu: "«Он, должно быть, запустил скрипт ночью»",
    why: "Should execute относится к долгу в настоящем или будущем. Для логического умозаключения о прошлом с 95% уверенностью требуется формула: Modal + HAVE + V3.",
    context: "The server crashed; someone must have pushed an untested migration.",
    category: "fossilized",
    categoryName: "Фоссилизированная калька",
    drillPrompt: "Must have [V3] (95% уверенность о прошлом)",
    audioText: "The server crashed; someone must have pushed an untested migration.",
    speedSwaps: [
      "He must have forgotten to update the environment variables.",
      "They couldn't have tested this on staging before deploying.",
      "The client must have received the signed contract by now.",
      "Alex must have resolved the race condition yesterday.",
      "We must have missed an edge case in the error handler."
    ]
  },
  {
    id: "g6_participle_clause",
    title: "Причастный оборот (Having reviewed vs After reviewed)",
    target: "Having reviewed the code, we...",
    trap: "❌ After reviewed the logs, we found the bug",
    triggerRu: "«Проверив логи, мы быстро обнаружили причину бага»",
    why: "Гибридной конструкции «After + V2» в английском не существует. Либо предлог с герундием (After reviewing), либо C1-перфектное причастие (Having reviewed).",
    context: "Having reviewed the memory profiles, we deployed a hotfix to production.",
    category: "fossilized",
    categoryName: "Фоссилизированная калька",
    drillPrompt: "Having [V3]..., [Main Clause] — C1 плотность мысли",
    audioText: "Having reviewed the memory profiles, we deployed a hotfix to production.",
    speedSwaps: [
      "Having analyzed the telemetry, we discovered the bottleneck.",
      "Having approved the pull request, I notified the QA team.",
      "Having finished the migration, we turned off the legacy server.",
      "Having consulted with the tech lead, we chose PostgreSQL.",
      "Having clarified the requirements, we started the sprint."
    ]
  },
  {
    id: "n1_spot_error_preposition",
    title: "Прибытие (Arrive AT/IN vs Arrive TO)",
    target: "arrive AT a building / station, arrive IN a city",
    trap: "❌ We arrived to the office / атака на верное arrive at",
    triggerRu: "«Мы прибыли на вокзал / в офис за 10 минут до начала»",
    why: "Конструкция arrive TO грамматически запрещена! Arrive AT используется для конкретных зданий, вокзалов и точек. Arrive IN — для городов и стран.",
    context: "We arrived at the client's headquarters right on schedule.",
    category: "fossilized",
    categoryName: "Фоссилизированная калька",
    drillPrompt: "arrive AT [building/station] vs arrive IN [city/country]",
    audioText: "We arrived at the client's headquarters right on schedule.",
    speedSwaps: [
      "We arrived at the datacenter early this morning.",
      "They just arrived in London for the annual summit.",
      "Did you arrive at the airport on time?",
      "Once we arrive at the office, we'll run the presentation.",
      "The train arrives at Berlin Central Station at 6 PM."
    ]
  },

  // ─── 2. ГРАММАТИЧЕСКИЕ ПРОБЕЛЫ (СИНТАКСИС & СЛОЖНЫЕ СТРУКТУРЫ) ───
  {
    id: "g1_mixed_conditional",
    title: "Смешанные условия (Запрет WOULD в If)",
    target: "If you had [V3]..., we wouldn't [V1] now",
    trap: "❌ If you would clarify yesterday, we wouldn't have this bug",
    triggerRu: "«Если бы ты уточнил требования вчера, сейчас не было бы бага»",
    why: "В русском: «если БЫ вы сделали... мы БЫ не...». В английском в придаточном условия (If-clause) слово WOULD КАТЕГОРИЧЕСКИ ЗАПРЕЩЕНО. Условие в прошлом = had + V3, следствие в настоящем = wouldn't + V1.",
    context: "If we had updated the SSL certificate last week, the API wouldn't be failing now.",
    category: "grammar_gaps",
    categoryName: "Грамматический пробел",
    drillPrompt: "If you had [V3], we wouldn't [V1] now",
    audioText: "If we had updated the SSL certificate last week, the API wouldn't be failing now.",
    speedSwaps: [
      "If we had run end-to-end tests, we wouldn't be troubleshooting in production.",
      "If you had told me earlier, I wouldn't be waiting for the build.",
      "If they had refactored the auth module, this breach wouldn't be possible.",
      "If I had taken that course, I would understand Kubernetes much better now.",
      "If we had agreed on the schema, the frontend wouldn't be blocked."
    ]
  },
  {
    id: "g5_subjunctive_time",
    title: "Сослагательное время (It's high time + Past)",
    target: "It's high time we [Past Simple]...",
    trap: "❌ It's high time we will stop / update the legacy code",
    triggerRu: "«Давно пора перестать игнорировать этот технический долг»",
    why: "Конструкции It's high time / It's about time требуют Past Subjunctive (формы прошедшего времени) для выражения назревшего, безотлагательного действия в настоящем.",
    context: "It's high time we stopped ignoring customer feedback on performance.",
    category: "grammar_gaps",
    categoryName: "Грамматический пробел",
    drillPrompt: "It's high time we [Past Simple] — действие назрело!",
    audioText: "It's high time we stopped ignoring customer feedback on performance.",
    speedSwaps: [
      "It's high time we refactored our legacy billing service.",
      "It's high time we updated our security dependencies.",
      "It's high time we hired another senior DevOps specialist.",
      "It's high time the management addressed team burnout.",
      "It's high time we automated our release verification."
    ]
  },
  {
    id: "c1_at_the_expense_of",
    title: "Ценой качества (At the expense of)",
    target: "at the expense of [quality / stability]",
    trap: "❌ Speed shouldn't come by price of quality / in cost of",
    triggerRu: "«Скорость поставки не должна достигаться ценой качества кода»",
    why: "Русская идиома «ценой чего-либо» буквально калькируется в нелепые «by price of». В нативном деловом и инженерном английском это исключительно: at the expense of.",
    context: "We need to hit our sprint goals, but not at the expense of code quality.",
    category: "grammar_gaps",
    categoryName: "Грамматический пробел",
    drillPrompt: "at the expense of [noun] — идиоматическая связка",
    audioText: "We need to hit our sprint goals, but not at the expense of code quality.",
    speedSwaps: [
      "Rapid shipping must never come at the expense of user privacy.",
      "He gained short-term speed at the expense of long-term maintainability.",
      "We cut cloud costs without doing so at the expense of latency.",
      "Never optimize prematurely at the expense of architectural clarity.",
      "The new feature was completed at the expense of the regression test suite."
    ]
  },
  {
    id: "c1_sensitive_sensible",
    title: "Разумный vs Чувствительный (Sensible vs Sensitive)",
    target: "a sensible choice / sensible decision",
    trap: "❌ It was a very sensitive decision (в знач. разумное)",
    triggerRu: "«Это было очень разумное и взвешенное решение команды»",
    why: "Sensitive = чувствительный, обидчивый, секретный (sensitive customer data). Sensible = разумный, здравомыслящий, прагматичный (a sensible approach).",
    context: "Investing time in unit tests is always a sensible engineering decision.",
    category: "grammar_gaps",
    categoryName: "Грамматический пробел",
    drillPrompt: "a sensible decision (разумное) vs sensitive data (конфиденциальное)",
    audioText: "Investing time in unit tests is always a sensible engineering decision.",
    speedSwaps: [
      "That sounds like a very sensible compromise for both teams.",
      "Splitting the monolith into two domains was a sensible move.",
      "Be careful: this config file contains highly sensitive API tokens.",
      "It is sensible to benchmark before making architectural assumptions.",
      "She suggested a sensible alternative to our current roadmap."
    ]
  },
  {
    id: "n3_spot_error_tense_since",
    title: "Согласование с Since (Past vs Present Perfect)",
    target: "Ever since [Past Simple], [Present Perfect]",
    trap: "❌ Ever since we upgraded, performance is improving (сбой времён)",
    triggerRu: "«С тех пор как мы обновили ядро, ни одного сбоя не произошло»",
    why: "После союза since (или ever since) ставится точка отсчета в прошлом (Past Simple), а в главном предложении — накопившийся результат (Present Perfect).",
    context: "Ever since we implemented Redis caching, page response times have dropped by 60%.",
    category: "grammar_gaps",
    categoryName: "Грамматический пробел",
    drillPrompt: "Ever since [Past Simple], we have [V3]",
    audioText: "Ever since we implemented Redis caching, page response times have dropped by 60%.",
    speedSwaps: [
      "Ever since we migrated to cloud hosting, uptime has been 99.9%.",
      "Ever since they hired Sarah, sprint velocity has noticeably increased.",
      "Ever since the outage happened, we have maintained automated monitors.",
      "Ever since I switched to dark mode, my eye strain has vanished.",
      "Ever since we established design tokens, UI consistency has improved."
    ]
  },

  // ─── 3. C1 ЛЕКСИКА, ДИПЛОМАТИЯ И СВЯЗКИ ───
  {
    id: "c1_hedging_diplomacy",
    title: "Дипломатическое суждение (C1 Hedging)",
    target: "I'm inclined to think that...",
    trap: "❌ I 100% think that your idea is bad / We must change this",
    triggerRu: "«Я склонен полагать, что релиз стоит отложить на день»",
    why: "Один из ваших сильнейших подтвержденных C1-чанков! Позволяет мягко выразить несогласие, не провоцируя защитную реакцию коллег на ретроспективах и архитектурных комитетах.",
    context: "I'm inclined to think that refactoring this now might introduce regressions.",
    category: "lexical_c1",
    categoryName: "C1 Дипломатия & Связки",
    drillPrompt: "I'm inclined to think that [hypothesis] — C1 смягчение",
    audioText: "I'm inclined to think that refactoring this now might introduce regressions.",
    speedSwaps: [
      "I'm inclined to think we should postpone the deployment until tomorrow.",
      "I'm inclined to agree with Dmitry regarding database normalization.",
      "I'm inclined to think that this microservice is overengineered.",
      "I'm inclined to believe our bottleneck is network I/O, not CPU.",
      "I'm inclined to suggest a phased rollout rather than a big-bang release."
    ]
  },
  {
    id: "c1_economic_economical",
    title: "Экономный vs Экономический (Economical vs Economic)",
    target: "an economical solution (cost-effective)",
    trap: "❌ It is an economic solution that will save our budget",
    triggerRu: "«Это очень экономичное решение, которое сбережет бюджет компании»",
    why: "Economic относится к макроэкономике страны или отрасли (economic growth). Economical означает экономный, ресурсосберегающий, выгодный по деньгам.",
    context: "Switching to spot instances was the most economical decision we made this year.",
    category: "lexical_c1",
    categoryName: "C1 Дипломатия & Связки",
    drillPrompt: "an economical approach (экономный) vs economic policy (макроэкономика)",
    audioText: "Switching to spot instances was the most economical decision we made this year.",
    speedSwaps: [
      "We need to find a more economical way to process these video files.",
      "Serverless architecture is often more economical for variable traffic.",
      "The country is facing significant economic challenges right now.",
      "That library offers an economical footprint in our client bundle.",
      "Is there a more economical tier available for our database plan?"
    ]
  },
  {
    id: "c1_despite_in_spite",
    title: "Вопреки и несмотря на (Despite vs In spite of)",
    target: "Despite [noun] / In spite of [noun]",
    trap: "❌ Despite of the delay, we finished on time",
    triggerRu: "«Несмотря на сжатые дедлайны, команда закрыла все тикеты»",
    why: "Despite употребляется БЕЗ предлога of (Despite the bug). Выражение In spite ВСЕГДА требует предлога of (In spite of the bug).",
    context: "Despite the tight deadline, the engineering team delivered zero regressions.",
    category: "lexical_c1",
    categoryName: "C1 Дипломатия & Связки",
    drillPrompt: "Despite [noun] / In spite of [noun] — чистое управление",
    audioText: "Despite the tight deadline, the engineering team delivered zero regressions.",
    speedSwaps: [
      "Despite the production outage, customer sentiment remained positive.",
      "In spite of several network glitches, the data sync completed successfully.",
      "Despite working remotely across four timezones, we maintain great alignment.",
      "In spite of our initial doubts, the new framework proved exceptionally fast.",
      "Despite heavy traffic during Black Friday, the checkout service stayed up."
    ]
  },
  {
    id: "g2_inversion",
    title: "Отрицательная инверсия (Only after did we...)",
    target: "Only after [doing] did we realize...",
    trap: "❌ Only after running the script we realized (прямой порядок слов)",
    triggerRu: "«Только запустив нагрузочный тест, мы осознали масштаб проблемы»",
    why: "Продвинутая C1-конструкция, в которой вы продемонстрировали 100% точность! После ограничительных фраз Only after... ставится вспомогательный глагол перед подлежащим.",
    context: "Only after profiling the application did we realize where the memory leak originated.",
    category: "lexical_c1",
    categoryName: "C1 Дипломатия & Связки",
    drillPrompt: "Only after [V-ing] did we [V1] — C1 эмфаза",
    audioText: "Only after profiling the application did we realize where the memory leak originated.",
    speedSwaps: [
      "Only after analyzing the customer feedback did we notice the navigation flaw.",
      "Only after talking to the security audit team did we understand the vulnerability.",
      "Only after refactoring the core state manager did our app achieve 60 FPS.",
      "Only after double-checking the staging logs did we catch the misconfiguration.",
      "Only after shipping the MVP did we learn what users truly wanted."
    ]
  },

  // ─── 4. ЗАМЕЧАНИЕ ОШИБОК & ПРЕДОТВРАЩЕНИЕ ГИПЕРКОРРЕКЦИИ ───
  {
    id: "g3_gerund_infinitive_meaning",
    title: "Смена значения глагола (Stop to do vs Stop doing)",
    target: "Stop to do (цель) vs Stop doing (привычка)",
    trap: "❌ We stopped having coffee (когда хотели сделать перерыв на кофе)",
    triggerRu: "«Мы остановились, чтобы выпить кофе vs Мы прекратили пить кофе»",
    why: "Stop + Infinitive (Stop to do) выражает цель остановки: сделать паузу ради чего-то. Stop + Gerund (Stop doing) означает отказ от привычки или прекращение действия навсегда.",
    context: "Let's stop to review the architectural diagram before writing any code.",
    category: "noticing",
    categoryName: "Точность & Noticing",
    drillPrompt: "Stop to [do] (purpose) vs Stop [doing] (quit)",
    audioText: "Let's stop to review the architectural diagram before writing any code.",
    speedSwaps: [
      "Let's stop to get some coffee before the sprint retrospective.",
      "He stopped drinking coffee because of his sleep schedule.",
      "We should stop to verify our assumptions before refactoring.",
      "Please stop interrupting the speaker during the standup.",
      "They stopped to evaluate three different state management libraries."
    ]
  },
  {
    id: "n4_spot_error_congratulate",
    title: "Поздравление (Congratulate ON vs With)",
    target: "congratulate [someone] ON [something]",
    trap: "❌ I want to congratulate you with your promotion / success",
    triggerRu: "«Хочу поздравить тебя с успешным релизом и повышением»",
    why: "Русская калька: «поздравляю С чем-то» (with). В английском языке глагол congratulate управляет ИСКЛЮЧИТЕЛЬНО предлогом ON.",
    context: "I'd like to congratulate everyone on successfully closing the enterprise migration.",
    category: "noticing",
    categoryName: "Точность & Noticing",
    drillPrompt: "congratulate [someone] ON [achievement] — железная коллокация",
    audioText: "I'd like to congratulate everyone on successfully closing the enterprise migration.",
    speedSwaps: [
      "I want to congratulate you on your well-deserved promotion!",
      "Let's congratulate the DevOps squad on flawless zero-downtime maintenance.",
      "We congratulated him on shipping his first open-source package.",
      "I must congratulate you on passing the AWS Certified Solutions Architect exam.",
      "The entire team was congratulated on breaking our annual revenue record."
    ]
  }
] as const;
