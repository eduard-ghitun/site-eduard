import emailjs from "@emailjs/browser";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ContactMethod from "./ContactMethod";
import SectionFrame from "./SectionFrame";
import ScrollReveal from "./ScrollReveal";
import { contactInfo } from "../data/contactInfo";
import useViewportProfile from "../hooks/useViewportProfile";

// Replace with your EmailJS service ID.
const SERVICE_ID = "service_cxmf7ag";
// Replace with your EmailJS template ID.
const TEMPLATE_ID = "service_cxmf7ag";
// Replace with your EmailJS public key.
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const { isMobile, isTablet } = useViewportProfile();
  const isCompact = isMobile || isTablet;
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSent(false);
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim()
    };

    if (!payload.name || !payload.email || !payload.message) {
      setSubmitError("Completează numele, emailul și mesajul înainte de trimitere.");
      return;
    }

    if (!EMAIL_PATTERN.test(payload.email)) {
      setSubmitError("Introdu o adresă de email validă.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, {
        publicKey: PUBLIC_KEY
      });

      setIsSent(true);
      form.reset();
      setTimeout(() => setIsSent(false), 3200);
    } catch (error) {
      setSubmitError(
        "Nu am putut trimite mesajul acum. Încearcă din nou sau contactează-mă direct pe email."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <SectionFrame id="contact" className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-32">
      <SectionHeading
        eyebrow="Contact / CTA Final"
        title="Contact Web Developer Cluj"
        description="Pentru proiecte de web development în Cluj-Napoca sau colaborări remote în România, contactează-mă direct prin email, telefon sau Instagram."
      />

      <div className="grid gap-5 md:gap-6 lg:grid-cols-[0.94fr_1.06fr]">
        <ScrollReveal
          as="article"
          delay={isCompact ? 0 : 20}
          glow
          className="surface-card ui-card-hover min-w-0 rounded-[2rem] p-6 md:p-8 lg:p-10"
        >
          <h3 className="font-heading text-[2.4rem] uppercase leading-[0.96] text-[#f5fff8] md:text-[3rem]">Canale contact</h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[color:var(--text-soft)] md:text-base">
            <strong className="font-medium text-[color:var(--text)]">Alege metoda preferată</strong> și îți răspund
            în cel mai scurt timp.
          </p>

          <div className="mt-8 grid gap-3.5 md:gap-4">
            {contactInfo.map((item, index) => (
              <ContactMethod key={item.id} item={item} delay={index * 0.08} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal
          as="form"
          onSubmit={handleSubmit}
          delay={isCompact ? 40 : 90}
          glow
          className="surface-card ui-card-hover min-w-0 rounded-[2rem] p-6 md:p-8 lg:p-10"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-[color:var(--text-soft)]">
              Nume
              <input
                name="name"
                type="text"
                placeholder="Numele tău"
                required
                className="ui-field mt-2 min-h-12 w-full rounded-[1.15rem] px-4 py-3 text-base outline-none transition"
              />
            </label>
            <label className="text-sm text-[color:var(--text-soft)]">
              Email
              <input
                name="email"
                type="email"
                placeholder="email@exemplu.ro"
                required
                className="ui-field mt-2 min-h-12 w-full rounded-[1.15rem] px-4 py-3 text-base outline-none transition"
              />
            </label>
          </div>

          <label className="mt-4 block text-sm text-[color:var(--text-soft)]">
            Mesaj
            <textarea
              name="message"
              rows={isMobile ? 4 : 5}
              placeholder="Scrie pe scurt ce îți dorești pentru site..."
              required
              className="ui-field mt-2 w-full rounded-[1.15rem] px-4 py-3 text-base outline-none transition"
            />
          </label>

          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
            <button
              type="submit"
              disabled={isSending}
              className="ui-button ui-button--primary w-full px-6 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-70 md:w-auto md:min-w-[12rem]"
            >
              {isSending ? "Se trimite..." : "Trimite mesaj"}
            </button>
            <p className="text-xs text-[color:var(--muted)] md:text-sm">Răspuns rapid în aceeași zi lucrătoare.</p>
          </div>

          {isSent ? (
            <p className="mt-4 rounded-[1.15rem] border border-[rgba(121,255,172,0.24)] bg-[rgba(121,255,172,0.08)] px-4 py-3 text-sm text-[color:var(--neon)]">
              Mesaj trimis cu succes.
            </p>
          ) : null}

          {submitError ? (
            <p className="mt-4 rounded-[1.15rem] border border-rose-300/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
              {submitError}
            </p>
          ) : null}
        </ScrollReveal>
      </div>
    </SectionFrame>
  );
};

export default Contact;
