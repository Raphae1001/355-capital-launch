import { useEffect, useRef } from "react";

const TacticalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let dots: { x: number; y: number; vx: number; vy: number }[] = [];
    const DOT_COUNT = 60;
    const CONNECTION_DIST = 120;
    const RADAR_INTERVAL = 12000;
    const RADAR_DURATION = 4000;
    const RADAR_X_RATIO = 0.15;
    const RADAR_Y_RATIO = 0.7;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initDots = () => {
      dots = Array.from({ length: DOT_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    resize();
    initDots();
    window.addEventListener("resize", () => {
      resize();
      initDots();
    });

    const startTime = performance.now();

    const draw = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Constellation (Space) ---
      for (const dot of dots) {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
      }

      // connections
      ctx.strokeStyle = "rgba(45,212,150,0.035)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          if (dx * dx + dy * dy < CONNECTION_DIST * CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // dots
      ctx.fillStyle = "rgba(45,212,150,0.05)";
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- Radar Pulse (Defense) ---
      const elapsed = (now - startTime) % RADAR_INTERVAL;
      if (elapsed < RADAR_DURATION) {
        const progress = elapsed / RADAR_DURATION;
        const maxRadius = Math.max(canvas.width, canvas.height) * 0.6;
        const cx = canvas.width * RADAR_X_RATIO;
        const cy = canvas.height * RADAR_Y_RATIO;

        for (let ring = 0; ring < 3; ring++) {
          const ringProgress = Math.max(0, progress - ring * 0.15);
          if (ringProgress <= 0) continue;
          const r = ringProgress * maxRadius;
          const alpha = Math.max(0, 0.04 * (1 - ringProgress));
          ctx.strokeStyle = `rgba(45,212,150,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
};

export default TacticalBackground;
