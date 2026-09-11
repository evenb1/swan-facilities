"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GroundBreakingSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax Speed Differences:
  // Image moves slower (subtle shift), Text moves faster
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 40]);
  const textY = useTransform(scrollYProgress, [0, 1], [20, -60]);

  return (
    <section
      ref={containerRef}
      id="ground-breaking"
      className="relative z-20 bg-[#0d203c] text-[#F7F4EE] overflow-hidden border-white/10"
    >
      <div className="w-full min-h-[700px] lg:min-h-[800px] grid grid-cols-1 lg:grid-cols-12 relative">
        
        {/* LEFT COLUMN: FULL BLEED IMAGE WITH SCROLL PARALLAX + RISE (NO BLUR) */}
        <div className="lg:col-span-6 relative min-h-[450px] lg:min-h-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ y: imageY }}
            className="relative w-full h-full min-h-[450px] lg:min-h-[850px] scale-105"
          >
            <Image
              src="/Terreno-2.jpg"
              alt="Terreno Ground Breaking Ceremony"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </div>

        {/* RIGHT COLUMN: NAVY PANEL WITH SUBHEADER, COPY & CTA */}
        <div className="lg:col-span-6 bg-[#0d203c] px-6 sm:px-12 lg:px-16 py-16 lg:py-24 flex flex-col justify-end relative z-10">
          
          {/* COPY BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-6 max-w-lg ml-auto text-left"
          >
            
            {/* SUBHEADER DIRECTLY ABOVE PARAGRAPH */}
            <span className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.25em] text-[#f2d299] block">
              THE GROUND BREAKING CEREMONY
            </span>

            {/* EXACT COPY */}
            <div className="space-y-4 font-[family-name:var(--font-montserrat)] text-xs sm:text-sm text-[#F7F4EE]/80 leading-relaxed font-light">
              <p>
                Swan Facilities has a growing pipeline of confirmed upcoming engagements across East Africa. Each project is carefully planned ahead of commencement — with all phases, activities, and responsibilities documented before day one.
              </p>
              <p>
                Positioned between vision and execution, our ground-breaking projects blend precision planning with community impact — bringing together developers, investors, and residents for a shared milestone that marks the beginning of something exceptional.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="#ground-breaking-details"
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

        {/* ========================================================= */}
        {/* ARTISTIC "TERRENO" TITLE — BODONI MODA FONT + BLUR RISE + PARALLAX */}
        {/* ========================================================= */}
        <div className="absolute top-28 sm:top-32 lg:top-36 left-0 sm:left-2 lg:left-[34%] xl:left-[38%] z-20 pointer-events-none">
          <motion.h2
            initial={{ opacity: 0, y: 70, filter: "blur(16px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ y: textY }}
            className="font-[family-name:var(--font-artistic)] text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] font-normal italic uppercase text-[#F7F4EE] tracking-tight leading-none whitespace-nowrap drop-shadow-2xl"
          >
            Terreno
          </motion.h2>
        </div>

      </div>
    </section>
  );
}