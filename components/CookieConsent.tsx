import React, { useEffect, useRef, useState } from 'react';
import { useConsent } from '../ConsentContext';
import { useLanguage } from '../LanguageContext';
import { DEFAULT_CHOICES, CONSENT_KEY, LANGUAGE_KEY, type Choices } from '../consent';

export default function CookieConsent() {
  const { ready, consent, choices, save, settingsOpen, openSettings, closeSettings, dismissed, dismissBanner, storageUnavailable } = useConsent();
  const { language } = useLanguage();
  const c = (en: string, uk: string) => language === 'uk' ? uk : en;
  const [draft, setDraft] = useState<Choices>(choices);
  const dialog = useRef<HTMLDialogElement>(null);
  const all = { necessary: true, functional: true, analytics: true, marketing: true } as const;
  useEffect(() => {
    if (!settingsOpen) return;
    setDraft(choices);
    const element = dialog.current!;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    element.querySelectorAll('details').forEach(detail => { detail.open = false; });
    element.showModal(); element.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    return () => { element.close(); document.body.style.overflow = overflow; previous?.focus({ preventScroll: true }); };
  }, [settingsOpen]);
  const policyLinks = <div className="cookie-policy-links"><a href="#privacy-policy" onClick={closeSettings}>{c('Privacy Policy', 'Політика конфіденційності')}</a><span aria-hidden="true">·</span><a href="#cookie-policy" onClick={closeSettings}>{c('Cookie Policy', 'Політика cookies')}</a></div>;
  const categories = [
    { id: 'necessary', title: c('Strictly necessary', 'Необхідні'), text: c('These cookies are necessary for the website to work correctly and securely.', 'Ці cookies потрібні для коректної та безпечної роботи сайту.'), details: c('They may be used to maintain website security, remember your cookie preferences, enable essential website functionality, ensure forms and pages work correctly, and prevent technical errors or abuse. These cookies cannot be disabled through Cookie Settings.', 'Вони можуть забезпечувати безпеку, запам’ятовувати налаштування cookies, підтримувати основні функції, коректну роботу сторінок і форм та запобігати технічним помилкам або зловживанням. Їх не можна вимкнути в налаштуваннях cookies.') },
    { id: 'functional', title: c('Functional', 'Функціональні'), text: c('These cookies help us remember your preferences and provide additional website functionality.', 'Ці cookies допомагають запам’ятовувати ваші налаштування та підтримують додаткові функції сайту.'), details: c('They may remember language preferences, interface settings and other choices you make while using the website. You can enable or disable this category at any time.', 'Вони можуть запам’ятовувати мову, налаштування інтерфейсу та інші ваші вподобання. Ви можете вмикати або вимикати цю категорію будь-коли.') },
    { id: 'analytics', title: c('Analytics', 'Аналітичні'), text: c('These cookies help us understand how visitors use the website so we can improve its performance and usability.', 'Ці cookies допомагають зрозуміти, як відвідувачі користуються сайтом, щоб покращувати його роботу та зручність.'), details: c('They may help us understand which pages are visited, how visitors navigate through the website, how long visitors spend on pages, technical or usability issues, and general website performance. Analytics cookies are activated only if you give your consent.', 'Вони можуть допомагати аналізувати перегляди сторінок, навігацію, час на сайті, технічні проблеми та загальну продуктивність. Аналітичні cookies активуються лише за вашою згодою.') },
    { id: 'marketing', title: c('Marketing', 'Маркетингові'), text: c('These cookies may be used to measure campaign effectiveness, understand conversions or support advertising and remarketing.', 'Ці cookies можуть вимірювати ефективність кампаній, аналізувати конверсії та підтримувати рекламу й ремаркетинг.'), details: c('Third-party providers may use these cookies to recognise a browser or device across different websites. Marketing cookies are activated only if you give your consent.', 'Сторонні постачальники можуть використовувати їх для розпізнавання браузера чи пристрою на різних сайтах. Маркетингові cookies активуються лише за вашою згодою.') },
  ] as const;
  return <>
    {ready && !consent && !dismissed && !settingsOpen && <section className="cookie-banner" aria-label={c('Cookie preferences', 'Налаштування cookies')}>
      <button className="cookie-close" aria-label={c('Close without accepting cookies', 'Закрити без згоди на cookies')} onClick={dismissBanner}>×</button>
      <div><h2>{c('Your privacy. Your choice.', 'Ваша приватність. Ваш вибір.')}</h2><p>{c('We use essential storage to remember your cookie choices. Optional cookies stay off unless you allow them. You can change your choice at any time.', 'Ми зберігаємо ваш вибір щодо cookies. Необов’язкові cookies вимкнені, доки ви їх не дозволите. Ви можете змінити свій вибір будь-коли.')}</p>{policyLinks}</div>
      <div className="cookie-actions"><button onClick={() => save(DEFAULT_CHOICES)}>{c('Reject all', 'Відхилити всі')}</button><button aria-haspopup="dialog" aria-label={c('Cookie settings', 'Налаштування cookies')} onClick={openSettings}>{c('Settings', 'Вибір cookies')}</button><button onClick={() => save(all)}>{c('Accept all', 'Прийняти всі')}</button></div>
    </section>}
    <dialog ref={dialog} className="cookie-dialog" aria-labelledby="cookie-settings-title" onCancel={event => { event.preventDefault(); closeSettings(); }} onClick={event => { if (event.target === event.currentTarget) closeSettings(); }} onKeyDown={event => {
      if (event.key !== 'Tab') return;
      const controls = Array.from((event.currentTarget as HTMLDialogElement).querySelectorAll<HTMLElement>('button:not(:disabled), a[href], input:not(:disabled), summary')).filter(el => el.getClientRects().length);
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }}>
      <div className="cookie-dialog-content">
        <button autoFocus className="cookie-close" aria-label={c('Close cookie settings', 'Закрити налаштування cookies')} onClick={closeSettings}>×</button>
        <h2 id="cookie-settings-title">{c('Cookie Settings', 'Налаштування cookies')}</h2>
        <p>{c('We use cookies to keep our website secure and working correctly.', 'Ми використовуємо cookies для безпечної та коректної роботи сайту.')}</p>
        <p>{c('You can choose which optional cookies you allow. Your choice can be changed at any time.', 'Ви обираєте, які необов’язкові cookies дозволити, і можете змінити вибір будь-коли.')}</p>
        {policyLinks}
        <div className="cookie-categories">{categories.map(category => <section className="cookie-category" key={category.id}>
          <label className="cookie-category-label"><span>{category.title}<small>{category.id === 'necessary' ? c('Always active', 'Завжди активні') : draft[category.id] ? c('On', 'Увімкнено') : c('Off', 'Вимкнено')}</small></span><input type="checkbox" role="switch" aria-label={category.title} checked={draft[category.id]} disabled={category.id === 'necessary'} onChange={event => setDraft(current => ({ ...current, [category.id]: event.target.checked }))} /></label>
          <details><summary>{c('Cookie details', 'Деталі cookies')}</summary><p>{category.text}</p><p>{category.details}</p>
            {category.id === 'necessary' || category.id === 'functional' ? <dl className="cookie-inventory">
              <dt>{c('Name', 'Назва')}</dt><dd>{category.id === 'necessary' ? CONSENT_KEY : LANGUAGE_KEY}</dd>
              <dt>{c('Provider / type', 'Постачальник / тип')}</dt><dd>{c('Elevate Core · First-party local storage', 'Elevate Core · Власне локальне сховище')}</dd>
              <dt>{c('Purpose', 'Призначення')}</dt><dd>{category.id === 'necessary' ? c('Stores categories, consent version, decision time and expiry. No visitor ID.', 'Зберігає категорії, версію згоди, час вибору та строк дії. Без ідентифікатора відвідувача.') : c('Remembers the selected website language. Only stored with functional consent.', 'Запам’ятовує обрану мову сайту лише за згодою на функціональні cookies.')}</dd>
              <dt>{c('Duration', 'Тривалість')}</dt><dd>{category.id === 'necessary' ? c('180 days; renewed when you save a new choice.', '180 днів; оновлюється після збереження нового вибору.') : c('Until functional consent is withdrawn or expires (up to 180 days).', 'До відкликання або завершення дії згоди (до 180 днів).')}</dd>
            </dl> : category.id === 'analytics' ? <dl className="cookie-inventory">
              <dt>{c('Name', 'Назва')}</dt><dd>_ga · _ga_5PYFGJ7TW4</dd>
              <dt>{c('Provider / type', 'Постачальник / тип')}</dt><dd>{c('Google Analytics 4 · First-party cookies', 'Google Analytics 4 · Cookies на домені сайту')}</dd>
              <dt>{c('Purpose', 'Призначення')}</dt><dd>{c('Recognises browsers and sessions to measure visits, engagement and clicks on contact channels. Data is sent to Google only after Analytics consent. Advertising features and Google signals are disabled.', 'Розпізнає браузери та сеанси для вимірювання відвідувань, взаємодії та натискань на способи зв’язку. Дані передаються Google лише після згоди на аналітику. Рекламні функції та Google signals вимкнені.')}</dd>
              <dt>{c('Duration', 'Тривалість')}</dt><dd>{c('Up to 180 days, without extending expiry on each visit. Removed when you withdraw Analytics consent; the page then reloads to stop the Google tag completely.', 'До 180 днів, без продовження строку під час кожного відвідування. Видаляються після відкликання згоди на аналітику; сторінка перезавантажується, щоб повністю зупинити тег Google.')}</dd>
              <dt>{c('Provider information', 'Інформація про постачальника')}</dt><dd><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">{c('Google Privacy Policy ↗', 'Політика конфіденційності Google ↗')}</a></dd>
            </dl> : <p className="cookie-empty">{c('No marketing cookies are currently in use.', 'Маркетингові cookies наразі не використовуються.')}</p>}
          </details>
        </section>)}</div>
        <p className="cookie-note">{consent ? c('Closing without saving keeps your previous preferences. Use Reject all to withdraw optional consent.', 'Закриття без збереження залишає попередні налаштування. Щоб відкликати згоду, натисніть «Відхилити всі».') : c('Closing this window without making a choice will keep all optional cookies disabled.', 'Якщо закрити це вікно без вибору, усі необов’язкові cookies залишаться вимкненими.')}</p>
        <details className="cookie-controller"><summary>{c('Your choices · Managed by Elevate Core', 'Ваш вибір · Керує Elevate Core')}</summary><p>{c('You can change or withdraw your consent at any time. Withdrawing consent does not affect the lawfulness of processing that took place before your consent was withdrawn.', 'Ви можете змінити або відкликати згоду будь-коли. Відкликання не впливає на законність обробки, здійсненої до нього.')}</p><p lang="en">ElevateCoreOutsourcing, obrt za poslovno savjetovanje i usluge<br/>Banski Vinogradi 44A, 10000 Zagreb, Croatia<br/>OIB / VAT ID: HR88011431269<br/>Registration No.: 99044129<br/><a href="mailto:hello@el-core.eu">hello@el-core.eu</a></p></details>
      </div>
      <div className="cookie-actions cookie-dialog-actions"><button onClick={() => save(DEFAULT_CHOICES)}>{c('Reject all', 'Відхилити всі')}</button><button onClick={() => save(draft)}>{c('Save preferences', 'Зберегти вибір')}</button><button onClick={() => save(all)}>{c('Accept all', 'Прийняти всі')}</button></div>
    </dialog>
    {storageUnavailable && <p className="cookie-storage-notice" role="status">{c('Your choice applies to this visit. Browser storage is unavailable, so we will ask again on your next visit.', 'Ваш вибір діє під час цього відвідування. Сховище браузера недоступне, тому наступного разу ми запитаємо знову.')}</p>}
  </>;
}
