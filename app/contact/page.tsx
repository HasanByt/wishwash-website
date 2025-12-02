import ContactForm from "../components/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-[#F2F8FF] to-[#E6F1FF] text-[#0A1228] px-6 md:px-16 py-28">

            {/* Titel */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1228] mb-10">
                Kontakt & Offertenanfrage
            </h1>

            {/* Einleitung */}
            <p className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-10">
                Haben Sie Fragen oder wünschen eine unverbindliche Offerte?
                Füllen Sie das Formular aus oder kontaktieren Sie uns direkt —
                wir melden uns so schnell wie möglich.
            </p>

            {/* Kontaktinfo */}
            <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200 mb-14 max-w-xl">
                <h2 className="text-2xl font-semibold text-[#3AA9FF] mb-3">
                    Kontaktinformationen
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    Wish Wash Reinigung<br />
                    Inhaber: Albana Aziri<br />
                    Telefon: +41 79 373 61 03<br />
                    E-Mail: info@wish-wash.ch<br />
                    Standort: 9450 Altstätten, CH
                </p>
            </div>

            {/* Kontaktformular */}
            <ContactForm />

        </main>
    );
}
