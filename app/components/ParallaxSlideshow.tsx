"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/slide1.webp",
    badge: "Privathaushalte",
    title: "Makellose Reinigung für Ihr Zuhause.",
    text: "Gründliche Reinigung mit Liebe zum Detail – für ein Zuhause, das sich frisch und gepflegt anfühlt.",
  },
  {
    image: "/slide2.webp",
    badge: "Büro & Gewerbe",
    title: "Saubere Räume für produktives Arbeiten.",
    text: "Professionelle Büroreinigung für Arbeitsplätze, Küchen, Böden und Sanitärbereiche.",
  },
  {
    image: "/slide3.webp",
    badge: "Fensterreinigung",
    title: "Glasklare Sicht. Streifenfrei sauber.",
    text: "Fensterreinigung innen und aussen – sauber, gründlich und zuverlässig.",
  },
];

export default function ParallaxSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[720px] md:min-h-[760px] overflow-hidden bg-[#0A1228]">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index].image}
          src={slides[index].image}
          alt="Professionelle Reinigung von Wish Wash"
          className="absolute inset-0 h-full w-full object-cover scale-[1.03] brightness-[0.82] contrast-[1.08]"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-[#07111F]/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/92 via-[#07111F]/72 to-[#07111F]/30" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/90 via-transparent to-[#07111F]/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-16 min-h-[720px] md:min-h-[760px] flex items-center pt-28 md:pt-0">
        <div className="max-w-3xl text-white">
          <motion.div
            key={slides[index].badge}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md mb-5 text-xs md:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#3AA9FF]" />

            <span className="text-sm font-medium text-white/90">
              {slides[index].badge}
            </span>
          </motion.div>

          <motion.h1
            key={slides[index].title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="text-[2.55rem] md:text-7xl font-black leading-[1.05] tracking-tight"
          >
            {slides[index].title}
          </motion.h1>

          <motion.p
            key={slides[index].text}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="mt-5 text-base md:text-xl text-white/80 leading-relaxed max-w-2xl"
          >
            {slides[index].text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="mt-7 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#kontakt"
              className="w-full sm:w-auto rounded-full bg-[#3AA9FF] px-6 py-3.5 text-center font-bold text-white shadow-[0_20px_50px_rgba(58,169,255,0.35)] hover:bg-white hover:text-[#0A1228] transition"
            >
              Offerte anfragen
            </a>

            <a
              href="/services"
              className="w-full sm:w-auto rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-center font-bold text-white backdrop-blur-md hover:bg-white hover:text-[#0A1228] transition"
            >
              Leistungen ansehen
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4 }}
            className="hidden md:grid mt-10 grid-cols-3 gap-4 max-w-xl"
          >
            {[
              ["100%", "Zuverlässig"],
              ["24h", "Rückmeldung"],
              ["Fair", "Preise"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/15 bg-white/10 p-3 md:p-4 backdrop-blur-md"
              >
                <p className="text-2xl font-black text-[#E5D5A4]">
                  {value}
                </p>

                <p className="text-xs md:text-sm text-white/70">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 md:bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-9 bg-[#3AA9FF]" : "w-2.5 bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
}