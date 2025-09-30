'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Locale } from '@/lib/i18n';
import Logo from './Logo';

interface HeaderProps {
  locale: Locale;
  translations: any;
}

export default function Header({ locale, translations }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const otherLocale: Locale = locale === 'en' ? 'es' : 'en';
  const currentPath = typeof window !== 'undefined' ? window.location.pathname.replace(`/${locale}`, '') : '';

  const navigation = [
    { name: translations.ryderCup2027, href: `/${locale}/ryder-cup-2027-adare-manor` },
    { name: translations.golfCourses, href: `/${locale}/golf-courses-near-adare` },
    { name: translations.hotels, href: `/${locale}/hotels-near-adare-manor` },
    { name: translations.planYourTrip, href: `/${locale}/ireland-golf-trip-itineraries` },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center">
            <Logo variant="light" showText={true} className="h-8 md:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={`/${otherLocale}${currentPath}`}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm font-medium"
            >
              {locale === 'en' ? '🇪🇸 ES' : '🇬🇧 EN'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
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
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={`/${otherLocale}${currentPath}`}
              className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-center"
            >
              {locale === 'en' ? '🇪🇸 Español' : '🇬🇧 English'}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
