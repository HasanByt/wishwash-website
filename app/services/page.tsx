"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#F2F8FF] to-[#E6F1FF] text-[#0A1228] px-6 md:px-16 py-28">

      {/* Titel */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10"
      >
        Unsere Dienstleistungen
      </motion.h1>

      {/* Intro Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-14"
      >
        Wish Wash bietet professionelle Reinigungsservices für private Haushalte,
        Unternehmen und Spezialanforderungen. Hier findest du eine Übersicht über
        alle Leistungen, die wir mit höchster Qualität und Zuverlässigkeit anbieten.
      </motion.p>

      {/* Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              duration: 0.6,
            },
          },
        }}
      >

        {/* CARD VARIANT */}
        {[
          {
            title: "🧽 Unterhaltsreinigung",
            text: "Regelmässige Reinigung für Wohnungen, Häuser oder Büros. Wir sorgen für dauerhaft saubere Oberflächen, hygienische Sanitärräume und gepflegte Räume.",
          },
          {
            title: "🪟 Fensterreinigung",
            text: "Schlierenfreie Fenster innen und aussen. Auf Wunsch inklusive Rahmen- und Kantenreinigung sowie schwer erreichbaren Bereichen.",
          },
          {
            title: "🏢 Büroreinigung",
            text: "Perfekte Sauberkeit für Arbeitsplätze: Bodenreinigung, Oberflächenpflege, Küchenräume, Sanitärbereiche und Müllentsorgung.",
          },
          {
            title: "🧹 Endreinigung / Umzugsreinigung",
            text: "Gründliche Reinigung beim Aus- oder Einzug – inklusive Abnahmegarantie für stressfreie Wohnungsübergaben.",
          },
          {
            title: "🚧 Bauendreinigung",
            text: "Entfernung von Staub, Schmutz und Rückständen nach Renovationen oder Neubauten – ideal für Firmen und Privatkunden.",
          },
          {
            title: "✨ Spezialreinigungen",
            text: "Teppichreinigung, Polsterpflege, Dunstabzugreinigung, hartnäckige Verschmutzungen und vieles mehr – individuell nach Anfrage.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-4">
              {service.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {service.text}
            </p>
          </motion.div>
        ))}

      </motion.div>
    </main>
  );
}
