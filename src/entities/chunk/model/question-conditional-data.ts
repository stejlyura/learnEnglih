export type WhQuestionWord =
  | "What"
  | "Which"
  | "Where"
  | "Who"
  | "Whom"
  | "Whose"
  | "When"
  | "Why"
  | "How";

export type ConditionalLevel = "zero" | "first" | "second" | "third";

export interface WhQuestionChunkItem {
  readonly id: string;
  readonly word: WhQuestionWord;
  readonly roleRu: string;
  readonly formula: string;
  readonly targetEn: string;
  readonly targetRu: string;
  readonly context: "Customer Support" | "B2B Sales" | "Escalation & Account Management";
  readonly whyItWorks: string;
  readonly slotSwaps: readonly string[];
  readonly audioText: string;
}

export interface ConditionalChunkItem {
  readonly id: string;
  readonly level: ConditionalLevel;
  readonly levelName: string;
  readonly formula: string;
  readonly businessRole: string;
  readonly targetEn: string;
  readonly targetRu: string;
  readonly context: "Customer Support" | "B2B Sales" | "Incident Post-Mortem & SLA";
  readonly conditionPart: string;
  readonly resultPart: string;
  readonly whyItWorks: string;
  readonly slotSwaps: readonly string[];
  readonly audioText: string;
}

export const WH_QUESTION_CHUNKS: readonly WhQuestionChunkItem[] = [
  // WHAT
  {
    id: "wh-what-1",
    word: "What",
    roleRu: "Выявление корневого блокера без давления",
    formula: "What seems to be the primary roadblock with [Noun]?",
    targetEn: "What seems to be the primary roadblock preventing your team from deploying this update?",
    targetRu: "Что сейчас является главным препятствием, мешающим вашей команде развернуть это обновление?",
    context: "Customer Support",
    whyItWorks: "Мягкий глагол «seems to be» снижает защитную реакцию клиента и побуждает честно рассказать о баге или внутренней несогласованности.",
    slotSwaps: [
      "...from signing off on the security review?",
      "...from finalizing your Q4 tech roadmap?",
      "...from adopting the new billing interface?",
    ],
    audioText: "What seems to be the primary roadblock preventing your team from deploying this update?",
  },
  {
    id: "wh-what-2",
    word: "What",
    roleRu: "Квалификация условий закрытия сделки",
    formula: "What would need to happen for us to [Action] by [Date]?",
    targetEn: "What would need to happen for us to finalize the agreement by the end of this month?",
    targetRu: "Что должно произойти, чтобы мы смогли финализировать договор до конца этого месяца?",
    context: "B2B Sales",
    whyItWorks: "Вместо навязчивого «Будете покупать?» передает клиенту управление и заставляет его перечислить внутренние условия согласования.",
    slotSwaps: [
      "...to launch the pilot onboarding next Monday?",
      "...to secure budget approval from your CFO?",
      "...to schedule a technical deep-dive with your VP of Engineering?",
    ],
    audioText: "What would need to happen for us to finalize the agreement by the end of this month?",
  },
  {
    id: "wh-what-3",
    word: "What",
    roleRu: "Оценка скрытой стоимости проблемы (Loss Framing)",
    formula: "What is the business impact if [Problem occurs]?",
    targetEn: "What is the financial impact if your checkout API experiences another outage during peak hours?",
    targetRu: "Каковы финансовые последствия, если ваш checkout API снова упадет в пиковые часы?",
    context: "B2B Sales",
    whyItWorks: "Заставляет клиента вслух озвучить сумму потенциальных потерь, создавая сильный триггер неприятия потерь (Loss Aversion).",
    slotSwaps: [
      "...if your reps spend two hours a day on manual data entry?",
      "...if customer churn increases by another two percent this quarter?",
      "...if your team misses the upcoming compliance deadline?",
    ],
    audioText: "What is the financial impact if your checkout API experiences another outage during peak hours?",
  },

  // WHICH
  {
    id: "wh-which-1",
    word: "Which",
    roleRu: "Прецизионный выбор тарифного плана",
    formula: "Which tier best aligns with your team's current [Metric / Goal]?",
    targetEn: "Which subscription tier best aligns with your team's projected user volume for next quarter?",
    targetRu: "Какой тарифный план лучше всего соответствует прогнозируемому объему пользователей вашей команды на следующий квартал?",
    context: "B2B Sales",
    whyItWorks: "Использование «Which» фокусирует собеседника на выборе между конкретными вариантами вместо размышлений «покупать или нет».",
    slotSwaps: [
      "...with your compliance and security requirements?",
      "...with your current developer seat allocation?",
      "...with your expected API call throughput?",
    ],
    audioText: "Which subscription tier best aligns with your team's projected user volume for next quarter?",
  },
  {
    id: "wh-which-2",
    word: "Which",
    roleRu: "Локализация сбоя при эскалации инцидента",
    formula: "Which specific endpoint is generating the [Status Code] errors?",
    targetEn: "Which specific API endpoint is currently returning the 504 Gateway Timeout errors?",
    targetRu: "Какой именно эндпоинт API сейчас возвращает ошибки 504 Gateway Timeout?",
    context: "Customer Support",
    whyItWorks: "Демонстрирует высокую техническую компетентность саппорта и отсекает абстрактные жалобы, собирая точные диагностические метрики.",
    slotSwaps: [
      "...is experiencing latency spikes during batch processing?",
      "...failed to sync with your staging environment?",
      "...is triggering authentication rejections for your EU users?",
    ],
    audioText: "Which specific API endpoint is currently returning the 504 Gateway Timeout errors?",
  },
  {
    id: "wh-which-3",
    word: "Which",
    roleRu: "Приоритезация задач при ограниченных ресурсах",
    formula: "Which of these two deliverables is the absolute priority for [Timeframe]?",
    targetEn: "Which of these two deliverables is the absolute priority for your production release this sprint?",
    targetRu: "Какая из этих двух задач является абсолютным приоритетом для вашего релиза в этом спринте?",
    context: "Escalation & Account Management",
    whyItWorks: "Помогает клиенту сделать жесткий компромисс без ощущения, что его бросили, возвращая диалог в конструктивное русло.",
    slotSwaps: [
      "...for satisfying your security audit criteria?",
      "...for launching the beta test next week?",
      "...for your executive committee meeting on Thursday?",
    ],
    audioText: "Which of these two deliverables is the absolute priority for your production release this sprint?",
  },

  // WHERE
  {
    id: "wh-where-1",
    word: "Where",
    roleRu: "Поиск узких мест в воронке продаж",
    formula: "Where are you seeing the biggest drop-off in [Funnel / Process]?",
    targetEn: "Where are you seeing the most significant drop-off throughout your customer onboarding journey?",
    targetRu: "В каком месте вы наблюдаете наибольший отток на протяжении всего процесса онбординга клиентов?",
    context: "B2B Sales",
    whyItWorks: "Точечный вопрос, который вскрывает главную боль продукта клиента и создает идеальный контекст для презентации вашего решения.",
    slotSwaps: [
      "...in your outbound email sequence reply rates?",
      "...in your mobile sign-up conversion funnel?",
      "...in your enterprise contract negotiation cycle?",
    ],
    audioText: "Where are you seeing the most significant drop-off throughout your customer onboarding journey?",
  },
  {
    id: "wh-where-2",
    word: "Where",
    roleRu: "Определение статуса и приоритета проблемы",
    formula: "Where does this ticket sit in terms of your team's overall [Priority]?",
    targetEn: "Where does this issue sit in terms of your engineering department's current priorities?",
    targetRu: "Какое место эта проблема занимает среди текущих приоритетов вашего инженерного отдела?",
    context: "Customer Support",
    whyItWorks: "Позволяет саппорту откалибровать SLA и уровень тревоги, не обесценивая важность запроса пользователя.",
    slotSwaps: [
      "...in terms of your upcoming product milestone?",
      "...in terms of customer-facing downtime impact?",
      "...in terms of critical infrastructure security risks?",
    ],
    audioText: "Where does this issue sit in terms of your engineering department's current priorities?",
  },
  {
    id: "wh-where-3",
    word: "Where",
    roleRu: "Выявление географических и юрисдикционных требований",
    formula: "Where do your primary data residency requirements mandate [Action]?",
    targetEn: "Where do your corporate data governance policies require customer records to be hosted?",
    targetRu: "Где, согласно вашей корпоративной политике управления данными, должны храниться записи клиентов?",
    context: "B2B Sales",
    whyItWorks: "Снимает потенциальные барьеры безопасности (GDPR, HIPAA, SOC-2) на ранних стадиях квалификации сделки.",
    slotSwaps: [
      "...to be encrypted and backed up for disaster recovery?",
      "...to be routed for EU sovereign cloud compliance?",
      "...to be audited by external penetration testers?",
    ],
    audioText: "Where do your corporate data governance policies require customer records to be hosted?",
  },

  // WHO
  {
    id: "wh-who-1",
    word: "Who",
    roleRu: "Идентификация ЛПР без нарушения субординации",
    formula: "Beyond yourself, who else would need to [Action]?",
    targetEn: "Beyond yourself, who else on the executive team would need to review and sign off on this agreement?",
    targetRu: "Помимо вас, кто еще в руководстве должен будет изучить и подписать это соглашение?",
    context: "B2B Sales",
    whyItWorks: "Классический вопрос C1 из методологии MEDDIC: валидирует статус собеседника и при этом выявляет скрытых лиц, принимающих решения.",
    slotSwaps: [
      "...to approve the revised annual budget allocation?",
      "...to participate in the final technical proof of concept?",
      "...to validate the security compliance checklist?",
    ],
    audioText: "Beyond yourself, who else on the executive team would need to review and sign off on this agreement?",
  },
  {
    id: "wh-who-2",
    word: "Who",
    roleRu: "Назначение ответственного со стороны клиента",
    formula: "Who will be our primary point of contact for [Process]?",
    targetEn: "Who will be our primary point of contact during the data migration phase next week?",
    targetRu: "Кто будет нашим основным контактным лицом во время этапа миграции данных на следующей неделе?",
    context: "Customer Support",
    whyItWorks: "Исключает путаницу в коммуникации и создает персональную ответственность на стороне клиента.",
    slotSwaps: [
      "...for testing webhook payload integrations?",
      "...for managing billing credentials and invoice delivery?",
      "...for approving SSO identity provider configuration?",
    ],
    audioText: "Who will be our primary point of contact during the data migration phase next week?",
  },
  {
    id: "wh-who-3",
    word: "Who",
    roleRu: "Определение стейкхолдера, страдающего больше всех",
    formula: "Who in your department is currently feeling the most friction from [Bottleneck]?",
    targetEn: "Who in your department is currently feeling the most friction from these manual reconciliations?",
    targetRu: "Кто в вашем отделе сейчас испытывает наибольшие трудности от этих ручных сверок?",
    context: "B2B Sales",
    whyItWorks: "Помогает найти внутреннего защитника сделки (Internal Champion), который будет лоббировать внедрение продукта изнутри.",
    slotSwaps: [
      "...from delayed customer onboarding tickets?",
      "...from broken cross-platform notifications?",
      "...from inaccurate pipeline forecasting reports?",
    ],
    audioText: "Who in your department is currently feeling the most friction from these manual reconciliations?",
  },

  // WHOM
  {
    id: "wh-whom-1",
    word: "Whom",
    roleRu: "Официальное направление юридических документов",
    formula: "To whom should we route the [Document Name] for review?",
    targetEn: "To whom should our legal team route the redlined Master Services Agreement for final review?",
    targetRu: "Кому наша юридическая служба должна направить отредактированное генеральное соглашение об оказании услуг?",
    context: "B2B Sales",
    whyItWorks: "Использование «Whom» с предлогом «To» придает переписке безупречный уровень корпоративной респектабельности на стадии закрытия.",
    slotSwaps: [
      "...route the proprietary Data Processing Addendum?",
      "...send the verified SOC-2 Type II audit report?",
      "...deliver the revised enterprise order form?",
    ],
    audioText: "To whom should our legal team route the redlined Master Services Agreement for final review?",
  },
  {
    id: "wh-whom-2",
    word: "Whom",
    roleRu: "Уточнение предыдущих договоренностей при эскалации",
    formula: "With whom on our support team did you previously discuss [Issue]?",
    targetEn: "With whom on our technical escalation desk did you previously discuss this custom SLA request?",
    targetRu: "С кем из нашей службы технической эскалации вы ранее обсуждали этот запрос на индивидуальный SLA?",
    context: "Customer Support",
    whyItWorks: "Позволяет быстро поднять историю переписки и контекст, не заставляя клиента раздраженно пересказывать всё заново.",
    slotSwaps: [
      "...this custom billing exemption?",
      "...the temporary database indexing fix?",
      "...the extended sandbox trial period?",
    ],
    audioText: "With whom on our technical escalation desk did you previously discuss this custom SLA request?",
  },
  {
    id: "wh-whom-3",
    word: "Whom",
    roleRu: "Определение пострадавшей группы пользователей",
    formula: "For whom is this service outage causing the most severe workflow disruption?",
    targetEn: "For whom is this authentication failure causing the most severe workflow disruption right now?",
    targetRu: "Для кого этот сбой аутентификации вызывает сейчас наибольшие перебои в рабочих процессах?",
    context: "Customer Support",
    whyItWorks: "Помогает ранжировать воздействие инцидента на конечных пользователей (клиентские менеджеры, VIP-аккаунты, финансовые контролеры).",
    slotSwaps: [
      "...this latency spike impacting critical transactions?",
      "...this delayed reporting dashboard causing blockers?",
      "...this permission sync issue preventing access?",
    ],
    audioText: "For whom is this authentication failure causing the most severe workflow disruption right now?",
  },

  // WHOSE
  {
    id: "wh-whose-1",
    word: "Whose",
    roleRu: "Квалификация бюджета и центра затрат (Cost Center)",
    formula: "Whose departmental budget does this software license fall under?",
    targetEn: "Whose departmental budget will fund this annual software deployment?",
    targetRu: "Под бюджет какого именно отдела подпадает финансирование этого годового внедрения ПО?",
    context: "B2B Sales",
    whyItWorks: "Определяет реальный источник финансирования (IT, Marketing, Operations или Finance), что критично для успешного закрытия сделки.",
    slotSwaps: [
      "...this automated customer communications tool?",
      "...this custom enterprise integration package?",
      "...this cloud infrastructure optimization initiative?",
    ],
    audioText: "Whose departmental budget will fund this annual software deployment?",
  },
  {
    id: "wh-whose-2",
    word: "Whose",
    roleRu: "Определение ответственного за согласование изменений",
    formula: "Whose final approval is required before we can [Action]?",
    targetEn: "Whose final written sign-off is required before we can enable production database migrations?",
    targetRu: "Чье итоговое письменное одобрение требуется, прежде чем мы сможем включить миграцию базы данных в проде?",
    context: "Customer Support",
    whyItWorks: "Защищает от риска несанкционированных изменений в рабочей инфраструктуре клиента, строго следуя регламентам безопасности.",
    slotSwaps: [
      "...provision additional enterprise seats?",
      "...override the standard IP whitelist restrictions?",
      "...issue an off-cycle refund transaction?",
    ],
    audioText: "Whose final written sign-off is required before we can enable production database migrations?",
  },
  {
    id: "wh-whose-3",
    word: "Whose",
    roleRu: "Разрешение споров о владении инцидентом",
    formula: "Whose technical team currently owns the maintenance of [Service]?",
    targetEn: "Whose engineering team currently owns the maintenance of your third-party webhook listener?",
    targetRu: "Чья инженерная команда в настоящее время отвечает за обслуживание вашего стороннего webhook listener?",
    context: "Customer Support",
    whyItWorks: "Деликатно разграничивает зону ответственности SaaS-провайдера и внутренней инфраструктуры клиента без взаимных обвинений.",
    slotSwaps: [
      "...your custom OAuth authentication gateway?",
      "...your legacy CRM sync script?",
      "...your internal reverse-proxy configuration?",
    ],
    audioText: "Whose engineering team currently owns the maintenance of your third-party webhook listener?",
  },

  // WHEN
  {
    id: "wh-when-1",
    word: "When",
    roleRu: "Определение дедлайна и чувства срочности (Urgency)",
    formula: "When are you aiming to have this solution fully deployed?",
    targetEn: "When are you aiming to have this customer intelligence platform fully operational across your teams?",
    targetRu: "К какому сроку вы стремитесь полностью запустить эту платформу клиентской аналитики во всех ваших командах?",
    context: "B2B Sales",
    whyItWorks: "Связывает график внедрения с бизнес-целями заказчика и предотвращает бесконечное затягивание переговоров.",
    slotSwaps: [
      "...integrated with your core data warehouse?",
      "...rolled out to all regional support desks?",
      "...audited by your internal compliance committee?",
    ],
    audioText: "When are you aiming to have this customer intelligence platform fully operational across your teams?",
  },
  {
    id: "wh-when-2",
    word: "When",
    roleRu: "Точный тайминг возникновения сбоя",
    formula: "When was this unexpected anomaly first detected in your logs?",
    targetEn: "When was this latency anomaly first observed in your monitoring logs?",
    targetRu: "Когда именно эта аномалия задержки была впервые зафиксирована в ваших журналах мониторинга?",
    context: "Customer Support",
    whyItWorks: "Критично для инцидентного менеджмента: позволяет инженерам поддержки сопоставить таймстемпы с серверными событиями.",
    slotSwaps: [
      "...this rate-limiting alert triggered?",
      "...this missing transaction report generated?",
      "...this SSL certificate warning surfaced to end users?",
    ],
    audioText: "When was this latency anomaly first observed in your monitoring logs?",
  },
  {
    id: "wh-when-3",
    word: "When",
    roleRu: "Согласование контрольного созвона (Follow-up Timing)",
    formula: "When would be the most convenient window for us to reconnect?",
    targetEn: "When would be the most productive window for us to review the implementation results next week?",
    targetRu: "Когда на следующей неделе вам было бы удобнее всего обсудить результаты внедрения?",
    context: "Escalation & Account Management",
    whyItWorks: "Слово «productive window» звучит как забота о результатах клиента, а не как навязывание очередного созвона.",
    slotSwaps: [
      "...to walk through the root cause analysis document?",
      "...to confirm the updated pricing schedule?",
      "...to verify that the resolved bug has not recurred?",
    ],
    audioText: "When would be the most productive window for us to review the implementation results next week?",
  },

  // WHY
  {
    id: "wh-why-1",
    word: "Why",
    roleRu: "Выявление скрытых причин смены предыдущего вендора",
    formula: "Why did your previous vendor solution fall short of expectations?",
    targetEn: "Why did your previous analytics vendor fall short of your executive team's expectations?",
    targetRu: "Почему решение вашего предыдущего вендора аналитики не оправдало ожиданий руководства?",
    context: "B2B Sales",
    whyItWorks: "Раскрывает негативный опыт клиента, показывая, какие ошибки ни в коем случае нельзя повторять на вашей презентации.",
    slotSwaps: [
      "...fall short of your customer SLA demands?",
      "...struggle to scale during seasonal peak loads?",
      "...fail to pass your internal data security audit?",
    ],
    audioText: "Why did your previous analytics vendor fall short of your executive team's expectations?",
  },
  {
    id: "wh-why-2",
    word: "Why",
    roleRu: "Объяснение критичности решения именно сейчас (SPIN Implication)",
    formula: "Why is addressing this integration bottleneck urgent for this quarter?",
    targetEn: "Why is resolving this manual reconciliation workflow critical for this financial quarter?",
    targetRu: "Почему устранение этого ручного процесса сверки является критически важным именно в этом финансовом квартале?",
    context: "B2B Sales",
    whyItWorks: "Побуждает клиента объяснить самому себе, почему сделку нельзя откладывать на следующий год.",
    slotSwaps: [
      "...for your upcoming product debut?",
      "...for meeting your annual churn reduction target?",
      "...for passing your upcoming ISO-27001 audit?",
    ],
    audioText: "Why is resolving this manual reconciliation workflow critical for this financial quarter?",
  },
  {
    id: "wh-why-3",
    word: "Why",
    roleRu: "Объяснение технической причины инцидента (Root Cause Delivery)",
    formula: "Why this occurred comes down to [Technical Reason]...",
    targetEn: "Why this occurred comes down to an unexpected race condition triggered during the cache invalidation cycle.",
    targetRu: "Причина случившегося сводится к неожиданному состоянию гонки (race condition), вызванному во время цикла сброса кэша.",
    context: "Customer Support",
    whyItWorks: "Уверенный вводный чанк саппорта, который мгновенно снижает панику клиента перед сложным техническим объяснением.",
    slotSwaps: [
      "...an unannounced breaking change in an upstream provider API.",
      "...a sudden tenfold spike in concurrent database queries.",
      "...a temporary network partition within the Frankfurt availability zone.",
    ],
    audioText: "Why this occurred comes down to an unexpected race condition triggered during the cache invalidation cycle.",
  },

  // HOW
  {
    id: "wh-how-1",
    word: "How",
    roleRu: "Количественная оценка потерь от сбоя (Impact Quantification)",
    formula: "How would it impact your revenue if [Outage / Blocker continues]?",
    targetEn: "How would it impact your daily operational throughput if this billing glitch persisted until tomorrow?",
    targetRu: "Как повлияет на вашу ежедневную операционную пропускную способность, если этот сбой биллинга продлится до завтра?",
    context: "Customer Support",
    whyItWorks: "Позволяет измерить уровень угрозы для бизнеса клиента и обосновать выделение наивысшего приоритета инженеров.",
    slotSwaps: [
      "...if your sales reps could not log active customer calls today?",
      "...if transactional emails experienced a two-hour delivery lag?",
      "...if customer checkout requests timed out during the evening rush?",
    ],
    audioText: "How would it impact your daily operational throughput if this billing glitch persisted until tomorrow?",
  },
  {
    id: "wh-how-2",
    word: "How",
    roleRu: "Уточнение внутреннего процесса принятия решений",
    formula: "How does your leadership team typically evaluate [Proposal]?",
    targetEn: "How does your procurement team typically evaluate enterprise SaaS contract terms?",
    targetRu: "Как ваша служба закупок обычно оценивает условия корпоративных контрактов на SaaS?",
    context: "B2B Sales",
    whyItWorks: "Мягкий открытый вопрос («How does»), который побуждает клиента рассказать всю внутреннюю кухню утверждения контрактов.",
    slotSwaps: [
      "...evaluate total cost of ownership vs immediate licensing cost?",
      "...assess vendor security questionnaires and penetration tests?",
      "...prioritize competing software requests from different departments?",
    ],
    audioText: "How does your procurement team typically evaluate enterprise SaaS contract terms?",
  },
  {
    id: "wh-how-3",
    word: "How",
    roleRu: "Консультативное предложение решения (Consultative Pitch)",
    formula: "How would you feel about structuring a 30-day proof of concept?",
    targetEn: "How would you feel about running a targeted 30-day pilot with your top three sales reps?",
    targetRu: "Как вы отнесетесь к тому, чтобы запустить целевой 30-дневный пилот с тремя вашими ведущими менеджерами по продажам?",
    context: "B2B Sales",
    whyItWorks: "Классический вопрос Криса Восса («How would you feel about...»): исключает давление, вызывает интерес и практически гарантирует согласие.",
    slotSwaps: [
      "...structuring a phased deployment to mitigate operational risk?",
      "...having our solution architect join your team for a live migration test?",
      "...locking in your grandfathered pricing before the quarterly rate adjustment?",
    ],
    audioText: "How would you feel about running a targeted 30-day pilot with your top three sales reps?",
  },
];

export const CONDITIONAL_CHUNKS: readonly ConditionalChunkItem[] = [
  // ZERO CONDITIONAL
  {
    id: "cond-zero-1",
    level: "zero",
    levelName: "Zero Conditional",
    formula: "If + Present Simple, Present Simple",
    businessRole: "SLA-обязательства и гарантированные регламенты",
    targetEn: "If a support ticket is marked Severity-1, our engineering team responds within 15 minutes.",
    targetRu: "Если тикет помечен как инцидент 1-го уровня критичности, наша инженерная команда отвечает в течение 15 минут.",
    context: "Customer Support",
    conditionPart: "If a support ticket is marked Severity-1",
    resultPart: "our engineering team responds within 15 minutes",
    whyItWorks: "Zero Conditional выражает строгие факты, системные алгоритмы и нерушимые гарантии сервиса (SLA). Звучит авторитетно и надежно.",
    slotSwaps: [
      "If the memory threshold exceeds 90%, the cluster automatically scales up.",
      "If payment fails on the primary card, our system retries three times over 48 hours.",
      "If an account admin requests a data audit, our compliance engine generates it instantly.",
    ],
    audioText: "If a support ticket is marked Severity-1, our engineering team responds within 15 minutes.",
  },
  {
    id: "cond-zero-2",
    level: "zero",
    levelName: "Zero Conditional",
    formula: "If + Present Simple, Present Simple",
    businessRole: "Условия биллинга и автоматическая генерация документов",
    targetEn: "If a client selects annual billing, the platform automatically applies a 20 percent discount.",
    targetRu: "Если клиент выбирает годовую оплату, платформа автоматически применяет скидку 20 процентов.",
    context: "B2B Sales",
    conditionPart: "If a client selects annual billing",
    resultPart: "the platform automatically applies a 20% discount",
    whyItWorks: "Формулирует ценовую политику как объективное системное правило, а не как предмет для бесконечных скидочных торгов.",
    slotSwaps: [
      "If your seat count surpasses 50 licenses, dedicated onboarding is included by default.",
      "If custom security terms are required, the enterprise tier takes effect automatically.",
      "If an invoice is unpaid past 30 days, account privileges switch to read-only.",
    ],
    audioText: "If a client selects annual billing, the platform automatically applies a 20 percent discount.",
  },
  {
    id: "cond-zero-3",
    level: "zero",
    levelName: "Zero Conditional",
    formula: "If + Present Simple, Present Simple",
    businessRole: "Регламент защиты персональных данных (Compliance & GDPR)",
    targetEn: "If an enterprise client initiates a data deletion request, GDPR compliance requires complete purging within 72 hours.",
    targetRu: "Если корпоративный клиент инициирует запрос на удаление данных, регламент GDPR требует полной очистки в течение 72 часов.",
    context: "Incident Post-Mortem & SLA",
    conditionPart: "If an enterprise client initiates a data deletion request",
    resultPart: "GDPR compliance requires complete purging within 72 hours",
    whyItWorks: "Демонстрирует юридическую дисциплину и знание международных стандартов безопасности без тени сомнений.",
    slotSwaps: [
      "If an API key is exposed publicly, our security monitor revokes it immediately.",
      "If two-factor authentication is enforced, unauthorized session tokens expire instantly.",
      "If a sub-processor agreement changes, we notify all account administrators within 14 days.",
    ],
    audioText: "If an enterprise client initiates a data deletion request, GDPR compliance requires complete purging within 72 hours.",
  },

  // FIRST CONDITIONAL
  {
    id: "cond-first-1",
    level: "first",
    levelName: "First Conditional",
    formula: "If + Present Simple, Will + Verb",
    businessRole: "Мотивация к быстрому закрытию сделки (Closing Incentive)",
    targetEn: "If you commit to an annual contract today, we will waive all onboarding and implementation fees.",
    targetRu: "Если вы согласуете годовой контракт сегодня, мы полностью отменим плату за онбординг и внедрение.",
    context: "B2B Sales",
    conditionPart: "If you commit to an annual contract today",
    resultPart: "we will waive all onboarding and implementation fees",
    whyItWorks: "First Conditional создает реальное будущее обещание («we will»). Это идеальный инструмент для предложения уступок в обмен на скорость подписания.",
    slotSwaps: [
      "If your CFO approves this by Friday, we will include two extra admin seats at no cost.",
      "If you lock in the multi-year proposal, we will guarantee price protection against future rate hikes.",
      "If we finalize the MSA this week, our solution architect will begin your integration on Monday.",
    ],
    audioText: "If you commit to an annual contract today, we will waive all onboarding and implementation fees.",
  },
  {
    id: "cond-first-2",
    level: "first",
    levelName: "First Conditional",
    formula: "If + Present Simple, Will + Verb",
    businessRole: "Взаимные шаги при решении тикета поддержки",
    targetEn: "If you provide the HAR file and server logs, our lead engineer will pinpoint the root cause within the hour.",
    targetRu: "Если вы предоставите HAR-файл и логи сервера, наш ведущий инженер определит первопричину в течение часа.",
    context: "Customer Support",
    conditionPart: "If you provide the HAR file and server logs",
    resultPart: "our lead engineer will pinpoint the root cause within the hour",
    whyItWorks: "Превращает жалобу клиента в совместную задачу: клиент видит прямую выгоду от предоставления нужных технических данных.",
    slotSwaps: [
      "If you grant temporary impersonation access, our team will run the database test immediately.",
      "If you clear the browser cache and cookies, the updated permissions will reflect instantly.",
      "If the issue recurs after this patch, we will immediately escalate the ticket to engineering leadership.",
    ],
    audioText: "If you provide the HAR file and server logs, our lead engineer will pinpoint the root cause within the hour.",
  },
  {
    id: "cond-first-3",
    level: "first",
    levelName: "First Conditional",
    formula: "If + Present Simple, Will + Verb",
    businessRole: "Четкий таймлайн следующих шагов после демо",
    targetEn: "If you send over your sample dataset by Wednesday, we will build a tailored proof of concept for your Thursday review.",
    targetRu: "Если вы пришлете ваш образец данных к среде, мы подготовим кастомный демо-стенд к вашей встрече в четверг.",
    context: "B2B Sales",
    conditionPart: "If you send over your sample dataset by Wednesday",
    resultPart: "we will build a tailored proof of concept for your Thursday review",
    whyItWorks: "Демонстрирует высокую проактивность и готовность инвестировать ресурсы в сделку при наличии ответного шага со стороны клиента.",
    slotSwaps: [
      "If your team attends the training session tomorrow, you will see a 40% reduction in manual tickets by next week.",
      "If we deploy the webhook bridge today, your CRM will synchronize leads in real time.",
      "If your legal team has minor markups, our general counsel will turn them around within 24 hours.",
    ],
    audioText: "If you send over your sample dataset by Wednesday, we will build a tailored proof of concept for your Thursday review.",
  },

  // SECOND CONDITIONAL
  {
    id: "cond-second-1",
    level: "second",
    levelName: "Second Conditional",
    formula: "If + Past Simple, Would + Verb",
    businessRole: "Гипотетическое прощупывание условий без принятия обязательств",
    targetEn: "If we offered customized Net-60 payment terms, would your CFO approve the proposal this week?",
    targetRu: "Если бы мы предложили индивидуальные условия оплаты с отсрочкой в 60 дней, одобрил бы ваш финансовый директор предложение на этой неделе?",
    context: "B2B Sales",
    conditionPart: "If we offered customized Net-60 payment terms",
    resultPart: "would your CFO approve the proposal this week?",
    whyItWorks: "Second Conditional позволяет обсуждать смелые уступки гипотетически («If we offered..., would you...»), не связывая себя юридическими обещаниями до согласия клиента.",
    slotSwaps: [
      "If we included 24/7 dedicated Slack channel support, would that alleviate your team's reliability concerns?",
      "If we phased the rollout across two quarters, would that fit into your current fiscal budget?",
      "If we conducted the data migration on a weekend, would that eliminate your production downtime risk?",
    ],
    audioText: "If we offered customized Net-60 payment terms, would your CFO approve the proposal this week?",
  },
  {
    id: "cond-second-2",
    level: "second",
    levelName: "Second Conditional",
    formula: "If + Past Simple, Would + Verb",
    businessRole: "Узнавание реального приоритета клиента (Feature Prioritization)",
    targetEn: "If you had to pick just one non-negotiable requirement for this release, what would that be?",
    targetRu: "Если бы вам пришлось выбрать только одно непреложное требование для этого релиза, что бы это было?",
    context: "Customer Support",
    conditionPart: "If you had to pick just one non-negotiable requirement for this release",
    resultPart: "what would that be?",
    whyItWorks: "Разгружает стресс клиента, снимая нагромождение второстепенных жалоб и кристаллизуя главную точку удовлетворения.",
    slotSwaps: [
      "...what would be the single most impactful metric for your department?",
      "...which workflow would you automate first?",
      "...what would give your executive board the greatest peace of mind?",
    ],
    audioText: "If you had to pick just one non-negotiable requirement for this release, what would that be?",
  },
  {
    id: "cond-second-3",
    level: "second",
    levelName: "Second Conditional",
    formula: "If + Past Simple, Would + Verb",
    businessRole: "Оценка скрытой ценности устранения проблемы (Hypothetical Value)",
    targetEn: "What would happen to your team's quarterly output if this manual reporting bottleneck were completely removed?",
    targetRu: "Что произошло бы с квартальной продуктивностью вашей команды, если бы это узкое место с ручными отчетами было полностью устранено?",
    context: "B2B Sales",
    conditionPart: "if this manual reporting bottleneck were completely removed",
    resultPart: "What would happen to your team's quarterly output",
    whyItWorks: "Побуждает собеседника представить будущее, в котором проблема решена, активируя эмоциональное желание приобрести продукт.",
    slotSwaps: [
      "...if your reps saved 10 hours a week on CRM updates?",
      "...if your customer response time dropped from four hours to three minutes?",
      "...if onboarding drop-off were cut in half?",
    ],
    audioText: "What would happen to your team's quarterly output if this manual reporting bottleneck were completely removed?",
  },

  // THIRD CONDITIONAL
  {
    id: "cond-third-1",
    level: "third",
    levelName: "Third Conditional",
    formula: "If + Past Perfect, Would have + V3",
    businessRole: "Ретроспективный анализ инцидента (Root Cause Analysis Post-Mortem)",
    targetEn: "If the automated monitoring agent had alerted us sooner, the secondary failover would have triggered without user impact.",
    targetRu: "Если бы агент автоматического мониторинга оповестил нас раньше, резервный контур сработал бы без ущерба для пользователей.",
    context: "Incident Post-Mortem & SLA",
    conditionPart: "If the automated monitoring agent had alerted us sooner",
    resultPart: "the secondary failover would have triggered without user impact",
    whyItWorks: "Third Conditional незаменим для технических разборов инцидентов (RCA): точно локализует, что пошло не так в прошлом и как система изменится в будущем.",
    slotSwaps: [
      "If we had maintained redundant cache replicas, the traffic spike would not have overwhelmed the database.",
      "If the staging environment had mirrored production data, our QA team would have caught the regression before release.",
      "If the firewall rule had been updated during maintenance, the API timeout would not have occurred.",
    ],
    audioText: "If the automated monitoring agent had alerted us sooner, the secondary failover would have triggered without user impact.",
  },
  {
    id: "cond-third-2",
    level: "third",
    levelName: "Third Conditional",
    formula: "If + Past Perfect, Would have + V3",
    businessRole: "Анализ сорванной сделки (Sales Deal Win-Loss Review)",
    targetEn: "If we had engaged the Chief Information Security Officer in month one, we would have cleared the compliance review before their budget freeze.",
    targetRu: "Если бы мы привлекли директора по информационной безопасности в первый месяц, мы прошли бы проверку соответствия до заморозки их бюджета.",
    context: "B2B Sales",
    conditionPart: "If we had engaged the Chief Information Security Officer in month one",
    resultPart: "we would have cleared the compliance review before their budget freeze",
    whyItWorks: "Позволяет сейлз-команде делать честные выводы на ретроспективах сделок, выявляя упущенные контрольные точки MEDDIC.",
    slotSwaps: [
      "If we had verified their procurement lead time earlier, we would have closed this deal in Q3.",
      "If we had offered an executive briefing with our CTO, we would have countered the competitor's claims effectively.",
      "If the sales engineer had run a live latency benchmark, the client would have signed the annual contract on the spot.",
    ],
    audioText: "If we had engaged the Chief Information Security Officer in month one, we would have cleared the compliance review before their budget freeze.",
  },
  {
    id: "cond-third-3",
    level: "third",
    levelName: "Third Conditional",
    formula: "If + Past Perfect, Would have + V3",
    businessRole: "Конструктивная деэскалация при запоздалом обращении клиента",
    targetEn: "If your team had flagged this billing discrepancy during the initial reconciliation window, our accounting team would have credited your account immediately.",
    targetRu: "Если бы ваша команда указала на это несоответствие в биллинге во время первоначального окна сверки, наша бухгалтерия зачислила бы средства на ваш счет немедленно.",
    context: "Customer Support",
    conditionPart: "If your team had flagged this billing discrepancy during the initial reconciliation window",
    resultPart: "our accounting team would have credited your account immediately",
    whyItWorks: "Вежливо и профессионально объясняет причину текущих задержек, ссылаясь на регламентные сроки, не звуча грубо или оборонительно.",
    slotSwaps: [
      "If we had received the updated domain certificates yesterday, the secure gateway would have renewed automatically.",
      "If the webhook payload had included the user ID parameter, our ingestion service would have processed the batch without errors.",
      "If the escalation had reached tier-2 support during business hours, the hotfix would have shipped yesterday evening.",
    ],
    audioText: "If your team had flagged this billing discrepancy during the initial reconciliation window, our accounting team would have credited your account immediately.",
  },
];
