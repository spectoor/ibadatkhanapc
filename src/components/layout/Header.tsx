"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {facebookUrl, helloAssoUrl} from "@/lib/config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            onClick={(e) => handleNavClick(e, '/')}
          >
            <div className="w-16 h-16 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <Image
                src="/logo-ibadat.png"
                alt="Ibadat Khana Plateau Caillou"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden md:block">
              <h1 className={scrolled ? 'text-2xl font-bold text-deep-green tracking-tight' : 'text-2xl font-bold text-gold tracking-tight'}>Ibadat Khana Noor-e-Habibia</h1>
              <p className={scrolled ? 'text-sm text-dark-gray' : 'text-sm text-white'}>Saint-Paul</p>
            </div>
          </Link>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href={helloAssoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={scrolled ?
                'flex items-center space-x-2 bg-deep-green text-gold px-4 py-2 rounded-lg hover:bg-deep-green/80 transition-colors' :
                'flex items-center space-x-2 bg-gold text-deep-green px-4 py-2 rounded-lg hover:bg-gold/80 transition-colors'
            }
            >
              <span className="font-medium">Faire un don</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-700 hover:text-amber-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
            <Link
              href="/"
              className="block text-slate-700 hover:text-deep-green transition-colors py-2"
              onClick={(e) => handleNavClick(e, '/')}
            >
              L&apos;Ibadat Khana
            </Link>
            <Link
              href="/madressah"
              className="block text-slate-700 hover:text-deep-green transition-colors py-2"
              onClick={(e) => handleNavClick(e, '/madressah')}
            >
              Madressah
            </Link>
            <Link
              href={facebookUrl}
              className="block text-slate-700 hover:text-deep-green transition-colors py-2"
              onClick={(e) => handleNavClick(e, 'external')}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Notre actualit&eacute;
            </Link>
            <Link
              href={helloAssoUrl}
              className="block text-slate-700 hover:text-deep-green transition-colors py-2"
              onClick={(e) => handleNavClick(e, 'external')}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Faire un don
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
