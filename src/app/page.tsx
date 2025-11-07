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
      <section id="contact" className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Feel free to reach out — messages go to a mock endpoint for demo.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
      <BackToTop />
    </>
  );
}
