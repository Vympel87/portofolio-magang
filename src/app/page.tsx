import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Services from "@/components/services";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <Intro />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <SectionDivider />
      <Contact />
    </main>
  );
}
