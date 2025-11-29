"use client";
import { useEffect, useRef } from "react";

export default function GlassCleanerBackground({ active }) {
  const canvasRef = useRef(null);
  const wiperRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wiper = wiperRef.current;
    if (!canvas || !wiper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ----- Hintergrund Setup -----
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const soapImg = new Image();
      soapImg.src = "/soap.webp";

      soapImg.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.60;
        ctx.drawImage(soapImg, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
      };
    };

    resize();
    window.addEventListener("resize", resize);

    // ❌ Wenn Reinigungsmodus AUS → kein Wiper, kein Event Listener
    if (!active) {
      wiper.style.opacity = "0";
      return () => window.removeEventListener("resize", resize);
    }

    // ----- Wischen -----
    let firstMove = true;

    function cleanAt(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();

      const rawX = clientX - rect.left;
      const rawY = clientY - rect.top;

      if (firstMove) {
        wiper.style.opacity = "1";
        firstMove = false;
      }

      const w = wiper.offsetWidth;
      const h = wiper.offsetHeight;

      const rubberOffsetY = -5;

      const x = rawX;
      const y = rawY + rubberOffsetY;

      wiper.style.left = `${rawX - w / 2}px`;
      wiper.style.top = `${rawY - h / 2}px`;

      const wipeWidth = w * 0.85;
      const wipeHeight = 36;
      const radius = 14;

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.roundRect(
        x - wipeWidth / 2,
        y - wipeHeight / 2,
        wipeWidth,
        wipeHeight,
        radius
      );
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    }

    // Desktop
    function onMouseMove(e) {
      cleanAt(e.clientX, e.clientY);
    }

    // Touchscreen
    function onTouchMove(e) {
      const t = e.touches[0];
      if (!t) return;
      cleanAt(t.clientX, t.clientY);
      e.preventDefault();
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [active]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <img
        ref={wiperRef}
        src="/wiper.png"
        alt="wiper"
        className="absolute w-32 opacity-0 transition-opacity duration-200 select-none"
      />
    </div>
  );
}
