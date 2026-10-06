"use client";

import { useEffect, useRef } from "react";

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Ajusta tamanho ao redimensionar tela
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Partículas flutuantes sutis
    const particleCount = 35;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    // Orbes sutis de gradiente animado
    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Fundo Gradiente Base
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, "#08090a");
      bgGradient.addColorStop(1, "#0d0e12");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Glows Tecnológicos Animados em Segundo Plano
      angle += 0.005;
      const glowX1 = width * 0.3 + Math.cos(angle) * 120;
      const glowY1 = height * 0.4 + Math.sin(angle * 0.8) * 80;

      const glowX2 = width * 0.7 + Math.sin(angle * 0.7) * 100;
      const glowY2 = height * 0.6 + Math.cos(angle * 0.9) * 90;

      // Glow Azul
      const radial1 = ctx.createRadialGradient(glowX1, glowY1, 0, glowX1, glowY1, 350);
      radial1.addColorStop(0, "rgba(121, 196, 242, 0.08)");
      radial1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = radial1;
      ctx.beginPath();
      ctx.arc(glowX1, glowY1, 350, 0, Math.PI * 2);
      ctx.fill();

      // Glow Ciano / Roxo discreto
      const radial2 = ctx.createRadialGradient(glowX2, glowY2, 0, glowX2, glowY2, 400);
      radial2.addColorStop(0, "rgba(99, 102, 241, 0.05)");
      radial2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = radial2;
      ctx.beginPath();
      ctx.arc(glowX2, glowY2, 400, 0, Math.PI * 2);
      ctx.fill();

      // 3. Grid Tecnológico Suave (Linhas)
      const gridSize = 48;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 4. Desenho das Partículas
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Reposiciona se sair da tela
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(121, 196, 242, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}