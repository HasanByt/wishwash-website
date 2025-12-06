"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  // Hervorhebung aktiver Link
  const active = (path: string) =>
    pathname === path
      ? "text-[#3AA9FF] font-bold"
      : "text-gray-300 hover:text-white";

  return (
    <header className="relative z-20 bg-[#0A1228] text-gray-300 border-b border-white/10 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center">
          <img
            src="/logo.webp"
            alt="Wish Wash Logo"
            className="
              w-[160px]         /* Mobile Größe */
              md:w-[180px]      /* Desktop Größe */
              h-auto
              opacity-100 
              transition-transform 
              duration-300 
              hover:scale-105 
            "
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-[18px]">
          <li><Link href="/" className={active("/")}>Home</Link></li>
          <li><Link href="/about" className={active("/about")}>Über uns</Link></li>
          <li><Link href="/services" className={active("/services")}>Services</Link></li>
          <li><Link href="/contact" className={active("/contact")}>Kontakt</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1228] border-t border-white/10 px-4 py-4 space-y-4">
          <ul>
            <li>
              <Link href="/" onClick={closeMenu} className={active("/")}>
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu} className={active("/about")}>
                <b>Über uns</b>
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={closeMenu} className={active("/services")}>
                <b>Services</b>
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu} className={active("/contact")}>
                <b>Kontakt</b>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
