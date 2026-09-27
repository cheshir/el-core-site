import founderPortrait from '../assets/tetiana-borysova.jpg';
import sviatPortrait from '../assets/sviat.jpg';
import alexPortrait from '../assets/alex.jpg';
import mariiaPortrait from '../assets/mariia.jpg';
import sashaPortrait from '../assets/sasha.jpg';
import TeamMemberDialog from './TeamMemberDialog';
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

export default function TeamExpertise() {
  const { language } = useLanguage();
  const c = (en: string, uk: string) => language === 'uk' ? uk : en;
  const [activeCase, setActiveCase] = useState(0);
  const [activePerson, setActivePerson] = useState<string | null>(null);
  const cases = [
    { title: c('Performance marketing', 'Performance marketing'), task: c('Build recruitment and HR from the business idea stage.', 'Побудувати рекрутинг і HR на етапі ідеї бізнесу.'), work: c('Our founder built the recruitment and HR foundation and shaped the HR system around Zero HR for further scaling.', 'Засновниця побудувала основу рекрутингу та HR і сформувала HR-систему на принципах Zero HR для подальшого масштабування.'), scale: c('The business grew to 130 people in nine months. Ten business lines reached break-even. The HR system was built over 18 months.', 'Бізнес виріс до 130 людей за дев’ять місяців. Десять напрямів вийшли на самоокупність. HR-систему побудовано за півтора року.') },
    { title: c('Recruitment across markets', 'Рекрутинг на різних ринках'), task: c('Prepare a European agency to move from 50 to 100 hires per month and enter new markets.', 'Підготувати європейську агенцію до переходу від 50 до 100 наймів на місяць і виходу на нові ринки.'), work: c('As Head of Recruitment and a board member, our founder rebuilt the function and assigned ownership by market.', 'У ролі Head of Recruitment та учасниці борду засновниця перебудувала функцію й розподілила відповідальність за ринками.'), scale: c('A team of four recruiters and two HR specialists. An average hiring plan of 150 people per month.', 'Команда з чотирьох рекрутерів і двох HR-фахівців. Середній план найму — 150 людей на місяць.') },
    { title: c('From hiring to a connected growth system', 'Від найму до системи росту'), task: c('A gambling product company needed key hires and better coordination between sales and marketing.', 'Продуктова gambling-компанія потребувала ключових наймів та узгодженої роботи продажів і маркетингу.'), work: c('Built an outbound strategy and lead-generation process, recruited an SMM specialist and brought coordination into one management structure.', 'Побудували outbound-стратегію та процес лідогенерації, найняли SMM-фахівця й об’єднали координацію в одній управлінській структурі.'), scale: c('Seven strategic hires in 90 days. Recruitment and sales processes connected in an externally managed team working as part of the business.', 'Сім стратегічних наймів за 90 днів. Рекрутинг і продажі поєднані в команді, яка працює ззовні як частина бізнесу.') },
    { title: c('A team for a defined business milestone', 'Команда під конкретний етап бізнесу'), task: c('A product startup needed 5+ specialists for a six-to-nine-month phase, without building a permanent team for temporary work.', 'Продуктовому стартапу потрібні були 5+ фахівців на етап тривалістю 6–9 місяців, без постійного штату під тимчасову задачу.'), work: c('Assembled a specialist team through outstaffing partners and defined the handover and offboarding process in advance.', 'Зібрали спеціалізовану команду через партнерів з аутстафінгу. Заздалегідь визначили передачу роботи й завершення співпраці.'), scale: c('The team was assembled in under 21 days. Hiring and overhead budget reduced by approximately 40%.', 'Команду зібрано менш ніж за 21 день. Бюджет найму та супутніх витрат скорочено приблизно на 40%.') },
    { title: c('An HR Director at the decision-making table', 'HR-директор на рівні управлінських рішень'), task: c('A large media corporation needed a board-level HR Director to connect people strategy with business decisions.', 'Великій медіакорпорації потрібен був HR-директор на рівні борду, щоб поєднати стратегію роботи з людьми та рішення бізнесу.'), work: c('Reframed the role around leadership responsibility, searched across industries and aligned the board and candidate on values. Designed a 100-day integration roadmap.', 'Переформулювали роль навколо управлінської відповідальності, провели пошук у різних індустріях та узгодили цінності кандидата й борду. Розробили план інтеграції на 100 днів.'), scale: c('Hired an HR leader with a place at the decision-making table and responsibility for organisational effectiveness and culture.', 'Найняли HR-лідера, який бере участь в управлінських рішеннях та відповідає за організаційну ефективність і культуру.') },
    { title: c('Scale the process before the headcount', 'Масштабувати процес перед розширенням штату'), task: c('A tech company planned to triple its recruitment team as vacancy volume grew, while the closing rate remained unchanged.', 'Технологічна компанія планувала потроїти команду рекрутингу: вакансій ставало більше, а темп закриття не змінювався.'), work: c('Audited the hiring process, set role priorities and agreed clear decision criteria with hiring managers.', 'Провели аудит найму, визначили пріоритети ролей та погодили чіткі критерії рішень із наймаючими менеджерами.'), scale: c('Closed 100% of priority roles without increasing recruitment headcount or operational costs. Reduced interview load on technical leaders.', 'Закрили 100% пріоритетних ролей без збільшення штату рекрутингу й операційних витрат. Зменшили навантаження співбесідами на технічних керівників.') },
  ];
  const team = [
    {
      id: 'sviat', name: c('Sviat', 'Святослав'), initials: 'S', photo: sviatPortrait, photoWidth: 640, photoHeight: 640,
      role: c('Operations Manager', 'Операційний менеджер'),
      thesis: c('Partnerships built to work long term.', 'Партнерства, побудовані для тривалої співпраці.'),
      facts: [
        c('Alignment between business priorities and delivery', 'Узгодження бізнес-пріоритетів і реалізації'),
        c('Clear partnership structure and communication', 'Зрозуміла структура партнерства й комунікації'),
        c('Long-term client relationships', 'Довгострокові відносини з клієнтами'),
        c('Keeping expectations, decisions and execution connected', 'Зв’язок між очікуваннями, рішеннями й виконанням'),
        c('Creating the conditions for fast, transparent cooperation', 'Умови для швидкої та прозорої співпраці'),
      ],
      label: c('Focus', 'Фокус'),
      expertise: c('Partnerships · Client Strategy · Operations', 'Партнерства · Клієнтська стратегія · Операційна діяльність'),
      languages: c('Ukrainian · English', 'Українська · Англійська'),
    },
    {
      id: 'alex', name: c('Alex', 'Алекс'), initials: 'A', photo: alexPortrait, photoWidth: 640, photoHeight: 640,
      role: c('Sales Manager', 'Менеджер із продажів'),
      thesis: c('Business needs turned into the right partnership model.', 'Потреби бізнесу, втілені у відповідній моделі партнерства.'),
      facts: [
        c('Understanding the challenge behind the initial request', 'Розуміння задачі за початковим запитом'),
        c('Building new client and partner relationships', 'Розвиток нових клієнтських і партнерських відносин'),
        c('Identifying where external expertise can create real value', 'Визначення цінності зовнішньої експертизи для бізнесу'),
        c('Connecting business needs with the right cooperation format', 'Поєднання потреб бізнесу з відповідним форматом співпраці'),
        c('Developing partnerships beyond a single request', 'Розвиток партнерств за межами одного запиту'),
      ],
      label: c('Focus', 'Фокус'),
      expertise: c('Business Development · Client Relationships · Partnerships', 'Розвиток бізнесу · Відносини з клієнтами · Партнерства'),
      languages: c('Ukrainian · English', 'Українська · Англійська'),
    },
    {
      id: 'mariia', name: c('Mariia', 'Марія'), initials: 'M', photo: mariiaPortrait, photoWidth: 1280, photoHeight: 971,
      role: c('Recruiting Partner', 'Рекрутинг-партнерка'),
      thesis: c('People decisions shaped by business context, not CV matching.', 'Рішення щодо людей через бізнес-контекст, а не збіг у резюме.'),
      facts: [
        c('Understanding the impact expected from the role', 'Розуміння очікуваного впливу ролі на бізнес'),
        c('Strong judgement around communication, influence and context fit', 'Оцінка комунікації, впливу й відповідності контексту'),
        c('Hiring where people and business dynamics matter as much as experience', 'Найм, де людська й бізнес-динаміка важливі нарівні з досвідом'),
        c('Translating business needs into clear candidate criteria', 'Перетворення бізнес-потреб на зрозумілі критерії вибору'),
        c('Recognising potential beyond the obvious profile match', 'Розпізнавання потенціалу за межами формальної відповідності'),
      ],
      label: c('Domains', 'Напрями'),
      expertise: c('IT & Software · Marketing & Creative · Services for Businesses · Consumer Goods & Services', 'IT та програмне забезпечення · Маркетинг і креатив · Послуги для бізнесу · Товари та послуги для споживачів'),
      languages: c('Ukrainian · English · Spanish · Croatian · Slovak', 'Українська · Англійська · Іспанська · Хорватська · Словацька'),
    },
    {
      id: 'sasha', name: c('Sasha', 'Саша'), initials: 'S', photo: sashaPortrait, photoWidth: 1194, photoHeight: 1280,
      role: c('Recruiting Partner', 'Рекрутинг-партнер'),
      thesis: c('Complex hiring decisions made clearer.', 'Ясність у складних рішеннях щодо найму.'),
      facts: [
        c('Deep work with technical and specialised roles', 'Глибока робота з технічними та спеціалізованими ролями'),
        c('Understanding the business problem behind the requirements', 'Розуміння бізнес-задачі за вимогами'),
        c('Separating critical expertise from unnecessary criteria', 'Відокремлення критичної експертизи від зайвих критеріїв'),
        c('Structuring complex profiles into clear hiring priorities', 'Зрозумілі пріоритети найму для складних профілів'),
        c('Clarity in technology, data, finance and engineering contexts', 'Ясність у контексті технологій, даних, фінансів та інженерії'),
      ],
      label: c('Domains', 'Напрями'),
      expertise: c('AI & Data · Finance & FinTech · Hardware & Engineering · Services for Businesses', 'AI та дані · Фінанси та FinTech · Обладнання та інженерія · Послуги для бізнесу'),
      languages: c('Ukrainian · English', 'Українська · Англійська'),
    },
    {
      id: 'tetiana', name: c('Tania', 'Таня'), initials: 'T', photo: founderPortrait, photoWidth: 1365, photoHeight: 2048,
      role: c('Founder & Strategic Hiring Partner', 'Засновниця та партнерка зі стратегічного найму'),
      thesis: c('Business direction translated into people decisions.', 'Бізнес-напрям, втілений у рішеннях щодо людей.'),
      facts: [
        c('Business and people strategy', 'Бізнес-стратегія та стратегія роботи з людьми'),
        c('Organisational growth and transformation', 'Організаційне зростання й трансформація'),
        c('Leadership and key hires', 'Лідерство та ключові найми'),
        c('Defining what the business actually needs before the search starts', 'Визначення справжньої потреби бізнесу до початку пошуку'),
        c('Connecting hiring decisions with the next stage of company growth', 'Зв’язок рішень про найм із наступним етапом росту компанії'),
      ],
      label: c('Expertise', 'Експертиза'),
      expertise: c('Business & People Strategy · Organisational Growth · Leadership · Recruitment Strategy', 'Бізнес і стратегія роботи з людьми · Організаційне зростання · Лідерство · Рекрутингова стратегія'),
      languages: c('Ukrainian · English · Croatian', 'Українська · Англійська · Хорватська'),
    },
  ];
  return <div className="expertise-clear">
    <div className="section-heading core-team-heading">
      <span className="eyebrow">{c('Team', 'Команда')}</span>
      <h2 id="expertise-title">{c('The people behind', 'Люди, які стоять')}<br /><span className="mint">{c('the decisions', 'за рішеннями')}</span></h2>
    </div>
    <div className="core-team-intro">
      <p className="core-team-lead">{c('Strong hiring starts long before the search. It starts with understanding what the business actually needs next.', 'Сильний найм починається задовго до пошуку. Він починається з розуміння того, що насправді потрібно бізнесу далі.')}</p>
      <div>
        <p>{c('Different perspectives come into every decision — business, people, market, technology, partnerships and operations.', 'У кожному рішенні поєднуються різні погляди — бізнес, люди, ринок, технології, партнерства й операційна діяльність.')}</p>
        <p>{c('We look beyond the role itself: at the stage of the company, the capability it is missing, the impact this person should create and what the team needs to become next.', 'Ми дивимося ширше за саму роль: на етап компанії, компетенції, яких їй бракує, очікуваний внесок людини та те, якою команда має стати далі.')}</p>
        <p className="core-team-definition">{c('That is what Recruiting Partner means to us.', 'Саме це для нас означає Recruiting Partner.')}</p>
      </div>
    </div>
    <p className="core-team-label">{c('Core Team', 'Основна команда')}</p>
    <div className="core-team-grid">
      {team.map((person, index) => <React.Fragment key={person.id}><article className="team-person" aria-labelledby={`team-${person.id}`}>
        <div className="team-person-summary">
          <div className="team-person-header">
            <div className={`team-photo${person.photo ? ` team-photo-${person.id}` : ' team-photo-placeholder'}`}>
              {person.photo
                ? <img src={person.photo} alt={person.name} width={person.photoWidth} height={person.photoHeight} loading="lazy" decoding="async" />
                : <div role="img" aria-label={c(`Photo of ${person.name} to be added`, `Фото: ${person.name} — буде додано`)}><span aria-hidden="true">{person.initials}</span></div>}
            </div>
            <div><h3 id={`team-${person.id}`}>{person.name}</h3><p className="team-person-role">{person.role}</p></div>
          </div>
          <dl className="team-person-details">
            <div><dt>{person.label}</dt><dd>{person.expertise}</dd></div>
            <div><dt>{c('Languages', 'Мови')}</dt><dd>{person.languages}</dd></div>
          </dl>
          <button className="team-person-toggle" type="button"
            aria-haspopup="dialog"
            aria-label={c(`View ${person.name}’s expertise`, `Переглянути досвід: ${person.name}`)}
            onClick={() => setActivePerson(person.id)}>
            <span>{c('View expertise', 'Докладніше про досвід')}</span>
            <svg className="team-toggle-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 12h16m-7-7 7 7-7 7" /></svg>
          </button>
        </div>

      </article>
      {index === 1 && (<div className="core-team-closing">
        <h3>{c('Different perspectives.', 'Різні погляди.')}<br /><span className="mint">{c('One Core Team.', 'Одна Core Team.')}</span></h3>
        <p>{c('Every client gets the combined expertise of the team — not just one person assigned to a role.', 'Кожен клієнт отримує спільну експертизу команди — не лише одну людину, призначену на роль.')}</p>
        <p>{c('Business context, market understanding, people judgement and partnership thinking come together in every hiring decision.', 'Бізнес-контекст, розуміння ринку, оцінка людей і партнерський підхід поєднуються в кожному рішенні про найм.')}</p>
        <p className="core-team-slogan" lang="en">Who You Hire Is Who You Become.</p>
    </div>)}
      </React.Fragment>)}
    </div>
    <TeamMemberDialog person={team.find(person => person.id === activePerson) ?? null} onClose={() => setActivePerson(null)} />
    <section className="experience-proof" aria-labelledby="experience-proof-title" aria-roledescription={c('carousel', 'карусель')}>
      <div className="proof-heading"><h3 id="experience-proof-title">{c('Our experience in practice', 'Наш досвід на практиці')}</h3>
        <div className="proof-controls"><span aria-live="polite" aria-atomic="true">{activeCase + 1} / {cases.length}</span><button type="button" aria-label={c('Previous case', 'Попередній кейс')} onClick={() => setActiveCase((activeCase + cases.length - 1) % cases.length)}>←</button><button type="button" aria-label={c('Next case', 'Наступний кейс')} onClick={() => setActiveCase((activeCase + 1) % cases.length)}>→</button></div>
      </div>
      <article className="proof-row" aria-live="polite" aria-atomic="true">
        <span className="people-label">{activeCase < 2 ? c('Founder’s experience', 'Досвід засновниці') : c('Client case', 'Клієнтський кейс')}</span>
        <h4>{cases[activeCase].title}</h4><dl>{[[c('Task', 'Задача'),cases[activeCase].task],[c('Work', 'Робота'),cases[activeCase].work],[c('Result / scale', 'Результат / масштаб'),cases[activeCase].scale]].map(([label,text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl>
      </article>
      <div className="proof-pagination">{cases.map((item, index) => <button type="button" key={item.title} aria-label={`${c('Show case', 'Показати кейс')}: ${item.title}`} aria-current={index === activeCase ? 'true' : undefined} onClick={() => setActiveCase(index)}><span /></button>)}</div>
    </section>
  </div>;
}
