'use client';

import Link from 'next/link';
import Image from 'next/image';
import {facebookUrl, prayerTimes} from "@/lib/config";
import {getSunset} from "sunrise-sunset-js";
import {useCallback, useEffect, useRef, useState} from "react";
import Script from 'next/script';

export default function Home() {
  const [displaySocial, setDisplaySocial] = useState(false);
  const [magribhTime, setMagribhTime] = useState('--:--');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const prayerSectionRef = useRef<HTMLElement>(null);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      prayerSectionRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  useEffect(() => {
    setDisplaySocial(true);

    // Calculer l'heure de Magribh avec le fuseau horaire de la Réunion
    const now = new Date();
    const sunset = getSunset(-21.0094, 55.2708, now);

    if (sunset) {
      // Convertir au fuseau horaire de la Réunion (UTC+4)
      const reunionFormatter = new Intl.DateTimeFormat('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Indian/Reunion'
      });
      const parts = reunionFormatter.formatToParts(sunset);
      let hours = parseInt(parts.find(p => p.type === 'hour')?.value || '0');
      const minutes = parseInt(parts.find(p => p.type === 'minute')?.value || '0');

      // Arrondir à la dizaine de minutes supérieure
      const roundedMinutes = Math.ceil(minutes / 10) * 10;
      if (roundedMinutes === 60) {
        hours = (hours + 1) % 24;
        setMagribhTime(`${hours.toString().padStart(2, '0')}:00`);
      } else {
        setMagribhTime(`${hours.toString().padStart(2, '0')}:${roundedMinutes.toString().padStart(2, '0')}`);
      }
    }
  }, []);

  // Structured Data pour le SEO et GEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Mosque",
        "@id": "https://ibadatkhanapc.fr/#organization",
        "name": "Ibadat Khana Noor-e-Habibia",
        "alternateName": [
          "AMSPC",
          "Association Musulmane Sunnite de Plateau Caillou",
          "Mosquée de Plateau Caillou",
          "Mosquée Noor-e-Habibia"
        ],
        "url": "https://ibadatkhanapc.fr",
        "logo": "https://ibadatkhanapc.fr/logo-ibadat.png",
        "image": "https://ibadatkhanapc.fr/ibadat.jpg",
        "description": "L'Ibadat Khana Noor-e-Habibia est la mosquée de Plateau Caillou à Saint-Paul, La Réunion, gérée par l'Association Musulmane Sunnite de Plateau Caillou (AMSPC). Elle propose des prières en congrégation cinq fois par jour, une école coranique (Madressah) pour les enfants et adolescents, et des activités de solidarité communautaire.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plateau Caillou",
          "addressLocality": "Saint-Paul",
          "addressRegion": "La Réunion",
          "postalCode": "97460",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -21.0094,
          "longitude": 55.2708
        },
        "telephone": "+262692787813",
        "email": "ibadatkhanapc@gmail.com",
        "hasMap": "https://maps.google.com/?q=-21.0094,55.2708",
        "sameAs": [facebookUrl]
      },
      {
        "@type": "WebSite",
        "@id": "https://ibadatkhanapc.fr/#website",
        "url": "https://ibadatkhanapc.fr",
        "name": "Ibadat Khana Noor-e-Habibia",
        "description": "Site officiel de l'Ibadat Khana de Plateau Caillou",
        "publisher": {
          "@id": "https://ibadatkhanapc.fr/#organization"
        },
        "inLanguage": "fr-FR"
      },
      {
        "@type": "WebPage",
        "@id": "https://ibadatkhanapc.fr/#webpage",
        "url": "https://ibadatkhanapc.fr",
        "name": "Ibadat Khana Noor-e-Habibia - Plateau Caillou, La Réunion",
        "isPartOf": {
          "@id": "https://ibadatkhanapc.fr/#website"
        },
        "about": {
          "@id": "https://ibadatkhanapc.fr/#organization"
        },
        "description": "Mosquée et Madressah de Plateau Caillou à Saint-Paul, La Réunion. Prières quotidiennes, enseignement coranique et solidarité communautaire.",
        "inLanguage": "fr-FR"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ibadatkhanapc.fr/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Où se trouve la mosquée de Plateau Caillou à La Réunion ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'Ibadat Khana Noor-e-Habibia est située à Plateau Caillou, Saint-Paul, La Réunion (code postal 97460). C'est la mosquée de la communauté musulmane des hauts de Saint-Paul, dans un quartier en plein développement."
            }
          },
          {
            "@type": "Question",
            "name": "Quels sont les horaires des prières à l'Ibadat Khana de Plateau Caillou ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les horaires de prière à l'Ibadat Khana Noor-e-Habibia sont actualisés régulièrement et consultables sur le site ibadatkhanapc.fr. La prière du Magribh est calculée chaque jour à partir de l'heure précise du coucher du soleil à Plateau Caillou."
            }
          },
          {
            "@type": "Question",
            "name": "Y a-t-il une école coranique à Plateau Caillou ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, la Madressah de Plateau Caillou est une école coranique rattachée à l'Ibadat Khana Noor-e-Habibia. Elle accueille les enfants et adolescents de la communauté et propose des cours de Tajwid (récitation du Coran), Hifz (mémorisation du Coran), Aqida (croyances islamiques), Fiqh (jurisprudence), histoire islamique et Akhlaq (éthique). L'enseignement est assuré par l'Imam Mw Ahmad Mamode."
            }
          },
          {
            "@type": "Question",
            "name": "Comment faire un don à l'Ibadat Khana de Plateau Caillou ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vous pouvez faire un don à l'Ibadat Khana Noor-e-Habibia via la plateforme HelloAsso. Quatre types de dons sont disponibles : dons généraux à l'Ibadat Khana, financement des projets de rénovation, parrainage d'un élève de la Madressah et soutien à la classe Hifz (mémorisation du Coran)."
            }
          },
          {
            "@type": "Question",
            "name": "Comment contacter l'Ibadat Khana de Plateau Caillou ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vous pouvez contacter l'Ibadat Khana Noor-e-Habibia par email à ibadatkhanapc@gmail.com, ou par téléphone au +262 692 78 78 13 (Président de l'AMSPC) ou au +262 692 51 52 39 (Imam Mw Ahmad Mamode)."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Structured Data JSON-LD */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-deep-green/90 via-deep-green/85 to-deep-green/90 z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight">
              Bienvenue à<br />
              <span className="text-gold">l&apos;Ibadat Khana</span><br />
              de Plateau Caillou
            </h1>

            <p className="text-xl md:text-2xl text-amber-100 max-w-2xl mx-auto">
              Un lieu de culte, d&apos;enseignement et de fraternité à Saint-Paul
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInLeft">
              <div className="space-y-2">
                <p className="text-deep-green/85 font-bold uppercase tracking-wider text-md">L'Ibadat Khana</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Une proximit&eacute; cultuelle et culturelle
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                L’Association Musulmane Sunnite de Plateau Caillou (AMSPC) gère l’Ibadat Khana pour la pratique et l’enseignement de l’islam dans les hauts de Saint Paul à Plateau Caillou.
                C’est ainsi qu’une partie de la communauté éloignée du Centre Ville a trouvé en ce lieu, un centre spirituel qui est devenu le cœur de leur quotidien dans ce quartier en plein développement.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Son objectif principal est de fournir un espace aux prières en congrégation, un enseignement pour notre génération future et une solidarité pour la communauté musulmane locale.
              </p>

              <div className="pt-4">
                <Link
                  href={facebookUrl}
                  className="inline-flex items-center space-x-2 text-deep-green/80 hover:text-deep-green font-semibold group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Notre actualité</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative h-96 md:h-125 rounded-2xl overflow-hidden shadow-2xl animate-fadeInRight">
              <Image
                src="/ibadat.jpg"
                alt="Ibadat Khana Noor-e-Habibia de Plateau Caillou à Saint-Paul, La Réunion - Lieu de prière et d'enseignement islamique"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Madressah Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-125 rounded-2xl overflow-hidden shadow-2xl animate-fadeInRight">
              <Image
                src="/madressah.jpg"
                alt="Madressah de Plateau Caillou - École coranique pour l'enseignement du Coran et des sciences islamiques aux enfants et adolescents"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6 animate-fadeInLeft">
              <div className="space-y-2">
                <p className="text-deep-green/85 font-bold uppercase tracking-wider text-md">L'ibadat khana</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  La Madressah
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                La Madressah de Plateau Caillou est une école coranique dédiée à l’enseignement religieux et spirituel des jeunes musulmans de la communauté. Son objectif est de transmettre les valeurs et principes de l’Islam tout en offrant une formation de qualité basée sur le respect des enseignements du Coran et de la Sunna.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                La Madressah propose des cours sur la récitation et la mémorisation du Coran, l’étude des hadiths, ainsi que l’apprentissage des bases du fiqh (jurisprudence islamique), des ‘aqaïd (croyances islamiques) et de la Sirah (vie du Prophète, Paix et bénédictions sur lui). Elle s’engage également à enseigner des valeurs éthiques et morales importantes pour former des individus responsables et respectueux de leur foi, tout en étant ancrés dans leur société.
              </p>

              <div className="pt-4">
                <Link
                  href="/madressah"
                  className="inline-flex items-center space-x-2 text-deep-green/80 hover:text-deep-green font-semibold group"
                >
                  <span>Découvrir la Madressah</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Times Section */}
      <section
        ref={prayerSectionRef}
        id="horaires-priere"
        className={`bg-linear-to-br from-slate-50 to-amber-50/30 scroll-mt-20 ${isFullscreen ? 'flex items-center justify-center min-h-screen' : 'py-12'}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Horaires de prière</h2>

            <div className="bg-linear-to-br from-deep-green/90 via-deep-green/85 to-deep-green/90 rounded-2xl p-12 shadow-2xl">
              <p className="text-white text-lg mb-8">
                Consultez les horaires de prière actualisés quotidiennement
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 md:flex-nowrap">
                {prayerTimes.map((element) => (
                  <div key={element.prayer} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300 shrink-0 basis-[calc(33.333%-1rem)] md:basis-auto md:flex-1">
                    <p className="text-amber-100 text-sm font-medium mb-2 text-center">{element.prayer}</p>
                    <p className="text-gold text-2xl font-bold text-center">
                      {element.prayer === 'Magribh' ? magribhTime : element.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={toggleFullscreen}
              className="inline-flex items-center gap-2 px-6 py-3  text-deep-green/80 hover:text-deep-green cursor-pointer rounded-xl transition-colors duration-300 text-sm font-medium"
            >
              {isFullscreen ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                  </svg>
                  Quitter le plein écran
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                  Plein écran
                </>
              )}
            </button>
          </div>
        </div>
      </section>


      {/* Suivez notre actualité */}
      <section className="py-12 bg-white">
        <div className="mx-auto">
          <div className="text-center mb-12 space-y-4">
            <p className="text-deep-green/85 font-bold uppercase tracking-wider text-md">Restez Connecté</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Suivez notre actualité</h2>
          </div>
          {/* Placeholder pour EmbedSocial */}
          <div className="mt-8 text-center text-sm text-slate-500">
            {displaySocial && <div className="powr-social-feed" id="67e24538_1768342281"></div>}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white" aria-label="Questions fréquentes">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 space-y-3">
              <p className="text-deep-green/85 font-bold uppercase tracking-wider text-md">Informations</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Questions fréquentes</h2>
            </div>
            <dl className="space-y-6">
              <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
                <dt className="text-lg font-semibold text-slate-900 mb-2">Où se trouve la mosquée de Plateau Caillou ?</dt>
                <dd className="text-slate-600 leading-relaxed">L&apos;Ibadat Khana Noor-e-Habibia est située à <strong>Plateau Caillou, Saint-Paul, La Réunion</strong> (code postal 97460). C&apos;est la mosquée de la communauté musulmane des hauts de Saint-Paul.</dd>
              </div>
              <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
                <dt className="text-lg font-semibold text-slate-900 mb-2">Quels sont les horaires des prières ?</dt>
                <dd className="text-slate-600 leading-relaxed">
                  Les horaires sont actualisés régulièrement. Consultez la section ci-dessus pour les horaires du jour.
                </dd>
              </div>
              <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
                <dt className="text-lg font-semibold text-slate-900 mb-2">Y a-t-il une école coranique à Plateau Caillou ?</dt>
                <dd className="text-slate-600 leading-relaxed">Oui, la <strong>Madressah de Plateau Caillou</strong> est une école coranique qui accueille les enfants et adolescents de la communauté. Elle propose des cours de Tajwid, Hifz, Aqida, Fiqh, histoire islamique et Akhlaq, dispensés par l&apos;Imam Mw Ahmad Mamode. <Link href="/madressah" className="text-deep-green font-medium underline">En savoir plus sur la Madressah.</Link></dd>
              </div>
              <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
                <dt className="text-lg font-semibold text-slate-900 mb-2">Comment nous contacter ?</dt>
                <dd className="text-slate-600 leading-relaxed">
                  Par email : <strong>ibadatkhanapc@gmail.com</strong><br />
                  Téléphone Président : <strong>+262 692 78 78 13</strong><br />
                  Téléphone Imam : <strong>+262 692 51 52 39</strong>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Dons Section */}
      <section className="py-12 bg-linear-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <p className="text-deep-green/85 font-bold uppercase tracking-wider text-md">Dons</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Soutenez notre association</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mx-auto">
            {/* Dons Ibadat */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <Link href={'https://www.helloasso.com/associations/association-musulmane-sunnite-de-plateau-caillou/collectes/recolte-de-don'} target="_blank" rel="noopener noreferrer">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/dons-ibadat.jpg"
                      alt="Faire un don pour soutenir l'Ibadat Khana de Plateau Caillou - Contribuez au fonctionnement de la mosquée"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 bg-white">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Dons à l'Ibadat Khana</h3>
                    <p className="text-slate-600">Nos dépenses augmentent et nos dons actuels ne couvrent pas encore tous nos besoins. Chaque don compte. Contribuez dès maintenant — par la grâce d’Allah, avançons ensemble.</p>
                  </div>
                </Link>
              </div>

            {/* Dons projets */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <Link href={'https://www.helloasso.com/associations/association-musulmane-sunnite-de-plateau-caillou/formulaires/1'} target="_blank" rel="noopener noreferrer">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/dons-projets.jpg"
                    alt="Financement des projets de rénovation et d'amélioration de l'Ibadat Khana et de la Madressah"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Financement des projets</h3>
                  <p className="text-slate-600">Votre don aide à rénover, améliorer nos installations et maintenir les cours pour nos enfants et nos jeunes. Chaque contribution renforce notre communauté et préserve notre patrimoine religieux.</p>
                </div>
              </Link>
            </div>

            {/* Dons parrainage */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <Link href={'https://www.helloasso.com/associations/association-musulmane-sunnite-de-plateau-caillou/formulaires/3'} target="_blank" rel="noopener noreferrer">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/dons-parrainage.jpg"
                    alt="Parrainer un élève de la Madressah - Offrir l'accès à l'éducation islamique aux enfants"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Parrainer un élève</h3>
                  <p className="text-slate-600">En parrainant un enfant, vous lui offrez l’opportunité d’accéder aux cours.</p>
                </div>
              </Link>
            </div>

            {/* Dons hifz */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <Link href={'https://www.helloasso.com/associations/association-musulmane-sunnite-de-plateau-caillou/formulaires/6'} target="_blank" rel="noopener noreferrer">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/dons-hifz.jpg"
                    alt="Soutenir la classe Hifz - Mémorisation du Coran pour former une génération de Huffaz"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Soutenez la classe Hifz</h3>
                  <p className="text-slate-600">À travers la classe Hifz, nous œuvrons pour former une génération attachée au Coran. Soutenez cette mission essentielle et investissez dans l’avenir de la Oumma.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
