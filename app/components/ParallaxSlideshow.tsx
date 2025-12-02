"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ParallaxSlideshow() {
  const images = [
    "/slide1.webp",
    "/slide2.webp",
    "/slide3.webp",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden rounded-b-3xl shadow-xl">

      {/* CURRENT IMAGE */}
      <motion.img
        key={index}
        src={images[index]}
        alt="Slideshow"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Text + Logo Layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 gap-4">

        {/* ⭐ Titel */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold drop-shadow-xl"
        >
          Glänzende Sauberkeit. Professionell. Zuverlässig.
        </motion.h1>
      </div>
    </div>
  );
}
