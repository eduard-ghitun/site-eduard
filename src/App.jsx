import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalBackground from "./components/GlobalBackground";
import { LanguageProvider } from "./context/LanguageContext";
import { SectionUIProvider } from "./context/SectionUIContext";
import useAppViewportHeight from "./hooks/useAppViewportHeight";
import useViewportProfile from "./hooks/useViewportProfile";

const CursorTrail = lazy(() => import("./components/CursorTrail"));
const MouseSpotlight = lazy(() => import("./components/MouseSpotlight"));

const App = () => {
  useAppViewportHeight();
  const { isMobile, isTouch } = useViewportProfile();
  const [shouldRenderAmbientEffects, setShouldRenderAmbientEffects] = useState(false);

  useEffect(() => {
    if (isMobile || isTouch) {
      setShouldRenderAmbientEffects(false);
      return undefined;
    }

    const enableEffects = () => setShouldRenderAmbientEffects(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(enableEffects, { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(enableEffects, 240);
    return () => window.clearTimeout(timeoutId);
  }, [isMobile, isTouch]);

  return (
    <div className="site-shell text-stone-100">
      <LanguageProvider>
        <SectionUIProvider>
          <GlobalBackground />
          {shouldRenderAmbientEffects ? (
            <Suspense fallback={null}>
              <CursorTrail />
              <MouseSpotlight />
            </Suspense>
          ) : null}
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
      </LanguageProvider>
    </div>
  );
};

export default App;
