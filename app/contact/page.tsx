"use client";

import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
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
            Kontakt
          </p>

          <h1 className="text-4xl md:text-6xl font-black gradient-text mb-6">
            Kostenlose Offerte anfragen.
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            Haben Sie Fragen oder wünschen Sie eine unverbindliche Offerte?
            Schreiben Sie uns – wir melden uns so schnell wie möglich.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-[#0A1228] text-white p-8 md:p-10 shadow-[0_25px_80px_rgba(10,18,40,0.22)]"
          >
            <h2 className="text-3xl font-black mb-6">
              Kontaktinformationen
            </h2>

            <div className="space-y-5 text-slate-300">
              <div>
                <p className="text-[#E5D5A4] font-bold mb-1">Firma</p>
                <p>Wish Wash Reinigung</p>
              </div>

              <div>
                <p className="text-[#E5D5A4] font-bold mb-1">Telefon</p>
                <a href="tel:+41793736103" className="hover:text-white transition">
                  +41 79 373 61 03
                </a>
              </div>

              <div>
                <p className="text-[#E5D5A4] font-bold mb-1">E-Mail</p>
                <a href="mailto:info@wish-wash.ch" className="hover:text-white transition">
                  info@wish-wash.ch
                </a>
              </div>

              <div>
                <p className="text-[#E5D5A4] font-bold mb-1">Standort</p>
                <p>9450 Altstätten, Schweiz</p>
              </div>
            </div>

            <a
              href="https://wa.me/41793736103"
              target="_blank"
              className="mt-8 inline-flex rounded-full bg-[#25D366] px-6 py-3 font-bold text-white hover:opacity-90 transition"
            >
              WhatsApp schreiben
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card rounded-[2rem] p-6 md:p-10"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}