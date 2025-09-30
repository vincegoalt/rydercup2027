import Link from 'next/link';
import { Locale } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
  translations: any;
}

export default function Footer({ locale, translations }: FooterProps) {
  return (
    <footer className="bg-navy-600 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">Adare Limerick Golf</h3>
            <p className="text-gray-300 text-sm">
              {locale === 'en'
                ? 'Your complete guide to the 2027 Ryder Cup at Adare Manor and golf trips in Ireland.'
                : 'Tu guía completa para la Ryder Cup 2027 en Adare Manor y viajes de golf en Irlanda.'}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">{translations.ryderCup2027}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/ryder-cup-2027-adare-manor`} className="text-gray-300 hover:text-white transition-colors">
                  {locale === 'en' ? 'Event Guide' : 'Guía del Evento'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/ryder-cup-2027-tickets-hospitality`} className="text-gray-300 hover:text-white transition-colors">
                  {locale === 'en' ? 'Tickets & Hospitality' : 'Entradas y Hospitalidad'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/ryder-cup-future-venues`} className="text-gray-300 hover:text-white transition-colors">
                  {locale === 'en' ? 'Future Venues' : 'Sedes Futuras'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">{translations.planYourTrip}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/golf-courses-near-adare`} className="text-gray-300 hover:text-white transition-colors">
                  {translations.golfCourses}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/hotels-near-adare-manor`} className="text-gray-300 hover:text-white transition-colors">
                  {translations.hotels}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/getting-to-adare-manor`} className="text-gray-300 hover:text-white transition-colors">
                  {locale === 'en' ? 'Getting There' : 'Cómo Llegar'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">{translations.contact}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{translations.email}: info@placeholder.com</li>
              <li>{translations.phone}: +353 1 234 5678</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-500 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>{translations.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
