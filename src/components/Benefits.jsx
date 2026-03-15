import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { benefits } from "../data/siteData";
import useViewportProfile from "../hooks/useViewportProfile";

const Benefits = () => {
  const { isMobile, isIOS } = useViewportProfile();
  const disableTextMotion = isMobile || isIOS;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Avantaje"
        title="De ce să lucrăm împreună"
        description="Un proces profesionist, orientat pe rezultate și experiență premium de la primul contact până la lansare."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {benefits.map((benefit, index) => (
          <motion.article
            key={benefit.title}
            initial={disableTextMotion ? false : { opacity: 0, y: 24 }}
            whileInView={disableTextMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={disableTextMotion ? undefined : { once: true, amount: 0.3 }}
            transition={disableTextMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="surface-card rounded-2xl p-6"
          >
            <h3 className="font-heading text-xl font-semibold text-[#f8fffb]">{benefit.title}</h3>
            <p className="mt-3 leading-relaxed text-[color:var(--text-soft)]">{benefit.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
