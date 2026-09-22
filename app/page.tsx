import Container from "@/components/ui/Container";
import Hero from "@/sections/Hero";
import Work from "@/sections/Work";
import Experience from "@/sections/Experience";
import Capabilities from "@/sections/Capabilities";
import AiWorkflow from "@/sections/AiWorkflow";
import HomeLab from "@/sections/HomeLab";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

/** Order: the work itself first (case studies, story, skills), then how
 *  the work gets done (AI workflow, home lab, about), then contact. */
export default function Home() {
  return (
    <>
      <Hero />
      <Container width="full" className="space-y-6 pb-8">
        <Work />
        <Experience />
        <Capabilities />
        <AiWorkflow />
        <HomeLab />
        <About />
        <Contact />
      </Container>
    </>
  );
}
