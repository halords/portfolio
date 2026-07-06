import { Hero } from "@/components/sections/Hero";
import { ValueBar } from "@/components/sections/ValueBar";
import { About } from "@/components/sections/About";
import { Career } from "@/components/sections/Career";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueBar />
      <About />
      <Career />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
