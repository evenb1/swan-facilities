"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="sticky top-0 h-screen min-h-[680px] w-full bg-[#0d203c] text-[#F7F4EE] flex flex-col justify-end pt-24 pb-6 overflow-hidden z-0">
      {/* Background Image with Scale Animation */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero.jpg"
          alt="Swan Facilities Luxury Property"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft top and bottom shadow overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d203c]/80 via-black/30 to-[#0d203c]/95" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 w-full max-w-[1720px] mx-auto flex flex-col justify-end h-full">
        
        {/* MAIN BASELINE ROW: Headline (Left) + Subtext & Button (Right) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-12 pb-6">
          
          {/* 1. LEFT: Enlarged Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[65%] shrink-0"
          >
            <h1 className="font-[family-name:var(--font-artistic)] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] text-[#F7F4EE] leading-[0.92] tracking-tight font-normal">
              Elevating Property Standards
            </h1>
          </motion.div>

          {/* 2. RIGHT: Subtext + Button side-by-side along bottom baseline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[35%] flex flex-col sm:flex-row items-start sm:items-end justify-between lg:justify-end gap-6 sm:gap-8 pb-1"
          >
            {/* Subtext */}
            <p className="font-[family-name:var(--font-montserrat)] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#f2d299] leading-relaxed font-light max-w-[240px] text-left">
              Comprehensive property management, strategic consultancy, sales, and letting for premier regional developments
            </p>

            {/* Right Outline CTA Button */}
            <Link
              href="#contact"
              className="border  hover:border-[#f2d299] text-[#f2d299]  transition-all duration-300 text-[10px] uppercase tracking-[0.22em] px-6 py-3 whitespace-nowrap font-medium shrink-0"
            >
              Book a Viewing
            </Link>
          </motion.div>

        </div>

        {/* BOTTOM CENTER: Carousel Controls */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center items-center gap-6 text-[#F7F4EE]/50 text-xs font-light tracking-widest pt-2 pb-2"
        >
          <button
            aria-label="Previous Slide"
            className="hover:text-[#f2d299] transition-colors p-1 cursor-pointer focus:outline-none"
          >
            &lt;
          </button>
          <button
            aria-label="Next Slide"
            className="hover:text-[#f2d299] transition-colors p-1 cursor-pointer focus:outline-none"
          >
            &gt;
          </button>
        </motion.div>

      </div>
    </section>
  );
}