import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { services } from "../data/siteData";
import useViewportProfile from "../hooks/useViewportProfile";

const SERVICES_IMAGE_SRC = "/images/nick-karvounis-TkZYCXmrKK4-unsplash.jpg";

const Services = () => {
  const { isMobile, isTablet, isTouch } = useViewportProfile();
  const isCompact = isMobile || isTablet;

  return (
    <section id="servicii" className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-32">
      <SectionHeading
        eyebrow="Servicii"
        title="Servicii Web Development"
        description="Servicii complete de web development în Cluj: creare website-uri moderne, mentenanță și modernizare website, plus dezvoltare web performantă cu microservicii și integrare AI."
      />

      <div className="surface-card rounded-[2rem] p-6 md:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div className="max-w-md">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-stone-500">Ce ofer</p>
            <p className="mt-4 font-heading text-[2.3rem] leading-[0.96] text-stone-50 md:text-[3rem]">
              Servicii construite pentru claritate, ritm și rezultate solide.
            </p>

            <div className="mt-8 max-w-[30rem] rounded-[1.6rem] border border-white/[0.08] bg-black/30 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.5)] sm:p-4">
              <div className="aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-black/60 bg-black/35 sm:aspect-[16/10] lg:aspect-[4/5]">
                <img
                  src={SERVICES_IMAGE_SRC}
                  alt="Web development workspace"
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
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: isCompact ? 10 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: isCompact ? 0.3 : 0.45, delay: index * (isCompact ? 0.03 : 0.05), ease: [0.22, 1, 0.36, 1] }}
                whileHover={isTouch || isTablet ? undefined : { y: -3 }}
                className="group border-t border-white/[0.08] px-0 py-6 first:border-t-0 md:px-5 md:py-7 md:[&:nth-child(-n+2)]:border-t-0 md:[&:nth-child(odd)]:pl-0 md:[&:nth-child(even)]:pr-0 lg:py-8"
              >
                <span className="text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">0{index + 1}</span>
                <h3 className="mt-3 text-balance font-heading text-[1.9rem] leading-[0.96] text-stone-50 md:text-[2.2rem]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-400 md:text-base">{service.description}</p>
                <p className={`mt-5 text-sm text-stone-300 transition ${isTouch ? "" : "group-hover:text-stone-100"}`}>
                  Serviciu disponibil pentru proiecte noi
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
