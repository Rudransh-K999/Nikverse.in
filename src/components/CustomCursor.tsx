import React, { useEffect, useRef, useState } from 'react';

interface StarParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  decay: number;
  color: string;
}

const STAR_COLORS = ['#fbbf24', '#fef08a', '#f59e0b', '#ffffff'];

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  const lastPosRef = useRef({ x: -100, y: -100 });
  const particlesRef = useRef<StarParticle[]>([]);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Disable on touch / mobile devices for low-end optimization and battery saving
    if (window.matchMedia('(pointer: coarse)').matches || !window.matchMedia('(hover: hover)').matches) {
      setIsTouch(true);
      return;
    }

    const cursor = cursorRef.current;

    const spawnStars = (x: number, y: number, count = 1) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 0.5;
        const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];

        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          radius: Math.random() * 2.5 + 2,
          alpha: 0.9,
          decay: Math.random() * 0.03 + 0.025,
          color,
        });
      }

      if (particlesRef.current.length > 15) {
        particlesRef.current = particlesRef.current.slice(-15);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (cursor) {
        cursor.style.transform = `translate3d(${x - 12}px, ${y - 12}px, 0)`;
        cursor.style.opacity = '1';
      }

      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      if (Math.hypot(dx, dy) > 24) {
        lastPosRef.current = { x, y };
        spawnStars(x, y, 1);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      spawnStars(e.clientX, e.clientY, 4);
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Lightweight 2D canvas particle renderer
  useEffect(() => {
    if (isTouch) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    const render = () => {
      if (particlesRef.current.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        animFrameRef.current = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9999]" />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none select-none text-xl z-[9999] opacity-0 will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <span className="drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] block filter text-amber-300">
          ✨
        </span>
      </div>
    </div>
  );
};

