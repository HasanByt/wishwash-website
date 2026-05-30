import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Unterhaltsreinigung, Fensterreinigung, Büroreinigung, Umzugsreinigung und mehr – professionelle Reinigungslösungen von Wish Wash in der Schweiz.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
