import { Locale } from '@/lib/i18n';
import { golfCourses } from '@/data/courses';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return {
    title:
      locale === 'en'
        ? 'Ireland Golf Courses Comparison Table | Links vs Parkland Near Adare Manor'
        : 'Tabla Comparación Campos Golf Irlanda | Links vs Parkland Cerca Adare Manor',
    description:
      locale === 'en'
        ? 'Compare Ireland\'s best golf courses near Adare Manor. Side-by-side green fees, course types, designers, and distances. Plan your Ryder Cup 2027 golf trip.'
        : 'Compara los mejores campos de golf de Irlanda cerca de Adare Manor. Green fees, tipos de campo, diseñadores y distancias lado a lado. Planifica tu viaje de golf Ryder Cup 2027.',
    keywords: 'ireland golf comparison, ballybunion vs lahinch, golf course comparison, ireland links courses, parkland vs links',
    alternates: {
      canonical: `https://www.adarelimerickgolf.com/${locale}/guide/ireland-golf-courses-comparison`,
      languages: {
        en: 'https://www.adarelimerickgolf.com/en/guide/ireland-golf-courses-comparison',
        es: 'https://www.adarelimerickgolf.com/es/guide/ireland-golf-courses-comparison',
      },
    },
  };
}

export default function GolfCoursesComparisonPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  // Get top courses sorted by distance from Adare
  const topCourses = golfCourses
    .filter((c) => c.distanceKm < 180)
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, 15);

  const linksCourses = topCourses.filter((c) => c.type === 'links');
  const parklandCourses = topCourses.filter((c) => c.type === 'parkland');

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          {
            label: locale === 'en' ? 'Golf Guides' : 'Guías de Golf',
            href: `/${locale}/golf/courses-near/adare`,
          },
          {
            label: locale === 'en' ? 'Course Comparison' : 'Comparación Campos',
          },
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-emerald-600 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {locale === 'en'
              ? 'Ireland Golf Courses Comparison'
              : 'Comparación Campos de Golf Irlanda'}
          </h1>
          <p className="text-xl text-emerald-50 mb-4">
            {locale === 'en'
              ? 'Compare green fees, course types, and distances from Adare Manor'
              : 'Compara tarifas, tipos de campo y distancias desde Adare Manor'}
          </p>
          <p className="text-sm text-emerald-100">
            {locale === 'en' ? 'Last Updated: January 2025' : 'Última Actualización: Enero 2025'}
          </p>
        </div>
      </section>

      {/* All Courses Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en' ? 'Top 15 Courses Near Adare Manor' : 'Top 15 Campos Cerca de Adare Manor'}
          </h2>

          <div className="overflow-x-auto shadow-lg rounded-xl">
            <table className="w-full border-collapse bg-white">
              <thead className="bg-navy-600 text-white">
                <tr>
                  <th className="p-4 text-left font-heading">{locale === 'en' ? 'Course' : 'Campo'}</th>
                  <th className="p-4 text-left font-heading">{locale === 'en' ? 'Type' : 'Tipo'}</th>
                  <th className="p-4 text-left font-heading">{locale === 'en' ? 'Designer' : 'Diseñador'}</th>
                  <th className="p-4 text-left font-heading">{locale === 'en' ? 'Green Fee' : 'Tarifa'}</th>
                  <th className="p-4 text-left font-heading">{locale === 'en' ? 'Distance' : 'Distancia'}</th>
                  <th className="p-4 text-left font-heading">{locale === 'en' ? 'County' : 'Condado'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topCourses.map((course, idx) => (
                  <tr key={course.id} className="hover:bg-cream-50 transition-colors">
                    <td className="p-4">
                      <Link
                        href={`/${locale}/golf-courses/${course.slug}`}
                        className="font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
                      >
                        {course.name}
                      </Link>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        course.type === 'links' ? 'bg-emerald-100 text-emerald-700' :
                        course.type === 'parkland' ? 'bg-blue-100 text-blue-700' :
                        'bg-gold-100 text-gold-700'
                      }`}>
                        {course.type === 'links' ? (locale === 'en' ? 'Links' : 'Links') :
                         course.type === 'parkland' ? (locale === 'en' ? 'Parkland' : 'Parkland') :
                         (locale === 'en' ? 'Championship' : 'Campeonato')}
                      </span>
                    </td>
                    <td className="p-4 text-gray-700 text-sm">{course.designer}</td>
                    <td className="p-4 font-semibold text-navy-600">{course.greenFee}</td>
                    <td className="p-4 text-gray-600 text-sm">{course.distanceFromAdare}</td>
                    <td className="p-4 text-gray-600 text-sm">{course.county}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Links vs Parkland Comparison */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en' ? 'Links vs Parkland Courses' : 'Campos Links vs Parkland'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Links */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-heading font-bold text-emerald-700 mb-4">
                ⛳ {locale === 'en' ? 'Links Courses' : 'Campos Links'} ({linksCourses.length})
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-navy-600 mb-2">
                    {locale === 'en' ? 'Characteristics' : 'Características'}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'Coastal, wind-affected' : 'Costero, afectado por viento'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'Natural dunes & rolling terrain' : 'Dunas naturales y terreno ondulado'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'Firm, fast-running fairways' : 'Calles firmes y rápidas'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'Strategic bump-and-run shots' : 'Golpes estratégicos bump-and-run'}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-600 mb-2">
                    {locale === 'en' ? 'Top Examples' : 'Mejores Ejemplos'}
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {linksCourses.slice(0, 5).map((course) => (
                      <li key={course.id}>
                        <Link href={`/${locale}/golf-courses/${course.slug}`} className="text-emerald-600 hover:underline">
                          {course.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Parkland */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-heading font-bold text-blue-700 mb-4">
                🌳 {locale === 'en' ? 'Parkland Courses' : 'Campos Parkland'} ({parklandCourses.length})
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-navy-600 mb-2">
                    {locale === 'en' ? 'Characteristics' : 'Características'}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'Inland, tree-lined' : 'Interior, bordeado de árboles'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'Sculpted fairways & manicured greens' : 'Calles esculpidas y greens cuidados'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'More predictable conditions' : 'Condiciones más predecibles'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'Target golf, aerial approach shots' : 'Golf de objetivo, golpes aéreos'}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-600 mb-2">
                    {locale === 'en' ? 'Top Examples' : 'Mejores Ejemplos'}
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {parklandCourses.slice(0, 5).map((course) => (
                      <li key={course.id}>
                        <Link href={`/${locale}/golf-courses/${course.slug}`} className="text-blue-600 hover:underline">
                          {course.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en' ? 'Price Comparison by Tier' : 'Comparación de Precios por Nivel'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 border-2 border-emerald-600 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-emerald-700 mb-4">
                💰 {locale === 'en' ? 'Budget' : 'Económico'}
              </h3>
              <p className="text-3xl font-bold text-navy-600 mb-4">€50-€100</p>
              <p className="text-sm text-gray-700 mb-4">
                {locale === 'en'
                  ? 'Municipal and local courses. Good quality, accessible pricing.'
                  : 'Campos municipales y locales. Buena calidad, precios accesibles.'}
              </p>
              <ul className="space-y-2 text-sm">
                {topCourses.filter(c => c.greenFee.includes('€50') || c.greenFee.includes('€75') || c.greenFee.includes('€80')).slice(0, 3).map(course => (
                  <li key={course.id} className="text-emerald-700">
                    • {course.name}: {course.greenFee}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-600 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-blue-700 mb-4">
                ⭐ {locale === 'en' ? 'Mid-Range' : 'Rango Medio'}
              </h3>
              <p className="text-3xl font-bold text-navy-600 mb-4">€100-€250</p>
              <p className="text-sm text-gray-700 mb-4">
                {locale === 'en'
                  ? 'Quality parkland and some links courses. Great value.'
                  : 'Parkland de calidad y algunos links. Excelente valor.'}
              </p>
              <ul className="space-y-2 text-sm">
                {topCourses.filter(c => c.greenFee.includes('€150') || c.greenFee.includes('€120') || c.greenFee.includes('€180')).slice(0, 3).map(course => (
                  <li key={course.id} className="text-blue-700">
                    • {course.name}: {course.greenFee}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gold-50 border-2 border-gold-600 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-gold-700 mb-4">
                💎 {locale === 'en' ? 'Premium' : 'Premium'}
              </h3>
              <p className="text-3xl font-bold text-navy-600 mb-4">€250-€550</p>
              <p className="text-sm text-gray-700 mb-4">
                {locale === 'en'
                  ? 'World-class championship courses. Bucket-list experiences.'
                  : 'Campos de campeonato de clase mundial. Experiencias únicas.'}
              </p>
              <ul className="space-y-2 text-sm">
                {topCourses.filter(c => c.greenFee.includes('€250') || c.greenFee.includes('€300') || c.greenFee.includes('€550')).slice(0, 3).map(course => (
                  <li key={course.id} className="text-gold-700">
                    • {course.name}: {course.greenFee}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-600 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === 'en' ? 'Ready to Plan Your Trip?' : '¿Listo Para Planificar Tu Viaje?'}
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            {locale === 'en'
              ? 'Explore detailed course guides and build your perfect Ireland golf itinerary.'
              : 'Explora guías de campos detalladas y construye tu itinerario perfecto de golf en Irlanda.'}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={`/${locale}/golf/courses-near/adare`} className="btn-primary bg-emerald-600 hover:bg-emerald-700">
              {locale === 'en' ? 'Browse All Courses' : 'Ver Todos los Campos'}
            </Link>
            <Link href={`/${locale}/ireland-golf-trip-itineraries`} className="btn-outline border-white text-white hover:bg-white hover:text-navy-600">
              {locale === 'en' ? 'View Itineraries' : 'Ver Itinerarios'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
