import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {facebookUrl, prayerTimes} from "@/lib/config";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-deep-green/90 via-deep-green/85 to-deep-green/90 z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeInUp">
            <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight">
              Bienvenue à<br />
              <span className="text-gold">l&apos;Ibadat Khana</span><br />
              de Plateau Caillou
            </h2>

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
                  href="/madressah"
                  className="inline-flex items-center space-x-2 text-deep-green/80 hover:text-deep-green font-semibold group"
                >
                  <span>Notre actualité</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fadeInRight">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-yellow-600/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Madressah Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fadeInRight">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-yellow-600/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
            <div className="space-y-6 animate-fadeInLeft">
              <div className="space-y-2">
                <p className="text-deep-green/85 font-bold uppercase tracking-wider text-md">L'ibadat khana</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  La Madressah
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                L&apos;Association Musulmane Sunnite de Plateau Caillou (AMSPC) est un lieu de culte et d&apos;enseignement situé à Saint-Paul, La Réunion. Nous accueillons la communauté musulmane pour les prières quotidiennes et proposons des cours d&apos;enseignement religieux à travers notre Madressah.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Notre mission est de promouvoir les valeurs de l&apos;Islam sunnite dans un esprit de paix, de tolérance et de partage.
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
      <section className="py-12 bg-linear-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Horaires de prière</h2>

            <div className="bg-linear-to-br from-deep-green/90 via-deep-green/85 to-deep-green/90 rounded-2xl p-12 shadow-2xl">
              <p className="text-white text-lg mb-8">
                Consultez les horaires de prière actualisés quotidiennement
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 md:flex-nowrap">
                {prayerTimes.map((element) => (
                  <div key={element.prayer} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300 flex-shrink-0 basis-[calc(33.333%-1rem)] md:basis-auto md:flex-1">
                    <p className="text-amber-100 text-sm font-medium mb-2 text-center">{element.prayer}</p>
                    <p className="text-gold text-2xl font-bold text-center">{element.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Suivez notre actualité */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <p className="text-deep-green/85 font-bold uppercase tracking-wider text-md">Restez Connecté</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Suivez notre actualité</h2>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-amber-50/30 rounded-2xl p-8 text-center shadow-xl">
              <p className="text-slate-600 text-lg mb-6">
                Retrouvez toutes nos actualités et événements sur notre page Facebook
              </p>
              <Button asChild variant="outline" size="lg" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50">
                <Link
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visiter notre page Facebook
                </Link>
              </Button>
            </div>

            {/* Placeholder pour EmbedSocial */}
            <div className="mt-8 text-center text-sm text-slate-500">
              <p>Widget Facebook EmbedSocial à intégrer ici</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dons Section */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <p className="text-deep-green/85 font-bold uppercase tracking-wider text-md">Dons</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Soutenez notre association</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-yellow-700"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
              </div>
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Prières quotidiennes</h3>
                <p className="text-slate-600">Rejoignez-nous pour les cinq prières quotidiennes et la prière du vendredi dans un cadre apaisant et fraternel.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-amber-700"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
              </div>
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">La Madressah</h3>
                <p className="text-slate-600">Enseignement religieux de qualité pour enfants et adolescents : Coran, langue arabe, histoire islamique et éthique.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
