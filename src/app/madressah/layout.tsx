import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Madressah de Plateau Caillou",
  description: "École coranique de Plateau Caillou à Saint-Paul, La Réunion. Enseignement du Coran (Tajwid, Hifz), Aqida, Fiqh et histoire islamique pour enfants et adolescents. Inscription en ligne disponible.",
  keywords: [
    "Madressah Réunion",
    "école coranique Plateau Caillou",
    "enseignement Coran La Réunion",
    "Hifz Réunion",
    "cours islamiques enfants",
    "Tajwid",
    "Aqida",
    "Fiqh",
    "école islamique Saint-Paul",
    "mémorisation Coran",
    "inscription Madressah"
  ],
  openGraph: {
    title: "Madressah de Plateau Caillou - École Coranique",
    description: "École coranique pour l'enseignement du Coran et des sciences islamiques aux enfants et adolescents à Saint-Paul, La Réunion.",
    url: 'https://ibadatkhanapc.fr/madressah',
    siteName: 'Ibadat Khana Noor-e-Habibia',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/madressah.jpg',
        width: 1200,
        height: 630,
        alt: "Madressah de Plateau Caillou",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Madressah de Plateau Caillou",
    description: "École coranique pour l'enseignement du Coran et des sciences islamiques",
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
