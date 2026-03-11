import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";
import useIsMobile from "../hooks/useIsMobile";

const iconMap = {
  email: Mail,
  phone: Phone,
  instagram: Instagram
};

const ContactMethod = ({ item, variant = "card", delay = 0 }) => {
  const isMobile = useIsMobile();
  const Icon = iconMap[item.id] ?? Mail;
  const externalProps = item.external ? { target: "_blank", rel: "noreferrer" } : {};

  if (variant === "inline") {
    return (
      <a
        href={item.href}
        {...externalProps}
        className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/45 hover:text-cyan-100"
      >
        <Icon className="h-3.5 w-3.5 text-slate-300 transition group-hover:text-cyan-100" />
        <span>{item.value}</span>
      </a>
    );
  }

  return (
    <motion.a
      href={item.href}
      {...externalProps}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: isMobile ? 0.28 : 0.45, delay: isMobile ? delay * 0.5 : delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={isMobile ? undefined : { y: -4 }}
      className="group relative min-h-11 overflow-hidden rounded-2xl border border-white/15 bg-slate-950/55 p-4 transition duration-300 hover:border-cyan-200/35 hover:shadow-[0_0_30px_-18px_rgba(56,189,248,0.85)]"
    >
      {!isMobile ? (
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.16),transparent_50%)]" />
      ) : null}
      <div className="relative flex items-start gap-3">
        <span className="rounded-xl border border-white/15 bg-slate-900/80 p-2">
          <Icon className="h-4 w-4 text-cyan-200" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
          <p className="mt-1 break-all text-sm font-medium text-slate-100">{item.value}</p>
        </div>
      </div>
    </motion.a>
  );
};

export default ContactMethod;
