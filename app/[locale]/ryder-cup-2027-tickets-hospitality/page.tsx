import { Locale } from '@/lib/i18n';
import { generateMetadata as genMeta } from '@/lib/seo';
import HeroBlock from '@/components/blocks/HeroBlock';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return genMeta({
    title: locale === 'en'
      ? 'Ryder Cup 2027 Tickets & Hospitality — How to Buy'
      : 'Entradas y Hospitalidad Ryder Cup 2027 — Cómo Comprar',
    description: locale === 'en'
      ? 'Everything you need to know about Ryder Cup 2027 tickets: when they go on sale, pricing, hospitality packages, and how to buy from RyderCup.com.'
      : 'Todo lo que necesitas saber sobre las entradas de la Ryder Cup 2027: cuándo salen a la venta, precios, paquetes de hospitalidad y cómo comprar en RyderCup.com.',
    keywords: ['ryder cup tickets', 'ryder cup 2027 tickets', 'adare manor tickets', 'hospitality packages'],
    locale,
  });
}

export default function TicketsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return (
    <>
      <div className="container-custom">
        <Breadcrumbs
          items={[
            {
              label: locale === 'en' ? 'Tickets & Hospitality' : 'Entradas y Hospitalidad',
            },
          ]}
          locale={locale}
        />
      </div>

      <HeroBlock
        title={locale === 'en' ? 'Ryder Cup 2027 Tickets & Hospitality' : 'Entradas y Hospitalidad Ryder Cup 2027'}
        subtitle={locale === 'en' ? 'How to Attend' : 'Cómo Asistir'}
        description={locale === 'en'
          ? 'Tickets for the 2027 Ryder Cup at Adare Manor are sold exclusively through RyderCup.com. Learn when they go on sale, pricing, and what to expect.'
          : 'Las entradas para la Ryder Cup 2027 en Adare Manor se venden exclusivamente a través de RyderCup.com. Aprende cuándo salen a la venta, precios y qué esperar.'}
        backgroundImage="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600"
        ctaButtons={[
          { text: locale === 'en' ? 'Official Ryder Cup Site' : 'Sitio Oficial Ryder Cup', href: 'https://www.rydercup.com', primary: true },
          { text: locale === 'en' ? 'Find Hotels' : 'Buscar Hoteles', href: `/${locale}/hotels-near-adare-manor` },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-6">
            {locale === 'en' ? 'How Ryder Cup Tickets Work' : 'Cómo Funcionan las Entradas'}
          </h2>

          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>{locale === 'en'
              ? 'Ryder Cup tickets are sold exclusively through RyderCup.com. Adare Manor does not sell tickets directly. Here\'s what you need to know:'
              : 'Las entradas de la Ryder Cup se venden exclusivamente a través de RyderCup.com. Adare Manor no vende entradas directamente. Esto es lo que necesitas saber:'}</p>

            <div className="bg-cream-100 rounded-lg p-6 my-6">
              <h3 className="font-heading font-bold text-xl text-navy-600 mb-4">
                {locale === 'en' ? 'Ticket Types' : 'Tipos de Entradas'}
              </h3>
              <ul className="space-y-3">
                <li><strong>{locale === 'en' ? 'Practice Round Tickets' : 'Entradas Rondas de Práctica'}</strong> — Sept 13-16, 2027</li>
                <li><strong>{locale === 'en' ? 'Competition Tickets' : 'Entradas Competición'}</strong> — Sept 17-19, 2027 (Friday-Sunday)</li>
                <li><strong>{locale === 'en' ? 'Hospitality Packages' : 'Paquetes Hospitalidad'}</strong> — {locale === 'en' ? 'Premium access with food/drink' : 'Acceso premium con comida/bebida'}</li>
              </ul>
            </div>

            <h3 className="font-heading font-bold text-2xl text-navy-600 mt-8 mb-4">
              {locale === 'en' ? 'When Do Tickets Go On Sale?' : '¿Cuándo Salen a la Venta?'}
            </h3>
            <p>{locale === 'en'
              ? 'Tickets typically go on sale 12-18 months before the event. For the 2027 Ryder Cup, expect ticket sales to open in early 2026. Sign up for alerts at RyderCup.com.'
              : 'Las entradas suelen salir a la venta 12-18 meses antes del evento. Para la Ryder Cup 2027, se espera que la venta de entradas comience a principios de 2026. Regístrate para recibir alertas en RyderCup.com.'}</p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg my-6">
              <p className="font-semibold text-gray-800">
                {locale === 'en'
                  ? '⚠️ Important: Only buy tickets from RyderCup.com. Avoid third-party resellers and unofficial sites.'
                  : '⚠️ Importante: Solo compre entradas en RyderCup.com. Evite revendedores y sitios no oficiales.'}
              </p>
            </div>

            <h3 className="font-heading font-bold text-2xl text-navy-600 mt-8 mb-4">
              {locale === 'en' ? 'Accommodation During Ryder Cup Week' : 'Alojamiento Durante la Semana'}
            </h3>
            <p>{locale === 'en'
              ? 'Rooms at Adare Manor are extremely limited during Ryder Cup week and typically reserved for teams, officials, and hospitality guests. Book hotels in Adare Village, Limerick City, or surrounding areas as early as possible.'
              : 'Las habitaciones en Adare Manor son extremadamente limitadas durante la semana de la Ryder Cup y típicamente reservadas para equipos, oficiales e invitados de hospitalidad. Reserve hoteles en Adare Village, Limerick City o áreas circundantes lo antes posible.'}</p>

            <div className="text-center mt-8">
              <Link href={`/${locale}/hotels-near-adare-manor`} className="btn-primary">
                {locale === 'en' ? 'View Hotels Near Adare Manor' : 'Ver Hoteles Cerca de Adare Manor'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
