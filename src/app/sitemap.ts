// app/sitemap.ts
import { APP } from "@/lib/App";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${APP.url}`,
      lastModified: "2026-05-10",
      changeFrequency: "weekly",
      priority: 1.0,
      images: [`${APP.url}/contact-us.jpg`],
    },
    {
      url: `${APP.url}/about-us`,
      lastModified: "2026-05-10",
      changeFrequency: "monthly",
      priority: 0.7,
      images: [`${APP.url}/Transportation.jpg`],
    },
    {
      url: `${APP.url}/contact-us`,
      lastModified: "2026-05-10",
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${APP.url}/nice-movers-team-work.jpg`],
    },
    {
      url: `${APP.url}/house-shifting-services`,
      lastModified: "2026-05-10",
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${APP.url}/house-shifting.png`],
    },
    {
      url: `${APP.url}/villa-movers-in-dubai`,
      lastModified: "2026-05-10",
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${APP.url}/villa-movers-in-dubai.jpg`],
    },
    {
      url: `${APP.url}/office-movers-in-dubai`,
      lastModified: "2026-05-10",
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${APP.url}/office-movers-in-dubai.jpg`],
    },
    {
      url: `${APP.url}/blogs`,
      lastModified: "2026-05-10",
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${APP.url}/office-movers-in-dubai.jpg`],
    },
    {
      url: `${APP.url}/movers-and-packers-sharjah`,
      lastModified: "2026-05-10",
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${APP.url}/sharjah/moving-truck-sharjah-3.jpg`],
    },
    {
      url: `${APP.url}/movers-in-ajman`,
      lastModified: "2026-05-10",
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`/professional-movers-in-ajman-nice-movers-uae.jpg`],
    },
    {
      url: `${APP.url}/movers-and-packers-in-dubai`,
      lastModified: "2026-05-10",
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`/dubai/nice-movers-and-packers-in-dubai.jpg`],
    },
    {
      url: `${APP.url}/movers-in-ras-al-khaimah`,
      lastModified: "2026-05-10",
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`/nice-movers-ras-al-khaimah-professional-moving-company.jpg`],
    },
  ];
}
