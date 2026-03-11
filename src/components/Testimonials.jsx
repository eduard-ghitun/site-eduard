import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../data/siteData";

const Testimonials = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Testimoniale"
        title="Ce spun clienții"
        description="Placeholder-uri pe care le poți înlocui rapid cu feedback real după livrări."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.figure
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
          >
            <blockquote className="leading-relaxed text-slate-200">"{item.quote}"</blockquote>
            <figcaption className="mt-6">
              <p className="font-heading text-lg font-medium text-white">{item.name}</p>
              <p className="text-sm text-slate-400">{item.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
