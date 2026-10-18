import React from "react";
import { Link } from "react-router-dom";
import { Wrench, PhoneCall, MessageCircle, MapPin, Clock } from "lucide-react";
import { business } from "../config/business";
import { sendWhatsApp, getGeneralEnquiryMessage } from "../utils/whatsapp";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Business Info Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#172554] flex items-center justify-center text-[#F59E0B] border border-[#F59E0B]/30 shadow-xs">
                <Wrench className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight block leading-tight">
                  VENKATA SHIVA SHAKTI
                </span>
                <span className="text-xs font-semibold tracking-widest text-[#B91C1C] uppercase block">
                  AUTO MOBILES
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              {business.tagline}. Dedicated to serving riders with authentic replacements, commuter spares, and trusted guidance.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F59E0B] bg-[#172554] px-3 py-1 rounded-md border border-[#F59E0B]/20">
                <span>Shiva</span> • <span>Venkateshwara</span> • <span>Kanaka Durga</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#F59E0B] pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white hover:underline transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white hover:underline transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white hover:underline transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#B91C1C] pl-2.5">
              Spares Categories
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Brake Shoes &amp; Disc Pads</li>
              <li>Chains, Sprockets &amp; Clutches</li>
              <li>Spark Plugs &amp; 12V Batteries</li>
              <li>LED Lights &amp; Electricals</li>
              <li>Cables, Mirrors &amp; Body Parts</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#F59E0B] pl-2.5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-start gap-2.5 text-slate-400 hover:text-white transition-colors group"
                >
                  <PhoneCall className="w-4 h-4 text-[#F59E0B] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-white font-medium">Phone</span>
                    <span>{business.phoneDisplay}</span>
                  </div>
                </a>
              </li>
              <li>
                <button
                  onClick={() => sendWhatsApp(getGeneralEnquiryMessage())}
                  className="flex items-start gap-2.5 text-left text-slate-400 hover:text-[#25D366] transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-white font-medium">WhatsApp</span>
                    <span>Chat Directly for Stock</span>
                  </div>
                </button>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-[#B91C1C] mt-1 shrink-0" />
                <div>
                  <span className="block text-white font-medium">Address</span>
                  <span>{business.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-xs pt-1">
                <Clock className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" />
                <span>{business.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {business.name}. All Rights Reserved.</p>
          <p className="text-slate-400 flex items-center gap-1">
            <span>Built for Two-Wheeler Enthusiasts &amp; Mechanics</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
