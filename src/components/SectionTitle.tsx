import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  badge,
  centered = true,
  light = false,
}) => {
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? "text-center" : "text-left"}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
          light 
            ? "bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30" 
            : "bg-[#172554]/10 text-[#172554] border border-[#172554]/15"
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
          {badge}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight ${
          light ? "text-white" : "text-[#172554]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600"
          } ${!centered ? "mx-0" : ""}`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex items-center gap-1.5 ${centered ? "justify-center" : "justify-start"}`}>
        <span className="w-8 h-0.5 bg-[#B91C1C] rounded-full" />
        <span className="w-2.5 h-2.5 bg-[#F59E0B] rotate-45 rounded-xs inline-block" />
        <span className="w-8 h-0.5 bg-[#172554] rounded-full" />
      </div>
    </div>
  );
};
