import { Locale } from '@/lib/i18n';
import HeroBlock from '@/components/blocks/HeroBlock';

export default function ItinerariesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return (
    <>
      <HeroBlock
        title={locale === 'en' ? 'Ireland Golf Trip Itineraries' : 'Itinerarios de Viaje de Golf en Irlanda'}
        subtitle={locale === 'en' ? '7-10 Day Sample Routes' : 'Rutas de Muestra 7-10 Días'}
        description={locale === 'en'
          ? 'Combine the 2027 Ryder Cup with a classic Ireland golf trip. Play Ballybunion, Lahinch, Tralee, Doonbeg, and more around the southwest coast.'
          : 'Combina la Ryder Cup 2027 con un viaje de golf clásico por Irlanda. Juega Ballybunion, Lahinch, Tralee, Doonbeg y más por la costa suroeste.'}
        backgroundImage="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            <div className="bg-cream-100 rounded-xl p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-600 mb-6">
                {locale === 'en' ? '7-Day Ryder Cup + Southwest Links' : '7 Días Ryder Cup + Links del Suroeste'}
              </h3>
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
                      {locale === 'en' ? 'Play Adare Manor' : 'Jugar Adare Manor'}
                    </h4>
                    <p className="text-gray-700">{locale === 'en' ? 'Walk the 2027 Ryder Cup course (if available)' : 'Caminar el campo de la Ryder Cup 2027 (si está disponible)'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 3
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
                    Day 4
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-navy-600">
                      {locale === 'en' ? 'Play Tralee' : 'Jugar Tralee'}
                    </h4>
                    <p className="text-gray-700">{locale === 'en' ? 'Arnold Palmer design, dramatic cliffs' : 'Diseño Arnold Palmer, acantilados dramáticos'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                    Day 5
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-navy-600">
                      {locale === 'en' ? 'Play Lahinch' : 'Jugar Lahinch'}
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
                      {locale === 'en' ? 'Depart Shannon' : 'Salida Shannon'}
                    </h4>
                    <p className="text-gray-700">{locale === 'en' ? 'Morning departure or extend trip' : 'Salida por la mañana o extender viaje'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">
                {locale === 'en' ? 'Planning Tips' : 'Consejos de Planificación'}
              </h3>
              <ul className="space-y-3 text-gray-200">
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
