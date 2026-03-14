import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";
import useViewportProfile from "../hooks/useViewportProfile";

const ProjectStage = ({ title, technologies, index, previewImage, previewImageTablet, previewImageMobile }) => (
  <div className="relative min-h-[16.5rem] overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[radial-gradient(circle_at_top,rgba(143,170,178,0.18),transparent_34%),linear-gradient(180deg,rgba(22,22,25,0.86),rgba(11,11,13,0.92))] p-5 md:min-h-[21rem] md:p-8">
    <div className="absolute inset-5 overflow-hidden rounded-[1.4rem] border border-white/[0.08] md:inset-6">
      {previewImage ? (
        <>
          <img
            src={previewImage}
            srcSet={[previewImageMobile && `${previewImageMobile} 480w`, previewImageTablet && `${previewImageTablet} 768w`, `${previewImage} 1280w`]
              .filter(Boolean)
              .join(", ")}
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 70vw, 40vw"
            alt={`Preview ${title}`}
            className="h-full w-full object-contain object-top sm:object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,9,0.08),transparent_24%,transparent_58%,rgba(8,8,9,0.78)_100%)]" />
        </>
      ) : (
        <div className="section-grid pointer-events-none absolute inset-0 opacity-[0.08]" />
      )}
    </div>
    <div className="absolute left-5 right-5 top-5 flex items-center justify-between md:left-8 md:right-8 md:top-8">
      <span className="text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">Studiu de caz</span>
      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.68rem] text-stone-300">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
    <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8">
      <p className="max-w-sm font-heading text-[2rem] leading-[0.94] text-stone-50 md:text-[3.2rem]">{title}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-stone-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="pointer-events-none absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-white/[0.08]" />
  </div>
);

const Portfolio = () => {
  const isSingleProject = projects.length === 1;
  const { isMobile, isTablet, isTouch } = useViewportProfile();
  const isCompact = isMobile || isTablet;

  return (
    <section id="proiecte" className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-32">
      <SectionHeading
        eyebrow="Proiecte"
        title="Proiecte realizate"
      />

      <div className="mb-7 flex flex-wrap items-center justify-center gap-2 text-[0.68rem] uppercase tracking-[0.16em] text-stone-400 md:mb-9 md:gap-3 md:text-xs">
        {["Frontend Engineering", "UX/UI Premium", "Microservice Integration"].map((label) => (
          <span key={label} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 md:px-4 md:py-2">
            {label}
          </span>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 ${isSingleProject ? "mx-auto max-w-5xl" : ""}`}
      >
        {projects.map((project, index) => {
          const primaryUrl = project.liveUrl || project.githubUrl;
          const primaryLabel = project.liveUrl ? "Vizualizează proiect" : "Vezi pe GitHub";
          const showGithubButton = Boolean(project.githubUrl && project.liveUrl);

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: isCompact ? 10 : 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: isCompact ? 0.32 : 0.5, delay: index * (isCompact ? 0.03 : 0.06), ease: [0.22, 1, 0.36, 1] }}
              whileHover={isTouch || isTablet ? undefined : { y: -4 }}
              className={`surface-card min-w-0 rounded-[2rem] p-5 sm:p-6 md:p-8 lg:p-10 ${
                project.featured && !isSingleProject ? "md:col-span-2 xl:col-span-2" : ""
              }`}
              >
              <div className="grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.92fr)] lg:items-center lg:gap-10">
                <div className="order-2 min-w-0 lg:order-1">
                  <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-stone-500">
                      Proiect {String(index + 1).padStart(2, "0")}
                    </p>
                    {project.featured ? (
                      <span className="rounded-full border border-[rgba(130,167,178,0.28)] bg-[rgba(130,167,178,0.08)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-stone-200">
                        Featured
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-5 max-w-xl text-balance font-heading text-[2.3rem] leading-[0.96] text-stone-50 md:text-[3.2rem]">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-8 text-stone-400 md:text-base">{project.description}</p>

                  <div className="mt-6 flex min-w-0 flex-wrap gap-2">
                    {project.technologies.map((tag) => (
                      <span
                        key={tag}
                        className="max-w-full rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.72rem] font-medium text-stone-300 md:text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
                    {primaryUrl ? (
                      <a
                        href={primaryUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-stone-100 px-5 py-2.5 text-sm font-semibold text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white md:min-w-[11rem] md:w-auto"
                      >
                        {primaryLabel}
                      </a>
                    ) : (
                      <span className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm font-semibold text-stone-500 md:min-w-[9rem] md:w-auto">
                        Link în curând
                      </span>
                    )}
                    {showGithubButton ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-stone-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] md:min-w-[9rem] md:w-auto"
                      >
                        View on GitHub
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="order-1 w-full lg:order-2 lg:max-w-[36rem] lg:justify-self-end">
                  <ProjectStage
                    title={project.title}
                    technologies={project.technologies}
                    index={index}
                    previewImage={project.previewImage}
                    previewImageTablet={project.previewImageTablet}
                    previewImageMobile={project.previewImageMobile}
                  />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
