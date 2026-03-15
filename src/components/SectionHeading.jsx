import ScrollReveal from "./ScrollReveal";
import useScrollReveal from "../hooks/useScrollReveal";

const SectionHeading = ({ eyebrow, title, description }) => {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.32,
    rootMargin: "0px 0px -12% 0px",
    once: true
  });

  return (
    <ScrollReveal
      as="div"
      direction="up"
      glow
      threshold={0.32}
      rootMargin="0px 0px -12% 0px"
      className="mx-auto mb-8 max-w-4xl text-center md:mb-12 lg:mb-16"
    >
      <span ref={ref} className="section-heading__eyebrow max-w-full text-center leading-relaxed">
        {eyebrow}
      </span>
      <h2 className={`section-heading__title ${isVisible ? "section-heading__title--glitch" : ""} mt-5 text-balance font-heading text-[2.5rem] font-semibold leading-[0.92] tracking-[0.01em] md:mt-6 md:text-6xl lg:text-[4.4rem]`}>
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-7 text-[color:var(--muted)] md:text-lg md:leading-8 lg:text-[1.12rem]">{description}</p>
      ) : null}
    </ScrollReveal>
  );
};

export default SectionHeading;
