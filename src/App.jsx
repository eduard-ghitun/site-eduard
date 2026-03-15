import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalBackground from "./components/GlobalBackground";
import CursorTrail from "./components/CursorTrail";
import MouseSpotlight from "./components/MouseSpotlight";
import { SectionUIProvider } from "./context/SectionUIContext";
import useAppViewportHeight from "./hooks/useAppViewportHeight";

const App = () => {
  useAppViewportHeight();

  return (
    <div className="site-shell text-stone-100">
      <SectionUIProvider>
        <GlobalBackground />
        <CursorTrail />
        <MouseSpotlight />
        <div className="site-content">
          <Navbar />

          <main className="relative">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
          </main>

          <Footer />
        </div>
      </SectionUIProvider>
    </div>
  );
};

export default App;
