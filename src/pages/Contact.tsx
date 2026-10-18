import React, { useState } from "react";
import { PhoneCall, MessageCircle, MapPin, Clock, Send, ShieldCheck, Navigation } from "lucide-react";
import { business } from "../config/business";
import {
  sendWhatsApp,
  getGeneralEnquiryMessage,
  getCustomPartEnquiryMessage,
} from "../utils/whatsapp";

export const Contact: React.FC = () => {
  const [bikeModel, setBikeModel] = useState("");
  const [partName, setPartName] = useState("");
  const [customerName, setCustomerName] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = `Hello ${business.name},`;
    if (customerName.trim()) {
      msg += `\nMy Name: ${customerName.trim()}`;
    }
    if (bikeModel.trim()) {
      msg += `\nBike Model: ${bikeModel.trim()}`;
    }
    if (partName.trim()) {
      msg += `\nSpare Part Needed: ${partName.trim()}`;
    } else {
      msg += `\nI would like to enquire about bike spare parts availability.`;
    }
    msg += `\n\nPlease let me know price and availability. Thank you!`;
    sendWhatsApp(msg);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Contact Header */}
      <section className="bg-[#172554] text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30">
            Direct Assistance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Need a bike spare part? Call us or send us a WhatsApp message.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* 1. Phone Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#172554] text-[#F59E0B] flex items-center justify-center mb-4">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#172554] mb-1">Call Us</h3>
                <p className="text-xs text-slate-500 mb-3">Instant verbal enquiry with our shop assistant</p>
                <div className="text-base font-bold text-[#1E293B] mb-4">
                  {business.phoneDisplay}
                </div>
              </div>

              <a
                href={`tel:${business.phone}`}
                id="contact-call-now-btn"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#172554] hover:bg-[#1e3a8a] active:scale-98 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* 2. WhatsApp Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <h3 className="text-lg font-bold text-[#172554] mb-1">WhatsApp</h3>
                <p className="text-xs text-slate-500 mb-3">Send photos of parts and chat with us directly.</p>
                <div className="text-sm font-semibold text-[#25D366] mb-4">
                  Instant Availability &amp; Price
                </div>
              </div>

              <button
                onClick={() => sendWhatsApp(getGeneralEnquiryMessage())}
                id="contact-whatsapp-us-btn"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </button>
            </div>

            {/* 3. Location Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#172554] text-[#B91C1C] flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#172554] mb-1">Visit Us</h3>
                <p className="text-xs text-slate-500 mb-2">Our physical automobile spare store</p>
                <p className="text-xs text-slate-700 mb-4 leading-relaxed line-clamp-3">
                  {business.address}
                </p>
              </div>

              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-get-directions-btn"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-[#172554] bg-slate-100 hover:bg-slate-200 active:scale-98 transition-all"
              >
                <Navigation className="w-4 h-4 text-[#B91C1C]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* 4. Business Hours Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#172554] text-[#F59E0B] flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#172554] mb-1">Business Hours</h3>
                <p className="text-xs text-slate-500 mb-2">Shop opening &amp; closing timings</p>
                <div className="space-y-1.5 text-xs text-slate-700 mb-4">
                  <div className="font-semibold text-[#172554]">Mon – Sat:</div>
                  <div className="text-slate-600">9:00 AM – 8:30 PM</div>
                  <div className="font-semibold text-[#172554] pt-1">Sunday:</div>
                  <div className="text-slate-600">9:00 AM – 1:30 PM</div>
                </div>
              </div>

              <div className="w-full py-2 px-3 rounded-xl bg-slate-50 text-center border border-slate-200 text-[11px] text-slate-500 font-medium">
                WhatsApp responses available 7 days
              </div>
            </div>
          </div>

          {/* Direct Part Inquiry Box */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-10 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#172554]/10 text-[#172554] mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Direct WhatsApp Enquiry Assistant</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172554]">
                Inquire About a Specific Part
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Fill in your details below. Clicking send will open WhatsApp with your pre-formatted query.
              </p>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#172554]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Bike Make / Model
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hero Splendor Plus / Honda Activa"
                    value={bikeModel}
                    onChange={(e) => setBikeModel(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#172554]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Spare Part Name / Description *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Clutch Wire, Disc Brake Pad, 12V Battery"
                    value={partName}
                    onChange={(e) => setPartName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#172554]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="contact-form-send-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-98 shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-500 pt-1">
                You will be redirected to WhatsApp to send your message directly to {business.name}.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
