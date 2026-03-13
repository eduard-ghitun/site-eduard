import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";
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
        className={`group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-stone-300 transition duration-300 ${
          disableHover ? "" : "hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] hover:text-stone-100"
        }`}
      >
        <Icon className={`h-3.5 w-3.5 text-stone-400 transition ${disableHover ? "" : "group-hover:text-stone-100"}`} />
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
      transition={{ duration: isMobile || isTablet ? 0.28 : 0.45, delay: isMobile ? delay * 0.5 : delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={disableHover ? undefined : { y: -4 }}
      className={`group relative min-h-11 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-4 transition duration-300 ${
        disableHover ? "" : "hover:border-white/18 hover:bg-white/[0.04]"
      }`}
    >
      {!disableHover ? (
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_10%_10%,rgba(142,171,180,0.12),transparent_50%)]" />
      ) : null}
      <div className="relative flex items-start gap-3">
        <span className="rounded-xl border border-white/10 bg-black/20 p-2">
          <Icon className="h-4 w-4 text-stone-300" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">{item.label}</p>
          <p className="mt-1 break-all text-sm font-medium text-stone-100">{item.value}</p>
        </div>
      </div>
    </motion.a>
  );
};

export default ContactMethod;
