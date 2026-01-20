import Navbar from "./components/Navbar";
import ParticlesBg from "./components/ParticlesBg";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Project from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";
import WhatsAppButton from "./components/WhatsAppButton";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
    {/* <ParticlesBg /> */}
    {/* <ThemeToggle /> */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Experience />
      <Project />
      <Contact />
      <ScrollTop />
      <WhatsAppButton />
    </>
  );
}

export default App;
