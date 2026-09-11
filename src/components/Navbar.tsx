"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.querySelector("[data-nav-invert]");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInverted(entry.isIntersecting),
      { rootMargin: "-72px 0px -85% 0px", threshold: 0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const textColor = inverted ? "text-[#0d203c]" : "text-[#F7F4EE]";
  const textColorMuted = inverted ? "text-[#0d203c]/90" : "text-[#F7F4EE]/90";
  
  // High-contrast background when scrolled over light or dark sections
  const bg = scrolled
    ? inverted
      ? "bg-[#F7F4EE]/95 backdrop-blur-md shadow-md border-b border-[#0d203c]/10"
      : "bg-[#0d203c]/90 backdrop-blur-md shadow-lg border-b border-white/10"
    : "bg-gradient-to-b from-[#0d203c]/80 via-[#0d203c]/30 to-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full ${bg} transition-all duration-300 px-6 md:px-12 py-4 flex items-center justify-between text-[11px] tracking-[0.28em] font-light uppercase ${textColor}`}
      >
        {/* Left Navigation */}
        <nav className={`hidden md:flex items-center gap-8 ${textColorMuted}`}>
          <Link href="/" className="hover:text-[#f2d299] transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-[#f2d299] transition-colors">
            About
          </Link>
          <Link href="#services" className="hover:text-[#f2d299] transition-colors">
            Services
          </Link>
        </nav>

        {/* Center Brand Logo */}
        <Link href="/" className="flex flex-col items-center text-center group">
          <Image
            src="/logo-new.svg"
            alt="Swan Facilities Logo"
            width={148}
            height={100}
            className={`mb-1 transition-transform group-hover:scale-105 ${inverted ? "invert" : ""}`}
          />
        </Link>

        {/* Right Navigation */}
        <div className={`hidden md:flex items-center gap-8 ${textColorMuted}`}>
          <Link href="#portfolio" className="hover:text-[#f2d299] transition-colors">
            Portfolio
          </Link>
          <Link href="#contact" className="hover:text-[#f2d299] transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden focus:outline-none ${textColor}`}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed top-[70px] left-0 right-0 z-40 bg-[#0d203c]/95 backdrop-blur-xl px-8 py-6 flex flex-col gap-4 text-xs tracking-[0.25em] uppercase md:hidden text-[#F7F4EE] border-b border-white/10">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  );
}