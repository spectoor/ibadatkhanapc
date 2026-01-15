import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ibadat Khana - Association Musulmane Sunnite de Plateau Caillou",
  description: "Association Musulmane Sunnite de Plateau Caillou - Ibadat Khana et Madressah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script
          src="https://www.powr.io/powr.js?platform=hostinger"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
