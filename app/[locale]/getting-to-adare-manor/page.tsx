import { Locale } from '@/lib/i18n';
import HeroBlock from '@/components/blocks/HeroBlock';

export default function GettingTherePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return (
    <>
      <HeroBlock
        title={locale === 'en' ? 'Getting to Adare Manor' : 'Cómo Llegar a Adare Manor'}
        subtitle={locale === 'en' ? 'Airports & Transport' : 'Aeropuertos y Transporte'}
        description={locale === 'en'
          ? 'Adare Manor is 25-30 minutes from Shannon Airport (SNN) and 2h 30min from Dublin (DUB). Here\'s how to get there for the 2027 Ryder Cup.'
          : 'Adare Manor está a 25-30 minutos del aeropuerto de Shannon (SNN) y a 2h 30min de Dublín (DUB). Así es como llegar para la Ryder Cup 2027.'}
        backgroundImage="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en' ? 'Airport Options' : 'Opciones de Aeropuerto'}
          </h2>

          <div className="space-y-6">
            <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg p-6">
              <h3 className="font-heading font-bold text-xl text-navy-600 mb-3">
                Shannon Airport (SNN) — {locale === 'en' ? 'Recommended' : 'Recomendado'}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>{locale === 'en' ? 'Distance:' : 'Distancia:'}</strong> 25-30 min drive (28km)</li>
                <li><strong>{locale === 'en' ? 'Airlines:' : 'Aerolíneas:'}</strong> Aer Lingus, Ryanair, United, Delta</li>
                <li><strong>{locale === 'en' ? 'Routes:' : 'Rutas:'}</strong> {locale === 'en' ? 'Direct from USA, UK, Europe' : 'Directo desde EE.UU., Reino Unido, Europa'}</li>
                <li><strong>{locale === 'en' ? 'Car rental:' : 'Alquiler de coche:'}</strong> {locale === 'en' ? 'Available at airport' : 'Disponible en el aeropuerto'}</li>
              </ul>
            </div>

            <div className="bg-cream-100 rounded-lg p-6">
              <h3 className="font-heading font-bold text-xl text-navy-600 mb-3">Dublin Airport (DUB)</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>{locale === 'en' ? 'Distance:' : 'Distancia:'}</strong> 2h 30min drive (210km)</li>
                <li><strong>{locale === 'en' ? 'Airlines:' : 'Aerolíneas:'}</strong> {locale === 'en' ? 'More international options' : 'Más opciones internacionales'}</li>
                <li><strong>{locale === 'en' ? 'Routes:' : 'Rutas:'}</strong> {locale === 'en' ? 'Worldwide connections' : 'Conexiones mundiales'}</li>
                <li><strong>{locale === 'en' ? 'Note:' : 'Nota:'}</strong> {locale === 'en' ? 'Longer drive but more flight options' : 'Viaje más largo pero más opciones de vuelo'}</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-navy-600 mt-12 mb-6">
            {locale === 'en' ? 'Ground Transport' : 'Transporte Terrestre'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h4 className="font-heading font-bold text-lg text-navy-600 mb-3">
                {locale === 'en' ? 'Car Rental' : 'Alquiler de Coche'}
              </h4>
              <p className="text-gray-700 mb-3">
                {locale === 'en'
                  ? 'Recommended for flexibility. Book in advance for Ryder Cup week. Drive on the left in Ireland.'
                  : 'Recomendado para flexibilidad. Reserve con anticipación para la semana de la Ryder Cup. Se conduce por la izquierda en Irlanda.'}
              </p>
              <p className="text-sm text-gray-600">
                <strong>{locale === 'en' ? 'Companies:' : 'Compañías:'}</strong> Hertz, Avis, Enterprise, Budget
              </p>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h4 className="font-heading font-bold text-lg text-navy-600 mb-3">
                {locale === 'en' ? 'Private Transfer' : 'Traslado Privado'}
              </h4>
              <p className="text-gray-700 mb-3">
                {locale === 'en'
                  ? 'Pre-book a private car or shuttle from Shannon or Dublin. Expect higher prices during Ryder Cup week.'
                  : 'Reserve un coche privado o shuttle desde Shannon o Dublín. Espere precios más altos durante la semana de la Ryder Cup.'}
              </p>
              <p className="text-sm text-gray-600">
                <strong>{locale === 'en' ? 'Cost:' : 'Costo:'}</strong> €60-€120 (Shannon), €200-€350 (Dublin)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
