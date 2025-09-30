import { Locale } from '@/lib/i18n';
import HeroBlock from '@/components/blocks/HeroBlock';
import { generateMetadata as genMeta } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return genMeta({
    title: locale === 'en'
      ? 'Getting to Adare Manor | Shannon & Dublin Airport Transport Guide'
      : 'Cómo Llegar a Adare Manor | Guía Transporte Shannon y Dublín',
    description: locale === 'en'
      ? 'Complete transport guide to Adare Manor for Ryder Cup 2027. Shannon Airport 25min, Dublin 2.5hrs. Car rental, shuttle, taxi options & driving directions to County Limerick.'
      : 'Guía completa de transporte a Adare Manor para Ryder Cup 2027. Aeropuerto Shannon 25min, Dublín 2.5hrs. Alquiler de coches, shuttle, taxi y direcciones al condado de Limerick.',
    keywords: ['shannon airport to adare manor', 'getting to adare', 'ireland transport', 'limerick airport', 'ryder cup travel'],
    locale,
    canonicalUrl: `https://www.adarelimerickgolf.com/${locale}/getting-to-adare-manor`,
  });
}

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
                ✈️ Shannon Airport (SNN) — {locale === 'en' ? 'Recommended' : 'Recomendado'}
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>{locale === 'en' ? 'Distance:' : 'Distancia:'}</strong> 25-30 min drive (28km) | <strong>{locale === 'en' ? 'Coordinates:' : 'Coordenadas:'}</strong> 52.7021°N, 8.9248°W
              </p>

              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-heading font-bold text-emerald-700 mb-3">
                  {locale === 'en' ? 'Direct Flights from USA to Shannon (SNN)' : 'Vuelos Directos desde EE.UU. a Shannon (SNN)'}
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-navy-600 mb-1">
                      🇺🇸 {locale === 'en' ? 'New York (JFK, Newark EWR)' : 'Nueva York (JFK, Newark EWR)'}
                    </p>
                    <p className="text-gray-700">
                      <strong>{locale === 'en' ? 'Airlines:' : 'Aerolíneas:'}</strong> Aer Lingus, United |
                      <strong> {locale === 'en' ? 'Flight time:' : 'Tiempo:'}</strong> 6h 30min |
                      <strong> {locale === 'en' ? 'Frequency:' : 'Frecuencia:'}</strong> {locale === 'en' ? 'Daily (Summer), 4-5x/week (Off-season)' : 'Diario (Verano), 4-5x/semana (Temporada baja)'}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-navy-600 mb-1">
                      🇺🇸 {locale === 'en' ? 'Boston (BOS)' : 'Boston (BOS)'}
                    </p>
                    <p className="text-gray-700">
                      <strong>{locale === 'en' ? 'Airlines:' : 'Aerolíneas:'}</strong> Aer Lingus |
                      <strong> {locale === 'en' ? 'Flight time:' : 'Tiempo:'}</strong> 6h 15min |
                      <strong> {locale === 'en' ? 'Frequency:' : 'Frecuencia:'}</strong> {locale === 'en' ? 'Daily (May-Sept), 3-4x/week (Oct-Apr)' : 'Diario (May-Sept), 3-4x/semana (Oct-Abr)'}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-navy-600 mb-1">
                      🇺🇸 {locale === 'en' ? 'Chicago (ORD)' : 'Chicago (ORD)'}
                    </p>
                    <p className="text-gray-700">
                      <strong>{locale === 'en' ? 'Airlines:' : 'Aerolíneas:'}</strong> United |
                      <strong> {locale === 'en' ? 'Flight time:' : 'Tiempo:'}</strong> 7h 30min |
                      <strong> {locale === 'en' ? 'Frequency:' : 'Frecuencia:'}</strong> {locale === 'en' ? 'Seasonal (May-Oct)' : 'Estacional (May-Oct)'}
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-gold-50 p-3 rounded">
                  <p className="text-sm text-gray-800">
                    <strong className="text-gold-800">💡 {locale === 'en' ? 'Ryder Cup Tip:' : 'Consejo Ryder Cup:'}</strong> {' '}
                    {locale === 'en'
                      ? 'Book flights 4-6 months ahead for September 2027. Airlines typically add extra frequencies for major sporting events like the Ryder Cup.'
                      : 'Reserve vuelos 4-6 meses antes para septiembre 2027. Las aerolíneas típicamente agregan frecuencias extra para eventos deportivos importantes como la Ryder Cup.'}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-heading font-bold text-emerald-700 mb-3">
                  {locale === 'en' ? 'Connecting Flights via European Hubs' : 'Vuelos con Conexión vía Hubs Europeos'}
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>London (LHR, LGW):</strong> {locale === 'en' ? 'British Airways, Ryanair, Aer Lingus | Multiple daily flights' : 'British Airways, Ryanair, Aer Lingus | Múltiples vuelos diarios'}</li>
                  <li><strong>Paris (CDG):</strong> {locale === 'en' ? 'Air France, Aer Lingus | 2-3x daily' : 'Air France, Aer Lingus | 2-3x diario'}</li>
                  <li><strong>Frankfurt (FRA):</strong> {locale === 'en' ? 'Lufthansa | Daily service' : 'Lufthansa | Servicio diario'}</li>
                  <li><strong>Amsterdam (AMS):</strong> {locale === 'en' ? 'KLM | Daily service' : 'KLM | Servicio diario'}</li>
                </ul>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-700">
                  <strong>{locale === 'en' ? 'Airport Facilities:' : 'Instalaciones:'}</strong> {locale === 'en' ? 'Car rental (Hertz, Avis, Enterprise, Budget), Taxis, Currency exchange, Duty-free, Restaurants' : 'Alquiler de autos (Hertz, Avis, Enterprise, Budget), Taxis, Cambio de moneda, Duty-free, Restaurantes'}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>{locale === 'en' ? 'US Pre-clearance:' : 'Pre-clearance EE.UU.:'}</strong> {locale === 'en' ? 'Shannon offers US Customs pre-clearance, so you clear customs in Ireland before departing (saves time on arrival in USA)' : 'Shannon ofrece pre-clearance de aduanas de EE.UU., por lo que pasa por aduanas en Irlanda antes de partir (ahorra tiempo a la llegada en EE.UU.)'}
                </p>
              </div>
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
            {locale === 'en' ? 'Ground Transport from Shannon Airport' : 'Transporte Terrestre desde Aeropuerto Shannon'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border-2 border-emerald-300 rounded-lg p-6">
              <h4 className="font-heading font-bold text-lg text-navy-600 mb-3">
                🚗 {locale === 'en' ? 'Car Rental (Recommended)' : 'Alquiler de Coche (Recomendado)'}
              </h4>
              <p className="text-gray-700 mb-4">
                {locale === 'en'
                  ? 'Best option for visiting multiple golf courses. All major rental companies have desks at Shannon Airport arrivals.'
                  : 'Mejor opción para visitar múltiples campos de golf. Todas las compañías principales tienen mostradores en llegadas de Shannon.'}
              </p>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p><strong>{locale === 'en' ? 'Route to Adare Manor:' : 'Ruta a Adare Manor:'}</strong> N18 → N21 → R519 (25-30 min)</p>
                <p><strong>{locale === 'en' ? 'Cost:' : 'Costo:'}</strong> €40-100/day {locale === 'en' ? '(book early for Ryder Cup week)' : '(reserve temprano para semana Ryder Cup)'}</p>
                <p><strong>{locale === 'en' ? 'Companies:' : 'Compañías:'}</strong> Hertz, Avis, Enterprise, Budget, Sixt</p>
              </div>
              <div className="bg-gold-50 p-3 rounded text-xs">
                <p className="font-semibold text-gold-800 mb-1">⚠️ {locale === 'en' ? 'Important:' : 'Importante:'}</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• {locale === 'en' ? 'Ireland drives on the LEFT side of the road' : 'Irlanda conduce por el lado IZQUIERDO'}</li>
                  <li>• {locale === 'en' ? 'International driving permit recommended' : 'Permiso internacional recomendado'}</li>
                  <li>• {locale === 'en' ? 'Most rentals are manual transmission (automatic costs more)' : 'Mayoría son transmisión manual (automático cuesta más)'}</li>
                  <li>• {locale === 'en' ? 'Full insurance highly recommended' : 'Seguro completo altamente recomendado'}</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h4 className="font-heading font-bold text-lg text-navy-600 mb-3">
                🚕 {locale === 'en' ? 'Taxi / Private Transfer' : 'Taxi / Traslado Privado'}
              </h4>
              <p className="text-gray-700 mb-4">
                {locale === 'en'
                  ? 'Good option if not playing multiple courses. Pre-book for guaranteed availability during Ryder Cup.'
                  : 'Buena opción si no juega múltiples campos. Reserve con anticipación para disponibilidad garantizada durante Ryder Cup.'}
              </p>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p><strong>{locale === 'en' ? 'Shannon to Adare Manor:' : 'Shannon a Adare Manor:'}</strong> €60-€90</p>
                <p><strong>{locale === 'en' ? 'Dublin to Adare Manor:' : 'Dublín a Adare Manor:'}</strong> €200-€350</p>
                <p><strong>{locale === 'en' ? 'Travel time:' : 'Tiempo viaje:'}</strong> 25-30 min {locale === 'en' ? '(from Shannon)' : '(desde Shannon)'}</p>
              </div>
              <div className="bg-cream-50 p-3 rounded text-xs">
                <p className="font-semibold mb-1">{locale === 'en' ? 'Taxi Companies:' : 'Compañías Taxi:'}</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Shannon Cabs: +353 61 362 222</li>
                  <li>• Limerick Taxis: +353 61 417 417</li>
                  <li>• {locale === 'en' ? 'Or use: FREE NOW app (Irish Uber alternative)' : 'O use: FREE NOW app (alternativa irlandesa a Uber)'}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-navy-600 text-white rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-heading font-bold mb-4">
              🚌 {locale === 'en' ? 'Ryder Cup 2027 Special Transport' : 'Transporte Especial Ryder Cup 2027'}
            </h3>
            <p className="text-gray-200 mb-4">
              {locale === 'en'
                ? 'Official shuttle buses will operate during tournament week (Sept 28 - Oct 3, 2027) from Shannon Airport, Limerick City, and major hotels to Adare Manor.'
                : 'Autobuses shuttle oficiales operarán durante la semana del torneo (28 sept - 3 oct 2027) desde Aeropuerto Shannon, Limerick City y hoteles principales a Adare Manor.'}
            </p>
            <ul className="space-y-2 text-emerald-300">
              <li>✓ {locale === 'en' ? 'Pre-book via official Ryder Cup website' : 'Reserve anticipadamente vía sitio web oficial Ryder Cup'}</li>
              <li>✓ {locale === 'en' ? 'Park & Ride facilities at designated locations' : 'Instalaciones Park & Ride en ubicaciones designadas'}</li>
              <li>✓ {locale === 'en' ? 'Avoid parking at venue (limited capacity)' : 'Evite estacionar en el lugar (capacidad limitada)'}</li>
            </ul>
            <p className="text-sm text-gray-300 mt-4">
              {locale === 'en' ? 'Details to be announced 6-12 months before the event.' : 'Detalles por anunciar 6-12 meses antes del evento.'}
            </p>
          </div>

          <div className="bg-cream-100 rounded-xl p-6">
            <h3 className="text-xl font-heading font-bold text-navy-600 mb-4">
              💡 {locale === 'en' ? 'Practical Tips for First-Time Visitors' : 'Consejos Prácticos para Visitantes Primerizos'}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-navy-600 mb-2">🗺️ {locale === 'en' ? 'Navigation:' : 'Navegación:'}</p>
                <ul className="space-y-1">
                  <li>• {locale === 'en' ? 'GPS highly recommended for rural roads' : 'GPS altamente recomendado para caminos rurales'}</li>
                  <li>• {locale === 'en' ? 'Download offline maps (spotty cell coverage)' : 'Descargue mapas offline (cobertura celular irregular)'}</li>
                  <li>• {locale === 'en' ? 'Use Eircode (Irish postcode) for exact locations' : 'Use Eircode (código postal irlandés) para ubicaciones exactas'}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-navy-600 mb-2">⛽ {locale === 'en' ? 'Fuel & Parking:' : 'Combustible y Estacionamiento:'}</p>
                <ul className="space-y-1">
                  <li>• {locale === 'en' ? 'Petrol stations open 7am-10pm (some 24hr)' : 'Estaciones de servicio abren 7am-10pm (algunas 24h)'}</li>
                  <li>• {locale === 'en' ? 'Most golf courses offer free parking' : 'Mayoría de campos ofrecen estacionamiento gratuito'}</li>
                  <li>• {locale === 'en' ? 'Adare Village has paid parking (€2-4/day)' : 'Adare Village tiene estacionamiento pago (€2-4/día)'}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-navy-600 mb-2">💶 {locale === 'en' ? 'Currency & Payments:' : 'Moneda y Pagos:'}</p>
                <ul className="space-y-1">
                  <li>• {locale === 'en' ? 'Ireland uses Euro (€), not British Pound' : 'Irlanda usa Euro (€), no Libra Británica'}</li>
                  <li>• {locale === 'en' ? 'Credit cards widely accepted' : 'Tarjetas de crédito ampliamente aceptadas'}</li>
                  <li>• {locale === 'en' ? 'ATMs available at airports and major towns' : 'ATMs disponibles en aeropuertos y ciudades principales'}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-navy-600 mb-2">📱 {locale === 'en' ? 'Connectivity:' : 'Conectividad:'}</p>
                <ul className="space-y-1">
                  <li>• {locale === 'en' ? 'Buy local SIM at Shannon Airport (€10-20)' : 'Compre SIM local en Shannon Airport (€10-20)'}</li>
                  <li>• {locale === 'en' ? 'Providers: Vodafone, Three, Eir' : 'Proveedores: Vodafone, Three, Eir'}</li>
                  <li>• {locale === 'en' ? 'Most hotels/courses offer free WiFi' : 'Mayoría hoteles/campos ofrecen WiFi gratuito'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
