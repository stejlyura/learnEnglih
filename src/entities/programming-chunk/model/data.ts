import { ProgrammingChunkItem } from "./types";

export const PROGRAMMING_CHUNKS: readonly ProgrammingChunkItem[] = [
  // ==========================================
  // JAVASCRIPT: MECHANICS
  // ==========================================
  {
    id: "js-closure-lexical-encapsulation",
    stack: "javascript",
    stackName: "JavaScript",
    category: "mechanics",
    categoryName: "Механики движка & Память",
    title: "Инкапсуляция приватного состояния через Lexical Scope",
    subtitle: "Безопасное создание изолированного состояния без утечек во внешнюю область видимости",
    level: "mid_to_senior",
    cognitiveTrap: "Хранение флагов и счетчиков в глобальных переменных модуля или мутация полей объекта без контроля инвариантов.",
    mentalModel: "Функция возвращает объект-интерфейс, сохраняющий ссылку на Lexical Record родительской функции. Переменная недоступна снаружи ни через какие свойства.",
    codeSnippet: `interface Counter {
  readonly increment: () => number;
  readonly decrement: () => number;
  readonly get: () => number;
  readonly reset: () => void;
}

export const createCounter = (initialValue: number = 0): Counter => {
  let count = initialValue;

  return {
    increment: (): number => ++count,
    decrement: (): number => --count,
    get: (): number => count,
    reset: (): void => {
      count = initialValue;
    },
  };
};`,
    keyTakeaways: [
      "Замыкание удерживает область видимости до тех пор, пока жив хотя бы один замыкающий метод",
      "Приватность гарантирована на уровне спецификации ECMAScript без runtime-хаков",
      "Идеально для инкапсуляции токенов, таймеров и счетчиков повторных попыток",
    ],
    realWorldUseCase: "Инкапсуляция рефреш-токенов в памяти браузера без сохранения в глобальном window или LocalStorage.",
    tags: ["closure", "lexical-scope", "encapsulation", "state"],
    practiceDrill: {
      challenge: "Создайте фабрику createRateLimiter(limit: number, intervalMs: number), отслеживающую вызовы в замыкании.",
      expectedOutput: "Возвращает функцию canExecute(): boolean, которая возвращает true при непревышении лимита.",
      hint: "Храните массив меток времени в лексической области и фильтруйте их по (Date.now() - intervalMs).",
    },
  },
  {
    id: "js-microtask-queue-drain",
    stack: "javascript",
    stackName: "JavaScript",
    category: "mechanics",
    categoryName: "Механики движка & Память",
    title: "Event Loop & Microtask Queue Drain (queueMicrotask)",
    subtitle: "Гарантия выполнения колбэка сразу после текущего синхронного тика до перерисовки браузера",
    level: "mid_to_senior",
    cognitiveTrap: "Использование setTimeout(fn, 0) для откладывания вычислений. Это откладывает выполнение в Macrotask Queue (минимум 4мс задержки) и вызывает дергание кадра.",
    mentalModel: "Очередь микрозадач вычищается до дна (drain to exhaustion) прямо перед тем, как движок перейдет к следующей макрозадаче или стадии рендеринга.",
    codeSnippet: `export const scheduleBatchedUpdate = (callback: () => void): void => {
  let isScheduled = false;

  const notify = (): void => {
    if (isScheduled) return;
    isScheduled = true;

    queueMicrotask(() => {
      try {
        callback();
      } finally {
        isScheduled = false;
      }
    });
  };

  notify();
};`,
    keyTakeaways: [
      "queueMicrotask быстрее любого setTimeout и не пропускает кадры анимации",
      "Очередь микротасок опустошается полностью до следующего тика event loop",
      "Осторожно: рекурсивный вызов queueMicrotask заблокирует рендеринг страницы (Microtask Starvation)",
    ],
    realWorldUseCase: "Батчинг десятков синхронных мутаций состояния в одну общую операцию до отрисовки в DOM.",
    tags: ["event-loop", "microtasks", "queueMicrotask", "batching"],
  },
  {
    id: "js-weakmap-leak-free-cache",
    stack: "javascript",
    stackName: "JavaScript",
    category: "mechanics",
    categoryName: "Механики движка & Память",
    title: "Кэш объектов без утечек памяти через WeakMap",
    subtitle: "Ассоциация метаданных с объектами DOM или сущностями без предотвращения Garbage Collection",
    level: "mid_to_senior",
    cognitiveTrap: "Использование обычного Map<object, data>, из-за которого удаленные из DOM элементы навсегда остаются в оперативной памяти (Memory Leak).",
    mentalModel: "WeakMap удерживает слабые ссылки на ключи-объекты. Когда объект уничтожен во внешнем коде, запись в WeakMap собирается GC автоматически.",
    codeSnippet: `export const createWeakMemoizer = <K extends object, V>(
  compute: (key: K) => V
): ((key: K) => V) => {
  const cache = new WeakMap<K, V>();

  return (key: K): V => {
    const existing = cache.get(key);
    if (existing !== undefined) {
      return existing;
    }

    const computed = compute(key);
    cache.set(key, computed);
    return computed;
  };
};`,
    keyTakeaways: [
      "Ключами WeakMap могут быть только объекты (или нерегистрируемые символы)",
      "Не итерируется (нет .keys(), .values(), .size), что защищает от несанкционированного доступа",
      "Гарантирует отсутствие утечек при отслеживании метаданных DOM-нод",
    ],
    realWorldUseCase: "Кэширование расчетных геометрических размеров (BoundingClientRect) или парсинга конфигураций для элементов интерфейса.",
    tags: ["weakmap", "memory-management", "garbage-collector", "cache"],
  },

  // ==========================================
  // JAVASCRIPT: ASYNC
  // ==========================================
  {
    id: "js-abort-controller-timeout",
    stack: "javascript",
    stackName: "JavaScript",
    category: "async",
    categoryName: "Асинхронная архитектура",
    title: "AbortController с таймаутом и каскадной отменой",
    subtitle: "Надежная отмена сетевых запросов и очистка ресурсов без зависших сокетов",
    level: "mid_to_senior",
    cognitiveTrap: "Игнорирование отмены запросов или попытка отменить промис через внешние булевы флаги `isCancelled = true`, продолжающие расходовать трафик.",
    mentalModel: "AbortSignal передается во все асинхронные примитивы (fetch, event listeners). При сигнале abort дерево операций мгновенно сворачивается.",
    codeSnippet: `export const fetchWithTimeout = async <T>(
  url: string,
  timeoutMs: number = 8000,
  options: RequestInit = {}
): Promise<T> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(\`HTTP Error: \${response.status} \${response.statusText}\`);
    }

    return (await response.json()) as T;
  } catch (error: unknown) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error(\`Request to \${url} timed out after \${timeoutMs}ms\`);
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
};`,
    keyTakeaways: [
      "Всегда очищайте setTimeout в finally-блоке для предотвращения утечек таймеров",
      "Проверяйте DOMException с error.name === 'AbortError' для разграничения таймаута и сбоя сети",
      "AbortSignal.any([signal1, signal2]) в современном JS позволяет объединять несколько источников отмены",
    ],
    realWorldUseCase: "Предотвращение зависших запросов в микросервисах и автоотмена предыдущего поиска при вводе нового символа.",
    tags: ["abort-controller", "async", "fetch", "timeout", "cancellation"],
  },
  {
    id: "js-async-retry-exponential-backoff",
    stack: "javascript",
    stackName: "JavaScript",
    category: "async",
    categoryName: "Асинхронная архитектура",
    title: "Async Retry с экспоненциальной задержкой и Jitter",
    subtitle: "Устойчивый к сбоям повтор ненадежных асинхронных операций без шторма запросов (Thundering Herd)",
    level: "mid_to_senior",
    cognitiveTrap: "Повтор запроса сразу в цикле без пауз или с фиксированным интервалом, что окончательно добивает упавший бэкенд.",
    mentalModel: "Пауза растет экспоненциально: baseDelay * 2^attempt, плюс случайный 'шум' (jitter) для размытия одновременных повторов от тысяч клиентов.",
    codeSnippet: `export interface RetryOptions {
  readonly retries?: number;
  readonly baseDelayMs?: number;
  readonly maxDelayMs?: number;
  readonly shouldRetry?: (error: unknown) => boolean;
}

export const retryWithBackoff = async <T>(
  operation: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> => {
  const {
    retries = 3,
    baseDelayMs = 300,
    maxDelayMs = 4000,
    shouldRetry = () => true,
  } = options;

  let attempt = 0;

  while (attempt < retries) {
    try {
      return await operation();
    } catch (error: unknown) {
      attempt += 1;
      if (attempt >= retries || !shouldRetry(error)) {
        throw error;
      }

      const exponentialDelay = baseDelayMs * Math.pow(2, attempt - 1);
      const jitter = Math.random() * (baseDelayMs * 0.5);
      const finalDelay = Math.min(exponentialDelay + jitter, maxDelayMs);

      await new Promise<void>((resolve) => setTimeout(resolve, finalDelay));
    }
  }

  throw new Error("Retry exhausted unexpectedly");
};`,
    keyTakeaways: [
      "Jitter (случайный разброс) критически важен в распределенных системах",
      "Условие shouldRetry позволяет не повторять 4xx клиентские ошибки (например, 401 или 404)",
      "Ограничение maxDelayMs предотвращает бесконечно долгие паузы",
    ],
    realWorldUseCase: "Вызовы платежных шлюзов, загрузка критичных чанков и транзакции в базах данных.",
    tags: ["retry", "exponential-backoff", "resilience", "async"],
  },
  {
    id: "js-promise-partition-settled",
    stack: "javascript",
    stackName: "JavaScript",
    category: "async",
    categoryName: "Асинхронная архитектура",
    title: "Типобезопасное разделение результатов Promise.allSettled",
    subtitle: "Сбор всех успешных и неуспешных исходов массива параллельных задач",
    level: "junior_to_mid",
    cognitiveTrap: "Использование Promise.all, когда падение одной второстепенной задачи рушит всю цепочку и теряет результаты выполненных задач.",
    mentalModel: "Promise.allSettled никогда не реджектится. Разделяем массив исходов через предикаты сужения типов (type narrowing).",
    codeSnippet: `export interface PartitionResult<T> {
  readonly successes: readonly T[];
  readonly failures: readonly unknown[];
}

export const partitionSettled = async <T>(
  promises: readonly Promise<T>[]
): Promise<PartitionResult<T>> => {
  const results = await Promise.allSettled(promises);

  const successes: T[] = [];
  const failures: unknown[] = [];

  for (const item of results) {
    if (item.status === "fulfilled") {
      successes.push(item.value);
    } else {
      failures.push(item.reason);
    }
  }

  return { successes, failures };
};`,
    keyTakeaways: [
      "Promise.allSettled дает 100% гарантию обработки каждого элемента массива",
      "Позволяет логировать ошибки без прерывания пользовательского сценария",
      "Предотвращает частичные падения дашбордов и виджетов",
    ],
    realWorldUseCase: "Параллельная загрузка виджетов на главной странице, где сбой погоды не должен ломать отображение новостей.",
    tags: ["promise", "allSettled", "async", "resilience"],
  },

  // ==========================================
  // JAVASCRIPT: UTILITIES
  // ==========================================
  {
    id: "js-debounce-leading-trailing",
    stack: "javascript",
    stackName: "JavaScript",
    category: "utilities",
    categoryName: "Базовые паттерны & Функции",
    title: "Производительный Debounce с Leading, Trailing и Cancel",
    subtitle: "Управление частотой вызовов обработчиков событий ввода и ресайза",
    level: "mid_to_senior",
    cognitiveTrap: "Примитивный дебаунс без метода `.cancel()`, приводящий к выполнению отложенных колбэков после размонтирования компонента.",
    mentalModel: "Таймер обновляется при каждом триггере. Функция держится в буфере до наступления паузы нужной длительности.",
    codeSnippet: `export interface DebouncedFunction<TArgs extends readonly unknown[]> {
  (...args: TArgs): void;
  cancel: () => void;
  flush: () => void;
}

export const debounce = <TArgs extends readonly unknown[]>(
  fn: (...args: TArgs) => void,
  waitMs: number,
  options: { readonly leading?: boolean } = {}
): DebouncedFunction<TArgs> => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: TArgs | null = null;

  const debounced = (...args: TArgs): void => {
    lastArgs = args;
    const callNow = options.leading && timeoutId === null;

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!options.leading && lastArgs !== null) {
        fn(...lastArgs);
        lastArgs = null;
      }
    }, waitMs);

    if (callNow) {
      fn(...args);
      lastArgs = null;
    }
  };

  debounced.cancel = (): void => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    lastArgs = null;
  };

  debounced.flush = (): void => {
    if (timeoutId !== null && lastArgs !== null) {
      clearTimeout(timeoutId);
      fn(...lastArgs);
      timeoutId = null;
      lastArgs = null;
    }
  };

  return debounced;
};`,
    keyTakeaways: [
      "Флаг leading дает мгновенный отклик на первый клик, защищая от двойного нажатия кнопки",
      "Метод cancel обязателен для очистки в React useEffect",
      "Метод flush позволяет форсировать отправку данных при уходе со страницы",
    ],
    realWorldUseCase: "Поиск с автодополнением (Search autocomplete), обработчик resize окна и автосохранение драфтов.",
    tags: ["debounce", "utilities", "performance", "events"],
  },
  {
    id: "js-pipe-compose-transformation",
    stack: "javascript",
    stackName: "JavaScript",
    category: "utilities",
    categoryName: "Базовые паттерны & Функции",
    title: "Функциональный конвейер (Pipe / Compose)",
    subtitle: "Читаемая трансформация данных слева направо без глубоко вложенных скобок",
    level: "junior_to_mid",
    cognitiveTrap: "Вложенные вызовы вроде fn3(fn2(fn1(value))), которые читаются шиворот-навыворот изнутри наружу.",
    mentalModel: "Поток данных течет по конвейеру, где выход каждой функции становится входом для следующей.",
    codeSnippet: `export const pipe = <T>(
  initialValue: T,
  ...fns: readonly ((arg: T) => T)[]
): T => {
  return fns.reduce((accumulator, currentFn) => currentFn(accumulator), initialValue);
};

// Пример применения:
const sanitizeInput = (text: string): string => text.trim();
const normalizeCasing = (text: string): string => text.toLowerCase();
const removeExtraSpaces = (text: string): string => text.replace(/\\s+/g, " ");

export const cleanUsername = (raw: string): string =>
  pipe(raw, sanitizeInput, normalizeCasing, removeExtraSpaces);`,
    keyTakeaways: [
      "Устраняет промежуточные мусорные переменные temp1, temp2",
      "Каждая функция остается чистой, изолированной и легко тестируемой в unit-тестах",
      "Легко расширяется добавлением новых звеньев в цепочку",
    ],
    realWorldUseCase: "Нормализация форм, обработка строк перед индексацией и построение middleware.",
    tags: ["pipe", "functional-programming", "composition", "utilities"],
  },

  // ==========================================
  // TYPESCRIPT: TYPING & MECHANICS
  // ==========================================
  {
    id: "ts-exhaustive-pattern-matching",
    stack: "typescript",
    stackName: "TypeScript",
    category: "typing",
    categoryName: "Метатипизация & Строгая типизация",
    title: "Exhaustive Pattern Matching с assertNever",
    subtitle: "Гарантия компилятора, что обработаны 100% вариантов дискриминантного объединения",
    level: "mid_to_senior",
    cognitiveTrap: "Использование switch/case без дефолтной ветки проверки. При добавлении нового типа в союз код компилируется, но падает в рантайме.",
    mentalModel: "Тип never представляет пустое множество. Если в ветку default попадает переменная, TypeScript выдает ошибку сборки, пока вы не напишете case для нее.",
    codeSnippet: `export const assertNever = (value: never, message?: string): never => {
  throw new Error(
    message ?? \`Unhandled discriminated union member: \${JSON.stringify(value)}\`
  );
};

export type PaymentMethod =
  | { readonly type: "card"; readonly last4: string }
  | { readonly type: "crypto"; readonly txHash: string }
  | { readonly type: "bank_transfer"; readonly iban: string };

export const formatPaymentSummary = (payment: PaymentMethod): string => {
  switch (payment.type) {
    case "card":
      return \`Card ending in \${payment.last4}\`;
    case "crypto":
      return \`Crypto transaction: \${payment.txHash.slice(0, 8)}...\`;
    case "bank_transfer":
      return \`IBAN: \${payment.iban}\`;
    default:
      return assertNever(payment);
  }
};`,
    keyTakeaways: [
      "Защищает архитектуру от багов при масштабировании моделей данных",
      "Если кто-то добавит { type: 'apple_pay' }, код не скомпилируется, указав точное место доработки",
      "Zero-runtime cost в штатном режиме",
    ],
    realWorldUseCase: "Обработка состояний Redux actions, парсинг webhook событий от Stripe/GitHub и UI стейт-машины.",
    tags: ["typescript", "discriminated-unions", "assertNever", "type-safety"],
  },
  {
    id: "ts-deep-readonly-mapped-type",
    stack: "typescript",
    stackName: "TypeScript",
    category: "typing",
    categoryName: "Метатипизация & Строгая типизация",
    title: "Рекурсивный DeepReadonly для иммутабельных структур",
    subtitle: "Защита глубоко вложенных конфигураций и стейта от случайных мутаций на этапе сборки",
    level: "mid_to_senior",
    cognitiveTrap: "Использование стандартного Readonly<T>, который защищает только верхний уровень полей, позволяя мутировать вложенные массивы и объекты.",
    mentalModel: "Рекурсивный mapped type с условными ветвлениями для примитивов, функций, массивов и объектов.",
    codeSnippet: `export type DeepReadonly<T> = T extends (infer R)[]
  ? ReadonlyArray<DeepReadonly<R>>
  : T extends (...args: readonly unknown[]) => unknown
  ? T
  : T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T;

// Пример проверки:
export interface AppConfig {
  server: {
    port: number;
    endpoints: string[];
  };
}

export const CONFIG: DeepReadonly<AppConfig> = {
  server: {
    port: 3000,
    endpoints: ["/api/v1", "/health"],
  },
};

// CONFIG.server.port = 8080; // ❌ Ошибка компилятора TS!
// CONFIG.server.endpoints.push("/hack"); // ❌ Property 'push' does not exist on ReadonlyArray!`,
    keyTakeaways: [
      "Гарантирует абсолютную чистоту данных в Redux/Zustand хранилищах",
      "Работает рекурсивно на любую глубину вложенности",
      "Не трогает функции и чистые примитивы",
    ],
    realWorldUseCase: "Глобальные конфигурации приложений, snapshots стейт-менеджеров и замороженные структуры.",
    tags: ["typescript", "mapped-types", "deep-readonly", "immutability"],
  },
  {
    id: "ts-template-literal-route-parser",
    stack: "typescript",
    stackName: "TypeScript",
    category: "typing",
    categoryName: "Метатипизация & Строгая типизация",
    title: "Парсинг URL параметров через Template Literal Types и infer",
    subtitle: "Автоматический вывод типов динамических путей маршрутизатора на этапе набора кода",
    level: "staff",
    cognitiveTrap: "Ручное описание интерфейсов параметров запросов `params: { id: string }`, которое часто расходится с фактической строкой пути `/users/:userId`.",
    mentalModel: "TypeScript анализирует строковый литерал как шаблон. Через рекурсивный infer компилятор вычленяет токены `:param` в union-тип.",
    codeSnippet: `export type ExtractRouteParams<T extends string> =
  T extends \`\${string}/:\${infer Param}/\${infer Rest}\`
    ? Param | ExtractRouteParams<\`/\${Rest}\`>
    : T extends \`\${string}/:\${infer Param}\`
    ? Param
    : never;

export type RouteParamsObject<T extends string> = {
  readonly [K in ExtractRouteParams<T>]: string;
};

// Пример:
type UserPostRoute = "/users/:userId/posts/:postId";
// Тип выводится автоматически: { readonly userId: string; readonly postId: string; }
export const navigateTo = <T extends string>(
  route: T,
  params: RouteParamsObject<T>
): string => {
  return Object.entries(params).reduce(
    (url, [key, value]) => url.replace(\`:\${key}\`, encodeURIComponent(String(value))),
    route as string
  );
};`,
    keyTakeaways: [
      "Опечатка в названии параметра в объекте вызовет мгновенную ошибку TypeScript",
      "Строка роута является единым источником правды (Single Source of Truth)",
      "Показывает мощь метапрограммирования на типах",
    ],
    realWorldUseCase: "Строго типизированные клиенты API, роутеры в стиле TanStack Router или Next.js App Router.",
    tags: ["typescript", "template-literals", "infer", "routing", "type-level"],
  },

  // ==========================================
  // REACT: ARCHITECTURE & HOOKS
  // ==========================================
  {
    id: "react-resilient-async-fetch-hook",
    stack: "react",
    stackName: "React",
    category: "architecture",
    categoryName: "Архитектура хуков & Рендеринг",
    title: "Отказоустойчивый хук асинхронной загрузки с защитой от Race Conditions",
    subtitle: "Защита от устаревших ответов сервера (Stale Response) и утечек памяти при быстром переключении вкладок",
    level: "mid_to_senior",
    cognitiveTrap: "Простой useEffect с fetch без отмены. При быстром переключении фильтров ответ на предыдущий запрос перезаписывает более свежий (Race Condition).",
    mentalModel: "Каждый запуск эффекта порождает собственный AbortController. Функция очистки (cleanup) прерывает предыдущий запрос до запуска нового.",
    codeSnippet: `import { useState, useEffect } from "react";

export interface AsyncState<T> {
  readonly data: T | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
}

export const useResilientFetch = <T>(
  url: string,
  options?: RequestInit
): AsyncState<T> => {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    fetch(url, { ...options, signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(\`Status \${res.status}\`);
        return res.json() as Promise<T>;
      })
      .then((data) => {
        setState({ data, isLoading: false, error: null });
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted) return;
        setState({
          data: null,
          isLoading: false,
          error: err instanceof Error ? err : new Error(String(err)),
        });
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return state;
};`,
    keyTakeaways: [
      "Проверка controller.signal.aborted гарантирует отсутствие обновления стейта отмененного запроса",
      "Чистый cleanup callback защищает от гонки запросов при смене url",
      "Устраняет ошибки 'Can't perform a React state update on an unmounted component'",
    ],
    realWorldUseCase: "Таблицы с фильтрацией на лету, выпадающие списки с автопоиском и вкладки детального просмотра.",
    tags: ["react", "hooks", "race-condition", "abort-controller", "async"],
  },
  {
    id: "react-state-machine-reducer",
    stack: "react",
    stackName: "React",
    category: "architecture",
    categoryName: "Архитектура хуков & Рендеринг",
    title: "Конечный автомат (State Machine) через useReducer",
    subtitle: "Устранение невалидных промежуточных состояний формы и мастер-визардов",
    level: "mid_to_senior",
    cognitiveTrap: "Пять независимых useState: isSubmitting, isSuccess, isError, canRetry... В коде возникают невозможные состояния: одновременно isSubmitting=true и isSuccess=true.",
    mentalModel: "Компонент находится строго в одном состоянии из закрытого множества (дискриминантный стейт). Переходы разрешены только по определенным событиям.",
    codeSnippet: `import { useReducer } from "react";

export type FormState =
  | { readonly status: "idle" }
  | { readonly status: "submitting"; readonly draft: string }
  | { readonly status: "success"; readonly responseId: string }
  | { readonly status: "error"; readonly draft: string; readonly errorMessage: string };

export type FormAction =
  | { readonly type: "SUBMIT"; readonly draft: string }
  | { readonly type: "SUCCESS"; readonly responseId: string }
  | { readonly type: "ERROR"; readonly errorMessage: string }
  | { readonly type: "RESET" };

export const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (state.status) {
    case "idle":
    case "error":
      if (action.type === "SUBMIT") {
        return { status: "submitting", draft: action.draft };
      }
      return state;

    case "submitting":
      if (action.type === "SUCCESS") {
        return { status: "success", responseId: action.responseId };
      }
      if (action.type === "ERROR") {
        return { status: "error", draft: state.draft, errorMessage: action.errorMessage };
      }
      return state;

    case "success":
      if (action.type === "RESET") {
        return { status: "idle" };
      }
      return state;
  }
};`,
    keyTakeaways: [
      "Делает невозможные состояния непредставимыми на уровне системы типов (Make impossible states impossible)",
      "UI рендерится просто и чисто: switch (state.status)",
      "Упрощает тестирование логики переходов без моков DOM-дерева",
    ],
    realWorldUseCase: "Корзины оформления заказов, многошаговые онбординги и платежные терминалы.",
    tags: ["react", "useReducer", "state-machine", "architecture"],
  },
  {
    id: "react-stable-event-callback",
    stack: "react",
    stackName: "React",
    category: "architecture",
    categoryName: "Архитектура хуков & Рендеринг",
    title: "Стабильный колбэк без лишних перезапусков эффектов (useEffectEvent паттерн)",
    subtitle: "Чтение свежих пропсов внутри эффекта без добавления их в массив зависимостей",
    level: "mid_to_senior",
    cognitiveTrap: "Добавление функции аналитики или уведомления в зависимости useEffect, вызывающее ненужный перезапуск подписок на сокеты или таймеров.",
    mentalModel: "Сохраняем ссылку на свежую функцию в useRef. Обновляем ref синхронно при каждом рендере. Возвращаем мемоизированную функцию-обертку.",
    codeSnippet: `import { useRef, useCallback, useInsertionEffect } from "react";

export const useEventCallback = <TArgs extends readonly unknown[], TResult>(
  fn: (...args: TArgs) => TResult
): ((...args: TArgs) => TResult) => {
  const ref = useRef<(...args: TArgs) => TResult>(fn);

  useInsertionEffect(() => {
    ref.current = fn;
  });

  return useCallback((...args: TArgs) => {
    return ref.current(...args);
  }, []);
};`,
    keyTakeaways: [
      "Ссылка на возвращаемую функцию никогда не меняется (стабильна на протяжении жизни компонента)",
      "Внутри колбэка всегда читаются самые свежие замыкания и стейт",
      "Спасает от каскадных ререндеров и разрывов WebSocket соединений",
    ],
    realWorldUseCase: "Отправка логов аналитики при открытии модального окна без перезапуска логики таймеров.",
    tags: ["react", "hooks", "useEffectEvent", "useCallback", "useRef"],
  },

  // ==========================================
  // NODE.JS: MECHANICS & BACKEND
  // ==========================================
  {
    id: "node-stream-pipeline-backpressure",
    stack: "nodejs",
    stackName: "Node.js",
    category: "mechanics",
    categoryName: "Механики движка & Память",
    title: "Потоковый пайплайн с автоматическим контролем Backpressure",
    subtitle: "Передача гигабайтов данных через Node.js с постоянным потреблением памяти в 20–30 МБ",
    level: "mid_to_senior",
    cognitiveTrap: "Использование старого readable.pipe(writable) или чтение файлов целиком через fs.readFile(), приводящее к Out of Memory (OOM) и утечкам при ошибках сокетов.",
    mentalModel: "pipeline из node:stream/promises связывает потоки, автоматически ставит на паузу чтение при переполнении буфера записи (Backpressure) и закрывает все дескрипторы при ошибке.",
    codeSnippet: `import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

export const compressFileStreaming = async (
  inputPath: string,
  outputPath: string
): Promise<void> => {
  const source = createReadStream(inputPath);
  const gzip = createGzip();
  const destination = createWriteStream(outputPath);

  // pipeline автоматически обрабатывает сбои и вызывает .destroy() на всех стримах
  await pipeline(source, gzip, destination);
};`,
    keyTakeaways: [
      "Автоматически уничтожает стримы при аварийном разрыве соединения",
      "Обеспечивает Backpressure: производитель не перегружает медленного потребителя",
      "Обязательный стандарт современного бэкенда на Node.js 18+",
    ],
    realWorldUseCase: "Экспорт многогигабайтных CSV-отчетов, стриминг видеофайлов и проксирование загрузок в S3.",
    tags: ["nodejs", "streams", "pipeline", "backpressure", "memory"],
  },
  {
    id: "node-graceful-shutdown-handler",
    stack: "nodejs",
    stackName: "Node.js",
    category: "mechanics",
    categoryName: "Механики движка & Память",
    title: "Безопасное завершение процесса (Graceful Shutdown)",
    subtitle: "Завершение активных HTTP-соединений и транзакций баз данных без потери пользовательских запросов",
    level: "mid_to_senior",
    cognitiveTrap: "Мгновенный process.exit(0) или дефолтное убийство процесса Docker-демоном через SIGKILL, обрывающее платежи и коррумпирующее базу данных.",
    mentalModel: "Перехватываем сигналы SIGINT / SIGTERM. Закрываем входящий прием новых подключений (server.close). Ждем завершения текущих запросов с аварийным таймаутом.",
    codeSnippet: `import type { Server } from "node:http";

export interface ShutdownDependencies {
  readonly server: Server;
  readonly closeDatabases: () => Promise<void>;
  readonly timeoutMs?: number;
}

export const setupGracefulShutdown = ({
  server,
  closeDatabases,
  timeoutMs = 10000,
}: ShutdownDependencies): void => {
  let isShuttingDown = false;

  const shutdown = async (signal: string): Promise<void> => {
    if (isShuttingDown) return;
    isShuttingDown = true;

    console.info(\`Received \${signal}. Starting graceful shutdown...\`);

    const forceTimer = setTimeout(() => {
      console.error("Forcefully shutting down due to timeout");
      process.exit(1);
    }, timeoutMs);

    try {
      // 1. Перестаем принимать новые HTTP запросы
      await new Promise<void>((resolve, reject) => {
        server.close((err) => (err ? reject(err) : resolve()));
      });

      // 2. Закрываем соединения с БД и очередями сообщений
      await closeDatabases();

      clearTimeout(forceTimer);
      console.info("Graceful shutdown completed clean.");
      process.exit(0);
    } catch (error) {
      console.error("Error during graceful shutdown:", error);
      process.exit(1);
    }
  };

  process.on("SIGTERM", () => void shutdown("SIGTERM"));
  process.on("SIGINT", () => void shutdown("SIGINT"));
};`,
    keyTakeaways: [
      "Kubernetes и Docker всегда шлют SIGTERM перед уничтожением пода",
      "Наличие аварийного таймера forceTimer обязательно на случай зависшего сокета",
      "Сохраняет консистентность состояния в распределенных базах данных",
    ],
    realWorldUseCase: "Развертывание в Kubernetes, плавный рестарт Node.js кластеров без Downtime.",
    tags: ["nodejs", "graceful-shutdown", "devops", "process", "signals"],
  },
  {
    id: "node-atomic-file-write",
    stack: "nodejs",
    stackName: "Node.js",
    category: "utilities",
    categoryName: "Базовые паттерны & Функции",
    title: "Атомарная запись файлов через временный файл и rename",
    subtitle: "Защита конфигураций от повреждения при внезапном сбое питания или падении сервера",
    level: "mid_to_senior",
    cognitiveTrap: "Прямая запись через fs.writeFile(). Если в момент записи сервер перезагрузится, файл останется наполовину пустым и невалидным.",
    mentalModel: "Пишем данные во временный файл .tmp. Затем вызываем системный вызов atomic rename, который в POSIX-системах атомарен на уровне файловой системы.",
    codeSnippet: `import { writeFile, rename, unlink } from "node:fs/promises";
import { join, dirname } from "node:path";
import { randomBytes } from "node:crypto";

export const writeAtomicFile = async (
  targetPath: string,
  content: string | Uint8Array
): Promise<void> => {
  const dir = dirname(targetPath);
  const tempPath = join(dir, \`.\${randomBytes(8).toString("hex")}.tmp\`);

  try {
    await writeFile(tempPath, content, { encoding: "utf-8" });
    // Системный вызов fs.rename атомарен на уровне файловой таблицы
    await rename(tempPath, targetPath);
  } catch (error) {
    try {
      await unlink(tempPath);
    } catch {
      // Игнорируем ошибку очистки временного файла
    }
    throw error;
  }
};`,
    keyTakeaways: [
      "Исключает ситуацию, когда читатель прочитает файл наполовину записанным",
      "Временный файл должен находиться на том же дисковом томе (в той же директории)",
      "Стандарт безопасности для локальных кешей и критичных json-баз",
    ],
    realWorldUseCase: "Запись lock-файлов, кэшей сессий, конфигураций и баз данных вроде SQLite WAL.",
    tags: ["nodejs", "atomic-write", "filesystem", "posix"],
  },
] as const;

export const PROGRAMMING_STACKS = [
  { id: "all", label: "Все стеки", icon: "⚡" },
  { id: "javascript", label: "JavaScript", icon: "🟨", count: 7 },
  { id: "typescript", label: "TypeScript", icon: "🔷", count: 3 },
  { id: "react", label: "React", icon: "⚛️", count: 3 },
  { id: "nodejs", label: "Node.js", icon: "🟩", count: 3 },
] as const;

export const PROGRAMMING_CATEGORIES = [
  { id: "all", label: "Все механики" },
  { id: "mechanics", label: "⚙️ Механики движка & Память" },
  { id: "async", label: "⚡ Асинхронная архитектура" },
  { id: "utilities", label: "🛠️ Базовые утилиты & Паттерны" },
  { id: "architecture", label: "⚛️ Архитектура хуков & Рендер" },
  { id: "typing", label: "🏷️ Метатипизация & Generics" },
] as const;
