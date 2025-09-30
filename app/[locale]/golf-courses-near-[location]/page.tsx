import { Locale, getLocalizedValue } from '@/lib/i18n';
import { golfCourses } from '@/data/courses';
import { locations } from '@/data/locations';
import { notFound } from 'next/navigation';
import HeroBlock from '@/components/blocks/HeroBlock';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  const params = [];
  for (const locale of ['en', 'es']) {
    for (const location of locations) {
      params.push({ locale, location: location.slug });
    }
  }
  return params;
}

export default function GolfCoursesNearLocationPage({ params }: { params: { locale: Locale; location: string } }) {
  const { locale, location: locationSlug } = params;
  const location = locations.find((loc) => loc.slug === locationSlug);

  if (!location) {
    notFound();
  }

  // Filter courses within reasonable distance (< 2.5h drive)
  const nearbyCourses = golfCourses
    .filter((course) => course.distanceKm < 180)
    .sort((a, b) => {
      // Calculate distance from this location
      const distA = Math.abs(a.coordinates.lat - location.coordinates.lat) + Math.abs(a.coordinates.lng - location.coordinates.lng);
      const distB = Math.abs(b.coordinates.lat - location.coordinates.lat) + Math.abs(b.coordinates.lng - location.coordinates.lng);
      return distA - distB;
    })
    .slice(0, 12);

  return (
    <>
      <HeroBlock
        title={
          locale === 'en'
            ? `Golf Courses Near ${location.name}`
            : `Campos de Golf Cerca de ${location.name}`
        }
        subtitle={`${location.county}, Ireland`}
        description={getLocalizedValue(location.description, locale)}
        backgroundImage="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600"
        keyFacts={[
          {
            label: locale === 'en' ? 'Nearest Airport' : 'Aeropuerto',
            value: location.nearestAirport,
          },
          {
            label: locale === 'en' ? 'Distance' : 'Distancia',
            value: location.airportDistance,
          },
          {
            label: locale === 'en' ? 'Courses Nearby' : 'Campos Cerca',
            value: `${nearbyCourses.length}+`,
          },
          {
            label: locale === 'en' ? 'From Adare' : 'Desde Adare',
            value: location.distanceFromAdare,
          },
        ]}
      />

      {/* Golf Courses Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en'
              ? `Best Golf Courses Near ${location.name}`
              : `Mejores Campos de Golf Cerca de ${location.name}`}
          </h2>

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
                    alt={course.name}
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
                    {getLocalizedValue(course.description, locale).substring(0, 120)}...
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

      {/* Local Information */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en' ? `About ${location.name}` : `Acerca de ${location.name}`}
          </h2>

          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-6">{getLocalizedValue(location.description, locale)}</p>

            <h3 className="text-2xl font-heading font-bold text-navy-600 mb-4">
              {locale === 'en' ? 'Local Attractions' : 'Atracciones Locales'}
            </h3>
            <ul className="space-y-2">
              {getLocalizedValue(location.attractions, locale).map((attraction, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  {attraction}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex gap-4">
            <Link href={`/${locale}/hotels-near-${locationSlug}`} className="btn-primary">
              {locale === 'en' ? 'Find Hotels' : 'Buscar Hoteles'}
            </Link>
            <Link href={`/${locale}/getting-to-${locationSlug}`} className="btn-outline">
              {locale === 'en' ? 'Getting There' : 'Cómo Llegar'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
