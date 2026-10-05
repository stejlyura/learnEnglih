import { TenseChunkItem } from "./types";

export const TENSE_CHUNKS_DATA: readonly TenseChunkItem[] = [
  // ==========================================
  // Блок 1: Present Perfect (Жизненный опыт и свежие события)
  // ==========================================
  {
    id: "tense-1",
    number: "ЧАНК #1",
    block: "Блок 1 • Чанки 1–4",
    tenseName: "Present Perfect (Свежие результаты)",
    title: "I've already [past participle] [X]",
    trans: "«Я уже сделал [что-то] к этой минуте»",
    exEn: "I've already sent over the revised proposal with the custom discount.",
    exRu: "Я уже отправил обновленное коммерческое предложение с согласованной скидкой.",
    tip: "Идеально для утренней планерки продаж, когда директор ждет отправки КП крупному клиенту.",
  },
  {
    id: "tense-2",
    number: "ЧАНК #2",
    block: "Блок 1 • Чанки 1–4",
    tenseName: "Present Perfect (Вопрос о статусе)",
    title: "Have you had a chance to [verb] yet?",
    trans: "«У тебя уже была возможность сделать / глянуть [X]?»",
    exEn: "Have you had a chance to review the terms of the Master Services Agreement yet?",
    exRu: "У вас уже была возможность ознакомиться с условиями рамочного соглашения (MSA)?",
    tip: "Деликатный follow-up клиенту или юристам вместо навязчивого «Did you sign it?»",
  },
  {
    id: "tense-3",
    number: "ЧАНК #3",
    block: "Блок 1 • Чанки 1–4",
    tenseName: "Present Perfect (Неожиданные трудности)",
    title: "We've run into an issue with [X]",
    trans: "«Мы столкнулись со сложностью / проблемой в [X]»",
    exEn: "We've run into an issue with their procurement department regarding net-60 payment terms.",
    exRu: "Мы столкнулись со сложностью в отделе закупок клиента по поводу 60-дневной отсрочки платежа.",
    tip: "Спокойный доклад руководителю продаж о заминке на финальном этапе согласования сделки.",
  },
  {
    id: "tense-4",
    number: "ЧАНК #4",
    block: "Блок 1 • Чанки 1–4",
    tenseName: "Present Perfect (Отсутствие результата)",
    title: "I haven't seen [X] yet",
    trans: "«Я пока еще не видел [X] / до меня это не дошло»",
    exEn: "I haven't seen the final sign-off from their CFO yet, so let's hold off on onboarding.",
    exRu: "Я пока еще не видел финального подтверждения от их финдиректора, так что придержим старт онбординга.",
    tip: "Защита команды от досрочного старта работ до твердого юридического закрытия сделки.",
  },

  // ==========================================
  // Блок 2: Present Perfect Continuous (Продолжительность)
  // ==========================================
  {
    id: "tense-5",
    number: "ЧАНК #5",
    block: "Блок 2 • Чанки 5–7",
    tenseName: "Present Perfect Continuous (Усталость и фокус)",
    title: "I've been working on [X] all morning",
    trans: "«Я все утро занимаюсь / прорабатываю [X]»",
    exEn: "I've been working on tailoring the enterprise pitch deck all morning.",
    exRu: "Я всё утро дорабатываю коммерческую презентацию под крупного корпоративного клиента.",
    tip: "Показывает глубокую индивидуальную подготовку перед ключевым демо-звонком.",
  },
  {
    id: "tense-6",
    number: "ЧАНК #6",
    block: "Блок 2 • Чанки 5–7",
    tenseName: "Present Perfect Continuous (Тянущаяся проблема)",
    title: "We've been dealing with [X] since [time]",
    trans: "«Мы работаем с этой ситуацией еще с [такого-то времени]»",
    exEn: "We've been dealing with budget freeze pushback on this account since last quarter.",
    exRu: "Мы отрабатываем возражение о заморозке бюджетов по этой сделке еще с прошлого квартала.",
    tip: "Подчеркивает затянувшийся цикл B2B-продажи и сопротивление клиента на этапе согласования.",
  },
  {
    id: "tense-7",
    number: "ЧАНК #7",
    block: "Блок 2 • Чанки 5–7",
    tenseName: "Present Perfect Continuous (Выявление болей клиента)",
    title: "How long have you been dealing with [pain point]?",
    trans: "«Как давно вы сталкиваетесь с этой проблемой / неэффективностью?»",
    exEn: "How long have you been dealing with this drop in pipeline conversion?",
    exRu: "Как давно вы наблюдаете этот спад конверсии в вашей воронке продаж?",
    tip: "Классический SPIN-вопрос сейлз-менеджера на этапе квалификации болей (Discovery call).",
  },

  // ==========================================
  // Блок 3: Past Continuous (Фон и прерывание)
  // ==========================================
  {
    id: "tense-8",
    number: "ЧАНК #8",
    block: "Блок 3 • Чанки 8–10",
    tenseName: "Past Continuous (Прерванное действие)",
    title: "I was in the middle of [verb-ing] when [X] happened",
    trans: "«Я был прямо посреди процесса [X], когда произошло [Y]»",
    exEn: "I was in the middle of presenting the pricing tiers when their VP of Operations joined the call.",
    exRu: "Я был прямо посреди разбора тарифных планов, когда к созвону подключился их вице-президент по операциям.",
    tip: "Описание динамичного питча, когда на встречу неожиданно заходит главный Decision Maker.",
  },
  {
    id: "tense-9",
    number: "ЧАНК #9",
    block: "Блок 3 • Чанки 8–10",
    tenseName: "Past Continuous (В шаге от действия)",
    title: "I was just about to [verb] when...",
    trans: "«Я как раз собирался [сделать X], когда...»",
    exEn: "I was just about to send the follow-up email when the client called back to confirm the order.",
    exRu: "Я как раз собирался отправить фоллоу-ап, когда клиент сам перезвонил подтвердить сделку.",
    tip: "Идеальная ситуация опережающего закрытия сделки до отправки напоминания.",
  },
  {
    id: "tense-10",
    number: "ЧАНК #10",
    block: "Блок 3 • Чанки 8–10",
    tenseName: "Past Continuous (Фоновое обсуждение)",
    title: "We were looking into [X], but...",
    trans: "«Мы как раз рассматривали [X], но...»",
    exEn: "We were looking into offering an extended pilot, but they decided to move straight to an annual contract.",
    exRu: "Мы как раз рассматривали вариант продленного пилота, но они решили сразу подписать годовой контракт.",
    tip: "Позитивный сценарий: клиент готов платить сразу без затяжных бесплатных тестов.",
  },

  // ==========================================
  // Блок 4: Практические Обязательства и Срывы Планов
  // ==========================================
  {
    id: "tense-11",
    number: "ЧАНК #11",
    block: "Блок 4 • Чанки 11–12",
    tenseName: "Future Responsibility (Взятие ответственности)",
    title: "I'll make sure to [verb]...",
    trans: "«Я обязательно сделаю / проконтролирую [X]»",
    exEn: "I'll make sure to align with our solutions engineer before sending the customized quote.",
    exRu: "Я обязательно согласую детали с нашим техническим пресейлом перед отправкой кастомного счета.",
    tip: "Взятие личной ответственности за точность коммерческого предложения перед заказчиком.",
  },
  {
    id: "tense-12",
    number: "ЧАНК #12",
    block: "Блок 4 • Чанки 11–12",
    tenseName: "Broken Expectation (Сорвавшийся план)",
    title: "I was supposed to [verb], but [blocker]...",
    trans: "«Я должен был [сделать X], но [возник блокер]...»",
    exEn: "I was supposed to close this account by Friday, but their legal team requested custom compliance terms.",
    exRu: "Я должен был закрыть сделку до пятницы, но юристы клиента запросили индивидуальные комплаенс-условия.",
    tip: "Профессиональное объяснение переноса даты закрытия (Close Date) в CRM без самооправданий.",
  },
] as const;
