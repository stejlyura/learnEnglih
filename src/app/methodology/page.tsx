import React from "react";
import Link from "next/link";
import { ArticleHeaderNav, QuoteCallout, MethodCard } from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { LongreadSelectorDropdown } from "@/features/longread-selector";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "part-1", title: "01. Аудит вашей текущей рутины: Сильные стороны и слепые зоны" },
  { id: "part-2", title: "02. Фундаментальные научные теории SLA (Nation, Swain, Schmidt, Ericsson)" },
  { id: "part-3", title: "03. 5 недостающих элементов: Что внедрить в ежедневную практику" },
  { id: "part-4", title: "04. Три готовых сценария идеальной дейли-рутины (Sprint, Standard, Immersion)" },
  { id: "part-5", title: "05. Ежедневный чек-лист эффективности и объективные метрики прогресса" },
] as const;

export default function MethodologyPage() {
  return (
    <>
      <ArticleHeaderNav
        title="SLA LEARNING METHODOLOGY"
        badge="Daily Protocol"
        activeRoute="/methodology"
      />

      <article className="longread-container" id="top">
        {/* Top Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 rounded-2xl bg-white/[0.03] border border-white/10">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Библиотека лонгридов</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">Всего 9 материалов</span>
          </div>
          <LongreadSelectorDropdown currentSlug="methodology" />
        </div>

        <div className="article-meta-top">
          <span>Прикладная лингвистика & Когнитивная наука SLA</span>
          <span>•</span>
          <span>Время чтения: 14 минут</span>
        </div>

        <h1 className="article-title">Научные Методологии Изучения Языка: Аудит Рутины, 4 Потока и Автономная Беглость</h1>

        <p className="article-lead">
          Научный разбор того, почему связки «учу чанки + слушаю и повторяю 3 раза» недостаточно для спонтанного говорения на созвонах, как устроен когнитивный барьер порождения речи (Production Gap) и какие 5 практик сделают вашу дейли-рутину полноценной.
        </p>

        <div className="article-info-strip">
          <div className="info-item"><span>Научные основы:</span> <strong>The Four Strands (Nation), Output Hypothesis (Swain)</strong></div>
          <div className="info-item"><span>Аудит рутины:</span> <strong>3-ступенчатый шэдоуинг vs спонтанная речь</strong></div>
          <div className="info-item"><span>Практический итог:</span> <strong>3 тайм-плана (20 / 35 / 50 минут в день)</strong></div>
        </div>

        {/* Table of Contents */}
        <TableOfContents items={TOC_ITEMS} />

        {/* SECTION 1 */}
        <section id="part-1">
          <h2 className="chapter-heading">01. Аудит вашей текущей рутины: Сильные стороны и слепые зоны</h2>

          <p>
            Ваша текущая методика состоит из двух сильных инструментов: <strong>изучение лексических чанков</strong> и <strong>трехступенчатый шэдоуинг аудио</strong> (1-й раз: слушаю и повторяю на слух; 2-й раз: слушаю, смотрю текст и повторяю; 3-й раз: снова повторяю только на слух).
          </p>

          <div className="grid-2col">
            <MethodCard borderAccentColor="#10B981">
              <h4 style={{ color: "var(--accent-emerald)", marginBottom: "12px" }}>Что работает превосходно:</h4>
              <ul className="pl-5 space-y-2 text-sm leading-relaxed">
                <li><strong>Фонологическая петля (Phonological Loop):</strong> Активируется моторная кора и мышечная память связок по модели Алана Баддели.</li>
                <li><strong>Связная речь (Connected Speech):</strong> Шэдоуинг автоматически приучает к редукциям, слиянию звуков и ритму ударений без заучивания правил транскрипции.</li>
                <li><strong>Защита от слуховых иллюзий:</strong> Второй проход с текстом снимает эффект «ослышки», не давая заучить ошибочное звучание.</li>
              </ul>
            </MethodCard>

            <MethodCard borderAccentColor="#F43F5E">
              <h4 style={{ color: "var(--accent-rose)", marginBottom: "12px" }}>Главная когнитивная ловушка:</h4>
              <ul className="pl-5 space-y-2 text-sm leading-relaxed">
                <li><strong>Внешне направляемая речь (Mimicry):</strong> Диктор уже выбрал грамматику, нашел слова и задал интонацию. Ваш мозг работает как ретранслятор, а не генератор.</li>
                <li><strong>The Production Gap:</strong> На созвоне диктора нет. Мозг должен сам за 200 мс извлечь мысль из ментального лексикона под давлением.</li>
                <li><strong>Иллюзия беглости:</strong> Вы можете идеально повторять за спикером в наушниках, но при спонтанном вопросе тимлида язык застывает.</li>
              </ul>
            </MethodCard>
          </div>
        </section>

        {/* SECTION 2 */}
        <section id="part-2">
          <h2 className="chapter-heading">02. Фундаментальные научные теории Second Language Acquisition (SLA)</h2>

          <p>
            Чтобы устная речь стала свободной, методика должна опираться на доказательную прикладную лингвистику, а не на советы из блогов.
          </p>

          <div className="editorial-table-wrap">
            <table className="editorial-table">
              <thead>
                <tr>
                  <th style={{ width: "28%" }}>Теория & Автор</th>
                  <th style={{ width: "36%" }}>Суть открытия</th>
                  <th style={{ width: "36%" }}>Применение в вашей практике</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>The Four Strands</strong><br />
                    <span className="badge-tag tag-blue">Пол Нэйшн (Paul Nation)</span>
                  </td>
                  <td>Сбалансированная система требует строго равного времени: 25% Input, 25% Output, 25% Language Study, 25% Fluency.</td>
                  <td>У вас перекос в сторону Input и Study. Нужно добавить <strong>25% самостоятельного Output</strong> и <strong>25% Fluency</strong> (скорость на знакомом).</td>
                </tr>
                <tr>
                  <td>
                    <strong>Output Hypothesis</strong><br />
                    <span className="badge-tag tag-green">Меррилл Суэйн (Merrill Swain)</span>
                  </td>
                  <td>Одного слушания недостаточно. Только порождая речь, мозг замечает «дыру» (Noticing the Gap) между замыслом и возможностями.</td>
                  <td>Каждый день обязательно говорить <strong>свои собственные мысли</strong> без подсказок диктора (голосовые заметки, монологи).</td>
                </tr>
                <tr>
                  <td>
                    <strong>The Noticing Hypothesis</strong><br />
                    <span className="badge-tag tag-amber">Ричард Шмидт (Richard Schmidt)</span>
                  </td>
                  <td>Пассивное слушание фоном не дает эффекта у взрослых. Усваивается только то, на что направлено сфокусированное осознанное внимание.</td>
                  <td>Короткие сессии по 15–20 минут с полным погружением дают в 5 раз больше, чем часовое фоновое радио.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Deliberate Practice</strong><br />
                    <span className="badge-tag tag-rose">Андерс Эрикссон (K. Anders Ericsson)</span>
                  </td>
                  <td>Повторение без локальной микро-цели не развивает беглость. Нужен режим легкого когнитивного дискомфорта и быстрая обратная связь.</td>
                  <td>Тренировать не «весь английский», а конкретный микро-навык: например, подстановка 4 глаголов в чанк за 30 секунд.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <QuoteCallout cite="Меррилл Суэйн, профессор прикладной лингвистики, University of Toronto">
            «Производство собственной речи заставляет учащегося перейти от чисто семантической обработки (понимание общего смысла) к синтаксической (конструирование формы). Слушание показывает, как говорят другие; только говорение учит говорить вас».
          </QuoteCallout>
        </section>

        {/* SECTION 3 */}
        <section id="part-3">
          <h2 className="chapter-heading">03. 5 недостающих элементов: Что внедрить в ежедневную практику</h2>

          <p>
            Вам не нужно ломать текущую рутину — она дает отличную фонетическую базу. Нужно добавить <strong>генеративный контур</strong>:
          </p>

          <MethodCard borderAccentColor="#3B82F6">
            <h4 style={{ color: "var(--accent-primary)", marginBottom: "8px" }}>1. Задержанный эхо-повтор (Delayed Shadowing)</h4>
            <p>
              Вместо одновременного бормотания встык за диктором сделайте задержку: прослушайте смысловой чанк из 3–6 слов (<em>«...when we ran into an unexpected latency spike...»</em>), поставьте паузу, задержите дыхание на 1.5 секунды и воспроизведите фразу из оперативной памяти с точно такой же просодией.
            </p>
            <p className="mb-0 text-sm text-slate-400">
              <strong>Научный эффект (Norman de Silva, Shuhei Kadota):</strong> Тренирует буфер кратковременной памяти. Фраза сохраняется не как набор звуков, а как целостный лексический блок.
            </p>
          </MethodCard>

          <MethodCard borderAccentColor="#10B981">
            <h4 style={{ color: "var(--accent-emerald)", marginBottom: "8px" }}>2. Дрилл «Speed Swapping» для каждого выученного чанка</h4>
            <p>
              Выучили чанк <code>Have you had a chance to [verb] yet?</code> — не останавливайтесь на одном примере. Засеките 30 секунд и вслух без пауз подставьте 4–5 своих реальных действий: <em>«to review my PR»</em>, <em>«to check the build»</em>, <em>«to look at the Figma mockups»</em>, <em>«to reply to the email»</em>.
            </p>
            <p className="mb-0 text-sm text-slate-400">
              <strong>Научный эффект:</strong> Мозг цементирует неизменяемый грамматический каркас и освобождает ресурсы для выбора глагола.
            </p>
          </MethodCard>

          <MethodCard borderAccentColor="#F59E0B">
            <h4 style={{ color: "var(--accent-amber)", marginBottom: "8px" }}>3. Техника 4/3/2 (Разгон беглости по Полу Нэйшну)</h4>
            <p>Выберите одну тему (например, итоги вчерашнего спринта или решение бага):</p>
            <ul className="pl-5 space-y-1.5 text-sm mb-3">
              <li><strong>Раунд 1 (4 минуты):</strong> Говорите на эту тему без подготовки на диктофон.</li>
              <li><strong>Раунд 2 (3 минуты):</strong> Расскажите то же самое за 3 минуты. Темп вырастет, вода уйдет.</li>
              <li><strong>Раунд 3 (2 минуты):</strong> Уложите всю суть в 2 минуты плотной речи.</li>
            </ul>
            <p className="mb-0 text-sm text-slate-400">
              <strong>Научный эффект:</strong> Автоматически выбрасываются междометия («эээ», «you know») и включаются компактные чанки.
            </p>
          </MethodCard>

          <MethodCard borderAccentColor="#F43F5E">
            <h4 style={{ color: "var(--accent-rose)", marginBottom: "8px" }}>4. Микро-транскрибирование (Dictogloss / 2 минуты в день)</h4>
            <p>
              Возьмите 15–20 секунд сложного подкаста без субтитров. Запишите в блокнот каждое слово дословно, прослушав 3 раза. Затем откройте субтитры и сличите красной ручкой.
            </p>
            <p className="mb-0 text-sm text-slate-400">
              <strong>Научный эффект:</strong> Вы физически увидите беглые редукции (<em>«what did you» → «whaddya»</em>, <em>«should have» → «shoulda»</em>). Слух учится декодировать сжатый нативный звук.
            </p>
          </MethodCard>

          <MethodCard borderAccentColor="#8B5CF6">
            <h4 style={{ color: "var(--accent-purple)", marginBottom: "8px" }}>5. Вечерний 2-минутный Voice Journal (Генеративный аутпут)</h4>
            <p>
              Перед сном запишите в «Избранное» Telegram или на диктофон 2 минуты голосового сообщения на английском: что сделано за день, с каким багом воевали, что в планах на завтра. Обязательно примените <strong>минимум 2 чанка</strong>, выученных сегодня.
            </p>
            <p className="mb-0 text-sm text-slate-400">
              <strong>Научный эффект:</strong> Ломает языковой барьер генерации собственных мыслей без текстовой опоры.
            </p>
          </MethodCard>
        </section>

        {/* SECTION 4 */}
        <section id="part-4">
          <h2 className="chapter-heading">04. Три готовых сценария идеальной дейли-рутины</h2>

          <p>
            Выбирайте сценарий в зависимости от плотности рабочего дня. Главное правило нейропластичности — <strong>ежедневная непрерывность</strong>, даже если у вас есть всего 20 минут.
          </p>

          <div className="editorial-table-wrap">
            <table className="editorial-table">
              <thead>
                <tr>
                  <th style={{ width: "20%" }}>Сценарий</th>
                  <th style={{ width: "15%" }}>Время</th>
                  <th style={{ width: "40%" }}>Пошаговая структура тренировки</th>
                  <th style={{ width: "25%" }}>Фокус дня</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Sprint</strong><br />
                    <span className="badge-tag tag-amber">Дни высокой загрузки</span>
                  </td>
                  <td><strong>20 мин</strong></td>
                  <td>
                    • <strong>6 мин:</strong> 3-ступенчатый шэдоуинг 45-сек аудио<br />
                    • <strong>6 мин:</strong> 2 чанка через дрилл Speed Swapping (вслух)<br />
                    • <strong>8 мин:</strong> Сжатый монолог 3/2 мин на диктофон
                  </td>
                  <td>Поддержание моторного тонуса и закрытие речевого затыка.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Standard</strong><br />
                    <span className="badge-tag tag-blue">Золотой стандарт B2→C1</span>
                  </td>
                  <td><strong>35 мин</strong></td>
                  <td>
                    • <strong>10 мин:</strong> Delayed Shadowing (слушаю чанк → пауза → повтор)<br />
                    • <strong>8 мин:</strong> 3–4 новых чанка (Tense Chunks или Dense Chunks)<br />
                    • <strong>8 мин:</strong> Техника 4/3/2 на рабочую тему дня<br />
                    • <strong>9 мин:</strong> AI Voice Sparring с Claude / ChatGPT Voice
                  </td>
                  <td>Баланс 4 потоков (Input, Output, Chunks, Fluency).</td>
                </tr>
                <tr>
                  <td>
                    <strong>Immersion</strong><br />
                    <span className="badge-tag tag-green">Выходной / Подготовка к офферу</span>
                  </td>
                  <td><strong>50 мин</strong></td>
                  <td>
                    • <strong>5 мин:</strong> Микро-транскрибирование 20 сек быстрой речи<br />
                    • <strong>10 мин:</strong> Delayed Shadowing с акцентом на просодию<br />
                    • <strong>10 мин:</strong> База карточек (<Link href="/learn-chunks" className="text-cyan-400 underline">learn-chunks</Link>) + Speed Swapping<br />
                    • <strong>15 мин:</strong> Спарринг с AI по вопросам поведенческого интервью (STAR)<br />
                    • <strong>10 мин:</strong> Voice Journaling и анализ пауз
                  </td>
                  <td>Максимальный прорыв в спонтанной речи и словарном поиске.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="part-5">
          <h2 className="chapter-heading">05. Ежедневный чек-лист эффективности и объективные метрики</h2>

          <p>
            В конце дня оцените тренировку по 3 контрольным вопросам:
          </p>

          <MethodCard borderAccentColor="#3B82F6">
            <ul className="pl-5 space-y-3 text-base">
              <li><strong>1. Был ли сегодня самостоятельный Output?</strong> Говорил ли я собственные мысли из головы хотя бы 3 минуты, а не только повторял за диктором?</li>
              <li><strong>2. Был ли Speed Swapping?</strong> Подставил ли я в выученный чанк 4 своих рабочих действия вслух?</li>
              <li><strong>3. Сработал ли замок губ (The Breath Lock)?</strong> Заменял ли я мычание («эээ») немой паузой и вдохом носом?</li>
            </ul>
          </MethodCard>

          <p>
            Если на все 3 вопроса ответ «Да» — ваш день дал чистый прирост к беглости речи уровня C1.
          </p>
        </section>

        {/* Footer */}
        <footer className="article-footer">
          <p>Материал входит в образовательный комплекс <strong>English Learn</strong>. Разбор чанков читайте в <Link href="/chunks">Мастерстве чанков</Link>, временные шаблоны в <Link href="/tense-chunks">Временных чанках</Link>, а карточки в <Link href="/learn-chunks">Базе чанков</Link>.</p>
          <p style={{ marginTop: "8px" }}>2026 • Доказательная методология беглости B2 → C1</p>
        </footer>
      </article>
    </>
  );
}
