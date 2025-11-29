export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#0A1228] text-gray-300 border-t border-white/10 mt-20 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img
            src="/logo00.webp"
            alt="WishWash Logo"
            className="w-26 mb-4 opacity-90"
          />
          <p className="text-sm">
            Professionelle Reinigung für Zuhause und Unternehmen.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-[#E5D5A4] font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">Über uns</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Kontakt</a></li>
            <li><a href="/impressum" className="hover:text-white">Impressum</a></li>
            <li><a href="/datenschutz" className="hover:text-white">Datenschutz</a></li>
          </ul>
        </div>

        {/* Kontaktinfos */}
        <div>
          <h3 className="text-[#E5D5A4] font-semibold mb-3">Kontakt</h3>
          <p>WishWash Reinigung</p>
          <p>Telefon: +41 79 123 45 67</p>
          <p>E-Mail: info@wishwash.ch</p>
        </div>

      </div>

      <p className="text-center text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} WishWash – Alle Rechte vorbehalten.
      </p>
    </footer>
  );
}
