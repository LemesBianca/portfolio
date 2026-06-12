// portfolio-six-psi-h81ubitqb7.vercel.app
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
  return (
<main className="min-h-screen bg-black text-white p-4 md:p-8">
  <div className="max-w-7xl mx-auto border border-zinc-800 rounded-[40px] p-8 md:p-12">
    <Hero />
    <Contact />
    <Projects />
    <Skills />
    <About />
    <Experience />
  </div>
</main>
  );
}