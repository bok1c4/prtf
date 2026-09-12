import Container from "@/components/ui/Container";
import Hero from "@/sections/Hero";
import AiWorkflow from "@/sections/AiWorkflow";
import Work from "@/sections/Work";
import HomeLab from "@/sections/HomeLab";
import About from "@/sections/About";
import Capabilities from "@/sections/Capabilities";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Container width="full" className="space-y-6 pb-8">
        <AiWorkflow />
        <Work />
        <HomeLab />
        <About />
        <Capabilities />
        <Experience />
        <Contact />
      </Container>
    </>
  );
}
