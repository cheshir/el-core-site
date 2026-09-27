import { useLanguage } from '../LanguageContext';
import React, { useState } from 'react';

const CaseCollection: React.FC<{ onContact: () => void }> = ({ onContact }) => {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const cases = [
    {
      id: "01",
      title: t("Growth Infrastructure: From Hiring to Lead Gen"),
      description: t("A gambling product company scaling rapidly across multiple operational functions."),
      summary: t("Integrated recruitment and sales systems."),
      context: [
        t("Closed 7 strategic hires in 90 days."),
        t("Stabilized fragmented coordination channels."),
        t("Identified missing alignment between sales and marketing.")
      ],
      insight: [
        t("Hiring alone wasn't solving the revenue bottleneck."),
        t("Internal teams were spending 40% of time on low-intent leads."),
        t("Recruitment needs were reactive, not proactive.")
      ],
      action: [
        t("Built end-to-end outbound strategy."),
        t("Integrated high-intent lead generation setup."),
        t("Recruited SMM to bridge marketing gap.")
      ],
      solution: [
        t("Moved from 'filling roles' to 'owning functions'."),
        t("Established managed lead-gen ecosystem."),
        t("Transferred coordination to a unified leadership layer.")
      ],
      outcome: t("Turned recruitment into a business-wide performance engine—managed externally, but operating as an internal core unit.")
    },
    {
      id: "02",
      title: t("Tactical Team Scaling: Risk-Mitigated Growth"),
      description: t("Product startup needing a full team for a time-bound milestone without long-term overhead."),
      summary: t("Milestone-based team architecture."),
      context: [
        t("Required 5+ specialists for 6-9 month phase."),
        t("Goal was purely achieving specific business milestones."),
        t("Direct hiring would create future redundancy risks.")
      ],
      insight: [
        t("Traditional hiring would damage employer brand upon downsizing."),
        t("Financial liability of permanent contracts was too high."),
        t("Speed was the primary constraint for the milestone.")
      ],
      action: [
        t("Leveraged outstaffing partner network."),
        t("Assembled specialized team in under 21 days."),
        t("Designed clear handover/offboarding protocol.")
      ],
      solution: [
        t("Eliminated long-term employment obligations."),
        t("Reduced hiring and overhead budget by ~40%."),
        t("Insulated company culture from 'churn' perception.")
      ],
      outcome: t("Achieved critical business milestones with absolute strategic flexibility and zero structural risk to the parent brand.")
    },
    {
      id: "03",
      title: t("Executive Hire: Strategic HRD Alignment"),
      description: t("Large media corporation requiring a board-level HR Director to shape governance."),
      summary: t("Board-level leadership placement."),
      context: [
        t("Existing HR was operational/administrative only."),
        t("Business required a strategic governance partner."),
        t("Leadership felt a disconnect with people strategy.")
      ],
      insight: [
        t("This was not an HR vacancy; it was a leadership vacancy."),
        t("Success required 'board-fluency' rather than just HR metrics."),
        t("Internal perception of HR needed a complete reset.")
      ],
      action: [
        t("Reframed role as 'Strategic People Governance'."),
        t("Ran targeted executive search across non-industry sectors."),
        t("Facilitated board-candidate values alignment.")
      ],
      solution: [
        t("Moved search focus to P&L-accountable leaders."),
        t("Designed 100-day integration roadmap for the board."),
        t("Shifted HR from support function to decision layer.")
      ],
      outcome: t("Secured a leadership hire that operates at the decision-making table, directly influencing structural efficiency and culture.")
    },
    {
      id: "04",
      title: t("Process Over Headcount: Scaling Efficiency"),
      description: t("Tech company planning to triple recruitment staff to handle growing vacancy volume."),
      summary: t("Operational process stabilization."),
      context: [
        t("Volume was rising, but closing rate was stagnant."),
        t("Hiring managers were exhausted by interview noise."),
        t("Leadership plan: Hire more recruiters.")
      ],
      insight: [
        t("More recruiters would only scale the existing inefficiency."),
        t("Problem was poor role prioritization, not 'lack of hands'."),
        t("Fragmentation in decision rights was causing the lag.")
      ],
      action: [
        t("Audited end-to-end hiring sequence."),
        t("Implemented strict role prioritization protocol."),
        t("Defined clear 'Go/No-Go' criteria for managers.")
      ],
      solution: [
        t("Stabilized existing team instead of hiring new staff."),
        t("Reduced time-to-hire through structural clarity."),
        t("Decreased interview load on technical leadership.")
      ],
      outcome: t("Closed 100% of priority roles without scaling recruitment headcount or increasing operational costs.")
    }
  ];

  const nextSlide = () => setActiveIdx((prev) => (prev + 1) % cases.length);
  const prevSlide = () => setActiveIdx((prev) => (prev - 1 + cases.length) % cases.length);

  const item = cases[activeIdx];
  const groups = [
    [t('01. The Context'), item.context],
    [t('02. Strategic Risk / Insight'), item.insight],
    [t('03. Our Intervention'), item.action],
    [t('04. Structural Solution'), item.solution],
  ] as const;

  return (
    <section id="cases" className="section cases-section" aria-labelledby="cases-title">
      <div className="wrap">
        <div className="cases-heading reveal">
          <div><span className="eyebrow">{t('Decisions in Practice')}</span><h2 id="cases-title">{t('Case Collection')}</h2></div>
          <div className="cases-controls">
            <span className="cases-counter" aria-live="polite" aria-atomic="true">{activeIdx + 1} / {cases.length}</span>
            <button onClick={prevSlide} aria-label={t('Previous case')} aria-controls="active-case"><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
            <button onClick={nextSlide} aria-label={t('Next case')} aria-controls="active-case"><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
          </div>
        </div>
        <article id="active-case" className="case-detail" aria-labelledby="active-case-title">
          <div className="case-detail-heading">
            <div><h3 id="active-case-title">{item.title}</h3><p>{item.description}</p></div>
            <div className="case-impact"><span>{t('Impact Summary')}</span><strong>{item.summary}</strong></div>
          </div>
          <div className="case-detail-grid">
            {groups.map(([heading, bullets]) => <div key={heading}>
              <h4>{heading}</h4>
              <ul>{bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
            </div>)}
          </div>
          <div className="case-outcome"><h4>{t('Long-term Outcome')}</h4><p>{item.outcome}</p></div>
        </article>
        <div className="cases-cta"><p>{t('We look for patterns, not just profiles.')}</p><button className="button button-primary" onClick={onContact}>{t('Discuss a similar situation')}</button></div>
      </div>
    </section>
  );
};

export default CaseCollection;
