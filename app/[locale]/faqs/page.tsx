import { Locale, getLocalizedValue } from '@/lib/i18n';
import { faqs } from '@/data/faqs';
import Link from 'next/link';
import HeroBlock from '@/components/blocks/HeroBlock';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return {
    title:
      locale === 'en'
        ? 'Ryder Cup 2027 FAQs | Ireland Golf Travel Guide'
        : 'Preguntas Frecuentes Ryder Cup 2027 | Guía de Golf Irlanda',
    description:
      locale === 'en'
        ? 'Get answers to the most common questions about Ryder Cup 2027, Adare Manor, golf courses, travel, accommodation, and costs for your Ireland golf trip.'
        : 'Obtenga respuestas a las preguntas más comunes sobre la Ryder Cup 2027, Adare Manor, campos de golf, viajes, alojamiento y costos para su viaje de golf en Irlanda.',
    alternates: {
      canonical: `https://www.adarelimerickgolf.com/${locale}/faqs`,
      languages: {
        en: 'https://www.adarelimerickgolf.com/en/faqs',
        es: 'https://www.adarelimerickgolf.com/es/faqs',
      },
    },
  };
}

export default function FAQsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  // Group FAQs by category
  const categorizedFAQs = {
    'ryder-cup': faqs.filter((f) => f.category === 'ryder-cup'),
    'adare-manor': faqs.filter((f) => f.category === 'adare-manor'),
    travel: faqs.filter((f) => f.category === 'travel'),
    golf: faqs.filter((f) => f.category === 'golf'),
    costs: faqs.filter((f) => f.category === 'costs'),
  };

  const categoryTitles: Record<string, { en: string; es: string; icon: string }> = {
    'ryder-cup': { en: 'Ryder Cup 2027', es: 'Ryder Cup 2027', icon: '🏆' },
    'adare-manor': { en: 'Adare Manor', es: 'Adare Manor', icon: '⛳' },
    travel: { en: 'Travel & Transportation', es: 'Viaje y Transporte', icon: '✈️' },
    golf: { en: 'Golf Courses', es: 'Campos de Golf', icon: '🏌️' },
    costs: { en: 'Costs & Fees', es: 'Costos y Tarifas', icon: '💰' },
  };

  return (
    <>
      <HeroBlock
        title={
          locale === 'en'
            ? 'Frequently Asked Questions'
            : 'Preguntas Frecuentes'
        }
        subtitle={
          locale === 'en'
            ? 'Everything you need to know about Ryder Cup 2027 & Ireland golf'
            : 'Todo lo que necesitas saber sobre la Ryder Cup 2027 y el golf en Irlanda'
        }
        description={
          locale === 'en'
            ? 'Get expert answers to the most common questions about visiting Ireland for Ryder Cup 2027, playing Adare Manor, booking accommodation, and planning your golf trip.'
            : 'Obtén respuestas expertas a las preguntas más comunes sobre visitar Irlanda para la Ryder Cup 2027, jugar en Adare Manor, reservar alojamiento y planificar tu viaje de golf.'
        }
        backgroundImage="https://images.unsplash.com/photo-1530028828-25e8270e8805?w=1600"
      />

      {/* FAQ Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          {Object.entries(categorizedFAQs).map(([category, categoryFAQs]) => {
            if (categoryFAQs.length === 0) return null;

            const { en: titleEn, es: titleEs, icon } = categoryTitles[category];
            const title = locale === 'en' ? titleEn : titleEs;

            return (
              <div key={category} className="mb-16 last:mb-0">
                <div className="flex items-center mb-8">
                  <span className="text-4xl mr-4">{icon}</span>
                  <h2 className="text-3xl font-heading font-bold text-navy-600">
                    {title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {categoryFAQs.map((faq) => (
                    <Link
                      key={faq.id}
                      href={`/${locale}/faq/${faq.id}`}
                      className="block bg-cream-50 hover:bg-cream-100 p-6 rounded-xl transition-all duration-300 group hover:shadow-lg"
                    >
                      <h3 className="font-heading font-bold text-xl text-navy-600 group-hover:text-emerald-600 transition-colors mb-3">
                        {getLocalizedValue(faq.question, locale)}
                      </h3>
                      <p className="text-gray-700 line-clamp-2 mb-3">
                        {getLocalizedValue(faq.answer, locale)}
                      </p>
                      <div className="flex items-center text-emerald-600 font-semibold text-sm">
                        <span>{locale === 'en' ? 'Read full answer' : 'Leer respuesta completa'}</span>
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

      {/* Quick Tips Section */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8 text-center">
            {locale === 'en' ? 'Quick Planning Tips' : 'Consejos Rápidos de Planificación'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-3">
                {locale === 'en' ? 'Book Early' : 'Reserve Temprano'}
              </h3>
              <p className="text-gray-700 text-sm">
                {locale === 'en'
                  ? 'Hotels and tee times for Ryder Cup week (Sept 28 - Oct 3, 2027) will sell out 12-18 months in advance.'
                  : 'Los hoteles y horarios de salida para la semana de la Ryder Cup (28 sept - 3 oct 2027) se agotarán con 12-18 meses de anticipación.'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">🌤️</div>
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-3">
                {locale === 'en' ? 'Best Season' : 'Mejor Temporada'}
              </h3>
              <p className="text-gray-700 text-sm">
                {locale === 'en'
                  ? 'May-September offers the best weather. September (Ryder Cup dates) is peak season with mild temps and long daylight.'
                  : 'Mayo-septiembre ofrece el mejor clima. Septiembre (fechas Ryder Cup) es temporada alta con temperaturas suaves y días largos.'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-3">
                {locale === 'en' ? 'Budget Guide' : 'Guía de Presupuesto'}
              </h3>
              <p className="text-gray-700 text-sm">
                {locale === 'en'
                  ? 'Expect €80-550 green fees, €150-500/night hotels, €40-100/day car rental. Premium pricing during Ryder Cup.'
                  : 'Espere €80-550 green fees, €150-500/noche hoteles, €40-100/día alquiler auto. Precios premium durante Ryder Cup.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-emerald-600 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === 'en' ? 'Ready to Plan Your Trip?' : '¿Listo Para Planificar Tu Viaje?'}
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            {locale === 'en'
              ? 'Explore our comprehensive guides to golf courses, hotels, and itineraries for Ryder Cup 2027.'
              : 'Explora nuestras guías completas de campos de golf, hoteles e itinerarios para la Ryder Cup 2027.'}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={`/${locale}/ryder-cup-2027-adare-manor`} className="btn-primary bg-white text-emerald-600 hover:bg-gray-100">
              {locale === 'en' ? 'Ryder Cup 2027' : 'Ryder Cup 2027'}
            </Link>
            <Link href={`/${locale}/golf-courses-near-adare`} className="btn-outline border-white text-white hover:bg-white hover:text-emerald-600">
              {locale === 'en' ? 'Golf Courses' : 'Campos de Golf'}
            </Link>
            <Link href={`/${locale}/ireland-golf-trip-itineraries`} className="btn-outline border-white text-white hover:bg-white hover:text-emerald-600">
              {locale === 'en' ? 'Trip Itineraries' : 'Itinerarios'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
