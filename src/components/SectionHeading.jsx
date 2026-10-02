import ScrollReveal from "./ScrollReveal";

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <ScrollReveal
      as="div"
      direction="up"
      glow
      threshold={0.32}
      rootMargin="0px 0px -12% 0px"
      className="mx-auto mb-8 max-w-4xl text-center md:mb-12 lg:mb-16"
    >
      <span className="section-heading__eyebrow max-w-full text-center leading-relaxed">
        {eyebrow}
      </span>
      <h2 className="section-heading__title mt-5 text-balance font-heading text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.03em] md:mt-6 md:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-7 text-[color:var(--text-soft)] md:text-lg md:leading-8 lg:text-[1.12rem]">{description}</p>
      ) : null}
    </ScrollReveal>
  );
};

export default SectionHeading;
