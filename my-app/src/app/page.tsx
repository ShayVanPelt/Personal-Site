import { Header } from "@/sections/Header";
import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";
import { WorkSection } from "@/sections/Work";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <AboutSection/>
      <WorkSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
