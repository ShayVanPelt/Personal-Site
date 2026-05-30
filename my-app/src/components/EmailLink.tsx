import { site } from "@/data/site";

type EmailLinkProps = {
  className?: string;
  children: React.ReactNode;
};

export function EmailLink({ className, children }: EmailLinkProps) {
  return (
    <a href={site.mailtoHref} className={className}>
      {children}
    </a>
  );
}
