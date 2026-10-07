import SectionHeading from "./SectionHeading";
import SectionFrame from "./SectionFrame";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();
  return (
    <SectionFrame id="proiecte" className="portfolio-section">
      <div className="site-container">
        <SectionHeading eyebrow={t.portfolio.eyebrow} title={t.portfolio.title} description={t.portfolio.description} />
        <div className="portfolio-tags">
          {t.portfolio.tags.map((label) => <span key={label} className="ui-chip rounded-full px-3 py-1 text-[0.68rem] uppercase tracking-[0.12em]">{label}</span>)}
        </div>
        <div className="project-list">
          {projects.map((project, index) => {
            const copy = t.portfolio.projects[index] ?? { title: project.id, description: "", technologies: [] };
            const primaryUrl = project.liveUrl || project.githubUrl;
            return (
              <ScrollReveal as="article" key={project.id} className="project-card">
                <div className="project-copy">
                  <p className="project-meta">{t.portfolio.projectLabel} {String(index + 1).padStart(2, "0")}{project.featured ? ` · ${t.portfolio.featured}` : ""}</p>
                  <h3>{copy.title}</h3>
                  <p className="project-copy__description">{copy.description}</p>
                  <div className="project-tech">
                    {copy.technologies.map((tag) => <span key={tag} className="ui-chip rounded-full px-3 py-1 text-[0.7rem]">{tag}</span>)}
                  </div>
                  <div className="project-actions">
                    {primaryUrl ? <a href={primaryUrl} target="_blank" rel="noreferrer" className="ui-button ui-button--primary">{project.liveUrl ? t.portfolio.actions.live : t.portfolio.actions.github}</a> : <span className="ui-button ui-button--secondary">{t.portfolio.actions.comingSoon}</span>}
                    {project.liveUrl && project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer" className="ui-button ui-button--secondary">{t.portfolio.actions.github}</a> : null}
                  </div>
                </div>
                <div className="project-stage">
                  <span className="project-stage__index">{String(index + 1).padStart(2, "0")}</span>
                  <img src={project.previewImage} srcSet={[project.previewImageMobile && `${project.previewImageMobile} 480w`, project.previewImageTablet && `${project.previewImageTablet} 768w`, `${project.previewImage} 1280w`].filter(Boolean).join(", ")} sizes="(max-width: 1023px) 100vw, 55vw" alt={t.portfolio.previewAlt.replace("{title}", copy.title)} loading="lazy" decoding="async" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </SectionFrame>
  );
};

export default Portfolio;
