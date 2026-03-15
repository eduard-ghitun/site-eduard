import { createElement } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const directionClassMap = {
  up: "reveal--up",
  down: "reveal--down",
  left: "reveal--left",
  right: "reveal--right",
  none: "reveal--none"
};

const ScrollReveal = ({
  as = "div",
  className = "",
  children,
  delay = 0,
  threshold = 0.22,
  rootMargin = "0px 0px -10% 0px",
  once = true,
  glow = false,
  direction = "up",
  ...props
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold, rootMargin, once });

  return createElement(
    as,
    {
      ref,
      className: `reveal ${directionClassMap[direction] ?? directionClassMap.up} ${glow ? "reveal--glow" : ""} ${isVisible ? "reveal--visible" : ""} ${className}`.trim(),
      style: { "--reveal-delay": `${delay}ms`, ...props.style },
      ...props
    },
    children
  );
};

export default ScrollReveal;
