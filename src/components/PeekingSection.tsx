"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PeekingSection() {
  const bannerRef = useRef<HTMLDivElement>(null);

  // Parallax motion tracking for the central banner image
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  const bannerY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section 
      data-nav-invert
      className="relative z-10 -mt-6 sm:-mt-8 md:-mt-10 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] md:rounded-t-[4.5rem] bg-[#F7F4EE] text-[#0d203c] pt-16 md:pt-24 pb-24 px-6 md:px-12 lg:px-16 shadow-[0_-25px_60px_rgba(0,0,0,0.35)] border-t border-white/20"
    >
      {/* Subtle top gold accent pill following the curve */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-32 h-[3px] bg-[#f2d299] rounded-full opacity-90" />

      <div className="max-w-[1720px] mx-auto">
        
        {/* SECTION INTRO */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          <div className="lg:col-span-5">
            <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.25em] text-[#0d203c]/60">
              Who We Are
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-normal text-[#0d203c] leading-[1.05] tracking-tight">
              SWAN Facilities
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-6">
            <p className="font-[family-name:var(--font-montserrat)] text-base sm:text-lg text-[#0d203c]/85 leading-relaxed font-light">
              SWAN Facilities is a professional facility management company committed to enhancing how people experience and interact with spaces. We offer a full range of services—including property management, consultancy, sales, and letting—designed to support developers, investors, and tenants.
            </p>

            <div className="mt-6">
              <Link
                href="#services"
                className="group inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.2em] font-semibold text-[#0d203c]"
              >
                <span className="border-b border-[#0d203c]/30 group-hover:border-[#f2d299] transition-colors pb-1">
                  Explore Services
                </span>
                <span className="text-[#f2d299] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* FULL-WIDTH HORIZONTAL BANNER IMAGE WITH PARALLAX */}
        <div ref={bannerRef} className="relative w-full h-[280px] sm:h-[380px] md:h-[460px] my-14 md:my-20 overflow-hidden shadow-xl border-y border-[#0d203c]/10">
          <motion.div
            style={{ y: bannerY }}
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative w-full h-full scale-125"
          >
            <Image
              src="/banner.jpg"
              alt="SWAN Facilities banner"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>

        {/* MISSION / VISION / PURPOSE TRIO WITH STAGGERED MOTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          
          {/* MISSION */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col justify-between pt-6 border-t border-[#f2d299]"
          >
            <div>
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.3em] text-[#0d203c]/50 font-semibold">
                Foundation 01
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold text-[#0d203c]">
                Mission
              </h3>
              <p className="mt-4 font-[family-name:var(--font-montserrat)] text-sm md:text-base text-[#0d203c]/80 leading-relaxed font-light">
                Our mission is to partner with developers and investors to elevate project standards, enhance property appeal, and build lasting client relationships.
              </p>
            </div>
          </motion.div>

          {/* VISION */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col justify-between pt-6 border-t border-[#f2d299]"
          >
            <div>
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.3em] text-[#0d203c]/50 font-semibold">
                Foundation 02
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold text-[#0d203c]">
                Vision
              </h3>
              <p className="mt-4 font-[family-name:var(--font-montserrat)] text-sm md:text-base text-[#0d203c]/80 leading-relaxed font-light">
                We aim to create vibrant communities, maximizing occupancy and property value, with targets of 15% annual occupancy growth, 20% property value increase, and 90% resident satisfaction.
              </p>
            </div>

            {/* Target metrics indicator */}
            <div className="mt-8 pt-4 border-t border-[#0d203c]/10 flex justify-between text-center">
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#0d203c]">15%</span>
                <span className="block font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-wider text-[#0d203c]/60">Occupancy</span>
              </div>
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#0d203c]">20%</span>
                <span className="block font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-wider text-[#0d203c]/60">Valuation</span>
              </div>
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#0d203c]">90%</span>
                <span className="block font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-wider text-[#0d203c]/60">Satisfaction</span>
              </div>
            </div>
          </motion.div>

          {/* PURPOSE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col justify-between pt-6 border-t border-[#f2d299]"
          >
            <div>
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.3em] text-[#0d203c]/50 font-semibold">
                Foundation 03
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold text-[#0d203c]">
                Purpose
              </h3>
              <p className="mt-4 font-[family-name:var(--font-montserrat)] text-sm md:text-base text-[#0d203c]/80 leading-relaxed font-light">
                To enhance the quality of life and operational efficiency for our clients by providing exceptional facility management services that foster safe, sustainable, and innovative environments.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}