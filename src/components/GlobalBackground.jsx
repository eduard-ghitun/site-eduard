import { Suspense, lazy, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import MatrixRainBackground from "./MatrixRainBackground";
import useViewportProfile from "../hooks/useViewportProfile";

const DotLottieReact = lazy(() =>
  import("@lottiefiles/dotlottie-react").then((module) => ({
    default: module.DotLottieReact
  }))
);

const GLOBAL_BACKGROUND_MEDIA = {
  staticImageSrc: null,
  lottieSrc: "/Background looping animation.lottie"
};

const GlobalBackground = () => {
  const prefersReducedMotion = useReducedMotion();
  const { isMobile, isTablet, isIOS } = useViewportProfile();
  const { staticImageSrc, lottieSrc } = GLOBAL_BACKGROUND_MEDIA;
  const [shouldRenderLottie, setShouldRenderLottie] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || isMobile || isIOS) {
      setShouldRenderLottie(false);
      return undefined;
    }

    const enableLottie = () => setShouldRenderLottie(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(enableLottie, { timeout: isTablet ? 1600 : 900 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(enableLottie, isTablet ? 520 : 220);
    return () => window.clearTimeout(timeoutId);
  }, [isIOS, isMobile, isTablet, prefersReducedMotion]);

  return (
    <div aria-hidden="true" className="site-background">
      <div className="site-background__base" />
      <MatrixRainBackground />

      {staticImageSrc ? (
        <div
          className="site-background__image"
          style={{ backgroundImage: `url("${staticImageSrc}")` }}
        />
      ) : null}

      {shouldRenderLottie ? (
        <div className="site-background__lottie-slot" data-lottie-layer="">
          <Suspense fallback={<div className="site-background__lottie-fallback" />}>
            <DotLottieReact
              src={lottieSrc}
              autoplay={!prefersReducedMotion}
              loop={!prefersReducedMotion}
              speed={isTablet ? 0.42 : 0.55}
              useFrameInterpolation={false}
              backgroundColor="#00000000"
              renderConfig={{ autoResize: true, devicePixelRatio: isTablet ? 0.9 : 1 }}
              className="site-background__lottie-canvas"
            />
          </Suspense>
        </div>
      ) : null}

      <div className="site-background__overlay" />
    </div>
  );
};

export default GlobalBackground;
