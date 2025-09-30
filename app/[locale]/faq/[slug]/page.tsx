import { Locale, getLocalizedValue } from '@/lib/i18n';
import { faqs } from '@/data/faqs';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { generateFAQSchema } from '@/lib/seo';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateStaticParams() {
  const params = [];
  for (const locale of ['en', 'es']) {
    for (const faq of faqs) {
      params.push({ locale, slug: faq.id });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { locale: Locale; slug: string } }) {
  const faq = faqs.find((f) => f.id === params.slug);
  if (!faq) return {};

  const question = getLocalizedValue(faq.question, params.locale);
  const answer = getLocalizedValue(faq.answer, params.locale);

  return {
    title: `${question} | Adare Limerick Golf`,
    description: answer.substring(0, 160),
    keywords: faq.keywords.join(', '),
    alternates: {
      canonical: `https://www.adarelimerickgolf.com/${params.locale}/faq/${params.slug}`,
      languages: {
        en: `https://www.adarelimerickgolf.com/en/faq/${params.slug}`,
        es: `https://www.adarelimerickgolf.com/es/faq/${params.slug}`,
      },
    },
  };
}

export default function FAQDetailPage({ params }: { params: { locale: Locale; slug: string } }) {
  const { locale, slug } = params;
  const faq = faqs.find((f) => f.id === slug);

  if (!faq) {
    notFound();
  }

  const question = getLocalizedValue(faq.question, locale);
  const answer = getLocalizedValue(faq.answer, locale);

  // Get related FAQs from same category
  const relatedFAQs = faqs
    .filter((f) => f.category === faq.category && f.id !== faq.id)
    .slice(0, 3);

  const schema = generateFAQSchema([
    {
      question: question,
      answer: answer,
    },
  ]);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <Breadcrumb
        locale={locale}
        items={[
          {
            label: locale === 'en' ? 'FAQs' : 'Preguntas Frecuentes',
            href: `/${locale}/faqs`,
          },
          {
            label: question.length > 50 ? question.substring(0, 50) + '...' : question,
          },
        ]}
      />

      {/* Main Content */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold capitalize">
              {faq.category.replace('-', ' ')}
            </span>
          </div>

          {/* Question */}
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-600 mb-8">
            {question}
          </h1>

          {/* Answer */}
          <div className="prose max-w-none mb-12">
            <div className="bg-cream-50 border-l-4 border-emerald-600 p-8 rounded-r-lg">
              <p className="text-xl text-gray-800 leading-relaxed m-0">
                {answer}
              </p>
            </div>
          </div>

          {/* Additional Context Based on Category */}
          {faq.category === 'costs' && (
            <div className="bg-gold-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-heading font-bold text-navy-600 mb-4">
                {locale === 'en' ? 'Budgeting Tips' : 'Consejos de Presupuesto'}
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-xl">💰</span>
                  <span>
                    {locale === 'en'
                      ? 'Green fees at premier Irish courses range €80-550 per round'
                      : 'Las tarifas de green en campos irlandeses premium van de €80-550 por ronda'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-xl">🏨</span>
                  <span>
                    {locale === 'en'
                      ? 'Accommodation during Ryder Cup week will have premium pricing (book early)'
                      : 'El alojamiento durante la semana de la Ryder Cup tendrá precios premium (reserve temprano)'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-xl">🚗</span>
                  <span>
                    {locale === 'en'
                      ? 'Rental cars: €40-100/day. Book well in advance for September 2027'
                      : 'Autos de alquiler: €40-100/día. Reserve con mucha anticipación para septiembre 2027'}
                  </span>
                </li>
              </ul>
            </div>
          )}

          {faq.category === 'travel' && (
            <div className="bg-navy-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-heading font-bold text-navy-600 mb-4">
                {locale === 'en' ? 'Travel Tips' : 'Consejos de Viaje'}
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-xl">✈️</span>
                  <span>
                    {locale === 'en'
                      ? 'Shannon Airport (SNN) is closest to Adare Manor (25-30 min drive)'
                      : 'El aeropuerto de Shannon (SNN) es el más cercano a Adare Manor (25-30 min en coche)'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-xl">🌤️</span>
                  <span>
                    {locale === 'en'
                      ? 'Pack layers and rain gear - Irish weather changes quickly'
                      : 'Empaque capas y equipo de lluvia - el clima irlandés cambia rápidamente'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-xl">🚙</span>
                  <span>
                    {locale === 'en'
                      ? 'Rental car recommended for golf course access (Ireland drives on left)'
                      : 'Auto de alquiler recomendado para acceso a campos de golf (Irlanda conduce por la izquierda)'}
                  </span>
                </li>
              </ul>
            </div>
          )}

          {faq.category === 'ryder-cup' && (
            <div className="bg-emerald-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-heading font-bold text-navy-600 mb-4">
                {locale === 'en' ? 'Ryder Cup 2027 Key Facts' : 'Datos Clave Ryder Cup 2027'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading font-bold text-emerald-700 mb-2">
                    {locale === 'en' ? 'Dates' : 'Fechas'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'en'
                      ? 'September 28 - October 3, 2027 (Practice: Sept 28-30, Competition: Oct 1-3)'
                      : '28 de septiembre - 3 de octubre de 2027 (Práctica: 28-30 sept, Competición: 1-3 oct)'}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-emerald-700 mb-2">
                    {locale === 'en' ? 'Venue' : 'Sede'}
                  </h3>
                  <p className="text-gray-700">Adare Manor, County Limerick, Ireland</p>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-emerald-700 mb-2">
                    {locale === 'en' ? 'Tickets' : 'Entradas'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'en'
                      ? 'Sold exclusively via RyderCup.com (12-18 months before event)'
                      : 'Vendidas exclusivamente vía RyderCup.com (12-18 meses antes del evento)'}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-emerald-700 mb-2">
                    {locale === 'en' ? 'Format' : 'Formato'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'en'
                      ? 'Team USA vs Team Europe (28 total matches)'
                      : 'Team USA vs Team Europe (28 partidos en total)'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Related Pages */}
          {faq.relatedPages.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-navy-600 mb-6">
                {locale === 'en' ? 'Related Guides' : 'Guías Relacionadas'}
              </h2>
              <div className="flex flex-wrap gap-3">
                {faq.relatedPages.map((page, idx) => {
                  const pageTitles: Record<string, { en: string; es: string }> = {
                    '/ryder-cup-2027-adare-manor': { en: 'Ryder Cup 2027 Guide', es: 'Guía Ryder Cup 2027' },
                    '/ryder-cup-future-venues': { en: 'Future Venues', es: 'Sedes Futuras' },
                    '/ryder-cup-2027-tickets-hospitality': { en: 'Tickets & Hospitality', es: 'Entradas y Hospitalidad' },
                    '/adare-manor-golf-course': { en: 'Adare Manor Course', es: 'Campo Adare Manor' },
                    '/hotels-near-adare-manor': { en: 'Hotels Near Adare', es: 'Hoteles Cerca de Adare' },
                    '/getting-to-adare-manor': { en: 'Getting to Adare', es: 'Cómo Llegar a Adare' },
                    '/golf-courses-near-adare': { en: 'Golf Courses Near Adare', es: 'Campos Cerca de Adare' },
                    '/ireland-golf-trip-itineraries': { en: 'Trip Itineraries', es: 'Itinerarios' },
                  };

                  const title = pageTitles[page]?.[locale] || page;

                  return (
                    <Link
                      key={idx}
                      href={`/${locale}${page}`}
                      className="bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      {title}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Related FAQs */}
          {relatedFAQs.length > 0 && (
            <div>
              <h2 className="text-2xl font-heading font-bold text-navy-600 mb-6">
                {locale === 'en' ? 'Related Questions' : 'Preguntas Relacionadas'}
              </h2>
              <div className="space-y-4">
                {relatedFAQs.map((relatedFAQ) => (
                  <Link
                    key={relatedFAQ.id}
                    href={`/${locale}/faq/${relatedFAQ.id}`}
                    className="block bg-cream-50 hover:bg-cream-100 p-6 rounded-xl transition-colors group"
                  >
                    <h3 className="font-heading font-bold text-lg text-navy-600 group-hover:text-emerald-600 transition-colors mb-2">
                      {getLocalizedValue(relatedFAQ.question, locale)}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {getLocalizedValue(relatedFAQ.answer, locale)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="section-padding bg-navy-600 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === 'en' ? 'Plan Your Ryder Cup 2027 Trip' : 'Planifica Tu Viaje a la Ryder Cup 2027'}
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            {locale === 'en'
              ? 'Get expert guidance on golf courses, hotels, and transportation for your Ireland golf adventure.'
              : 'Obtén orientación experta sobre campos de golf, hoteles y transporte para tu aventura de golf en Irlanda.'}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href={`/${locale}/ireland-golf-trip-itineraries`} className="btn-primary bg-white text-navy-600 hover:bg-gray-100">
              {locale === 'en' ? 'View Itineraries' : 'Ver Itinerarios'}
            </Link>
            <Link href={`/${locale}/faqs`} className="btn-outline border-white text-white hover:bg-white hover:text-navy-600">
              {locale === 'en' ? 'More FAQs' : 'Más Preguntas'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
