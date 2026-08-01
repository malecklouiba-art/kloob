import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const displayFont = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Elvez — Société de sécurité privée dans les Bouches-du-Rhône",
    template: "%s | Elvez Sécurité",
  },
  description:
    "Elvez, société de sécurité privée agréée CNAPS, intervient dans les Bouches-du-Rhône : gardiennage de chantiers BTP, sécurité événementielle et surveillance de sites tertiaires. Astreinte 24h/24.",
  keywords: [
    "sécurité privée Bouches-du-Rhône",
    "agent de sécurité Marseille",
    "gardiennage chantier",
    "sécurité événementielle",
    "société de sécurité CNAPS",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0A0B0D",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-ink-900 font-body text-bone antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
