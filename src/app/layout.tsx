import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { FixedBtns } from "@/components/main/FixedBtns";
import localfont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${GoogleSans.className} `}>
        <FixedBtns />
        <div className="fixed top-0 left-0 w-full gray-grd z-[-1] h-screen"></div>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
