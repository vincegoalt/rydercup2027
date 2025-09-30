import { Locale } from '@/lib/i18n';
import { golfCourses } from '@/data/courses';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return {
    title:
      locale === 'en'
        ? 'Ballybunion vs Lahinch: Which Irish Links Course is Better? | 2027 Guide'
        : 'Ballybunion vs Lahinch: ¿Qué Campo Links Irlandés es Mejor? | Guía 2027',
    description:
      locale === 'en'
        ? 'In-depth comparison of Ballybunion Old Course vs Lahinch Golf Club. Green fees, difficulty, scenery, history, and which course to play near Adare Manor during Ryder Cup 2027.'
        : 'Comparación detallada de Ballybunion Old Course vs Lahinch Golf Club. Green fees, dificultad, paisaje, historia y qué campo jugar cerca de Adare Manor durante Ryder Cup 2027.',
    keywords: 'ballybunion vs lahinch, best irish links, ireland golf comparison, ballybunion old course, lahinch golf club',
    alternates: {
      canonical: `https://www.adarelimerickgolf.com/${locale}/guide/ballybunion-vs-lahinch-comparison`,
      languages: {
        en: 'https://www.adarelimerickgolf.com/en/guide/ballybunion-vs-lahinch-comparison',
        es: 'https://www.adarelimerickgolf.com/es/guide/ballybunion-vs-lahinch-comparison',
      },
    },
  };
}

export default function BallybunionVsLahinchPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  const ballybunion = golfCourses.find((c) => c.slug === 'ballybunion-old-course')!;
  const lahinch = golfCourses.find((c) => c.slug === 'lahinch-golf-club')!;

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          {
            label: locale === 'en' ? 'Golf Guides' : 'Guías de Golf',
            href: `/${locale}/golf/courses-near/adare`,
          },
          {
            label: locale === 'en' ? 'Ballybunion vs Lahinch' : 'Ballybunion vs Lahinch',
          },
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-navy-600 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {locale === 'en'
              ? 'Ballybunion Old Course vs Lahinch Golf Club'
              : 'Ballybunion Old Course vs Lahinch Golf Club'}
          </h1>
          <p className="text-xl text-gray-100 mb-4">
            {locale === 'en'
              ? 'The ultimate comparison of two legendary Irish links courses near Adare Manor'
              : 'La comparación definitiva de dos campos links irlandeses legendarios cerca de Adare Manor'}
          </p>
          <p className="text-emerald-400 font-semibold mb-2">
            {locale === 'en'
              ? 'Both within 90 minutes of Ryder Cup 2027 venue'
              : 'Ambos a 90 minutos de la sede de la Ryder Cup 2027'}
          </p>
          <p className="text-sm text-gray-300">
            {locale === 'en' ? 'Last Updated: January 2025' : 'Última Actualización: Enero 2025'}
          </p>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8 text-center">
            {locale === 'en' ? 'At a Glance' : 'De un Vistazo'}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="p-4 text-left font-heading">{locale === 'en' ? 'Feature' : 'Característica'}</th>
                  <th className="p-4 text-left font-heading">Ballybunion Old Course</th>
                  <th className="p-4 text-left font-heading">Lahinch Golf Club</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-cream-50">
                  <td className="p-4 font-semibold text-gray-700">{locale === 'en' ? 'Green Fee' : 'Green Fee'}</td>
                  <td className="p-4">{ballybunion.greenFee}</td>
                  <td className="p-4">{lahinch.greenFee}</td>
                </tr>
                <tr className="hover:bg-cream-50">
                  <td className="p-4 font-semibold text-gray-700">{locale === 'en' ? 'From Adare Manor' : 'Desde Adare Manor'}</td>
                  <td className="p-4">{ballybunion.distanceFromAdare}</td>
                  <td className="p-4">{lahinch.distanceFromAdare}</td>
                </tr>
                <tr className="hover:bg-cream-50">
                  <td className="p-4 font-semibold text-gray-700">{locale === 'en' ? 'World Ranking' : 'Ranking Mundial'}</td>
                  <td className="p-4">
                    <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {locale === 'en' ? 'Top 10' : 'Top 10'}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {locale === 'en' ? 'Top 50' : 'Top 50'}
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-cream-50">
                  <td className="p-4 font-semibold text-gray-700">{locale === 'en' ? 'Designer' : 'Diseñador'}</td>
                  <td className="p-4">{ballybunion.designer}</td>
                  <td className="p-4">{lahinch.designer}</td>
                </tr>
                <tr className="hover:bg-cream-50">
                  <td className="p-4 font-semibold text-gray-700">{locale === 'en' ? 'Difficulty' : 'Dificultad'}</td>
                  <td className="p-4">
                    <span className="text-red-600 font-semibold">{locale === 'en' ? 'Very Challenging' : 'Muy Desafiante'}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-orange-600 font-semibold">{locale === 'en' ? 'Challenging' : 'Desafiante'}</span>
                  </td>
                </tr>
                <tr className="hover:bg-cream-50">
                  <td className="p-4 font-semibold text-gray-700">{locale === 'en' ? 'Best For' : 'Mejor Para'}</td>
                  <td className="p-4">{locale === 'en' ? 'Pure links experience' : 'Experiencia links pura'}</td>
                  <td className="p-4">{locale === 'en' ? 'History & accessibility' : 'Historia y accesibilidad'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ballybunion Deep Dive */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="relative h-80 rounded-xl overflow-hidden mb-6">
                <Image
                  src={ballybunion.imageUrl}
                  alt="Ballybunion Old Course links golf course County Kerry Ireland"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy-600 mb-4">
                {ballybunion.name}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-emerald-700 mb-2">
                    {locale === 'en' ? 'Why Choose Ballybunion' : 'Por Qué Elegir Ballybunion'}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'Consistently ranked in world\'s top 10 courses' : 'Constantemente clasificado en los 10 mejores campos del mundo'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'Natural links layout with dramatic dunes' : 'Diseño de links natural con dunas dramáticas'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'Tom Watson\'s favorite course outside Scotland' : 'Campo favorito de Tom Watson fuera de Escocia'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'More challenging and exposed to wind' : 'Más desafiante y expuesto al viento'}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-heading font-bold text-navy-600 mb-3">
                    {locale === 'en' ? 'Signature Holes' : 'Hoyos Emblemáticos'}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>{locale === 'en' ? 'Hole 7' : 'Hoyo 7'}:</strong> {locale === 'en' ? 'Plateau green with stunning Atlantic views' : 'Green elevado con vistas impresionantes al Atlántico'}</li>
                    <li><strong>{locale === 'en' ? 'Hole 11' : 'Hoyo 11'}:</strong> {locale === 'en' ? 'Uphill par-4 with blind second shot' : 'Par-4 cuesta arriba con segundo golpe ciego'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lahinch Deep Dive */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-heading font-bold text-navy-600 mb-4">
                {lahinch.name}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-emerald-700 mb-2">
                    {locale === 'en' ? 'Why Choose Lahinch' : 'Por Qué Elegir Lahinch'}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'Designed by Alister MacKenzie (Augusta National designer)' : 'Diseñado por Alister MacKenzie (diseñador de Augusta National)'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'More forgiving layout, better for mid-handicappers' : 'Diseño más indulgente, mejor para handicaps medios'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'Famous "Klondyke" blind par-5 (Hole 5)' : 'Famoso par-5 ciego "Klondyke" (Hoyo 5)'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>{locale === 'en' ? 'More accessible for walk-ins and tourists' : 'Más accesible para walk-ins y turistas'}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-cream-50 p-6 rounded-xl">
                  <h4 className="font-heading font-bold text-navy-600 mb-3">
                    {locale === 'en' ? 'Unique Features' : 'Características Únicas'}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>{locale === 'en' ? 'The Goats' : 'Las Cabras'}:</strong> {locale === 'en' ? 'Famous resident goats used as weather predictors' : 'Cabras residentes famosas usadas como predictores del clima'}</li>
                    <li><strong>{locale === 'en' ? 'Dell Hole' : 'Dell Hole'}:</strong> {locale === 'en' ? 'Blind par-3 (Hole 6) with church bell signal' : 'Par-3 ciego (Hoyo 6) con señal de campana de iglesia'}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-80 rounded-xl overflow-hidden mb-6">
                <Image
                  src={lahinch.imageUrl}
                  alt="Lahinch Golf Club links course County Clare Ireland"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Head-to-Head Categories */}
      <section className="section-padding bg-navy-600 text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center text-white">
            {locale === 'en' ? 'Head-to-Head Comparison' : 'Comparación Directa'}
          </h2>

          <div className="space-y-6">
            <div className="bg-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-emerald-400 mb-3">
                🏆 {locale === 'en' ? 'Overall Prestige' : 'Prestigio General'}
              </h3>
              <p className="text-gray-100 mb-2">
                <strong className="text-white">{locale === 'en' ? 'Winner: Ballybunion' : 'Ganador: Ballybunion'}</strong>
              </p>
              <p className="text-gray-100">
                {locale === 'en'
                  ? 'Ballybunion consistently ranks higher in world rankings and is considered one of the purest links experiences on earth.'
                  : 'Ballybunion se clasifica constantemente más alto en los rankings mundiales y se considera una de las experiencias de links más puras del mundo.'}
              </p>
            </div>

            <div className="bg-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-emerald-400 mb-3">
                💰 {locale === 'en' ? 'Value for Money' : 'Relación Calidad-Precio'}
              </h3>
              <p className="text-gray-100 mb-2">
                <strong className="text-white">{locale === 'en' ? 'Winner: Lahinch' : 'Ganador: Lahinch'}</strong>
              </p>
              <p className="text-gray-100">
                {locale === 'en'
                  ? 'Lahinch offers slightly lower green fees and is easier to book, especially for visitors without advance planning.'
                  : 'Lahinch ofrece green fees ligeramente más bajos y es más fácil de reservar, especialmente para visitantes sin planificación previa.'}
              </p>
            </div>

            <div className="bg-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-emerald-400 mb-3">
                🌊 {locale === 'en' ? 'Scenery & Views' : 'Paisaje y Vistas'}
              </h3>
              <p className="text-gray-100 mb-2">
                <strong className="text-white">{locale === 'en' ? 'Tie' : 'Empate'}</strong>
              </p>
              <p className="text-gray-100">
                {locale === 'en'
                  ? 'Both offer breathtaking Atlantic Ocean views. Ballybunion has higher, more dramatic dunes; Lahinch has better views from the clifftop holes.'
                  : 'Ambos ofrecen impresionantes vistas del Océano Atlántico. Ballybunion tiene dunas más altas y dramáticas; Lahinch tiene mejores vistas desde los hoyos en acantilados.'}
              </p>
            </div>

            <div className="bg-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-emerald-400 mb-3">
                ⛳ {locale === 'en' ? 'Playability' : 'Jugabilidad'}
              </h3>
              <p className="text-gray-100 mb-2">
                <strong className="text-white">{locale === 'en' ? 'Winner: Lahinch' : 'Ganador: Lahinch'}</strong>
              </p>
              <p className="text-gray-100">
                {locale === 'en'
                  ? 'Lahinch is more forgiving for average golfers. Ballybunion demands precision and course management, especially in wind.'
                  : 'Lahinch es más indulgente para golfistas promedio. Ballybunion exige precisión y gestión del campo, especialmente con viento.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="section-padding bg-emerald-600 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {locale === 'en' ? 'The Verdict' : 'El Veredicto'}
          </h2>
          <div className="bg-emerald-700 rounded-xl p-8 mb-8">
            <p className="text-xl mb-4">
              {locale === 'en'
                ? '🏆 Play Ballybunion if you want the ultimate links challenge and bucket-list experience.'
                : '🏆 Juegue Ballybunion si quiere el desafío de links definitivo y experiencia de lista de deseos.'}
            </p>
            <p className="text-xl mb-4">
              {locale === 'en'
                ? '🌟 Play Lahinch if you want history, accessibility, and a slightly more forgiving course.'
                : '🌟 Juegue Lahinch si quiere historia, accesibilidad y un campo ligeramente más indulgente.'}
            </p>
            <p className="text-2xl font-bold text-gold-400">
              {locale === 'en'
                ? '✨ Best Answer: Play BOTH during your Ryder Cup 2027 trip!'
                : '✨ Mejor Respuesta: ¡Juegue AMBOS durante su viaje a la Ryder Cup 2027!'}
            </p>
          </div>

          <p className="text-emerald-100 mb-8">
            {locale === 'en'
              ? 'Both courses are within 90 minutes of Adare Manor and can be played on the same 3-4 day golf itinerary.'
              : 'Ambos campos están a 90 minutos de Adare Manor y pueden jugarse en el mismo itinerario de golf de 3-4 días.'}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={`/${locale}/golf-courses/ballybunion-old-course`} className="btn-primary bg-white text-emerald-600 hover:bg-gray-100">
              {locale === 'en' ? 'Ballybunion Details' : 'Detalles Ballybunion'}
            </Link>
            <Link href={`/${locale}/golf-courses/lahinch-golf-club`} className="btn-primary bg-white text-emerald-600 hover:bg-gray-100">
              {locale === 'en' ? 'Lahinch Details' : 'Detalles Lahinch'}
            </Link>
            <Link href={`/${locale}/ireland-golf-trip-itineraries`} className="btn-outline border-white text-white hover:bg-white hover:text-emerald-600">
              {locale === 'en' ? 'View Itineraries' : 'Ver Itinerarios'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
