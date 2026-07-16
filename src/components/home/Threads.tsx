"use client";

import React, { useEffect, useRef } from "react";
import "./Threads.css";

interface ThreadsProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

export default function Threads({
  color = [1, 1, 1],
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = false,
}: ThreadsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const canvas = document.createElement("canvas");
    canvas.className = "threads-canvas";
    container.appendChild(canvas);
    canvasRef.current = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    const lineCount = 34;
    const rgb = `rgba(${Math.round(color[0] * 255)}, ${Math.round(color[1] * 255)}, ${Math.round(color[2] * 255)},`;

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      canvas.width = clientWidth;
      canvas.height = clientHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.tx = (e.clientX - rect.left) / rect.width;
      mouse.ty = (e.clientY - rect.top) / rect.height;
    };

    const onMouseLeave = () => {
      mouse.tx = 0.5;
      mouse.ty = 0.5;
    };

    const draw = (t: number) => {
      const time = t * 0.001;
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = "round";

      for (let i = 0; i < lineCount; i += 1) {
        const p = i / (lineCount - 1);
        const baseY = canvas.height * (0.12 + p * 0.78);
        const alpha = 0.055 + (1 - p) * 0.12;
        const thickness = 0.8 + (1 - p) * 1.4;
        ctx.strokeStyle = `${rgb}${alpha})`;
        ctx.lineWidth = thickness;
        ctx.beginPath();

        for (let x = 0; x <= canvas.width; x += 14) {
          const nx = x / canvas.width;
          const wave =
            Math.sin(nx * 9 + time * 0.7 + p * 4.8) * (18 * amplitude * (0.2 + p * 0.8)) +
            Math.cos(nx * 4 + time * 0.35 + p * 2.6) * (7 * amplitude);
          const mouseAmp = enableMouseInteraction ? (mouse.y - 0.5) * 34 : 0;
          const y = baseY + wave + mouseAmp * (0.2 + p * 0.8) + (p - 0.5) * distance * 24;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    if (enableMouseInteraction) {
      container.addEventListener("mousemove", onMouseMove);
      container.addEventListener("mouseleave", onMouseLeave);
    }
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      if (enableMouseInteraction) {
        container.removeEventListener("mousemove", onMouseMove);
        container.removeEventListener("mouseleave", onMouseLeave);
      }
      if (canvas.parentNode === container) container.removeChild(canvas);
    };
  }, [amplitude, color, distance, enableMouseInteraction]);

  return <div ref={containerRef} className="threads-container" />;
}

