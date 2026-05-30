import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Erfahren Sie mehr über Wish Wash Reinigung – unser Team, unsere Werte und unsere Mission für professionelle Reinigung in der Schweiz.",
};

export default function AboutPage() {
  return <AboutContent />;
}
