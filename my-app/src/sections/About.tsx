import { HiDownload, HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { EmailLink } from "@/components/EmailLink";
import { site, skills } from "@/data/site";
import { ToolboxItems } from "@/components/Toolboxitems";
import TypescriptIcon from "@/assets/icons/tech/typescript-plain.svg";
import NexrtjsIcon from "@/assets/icons/tech/nextjs-plain.svg";
import CIcon from "@/assets/icons/tech/c-plain.svg";
import CSharpIcon from "@/assets/icons/tech/csharp-plain.svg";
import TailwindIcon from "@/assets/icons/tech/tailwindcss-original.svg";
import GitIcon from "@/assets/icons/tech/git-plain.svg";
import DockerIcon from "@/assets/icons/tech/docker-plain.svg";

const toolboxItems = [
  { title: "TypeScript", icon: TypescriptIcon },
  { title: "Next.js", icon: NexrtjsIcon },
  { title: "C", icon: CIcon },
  { title: "C#", icon: CSharpIcon },
  { title: "Tailwind", icon: TailwindIcon },
  { title: "Git", icon: GitIcon },
  { title: "Docker", icon: DockerIcon },
  { title: "TypeScript", icon: TypescriptIcon },
  { title: "Next.js", icon: NexrtjsIcon },
  { title: "C", icon: CIcon },
  { title: "C#", icon: CSharpIcon },
  { title: "Tailwind", icon: TailwindIcon },
  { title: "Git", icon: GitIcon },
  { title: "Docker", icon: DockerIcon },
];

export const AboutSection = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <p className="section-eyebrow">Software Engineering · UVic</p>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-stone-50 md:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-stone-400 md:text-lg">
            {site.intro}
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <a
              href={site.resumePath}
              className="btn-primary w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiDownload className="size-4" />
              Resume
            </a>
            <EmailLink className="btn-secondary w-full sm:w-auto">
              <HiOutlineMail className="size-4" />
              Email me
            </EmailLink>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href={site.social.github}
              className="text-stone-500 transition hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="size-5" />
            </a>
            <a
              href={site.social.linkedin}
              className="text-stone-500 transition hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-16 card-surface overflow-hidden p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-xl font-semibold text-stone-100">
                Toolbox
              </h2>
              <p className="mt-1 text-sm text-stone-500">
                Languages and tools I work with regularly
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-surface-border bg-stone-900/60 px-3 py-1 text-xs font-medium text-stone-300"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            <ToolboxItems
              toolboxItems={toolboxItems}
              itemWrapperClassName="animate-move-left [animation-duration:40s]"
            />
            <ToolboxItems
              toolboxItems={toolboxItems}
              itemWrapperClassName="animate-move-right [animation-duration:40s]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
