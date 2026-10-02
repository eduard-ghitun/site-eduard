import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionFrame from "./SectionFrame";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <SectionFrame id="hero" className="site-container hero-section">
      <div className="hero-layout">
        <div className="hero-copy">
          <span className="ui-kicker">{t.hero.kicker}</span>
          <h1>{t.hero.title.lead} <span>{t.hero.title.accent}</span></h1>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-actions">
            <a href="#proiecte" className="ui-button ui-button--primary">
              {t.hero.ctaPrimary}<ArrowRight aria-hidden="true" size={18} />
            </a>
            <a href="#contact" className="ui-button ui-button--secondary">{t.hero.ctaSecondary}</a>
          </div>
          <ul className="hero-benefits" aria-label="Avantaje">
            {t.hero.stats.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={17} />{item}</li>)}
          </ul>
        </div>

        <aside className="process-card" aria-label={t.hero.process.label}>
          <div className="process-card__header">
            <p>{t.hero.process.label}</p>
            <span>{t.hero.process.status}</span>
          </div>
          <h2>{t.hero.process.title}</h2>
          <p className="process-card__description">{t.hero.process.description}</p>
          <ol>
            {t.hero.process.steps.map((item, index) => (
              <li key={item}><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span></li>
            ))}
          </ol>
        </aside>
      </div>
    </SectionFrame>
  );
};

export default Hero;
