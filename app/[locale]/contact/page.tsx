import { Locale } from '@/lib/i18n';
import HeroBlock from '@/components/blocks/HeroBlock';

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return (
    <>
      <HeroBlock
        title={locale === 'en' ? 'Contact Us' : 'Contáctanos'}
        subtitle={locale === 'en' ? 'Get in Touch' : 'Ponte en Contacto'}
        description={locale === 'en'
          ? 'Have questions about the Ryder Cup 2027 or planning your Ireland golf trip? Reach out to us.'
          : '¿Tienes preguntas sobre la Ryder Cup 2027 o planificar tu viaje de golf a Irlanda? Contáctanos.'}
        backgroundImage="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <div className="bg-cream-100 rounded-lg p-8">
            <h2 className="text-2xl font-heading font-bold text-navy-600 mb-6">
              {locale === 'en' ? 'Contact Information' : 'Información de Contacto'}
            </h2>

            <div className="space-y-4 text-gray-700">
              <div>
                <strong className="text-navy-600">{locale === 'en' ? 'Email:' : 'Correo:'}</strong>
                <p>info@placeholder.com</p>
              </div>

              <div>
                <strong className="text-navy-600">{locale === 'en' ? 'Phone:' : 'Teléfono:'}</strong>
                <p>+353 1 234 5678</p>
              </div>

              <div>
                <strong className="text-navy-600">{locale === 'en' ? 'Address:' : 'Dirección:'}</strong>
                <p>Limerick, Ireland</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg border border-gray-300">
              <p className="text-sm text-gray-600">
                <strong className="text-navy-600">{locale === 'en' ? 'Note:' : 'Nota:'}</strong>{' '}
                {locale === 'en'
                  ? 'For Ryder Cup tickets, please visit RyderCup.com. For Adare Manor reservations, contact the resort directly.'
                  : 'Para entradas de la Ryder Cup, visite RyderCup.com. Para reservas de Adare Manor, contacte directamente al resort.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
