import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { site } from "@/data/site";

const footerLinks = [
  { title: "LinkedIn", href: site.social.linkedin },
  { title: "GitHub", href: site.social.github },
  { title: "Resume", href: site.resumePath },
];

export const Footer = () => {
  return (
    <footer className="pb-8">
      <div className="container">
        <div className="flex flex-col items-center gap-6 border-t border-surface-border py-8 text-sm md:flex-row md:justify-between">
          <p className="text-stone-500">
            © {new Date().getFullYear()} {site.name}. Built with Next.js.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 font-medium text-stone-400 transition hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.title}</span>
                <ArrowUpRightIcon className="size-3.5" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
