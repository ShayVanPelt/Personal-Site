import { Header } from "@/sections/Header";
import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";
import { WorkSection } from "@/sections/Work";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { SiteBackground } from "@/components/SiteBackground";

export default function Home() {
  return (
    <>
      <SiteBackground />
      <Header />
      <main>
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
