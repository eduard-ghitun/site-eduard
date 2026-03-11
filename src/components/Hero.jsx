import { motion } from "framer-motion";
import { brandAssets } from "../data/brandAssets";
import useIsMobile from "../hooks/useIsMobile";
import useIsTablet from "../hooks/useIsTablet";

const pillStats = [
  "Implementări curate și scalabile",
  "Performanță ridicată pe mobil",
  "Design modern cu execuție premium"
];

const Hero = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const heroBg = isMobile
    ? brandAssets.heroBgMobile
    : isTablet
      ? brandAssets.heroBgTablet
      : brandAssets.heroBg;
  const cardBg = isMobile
    ? brandAssets.cardBgMobile
    : isTablet
      ? brandAssets.cardBgTablet
      : brandAssets.cardBg;

  return (
    <section id="hero" className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16 lg:px-12 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[88%] overflow-hidden rounded-b-[2.5rem]">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover object-[50%_20%] opacity-[0.28] md:object-[50%_17%] md:opacity-45"
          decoding="async"
          fetchPriority="high"
        />
        {!isMobile ? (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(56,189,248,0.24),transparent_42%)]" />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/55 to-slate-950" />
      </div>
      <div className="section-grid pointer-events-none absolute inset-0 -z-10 hidden opacity-[0.08] [mask-image:radial-gradient(55%_55%_at_50%_28%,black,transparent)] md:block" />

      <div className="grid items-center gap-9 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 14 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.35 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex min-h-9 max-w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-center text-[0.62rem] font-semibold uppercase leading-relaxed tracking-[0.14em] text-slate-200 md:text-[0.65rem] md:tracking-[0.2em]">
            Web Development • Mentenanță • Microservicii
          </span>

          <h1 className="mx-auto mt-6 max-w-xl text-balance font-heading text-3xl font-semibold leading-[1.06] text-white md:mt-7 md:text-5xl lg:mx-0 lg:text-[4.2rem]">
            Web Development în Cluj-Napoca
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:mt-6 md:text-lg lg:mx-0 lg:max-w-xl lg:text-xl">
            Creez website-uri moderne, rapide și premium pentru companii care vor o prezență online
            profesionistă, clară și orientată spre rezultate.
          </p>

          <div className="mt-9 flex flex-col gap-3 md:mt-10 md:flex-row md:justify-center md:gap-3 lg:justify-start">
            <a
              href="#proiecte"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-glow transition duration-300 hover:-translate-y-0.5 hover:brightness-110 md:min-w-[12.5rem] md:w-auto"
            >
              Analizează proiectele
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 md:min-w-[12.5rem] md:w-auto"
            >
              Discutăm proiectul tău
            </a>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2 md:mt-8 md:gap-3 lg:justify-start">
            {pillStats.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: isMobile ? 8 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: isMobile ? 0.25 : 0.4,
                  delay: (isMobile ? 0.08 : 0.16) + index * (isMobile ? 0.04 : 0.06),
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="max-w-full rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[0.72rem] font-medium text-slate-200 md:px-4 md:py-2 md:text-xs"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: isMobile ? 14 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.35 : 0.65, delay: isMobile ? 0.02 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -8, 0], opacity: [0.38, 0.58, 0.38] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-8 -top-10 hidden h-36 w-36 rounded-full bg-cyan-400/30 blur-3xl lg:block"
          />

          <div className="surface-card relative overflow-hidden rounded-3xl p-5 md:p-7 lg:p-8">
            {!isMobile ? (
              <>
                <img
                  src={cardBg}
                  alt=""
                  className="absolute inset-0 h-full w-full object-contain scale-[1.18] object-center opacity-30 lg:scale-100 lg:object-cover lg:object-[50%_30%] lg:opacity-36"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(56,189,248,0.35),transparent_50%)]" />
              </>
            ) : null}
            <div className="absolute inset-0 bg-slate-950/58" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <p className="font-heading text-base font-medium text-white md:text-lg">Blueprint de execuție</p>
                <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[0.7rem] text-emerald-200 md:text-xs">
                  Disponibil
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                React + Vite + Tailwind + Framer Motion, cu accent pe arhitectură clară, viteză și
                design rafinat.
              </p>

              <div className="mt-6 space-y-2.5 md:mt-7 md:space-y-3">
                {[
                  "Audit obiective și structură",
                  "Design UI premium + implementare",
                  "Lansare, optimizare și mentenanță"
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 md:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            whileHover={isMobile ? undefined : { y: -4, scale: 1.01 }}
            transition={{ duration: isMobile ? 0.2 : 0.35, ease: "easeOut" }}
            className="surface-card relative -mt-4 ml-auto w-[88%] overflow-hidden rounded-2xl p-4 md:-mt-5 md:w-[78%]"
          >
            {!isMobile ? (
              <img
                src={cardBg}
                alt=""
                className="absolute inset-0 h-full w-full object-contain scale-[1.14] object-center opacity-22 lg:scale-100 lg:object-cover lg:object-[50%_30%] lg:opacity-26"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            ) : null}
            <div className="absolute inset-0 bg-slate-950/62" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Focus</p>
              <p className="mt-2 font-heading text-base text-white md:text-lg">Profesionalism vizual + execuție tehnică</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
