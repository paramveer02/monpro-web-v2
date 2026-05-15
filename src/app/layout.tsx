import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

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

export const metadata: Metadata = {
  title: "MonPro-AI — Paramvir Marwah | AI Automation for Founder-Led Teams",
  description:
    "Independent AI automation consultancy. Currently in discovery phase, talking to founders of small agencies and Shopify merchants to understand where AI actually helps. Run by Paramvir Marwah, developer based in Leipzig.",
  keywords: [
    "AI automation",
    "n8n workflows",
    "Shopify integrations",
    "founder-led agency",
    "workflow automation",
    "WhatsApp business",
    "MonPro-AI",
    "Paramvir Marwah",
    "Leipzig",
  ],
  authors: [
    {
      name: "Paramvir Marwah",
      url: "https://www.linkedin.com/in/paramveer-marwah/",
    },
  ],
  creator: "MonPro-AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://monpro-ai.com",
    siteName: "MonPro-AI",
    title: "MonPro-AI — Paramvir Marwah | AI Automation for Founder-Led Teams",
    description:
      "Independent AI automation consultancy. Talking to founders of small agencies and Shopify merchants. Run by Paramvirr Marwah.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonPro-AI — Paramvir Marwah | AI Automation for Founder-Led Teams",
    description:
      "Independent AI automation consultancy. Talking to founders of small agencies and Shopify merchants. Run by Paramvir Marwah.",
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
