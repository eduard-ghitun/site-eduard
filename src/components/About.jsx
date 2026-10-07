import SectionHeading from "./SectionHeading";
import SectionFrame from "./SectionFrame";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <SectionFrame id="despre" className="site-container">
      <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} description={t.about.description} />
      <div className="about-grid">
        <ScrollReveal as="article" className="about-profile">
          <span className="about-profile__label">{t.about.profileLabel}</span>
          <h3>{t.about.heading}</h3>
          {t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="about-highlights">
            {t.about.highlights.map((item) => <div className="about-highlight" key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}
          </div>
        </ScrollReveal>
        <ScrollReveal as="aside" className="about-principles">
          <span className="about-principles__label">{t.about.principlesLabel}</span>
          <h3>{t.about.principlesTitle}</h3>
          {t.about.principles.map((item, index) => (
            <article className="principle" key={item.title}>
              <span className="principle__number">{String(index + 1).padStart(2, "0")}</span><h4>{item.title}</h4><p>{item.description}</p>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </SectionFrame>
  );
};

export default About;
