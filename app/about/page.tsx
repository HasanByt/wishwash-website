"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#F2F8FF] to-[#E6F1FF] text-[#0A1228] px-6 md:px-16 py-28">

      {/* Titel */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10"
      >
        Über uns
      </motion.h1>

      {/* Intro Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-12"
      >
        Wish Wash ist ein modernes und zuverlässiges Reinigungsunternehmen, das für
        Privat- und Geschäftskunden professionelle Reinigungslösungen anbietet.
        Unser Ziel ist es, jeden Raum makellos sauber zu hinterlassen – mit Präzision,
        Leidenschaft und einem Lächeln.
      </motion.p>

      {/* Team / Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        {/* Bild */}
        <motion.img
          src="/logo.webp"
          alt="Wish Wash Logo"
          className="w-80 mx-auto drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        />

        {/* Mission Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-[#3AA9FF] mb-4">Unsere Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Unser Anspruch ist es, höchste Sauberkeit und volle Kundenzufriedenheit zu garantieren.
            Wir verwenden moderne Reinigungsmittel, nachhaltige Produkte und arbeiten mit einem
            geschulten Team, das Wert auf Qualität und Pünktlichkeit legt.
          </p>
        </motion.div>
      </div>

      {/* Werte */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-3xl font-semibold text-[#3AA9FF] mb-6"
      >
        Unsere Werte
      </motion.h2>

      {/* Werte Liste */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-6 text-gray-700 max-w-3xl"
      >
        <li>
          <span className="text-[#3AA9FF] font-bold text-xl">✔ Zuverlässigkeit</span><br />
          Wir halten unsere Termine ein und arbeiten effizient.
        </li>

        <li>
          <span className="text-[#3AA9FF] font-bold text-xl">✔ Gründlichkeit</span><br />
          Jeder Auftrag wird mit höchster Präzision ausgeführt.
        </li>

        <li>
          <span className="text-[#3AA9FF] font-bold text-xl">✔ Transparenz</span><br />
          Klare Absprachen, faire Preise und ehrliche Kommunikation.
        </li>

        <li>
          <span className="text-[#3AA9FF] font-bold text-xl">✔ Nachhaltigkeit</span><br />
          Schonende Reinigungsmittel und verantwortungsvoller Umgang mit Ressourcen.
        </li>
      </motion.ul>

    </main>
  );
}
