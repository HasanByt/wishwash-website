"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const active = (path: string) =>
    pathname === path ? "text-[#3AA9FF] font-bold" : "text-gray-300";

  return (
    <>
      {/* NAVBAR */}
      <header className="relative z-50 bg-[#0A1228] text-gray-300 border-b border-white/10 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <img
              src="/logo.webp"
              alt="Wish Wash Logo"
              className="w-[170px] md:w-[180px] h-auto hover:scale-105 transition-transform"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 text-3xl"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 text-gray-300 text-[18px]">
            <li><Link href="/" className={active("/")}>Home</Link></li>
            <li><Link href="/about" className={active("/about")}>Über uns</Link></li>
            <li><Link href="/services" className={active("/services")}>Services</Link></li>
            <li><Link href="/contact" className={active("/contact")}>Kontakt</Link></li>
          </ul>
        </nav>
      </header>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* SLIDE-IN MENU */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-[#0A1228] shadow-xl z-50 md:hidden
          transform ${isOpen ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300 ease-in-out
        `}
      >
        <div className="flex flex-col p-6 space-y-6 text-right">

          <button
            onClick={closeMenu}
            className="text-gray-300 text-3xl self-end mb-4"
          >
            ✕
          </button>

          <Link href="/" onClick={closeMenu} className={`${active("/")} text-lg`}>
            Home
          </Link>

          <Link href="/about" onClick={closeMenu} className={`${active("/about")} text-lg`}>
            Über uns
          </Link>

          <Link href="/services" onClick={closeMenu} className={`${active("/services")} text-lg`}>
            Services
          </Link>

          <Link href="/contact" onClick={closeMenu} className={`${active("/contact")} text-lg`}>
            Kontakt
          </Link>

          <div className="mt-10 pt-6 border-t border-white/10 text-right space-y-3">

            {/* Telefon */}
            <a
              href="tel:+41793736103"
              className="block text-gray-300 hover:text-white text-lg"
            >
              📞 +41 79 373 61 03
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/41793736103"
              target="_blank"
              className="
    flex items-center gap-2
    bg-[#25D366]
    hover:bg-[#1EBE5A]
    text-white
    font-medium
    px-4 py-2
    rounded-full
    transition
    w-fit
  "
            >
              {/* WhatsApp Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-4 h-4"
              >
                <path
                  fill="white"
                  d="M16 3C9.4 3 4 8.4 4 15c0 2.5.8 4.9 2.1 6.9L4 29l7.3-2.1C13.3 28.3 14.6 29 16 29c6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-1.2 0-2.4-.3-3.5-.8l-.3-.1-4.3 1.2 1.2-4.2-.2-.3C7.9 19 7 17 7 15c0-5 4-9 9-9s9 4 9 9-4 10-9 10zm5.1-7.3c-.3-.1-1.9-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.1-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-1-.9-1.5-2-1.7-2.3-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 3s1.2 3.4 1.3 3.6c.1.2 2.4 3.8 5.8 5.2 3.4 1.5 3.4 1 4 .9.6-.1 1.9-.8 2.2-1.6.3-.8.3-1.5.2-1.6-.1-.1-.2-.1-.5-.2z"
                />
              </svg>

              WhatsApp schreiben
            </a>





          </div>

        </div>
      </div>
    </>
  );
}
