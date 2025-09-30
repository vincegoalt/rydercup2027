import { Locale, getLocalizedValue } from '@/lib/i18n';
import { golfCourses } from '@/data/courses';
import HeroBlock from '@/components/blocks/HeroBlock';
import Link from 'next/link';
import Image from 'next/image';

export default function GolfCoursesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return (
    <>
      <HeroBlock
        title={locale === 'en' ? 'Golf Courses Near Adare Manor' : 'Campos de Golf Cerca de Adare Manor'}
        subtitle={locale === 'en' ? 'Southwest Ireland Links & Parkland' : 'Links y Parkland del Suroeste'}
        description={locale === 'en'
          ? 'Play iconic links courses like Ballybunion, Lahinch, Tralee, and Doonbeg within 1-2 hours of Adare. Plus local parkland options for warm-up rounds.'
          : 'Juega campos links icónicos como Ballybunion, Lahinch, Tralee y Doonbeg a 1-2 horas de Adare. Además, opciones parkland locales para rondas de calentamiento.'}
        backgroundImage="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {golfCourses.map((course) => (
              <Link
                key={course.id}
                href={`/${locale}/golf-courses/${course.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={course.imageUrl}
                    alt={course.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-2 rounded-full text-sm font-bold">
                    {course.greenFee}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-white text-sm font-semibold">{course.distanceFromAdare}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-navy-600 mb-2 group-hover:text-emerald-600 transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {getLocalizedValue(course.description, locale)}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 capitalize">{course.type}</span>
                    <span className="text-emerald-600 font-semibold">{course.designer}</span>
                  </div>
                  <ul className="mt-4 space-y-1">
                    {getLocalizedValue(course.highlights, locale).slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="text-xs text-gray-600">• {highlight}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
