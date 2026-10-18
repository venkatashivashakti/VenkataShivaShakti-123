import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, ShieldCheck, Wrench, CheckCircle2 } from "lucide-react";
import { sendWhatsApp, getGeneralEnquiryMessage } from "../utils/whatsapp";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-white">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=2000&q=80"
          alt="Motorcycle workshop and bike spare parts"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        {/* Subtle automotive gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#172554]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 text-left space-y-6">
            {/* Devotional & Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#172554] border border-[#F59E0B]/40 text-[#F59E0B] text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              <span>Sri Venkata Shiva Shakti • Reliable Two-Wheeler Spares</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Your Trusted Destination for{" "}
              <span className="text-[#F59E0B] relative inline-block">
                Bike Spare Parts
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-[#B91C1C]"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Quality spare parts, accessories and reliable service for your two-wheeler needs.
              Get prompt assistance and stock verification directly over WhatsApp.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/products"
                id="hero-explore-products-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#172554] border border-[#F59E0B]/50 hover:bg-[#1e3a8a] active:scale-98 shadow-md hover:shadow-lg transition-all text-base"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </Link>

              <button
                id="hero-whatsapp-btn"
                onClick={() => sendWhatsApp(getGeneralEnquiryMessage())}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-98 shadow-md hover:shadow-lg transition-all text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Us</span>
              </button>
            </div>

            {/* Trust Highlights under CTA */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Genuine Replacements</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Quick WhatsApp Reply</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Commuter & Sports Spares</span>
              </div>
            </div>
          </div>

          {/* Side Feature Showcase card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#172554]/90 to-[#0F172A] p-6 border border-[#F59E0B]/30 shadow-2xl backdrop-blur-md">
              <div className="absolute -top-3 -right-3 bg-[#B91C1C] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Local Shop
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-[#F59E0B]/40 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">Venkata Shiva Shakti</h3>
                  <p className="text-slate-400 text-xs">Automobile Spares & Care</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white block font-medium">Extensive Two-Wheeler Range</strong>
                    Brake parts, chains, clutch plates, electricals & accessories.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <MessageCircle className="w-4 h-4 text-[#25D366] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white block font-medium">Direct Availability Verification</strong>
                    Send photos of your old part via WhatsApp to confirm stock.
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 text-center">
                <span className="text-[11px] text-[#F59E0B] font-semibold tracking-wider uppercase">
                  Quality • Trust • Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
