import React, { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  ogImage = "https://www.venkatashivashakti.in/og-image.jpg",
  jsonLd,
}) => {
  useEffect(() => {
    // 1. Document Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to update or create link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // 2. Primary Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag(
      "name",
      "robots",
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    );
    setMetaTag("name", "googlebot", "index, follow");

    // 3. Canonical URL
    setLinkTag("canonical", canonicalUrl);

    // 4. Open Graph Meta Tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", "Venkata Shiva Shakti Auto Mobiles");
    setMetaTag("property", "og:locale", "en_IN");
    setMetaTag("property", "og:image", ogImage);

    // 5. Twitter Card Meta Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // 6. Dynamic JSON-LD Structured Data
    const scriptId = "dynamic-route-schema";
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = scriptId;
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }
  }, [title, description, canonicalUrl, ogType, ogImage, jsonLd]);

  return null;
};
