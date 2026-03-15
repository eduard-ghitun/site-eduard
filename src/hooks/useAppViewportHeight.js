import { useEffect } from "react";

const setViewportHeight = () => {
  const height = window.visualViewport?.height ?? window.innerHeight;
  document.documentElement.style.setProperty("--app-height", `${height}px`);
};

const useAppViewportHeight = () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    setViewportHeight();

    const handleResize = () => setViewportHeight();

    window.addEventListener("resize", handleResize);
    window.visualViewport?.addEventListener("resize", handleResize);
    window.visualViewport?.addEventListener("scroll", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("scroll", handleResize);
    };
  }, []);
};

export default useAppViewportHeight;
