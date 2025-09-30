import { Locale, getLocalizedValue } from '@/lib/i18n';
import { locations } from '@/data/locations';
import { notFound } from 'next/navigation';
import HeroBlock from '@/components/blocks/HeroBlock';
import Link from 'next/link';

export async function generateStaticParams() {
  const params = [];
  for (const locale of ['en', 'es']) {
    for (const location of locations) {
      params.push({ locale, location: location.slug });
    }
  }
  return params;
}

export default function GettingToLocationPage({ params }: { params: { locale: Locale; location: string } }) {
  const { locale, location: locationSlug } = params;
  const location = locations.find((loc) => loc.slug === locationSlug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <HeroBlock
        title={
          locale === 'en'
            ? `Getting to ${location.name}`
            : `Cómo Llegar a ${location.name}`
        }
        subtitle={`${location.county}, Ireland`}
        description={
          locale === 'en'
            ? `Complete transportation guide for reaching ${location.name}. Find the best routes from airports, tips for rental cars, and public transport options for your Ireland golf trip.`
            : `Guía completa de transporte para llegar a ${location.name}. Encuentra las mejores rutas desde aeropuertos, consejos para alquiler de autos y opciones de transporte público para tu viaje de golf en Irlanda.`
        }
        backgroundImage="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1600"
        keyFacts={[
          {
            label: locale === 'en' ? 'Nearest Airport' : 'Aeropuerto Más Cercano',
            value: location.nearestAirport,
          },
          {
            label: locale === 'en' ? 'Airport Distance' : 'Distancia Aeropuerto',
            value: location.airportDistance,
          },
          {
            label: locale === 'en' ? 'From Adare Manor' : 'Desde Adare Manor',
            value: location.distanceFromAdare,
          },
          {
            label: locale === 'en' ? 'Drive Time' : 'Tiempo de Conducción',
            value: location.distanceFromAdare.includes('km') ? '~1-2h' : location.distanceFromAdare,
          },
        ]}
      />

      {/* By Air */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en' ? 'By Air' : 'Por Avión'}
          </h2>

          <div className="bg-cream-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-heading font-bold text-emerald-700 mb-4">
              {location.nearestAirport}
            </h3>
            <p className="text-gray-700 mb-4">
              {locale === 'en'
                ? `The nearest airport to ${location.name} is ${location.nearestAirport}, located ${location.airportDistance} away.`
                : `El aeropuerto más cercano a ${location.name} es ${location.nearestAirport}, ubicado a ${location.airportDistance}.`}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-heading font-bold text-navy-600 mb-3">
                  {locale === 'en' ? 'International Routes' : 'Rutas Internacionales'}
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✈</span>
                    {locale === 'en' ? 'Direct flights from US (New York, Boston, Chicago)' : 'Vuelos directos desde EE.UU. (Nueva York, Boston, Chicago)'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✈</span>
                    {locale === 'en' ? 'UK connections (London, Manchester, Birmingham)' : 'Conexiones UK (Londres, Manchester, Birmingham)'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✈</span>
                    {locale === 'en' ? 'European hubs (Paris, Frankfurt, Amsterdam)' : 'Hubs europeos (París, Frankfurt, Ámsterdam)'}
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-bold text-navy-600 mb-3">
                  {locale === 'en' ? 'Airport Facilities' : 'Instalaciones del Aeropuerto'}
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    {locale === 'en' ? 'Car rental services' : 'Servicios de alquiler de autos'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    {locale === 'en' ? 'Taxi and ride-share' : 'Taxi y transporte compartido'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    {locale === 'en' ? 'Private transfer services' : 'Servicios de traslado privado'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {location.slug !== 'adare' && (
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded">
              <p className="text-gray-700">
                <strong className="text-emerald-700">
                  {locale === 'en' ? 'Ryder Cup Tip:' : 'Consejo Ryder Cup:'}
                </strong>{' '}
                {locale === 'en'
                  ? `${location.name} is ${location.distanceFromAdare} from Adare Manor. Consider this when planning your transportation for Ryder Cup 2027 (September 28 - October 3, 2027).`
                  : `${location.name} está a ${location.distanceFromAdare} de Adare Manor. Considere esto al planificar su transporte para la Ryder Cup 2027 (28 de septiembre - 3 de octubre de 2027).`}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* By Car */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en' ? 'By Car' : 'Por Auto'}
          </h2>

          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <h3 className="text-2xl font-heading font-bold text-navy-600 mb-4">
              {locale === 'en' ? 'Rental Car Information' : 'Información de Alquiler de Autos'}
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-bold text-emerald-700 mb-3">
                  {locale === 'en' ? 'Why Rent a Car?' : '¿Por Qué Alquilar un Auto?'}
                </h4>
                <p className="text-gray-700 mb-3">
                  {locale === 'en'
                    ? `Renting a car provides the most flexibility for exploring ${location.name} and the surrounding golf courses. Ireland drives on the left side of the road.`
                    : `Alquilar un auto proporciona la mayor flexibilidad para explorar ${location.name} y los campos de golf circundantes. En Irlanda se conduce por el lado izquierdo.`}
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    {locale === 'en' ? 'Book early during Ryder Cup week (September 2027)' : 'Reserve temprano durante la semana de la Ryder Cup (septiembre 2027)'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    {locale === 'en' ? 'International driving permit recommended' : 'Permiso internacional de conducir recomendado'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    {locale === 'en' ? 'GPS navigation essential for rural areas' : 'Navegación GPS esencial para áreas rurales'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    {locale === 'en' ? 'Comprehensive insurance highly recommended' : 'Seguro integral altamente recomendado'}
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-bold text-emerald-700 mb-3">
                  {locale === 'en' ? 'Driving Routes' : 'Rutas de Conducción'}
                </h4>
                <div className="bg-cream-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-3">
                    <strong>
                      {locale === 'en' ? `From ${location.nearestAirport}:` : `Desde ${location.nearestAirport}:`}
                    </strong>
                  </p>
                  <p className="text-gray-700">
                    {locale === 'en'
                      ? `Follow airport signs to the main motorway. The journey to ${location.name} typically takes 30-90 minutes depending on traffic. Use N/M-designated roads for fastest routes.`
                      : `Siga las señales del aeropuerto hasta la autopista principal. El viaje a ${location.name} generalmente toma 30-90 minutos dependiendo del tráfico. Use carreteras designadas N/M para las rutas más rápidas.`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-heading font-bold text-navy-600 mb-3">
                {locale === 'en' ? 'Parking' : 'Estacionamiento'}
              </h4>
              <p className="text-gray-700">
                {locale === 'en'
                  ? 'Most hotels offer free parking. Golf courses typically provide complimentary parking for players. Street parking available in town centers.'
                  : 'La mayoría de los hoteles ofrecen estacionamiento gratuito. Los campos de golf típicamente proporcionan estacionamiento de cortesía para jugadores. Estacionamiento en calle disponible en centros de ciudades.'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-heading font-bold text-navy-600 mb-3">
                {locale === 'en' ? 'Fuel Stations' : 'Estaciones de Servicio'}
              </h4>
              <p className="text-gray-700">
                {locale === 'en'
                  ? 'Petrol stations available along main routes. Most accept credit cards. Note: fuel is sold in liters and tends to be more expensive than US prices.'
                  : 'Estaciones de servicio disponibles a lo largo de las rutas principales. La mayoría acepta tarjetas de crédito. Nota: el combustible se vende en litros y tiende a ser más caro que los precios de EE.UU.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Public Transport & Taxis */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en' ? 'Public Transport & Taxis' : 'Transporte Público y Taxis'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream-50 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-emerald-700 mb-4">
                {locale === 'en' ? 'Bus Services' : 'Servicios de Autobús'}
              </h3>
              <p className="text-gray-700 mb-4">
                {locale === 'en'
                  ? `Bus Éireann operates regular services connecting ${location.name} to major towns and ${location.nearestAirport}.`
                  : `Bus Éireann opera servicios regulares conectando ${location.name} con las principales ciudades y ${location.nearestAirport}.`}
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  {locale === 'en' ? 'Book tickets online in advance' : 'Reserve boletos en línea con anticipación'}
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  {locale === 'en' ? 'Limited golf club transportation' : 'Transporte limitado para palos de golf'}
                </li>
              </ul>
            </div>

            <div className="bg-cream-50 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-emerald-700 mb-4">
                {locale === 'en' ? 'Taxi & Private Transfers' : 'Taxi y Traslados Privados'}
              </h3>
              <p className="text-gray-700 mb-4">
                {locale === 'en'
                  ? 'Taxis and private transfers offer convenient door-to-door service. Pre-book for Ryder Cup week.'
                  : 'Taxis y traslados privados ofrecen servicio conveniente puerta a puerta. Reserve con anticipación para la semana de la Ryder Cup.'}
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  {locale === 'en' ? 'Airport transfers: €40-100' : 'Traslados al aeropuerto: €40-100'}
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  {locale === 'en' ? 'Golf course shuttles available' : 'Servicios de transporte a campos de golf disponibles'}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-navy-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-heading font-bold mb-4">
              {locale === 'en' ? 'Ryder Cup 2027 Transportation' : 'Transporte Ryder Cup 2027'}
            </h3>
            <p className="mb-4">
              {locale === 'en'
                ? 'Special shuttle services will operate during Ryder Cup week (September 28 - October 3, 2027) from major hotels and towns to Adare Manor. Details to be announced closer to the event.'
                : 'Servicios especiales de transporte operarán durante la semana de la Ryder Cup (28 de septiembre - 3 de octubre de 2027) desde los principales hoteles y ciudades hasta Adare Manor. Detalles por anunciarse más cerca del evento.'}
            </p>
            <p className="text-gold-400 font-semibold">
              {locale === 'en'
                ? 'Book accommodation and transport early to secure the best options.'
                : 'Reserve alojamiento y transporte temprano para asegurar las mejores opciones.'}
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <Link href={`/${locale}/hotels-near-${locationSlug}`} className="btn-primary">
              {locale === 'en' ? 'Find Hotels' : 'Buscar Hoteles'}
            </Link>
            <Link href={`/${locale}/golf-courses-near-${locationSlug}`} className="btn-outline">
              {locale === 'en' ? 'Golf Courses Nearby' : 'Campos de Golf Cerca'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
