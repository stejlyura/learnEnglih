import React from "react";
import Link from "next/link";
import { ReadingProgress, ArticleHeaderNav, ChunkItemRow } from "@/shared/ui";

export default function TenseChunksPage() {
  return (
    <>
      <ReadingProgress />
      <ArticleHeaderNav
        title="TENSE CHUNKS"
        badge="Plug & Play"
        badgeColor="emerald"
      />

      <article className="longread-container" id="top">
        <div className="article-meta-top">
          <span>Нейробиология видовременных форм</span>
          <span>•</span>
          <span>Время чтения: 11 минут</span>
        </div>

        <h1 className="article-title">
          Временные Чанки Plug & Play: Как Говорить во Временах без Таблиц и Расчетов
        </h1>

        <p className="article-lead">
          Почему математическое вычисление 12 временных форм в голове гарантирует затыки, как исследования Joan Bybee и Nick Ellis доказывают блочную природу грамматики и 24 готовых разъема от 1 до последнего.
        </p>

        <div className="article-info-strip">
          <div className="info-item"><span>Научная база:</span> <strong>Exemplar-Based Linguistics (Joan Bybee, Nick Ellis)</strong></div>
          <div className="info-item"><span>Ключевой навык:</span> <strong>Zero-Latency Tense Switching (переключение времен за 0.2 сек)</strong></div>
          <div className="info-item"><span>Формат:</span> <strong>24 готовых чанка-разъема под ежедневные задачи</strong></div>
        </div>

        <nav className="toc-box">
          <div className="toc-title">Содержание лонгрида</div>
          <ul className="toc-list">
            <li><a href="#tense-1"><span className="toc-num">01.</span> Научные исследования: Почему таблицы времен убивают спонтанную речь</a></li>
            <li><a href="#tense-2"><span className="toc-num">02.</span> Принцип Plug & Play: Жесткая голова и свободный слот</a></li>
            <li><a href="#tense-3"><span className="toc-num">03.</span> Блок 1 (#1–#4): Present Perfect (Результат к этой минуте)</a></li>
            <li><a href="#tense-4"><span className="toc-num">04.</span> Блок 2 (#5–#7): Present Perfect Continuous (Длительный процесс)</a></li>
            <li><a href="#tense-5"><span className="toc-num">05.</span> Блок 3 (#8–#10): Past Continuous (Фон и прерывание)</a></li>
            <li><a href="#tense-6"><span className="toc-num">06.</span> Блок 4 (#11–#12): Used to (Было раньше vs стало сейчас)</a></li>
            <li><a href="#tense-7"><span className="toc-num">07.</span> Блок 5 (#13–#15): Планы, таймлайны и обязательства</a></li>
            <li><a href="#tense-8"><span className="toc-num">08.</span> Блок 6 (#16–#19): Условные предложения и советы без формул</a></li>
            <li><a href="#tense-9"><span className="toc-num">09.</span> Блок 7 (#20–#24): Разбор полетов, сожаления и ретроспективы</a></li>
            <li><a href="#tense-10"><span className="toc-num">10.</span> Метод тренировки Speed Swapping</a></li>
          </ul>
        </nav>

        {/* SECTION 1 */}
        <section id="tense-1">
          <h2 className="chapter-heading">01. Научные исследования: Почему таблицы времен убивают спонтанную речь</h2>

          <p>
            Когда человеку на рабочем митинге нужно сказать простую мысль во времени <em>Present Perfect Continuous</em> (например, «я все утро дебажу этот баг»), традиционная грамматическая модель требует выполнить в уме 5 последовательных шагов:
          </p>

          <ol style={{ paddingLeft: "24px", marginBottom: "24px", lineHeight: "1.8" }}>
            <li>Выбрать подлежащее (<em>I</em> или <em>We</em>).</li>
            <li>Выбрать форму вспомогательного глагола (<em>have</em> или <em>has</em>).</li>
            <li>Присоединить третью форму глагола to be (<em>been</em>).</li>
            <li>Вспомнить смысловой глагол <em>debug</em> и прикрепить суффикс <em>-ing</em>.</li>
            <li>Выбрать предлог времени (<em>for</em> или <em>since</em>).</li>
          </ol>

          <p>
            В условиях реального разговора эта вычислительная цепочка занимает <strong>от 1.5 до 3 секунд</strong>. Человек замирает, отводит взгляд, рот зависает в полуоткрытом состоянии и издает звук <strong>«ээээ»</strong>.
          </p>

          <blockquote className="quote-callout">
            «Грамматика естественного языка не хранится в мозге как абстрактная алгебра правил. Она организована как сеть высокочастотных лексических экземпляров (Exemplars). Носители языка говорят грамматически правильно не потому, что быстро считают формулы, а потому, что выстреливают готовые аспектуальные блоки».
            <cite>Джоан Байби (Joan Bybee), «Language, Usage and Cognition», Cambridge University Press</cite>
          </blockquote>

          <p>
            Исследования профессора Ника Эллиса (Nick C. Ellis) по когнитивной обработке глагольных форм подтвердили: взрослые учащиеся терпят крах в 80% случаев, если пытаются сознательно конструировать видовременные формы (<em>Explicit Computation</em>) в реальном времени. Но когда они заучивают <strong>готовые аспектуальные рамки (Formulaic Aspectual Frames)</strong>, беглость возрастает мгновенно.
          </p>
        </section>

        {/* SECTION 2 */}
        <section id="tense-2">
          <h2 className="chapter-heading">02. Принцип Plug & Play: Жесткая голова и свободный слот</h2>

          <p>
            Временной чанк Plug & Play устроен гениально просто:
          </p>

          <div className="method-card">
            <h4>1. Жесткая голова (The Head)</h4>
            <p>Вспомогательные глаголы, предлоги и временные формы уже на 100% согласованы. Ошибиться грамматически невозможно, потому что вы произносите их как одно неделимое слово.</p>
            <h4>2. Свободный слот (The Slot)</h4>
            <p style={{ marginBottom: 0 }}>Сюда подставляется только действие текущей секунды: конкретный тикет, баг или фича.</p>
          </div>

          <p>
            Ниже представлен полный пошаговый каталог из <strong>24 ключевых временных чанков</strong>, выстроенный строго по порядку от 1 до последнего.
          </p>
        </section>

        {/* SECTION 3: Present Perfect */}
        <section id="tense-3">
          <h2 className="chapter-heading">03. Блок 1 (#1–#4): Present Perfect (Результат к этой минуте)</h2>
          <p>Снимает 60% страха перед временами группы Perfect. Обозначает факт, актуальный прямо сейчас.</p>

          <div className="method-card">
            <div className="method-card-header">
              <span className="block-badge">Блок 1 • Чанки 1–4</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Present Perfect</span>
            </div>

            <ChunkItemRow
              num="1"
              title="I've already [past participle] [X]"
              trans="«Я уже сделал это (к этой минуте всё готово)»"
              exEn="I've already patched the vulnerability on staging."
              exRu="Я уже пропатчил уязвимость на стейджинге."
            />

            <ChunkItemRow
              num="2"
              title="Have you had a chance to [verb] yet?"
              trans="«У тебя уже была возможность глянуть / сделать?» (самый частый рабочий вопрос)"
              exEn="Have you had a chance to look over the new API contract yet?"
              exRu="У тебя получилось уже глянуть новый контракт API?"
            />

            <ChunkItemRow
              num="3"
              title="We've run into an issue with [X]"
              trans="«Мы столкнулись с проблемой в... (прямо сейчас боремся с ней)»"
              exEn="We've run into an issue with CORS on the new subdomain."
              exRu="Мы наткнулись на проблему с CORS на новом поддомене."
            />

            <ChunkItemRow
              num="4"
              title="I haven't seen [X] yet"
              trans="«Я пока этого не видел / до меня это еще не дошло»"
              exEn="I haven't seen the updated design mockups yet, could you share the link?"
              exRu="Я еще не видел обновленные макеты, скинешь ссылку?"
            />
          </div>
        </section>

        {/* SECTION 4: Present Perfect Continuous */}
        <section id="tense-4">
          <h2 className="chapter-heading">04. Блок 2 (#5–#7): Present Perfect Continuous (Длительный процесс)</h2>
          <p>Описывает процесс, который начался в прошлом и без остановки тянется до текущей секунды.</p>

          <div className="method-card">
            <div className="method-card-header">
              <span className="block-badge">Блок 2 • Чанки 5–7</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Present Perfect Continuous</span>
            </div>

            <ChunkItemRow
              num="5"
              title="I've been working on [X] all morning"
              trans="«Я всё утро пилю / делаю эту задачу»"
              exEn="I've been working on optimizing SQL queries all morning."
              exRu="Я все утро оптимизирую SQL-запросы."
            />

            <ChunkItemRow
              num="6"
              title="We've been dealing with [X] since [time]"
              trans="«Мы воюем с этой проблемой с такого-то времени»"
              exEn="We've been dealing with these connection drops since yesterday's release."
              exRu="Мы воюем с этими обрывами соединений со вчерашнего релиза."
            />

            <ChunkItemRow
              num="7"
              title="How long have you been seeing this error?"
              trans="«Как давно у вас воспроизводится эта ошибка?» (дебаг)"
              exEn="How long have you been seeing this 504 gateway timeout in production?"
              exRu="Как давно вы наблюдаете этот 504-й таймаут на проде?"
            />
          </div>
        </section>

        {/* SECTION 5: Past Continuous */}
        <section id="tense-5">
          <h2 className="chapter-heading">05. Блок 3 (#8–#10): Past Continuous (Фон и прерывание)</h2>
          <p>Идеально для объяснения инцидентов: чем именно вы занимались, когда произошел сбой.</p>

          <div className="method-card">
            <div className="method-card-header">
              <span className="block-badge">Блок 3 • Чанки 8–10</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Past Continuous</span>
            </div>

            <ChunkItemRow
              num="8"
              title="I was in the middle of [verb-ing] when [X] happened"
              trans="«Я был прямо посреди процесса, когда...»"
              exEn="I was in the middle of running migrations when the database disconnected."
              exRu="Я был прямо посреди наката миграций, когда отвалилась база данных."
            />

            <ChunkItemRow
              num="9"
              title="I was just about to [verb] when..."
              trans="«Я как раз собирался сделать это, когда...»"
              exEn="I was just about to ping you when your message popped up in Slack."
              exRu="Я как раз собирался написать тебе, когда твое сообщение всплыло в слаке."
            />

            <ChunkItemRow
              num="10"
              title="We were looking into [X], but..."
              trans="«Мы как раз исследовали этот вопрос, но...»"
              exEn="We were looking into Kafka partitions, but higher priority bugs came in."
              exRu="Мы как раз изучали партиции в Кафке, но прилетели более горящие баги."
            />
          </div>
        </section>

        {/* SECTION 6: Used to */}
        <section id="tense-6">
          <h2 className="chapter-heading">06. Блок 4 (#11–#12): Used to (Было раньше vs стало сейчас)</h2>
          <p>Для архитектурных сравнений и демонстрации прогресса проекта.</p>

          <div className="method-card">
            <div className="method-card-header">
              <span className="block-badge">Блок 4 • Чанки 11–12</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Used to / Habits</span>
            </div>

            <ChunkItemRow
              num="11"
              title="We used to [verb], but now we [verb]"
              trans="«Раньше мы делали так, а теперь делаем иначе»"
              exEn="We used to deploy manually on Fridays, but now we use automated CI/CD pipelines."
              exRu="Раньше мы деплоили вручную по пятницам, а теперь используем авто-пайплайны."
            />

            <ChunkItemRow
              num="12"
              title="It used to take [time], but now..."
              trans="«Раньше на это уходило столько-то времени, а теперь...»"
              exEn="Builds used to take 25 minutes, but now they complete in under four."
              exRu="Сборки раньше занимали 25 минут, а теперь проходят быстрее четырех."
            />
          </div>
        </section>

        {/* SECTION 7: Future Plans */}
        <section id="tense-7">
          <h2 className="chapter-heading">07. Блок 5 (#13–#15): Планы, таймлайны и обязательства</h2>
          <p>Профессиональный язык спринтов вместо скучного и однообразного «I will do».</p>

          <div className="method-card">
            <div className="method-card-header">
              <span className="block-badge">Блок 5 • Чанки 13–15</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Future & Milestones</span>
            </div>

            <ChunkItemRow
              num="13"
              title="We're on track to [verb] by [time]"
              trans="«Мы идем по графику и успеваем сделать к сроку»"
              exEn="We're on track to ship the MVP by the end of next week."
              exRu="Мы идем четко по графику и успеваем выкатить MVP к концу следующей недели."
            />

            <ChunkItemRow
              num="14"
              title="We're planning on [verb-ing]..."
              trans="«Мы планируем сделать в ближайшее время»"
              exEn="We're planning on upgrading our Node runtime next sprint."
              exRu="Мы планируем обновить рантайм Node в следующем спринте."
            />

            <ChunkItemRow
              num="15"
              title="I'll make sure to [verb]..."
              trans="«Я лично проконтролирую / обязательно сделаю это»"
              exEn="I'll make sure to add end-to-end tests before merging this branch."
              exRu="Я обязательно допишу сквозные тесты перед тем, как влить эту ветку."
            />
          </div>
        </section>

        {/* SECTION 8: Conditionals */}
        <section id="tense-8">
          <h2 className="chapter-heading">08. Блок 6 (#16–#19): Условные предложения и советы без формул</h2>
          <p>Устраняет необходимость вычислять согласование времен в условных конструкциях.</p>

          <div className="method-card">
            <div className="method-card-header">
              <span className="block-badge">Блок 6 • Чанки 16–19</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Conditionals</span>
            </div>

            <ChunkItemRow
              num="16"
              title="It would be great if you could [verb]..."
              trans="«Было бы здорово, если бы ты мог...» (идеальная просьба)"
              exEn="It would be great if you could review this ticket before the standup."
              exRu="Было бы здорово, если бы ты глянул этот тикет до стендапа."
            />

            <ChunkItemRow
              num="17"
              title="If I were you, I would just [verb]..."
              trans="«На твоем месте я бы просто...» (экспертный совет)"
              exEn="If I were you, I would just roll back the latest commit and debug locally."
              exRu="На твоем месте я бы просто откатил последний коммит и дебажил локально."
            />

            <ChunkItemRow
              num="18"
              title="What would happen if we [past-verb]...?"
              trans="«А что произойдет, если мы...?» (проверка сценария)"
              exEn="What would happen if we dropped this legacy index right now?"
              exRu="А что произойдет, если мы дропнем этот старый индекс прямо сейчас?"
            />

            <ChunkItemRow
              num="19"
              title="If we do [X], it will [verb]..."
              trans="«Если мы сделаем X, это приведет к...» (четкий прогноз)"
              exEn="If we cache user profiles in Redis, it will cut latency in half."
              exRu="Если мы закэшируем профили пользователей в Редисе, это срежет задержку вдвое."
            />
          </div>
        </section>

        {/* SECTION 9: Past Modals */}
        <section id="tense-9">
          <h2 className="chapter-heading">09. Блок 7 (#20–#24): Разбор полетов, сожаления и ретроспективы</h2>
          <p>Инструмент сеньор-инженеров при анализе багов, ретроспективах и разборе инцидентов.</p>

          <div className="method-card">
            <div className="method-card-header">
              <span className="block-badge">Блок 7 • Чанки 20–24</span>
              <span style={{ fontWeight: 700, color: "#FFF" }}>Past Modals & Retrospectives</span>
            </div>

            <ChunkItemRow
              num="20"
              title="We should have [past participle] earlier..."
              trans="«Нам следовало сделать это раньше... (сожаление о несделанном)»"
              exEn="We should have enabled database replication before the marketing campaign launched."
              exRu="Нам следовало включить репликацию базы до старта маркетинговой кампании."
            />

            <ChunkItemRow
              num="21"
              title="We could have [past participle], but..."
              trans="«Мы могли бы поступить так, но... (рассмотрение альтернативы)»"
              exEn="We could have patched the script, but rewriting it was cleaner."
              exRu="Мы могли бы залататать скрипт, но переписать его с нуля было чище."
            />

            <ChunkItemRow
              num="22"
              title="It must have been [noun / adjective]..."
              trans="«Должно быть, это было... (логический вывод о прошлом)»"
              exEn="It must have been a memory leak that caused the container restart."
              exRu="Должно быть, именно утечка памяти вызвала рестарт контейнера."
            />

            <ChunkItemRow
              num="23"
              title="I couldn't have [past participle] without [X]..."
              trans="«Я бы не справился без... (благодарность коллегам)»"
              exEn="I couldn't have tracked down this race condition without your help."
              exRu="Я бы ни за что не отловил эту гонку состояний без твоей помощи."
            />

            <ChunkItemRow
              num="24"
              title="If we had known about this, we would have [past participle]..."
              trans="«Если бы мы знали об этом раньше, мы бы сделали...»"
              exEn="If we had known about the API rate limits, we would have added queue buffering from day one."
              exRu="Если бы мы знали про лимиты API, мы бы с первого дня добавили буферизацию через очереди."
            />
          </div>
        </section>

        {/* SECTION 10 */}
        <section id="tense-10">
          <h2 className="chapter-heading">10. Метод тренировки Speed Swapping</h2>

          <p>
            Чтобы временной каркас перешел из пассивного понимания в автоматический спинномозговой рефлекс:
          </p>

          <ol className="editorial-steps">
            <li>
              <h4>Изолируйте жесткую голову (The Head)</h4>
              <p>
                Произнесите каркас <strong>I was in the middle of</strong> слитно, на одном выдохе: <em>«Ай-уоз-ин-зэ-мидл-ов»</em>. Не допускайте пауз между словами.
              </p>
            </li>

            <li>
              <h4>Дрилл замены действия за 20 секунд</h4>
              <p>
                Быстро, не задумываясь о временах, подставьте 3 действия из своей работы:
              </p>
              <div style={{ background: "rgba(0,0,0,0.35)", padding: "18px 22px", borderRadius: "14px", fontFamily: "var(--font-mono)", fontSize: "0.95rem", lineHeight: "1.75", margin: "16px 0", border: "1px solid rgba(255,255,255,0.06)" }}>
                1. I was in the middle of refactoring when the alert fired.<br />
                2. I was in the middle of writing unit tests when my laptop rebooted.<br />
                3. I was in the middle of testing when the client called.
              </div>
            </li>

            <li>
              <h4>Критерий готовности</h4>
              <p>
                Чанк считается внедренным, когда рот начинает произносить временную конструкцию <strong>автоматически за 0.2 секунды</strong>, а голова успевает сформулировать саму суть проблемы.
              </p>
            </li>
          </ol>

          <blockquote className="quote-callout">
            «Забудьте про таблицы времен на 12 ячеек. В реальном мире никто не рассчитывает грамматику. Освойте эти 24 шаблона — и вы будете говорить во всех нужных временах с легкостью носителя языка».
            <cite>Методология Tense Chunks</cite>
          </blockquote>
        </section>

        <footer className="article-footer">
          <p>
            Материал входит в образовательный комплекс <strong>English Learn</strong>. Полная картотека доступна в{" "}
            <Link href="/learn-chunks" className="text-cyan-400 font-bold hover:underline">learn-chunks</Link>, плотные сочленения — в{" "}
            <Link href="/dense-structure" className="text-indigo-400 font-bold hover:underline">dense-structure</Link>, а теория чанков — в{" "}
            <Link href="/chunks" className="text-emerald-400 font-bold hover:underline">chunks</Link>.
          </p>
          <p style={{ marginTop: "12px", color: "var(--text-dim)" }}>2026 • Plug & Play Tense Chunks Methodology</p>
        </footer>
      </article>
    </>
  );
}
