import React from 'react';
import ModelIcon from './ModelIcon';
import TeamExpertise from './TeamExpertise';
import TrustStrip from './TrustStrip';
import { useLanguage } from '../LanguageContext';

import type { ContactService, OpenContact } from '../siteConfig';

type Props = { onContact: OpenContact };

export default function HomePage({ onContact }: Props) {
  const { language } = useLanguage();
  const c = (en: string, uk: string) => language === 'uk' ? uk : en;
  const models: { id: ContactService; name: string; type: string; purpose: string; work: string; client: string; outcome: string; cta: string }[] = [
    {
      id: 'hiring-core', name: 'Hiring Core', type: c('Ongoing hiring', 'Постійний найм'),
      purpose: c('A recruitment partner for your day-to-day hiring.', 'Рекрутинг-партнер для регулярного найму.'),
      work: c('We run agreed searches and coordinate interviews as your hiring priorities evolve.', 'Ведемо узгоджені пошуки й координуємо інтерв’ю зі зміною ваших пріоритетів.'),
      client: c('Set business priorities and make hiring decisions.', 'Визначаєте бізнес-пріоритети й ухвалюєте рішення про найм.'),
      outcome: c('One recruitment team with a clear view of every search.', 'Одна рекрутинг-команда й прозорий стан кожного пошуку.'),
      cta: c('Plan ongoing hiring', 'Спланувати постійний найм'),
    },
    {
      id: 'hiring-sprint', name: 'Hiring Sprint', type: c('Temporary team support', 'Тимчасове посилення'),
      purpose: c('Extra capacity when your recruitment team needs support.', 'Додатковий ресурс, коли ваша рекрутинг-команда потребує підтримки.'),
      work: c('We take on agreed sourcing, assessment or coordination tasks during a hiring peak or launch.', 'Беремо на себе пошук, оцінку чи координацію під час піку найму або запуску.'),
      client: c('Your recruitment team keeps ownership of the process and priorities.', 'Ваша рекрутинг-команда керує процесом і визначає пріоритети.'),
      outcome: c('Less pressure on your team without adding permanent headcount.', 'Менше навантаження на команду без постійного розширення штату.'),
      cta: c('Strengthen your team', 'Посилити вашу команду'),
    },
    {
      id: 'search-partnership', name: 'Search Partnership', type: c('One specific role', 'Одна конкретна роль'),
      purpose: c('A focused search for a specialist, manager or leader.', 'Цільовий пошук фахівця, менеджера чи керівника.'),
      work: c('We define the brief, find and assess candidates, and coordinate the search through to a decision.', 'Уточнюємо запит, знаходимо й оцінюємо кандидатів та координуємо пошук до рішення.'),
      client: c('Agree the criteria, meet shortlisted candidates and choose who to hire.', 'Узгоджуєте критерії, зустрічаєтеся з кандидатами й обираєте, кого найняти.'),
      outcome: c('Assessed candidates with clear strengths and questions to clarify.', 'Оцінені кандидати з чіткими сильними сторонами й питаннями для уточнення.'),
      cta: c('Discuss your role', 'Обговорити вашу вакансію'),
    },
  ];
  const approach = [
    {
      title: c('Understand the business', 'Розуміємо бізнес'),
      points: [
        c('Clarify your goals and how the team works.', 'З’ясовуємо ваші цілі та як працює команда.'),
        c('Identify what limits progress.', 'Визначаємо, що стримує рух уперед.'),
        c('Agree where expertise or leadership can make a difference.', 'Разом визначаємо, де експертиза чи управлінське посилення можуть змінити результат.'),
      ],
      result: c('A shared view of the business challenge and the contribution your team needs to make.', 'Спільне розуміння бізнес-задачі та внеску, якого потребуєте від команди.'),
    },
    {
      title: c('Set priorities together', 'Разом визначаємо пріоритети'),
      points: [
        c('Balance ambitions, resources and talent-market realities.', 'Співвідносимо плани, ресурси та реалії ринку талантів.'),
        c('Agree what to strengthen now and what can wait.', 'Узгоджуємо, що посилювати зараз, а що може зачекати.'),
        c('Decide which trade-offs are worth making.', 'Визначаємо, які компроміси виправдані.'),
      ],
      result: c('Agreed priorities that guide where to invest time, budget and leadership attention.', 'Узгоджені пріоритети для інвестицій часу, бюджету й уваги керівництва.'),
    },
    {
      title: c('Connect decisions to value', 'Пов’язуємо рішення з цінністю'),
      points: [
        c('Assess the expertise your business gains.', 'Оцінюємо, яку експертизу отримує бізнес.'),
        c('Clarify the responsibility the team can take on.', 'Уточнюємо, яку відповідальність зможе взяти команда.'),
        c('Connect people decisions to the next business stage.', 'Пов’язуємо рішення щодо команди з наступним етапом бізнесу.'),
      ],
      result: c('A clear business rationale for your investment in the team.', 'Зрозуміле бізнес-обґрунтування інвестицій у команду.'),
    },
  ];
  const workingAgreements = [
    [c('Shared business context', 'Спільний бізнес-контекст'), c('We work with leadership and HR around the same goals, constraints and definition of success.', 'Працюємо з керівництвом і HR у спільному розумінні цілей, обмежень та очікуваного результату.')],
    [c('Clear ownership', 'Зрозуміла відповідальність'), c('You set the business direction. We bring recruitment expertise and recommendations, with clear ownership of decisions on both sides.', 'Ви визначаєте напрям бізнесу. Ми додаємо рекрутингову експертизу й рекомендації, узгоджуючи відповідальність за рішення з обох сторін.')],
    [c('Continuity as you evolve', 'Послідовність під час змін'), c('As your plans change, we revisit priorities together so recruitment stays connected to what the business needs next.', 'Коли ваші плани змінюються, разом переглядаємо пріоритети, щоб рекрутинг відповідав наступним потребам бізнесу.')],
  ];
  const serviceIds: ContactService[] = ['hr-audit', 'people-sessions', 'verification'];
  const services = [
    [c('HR Audit & Diagnostics', 'HR-аудит і діагностика'), c('When the same hiring or team problems keep returning.', 'Коли ті самі проблеми в наймі чи команді повторюються.'), c('We examine processes, roles and handoffs. You get findings on bottlenecks and priorities for change; we agree the scope before starting.', 'Розбираємо процеси, ролі та взаємодію. Ви отримуєте висновки про перешкоди й пріоритети змін. Межі аудиту узгоджуємо до початку.')],
    [c('Strategic People Sessions', 'Стратегічні сесії щодо команди'), c('When a team decision needs a shared direction.', 'Коли для рішення щодо команди потрібна спільна позиція.'), c('We work through team structure, hiring priorities and responsibility with leadership. We capture the options, trade-offs and agreed next steps.', 'Разом із керівництвом розбираємо структуру, пріоритети найму та відповідальність. Фіксуємо варіанти, компроміси й узгоджені наступні кроки.')],
    [c('Candidate & Company Verification', 'Перевірка кандидатів і компаній'), c('When a decision depends on information that needs checking.', 'Коли рішення залежить від інформації, яку потрібно перевірити.'), c('We agree what needs verification and the format of the findings. We check directly or involve specialist partners, distinguishing confirmed information from unresolved questions.', 'Узгоджуємо предмет перевірки й формат висновків. Працюємо самостійно або з профільними партнерами. Відокремлюємо підтверджені факти від відкритих питань.')],
  ];
  const industryGroups = [
    { id: 'technology', title: c('Technology & Engineering', 'Технології та інженерія'), items: [c('IT & Software', 'IT та програмне забезпечення'), c('AI & Data', 'AI та дані'), c('Hardware & Engineering', 'Обладнання та інженерія')] },
    { id: 'business', title: c('Finance & Business', 'Фінанси та бізнес'), items: [c('Finance & FinTech', 'Фінанси та FinTech'), c('Services for Businesses', 'Послуги для бізнесу')] },
    { id: 'consumer', title: c('Brands & Consumers', 'Бренди та споживачі'), items: [c('Marketing & Creative', 'Маркетинг і креатив'), c('Consumer Goods & Services', 'Товари та послуги для споживачів')] },
  ];

  return <>
    <TrustStrip />

    <section className="section models-section" id="recruitment"><div className="wrap">
      <div className="models-intro reveal"><span className="eyebrow">{c('Ways to work together', 'Формати співпраці')}</span><h2>{c('One partner.', 'Один партнер.')}<br /><span className="mint">{c('Three ways to work together.', 'Три формати співпраці.')}</span></h2><p>{c('Ongoing hiring, temporary team support or one specific role. Choose the format that fits your needs.', 'Постійний найм, тимчасове посилення команди або одна конкретна роль. Оберіть формат під вашу потребу.')}</p></div>
      <div className="model-grid">{models.map(model => <article className="model-card partnership-model reveal" id={model.id} key={model.id}>
        <div className="card-top"><ModelIcon model={model.id} /><span>{model.type}</span></div><h3>{model.name}</h3><p className="model-purpose">{model.purpose}</p>
        <dl className="model-responsibilities"><div><dt>{c('How we get involved', 'Як долучаємося')}</dt><dd>{model.work}</dd></div><div><dt>{c("Your team’s role", "Роль вашої команди")}</dt><dd>{model.client}</dd></div><div className="model-outcome"><dt>{c('What your business gets', 'Що отримує бізнес')}</dt><dd>{model.outcome}</dd></div></dl><button className="button button-primary model-cta" onClick={() => onContact(model.id)}><span>{model.cta}</span></button>
      </article>)}</div>
      <div className="custom-format reveal"><div><h3>{c('Let’s start with your situation.', 'Почнімо з вашої ситуації.')}</h3><p>{c('A different setup starts with your business task. We define the scope together.', 'Для іншого формату визначаємо обсяг роботи під вашу бізнес-задачу.')}</p></div><button className="button button-primary" onClick={() => onContact()}>{c("Find the right format", "Обрати формат співпраці")}</button></div>
    </div></section>

    <section className="section approach-section" id="how-we-work">
      <div className="wrap">
        <div className="section-heading reveal">
          <span className="eyebrow">{c('Our approach', 'Наш підхід')}</span>
          <h2>{c('Recruitment partnership.', 'Рекрутингове партнерство.')}<br /><span className="mint">{c('Built around your business.', 'Навколо потреб вашого бізнесу.')}</span></h2>
        </div>
        <div className="approach-grid">
          {approach.map(({title, points, result}, i) => <article className="approach-item reveal" key={title}>
            <span className="approach-number" aria-hidden="true">0{i + 1}</span>
            <h3>{title}</h3>
            <ul className="approach-points">{points.map(point => <li key={point}>{point}</li>)}</ul>
            <p className="approach-result"><strong>{c('Value for your business', 'Цінність для бізнесу')}</strong>{result}</p>
          </article>)}
        </div>
        <div className="working-agreements">
          <h3>{c('How we partner with your business', 'Як будуємо партнерство з бізнесом')}</h3>
          <div className="agreement-grid">{workingAgreements.map(([title, text]) => <article key={title}><h4>{title}</h4><p>{text}</p></article>)}</div>
          <button className="button button-primary" onClick={() => onContact()}>{c('Discuss your business priorities', 'Обговорити бізнес-пріоритети')}</button>
        </div>
      </div>
    </section>

    <section className="section services-section" id="additional-services"><div className="wrap"><div className="section-heading reveal"><span className="eyebrow">{c('HR consulting & verification', 'HR-консалтинг і перевірка')}</span><h2>{c('We turn team questions into clear decisions.', 'Перетворюємо питання про команду на конкретні рішення.')}</h2></div><div className="support-list">{services.map(([title,situation,text], index) => <article className="support-row reveal" key={title}><div><h3>{title}</h3><p className="support-situation">{situation}</p></div><div><p>{text}</p><button className="button button-primary service-contact" onClick={() => onContact(serviceIds[index])}><span>{[c('Discuss an audit', 'Обговорити аудит'), c('Plan a team session', 'Спланувати сесію'), c('Discuss verification', 'Обговорити перевірку')][index]}</span></button></div></article>)}</div>
      <aside className="partner-support reveal"><div><span className="partner-label">{c('Through technology partners', 'Через технологічних партнерів')}</span><h3>IT Outstaffing</h3><p>{c('Need additional IT specialists? We connect you with technology partners. We clarify their role, the scope and the collaboration model before starting.', 'Потрібні додаткові IT-фахівці? Залучаємо технологічних партнерів. Їхню роль, обсяг і модель співпраці уточнюємо до початку роботи.')}</p></div><button className="button button-primary service-contact" onClick={() => onContact('it-outstaffing')}><span>{c('Explore IT support', 'Обговорити IT-посилення')}</span></button></aside>
    </div></section>

    <section className="section provenance-section" id="team-expertise" aria-labelledby="expertise-title"><div className="wrap"><span id="about" className="section-anchor" /><TeamExpertise />
      <section className="industry-strip reveal" id="industries" aria-labelledby="industry-experience-title">
        <h3 id="industry-experience-title">{c('Industry experience', 'Галузева експертиза')}</h3>
        <div className="industry-domains">
          {industryGroups.map(group => <div className="industry-domain" key={group.id}>
            <h4 id={`industry-${group.id}`}>{group.title}</h4>
            <ul aria-labelledby={`industry-${group.id}`}>{group.items.map(name => <li key={name}>{name}</li>)}</ul>
          </div>)}
        </div>
      </section>
    </div></section>

    <section className="section blog-section" id="blog" aria-labelledby="blog-title"><div className="wrap"><span className="eyebrow reveal">{c('Blog', 'Блог')}</span><div className="blog-content reveal"><div><h2 id="blog-title">{c('Hiring decisions, unpacked.', 'Розбираємо рішення про найм.')}</h2><p>{c('On hiring, teams and the decisions that shape a business.', 'Про найм, команди та рішення, які формують бізнес.')}</p></div><span className="blog-status">{c('Coming soon', 'Незабаром')}</span></div></div></section>

    <section className="section final-section" id="contact"><div className="wrap reveal"><span className="eyebrow">{c('Your next step', 'Ваш наступний крок')}</span><h2>{c('What does your business need from recruitment right now?', 'Що потрібно вашому бізнесу від рекрутингу зараз?')}</h2><p>{c('Tell us what is changing and which roles matter next. We define the scope, priorities and responsibilities together.', 'Розкажіть, що змінюється та які ролі зараз важливі. Разом визначаємо обсяг роботи, пріоритети й відповідальність.')}</p><button className="button button-primary" onClick={() => onContact()}>{c('Let’s talk', 'Поговорімо')}</button></div></section>
  </>;
}
