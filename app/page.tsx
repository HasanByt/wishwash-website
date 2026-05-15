"use client";

import { motion } from "framer-motion";
import { Building2, Check, Home, Sparkles, Stars, Workflow } from "lucide-react";
import ContactForm from "./components/ContactForm";
import ParallaxSlideshow from "./components/ParallaxSlideshow";
import ServiceCard from "./components/ServiceCard";

const services = [
  {
    icon: Home,
    title: "Unterhaltsreinigung",
    description: "Regelmässige Reinigung für Wohnungen, Häuser und Büros.",
  },
  {
    icon: Sparkles,
    title: "Fensterreinigung",
    description: "Streifenfreie Fenster innen und aussen inklusive Rahmen.",
  },
  {
    icon: Building2,
    title: "Büroreinigung",
    description: "Saubere Arbeitsplätze, Böden, Küchen und Sanitärbereiche.",
  },
];

const steps = [
  ["01", "Anfrage senden", "Sie beschreiben kurz, was gereinigt werden soll."],
  ["02", "Offerte erhalten", "Wir melden uns mit einer passenden Einschätzung."],
  ["03", "Sauber geniessen", "Wir reinigen zuverlässig, gründlich und pünktlich."],
];

const reviews = [
  ["Sehr zuverlässig, freundlich und gründlich. Die Wohnung war top sauber.", "Privatkunde"],
  ["Schnelle Rückmeldung und professionelle Reinigung. Sehr empfehlenswert.", "Geschäftskunde"],
  ["Faire Preise und saubere Arbeit. Genau so stellt man sich Service vor.", "Kunde aus der Region"],
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen soft-bg text-[#0A1228] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 h-72 w-72 rounded-full bg-[#3AA9FF]/20 blur-3xl" />
        <div className="absolute top-[520px] right-0 h-96 w-96 rounded-full bg-[#E5D5A4]/30 blur-3xl" />
      </div>

      <div className="relative z-10">
        <ParallaxSlideshow />

        <section className="px-6 md:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-[#3AA9FF] font-semibold uppercase tracking-[0.25em] text-sm mb-4">
                Unsere Leistungen
              </p>
              <h2 className="text-4xl md:text-5xl font-black gradient-text mb-5">
                Reinigung, die man sieht und spürt.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Professionelle Reinigung mit Liebe zum Detail, moderner Arbeitsweise
                und zuverlässigem Service.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 pb-24">
          <div className="max-w-7xl mx-auto rounded-[2rem] bg-[#0A1228] text-white p-8 md:p-14 shadow-[0_30px_90px_rgba(10,18,40,0.25)]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#E5D5A4] font-semibold uppercase tracking-[0.25em] text-sm mb-4">
                  Warum Wish Wash?
                </p>
                <h2 className="text-3xl md:text-5xl font-black mb-6">
                  Sauberkeit mit System.
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Wir sorgen für ein gepflegtes, hygienisches und angenehmes Umfeld –
                  privat und geschäftlich.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {["Persönliche Beratung", "Faire Preise", "Zuverlässige Termine", "Professionelle Reinigung"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 border border-white/10 p-5">
                    <Check className="text-[#3AA9FF] mb-3" size={26} strokeWidth={2.5} />
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-[#3AA9FF] font-semibold uppercase tracking-[0.25em] text-sm mb-4">
                Ablauf
              </p>
              <h2 className="text-4xl md:text-5xl font-black gradient-text">
                In drei Schritten zur sauberen Lösung.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map(([number, title, text]) => (
                <motion.div
                  key={number}
                  whileHover={{ y: -8 }}
                  className="rounded-[2rem] bg-white p-8 border border-slate-100 shadow-[0_20px_60px_rgba(15,45,80,0.08)]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F8FF] text-[#3AA9FF]">
                    <Workflow size={28} strokeWidth={2.3} />
                  </div>
                  <p className="text-5xl font-black text-[#3AA9FF]/25 mb-5">{number}</p>
                  <h3 className="text-2xl font-black mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-[#3AA9FF] font-semibold uppercase tracking-[0.25em] text-sm mb-4">
                Vertrauen
              </p>
              <h2 className="text-4xl md:text-5xl font-black gradient-text">
                Was Kunden an Wish Wash schätzen.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map(([text, author]) => (
                <div
                  key={author}
                  className="rounded-[2rem] bg-white p-8 border border-slate-100 shadow-[0_20px_60px_rgba(15,45,80,0.08)]"
                >
                  <Stars className="text-[#E5D5A4] mb-4" size={32} fill="currentColor" />
                  <p className="text-slate-700 leading-relaxed mb-6">“{text}”</p>
                  <p className="font-black text-[#0A1228]">{author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="px-6 md:px-16 py-24 bg-white/70 backdrop-blur">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#3AA9FF] font-semibold uppercase tracking-[0.25em] text-sm mb-4">
                Kontakt
              </p>
              <h2 className="text-4xl md:text-5xl font-black gradient-text mb-5">
                Kostenlose Offerte anfragen
              </h2>
              <p className="text-slate-600 text-lg">
                Füllen Sie das Formular aus. Wir melden uns so schnell wie möglich.
              </p>
            </div>

            <div className="glass-card rounded-[2rem] p-6 md:p-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}