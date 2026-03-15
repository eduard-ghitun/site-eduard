import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AnimatedLogo from "./AnimatedLogo";
import { navItems } from "../data/siteData";
import { useSectionUI } from "../context/SectionUIContext";
import useNavbarScrolled from "../hooks/useNavbarScrolled";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);
  const isScrolled = useNavbarScrolled(28);
  const prefersReducedMotion = useReducedMotion();
  const { activeSection } = useSectionUI();

  useEffect(() => {
    document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      const target = event.target;
      if (panelRef.current?.contains(target) || toggleRef.current?.contains(target)) {
        return;
      }
      setIsOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const shellTransition = prefersReducedMotion
    ? ""
    : "duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";
  const rowPadding = isScrolled
    ? "px-4 py-3 sm:px-5 md:px-6 md:py-[0.9rem] lg:px-8"
    : "px-4 py-4 sm:px-6 md:px-8 md:py-[1.1rem] lg:px-12";
  const headerSurface = isScrolled
    ? "border-[rgba(121,255,172,0.16)] bg-[#060907]/[0.74] shadow-[0_24px_56px_-34px_rgba(0,0,0,0.88),0_0_28px_rgba(92,255,154,0.08),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-[22px]"
    : "border-[rgba(121,255,172,0.08)] bg-black/[0.22] shadow-[0_18px_44px_-36px_rgba(0,0,0,0.72)] backdrop-blur-[16px]";
  const menuButtonSurface = isScrolled ? "bg-[rgba(9,18,14,0.9)]" : "bg-[rgba(8,13,11,0.66)]";
  const ctaSurface = isScrolled
    ? "border-[rgba(121,255,172,0.16)] bg-[rgba(9,18,14,0.9)]"
    : "border-[rgba(121,255,172,0.12)] bg-[rgba(7,11,10,0.62)]";

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-[calc(0.45rem+env(safe-area-inset-top))] sm:px-4 lg:px-4 lg:pt-[calc(0.75rem+env(safe-area-inset-top))]">
        <motion.div
          initial={false}
          animate={isScrolled ? { y: 0 } : { y: 2 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-6xl"
        >
          <nav
            aria-label="Navigare principală"
            className={`relative overflow-hidden rounded-[1.6rem] border ${headerSurface} ${shellTransition} transition-[background-color,border-color,box-shadow,backdrop-filter]`}
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(121,255,172,0.08),transparent_55%)] transition-opacity duration-300 ease-out [mask-image:linear-gradient(180deg,black,transparent)] md:block ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(121,255,172,0.36),transparent)]" />
            <div
              className={`mx-auto flex w-full items-center justify-between ${rowPadding} ${shellTransition} transition-[padding]`}
            >
              <AnimatedLogo href="#hero" size="navbar" className="shrink-0" />

              <div className="hidden items-center gap-3 lg:flex lg:flex-nowrap lg:gap-5">
                <div className="flex items-center gap-5 lg:gap-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`relative inline-flex min-h-11 items-center whitespace-nowrap px-1 py-2 text-sm font-medium tracking-[0.03em] ${shellTransition} transition-colors md:min-h-11 ${
                        activeSection === item.href.slice(1)
                          ? "text-[color:var(--neon)]"
                          : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute inset-x-1 -bottom-[0.12rem] h-px rounded-full bg-[linear-gradient(90deg,transparent,rgba(121,255,172,0.95),transparent)] transition-opacity duration-300 ${
                          activeSection === item.href.slice(1) ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </a>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`ui-button ui-button--primary whitespace-nowrap px-5 py-2 text-sm ${ctaSurface} ${shellTransition}`}
                >
                  Cere ofertă
                </a>
              </div>

              <button
                ref={toggleRef}
                type="button"
                onClick={() => setIsOpen((value) => !value)}
                className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-[rgba(121,255,172,0.16)] ${menuButtonSurface} text-[color:var(--text)] ${shellTransition} transition-[background-color,border-color,color] hover:border-[rgba(121,255,172,0.34)] hover:bg-[rgba(9,18,14,0.94)] lg:hidden`}
                aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </motion.div>

        <AnimatePresence>
          {isOpen ? (
            <>
              <motion.button
                type="button"
                aria-label="Închide meniul"
                onClick={closeMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-black/78 backdrop-blur-sm lg:hidden"
              />
              <motion.aside
                id="mobile-menu"
                ref={panelRef}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="fixed right-0 top-0 z-50 flex h-[var(--app-height)] w-[min(24rem,88vw)] flex-col overflow-y-auto overscroll-contain border-l border-[rgba(121,255,172,0.16)] bg-[#050807] px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-20 shadow-[0_0_48px_rgba(92,255,154,0.08)] lg:hidden"
              >
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`inline-flex min-h-11 items-center rounded-xl px-4 text-base font-medium transition ${
                        activeSection === item.href.slice(1)
                          ? "bg-[rgba(121,255,172,0.08)] text-[color:var(--neon)]"
                          : "text-[color:var(--text-soft)] hover:bg-[rgba(121,255,172,0.04)] hover:text-[color:var(--text)]"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="ui-button ui-button--primary mt-6 w-full text-sm"
                >
                  Cere ofertă
                </a>
              </motion.aside>
            </>
          ) : null}
        </AnimatePresence>
      </header>
    <div aria-hidden="true" className="h-[calc(5rem+env(safe-area-inset-top))] sm:h-[calc(5.35rem+env(safe-area-inset-top))] lg:h-[calc(6.4rem+env(safe-area-inset-top))]" />
    </>
  );
};

export default Navbar;
