import React from "react";
import { Sparkles, Cog } from "lucide-react";

export const Marquee: React.FC = () => {
  const marqueeItems = [
    "BEST BIKE SPARES",
    "QUALITY PARTS",
    "TRUSTED SERVICE",
    "GENUINE PRODUCTS",
    "BIKE ACCESSORIES",
    "RELIABLE SUPPORT",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#172554] border-y-2 border-[#F59E0B] py-3.5 shadow-inner">
      {/* Decorative gradient masks for smooth edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#172554] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#172554] to-transparent z-10" />

      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* First set of items */}
        <div className="flex items-center space-x-6 sm:space-x-10 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase pr-6 sm:pr-10">
          {marqueeItems.map((item, index) => (
            <div key={`item-1-${index}`} className="flex items-center space-x-6 sm:space-x-10">
              <span className="hover:text-[#F59E0B] transition-colors flex items-center gap-2">
                {item === "BEST BIKE SPARES" ? (
                  <Cog className="w-4 h-4 text-[#F59E0B] animate-spin" style={{ animationDuration: "6s" }} />
                ) : (
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                )}
                <span>{item}</span>
              </span>
              <span className="text-[#B91C1C] text-base font-black">•</span>
            </div>
          ))}
        </div>

        {/* Duplicate set of items to ensure seamless infinite loop without jump */}
        <div className="flex items-center space-x-6 sm:space-x-10 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase pr-6 sm:pr-10" aria-hidden="true">
          {marqueeItems.map((item, index) => (
            <div key={`item-2-${index}`} className="flex items-center space-x-6 sm:space-x-10">
              <span className="hover:text-[#F59E0B] transition-colors flex items-center gap-2">
                {item === "BEST BIKE SPARES" ? (
                  <Cog className="w-4 h-4 text-[#F59E0B] animate-spin" style={{ animationDuration: "6s" }} />
                ) : (
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                )}
                <span>{item}</span>
              </span>
              <span className="text-[#B91C1C] text-base font-black">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
