import { Locale } from '@/lib/i18n';
import HeroBlock from '@/components/blocks/HeroBlock';

export default function AdareManorCoursePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return (
    <>
      <HeroBlock
        title={locale === 'en' ? 'Adare Manor Golf Course Guide' : 'Guía del Campo de Golf Adare Manor'}
        subtitle={locale === 'en' ? '2027 Ryder Cup Venue' : 'Sede Ryder Cup 2027'}
        description={locale === 'en'
          ? 'Inside Adare Manor\'s championship course: Tom Fazio redesign, 2026 green-fee reference, caddie/cart hire, and how to plan a tee time at the 2027 Ryder Cup venue.'
          : 'Dentro del campo de campeonato de Adare Manor: rediseño Tom Fazio, referencia de tarifa 2026, alquiler de caddie/carrito y cómo planificar un horario en la sede de la Ryder Cup 2027.'}
        backgroundImage="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600"
        keyFacts={[
          { label: locale === 'en' ? 'Designer' : 'Diseñador', value: 'Tom Fazio' },
          { label: locale === 'en' ? 'Type' : 'Tipo', value: 'Championship Parkland' },
          { label: locale === 'en' ? 'Green Fee (2026)' : 'Tarifa (2026)', value: '€550' },
          { label: locale === 'en' ? 'Caddie Fee' : 'Caddie', value: '€120' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-6">
            {locale === 'en' ? 'The Tom Fazio Redesign' : 'El Rediseño de Tom Fazio'}
          </h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              {locale === 'en'
                ? 'Adare Manor underwent a complete Tom Fazio redesign in preparation for the 2027 Ryder Cup. The championship course features modern drainage, sand-capped fairways, and rebuilt greens, all set within the grounds of a 5-star manor estate.'
                : 'Adare Manor se sometió a un rediseño completo de Tom Fazio en preparación para la Ryder Cup 2027. El campo de campeonato presenta drenaje moderno, calles con arena y greens reconstruidos, todo ubicado en los terrenos de una finca señorial de 5 estrellas.'}
            </p>

            <div className="bg-cream-100 rounded-lg p-6 my-6">
              <h3 className="font-heading font-bold text-xl text-navy-600 mb-4">
                {locale === 'en' ? 'Course Highlights' : 'Destacados del Campo'}
              </h3>
              <ul className="space-y-2">
                <li>• 2027 Ryder Cup host venue</li>
                <li>• {locale === 'en' ? 'Tom Fazio championship redesign' : 'Rediseño de campeonato Tom Fazio'}</li>
                <li>• {locale === 'en' ? 'Sand-capped fairways & modern drainage' : 'Calles con arena y drenaje moderno'}</li>
                <li>• {locale === 'en' ? 'On-site 5-star accommodation' : 'Alojamiento 5 estrellas en el sitio'}</li>
                <li>• {locale === 'en' ? 'Caddie service available' : 'Servicio de caddie disponible'}</li>
              </ul>
            </div>

            <h3 className="font-heading font-bold text-2xl text-navy-600 mt-8 mb-4">
              {locale === 'en' ? 'How Much Does it Cost to Play Adare Manor?' : '¿Cuánto Cuesta Jugar en Adare Manor?'}
            </h3>
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
              <p className="mb-4">
                <strong>{locale === 'en' ? 'As of 2026, the resort-guest rate is:' : 'A partir de 2026, la tarifa para huéspedes del resort es:'}</strong>
              </p>
              <ul className="space-y-2 font-semibold">
                <li>• {locale === 'en' ? 'Green fee:' : 'Tarifa green:'} €550 {locale === 'en' ? 'per person' : 'por persona'}</li>
                <li>• {locale === 'en' ? 'Caddie:' : 'Caddie:'} €120</li>
                <li>• {locale === 'en' ? 'Cart:' : 'Carrito:'} €70</li>
                <li>• {locale === 'en' ? 'Club hire:' : 'Alquiler de palos:'} €75</li>
                <li>• {locale === 'en' ? 'Electric trolley:' : 'Trolley eléctrico:'} €25</li>
              </ul>
              <p className="mt-4 text-sm text-gray-700">
                <strong>{locale === 'en' ? 'Note:' : 'Nota:'}</strong>{' '}
                {locale === 'en'
                  ? 'Public access will be limited in 2027 due to Ryder Cup preparations. Always check current availability with the resort.'
                  : 'El acceso público será limitado en 2027 debido a los preparativos de la Ryder Cup. Siempre verifique la disponibilidad actual con el resort.'}
              </p>
            </div>

            <h3 className="font-heading font-bold text-2xl text-navy-600 mt-8 mb-4">
              {locale === 'en' ? 'Booking a Tee Time' : 'Reservar un Horario'}
            </h3>
            <p>
              {locale === 'en'
                ? 'Adare Manor prioritizes tee times for resort guests. Non-resident access is limited and subject to availability, especially in 2026-2027 leading up to the Ryder Cup. The course will be closed to the public during tournament preparations. Contact the resort directly to inquire about tee times.'
                : 'Adare Manor prioriza los horarios para los huéspedes del resort. El acceso de no residentes es limitado y está sujeto a disponibilidad, especialmente en 2026-2027 antes de la Ryder Cup. El campo estará cerrado al público durante los preparativos del torneo. Contacte directamente al resort para consultar sobre horarios.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
