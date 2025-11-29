import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Wish Wash Reinigung",
  description: "Professionelle Reinigung für Zuhause & Unternehmen",
  icons: {
    icon: "/favicon.png",              // Standard Browser Icon
    shortcut: "/favicon.png",         // Shortcut Icon
    apple: "/favicon.png",    // iPhone / iPad Icon
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-[#0A1228] text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
