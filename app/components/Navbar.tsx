"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative z-20 bg-[#0A1228] text-gray-300 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo + Name */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
          <img
            src="/navbar.webp"
            alt="Wish Wash Logo"
            className="w-20 h-auto opacity-90"
          />
          <span className="text-[#E5D5A4] font-semibold text-xl tracking-wide">
            wish-wash.ch
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><Link href="/" className="hover:text-white transition"><b>Home</b></Link></li>
          <li><Link href="/about" className="hover:text-white transition"><b>Über uns</b></Link></li>
          <li><Link href="/services" className="hover:text-white transition"><b>Services</b></Link></li>
          <li><Link href="/contact" className="hover:text-white transition"><b>Kontakt</b></Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1228] border-t border-white/10 px-4 py-4 space-y-4">

          <Link href="/" onClick={closeMenu} className="block text-gray-300 hover:text-white">
            <b>Home</b>
          </Link>

          <Link href="/about" onClick={closeMenu} className="block text-gray-300 hover:text-white">
            <b>Über uns</b>
          </Link>

          <Link href="/services" onClick={closeMenu} className="block text-gray-300 hover:text-white">
            <b>Services</b>
          </Link>

          <Link href="/contact" onClick={closeMenu} className="block text-gray-300 hover:text-white">
            <b>Kontakt</b>
          </Link>

        </div>
      )}
    </header>
  );
}
