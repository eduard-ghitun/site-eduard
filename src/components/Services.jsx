import SectionHeading from "./SectionHeading";
import SectionFrame from "./SectionFrame";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";
import useViewportProfile from "../hooks/useViewportProfile";

const SERVICES_IMAGE_SRC = "/images/nick-karvounis-TkZYCXmrKK4-unsplash.jpg";

const Services = () => {
  const { isMobile, isTablet, isTouch } = useViewportProfile();
  const { t } = useLanguage();
  const isCompact = isMobile || isTablet;

  return (
    <SectionFrame id="servicii" className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-32">
      <SectionHeading
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        description={t.services.description}
      />

      <div className="surface-card rounded-[2rem] p-6 md:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div className="max-w-md">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--muted)]">{t.services.introLabel}</p>
            <p className="mt-4 font-heading text-[2.3rem] uppercase leading-[0.96] text-[#f5fff8] md:text-[3rem]">
              {t.services.introTitle}
            </p>

            <div className="mt-8 max-w-[30rem] rounded-[1.6rem] border border-[rgba(121,255,172,0.12)] bg-[rgba(7,11,10,0.84)] p-3 shadow-[0_20px_48px_rgba(0,0,0,0.46)] sm:p-4">
              <div className="aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-[rgba(121,255,172,0.14)] bg-black/35 sm:aspect-[16/10] lg:aspect-[4/5]">
                <img
                  src={SERVICES_IMAGE_SRC}
                  alt={t.services.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full object-cover transition duration-500 ease-out ${
                    isTouch ? "" : "hover:scale-[1.02]"
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-0 md:grid-cols-2">
            {t.services.items.map((service, index) => (
              <ScrollReveal
                as="article"
                key={service.title}
                delay={index * (isCompact ? 32 : 56)}
                glow
                className="group ui-card-hover rounded-[1.6rem] border border-[rgba(121,255,172,0.08)] bg-[rgba(7,11,10,0.82)] px-4 py-6 md:px-5 md:py-7 md:[&:nth-child(odd)]:ml-0 lg:py-8"
              >
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">0{index + 1}</span>
                <h3 className="mt-3 text-balance font-heading text-[1.9rem] uppercase leading-[0.96] text-[#f5fff8] md:text-[2.2rem]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-soft)] md:text-base">{service.description}</p>
                <p className={`mt-5 text-sm text-[color:var(--neon)] transition ${isTouch ? "" : "group-hover:text-[color:var(--text)]"}`}>
                  {t.services.availability}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </SectionFrame>
  );
};

export default Services;
