"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HandedOverSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  const footerNavLinks = [
    { name: "New Arrivals", href: "#new-arrivals" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Ground Breaking", href: "#ground-breaking" },
    { name: "Handed Over", href: "#handed-over" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* HANDED OVER SECTION */}
      <section
        ref={containerRef}
        id="handed-over"
        className="relative z-20 bg-[#0d203c] text-[#F7F4EE] py-16 md:py-24 border-t border-white/10 overflow-hidden"
      >
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: EDITORIAL CONTENT BLOCK */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6 lg:pr-8"
            >
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#f2d299]" />
                <span className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f2d299]">
                  Crafted. Built. Delivered.
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-normal text-[#F7F4EE] tracking-tight leading-[1.1]">
                Handed Over Projects
              </h2>

              <p className="font-[family-name:var(--font-montserrat)] text-xs sm:text-sm text-[#F7F4EE]/80 leading-relaxed font-light max-w-xl">
                Swan Facilities has successfully delivered full facilities management mandates across multiple high-value properties in Kenya and East Africa. Every completed project followed our document-based methodology — from initial commissioning through to structured handover.
              </p>

              <div className="pt-4">
                <Link
                  href="#portfolio"
                  className="group inline-flex items-center gap-3 font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.25em] font-semibold text-[#F7F4EE] hover:text-[#f2d299] transition-colors"
                >
                  <span className="border-b border-[#F7F4EE]/30 group-hover:border-[#f2d299] pb-1">
                    Explore our Projects
                  </span>
                  <span className="text-[#f2d299] transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: FEATURED ALTURA IMAGE */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-white/10 shadow-2xl">
                <motion.div
                  style={{ y: imageY }}
                  initial={{ opacity: 0, scale: 1.08 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="absolute inset-0 w-full h-full scale-125"
                >
                  <Image
                    src="/Altura.jpg"
                    alt="Altura Handed Over Project by Swan Facilities"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>

                <div className="absolute bottom-6 left-6 z-10">
                  <div className="bg-[#0d203c]/90 border border-white/15 backdrop-blur-md px-4 py-2">
                    <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f2d299]">
                      ALTURA — COMPLETED MANDATE
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-20 bg-[#071325] text-[#F7F4EE] pt-16 pb-12 border-t border-white/10">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10">
          
          {/* TOP FOOTER ROW: LOGO & NAV */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/10">
            
            {/* BRAND SVG LOGO */}
            <div className="space-y-3">
              <Link href="/">
                <Image
                  src="/logo-new.svg"
                  alt="Swan Facilities Logo"
                  width={160}
                  height={80}
                  className="w-auto h-12"
                />
              </Link>
              <p className="font-[family-name:var(--font-montserrat)] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#F7F4EE]/60 font-light pt-1">
                Luxury Facilities Management Across East Africa
              </p>
            </div>

            {/* MIRRORED NAVBAR LINKS */}
            <nav className="flex flex-wrap items-center gap-6 sm:gap-10">
              {footerNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.2em] text-[#F7F4EE]/80 hover:text-[#f2d299] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

          </div>

          {/* BOTTOM FOOTER ROW */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-[family-name:var(--font-montserrat)] text-[11px] text-[#F7F4EE]/50 font-light">
            <p>© {new Date().getFullYear()} SWAN Facilities. All rights reserved.</p>
            
            <div className="flex items-center gap-6 tracking-wider">
              <Link href="#privacy" className="hover:text-[#F7F4EE] transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="#terms" className="hover:text-[#F7F4EE] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}