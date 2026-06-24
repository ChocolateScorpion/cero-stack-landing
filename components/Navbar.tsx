"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#caso", label: "Caso de Éxito" },
  { href: "#demo", label: "Demo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(8,8,8,0.88)] backdrop-blur-xl border-b border-[#1A1A1A]"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-[11px] tracking-tight"
            style={{ background: "linear-gradient(135deg, #5C6FFF 0%, #8B9FFF 100%)" }}
          >
            CS
          </div>
          <span className="text-white font-bold text-[15px] tracking-tight">
            Cero<span className="text-[#5C6FFF]">Stack</span>
          </span>
        </a>

        {/* Nav — desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#606060] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 bg-gold text-[#080808] text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:brightness-110 hover:scale-105 active:scale-95"
          style={{ boxShadow: "0 2px 16px rgba(201,168,76,0.20)" }}
        >
          Agenda demo
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </header>
  );
}
