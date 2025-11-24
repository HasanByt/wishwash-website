export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-[#0A1228] text-white px-6 md:px-16 py-20">

            <h1 className="text-4xl md:text-5xl font-bold text-[#E5D5A4] mb-10">
                Impressum
            </h1>

            <div className="text-gray-300 leading-relaxed space-y-6 max-w-3xl">

                <p>
                    <strong className="text-[#E5D5A4]">Wish Wash Reinigung</strong><br />
                    Inhaber: Albana Aziri<br />
                    Adresse: <br />
                    Telefon: <br />
                    E-Mail: info@wishwash.ch<br />
                    Webseite: www.wishwash.ch<br />
                </p>

                <div>
                    <h2 className="text-2xl font-semibold text-[#E5D5A4] mb-2">Haftungsausschluss</h2>
                    <p>
                        Die Inhalte dieser Webseite wurden mit grösster Sorgfalt erstellt. Für die
                        Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch
                        keine Gewähr.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-[#E5D5A4] mb-2">Haftung für Links</h2>
                    <p>
                        Unsere Webseite enthält Links zu externen Webseiten Dritter. Auf deren Inhalte
                        haben wir keinen Einfluss und übernehmen hierfür keine Haftung.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-[#E5D5A4] mb-2">Urheberrechte</h2>
                    <p>
                        Alle Inhalte (Texte, Bilder, Grafiken, Logos) auf dieser Webseite sind
                        urheberrechtlich geschützt und dürfen ohne schriftliche Zustimmung nicht
                        verwendet werden.
                    </p>
                </div>

                <p className="text-gray-400">Gerichtsstand: Schweiz</p>
            </div>

        </main>
    );
}
