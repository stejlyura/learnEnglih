import React from "react";
import Link from "next/link";
import { ArticleHeaderNav, QuoteCallout, MethodCard } from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { LongreadSelectorDropdown } from "@/features/longread-selector";
import { LONGREADS } from "@/entities/longread";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "chapter-1", title: "01. Концептуальный разрыв: Компьютерная модель vs Предиктивный мозг" },
  { id: "chapter-2", title: "02. Хронометрия речи и потенциалы N400 / P600" },
  { id: "chapter-3", title: "03. Двухпотоковая модель Хикока-Поппеля: Вентральный vs Дорсальный путь" },
  { id: "chapter-4", title: "04. Декларативно-процедурная модель Майкла Ульмана" },
  { id: "chapter-5", title: "05. Модель ингибиторного контроля и цена подавления L1 (Switching Cost)" },
  { id: "chapter-6", title: "06. Практический нейропротокол перестройки контуров на уровень C1" },
] as const;

export default function NativeBrainPage({ isUnified = false }: { readonly isUnified?: boolean } = {}) {
  return (
    <>
      {!isUnified && (
        <ArticleHeaderNav
          title="NATIVE BRAIN & C1 NEUROBIOLOGY"
          badge="Neuroscience"
          activeRoute="/longreads/native-brain"
        />
      )}

      <article className="longread-container prose-editorial" id="top">
        {!isUnified && (
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Библиотека исследований SLA</span>
              <span>•</span>
              <span className="text-cyan-400 font-semibold">Статья 01 из {LONGREADS.length}</span>
            </div>
            <LongreadSelectorDropdown currentSlug="native-brain" />
          </div>
        )}

        <div className="article-meta-top">
          <span>Функциональная нейровизуализация & Когнитивная лингвистика</span>
          <span>•</span>
          <span>Время чтения: 17 минут</span>
        </div>

        <h1 className="article-title">
          Как Работает Мозг Носителя и Нейробиология Перехода на C1: Предиктивное Кодирование, Подавление L1 и Процедурная Беглость
        </h1>

        <p className="article-lead">
          Почему попытка переводить мысли с родного языка физически создает задержку в 800–1200 миллисекунд, чем электрофизиология речи носителя отличается от студента B2 и как перенести язык из временного кэша гиппокампа в базальные ганглии.
        </p>

        <div className="article-info-strip">
          <div className="info-item"><span>Целевой уровень:</span> <strong>B2 → C1</strong></div>
          <div className="info-item"><span>Ключевые авторы:</span> <strong>Karl Friston, Hickok & Poeppel, Michael Ullman, David Green</strong></div>
          <div className="info-item"><span>Нейроэффект:</span> <strong>Переход от пословного синтаксиса к автоматическому синтезу</strong></div>
        </div>

        {/* Table of Contents */}
        <TableOfContents items={TOC_ITEMS} />

        {/* CHAPTER 1 */}
        <section id="chapter-1">
          <h2 className="chapter-heading">01. Концептуальный разрыв: Компьютерная модель vs Предиктивный мозг</h2>

          <p>
            Традиционное преподавание языка строится на устаревшей <strong>«вычислительной модели» (Computational Metaphor)</strong>. Она утверждает, что человек сначала формулирует изолированную мысль, затем лезет во внутренний лексикон за отдельными словами, согласует их по правилам синтаксиса и отправляет команду артикуляционному аппарату.
          </p>

          <p>
            В мозге взрослого человека на уровне B2 этот процесс выглядит следующим образом:
          </p>

          <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2 mb-6">
            <div className="text-rose-400 font-bold text-xs uppercase tracking-wider">
              ❌ Традиционный цикл студента B2 (Пословная последовательная сборка):
            </div>
            <p className="text-sm font-mono text-slate-200">
              [Концепт мысли] ──&gt; [Поиск слова в L1] ──&gt; [Перевод на L2] ──&gt; [Проверка грамматики в DLPFC] ──&gt; [Артикуляция]
            </p>
            <div className="text-xs text-rose-300 font-medium pt-1 border-t border-rose-500/20">
              Задержка: 800–1400 мс. Проявление: звуки «эээ/ммм», мышечный зажим челюсти, потеря спонтанности.
            </div>
          </div>

          <p>
            Профессор Карл Фристон (Karl Friston, University College London), создатель теории <strong>Predictive Processing и принципа свободной энергии (Free Energy Principle)</strong>, доказал, что мозг носителя работает прямо противоположным образом. Мозг — это не регистратор, а <strong>машина предсказаний (Prediction Engine)</strong>.
          </p>

          <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2 mb-6">
            <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
              ⚡ Нейронный цикл носителя языка и уровня C1 (Предиктивный макро-синтез):
            </div>
            <p className="text-sm font-mono text-slate-200">
              [Коммуникативный концепт] ──&gt; [Базальные ганглии: Извлечение моторного чанка] ──&gt; [Артикуляция]
            </p>
            <div className="text-xs text-emerald-300 font-medium pt-1 border-t border-emerald-500/20">
              Задержка: 120–180 мс. Мозг рассчитывает траекторию фразы наперед и слушает только расхождение с прогнозом.
            </div>
          </div>

          <QuoteCallout cite="Карл Фристон, профессор нейробиологии UCL">
            «Мозг минимизирует удивление (Surprise / Free Energy). Носитель языка говорит бегло не потому, что быстро считает окончания, а потому, что его мозг за доли секунды до произнесения фразы уже сгенерировал вероятностный контур всего высказывания».
          </QuoteCallout>
        </section>

        {/* CHAPTER 2 */}
        <section id="chapter-2">
          <h2 className="chapter-heading">02. Хронометрия речи и потенциалы N400 / P600</h2>

          <p>
            Электроэнцефалография высокого разрешения (ERP — Event-Related Potentials) позволяет измерить скорость языковых реакций мозга с точностью до миллисекунды.
          </p>

          <div className="grid-2col mb-6">
            <MethodCard borderAccentColor="#38BDF8">
              <span className="tier-badge tier-1">Компонент N400</span>
              <h4 style={{ color: "#FFF", marginBottom: "8px" }}>Семантическая фильтрация</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-0">
                Отрицательный всплеск через 400 мс после слова (Kutas & Hillyard). У носителей N400 <strong>полностью подавлен</strong> при восприятии устойчивых чанков (<em>«take into account»</em>, <em>«shed light on»</em>), потому что синапсы активировались за 100 мс до звучания слова.
              </p>
            </MethodCard>

            <MethodCard borderAccentColor="#818CF8">
              <span className="tier-badge tier-2">Компонент P600</span>
              <h4 style={{ color: "#FFF", marginBottom: "8px" }}>Синтаксическая перепроверка</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-0">
                Положительный пик через 600 мс при сбое согласования. У человека на B2 пик P600 вспыхивает непрерывно: префронтальная кора перепроверяет каждое окончание. На уровне C1 синтаксис отдан подкорковым структурам.
              </p>
            </MethodCard>
          </div>

          <p>
            <strong>Итог хронометрии:</strong> Переводчик с L2 всегда опаздывает на 400–600 миллисекунд. Именно эта задержка воспринимается как неспособность вовремя вклиниться в динамичный диалог с зарубежными коллегами на созвоне.
          </p>
        </section>

        {/* CHAPTER 3 */}
        <section id="chapter-3">
          <h2 className="chapter-heading">03. Двухпотоковая модель Хикока-Поппеля: Вентральный vs Дорсальный путь</h2>

          <p>
            В 2007 году Грегори Хикок и Дэвид Поппель (Hickok & Poeppel, <em>Nature Reviews Neuroscience</em>) доказали, что в мозгу сосуществуют два параллельных канала речи:
          </p>

          <div className="space-y-4 my-6">
            <MethodCard>
              <div className="method-card-header">
                <span className="tier-badge tier-1">Поток 1: Вентральный («Что это значит?»)</span>
                <span className="text-xs text-slate-400">Ventral Stream (STG → MTG → ITG)</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-0">
                Отвечает за семантическое понимание, распознавание смыслов и пассивное слушание. Именно этот поток максимально натренирован у тех, кто годами смотрит YouTube, читает документацию и слушает подкасты. <strong>Но вентральный поток анатомически не способен управлять речевым аппаратом.</strong>
              </p>
            </MethodCard>

            <MethodCard>
              <div className="method-card-header">
                <span className="tier-badge tier-3">Поток 2: Дорсальный («Как это произносится?»)</span>
                <span className="text-xs text-slate-400">Dorsal Stream (STG → Spt → Broca)</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-0">
                Соединяет слуховую кору напрямую с моторной зоной Брока через дугообразный пучок (<strong>Fasciculus Arcuatus</strong>). Это акустико-моторная петля, транслирующая услышанный звук непосредственно в мышечную артикуляционную программу.
              </p>
            </MethodCard>
          </div>

          <p>
            <strong>Главный парадокс 10–16 лет обучения:</strong> Люди тренируют вентральный поток чтением, а на митинге пытаются потребовать от него беглого говорения. Переход на C1 требует целенаправленной стимуляции дорсального потока через скоростной шэдоуинг и повторение моторных чанков вслух.
          </p>
        </section>

        {/* CHAPTER 4 */}
        <section id="chapter-4">
          <h2 className="chapter-heading">04. Декларативно-процедурная модель Майкла Ульмана</h2>

          <p>
            Профессор Майкл Ульман (Michael Ullman, Georgetown University) разработал модель DP (Declarative/Procedural Model of Language), за которую получил признание мирового нейролингвистического сообщества:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-indigo-500/20">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Декларативная память (B2)
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Слова и правила
                </span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div>
                  <span className="text-slate-400 block text-xs">Анатомическая зона:</span>
                  <span className="font-semibold text-white">Гиппокамп, медиальная височная кора</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Что хранит:</span>
                  <span className="font-semibold text-white">Изолированные слова, формулы из учебников</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Скорость доступа:</span>
                  <span className="font-semibold text-rose-300">Медленная (400–1200 мс)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Расход энергии:</span>
                  <span className="font-semibold text-rose-300">Огромный (быстрое утомление и затыки)</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Процедурная память (C1 / Native)
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Автоматизм
                </span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div>
                  <span className="text-slate-400 block text-xs">Анатомическая зона:</span>
                  <span className="font-semibold text-white">Базальные ганглии, мозжечок, SMA</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Что хранит:</span>
                  <span className="font-semibold text-white">Автоматизированные моторные чанки</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Скорость доступа:</span>
                  <span className="font-semibold text-emerald-300">Мгновенная (&lt;150 мс)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Расход энергии:</span>
                  <span className="font-semibold text-emerald-300">Минимальный (как ходьба или езда)</span>
                </div>
              </div>
            </div>
          </div>

          <p>
            Овладение C1 — это не заучивание еще 2000 редких слов. Это <strong>перенос грамматики и синтаксиса из височной коры в процедурные контуры базальных ганглиев</strong>.
          </p>
        </section>

        {/* CHAPTER 5 */}
        <section id="chapter-5">
          <h2 className="chapter-heading">05. Модель ингибиторного контроля и цена подавления L1 (Switching Cost)</h2>

          <p>
            Почему после 20 минут разговора на английском возникает ощущение, будто мозг перегрелся?
          </p>

          <p>
            В теории билингвального контроля Дэвида Грина (David Green, <em>Inhibitory Control Model</em>) и Эллен Белосток (Ellen Bialystok) доказано: у любого взрослого человека родной язык (L1) <strong>активен непрерывно</strong>. Синаптический вес русских слов формировался 20–40 лет.
          </p>

          <MethodCard borderAccentColor="#F43F5E">
            <h4 style={{ color: "#FB7185", marginBottom: "8px" }}>Феномен «Switching Cost» (Когнитивный налог переключения):</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-0">
              Когда вы хотите сказать фразу на английском, русский лексический узел вспыхивает первым. Дорсолатеральная префронтальная кора (DLPFC) вынуждена принудительно затормозить русскую нейронную сеть. Этот процесс сжигает до 35% гликогена лобных долей. На уровне C1 мозг вырабатывает общий тормозной контур, глушащий L1 фоново.
            </p>
          </MethodCard>
        </section>

        {/* CHAPTER 6 */}
        <section id="chapter-6">
          <h2 className="chapter-heading">06. Практический нейропротокол перестройки контуров на уровень C1</h2>

          <p>
            Для перенастройки речевых нейросетей рекомендуется применять 4 доказательные практики:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center">1</span>
                <h4 className="text-sm font-bold text-white mb-0">Дорсальный шэдоуинг (0.2 сек лаг)</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 pl-8 leading-relaxed mb-0">
                Повторение за носителем с минимальной задержкой без текста. Вынуждает мозг обойти внутренний текстовый переводчик и соединить ухо с речевым аппаратом напрямую.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold flex items-center justify-center">2</span>
                <h4 className="text-sm font-bold text-white mb-0">Моторный чанкинг через варьирование скорости</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 pl-8 leading-relaxed mb-0">
                Произношение устойчивой конструкции 10 раз: 3 раза медленно с преувеличенной артикуляцией, 4 раза на предельной скорости (Speed Bursting), 3 раза с интонацией созвона.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold flex items-center justify-center">3</span>
                <h4 className="text-sm font-bold text-white mb-0">Freestyle Jamming под таймером (2 минуты)</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 pl-8 leading-relaxed mb-0">
                Непрерывное говорение вслух без права на исправление ошибок. Ослабляет цензор префронтальной коры и формирует навык автоматического обхода забытых слов.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-purple-950/40 border border-cyan-500/30 text-center space-y-3 mt-8">
            <h3 className="text-lg font-bold text-white">Перейти к следующему исследованию:</h3>
            <p className="text-xs text-slate-300 max-w-xl mx-auto">
              Узнайте, как мозг консолидирует новые связи во сне и почему 1 тест на активное извлечение дает больше, чем 4 перечитывания конспектов.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/longreads/memory-consolidation"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-lg"
              >
                Читать: Наука Консолидации Памяти →
              </Link>
              <Link
                href="/longreads"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-all"
              >
                Все лонгриды каталога
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
