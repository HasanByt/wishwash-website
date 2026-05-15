"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Verantwortliche Stelle",
    text: (
      <>
        Wish Wash Reinigung
        <br />
        Inhaber: Albana Aziri
        <br />
        Feldwiesenstrasse 1, 9450 Altstätten
        <br />
        E-Mail: info@wish-wash.ch
        <br />
        Webseite: www.wish-wash.ch
      </>
    ),
  },
  {
    title: "2. Erhebung von Daten",
    text: "Wir erheben personenbezogene Daten nur dann, wenn Sie uns diese freiwillig übermitteln, zum Beispiel über das Kontaktformular. Dazu gehören Name, E-Mail-Adresse, Telefonnummer und Ihre Nachricht.",
  },
  {
    title: "3. Verwendung der Daten",
    text: "Die übermittelten Daten verwenden wir ausschliesslich zur Bearbeitung Ihrer Anfrage. Eine Weitergabe an Dritte erfolgt nicht ohne Ihre Einwilligung.",
  },
  {
    title: "4. Server-Logfiles",
    text: "Unser Hosting-Provider erhebt automatisch technische Daten wie IP-Adresse, Datum und Uhrzeit, Browsertyp und Betriebssystem. Diese Daten dienen ausschliesslich der technischen Sicherheit.",
  },
  {
    title: "5. Cookies",
    text: "Unsere Webseite kann Cookies verwenden. Sie können Cookies im Browser jederzeit deaktivieren.",
  },
  {
    title: "6. Formulare",
    text: "Wenn Sie unser Kontaktformular nutzen, werden Ihre Angaben zur Bearbeitung der Anfrage verarbeitet.",
  },
  {
    title: "7. Datensicherheit",
    text: "Wir schützen Ihre Daten durch geeignete technische und organisatorische Massnahmen.",
  },
  {
    title: "8. Ihre Rechte",
    text: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerruf Ihrer Einwilligung.",
  },
];

export default function DatenschutzPage() {
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
            Datenschutzerklärung
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
            Hier informieren wir Sie über die Verarbeitung personenbezogener Daten
            auf unserer Webseite.
          </p>
        </motion.div>

        <div className="glass-card rounded-[2rem] p-6 md:p-10 space-y-5">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="rounded-2xl bg-white/70 border border-slate-100 p-6"
            >
              <h2 className="text-xl md:text-2xl font-black text-[#0A1228] mb-3">
                {section.title}
              </h2>

              <p className="text-slate-600 leading-relaxed">
                {section.text}
              </p>
            </motion.section>
          ))}

          <p className="text-slate-500 text-sm pt-4">
            Stand: {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </main>
  );
}