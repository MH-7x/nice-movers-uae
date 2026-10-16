// lib/generateServiceSchemaWithBreadcrumbs.ts

import { cities } from "../../List";
import { APP } from "./App";

export const ORGANIZATION_ID = `${APP.url}/#organization`;

type MovingServiceSchemaParams = {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  /** Legacy "499 AED - 5000 AED" string; converted to an AggregateOffer. */
  priceRange?: string;
  price?: { low: number; high: number };
  imageUrls?: string[];
  /** Places served; defaults to the shared `cities` list. */
  areaServed?: string[];
  inLanguage?: string;
};

const parsePriceRange = (range: string) => {
  const nums = range.replace(/,/g, "").match(/\d+(\.\d+)?/g);
  if (!nums || nums.length < 2) return undefined;
  return { low: Number(nums[0]), high: Number(nums[1]) };
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
    areaServed = cities,
    inLanguage,
  } = params;
  const price = params.price ?? (priceRange ? parsePriceRange(priceRange) : undefined);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "serviceType": "Moving & Packing Services",
    "provider": {
      "@type": "MovingCompany",
      "@id": ORGANIZATION_ID,
      "name": APP.name,
      "url": APP.url,
      "telephone": APP.phone,
      "logo": `${APP.url}/Picture1.png`,
    },
    "areaServed": areaServed.map((city) => ({
      "@type": "Place",
      "name": city,
    })),
    "url": serviceUrl,
    ...(inLanguage && { inLanguage }),
    ...(price && {
      offers: {
        "@type": "AggregateOffer",
        "priceCurrency": "AED",
        "lowPrice": price.low,
        "highPrice": price.high,
      },
    }),
    ...(imageUrls.length > 0 && { image: imageUrls }),
  };

  return JSON.stringify(serviceSchema, null, 2);
};

/** Breadcrumb for a single page: Home > {name}. */
export const breadcrumbFor = (name: string, path: string) =>
  JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": APP.url },
        {
          "@type": "ListItem",
          "position": 2,
          "name": name,
          "item": `${APP.url}${path}`,
        },
      ],
    },
    null,
    2
  );
