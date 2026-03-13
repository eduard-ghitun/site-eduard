import { useEffect, useState } from "react";

const getInitialValue = (threshold) => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.scrollY > threshold;
};

const useNavbarScrolled = (threshold = 32) => {
  const [isScrolled, setIsScrolled] = useState(() => getInitialValue(threshold));

  useEffect(() => {
    let frameId = null;

    const updateScrollState = () => {
      frameId = null;
      const nextValue = window.scrollY > threshold;
      setIsScrolled((currentValue) => (currentValue === nextValue ? currentValue : nextValue));
    };

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isScrolled;
};

export default useNavbarScrolled;
