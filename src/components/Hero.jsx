import { motion } from "framer-motion";
import SectionFrame from "./SectionFrame";
import TerminalTyping from "./TerminalTyping";
import { useLanguage } from "../context/LanguageContext";
import useViewportProfile from "../hooks/useViewportProfile";

const Hero = () => {
  const { isMobile, isTablet, isTouch, isIOS } = useViewportProfile();
  const { t } = useLanguage();
  const isCompact = isMobile || isTablet;
  const disableTextMotion = isCompact || isIOS;
  const fadeUpTransition = disableTextMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: [0.22, 1, 0.36, 1] };
  const compactTransition = disableTextMotion
    ? { duration: 0 }
    : { duration: 0.65, delay: isCompact ? 0.02 : 0.08, ease: [0.22, 1, 0.36, 1] };

  return (
    <SectionFrame id="hero" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 md:px-8 md:pb-24 md:pt-12 lg:px-12 lg:pb-36 lg:pt-24">
      <div className="pointer-events-none absolute inset-x-4 top-0 -z-10 h-[92%] rounded-[2rem] border border-[rgba(121,255,172,0.08)] bg-[radial-gradient(circle_at_top,rgba(92,255,154,0.12),transparent_40%),linear-gradient(180deg,rgba(7,12,10,0.94),rgba(4,6,5,0.6)_55%,transparent)] md:inset-x-8 lg:inset-x-12" />
      {!isCompact ? (
        <div className="section-grid pointer-events-none absolute inset-x-12 top-0 -z-10 h-[70%] opacity-[0.12] [mask-image:linear-gradient(180deg,black,transparent)]" />
      ) : null}
      <div className="tech-line right-[9%] top-16 h-px w-36" />
      <div className="tech-line bottom-20 left-[7%] h-px w-28" />

      <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={disableTextMotion ? false : { opacity: 0, y: isCompact ? 14 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={fadeUpTransition}
          className="text-center lg:text-left"
        >
          <span className="ui-kicker max-w-full text-center leading-relaxed">
            {t.hero.kicker}
          </span>

          <h1 className="mx-auto mt-8 max-w-4xl text-balance font-heading text-[clamp(2.35rem,11vw,4.65rem)] font-semibold uppercase leading-[0.94] tracking-[0.015em] text-[#f8fffb] md:mt-10 md:text-[4.9rem] md:leading-[0.88] md:tracking-[0.02em] lg:mx-0 lg:text-[6rem]">
            {t.hero.title.lead}
            <span className="block text-[color:var(--neon)]">{t.hero.title.accent}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.75] text-[color:var(--text-soft)] md:text-xl md:leading-8 lg:mx-0 lg:max-w-xl">
            {t.hero.description}
          </p>

          <div className="mx-auto mt-7 max-w-xl lg:mx-0">
            <TerminalTyping lines={t.hero.terminalLines} ariaLabel={t.hero.terminalAriaLabel} />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 md:flex-row md:justify-center lg:justify-start">
            <a
              href="#proiecte"
              className="ui-button ui-button--primary w-full px-7 py-3 text-sm md:min-w-[13rem] md:w-auto"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="ui-button ui-button--secondary w-full px-7 py-3 text-sm md:min-w-[13rem] md:w-auto"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:mt-10 lg:justify-start">
            {t.hero.stats.map((item, index) => (
              <motion.span
                key={item}
                initial={disableTextMotion ? false : { opacity: 0, y: isCompact ? 8 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: disableTextMotion ? 0 : isCompact ? 0.25 : 0.4,
                  delay: disableTextMotion ? 0 : (isCompact ? 0.08 : 0.16) + index * (isCompact ? 0.04 : 0.06),
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="ui-chip max-w-full rounded-full px-4 py-2 text-[0.72rem] font-medium md:text-xs"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={disableTextMotion ? false : { opacity: 0, y: isCompact ? 14 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={compactTransition}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="surface-card ui-card-hover overflow-hidden rounded-[2rem] p-6 md:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(92,255,154,0.1),transparent_30%),linear-gradient(180deg,transparent,rgba(0,0,0,0.14))]" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
                  {t.hero.process.label}
                </p>
                <span className="rounded-full border border-[rgba(121,255,172,0.24)] bg-[rgba(121,255,172,0.08)] px-3 py-1 text-[0.68rem] text-[color:var(--neon)]">
                  {t.hero.process.status}
                </span>
              </div>

              <p className="mt-6 max-w-md font-heading text-[1.72rem] uppercase leading-[0.98] text-[#f8fffb] md:text-[2.7rem] md:leading-[0.96]">
                {t.hero.process.title}
              </p>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[color:var(--text-soft)] md:text-base">
                {t.hero.process.description}
              </p>

              <div className="mt-8 space-y-4">
                {t.hero.process.steps.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-t border-[rgba(121,255,172,0.1)] pt-4 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(121,255,172,0.16)] bg-[rgba(121,255,172,0.06)] font-mono text-xs text-[color:var(--neon)]">
                      0{index + 1}
                    </span>
                    <p className="text-base leading-7 text-[color:var(--text-soft)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            whileHover={isTouch || isTablet || isMobile || isIOS ? undefined : { y: -4 }}
            transition={{ duration: isCompact ? 0.2 : 0.35, ease: "easeOut" }}
            className="surface-card ui-card-hover relative -mt-5 ml-auto w-[92%] rounded-[1.75rem] p-5 sm:-mt-6 sm:w-[88%] md:w-[76%]"
          >
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_right_top,rgba(92,255,154,0.08),transparent_34%)]" />
            <div className="relative z-10">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">{t.hero.focus.label}</p>
              <p className="mt-3 max-w-sm font-heading text-[1.55rem] uppercase leading-[0.98] text-[#f8fffb] md:text-3xl md:leading-[0.96]">
                {t.hero.focus.title}
              </p>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[color:var(--text-soft)]">
                {t.hero.focus.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionFrame>
  );
};

export default Hero;
