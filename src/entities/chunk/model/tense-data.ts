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
    exEn: "I've already patched the vulnerability on staging.",
    exRu: "Я уже пропатчил уязвимость на стейджинге.",
    tip: "Используется, когда действие только что завершилось и результат актуален прямо сейчас.",
  },
  {
    id: "tense-2",
    number: "ЧАНК #2",
    block: "Блок 1 • Чанки 1–4",
    tenseName: "Present Perfect (Вопрос о статусе)",
    title: "Have you had a chance to [verb] yet?",
    trans: "«У тебя уже была возможность сделать / глянуть [X]?»",
    exEn: "Have you had a chance to look over the new API contract yet?",
    exRu: "У тебя получилось уже глянуть новый контракт API?",
    tip: "Идеально мягкий вопрос вместо грубого «Did you do it?»",
  },
  {
    id: "tense-3",
    number: "ЧАНК #3",
    block: "Блок 1 • Чанки 1–4",
    tenseName: "Present Perfect (Неожиданные трудности)",
    title: "We've run into an issue with [X]",
    trans: "«Мы столкнулись со сложностью / проблемой в [X]»",
    exEn: "We've run into an issue with CORS on the new subdomain.",
    exRu: "Мы наткнулись на проблему с CORS на новом поддомене.",
    tip: "Спокойное сообщение о проблеме без паники.",
  },
  {
    id: "tense-4",
    number: "ЧАНК #4",
    block: "Блок 1 • Чанки 1–4",
    tenseName: "Present Perfect (Отсутствие результата)",
    title: "I haven't seen [X] yet",
    trans: "«Я пока еще не видел [X] / до меня это не дошло»",
    exEn: "I haven't seen the updated design mockups yet, could you share the link?",
    exRu: "Я еще не видел обновленные макеты, скинешь ссылку?",
    tip: "Естественный ответ, когда вас спрашивают о том, что вы еще не успели посмотреть.",
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
    trans: "«Я все утро занимаюсь / пилю [X]»",
    exEn: "I've been working on optimizing SQL queries all morning.",
    exRu: "Я все утро оптимизирую SQL-запросы.",
    tip: "Объясняет ваше текущее состояние через длительное действие.",
  },
  {
    id: "tense-6",
    number: "ЧАНК #6",
    block: "Блок 2 • Чанки 5–7",
    tenseName: "Present Perfect Continuous (Тянущаяся проблема)",
    title: "We've been dealing with [X] since [time]",
    trans: "«Мы мучаемся с этой ситуацией еще с [такого-то времени]»",
    exEn: "We've been dealing with these connection drops since yesterday's release.",
    exRu: "Мы воюем с этими обрывами соединений со вчерашнего релиза.",
    tip: "Подчеркивает непрерывность проблемы и то, сколько сил она отнимает.",
  },
  {
    id: "tense-7",
    number: "ЧАНК #7",
    block: "Блок 2 • Чанки 5–7",
    tenseName: "Present Perfect Continuous (Вопрос о длительности)",
    title: "How long have you been seeing this error?",
    trans: "«Как давно у вас воспроизводится эта ошибка?»",
    exEn: "How long have you been seeing this 504 gateway timeout in production?",
    exRu: "Как давно вы наблюдаете этот 504-й таймаут на проде?",
    tip: "Самый живой способ спросить о длительности бага или ожидания.",
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
    exEn: "I was in the middle of running migrations when the database disconnected.",
    exRu: "Я был прямо посреди наката миграций, когда отвалилась база данных.",
    tip: "Идеально объясняет внезапное прерывание вашего занятия.",
  },
  {
    id: "tense-9",
    number: "ЧАНК #9",
    block: "Блок 3 • Чанки 8–10",
    tenseName: "Past Continuous (В шаге от действия)",
    title: "I was just about to [verb] when...",
    trans: "«Я как раз собирался [сделать X], когда...»",
    exEn: "I was just about to ping you when your message popped up in Slack.",
    exRu: "Я как раз собирался написать тебе, когда твое сообщение всплыло в слаке.",
    tip: "Удивительное совпадение или объяснение, почему вы не успели.",
  },
  {
    id: "tense-10",
    number: "ЧАНК #10",
    block: "Блок 3 • Чанки 8–10",
    tenseName: "Past Continuous (Фоновое обсуждение)",
    title: "We were looking into [X], but...",
    trans: "«Мы как раз исследовали [X], но...»",
    exEn: "We were looking into Kafka partitions, but higher priority bugs came in.",
    exRu: "Мы как раз изучали партиции в Кафке, но прилетели более горящие баги.",
    tip: "Объяснение, почему идея отпала в процессе изучения.",
  },

  // ==========================================
  // Блок 4: Практические Обязательства и Срывы Планов (Только то, что реально нужно)
  // ==========================================
  {
    id: "tense-11",
    number: "ЧАНК #11",
    block: "Блок 4 • Чанки 11–12",
    tenseName: "Future Responsibility (Взятие ответственности)",
    title: "I'll make sure to [verb]...",
    trans: "«Я обязательно сделаю / проконтролирую [X]»",
    exEn: "I'll make sure to check the logs right after the call.",
    exRu: "Я обязательно проверю логи сразу после созвона.",
    tip: "Взятие личной ответственности на митинге без лишней воды.",
  },
  {
    id: "tense-12",
    number: "ЧАНК #12",
    block: "Блок 4 • Чанки 11–12",
    tenseName: "Broken Expectation (Сорвавшийся план)",
    title: "I was supposed to [verb], but [blocker]...",
    trans: "«Я должен был [сделать X], но [возник блокер]...»",
    exEn: "I was supposed to finish this yesterday, but the API was down.",
    exRu: "Я должен был закончить это вчера, но лежал API.",
    tip: "Дипломатичное объяснение задержки без самобичевания.",
  },
] as const;
