import { brandAssets } from "../data/brandAssets";
import { contactInfo } from "../data/contactInfo";
import { navItems } from "../data/siteData";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.08] py-12 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 text-sm text-stone-500 md:px-8 lg:px-12">
        <div className="grid gap-7 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
          <div className="space-y-3.5">
            <div className="h-10 w-28 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
              <img src={brandAssets.logo} alt="Logo GDev" className="h-full w-full object-cover" decoding="async" />
            </div>
            <p className="max-w-xs text-sm leading-7 text-stone-400">
              Web development premium, mentenanță și modernizare pentru proiecte serioase.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-300">Navigare</p>
            <div className="grid gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm text-stone-400 transition hover:text-stone-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-300">Contact</p>
            <div className="grid gap-1.5">
              {contactInfo.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 break-all items-center text-sm text-stone-400 transition hover:text-stone-100"
                >
                  {item.value}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-300">Colaborare</p>
            <p className="text-sm leading-7 text-stone-400">
              Proiecte disponibile pentru Cluj-Napoca și colaborări remote în toată România.
            </p>
            <a
              href="#contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-stone-100 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] md:w-auto"
            >
              Trimite un mesaj
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} GDev. Toate drepturile rezervate.</p>
          <p className="break-words text-xs text-stone-500 md:text-right">
            Web Developer Cluj-Napoca | Creare Website-uri Moderne | gdevelopment.ro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
