import { motion } from "framer-motion";
import useViewportProfile from "../hooks/useViewportProfile";

const SectionHeading = ({ eyebrow, title, description }) => {
  const { isMobile, isTablet } = useViewportProfile();
  const isCompact = isMobile || isTablet;

  return (
    <motion.div
      initial={{ opacity: 0, y: isCompact ? 10 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: isCompact ? 0.28 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-8 max-w-4xl text-center md:mb-12 lg:mb-16"
    >
      <span className="inline-flex min-h-9 max-w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-center text-[0.62rem] font-semibold uppercase leading-relaxed tracking-[0.2em] text-stone-300 md:text-[0.66rem] md:tracking-[0.28em]">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-balance font-heading text-[2.5rem] font-semibold leading-[0.96] tracking-[0.01em] text-stone-50 md:mt-6 md:text-6xl lg:text-[4.4rem]">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-7 text-stone-400 md:text-lg md:leading-8 lg:text-[1.15rem]">{description}</p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
