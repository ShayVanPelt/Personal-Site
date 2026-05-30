import { HiOutlineMail } from "react-icons/hi";
import { EmailLink } from "@/components/EmailLink";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="card-surface relative z-10 mx-auto max-w-2xl overflow-hidden p-6 text-center sm:p-8 md:p-12">
          <SectionHeader
            eyebrow="Contact"
            title="Let's connect"
            description={site.contactDescription}
            align="center"
          />
          <div className="relative z-10 mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 md:max-w-none md:flex-row md:justify-center">
            <EmailLink className="btn-primary w-full min-w-0 text-sm md:w-auto md:text-base">
              <HiOutlineMail className="size-5 shrink-0" />
              <span className="truncate md:hidden">Email me</span>
              <span className="hidden truncate md:inline">{site.email}</span>
            </EmailLink>
            <a
              href={site.gmailComposeHref}
              className="btn-secondary w-full shrink-0 text-sm md:w-auto md:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Gmail
            </a>
          </div>
          <p className="mt-4 text-sm text-stone-500">{site.phone}</p>
        </div>
      </div>
    </section>
  );
};
