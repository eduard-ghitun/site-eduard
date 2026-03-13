import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems } from "../data/siteData";
import { brandAssets } from "../data/brandAssets";
import useNavbarScrolled from "../hooks/useNavbarScrolled";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);
  const isScrolled = useNavbarScrolled(28);
  const prefersReducedMotion = useReducedMotion();

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
    ? "px-4 py-3 sm:px-5 md:px-6 md:py-[0.875rem] lg:px-8"
    : "px-4 py-4 sm:px-6 md:px-8 md:py-[1.125rem] lg:px-12";
  const headerSurface = isScrolled
    ? "border-white/[0.08] bg-[#09090b]/[0.72] shadow-[0_20px_48px_-32px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-[22px]"
    : "border-transparent bg-black/[0.02] shadow-none backdrop-blur-0";
  const menuButtonSurface = isScrolled ? "bg-white/[0.05]" : "bg-white/[0.03]";
  const ctaSurface = isScrolled
    ? "border-white/10 bg-white/[0.05]"
    : "border-transparent bg-transparent";

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-2 sm:px-4 lg:px-4 lg:pt-3">
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
              className={`pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),transparent_55%)] transition-opacity duration-300 ease-out [mask-image:linear-gradient(180deg,black,transparent)] md:block ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              className={`mx-auto flex w-full items-center justify-between ${rowPadding} ${shellTransition} transition-[padding]`}
            >
              <a href="#hero" className="group flex items-center">
                <div
                  className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] ${shellTransition} transition-[height,width,background-color,border-color,transform] group-hover:border-white/18 group-hover:bg-white/[0.05] ${
                    isScrolled
                      ? "h-[2.35rem] w-[8.15rem] sm:h-[2.55rem] sm:w-[8.85rem] md:h-[2.75rem] md:w-[9.75rem]"
                      : "h-10 w-[8.75rem] sm:h-11 sm:w-[9.5rem] md:h-12 md:w-[10.5rem]"
                  }`}
                >
                  <img
                    src={brandAssets.logo}
                    alt="Logo GDev"
                    className="h-full w-full object-cover object-center"
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-white/[0.04]" />
                </div>
              </a>

              <div className="hidden items-center gap-3 lg:flex lg:flex-nowrap lg:gap-5">
                <div className="flex items-center gap-5 lg:gap-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`relative inline-flex items-center whitespace-nowrap text-sm tracking-[0.02em] text-stone-400 ${shellTransition} transition-colors hover:text-stone-100 md:min-h-11 md:py-2`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`inline-flex min-h-11 items-center whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium text-stone-100 ${ctaSurface} ${shellTransition} transition-[background-color,border-color,transform] hover:border-[rgba(130,167,178,0.28)] hover:bg-white/[0.07]`}
                >
                  Cere ofertă
                </a>
              </div>

              <button
                ref={toggleRef}
                type="button"
                onClick={() => setIsOpen((value) => !value)}
                className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/10 ${menuButtonSurface} text-stone-100 ${shellTransition} transition-[background-color,border-color,color] hover:border-white/20 hover:bg-white/[0.06] lg:hidden`}
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
                className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              />
              <motion.aside
                id="mobile-menu"
                ref={panelRef}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="fixed right-0 top-0 z-50 flex h-[100svh] w-[min(24rem,88vw)] flex-col overflow-y-auto overscroll-contain border-l border-white/10 bg-[#0b0b0d] px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-20 shadow-2xl lg:hidden"
              >
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="inline-flex min-h-11 items-center rounded-xl px-4 text-base font-medium text-stone-300 transition hover:bg-white/[0.05] hover:text-stone-100"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/10 bg-stone-100 px-5 py-3 text-sm font-semibold text-stone-950"
                >
                  Cere ofertă
                </a>
              </motion.aside>
            </>
          ) : null}
        </AnimatePresence>
      </header>
      <div aria-hidden="true" className="h-[5rem] sm:h-[5.35rem] lg:h-[6.4rem]" />
    </>
  );
};

export default Navbar;
