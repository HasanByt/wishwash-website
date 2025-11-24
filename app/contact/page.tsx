import ContactForm from "../components/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0A1228] text-white px-6 md:px-16 py-20">

            {/* Titel */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#E5D5A4] mb-10">
                Kontakt & Offertenanfrage
            </h1>

            {/* Einleitung */}
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed mb-10">
                Haben Sie Fragen oder wünschen eine unverbindliche Offerte?
                Füllen Sie das Formular aus oder kontaktieren Sie uns direkt —
                wir melden uns so schnell wie möglich.
            </p>

            {/* Kontaktinfo */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 mb-14 max-w-xl">
                <h2 className="text-2xl font-semibold text-[#E5D5A4] mb-3">Kontaktinformationen</h2>

                <p className="text-gray-300">
                    Wish Wash Reinigung<br />
                    Inhaber: Albana Aziri<br />
                    Telefon: +41 79 123 45 67<br />
                    E-Mail: info@wishwash.ch<br />
                    Standort: Schweiz
                </p>
            </div>

            {/* Kontaktformular */}
            <ContactForm />

        </main>
    );
}
