import React from "react";
import Link from "next/link";
import { ArticleHeaderNav, ChunkItemRow, QuoteCallout, MethodCard } from "@/shared/ui";
import { TableOfContents, ToCItem } from "@/widgets/table-of-contents";
import { LongreadSelectorDropdown } from "@/features/longread-selector";

const TOC_ITEMS: readonly ToCItem[] = [
  { id: "part-1", title: "01. Научные исследования: Холистическая обработка против синтаксиса" },
  { id: "part-2", title: "02. Анатомия сложности: Почему русскоязычный мозг спотыкается на этих фразах" },
  { id: "part-3", title: "03. Уровень 1: Фундамент действий и результатов (Стендапы и задачи)" },
  { id: "part-4", title: "04. Уровень 2: Процессы, привычки и объяснения задержек" },
  { id: "part-5", title: "05. Уровень 3: Дипломатия, сожаления и гипотезы C1" },
  { id: "part-6", title: "06. Метод тренировки Slot-Pacing (Артикуляция на одном выдохе)" },
] as const;

export default function DenseStructurePage() {
  return (
    <>
      <ArticleHeaderNav
        title="DENSE STRUCTURAL CHUNKS"
        badge="Deep Grammar"
        activeRoute="/dense-structure"
      />

      <article className="longread-container" id="top">
        {/* Top Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 rounded-2xl bg-white/[0.03] border border-white/10">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Библиотека лонгридов</span>
            <span>•</span>
            <span className="text-violet-400 font-semibold">Всего 9 материалов</span>
          </div>
          <LongreadSelectorDropdown currentSlug="dense-structure" />
        </div>

        <div className="article-meta-top">
          <span>Психолингвистика & Корпусный анализ</span>
          <span>•</span>
          <span>Время чтения: 12 минут</span>
        </div>

        <h1 className="article-title">Плотные Структурные Чанки: Почему Мозг Зависает и Как их Освоить</h1>

        <p className="article-lead">
          Разбор феномена конструкций вроде <em>«I haven&apos;t gotten around to»</em> или <em>«I was supposed to»</em>: научные исследования Alison Wray и Douglas Biber, природа грамматических ловушек и 3 уровня приоритета для свободного говорения.
        </p>

        <div className="article-info-strip">
          <div className="info-item"><span>Ключевая теория:</span> <strong>Holistic Processing Hypothesis (Alison Wray)</strong></div>
          <div className="info-item"><span>Статистика корпуса:</span> <strong>&gt;30% разговорного регистра (Douglas Biber)</strong></div>
          <div className="info-item"><span>Метод тренировки:</span> <strong>Slot-Pacing без пословного анализа</strong></div>
        </div>

        {/* Table of Contents */}
        <TableOfContents items={TOC_ITEMS} />

        {/* SECTION 1 */}
        <section id="part-1">
          <h2 className="chapter-heading">01. Научные исследования: Холистическая обработка против синтаксиса</h2>

          <p>
            Фразы вроде <em>«I haven&apos;t gotten around to reviewing...»</em> или <em>«We ended up rewriting...»</em> кажутся изучающим английский язык обманчиво простыми на слух, но вызывают непреодолимый ступор при попытке сказать их спонтанно.
          </p>

          <p>
            В прикладной психолингвистике такие связки называют <strong>Dense Structural Chunks (плотными структурными сочленениями)</strong> или <strong>Formulaic Sequences (формульными последовательностями)</strong>.
          </p>

          <QuoteCallout cite="Элисон Рэй (Alison Wray), «Formulaic Language and the Lexicon», Cambridge University Press">
            «Человеческий мозг эволюционно оптимизирован для экономии когнитивной энергии. В живой коммуникации он хранит сложные многокомпонентные грамматические структуры как единые неанализируемые блоки (Holistic Storage). Если носитель языка каждый раз вычислял бы формы глаголов и предлоги заново, речь была бы медленной и разорванной».
          </QuoteCallout>

          <p>
            В исследовании Дугласа Байбера (Douglas Biber) <em>«Longman Grammar of Spoken and Written English»</em> на корпусе сотен миллионов слов было доказано:
          </p>
          <ul className="pl-6 mb-6 space-y-2.5">
            <li>Конструкции типа <strong>[Глагол + модальное сочленение + дополнительное придаточное]</strong> занимают свыше <strong>30% всей спонтанной устной речи</strong> носителей.</li>
            <li>Время реакции (Reaction Time) речевого аппарата на извлечение такого готового блока составляет всего <strong>150–250 миллисекунд</strong> против <strong>800–1400 миллисекунд</strong> при попытке пословной сборки.</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section id="part-2">
          <h2 className="chapter-heading">02. Анатомия сложности: Почему русскоязычный мозг спотыкается на этих фразах</h2>

          <p>
            В русском языке грамматика флективная: падежные окончания и приставки четко показывают отношения между словами. В английском языке сочленение идей происходит через <strong>фиксированный порядок служебных слов и предлогов</strong>.
          </p>

          <MethodCard borderAccentColor="#F43F5E">
            <h4 style={{ color: "var(--accent-rose)", marginBottom: "12px" }}>Ловушка №1: Конфликт предлога TO</h4>
            <p>
              В школе нас учили: <em>«После частицы to идет инфинитив (to do, to go)»</em>.<br />
              Но в сочленениях <strong>get around to</strong>, <strong>be used to</strong>, <strong>look forward to</strong> слово <em>to</em> — это не инфинитивная частица, а <strong>полноценный предлог направления</strong>. А после любого английского предлога может стоять только существительное или герундий с окончанием <span className="formula-tag">-ing</span>.
            </p>
            <p className="mb-0">
              Когда не-носитель пытается сказать это на ходу, мозг видит <em>to</em> и автоматически блокирует окончание <em>-ing</em>. Возникает сбой, паника и то самое «эээ».
            </p>
          </MethodCard>

          <MethodCard borderAccentColor="#F59E0B">
            <h4 style={{ color: "var(--accent-amber)", marginBottom: "12px" }}>Ловушка №2: Скрытая модальность (Supposed to)</h4>
            <p className="mb-0">
              В русском мы говорим: <em>«Я должен был по плану задеплоить»</em>. В английском нет прямого модального глагола для слова «по плану». Английский упаковывает это в пассивную конструкцию: <strong>«I was supposed to deploy»</strong> (буквально: «предполагалось, что я задеплою»). Мозг пытается перевести слово «должен» как <em>must</em> или <em>had to</em>, что звучит совершенно неправильно.
            </p>
          </MethodCard>

          <MethodCard borderAccentColor="#06B6D4">
            <h4 style={{ color: "var(--accent-secondary)", marginBottom: "12px" }}>Ловушка №3: Сжатая результативность (Ended up)</h4>
            <p className="mb-0">
              Вместо громоздких русских конструкций: <em>«В конечном счете в результате всех событий вышло так, что мы...»</em> англичанин говорит всего два слова: <strong>«We ended up rewriting...»</strong>. Это невероятно компактная компрессия смысла.
            </p>
          </MethodCard>
        </section>

        {/* SECTION 3 */}
        <section id="part-3">
          <h2 className="chapter-heading">03. Уровень 1: Фундамент действий и результатов (Стендапы и задачи)</h2>
          <p>Осваивайте эти сочленения первыми. Они закрывают ежедневные рабочие отчеты, объяснение сделанного и непредвиденных результатов.</p>

          <div className="method-card">
            <div className="method-card-header">
              <span className="tier-badge tier-1">Уровень 1 • Неделя 1</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Фундамент координации</span>
            </div>

            <ChunkItemRow
              num="1"
              title="I was supposed to [verb], but..."
              trans="«Я должен был по плану / договоренности, но...»"
              exEn="I was supposed to merge the auth PR this morning, but staging was completely down."
              exRu="Я должен был влить PR по авторизации утром, но стейджинг полностью лежал."
            />

            <ChunkItemRow
              num="2"
              title="We ended up [verb-ing]..."
              trans="«В итоге вышло так, что мы... / В конечном счете мы...»"
              exEn="We evaluated three cloud providers, but ended up sticking with AWS."
              exRu="Мы оценили трех провайдеров, но в итоге решили остаться на AWS."
            />

            <ChunkItemRow
              num="3"
              title="I managed to [verb]..."
              trans="«Мне удалось / получилось сделать (преодолев трудности)»"
              exEn="After three hours of debugging, I managed to reproduce the deadlock locally."
              exRu="После трех часов дебага мне удалось воспроизвести взаимную блокировку локально."
            />

            <ChunkItemRow
              num="4"
              title="I didn't mean to [verb]..."
              trans="«Я не хотел / сделал это ненарочно (снятие вины)»"
              exEn="Sorry about the pipeline break, I didn't mean to push to master directly."
              exRu="Прости за упавший пайплайн, я случайно запушил напрямую в мастер."
            />

            <ChunkItemRow
              num="5"
              title="It took me a while to [verb]..."
              trans="«У меня ушло довольно много времени на то, чтобы...»"
              exEn="It took me a while to figure out how this legacy billing module processes refunds."
              exRu="У меня ушла куча времени на то, чтобы понять, как этот старый биллинг обрабатывает возвраты."
            />

            <ChunkItemRow
              num="6"
              title="We're about to [verb]..."
              trans="«Мы вот-вот сделаем / находимся в шаге от...»"
              exEn="Hold on a second, we're about to trigger the production deployment right now."
              exRu="Секунду, мы прямо сейчас вот-вот запустим деплой на прод."
            />
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="part-4">
          <h2 className="chapter-heading">04. Уровень 2: Процессы, привычки и объяснения задержек</h2>
          <p>Осваивайте во вторую очередь. Они объясняют причины, почему что-то еще не сделано, случайные находки и привычки.</p>

          <div className="method-card">
            <div className="method-card-header">
              <span className="tier-badge tier-2">Уровень 2 • Неделя 2</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Процессы и задержки</span>
            </div>

            <ChunkItemRow
              num="7"
              title="I haven't gotten around to [verb-ing] yet"
              trans="«У меня пока руки не дошли сделать это» (строго с -ing!)"
              exEn="I haven't gotten around to writing the documentation yet, will tackle it this afternoon."
              exRu="У меня пока руки не дошли написать документацию, займусь этим после обеда."
              tip="Помните: слово to здесь предлог, поэтому глагол только с окончанием -ing!"
            />

            <ChunkItemRow
              num="8"
              title="I happened to [verb]..."
              trans="«Я случайно / так совпало, что я...»"
              exEn="I happened to check the error logs and noticed a huge spike in database connection timeouts."
              exRu="Я случайно глянул в логи ошибок и заметил огромный всплеск таймаутов базы."
            />

            <ChunkItemRow
              num="9"
              title="I'm not used to [verb-ing]..."
              trans="«Я пока не привык к тому, чтобы...» (строго с -ing!)"
              exEn="I'm not used to working without local database seeds, so setup is taking longer."
              exRu="Я пока не привык работать без локальных сидов базы, поэтому настройка идет дольше."
              tip="Used to [doing] описывает текущее состояние привычки, поэтому -ing обязателен."
            />

            <ChunkItemRow
              num="10"
              title="I feel like [verb-ing / clause]..."
              trans="«Мне кажется / не покидает ощущение, что...»"
              exEn="I feel like we're overcomplicating this state management architecture."
              exRu="Мне кажется, мы излишне усложняем архитектуру управления состоянием."
            />

            <ChunkItemRow
              num="11"
              title="What it boils down to is [noun / verb-ing]..."
              trans="«В сухом остатке всё сводится к...»"
              exEn="What it boils down to is cutting query latency by 40% before Black Friday."
              exRu="К чему всё сводится — нужно срезать задержку запросов на 40% до Черной Пятницы."
            />

            <ChunkItemRow
              num="12"
              title="I'm looking forward to [verb-ing]..."
              trans="«Жду с нетерпением...» (строго с -ing!)"
              exEn="I'm really looking forward to collaborating with the mobile infrastructure team."
              exRu="С нетерпением жду совместной работы с командой мобильной инфраструктуры."
              tip="Строго с герундием (-ing): looking forward to collaborating/shipping/seeing."
            />
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="part-5">
          <h2 className="chapter-heading">05. Уровень 3: Дипломатия, сожаления и гипотезы C1</h2>
          <p>Осваивайте в третью очередь. Это язык тимлидов, старших разработчиков и архитекторов при разборе инцидентов и переговорах.</p>

          <div className="method-card">
            <div className="method-card-header">
              <span className="tier-badge tier-3">Уровень 3 • Неделя 3–4</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Дипломатия и ретроспективы</span>
            </div>

            <ChunkItemRow
              num="13"
              title="I was wondering if you could [verb]..."
              trans="«Я тут подумал, не мог бы ты...» (высшая степень нативной вежливости)"
              exEn="I was wondering if you could jump on a quick five-minute call to align on acceptance criteria?"
              exRu="Я тут подумал, не мог бы ты созвониться со мной на 5 минут, чтобы сверить критерии приемки?"
            />

            <ChunkItemRow
              num="14"
              title="I can't help but feel that [X]..."
              trans="«Не могу отделаться от ощущения, что...»"
              exEn="I can't help but feel that releasing on a Friday afternoon is asking for trouble."
              exRu="Не могу отделаться от ощущения, что релизить в пятницу днем — это напрашиваться на неприятности."
            />

            <ChunkItemRow
              num="15"
              title="We should have [past participle]..."
              trans="«Нам следовало (сделать иначе в прошлом)...»"
              exEn="In hindsight, we should have pinned our docker dependencies before migrating."
              exRu="Оглядываясь назад, нам следовало зафиксировать версии докера до начала миграции."
            />

            <ChunkItemRow
              num="16"
              title="Could we have avoided this if we had [past participle]...?"
              trans="«Могли ли мы избежать этого, если бы...?»"
              exEn="Could we have avoided this data corruption if we had run schema migrations in dry-run mode?"
              exRu="Могли ли мы избежать повреждения данных, если бы прогнали миграции в тестовом режиме?"
            />

            <ChunkItemRow
              num="17"
              title="If it hadn't been for [X], we would have [past participle]..."
              trans="«Если бы не X, мы бы уже...»"
              exEn="If it hadn't been for that third-party outage, we would have shipped the release on time."
              exRu="Если бы не падение внешнего сервиса, мы бы выпустили релиз строго вовремя."
            />

            <ChunkItemRow
              num="18"
              title="It's not worth [verb-ing]..."
              trans="«Это не стоит того, чтобы тратить силы на...»"
              exEn="It's not worth refactoring this legacy controller when we're deprecating the service next sprint."
              exRu="Не стоит рефакторить этот старый контроллер, раз уж мы выводим сервис из эксплуатации в следующем спринте."
            />
          </div>
        </section>

        {/* SECTION 6 */}
        <section id="part-6">
          <h2 className="chapter-heading">06. Метод тренировки Slot-Pacing (Артикуляция на одном выдохе)</h2>

          <p>
            Плотные структурные сочленения нельзя учить глазами. Их нужно внедрить в двигательную кору речевого аппарата.
          </p>

          <ol className="editorial-steps">
            <li>
              <h4>Артикуляционная склейка (Connected Speech)</h4>
              <p>
                Произнесите каркас <strong>I haven&apos;t gotten around to</strong> как одно длинное неразрывное слово на одном выдохе:<br />
                <span className="formula-tag">/aɪ ˈhævnt ˈɡɒtn əˈraʊnd tuː/</span>. Никаких пауз между словами.
              </p>
            </li>

            <li>
              <h4>Дрилл «3 переменные за 15 секунд»</h4>
              <p>
                Возьмите конструкцию первого уровня (например: <strong>We ended up</strong>) и произнесите вслух 3 реальные ситуации из своего проекта:
              </p>
              <div style={{ background: "rgba(0,0,0,0.3)", padding: "16px", borderRadius: "8px", fontFamily: "var(--font-mono)", fontSize: "0.9rem", lineHeight: 1.7, margin: "12px 0" }}>
                1. We ended up reverting the deployment.<br />
                2. We ended up scheduling an emergency sync.<br />
                3. We ended up rewriting the query from scratch.
              </div>
            </li>

            <li>
              <h4>Контроль автоматизма: правило 0.5 секунды</h4>
              <p>
                Конструкция считается освоенной, когда при мысли «мне удалось» язык начинает фразу с <em>«I managed to...»</em> мгновенно, без внутреннего перевода и сомнений о форме глагола.
              </p>
            </li>
          </ol>

          <QuoteCallout>
            «Перестаньте вычислять грамматику на созвоне. Доверьтесь готовым синтаксическим рельсам. Выстреливайте плотный каркас целиком — и ваш английский станет гладким, плотным и взрослым».
          </QuoteCallout>
        </section>

        <footer className="article-footer">
          <p>Материал входит в образовательный комплекс <strong>English Learn</strong>. Картотека чанков доступна в <Link href="/learn-chunks">Базе чанков</Link>, а теория блочного мышления — в <Link href="/chunks">Мастерстве чанков</Link>.</p>
          <p style={{ marginTop: "8px" }}>2026 • Dense Structural Chunks Research & Methodology</p>
        </footer>
      </article>
    </>
  );
}
