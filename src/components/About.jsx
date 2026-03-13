import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import useViewportProfile from "../hooks/useViewportProfile";

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
  const { isMobile, isTablet, isTouch } = useViewportProfile();
  const isCompact = isMobile || isTablet;

  return (
    <section id="despre" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-32">
      <SectionHeading
        eyebrow="Despre mine"
        title="Despre mine"
        description="Sunt web developer din Cluj-Napoca, cu bază tehnică solidă și focus pe creare website-uri moderne, clare și scalabile pentru business-uri care vor creștere reală online."
      />

      <div className="grid gap-4 md:gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.article
          initial={{ opacity: 0, y: isCompact ? 12 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: isCompact ? 0.32 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="surface-card min-w-0 rounded-[2rem] p-6 md:p-8 lg:p-10"
        >
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone-500">Profil profesional</p>
          <h3 className="mt-4 max-w-xl text-balance font-heading text-[2.4rem] font-semibold leading-[0.96] text-stone-50 md:text-[3.2rem]">
            Construiesc soluții web moderne, stabile și convingătoare vizual.
          </h3>
          <p className="mt-6 text-base leading-8 text-stone-400 md:text-lg">
            Am finalizat Facultatea de Automatică și Calculatoare din cadrul Universității Tehnice din
            Cluj-Napoca, iar în proiecte aplic o abordare riguroasă: analiză clară, arhitectură logică
            și dezvoltare web performantă pentru rezultate măsurabile.
          </p>
          <p className="mt-4 text-base leading-8 text-stone-400 md:text-lg">
            Ofer creare website-uri moderne, mentenanță și modernizare website pentru proiecte
            existente, plus integrare și dezvoltare de microservicii pentru funcționalități avansate.
          </p>

          <div className="mt-8 h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent" />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
            {[
              { value: "UTCN", label: "Automatică și Calculatoare" },
              { value: "Modern UI", label: "Design clar și profesionist" },
              { value: "Scalabil", label: "Integrare microservicii" }
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] px-4 py-5 transition duration-300 hover:border-white/[0.14] hover:bg-white/[0.035]"
              >
                <p className="font-heading text-2xl leading-none text-stone-50 md:text-[2rem]">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-stone-500 md:text-[0.7rem]">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: isCompact ? 12 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: isCompact ? 0.32 : 0.5, delay: isCompact ? 0.03 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="surface-card min-w-0 rounded-[2rem] p-6 md:p-8"
        >
          <div className="mb-6">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone-500">Principii</p>
            <p className="mt-4 max-w-sm font-heading text-[2rem] leading-[0.96] text-stone-50 md:text-[2.7rem]">
              Fiecare proiect este gândit ca un sistem clar, nu doar ca un layout.
            </p>
          </div>

          {principles.map((item, index) => (
            <motion.article
              key={item.title}
              whileHover={isTouch || isTablet ? undefined : { y: -3 }}
              transition={{ duration: isCompact ? 0.2 : 0.3, ease: "easeOut" }}
              className="border-t border-white/[0.08] py-5 first:border-t-0 first:pt-0 last:pb-0"
            >
              <div className="grid gap-2 md:grid-cols-[4rem_1fr] md:gap-4">
                <span className="text-sm tracking-[0.18em] text-stone-500">0{index + 1}</span>
                <div>
                  <h4 className="font-heading text-2xl leading-none text-stone-50 md:text-[2rem]">{item.title}</h4>
                  <p className="mt-3 max-w-md text-sm leading-7 text-stone-400 md:text-[0.97rem]">{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
