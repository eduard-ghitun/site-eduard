import SectionHeading from "./SectionHeading";
import SectionFrame from "./SectionFrame";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";

const SERVICES_IMAGE_SRC = "/images/nick-karvounis-TkZYCXmrKK4-unsplash.jpg";

const Services = () => {
  const { t } = useLanguage();
  return (
    <SectionFrame id="servicii" className="site-container">
      <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} description={t.services.description} />
      <div className="services-layout">
        <ScrollReveal as="aside" className="services-intro">
          <span className="services-intro__label">{t.services.introLabel}</span>
          <h3>{t.services.introTitle}</h3>
          <div className="services-intro__image"><img src={SERVICES_IMAGE_SRC} alt={t.services.imageAlt} loading="lazy" decoding="async" /></div>
          <article className="office-service-card">
            <p className="office-service-card__eyebrow">{t.officeDesign.hero.eyebrow}</p><h3>{t.officeDesign.serviceCard.title}</h3><p>{t.officeDesign.serviceCard.description}</p>
            <a href="/design-birouri" className="ui-button ui-button--secondary">{t.officeDesign.serviceCard.cta}</a>
          </article>
        </ScrollReveal>
        <div className="service-list">
          {t.services.items.map((service, index) => (
            <ScrollReveal as="article" key={service.title} className="service-item">
              <span className="service-item__number">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{service.title}</h3><p>{service.description}</p></div>
              <span className="service-item__availability">{t.services.availability}</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
};

export default Services;
