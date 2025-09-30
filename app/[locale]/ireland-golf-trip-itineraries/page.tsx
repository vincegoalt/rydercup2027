import { Locale } from '@/lib/i18n';
import HeroBlock from '@/components/blocks/HeroBlock';
import { generateMetadata as genMeta } from '@/lib/seo';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return genMeta({
    title: locale === 'en'
      ? 'Ireland Golf Trip Itineraries with Ryder Cup 2027 | 8-10 Day Routes'
      : 'Itinerarios Viaje Golf Irlanda con Ryder Cup 2027 | Rutas 8-10 Días',
    description: locale === 'en'
      ? 'Perfect golf trip itineraries combining Ryder Cup 2027 with Ireland\'s best courses. Play Ballybunion, Lahinch, Tralee & more. 8-10 day sample routes from Adare Manor.'
      : 'Itinerarios perfectos de golf combinando Ryder Cup 2027 con los mejores campos de Irlanda. Juega Ballybunion, Lahinch, Tralee y más. Rutas de muestra 8-10 días desde Adare Manor.',
    keywords: ['ireland golf itinerary', 'ryder cup golf trip', 'ballybunion lahinch tralee', 'ireland golf vacation', 'adare manor golf trip'],
    locale,
    canonicalUrl: `https://www.adarelimerickgolf.com/${locale}/ireland-golf-trip-itineraries`,
  });
}

export default function ItinerariesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          {
            label: locale === 'en' ? 'Trip Itineraries' : 'Itinerarios de Viaje',
          },
        ]}
      />
      <HeroBlock
        title={locale === 'en' ? 'Ireland Golf Trip Itineraries' : 'Itinerarios de Viaje de Golf en Irlanda'}
        subtitle={locale === 'en' ? '8-10 Day Sample Routes with Ryder Cup' : 'Rutas de Muestra 8-10 Días con Ryder Cup'}
        description={locale === 'en'
          ? 'Combine the 2027 Ryder Cup with a classic Ireland golf trip. Experience 1-3 days of Ryder Cup competition plus play Ballybunion, Lahinch, Tralee, and more around the southwest coast.'
          : 'Combina la Ryder Cup 2027 con un viaje de golf clásico por Irlanda. Experimenta 1-3 días de competición de Ryder Cup más juega Ballybunion, Lahinch, Tralee y más por la costa suroeste.'}
        backgroundImage="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600"
        keyFacts={[
          {
            label: locale === 'en' ? 'Last Updated' : 'Actualizado',
            value: locale === 'en' ? 'Jan 2025' : 'Ene 2025',
          },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {/* 8-Day Itinerary with 1 Ryder Cup Day */}
            <div className="bg-cream-100 rounded-xl p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-600 mb-6">
                {locale === 'en' ? '8-Day Ryder Cup + Southwest Links' : '8 Días Ryder Cup + Links del Suroeste'}
              </h3>
              <p className="text-gray-600 mb-6">
                {locale === 'en'
                  ? 'Experience one day of Ryder Cup competition plus play Ireland\'s best courses'
                  : 'Experimenta un día de competición de la Ryder Cup más juega los mejores campos de Irlanda'}
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 1
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-navy-600">
                      {locale === 'en' ? 'Arrive Shannon → Adare' : 'Llegar Shannon → Adare'}
                    </h4>
                    <p className="text-gray-700">{locale === 'en' ? 'Fly into Shannon, drive to Adare, settle in' : 'Vuelo a Shannon, coche a Adare, instalarse'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 2
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-navy-600">
                      {locale === 'en' ? 'Play Ballybunion Old Course' : 'Jugar Ballybunion Old Course'}
                    </h4>
                    <p className="text-gray-700">1h 15min drive | {locale === 'en' ? 'World top-10 links' : 'Top-10 mundial links'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 3
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-navy-600">
                      {locale === 'en' ? 'Play Tralee Golf Club' : 'Jugar Tralee Golf Club'}
                    </h4>
                    <p className="text-gray-700">{locale === 'en' ? 'Arnold Palmer design, dramatic cliffs' : 'Diseño Arnold Palmer, acantilados dramáticos'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-amber-600 text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 4
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-navy-600">
                      🏆 {locale === 'en' ? 'Ryder Cup — Friday' : 'Ryder Cup — Viernes'}
                    </h4>
                    <p className="text-gray-700">{locale === 'en' ? 'Attend Ryder Cup Day 1: Foursomes & Fourballs' : 'Asistir Ryder Cup Día 1: Foursomes y Fourballs'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 5
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-navy-600">
                      {locale === 'en' ? 'Play Lahinch Golf Club' : 'Jugar Lahinch Golf Club'}
                    </h4>
                    <p className="text-gray-700">{locale === 'en' ? 'MacKenzie classic, visit Cliffs of Moher' : 'Clásico MacKenzie, visitar acantilados de Moher'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 6
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-navy-600">
                      {locale === 'en' ? 'Play Doonbeg' : 'Jugar Doonbeg'}
                    </h4>
                    <p className="text-gray-700">{locale === 'en' ? 'Greg Norman links on Wild Atlantic Way' : 'Links Greg Norman en Wild Atlantic Way'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 7
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-navy-600">
                      {locale === 'en' ? 'Play Adare Manor or Local Course' : 'Jugar Adare Manor o Campo Local'}
                    </h4>
                    <p className="text-gray-700">{locale === 'en' ? 'Walk the Ryder Cup course (if available)' : 'Caminar el campo de la Ryder Cup (si está disponible)'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 8
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-navy-600">
                      {locale === 'en' ? 'Depart Shannon' : 'Salida Shannon'}
                    </h4>
                    <p className="text-gray-700">{locale === 'en' ? 'Morning departure or extend trip' : 'Salida por la mañana o extender viaje'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 10-Day Ultimate Ryder Cup Itinerary */}
            <div className="bg-navy-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-white">
                {locale === 'en' ? '10-Day Ultimate Ryder Cup Experience' : '10 Días Experiencia Definitiva Ryder Cup'}
              </h3>
              <p className="text-gray-100 mb-6">
                {locale === 'en'
                  ? 'Full Ryder Cup weekend (Friday-Sunday) plus Ireland\'s finest links courses'
                  : 'Fin de semana completo de Ryder Cup (Viernes-Domingo) más los mejores campos links de Irlanda'}
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-white text-navy-600 rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 1
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-white">
                      {locale === 'en' ? 'Arrive Shannon → Adare' : 'Llegar Shannon → Adare'}
                    </h4>
                    <p className="text-gray-100">{locale === 'en' ? 'Fly into Shannon, drive to Adare, evening in village' : 'Vuelo a Shannon, coche a Adare, tarde en el pueblo'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-white text-navy-600 rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 2
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-white">
                      {locale === 'en' ? 'Play Ballybunion Old Course' : 'Jugar Ballybunion Old Course'}
                    </h4>
                    <p className="text-gray-100">1h 15min | {locale === 'en' ? 'World top-10 links' : 'Top-10 mundial links'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-white text-navy-600 rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 3
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-white">
                      {locale === 'en' ? 'Play Tralee Golf Club' : 'Jugar Tralee Golf Club'}
                    </h4>
                    <p className="text-gray-100">{locale === 'en' ? 'Arnold Palmer masterpiece on the cliffs' : 'Obra maestra de Arnold Palmer en los acantilados'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-white text-navy-600 rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 4
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-white">
                      {locale === 'en' ? 'Play Lahinch + Cliffs of Moher' : 'Jugar Lahinch + Acantilados de Moher'}
                    </h4>
                    <p className="text-gray-100">{locale === 'en' ? 'MacKenzie design, afternoon sightseeing' : 'Diseño MacKenzie, turismo por la tarde'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-emerald-500 text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 5
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-white">
                      🏆 {locale === 'en' ? 'Ryder Cup — Friday' : 'Ryder Cup — Viernes'}
                    </h4>
                    <p className="text-gray-100">{locale === 'en' ? 'Day 1: Morning Foursomes + Afternoon Fourballs (8 matches)' : 'Día 1: Foursomes Mañana + Fourballs Tarde (8 partidos)'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-emerald-500 text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 6
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-white">
                      🏆 {locale === 'en' ? 'Ryder Cup — Saturday' : 'Ryder Cup — Sábado'}
                    </h4>
                    <p className="text-gray-100">{locale === 'en' ? 'Day 2: Morning Foursomes + Afternoon Fourballs (8 matches)' : 'Día 2: Foursomes Mañana + Fourballs Tarde (8 partidos)'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-emerald-500 text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 7
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-white">
                      🏆 {locale === 'en' ? 'Ryder Cup — Sunday' : 'Ryder Cup — Domingo'}
                    </h4>
                    <p className="text-gray-100">{locale === 'en' ? 'Day 3: Singles Matches (12 matches) + Trophy Ceremony' : 'Día 3: Partidos Individuales (12 partidos) + Ceremonia del Trofeo'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-white text-navy-600 rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 8
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-white">
                      {locale === 'en' ? 'Rest Day or Play Local Course' : 'Día de Descanso o Jugar Campo Local'}
                    </h4>
                    <p className="text-gray-100">{locale === 'en' ? 'Recover from Ryder Cup excitement, explore Adare' : 'Recuperarse de la emoción de la Ryder Cup, explorar Adare'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-white text-navy-600 rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 9
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-white">
                      {locale === 'en' ? 'Play Doonbeg or Dromoland' : 'Jugar Doonbeg o Dromoland'}
                    </h4>
                    <p className="text-gray-100">{locale === 'en' ? 'Final round on Wild Atlantic Way' : 'Ronda final en Wild Atlantic Way'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-white text-navy-600 rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 10
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-white">
                      {locale === 'en' ? 'Depart Shannon' : 'Salida Shannon'}
                    </h4>
                    <p className="text-gray-100">{locale === 'en' ? 'Morning departure with lifetime memories' : 'Salida matutina con recuerdos para toda la vida'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                {locale === 'en' ? 'Planning Tips' : 'Consejos de Planificación'}
              </h3>
              <ul className="space-y-3 text-gray-100">
                <li>• {locale === 'en' ? 'Book tee times 3-6 months in advance' : 'Reserve horarios 3-6 meses con anticipación'}</li>
                <li>• {locale === 'en' ? 'Rent a car for flexibility between courses' : 'Alquile un coche para flexibilidad entre campos'}</li>
                <li>• {locale === 'en' ? 'Pack rain gear and layers (Irish weather changes fast)' : 'Empaque ropa para lluvia y capas (el clima irlandés cambia rápido)'}</li>
                <li>• {locale === 'en' ? 'Allow rest days if playing 5+ rounds in a week' : 'Permita días de descanso si juega 5+ rondas en una semana'}</li>
                <li>• {locale === 'en' ? 'Combine golf with sightseeing (Cliffs of Moher, Ring of Kerry)' : 'Combine golf con turismo (acantilados de Moher, Anillo de Kerry)'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
