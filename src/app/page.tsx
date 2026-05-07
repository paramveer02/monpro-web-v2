import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import WhatIBuild from "@/components/sections/WhatIBuild";
import Notes from "@/components/sections/Notes";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIBuild />
        <Notes />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
