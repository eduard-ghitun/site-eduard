import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { brandAssets } from "../data/brandAssets";
import useIsMobile from "../hooks/useIsMobile";
import useIsTablet from "../hooks/useIsTablet";

const principles = [
  {
    title: "Arhitectură clară",
    description: "Structură modulară, ușor de întreținut și extins pentru proiecte pe termen lung."
  },
  {
    title: "UI bine lucrat",
    description: "Design curat, cu ierarhie vizuală puternică și atenție la detaliile de interacțiune."
  },
  {
    title: "Implementări curate",
    description: "Cod predictibil, performant, orientat pe stabilitate și scalabilitate."
  },
  {
    title: "Livrare orientată pe business",
    description: "Fiecare decizie tehnică este corelată cu obiectivul real al proiectului."
  }
];

const About = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const cardBg = isMobile
    ? brandAssets.cardBgMobile
    : isTablet
      ? brandAssets.cardBgTablet
      : brandAssets.cardBg;

  return (
    <section id="despre" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
      <SectionHeading
        eyebrow="Despre mine"
        title="Despre mine"
        description="Sunt web developer din Cluj-Napoca, cu bază tehnică solidă și focus pe creare website-uri moderne, clare și scalabile pentru business-uri care vor creștere reală online."
      />

      <div className="grid gap-4 md:gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.article
          initial={{ opacity: 0, y: isMobile ? 12 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: isMobile ? 0.32 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="surface-card relative min-w-0 overflow-hidden rounded-3xl p-5 md:p-8 lg:p-10"
        >
          {!isMobile ? (
            <img
              src={cardBg}
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full object-contain scale-[1.15] object-center opacity-18 lg:scale-100 lg:object-cover lg:object-[50%_24%] lg:opacity-20"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          ) : null}
          <div className="pointer-events-none absolute inset-0 bg-slate-950/58" />
          <div className="relative">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/85">Profil profesional</p>
          <h3 className="mt-3 max-w-lg text-balance font-heading text-2xl font-semibold leading-tight text-white md:mt-4 md:text-3xl lg:text-4xl">
            Construiesc soluții web moderne, stabile și convingătoare vizual.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-300 md:mt-6 md:text-lg">
            Am finalizat Facultatea de Automatică și Calculatoare din cadrul Universității Tehnice din
            Cluj-Napoca, iar în proiecte aplic o abordare riguroasă: analiză clară, arhitectură logică
            și dezvoltare web performantă pentru rezultate măsurabile.
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-300 md:mt-4 md:text-lg">
            Ofer creare website-uri moderne, mentenanță și modernizare website pentru proiecte
            existente, plus integrare și dezvoltare de microservicii pentru funcționalități avansate.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 md:mt-8 lg:grid-cols-3">
            {[
              { value: "UTCN", label: "Automatică și Calculatoare" },
              { value: "Modern UI", label: "Design clar și profesionist" },
              { value: "Scalabil", label: "Integrare microservicii" }
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-white/10 bg-slate-900/65 px-4 py-4 backdrop-blur transition duration-300 hover:border-cyan-200/35 hover:bg-slate-900/80"
              >
                <p className="font-heading text-lg text-white md:text-xl">{item.value}</p>
                <p className="mt-1 text-xs text-slate-400 md:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: isMobile ? 12 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: isMobile ? 0.32 : 0.5, delay: isMobile ? 0.03 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="grid min-w-0 gap-3 md:gap-4"
        >
          {principles.map((item) => (
            <motion.article
              key={item.title}
              whileHover={isMobile ? undefined : { y: -3 }}
              transition={{ duration: isMobile ? 0.2 : 0.3, ease: "easeOut" }}
              className="surface-card relative overflow-hidden rounded-2xl p-4 md:p-5 lg:p-6"
            >
              {!isMobile ? (
                <img
                  src={cardBg}
                  alt=""
                  className="pointer-events-none absolute inset-0 h-full w-full object-contain scale-[1.1] object-center opacity-16 lg:scale-100 lg:object-cover lg:object-[50%_28%] lg:opacity-18"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              ) : null}
              <div className="pointer-events-none absolute inset-0 bg-slate-950/62" />
              <div className="relative">
              <h4 className="font-heading text-lg font-medium text-white md:text-xl">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 md:text-[0.97rem]">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
