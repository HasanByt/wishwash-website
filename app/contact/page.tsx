import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kostenlose Offerte anfragen – schreiben Sie Wish Wash Reinigung per Formular, E-Mail oder WhatsApp. Wir melden uns so schnell wie möglich.",
};

export default function ContactPage() {
  return <ContactContent />;
}
