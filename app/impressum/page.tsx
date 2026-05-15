"use client";

import { motion } from "framer-motion";

const info = [
  ["Inhaber", "Albana Aziri"],
  ["Adresse", "Feldwiesenstrasse 1, 9450 Altstätten, Schweiz"],
  ["Telefon", "+41 79 373 61 03"],
  ["E-Mail", "info@wish-wash.ch"],
  ["Webseite", "www.wish-wash.ch"],
];

const sections = [
  {
    title: "Haftungsausschluss",
    text: "Die Inhalte dieser Webseite wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.",
  },
  {
    title: "Haftung für Links",
    text: "Unsere Webseite enthält Links zu externen Webseiten Dritter. Auf deren Inhalte haben wir keinen Einfluss und übernehmen hierfür keine Haftung.",
  },
  {
    title: "Urheberrechte",
    text: "Alle Inhalte wie Texte, Bilder, Grafiken und Logos auf dieser Webseite sind urheberrechtlich geschützt und dürfen ohne schriftliche Zustimmung nicht verwendet werden.",
  },
];

export default function ImpressumPage() {
  return (
    <main className="min-h-screen soft-bg text-[#0A1228] px-6 md:px-16 pt-36 pb-24">
      <section className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-[#3AA9FF] font-semibold uppercase tracking-[0.25em] text-sm mb-4">
            Rechtliches
          </p>

          <h1 className="text-4xl md:text-6xl font-black gradient-text mb-6">
            Impressum
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            Angaben gemäss den rechtlichen Informationspflichten für die Webseite
            von Wish Wash Reinigung.
          </p>
        </motion.div>

        <div className="glass-card rounded-[2rem] p-6 md:p-10 mb-8">
          <h2 className="text-3xl font-black text-[#0A1228] mb-6">
            Wish Wash Reinigung
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {info.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl bg-white/75 border border-slate-100 p-5"
              >
                <p className="text-sm font-bold text-[#3AA9FF] mb-1">
                  {label}
                </p>
                <p className="text-slate-700">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[1.5rem] bg-white p-7 border border-slate-100 shadow-[0_20px_60px_rgba(15,45,80,0.08)]"
            >
              <h2 className="text-2xl font-black text-[#0A1228] mb-3">
                {section.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">{section.text}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-slate-500 text-sm mt-8">
          Gerichtsstand: Schweiz
        </p>
      </section>
    </main>
  );
}