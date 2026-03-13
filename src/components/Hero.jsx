import { motion } from "framer-motion";
import useViewportProfile from "../hooks/useViewportProfile";

const pillStats = ["Design premium • Performanță ridicată • Experiență optimizată pentru conversie"];

const Hero = () => {
  const { isMobile, isTablet, isTouch } = useViewportProfile();
  const isCompact = isMobile || isTablet;

  return (
    <section
      id="hero"
      className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-6 md:px-8 md:pb-24 md:pt-12 lg:px-12 lg:pb-36 lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-x-4 top-0 -z-10 h-[92%] rounded-[2rem] border border-white/[0.06] bg-[radial-gradient(circle_at_top,rgba(147,170,178,0.12),transparent_40%),linear-gradient(180deg,rgba(17,17,19,0.9),rgba(10,10,11,0.45)_55%,transparent)] md:inset-x-8 lg:inset-x-12" />
      {!isCompact ? (
        <div className="section-grid pointer-events-none absolute inset-x-12 top-0 -z-10 h-[70%] opacity-[0.08] [mask-image:linear-gradient(180deg,black,transparent)]" />
      ) : null}

      <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: isCompact ? 14 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isCompact ? 0.35 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex min-h-9 max-w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-center text-[0.62rem] font-semibold uppercase leading-relaxed tracking-[0.18em] text-stone-300 md:text-[0.68rem] md:tracking-[0.28em]">
            Web Development • Mentenanță • Microservicii
          </span>

          <h1 className="mx-auto mt-8 max-w-4xl text-balance font-heading text-[clamp(3rem,12vw,4.65rem)] font-semibold leading-[0.9] text-stone-50 md:mt-10 md:text-[4.9rem] lg:mx-0 lg:text-[6rem]">
            Website-uri care îți aduc clienți, nu doar vizitatori.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-stone-400 md:text-xl md:leading-8 lg:mx-0 lg:max-w-xl">
            Construiesc website-uri rapide, moderne și optimizate pentru conversie, astfel încât
            afacerea ta să inspire încredere și să atragă mai mulți clienți online.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 md:flex-row md:justify-center lg:justify-start">
            <a
              href="#proiecte"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-stone-100 px-7 py-3 text-sm font-semibold text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white md:min-w-[13rem] md:w-auto"
            >
              Vezi portofoliul
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-stone-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] md:min-w-[13rem] md:w-auto"
            >
              Cere o ofertă gratuită
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:mt-10 lg:justify-start">
            {pillStats.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: isCompact ? 8 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: isCompact ? 0.25 : 0.4,
                  delay: (isCompact ? 0.08 : 0.16) + index * (isCompact ? 0.04 : 0.06),
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="max-w-full rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.72rem] font-medium text-stone-300 md:text-xs"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: isCompact ? 14 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isCompact ? 0.35 : 0.65, delay: isCompact ? 0.02 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="surface-card overflow-hidden rounded-[2rem] p-6 md:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(136,168,177,0.16),transparent_34%),linear-gradient(180deg,transparent,rgba(0,0,0,0.18))]" />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-stone-400">PROCESUL MEU</p>
                <span className="rounded-full border border-[rgba(130,167,178,0.28)] bg-[rgba(130,167,178,0.08)] px-3 py-1 text-[0.68rem] text-stone-200">
                  Disponibil
                </span>
              </div>

              <p className="mt-6 max-w-md font-heading text-[2rem] leading-[0.96] text-stone-50 md:text-[2.7rem]">
                Un proces simplu prin care transform ideile tale într-un website profesional.
              </p>

              <p className="mt-5 max-w-lg text-sm leading-7 text-stone-400 md:text-base">
                De la analiză și design până la lansare și optimizare pentru rezultate reale.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Analizăm obiectivele afacerii tale și structura website-ului.",
                  "Construiesc designul și dezvolt website-ul folosind tehnologii moderne.",
                  "Lansăm website-ul și îl optimizăm pentru performanță și conversii."
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-t border-white/[0.08] pt-4 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xs text-stone-300">
                      0{index + 1}
                    </span>
                    <p className="text-base leading-7 text-stone-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            whileHover={isTouch || isTablet ? undefined : { y: -4 }}
            transition={{ duration: isCompact ? 0.2 : 0.35, ease: "easeOut" }}
            className="surface-card relative -mt-5 ml-auto w-[92%] rounded-[1.75rem] p-5 sm:-mt-6 sm:w-[88%] md:w-[76%]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right_top,rgba(136,168,177,0.14),transparent_38%)]" />
            <div className="relative">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">Focus</p>
              <p className="mt-3 max-w-sm font-heading text-[1.8rem] leading-[0.96] text-stone-50 md:text-3xl">
                Website-uri rapide, elegante și construite pentru rezultate reale.
              </p>
              <p className="mt-4 max-w-sm text-sm leading-7 text-stone-400">
                Fiecare proiect este realizat cu accent pe performanță, experiență de utilizare și o
                imagine profesională care inspiră încredere.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
