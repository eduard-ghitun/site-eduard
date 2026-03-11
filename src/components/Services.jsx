import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { services } from "../data/siteData";
import { brandAssets } from "../data/brandAssets";
import useIsMobile from "../hooks/useIsMobile";
import useIsTablet from "../hooks/useIsTablet";

const Services = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const sectionBg = isMobile
    ? brandAssets.sectionBgMobile
    : isTablet
      ? brandAssets.sectionBgTablet
      : brandAssets.sectionBg;

  return (
    <section id="servicii" className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
      {!isMobile ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl opacity-20">
          <img src={sectionBg} alt="" className="h-full w-full object-cover object-[50%_26%]" loading="lazy" decoding="async" fetchPriority="low" />
        </div>
      ) : null}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-slate-950/70" />

      <div className="relative">
      <SectionHeading
        eyebrow="Servicii"
        title="Servicii Web Development"
        description="Servicii complete de web development în Cluj: creare website-uri moderne, mentenanță și modernizare website, plus dezvoltare web performantă cu integrare de microservicii."
      />

      <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: isMobile ? 10 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: isMobile ? 0.3 : 0.45, delay: index * (isMobile ? 0.03 : 0.05), ease: [0.22, 1, 0.36, 1] }}
            whileHover={isMobile ? undefined : { y: -5 }}
            className="group surface-card relative flex h-full min-w-0 flex-col overflow-hidden rounded-3xl p-5 transition duration-300 md:p-6 lg:p-7"
          >
            {!isMobile ? (
              <img
                src={brandAssets.textureBg}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-14"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            ) : null}
            <div className="pointer-events-none absolute inset-0 bg-slate-950/76" />
            <div className="relative">
            <div className="mb-5 flex items-center justify-between md:mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-300/70 to-blue-500/60 p-[1px] md:h-11 md:w-11">
                <div className="h-full w-full rounded-[11px] bg-slate-950/90" />
              </div>
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400 transition group-hover:text-cyan-200">
                0{index + 1}
              </span>
            </div>
            <h3 className="text-balance font-heading text-xl font-semibold text-white md:text-2xl">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">{service.description}</p>
            <p className="mt-auto pt-5 text-sm font-medium text-cyan-200/90 transition group-hover:text-cyan-100 md:pt-6">
              Serviciu disponibil pentru proiecte noi
            </p>
            </div>
          </motion.article>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Services;
