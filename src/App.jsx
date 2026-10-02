import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OfficeDesignPage from "./components/OfficeDesignPage";
import { LanguageProvider } from "./context/LanguageContext";
import { SectionUIProvider } from "./context/SectionUIContext";
import useAppViewportHeight from "./hooks/useAppViewportHeight";

const App = () => {
  useAppViewportHeight();
  const isOfficeDesignPage = window.location.pathname === "/design-birouri";

  return (
    <div className="site-shell">
      <LanguageProvider>
        <SectionUIProvider>
          <div className="site-content">
            <Navbar isOfficeDesignPage={isOfficeDesignPage} />

            {isOfficeDesignPage ? (
              <OfficeDesignPage />
            ) : (
              <main className="relative">
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Contact />
              </main>
            )}

            <Footer isOfficeDesignPage={isOfficeDesignPage} />
          </div>
        </SectionUIProvider>
      </LanguageProvider>
    </div>
  );
};

export default App;
