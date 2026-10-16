import type { Metadata } from "next";
import "../globals.css";
import { rootMetadata, SiteBody } from "../site-shell";

export const metadata: Metadata = rootMetadata;

export default function ArabicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <SiteBody rtl>{children}</SiteBody>
    </html>
  );
}
