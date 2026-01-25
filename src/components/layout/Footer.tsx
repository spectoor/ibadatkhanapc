"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {email, facebookUrl, helloAssoUrl, telephoneImame, telephonePresident} from "@/lib/config";

export default function Footer() {
  const pathname = usePathname();

  const navigationLinks = [
    { href: "/", label: "L'Ibadat Khana" },
    { href: "/madressah", label: "La Madressah" },
    { href: facebookUrl, label: "Notre actualité", external: true },
    { href: helloAssoUrl, label: "Faire un don", external: true },
  ];

  const year = (new Date).getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (!external && pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950">
      {/* Contact Info Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                {/*  external link */}
                  <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-2">Adresse</p>
                      <Link href="https://maps.app.goo.gl/2YMsquVp9SDYxeRn9" target="_blank" rel="noopener noreferrer">
                      <p className="text-white text-lg">
                        Plateau Caillou (en face de la Poste)
                        <br/>
                        14 rue Paul Ferrand
                        <br />97460 Saint-Paul
                      </p>
                    </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <Link href="/madressah" onClick={(e) => handleNavClick(e, "/madressah", false)}>
                  <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-2">Madressah</p>
                  <p className="text-white text-lg">Enseignement religieux<br />pour enfants et adolescents</p>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <Link href={facebookUrl} target="_blank" rel="noopener noreferrer">
                  <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-2">Communauté</p>
                  <p className="text-white text-lg">Activités communautaires<br />et fêtes islamiques</p></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    <div className="container mx-auto px-4 pt-16 pb-8">
      <div className="grid md:grid-cols-5 gap-12">
        {/* Logo & Description */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center space-x-3">
            <h3 className="text-xl font-bold text-white">Ibadat Khana Noor-e-Habibia</h3>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-md">
            L&apos;Ibadat Khana de Plateau Caillou accueille la communauté musulmane pour les prières régulières, ainsi que la prière du vendredi et propose des cours d&apos;enseignement religieux pour enfants et adolescents.
          </p>
        </div>

        {/* Contact */}
        <div className={'md:col-span-2'}>
          <h4 className="text-white font-bold mb-4 text-lg">Contact</h4>
          <ul className="space-y-3">
            <li><Link href={`mailto:${email}`} className="text-slate-400 hover:text-gold transition-colors">Email: {email}</Link></li>
            <li><Link href={`tel:${telephonePresident}`} className="text-slate-400 hover:text-gold transition-colors">Téléphone Président: {telephonePresident}</Link></li>
            <li><Link href={`tel:${telephoneImame}`} className="text-slate-400 hover:text-gold transition-colors">Téléphone Imam: {telephoneImame}</Link></li>
          </ul>
        </div>

        {/* Liens */}
        <div>
          <h4 className="text-white font-bold mb-4 text-lg">Navigation</h4>
          <ul className="space-y-3">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-slate-400 hover:text-gold transition-colors"
                  onClick={(e) => handleNavClick(e, link.href, link.external)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-12 pt-8 text-center">
        <p className="text-slate-500">
          Association Musulmane Sunnite de Plateau Caillou © {year}
        </p>
        <p className="text-slate-500">
          Tous droits réservés
        </p>
      </div>
    </div>
  </footer>
  );
}
