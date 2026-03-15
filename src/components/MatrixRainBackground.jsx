import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import useViewportProfile from "../hooks/useViewportProfile";

const CHARACTERS = "01<>[]{}#%$+=-*/ABCDEFGHIJKLMNOPQRSTUVXYZ";

const randomBetween = (min, max) => Math.random() * (max - min) + min;

const MatrixRainBackground = () => {
  const canvasRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { isMobile, isTablet, isIOS } = useViewportProfile();

  useEffect(() => {
    if (prefersReducedMotion || isIOS) {
      return undefined;
    }

    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d", { alpha: true });

    if (!context) {
      return undefined;
    }

    let animationFrameId = 0;
    let lastFrameTime = 0;
    let width = 0;
    let height = 0;
    let fontSize = isMobile ? 18 : isTablet ? 17 : 16;
    let columns = 0;
    let streams = [];
    let dpr = 1;

    const config = {
      fps: isMobile ? 12 : isTablet ? 14 : 18,
      fadeAlpha: isMobile ? 0.085 : isTablet ? 0.072 : 0.062,
      baseAlpha: isMobile ? 0.12 : isTablet ? 0.135 : 0.16,
      headAlpha: isMobile ? 0.22 : isTablet ? 0.24 : 0.28,
      density: isMobile ? 0.38 : isTablet ? 0.48 : 0.58,
      speedMin: isMobile ? 0.17 : isTablet ? 0.19 : 0.2,
      speedMax: isMobile ? 0.34 : isTablet ? 0.38 : 0.44,
      trailMin: isMobile ? 4 : isTablet ? 5 : 6,
      trailMax: isMobile ? 8 : isTablet ? 10 : 12
    };

    const createStream = (index) => ({
      x: index * fontSize + fontSize * 0.5,
      position: randomBetween(-22, height / fontSize),
      speed: randomBetween(config.speedMin, config.speedMax),
      trail: Math.round(randomBetween(config.trailMin, config.trailMax)),
      active: Math.random() < config.density,
      drift: Math.random() * 0.6 + 0.7
    });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : isTablet ? 1.25 : 1.5);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.textAlign = "center";
      context.textBaseline = "top";
      context.font = `500 ${fontSize}px "JetBrains Mono", monospace`;

      columns = Math.ceil(width / fontSize);
      streams = Array.from({ length: columns }, (_, index) => createStream(index));
      context.clearRect(0, 0, width, height);
    };

    const drawCharacter = (char, x, y, alpha, isHead = false) => {
      context.fillStyle = isHead
        ? `rgba(170, 255, 199, ${alpha})`
        : `rgba(121, 255, 172, ${alpha})`;
      context.fillText(char, x, y);
    };

    const renderFrame = (time) => {
      animationFrameId = window.requestAnimationFrame(renderFrame);

      const frameInterval = 1000 / config.fps;

      if (time - lastFrameTime < frameInterval) {
        return;
      }

      const delta = Math.min((time - lastFrameTime) / 16.67 || 1, 2.1);
      lastFrameTime = time;

      context.fillStyle = `rgba(4, 5, 6, ${config.fadeAlpha})`;
      context.fillRect(0, 0, width, height);

      streams.forEach((stream, index) => {
        if (!stream.active && Math.random() > 0.0025) {
          return;
        }

        if (!stream.active && Math.random() <= 0.0025) {
          streams[index] = createStream(index);
        }

        for (let step = 0; step < stream.trail; step += 1) {
          const char = CHARACTERS[(Math.random() * CHARACTERS.length) | 0];
          const y = (stream.position - step) * fontSize;

          if (y < -fontSize || y > height + fontSize) {
            continue;
          }

          const alpha = step === 0
            ? config.headAlpha
            : Math.max(config.baseAlpha * (1 - step / (stream.trail + 1)), 0.018);

          drawCharacter(char, stream.x, y, alpha, step === 0);
        }

        stream.position += stream.speed * stream.drift * delta;

        if (stream.position * fontSize - stream.trail * fontSize > height + fontSize) {
          if (Math.random() > 0.16) {
            streams[index] = createStream(index);
          } else {
            stream.position = randomBetween(-18, -4);
          }
        }
      });
    };

    resize();
    animationFrameId = window.requestAnimationFrame(renderFrame);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isIOS, isMobile, isTablet, prefersReducedMotion]);

  if (prefersReducedMotion || isIOS) {
    return null;
  }

  return (
    <div aria-hidden="true" className="site-background__matrix-slot">
      <canvas ref={canvasRef} className="site-background__matrix-canvas" />
    </div>
  );
};

export default MatrixRainBackground;
