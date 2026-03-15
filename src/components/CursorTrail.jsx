import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import useViewportProfile from "../hooks/useViewportProfile";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { isTouch, isMobile, isTablet } = useViewportProfile();

  useEffect(() => {
    if (prefersReducedMotion || isTouch || isMobile) {
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
    let width = 0;
    let height = 0;
    let dpr = 1;
    let lastTimestamp = 0;
    let lastSpawnTime = 0;
    let lastPointerX = window.innerWidth * 0.5;
    let lastPointerY = window.innerHeight * 0.35;
    let pointerX = lastPointerX;
    let pointerY = lastPointerY;
    let pointerActive = false;
    const particles = [];
    const maxParticles = isTablet ? 22 : 28;
    const spawnInterval = isTablet ? 24 : 18;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, isTablet ? 1.25 : 1.5);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawnParticle = (timestamp) => {
      const dx = pointerX - lastPointerX;
      const dy = pointerY - lastPointerY;
      const speed = Math.hypot(dx, dy);

      if (speed < 1.5 && timestamp - lastSpawnTime < 48) {
        return;
      }

      lastSpawnTime = timestamp;
      lastPointerX = pointerX;
      lastPointerY = pointerY;

      const particleCount = speed > 18 ? 2 : 1;

      for (let index = 0; index < particleCount; index += 1) {
        if (particles.length >= maxParticles) {
          particles.shift();
        }

        particles.push({
          x: pointerX + (Math.random() - 0.5) * 3.2,
          y: pointerY + (Math.random() - 0.5) * 3.2,
          vx: dx * 0.03 + (Math.random() - 0.5) * 0.22,
          vy: dy * 0.03 + (Math.random() - 0.5) * 0.22,
          life: 0,
          ttl: randomTTL(isTablet),
          size: randomSize(isTablet)
        });
      }
    };

    const drawParticle = (particle) => {
      const progress = particle.life / particle.ttl;
      const alpha = (1 - progress) * (isTablet ? 0.22 : 0.28);
      const radius = particle.size * (1 - progress * 0.25);

      context.beginPath();
      context.fillStyle = `rgba(121, 255, 172, ${alpha})`;
      context.shadowColor = `rgba(121, 255, 172, ${alpha * 0.9})`;
      context.shadowBlur = radius * 7;
      context.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
      context.fill();

      context.beginPath();
      context.fillStyle = `rgba(196, 255, 220, ${alpha * 0.9})`;
      context.shadowBlur = 0;
      context.arc(particle.x, particle.y, radius * 0.42, 0, Math.PI * 2);
      context.fill();
    };

    const render = (timestamp) => {
      animationFrameId = window.requestAnimationFrame(render);

      const delta = clamp((timestamp - lastTimestamp) / 16.67 || 1, 0.6, 2.1);
      lastTimestamp = timestamp;

      context.clearRect(0, 0, width, height);

      if (pointerActive && timestamp - lastSpawnTime >= spawnInterval) {
        spawnParticle(timestamp);
      }

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.life += 16.67 * delta;
        particle.x -= particle.vx * delta;
        particle.y -= particle.vy * delta;
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        if (particle.life >= particle.ttl) {
          particles.splice(index, 1);
          continue;
        }

        drawParticle(particle);
      }
    };

    const handlePointerMove = (event) => {
      pointerActive = true;
      pointerX = event.clientX;
      pointerY = event.clientY;
    };

    const handlePointerLeave = () => {
      pointerActive = false;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, isTablet, isTouch, prefersReducedMotion]);

  if (prefersReducedMotion || isTouch || isMobile) {
    return null;
  }

  return (
    <div aria-hidden="true" className="cursor-trail-layer">
      <canvas ref={canvasRef} className="cursor-trail-layer__canvas" />
    </div>
  );
};

const randomTTL = (isTablet) => 180 + Math.random() * (isTablet ? 120 : 160);
const randomSize = (isTablet) => (isTablet ? 1.4 : 1.6) + Math.random() * 1.2;

export default CursorTrail;
