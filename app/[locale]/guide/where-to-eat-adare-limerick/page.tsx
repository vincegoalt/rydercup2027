import { Locale } from '@/lib/i18n';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return {
    title:
      locale === 'en'
        ? 'Where to Eat in Adare & Limerick | Best Restaurants Ryder Cup 2027'
        : 'Dónde Comer en Adare y Limerick | Mejores Restaurantes Ryder Cup 2027',
    description:
      locale === 'en'
        ? 'Best restaurants, pubs, and cafés in Adare Village and Limerick City. From Michelin-starred dining to traditional Irish pubs. Complete Ryder Cup 2027 dining guide.'
        : 'Mejores restaurantes, pubs y cafés en Adare Village y Ciudad Limerick. Desde cenas con estrellas Michelin hasta pubs tradicionales irlandeses. Guía completa de restaurantes Ryder Cup 2027.',
    keywords: 'adare restaurants, limerick restaurants, irish pubs adare, michelin star ireland, traditional irish food',
    alternates: {
      canonical: `https://www.adarelimerickgolf.com/${locale}/guide/where-to-eat-adare-limerick`,
      languages: {
        en: 'https://www.adarelimerickgolf.com/en/guide/where-to-eat-adare-limerick',
        es: 'https://www.adarelimerickgolf.com/es/guide/where-to-eat-adare-limerick',
      },
    },
  };
}

export default function WhereToEatPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  const restaurants = [
    // Adare Village
    {
      name: 'The Oak Room at Adare Manor',
      location: locale === 'en' ? 'Adare Manor' : 'Adare Manor',
      priceRange: '€€€€',
      type: locale === 'en' ? 'Fine Dining' : 'Alta Cocina',
      description: locale === 'en'
        ? 'Michelin-starred fine dining with seasonal Irish ingredients. Tasting menus, extensive wine list, impeccable service. Advance booking essential.'
        : 'Alta cocina con estrella Michelin con ingredientes irlandeses de temporada. Menús degustación, extensa carta de vinos, servicio impecable. Reserva anticipada esencial.',
      highlights: locale === 'en'
        ? ['Michelin star', 'Tasting menus', 'Manor estate setting', 'Wine pairing']
        : ['Estrella Michelin', 'Menús degustación', 'Finca señorial', 'Maridaje vinos'],
      bookingAdvice: locale === 'en' ? 'Book 2-3 months ahead for Ryder Cup week' : 'Reserve 2-3 meses antes para semana Ryder Cup',
    },
    {
      name: 'The Carriage House',
      location: locale === 'en' ? 'Adare Manor' : 'Adare Manor',
      priceRange: '€€€',
      type: locale === 'en' ? 'Fine Dining' : 'Alta Cocina',
      description: locale === 'en'
        ? 'Elegant manor dining with Irish and European cuisine. Beautiful ambiance, perfect for pre-golf breakfast or celebratory dinners.'
        : 'Comedor elegante con cocina irlandesa y europea. Ambiente hermoso, perfecto para desayuno pre-golf o cenas celebratorias.',
      highlights: locale === 'en'
        ? ['Irish breakfast', 'European menu', 'Manor views', 'À la carte dining']
        : ['Desayuno irlandés', 'Menú europeo', 'Vistas finca', 'Comida à la carte'],
      bookingAdvice: locale === 'en' ? 'Manor guests have priority' : 'Huéspedes finca tienen prioridad',
    },
    {
      name: '1826 Adare',
      location: locale === 'en' ? 'Main Street, Adare' : 'Calle Principal, Adare',
      priceRange: '€€€',
      type: locale === 'en' ? 'Modern Irish' : 'Irlandés Moderno',
      description: locale === 'en'
        ? 'Contemporary Irish cuisine in a thatched cottage setting. Locally sourced ingredients, creative presentations, intimate atmosphere.'
        : 'Cocina irlandesa contemporánea en casa de paja. Ingredientes locales, presentaciones creativas, atmósfera íntima.',
      highlights: locale === 'en'
        ? ['Thatched cottage', 'Local ingredients', 'Seasonal menu', 'Cozy ambiance']
        : ['Casa de paja', 'Ingredientes locales', 'Menú temporada', 'Ambiente acogedor'],
      bookingAdvice: locale === 'en' ? 'Reserve 1 week ahead' : 'Reserve 1 semana antes',
    },
    {
      name: 'The Wild Geese',
      location: locale === 'en' ? 'Rose Cottage, Adare' : 'Rose Cottage, Adare',
      priceRange: '€€€',
      type: locale === 'en' ? 'Irish Fine Dining' : 'Alta Cocina Irlandesa',
      description: locale === 'en'
        ? 'Award-winning restaurant in a charming cottage. Modern Irish cooking with French influences. Excellent value tasting menus.'
        : 'Restaurante premiado en encantadora cabaña. Cocina irlandesa moderna con influencias francesas. Excelentes menús degustación de valor.',
      highlights: locale === 'en'
        ? ['Award-winning chef', 'French-Irish fusion', 'Cottage setting', 'Value tasting menu']
        : ['Chef premiado', 'Fusión franco-irlandesa', 'Ambiente cabaña', 'Menú degustación valor'],
      bookingAdvice: locale === 'en' ? 'Book several days ahead' : 'Reserve varios días antes',
    },
    {
      name: 'Bill Chawke\'s Lounge Bar',
      location: locale === 'en' ? 'Main Street, Adare' : 'Calle Principal, Adare',
      priceRange: '€€',
      type: locale === 'en' ? 'Traditional Pub' : 'Pub Tradicional',
      description: locale === 'en'
        ? 'Classic Irish pub with thatched roof. Hearty pub grub, Guinness, live traditional music on weekends. Warm, friendly atmosphere.'
        : 'Pub irlandés clásico con techo de paja. Comida abundante de pub, Guinness, música tradicional en vivo los fines de semana. Ambiente cálido y amigable.',
      highlights: locale === 'en'
        ? ['Traditional pub food', 'Guinness & craft beer', 'Live music weekends', 'Thatched roof']
        : ['Comida pub tradicional', 'Guinness y cerveza artesanal', 'Música vivo fines semana', 'Techo paja'],
      bookingAdvice: locale === 'en' ? 'Walk-ins welcome, busy evenings' : 'Sin reserva, tardes ocupadas',
    },

    // Limerick City
    {
      name: 'The Curragower Seafood Bar',
      location: locale === 'en' ? 'Limerick City (riverside)' : 'Ciudad Limerick (ribera)',
      priceRange: '€€€',
      type: locale === 'en' ? 'Seafood' : 'Mariscos',
      description: locale === 'en'
        ? 'Premier seafood restaurant on the Shannon River. Fresh oysters, Atlantic fish, riverside terrace. Stunning views of King John\'s Castle.'
        : 'Restaurante premier de mariscos en el río Shannon. Ostras frescas, pescado atlántico, terraza ribera. Vistas impresionantes del Castillo del Rey Juan.',
      highlights: locale === 'en'
        ? ['Fresh seafood', 'River views', 'Oyster bar', 'Outdoor terrace']
        : ['Mariscos frescos', 'Vistas río', 'Barra ostras', 'Terraza exterior'],
      bookingAdvice: locale === 'en' ? 'Book ahead for riverside tables' : 'Reserve antes para mesas ribera',
    },
    {
      name: 'Sash Restaurant',
      location: locale === 'en' ? 'No. 1 Pery Square, Limerick' : 'No. 1 Pery Square, Limerick',
      priceRange: '€€€',
      type: locale === 'en' ? 'Modern European' : 'Europeo Moderno',
      description: locale === 'en'
        ? 'Boutique hotel restaurant with modern European cuisine. Georgian townhouse setting, creative tasting menus, extensive wine cellar.'
        : 'Restaurante hotel boutique con cocina europea moderna. Casa georgiana, menús degustación creativos, extensa bodega.',
      highlights: locale === 'en'
        ? ['Georgian townhouse', 'Tasting menus', 'Wine cellar', 'Romantic setting']
        : ['Casa georgiana', 'Menús degustación', 'Bodega vinos', 'Ambiente romántico'],
      bookingAdvice: locale === 'en' ? 'Reserve 3-5 days ahead' : 'Reserve 3-5 días antes',
    },
    {
      name: 'Flannerys Bar',
      location: locale === 'en' ? 'O\'Connell Street, Limerick' : 'O\'Connell Street, Limerick',
      priceRange: '€€',
      type: locale === 'en' ? 'Traditional Pub' : 'Pub Tradicional',
      description: locale === 'en'
        ? 'Historic Victorian pub with authentic Irish atmosphere. Traditional carvery lunch, evening pub food, sports on TV. Local favorite.'
        : 'Pub victoriano histórico con atmósfera irlandesa auténtica. Almuerzo buffet tradicional, comida pub nocturna, deportes en TV. Favorito local.',
      highlights: locale === 'en'
        ? ['Victorian pub', 'Carvery lunch', 'Sports TV', 'Local atmosphere']
        : ['Pub victoriano', 'Almuerzo buffet', 'TV deportes', 'Ambiente local'],
      bookingAdvice: locale === 'en' ? 'Walk-ins welcome' : 'Sin reserva necesaria',
    },
    {
      name: 'Hook & Ladder',
      location: locale === 'en' ? 'Sarsfield Street, Limerick' : 'Sarsfield Street, Limerick',
      priceRange: '€€',
      type: locale === 'en' ? 'Steakhouse/Grill' : 'Parrilla/Asador',
      description: locale === 'en'
        ? 'Modern steakhouse and grill in a converted fire station. Irish beef, burgers, craft cocktails. Lively atmosphere.'
        : 'Asador moderno en antigua estación bomberos. Carne irlandesa, hamburguesas, cócteles artesanales. Atmósfera animada.',
      highlights: locale === 'en'
        ? ['Irish beef', 'Craft cocktails', 'Fire station building', 'Casual dining']
        : ['Carne irlandesa', 'Cócteles artesanales', 'Edificio estación', 'Comida casual'],
      bookingAdvice: locale === 'en' ? 'Reservations recommended' : 'Reservas recomendadas',
    },
  ];

  const quickBites = [
    {
      name: 'Aroi Asian Street Food',
      location: locale === 'en' ? 'Limerick City' : 'Ciudad Limerick',
      type: locale === 'en' ? 'Asian Fusion' : 'Fusión Asiática',
      price: '€€',
      description: locale === 'en' ? 'Quick, fresh Asian cuisine. Ramen, bao buns, rice bowls.' : 'Cocina asiática rápida y fresca. Ramen, bao buns, bowls arroz.',
    },
    {
      name: 'Dough Bros',
      location: locale === 'en' ? 'Limerick City' : 'Ciudad Limerick',
      type: locale === 'en' ? 'Pizza' : 'Pizza',
      price: '€€',
      description: locale === 'en' ? 'Artisan wood-fired pizza. Casual atmosphere, craft beer.' : 'Pizza artesanal horno leña. Ambiente casual, cerveza artesanal.',
    },
    {
      name: 'The Yellow Door',
      location: locale === 'en' ? 'Adare Village' : 'Pueblo Adare',
      type: locale === 'en' ? 'Café & Deli' : 'Café y Delicatessen',
      price: '€',
      description: locale === 'en' ? 'Breakfast, lunch, coffee. Perfect for quick pre-golf bite.' : 'Desayuno, almuerzo, café. Perfecto para bocado rápido pre-golf.',
    },
  ];

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
            label: locale === 'en' ? 'Where to Eat' : 'Dónde Comer',
          },
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-emerald-600 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {locale === 'en'
              ? 'Where to Eat in Adare & Limerick'
              : 'Dónde Comer en Adare y Limerick'}
          </h1>
          <p className="text-xl text-emerald-50 mb-4">
            {locale === 'en'
              ? 'From Michelin-starred fine dining to traditional Irish pubs'
              : 'Desde alta cocina con estrellas Michelin hasta pubs tradicionales irlandeses'}
          </p>
          <p className="text-sm text-emerald-100">
            {locale === 'en' ? 'Last Updated: January 2025' : 'Última Actualización: Enero 2025'}
          </p>
        </div>
      </section>

      {/* Price Guide */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-6 text-center">
            {locale === 'en' ? 'Price Guide' : 'Guía de Precios'}
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-700">€</div>
              <div className="text-sm text-gray-600">{locale === 'en' ? 'Under €15' : 'Menos €15'}</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-700">€€</div>
              <div className="text-sm text-gray-600">€15-35</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-700">€€€</div>
              <div className="text-sm text-gray-600">€35-75</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-700">€€€€</div>
              <div className="text-sm text-gray-600">{locale === 'en' ? '€75+' : '€75+'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Restaurants */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en' ? 'Top Restaurants' : 'Mejores Restaurantes'}
          </h2>

          <div className="space-y-6">
            {restaurants.map((restaurant, idx) => (
              <div key={idx} className="bg-cream-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-navy-600 mb-1">
                      {restaurant.name}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span>📍 {restaurant.location}</span>
                      <span>💰 {restaurant.priceRange}</span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-semibold">
                        {restaurant.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {restaurant.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-navy-600 mb-2">
                      {locale === 'en' ? 'Highlights:' : 'Destacados:'}
                    </h4>
                    <ul className="space-y-1">
                      {restaurant.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <span className="text-emerald-600 mr-2">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-navy-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy-600 mb-2">
                      📞 {locale === 'en' ? 'Booking:' : 'Reservas:'}
                    </h4>
                    <p className="text-sm text-gray-700">{restaurant.bookingAdvice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Bites */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en' ? 'Quick Bites & Cafés' : 'Comida Rápida y Cafés'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {quickBites.map((place, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-heading font-bold text-navy-600 mb-2">
                  {place.name}
                </h3>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-semibold">
                    {place.type}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-semibold">
                    {place.price}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-2">📍 {place.location}</p>
                <p className="text-sm text-gray-600">{place.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Tips */}
      <section className="section-padding bg-navy-600 text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            {locale === 'en' ? 'Dining Tips for Ryder Cup Week' : 'Consejos Restaurantes Semana Ryder Cup'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-emerald-400 mb-4">
                📅 {locale === 'en' ? 'Book Early' : 'Reserve Temprano'}
              </h3>
              <p className="text-gray-200">
                {locale === 'en'
                  ? 'Restaurants fill up fast during Ryder Cup week. Book fine dining 2-3 months ahead, casual spots 1-2 weeks ahead.'
                  : 'Los restaurantes se llenan rápido durante la semana de Ryder Cup. Reserve alta cocina 2-3 meses antes, lugares casuales 1-2 semanas antes.'}
              </p>
            </div>

            <div className="bg-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-emerald-400 mb-4">
                🍺 {locale === 'en' ? 'Irish Pub Experience' : 'Experiencia Pub Irlandés'}
              </h3>
              <p className="text-gray-200">
                {locale === 'en'
                  ? 'Traditional pubs serve food until 9-10pm. Arrive early for live music nights (Friday-Sunday). Guinness and Irish whiskey are must-tries.'
                  : 'Pubs tradicionales sirven comida hasta 9-10pm. Llegue temprano para noches de música en vivo (viernes-domingo). Guinness y whiskey irlandés son imprescindibles.'}
              </p>
            </div>

            <div className="bg-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-emerald-400 mb-4">
                ⏰ {locale === 'en' ? 'Timing' : 'Horarios'}
              </h3>
              <p className="text-gray-200">
                {locale === 'en'
                  ? 'Irish dinner service is 6-9pm. Lunch is typically 12:30-2:30pm. Many restaurants close Mondays.'
                  : 'Servicio cena irlandesa es 6-9pm. Almuerzo típicamente 12:30-2:30pm. Muchos restaurantes cierran lunes.'}
              </p>
            </div>

            <div className="bg-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-emerald-400 mb-4">
                💳 {locale === 'en' ? 'Tipping' : 'Propinas'}
              </h3>
              <p className="text-gray-200">
                {locale === 'en'
                  ? '10-15% is standard for good service. Many restaurants add service charge. Cash tips for bartenders are appreciated.'
                  : '10-15% es estándar para buen servicio. Muchos restaurantes agregan cargo servicio. Propinas en efectivo para camareros son apreciadas.'}
              </p>
            </div>
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
              ? 'Combine great golf, Irish culture, and world-class dining.'
              : 'Combina gran golf, cultura irlandesa y gastronomía de clase mundial.'}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={`/${locale}/guide/things-to-do-near-adare-manor`} className="btn-primary bg-white text-emerald-600 hover:bg-gray-100">
              {locale === 'en' ? 'Things to Do' : 'Qué Hacer'}
            </Link>
            <Link href={`/${locale}/hotels-near-adare-manor`} className="btn-outline border-white text-white hover:bg-white hover:text-emerald-600">
              {locale === 'en' ? 'Find Hotels' : 'Buscar Hoteles'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
