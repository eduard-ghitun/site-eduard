import { motion } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";

const SectionHeading = ({ eyebrow, title, description }) => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 10 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: isMobile ? 0.28 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-7 max-w-3xl text-center md:mb-11 lg:mb-14"
    >
      <span className="inline-flex min-h-9 max-w-full items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1 text-center text-[0.62rem] font-semibold uppercase leading-relaxed tracking-[0.16em] text-cyan-200 md:text-[0.66rem] md:tracking-[0.24em]">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance font-heading text-2xl font-semibold tracking-tight text-white md:mt-5 md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg lg:text-xl">{description}</p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
