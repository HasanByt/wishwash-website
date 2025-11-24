export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#0A1228] text-white px-6 md:px-16 py-20">

      <h1 className="text-4xl md:text-5xl font-bold text-[#E5D5A4] mb-10">
        Datenschutzerklärung
      </h1>

      <div className="text-gray-300 leading-relaxed space-y-6 max-w-3xl">

        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
          Diese Datenschutzerklärung informiert Sie über die Art, den Umfang
          und den Zweck der Erhebung, Verarbeitung und Nutzung personenbezogener
          Daten auf unserer Webseite.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-[#E5D5A4] mb-2">
            1. Verantwortliche Stelle
          </h2>
          <p>
            Wish Wash Reinigung<br />
            Inhaber: Albana Aziri<br />
            Adresse: <br />
            E-Mail: info@wishwash.ch<br />
            Webseite: www.wishwash.ch
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#E5D5A4] mb-2">
            2. Erhebung von Daten
          </h2>
          <p>
            Wir erheben personenbezogene Daten nur dann, wenn Sie uns diese
            freiwillig übermitteln, z. B. über das Kontaktformular. Dazu gehören
            Name, E-Mail-Adresse, Telefonnummer und Ihre Nachricht.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#E5D5A4] mb-2">
            3. Verwendung der Daten
          </h2>
          <p>
            Die übermittelten Daten verwenden wir ausschliesslich zur Bearbeitung
            Ihrer Anfrage. Eine Weitergabe an Dritte erfolgt nicht ohne Ihre Einwilligung.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#E5D5A4] mb-2">
            4. Server-Logfiles
          </h2>
          <p>
            Unser Hosting-Provider erhebt automatisch technische Daten wie
            IP-Adresse, Datum und Uhrzeit, Browsertyp und Betriebssystem.
            Diese Daten dienen der technischen Sicherheit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#E5D5A4] mb-2">
            5. Cookies
          </h2>
          <p>
            Unsere Webseite kann Cookies verwenden. Sie können diese im Browser
            jederzeit deaktivieren.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#E5D5A4] mb-2">
            6. Formulare (Formspree)
          </h2>
          <p>
            Wenn Sie unser Kontaktformular nutzen, wird Ihre Nachricht über
            Formspree verarbeitet. Datenschutz: https://formspree.io/legal/privacy
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#E5D5A4] mb-2">
            7. Datensicherheit
          </h2>
          <p>
            Wir schützen Ihre Daten durch technische und organisatorische Massnahmen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#E5D5A4] mb-2">
            8. Ihre Rechte
          </h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung sowie Widerruf Ihrer Einwilligung.
          </p>
        </section>

        <p className="text-gray-500">
          Stand: {new Date().getFullYear()}
        </p>

      </div>

    </main>
  );
}
