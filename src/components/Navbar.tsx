import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall, MessageCircle } from "lucide-react";
import { business } from "../config/business";
import { sendWhatsApp, getGeneralEnquiryMessage } from "../utils/whatsapp";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top micro bar for phone / hours on desktop */}
      <div className="bg-[#0F172A] text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[#F59E0B] font-medium">Auto Mobiles & Bike Spare Parts Destination</span>
            <span className="text-slate-500">|</span>
            <span>{business.hours}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Call: {business.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3"
            : "bg-white border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to="/"
              id="nav-logo"
              className="group flex items-center gap-2.5 sm:gap-3 focus:outline-hidden"
              aria-label="Venkata Shiva Shakti Auto Mobiles Home"
            >
              <img
                src="/assets/logo.jpeg"
                alt="Venkata Shiva Shakti Auto Mobiles"
                className="h-14 w-28 sm:h-16 sm:w-32 object-contain transition-transform group-hover:scale-[1.02]"
              />
              <span className="hidden min-[400px]:flex flex-col border-l border-slate-200 pl-2.5 sm:pl-3">
                <span className="text-sm sm:text-base font-extrabold tracking-tight leading-tight transition-colors">
                  <span className="text-[#0F172A]">VENKATA </span>
                  <span className="text-[#D89B32]">SHIVA </span>
                  <span className="text-[#0F172A]">SHAKTI</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#D89B32] uppercase">
                  AUTO MOBILES
                </span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    id={`nav-link-${link.name.toLowerCase()}`}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                      isActive
                        ? "text-[#172554] bg-slate-100 font-bold"
                        : "text-slate-600 hover:text-[#172554] hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#B91C1C] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop WhatsApp CTA Button */}
            <div className="hidden lg:flex items-center">
              <button
                id="nav-whatsapp-cta"
                onClick={() => sendWhatsApp(getGeneralEnquiryMessage())}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => sendWhatsApp(getGeneralEnquiryMessage())}
                className="p-2 rounded-lg text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 transition-all sm:hidden"
                aria-label="WhatsApp quick chat"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </button>
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-[#172554] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#172554]"
                aria-expanded={isOpen}
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-[#172554] text-white"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#172554]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                id="mobile-whatsapp-cta"
                onClick={() => {
                  setIsOpen(false);
                  sendWhatsApp(getGeneralEnquiryMessage());
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-98 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us Directly</span>
              </button>
              <a
                href={`tel:${business.phone}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-[#172554] bg-slate-100 hover:bg-slate-200 active:scale-98 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#B91C1C]" />
                <span>Call Shop: {business.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
