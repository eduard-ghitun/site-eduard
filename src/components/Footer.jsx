import { brandAssets } from "../data/brandAssets";
import { contactInfo } from "../data/contactInfo";
import { navItems } from "../data/siteData";
import useIsMobile from "../hooks/useIsMobile";
import useIsTablet from "../hooks/useIsTablet";

const Footer = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const sectionBg = isMobile
    ? brandAssets.sectionBgMobile
    : isTablet
      ? brandAssets.sectionBgTablet
      : brandAssets.sectionBg;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-11 md:py-12">
      {!isMobile ? (
        <img
          src={sectionBg}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[50%_30%] opacity-20"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 bg-slate-950/72" />

      <div className="relative mx-auto w-full max-w-6xl px-4 text-sm text-slate-400 md:px-8 lg:px-12">
        <div className="grid gap-7 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
          <div className="space-y-3.5">
            <div className="h-10 w-28 overflow-hidden rounded-lg border border-white/20">
              <img src={brandAssets.logo} alt="Logo GDev" className="h-full w-full object-cover" decoding="async" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-300">
              Web development premium, mentenanță și modernizare pentru proiecte serioase.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Navigare</p>
            <div className="grid gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm text-slate-300 transition hover:text-cyan-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</p>
            <div className="grid gap-1.5">
              {contactInfo.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 break-all items-center text-sm text-slate-300 transition hover:text-cyan-100"
                >
                  {item.value}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Colaborare</p>
            <p className="text-sm leading-relaxed text-slate-300">
              Proiecte disponibile pentru Cluj-Napoca și colaborări remote în toată România.
            </p>
            <a
              href="#contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-200 transition duration-300 hover:border-cyan-200/60 hover:bg-cyan-300/20 hover:text-white md:w-auto"
            >
              Trimite un mesaj
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} GDev. Toate drepturile rezervate.</p>
          <p className="break-words text-xs text-slate-400/90 md:text-right">
            Web Developer Cluj-Napoca | Creare Website-uri Moderne | gdevelopment.ro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
