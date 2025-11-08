import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import ContactForm from "@/components/ContactForm";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
   <section
  id="contact"
  className="relative py-20 bg-black min-h-screen flex items-center overflow-hidden"
>
  {/* Subtle glowing orbs for background depth */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full -z-10 animate-pulse" />
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full -z-10 animate-pulse delay-1000" />

  <div className="max-w-5xl mx-auto px-4 w-full relative z-10">
  

    <div className="mt-6">
      <ContactForm />
    </div>
  </div>

  {/* Subtle outer glowing frame */}
  <div className="absolute inset-0 border border-cyan-500/10 rounded-3xl pointer-events-none" />
</section>

      <BackToTop />
    </>
  );
}
