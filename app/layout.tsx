import type { Metadata } from "next";
import "./globals.css";
import { personal } from "@/data";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: personal.name,
  description: personal.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
      <Analytics />
    </html>
  );
}
