import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { sendWhatsApp, getGeneralEnquiryMessage } from "../utils/whatsapp";

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    sendWhatsApp(getGeneralEnquiryMessage());
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      {/* Optional helper tooltip pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#172554] text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl border border-[#F59E0B]/30 animate-in fade-in slide-in-from-right-2 duration-200">
          <span>Need a part? Chat on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Close tooltip"
            className="text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating WhatsApp Button */}
      <button
        id="global-floating-whatsapp-btn"
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Chat with Venkata Shiva Shakti Auto Mobiles on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:bg-[#20ba59] active:scale-95 transition-all duration-300 ring-4 ring-white/80 hover:ring-[#25D366]/30"
      >
        {/* Subtle breathing pulse ring effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 animate-ping -z-10" />

        <MessageCircle className="w-7 h-7 fill-white group-hover:scale-110 transition-transform duration-200" />
      </button>
    </div>
  );
};
