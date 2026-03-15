import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../data/siteData";
import useViewportProfile from "../hooks/useViewportProfile";

const Testimonials = () => {
  const { isMobile, isIOS } = useViewportProfile();
  const disableTextMotion = isMobile || isIOS;

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
            initial={disableTextMotion ? false : { opacity: 0, y: 24 }}
            whileInView={disableTextMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={disableTextMotion ? undefined : { once: true, amount: 0.25 }}
            transition={disableTextMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="surface-card rounded-3xl p-7"
          >
            <blockquote className="leading-relaxed text-[color:var(--text-soft)]">"{item.quote}"</blockquote>
            <figcaption className="mt-6">
              <p className="font-heading text-lg font-medium text-[#f8fffb]">{item.name}</p>
              <p className="text-sm text-[color:var(--muted)]">{item.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
