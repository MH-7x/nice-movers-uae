// lib/generateServiceSchemaWithBreadcrumbs.ts

import { breadcrumbs, cities } from "../../List";
import { APP } from "./App";

type MovingServiceSchemaParams = {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  priceRange?: string;
  imageUrls?: string[];
};

export const generateServiceSchema = (
  params: MovingServiceSchemaParams
) => {
  const {
    serviceName,
    serviceDescription,
    serviceUrl,
    priceRange,
    imageUrls = [],
  } = params;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "serviceType": "Moving & Packing Services",
    "provider": {
      "@type": "Organization",
      "name": APP.name,
      "url": APP.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${APP.url}/Picture1.png`,
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": APP.phone,
        "contactType": "Customer Service",
      },
    },
    "areaServed": cities.map((city) => ({
      "@type": "Place",
      "name": city,
    })),
    "url": serviceUrl,
    ...(priceRange && { priceRange }),
    ...(imageUrls.length > 0 && { image: imageUrls }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url,
    })),
  };

  return JSON.stringify([serviceSchema, breadcrumbSchema], null, 2);
};
