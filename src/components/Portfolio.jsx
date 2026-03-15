import SectionHeading from "./SectionHeading";
import SectionFrame from "./SectionFrame";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/projects";
import useViewportProfile from "../hooks/useViewportProfile";

const ProjectStage = ({ title, technologies, index, previewImage, previewImageTablet, previewImageMobile, previewMode }) => (
  <div className="relative min-h-[16.5rem] overflow-hidden rounded-[1.75rem] border border-[rgba(121,255,172,0.12)] bg-[radial-gradient(circle_at_top,rgba(92,255,154,0.1),transparent_30%),linear-gradient(180deg,rgba(10,16,14,0.94),rgba(5,7,6,0.98))] p-5 md:min-h-[21rem] md:p-8">
    <div className="absolute inset-5 overflow-hidden rounded-[1.4rem] border border-[rgba(121,255,172,0.12)] md:inset-6">
      {previewImage ? (
        <>
          <img
            src={previewImage}
            srcSet={[previewImageMobile && `${previewImageMobile} 480w`, previewImageTablet && `${previewImageTablet} 768w`, `${previewImage} 1280w`]
              .filter(Boolean)
              .join(", ")}
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 70vw, 40vw"
            alt={`Preview ${title}`}
            className={`h-full w-full ${previewMode === "screenshot" ? "object-cover object-top" : "object-contain object-top sm:object-cover"}`}
            loading="lazy"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,5,0.02),transparent_24%,transparent_58%,rgba(4,6,5,0.86)_100%)]" />
        </>
      ) : (
        <div className="section-grid pointer-events-none absolute inset-0 opacity-[0.08]" />
      )}
    </div>
    <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-end md:left-8 md:right-8 md:top-8">
      <span className="rounded-full border border-[rgba(121,255,172,0.16)] bg-[rgba(9,18,14,0.8)] px-3 py-1 font-mono text-[0.68rem] text-[color:var(--neon)]">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
    {previewMode !== "screenshot" ? (
      <div className="absolute bottom-5 left-5 right-5 z-10 md:bottom-8 md:left-8 md:right-8">
        <p className="max-w-sm font-heading text-[2rem] uppercase leading-[0.94] text-[#f5fff8] md:text-[3.2rem]">{title}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="ui-chip rounded-full px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ) : null}
    <div className="pointer-events-none absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-[rgba(121,255,172,0.08)]" />
  </div>
);

const Portfolio = () => {
  const { isMobile, isTablet } = useViewportProfile();
  const isCompact = isMobile || isTablet;

  return (
    <SectionFrame id="proiecte" className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-32">
      <SectionHeading
        eyebrow="Proiecte"
        title="Proiecte realizate"
      />

      <div className="mb-7 flex flex-wrap items-center justify-center gap-2 text-[0.68rem] uppercase tracking-[0.16em] text-[color:var(--muted)] md:mb-9 md:gap-3 md:text-xs">
        {["Frontend Engineering", "UX/UI Premium", "Microservice Integration"].map((label) => (
          <span key={label} className="ui-chip rounded-full px-3 py-1.5 md:px-4 md:py-2">
            {label}
          </span>
        ))}
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:gap-10 lg:gap-12">
        {projects.map((project, index) => {
          const primaryUrl = project.liveUrl || project.githubUrl;
          const primaryLabel = project.liveUrl ? "Vizualizează proiect" : "View on GitHub";
          const showGithubButton = Boolean(project.githubUrl && project.liveUrl);

          return (
            <ScrollReveal
              as="article"
              key={project.title}
              delay={index * (isCompact ? 36 : 64)}
              glow
              className="surface-card ui-card-hover w-full min-w-0 rounded-[2rem] p-5 sm:p-6 md:p-8 lg:p-10"
            >
              <div className="grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.92fr)] lg:items-center lg:gap-10">
                <div className="order-2 min-w-0 lg:order-1">
                  <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
                      Proiect {String(index + 1).padStart(2, "0")}
                    </p>
                    {project.featured ? (
                      <span className="rounded-full border border-[rgba(121,255,172,0.24)] bg-[rgba(121,255,172,0.08)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-[color:var(--neon)]">
                        Featured
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-5 max-w-xl text-balance font-heading text-[2.3rem] uppercase leading-[0.96] text-[#f5fff8] md:text-[3.2rem]">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-8 text-[color:var(--text-soft)] md:text-base">{project.description}</p>

                  <div className="mt-6 flex min-w-0 flex-wrap gap-2">
                    {project.technologies.map((tag) => (
                      <span
                        key={tag}
                        className="ui-chip max-w-full rounded-full px-3 py-1.5 text-[0.72rem] font-medium md:text-xs"
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
                        className="ui-button ui-button--primary w-full px-5 py-2.5 text-sm md:min-w-[11rem] md:w-auto"
                      >
                        {primaryLabel}
                      </a>
                    ) : (
                      <span className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-full border border-[rgba(121,255,172,0.08)] bg-[rgba(7,11,10,0.4)] px-5 py-2.5 text-sm font-semibold text-[color:var(--muted)] md:min-w-[9rem] md:w-auto">
                        Link în curând
                      </span>
                    )}
                    {showGithubButton ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ui-button ui-button--secondary w-full px-5 py-2.5 text-sm md:min-w-[9rem] md:w-auto"
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
                    previewMode={project.previewMode}
                  />
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionFrame>
  );
};

export default Portfolio;
