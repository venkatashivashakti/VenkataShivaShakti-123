import React, { useState } from "react";
import { MessageCircle, Wrench, Check } from "lucide-react";
import { Product } from "../data/products";
import { sendWhatsApp, getProductWhatsAppMessage } from "../utils/whatsapp";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imgError, setImgError] = useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const msg = getProductWhatsAppMessage(product.name);
    sendWhatsApp(msg);
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/50"
    >
      {/* Product Image Container */}
      <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-4 text-center">
            <Wrench className="w-10 h-10 mb-2 text-slate-300 group-hover:text-[#F59E0B] transition-colors" />
            <span className="text-xs font-medium text-slate-500">{product.name}</span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase bg-[#172554]/90 backdrop-blur-xs text-white shadow-xs">
            {product.category}
          </span>
        </div>

        {/* Compatibility Pill if available */}
        {product.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-tight bg-[#F59E0B] text-[#172554] shadow-xs">
              ★ Popular
            </span>
          </div>
        )}
      </div>

      {/* Product Content Body */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#172554] group-hover:text-[#B91C1C] transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Bike Compatibility Note */}
          {product.bikeCompatibility && (
            <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-slate-500 flex items-start gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
              <span className="line-clamp-1">
                <strong className="text-slate-700">Fits:</strong> {product.bikeCompatibility}
              </span>
            </div>
          )}
        </div>

        {/* WhatsApp Enquiry Button */}
        <div className="mt-5 pt-3">
          <button
            onClick={handleWhatsAppClick}
            id={`ask-wa-btn-${product.id}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-98 shadow-xs hover:shadow-md transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
