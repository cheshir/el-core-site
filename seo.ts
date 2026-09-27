export type SiteLanguage = 'en' | 'uk';
export const SITE_URL = 'https://el-core.eu';
export const languagePath = (language: SiteLanguage) => language === 'uk' ? '/uk/' : '/';
export const languageFromPath = (path: string): SiteLanguage => /^\/uk(?:\/|$)/.test(path) ? 'uk' : 'en';
export const SEO = {
  en: {
    title: 'Recruitment Partner for Growing Businesses | Elevate Core',
    description: 'Recruitment for growing businesses in Ukraine, Poland, Latvia and Slovakia. IT, marketing and leadership hiring with Elevate Core.',
  },
  uk: {
    title: 'Рекрутинг для бізнесів, що зростають | Elevate Core',
    description: 'Рекрутинг для бізнесів в Україні, Польщі, Латвії та Словаччині. Підбір IT-фахівців, маркетингових команд і керівників з Elevate Core.',
  },
};
export function structuredData(language: SiteLanguage) {
  const url = SITE_URL + languagePath(language);
  const org = `${SITE_URL}/#organization`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': org, name: 'Elevate Core', url: SITE_URL + '/',
        slogan: 'Who You Hire Is Who You Become.',
        description: 'Recruitment & HR consulting for businesses in Ukraine and Europe.',
        email: 'hello@el-core.eu', telephone: '+385919497822',
        areaServed: ['Ukraine', 'Poland', 'Latvia', 'Slovakia'].map(name => ({'@type':'Country',name})),
        contactPoint: {'@type':'ContactPoint',contactType:'customer service',email:'hello@el-core.eu',telephone:'+385919497822',availableLanguage:['English','Ukrainian']},
        sameAs: ['https://www.linkedin.com/company/elevate-core', 'https://www.instagram.com/elevate.core_zen', 'https://www.goodfirms.co/company/elevate-core', 'https://clutch.co/profile/elevate-core', 'https://www.designrush.com/agency/profile/elevate-core'],
      },
      { '@type':'WebSite', '@id':`${SITE_URL}/#website`, url:SITE_URL+'/', name:'Elevate Core', publisher:{'@id':org}, inLanguage:['en','uk'] },
      { '@type':'WebPage', '@id':url+'#webpage', url, name:SEO[language].title, description:SEO[language].description, inLanguage:language, isPartOf:{'@id':`${SITE_URL}/#website`}, about:{'@id':org} },
      ...[
        ['hiring-core','Hiring Core',language === 'uk' ? 'Рекрутинг-партнер для регулярного найму.' : 'A recruitment partner for your day-to-day hiring.'],
        ['hiring-sprint','Hiring Sprint',language === 'uk' ? 'Додатковий ресурс, коли ваша рекрутинг-команда потребує підтримки.' : 'Extra capacity when your recruitment team needs support.'],
        ['search-partnership','Search Partnership',language === 'uk' ? 'Цільовий пошук фахівця, менеджера чи керівника.' : 'A focused search for a specialist, manager or leader.'],
      ].map(([id,name,description]) => ({'@type':'Service','@id':url+'#service-'+id,name,description,serviceType:'Recruitment',provider:{'@id':org},url:url+'#'+id})),
    ],
  };
}
