import React from "react";
import { SEO } from "../components/SEO";
import { SectionTitle } from "../components/SectionTitle";
import { ProductGrid } from "../components/ProductGrid";
import { products } from "../data/products";
import { MessageCircle, HelpCircle, PhoneCall, ShieldCheck } from "lucide-react";
import { business } from "../config/business";
import { sendWhatsApp, getGeneralEnquiryMessage } from "../utils/whatsapp";

export const Products: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <SEO
        title="Two Wheeler Spare Parts & Motorcycle Accessories in Vizianagaram | Products"
        description="Explore motorcycle spare parts & scooter spares in Vizianagaram: brake shoes, disc pads, chain & sprocket sets, spark plugs, clutch plates, bearings & electrical switches."
        canonicalUrl="https://www.venkatashivashakti.in/products"
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
                "name": "Products",
                "item": "https://www.venkatashivashakti.in/products"
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://www.venkatashivashakti.in/products#webpage",
            "url": "https://www.venkatashivashakti.in/products",
            "name": "Two Wheeler Spare Parts & Motorcycle Accessories Catalog",
            "description": "Comprehensive catalog of motorcycle and scooter spare parts available at Venkata Shiva Shakti Auto Mobiles in Vizianagaram."
          }
        ]}
      />
      {/* Page Header */}
      <section className="bg-[#172554] text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1800&q=80"
            alt="Spare parts background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30 mb-3">
            Two-Wheeler Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Products
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Find the right spare parts and accessories for your bike. Filter by category or search by part name.
          </p>
        </div>
      </section>

      {/* Main Catalog & Grid Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid products={products} showFilters={true} />

          {/* Not Finding What You Need Banner */}
          <div className="mt-16 bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  <span>Looking for an unlisted part or rare model?</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172554]">
                  Can't find the exact spare part you need?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                  We stock thousands of parts in our physical shop. Send us your bike model, year, and a photo of your old part via WhatsApp, and our team will verify availability.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
                <button
                  id="products-whatsapp-inquiry-btn"
                  onClick={() => sendWhatsApp(getGeneralEnquiryMessage())}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-98 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Ask on WhatsApp</span>
                </button>
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#172554] bg-slate-100 hover:bg-slate-200 active:scale-98 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#B91C1C]" />
                  <span>Call {business.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
