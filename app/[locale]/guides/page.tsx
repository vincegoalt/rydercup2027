import { Locale } from '@/lib/i18n';
import Link from 'next/link';
import HeroBlock from '@/components/blocks/HeroBlock';
import Breadcrumbs from '@/components/Breadcrumbs';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return {
    title:
      locale === 'en'
        ? 'Ireland Golf Travel Guides | Ryder Cup 2027 Planning Resources'
        : 'Guías de Viaje Golf Irlanda | Recursos Planificación Ryder Cup 2027',
    description:
      locale === 'en'
        ? 'Expert guides for planning your Ireland golf trip. Course comparisons, budget breakdowns, best time to visit, and insider tips for Ryder Cup 2027.'
        : 'Guías expertas para planificar tu viaje de golf a Irlanda. Comparaciones de campos, desgloses de presupuesto, mejor época para visitar y consejos para Ryder Cup 2027.',
    alternates: {
      canonical: `https://www.adarelimerickgolf.com/${locale}/guides`,
      languages: {
        en: 'https://www.adarelimerickgolf.com/en/guides',
        es: 'https://www.adarelimerickgolf.com/es/guides',
      },
    },
  };
}

export default function GuidesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  const guides = [
    {
      title: locale === 'en' ? 'Best Time to Visit Ireland for Golf' : 'Mejor Época para Visitar Irlanda para Golf',
      description:
        locale === 'en'
          ? 'Month-by-month weather guide, peak season rates, and Ryder Cup 2027 booking timeline.'
          : 'Guía climática mensual, tarifas de temporada alta y cronograma de reservas Ryder Cup 2027.',
      href: `/${locale}/guide/best-time-visit-ireland-golf`,
      icon: '🌤️',
      category: locale === 'en' ? 'Planning' : 'Planificación',
    },
    {
      title: locale === 'en' ? 'Ireland Golf Trip Cost & Budget Guide' : 'Costo y Presupuesto Viaje Golf Irlanda',
      description:
        locale === 'en'
          ? 'Complete breakdown of green fees, hotels, flights, and car rental. Budget to luxury options.'
          : 'Desglose completo de green fees, hoteles, vuelos y alquiler auto. Opciones económicas a lujo.',
      href: `/${locale}/guide/ireland-golf-trip-cost-budget`,
      icon: '💰',
      category: locale === 'en' ? 'Planning' : 'Planificación',
    },
    {
      title: locale === 'en' ? 'Ballybunion vs Lahinch: Which is Better?' : 'Ballybunion vs Lahinch: ¿Cuál es Mejor?',
      description:
        locale === 'en'
          ? 'In-depth comparison of two legendary Irish links courses. Difficulty, scenery, value, and verdict.'
          : 'Comparación detallada de dos campos links irlandeses legendarios. Dificultad, paisaje, valor y veredicto.',
      href: `/${locale}/guide/ballybunion-vs-lahinch-comparison`,
      icon: '⛳',
      category: locale === 'en' ? 'Courses' : 'Campos',
    },
    {
      title: locale === 'en' ? 'Ireland Golf Courses Comparison Table' : 'Tabla Comparación Campos Golf Irlanda',
      description:
        locale === 'en'
          ? 'Side-by-side comparison of 15+ courses near Adare Manor. Green fees, types, designers, and distances.'
          : 'Comparación lado a lado de 15+ campos cerca de Adare Manor. Tarifas, tipos, diseñadores y distancias.',
      href: `/${locale}/guide/ireland-golf-courses-comparison`,
      icon: '📊',
      category: locale === 'en' ? 'Courses' : 'Campos',
    },
    {
      title: locale === 'en' ? 'Things to Do Near Adare Manor' : 'Qué Hacer Cerca de Adare Manor',
      description:
        locale === 'en'
          ? 'Castles, cliffs, whiskey distilleries, and Irish culture. Perfect rest-day activities during Ryder Cup week.'
          : 'Castillos, acantilados, destilerías de whiskey y cultura irlandesa. Actividades perfectas para días de descanso durante semana Ryder Cup.',
      href: `/${locale}/guide/things-to-do-near-adare-manor`,
      icon: '🏰',
      category: locale === 'en' ? 'Travel' : 'Viaje',
    },
    {
      title: locale === 'en' ? 'Where to Eat in Adare & Limerick' : 'Dónde Comer en Adare y Limerick',
      description:
        locale === 'en'
          ? 'Best restaurants, pubs, and cafés. From Michelin-starred dining to traditional Irish pubs.'
          : 'Mejores restaurantes, pubs y cafés. Desde cenas con estrellas Michelin hasta pubs tradicionales irlandeses.',
      href: `/${locale}/guide/where-to-eat-adare-limerick`,
      icon: '🍽️',
      category: locale === 'en' ? 'Travel' : 'Viaje',
    },
  ];

  const categories = Array.from(new Set(guides.map((g) => g.category)));

  return (
    <>
      <div className="container-custom">
        <Breadcrumbs
          items={[
            {
              label: locale === 'en' ? 'Guides' : 'Guías',
            },
          ]}
          locale={locale}
        />
      </div>

      <HeroBlock
        title={locale === 'en' ? 'Ireland Golf Travel Guides' : 'Guías de Viaje Golf Irlanda'}
        subtitle={
          locale === 'en'
            ? 'Expert resources for planning your Ryder Cup 2027 trip'
            : 'Recursos expertos para planificar tu viaje Ryder Cup 2027'
        }
        description={
          locale === 'en'
            ? 'From budgeting and course comparisons to weather guides and itineraries - everything you need to plan the perfect Ireland golf trip.'
            : 'Desde presupuestos y comparaciones de campos hasta guías climáticas e itinerarios: todo lo que necesitas para planificar el viaje de golf perfecto a Irlanda.'
        }
        backgroundImage="https://images.unsplash.com/photo-1504281623087-1a9c1d2434e6?w=1600"
      />

      {/* Guides by Category */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          {categories.map((category) => {
            const categoryGuides = guides.filter((g) => g.category === category);

            return (
              <div key={category} className="mb-16 last:mb-0">
                <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
                  {category}
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {categoryGuides.map((guide, idx) => (
                    <Link
                      key={idx}
                      href={guide.href}
                      className="group bg-cream-50 hover:bg-emerald-50 rounded-xl p-8 transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-emerald-400"
                    >
                      <div className="flex items-start mb-4">
                        <span className="text-5xl mr-4">{guide.icon}</span>
                        <div className="flex-1">
                          <h3 className="font-heading font-bold text-xl text-navy-600 group-hover:text-emerald-600 transition-colors mb-2">
                            {guide.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{guide.description}</p>
                      <div className="flex items-center text-emerald-600 font-semibold">
                        <span>{locale === 'en' ? 'Read guide' : 'Leer guía'}</span>
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8 text-center">
            {locale === 'en' ? 'More Resources' : 'Más Recursos'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href={`/${locale}/faqs`}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-3">❓</div>
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                {locale === 'en' ? 'FAQs' : 'Preguntas Frecuentes'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en'
                  ? 'Quick answers to common questions'
                  : 'Respuestas rápidas a preguntas comunes'}
              </p>
            </Link>

            <Link
              href={`/${locale}/golf/courses-near/adare`}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-3">🏌️</div>
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                {locale === 'en' ? 'Golf Courses' : 'Campos de Golf'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en'
                  ? 'Browse 15+ championship courses'
                  : 'Explora 15+ campos de campeonato'}
              </p>
            </Link>

            <Link
              href={`/${locale}/ireland-golf-trip-itineraries`}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                {locale === 'en' ? 'Itineraries' : 'Itinerarios'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en'
                  ? 'Sample trip plans for every budget'
                  : 'Planes de viaje para cada presupuesto'}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-emerald-600 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === 'en' ? 'Planning Your Ryder Cup 2027 Trip?' : '¿Planificando Tu Viaje Ryder Cup 2027?'}
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            {locale === 'en'
              ? 'Start with our comprehensive Ryder Cup guide covering dates, tickets, accommodation, and nearby attractions.'
              : 'Comienza con nuestra guía completa de Ryder Cup cubriendo fechas, entradas, alojamiento y atracciones cercanas.'}
          </p>
          <Link href={`/${locale}/ryder-cup-2027-adare-manor`} className="btn-primary bg-white text-emerald-600 hover:bg-gray-100">
            {locale === 'en' ? 'Ryder Cup 2027 Guide' : 'Guía Ryder Cup 2027'}
          </Link>
        </div>
      </section>
    </>
  );
}
