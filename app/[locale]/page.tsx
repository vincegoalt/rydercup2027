import { Locale, getLocalizedValue } from '@/lib/i18n';
import { golfCourses } from '@/data/courses';
import { hotels } from '@/data/hotels';
import { faqs } from '@/data/faqs';
import HeroBlock from '@/components/blocks/HeroBlock';
import Link from 'next/link';
import Image from 'next/image';
import { generateBookingLink, generateDirectCourseLink } from '@/lib/affiliates';

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  const heroContent = {
    en: {
      subtitle: 'Ryder Cup 2027',
      title: 'Your Complete Guide to Adare Manor & Ireland Golf',
      description:
        'Plan your trip to the 2027 Ryder Cup at Adare Manor, County Limerick. Find nearby golf courses, hotels, travel tips, and build your perfect Ireland golf itinerary.',
      cta1: 'Ryder Cup 2027 Guide',
      cta2: 'Explore Golf Courses',
    },
    es: {
      subtitle: 'Ryder Cup 2027',
      title: 'Tu Guía Completa de Adare Manor y Golf en Irlanda',
      description:
        'Planifica tu viaje a la Ryder Cup 2027 en Adare Manor, condado de Limerick. Encuentra campos de golf cercanos, hoteles, consejos de viaje y construye tu itinerario de golf perfecto en Irlanda.',
      cta1: 'Guía Ryder Cup 2027',
      cta2: 'Explorar Campos de Golf',
    },
  };

  const content = heroContent[locale];

  return (
    <div>
      <HeroBlock
        title={content.title}
        subtitle={content.subtitle}
        description={content.description}
        backgroundImage="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600"
        ctaButtons={[
          { text: content.cta1, href: `/${locale}/ryder-cup-2027-adare-manor`, primary: true },
          { text: content.cta2, href: `/${locale}/golf-courses-near-adare` },
        ]}
        keyFacts={[
          {
            label: locale === 'en' ? 'Event Dates' : 'Fechas',
            value: 'Sept 17-19, 2027',
          },
          {
            label: locale === 'en' ? 'Venue' : 'Sede',
            value: 'Adare Manor',
          },
          {
            label: locale === 'en' ? 'Location' : 'Ubicación',
            value: locale === 'en' ? 'Limerick, Ireland' : 'Limerick, Irlanda',
          },
          {
            label: locale === 'en' ? 'Nearest Airport' : 'Aeropuerto',
            value: 'Shannon (25min)',
          },
        ]}
      />

      {/* Featured Golf Courses */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-600 mb-4">
              {locale === 'en' ? 'Play Iconic Irish Golf Courses' : 'Juega en Campos Icónicos de Irlanda'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'From Adare Manor to Ballybunion, Lahinch, and Tralee - play the best links and parkland courses in southwest Ireland.'
                : 'Desde Adare Manor hasta Ballybunion, Lahinch y Tralee: juega los mejores campos links y parkland del suroeste de Irlanda.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {golfCourses.slice(0, 6).map((course) => {
              const teeTimeLink = generateDirectCourseLink(course.slug);

              return (
                <div
                  key={course.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <Link href={`/${locale}/golf-courses/${course.slug}`} className="block">
                    <div className="relative h-48">
                      <Image src={course.imageUrl} alt={course.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {course.greenFee}
                      </div>
                    </div>
                  </Link>
                  <div className="p-5 flex-1 flex flex-col">
                    <Link href={`/${locale}/golf-courses/${course.slug}`}>
                      <h3 className="font-heading font-bold text-xl text-navy-600 mb-2 group-hover:text-emerald-600 transition-colors">
                        {course.name}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-3 flex-1">{getLocalizedValue(course.description, locale).substring(0, 120)}...</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-emerald-600 text-sm font-semibold">{course.distanceFromAdare}</span>
                      <span className="text-gray-500 text-sm capitalize">{course.type}</span>
                    </div>
                    {teeTimeLink !== '#' && (
                      <a
                        href={teeTimeLink}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="w-full bg-navy-600 hover:bg-navy-700 text-white text-center py-2 px-4 rounded-lg font-semibold text-sm transition-colors"
                        data-analytics="tee-time-booking"
                        data-course-name={course.name}
                      >
                        {locale === 'en' ? 'Book Tee Time' : 'Reservar Hora'}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href={`/${locale}/golf-courses-near-adare`} className="btn-primary">
              {locale === 'en' ? 'View All Golf Courses' : 'Ver Todos los Campos'}
            </Link>
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-600 mb-4">
              {locale === 'en' ? 'Where to Stay Near Adare Manor' : 'Dónde Alojarse Cerca de Adare Manor'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'From 5-star luxury at Adare Manor to cozy guesthouses in Adare Village - find your perfect accommodation for Ryder Cup week.'
                : 'Desde lujo 5 estrellas en Adare Manor hasta acogedoras casas de huéspedes en Adare Village: encuentra tu alojamiento perfecto para la semana de la Ryder Cup.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotels.slice(0, 4).map((hotel) => {
              const bookingLink = generateBookingLink(hotel.name, hotel.location);

              return (
                <div key={hotel.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col">
                  <div className="relative h-40">
                    <Image src={hotel.imageUrl} alt={hotel.name} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-md text-sm font-bold text-gray-700">
                      {hotel.priceRange}
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-heading font-bold text-lg text-navy-600 mb-1">{hotel.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{hotel.distanceFromAdare}</p>
                    <div className="flex items-center text-sm mb-3">
                      <span className="text-gold-500">★</span>
                      <span className="ml-1 font-semibold">{hotel.rating}</span>
                    </div>
                    <a
                      href={bookingLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="mt-auto w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2 px-4 rounded-lg font-semibold text-sm transition-colors"
                      data-analytics="hotel-booking"
                      data-hotel-name={hotel.name}
                    >
                      {locale === 'en' ? 'Check Availability' : 'Ver Disponibilidad'}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href={`/${locale}/hotels-near-adare-manor`} className="btn-secondary">
              {locale === 'en' ? 'View All Hotels' : 'Ver Todos los Hoteles'}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-600 mb-8 text-center">
            {locale === 'en' ? 'Frequently Asked Questions' : 'Preguntas Frecuentes'}
          </h2>

          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq) => (
              <details key={faq.id} className="bg-cream-100 rounded-lg p-6 cursor-pointer">
                <summary className="font-heading font-semibold text-lg text-navy-600">
                  {getLocalizedValue(faq.question, locale)}
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{getLocalizedValue(faq.answer, locale)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="section-padding bg-navy-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {locale === 'en' ? 'Ready to Plan Your Ryder Cup Trip?' : '¿Listo para Planificar tu Viaje a la Ryder Cup?'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {locale === 'en'
              ? 'Get the full guide to Ryder Cup 2027, including dates, tickets, travel, hotels, and nearby golf courses.'
              : 'Obtén la guía completa de la Ryder Cup 2027, incluyendo fechas, entradas, viajes, hoteles y campos de golf cercanos.'}
          </p>
          <Link href={`/${locale}/ryder-cup-2027-adare-manor`} className="btn-secondary">
            {locale === 'en' ? 'View Complete Guide' : 'Ver Guía Completa'}
          </Link>
        </div>
      </section>
    </div>
  );
}
