import { TenseMatrixItem } from "./types";

export const TENSE_MATRIX_DATA: readonly TenseMatrixItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. PRESENT TENSES (НАСТОЯЩЕЕ ВРЕМЯ)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "present_simple",
    tenseKey: "Present Simple",
    nameEn: "Present Simple",
    nameRu: "Простое настоящее (Факты, рутина, регламенты продаж)",
    horizon: "present",
    aspect: "simple",
    formula: "Subject + V1 (he/she/it + V-s)",
    formulaNeg: "Subject + don't / doesn't + V1",
    formulaQuest: "Do / Does + Subject + V1?",
    coreMeaning: "Регулярный процесс продаж, стандарты квалификации лидов, должностные обязанности и общие истины ведения переговоров.",
    timeMarkers: ["usually", "always", "every day", "on Mondays", "rarely", "as a rule"],
    readyChunk: "I usually handle [enterprise accounts], while [Sarah] takes care of [inbound qualification]",
    chunkRu: "«Обычно я веду [корпоративные сделки], в то время как [имя] отвечает за [квалификацию входящих лидов]»",
    sentences: [
      {
        en: "Our sales team runs weekly pipeline reviews every Monday at 10 AM.",
        ru: "Наш отдел продаж проводит ревью воронки каждый понедельник в 10:00.",
        context: "Расписание и командная рутина сейлзов"
      },
      {
        en: "It doesn't make sense to pitch advanced features before qualifying the prospect's budget.",
        ru: "Нет никакого смысла презентовать сложные фичи до квалификации бюджета клиента.",
        context: "Коммерческий закон квалификации (BANT/MEDDIC)"
      },
      {
        en: "How often do your account executives follow up with stalled enterprise leads?",
        ru: "Как часто ваши аккаунт-менеджеры делают фоллоу-ап по зависшим корпоративным сделкам?",
        context: "Вопрос о регулярности работы с пайплайном"
      },
      {
        en: "Our CRM triggers an automated notification when a prospect opens the proposal.",
        ru: "Наша CRM отправляет автоматическое уведомление, когда потенциальный клиент открывает коммерческое предложение.",
        context: "Стандарт работы коммерческих инструментов"
      }
    ],
    lifeTip: "Используйте для описания должностных обязанностей, условий тарифных планов и регулярных шагов ведения сделок."
  },
  {
    id: "present_continuous",
    tenseKey: "Present Continuous",
    nameEn: "Present Continuous",
    nameRu: "Настоящее длительное (Прямо сейчас, активные переговоры, тренд)",
    horizon: "present",
    aspect: "continuous",
    formula: "Subject + am / is / are + V-ing",
    formulaNeg: "Subject + am / is / are + not + V-ing",
    formulaQuest: "Am / Is / Are + Subject + V-ing?",
    coreMeaning: "Переговорный процесс, разворачивающийся прямо сейчас, или активная сделка, над которой вы работаете на этой неделе.",
    timeMarkers: ["right now", "currently", "at the moment", "this week", "these days"],
    readyChunk: "I'm currently negotiating [contract terms] and addressing [pricing objections]",
    chunkRu: "«Я прямо сейчас согласую [условия контракта] и параллельно отрабатываю [ценовые возражения]»",
    sentences: [
      {
        en: "I'm currently reviewing the customer's redlines on our Master Services Agreement.",
        ru: "Я прямо сейчас разбираю правки клиента в нашем рамочном договоре.",
        context: "Ответ на летучке: над чем идет работа сейчас"
      },
      {
        en: "We're not offering additional discounts until the client commits to an annual contract.",
        ru: "Мы не предоставляем дополнительных скидок, пока клиент не согласится на годовой контракт.",
        context: "Временная коммерческая позиция на переговорах"
      },
      {
        en: "Are you still working with that fintech prospect on customized payment terms?",
        ru: "Ты все еще ведешь переговоры с тем финтех-клиентом по индивидуальным условиям оплаты?",
        context: "Уточнение текущего статуса сделки"
      },
      {
        en: "Our outbound pipeline conversion is growing much faster since we revamped the pitch deck.",
        ru: "Конверсия нашей исходящей воронки растет значительно быстрее после обновления презентации.",
        context: "Позитивный тренд продаж в реальном времени"
      }
    ],
    lifeTip: "Самый частый ответ на вопрос руководителя «What deals are you actively working on?». Не используйте со статичными глаголами (agree, cost, understand)."
  },
  {
    id: "present_perfect",
    tenseKey: "Present Perfect",
    nameEn: "Present Perfect",
    nameRu: "Настоящее совершенное (Результат к этой минуте, опыт в продажах)",
    horizon: "present",
    aspect: "perfect",
    formula: "Subject + have / has + V3",
    formulaNeg: "Subject + haven't / hasn't + V3",
    formulaQuest: "Have / Has + Subject + V3?",
    coreMeaning: "Связь прошлого с настоящим: этап сделки завершен (когда — не важно), но результат определяет текущий шаг переговоров.",
    timeMarkers: ["already", "yet", "just", "recently", "so far", "ever / never"],
    readyChunk: "Have you had a chance to [review the quote] yet? I've already [sent it]...",
    chunkRu: "«У вас уже была возможность [ознакомиться с КП]? Я уже [отправил его]...»",
    sentences: [
      {
        en: "I've already sent over the customized pricing proposal; please let me know your thoughts.",
        ru: "Я уже отправил индивидуальное ценовое предложение; пожалуйста, поделитесь вашими мыслями.",
        context: "Свежий результат к этой минуте"
      },
      {
        en: "We haven't received the countersigned agreement from their legal department yet.",
        ru: "Мы пока еще не получили подписанный договор от их юридического отдела.",
        context: "Отсутствие ожидаемого документа"
      },
      {
        en: "We've run into an unexpected objection regarding their annual procurement review.",
        ru: "Мы столкнулись с неожиданным возражением по поводу их годового цикла закупок.",
        context: "Спокойное сообщение руководству о заминке в сделке"
      },
      {
        en: "Have you ever closed a multi-million-dollar deal with a Fortune 500 enterprise?",
        ru: "Тебе когда-нибудь доводилось закрывать многомиллионные сделки с корпорациями из Fortune 500?",
        context: "Вопрос об опыте в продажах в целом"
      }
    ],
    lifeTip: "Если в предложении есть конкретная дата звонка (yesterday, on Monday, last call) — используйте строго Past Simple!"
  },
  {
    id: "present_perfect_continuous",
    tenseKey: "Present Perfect Continuous",
    nameEn: "Present Perfect Continuous",
    nameRu: "Длительное настоящее совершенное (Переговоры тянутся до сейчас)",
    horizon: "present",
    aspect: "perfect_continuous",
    formula: "Subject + have / has + been + V-ing",
    formulaNeg: "Subject + haven't / hasn't + been + V-ing",
    formulaQuest: "How long + have / has + Subject + been + V-ing?",
    coreMeaning: "Переговоры или работа с аккаунтом начались в прошлом, непрерывно длились и все еще продолжаются прямо сейчас.",
    timeMarkers: ["for [hours/days]", "since [morning/Monday]", "all quarter", "lately"],
    readyChunk: "I've been negotiating with [client] since [time] / for [duration]",
    chunkRu: "«Я веду переговоры с [клиентом] еще со [времени] / уже на протяжении [стольких месяцев]»",
    sentences: [
      {
        en: "I've been negotiating with their procurement lead since 9 AM trying to preserve our margin.",
        ru: "Я веду переговоры с их главой закупок с 9 утра, пытаясь защитить нашу маржу.",
        context: "Объяснение напряженной работы над крупной сделкой"
      },
      {
        en: "We've been dealing with budget freeze pushback on this account all quarter.",
        ru: "Мы весь квартал боремся с возражением о заморозке бюджетов по этой сделке.",
        context: "Тянущееся сложное согласование"
      },
      {
        en: "How long have you been prospecting into this target strategic account?",
        ru: "Как долго ты уже разрабатываешь этот целевой стратегический аккаунт?",
        context: "Вопрос о длительности прогрева лида"
      },
      {
        en: "She has been managing our top enterprise software accounts for over seven years.",
        ru: "Она ведет наши крупнейшие корпоративные софтверные контракты уже более семи лет.",
        context: "Длительный успешный профессиональный трек"
      }
    ],
    lifeTip: "Подчеркивает приложенные усилия и упорство сейлза в доведении сложного клиента до сделки."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. PAST TENSES (ПРОШЕДШЕЕ ВРЕМЯ)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "past_simple",
    tenseKey: "Past Simple",
    nameEn: "Past Simple",
    nameRu: "Простое прошедшее (Факт в конкретный момент переговоров)",
    horizon: "past",
    aspect: "simple",
    formula: "Subject + V2 / Ved",
    formulaNeg: "Subject + didn't + V1",
    formulaQuest: "Did + Subject + V1?",
    coreMeaning: "Завершенный факт встречи, звонка или закрытия сделки в зафиксированный отрезок прошлого.",
    timeMarkers: ["yesterday", "last week", "in Q3", "two days ago", "during the demo"],
    readyChunk: "We decided to [offer a pilot] yesterday because [the buyer hesitated]",
    chunkRu: "«Вчера мы решили [предложить пилот], потому что [клиент сомневался]»",
    sentences: [
      {
        en: "We closed the enterprise contract yesterday afternoon right before the fiscal deadline.",
        ru: "Мы закрыли корпоративный контракт вчера днем прямо перед закрытием финансового периода.",
        context: "Конкретный отчет о триумфальной сделке"
      },
      {
        en: "Did you get a chance to discuss the pilot scope with their VP of Sales yesterday?",
        ru: "Удалось ли тебе вчера обсудить масштабы пилота с их вице-президентом по продажам?",
        context: "Вопрос о результатах вчерашнего созвона"
      },
      {
        en: "The prospect didn't attend the demo because their executive committee ran over time.",
        ru: "Потенциальный клиент не пришел на демо, потому что их совет директоров затянулся.",
        context: "Разбор сорвавшейся встречи"
      },
      {
        en: "I noticed their hesitation when we brought up the upfront annual billing model.",
        ru: "Я заметил их сомнения, когда мы заговорили про годовую предоплату.",
        context: "Наблюдение за реакцией клиента на переговорах"
      }
    ],
    lifeTip: "Рабочая лошадка любого коммерческого отчета по созвонам. Обязательна точная временная привязка."
  },
  {
    id: "past_continuous",
    tenseKey: "Past Continuous",
    nameEn: "Past Continuous",
    nameRu: "Прошедшее длительное (Фон переговоров, процесс в момент времени)",
    horizon: "past",
    aspect: "continuous",
    formula: "Subject + was / were + V-ing",
    formulaNeg: "Subject + wasn't / weren't + V-ing",
    formulaQuest: "Were / Was + Subject + V-ing?",
    coreMeaning: "Переговоры или демонстрация длились в конкретный момент в прошлом, когда произошло ключевое событие.",
    timeMarkers: ["at 3 PM yesterday", "while", "when [short action]", "during the pitch"],
    readyChunk: "I was in the middle of [presenting ROI] when [the CFO asked about pricing]",
    chunkRu: "«Я был как раз в процессе [презентации окупаемости], когда [финдиректор задал вопрос о цене]»",
    sentences: [
      {
        en: "I was in the middle of walking through the pricing tiers when their CFO joined the call.",
        ru: "Я был в самом разгаре разбора тарифов, когда к созвону подключился их финдиректор.",
        context: "Прерванное фоновое выступление"
      },
      {
        en: "I was just about to send the follow-up email when the buyer called back to confirm.",
        ru: "Я как раз собирался отправить фоллоу-ап, когда клиент сам перезвонил с подтверждением.",
        context: "Опережающее закрытие сделки"
      },
      {
        en: "We were looking into offering quarterly billing, but the client opted for an annual prepayment.",
        ru: "Мы как раз рассматривали поквартальную оплату, но клиент сам выбрал годовую предоплату со скидкой.",
        context: "Фоновое обсуждение коммерческих вариантов"
      },
      {
        en: "What were you presenting at 2 PM when the prospect raised the security objection?",
        ru: "Что именно ты показывал на демо в 14:00, когда клиент высказал возражение по безопасности?",
        context: "Анализ хода демо-встречи"
      }
    ],
    lifeTip: "Идеально подходит для объяснений: «I was demoing our analytics dashboard when they asked for an NDA»."
  },
  {
    id: "past_perfect",
    tenseKey: "Past Perfect",
    nameEn: "Past Perfect",
    nameRu: "Предпрошедшее (Подготовка завершилась ДО начала встречи)",
    horizon: "past",
    aspect: "perfect",
    formula: "Subject + had + V3",
    formulaNeg: "Subject + hadn't + V3",
    formulaQuest: "Had + Subject + V3?",
    coreMeaning: "Действие подготовки или квалификации завершилось ДО другого события в прошлом (до встречи, до звонка, до возражения).",
    timeMarkers: ["by the time", "before", "already", "until then", "never before"],
    readyChunk: "By the time [the call started], we had already [tailored the proposal]...",
    chunkRu: "«К тому моменту как [начался созвон], мы уже успели [подготовить кастомное КП]»",
    sentences: [
      {
        en: "By the time the pitch call started, I had already researched all five buying committee members.",
        ru: "К моменту начала презентационного звонка я уже изучил всех пятерых членов закупочного комитета.",
        context: "Глубокая предварительная подготовка сейлза"
      },
      {
        en: "We hadn't realized their budget had frozen until the procurement lead stepped in.",
        ru: "Мы не осознавали, что их бюджет был заморожен, пока в диалог не вмешался руководитель закупок.",
        context: "Предшествующее неведение о блокерах сделки"
      },
      {
        en: "They had already tested two competitor solutions before they agreed to a demo with us.",
        ru: "Они уже успели протестировать два конкурирующих решения до того, как согласились на наше демо.",
        context: "Контекст конкурентной среды"
      },
      {
        en: "Had you verified their decision-making timeline before sending over the formal contract?",
        ru: "Ты уточнил их сроки принятия решений до того, как отправил официальный договор?",
        context: "Проверка соблюдения регламента продаж"
      }
    ],
    lifeTip: "Используйте для демонстрации качественной подготовки к переговорам (Account Research)."
  },
  {
    id: "past_perfect_continuous",
    tenseKey: "Past Perfect Continuous",
    nameEn: "Past Perfect Continuous",
    nameRu: "Длительное предпрошедшее (Долгая разработка сделки до финала)",
    horizon: "past",
    aspect: "perfect_continuous",
    formula: "Subject + had been + V-ing",
    formulaNeg: "Subject + hadn't been + V-ing",
    formulaQuest: "Had + Subject + been + V-ing?",
    coreMeaning: "Длительный процесс прогрева клиента или переговоров, который шел ДО определенной точки в прошлом.",
    timeMarkers: ["for months before", "had been nurturing since", "until finally"],
    readyChunk: "We had been nurturing [this account] for [months] before we finally [closed the deal]",
    chunkRu: "«Мы вели [этого клиента] на протяжении [месяцев], прежде чем наконец [закрыли сделку]»",
    sentences: [
      {
        en: "We had been nurturing that enterprise prospect for nine months before they finally issued an RFP.",
        ru: "Мы вели этого корпоративного клиента девять месяцев, прежде чем они наконец объявили тендер.",
        context: "Длительный стратегический цикл продаж"
      },
      {
        en: "The deal stalled because they had been restructuring their executive leadership for several months.",
        ru: "Сделка встала на паузу, потому что они несколько месяцев подряд реструктурировали руководство.",
        context: "Объяснение задержки сделки внешними факторами"
      },
      {
        en: "Our top rep was exhausted because he had been negotiating with tough procurement buyers all week.",
        ru: "Наш ведущий менеджер был без сил, потому что всю неделю без перерыва вел переговоры с жесткими закупщиками.",
        context: "Причина состояния после тяжелых переговоров"
      },
      {
        en: "How long had you been chasing that enterprise account before the CEO agreed to an executive briefing?",
        ru: "Как долго вы добивались этого крупного клиента до того, как их CEO согласился на стратегическую сессию?",
        context: "Оценка упорства сейлз-команды"
      }
    ],
    lifeTip: "Незаменимая конструкция на годовых ретроспективах и коммерческих отчетах по крупным победам."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. FUTURE TENSES (БУДУЩЕЕ ВРЕМЯ)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "future_simple",
    tenseKey: "Future Simple",
    nameEn: "Future Simple",
    nameRu: "Простое будущее (Обещание клиенту, спонтанный шаг, прогноз)",
    horizon: "future",
    aspect: "simple",
    formula: "Subject + will + V1",
    formulaNeg: "Subject + won't (will not) + V1",
    formulaQuest: "Will + Subject + V1?",
    coreMeaning: "Быстрое решение прямо на звонке, профессиональное обещание клиенту или уверенный прогноз закрытия.",
    timeMarkers: ["tomorrow", "next week", "in a minute", "I promise", "I'm confident"],
    readyChunk: "I'll follow up with [the prospect] right after this call",
    chunkRu: "«Я свяжусь с [клиентом] и пришлю материалы сразу после этого созвона»",
    sentences: [
      {
        en: "I'll send over the updated price breakdown and customer references right after this call.",
        ru: "Я отправлю обновленный расчет стоимости и кейсы клиентов сразу после этого звонка.",
        context: "Спонтанное обязательство сейлза перед клиентом"
      },
      {
        en: "Don't worry, I'll make sure to get the custom discount approved by our VP before tomorrow.",
        ru: "Не переживайте, я обязательно согласую специальную скидку с вице-президентом до завтра.",
        context: "Обещание и гарантия клиенту на переговорах"
      },
      {
        en: "I'm confident this customized ROI demonstration will win over their skeptical CFO.",
        ru: "Я уверен, что эта персональная демонстрация окупаемости убедит их скептичного финдиректора.",
        context: "Профессиональный прогноз победы"
      },
      {
        en: "Won't this revised implementation schedule cause concern for your steering committee?",
        ru: "Разве этот обновленный график внедрения не вызовет беспокойства у вашего руководящего комитета?",
        context: "Предостерегающий вопрос клиенту для выявления скрытых рисков"
      }
    ],
    lifeTip: "Главная формула клиентоориентированности: «I'll send», «I'll double-check», «I'll confirm»."
  },
  {
    id: "future_continuous",
    tenseKey: "Future Continuous",
    nameEn: "Future Continuous",
    nameRu: "Будущее длительное (Демонстрации и переговоры в процессе)",
    horizon: "future",
    aspect: "continuous",
    formula: "Subject + will be + V-ing",
    formulaNeg: "Subject + won't be + V-ing",
    formulaQuest: "Will + Subject + be + V-ing?",
    coreMeaning: "Проведение демо или коммерческих созвонов в точно указанный отрезок времени, либо вежливый вопрос о планах клиента.",
    timeMarkers: ["at 3 PM tomorrow", "this time next week", "all afternoon tomorrow"],
    readyChunk: "I'll be running [client demos] between [time] and [time]",
    chunkRu: "«Я буду проводить [демо для клиентов] в промежутке с [такого-то] до [такого-то времени]»",
    sentences: [
      {
        en: "I'll be running discovery calls between 1 PM and 4 PM tomorrow afternoon.",
        ru: "Завтра с 13:00 до 16:00 я буду непрерывно проводить квалификационные звонки с лидами.",
        context: "План рабочего времени менеджера по продажам"
      },
      {
        en: "Don't schedule internal syncs for Thursday; our account executives will be pitching to major accounts.",
        ru: "Не ставьте внутренние митинги на четверг: наши сейлзы будут питчить ключевым клиентам.",
        context: "Предупреждение команды о фокусе на продажах"
      },
      {
        en: "Will you be attending the negotiation with the enterprise procurement team later today?",
        ru: "Вы будете присутствовать сегодня на переговорах с отделом закупок заказчика?",
        context: "Вежливый вопрос коллеге или техническому специалисту"
      },
      {
        en: "This time next week, our sales floor will be celebrating hitting 120% of our quarterly quota.",
        ru: "В это же время на следующей неделе наш отдел продаж будет праздновать выполнение плана на 120%.",
        context: "Мотивирующее предвкушение победы"
      }
    ],
    lifeTip: "Вежливейший способ спросить клиента о планах: «Will you be reviewing our proposal with your team this week?»"
  },
  {
    id: "future_perfect",
    tenseKey: "Future Perfect",
    nameEn: "Future Perfect",
    nameRu: "Будущее совершенное (Сделка будет закрыта К дедлайну)",
    horizon: "future",
    aspect: "perfect",
    formula: "Subject + will have + V3",
    formulaNeg: "Subject + won't have + V3",
    formulaQuest: "Will + Subject + have + V3 + by [time]?",
    coreMeaning: "Контракт будет подписан или цель по выручке будет достигнута К определенной временной отсечке в будущем.",
    timeMarkers: ["by Friday", "by the end of the quarter", "by the time we meet", "by year-end"],
    readyChunk: "We will have closed [the deal] by [the end of the quarter]",
    chunkRu: "«Мы полностью закроем [эту сделку] к [концу квартала]»",
    sentences: [
      {
        en: "We will have closed all five enterprise opportunities by the end of Q3.",
        ru: "Мы закроем все пять корпоративных сделок к концу третьего квартала.",
        context: "Железный прогноз выручки перед директором"
      },
      {
        en: "By the time the new fiscal year starts, the client will have completed their pilot onboarding.",
        ru: "К моменту начала нового финансового года клиент уже полностью завершит пилотный онбординг.",
        context: "Уверенность в успешном старте заказчика"
      },
      {
        en: "I will have finalized the customized proposal before our 2 PM call with the executive sponsor.",
        ru: "Я полностью подготовлю кастомное предложение еще до нашего звонка в 14:00 с ключевым спонсором сделки.",
        context: "Обязательство по срокам перед клиентом"
      },
      {
        en: "Will you have received the signed order form by Friday afternoon?",
        ru: "Ты успеешь получить подписанный бланк заказа к вечеру пятницы?",
        context: "Контроль соблюдения дедлайна закрытия"
      }
    ],
    lifeTip: "Обязателен маркер BY (by Friday, by month-end). Звучит авторитетно в диалоге с коммерческим директором и CFO."
  },
  {
    id: "future_perfect_continuous",
    tenseKey: "Future Perfect Continuous",
    nameEn: "Future Perfect Continuous",
    nameRu: "Длительное будущее совершенное (Стаж в продажах / срок партнерства)",
    horizon: "future",
    aspect: "perfect_continuous",
    formula: "Subject + will have been + V-ing",
    formulaNeg: "Subject + won't have been + V-ing",
    formulaQuest: "How long + will + you + have been + V-ing + by [time]?",
    coreMeaning: "Подсчет длительности партнерских отношений с клиентом или стажа работы в продажах к будущей дате.",
    timeMarkers: ["by next month ... for [duration]", "by 2027 ... for 5 years"],
    readyChunk: "By [date], I will have been managing [sales accounts] for [duration]",
    chunkRu: "«К [дате] исполнится ровно [срок], как я веду [клиентские сделки]»",
    sentences: [
      {
        en: "By next November, I will have been managing enterprise software accounts for exactly five years.",
        ru: "В следующем ноябре исполнится ровно пять лет, как я веду корпоративные софтверные контракты.",
        context: "Подсчет профессионального опыта в B2B"
      },
      {
        en: "By midnight on the 31st, our sales squad will have been pushing for quota attainment for three intense weeks.",
        ru: "К полуночи 31-го числа наша команда сейлзов будет непрерывно штурмовать план уже три напряженные недели.",
        context: "Фиксация финального спринта закрытия месяца"
      },
      {
        en: "By the time this contract renews, we will have been partnering with this client for over three years.",
        ru: "К моменту пролонгации договора исполнится больше трех лет, как мы сотрудничаем с этим клиентом.",
        context: "Оценка долгосрочных партнерских отношений"
      }
    ],
    lifeTip: "Используется на ежегодных бизнес-ревью и переговорах о пролонгации для подчеркивания лояльности клиента."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. SPOKEN ESSENTIALS (РАЗГОВОРНЫЙ СЕЙЛЗ-АНГЛИЙСКИЙ)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "be_going_to",
    tenseKey: "Be Going To",
    nameEn: "Be Going To (Intention)",
    nameRu: "Намерение и коммерческий план (Запланировано заранее)",
    horizon: "spoken",
    aspect: "modal",
    formula: "Subject + am/is/are + going to + V1",
    formulaNeg: "Subject + am/is/are + not + going to + V1",
    formulaQuest: "Are / Is + Subject + going to + V1?",
    coreMeaning: "Заранее намеченная стратегия продаж или очевидный исход сделки на основе сигналов от клиента.",
    timeMarkers: ["tonight", "this weekend", "soon", "next quarter"],
    readyChunk: "We're going to [target mid-market accounts] in the upcoming quarter",
    chunkRu: "«Мы планируем / намерены [атаковать сегмент средних компаний] в следующем квартале»",
    sentences: [
      {
        en: "We're going to launch a targeted outbound campaign to healthcare leaders next month.",
        ru: "В следующем месяце мы собираемся запустить таргетированную исходящую кампанию по лидерам медтеха.",
        context: "Коммерческий план развития пайплайна"
      },
      {
        en: "Look at their engagement metrics; this prospect is going to sign before the month ends.",
        ru: "Посмотри на их активность: этот клиент явно подпишет договор до конца месяца.",
        context: "Уверенный прогноз по сигналам о готовности к покупке"
      },
      {
        en: "Are you going to present the multi-year discount during the closing call?",
        ru: "Ты собираешься предложить скидку на трехлетний контракт во время финального звонка?",
        context: "Вопрос о коммерческой тактике"
      }
    ],
    lifeTip: "В живой беглой речи 'going to' звучит как 'gonna'. Идеально для демонстрации инициативы перед руководством."
  },
  {
    id: "present_continuous_future",
    tenseKey: "Present Continuous (Calendar Future)",
    nameEn: "Present Continuous for Future",
    nameRu: "Календарное будущее (100% зафиксированная встреча в календаре)",
    horizon: "spoken",
    aspect: "modal",
    formula: "Subject + am/is/are + V-ing + (time/place)",
    formulaNeg: "Subject + am/is/are not + V-ing",
    formulaQuest: "Are / Is + Subject + V-ing tomorrow?",
    coreMeaning: "Подтвержденная встреча в календаре (Calendar Invite) с лицом, принимающим решения. Отменить практически невозможно.",
    timeMarkers: ["tomorrow morning", "at 3 PM", "next Tuesday", "tonight"],
    readyChunk: "I'm meeting with [the prospect's VP] tomorrow to [negotiate terms]",
    chunkRu: "«Я встречаюсь с [вице-президентом клиента] завтра, чтобы [согласовать условия] (встреча в календаре)»",
    sentences: [
      {
        en: "I'm meeting with their Chief Revenue Officer tomorrow at 11 AM to finalize contract terms.",
        ru: "У меня встреча с их директором по выручке завтра в 11:00 для финального согласования условий.",
        context: "Зафиксированная встреча в Google Calendar"
      },
      {
        en: "We're hosting a private VIP breakfast for enterprise clients next Tuesday.",
        ru: "В следующий вторник мы проводим закрытый бизнес-завтрак для корпоративных заказчиков.",
        context: "Утвержденное клиентское мероприятие"
      },
      {
        en: "I'm flying to Chicago for the National B2B Sales Expo on Thursday.",
        ru: "В четверг я улетаю в Чикаго на национальную выставку B2B-продаж (билеты на руках).",
        context: "Командировка на переговоры"
      }
    ],
    lifeTip: "Носители языка всегда используют именно эту форму, когда делятся планами по подтвержденным звонкам с клиентами."
  },
  {
    id: "used_to",
    tenseKey: "Used To (Past Habits)",
    nameEn: "Used To / Would",
    nameRu: "Прошлые привычки (Как продавали раньше vs как продаем сейчас)",
    horizon: "spoken",
    aspect: "modal",
    formula: "Subject + used to + V1 (отрицание: didn't use to)",
    formulaNeg: "Subject + didn't use to + V1",
    formulaQuest: "Did + Subject + use to + V1?",
    coreMeaning: "Прежняя тактика продаж или привычка, от которой команда отказалась в пользу современных методологий.",
    timeMarkers: ["in the past", "before", "when I started in sales..."],
    readyChunk: "We used to [pitch feature lists], but now we [focus on business ROI]",
    chunkRu: "«Раньше мы обычно [перечисляли фичи продукта], а теперь [фокусируемся на окупаемости и ROI]»",
    sentences: [
      {
        en: "We used to rely on cold phone blitzes, but now we run multi-channel consultative outreach.",
        ru: "Раньше мы полагались на холодные звонки в лоб, а теперь ведем омниканальные экспертные продажи.",
        context: "Эволюция методологии продаж"
      },
      {
        en: "I didn't use to qualify budget early on, but now I follow strict MEDDIC discovery.",
        ru: "Раньше я не квалифицировал бюджет на первых этапах, а теперь строго следую фреймворку MEDDIC.",
        context: "Профессиональный рост сейлз-менеджера"
      },
      {
        en: "Did you use to work in transactional sales before moving into complex B2B enterprise deals?",
        ru: "Ты раньше работал в транзакционных быстрых продажах до перехода в сложные корпоративные B2B-сделки?",
        context: "Вопрос о прошлом коммерческом бэкграунде"
      }
    ],
    lifeTip: "Не путайте с 'be used to doing' (привыкать к чему-то). 'Used to do' — это только то, что навсегда осталось в прошлом."
  },
  {
    id: "was_supposed_to",
    tenseKey: "Was Supposed To",
    nameEn: "Was Supposed To (Broken Plan)",
    nameRu: "Сорвавшийся план (Сделка должна была закрыться, но возник блокер)",
    horizon: "spoken",
    aspect: "modal",
    formula: "Subject + was / were + supposed to + V1",
    formulaNeg: "Subject + wasn't / weren't + supposed to + V1",
    formulaQuest: "Were / Was + Subject + supposed to + V1?",
    coreMeaning: "Планировалось подписание или звонок, но возник непредвиденный барьер со стороны заказчика.",
    timeMarkers: ["originally", "yesterday", "earlier today"],
    readyChunk: "I was supposed to [close the deal today], but [the CFO requested an audit]",
    chunkRu: "«Я должен был [закрыть сделку сегодня], но [финдиректор запросил дополнительный аудит]»",
    sentences: [
      {
        en: "I was supposed to close this account today, but the customer requested an additional security review.",
        ru: "Я должен был закрыть этого клиента сегодня, но заказчик запросил дополнительный аудит безопасности.",
        context: "Дипломатичное объяснение переноса даты закрытия"
      },
      {
        en: "The contract was supposed to be signed yesterday, but their legal team raised an indemnity concern.",
        ru: "Договор должен был быть подписан вчера, но юристы клиента выставили замечание по пункту об ответственности.",
        context: "Объяснение задержки на юридическом этапе"
      },
      {
        en: "Were we supposed to include customized implementation support in this proposal package?",
        ru: "Разве мы не должны были включить выделенную поддержку внедрения в этот пакет предложения?",
        context: "Уточнение коммерческого скоупа перед отправкой"
      }
    ],
    lifeTip: "Главный спасительный чанк любого сейлза на пайплайн-ревью: объясняет задержку объективными блокерами клиента без самобичевания."
  }
] as const;
