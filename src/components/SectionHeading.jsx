import ScrollReveal from "./ScrollReveal";

const SectionHeading = ({ eyebrow, title, description }) => (
  <ScrollReveal as="div" direction="up" threshold={0.2} rootMargin="0px 0px -8% 0px" className="section-heading">
    <span className="section-heading__eyebrow">{eyebrow}</span>
    <h2 className="section-heading__title">{title}</h2>
    {description ? <p>{description}</p> : null}
  </ScrollReveal>
);

export default SectionHeading;
