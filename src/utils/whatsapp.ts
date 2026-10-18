import { business } from "../config/business";

/**
 * Opens WhatsApp with a pre-filled, URI-encoded message to the shop's number.
 */
export const sendWhatsApp = (message: string): void => {
  const phone = business.whatsapp;
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

/**
 * Pre-filled message for specific product enquiry as specified in requirements:
 * Hello Venkata Shiva Shakti Auto Mobiles,
 * 
 * I am interested in:
 * 
 * Product: [Name]
 * 
 * Please let me know the price and availability.
 */
export const getProductWhatsAppMessage = (productName: string): string => {
  return `Hello Venkata Shiva Shakti Auto Mobiles,\n\nI am interested in:\n\nProduct: ${productName}\n\nPlease let me know the price and availability.`;
};

/**
 * Pre-filled general enquiry message for floating button and general CTAs:
 * Hello Venkata Shiva Shakti Auto Mobiles,
 * 
 * I would like to enquire about bike spare parts.
 */
export const getGeneralEnquiryMessage = (): string => {
  return `Hello Venkata Shiva Shakti Auto Mobiles,\n\nI would like to enquire about bike spare parts.`;
};

/**
 * Message generator for custom part & bike model enquiries
 */
export const getCustomPartEnquiryMessage = (partName: string, bikeModel?: string): string => {
  const modelInfo = bikeModel ? `\nBike Model / Make: ${bikeModel}` : "";
  return `Hello Venkata Shiva Shakti Auto Mobiles,\n\nI am looking for a spare part:${modelInfo}\nPart Needed: ${partName}\n\nPlease let me know if this is available in your shop.`;
};
