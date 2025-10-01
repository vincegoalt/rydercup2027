import { Locale, getLocalizedValue } from '@/lib/i18n';
import { generateMetadata as genMeta, generateEventSchema, generateFAQSchema } from '@/lib/seo';
import { faqs } from '@/data/faqs';
import HeroBlock from '@/components/blocks/HeroBlock';
import EmailSignup from '@/components/EmailSignup';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return genMeta({
    title: locale === 'en'
      ? 'Ryder Cup 2027 at Adare Manor — Dates, Travel & Where to Stay'
      : 'Ryder Cup 2027 en Adare Manor — Fechas, Viaje y Dónde Alojarse',
    description: locale === 'en'
      ? 'Plan your Ryder Cup 2027 trip to Adare Manor, County Limerick: verified dates, closest airports, hotels in Adare, and golf you can play nearby.'
      : 'Planifica tu viaje a la Ryder Cup 2027 en Adare Manor, condado de Limerick: fechas verificadas, aeropuertos más cercanos, hoteles en Adare y golf que puedes jugar cerca.',
    keywords: ['ryder cup 2027', 'adare manor', 'limerick ireland', 'ryder cup tickets', 'golf ireland'],
    locale,
    canonicalUrl: `https://www.adarelimerickgolf.com/${locale}/ryder-cup-2027-adare-manor`,
  });
}

export default function RyderCup2027Page({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  const ryderCupFaqs = faqs.filter((faq) => faq.category === 'ryder-cup');

  const eventSchema = generateEventSchema();
  const faqSchema = generateFAQSchema(
    ryderCupFaqs.map((faq) => ({
      question: getLocalizedValue(faq.question, locale),
      answer: getLocalizedValue(faq.answer, locale),
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        locale={locale}
        items={[
          {
            label: 'Ryder Cup 2027',
          },
        ]}
      />

      <HeroBlock
        title={
          locale === 'en'
            ? 'Ryder Cup 2027 at Adare Manor'
            : 'Ryder Cup 2027 en Adare Manor'
        }
        subtitle={locale === 'en' ? 'September 17-19, 2027' : '17-19 de Septiembre, 2027'}
        description={
          locale === 'en'
            ? 'The Ryder Cup returns to Ireland Sept 17–19, 2027 at Adare Manor in County Limerick. Plan your trip with verified dates, travel options, nearby hotels, and golf you can play while you\'re here.'
            : 'La Ryder Cup regresa a Irlanda del 17 al 19 de septiembre de 2027 en Adare Manor, condado de Limerick. Planifica tu viaje con fechas verificadas, opciones de viaje, hoteles cercanos y golf que puedes jugar mientras estás aquí.'
        }
        backgroundImage="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600"
        ctaButtons={[
          {
            text: locale === 'en' ? 'Find Hotels' : 'Buscar Hoteles',
            href: `/${locale}/hotels-near-adare-manor`,
            primary: true,
          },
          {
            text: locale === 'en' ? 'Play Golf Nearby' : 'Jugar Golf Cerca',
            href: `/${locale}/golf/courses-near/adare`,
          },
        ]}
        keyFacts={[
          { label: locale === 'en' ? 'Dates' : 'Fechas', value: 'Sept 17-19, 2027' },
          { label: locale === 'en' ? 'Venue' : 'Sede', value: 'Adare Manor' },
          { label: locale === 'en' ? 'Location' : 'Ubicación', value: 'Limerick, Ireland' },
          { label: locale === 'en' ? 'Last Updated' : 'Actualizado', value: locale === 'en' ? 'Jan 2025' : 'Ene 2025' },
        ]}
      />

      {/* Competition Schedule */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8 text-center">
            {locale === 'en' ? 'Competition Schedule' : 'Calendario de Competición'}
          </h2>

          <div className="space-y-6">
            {/* Friday */}
            <div className="bg-emerald-50 rounded-xl p-6 border-l-4 border-emerald-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-heading font-bold">
                  {locale === 'en' ? 'Friday, Sept 17' : 'Viernes, 17 Sept'}
                </div>
                <span className="text-emerald-700 font-semibold">
                  {locale === 'en' ? 'Day 1 — Morning & Afternoon Sessions' : 'Día 1 — Sesiones Mañana y Tarde'}
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-heading font-bold text-navy-600 mb-2">
                    {locale === 'en' ? 'Morning Session (8:00 AM)' : 'Sesión Mañana (8:00 AM)'}
                  </h4>
                  <p className="text-gray-700">
                    <strong>{locale === 'en' ? 'Format:' : 'Formato:'}</strong> {locale === 'en' ? 'Foursomes (Alternate Shot)' : 'Foursomes (Golpe Alternado)'}
                  </p>
                  <p className="text-gray-700">
                    <strong>{locale === 'en' ? 'Matches:' : 'Partidos:'}</strong> 4 {locale === 'en' ? 'matches' : 'partidos'}
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-navy-600 mb-2">
                    {locale === 'en' ? 'Afternoon Session (1:00 PM)' : 'Sesión Tarde (1:00 PM)'}
                  </h4>
                  <p className="text-gray-700">
                    <strong>{locale === 'en' ? 'Format:' : 'Formato:'}</strong> {locale === 'en' ? 'Fourballs (Best Ball)' : 'Fourballs (Mejor Bola)'}
                  </p>
                  <p className="text-gray-700">
                    <strong>{locale === 'en' ? 'Matches:' : 'Partidos:'}</strong> 4 {locale === 'en' ? 'matches' : 'partidos'}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-emerald-200">
                  <p className="text-emerald-700 font-semibold">
                    {locale === 'en' ? '8 points available' : '8 puntos disponibles'}
                  </p>
                </div>
              </div>
            </div>

            {/* Saturday */}
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-heading font-bold">
                  {locale === 'en' ? 'Saturday, Sept 18' : 'Sábado, 18 Sept'}
                </div>
                <span className="text-blue-700 font-semibold">
                  {locale === 'en' ? 'Day 2 — Morning & Afternoon Sessions' : 'Día 2 — Sesiones Mañana y Tarde'}
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-heading font-bold text-navy-600 mb-2">
                    {locale === 'en' ? 'Morning Session (8:00 AM)' : 'Sesión Mañana (8:00 AM)'}
                  </h4>
                  <p className="text-gray-700">
                    <strong>{locale === 'en' ? 'Format:' : 'Formato:'}</strong> {locale === 'en' ? 'Foursomes (Alternate Shot)' : 'Foursomes (Golpe Alternado)'}
                  </p>
                  <p className="text-gray-700">
                    <strong>{locale === 'en' ? 'Matches:' : 'Partidos:'}</strong> 4 {locale === 'en' ? 'matches' : 'partidos'}
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-navy-600 mb-2">
                    {locale === 'en' ? 'Afternoon Session (1:00 PM)' : 'Sesión Tarde (1:00 PM)'}
                  </h4>
                  <p className="text-gray-700">
                    <strong>{locale === 'en' ? 'Format:' : 'Formato:'}</strong> {locale === 'en' ? 'Fourballs (Best Ball)' : 'Fourballs (Mejor Bola)'}
                  </p>
                  <p className="text-gray-700">
                    <strong>{locale === 'en' ? 'Matches:' : 'Partidos:'}</strong> 4 {locale === 'en' ? 'matches' : 'partidos'}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-blue-200">
                  <p className="text-blue-700 font-semibold">
                    {locale === 'en' ? '8 points available' : '8 puntos disponibles'}
                  </p>
                </div>
              </div>
            </div>

            {/* Sunday */}
            <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-600 text-white px-4 py-2 rounded-lg font-heading font-bold">
                  {locale === 'en' ? 'Sunday, Sept 19' : 'Domingo, 19 Sept'}
                </div>
                <span className="text-amber-700 font-semibold">
                  {locale === 'en' ? 'Day 3 — Singles Matches' : 'Día 3 — Partidos Individuales'}
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-heading font-bold text-navy-600 mb-2">
                    {locale === 'en' ? 'Singles Session (11:00 AM)' : 'Sesión Individual (11:00 AM)'}
                  </h4>
                  <p className="text-gray-700">
                    <strong>{locale === 'en' ? 'Format:' : 'Formato:'}</strong> {locale === 'en' ? 'Singles (1 vs 1)' : 'Individual (1 vs 1)'}
                  </p>
                  <p className="text-gray-700">
                    <strong>{locale === 'en' ? 'Matches:' : 'Partidos:'}</strong> 12 {locale === 'en' ? 'matches' : 'partidos'}
                  </p>
                  <p className="text-gray-700 mt-2 text-sm italic">
                    {locale === 'en'
                      ? 'All 12 players from each team compete in singles matches'
                      : 'Los 12 jugadores de cada equipo compiten en partidos individuales'}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-amber-200">
                  <p className="text-amber-700 font-semibold">
                    {locale === 'en' ? '12 points available' : '12 puntos disponibles'}
                  </p>
                </div>
              </div>
            </div>

            {/* Total Points */}
            <div className="bg-navy-600 text-white rounded-xl p-6 text-center">
              <h3 className="font-heading font-bold text-2xl mb-2 text-white">
                {locale === 'en' ? 'Total: 28 Points' : 'Total: 28 Puntos'}
              </h3>
              <p className="text-gray-100">
                {locale === 'en'
                  ? 'First team to 14.5 points wins the Ryder Cup'
                  : 'El primer equipo en llegar a 14.5 puntos gana la Ryder Cup'}
              </p>
            </div>

            {/* Practice Rounds */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-heading font-bold text-xl text-navy-600 mb-3">
                {locale === 'en' ? '📅 Practice Rounds' : '📅 Rondas de Práctica'}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>{locale === 'en' ? 'Monday, Sept 13:' : 'Lunes, 13 Sept:'}</strong> {locale === 'en' ? 'Teams arrive & practice' : 'Equipos llegan y practican'}</li>
                <li><strong>{locale === 'en' ? 'Tuesday, Sept 14:' : 'Martes, 14 Sept:'}</strong> {locale === 'en' ? 'Official practice round' : 'Ronda de práctica oficial'}</li>
                <li><strong>{locale === 'en' ? 'Wednesday, Sept 15:' : 'Miércoles, 15 Sept:'}</strong> {locale === 'en' ? 'Official practice round' : 'Ronda de práctica oficial'}</li>
                <li><strong>{locale === 'en' ? 'Thursday, Sept 16:' : 'Jueves, 16 Sept:'}</strong> {locale === 'en' ? 'Opening Ceremony & Gala' : 'Ceremonia de Apertura y Gala'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en' ? 'Key Facts' : 'Datos Clave'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream-100 rounded-lg p-6">
              <h3 className="font-heading font-bold text-xl text-navy-600 mb-3">
                {locale === 'en' ? 'Event Dates' : 'Fechas del Evento'}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>{locale === 'en' ? 'Practice Rounds:' : 'Rondas de Práctica:'}</strong> Sept 13-16, 2027</li>
                <li><strong>{locale === 'en' ? 'Competition:' : 'Competición:'}</strong> Sept 17-19, 2027</li>
                <li><strong>{locale === 'en' ? 'Teams:' : 'Equipos:'}</strong> Europe vs USA</li>
              </ul>
            </div>

            <div className="bg-cream-100 rounded-lg p-6">
              <h3 className="font-heading font-bold text-xl text-navy-600 mb-3">
                {locale === 'en' ? 'The Venue' : 'La Sede'}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>{locale === 'en' ? 'Course:' : 'Campo:'}</strong> Adare Manor</li>
                <li><strong>{locale === 'en' ? 'Designer:' : 'Diseñador:'}</strong> Tom Fazio</li>
                <li><strong>{locale === 'en' ? 'Location:' : 'Ubicación:'}</strong> County Limerick</li>
              </ul>
            </div>

            <div className="bg-cream-100 rounded-lg p-6">
              <h3 className="font-heading font-bold text-xl text-navy-600 mb-3">
                {locale === 'en' ? 'Getting There' : 'Cómo Llegar'}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Shannon (SNN):</strong> 25-30 min drive</li>
                <li><strong>Dublin (DUB):</strong> 2h 30min drive</li>
                <li><strong>{locale === 'en' ? 'Car rental:' : 'Alquiler de coche:'}</strong> {locale === 'en' ? 'Recommended' : 'Recomendado'}</li>
              </ul>
            </div>

            <div className="bg-cream-100 rounded-lg p-6">
              <h3 className="font-heading font-bold text-xl text-navy-600 mb-3">
                {locale === 'en' ? 'Tickets' : 'Entradas'}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>{locale === 'en' ? 'Official site:' : 'Sitio oficial:'}</strong> RyderCup.com</li>
                <li><strong>{locale === 'en' ? 'On sale:' : 'A la venta:'}</strong> {locale === 'en' ? '12-18 months prior' : '12-18 meses antes'}</li>
                <li><strong>{locale === 'en' ? 'Note:' : 'Nota:'}</strong> {locale === 'en' ? 'Not sold by Adare Manor' : 'No vendidas por Adare Manor'}</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
            <p className="text-gray-800">
              <strong>{locale === 'en' ? 'Important:' : 'Importante:'}</strong>{' '}
              {locale === 'en'
                ? 'Tickets are sold exclusively through RyderCup.com. Rooms at Adare Manor during Ryder Cup week are extremely limited and typically allocated to teams, officials, and official hospitality packages.'
                : 'Las entradas se venden exclusivamente a través de RyderCup.com. Las habitaciones en Adare Manor durante la semana de la Ryder Cup son extremadamente limitadas y generalmente se asignan a equipos, oficiales y paquetes de hospitalidad oficiales.'}
            </p>
          </div>
        </div>
      </section>

      {/* Where to Stay */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8 text-center">
            {locale === 'en' ? 'Where to Stay Near Adare Manor' : 'Dónde Alojarse Cerca de Adare Manor'}
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 mb-4">
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                {locale === 'en' ? 'In Adare Village (walking distance)' : 'En el Pueblo de Adare (distancia a pie)'}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Adare Manor</strong> — {locale === 'en' ? '5-star on-site (limited availability)' : '5 estrellas en el sitio (disponibilidad limitada)'}</li>
                <li>• <strong>Dunraven Arms Hotel</strong> — 0.4 mi (4-star)</li>
                <li>• <strong>Fitzgerald's Woodlands House Hotel</strong> — 0.5 mi (4-star)</li>
                <li>• <strong>Berkeley Lodge</strong> — 0.3 mi (guesthouse)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 mb-4">
              <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">
                {locale === 'en' ? 'Nearby Overflow Options' : 'Opciones de Desbordamiento Cercanas'}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Limerick City</strong> — 20 min drive (Castletroy Park, etc.)</li>
                <li>• <strong>Dromoland Castle</strong> — 35 min (5-star castle hotel)</li>
                <li>• <strong>Killarney</strong> — 1h drive (base for southwest tour)</li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <Link href={`/${locale}/hotels-near-adare-manor`} className="btn-primary">
                {locale === 'en' ? 'See All Hotels' : 'Ver Todos los Hoteles'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Play Golf Nearby */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8 text-center">
            {locale === 'en' ? 'Play Golf Nearby' : 'Juega Golf Cerca'}
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6 text-center">
              {locale === 'en'
                ? 'Combine your Ryder Cup trip with rounds at some of Ireland\'s most iconic links courses, all within 1-2 hours of Adare.'
                : 'Combina tu viaje a la Ryder Cup con rondas en algunos de los campos links más icónicos de Irlanda, todos a 1-2 horas de Adare.'}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-cream-100 rounded-lg p-5">
                <h4 className="font-heading font-bold text-navy-600 mb-2">Ballybunion Old Course</h4>
                <p className="text-sm text-gray-600 mb-2">{locale === 'en' ? 'World top-10 links' : 'Top-10 mundial links'}</p>
                <p className="text-emerald-600 font-semibold">1h 15min drive</p>
              </div>

              <div className="bg-cream-100 rounded-lg p-5">
                <h4 className="font-heading font-bold text-navy-600 mb-2">Lahinch Golf Club</h4>
                <p className="text-sm text-gray-600 mb-2">{locale === 'en' ? 'MacKenzie design (1927)' : 'Diseño MacKenzie (1927)'}</p>
                <p className="text-emerald-600 font-semibold">1h 10min drive</p>
              </div>

              <div className="bg-cream-100 rounded-lg p-5">
                <h4 className="font-heading font-bold text-navy-600 mb-2">Tralee Golf Club</h4>
                <p className="text-sm text-gray-600 mb-2">{locale === 'en' ? 'Arnold Palmer design' : 'Diseño Arnold Palmer'}</p>
                <p className="text-emerald-600 font-semibold">1h 25min drive</p>
              </div>

              <div className="bg-cream-100 rounded-lg p-5">
                <h4 className="font-heading font-bold text-navy-600 mb-2">Trump International Doonbeg</h4>
                <p className="text-sm text-gray-600 mb-2">{locale === 'en' ? 'Greg Norman links' : 'Links Greg Norman'}</p>
                <p className="text-emerald-600 font-semibold">1h 20min drive</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href={`/${locale}/golf/courses-near/adare`} className="btn-outline">
                {locale === 'en' ? 'View All Golf Courses' : 'Ver Todos los Campos'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8 text-center">
            {locale === 'en' ? 'Ryder Cup 2027 FAQs' : 'Preguntas Frecuentes Ryder Cup 2027'}
          </h2>

          <div className="space-y-4">
            {ryderCupFaqs.map((faq) => (
              <details key={faq.id} className="bg-white rounded-lg p-6 cursor-pointer shadow-sm">
                <summary className="font-heading font-semibold text-lg text-navy-600">
                  {getLocalizedValue(faq.question, locale)}
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{getLocalizedValue(faq.answer, locale)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom max-w-2xl">
          <EmailSignup locale={locale} variant="inline" />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold mb-4 text-white">
            {locale === 'en' ? 'Plan Your Complete Ireland Golf Trip' : 'Planifica tu Viaje de Golf Completo a Irlanda'}
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            {locale === 'en'
              ? 'Combine the Ryder Cup with a 7-10 day golf itinerary around southwest Ireland.'
              : 'Combina la Ryder Cup con un itinerario de golf de 7-10 días por el suroeste de Irlanda.'}
          </p>
          <Link href={`/${locale}/ireland-golf-trip-itineraries`} className="btn-secondary">
            {locale === 'en' ? 'View Itineraries' : 'Ver Itinerarios'}
          </Link>
        </div>
      </section>
    </>
  );
}
