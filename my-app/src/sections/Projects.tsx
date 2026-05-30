import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioProjects } from "@/data/site";

export const ProjectsSection = () => {
  const featured = portfolioProjects.filter((p) => p.featured);
  const other = portfolioProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built outside class"
          description="Full-stack apps, bots, and experiments — with links where they're live."
        />

        <div className="mt-14 md:mt-20 flex flex-col gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} large />
          ))}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {other.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type Project = (typeof portfolioProjects)[number];

function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const primaryUrl = project.liveUrl ?? project.repoUrl;

  return (
    <article
      className={`card-surface flex flex-col p-6 md:p-8 ${
        large ? "border-accent/20 bg-gradient-to-br from-accent-dim/40 to-transparent" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {project.featured ? (
            <span className="mb-2 inline-block rounded-full bg-accent-dim px-2.5 py-0.5 text-xs font-semibold text-accent">
              Featured
            </span>
          ) : null}
          <h3
            className={`font-display font-semibold text-stone-50 ${
              large ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-xs text-stone-500 md:text-sm">{project.stack}</p>
        </div>
      </div>

      <ul className={`mt-5 flex flex-1 flex-col gap-2.5 ${large ? "md:gap-3" : ""}`}>
        {project.highlights.map((point) => (
          <li
            key={point}
            className="text-sm leading-relaxed text-stone-400 md:text-[0.9375rem]"
          >
            {point}
          </li>
        ))}
      </ul>

      {primaryUrl ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a href={project.liveUrl} className="btn-primary text-sm" target="_blank" rel="noopener noreferrer">
              Live site
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              className={project.liveUrl ? "btn-secondary text-sm" : "btn-primary text-sm"}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
