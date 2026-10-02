import { Instagram, Mail, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const iconMap = { email: Mail, phone: Phone, instagram: Instagram };

const ContactMethod = ({ item, variant = "card", delay = 0 }) => {
  const Icon = iconMap[item.id] ?? Mail;
  const externalProps = item.external ? { target: "_blank", rel: "noreferrer" } : {};
  const content = <><span className="contact-method__icon"><Icon size={18} /></span><span><small>{item.label}</small><strong>{item.value}</strong></span></>;
  if (variant === "inline") return <a href={item.href} {...externalProps} className="contact-method contact-method--inline">{content}</a>;
  return <ScrollReveal as="a" href={item.href} {...externalProps} delay={delay * 120} className="contact-method">{content}</ScrollReveal>;
};

export default ContactMethod;
