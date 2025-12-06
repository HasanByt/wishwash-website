"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./components/ContactForm";
import ParallaxSlideshow from "./components/ParallaxSlideshow";

export default function HomePage() {
  const [isTouch, setIsTouch] = useState(false);
  const [cleanMode, setCleanMode] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-[#F2F8FF] to-[#E6F1FF] text-[#0A1228] overflow-hidden">

      {/* Inhalt */}
      <div className="relative z-10">

        {/* ⭐ NEUER HERO: PARALLAX SLIDESHOW */}
        <ParallaxSlideshow />

        {/* Vorteile */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 px-6 md:px-16 py-20"
        >
          {[
            { title: "Zuverlässig", text: "Wir erscheinen pünktlich und arbeiten gründlich." },
            { title: "Preiswert", text: "Faire Preise ohne versteckte Kosten." },
            { title: "Professionell", text: "Moderne Ausrüstung & geschultes Personal." },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-6 rounded-xl text-center shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-[#3AA9FF] mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </motion.section>


        {/* Dienstleistungen */}
        <motion.div
          className="grid md:grid-cols-3 gap-10 pb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { icon: "🧽", title: "Unterhaltsreinigung", text: "Regelmässige Reinigung von Wohnungen, Büros und mehr." },
            { icon: "🪟", title: "Fensterreinigung", text: "Glasklare Fenster und Rahmenreinigung." },
            { icon: "🏢", title: "Büroreinigung", text: "Saubere Arbeitsplätze und hygienische Räume." },
          ].map((s, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl text-center shadow-lg border border-gray-200"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-[#3AA9FF] mb-2">{s.title}</h3>
              <p className="text-gray-700">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>


        {/* Kontakt */}
        {/* Kontakt */}
        <motion.section
          id="kontakt"
          className="px-6 md:px-16 py-20 bg-gradient-to-b from-white to-[#F3F9FF]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E5D5A4] mb-12">
            Kontakt & Offertenanfrage
          </h2>

          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Wir freuen uns auf Ihre Anfrage. Füllen Sie das Formular aus und wir melden uns so schnell wie möglich.
          </p>

          <ContactForm />
        </motion.section>


      </div>
    </main>
  );
}
