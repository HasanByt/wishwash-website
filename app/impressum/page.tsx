"use client";

import { motion } from "framer-motion";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#F2F8FF] to-[#E6F1FF] text-[#0A1228] px-6 md:px-16 py-28">

      {/* Titel */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10"
      >
        Impressum
      </motion.h1>

      {/* Inhalt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gray-700 leading-relaxed space-y-10 max-w-3xl"
      >

        {/* Firmeninfos */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-3">
            Wish Wash Reinigung
          </h2>

          <p className="leading-relaxed">
            Inhaber: Albana Aziri<br />
            Standort: 9450 Altstätten, Schweiz<br />
            Telefon: +41 79 373 61 03<br />
            E-Mail: info@wish-wash.ch<br />
            Webseite: www.wish-wash.ch
          </p>
        </motion.div>

        {/* Haftungsausschluss */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-2">
            Haftungsausschluss
          </h2>
          <p>
            Die Inhalte dieser Webseite wurden mit grösster Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            übernehmen wir jedoch keine Gewähr.
          </p>
        </motion.div>

        {/* Haftung für Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-2">
            Haftung für Links
          </h2>
          <p>
            Unsere Webseite enthält Links zu externen Webseiten Dritter.
            Auf deren Inhalte haben wir keinen Einfluss und übernehmen hierfür keine Haftung.
          </p>
        </motion.div>

        {/* Urheberrechte */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-2">
            Urheberrechte
          </h2>
          <p>
            Alle Inhalte (Texte, Bilder, Grafiken, Logos) auf dieser Webseite sind
            urheberrechtlich geschützt und dürfen ohne schriftliche Zustimmung
            nicht verwendet werden.
          </p>
        </motion.div>

        {/* Footer Hinweis */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 text-sm"
        >
          Gerichtsstand: Schweiz
        </motion.p>

      </motion.div>
    </main>
  );
}
