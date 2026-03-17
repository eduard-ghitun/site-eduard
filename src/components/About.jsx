import SectionHeading from "./SectionHeading";
import SectionFrame from "./SectionFrame";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";
import useViewportProfile from "../hooks/useViewportProfile";

const About = () => {
  const { isMobile, isTablet } = useViewportProfile();
  const { t } = useLanguage();
  const isCompact = isMobile || isTablet;

  return (
    <SectionFrame id="despre" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-32">
      <SectionHeading
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.description}
      />

      <div className="grid gap-4 md:gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <ScrollReveal
          as="article"
          delay={isCompact ? 0 : 20}
          glow
          className="surface-card ui-card-hover min-w-0 rounded-[2rem] p-6 md:p-8 lg:p-10"
        >
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--muted)]">{t.about.profileLabel}</p>
          <h3 className="mt-4 max-w-xl text-balance font-heading text-[2.4rem] font-semibold uppercase leading-[0.96] text-[#f5fff8] md:text-[3.2rem]">
            {t.about.heading}
          </h3>
          <p className="mt-6 text-base leading-8 text-[color:var(--text-soft)] md:text-lg">
            {t.about.paragraphs[0]}
          </p>
          <p className="mt-4 text-base leading-8 text-[color:var(--text-soft)] md:text-lg">
            {t.about.paragraphs[1]}
          </p>

          <div className="ui-divider mt-8" />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
            {t.about.highlights.map((item) => (
              <div
                key={item.value}
                className="ui-card-hover rounded-[1.5rem] border border-[rgba(121,255,172,0.12)] bg-[rgba(7,11,10,0.84)] px-4 py-5"
              >
                <p className="font-heading text-2xl leading-none text-[#f5fff8] md:text-[2rem]">{item.value}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--muted)] md:text-[0.7rem]">{item.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal
          as="div"
          delay={isCompact ? 40 : 90}
          glow
          className="surface-card ui-card-hover min-w-0 rounded-[2rem] p-6 md:p-8"
        >
          <div className="mb-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--muted)]">{t.about.principlesLabel}</p>
            <p className="mt-4 max-w-sm font-heading text-[2rem] uppercase leading-[0.96] text-[#f5fff8] md:text-[2.7rem]">
              {t.about.principlesTitle}
            </p>
          </div>

          {t.about.principles.map((item, index) => (
            <article
              key={item.title}
              className="border-t border-[rgba(121,255,172,0.1)] py-5 first:border-t-0 first:pt-0 last:pb-0"
            >
              <div className="grid gap-2 md:grid-cols-[4rem_1fr] md:gap-4">
                <span className="font-mono text-sm tracking-[0.18em] text-[color:var(--muted)]">0{index + 1}</span>
                <div>
                  <h4 className="font-heading text-2xl leading-none text-[#f5fff8] md:text-[2rem]">{item.title}</h4>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[color:var(--text-soft)] md:text-[0.97rem]">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </SectionFrame>
  );
};

export default About;
