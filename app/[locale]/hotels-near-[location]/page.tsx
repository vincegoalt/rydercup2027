import { Locale, getLocalizedValue } from '@/lib/i18n';
import { hotels } from '@/data/hotels';
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

export default function HotelsNearLocationPage({ params }: { params: { locale: Locale; location: string } }) {
  const { locale, location: locationSlug } = params;
  const location = locations.find((loc) => loc.slug === locationSlug);

  if (!location) {
    notFound();
  }

  // Filter hotels within reasonable distance and sort by proximity
  const nearbyHotels = hotels
    .filter((hotel) => hotel.distanceKm < 100)
    .sort((a, b) => {
      const distA = Math.abs(a.coordinates.lat - location.coordinates.lat) + Math.abs(a.coordinates.lng - location.coordinates.lng);
      const distB = Math.abs(b.coordinates.lat - location.coordinates.lat) + Math.abs(b.coordinates.lng - location.coordinates.lng);
      return distA - distB;
    });

  return (
    <>
      <HeroBlock
        title={
          locale === 'en'
            ? `Hotels Near ${location.name}`
            : `Hoteles Cerca de ${location.name}`
        }
        subtitle={`${location.county}, Ireland`}
        description={
          locale === 'en'
            ? `Find the perfect accommodation near ${location.name} for your Ireland golf trip. From luxury manor houses to charming B&Bs, discover the best places to stay during the Ryder Cup 2027.`
            : `Encuentra el alojamiento perfecto cerca de ${location.name} para tu viaje de golf en Irlanda. Desde casas señoriales de lujo hasta encantadores B&Bs, descubre los mejores lugares para alojarte durante la Ryder Cup 2027.`
        }
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600"
        keyFacts={[
          {
            label: locale === 'en' ? 'Hotels Available' : 'Hoteles Disponibles',
            value: `${nearbyHotels.length}+`,
          },
          {
            label: locale === 'en' ? 'Nearest Airport' : 'Aeropuerto',
            value: location.nearestAirport,
          },
          {
            label: locale === 'en' ? 'Distance' : 'Distancia',
            value: location.airportDistance,
          },
          {
            label: locale === 'en' ? 'From Adare' : 'Desde Adare',
            value: location.distanceFromAdare,
          },
        ]}
      />

      {/* Hotels Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en'
              ? `Accommodation Near ${location.name}`
              : `Alojamiento Cerca de ${location.name}`}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={hotel.imageUrl}
                    alt={`${hotel.name} ${hotel.location} hotel accommodation near ${location.name} Ryder Cup 2027`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-navy-600 text-white px-3 py-2 rounded-full text-sm font-bold">
                    {hotel.priceRange}
                  </div>
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-2 rounded-full text-sm font-semibold flex items-center">
                    ⭐ {hotel.rating}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-navy-600 mb-2 group-hover:text-emerald-600 transition-colors">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {getLocalizedValue(hotel.description, locale).substring(0, 120)}...
                  </p>
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-2">
                      {locale === 'en' ? 'Amenities:' : 'Comodidades:'}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {getLocalizedValue(hotel.amenities, locale).slice(0, 3).map((amenity, idx) => (
                        <span key={idx} className="text-xs bg-cream-100 text-gray-700 px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-emerald-600 font-semibold">{hotel.distanceFromAdare}</span>
                    <span className="text-gray-500">{hotel.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en' ? 'Booking Tips' : 'Consejos de Reserva'}
          </h2>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-navy-600 mb-3">
                  {locale === 'en' ? 'Book Early for Ryder Cup 2027' : 'Reserve Temprano para la Ryder Cup 2027'}
                </h3>
                <p className="text-gray-700">
                  {locale === 'en'
                    ? `Hotels near ${location.name} are expected to sell out quickly during Ryder Cup week (September 28 - October 3, 2027). We recommend booking 12-18 months in advance to secure the best rates and availability.`
                    : `Se espera que los hoteles cerca de ${location.name} se agoten rápidamente durante la semana de la Ryder Cup (28 de septiembre - 3 de octubre de 2027). Recomendamos reservar con 12-18 meses de anticipación para asegurar las mejores tarifas y disponibilidad.`}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-navy-600 mb-3">
                  {locale === 'en' ? 'Transportation Options' : 'Opciones de Transporte'}
                </h3>
                <p className="text-gray-700">
                  {locale === 'en'
                    ? `Consider proximity to ${location.nearestAirport} (${location.airportDistance}) and availability of rental cars or shuttle services to Adare Manor.`
                    : `Considere la proximidad a ${location.nearestAirport} (${location.airportDistance}) y la disponibilidad de autos de alquiler o servicios de transporte a Adare Manor.`}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-navy-600 mb-3">
                  {locale === 'en' ? 'Package Deals' : 'Paquetes'}
                </h3>
                <p className="text-gray-700">
                  {locale === 'en'
                    ? 'Many hotels offer Ryder Cup packages that include accommodation, breakfast, and transportation to Adare Manor. Contact hotels directly for special offers.'
                    : 'Muchos hoteles ofrecen paquetes de Ryder Cup que incluyen alojamiento, desayuno y transporte a Adare Manor. Contacte directamente a los hoteles para ofertas especiales.'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <Link href={`/${locale}/golf/courses-near/${locationSlug}`} className="btn-primary">
              {locale === 'en' ? 'Golf Courses Nearby' : 'Campos de Golf Cerca'}
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
