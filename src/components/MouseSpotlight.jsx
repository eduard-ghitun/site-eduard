import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import useViewportProfile from "../hooks/useViewportProfile";

const LARGE_SIZE = 440;
const SMALL_SIZE = 180;

const MouseSpotlight = () => {
  const { isTouch, isMobile, isTablet } = useViewportProfile();
  const prefersReducedMotion = useReducedMotion();
  const largeRef = useRef(null);
  const smallRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || isTouch || isMobile) {
      return undefined;
    }

    let frameId = 0;
    let currentX = window.innerWidth * 0.5;
    let currentY = window.innerHeight * 0.22;
    let targetX = currentX;
    let targetY = currentY;

    const update = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      if (largeRef.current) {
        largeRef.current.style.transform = `translate3d(${currentX - LARGE_SIZE / 2}px, ${currentY - LARGE_SIZE / 2}px, 0)`;
      }

      if (smallRef.current) {
        smallRef.current.style.transform = `translate3d(${currentX - SMALL_SIZE / 2}px, ${currentY - SMALL_SIZE / 2}px, 0)`;
      }

      frameId = window.requestAnimationFrame(update);
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    frameId = window.requestAnimationFrame(update);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frameId);
    };
  }, [isMobile, isTablet, isTouch, prefersReducedMotion]);

  if (prefersReducedMotion || isTouch || isMobile) {
    return null;
  }

  return (
    <div aria-hidden="true" className={`spotlight-layer ${isTablet ? "opacity-70" : ""}`}>
      <div ref={largeRef} className="spotlight-layer__orb spotlight-layer__orb--large" />
      <div ref={smallRef} className="spotlight-layer__orb spotlight-layer__orb--small" />
    </div>
  );
};

export default MouseSpotlight;
