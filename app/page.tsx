import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-slate-900 text-white">

      <Navbar />

      <Hero />
      <Services />
      <FeaturedProject />
      <Projects />
      <Skills />
      <About />
      <Contact />

    </main>
  );
}