import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

const SectionUIContext = createContext(null);

const getHashTarget = (value) => {
  if (!value || value === "#") {
    return "";
  }

  return value.startsWith("#") ? value.slice(1) : value;
};

export const SectionUIProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [highlightedSection, setHighlightedSection] = useState("");
  const clearHighlightRef = useRef(null);

  const highlightSection = useCallback((sectionId, duration = 1800) => {
    if (!sectionId) {
      return;
    }

    window.clearTimeout(clearHighlightRef.current);
    setHighlightedSection(sectionId);

    clearHighlightRef.current = window.setTimeout(() => {
      setHighlightedSection((current) => (current === sectionId ? "" : current));
    }, duration);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-section]"));

    if (!sections.length) {
      return undefined;
    }

    let rafId = 0;

    const updateActiveSection = () => {
      rafId = 0;

      const viewportMarker = window.innerHeight * 0.34;
      let nextSection = sections[0]?.id ?? "hero";
      let bestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const containsMarker = rect.top <= viewportMarker && rect.bottom >= viewportMarker;
        const distance = Math.abs(rect.top - viewportMarker);

        if (containsMarker) {
          nextSection = section.id;
          bestDistance = -1;
          return;
        }

        if (bestDistance !== -1 && distance < bestDistance) {
          bestDistance = distance;
          nextSection = section.id;
        }
      });

      setActiveSection((current) => (current === nextSection ? current : nextSection));
    };

    const requestUpdate = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      const link = event.target.closest("a[href^='#']");
      const sectionId = getHashTarget(link?.getAttribute("href"));

      if (!sectionId || !document.getElementById(sectionId)) {
        return;
      }

      setActiveSection(sectionId);
      highlightSection(sectionId);
    };

    const handleHashChange = () => {
      const sectionId = getHashTarget(window.location.hash);

      if (!sectionId || !document.getElementById(sectionId)) {
        return;
      }

      setActiveSection(sectionId);
      highlightSection(sectionId, 1400);
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [highlightSection]);

  useEffect(() => {
    return () => {
      window.clearTimeout(clearHighlightRef.current);
    };
  }, []);

  const value = useMemo(
    () => ({
      activeSection,
      highlightedSection,
      highlightSection,
      isSectionActive: (sectionId) => activeSection === sectionId,
      isSectionHighlighted: (sectionId) => highlightedSection === sectionId || activeSection === sectionId
    }),
    [activeSection, highlightedSection, highlightSection]
  );

  return <SectionUIContext.Provider value={value}>{children}</SectionUIContext.Provider>;
};

export const useSectionUI = () => {
  const context = useContext(SectionUIContext);

  if (!context) {
    throw new Error("useSectionUI must be used within SectionUIProvider");
  }

  return context;
};
