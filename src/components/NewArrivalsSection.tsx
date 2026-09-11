"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function NewArrivalsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll tracking across the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Pronounced parallax motion values (over 180px - 220px of total movement)
  const auraLeftY = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const auraRightY = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const lumiereY = useTransform(scrollYProgress, [0, 1], [-110, 110]);

  return (
    <section
      ref={sectionRef}
      id="new-arrivals"
      className="relative z-20 bg-[#0d203c] text-[#F7F4EE] py-16 md:py-24 overflow-hidden border-t border-white/10"
    >
      {/* SECTION HEADER (EXPANDED NEAR FULL-WIDTH) */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f2d299] block mb-1">
              EST. ARCHITECTURE &amp; LUXURY
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-normal text-[#F7F4EE] tracking-tight">
              New Arrivals
            </h2>
          </div>
          <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.2em] text-[#F7F4EE]/60 max-w-xs font-light">
            Architectural landmarks defining modern luxury living
          </p>
        </div>
      </div>

      <div className="space-y-16 md:space-y-24">
        
        {/* ========================================================= */}
        {/* ROW 1: AURA RIVERSIDE (LEFT) | CENTER TEXT | AURA PEPONI (RIGHT) */}
        {/* ========================================================= */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[520px]">
          
          {/* Left Image: Aura Riverside */}
          <div className="lg:col-span-4 relative min-h-[360px] lg:min-h-full overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{ y: auraLeftY }}
              className="relative w-full h-full min-h-[360px] lg:min-h-full scale-125"
            >
              <Image
                src="/Aura-Riverside.jpg"
                alt="Aura Riverside"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>

          {/* Center Column: 2 Text Columns Split by Hairline Divider */}
          <div className="lg:col-span-4 px-6 sm:px-8 py-10 flex items-center bg-[#0d203c] border-y lg:border-y-0 lg:border-x border-white/10 z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-start">
              
              {/* COLUMN 1: AURA RIVERSIDE */}
              <div className="space-y-3 md:pr-4 md:border-r border-white/15">
                <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f2d299] block">
                  01 / RIVERSIDE
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-normal text-[#F7F4EE] tracking-tight">
                  Aura Riverside
                </h3>
                <p className="font-[family-name:var(--font-playfair)] text-xs sm:text-sm italic text-[#f2d299] font-light leading-snug">
                  A Play of Light and Volume.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#F7F4EE]/80 leading-relaxed font-light">
                  Exclusive 1 &amp; 2-bedroom duplex apartments in prestigious Riverside.
                </p>
                <div className="pt-2">
                  <Link
                    href="#aura-riverside"
                    className="group inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-[11px] uppercase tracking-[0.2em] font-semibold text-[#F7F4EE] hover:text-[#f2d299] transition-colors"
                  >
                    <span className="border-b border-[#F7F4EE]/30 group-hover:border-[#f2d299] pb-0.5">
                      Learn More
                    </span>
                    <span className="text-[#f2d299] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* COLUMN 2: AURA PEPONI */}
              <div className="space-y-3 md:pl-2">
                <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f2d299] block">
                  02 / PEPONI
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-normal text-[#F7F4EE] tracking-tight">
                  Aura Peponi
                </h3>
                <p className="font-[family-name:var(--font-playfair)] text-xs sm:text-sm italic text-[#f2d299] font-light leading-snug">
                  Natural Serenity Meets Luxury.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#F7F4EE]/80 leading-relaxed font-light">
                  Exclusive 1 &amp; 2-bedroom duplex apartments in prestigious Peponi.
                </p>
                <div className="pt-2">
                  <Link
                    href="#aura-peponi"
                    className="group inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-[11px] uppercase tracking-[0.2em] font-semibold text-[#F7F4EE] hover:text-[#f2d299] transition-colors"
                  >
                    <span className="border-b border-[#F7F4EE]/30 group-hover:border-[#f2d299] pb-0.5">
                      Learn More
                    </span>
                    <span className="text-[#f2d299] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right Image: Aura Peponi */}
          <div className="lg:col-span-4 relative min-h-[360px] lg:min-h-full overflow-hidden">
            <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{ y: auraLeftY }}
              className="relative w-full h-full min-h-[360px] lg:min-h-full scale-125"
            >
              <Image
                src="/peponi-ext-7-1.jpg"
                alt="Aura Peponi"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* ROW 2: LUMIÈRE (NEAR FULL-WIDTH WITH AMPLE PARALLAX MOTION) */}
        {/* ========================================================= */}
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="relative min-h-[460px] lg:min-h-[520px] w-full flex items-center justify-center overflow-hidden border border-white/10 p-6 sm:p-10">
            
            {/* Background Parallax Image Container */}
            <motion.div
              style={{ y: lumiereY }}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="absolute inset-0 w-full h-full scale-130"
            >
              <Image
                src="/Lumiere-building-views-7.jpg"
                alt="Lumière Westlands"
                fill
                className="object-cover object-center"
              />
            </motion.div>

            {/* Compact Floating Navy Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative z-10 bg-[#0d203c]/92 border border-white/15 p-6 sm:p-8 max-w-md mx-auto text-center shadow-2xl backdrop-blur-md space-y-3"
            >
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f2d299] block">
                03 / WESTLANDS
              </span>
              
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-normal text-[#F7F4EE] tracking-tight">
                Lumières
              </h3>

              <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#F7F4EE]/85 leading-relaxed font-light">
                Lumiere is a landmark 24-storey luxury development in Westlands, offering elegant 1, 2 &amp; 3-bedroom apartments.
              </p>

              <div className="pt-2">
                <Link
                  href="#lumiere"
                  className="group inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-[11px] uppercase tracking-[0.25em] font-semibold text-[#F7F4EE] hover:text-[#f2d299] transition-colors"
                >
                  <span className="border-b border-[#F7F4EE]/30 group-hover:border-[#f2d299] pb-0.5">
                    Learn More
                  </span>
                  <span className="text-[#f2d299] transition-transform group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}