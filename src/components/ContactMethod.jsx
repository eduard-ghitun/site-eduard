import { Instagram, Mail, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import useViewportProfile from "../hooks/useViewportProfile";

const iconMap = {
  email: Mail,
  phone: Phone,
  instagram: Instagram
};

const ContactMethod = ({ item, variant = "card", delay = 0 }) => {
  const { isMobile, isTouch, isTablet } = useViewportProfile();
  const disableHover = isTouch || isTablet;
  const Icon = iconMap[item.id] ?? Mail;
  const externalProps = item.external ? { target: "_blank", rel: "noreferrer" } : {};

  if (variant === "inline") {
    return (
      <a
        href={item.href}
        {...externalProps}
        className={`group inline-flex min-h-11 items-center gap-2 rounded-full border border-[rgba(121,255,172,0.12)] bg-[rgba(8,13,11,0.84)] px-3 py-1.5 text-xs text-[color:var(--text-soft)] transition duration-300 ${
          disableHover ? "" : "hover:-translate-y-0.5 hover:border-[rgba(121,255,172,0.24)] hover:bg-[rgba(9,18,14,0.84)] hover:text-[color:var(--text)]"
        }`}
      >
        <Icon className={`h-3.5 w-3.5 text-[color:var(--neon)] transition ${disableHover ? "" : "group-hover:text-[color:var(--text)]"}`} />
        <span>{item.value}</span>
      </a>
    );
  }

  return (
    <ScrollReveal
      as="a"
      href={item.href}
      {...externalProps}
      delay={isMobile ? delay * 500 : delay * 1000}
      threshold={0.16}
      glow
      className={`group relative min-h-11 overflow-hidden rounded-[1.5rem] border border-[rgba(121,255,172,0.12)] bg-[rgba(8,13,11,0.82)] p-4 transition duration-300 ${
        disableHover ? "" : "hover:border-[rgba(121,255,172,0.22)] hover:bg-[rgba(9,18,14,0.72)]"
      }`}
    >
      {!disableHover ? (
        <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_10%_10%,rgba(92,255,154,0.08),transparent_50%)]" />
      ) : null}
      <div className="relative z-10 flex items-start gap-3">
        <span className="rounded-xl border border-[rgba(121,255,172,0.14)] bg-[rgba(4,8,7,0.84)] p-2">
          <Icon className="h-4 w-4 text-[color:var(--neon)]" />
        </span>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">{item.label}</p>
          <p className="mt-1 break-all text-sm font-medium text-[color:var(--text)]">{item.value}</p>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ContactMethod;
