import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Wish Wash Reinigung",
  description: "Professionelle Reinigung für Zuhause & Unternehmen",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-gradient-to-b from-white via-[#F2F8FF] to-[#E6F1FF] text-[#0A1228]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
