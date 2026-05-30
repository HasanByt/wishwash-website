"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    title: "Zuverlässigkeit",
    text: "Wir halten Termine ein und arbeiten sauber, pünktlich und organisiert.",
  },
  {
    title: "Gründlichkeit",
    text: "Jeder Auftrag wird mit Präzision und Blick fürs Detail ausgeführt.",
  },
  {
    title: "Transparenz",
    text: "Klare Absprachen, faire Preise und ehrliche Kommunikation.",
  },
  {
    title: "Qualität",
    text: "Moderne Arbeitsweise und professionelle Reinigungsstandards.",
  },
];

export default function AboutContent() {
  return (
    <main className="min-h-screen soft-bg text-[#0A1228] px-6 md:px-16 pt-36 pb-24">
      <section className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#3AA9FF] font-semibold uppercase tracking-[0.25em] text-sm mb-4">
              Über uns
            </p>

            <h1 className="text-4xl md:text-6xl font-black gradient-text mb-6">
              Sauberkeit mit Anspruch.
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Wish Wash ist ein modernes Reinigungsunternehmen für Privat- und
              Geschäftskunden. Unser Ziel ist es, Räume nicht nur sauber, sondern
              gepflegt, angenehm und professionell wirken zu lassen.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              Wir arbeiten zuverlässig, sorgfältig und mit persönlichem Anspruch.
              Jede Reinigung wird individuell auf die Situation und die Wünsche
              unserer Kundinnen und Kunden abgestimmt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-white p-10 shadow-[0_25px_80px_rgba(15,45,80,0.12)] border border-slate-100"
          >
            <Image
              src="/logo.webp"
              alt="Wish Wash Logo"
              width={288}
              height={180}
              className="mx-auto drop-shadow-xl"
              priority
            />
          </motion.div>
        </div>

        <div className="rounded-[2rem] bg-[#0A1228] text-white p-8 md:p-12 mb-16">
          <p className="text-[#E5D5A4] font-semibold uppercase tracking-[0.25em] text-sm mb-4">
            Unsere Mission
          </p>

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Reinigung, auf die man sich verlassen kann.
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
            Wir möchten unseren Kundinnen und Kunden Zeit, Aufwand und Stress
            abnehmen. Mit klarer Kommunikation, fairen Preisen und hochwertiger
            Arbeit schaffen wir saubere Räume und ein gutes Gefühl.
          </p>
        </div>

        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#3AA9FF] font-semibold uppercase tracking-[0.25em] text-sm mb-4">
              Werte
            </p>

            <h2 className="text-4xl md:text-5xl font-black gradient-text">
              Dafür steht Wish Wash.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.5rem] bg-white p-7 border border-slate-100 shadow-[0_20px_60px_rgba(15,45,80,0.08)]"
              >
                <div className="text-[#3AA9FF] text-3xl mb-4">✓</div>
                <h3 className="text-xl font-black mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
