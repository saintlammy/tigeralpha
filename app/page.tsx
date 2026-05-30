import { ScrollProgress } from "@/components/ScrollProgress";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Mission } from "@/components/Mission";
import { Tokenomics } from "@/components/Tokenomics";
import { Pledge } from "@/components/Pledge";
import { Ecosystem } from "@/components/Ecosystem";
import { Roadmap } from "@/components/Roadmap";
import { Community } from "@/components/Community";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Mission />
        <Tokenomics />
        <Pledge />
        <Ecosystem />
        <Roadmap />
        <Community />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
