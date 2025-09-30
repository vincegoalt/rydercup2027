export interface Hotel {
  id: string;
  name: string;
  slug: string;
  location: string;
  county: string;
  distanceFromAdare: string;
  distanceKm: number;
  priceRange: '€€' | '€€€' | '€€€€';
  rating: number;
  amenities: {
    en: string[];
    es: string[];
  };
  description: {
    en: string;
    es: string;
  };
  bookingUrl?: string;
  imageUrl: string;
  coordinates: { lat: number; lng: number };
}

export const hotels: Hotel[] = [
  {
    id: 'adare-manor-hotel',
    name: 'Adare Manor',
    slug: 'adare-manor-hotel',
    location: 'Adare Village',
    county: 'Limerick',
    distanceFromAdare: '0 min (on-site)',
    distanceKm: 0,
    priceRange: '€€€€',
    rating: 5.0,
    amenities: {
      en: ['5-star luxury resort', 'On-site championship golf', 'La Mer spa', 'Fine dining restaurants', 'Historic manor house'],
      es: ['Resort de lujo 5 estrellas', 'Golf de campeonato en el sitio', 'Spa La Mer', 'Restaurantes de alta cocina', 'Casa señorial histórica'],
    },
    description: {
      en: 'Adare Manor is a 5-star castle hotel and the official host of the 2027 Ryder Cup. Stay where the teams stay, with access to the championship course (limited availability), world-class spa, and Michelin-level dining in a 19th-century neo-Gothic manor.',
      es: 'Adare Manor es un hotel castillo de 5 estrellas y anfitrión oficial de la Ryder Cup 2027. Alójate donde se alojan los equipos, con acceso al campo de campeonato (disponibilidad limitada), spa de clase mundial y gastronomía nivel Michelin en una mansión neogótica del siglo XIX.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200',
    coordinates: { lat: 52.5644, lng: -8.7889 },
  },
  {
    id: 'dunraven-arms',
    name: 'Dunraven Arms Hotel',
    slug: 'dunraven-arms-hotel',
    location: 'Adare Village',
    county: 'Limerick',
    distanceFromAdare: '0.4 mi (5min walk)',
    distanceKm: 0.6,
    priceRange: '€€€',
    rating: 4.5,
    amenities: {
      en: ['4-star boutique hotel', 'Village center location', 'Award-winning restaurant', 'Spa services', 'Golf packages'],
      es: ['Hotel boutique 4 estrellas', 'Ubicación centro del pueblo', 'Restaurante premiado', 'Servicios de spa', 'Paquetes de golf'],
    },
    description: {
      en: 'The Dunraven Arms is a family-run 4-star hotel in the heart of Adare Village, a 5-minute walk from Adare Manor. Offering traditional Irish hospitality, an award-winning restaurant, and tailored golf packages for Ryder Cup visitors.',
      es: 'El Dunraven Arms es un hotel familiar de 4 estrellas en el corazón del pueblo de Adare, a 5 minutos a pie de Adare Manor. Ofrece hospitalidad tradicional irlandesa, un restaurante premiado y paquetes de golf personalizados para visitantes de la Ryder Cup.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200',
    coordinates: { lat: 52.5631, lng: -8.7921 },
  },
  {
    id: 'fitzgeralds-woodlands',
    name: 'Fitzgerald\'s Woodlands House Hotel',
    slug: 'fitzgeralds-woodlands-hotel',
    location: 'Adare Village',
    county: 'Limerick',
    distanceFromAdare: '0.5 mi (7min walk)',
    distanceKm: 0.8,
    priceRange: '€€€',
    rating: 4.3,
    amenities: {
      en: ['4-star family hotel', 'Leisure center & pool', 'Family rooms available', 'On-site dining', 'Free parking'],
      es: ['Hotel familiar 4 estrellas', 'Centro de ocio y piscina', 'Habitaciones familiares disponibles', 'Restaurante en el sitio', 'Aparcamiento gratuito'],
    },
    description: {
      en: 'Fitzgerald\'s Woodlands House Hotel is a comfortable 4-star option in Adare Village with family-friendly amenities, a leisure center with pool, and spacious rooms. Ideal for groups and families attending the Ryder Cup on a mid-range budget.',
      es: 'Fitzgerald\'s Woodlands House Hotel es una cómoda opción 4 estrellas en Adare Village con comodidades para familias, centro de ocio con piscina y habitaciones espaciosas. Ideal para grupos y familias que asisten a la Ryder Cup con presupuesto medio.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200',
    coordinates: { lat: 52.5618, lng: -8.7945 },
  },
  {
    id: 'berkeley-lodge',
    name: 'Berkeley Lodge',
    slug: 'berkeley-lodge',
    location: 'Adare Village',
    county: 'Limerick',
    distanceFromAdare: '0.3 mi (4min walk)',
    distanceKm: 0.5,
    priceRange: '€€',
    rating: 4.2,
    amenities: {
      en: ['Boutique guesthouse', 'Central village location', 'Breakfast included', 'Cozy rooms', 'Great value'],
      es: ['Casa de huéspedes boutique', 'Ubicación central del pueblo', 'Desayuno incluido', 'Habitaciones acogedoras', 'Excelente valor'],
    },
    description: {
      en: 'Berkeley Lodge is a charming guesthouse right in Adare Village, offering great value and a personal touch. Perfect for independent travelers who want to be close to Adare Manor and the village\'s thatched-roof pubs and restaurants.',
      es: 'Berkeley Lodge es una encantadora casa de huéspedes en el pueblo de Adare, que ofrece gran valor y un toque personal. Perfecto para viajeros independientes que quieren estar cerca de Adare Manor y de los pubs y restaurantes de techo de paja del pueblo.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200',
    coordinates: { lat: 52.5639, lng: -8.7902 },
  },
  {
    id: 'castletroy-park-hotel',
    name: 'Castletroy Park Hotel',
    slug: 'castletroy-park-hotel',
    location: 'Limerick City',
    county: 'Limerick',
    distanceFromAdare: '20min drive',
    distanceKm: 16,
    priceRange: '€€€',
    rating: 4.4,
    amenities: {
      en: ['4-star city hotel', 'Leisure club & spa', 'Golf packages', 'Conference facilities', 'Restaurant & bar'],
      es: ['Hotel de ciudad 4 estrellas', 'Club de ocio y spa', 'Paquetes de golf', 'Instalaciones de conferencias', 'Restaurante y bar'],
    },
    description: {
      en: 'Castletroy Park Hotel in Limerick City offers 4-star comfort 20 minutes from Adare Manor. A solid option if Adare Village hotels are fully booked, with easy access to Limerick\'s pubs, restaurants, and King John\'s Castle.',
      es: 'Castletroy Park Hotel en Limerick City ofrece confort 4 estrellas a 20 minutos de Adare Manor. Una opción sólida si los hoteles del pueblo de Adare están completos, con fácil acceso a los pubs, restaurantes y el Castillo de King John de Limerick.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200',
    coordinates: { lat: 52.6703, lng: -8.5703 },
  },
  {
    id: 'killarney-plaza',
    name: 'Killarney Plaza Hotel',
    slug: 'killarney-plaza-hotel',
    location: 'Killarney',
    county: 'Kerry',
    distanceFromAdare: '1h drive',
    distanceKm: 70,
    priceRange: '€€€',
    rating: 4.3,
    amenities: {
      en: ['4-star town center hotel', 'Spa & leisure club', 'Close to Ring of Kerry', 'Golf packages', 'Family-friendly'],
      es: ['Hotel 4 estrellas centro del pueblo', 'Spa y club de ocio', 'Cerca del Anillo de Kerry', 'Paquetes de golf', 'Apto para familias'],
    },
    description: {
      en: 'Killarney Plaza Hotel is a 4-star base in Killarney town, 1 hour from Adare and close to links courses like Ballybunion, Tralee, and Waterville. Ideal for combining Ryder Cup attendance with a scenic southwest Ireland golf trip.',
      es: 'Killarney Plaza Hotel es una base 4 estrellas en el pueblo de Killarney, a 1 hora de Adare y cerca de campos links como Ballybunion, Tralee y Waterville. Ideal para combinar la asistencia a la Ryder Cup con un pintoresco viaje de golf por el suroeste de Irlanda.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200',
    coordinates: { lat: 52.0589, lng: -9.5044 },
  },
  {
    id: 'dromoland-castle',
    name: 'Dromoland Castle',
    slug: 'dromoland-castle',
    location: 'Newmarket-on-Fergus',
    county: 'Clare',
    distanceFromAdare: '35min drive',
    distanceKm: 28,
    priceRange: '€€€€',
    rating: 5.0,
    amenities: {
      en: ['5-star castle hotel', 'On-site parkland golf', 'Michelin dining', 'Estate activities', 'Luxury spa'],
      es: ['Hotel castillo 5 estrellas', 'Golf parkland en el sitio', 'Gastronomía Michelin', 'Actividades en la finca', 'Spa de lujo'],
    },
    description: {
      en: 'Dromoland Castle is a 5-star castle hotel 35 minutes from Adare, near Shannon Airport. If Adare Manor is fully booked, Dromoland offers a similar luxury castle experience with on-site golf, falconry, and clay shooting on a 450-acre estate.',
      es: 'Dromoland Castle es un hotel castillo 5 estrellas a 35 minutos de Adare, cerca del aeropuerto de Shannon. Si Adare Manor está completo, Dromoland ofrece una experiencia de castillo de lujo similar con golf en el sitio, cetrería y tiro con arcilla en una finca de 450 acres.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200',
    coordinates: { lat: 52.7697, lng: -8.9039 },
  },
  {
    id: 'trump-doonbeg',
    name: 'Trump International Doonbeg',
    slug: 'trump-doonbeg-hotel',
    location: 'Doonbeg',
    county: 'Clare',
    distanceFromAdare: '1h 20min drive',
    distanceKm: 88,
    priceRange: '€€€€',
    rating: 4.8,
    amenities: {
      en: ['5-star golf resort', 'Links course on-site', 'Spa & leisure', 'Fine dining', 'Atlantic coast location'],
      es: ['Resort de golf 5 estrellas', 'Campo links en el sitio', 'Spa y ocio', 'Alta cocina', 'Ubicación costa atlántica'],
    },
    description: {
      en: 'Trump International Doonbeg is a 5-star links resort on the Wild Atlantic Way. Stay and play on one of Ireland\'s wildest links courses, 1h 20min from Adare. Perfect for extending your trip with Atlantic coast golf and scenery.',
      es: 'Trump International Doonbeg es un resort links 5 estrellas en la Wild Atlantic Way. Alójate y juega en uno de los campos links más salvajes de Irlanda, a 1h 20min de Adare. Perfecto para extender tu viaje con golf y paisajes de la costa atlántica.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200',
    coordinates: { lat: 52.7356, lng: -9.5289 },
  },
];
