import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { brandAssets } from "./data/brandAssets";
import useIsMobile from "./hooks/useIsMobile";
import useIsTablet from "./hooks/useIsTablet";

const App = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const primaryBg = isMobile
    ? brandAssets.heroBgMobile
    : isTablet
      ? brandAssets.heroBgTablet
      : brandAssets.heroBg;

  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-950 text-slate-100">
      {!isMobile ? (
        <img
          src={brandAssets.textureBg}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.08]"
          decoding="async"
          fetchPriority="low"
        />
      ) : null}
      <img
        src={primaryBg}
        alt=""
        className="pointer-events-none absolute left-0 top-0 h-[24rem] w-full object-cover object-[50%_20%] opacity-[0.14] md:h-[34rem] md:object-[50%_16%] md:opacity-[0.2] lg:object-[50%_18%]"
        decoding="async"
        fetchPriority="low"
      />
      {!isMobile ? (
        <>
          <div className="pointer-events-none absolute -top-28 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-[30rem] h-[24rem] w-[24rem] rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-16 left-0 h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        </>
      ) : null}
      <div className="section-grid pointer-events-none absolute inset-0 hidden opacity-[0.035] md:block" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
