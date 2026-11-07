import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { VAServices } from "@/components/sections/VAServices";
import { Background } from "@/components/sections/Background";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Work />
      <Services />
      <VAServices />
      <Background />
      <Contact />
      <Footer />
    </>
  );
}