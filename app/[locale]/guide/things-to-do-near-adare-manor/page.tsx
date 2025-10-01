import { Locale } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return {
    title:
      locale === 'en'
        ? 'Things to Do Near Adare Manor | Ryder Cup 2027 Attractions & Activities'
        : 'Qué Hacer Cerca de Adare Manor | Atracciones y Actividades Ryder Cup 2027',
    description:
      locale === 'en'
        ? 'Discover castles, whiskey distilleries, Cliffs of Moher, and local attractions near Adare Manor. Perfect activities for Ryder Cup 2027 rest days in Limerick, Clare & Kerry.'
        : 'Descubre castillos, destilerías de whiskey, Cliffs of Moher y atracciones locales cerca de Adare Manor. Actividades perfectas para días de descanso Ryder Cup 2027 en Limerick, Clare y Kerry.',
    keywords: 'things to do limerick, adare village, bunratty castle, cliffs of moher, king john castle, ryder cup activities',
    alternates: {
      canonical: `https://www.adarelimerickgolf.com/${locale}/guide/things-to-do-near-adare-manor`,
      languages: {
        en: 'https://www.adarelimerickgolf.com/en/guide/things-to-do-near-adare-manor',
        es: 'https://www.adarelimerickgolf.com/es/guide/things-to-do-near-adare-manor',
      },
    },
  };
}

export default function ThingsToDoPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  const attractions = [
    {
      name: 'Adare Village',
      distance: locale === 'en' ? '5 min drive' : '5 min en coche',
      description: locale === 'en'
        ? 'Ireland\'s prettiest village with thatched cottages, heritage sites, and charming shops. Walk the main street, visit medieval churches, and enjoy traditional Irish pubs.'
        : 'El pueblo más bonito de Irlanda con casas de paja, sitios patrimoniales y tiendas encantadoras. Pasee por la calle principal, visite iglesias medievales y disfrute de pubs tradicionales irlandeses.',
      category: locale === 'en' ? 'Village & Culture' : 'Pueblo y Cultura',
      image: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=800',
      activities: locale === 'en'
        ? ['Thatched cottage photography', 'Desmond Castle ruins', 'Traditional Irish pubs', 'Artisan shops & cafés']
        : ['Fotografía casas de paja', 'Ruinas Castillo Desmond', 'Pubs tradicionales irlandeses', 'Tiendas artesanales y cafés'],
    },
    {
      name: locale === 'en' ? 'King John\'s Castle' : 'Castillo del Rey Juan',
      distance: locale === 'en' ? '15 min to Limerick City' : '15 min a Limerick',
      description: locale === 'en'
        ? '13th-century Norman castle on the Shannon River. Interactive exhibits, medieval siege experiences, and panoramic views from the towers. Perfect for history buffs.'
        : 'Castillo normando del siglo XIII en el río Shannon. Exhibiciones interactivas, experiencias de asedio medieval y vistas panorámicas desde las torres. Perfecto para amantes de la historia.',
      category: locale === 'en' ? 'Castles & History' : 'Castillos e Historia',
      image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800',
      activities: locale === 'en'
        ? ['Castle tour', 'Medieval siege exhibition', 'Tower views', 'Viking history']
        : ['Tour del castillo', 'Exhibición asedio medieval', 'Vistas desde torre', 'Historia vikinga'],
    },
    {
      name: locale === 'en' ? 'Bunratty Castle & Folk Park' : 'Castillo Bunratty y Parque Folclórico',
      distance: locale === 'en' ? '20 min drive' : '20 min en coche',
      description: locale === 'en'
        ? 'Ireland\'s most complete medieval fortress with authentic 19th-century village. Medieval banquets available. Experience traditional Irish village life and crafts.'
        : 'La fortaleza medieval más completa de Irlanda con pueblo auténtico del siglo XIX. Banquetes medievales disponibles. Experimente la vida y artesanías del pueblo tradicional irlandés.',
      category: locale === 'en' ? 'Castles & History' : 'Castillos e Historia',
      image: 'https://images.unsplash.com/photo-1585159812596-fda0c8f7c29d?w=800',
      activities: locale === 'en'
        ? ['Castle tour', 'Folk park village', 'Medieval banquet (advance booking)', 'Traditional crafts']
        : ['Tour del castillo', 'Pueblo del parque', 'Banquete medieval (reserva anticipada)', 'Artesanías tradicionales'],
    },
    {
      name: locale === 'en' ? 'Cliffs of Moher' : 'Acantilados de Moher',
      distance: locale === 'en' ? '1h 15min drive' : '1h 15min en coche',
      description: locale === 'en'
        ? 'Ireland\'s most iconic coastal cliffs rising 700 feet above the Atlantic Ocean. Visitor center with exhibits, cliff-edge walking paths, and O\'Brien\'s Tower. UNESCO World Heritage Site.'
        : 'Los acantilados costeros más icónicos de Irlanda elevándose 700 pies sobre el Océano Atlántico. Centro de visitantes con exhibiciones, senderos al borde del acantilado y Torre O\'Brien. Patrimonio Mundial UNESCO.',
      category: locale === 'en' ? 'Nature & Scenery' : 'Naturaleza y Paisaje',
      image: 'https://images.unsplash.com/photo-1588089419648-1bb8bf59c990?w=800',
      activities: locale === 'en'
        ? ['Cliff walk', 'O\'Brien\'s Tower', 'Visitor center', 'Puffin watching (May-Aug)']
        : ['Paseo por acantilado', 'Torre O\'Brien', 'Centro visitantes', 'Observación frailecillos (mayo-ago)'],
    },
    {
      name: locale === 'en' ? 'Killarney National Park' : 'Parque Nacional Killarney',
      distance: locale === 'en' ? '1h drive' : '1h en coche',
      description: locale === 'en'
        ? 'Stunning national park with lakes, mountains, and historic estates. Muckross House, Ross Castle, and jaunting car tours. Ring of Kerry gateway.'
        : 'Impresionante parque nacional con lagos, montañas y fincas históricas. Casa Muckross, Castillo Ross y tours en carruaje. Puerta de entrada al Anillo de Kerry.',
      category: locale === 'en' ? 'Nature & Scenery' : 'Naturaleza y Paisaje',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
      activities: locale === 'en'
        ? ['Muckross House tour', 'Ross Castle', 'Lakes of Killarney', 'Jaunting car rides']
        : ['Tour Casa Muckross', 'Castillo Ross', 'Lagos de Killarney', 'Paseos en carruaje'],
    },
    {
      name: locale === 'en' ? 'Dingle Peninsula' : 'Península de Dingle',
      distance: locale === 'en' ? '1h 30min drive' : '1h 30min en coche',
      description: locale === 'en'
        ? 'Scenic coastal drive with colorful Dingle town, ancient Gaelic sites, and Slea Head Drive. Perfect full-day excursion with dramatic coastal views and traditional Irish culture.'
        : 'Ruta costera escénica con el colorido pueblo de Dingle, sitios gaélicos antiguos y Slea Head Drive. Excursión perfecta de día completo con vistas costeras dramáticas y cultura irlandesa tradicional.',
      category: locale === 'en' ? 'Day Trips' : 'Excursiones de Día',
      image: 'https://images.unsplash.com/photo-1591197443646-c10966e8ce11?w=800',
      activities: locale === 'en'
        ? ['Slea Head Drive', 'Dingle town', 'Dolphin boat tours', 'Beehive huts']
        : ['Slea Head Drive', 'Pueblo Dingle', 'Tours de delfines', 'Chozas colmena'],
    },
    {
      name: locale === 'en' ? 'The Burren' : 'El Burren',
      distance: locale === 'en' ? '1h drive' : '1h en coche',
      description: locale === 'en'
        ? 'Unique limestone karst landscape with rare flora, ancient tombs, and dramatic scenery. Poulnabrone Dolmen, Aillwee Cave, and wildflower walks in spring.'
        : 'Paisaje kárstico de piedra caliza único con flora rara, tumbas antiguas y paisajes dramáticos. Dolmen Poulnabrone, Cueva Aillwee y paseos de flores silvestres en primavera.',
      category: locale === 'en' ? 'Nature & Scenery' : 'Naturaleza y Paisaje',
      image: 'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=800',
      activities: locale === 'en'
        ? ['Poulnabrone Dolmen', 'Aillwee Cave', 'Wildflower walks', 'Coastal drives']
        : ['Dolmen Poulnabrone', 'Cueva Aillwee', 'Paseos flores silvestres', 'Rutas costeras'],
    },
    {
      name: locale === 'en' ? 'Jameson Distillery Experience' : 'Experiencia Destilería Jameson',
      distance: locale === 'en' ? '45 min to Midleton' : '45 min a Midleton',
      description: locale === 'en'
        ? 'Home of Jameson Irish Whiskey with guided tours, tasting experiences, and premium whiskey education. Book the whiskey blending workshop for a hands-on experience.'
        : 'Hogar del whiskey irlandés Jameson con tours guiados, experiencias de degustación y educación premium de whiskey. Reserve el taller de mezcla de whiskey para una experiencia práctica.',
      category: locale === 'en' ? 'Food & Drink' : 'Comida y Bebida',
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800',
      activities: locale === 'en'
        ? ['Distillery tour', 'Whiskey tasting', 'Blending workshop', 'Gift shop']
        : ['Tour destilería', 'Degustación whiskey', 'Taller mezcla', 'Tienda regalos'],
    },
  ];

  const categories = Array.from(new Set(attractions.map((a) => a.category)));

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          {
            label: locale === 'en' ? 'Golf Guides' : 'Guías de Golf',
            href: `/${locale}/guides`,
          },
          {
            label: locale === 'en' ? 'Things to Do' : 'Qué Hacer',
          },
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-navy-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=1600"
            alt="Adare Village Ireland"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative container-custom max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {locale === 'en'
              ? 'Things to Do Near Adare Manor'
              : 'Qué Hacer Cerca de Adare Manor'}
          </h1>
          <p className="text-xl text-emerald-50 mb-4">
            {locale === 'en'
              ? 'Castles, cliffs, whiskey tours, and Irish culture for your Ryder Cup 2027 rest days'
              : 'Castillos, acantilados, tours de whiskey y cultura irlandesa para tus días de descanso Ryder Cup 2027'}
          </p>
          <p className="text-sm text-gray-300">
            {locale === 'en' ? 'Last Updated: January 2025' : 'Última Actualización: Enero 2025'}
          </p>
        </div>
      </section>

      {/* Quick Distance Guide */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-6 text-center">
            {locale === 'en' ? 'Distance from Adare Manor' : 'Distancia desde Adare Manor'}
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-emerald-600">5 min</div>
              <div className="text-sm text-gray-600">{locale === 'en' ? 'Adare Village' : 'Pueblo Adare'}</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-emerald-600">15 min</div>
              <div className="text-sm text-gray-600">{locale === 'en' ? 'Limerick City' : 'Ciudad Limerick'}</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-emerald-600">1h</div>
              <div className="text-sm text-gray-600">{locale === 'en' ? 'Cliffs / Killarney' : 'Acantilados / Killarney'}</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-emerald-600">1.5h</div>
              <div className="text-sm text-gray-600">{locale === 'en' ? 'Dingle / Ring of Kerry' : 'Dingle / Anillo Kerry'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions by Category */}
      {categories.map((category) => {
        const categoryAttractions = attractions.filter((a) => a.category === category);

        return (
          <section key={category} className="section-padding bg-white">
            <div className="container-custom max-w-6xl">
              <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
                {category}
              </h2>

              <div className="space-y-8">
                {categoryAttractions.map((attraction, idx) => (
                  <div key={idx} className="grid md:grid-cols-3 gap-6 bg-cream-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={attraction.image}
                        alt={attraction.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-2 rounded-full text-sm font-bold">
                        {attraction.distance}
                      </div>
                    </div>
                    <div className="md:col-span-2 p-6">
                      <h3 className="text-2xl font-heading font-bold text-navy-600 mb-3">
                        {attraction.name}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {attraction.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-navy-600 mb-2">
                          {locale === 'en' ? 'Activities:' : 'Actividades:'}
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {attraction.activities.map((activity, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-700">
                              <span className="text-emerald-600 mr-2">✓</span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Planning Tips */}
      <section className="section-padding bg-navy-600 text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            {locale === 'en' ? 'Planning Your Rest Days' : 'Planificando Tus Días de Descanso'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-emerald-400 mb-4">
                💡 {locale === 'en' ? 'Half-Day Options' : 'Opciones Medio Día'}
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>• {locale === 'en' ? 'Adare Village walk' : 'Paseo Pueblo Adare'}</li>
                <li>• {locale === 'en' ? 'King John\'s Castle in Limerick' : 'Castillo Rey Juan en Limerick'}</li>
                <li>• {locale === 'en' ? 'Bunratty Castle & Folk Park' : 'Castillo Bunratty y Parque'}</li>
                <li>• {locale === 'en' ? 'Local golf course (morning round)' : 'Campo golf local (ronda mañana)'}</li>
              </ul>
            </div>

            <div className="bg-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-emerald-400 mb-4">
                🗓️ {locale === 'en' ? 'Full-Day Excursions' : 'Excursiones Día Completo'}
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>• {locale === 'en' ? 'Cliffs of Moher + The Burren' : 'Acantilados Moher + El Burren'}</li>
                <li>• {locale === 'en' ? 'Dingle Peninsula drive' : 'Ruta Península Dingle'}</li>
                <li>• {locale === 'en' ? 'Ring of Kerry scenic route' : 'Ruta escénica Anillo Kerry'}</li>
                <li>• {locale === 'en' ? 'Killarney National Park' : 'Parque Nacional Killarney'}</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-emerald-700 rounded-xl p-6">
            <h3 className="text-xl font-heading font-bold mb-3">
              📅 {locale === 'en' ? 'Sample Ryder Cup Week Itinerary' : 'Itinerario Muestra Semana Ryder Cup'}
            </h3>
            <ul className="space-y-2 text-emerald-50">
              <li><strong>{locale === 'en' ? 'Mon-Tue' : 'Lun-Mar'}:</strong> {locale === 'en' ? 'Golf + Adare Village evenings' : 'Golf + Tardes Pueblo Adare'}</li>
              <li><strong>{locale === 'en' ? 'Wed (Rest Day)' : 'Mié (Día Descanso)'}:</strong> {locale === 'en' ? 'Cliffs of Moher full-day trip' : 'Excursión día completo Acantilados Moher'}</li>
              <li><strong>{locale === 'en' ? 'Thu' : 'Jue'}:</strong> {locale === 'en' ? 'Ryder Cup practice rounds' : 'Rondas práctica Ryder Cup'}</li>
              <li><strong>{locale === 'en' ? 'Fri-Sun' : 'Vie-Dom'}:</strong> {locale === 'en' ? 'Ryder Cup competition days' : 'Días competición Ryder Cup'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-emerald-600 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === 'en' ? 'Plan Your Complete Trip' : 'Planifica Tu Viaje Completo'}
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            {locale === 'en'
              ? 'Combine golf, Ryder Cup, and Ireland sightseeing in one unforgettable trip.'
              : 'Combina golf, Ryder Cup y turismo en Irlanda en un viaje inolvidable.'}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={`/${locale}/ireland-golf-trip-itineraries`} className="btn-primary bg-white text-emerald-600 hover:bg-gray-100">
              {locale === 'en' ? 'View Itineraries' : 'Ver Itinerarios'}
            </Link>
            <Link href={`/${locale}/ryder-cup-2027-adare-manor`} className="btn-outline border-white text-white hover:bg-white hover:text-emerald-600">
              {locale === 'en' ? 'Ryder Cup Guide' : 'Guía Ryder Cup'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
