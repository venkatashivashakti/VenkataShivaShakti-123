import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { DeitySection } from "../components/DeitySection";
import { Marquee } from "../components/Marquee";
import { SectionTitle } from "../components/SectionTitle";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import {
  ShieldCheck,
  Headphones,
  MessageCircle,
  MapPin,
  ArrowRight,
  Bike,
  Sparkles,
  Send,
} from "lucide-react";
import {
  sendWhatsApp,
  getGeneralEnquiryMessage,
  getCustomPartEnquiryMessage,
} from "../utils/whatsapp";

export const Home: React.FC = () => {
  // 6-8 Featured Products for the home page
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

  // State for interactive Quick WhatsApp Enquiry Form in Product CTA
  const [bikeModel, setBikeModel] = useState("");
  const [partNeeded, setPartNeeded] = useState("");

  const handleCustomEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partNeeded.trim()) {
      sendWhatsApp(getGeneralEnquiryMessage());
      return;
    }
    const msg = getCustomPartEnquiryMessage(partNeeded, bikeModel);
    sendWhatsApp(msg);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Devotional Identity Section */}
      <DeitySection />

      {/* 3. Best Bike Spares Marquee */}
      <Marquee />

      {/* 4. Featured Products Section */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Top Replacements"
            title="Featured Products"
            subtitle="Quality parts for your ride. Direct replacement spares for popular Indian motorcycles and scooters."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              id="view-all-products-btn"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-[#172554] bg-white border-2 border-[#172554] hover:bg-[#172554] hover:text-white transition-all shadow-xs hover:shadow-md active:scale-98"
            >
              <span>View All Spare Parts &amp; Accessories</span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Customer Commitment"
            title="Why Choose Us"
            subtitle="Providing riders with dependable automotive solutions, honest advice, and direct convenience."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Feature 1: Quality Products */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#F59E0B] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#172554] text-[#F59E0B] flex items-center justify-center mb-5 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#172554] mb-2">
                Quality Products
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Reliable spare parts and accessories for two-wheelers tested for longevity and precision fit.
              </p>
            </div>

            {/* Feature 2: Trusted Service */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#F59E0B] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#172554] text-[#F59E0B] flex items-center justify-center mb-5 shadow-xs">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#172554] mb-2">
                Trusted Service
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Helpful support for customers looking for the right parts without confusion or delays.
              </p>
            </div>

            {/* Feature 3: Customer Focus */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#F59E0B] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#172554] text-[#25D366] flex items-center justify-center mb-5 shadow-xs">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-lg font-bold text-[#172554] mb-2">
                Customer Focus
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Simple communication and easy enquiry through WhatsApp with instant confirmation.
              </p>
            </div>

            {/* Feature 4: Local Support */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#F59E0B] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#172554] text-[#B91C1C] flex items-center justify-center mb-5 shadow-xs">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#172554] mb-2">
                Local Support
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct contact with the shop for product availability, pick-up coordination, and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. About Preview Section */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Business Image Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/src/images/bikeparts/shop_photo.jpeg"
                  alt="Venkata Shiva Shakti Auto Mobiles workshop and spare parts"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F59E0B] text-[#172554] text-xs font-bold mb-2">
                    <Bike className="w-4 h-4" />
                    <span>Two-Wheeler Spares Hub</span>
                  </div>
                  <h4 className="text-xl font-bold">Reliable Parts. Honest Guidance.</h4>
                  <p className="text-xs text-slate-200 mt-1">Serving commuter riders, enthusiasts, and mechanics alike.</p>
                </div>
              </div>
            </div>

            {/* About Content Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#172554]/10 text-[#172554] border border-[#172554]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
                About Our Shop
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] tracking-tight">
                About Venkata Shiva Shakti Auto Mobiles
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Venkata Shiva Shakti Auto Mobiles is a local destination for bike spare parts and accessories,
                focused on providing quality products and helping customers find the right parts for their two-wheelers.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you need regular maintenance components like brake shoes, spark plugs, and engine oil,
                or specific replacement parts for commuter bikes and scooters, we are here to assist you with quick verification.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  id="about-preview-learn-more-btn"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#172554] hover:bg-[#1e3a8a] active:scale-98 shadow-md transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Product CTA: Looking for a Bike Spare Part? (Section 20) */}
      <section className="py-16 sm:py-20 bg-[#0F172A] text-white relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#172554] rounded-full blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B91C1C] rounded-full blur-3xl opacity-20 -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#172554] border border-[#F59E0B]/40 text-[#F59E0B] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Availability Confirmation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Looking for a Bike Spare Part?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Send us a WhatsApp message and ask about the part you need. We will confirm price and availability right away.
          </p>

          {/* Interactive fast message sender */}
          <form
            onSubmit={handleCustomEnquiry}
            className="mt-6 max-w-2xl mx-auto bg-slate-900/80 p-5 sm:p-6 rounded-2xl border border-slate-700/80 shadow-2xl backdrop-blur-sm text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Bike Model / Make (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hero Splendor, Activa 6G, Pulsar 150"
                  value={bikeModel}
                  onChange={(e) => setBikeModel(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Spare Part Needed *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Brake Shoe, Chain Set, Spark Plug"
                  value={partNeeded}
                  onChange={(e) => setPartNeeded(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-xs text-slate-400">
                Opens directly in WhatsApp with your details.
              </span>
              <button
                type="submit"
                id="custom-enquiry-wa-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-98 shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
