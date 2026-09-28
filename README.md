# Fluency Architecture (learnEnglih)

> **Разговорный английский B2 → C1 через лексические чанки, шаблоны и формулы беглости речи.**

## 🚀 Особенности

- **SSG (Static Site Generation)**: Полный статический экспорт (`output: 'export'`) — 100% страниц пререндерены на этапе сборки. Мгновенная загрузка через Edge CDN Vercel без вычислительных задержек сервера.
- **PWA & iOS Standalone**:
  - Полная поддержка установки на iPhone / iPad через Safari («На экран "Домой"»).
  - Нативный полноэкранный режим без адресной строки браузера (`apple-mobile-web-app-capable`).
  - Поддержка Dynamic Island и safe-area отступов iOS (`env(safe-area-inset-top)` / `bottom`).
  - Офлайн-кэширование через Service Worker (`public/sw.js`).
  - `manifest.webmanifest` с иконками 192x192, 512x512 и Apple Touch Icon 180x180.
- **Архитектура FSD (Feature-Sliced Design)**: Строгое разделение слоев (`app`, `widgets`, `features`, `entities`, `shared`).
- **Стек**: Next.js 16 (Turbopack), React 19, TypeScript 5, Tailwind CSS 4.

## 🛠 Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск локального сервера разработки
npm run dev

# Проверка статической сборки (SSG)
npm run build
```

## 📱 Установка на iPhone (iOS)

1. Откройте сайт в Safari на iPhone.
2. Нажмите кнопку **«Поделиться»** (иконка квадрата со стрелочкой вверх ⎋ в нижней панели).
3. Прокрутите вниз и выберите **«На экран "Домой"»** ⊞.
4. Нажмите **«Добавить»** в верхнем правом углу.

## 🌐 Деплой на Vercel

1. Запушьте репозиторий в GitHub:
   ```bash
   git remote add origin git@github.com:stejlyura/learnEnglih.git
   git branch -M main
   git push -u origin main
   ```
2. Откройте [Vercel Dashboard](https://vercel.com/new).
3. Импортируйте репозиторий `stejlyura/learnEnglih`.
4. Vercel автоматически определит Next.js проект и выполнит `next build`.
5. Готово! Сайт развернется на глобальном Edge CDN.
