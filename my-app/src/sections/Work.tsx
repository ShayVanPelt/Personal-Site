import { SectionHeader } from "@/components/SectionHeader";
import { workExperience } from "@/data/site";

export const WorkSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've built and shipped"
          description="Co-op roles across QA automation, full-stack development, and data tooling."
        />

        <div className="mt-14 md:mt-20 flex flex-col gap-6">
          {workExperience.map((role, index) => (
            <article
              key={`${role.company}-${role.title}`}
              className="card-surface group p-6 md:p-8 transition hover:border-accent/20"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-dim font-display text-sm font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-stone-50 md:text-2xl">
                        {role.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-accent">
                        {role.company}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="shrink-0 text-left md:text-right">
                  <p className="text-sm font-medium text-stone-300">{role.date}</p>
                  <p className="text-sm text-stone-500">{role.location}</p>
                </div>
              </div>

              <ul className="mt-6 flex flex-col gap-3 border-t border-surface-border pt-6">
                {role.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-stone-400 md:text-base"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
