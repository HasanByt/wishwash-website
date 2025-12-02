"use client";

import { useEffect, useRef } from "react";

export default function GlassCleanerBackground() {
  const canvasRef = useRef(null);
  const wiperRef = useRef(null);

  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isDesktop = !hasTouch;

    const canvas = canvasRef.current;
    const wiper = wiperRef.current;
    if (!canvas || !wiper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const soapImg = new Image();
      soapImg.src = "/soap.webp";

      soapImg.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.12; // 🔥 Sehr dezente Deckkraft
        ctx.drawImage(soapImg, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
      };
    };

    resize();
    window.addEventListener("resize", resize);

    if (!isDesktop) {
      wiper.style.opacity = "0";
      return () => window.removeEventListener("resize", resize);
    }

    function cleanAt(x, y) {
      const rect = canvas.getBoundingClientRect();
      const cx = x - rect.left;
      const cy = y - rect.top;

      wiper.style.opacity = "1";
      wiper.style.left = `${cx - wiper.offsetWidth / 2}px`;
      wiper.style.top = `${cy - wiper.offsetHeight / 2}px`;

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.roundRect(cx - 60, cy - 20, 120, 40, 20);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    }

    const onMouseMove = (e) => cleanAt(e.clientX, e.clientY);

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <img
        ref={wiperRef}
        src="/wiper.png"
        alt="Wiper"
        className="absolute w-32 opacity-0 transition-opacity duration-200 select-none"
      />
    </div>
  );
}
