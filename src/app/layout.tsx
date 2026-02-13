import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

/* ── Fonts ── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  title: "MonPro-AI | Smart Systems for Shopify D2C Brands",
  description:
    "MonPro-AI designs AI-driven backend systems for Shopify fashion brands. COD verification, revenue leak detection, operational automation, and decision dashboards.",
  keywords: [
    "Shopify backend automation",
    "COD verification",
    "D2C operations",
    "revenue leak detection",
    "Shopify AI systems",
    "Indian D2C brands",
    "ecommerce backend",
    "MonPro-AI",
    "Paramveer Marwah",
  ],
  authors: [
    {
      name: "Paramveer Marwah",
      url: "https://www.linkedin.com/in/paramveer-marwah/",
    },
  ],
  creator: "MonPro-AI",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://monpro-ai.com",
    siteName: "MonPro-AI",
    title: "MonPro-AI | Smart Systems for Shopify D2C Brands",
    description:
      "SHOPIFY OPERATIONS SYSTEMS for Shopify fashion brands. COD verification, revenue leak detection, and operational automation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonPro-AI | Smart Systems for Shopify D2C Brands",
    description:
      "SHOPIFY OPERATIONS SYSTEMS for Shopify fashion brands. COD verification, revenue leak detection, and operational automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0B0B0B",
};

/* ── Root Layout ── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
