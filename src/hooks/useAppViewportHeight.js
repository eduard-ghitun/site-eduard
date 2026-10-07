import { useEffect } from "react";

const setViewportHeight = () => {
  const height = window.visualViewport?.height ?? window.innerHeight;
  const nextHeight = `${Math.round(height)}px`;

  if (document.documentElement.style.getPropertyValue("--app-height") !== nextHeight) {
    document.documentElement.style.setProperty("--app-height", nextHeight);
  }
};

const useAppViewportHeight = () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    let frameId = 0;
    const scheduleViewportUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        setViewportHeight();
      });
    };

    setViewportHeight();

    window.addEventListener("resize", scheduleViewportUpdate, { passive: true });
    window.addEventListener("orientationchange", scheduleViewportUpdate, { passive: true });
    window.visualViewport?.addEventListener("resize", scheduleViewportUpdate, { passive: true });
    window.visualViewport?.addEventListener("scroll", scheduleViewportUpdate, { passive: true });

    return () => {
      window.removeEventListener("resize", scheduleViewportUpdate);
      window.removeEventListener("orientationchange", scheduleViewportUpdate);
      window.visualViewport?.removeEventListener("resize", scheduleViewportUpdate);
      window.visualViewport?.removeEventListener("scroll", scheduleViewportUpdate);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);
};

export default useAppViewportHeight;
