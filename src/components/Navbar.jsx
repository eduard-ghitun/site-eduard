import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems } from "../data/siteData";
import { brandAssets } from "../data/brandAssets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

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
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:px-8 md:py-4 lg:px-12">
        <a href="#hero" className="group flex items-center">
          <div className="relative h-10 w-[8.75rem] overflow-hidden rounded-xl border border-white/20 shadow-[0_0_35px_-15px_rgba(56,189,248,0.85)] transition duration-300 group-hover:scale-[1.02] group-hover:border-cyan-200/60 sm:h-11 sm:w-[9.5rem] md:h-12 md:w-[10.5rem]">
            <img
              src={brandAssets.logo}
              alt="Logo GDev"
              className="h-full w-full object-cover object-center"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/35 via-transparent to-cyan-300/10" />
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative inline-flex items-center text-sm text-slate-300 transition hover:text-white md:min-h-11 md:py-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden min-h-11 items-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-cyan-300/20 hover:text-white md:inline-flex"
        >
          Cere ofertă
        </a>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-slate-100 transition hover:border-cyan-200/40 hover:text-cyan-100 md:hidden"
          aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

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
              className="fixed inset-0 z-40 bg-slate-950/75 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              id="mobile-menu"
              ref={panelRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 flex h-dvh w-[86%] max-w-sm flex-col overflow-y-auto border-l border-white/10 bg-slate-950 px-5 pb-6 pt-20 shadow-2xl md:hidden"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="inline-flex min-h-11 items-center rounded-xl px-4 text-base font-medium text-slate-200 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950"
              >
                Cere ofertă
              </a>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
