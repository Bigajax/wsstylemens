import type { Metadata } from "next";
import { Archivo, Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site.config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileTabBar from "@/components/MobileTabBar";
import WhatsFab from "@/components/WhatsFab";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wsstylemens.com.br"),
  title: {
    default: "WS Style Men's | Moda Masculina Premium",
    template: "%s | WS Style Men's",
  },
  description: siteConfig.description,
  openGraph: {
    title: "WS Style Men's | Moda Masculina Premium",
    description: siteConfig.description,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/hero-camisa-branca-poltrona.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${inter.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsFab />
        <MobileTabBar />
      </body>
    </html>
  );
}
