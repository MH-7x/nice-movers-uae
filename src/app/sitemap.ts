// app/sitemap.ts
import { APP } from "@/lib/App";
import type { MetadataRoute } from "next";

// Update the date of a page here whenever its content meaningfully changes.
const LAST_MODIFIED = {
  home: "2026-05-10",
  aboutUs: "2026-05-10",
  contactUs: "2026-05-10",
  houseShifting: "2026-05-10",
  villaMovers: "2026-05-10",
  officeMovers: "2026-05-10",
  blogs: "2026-05-10",
  sharjah: "2026-05-10",
  ajman: "2026-05-10",
  dubai: "2026-05-10",
  dubaiArabic: "2026-05-10",
  rasAlKhaimah: "2026-05-10",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${APP.url}`,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [`${APP.url}/contact-us.jpg`],
    },
    {
      url: `${APP.url}/about-us`,
      lastModified: LAST_MODIFIED.aboutUs,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [`${APP.url}/Transportation.jpg`],
    },
    {
      url: `${APP.url}/contact-us`,
      lastModified: LAST_MODIFIED.contactUs,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${APP.url}/nice-movers-team-work.png`],
    },
    {
      url: `${APP.url}/house-shifting-services`,
      lastModified: LAST_MODIFIED.houseShifting,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${APP.url}/house-shifting.png`],
    },
    {
      url: `${APP.url}/villa-movers-in-dubai`,
      lastModified: LAST_MODIFIED.villaMovers,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${APP.url}/villa-movers-in-dubai.jpg`],
    },
    {
      url: `${APP.url}/office-movers-in-dubai`,
      lastModified: LAST_MODIFIED.officeMovers,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${APP.url}/office-movers-in-dubai.jpg`],
    },
    {
      url: `${APP.url}/blogs`,
      lastModified: LAST_MODIFIED.blogs,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${APP.url}/blog-img.jpg`],
    },
    {
      url: `${APP.url}/movers-and-packers-sharjah`,
      lastModified: LAST_MODIFIED.sharjah,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${APP.url}/sharjah/moving-truck-sharjah-3.jpg`],
    },
    {
      url: `${APP.url}/movers-in-ajman`,
      lastModified: LAST_MODIFIED.ajman,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${APP.url}/professional-movers-in-ajman-nice-movers-uae.jpg`],
    },
    {
      url: `${APP.url}/movers-and-packers-in-dubai`,
      lastModified: LAST_MODIFIED.dubai,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${APP.url}/dubai/nice-movers-and-packers-in-dubai.jpg`],
    },
    {
      url: encodeURI(`${APP.url}/نقل-الاثاث-دبي`),
      lastModified: LAST_MODIFIED.dubaiArabic,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${APP.url}/dubai/nice-movers-and-packers-in-dubai.jpg`],
    },
    {
      url: `${APP.url}/movers-in-ras-al-khaimah`,
      lastModified: LAST_MODIFIED.rasAlKhaimah,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${APP.url}/nice-movers-ras-al-khaimah-professional-moving-company.jpg`,
      ],
    },
  ];
}
