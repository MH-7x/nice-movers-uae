import type { Metadata } from "next";
import "../globals.css";
import { rootMetadata, SiteBody } from "../site-shell";

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SiteBody>{children}</SiteBody>
    </html>
  );
}
