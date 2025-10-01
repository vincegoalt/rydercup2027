import { Locale } from '@/lib/i18n';
import HeroBlock from '@/components/blocks/HeroBlock';
import ContactForm from '@/components/ContactForm';
import Breadcrumbs from '@/components/Breadcrumbs';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return {
    title:
      locale === 'en'
        ? 'Contact Us | Ireland Golf Trip Planning | Ryder Cup 2027'
        : 'Contáctanos | Planificación Viaje Golf Irlanda | Ryder Cup 2027',
    description:
      locale === 'en'
        ? 'Get personalized help planning your Ireland golf trip for Ryder Cup 2027. Expert advice on courses, accommodation, itineraries, and tickets.'
        : 'Obtén ayuda personalizada planificando tu viaje de golf a Irlanda para Ryder Cup 2027. Consejos expertos sobre campos, alojamiento, itinerarios y entradas.',
    alternates: {
      canonical: `https://www.adarelimerickgolf.com/${locale}/contact`,
      languages: {
        en: 'https://www.adarelimerickgolf.com/en/contact',
        es: 'https://www.adarelimerickgolf.com/es/contact',
      },
    },
  };
}

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return (
    <>
      <div className="container-custom">
        <Breadcrumbs
          items={[
            {
              label: locale === 'en' ? 'Contact' : 'Contacto',
            },
          ]}
          locale={locale}
        />
      </div>

      <HeroBlock
        title={locale === 'en' ? 'Plan Your Perfect Ireland Golf Trip' : 'Planifica Tu Viaje de Golf Perfecto a Irlanda'}
        subtitle={
          locale === 'en'
            ? 'Get expert help with your Ryder Cup 2027 trip'
            : 'Obtén ayuda experta con tu viaje Ryder Cup 2027'
        }
        description={
          locale === 'en'
            ? 'Whether you need help choosing courses, finding accommodation, or planning your itinerary - we\'re here to help make your Ireland golf trip unforgettable.'
            : 'Ya sea que necesites ayuda eligiendo campos, encontrando alojamiento o planificando tu itinerario: estamos aquí para hacer tu viaje de golf a Irlanda inolvidable.'
        }
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600"
      />

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Why Contact Us */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy-600 mb-6">
                {locale === 'en' ? 'How We Can Help' : 'Cómo Podemos Ayudar'}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">⛳</div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                      {locale === 'en' ? 'Course Recommendations' : 'Recomendaciones de Campos'}
                    </h3>
                    <p className="text-gray-700">
                      {locale === 'en'
                        ? 'Get personalized recommendations based on your skill level, budget, and preferences.'
                        : 'Obtén recomendaciones personalizadas basadas en tu nivel, presupuesto y preferencias.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">🏨</div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                      {locale === 'en' ? 'Accommodation Advice' : 'Consejos de Alojamiento'}
                    </h3>
                    <p className="text-gray-700">
                      {locale === 'en'
                        ? 'Find the best places to stay near Adare Manor and your chosen golf courses.'
                        : 'Encuentra los mejores lugares para alojarte cerca de Adare Manor y los campos elegidos.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">📅</div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                      {locale === 'en' ? 'Custom Itineraries' : 'Itinerarios Personalizados'}
                    </h3>
                    <p className="text-gray-700">
                      {locale === 'en'
                        ? 'We\'ll help you plan the perfect Ireland golf trip tailored to your schedule and interests.'
                        : 'Te ayudaremos a planificar el viaje de golf perfecto adaptado a tu horario e intereses.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">🎟️</div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                      {locale === 'en' ? 'Ryder Cup 2027 Tickets' : 'Entradas Ryder Cup 2027'}
                    </h3>
                    <p className="text-gray-700">
                      {locale === 'en'
                        ? 'Get the latest updates on Ryder Cup ticket sales, packages, and availability.'
                        : 'Obtén las últimas actualizaciones sobre venta de entradas, paquetes y disponibilidad Ryder Cup.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8 text-center">
            {locale === 'en' ? 'Common Questions' : 'Preguntas Comunes'}
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                {locale === 'en'
                  ? 'How far in advance should I book my Ryder Cup 2027 trip?'
                  : '¿Con cuánta anticipación debo reservar mi viaje Ryder Cup 2027?'}
              </h3>
              <p className="text-gray-700">
                {locale === 'en'
                  ? 'We recommend booking accommodation at least 12-18 months in advance (by late 2025/early 2026). Golf courses can be booked 6-12 months ahead.'
                  : 'Recomendamos reservar alojamiento al menos 12-18 meses antes (para finales 2025/principios 2026). Los campos de golf se pueden reservar 6-12 meses antes.'}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                {locale === 'en'
                  ? 'Do you sell Ryder Cup tickets or golf course packages?'
                  : '¿Venden entradas Ryder Cup o paquetes de campos de golf?'}
              </h3>
              <p className="text-gray-700">
                {locale === 'en'
                  ? 'No - we\'re an independent information resource, not a tour operator. We provide expert guidance and recommendations to help you book directly with official sources.'
                  : 'No: somos un recurso de información independiente, no un operador turístico. Proporcionamos orientación experta y recomendaciones para ayudarte a reservar directamente con fuentes oficiales.'}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                {locale === 'en'
                  ? 'What\'s the best time of year to visit Ireland for golf?'
                  : '¿Cuál es la mejor época del año para visitar Irlanda para golf?'}
              </h3>
              <p className="text-gray-700">
                {locale === 'en'
                  ? 'May-September offers the best weather, though it\'s peak season with higher prices. April and October can offer great value with decent weather.'
                  : 'Mayo-septiembre ofrece el mejor clima, aunque es temporada alta con precios más altos. Abril y octubre pueden ofrecer gran valor con clima decente.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-emerald-600 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === 'en' ? 'Ready to Plan Your Trip?' : '¿Listo para Planificar Tu Viaje?'}
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            {locale === 'en'
              ? 'Browse our guides and resources to start planning your perfect Ireland golf adventure.'
              : 'Explora nuestras guías y recursos para comenzar a planificar tu aventura de golf perfecta en Irlanda.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale}/ryder-cup-2027-adare-manor`}
              className="btn-primary bg-white text-emerald-600 hover:bg-gray-100"
            >
              {locale === 'en' ? 'Ryder Cup 2027 Guide' : 'Guía Ryder Cup 2027'}
            </a>
            <a
              href={`/${locale}/ireland-golf-trip-itineraries`}
              className="btn-primary bg-emerald-700 text-white hover:bg-emerald-800 border-2 border-white"
            >
              {locale === 'en' ? 'View Itineraries' : 'Ver Itinerarios'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
