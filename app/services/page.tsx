export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#F2F8FF] to-[#E6F1FF] text-[#0A1228] px-6 md:px-16 py-28">

      {/* Titel */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10">
        Unsere Dienstleistungen
      </h1>

      <p className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-14">
        Wish Wash bietet professionelle Reinigungsservices für private Haushalte,
        Unternehmen und Spezialanforderungen. Hier findest du eine Übersicht über
        alle Leistungen, die wir mit höchster Qualität und Zuverlässigkeit anbieten.
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* 1 – Unterhaltsreinigung */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-4">
            🧽 Unterhaltsreinigung
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Regelmässige Reinigung für Wohnungen, Häuser oder Büros. Wir sorgen für
            dauerhaft saubere Oberflächen, hygienische Sanitärräume und gepflegte Räume.
          </p>
        </div>

        {/* 2 – Fensterreinigung */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-4">
            🪟 Fensterreinigung
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Schlierenfreie Fenster innen und aussen. Auf Wunsch inklusive Rahmen- und
            Kantenreinigung sowie schwer erreichbaren Bereichen.
          </p>
        </div>

        {/* 3 – Büroreinigung */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-4">
            🏢 Büroreinigung
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Perfekte Sauberkeit für Arbeitsplätze: Bodenreinigung,
            Oberflächenpflege, Küchenräume, Sanitärbereiche und Müllentsorgung.
          </p>
        </div>

        {/* 4 – Endreinigung */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-4">
            🧹 Endreinigung / Umzugsreinigung
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Gründliche Reinigung beim Aus- oder Einzug. Wir übernehmen alle Bereiche —
            inklusive Abnahmegarantie für stressfreie Wohnungsübergaben.
          </p>
        </div>

        {/* 5 – Bauendreinigung */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-4">
            🚧 Bauendreinigung
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Entfernung von Staub, Schmutz und Rückständen nach Renovationen oder Neubauten.
            Ideal für Firmen oder private Auftraggeber.
          </p>
        </div>

        {/* 6 – Spezialreinigungen */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-4">
            ✨ Spezialreinigungen
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Teppichreinigung, Polsterpflege, Küchendunstabzug-Reinigung, hartnäckige
            Verschmutzungen und vieles mehr – individuell nach Anfrage.
          </p>
        </div>

      </div>

    </main>
  );
}
