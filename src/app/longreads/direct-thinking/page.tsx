import React from "react";
import { ArticleHeaderNav, QuoteCallout, MethodCard } from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { LongreadSelectorDropdown } from "@/features/longread-selector";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "dt-sec-1", title: "01. Анатомия ловушки: Модель RHM Кролл и Word Association" },
  { id: "dt-sec-2", title: "02. Катастрофа рабочей памяти: Лимит 4±1 слотов и переполнение петли" },
  { id: "dt-sec-3", title: "03. Чанк как неделимый когнитивный токен: Сжатие N слов в 1 слот" },
  { id: "dt-sec-4", title: "04. Нейробиология ингибирования L1: Контур ACC и DLPFC" },
  { id: "dt-sec-5", title: "05. 4-фазный клинический протокол деинсталляции переводчика" },
  { id: "dt-sec-6", title: "06. Таблица контраста: От кальки L1 к прямому нативному чанку" },
] as const;

export default function DirectThinkingPage({ isUnified = false }: { readonly isUnified?: boolean } = {}) {
  return (
    <>
      {!isUnified && (
        <ArticleHeaderNav
          title="DIRECT THINKING & SUBVOCAL ELIMINATION"
          badge="Psycholinguistics & SLA"
          activeRoute="/longreads/direct-thinking"
        />
      )}

      <article className="longread-container prose-editorial" id="top">
        {!isUnified && (
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Библиотека исследований SLA</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">Практическая психолингвистика C1</span>
            </div>
            <LongreadSelectorDropdown currentSlug="direct-thinking" />
          </div>
        )}

        <div className="article-meta-top">
          <span>Психолингвистика речи & Подавление L1</span>
          <span>•</span>
          <span>Время чтения: 17 минут</span>
        </div>

        <h1 className="article-title">
          Мышление Без Перевода: Психолингвистика Искоренения Субвокального Русского Языка Чанками
        </h1>

        <p className="article-lead">
          Почему мозг автоматически переводит мысли с русского, вызывая заикание и мычание на рабочих созвонах, как лимит рабочей памяти (4±1 слота по Ковану) убивает пословную речь, и как переключиться на прямое мышление блоками.
        </p>

        <div className="article-info-strip">
          <div className="info-item"><span>Научный базис:</span> <strong>Kroll & Stewart (RHM), David Green (Inhibitory Control), Alan Baddeley, Alison Wray</strong></div>
          <div className="info-item"><span>Главный механизм:</span> <strong>Переход от Word Association (L2→L1→Смысл) к Concept Mediation (Смысл→Чанк)</strong></div>
          <div className="info-item"><span>Экономия ресурса:</span> <strong>Снижение нагрузки на рабочую память на 75%</strong></div>
        </div>

        {/* Table of Contents */}
        <TableOfContents items={TOC_ITEMS} />

        {/* SECTION 1 */}
        <section id="dt-sec-1">
          <h2 className="chapter-heading">01. Анатомия ловушки: Модель RHM Кролл и Word Association</h2>

          <p>
            Главный барьер, удерживающий специалистов на плато B2 годами — это <strong>субвокальный перевод</strong>: процесс, при котором человек сначала формулирует фразу на русском языке во внутренней речи, а затем пытается последовательно перевести её на английский.
          </p>

          <p>
            В психолингвистике этот феномен объясняется через <strong>Revised Hierarchical Model (RHM)</strong> Джудит Кролл и Эрики Стюарт (Judith Kroll & Erika Stewart):
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30">
              <div className="text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                ❌ Уровень B1–B2: Модель Word Association
              </div>
              <div className="text-xs font-mono space-y-2 text-slate-300">
                <div className="p-2 rounded bg-black/40 border border-white/5">
                  [Мысль / Концепт] → Прямой доступ к L1 (Русский)
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5">
                  [Русское слово] → Попытка перевода на L2 (Английский)
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5 text-rose-300 font-bold">
                  Задержка: 800–1400 мс. Постоянное мычание и ступор.
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                ⚡ Уровень C1 / Носитель: Модель Concept Mediation
              </div>
              <div className="text-xs font-mono space-y-2 text-slate-300">
                <div className="p-2 rounded bg-black/40 border border-white/5">
                  [Мысль / Концепт] → Прямой доступ к L2 (Чанк)
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5 text-emerald-300 font-bold">
                  Русский язык (L1) заблокирован передней поясной корой!
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5 text-cyan-300 font-bold">
                  Задержка: 150–220 мс. Спонтанный выброс речи.
                </div>
              </div>
            </div>
          </div>

          <QuoteCallout cite="Джудит Кролл, профессор психолингвистики University of California">
            Вы не можете &laquo;перестать переводить&raquo; простым решением силы воли. Перевод прекращается только тогда, когда английская конструкция связывается напрямую с эмоциональным и физическим концептом минуя лексику L1.
          </QuoteCallout>
        </section>

        {/* SECTION 2 */}
        <section id="dt-sec-2">
          <h2 className="chapter-heading">02. Катастрофа рабочей памяти: Лимит 4±1 слотов и переполнение петли</h2>

          <p>
            Человеческая рабочая память обладает жестким лимитом: <strong>4±1 единицы информации (Nelson Cowan, 2001)</strong>. Фонологическая петля Беддели способна удерживать звуковой след не более 1.5–2 секунд.
          </p>

          <p>
            Когда вы пытаетесь сказать на созвоне простую рабочую мысль, переводя её по одному слову:
          </p>

          <div className="p-6 rounded-2xl bg-black/40 border border-rose-500/30 my-6 space-y-3">
            <div className="text-xs uppercase tracking-wider text-rose-400 font-bold">
              Пословная сборка фразы: «Я с нетерпением жду возможности обсудить это подробнее»
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              <div className="p-2 rounded bg-white/5 border border-white/10">1. I</div>
              <div className="p-2 rounded bg-white/5 border border-white/10">2. look</div>
              <div className="p-2 rounded bg-white/5 border border-white/10">3. forward</div>
              <div className="p-2 rounded bg-white/5 border border-white/10">4. to</div>
            </div>
            <div className="p-3 rounded-xl bg-rose-500/20 text-rose-200 text-xs font-bold">
              ⚠️ ЛИМИТ ПАМЯТИ ПРЕВЫШЕН! Слова «discussing», «this», «further» не помещаются в буфер.
            </div>
            <p className="text-xs text-slate-300">
              Пока мозг ищет слово «подробнее», он забывает грамматику начала фразы, теряет окончание <code>-ing</code> у глагола и выдает паузу: «I look forward to... eee... discuss this...».
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="dt-sec-3">
          <h2 className="chapter-heading">03. Чанк как неделимый когнитивный токен: Сжатие N слов в 1 слот</h2>

          <p>
            Профессор Элисон Рэй (Alison Wray, автор фундаментального труда <em>«Formulaic Language and the Lexicon»</em>) доказала, что человеческая речь держится на формульных последовательностях — <strong>лексических чанках</strong>.
          </p>

          <p>
            Чанк воспринимается и извлекается мозгом как <strong>один атомарный токен</strong>:
          </p>

          <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 my-6">
            <div className="text-xs uppercase tracking-wider text-indigo-400 font-bold mb-3">
              ⚡ Та же самая мысль, упакованная в 2 когнитивных слота:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-4 rounded-xl bg-black/40 border border-indigo-500/30 text-emerald-300">
                <div className="text-slate-400 text-[10px] mb-1">СЛОТ 1 (1 единица рабочей памяти)</div>
                <div className="font-bold text-sm">[I&apos;m really looking forward to discussing]</div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-indigo-500/30 text-cyan-300">
                <div className="text-slate-400 text-[10px] mb-1">СЛОТ 2 (1 единица рабочей памяти)</div>
                <div className="font-bold text-sm">[this in greater detail.]</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-indigo-500/20 text-xs text-slate-300">
              Занято всего <strong>2 слота памяти из 4</strong>. Оставшиеся 2 слота направлены на зрительный контакт с собеседником, интонацию и стратегию диалога. Внутренний перевод отсутствует на 100%!
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="dt-sec-4">
          <h2 className="chapter-heading">04. Нейробиология ингибирования L1: Контур ACC и DLPFC</h2>

          <p>
            Как мозг носителя подавляет родной язык при двуязычии? Нейропсихолог Дэвид Грин (David Green) сформулировал <strong>Inhibitory Control Model (ICM)</strong>:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">1</div>
              <div>
                <h4 className="text-white font-bold text-sm">Передняя поясная кора (ACC — Anterior Cingulate Cortex)</h4>
                <p className="text-xs text-slate-400">Служит детектором когнитивного конфликта. Как только русское слово пытается прорваться в речевой тракт, ACC моментально регистрирует угрозу ошибки.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center shrink-0">2</div>
              <div>
                <h4 className="text-white font-bold text-sm">Дорсолатеральная префронтальная кора (DLPFC)</h4>
                <p className="text-xs text-slate-400">Посылает мощный тормозной ГАМК-импульс на сеть русского языка, глуша русскую лемму до того, как она дойдет до моторной полоски рта.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">3</div>
              <div>
                <h4 className="text-white font-bold text-sm">Стриатум базальных ганглиев (Автоматизм)</h4>
                <p className="text-xs text-slate-400">Активирует моторный чанк целиком. Английская фраза вылетает как единый двигательный рефлекс — так же естественно, как игра аккорда на гитаре.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="dt-sec-5">
          <h2 className="chapter-heading">05. 4-фазный клинический протокол деинсталляции переводчика</h2>

          <div className="space-y-4 my-6">
            <MethodCard
              badge="Фаза 1: Сенсорное якорение"
              title="Concept-Anchoring вместо русского перевода"
            >
              <p className="text-sm text-slate-300">
                Категорически запрещено учить карточки формата &laquo;English = Русский перевод&raquo;. Связывайте чанк с физическим ощущением, визуальным образом или конкретной кнопкой в интерфейсе. Чанк &apos;revert the commit&apos; должен ассоциироваться с паникой сломанного прода, а не со словами &laquo;откатить коммит&raquo;.
              </p>
            </MethodCard>

            <MethodCard
              badge="Фаза 2: Опережающий шэдоуинг"
              title="Anticipatory Predictive Shadowing"
            >
              <p className="text-sm text-slate-300">
                Слушайте подкаст носителя с задержкой в 200 миллисекунд и повторяйте вслух. На такой скорости мозг физически не способен переводить услышанное на русский язык: ему приходится предугадывать следующие слова напрямую на английском.
              </p>
            </MethodCard>

            <MethodCard
              badge="Фаза 3: Скоростной Slot-Swapping"
              title="Реакция быстрее 300 миллисекунд"
            >
              <p className="text-sm text-slate-300">
                Русский переводчик требует минимум 450 мс для загрузки леммы. Если вы выполняете упражнения на подстановку слотов со скоростью ответа менее 300 мс, внутренний переводчик блокируется чисто биофизически.
              </p>
            </MethodCard>

            <MethodCard
              badge="Фаза 4: Аварийные мосты"
              title="Formulaic Bridges вместо звука 'Э-э-э'"
            >
              <p className="text-sm text-slate-300">
                При малейшем затыке запретите себе мычать или думать по-русски. Автоматизируйте мгновенный выброс спасительного моста: &quot;The way I look at it...&quot;, &quot;What I&apos;m trying to say is...&quot;. Это удерживает английский языковой контур в активном состоянии.
              </p>
            </MethodCard>
          </div>
        </section>

        {/* SECTION 6 */}
        <section id="dt-sec-6">
          <h2 className="chapter-heading">06. Таблица контраста: От кальки L1 к прямому нативному чанку</h2>

          <div className="editorial-table-wrap">
            <table className="editorial-table">
              <thead>
                <tr>
                  <th>Русская мысль</th>
                  <th>Пословный перевод (Калька B2)</th>
                  <th>Прямой нативный чанк (C1)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>«Я считаю, что нам надо это обсудить»</td>
                  <td className="col-bad">I think that we must discuss about this</td>
                  <td className="col-good">I&apos;d suggest we talk this through.</td>
                </tr>
                <tr>
                  <td>«Дело в том, что у нас нет времени»</td>
                  <td className="col-bad">The thing is that we don&apos;t have time</td>
                  <td className="col-good">The bottom line is, we&apos;re pressed for time.</td>
                </tr>
                <tr>
                  <td>«Я не успел сделать задачу»</td>
                  <td className="col-bad">I didn&apos;t manage to do the task</td>
                  <td className="col-good">I haven&apos;t gotten around to it yet.</td>
                </tr>
                <tr>
                  <td>«Если честно, я в этом сомневаюсь»</td>
                  <td className="col-bad">If honestly, I doubt in this</td>
                  <td className="col-good">To be completely frank, I have my doubts.</td>
                </tr>
                <tr>
                  <td>«Это не имеет никакого смысла»</td>
                  <td className="col-bad">It doesn&apos;t have any sense</td>
                  <td className="col-good">It simply doesn&apos;t add up.</td>
                </tr>
                <tr>
                  <td>«Давайте вернемся к сути»</td>
                  <td className="col-bad">Let&apos;s return back to the theme</td>
                  <td className="col-good">Let&apos;s circle back to the core issue.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>
    </>
  );
}
