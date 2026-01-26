import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ibadat Khana Noor-e-Habibia - Plateau Caillou, La Réunion",
    template: "%s | Ibadat Khana Noor-e-Habibia",
  },
  description: "Association Musulmane Sunnite de Plateau Caillou (AMSPC) - Ibadat Khana et Madressah à Saint-Paul, La Réunion. Mosquée, prières quotidiennes, enseignement coranique et formation islamique pour enfants et adolescents.",
  keywords: [
    "Ibadat Khana",
    "mosquée Plateau Caillou",
    "mosquée La Réunion",
    "mosquée Saint-Paul",
    "AMSPC",
    "Madressah Réunion",
    "école coranique Réunion",
    "prière musulmane",
    "enseignement islamique",
    "association musulmane",
    "islam Réunion",
    "Noor-e-Habibia"
  ],
  authors: [{ name: "AMSPC - Association Musulmane Sunnite de Plateau Caillou" }],
  creator: "AMSPC",
  publisher: "AMSPC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ibadatkhanapc.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ibadat Khana Noor-e-Habibia - Plateau Caillou, La Réunion",
    description: "Mosquée et Madressah de Plateau Caillou à Saint-Paul, La Réunion. Prières quotidiennes, enseignement coranique et solidarité communautaire.",
    url: 'https://ibadatkhanapc.fr',
    siteName: 'Ibadat Khana Noor-e-Habibia',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/ibadat.jpg',
        width: 1200,
        height: 630,
        alt: "Ibadat Khana de Plateau Caillou",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ibadat Khana Noor-e-Habibia - Plateau Caillou",
    description: "Mosquée et Madressah de Plateau Caillou à Saint-Paul, La Réunion",
    images: ['/ibadat.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // À compléter avec vos codes de vérification
    // google: 'votre-code-google',
    // yandex: 'votre-code-yandex',
    // bing: 'votre-code-bing',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo-ibadat.png" />
        <link rel="apple-touch-icon" href="/logo-ibadat.png" />
        <meta name="theme-color" content="#1e4a30" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script
          src="https://www.powr.io/powr.js?platform=hostinger"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
