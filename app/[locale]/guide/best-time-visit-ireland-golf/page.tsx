import { Locale } from '@/lib/i18n';
import HeroBlock from '@/components/blocks/HeroBlock';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return {
    title:
      locale === 'en'
        ? 'Best Time to Visit Ireland for Golf | Month-by-Month Guide 2027'
        : 'Mejor Época para Visitar Irlanda para Golf | Guía Mensual 2027',
    description:
      locale === 'en'
        ? 'Discover the best months to play golf in Ireland. Weather guide, peak season rates, Ryder Cup 2027 dates, and insider tips for planning your Ireland golf trip.'
        : 'Descubre los mejores meses para jugar golf en Irlanda. Guía climática, tarifas de temporada alta, fechas Ryder Cup 2027 y consejos para planificar tu viaje de golf.',
    keywords: 'best time golf ireland, ireland golf weather, when visit ireland golf, ryder cup 2027 dates, ireland golf season',
    alternates: {
      canonical: `https://www.adarelimerickgolf.com/${locale}/guide/best-time-visit-ireland-golf`,
      languages: {
        en: 'https://www.adarelimerickgolf.com/en/guide/best-time-visit-ireland-golf',
        es: 'https://www.adarelimerickgolf.com/es/guide/best-time-visit-ireland-golf',
      },
    },
  };
}

export default function BestTimeVisitGuidePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return (
    <>
      <div className="container-custom">
        <Breadcrumbs
          items={[
            {
              label: locale === 'en' ? 'Guides' : 'Guías',
              href: `/${locale}/guides`,
            },
            {
              label: locale === 'en' ? 'Best Time to Visit' : 'Mejor Época para Visitar',
            },
          ]}
          locale={locale}
        />
      </div>

      <HeroBlock
        title={
          locale === 'en'
            ? 'Best Time to Visit Ireland for Golf'
            : 'Mejor Época para Visitar Irlanda para Golf'
        }
        subtitle={
          locale === 'en'
            ? 'Month-by-month weather guide & Ryder Cup 2027 planning'
            : 'Guía climática mensual y planificación Ryder Cup 2027'
        }
        description={
          locale === 'en'
            ? 'Plan your Ireland golf trip with our comprehensive weather guide. Learn about peak season, green fee pricing, daylight hours, and the best months to play Ireland\'s legendary links courses.'
            : 'Planifica tu viaje de golf a Irlanda con nuestra guía climática completa. Aprende sobre temporada alta, precios de green fees, horas de luz y los mejores meses para jugar en los legendarios campos links de Irlanda.'
        }
        backgroundImage="https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=1600"
        keyFacts={[
          {
            label: locale === 'en' ? 'Peak Season' : 'Temporada Alta',
            value: locale === 'en' ? 'May-Sept' : 'Mayo-Sept',
          },
          {
            label: locale === 'en' ? 'Ryder Cup 2027' : 'Ryder Cup 2027',
            value: locale === 'en' ? 'Sept 28-Oct 3' : '28 Sept-3 Oct',
          },
          {
            label: locale === 'en' ? 'Best Value' : 'Mejor Valor',
            value: locale === 'en' ? 'Apr-May, Oct' : 'Abr-May, Oct',
          },
          {
            label: locale === 'en' ? 'Last Updated' : 'Actualizado',
            value: locale === 'en' ? 'Jan 2025' : 'Ene 2025',
          },
        ]}
      />

      {/* Spring (March-May) */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center mb-6">
            <span className="text-5xl mr-4">🌸</span>
            <h2 className="text-3xl font-heading font-bold text-navy-600">
              {locale === 'en' ? 'Spring (March - May)' : 'Primavera (Marzo - Mayo)'}
            </h2>
          </div>

          <div className="bg-emerald-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-heading font-bold text-emerald-700 mb-4">
              {locale === 'en' ? 'Why Visit in Spring' : 'Por Qué Visitar en Primavera'}
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span><strong>{locale === 'en' ? 'Best value pricing' : 'Mejor relación calidad-precio'}:</strong> {locale === 'en' ? 'Green fees 20-30% lower than peak summer rates' : 'Green fees 20-30% más bajos que tarifas de verano'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span><strong>{locale === 'en' ? 'Fewer crowds' : 'Menos multitudes'}:</strong> {locale === 'en' ? 'Easier tee time bookings and quieter courses' : 'Reservas más fáciles y campos más tranquilos'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span><strong>{locale === 'en' ? 'Fresh conditions' : 'Condiciones frescas'}:</strong> {locale === 'en' ? 'Courses recovering from winter, lush and green' : 'Campos recuperándose del invierno, verdes y exuberantes'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span><strong>{locale === 'en' ? 'Daylight' : 'Luz diurna'}:</strong> {locale === 'en' ? 'May offers 7pm+ sunsets for late tee times' : 'Mayo ofrece atardeceres después de las 7pm para horarios tardíos'}</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
              <h4 className="font-heading font-bold text-navy-600 mb-3">{locale === 'en' ? 'March' : 'Marzo'}</h4>
              <p className="text-sm text-gray-600 mb-2"><strong>{locale === 'en' ? 'Avg Temp' : 'Temp Media'}:</strong> 8-12°C</p>
              <p className="text-sm text-gray-600 mb-2"><strong>{locale === 'en' ? 'Rain Days' : 'Días Lluvia'}:</strong> 12-14</p>
              <p className="text-sm text-gray-700 mt-3">
                {locale === 'en'
                  ? 'Early season. Can be cool and windy. Pack layers.'
                  : 'Temporada temprana. Puede ser fresco y ventoso. Empaque capas.'}
              </p>
            </div>

            <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
              <h4 className="font-heading font-bold text-navy-600 mb-3">{locale === 'en' ? 'April' : 'Abril'}</h4>
              <p className="text-sm text-gray-600 mb-2"><strong>{locale === 'en' ? 'Avg Temp' : 'Temp Media'}:</strong> 9-14°C</p>
              <p className="text-sm text-gray-600 mb-2"><strong>{locale === 'en' ? 'Rain Days' : 'Días Lluvia'}:</strong> 11-13</p>
              <p className="text-sm text-gray-700 mt-3">
                {locale === 'en'
                  ? 'Improving weather. Great shoulder season value.'
                  : 'Clima mejorando. Gran valor de temporada intermedia.'}
              </p>
            </div>

            <div className="bg-emerald-100 border-2 border-emerald-400 rounded-xl p-6">
              <h4 className="font-heading font-bold text-emerald-700 mb-3">{locale === 'en' ? 'May ⭐' : 'Mayo ⭐'}</h4>
              <p className="text-sm text-gray-600 mb-2"><strong>{locale === 'en' ? 'Avg Temp' : 'Temp Media'}:</strong> 12-17°C</p>
              <p className="text-sm text-gray-600 mb-2"><strong>{locale === 'en' ? 'Rain Days' : 'Días Lluvia'}:</strong> 11-12</p>
              <p className="text-sm text-gray-700 mt-3">
                {locale === 'en'
                  ? 'Sweet spot! Excellent weather, lower rates, long days.'
                  : '¡Punto ideal! Excelente clima, tarifas bajas, días largos.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summer (June-August) */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center mb-6">
            <span className="text-5xl mr-4">☀️</span>
            <h2 className="text-3xl font-heading font-bold text-navy-600">
              {locale === 'en' ? 'Summer (June - August)' : 'Verano (Junio - Agosto)'}
            </h2>
          </div>

          <div className="bg-gold-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-heading font-bold text-gold-700 mb-4">
              {locale === 'en' ? 'Peak Season Highlights' : 'Aspectos Destacados Temporada Alta'}
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-gold-600 mr-3 text-xl">✓</span>
                <span><strong>{locale === 'en' ? 'Best weather' : 'Mejor clima'}:</strong> {locale === 'en' ? 'Warmest temperatures (16-20°C) and most sunshine' : 'Temperaturas más cálidas (16-20°C) y más sol'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-600 mr-3 text-xl">✓</span>
                <span><strong>{locale === 'en' ? 'Maximum daylight' : 'Máxima luz diurna'}:</strong> {locale === 'en' ? 'Sunsets until 10pm+ in June/July for late rounds' : 'Atardeceres hasta 10pm+ en junio/julio para rondas tardías'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-600 mr-3 text-xl">✓</span>
                <span><strong>{locale === 'en' ? 'Course conditions' : 'Condiciones de campos'}:</strong> {locale === 'en' ? 'Links courses at their firmest and fastest' : 'Campos links en su estado más firme y rápido'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-600 mr-3 text-xl">⚠️</span>
                <span><strong>{locale === 'en' ? 'Peak pricing' : 'Precios altos'}:</strong> {locale === 'en' ? 'Highest green fees and hotel rates. Book 6+ months ahead.' : 'Green fees y tarifas hoteleras más altas. Reserve con 6+ meses de anticipación.'}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-heading font-bold text-navy-600 mb-4">
              {locale === 'en' ? 'Summer Month Breakdown' : 'Desglose Meses de Verano'}
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-bold text-emerald-700 mb-2">{locale === 'en' ? 'June' : 'Junio'}</h4>
                <p className="text-gray-700">
                  {locale === 'en'
                    ? 'Longest days (10pm sunsets), 15-18°C. Ideal for playing 36 holes. Busiest month for tourism.'
                    : 'Días más largos (atardeceres 10pm), 15-18°C. Ideal para jugar 36 hoyos. Mes más concurrido para turismo.'}
                </p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-emerald-700 mb-2">{locale === 'en' ? 'July' : 'Julio'}</h4>
                <p className="text-gray-700">
                  {locale === 'en'
                    ? 'Warmest month (16-20°C). Peak holiday season. Expect crowds and premium rates.'
                    : 'Mes más cálido (16-20°C). Temporada alta de vacaciones. Espere multitudes y tarifas premium.'}
                </p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-emerald-700 mb-2">{locale === 'en' ? 'August' : 'Agosto'}</h4>
                <p className="text-gray-700">
                  {locale === 'en'
                    ? 'Still warm (15-19°C). Courses remain busy. Book early for popular tracks like Ballybunion.'
                    : 'Todavía cálido (15-19°C). Campos siguen ocupados. Reserve temprano para campos populares como Ballybunion.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fall (September-November) - RYDER CUP */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center mb-6">
            <span className="text-5xl mr-4">🍂</span>
            <h2 className="text-3xl font-heading font-bold text-navy-600">
              {locale === 'en' ? 'Fall (September - November)' : 'Otoño (Septiembre - Noviembre)'}
            </h2>
          </div>

          <div className="bg-navy-600 text-white rounded-xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">🏆</span>
              <h3 className="text-2xl font-heading font-bold">
                {locale === 'en' ? 'September 2027: Ryder Cup at Adare Manor' : 'Septiembre 2027: Ryder Cup en Adare Manor'}
              </h3>
            </div>
            <div className="bg-navy-700 rounded-lg p-6 mb-4">
              <p className="text-xl mb-3">
                <strong>{locale === 'en' ? 'Practice Rounds:' : 'Rondas de Práctica:'}</strong> {locale === 'en' ? 'September 28-30, 2027' : '28-30 Septiembre 2027'}
              </p>
              <p className="text-xl mb-3">
                <strong>{locale === 'en' ? 'Competition:' : 'Competición:'}</strong> {locale === 'en' ? 'October 1-3, 2027' : '1-3 Octubre 2027'}
              </p>
              <p className="text-gold-400 font-semibold">
                {locale === 'en'
                  ? '⚠️ Book hotels and tee times 12-18 months in advance for Ryder Cup week'
                  : '⚠️ Reserve hoteles y horarios con 12-18 meses de anticipación para la semana de la Ryder Cup'}
              </p>
            </div>
            <p className="text-gray-200">
              {locale === 'en'
                ? 'September is traditionally one of the best months for Irish golf - mild temps (13-17°C), fewer crowds than summer, and still-decent daylight hours.'
                : 'Septiembre es tradicionalmente uno de los mejores meses para el golf irlandés: temperaturas suaves (13-17°C), menos multitudes que en verano y horas de luz aún decentes.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 rounded-xl p-6">
              <h4 className="font-heading font-bold text-emerald-700 mb-3">
                {locale === 'en' ? 'September (Peak)' : 'Septiembre (Alto)'}
              </h4>
              <p className="text-gray-700 mb-3">
                {locale === 'en'
                  ? '13-17°C. Perfect golf weather. 2027 = Ryder Cup month with massive demand.'
                  : '13-17°C. Clima perfecto para golf. 2027 = mes de Ryder Cup con demanda masiva.'}
              </p>
              <p className="text-sm text-gold-700 font-semibold">
                {locale === 'en' ? 'Book NOW for Sept 2027!' : '¡Reserve AHORA para Sept 2027!'}
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-6">
              <h4 className="font-heading font-bold text-navy-600 mb-3">
                {locale === 'en' ? 'October' : 'Octubre'}
              </h4>
              <p className="text-gray-700 mb-3">
                {locale === 'en'
                  ? '10-14°C. Shoulder season. Great value rates. Expect wind and rain on links.'
                  : '10-14°C. Temporada intermedia. Excelentes tarifas. Espere viento y lluvia en links.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Winter (December-February) */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center mb-6">
            <span className="text-5xl mr-4">❄️</span>
            <h2 className="text-3xl font-heading font-bold text-navy-600">
              {locale === 'en' ? 'Winter (December - February)' : 'Invierno (Diciembre - Febrero)'}
            </h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <p className="text-gray-700 mb-4">
              {locale === 'en'
                ? 'Ireland golf courses stay open year-round, but winter brings short days (4:30pm sunsets), cold temps (5-9°C), and frequent rain. Not recommended for golf-focused trips.'
                : 'Los campos de golf de Irlanda permanecen abiertos todo el año, pero el invierno trae días cortos (atardeceres 4:30pm), temperaturas frías (5-9°C) y lluvia frecuente. No recomendado para viajes enfocados en golf.'}
            </p>
            <p className="text-emerald-700 font-semibold">
              {locale === 'en'
                ? '💡 Tip: Use winter months to plan and book your 2027 Ryder Cup trip!'
                : '💡 Consejo: ¡Use los meses de invierno para planificar y reservar su viaje a la Ryder Cup 2027!'}
            </p>
          </div>
        </div>
      </section>

      {/* Booking Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8 text-center">
            {locale === 'en' ? 'Ryder Cup 2027 Booking Timeline' : 'Cronograma de Reservas Ryder Cup 2027'}
          </h2>

          <div className="space-y-4">
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl">
              <h3 className="font-heading font-bold text-emerald-700 mb-2">
                {locale === 'en' ? 'NOW - Early 2026' : 'AHORA - Principios 2026'}
              </h3>
              <p className="text-gray-700">
                {locale === 'en'
                  ? 'Book hotels near Adare Manor. Many already taking 2027 reservations. Green fee bookings open 12-18 months ahead.'
                  : 'Reserve hoteles cerca de Adare Manor. Muchos ya aceptan reservas para 2027. Reservas de green fees abren 12-18 meses antes.'}
              </p>
            </div>

            <div className="bg-gold-50 border-l-4 border-gold-600 p-6 rounded-r-xl">
              <h3 className="font-heading font-bold text-gold-700 mb-2">
                {locale === 'en' ? 'Mid 2026' : 'Mediados 2026'}
              </h3>
              <p className="text-gray-700">
                {locale === 'en'
                  ? 'Ryder Cup tickets go on sale (exact date TBA). Monitor RyderCup.com for announcements.'
                  : 'Entradas Ryder Cup salen a la venta (fecha exacta por confirmar). Monitoree RyderCup.com para anuncios.'}
              </p>
            </div>

            <div className="bg-navy-50 border-l-4 border-navy-600 p-6 rounded-r-xl">
              <h3 className="font-heading font-bold text-navy-700 mb-2">
                {locale === 'en' ? 'Early 2027' : 'Principios 2027'}
              </h3>
              <p className="text-gray-700">
                {locale === 'en'
                  ? 'Last chance for tee times at top courses. Finalize rental cars and transportation.'
                  : 'Última oportunidad para horarios en campos top. Finalice autos de alquiler y transporte.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-emerald-600 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === 'en' ? 'Start Planning Your 2027 Trip' : 'Comience a Planificar Su Viaje 2027'}
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            {locale === 'en'
              ? 'Explore golf courses, hotels, and complete itineraries for Ryder Cup 2027 week.'
              : 'Explore campos de golf, hoteles e itinerarios completos para la semana de la Ryder Cup 2027.'}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={`/${locale}/ryder-cup-2027-adare-manor`} className="btn-primary bg-white text-emerald-600 hover:bg-gray-100">
              {locale === 'en' ? 'Ryder Cup 2027 Guide' : 'Guía Ryder Cup 2027'}
            </Link>
            <Link href={`/${locale}/golf/courses-near/adare`} className="btn-outline border-white text-white hover:bg-white hover:text-emerald-600">
              {locale === 'en' ? 'Golf Courses' : 'Campos de Golf'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
