import { useSectionUI } from "../context/SectionUIContext";

const SectionFrame = ({ id, className = "", children }) => {
  const { isSectionActive, isSectionHighlighted } = useSectionUI();
  const isActive = isSectionActive(id);
  const isHighlighted = isSectionHighlighted(id);

  return (
    <section
      id={id}
      data-section={id}
      className={`site-section ${isActive ? "site-section--active" : ""} ${isHighlighted ? "site-section--highlighted" : ""} ${className}`}
    >
      <div aria-hidden="true" className="site-section__glow" />
      <div aria-hidden="true" className="site-section__scan" />
      <div aria-hidden="true" className="site-section__outline" />
      {children}
    </section>
  );
};

export default SectionFrame;
