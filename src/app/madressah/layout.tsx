import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Madressah de Plateau Caillou - École Coranique à Saint-Paul, La Réunion",
  description: "La Madressah de Plateau Caillou (Saint-Paul, La Réunion 97460) est une école coranique islamique proposant des cours de Tajwid, Hifz (mémorisation du Coran), Aqida, Fiqh, histoire islamique et Akhlaq pour enfants et adolescents. Cotisation : 10€/mois ou 100€/an. Enseignant : Imam Mw Ahmad Mamode.",
  keywords: [
    "Madressah Réunion",
    "Madressah Plateau Caillou",
    "école coranique Plateau Caillou",
    "école coranique Saint-Paul Réunion",
    "enseignement Coran La Réunion",
    "cours Coran enfants Réunion",
    "Hifz Réunion",
    "mémorisation Coran Réunion",
    "Tajwid Réunion",
    "cours islamiques enfants Réunion",
    "Aqida Réunion",
    "Fiqh Réunion",
    "école islamique Saint-Paul",
    "inscription Madressah Réunion",
    "Imam Ahmad Mamode"
  ],
  openGraph: {
    title: "Madressah de Plateau Caillou - École Coranique à Saint-Paul, La Réunion",
    description: "École coranique islamique à Plateau Caillou, Saint-Paul (La Réunion). Cours de Tajwid, Hifz, Aqida, Fiqh pour enfants et adolescents. Enseignant : Imam Mw Ahmad Mamode. Inscription sur liste d'attente.",
    url: 'https://ibadatkhanapc.fr/madressah',
    siteName: 'Ibadat Khana Noor-e-Habibia',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/madressah.jpg',
        width: 1200,
        height: 630,
        alt: "Madressah de Plateau Caillou - École coranique islamique à Saint-Paul, La Réunion",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Madressah de Plateau Caillou - École Coranique",
    description: "École coranique islamique à Saint-Paul, La Réunion. Cours de Tajwid, Hifz, Aqida, Fiqh pour enfants et adolescents.",
    images: ['/madressah.jpg'],
  },
  alternates: {
    canonical: '/madressah',
  },
}

export default function MadressahLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
