"use client";

import { motion } from "framer-motion";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#F2F8FF] to-[#E6F1FF] text-[#0A1228] px-6 md:px-16 py-28">

      {/* Titel */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10"
      >
        Datenschutzerklärung
      </motion.h1>

      {/* Inhalt Wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gray-700 leading-relaxed space-y-10 max-w-3xl"
      >

        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
          Diese Datenschutzerklärung informiert Sie über die Art, den Umfang
          und den Zweck der Erhebung, Verarbeitung und Nutzung personenbezogener
          Daten auf unserer Webseite.
        </p>

        {/* 1 */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-2">
            1. Verantwortliche Stelle
          </h2>
          <p>
            Wish Wash Reinigung<br />
            Inhaber: Albana Aziri<br />
            Feldwiesenstrasse 1, 9450 Altstätten<br />
            E-Mail: info@wish-wash.ch<br />
            Webseite: www.wish-wash.ch
          </p>
        </motion.section>

        {/* 2 */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-2">
            2. Erhebung von Daten
          </h2>
          <p>
            Wir erheben personenbezogene Daten nur dann, wenn Sie uns diese
            freiwillig übermitteln, z. B. über das Kontaktformular. Dazu gehören
            Name, E-Mail-Adresse, Telefonnummer und Ihre Nachricht.
          </p>
        </motion.section>

        {/* 3 */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-2">
            3. Verwendung der Daten
          </h2>
          <p>
            Die übermittelten Daten verwenden wir ausschliesslich zur Bearbeitung
            Ihrer Anfrage. Eine Weitergabe an Dritte erfolgt nicht ohne Ihre Einwilligung.
          </p>
        </motion.section>

        {/* 4 */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-2">
            4. Server-Logfiles
          </h2>
          <p>
            Unser Hosting-Provider erhebt automatisch technische Daten wie
            IP-Adresse, Datum und Uhrzeit, Browsertyp und Betriebssystem.
            Diese Daten dienen ausschliesslich der technischen Sicherheit.
          </p>
        </motion.section>

        {/* 5 */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-2">
            5. Cookies
          </h2>
          <p>
            Unsere Webseite kann Cookies verwenden. Sie können Cookies im Browser
            jederzeit deaktivieren.
          </p>
        </motion.section>

        {/* 6 */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-2">
            6. Formulare (Formspree)
          </h2>
          <p>
            Wenn Sie unser Kontaktformular nutzen, wird Ihre Nachricht über Formspree
            verarbeitet.
            Datenschutzerklärung: https://formspree.io/legal/privacy
          </p>
        </motion.section>

        {/* 7 */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-2">
            7. Datensicherheit
          </h2>
          <p>
            Wir schützen Ihre Daten durch geeignete technische und organisatorische Massnahmen.
          </p>
        </motion.section>

        {/* 8 */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-2">
            8. Ihre Rechte
          </h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung sowie Widerruf Ihrer Einwilligung.
          </p>
        </motion.section>

        <p className="text-gray-600 text-sm">
          Stand: {new Date().getFullYear()}
        </p>

      </motion.div>
    </main>
  );
}
