"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Über uns" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const active = (path: string) => pathname === path;
  const isHomeTop = pathname === "/" && !scrolled;

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isHomeTop
            ? "bg-transparent"
            : "bg-white/90 backdrop-blur-2xl shadow-[0_12px_40px_rgba(15,45,80,0.08)]"
          }
        `}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 py-2 flex items-center justify-between">
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <Image
  src="/logo.webp"
  alt="Wish Wash Logo"
  width={125}
  height={80}
  className="h-auto drop-shadow-md"
  priority
/>
          </Link>

          <ul
            className={`
              hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition
              ${isHomeTop ? "bg-white/10 backdrop-blur-md" : "bg-slate-100/80"}
            `}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    rounded-full px-4 py-2 text-sm font-bold transition
                    ${active(item.href)
                      ? "bg-[#3AA9FF] text-white shadow-[0_10px_30px_rgba(58,169,255,0.35)]"
                      : isHomeTop
                        ? "text-white/85 hover:bg-white/15 hover:text-white"
                        : "text-slate-700 hover:bg-white hover:text-[#0A1228]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/41793736103"
            target="_blank"
            className={`
              hidden md:inline-flex rounded-full px-5 py-2.5 text-sm font-bold transition
              ${isHomeTop
                ? "bg-white text-[#0A1228] hover:bg-[#3AA9FF] hover:text-white"
                : "bg-[#0A1228] text-white hover:bg-[#3AA9FF]"
              }
            `}
          >
            Offerte anfragen
          </a>

          <button
            className={`md:hidden text-3xl ${isHomeTop ? "text-white" : "text-[#0A1228]"}`}
            onClick={() => setIsOpen(true)}
            aria-label="Menü öffnen"
          >
            ☰
          </button>
        </nav>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      <div
        className={`
          fixed top-0 right-0 h-full w-[82%] max-w-80 bg-white shadow-2xl z-50 md:hidden
          transform ${isOpen ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300 ease-in-out
        `}
      >
        <div className="flex flex-col p-7 space-y-6">
          <button
            onClick={closeMenu}
            className="text-[#0A1228] text-3xl self-end"
            aria-label="Menü schliessen"
          >
            ✕
          </button>

          <Image
            src="/logo.webp"
            alt="Wish Wash Logo"
            width={150}
            height={95}
            className="mb-6 h-auto mx-auto"
          />

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`
                rounded-2xl px-4 py-3 text-lg font-bold transition
                ${active(item.href)
                  ? "bg-[#3AA9FF] text-white"
                  : "text-slate-700 hover:bg-slate-100"
                }
              `}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-6 border-t border-slate-200 space-y-4">
            <a href="tel:+41793736103" className="block text-slate-700 font-semibold">
              +4179 373 61 03
            </a>

            <a
              href="https://wa.me/41793736103"
              target="_blank"
              className="inline-flex rounded-full bg-[#25D366] text-white font-bold px-5 py-3"
            >
              WhatsApp schreiben
            </a>
          </div>
        </div>
      </div>
    </>
  );
}