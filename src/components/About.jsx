import SectionHeading from "./SectionHeading";
import SectionFrame from "./SectionFrame";
import ScrollReveal from "./ScrollReveal";
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
  const { isMobile, isTablet } = useViewportProfile();
  const isCompact = isMobile || isTablet;

  return (
    <SectionFrame id="despre" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-32">
      <SectionHeading
        eyebrow="Despre mine"
        title="Despre mine"
        description="Sunt web developer din Cluj-Napoca, cu bază tehnică solidă și focus pe creare website-uri moderne, clare și scalabile pentru business-uri care vor creștere reală online."
      />

      <div className="grid gap-4 md:gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <ScrollReveal
          as="article"
          delay={isCompact ? 0 : 20}
          glow
          className="surface-card ui-card-hover min-w-0 rounded-[2rem] p-6 md:p-8 lg:p-10"
        >
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--muted)]">Profil profesional</p>
          <h3 className="mt-4 max-w-xl text-balance font-heading text-[2.4rem] font-semibold uppercase leading-[0.96] text-[#f5fff8] md:text-[3.2rem]">
            Construiesc soluții web moderne, stabile și convingătoare vizual.
          </h3>
          <p className="mt-6 text-base leading-8 text-[color:var(--text-soft)] md:text-lg">
            Am finalizat Facultatea de Automatică și Calculatoare din cadrul Universității Tehnice din
            Cluj-Napoca, iar în proiecte aplic o abordare riguroasă: analiză clară, arhitectură logică
            și dezvoltare web performantă pentru rezultate măsurabile.
          </p>
          <p className="mt-4 text-base leading-8 text-[color:var(--text-soft)] md:text-lg">
            Ofer creare website-uri moderne, mentenanță și modernizare website pentru proiecte
            existente, plus integrare și dezvoltare de microservicii pentru funcționalități avansate.
          </p>

          <div className="ui-divider mt-8" />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
            {[
              { value: "UTCN", label: "Automatică și Calculatoare" },
              { value: "Modern UI", label: "Design clar și profesionist" },
              { value: "Scalabil", label: "Integrare microservicii" }
            ].map((item) => (
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
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--muted)]">Principii</p>
            <p className="mt-4 max-w-sm font-heading text-[2rem] uppercase leading-[0.96] text-[#f5fff8] md:text-[2.7rem]">
              Fiecare proiect este gândit ca un sistem clar, nu doar ca un layout.
            </p>
          </div>

          {principles.map((item, index) => (
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
