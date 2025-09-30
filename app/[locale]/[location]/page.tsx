import { Locale, getLocalizedValue } from '@/lib/i18n';
import { locations } from '@/data/locations';
import { golfCourses } from '@/data/courses';
import { hotels } from '@/data/hotels';
import { notFound } from 'next/navigation';
import HeroBlock from '@/components/blocks/HeroBlock';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '@/lib/seo';

export async function generateStaticParams() {
  const params = [];
  for (const locale of ['en', 'es']) {
    for (const location of locations) {
      params.push({ locale, location: location.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { locale: Locale; location: string } }) {
  const { locale, location: locationSlug } = params;
  const location = locations.find((loc) => loc.slug === locationSlug);

  if (!location) {
    return {};
  }

  return genMeta({
    title: locale === 'en'
      ? `${location.name} Golf & Ryder Cup 2027 Guide | Hotels, Courses & Travel`
      : `Guía Golf y Ryder Cup 2027 ${location.name} | Hoteles, Campos y Viaje`,
    description: locale === 'en'
      ? `Complete ${location.name} guide for Ryder Cup 2027. Golf courses, hotels, ${location.nearestAirport} airport info. ${location.distanceFromAdare} from Adare Manor in ${location.county}.`
      : `Guía completa de ${location.name} para Ryder Cup 2027. Campos de golf, hoteles, info aeropuerto ${location.nearestAirport}. ${location.distanceFromAdare} desde Adare Manor en ${location.county}.`,
    keywords: [`${location.name.toLowerCase()} golf`, `${location.name.toLowerCase()} ryder cup`, `${location.county.toLowerCase()} golf courses`, `${location.nearestAirport} ireland`, 'golf ireland'],
    locale,
    canonicalUrl: `https://www.adarelimerickgolf.com/${locale}/${locationSlug}`,
  });
}

export default function LocationHubPage({ params }: { params: { locale: Locale; location: string } }) {
  const { locale, location: locationSlug } = params;
  const location = locations.find((loc) => loc.slug === locationSlug);

  if (!location) {
    notFound();
  }

  // Get nearby courses and hotels
  const nearbyCourses = golfCourses
    .filter((course) => course.distanceKm < 180)
    .sort((a, b) => {
      const distA = Math.abs(a.coordinates.lat - location.coordinates.lat) + Math.abs(a.coordinates.lng - location.coordinates.lng);
      const distB = Math.abs(b.coordinates.lat - location.coordinates.lat) + Math.abs(b.coordinates.lng - location.coordinates.lng);
      return distA - distB;
    })
    .slice(0, 6);

  const nearbyHotels = hotels
    .filter((hotel) => hotel.distanceKm < 100)
    .sort((a, b) => {
      const distA = Math.abs(a.coordinates.lat - location.coordinates.lat) + Math.abs(a.coordinates.lng - location.coordinates.lng);
      const distB = Math.abs(b.coordinates.lat - location.coordinates.lat) + Math.abs(b.coordinates.lng - location.coordinates.lng);
      return distA - distB;
    })
    .slice(0, 3);

  return (
    <>
      <HeroBlock
        title={
          locale === 'en'
            ? `${location.name} Golf & Ryder Cup Guide`
            : `Guía de Golf y Ryder Cup en ${location.name}`
        }
        subtitle={`${location.county}, Ireland`}
        description={getLocalizedValue(location.description, locale)}
        backgroundImage="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600"
        keyFacts={[
          {
            label: locale === 'en' ? 'Nearest Airport' : 'Aeropuerto',
            value: location.nearestAirport,
          },
          {
            label: locale === 'en' ? 'Airport Distance' : 'Distancia',
            value: location.airportDistance,
          },
          {
            label: locale === 'en' ? 'From Adare Manor' : 'Desde Adare Manor',
            value: location.distanceFromAdare,
          },
          {
            label: locale === 'en' ? 'Golf Courses' : 'Campos',
            value: `${nearbyCourses.length}+`,
          },
        ]}
      />

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-6">
            {locale === 'en' ? `Why Visit ${location.name}?` : `¿Por Qué Visitar ${location.name}?`}
          </h2>
          <div className="prose max-w-none text-gray-700 mb-8">
            <p className="text-lg leading-relaxed">
              {getLocalizedValue(location.description, locale)}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href={`/${locale}/golf/courses-near/${locationSlug}`}
              className="bg-emerald-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">⛳</div>
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                {locale === 'en' ? 'Golf Courses' : 'Campos de Golf'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en'
                  ? `Discover ${nearbyCourses.length}+ world-class courses nearby`
                  : `Descubre ${nearbyCourses.length}+ campos de clase mundial cerca`}
              </p>
            </Link>

            <Link
              href={`/${locale}/hotels-near-${locationSlug}`}
              className="bg-gold-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">🏨</div>
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                {locale === 'en' ? 'Where to Stay' : 'Dónde Alojarse'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en'
                  ? 'Find the perfect accommodation for your trip'
                  : 'Encuentra el alojamiento perfecto para tu viaje'}
              </p>
            </Link>

            <Link
              href={`/${locale}/getting-to-${locationSlug}`}
              className="bg-navy-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                {locale === 'en' ? 'Getting There' : 'Cómo Llegar'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en'
                  ? 'Transportation options and travel tips'
                  : 'Opciones de transporte y consejos de viaje'}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Golf Courses */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading font-bold text-navy-600">
              {locale === 'en'
                ? `Golf Courses Near ${location.name}`
                : `Campos de Golf Cerca de ${location.name}`}
            </h2>
            <Link
              href={`/${locale}/golf/courses-near/${locationSlug}`}
              className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center"
            >
              {locale === 'en' ? 'View All' : 'Ver Todo'}
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyCourses.map((course) => (
              <Link
                key={course.id}
                href={`/${locale}/golf-courses/${course.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={course.imageUrl}
                    alt={`${course.name} ${course.type} golf course near ${location.name} Ireland`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-2 rounded-full text-sm font-bold">
                    {course.greenFee}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-navy-600 mb-2 group-hover:text-emerald-600 transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {getLocalizedValue(course.description, locale).substring(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-emerald-600 font-semibold">{course.distanceFromAdare}</span>
                    <span className="text-gray-500 capitalize">{course.type}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading font-bold text-navy-600">
              {locale === 'en'
                ? `Where to Stay in ${location.name}`
                : `Dónde Alojarse en ${location.name}`}
            </h2>
            <Link
              href={`/${locale}/hotels-near-${locationSlug}`}
              className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center"
            >
              {locale === 'en' ? 'View All' : 'Ver Todo'}
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nearbyHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={hotel.imageUrl}
                    alt={`${hotel.name} ${hotel.location} hotel near ${location.name} Ryder Cup 2027`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-navy-600 text-white px-3 py-2 rounded-full text-sm font-bold">
                    {hotel.priceRange}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {getLocalizedValue(hotel.description, locale).substring(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-emerald-600">⭐ {hotel.rating}</span>
                    <span className="text-gray-500">{hotel.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Attractions */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en' ? 'Things to Do' : 'Qué Hacer'}
          </h2>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-heading font-bold text-emerald-700 mb-6">
              {locale === 'en' ? 'Local Attractions' : 'Atracciones Locales'}
            </h3>
            <ul className="space-y-4">
              {getLocalizedValue(location.attractions, locale).map((attraction, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-emerald-600 text-xl mr-3">•</span>
                  <span className="text-gray-700 text-lg">{attraction}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ryder Cup Connection */}
      {location.slug !== 'adare' && (
        <section className="section-padding bg-navy-600 text-white">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              {locale === 'en' ? 'Ryder Cup 2027 at Adare Manor' : 'Ryder Cup 2027 en Adare Manor'}
            </h2>
            <p className="text-xl mb-4 text-gray-200">
              {locale === 'en'
                ? `${location.name} is ${location.distanceFromAdare} from Adare Manor, host venue for the 44th Ryder Cup (September 28 - October 3, 2027).`
                : `${location.name} está a ${location.distanceFromAdare} de Adare Manor, sede de la 44ª Ryder Cup (28 de septiembre - 3 de octubre de 2027).`}
            </p>
            <p className="text-lg mb-8 text-gray-300">
              {locale === 'en'
                ? 'An ideal base for attending the matches and exploring Irish golf.'
                : 'Una base ideal para asistir a los partidos y explorar el golf irlandés.'}
            </p>
            <Link href={`/${locale}/ryder-cup-2027-adare-manor`} className="btn-primary bg-white text-navy-600 hover:bg-gray-100">
              {locale === 'en' ? 'Ryder Cup 2027 Guide' : 'Guía Ryder Cup 2027'}
            </Link>
          </div>
        </section>
      )}

      {location.slug === 'adare' && (
        <section className="section-padding bg-emerald-600 text-white">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              {locale === 'en' ? 'Home of Ryder Cup 2027' : 'Sede de la Ryder Cup 2027'}
            </h2>
            <p className="text-xl mb-4 text-emerald-50">
              {locale === 'en'
                ? 'Adare Manor will host the 44th Ryder Cup from September 28 - October 3, 2027. Experience world-class golf in one of Ireland\'s most picturesque settings.'
                : 'Adare Manor será sede de la 44ª Ryder Cup del 28 de septiembre al 3 de octubre de 2027. Experimenta golf de clase mundial en uno de los entornos más pintorescos de Irlanda.'}
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Link href={`/${locale}/ryder-cup-2027-adare-manor`} className="btn-primary bg-white text-emerald-600 hover:bg-gray-100">
                {locale === 'en' ? 'Ryder Cup Details' : 'Detalles Ryder Cup'}
              </Link>
              <Link href={`/${locale}/adare-manor-golf-course`} className="btn-outline border-white text-white hover:bg-white hover:text-emerald-600">
                {locale === 'en' ? 'About the Course' : 'Sobre el Campo'}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Plan Your Visit */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8 text-center">
            {locale === 'en' ? 'Plan Your Visit' : 'Planifica Tu Visita'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                {locale === 'en' ? 'Best Time to Visit' : 'Mejor Época'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'May-September for golf season. Book early for Ryder Cup week.'
                  : 'Mayo-septiembre para temporada de golf. Reserve temprano para la semana de la Ryder Cup.'}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                {locale === 'en' ? 'Budget Planning' : 'Presupuesto'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Green fees €80-300. Hotels €150-500/night. Expect premium pricing during Ryder Cup.'
                  : 'Green fees €80-300. Hoteles €150-500/noche. Espere precios premium durante la Ryder Cup.'}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌤️</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                {locale === 'en' ? 'Weather Tips' : 'Clima'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Pack layers and rain gear. Irish weather can change quickly.'
                  : 'Empaca capas y equipo de lluvia. El clima irlandés puede cambiar rápidamente.'}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href={`/${locale}/ireland-golf-trip-itineraries`} className="btn-primary">
              {locale === 'en' ? 'View Sample Itineraries' : 'Ver Itinerarios de Ejemplo'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
