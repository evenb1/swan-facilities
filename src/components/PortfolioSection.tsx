"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const portfolioProjects = [
  {
    number: "01",
    title: "Volaire",
    image: "/Volaire1.jpg",
    link: "#volaire",
  },
  {
    number: "02",
    title: "Escada",
    image: "/Escada.jpg",
    link: "#escada",
  },
  {
    number: "03",
    title: "Altura",
    image: "/Altura-Wide-Angle-Day-1.jpg",
    link: "#altura",
  },
  {
    number: "04",
    title: "Reflections",
    image: "/Reflections-2.webp",
    link: "#reflections",
  },
  {
    number: "05",
    title: "Pavilion — Ethiopia",
    image: "/peponi-ext-7-1.jpg",
    link: "#pavilion",
  },
  {
    number: "06",
    title: "Mzima 719 Springs",
    image: "/719Mzima4-1-2.webp",
    link: "#mzima719",
  },
];

// Stagger animation variants for the gallery grid
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function PortfolioSection() {
  return (
    <section
      data-nav-invert
      id="portfolio"
      className="relative z-20 bg-[#F7F4EE] text-[#0d203c] py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-[#0d203c]/10 overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto">
        
        {/* HEADER BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 md:pb-16 border-b border-[#0d203c]/15"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-[#f2d299]" />
              <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.28em] text-[#b89248]">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-normal text-[#0d203c] leading-[1.05] tracking-tight">
              Facilities We Manage
            </h2>
          </div>

          <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.22em] text-[#0d203c]/60 max-w-xs font-light">
            Curated high-end residential &amp; commercial real estate across the region
          </p>
        </motion.div>

        {/* EDITORIAL GALLERY GRID WITH STAGGERED REVEALS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pt-12 md:pt-16"
        >
          {portfolioProjects.map((project) => (
            <motion.div
              key={project.number}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-[#0d203c]  overflow-hidden shadow-xl flex flex-col justify-between"
            >
              {/* IMAGE FRAME WITH HOVER ZOOM */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} managed by SWAN Facilities`}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* GRADIENT OVERLAYS FOR CONTRAST */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d203c] via-[#0d203c]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />

           

                {/* BOTTOM CONTENT OVERLAY */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 flex flex-col justify-end">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-normal text-[#F7F4EE] group-hover:text-[#f2d299] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* LINK CTA */}
                  <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between">
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-[11px] uppercase tracking-[0.2em] font-semibold text-[#F7F4EE] group-hover:text-[#f2d299] transition-colors"
                    >
                      <span>Book / View Property</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-[#f2d299]">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* TOP ACCENT LINE ON HOVER */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f2d299] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}