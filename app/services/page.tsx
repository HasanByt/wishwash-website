"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Construction,
  Home,
  MoveRight,
  Sparkles,
  SprayCan,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Unterhaltsreinigung",
    text: "Regelmässige Reinigung für Wohnungen, Häuser und Büros. Wir sorgen für saubere Oberflächen, gepflegte Böden und hygienische Räume.",
  },
  {
    icon: Sparkles,
    title: "Fensterreinigung",
    text: "Streifenfreie Fenster innen und aussen – inklusive Rahmen, Falzen und schwer erreichbaren Bereichen.",
  },
  {
    icon: Building2,
    title: "Büroreinigung",
    text: "Saubere Arbeitsplätze, Küchen, Sanitärbereiche und Böden für ein professionelles Arbeitsumfeld.",
  },
  {
    icon: MoveRight,
    title: "Umzugsreinigung",
    text: "Gründliche Endreinigung beim Auszug oder Einzug – ideal für eine stressfreie Wohnungsübergabe.",
  },
  {
    icon: Construction,
    title: "Bauendreinigung",
    text: "Entfernung von Staub, Schmutz und Rückständen nach Umbauten, Renovationen oder Neubauten.",
  },
  {
    icon: SprayCan,
    title: "Spezialreinigung",
    text: "Individuelle Reinigung für Teppiche, Polster, Dunstabzüge und hartnäckige Verschmutzungen.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen soft-bg text-[#0A1228] px-6 md:px-16 pt-36 pb-24">
      <section className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#3AA9FF] font-semibold uppercase tracking-[0.25em] text-sm mb-4">
            Services
          </p>

          <h1 className="text-4xl md:text-6xl font-black gradient-text mb-6">
            Reinigungslösungen für jeden Bedarf.
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            Ob Zuhause, Büro, Gewerbe oder Spezialauftrag – Wish Wash bietet
            professionelle Reinigung mit Qualität, Zuverlässigkeit und Liebe zum Detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group rounded-[2rem] bg-white p-8 border border-slate-100 shadow-[0_20px_60px_rgba(15,45,80,0.10)] hover:border-[#3AA9FF]/40 transition"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0F8FF] text-[#3AA9FF] group-hover:scale-110 transition">
                  <Icon size={34} strokeWidth={2.2} />
                </div>

                <h2 className="text-2xl font-black text-[#0A1228] mb-4">
                  {service.title}
                </h2>

                <p className="text-slate-600 leading-relaxed">
                  {service.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] bg-[#0A1228] text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black mb-3">
              Nicht sicher, welche Reinigung passt?
            </h2>
            <p className="text-slate-300 max-w-2xl">
              Schreiben Sie uns kurz, was gereinigt werden soll. Wir beraten Sie
              unverbindlich und erstellen eine passende Offerte.
            </p>
          </div>

          <a
            href="/contact"
            className="rounded-full bg-[#3AA9FF] px-7 py-4 font-bold text-white hover:bg-white hover:text-[#0A1228] transition"
          >
            Offerte anfragen
          </a>
        </div>
      </section>
    </main>
  );
}