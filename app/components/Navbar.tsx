"use client";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative z-20 bg-[#0A1228] text-white border-b border-white/10">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="/navbar.png"
                        alt="WishWash Logo"
                        className="w-15 h-15"
                    />
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8 text-gray-300">
                    <li><a href="/" className="hover:text-white transition">Home</a></li>
                    <li><a href="/about" className="hover:text-white">Über uns</a></li>
                    <li><a href="/services" className="hover:text-white">Services</a></li>
                    <li><a href="/contact" className="hover:text-white transition">Kontakt</a></li>
                    <li><a href="/impressum" className="hover:text-white">Impressum</a></li>
                    <li><a href="/datenschutz" className="hover:text-white">Datenschutz</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#0A1228] border-t border-white/10 px-4 py-4 space-y-4">
                    <a href="/" className="block text-gray-300 hover:text-white">Home</a>
                    <a href="/about" className="block text-gray-300 hover:text-white">Über uns</a>
                    <a href="/services" className="block text-gray-300 hover:text-white">Services</a>
                    <a href="/contact" className="block text-gray-300 hover:text-white">Kontakt</a>
                </div>
            )}
        </header>
    );
}
