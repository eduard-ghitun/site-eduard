import { ArrowRight, BriefcaseBusiness, Check, Gamepad2, House, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const iconMap = [Gamepad2, House, BriefcaseBusiness];

const OfficeDesignPage = () => {
  const { t } = useLanguage();
  const { officeDesign } = t;

  return (
    <main className="office-page">
      <section className="site-container office-hero">
        <span className="ui-kicker">{officeDesign.hero.eyebrow}</span>
        <h1>{officeDesign.hero.title}</h1>
        <p className="office-hero__description">{officeDesign.hero.description}</p>
        <p className="office-hero__note">{officeDesign.hero.note}</p>
      </section>

      <section className="site-container office-services" aria-label={officeDesign.hero.eyebrow}>
        {officeDesign.services.map((service, index) => {
          const Icon = iconMap[index];
          const contactHref = `/?serviciu=${encodeURIComponent(service.label)}#contact`;

          return (
            <article className="office-service" key={service.id}>
              <div className="office-service__icon"><Icon aria-hidden="true" size={24} /></div>
              <p className="office-service__label">{service.label}</p>
              <h2>{service.title}</h2>
              <ul>
                {service.items.map((item) => <li key={item}><Check aria-hidden="true" size={17} />{item}</li>)}
              </ul>
              <a href={contactHref} className="ui-button ui-button--secondary">
                {officeDesign.cta}<ArrowRight aria-hidden="true" size={17} />
              </a>
            </article>
          );
        })}
      </section>

      <section className="office-process-wrap">
        <div className="site-container office-process">
          <div className="office-process__heading">
            <span className="section-heading__eyebrow">{officeDesign.process.eyebrow}</span>
            <h2>{officeDesign.process.title}</h2>
          </div>
          <ol>
            {officeDesign.process.steps.map((step, index) => <li key={step}><b>{String(index + 1).padStart(2, "0")}</b><p>{step}</p></li>)}
          </ol>
          <p className="office-process__note">{officeDesign.process.note}</p>
        </div>
      </section>

      <section className="site-container office-contact">
        <div>
          <span className="section-heading__eyebrow">{t.contact.eyebrow}</span>
          <h2>{officeDesign.contact.title}</h2>
          <p>{officeDesign.contact.description}</p>
        </div>
        <a href="/#contact" className="ui-button ui-button--primary">
          <MessageCircle aria-hidden="true" size={18} />{officeDesign.contact.cta}
        </a>
      </section>
    </main>
  );
};

export default OfficeDesignPage;
