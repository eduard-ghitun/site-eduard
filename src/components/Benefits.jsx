import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { benefits } from "../data/siteData";

const Benefits = () => {
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
          >
            <h3 className="font-heading text-xl font-semibold text-white">{benefit.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-300">{benefit.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
