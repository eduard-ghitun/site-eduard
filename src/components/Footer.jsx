import AnimatedLogo from "./AnimatedLogo";
import { contactInfo } from "../data/contactInfo";
import { navItems } from "../data/siteData";

const Footer = () => {
  return (
    <footer className="relative border-t border-[rgba(121,255,172,0.1)] py-12 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 text-sm text-[color:var(--muted)] md:px-8 lg:px-12">
        <div className="grid gap-7 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
          <div className="space-y-3.5">
            <AnimatedLogo href="#hero" size="footer" animateOnMount={false} />
            <p className="max-w-xs text-sm leading-7 text-[color:var(--text-soft)]">
              Web development premium, mentenanță și modernizare pentru proiecte serioase.
            </p>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--neon)]">Navigare</p>
            <div className="grid gap-1.5">
              {navItems.map((item) => (
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
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--neon)]">Contact</p>
            <div className="grid gap-1.5">
              {contactInfo.map((item) => (
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
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--neon)]">Colaborare</p>
            <p className="text-sm leading-7 text-[color:var(--text-soft)]">
              Proiecte disponibile pentru Cluj-Napoca și colaborări remote în toată România.
            </p>
            <a
              href="#contact"
              className="ui-button ui-button--secondary w-full px-5 py-2 text-sm md:w-auto"
            >
              Trimite un mesaj
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[rgba(121,255,172,0.1)] pt-5 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} GDevelopment. Toate drepturile rezervate.</p>
          <p className="break-words text-xs text-[color:var(--muted)] md:text-right">
            Web Developer Cluj-Napoca | Creare Website-uri Moderne | gdevelopment.ro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
