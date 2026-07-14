import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";

export default function Home() {
  return (
    <ToastProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </ToastProvider>
  );
}
