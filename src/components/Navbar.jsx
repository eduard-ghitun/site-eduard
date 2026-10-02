import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedLogo from "./AnimatedLogo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import { useSectionUI } from "../context/SectionUIContext";
import useNavbarScrolled from "../hooks/useNavbarScrolled";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useNavbarScrolled(24);
  const { activeSection } = useSectionUI();
  const { t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
        <nav className="site-container nav-shell" aria-label={t.nav.ariaLabel}>
          <AnimatedLogo href="#hero" size="navbar" />
          <div className="nav-desktop">
            <div className="nav-links">
              {t.nav.items.map((item) => <a key={item.href} href={item.href} className={activeSection === item.href.slice(1) ? "is-active" : ""}>{item.label}</a>)}
            </div>
            <LanguageSwitcher />
            <a href="#contact" className="ui-button ui-button--primary nav-cta">{t.nav.cta}</a>
          </div>
          <div className="nav-mobile-actions">
            <LanguageSwitcher compact />
            <button type="button" className="menu-toggle" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu} aria-expanded={isOpen}>
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>
      </header>
      {isOpen ? (
        <div className="mobile-menu" role="dialog" aria-label={t.nav.ariaLabel}>
          <div className="mobile-menu__panel">
            <div className="mobile-menu__top"><AnimatedLogo href="#hero" size="navbar" /><button type="button" className="menu-toggle" onClick={() => setIsOpen(false)} aria-label={t.nav.closeMenu}><X size={21} /></button></div>
            <div className="mobile-menu__links">
              {t.nav.items.map((item) => <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className={activeSection === item.href.slice(1) ? "is-active" : ""}>{item.label}</a>)}
            </div>
            <a href="#contact" onClick={() => setIsOpen(false)} className="ui-button ui-button--primary">{t.nav.cta}</a>
          </div>
        </div>
      ) : null}
      <div className="header-spacer" />
    </>
  );
};

export default Navbar;
