import Image from "next/image";

const services = [
  {
    title: "Facilities Management",
    description:
      "We uphold facility standards, creating thriving spaces where clients prosper.",
    icon: (
      <svg
        className="w-5 h-5 text-[#f2d299]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Consultancy",
    description:
      "We provide informed insights and expert advice to investors, helping them make sound property investment decisions that drive growth and maximise returns.",
    icon: (
      <svg
        className="w-5 h-5 text-[#f2d299]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Property Management",
    description:
      "We alleviate the stress of day-to-day tasks for property owners by handling everything from tenant management and maintenance to letting and compliance.",
    icon: (
      <svg
        className="w-5 h-5 text-[#f2d299]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Sales and Letting",
    description:
      "We support clients in income generation by offering strategic resale and letting solutions.",
    icon: (
      <svg
        className="w-5 h-5 text-[#f2d299]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-20 bg-[#0d203c] text-[#F7F4EE] py-14 md:py-20 px-6 md:px-12 lg:px-16 overflow-hidden border-t border-white/10"
    >
      {/* BACKGROUND IMAGE WITH HIGH VISIBILITY GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner2.jpg"
          alt="SWAN Facilities background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Softened navy gradient overlay allowing banner2.jpg to shine through clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d203c]/75 via-[#0d203c]/40 to-[#0d203c]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* COMPACT HEADER BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pb-8 border-b border-white/15">
          <div className="lg:col-span-5 space-y-1">
            <span className="font-[family-name:var(--font-manrope)] text-xs font-semibold uppercase tracking-[0.25em] text-[#f2d299]">
              Our Services
            </span>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl md:text-4xl font-normal text-[#F7F4EE] leading-[1.1] tracking-tight">
              People <span className="text-[#f2d299] font-light">|</span> Technology
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="font-[family-name:var(--font-manrope)] text-sm sm:text-base text-[#F7F4EE]/90 leading-relaxed font-light">
              At our facilities, we offer a full range of services designed to support the complete lifecycle of property ownership and management — ensuring reliable operations, strategic insight, and responsive support to properties that consistently grow in value.
            </p>
          </div>
        </div>

        {/* COMPACT 4-COLUMN HORIZONTAL GRID */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-5 bg-[#0d203c]/60 backdrop-blur-md border border-white/15 hover:border-[#f2d299]/80 hover:bg-[#0d203c]/75 transition-all duration-300 rounded-2xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Row: Icon + Title */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#f2d299]/10 border border-[#f2d299]/30 shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-lg sm:text-xl font-semibold text-[#F7F4EE] group-hover:text-[#f2d299] transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="font-[family-name:var(--font-manrope)] text-xs sm:text-sm text-[#F7F4EE]/80 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}