import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

function App() {
  return (
    <>
    <div className="min-h-screen bg-[#e8dcc7]">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Certifications />

      <Contact />

      <Footer />
    </div>
    </>
  );
}

export default App;