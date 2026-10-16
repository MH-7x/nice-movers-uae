// Shared by the two root layouts: (en)/layout.tsx and (arabic)/layout.tsx.
// Separate root layouts let the Arabic page declare <html lang="ar" dir="rtl">
// without changing any URL (route groups don't affect paths).
import type { Metadata } from "next";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { FixedBtns } from "@/components/main/FixedBtns";
import localfont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import PopUp from "@/components/PopUp";
import GTM from "@/components/GTM";

export const rootMetadata: Metadata = {
  metadataBase: new URL(process.env.APP_URI || "https://nicemoversuae.com"),
  applicationName: "Nice Movers",
  robots: {
    "max-image-preview": "large",
    follow: true,
    googleBot: {
      notranslate: true,
      "max-image-preview": "large",
      index: true,
      follow: true,
    },
    index: true,
    notranslate: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-32x32.png",
  },
};

const GoogleSans = localfont({
  src: [
    {
      path: "./GoogleSans-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "./GoogleSans-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "./GoogleSans-Bold.woff2",
      style: "normal",
      weight: "700",
    },
  ],
  fallback: [
    "sans-serif",
    "system-ui",
    "ui-sans-serif",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
  ],
  variable: "--font-google-sans",
  display: "swap",
  preload: true,
});

/** The <body> shared by every page. Site chrome (header, footer, buttons, popup) is English and stays LTR. */
export function SiteBody({
  children,
  rtl = false,
}: {
  children: React.ReactNode;
  rtl?: boolean;
}) {
  const chromeDir = rtl ? { dir: "ltr", lang: "en" } : {};
  return (
    <body className={`antialiased ${GoogleSans.className} `}>
      <GTM />
      <div {...chromeDir}>
        <FixedBtns />
      </div>
      <div className="fixed top-0 left-0 w-full gray-grd z-[-1] h-screen"></div>
      <div {...chromeDir}>
        <Navbar />
      </div>
      {children}
      <div {...chromeDir}>
        <Footer />
        <PopUp />
      </div>
      <Toaster position="top-center" />
    </body>
  );
}
