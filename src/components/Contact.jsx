import { ArrowUpRight, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ContactMethod from "./ContactMethod";
import SectionFrame from "./SectionFrame";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const email = t.contact.info.find((item) => item.id === "email");

  return (
    <SectionFrame id="contact" className="contact-section">
      <div className="site-container">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} />
        <div className="contact-grid">
          <ScrollReveal as="article" className="contact-panel">
            <h3>{t.contact.channelsTitle}</h3>
            <p><strong>{t.contact.channelsLead}</strong> {t.contact.channelsText}</p>
            <div className="mt-8 grid">{t.contact.info.map((item, index) => <ContactMethod key={item.id} item={item} delay={index * 0.08} />)}</div>
          </ScrollReveal>

          <ScrollReveal as="aside" className="contact-cta" aria-label={t.contact.contactCta.title}>
            <div className="contact-cta__orbits" aria-hidden="true">
              <span className="contact-cta__orbit contact-cta__orbit--outer" />
              <span className="contact-cta__orbit contact-cta__orbit--middle" />
              <span className="contact-cta__orbit contact-cta__orbit--inner" />
              <span className="contact-cta__core"><Mail size={23} /></span>
            </div>
            <div className="contact-cta__content">
              <p className="contact-cta__eyebrow">{t.contact.contactCta.eyebrow}</p>
              <h3>{t.contact.contactCta.title}</h3>
              <p>{t.contact.contactCta.description}</p>
              <a href={email?.href ?? "mailto:eduard.ghitun@yahoo.com"} className="contact-cta__action">
                {t.contact.contactCta.action}<ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionFrame>
  );
};

export default Contact;
