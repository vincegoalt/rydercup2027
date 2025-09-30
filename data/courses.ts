export interface GolfCourse {
  id: string;
  name: string;
  slug: string;
  location: string;
  county: string;
  distanceFromAdare: string;
  distanceKm: number;
  type: 'links' | 'parkland' | 'championship';
  greenFee: string;
  designer: string;
  description: {
    en: string;
    es: string;
  };
  highlights: {
    en: string[];
    es: string[];
  };
  bookingUrl?: string;
  imageUrl: string;
  coordinates: { lat: number; lng: number };
}

export const golfCourses: GolfCourse[] = [
  {
    id: 'adare-manor',
    name: 'Adare Manor',
    slug: 'adare-manor',
    location: 'Adare',
    county: 'Limerick',
    distanceFromAdare: '0 min',
    distanceKm: 0,
    type: 'championship',
    greenFee: '€550',
    designer: 'Tom Fazio',
    description: {
      en: 'The 2027 Ryder Cup venue at Adare Manor features a championship Tom Fazio redesign with modern drainage, sand-capped fairways, and rebuilt greens. This parkland masterpiece sits within the grounds of a 5-star manor estate and offers one of Ireland\'s most exclusive golf experiences.',
      es: 'La sede de la Ryder Cup 2027 en Adare Manor presenta un rediseño de campeonato de Tom Fazio con drenaje moderno, calles con arena y greens reconstruidos. Esta obra maestra parkland se encuentra dentro de una finca señorial de 5 estrellas y ofrece una de las experiencias de golf más exclusivas de Irlanda.',
    },
    highlights: {
      en: ['2027 Ryder Cup host venue', 'Tom Fazio championship redesign', '€550 resident rate (2026)', 'On-site 5-star accommodation', 'Caddie service available (€120)'],
      es: ['Sede de la Ryder Cup 2027', 'Rediseño de campeonato Tom Fazio', 'Tarifa residente €550 (2026)', 'Alojamiento 5 estrellas en el sitio', 'Servicio de caddie disponible (€120)'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200',
    coordinates: { lat: 52.5644, lng: -8.7889 },
  },
  {
    id: 'ballybunion-old',
    name: 'Ballybunion Golf Club (Old Course)',
    slug: 'ballybunion-old-course',
    location: 'Ballybunion',
    county: 'Kerry',
    distanceFromAdare: '1h 15min drive',
    distanceKm: 85,
    type: 'links',
    greenFee: '€120-€280',
    designer: 'Natural links',
    description: {
      en: 'Often ranked among the world\'s top 10 links courses, Ballybunion Old Course runs along dramatic cliffs above the Atlantic. This natural links layout features towering dunes, wild grasses, and some of the most stunning ocean holes you\'ll ever play.',
      es: 'A menudo clasificado entre los 10 mejores campos links del mundo, el Old Course de Ballybunion discurre por espectaculares acantilados sobre el Atlántico. Este trazado links natural presenta dunas imponentes, pastos salvajes y algunos de los hoyos oceánicos más impresionantes que jamás jugarás.',
    },
    highlights: {
      en: ['World top-10 links', 'Atlantic cliffside holes', 'Natural dune landscape', '1h 15min from Adare', 'Classic Irish links experience'],
      es: ['Links top-10 mundial', 'Hoyos junto al acantilado', 'Paisaje de dunas natural', '1h 15min desde Adare', 'Experiencia links irlandesa clásica'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200',
    coordinates: { lat: 52.5086, lng: -9.6689 },
  },
  {
    id: 'lahinch',
    name: 'Lahinch Golf Club',
    slug: 'lahinch-golf-club',
    location: 'Lahinch',
    county: 'Clare',
    distanceFromAdare: '1h 10min drive',
    distanceKm: 75,
    type: 'links',
    greenFee: '€140-€295',
    designer: 'Old Tom Morris / Alister MacKenzie',
    description: {
      en: 'Lahinch is Ireland\'s "St Andrews" - a classic links redesigned by MacKenzie in 1927. The Old Course runs through massive dunes along Liscannor Bay, with blind shots, deep bunkers, and the famous "Dell" hole where you ring a bell to let groups behind know the green is clear.',
      es: 'Lahinch es el "St Andrews" de Irlanda: un links clásico rediseñado por MacKenzie en 1927. El Old Course atraviesa dunas masivas a lo largo de Liscannor Bay, con golpes ciegos, bunkers profundos y el famoso hoyo "Dell" donde tocas una campana para avisar a los grupos detrás que el green está libre.',
    },
    highlights: {
      en: ['MacKenzie design (1927)', 'Massive dune landscape', 'Famous "Dell" blind par 3', '1h 10min from Adare', 'Ireland\'s St Andrews'],
      es: ['Diseño MacKenzie (1927)', 'Paisaje de dunas masivo', 'Famoso par 3 ciego "Dell"', '1h 10min desde Adare', 'St Andrews de Irlanda'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200',
    coordinates: { lat: 52.9347, lng: -9.3481 },
  },
  {
    id: 'tralee',
    name: 'Tralee Golf Club',
    slug: 'tralee-golf-club',
    location: 'Tralee',
    county: 'Kerry',
    distanceFromAdare: '1h 25min drive',
    distanceKm: 95,
    type: 'links',
    greenFee: '€120-€200',
    designer: 'Arnold Palmer',
    description: {
      en: 'Arnold Palmer called Tralee "the finest piece of links land I\'ve ever seen." This dramatic course winds through the dunes of Barrow Beach with ocean views on nearly every hole. The back nine, perched on cliffs above the Atlantic, is one of golf\'s most scenic stretches.',
      es: 'Arnold Palmer llamó a Tralee "el mejor terreno links que he visto jamás". Este espectacular campo serpentea por las dunas de Barrow Beach con vistas al océano en casi todos los hoyos. Los últimos nueve, encaramados en acantilados sobre el Atlántico, son uno de los tramos más escénicos del golf.',
    },
    highlights: {
      en: ['Arnold Palmer design', 'Dramatic clifftop holes', 'Ocean views on most holes', '1h 25min from Adare', 'Palmer\'s favorite links land'],
      es: ['Diseño Arnold Palmer', 'Hoyos dramáticos en acantilados', 'Vistas al océano en la mayoría', '1h 25min desde Adare', 'Terreno links favorito de Palmer'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200',
    coordinates: { lat: 52.2847, lng: -9.9428 },
  },
  {
    id: 'doonbeg',
    name: 'Trump International Doonbeg',
    slug: 'doonbeg-golf-club',
    location: 'Doonbeg',
    county: 'Clare',
    distanceFromAdare: '1h 20min drive',
    distanceKm: 88,
    type: 'links',
    greenFee: '€120-€350',
    designer: 'Greg Norman / Martin Hawtree',
    description: {
      en: 'Formerly Doonbeg Golf Club, this Greg Norman links was acquired and enhanced by Trump International. The course tumbles through enormous dunes along Doughmore Bay, with several holes running directly beside the beach. A true wild links where wind and weather dictate your score.',
      es: 'Anteriormente Doonbeg Golf Club, este links de Greg Norman fue adquirido y mejorado por Trump International. El campo desciende por enormes dunas a lo largo de Doughmore Bay, con varios hoyos junto a la playa. Un verdadero links salvaje donde el viento y el clima dictan tu puntuación.',
    },
    highlights: {
      en: ['Greg Norman / Hawtree design', 'Beachside holes', 'Massive dune landscape', '1h 20min from Adare', '5-star resort accommodation'],
      es: ['Diseño Greg Norman / Hawtree', 'Hoyos junto a la playa', 'Paisaje de dunas masivo', '1h 20min desde Adare', 'Alojamiento resort 5 estrellas'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200',
    coordinates: { lat: 52.7356, lng: -9.5289 },
  },
  {
    id: 'limerick-golf-club',
    name: 'Limerick Golf Club',
    slug: 'limerick-golf-club',
    location: 'Ballyclough',
    county: 'Limerick',
    distanceFromAdare: '20min drive',
    distanceKm: 15,
    type: 'parkland',
    greenFee: '€40-€80',
    designer: 'Des Smyth',
    description: {
      en: 'Limerick Golf Club offers a quality parkland round just 20 minutes from Adare. This friendly members club welcomes visitors and provides excellent value compared to championship courses. Perfect for a warm-up round or a more relaxed day on the links.',
      es: 'Limerick Golf Club ofrece una ronda parkland de calidad a solo 20 minutos de Adare. Este amigable club de socios da la bienvenida a visitantes y ofrece excelente valor en comparación con campos de campeonato. Perfecto para una ronda de calentamiento o un día más relajado.',
    },
    highlights: {
      en: ['20min from Adare Manor', 'Great value (€40-€80)', 'Friendly members club', 'Parkland layout', 'Warm-up round option'],
      es: ['20min desde Adare Manor', 'Gran valor (€40-€80)', 'Club de socios amigable', 'Diseño parkland', 'Opción de ronda de calentamiento'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200',
    coordinates: { lat: 52.6503, lng: -8.6119 },
  },
  {
    id: 'ballyneety',
    name: 'Ballyneety Golf Club',
    slug: 'ballyneety-golf-club',
    location: 'Ballyneety',
    county: 'Limerick',
    distanceFromAdare: '30min drive',
    distanceKm: 22,
    type: 'parkland',
    greenFee: '€30-€60',
    designer: 'Arthur Spring',
    description: {
      en: 'Ballyneety is a scenic parkland course set in rolling Limerick countryside. The layout features mature trees, water hazards, and well-maintained greens. A great mid-range option for groups looking to play multiple rounds without breaking the bank.',
      es: 'Ballyneety es un pintoresco campo parkland situado en las colinas de Limerick. El diseño presenta árboles maduros, obstáculos de agua y greens bien mantenidos. Una gran opción de gama media para grupos que buscan jugar múltiples rondas sin arruinarse.',
    },
    highlights: {
      en: ['30min from Adare', 'Affordable (€30-€60)', 'Rolling parkland', 'Great for groups', 'Multiple-round option'],
      es: ['30min desde Adare', 'Asequible (€30-€60)', 'Parkland ondulado', 'Ideal para grupos', 'Opción de múltiples rondas'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200',
    coordinates: { lat: 52.6119, lng: -8.4789 },
  },
];
