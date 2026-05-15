import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wish-wash.ch"),

  title: {
    default: "Wish Wash Reinigung | Professionelle Reinigung in der Schweiz",
    template: "%s | Wish Wash Reinigung",
  },

  description:
    "Wish Wash bietet professionelle Reinigung für Zuhause, Büro und Gewerbe. Zuverlässig, gründlich und fair.",

  keywords: [
    "Reinigung",
    "Reinigungsfirma",
    "Unterhaltsreinigung",
    "Fensterreinigung",
    "Büroreinigung",
    "Umzugsreinigung",
    "Altstätten",
    "Schweiz",
    "Wish Wash",
  ],

  openGraph: {
    title: "Wish Wash Reinigung",
    description:
      "Professionelle Reinigung für Zuhause, Büro und Gewerbe.",
    url: "https://wish-wash.ch",
    siteName: "Wish Wash Reinigung",
    images: [
      {
        url: "//slide1.webp",
        width: 1200,
        height: 630,
        alt: "Wish Wash Reinigung",
      },
    ],
    locale: "de_CH",
    type: "website",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${jakarta.variable} font-sans bg-gradient-to-b from-white via-[#F2F8FF] to-[#E6F1FF] text-[#0A1228]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}