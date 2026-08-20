import { Hero } from "@/components/Hero";
import { StackMarquee } from "@/components/StackMarquee";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <Services />
      <Projects />
      <Process />
      <About />
      <Faq />
      <Contact />
    </>
  );
}
