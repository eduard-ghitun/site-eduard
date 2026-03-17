import AnimatedLogo from "./AnimatedLogo";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-[rgba(121,255,172,0.1)] py-12 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 text-sm text-[color:var(--muted)] md:px-8 lg:px-12">
        <div className="grid gap-7 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
          <div className="space-y-3.5">
            <AnimatedLogo href="#hero" size="footer" animateOnMount={false} />
            <p className="max-w-xs text-sm leading-7 text-[color:var(--text-soft)]">
              {t.footer.description}
            </p>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--neon)]">{t.footer.navTitle}</p>
            <div className="grid gap-1.5">
              {t.nav.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm text-[color:var(--text-soft)] transition hover:text-[color:var(--text)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--neon)]">{t.footer.contactTitle}</p>
            <div className="grid gap-1.5">
              {t.contact.info.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 break-all items-center text-sm text-[color:var(--text-soft)] transition hover:text-[color:var(--text)]"
                >
                  {item.value}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3.5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--neon)]">{t.footer.collaborationTitle}</p>
            <p className="text-sm leading-7 text-[color:var(--text-soft)]">
              {t.footer.collaborationText}
            </p>
            <a
              href="#contact"
              className="ui-button ui-button--secondary w-full px-5 py-2 text-sm md:w-auto"
            >
              {t.footer.cta}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[rgba(121,255,172,0.1)] pt-5 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} GDevelopment. {t.footer.rightsReserved}</p>
          <p className="break-words text-xs text-[color:var(--muted)] md:text-right">
            {t.footer.seoLine}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
