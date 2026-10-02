const AnimatedLogo = ({ href = "#hero", size = "navbar", className = "" }) => (
  <a href={href} aria-label="GDevelopment" className={`gd-logo gd-logo--${size} ${className}`}>
    <span className="gd-logo__mark">G</span><span className="gd-logo__name">Development</span>
  </a>
);

export default AnimatedLogo;
