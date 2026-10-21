import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { SectionTitle } from "../components/SectionTitle";
import { DeitySection } from "../components/DeitySection";
import {
  ShieldCheck,
  Headphones,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Package,
  Wrench,
  Bike,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { business } from "../config/business";
import { sendWhatsApp, getGeneralEnquiryMessage } from "../utils/whatsapp";

export const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <SEO
        title="About Us | Venkata Shiva Shakti Auto Mobiles - Vizianagaram Bike Spare Parts"
        description="Learn about Venkata Shiva Shakti Auto Mobiles in Vizianagaram. Your trusted local destination for genuine motorcycle spare parts, components, and customer care."
        canonicalUrl="https://www.venkatashivashakti.in/about"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.venkatashivashakti.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://www.venkatashivashakti.in/about"
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://www.venkatashivashakti.in/about#webpage",
            "url": "https://www.venkatashivashakti.in/about",
            "name": "About Venkata Shiva Shakti Auto Mobiles",
            "description": "Learn about Venkata Shiva Shakti Auto Mobiles in Vizianagaram, offering trusted motorcycle spare parts, daily maintenance components, and dependable customer service."
          }
        ]}
      />
      {/* 1. About Hero */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1800&q=80"
            alt="Motorcycle workshop background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/90 to-[#172554]/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#172554] border border-[#F59E0B]/40 text-[#F59E0B] text-xs font-semibold mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>Local Automotive Heritage</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About {business.name}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your trusted local destination for quality two-wheeler spare parts, daily maintenance components, and dependable customer service.
          </p>
        </div>
      </section>

      {/* Devotional Values Ribbon */}
      <DeitySection />

      {/* 2. Our Story Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#172554]/10 text-[#172554] border border-[#172554]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
                Our Heritage &amp; Commitment
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] tracking-tight">
                Serving Two-Wheeler Riders with Quality and Integrity
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                <strong className="text-[#172554]">Venkata Shiva Shakti Auto Mobiles</strong> is a local destination for bike spare parts and accessories, focused on providing quality products and helping customers find the right parts for their two-wheelers.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded with reverence and commitment to fair service, we aim to bridge the gap for riders and local mechanics who need immediate, trustworthy verification of spare parts. Whether you ride a daily commuter motorcycle, a family scooter, or a performance machine, we work to make sure you get components that keep you riding safely.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">Clear parts verification before purchase</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">Quick WhatsApp quote &amp; stock check</span>
                </div>
              </div>
            </div>

            {/* Story Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80"
                  alt="Precision motorcycle parts and engineering"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] block">
                    Quality First
                  </span>
                  <h4 className="text-base font-bold mt-0.5">Tested Replacement Components</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Provide Section */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Inventory & Capabilities"
            title="What We Provide"
            subtitle="A comprehensive selection of two-wheeler components covering routine maintenance and essential repairs."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#172554] text-[#F59E0B] flex items-center justify-center mb-5">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#172554] mb-2">
                Engine &amp; Transmission Spares
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Chain and sprocket kits, clutch plates, air filters, gaskets, spark plugs, and high-performance synthetic 4T engine oils.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#172554] text-[#B91C1C] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#172554] mb-2">
                Braking &amp; Suspension
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Front and rear brake shoes, disc brake pads, brake cables, hydraulic fluid, front fork seals, and shock absorber accessories.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#172554] text-[#25D366] flex items-center justify-center mb-5">
                <Bike className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#172554] mb-2">
                Electricals &amp; Accessories
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Maintenance-free 12V batteries, ultra-bright LED headlight bulbs, indicator assemblies, horns, rearview mirrors, and bike covers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Customers Choose Us Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Our Advantage"
            title="Why Customers Choose Us"
            subtitle="Practical reasons riders and mechanics rely on Venkata Shiva Shakti Auto Mobiles."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="w-10 h-10 rounded-lg bg-[#172554] text-[#F59E0B] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#172554] mb-1.5">Quality Products</h4>
              <p className="text-xs sm:text-sm text-slate-600">Reliable spare parts and accessories for two-wheelers.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="w-10 h-10 rounded-lg bg-[#172554] text-[#F59E0B] flex items-center justify-center mb-4">
                <Headphones className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#172554] mb-1.5">Trusted Service</h4>
              <p className="text-xs sm:text-sm text-slate-600">Helpful support for customers looking for the right parts.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="w-10 h-10 rounded-lg bg-[#172554] text-[#25D366] flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <h4 className="text-base font-bold text-[#172554] mb-1.5">Customer Focus</h4>
              <p className="text-xs sm:text-sm text-slate-600">Simple communication and easy enquiry through WhatsApp.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="w-10 h-10 rounded-lg bg-[#172554] text-[#B91C1C] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#172554] mb-1.5">Local Support</h4>
              <p className="text-xs sm:text-sm text-slate-600">Direct contact with the shop for product availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-14 sm:py-18 bg-[#172554] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Need Advice or Looking for a Specific Part?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Contact us today on WhatsApp or visit our shop. We are happy to assist you in getting your bike running smoothly.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => sendWhatsApp(getGeneralEnquiryMessage())}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-98 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask on WhatsApp</span>
            </button>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-800 hover:bg-slate-700 active:scale-98 transition-all border border-slate-700"
            >
              <span>Browse Catalog</span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
