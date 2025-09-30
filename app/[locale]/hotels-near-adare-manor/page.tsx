import { Locale, getLocalizedValue } from '@/lib/i18n';
import { hotels } from '@/data/hotels';
import HeroBlock from '@/components/blocks/HeroBlock';
import Image from 'next/image';
import { generateMetadata as genMeta } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return genMeta({
    title: locale === 'en'
      ? 'Hotels Near Adare Manor Ryder Cup 2027 | Accommodation Guide'
      : 'Hoteles Cerca de Adare Manor Ryder Cup 2027 | Guía de Alojamiento',
    description: locale === 'en'
      ? 'Find hotels near Adare Manor for Ryder Cup 2027. From luxury castle hotels to B&Bs in Adare Village. Book accommodations in Limerick, Shannon & surrounding areas.'
      : 'Encuentra hoteles cerca de Adare Manor para Ryder Cup 2027. Desde hoteles castillo de lujo hasta B&Bs en Adare Village. Reserva alojamiento en Limerick, Shannon y alrededores.',
    keywords: ['adare manor hotels', 'ryder cup 2027 accommodation', 'hotels limerick ireland', 'adare village hotels', 'ryder cup lodging'],
    locale,
    canonicalUrl: `https://www.adarelimerickgolf.com/${locale}/hotels-near-adare-manor`,
  });
}

export default function HotelsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return (
    <>
      <HeroBlock
        title={locale === 'en' ? 'Hotels Near Adare Manor' : 'Hoteles Cerca de Adare Manor'}
        subtitle={locale === 'en' ? 'Ryder Cup 2027 Accommodation' : 'Alojamiento Ryder Cup 2027'}
        description={locale === 'en'
          ? 'From 5-star castle hotels to cozy guesthouses in Adare Village - find your perfect accommodation for Ryder Cup week and Ireland golf trips.'
          : 'Desde hoteles castillo 5 estrellas hasta acogedoras casas de huéspedes en Adare Village: encuentra tu alojamiento perfecto para la semana de la Ryder Cup y viajes de golf en Irlanda.'}
        backgroundImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={hotel.imageUrl}
                    alt={`${hotel.name} ${hotel.location} hotel accommodation Ryder Cup 2027 Adare Manor`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md font-bold text-gray-700">
                    {hotel.priceRange}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-white text-sm font-semibold">{hotel.distanceFromAdare}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-xl text-navy-600 mb-2">{hotel.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {getLocalizedValue(hotel.description, locale)}
                  </p>
                  <div className="flex items-center mb-3">
                    <span className="text-gold-500 text-lg">★</span>
                    <span className="ml-1 font-semibold text-gray-700">{hotel.rating}</span>
                  </div>
                  <ul className="space-y-1">
                    {getLocalizedValue(hotel.amenities, locale).slice(0, 3).map((amenity, idx) => (
                      <li key={idx} className="text-xs text-gray-600">• {amenity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
