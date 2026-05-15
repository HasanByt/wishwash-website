import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-20 overflow-hidden bg-[#07111F] text-white mt-0">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-[#3AA9FF]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#E5D5A4]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <Image
              src="/logo00.webp"
              alt="Wish Wash Logo"
              width={128}
              height={80}
              className="mb-6 opacity-95"
            />

            <p className="text-slate-300 leading-relaxed max-w-sm">
              Professionelle Reinigung für Zuhause, Büro und Gewerbe.
              Zuverlässig, gründlich und modern.
            </p>

            <a
              href="https://wa.me/41793736103"
              target="_blank"
              className="mt-7 inline-flex rounded-full bg-[#3AA9FF] px-6 py-3 font-bold text-white hover:bg-white hover:text-[#0A1228] transition"
            >
              Offerte anfragen
            </a>
          </div>

          <div>
            <h3 className="text-[#E5D5A4] font-bold mb-5">Navigation</h3>
            <ul className="space-y-3 text-slate-300">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">Über uns</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#E5D5A4] font-bold mb-5">Rechtliches</h3>
            <ul className="space-y-3 text-slate-300">
              <li><Link href="/impressum" className="hover:text-white transition">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition">Datenschutz</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#E5D5A4] font-bold mb-5">Kontakt</h3>
            <div className="space-y-3 text-slate-300">
              <p>Wish Wash Reinigung</p>
              <a href="tel:+41793736103" className="block hover:text-white transition">
                +41 79 373 61 03
              </a>
              <a href="mailto:info@wish-wash.ch" className="block hover:text-white transition">
                info@wish-wash.ch
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Wish Wash – Alle Rechte vorbehalten.</p>
          <p>Professionelle Reinigung in der Schweiz.</p>
        </div>
      </div>
    </footer>
  );
}