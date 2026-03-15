import { createElement } from "react";
import { useReducedMotion } from "framer-motion";
import useScrollReveal from "../hooks/useScrollReveal";
import useViewportProfile from "../hooks/useViewportProfile";

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
  const prefersReducedMotion = useReducedMotion();
  const { isMobile, isIOS } = useViewportProfile();
  const { ref, isVisible } = useScrollReveal({ threshold, rootMargin, once });
  const disableRevealMotion = prefersReducedMotion || isMobile || isIOS;
  const shouldShow = disableRevealMotion || isVisible;

  return createElement(
    as,
    {
      ref: disableRevealMotion ? undefined : ref,
      className: `reveal ${directionClassMap[direction] ?? directionClassMap.up} ${glow ? "reveal--glow" : ""} ${shouldShow ? "reveal--visible" : ""} ${className}`.trim(),
      style: { "--reveal-delay": `${delay}ms`, ...props.style },
      ...props
    },
    children
  );
};

export default ScrollReveal;
