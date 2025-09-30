'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Locale } from '@/lib/i18n';

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
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-xl font-heading font-bold text-navy-600">Ireland Golf Planner</span>
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
