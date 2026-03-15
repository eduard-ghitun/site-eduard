import { motion, useReducedMotion } from "framer-motion";
import useViewportProfile from "../hooks/useViewportProfile";

const SIZE_CONFIG = {
  navbar: {
    className: "gd-logo--navbar",
    seam: "1.22rem"
  },
  footer: {
    className: "gd-logo--footer",
    seam: "1.08rem"
  }
};

const AnimatedLogo = ({ href = "#hero", size = "navbar", animateOnMount = true, className = "" }) => {
  const prefersReducedMotion = useReducedMotion();
  const { isMobile, isTablet } = useViewportProfile();
  const config = SIZE_CONFIG[size] ?? SIZE_CONFIG.navbar;
  const shouldAnimate = animateOnMount && !prefersReducedMotion;
  const travel = isMobile ? 16 : isTablet ? 24 : 30;
  const burstDuration = isMobile ? 0.52 : isTablet ? 0.64 : 0.72;

  const gInitial = shouldAnimate ? { x: -travel, opacity: 0, filter: "blur(8px)" } : { opacity: 1 };
  const gAnimate = shouldAnimate
    ? {
        x: [-travel, 6, 0],
        opacity: [0, 1, 1],
        filter: ["blur(8px)", "blur(0px)", "blur(0px)"],
        transition: {
          duration: isMobile ? 0.52 : isTablet ? 0.68 : 0.78,
          ease: [0.18, 1, 0.32, 1],
          times: [0, 0.78, 1]
        }
      }
    : { opacity: 1 };

  const devInitial = shouldAnimate ? { x: travel, opacity: 0, filter: "blur(8px)" } : { opacity: 1 };
  const devAnimate = shouldAnimate
    ? {
        x: [travel, -5, 0],
        opacity: [0, 1, 1],
        filter: ["blur(8px)", "blur(0px)", "blur(0px)"],
        transition: {
          duration: isMobile ? 0.56 : isTablet ? 0.72 : 0.82,
          ease: [0.18, 1, 0.32, 1],
          times: [0, 0.76, 1],
          delay: isMobile ? 0.02 : 0.03
        }
      }
    : { opacity: 1 };

  const wrapperAnimate = shouldAnimate
    ? {
        scale: [0.985, 1.024, 1],
        filter: ["brightness(0.92)", "brightness(1.18)", "brightness(1)"],
        transition: {
          duration: isMobile ? 0.58 : isTablet ? 0.76 : 0.9,
          ease: [0.18, 1, 0.32, 1]
        }
      }
    : { scale: 1 };

  const burstAnimate = shouldAnimate
    ? {
        opacity: [0, 0, 1, 0.18, 0],
        scale: [0.4, 0.4, 1.22, 1.75, 2.1],
        transition: {
          duration: burstDuration,
          ease: [0.16, 1, 0.3, 1],
          delay: isMobile ? 0.18 : isTablet ? 0.28 : 0.34,
          times: [0, 0.28, 0.44, 0.74, 1]
        }
      }
    : { opacity: 0, scale: 0.8 };

  const trailAnimate = shouldAnimate
    ? {
        opacity: [0, 0, 0.82, 0],
        scaleX: [0.2, 0.2, 1, 1.16],
        transition: {
          duration: burstDuration,
          ease: [0.16, 1, 0.3, 1],
          delay: isMobile ? 0.16 : isTablet ? 0.26 : 0.32,
          times: [0, 0.26, 0.48, 1]
        }
      }
    : { opacity: 0, scaleX: 0.5 };

  return (
    <a
      href={href}
      aria-label="GDevelopment"
      className={`gd-logo ${config.className} ${className}`}
      style={{ "--logo-seam": config.seam }}
    >
      <motion.span className="gd-logo__core" initial={false} animate={wrapperAnimate}>
        <motion.span className="gd-logo__g" initial={gInitial} animate={gAnimate}>
          G
        </motion.span>
        <motion.span className="gd-logo__dev" initial={devInitial} animate={devAnimate}>
          Development
        </motion.span>
        <motion.span
          aria-hidden="true"
          className="gd-logo__impact"
          initial={false}
          animate={burstAnimate}
        />
        <motion.span
          aria-hidden="true"
          className="gd-logo__trail"
          initial={false}
          animate={trailAnimate}
        />
        <span aria-hidden="true" className="gd-logo__sweep" />
      </motion.span>
    </a>
  );
};

export default AnimatedLogo;
