import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ContactMethod from "./ContactMethod";
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
    <section id="contact" className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-32">
      <SectionHeading
        eyebrow="Contact / CTA Final"
        title="Contact Web Developer Cluj"
        description="Pentru proiecte de web development în Cluj-Napoca sau colaborări remote în România, contactează-mă direct prin email, telefon sau Instagram."
      />

      <div className="grid gap-5 md:gap-6 lg:grid-cols-[0.94fr_1.06fr]">
        <motion.article
          initial={{ opacity: 0, y: isCompact ? 10 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: isCompact ? 0.3 : 0.45, ease: "easeOut" }}
          className="surface-card min-w-0 rounded-[2rem] p-6 md:p-8 lg:p-10"
        >
          <h3 className="font-heading text-[2.4rem] leading-[0.96] text-stone-50 md:text-[3rem]">Canale contact</h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-stone-400 md:text-base">
            <strong className="font-medium text-stone-200">Alege metoda preferată</strong> și îți răspund
            în cel mai scurt timp.
          </p>

          <div className="mt-8 grid gap-3.5 md:gap-4">
            {contactInfo.map((item, index) => (
              <ContactMethod key={item.id} item={item} delay={index * 0.08} />
            ))}
          </div>
        </motion.article>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: isCompact ? 10 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: isCompact ? 0.3 : 0.45, delay: isCompact ? 0.02 : 0.06, ease: "easeOut" }}
          className="surface-card min-w-0 rounded-[2rem] p-6 md:p-8 lg:p-10"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-stone-300">
              Nume
              <input
                name="name"
                type="text"
                placeholder="Numele tău"
                required
                className="mt-2 min-h-12 w-full rounded-[1.15rem] border border-white/10 bg-black/20 px-4 py-3 text-base text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-[rgba(130,167,178,0.45)] focus:bg-white/[0.03]"
              />
            </label>
            <label className="text-sm text-stone-300">
              Email
              <input
                name="email"
                type="email"
                placeholder="email@exemplu.ro"
                required
                className="mt-2 min-h-12 w-full rounded-[1.15rem] border border-white/10 bg-black/20 px-4 py-3 text-base text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-[rgba(130,167,178,0.45)] focus:bg-white/[0.03]"
              />
            </label>
          </div>

          <label className="mt-4 block text-sm text-stone-300">
            Mesaj
            <textarea
              name="message"
              rows={isMobile ? 4 : 5}
              placeholder="Scrie pe scurt ce îți dorești pentru site..."
              required
              className="mt-2 w-full rounded-[1.15rem] border border-white/10 bg-black/20 px-4 py-3 text-base text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-[rgba(130,167,178,0.45)] focus:bg-white/[0.03]"
            />
          </label>

          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-stone-100 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:opacity-70 md:w-auto md:min-w-[12rem]"
            >
              {isSending ? "Se trimite..." : "Trimite mesaj"}
            </button>
            <p className="text-xs text-stone-500 md:text-sm">Răspuns rapid în aceeași zi lucrătoare.</p>
          </div>

          {isSent ? (
            <p className="mt-4 rounded-[1.15rem] border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
              Mesaj trimis cu succes.
            </p>
          ) : null}

          {submitError ? (
            <p className="mt-4 rounded-[1.15rem] border border-rose-300/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
              {submitError}
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
