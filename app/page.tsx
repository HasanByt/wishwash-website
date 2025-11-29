import ContactForm from "./components/ContactForm";
import GlassCleanerBackground from "./components/GlassCleanerBackground";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0A1228] text-white overflow-hidden">

      {/* 🔵 Soap-Hintergrund NUR für den Seitenbereich */}
      <GlassCleanerBackground />

      {/* Inhalt */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="flex flex-col items-center justify-center text-center py-32 px-4">
          <img
            src="/logo.png"
            alt="WishWash Logo"
            className="w-150 mb-10 drop-shadow-lg"
          />

          <h1 className="text-4xl md:text-6xl font-bold text-[#E5D5A4] mb-6">
            Professionelle Reinigung für Zuhause & Unternehmen
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
            WishWash sorgt für Sauberkeit, Frische und Wohlbefinden – zuverlässig,
            gründlich und fair. Hol dir jetzt deine unverbindliche Offerte.
          </p>

          <a
            href="#kontakt"
            className="bg-[#3AA9FF] hover:bg-[#1E90FF] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg"
          >
            Offerte anfordern
          </a>
        </section>

        {/* Vorteile */}
        <section className="grid md:grid-cols-3 gap-8 px-6 md:px-16 pb-20">
          <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-[#E5D5A4] mb-2">Zuverlässig</h3>
            <p className="text-gray-300">Wir erscheinen pünktlich und arbeiten gründlich.</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-[#E5D5A4] mb-2">Preiswert</h3>
            <p className="text-gray-300">Faire Preise ohne versteckte Kosten.</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-[#E5D5A4] mb-2">Professionell</h3>
            <p className="text-gray-300">Moderne Ausrüstung & geschultes Personal.</p>
          </div>
        </section>

        {/* Dienstleistungen */}
        <section id="services" className="px-6 md:px-16 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E5D5A4] mb-12">
            Unsere Dienstleistungen
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm">
              <div className="text-4xl mb-4">🧽</div>
              <h3 className="text-xl font-semibold text-[#E5D5A4] mb-2">Unterhaltsreinigung</h3>
              <p className="text-gray-300">Regelmässige Reinigung von Wohnungen, Büros und mehr.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm">
              <div className="text-4xl mb-4">🪟</div>
              <h3 className="text-xl font-semibold text-[#E5D5A4] mb-2">Fensterreinigung</h3>
              <p className="text-gray-300">Glasklare Fenster und Rahmenreinigung.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-[#E5D5A4] mb-2">Büroreinigung</h3>
              <p className="text-gray-300">Saubere Arbeitsplätze und hygienische Räume.</p>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="px-6 md:px-16 py-20 bg-[#0A1228]">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E5D5A4] mb-12">
            Kontakt & Offertenanfrage
          </h2>

          <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
            Wir freuen uns auf Ihre Anfrage. Füllen Sie das Formular aus und wir melden uns so schnell wie möglich.
          </p>

          <ContactForm />
        </section>

      </div>
    </main>
  );
}
