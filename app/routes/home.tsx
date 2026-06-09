import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Journey from "../components/sections/Journey";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Journey />
      <Experience />
      <Projects />
      <Contact />

      <footer className="border-t border-zinc-800 py-12 text-center text-zinc-500">
        © 2026 Rojo Ratovo - Tous droits réservés.
      </footer>
    </main>
  );
}