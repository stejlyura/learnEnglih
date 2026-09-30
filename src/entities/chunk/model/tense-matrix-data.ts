import { TenseMatrixItem } from "./types";

export const TENSE_MATRIX_DATA: readonly TenseMatrixItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. PRESENT TENSES (НАСТОЯЩЕЕ ВРЕМЯ)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "present_simple",
    tenseKey: "Present Simple",
    nameEn: "Present Simple",
    nameRu: "Простое настоящее (Факты, рутина, законы работы)",
    horizon: "present",
    aspect: "simple",
    formula: "Subject + V1 (he/she/it + V-s)",
    formulaNeg: "Subject + don't / doesn't + V1",
    formulaQuest: "Do / Does + Subject + V1?",
    coreMeaning: "Постоянное состояние, регулярное расписание, факты, не привязанные к сиюминутному моменту.",
    timeMarkers: ["usually", "always", "every day", "on Mondays", "rarely", "as a rule"],
    readyChunk: "I usually handle [X], while [someone] takes care of [Y]",
    chunkRu: "«Обычно я отвечаю за [X], в то время как [имя] занимается [Y]»",
    sentences: [
      {
        en: "Our team runs daily standups every morning at 10 AM.",
        ru: "Наша команда проводит дейлики каждое утро в 10:00.",
        context: "Расписание и командная рутина"
      },
      {
        en: "It doesn't make sense to rewrite the whole module from scratch.",
        ru: "Нет никакого смысла переписывать весь модуль с нуля.",
        context: "Архитектурная оценка факта"
      },
      {
        en: "How often do you deploy new microservices to production?",
        ru: "Как часто вы выкатываете новые микросервисы на прод?",
        context: "Вопрос о регулярности процесса"
      },
      {
        en: "This endpoint returns a 401 status when the token expires.",
        ru: "Этот эндпоинт возвращает статус 401, когда токен истекает.",
        context: "Технический закон работы системы"
      }
    ],
    lifeTip: "Используйте для выражения должностных обязанностей и общих истин. Если действие происходит прямо перед глазами — переключайтесь на Continuous."
  },
  {
    id: "present_continuous",
    tenseKey: "Present Continuous",
    nameEn: "Present Continuous",
    nameRu: "Настоящее длительное (Прямо сейчас, временный процесс, тренд)",
    horizon: "present",
    aspect: "continuous",
    formula: "Subject + am / is / are + V-ing",
    formulaNeg: "Subject + am / is / are + not + V-ing",
    formulaQuest: "Am / Is / Are + Subject + V-ing?",
    coreMeaning: "Действие в процессе развертывания прямо сейчас или временный проект, занимающий эти недели.",
    timeMarkers: ["right now", "currently", "at the moment", "this week", "these days"],
    readyChunk: "I'm currently working on [X] and looking into [Y]",
    chunkRu: "«Я сейчас как раз пилю [X] и параллельно разбираюсь с [Y]»",
    sentences: [
      {
        en: "I'm currently looking into why the payment webhook is timing out.",
        ru: "Я прямо сейчас выясняю, почему отваливается по таймауту платежный вебхук.",
        context: "Ответ на дейлике: чем занят сейчас"
      },
      {
        en: "We're not accepting new feature requests until we fix performance.",
        ru: "Мы временно не принимаем запросы на новые фичи, пока не починим производительность.",
        context: "Временная политика команды"
      },
      {
        en: "Are you still debugging that memory leak in the billing service?",
        ru: "Ты все еще отлаживаешь ту утечку памяти в биллинге?",
        context: "Уточнение текущего статуса"
      },
      {
        en: "Our user base is growing much faster than we originally anticipated.",
        ru: "Наша пользовательская база растет гораздо быстрее, чем мы ожидали.",
        context: "Динамический тренд в реальном времени"
      }
    ],
    lifeTip: "Самый частый ответ на вопрос «What are you up to?». Не используйте со статичными глаголами восприятия (know, believe, understand)."
  },
  {
    id: "present_perfect",
    tenseKey: "Present Perfect",
    nameEn: "Present Perfect",
    nameRu: "Настоящее совершенное (Результат к этой минуте, жизненный опыт)",
    horizon: "present",
    aspect: "perfect",
    formula: "Subject + have / has + V3",
    formulaNeg: "Subject + haven't / hasn't + V3",
    formulaQuest: "Have / Has + Subject + V3?",
    coreMeaning: "Связь прошлого с настоящим: действие завершилось (когда — не важно), но его результат определяет текущий момент.",
    timeMarkers: ["already", "yet", "just", "recently", "so far", "ever / never"],
    readyChunk: "Have you had a chance to [verb] yet? I've already [V3]...",
    chunkRu: "«У тебя уже была возможность [сделать X]? Я уже [сделал Y]...»",
    sentences: [
      {
        en: "I've already deployed the security patch to staging; please verify it.",
        ru: "Я уже выкатил патч безопасности на стейдж; пожалуйста, проверьте.",
        context: "Свежий результат к этой минуте"
      },
      {
        en: "We haven't received the client's approval on the new design yet.",
        ru: "Мы пока еще не получили одобрение клиента по новому дизайну.",
        context: "Отсутствие ожидаемого результата"
      },
      {
        en: "We've run into an unexpected issue with the third-party OAuth provider.",
        ru: "Мы столкнулись с неожиданной проблемой со стороны внешнего OAuth-провайдера.",
        context: "Спокойное сообщение о баге"
      },
      {
        en: "Have you ever dealt with high-load database sharding before?",
        ru: "Тебе когда-нибудь раньше доводилось сталкиваться с шардингом БД под высокой нагрузкой?",
        context: "Вопрос об опыте в целом"
      }
    ],
    lifeTip: "Если в предложении есть точная дата или время (yesterday, in 2024, at 3 PM) — Present Perfect ЗАПРЕЩЕН, используйте Past Simple!"
  },
  {
    id: "present_perfect_continuous",
    tenseKey: "Present Perfect Continuous",
    nameEn: "Present Perfect Continuous",
    nameRu: "Длительное настоящее совершенное (Длительность от прошлого до сейчас)",
    horizon: "present",
    aspect: "perfect_continuous",
    formula: "Subject + have / has + been + V-ing",
    formulaNeg: "Subject + haven't / hasn't + been + V-ing",
    formulaQuest: "How long + have / has + Subject + been + V-ing?",
    coreMeaning: "Действие началось в прошлом, непрерывно длилось и либо все еще продолжается, либо его следы/усталость налицо прямо сейчас.",
    timeMarkers: ["for [hours/days]", "since [morning/Monday]", "all day", "lately"],
    readyChunk: "I've been working on [X] since [time] / for [duration]",
    chunkRu: "«Я вожусь с [X] еще со [времени] / на протяжении [стольких часов]»",
    sentences: [
      {
        en: "I've been troubleshooting this memory leak since 9 AM and haven't found the root cause.",
        ru: "Я ковыряю эту утечку памяти с 9 утра и до сих пор не нашел первопричину.",
        context: "Объяснение усталости и долгой работы"
      },
      {
        en: "We've been dealing with intermittent database timeouts all week.",
        ru: "Мы всю неделю воюем с периодическими таймаутами базы данных.",
        context: "Тянущаяся изматывающая проблема"
      },
      {
        en: "How long have you been waiting for the CI pipeline to complete?",
        ru: "Как давно ты уже ждешь, пока завершится этот пайплайн?",
        context: "Вопрос о времени ожидания"
      },
      {
        en: "She has been leading the frontend refactoring project for over six months.",
        ru: "Она руководит проектом рефакторинга фронтенда уже больше полугода.",
        context: "Продолжительный профессиональный трек"
      }
    ],
    lifeTip: "Фокусирует внимание не на результате (сделал/не сделал), а на затраченном времени и непрерывности процесса."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. PAST TENSES (ПРОШЕДШЕЕ ВРЕМЯ)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "past_simple",
    tenseKey: "Past Simple",
    nameEn: "Past Simple",
    nameRu: "Простое прошедшее (Факт в конкретный момент прошлого)",
    horizon: "past",
    aspect: "simple",
    formula: "Subject + V2 / Ved",
    formulaNeg: "Subject + didn't + V1",
    formulaQuest: "Did + Subject + V1?",
    coreMeaning: "Завершенное историческое действие в зафиксированный отрезок прошлого, не имеющее прямой связи с настоящим.",
    timeMarkers: ["yesterday", "last week", "in 2023", "two days ago", "when I was..."],
    readyChunk: "We decided to [verb] yesterday because [X]",
    chunkRu: "«Вчера мы приняли решение [сделать X], потому что [причина]»",
    sentences: [
      {
        en: "We released version 2.4 yesterday afternoon without any downtime.",
        ru: "Мы зарелизили версию 2.4 вчера во второй половине дня без единого сбоя.",
        context: "Конкретный отчет о прошлом"
      },
      {
        en: "Did you get a chance to discuss the architecture proposal with Alex yesterday?",
        ru: "Удалось ли тебе вчера обсудить архитектурное предложение с Алексом?",
        context: "Вопрос о факте в прошлом"
      },
      {
        en: "The script didn't execute properly because an environment variable was missing.",
        ru: "Скрипт не выполнился нормально, потому что отсутствовала переменная окружения.",
        context: "Разбор вчерашнего инцидента"
      },
      {
        en: "I noticed that error when I ran the integration tests last night.",
        ru: "Я заметил эту ошибку, когда прогонял интеграционные тесты прошлым вечером.",
        context: "Точный момент обнаружения"
      }
    ],
    lifeTip: "Рабочая лошадка любого рассказа о прошлом. Главный триггер — привязка к конкретному времени (yesterday, ago, last...)."
  },
  {
    id: "past_continuous",
    tenseKey: "Past Continuous",
    nameEn: "Past Continuous",
    nameRu: "Прошедшее длительное (Фон, процесс в момент времени, прерывание)",
    horizon: "past",
    aspect: "continuous",
    formula: "Subject + was / were + V-ing",
    formulaNeg: "Subject + wasn't / weren't + V-ing",
    formulaQuest: "Were / Was + Subject + V-ing?",
    coreMeaning: "Действие длилось в определенный момент в прошлом или служило фоном, на котором произошло короткое событие (Past Simple).",
    timeMarkers: ["at 5 PM yesterday", "while", "when [short action]", "all evening"],
    readyChunk: "I was in the middle of [V-ing] when [event happened]",
    chunkRu: "«Я был как раз в процессе [действия], когда внезапно [произошло событие]»",
    sentences: [
      {
        en: "I was in the middle of deploying the hotfix when the power went out.",
        ru: "Я был в самом разгаре деплоя хотфикса, когда внезапно отключилось питание.",
        context: "Прерванное фоновое действие"
      },
      {
        en: "I was just about to message you when your PR notification popped up.",
        ru: "Я как раз собирался тебе написать, когда всплыло уведомление о твоем PR.",
        context: "Совпадение / шаг до действия"
      },
      {
        en: "We were looking into migrating to GraphQL, but the overhead seemed too high.",
        ru: "Мы как раз присматривались к переходу на GraphQL, но накладные расходы показались слишком большими.",
        context: "Фоновое исследование идеи"
      },
      {
        en: "What were you working on at 3 PM when the database alert fired?",
        ru: "Над чем ты работал вчера в 15:00, когда сработал алерт базы данных?",
        context: "Уточнение процесса в точный момент"
      }
    ],
    lifeTip: "Идеально подходит для объяснений: «Почему ты не ответил?» — «I was interviewing a candidate»."
  },
  {
    id: "past_perfect",
    tenseKey: "Past Perfect",
    nameEn: "Past Perfect",
    nameRu: "Предпрошедшее (Действие случилось ДО другого момента в прошлом)",
    horizon: "past",
    aspect: "perfect",
    formula: "Subject + had + V3",
    formulaNeg: "Subject + hadn't + V3",
    formulaQuest: "Had + Subject + V3?",
    coreMeaning: "Указывает на действие, которое завершилось ДО другого действия или момента в прошлом. Настоящая машина времени назад.",
    timeMarkers: ["by the time", "before", "already", "until then", "never before"],
    readyChunk: "By the time [event happened], we had already [V3]...",
    chunkRu: "«К тому моменту как [произошло X], мы уже успели [сделать Y]»",
    sentences: [
      {
        en: "By the time the sync started, I had already fixed the critical bug.",
        ru: "К тому моменту как начался созвон, я уже пофиксил критический баг.",
        context: "Опережение графика / готовность"
      },
      {
        en: "We hadn't noticed the regression until several enterprise clients complained.",
        ru: "Мы не замечали регрессию до тех пор, пока несколько крупных клиентов не пожаловались.",
        context: "Предшествующее неведение"
      },
      {
        en: "They had already merged the branch before I had a chance to post my review.",
        ru: "Они уже влили ветку до того, как у меня появилась возможность оставить ревью.",
        context: "Конфликт последовательности событий"
      },
      {
        en: "Had you tested that edge case before deploying the service to production?",
        ru: "Ты протестировал этот крайний случай до того, как выкатил сервис на прод?",
        context: "Проверка предварительных действий"
      }
    ],
    lifeTip: "Используется ТОЛЬКО тогда, когда нужно подчеркнуть очередность: сначала случилось Had Done, а потом Did."
  },
  {
    id: "past_perfect_continuous",
    tenseKey: "Past Perfect Continuous",
    nameEn: "Past Perfect Continuous",
    nameRu: "Длительное предпрошедшее (Длительность до момента в прошлом)",
    horizon: "past",
    aspect: "perfect_continuous",
    formula: "Subject + had been + V-ing",
    formulaNeg: "Subject + hadn't been + V-ing",
    formulaQuest: "Had + Subject + been + V-ing?",
    coreMeaning: "Действие длилось на протяжении какого-то времени ДО определенной точки в прошлом и привело к тогдашнему результату.",
    timeMarkers: ["for months before", "had been doing since", "until finally"],
    readyChunk: "We had been working on [X] for [months] before we finally [shipped it]",
    chunkRu: "«Мы работали над [X] на протяжении [месяцев], прежде чем наконец [зарелизили это]»",
    sentences: [
      {
        en: "We had been working on that architectural migration for four months before we finally went live.",
        ru: "Мы работали над той архитектурной миграцией четыре месяца, прежде чем наконец запустились.",
        context: "Длительный ретроспективный путь"
      },
      {
        en: "The container crashed because it had been leaking memory for several days straight.",
        ru: "Контейнер упал, потому что из него несколько дней подряд непрерывно утекала память.",
        context: "Объяснение прошлой аварии"
      },
      {
        en: "He was completely exhausted because he had been debugging the kernel driver all night.",
        ru: "Он был полностью без сил, потому что всю ночь напролет отлаживал драйвер ядра.",
        context: "Причина прошлого состояния"
      },
      {
        en: "How long had they been debating the tech stack before management stepped in?",
        ru: "Как долго они спорили о технологическом стеке до того, как вмешалось руководство?",
        context: "Длительность конфликта в прошлом"
      }
    ],
    lifeTip: "В живой речи используется редко, но незаменим в серьезных технических отчетах (Post-Mortem reports)."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. FUTURE TENSES (БУДУЩЕЕ ВРЕМЯ)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "future_simple",
    tenseKey: "Future Simple",
    nameEn: "Future Simple",
    nameRu: "Простое будущее (Спонтанное решение, обещание, прогноз)",
    horizon: "future",
    aspect: "simple",
    formula: "Subject + will + V1",
    formulaNeg: "Subject + won't (will not) + V1",
    formulaQuest: "Will + Subject + V1?",
    coreMeaning: "Решение, принятое прямо в секунду речи, обещание помочь, твердая готовность или личное предположение о будущем.",
    timeMarkers: ["tomorrow", "next week", "in a minute", "I promise", "I think"],
    readyChunk: "I'll take care of [X] right after this call",
    chunkRu: "«Я возьму на себя [X] сразу после этого созвона»",
    sentences: [
      {
        en: "I'll take care of this ticket right after our standup ends.",
        ru: "Я займусь этим тикетом сразу после окончания дейлика.",
        context: "Спонтанное взятие задачи на митинге"
      },
      {
        en: "Don't worry, I'll make sure to double-check the database migration before executing it.",
        ru: "Не переживай, я обязательно перепроверю миграцию базы перед запуском.",
        context: "Обещание и гарантия ответственности"
      },
      {
        en: "I think this optimization will significantly decrease API latency.",
        ru: "Думаю, эта оптимизация существенно снизит задержку API.",
        context: "Профессиональный прогноз"
      },
      {
        en: "Won't this change break backward compatibility for mobile clients?",
        ru: "Разве это изменение не сломает обратную совместимость для мобилок?",
        context: "Предостерегающий вопрос о будущем"
      }
    ],
    lifeTip: "Не используйте 'will' для заранее распланированных дел. Если план уже в календаре — говорите 'I am meeting' или 'I am going to'."
  },
  {
    id: "future_continuous",
    tenseKey: "Future Continuous",
    nameEn: "Future Continuous",
    nameRu: "Будущее длительное (Процесс в конкретный момент будущего)",
    horizon: "future",
    aspect: "continuous",
    formula: "Subject + will be + V-ing",
    formulaNeg: "Subject + won't be + V-ing",
    formulaQuest: "Will + Subject + be + V-ing?",
    coreMeaning: "Действие, которое будет находиться в процессе развертывания в точно указанное время в будущем, либо вежливый вопрос о планах.",
    timeMarkers: ["at 3 PM tomorrow", "this time next week", "all day tomorrow"],
    readyChunk: "I'll be working on [X] between [time] and [time]",
    chunkRu: "«Я буду плотно сидеть над [X] в промежутке с [такого-то] до [такого-то времени]»",
    sentences: [
      {
        en: "I'll be monitoring the production logs between 2 PM and 4 PM during the cutover.",
        ru: "Я буду следить за логами прода с 14:00 до 16:00 во время переключения серверов.",
        context: "Плановое дежурство / интервал"
      },
      {
        en: "Don't schedule any meetings for Thursday afternoon; the team will be running stress tests.",
        ru: "Не ставь встречи на вторую половину четверга: команда будет гонять стресс-тесты.",
        context: "Предупреждение о занятости"
      },
      {
        en: "Will you be attending the architecture committee later today?",
        ru: "Ты будешь присутствовать сегодня на архитектурном комитете?",
        context: "Вежливый вопрос о планах коллеги"
      },
      {
        en: "This time next week, I'll be relaxing on vacation without my laptop.",
        ru: "В это же время на следующей неделе я буду отдыхать в отпуске без ноутбука.",
        context: "Приятное предвкушение процесса"
      }
    ],
    lifeTip: "Служит самым вежливым способом спросить: «Будешь ли ты делать X по своему обычному графику?» (Will you be going to the office?)."
  },
  {
    id: "future_perfect",
    tenseKey: "Future Perfect",
    nameEn: "Future Perfect",
    nameRu: "Будущее совершенное (Результат будет готов К дедлайну)",
    horizon: "future",
    aspect: "perfect",
    formula: "Subject + will have + V3",
    formulaNeg: "Subject + won't have + V3",
    formulaQuest: "Will + Subject + have + V3 + by [time]?",
    coreMeaning: "Действие завершится и даст конкретный осязаемый результат К определенной временной отсечке в будущем.",
    timeMarkers: ["by Friday", "by the end of the sprint", "by the time you join", "by next year"],
    readyChunk: "We will have finished [X] by [deadline]",
    chunkRu: "«Мы полностью закончим [X] к [такому-то сроку]»",
    sentences: [
      {
        en: "We will have closed all blockers by the end of the sprint on Friday.",
        ru: "Мы закроем все блокеры к концу спринта в пятницу.",
        context: "Железное обещание дедлайна"
      },
      {
        en: "By the time the clients log in tomorrow, the data migration will have finished.",
        ru: "К тому моменту как клиенты завтра зайдут в систему, миграция данных уже завершится.",
        context: "Готовность к приходу пользователей"
      },
      {
        en: "I will have completed the code review before our 2 PM sync.",
        ru: "Я полностью завершу код-ревью еще до нашего созвона в 14:00.",
        context: "Обязательство перед встречей"
      },
      {
        en: "Will you have finished the draft proposal by tomorrow morning?",
        ru: "Успеешь ли ты подготовить черновик предложения к завтрашнему утру?",
        context: "Вопрос о соблюдении дедлайна"
      }
    ],
    lifeTip: "Главный маркер — предлог BY (к такому-то моменту). Звучит максимально солидно в общении с менеджерами и стейкхолдерами."
  },
  {
    id: "future_perfect_continuous",
    tenseKey: "Future Perfect Continuous",
    nameEn: "Future Perfect Continuous",
    nameRu: "Длительное будущее совершенное (Стаж / продолжительность к моменту)",
    horizon: "future",
    aspect: "perfect_continuous",
    formula: "Subject + will have been + V-ing",
    formulaNeg: "Subject + won't have been + V-ing",
    formulaQuest: "How long + will + you + have been + V-ing + by [time]?",
    coreMeaning: "Подсчет длительности или стажа, который накопится к определенной точке в будущем.",
    timeMarkers: ["by next month ... for [duration]", "by 2027 ... for 5 years"],
    readyChunk: "By [date], I will have been working here for [duration]",
    chunkRu: "«К [дате] исполнится ровно [срок], как я работаю здесь»",
    sentences: [
      {
        en: "By next November, I will have been working at this company for exactly five years.",
        ru: "В следующем ноябре исполнится ровно пять лет, как я работаю в этой компании.",
        context: "Подсчет профессионального стажа"
      },
      {
        en: "By midnight, the stress test will have been running continuously for 48 hours.",
        ru: "К полуночи стресс-тест будет непрерывно крутиться уже ровно 48 часов.",
        context: "Фиксация длительности теста"
      },
      {
        en: "By the time we launch, we will have been developing this product for over a year.",
        ru: "К моменту запуска исполнится больше года, как мы разрабатываем этот продукт.",
        context: "Ретроспективная оценка проекта"
      }
    ],
    lifeTip: "Редкая, но очень впечатляющая конструкция для ретроспектив и празднования профессиональных юбилеев."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. SPOKEN ESSENTIALS (КАК НА САМОМ ДЕЛЕ ГОВОРЯТ НОСИТЕЛИ)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "be_going_to",
    tenseKey: "Be Going To",
    nameEn: "Be Going To (Intention)",
    nameRu: "Намерение и план (Запланировано заранее)",
    horizon: "spoken",
    aspect: "modal",
    formula: "Subject + am/is/are + going to + V1",
    formulaNeg: "Subject + am/is/are + not + going to + V1",
    formulaQuest: "Are / Is + Subject + going to + V1?",
    coreMeaning: "Заранее принятое решение, намерение или очевидный исход на основе текущих признаков.",
    timeMarkers: ["tonight", "this weekend", "soon", "next sprint"],
    readyChunk: "We're going to [verb] in the upcoming sprint",
    chunkRu: "«Мы планируем / намерены [сделать X] в следующем спринте»",
    sentences: [
      {
        en: "We're going to refactor the payment gateway during the upcoming sprint.",
        ru: "Мы собираемся отрефакторить платежный шлюз в следующем спринте.",
        context: "Командный план на спринт"
      },
      {
        en: "Look at those error spikes; the server is going to crash if we don't scale it.",
        ru: "Посмотри на эти всплески ошибок: сервер вот-вот упадет, если мы его не масштабируем.",
        context: "Очевидный прогноз по признакам"
      },
      {
        en: "Are you going to bring this up during the retrospective?",
        ru: "Ты собираешься поднять этот вопрос на ретроспективе?",
        context: "Вопрос о намерении"
      }
    ],
    lifeTip: "В беглой разговорной речи 'going to' почти всегда звучит как 'gonna' (/ˈɡənə/)."
  },
  {
    id: "present_continuous_future",
    tenseKey: "Present Continuous (Calendar Future)",
    nameEn: "Present Continuous for Future",
    nameRu: "Календарное будущее (100% зафиксированная договоренность)",
    horizon: "spoken",
    aspect: "modal",
    formula: "Subject + am/is/are + V-ing + (time/place)",
    formulaNeg: "Subject + am/is/are not + V-ing",
    formulaQuest: "Are / Is + Subject + V-ing tomorrow?",
    coreMeaning: "Договоренность с другим человеком или бронь в календаре/билетах. Отменить почти невозможно.",
    timeMarkers: ["tomorrow morning", "at 3 PM", "next Tuesday", "tonight"],
    readyChunk: "I'm meeting with [person] tomorrow to [verb]",
    chunkRu: "«Я встречаюсь с [человеком] завтра, чтобы [сделать X] (встреча в календаре)»",
    sentences: [
      {
        en: "I'm having a 1-on-1 with our engineering director tomorrow at 11 AM.",
        ru: "У меня встреча 1-на-1 с техническим директором завтра в 11:00.",
        context: "Зафиксированная встреча в календаре"
      },
      {
        en: "We're launching the public beta next Tuesday morning.",
        ru: "Мы запускаем публичную бету в следующий вторник утром.",
        context: "Официально утвержденный релиз"
      },
      {
        en: "I'm flying to Berlin for the conference on Friday.",
        ru: "В пятницу я улетаю в Берлин на конференцию (билеты на руках).",
        context: "Поездка по билетам"
      }
    ],
    lifeTip: "Носители предпочитают эту форму вместо 'will', когда речь идет о человеческих планах и встречах."
  },
  {
    id: "used_to",
    tenseKey: "Used To (Past Habits)",
    nameEn: "Used To / Would",
    nameRu: "Прошлые привычки (Было раньше, но больше нет)",
    horizon: "spoken",
    aspect: "modal",
    formula: "Subject + used to + V1 (отрицание: didn't use to)",
    formulaNeg: "Subject + didn't use to + V1",
    formulaQuest: "Did + Subject + use to + V1?",
    coreMeaning: "Привычное регулярное действие или состояние в прошлом, которое полностью прекратилось в настоящем.",
    timeMarkers: ["in the past", "before", "when I worked at..."],
    readyChunk: "We used to [do X], but now we [do Y]",
    chunkRu: "«Раньше мы обычно [делали X], а теперь [делаем Y]»",
    sentences: [
      {
        en: "We used to manage our own bare-metal servers, but now we run everything on AWS.",
        ru: "Раньше мы сами обслуживали железные сервера, а теперь крутим всё в AWS.",
        context: "Эволюция технологического процесса"
      },
      {
        en: "I didn't use to write unit tests, but now I can't imagine coding without them.",
        ru: "Раньше я не писал юнит-тесты, а теперь не представляю кодинг без них.",
        context: "Изменение профессиональной привычки"
      },
      {
        en: "Did you use to work with monoliths before adopting microservices?",
        ru: "Ты раньше работал с монолитами до перехода на микросервисы?",
        context: "Вопрос о прошлом бэкграунде"
      }
    ],
    lifeTip: "Не путайте с 'be used to doing' (быть привыкшим к чему-то в настоящем). 'Used to do' — это ТОЛЬКО то, что закончилось."
  },
  {
    id: "was_supposed_to",
    tenseKey: "Was Supposed To",
    nameEn: "Was Supposed To (Broken Plan)",
    nameRu: "Сорвавшийся план (Должно было быть, но сорвалось)",
    horizon: "spoken",
    aspect: "modal",
    formula: "Subject + was / were + supposed to + V1",
    formulaNeg: "Subject + wasn't / weren't + supposed to + V1",
    formulaQuest: "Were / Was + Subject + supposed to + V1?",
    coreMeaning: "Действие, которое планировалось, ожидалось или входило в договоренности, но не состоялось по обстоятельствам.",
    timeMarkers: ["originally", "yesterday", "earlier today"],
    readyChunk: "I was supposed to [verb], but [unexpected blocker]",
    chunkRu: "«Я должен был [сделать X], но [возник непредвиденный блокер]»",
    sentences: [
      {
        en: "I was supposed to present the quarterly roadmap today, but the meeting got rescheduled.",
        ru: "Я должен был презентовать квартальный роадмап сегодня, но встречу перенесли.",
        context: "Оправдание сорвавшегося плана"
      },
      {
        en: "The release was supposed to happen last night, but we caught a critical regression.",
        ru: "Релиз должен был состояться прошлым вечером, но мы поймали критическую регрессию.",
        context: "Объяснение задержки деплоя"
      },
      {
        en: "Were we supposed to invite the security team to this sync?",
        ru: "Разве мы не должны были позвать команду безопасности на этот синк?",
        context: "Уточнение забытой договоренности"
      }
    ],
    lifeTip: "Один из самых частых дипломатичных чанков на созвонах для объяснения, почему что-то пошло не по плану без самобичевания."
  }
] as const;
