import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ContactMethod from "./ContactMethod";
import { brandAssets } from "../data/brandAssets";
import { contactInfo } from "../data/contactInfo";
import useIsMobile from "../hooks/useIsMobile";
import useIsTablet from "../hooks/useIsTablet";

const CONTACT_EMAIL = "eduard.ghitun@yahoo.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const Contact = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const sectionBg = isMobile
    ? brandAssets.sectionBgMobile
    : isTablet
      ? brandAssets.sectionBgTablet
      : brandAssets.sectionBg;
  const largeCardBg = isMobile
    ? brandAssets.largeCardBgMobile
    : isTablet
      ? brandAssets.largeCardBgTablet
      : brandAssets.largeCardBg;
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSent(false);
    setSubmitError("");
    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "Mesaj nou din formularul site-ului personal");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      const result = await response.json();

      if (!response.ok || result.success === "false") {
        throw new Error(result.message || "Trimiterea mesajului a eșuat.");
      }

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
    <section id="contact" className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
      {!isMobile ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl opacity-25">
          <img src={sectionBg} alt="" className="h-full w-full object-cover object-[50%_24%]" loading="lazy" decoding="async" fetchPriority="low" />
        </div>
      ) : null}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-slate-950/72" />

      <div className="relative">
        <SectionHeading
          eyebrow="Contact / CTA Final"
          title="Contact Web Developer Cluj"
          description="Pentru proiecte de web development în Cluj-Napoca sau colaborări remote în România, contactează-mă direct prin email, telefon sau Instagram."
        />

        <div className="grid gap-4 md:gap-6 lg:grid-cols-[0.98fr_1.02fr]">
          <motion.article
            initial={{ opacity: 0, y: isMobile ? 10 : 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: isMobile ? 0.3 : 0.45, ease: "easeOut" }}
            className="relative min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-8 lg:p-10"
          >
            {!isMobile ? (
              <img
                src={largeCardBg}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[50%_27%] opacity-20"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            ) : null}
            <div className="pointer-events-none absolute inset-0 bg-slate-950/58" />

            <div className="relative">
              <h3 className="font-heading text-xl font-semibold text-white md:text-2xl">Canale contact</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                <strong>Alege metoda preferată și îți răspund în cel mai scurt timp.</strong>
              </p>

              <div className="mt-6 grid gap-3.5 md:gap-4">
                {contactInfo.map((item, index) => (
                  <ContactMethod key={item.id} item={item} delay={index * 0.08} />
                ))}
              </div>
            </div>
          </motion.article>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: isMobile ? 10 : 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: isMobile ? 0.3 : 0.45, delay: isMobile ? 0.02 : 0.06, ease: "easeOut" }}
            className="relative min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-8 lg:p-10"
          >
            {!isMobile ? (
              <img
                src={largeCardBg}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[50%_27%] opacity-24"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            ) : null}
            <div className="pointer-events-none absolute inset-0 bg-slate-950/68" />

            <div className="relative">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-slate-300">
                  Nume
                  <input
                    name="name"
                    type="text"
                    placeholder="Numele tău"
                    required
                    className="mt-2 min-h-11 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-base text-slate-100 outline-none ring-cyan-300/40 transition placeholder:text-slate-500 focus:ring-2 focus:border-cyan-200/60"
                  />
                </label>
                <label className="text-sm text-slate-300">
                  Email
                  <input
                    name="email"
                    type="email"
                    placeholder="email@exemplu.ro"
                    required
                    className="mt-2 min-h-11 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-base text-slate-100 outline-none ring-cyan-300/40 transition placeholder:text-slate-500 focus:ring-2 focus:border-cyan-200/60"
                  />
                </label>
              </div>

              <label className="mt-4 block text-sm text-slate-300">
                Mesaj
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Scrie pe scurt ce îți dorești pentru site..."
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-base text-slate-100 outline-none ring-cyan-300/40 transition placeholder:text-slate-500 focus:ring-2 focus:border-cyan-200/60"
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto md:min-w-[12rem]"
                >
                  {isSending ? "Se trimite..." : "Trimite mesaj"}
                </button>
                <p className="text-xs text-slate-400 md:text-sm">Răspuns rapid în aceeași zi lucrătoare.</p>
              </div>

              {isSent ? (
                <p className="mt-4 rounded-xl border border-emerald-300/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                  Mesaj trimis cu succes.
                </p>
              ) : null}

              {submitError ? (
                <p className="mt-4 rounded-xl border border-rose-300/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                  {submitError}
                </p>
              ) : null}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
