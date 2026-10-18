import React, { useState } from "react";

interface DeityItem {
  name: string;
  subname: string;
  imagePath: string;
  alt: string;
  svgIcon: React.ReactNode;
}

export const DeitySection: React.FC = () => {
  // Track image load errors to fallback to custom sacred vector emblems cleanly
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (name: string) => {
    setImageErrors((prev) => ({ ...prev, [name]: true }));
  };

  const deities: DeityItem[] = [
    {
      name: "Lord Shiva",
      subname: "Strength & Auspiciousness",
      imagePath: "/images/gods/shiva.webp",
      alt: "Lord Shiva - Divine representation for auspiciousness and strength",
      svgIcon: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 text-[#F59E0B]" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Trishul (Trident) and Crescent Moon */}
          <path d="M32 10V54M22 18C22 28 32 32 32 32M42 18C42 28 32 32 32 32" strokeLinecap="round" />
          <path d="M26 38C29 36 35 36 38 38" strokeLinecap="round" />
          <path d="M38 14C43 17 44 24 40 28" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Lord Venkateshwara",
      subname: "Prosperity & Protection",
      imagePath: "/images/gods/venkateshwara.webp",
      alt: "Lord Venkateshwara - Sacred symbol of divine grace and prosperity",
      svgIcon: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 text-[#F59E0B]" fill="none">
          {/* Tirupati Balaji Namam symbol */}
          <rect x="20" y="16" width="6" height="28" rx="3" fill="#FFFFFF" />
          <rect x="38" y="16" width="6" height="28" rx="3" fill="#FFFFFF" />
          <path d="M20 40C20 48 44 48 44 40" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Center Red Tilak */}
          <rect x="29" y="20" width="6" height="26" rx="3" fill="#B91C1C" />
          <polygon points="32,12 28,18 36,18" fill="#B91C1C" />
        </svg>
      ),
    },
    {
      name: "Kanaka Durga Matha",
      subname: "Shakti, Courage & Blessings",
      imagePath: "/images/gods/kanakadurga.webp",
      alt: "Kanaka Durga Matha - Sacred emblem of supreme Shakti and protection",
      svgIcon: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 text-[#F59E0B]" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Divine Lotus & Shakti Crown aura */}
          <circle cx="32" cy="32" r="22" strokeDasharray="3 3" strokeWidth="1.5" />
          <path d="M32 14L34 22H30L32 14Z" fill="#F59E0B" />
          <path d="M32 20C26 28 22 36 24 44C29 44 32 38 32 38C32 38 35 44 40 44C42 36 38 28 32 20Z" fill="#B91C1C" fillOpacity="0.4" />
          <circle cx="32" cy="30" r="3" fill="#F59E0B" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-10 sm:py-14 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Deities Trio */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12">
          {deities.map((deity) => {
            const hasError = imageErrors[deity.name];
            return (
              <div
                key={deity.name}
                className="group flex flex-col items-center transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Circular framed container */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#B91C1C] via-[#F59E0B] to-[#172554] shadow-md group-hover:shadow-lg transition-shadow">
                  <div className="w-full h-full rounded-full bg-[#172554] overflow-hidden flex items-center justify-center border-2 border-white">
                    {!hasError ? (
                      <img
                        src={deity.imagePath}
                        alt={deity.alt}
                        loading="lazy"
                        onError={() => handleImageError(deity.name)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center p-2">
                        {deity.svgIcon}
                      </div>
                    )}
                  </div>
                  {/* Small gold sparkle accent dot */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-[#172554] text-[9px] font-bold px-2 py-0.5 rounded-full shadow-xs uppercase tracking-tighter whitespace-nowrap">
                    Blessed
                  </div>
                </div>

                <span className="mt-3 text-sm sm:text-base font-bold text-[#172554] group-hover:text-[#B91C1C] transition-colors">
                  {deity.name}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {deity.subname}
                </span>
              </div>
            );
          })}
        </div>

        {/* Central Devotional Brand Badge */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#B91C1C] font-semibold">
            Founded with Devotion &amp; Integrity
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#172554] tracking-tight mt-1">
            VENKATA SHIVA SHAKTI AUTO MOBILES
          </h2>
          <div className="mt-2.5 inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-[#F59E0B] tracking-wider uppercase bg-[#172554] px-4 py-1.5 rounded-full shadow-xs">
            <span>QUALITY</span>
            <span className="text-[#B91C1C]">•</span>
            <span>TRUST</span>
            <span className="text-[#B91C1C]">•</span>
            <span>SERVICE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
