import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";
import { brandAssets } from "../data/brandAssets";
import useIsMobile from "../hooks/useIsMobile";
import useIsTablet from "../hooks/useIsTablet";

const previewFallback = (title) => (
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/25 via-blue-500/15 to-slate-900">
    <div className="section-grid absolute inset-0 opacity-[0.13]" />
    <div className="absolute left-4 top-4 right-4 rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2">
      <div className="mb-2 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-rose-300/80" />
        <span className="h-2 w-2 rounded-full bg-amber-300/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
      </div>
      <p className="text-[0.65rem] text-slate-300/90">Preview website</p>
    </div>
    <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-slate-950/75 px-4 py-3">
      <p className="font-heading text-lg text-white sm:text-xl">{title}</p>
      <p className="mt-1 text-xs text-slate-300">Adaugă imaginea reală direct în câmpul `image`.</p>
    </div>
  </div>
);

const Portfolio = () => {
  const isSingleProject = projects.length === 1;
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

  return (
    <section id="proiecte" className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
      {!isMobile ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl opacity-20">
          <img src={sectionBg} alt="" className="h-full w-full object-cover object-[50%_26%]" loading="lazy" decoding="async" fetchPriority="low" />
        </div>
      ) : null}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-slate-950/68" />

      <div className="relative">
      <SectionHeading
        eyebrow="Proiecte"
        title="Proiecte realizate"
      />

      <div className="mb-7 flex flex-wrap items-center justify-center gap-2 text-[0.68rem] uppercase tracking-[0.16em] text-slate-300 md:mb-9 md:gap-3 md:text-xs">
        {["Frontend Engineering", "UX/UI Premium", "Microservice Integration"].map((label) => (
          <span key={label} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 md:px-4 md:py-2">
            {label}
          </span>
        ))}
      </div>

      <div
        className={`grid gap-5 md:gap-7 ${
          isSingleProject ? "mx-auto max-w-5xl grid-cols-1" : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        }`}
      >
        {projects.map((project, index) => {
          const previewSrc = isMobile
            ? project.imageMobile || project.imageTablet || project.image
            : isTablet
              ? project.imageTablet || project.image
              : project.image;
          const previewPosition = project.imagePosition || "center";

          return (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: isMobile ? 10 : 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: isMobile ? 0.32 : 0.5, delay: index * (isMobile ? 0.03 : 0.06), ease: [0.22, 1, 0.36, 1] }}
            whileHover={isMobile ? undefined : { y: -6 }}
            className={`group relative min-w-0 rounded-3xl bg-gradient-to-b from-cyan-300/20 via-white/10 to-white/5 p-[1px] ${
              project.featured && !isSingleProject ? "md:col-span-2 xl:col-span-2" : ""
            }`}
          >
            <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] border border-white/10 bg-slate-950/92 p-5 md:p-7 lg:p-8">
              {!isMobile ? (
                <>
                  <img
                    src={largeCardBg}
                    alt=""
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[50%_28%] opacity-12"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl transition duration-500 group-hover:bg-cyan-300/35" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 [background:radial-gradient(80%_50%_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />
                </>
              ) : null}

              <div className="relative flex min-w-0 flex-wrap items-center justify-between gap-2 md:gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/90">
                  Proiect {String(index + 1).padStart(2, "0")}
                </p>
                {project.featured ? (
                  <span className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-emerald-200 md:text-[0.65rem]">
                    Featured
                  </span>
                ) : null}
              </div>

              <div className="relative mt-4 w-full max-w-full overflow-hidden rounded-2xl border border-white/10 md:mt-5">
                <div className="relative aspect-[4/3] w-full md:aspect-[16/10] lg:aspect-[16/9]">
                  {previewSrc ? (
                    <img
                      src={previewSrc}
                      alt={`Preview ${project.title}`}
                      style={{ objectPosition: previewPosition }}
                      className="h-full w-full max-w-full object-contain bg-slate-950/70 transition duration-700 md:object-cover group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 50vw"
                    />
                  ) : (
                    previewFallback(project.title)
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent md:from-slate-950/45" />
                </div>
              </div>

              <h3 className="relative mt-5 text-balance font-heading text-xl font-semibold text-white md:mt-6 md:text-2xl">{project.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-300 md:text-base">{project.description}</p>

              <div className="relative mt-5 flex min-w-0 flex-wrap gap-2">
                {project.technologies.map((tag) => (
                  <span
                    key={tag}
                    className="max-w-full rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[0.72rem] font-medium text-slate-200 md:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 flex flex-col gap-3 md:mt-7 md:flex-row md:flex-wrap md:items-center">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:brightness-110 md:min-w-[11rem] md:w-auto"
                >
                  Vizualizează proiect
                </a>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/10 md:min-w-[9rem] md:w-auto"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-slate-400 md:min-w-[9rem] md:w-auto">
                    GitHub în curând
                  </span>
                )}
              </div>
            </div>
          </motion.article>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default Portfolio;
