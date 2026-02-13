import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import WhoThisIsFor from "@/components/sections/WhoThisIsFor";
import RealProblems from "@/components/sections/RealProblems";
import WhatIBuild from "@/components/sections/WhatIBuild";
import HowIWork from "@/components/sections/HowIWork";
import Proof from "@/components/sections/Proof";
import AboutFounder from "@/components/sections/AboutFounder";
import AuditBreakdown from "@/components/sections/AuditBreakdown";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoThisIsFor />
        <RealProblems />
        <WhatIBuild />
        <HowIWork />
        <Proof />
        <AboutFounder />
        <AuditBreakdown />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
