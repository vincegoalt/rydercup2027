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
  {
    id: 'waterville',
    name: 'Waterville Golf Links',
    slug: 'waterville-golf-links',
    location: 'Waterville',
    county: 'Kerry',
    distanceFromAdare: '2h drive',
    distanceKm: 140,
    type: 'links',
    greenFee: '€140-€280',
    designer: 'Eddie Hackett / Tom Fazio',
    description: {
      en: 'Waterville Golf Links is a championship links on the Ring of Kerry, dramatically situated between mountains and the Atlantic Ocean. Tiger Woods used to play an annual charity event here, and the course is known for stunning scenery and challenging coastal holes.',
      es: 'Waterville Golf Links es un links de campeonato en el Anillo de Kerry, ubicado dramáticamente entre montañas y el Océano Atlántico. Tiger Woods solía jugar un evento benéfico anual aquí, y el campo es conocido por su impresionante paisaje y desafiantes hoyos costeros.',
    },
    highlights: {
      en: ['Ring of Kerry location', 'Tiger Woods connection', 'Mountain & ocean views', '2h from Adare', 'Championship links'],
      es: ['Ubicación Anillo de Kerry', 'Conexión Tiger Woods', 'Vistas montañas y océano', '2h desde Adare', 'Links de campeonato'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200',
    coordinates: { lat: 51.8328, lng: -10.1722 },
  },
  {
    id: 'old-head',
    name: 'Old Head Golf Links',
    slug: 'old-head-golf-links',
    location: 'Kinsale',
    county: 'Cork',
    distanceFromAdare: '1h 30min drive',
    distanceKm: 100,
    type: 'links',
    greenFee: '€360-€490',
    designer: 'Eddie Hackett / Ron Kirby / Liam Higgins',
    description: {
      en: 'Old Head Golf Links sits on a dramatic 220-acre promontory jutting into the Atlantic, 300 feet above the ocean. Nine holes run along cliff edges with sheer drops. One of the world\'s most spectacular and expensive golf experiences, but worth every euro.',
      es: 'Old Head Golf Links se encuentra en un espectacular promontorio de 220 acres que se adentra en el Atlántico, a 300 pies sobre el océano. Nueve hoyos discurren por bordes de acantilados con caídas verticales. Una de las experiencias de golf más espectaculares y caras del mundo, pero vale cada euro.',
    },
    highlights: {
      en: ['Cliffside peninsula layout', '9 holes on cliff edges', 'Dramatic ocean views', '1h 30min from Adare', 'Premium pricing (€360-€490)'],
      es: ['Diseño península acantilado', '9 hoyos en bordes acantilado', 'Vistas dramáticas océano', '1h 30min desde Adare', 'Precio premium (€360-€490)'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200',
    coordinates: { lat: 51.5989, lng: -8.5306 },
  },
  {
    id: 'portmarnock',
    name: 'Portmarnock Golf Club',
    slug: 'portmarnock-golf-club',
    location: 'Portmarnock',
    county: 'Dublin',
    distanceFromAdare: '2h 30min drive',
    distanceKm: 210,
    type: 'links',
    greenFee: '€160-€300',
    designer: 'Willie Pickeman / George Ross',
    description: {
      en: 'Portmarnock is a classic links on a peninsula north of Dublin, host to numerous Irish Opens and the 1991 Walker Cup. Consistently ranked in the world\'s top 50, this traditional links offers fast-running fairways and tricky pot bunkers.',
      es: 'Portmarnock es un links clásico en una península al norte de Dublín, anfitrión de numerosos Irish Opens y la Walker Cup de 1991. Clasificado consistentemente en el top 50 mundial, este links tradicional ofrece calles de juego rápido y tramposos bunkers.',
    },
    highlights: {
      en: ['World top-50 links', 'Hosted Irish Opens', 'Classic links architecture', '2h 30min from Adare', 'Near Dublin Airport'],
      es: ['Links top-50 mundial', 'Anfitrión Irish Opens', 'Arquitectura links clásica', '2h 30min desde Adare', 'Cerca aeropuerto Dublín'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200',
    coordinates: { lat: 53.4206, lng: -6.1472 },
  },
  {
    id: 'european-club',
    name: 'The European Club',
    slug: 'the-european-club',
    location: 'Brittas Bay',
    county: 'Wicklow',
    distanceFromAdare: '2h 45min drive',
    distanceKm: 230,
    type: 'links',
    greenFee: '€180-€280',
    designer: 'Pat Ruddy',
    description: {
      en: 'The European Club is a modern links masterpiece designed by Pat Ruddy, located on the Wicklow coast south of Dublin. Known for natural dune-scape, numerous beach carries, and owner Ruddy\'s passionate hosting. A bucket-list links for purists.',
      es: 'The European Club es una obra maestra links moderna diseñada por Pat Ruddy, ubicada en la costa de Wicklow al sur de Dublín. Conocido por su paisaje de dunas natural, numerosos acarreos de playa y la apasionada hospitalidad del propietario Ruddy. Un links de lista de deseos para puristas.',
    },
    highlights: {
      en: ['Pat Ruddy design', 'Natural duneland', 'Beach carries', '2h 45min from Adare', 'Near Dublin'],
      es: ['Diseño Pat Ruddy', 'Dunas naturales', 'Acarreos de playa', '2h 45min desde Adare', 'Cerca de Dublín'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200',
    coordinates: { lat: 52.8708, lng: -6.0206 },
  },
  {
    id: 'dromoland-castle',
    name: 'Dromoland Castle Golf Club',
    slug: 'dromoland-castle-golf',
    location: 'Newmarket-on-Fergus',
    county: 'Clare',
    distanceFromAdare: '35min drive',
    distanceKm: 28,
    type: 'parkland',
    greenFee: '€60-€120',
    designer: 'Ron Kirby / J.B. Carr',
    description: {
      en: 'Dromoland Castle Golf Club is a parkland course set within a 450-acre estate surrounding a 5-star castle hotel. The course winds through mature woodlands, past lakes, and offers views of the 16th-century castle. Great option if Adare Manor is fully booked.',
      es: 'Dromoland Castle Golf Club es un campo parkland ubicado en una finca de 450 acres que rodea un hotel castillo 5 estrellas. El campo serpentea por bosques maduros, pasa por lagos y ofrece vistas del castillo del siglo XVI. Gran opción si Adare Manor está completo.',
    },
    highlights: {
      en: ['5-star castle hotel', '35min from Adare', 'Parkland estate course', 'Near Shannon Airport', 'Luxury accommodation on-site'],
      es: ['Hotel castillo 5 estrellas', '35min desde Adare', 'Campo finca parkland', 'Cerca aeropuerto Shannon', 'Alojamiento lujo en el sitio'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200',
    coordinates: { lat: 52.7697, lng: -8.9039 },
  },
  {
    id: 'killarney-killeen',
    name: 'Killarney Golf & Fishing Club (Killeen)',
    slug: 'killarney-killeen-course',
    location: 'Killarney',
    county: 'Kerry',
    distanceFromAdare: '1h drive',
    distanceKm: 70,
    type: 'parkland',
    greenFee: '€80-€160',
    designer: 'Eddie Hackett / Sir Guy Campbell',
    description: {
      en: 'Killarney\'s Killeen Course is a parkland gem in Killarney National Park, with views of mountains and lakes. The club has three courses, with Killeen being the championship layout. Hosted Irish Opens and is known for stunning scenery and challenging holes.',
      es: 'El Killeen Course de Killarney es una joya parkland en el Parque Nacional de Killarney, con vistas a montañas y lagos. El club tiene tres campos, siendo Killeen el de campeonato. Ha albergado Irish Opens y es conocido por su impresionante paisaje y desafiantes hoyos.',
    },
    highlights: {
      en: ['Killarney National Park', 'Mountain & lake views', 'Hosted Irish Opens', '1h from Adare', 'Three courses available'],
      es: ['Parque Nacional Killarney', 'Vistas montañas y lagos', 'Anfitrión Irish Opens', '1h desde Adare', 'Tres campos disponibles'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200',
    coordinates: { lat: 52.0389, lng: -9.5528 },
  },
  {
    id: 'royal-county-down',
    name: 'Royal County Down Golf Club',
    slug: 'royal-county-down',
    location: 'Newcastle',
    county: 'Down',
    distanceFromAdare: '4h 30min drive',
    distanceKm: 380,
    type: 'links',
    greenFee: '€250-€350',
    designer: 'Old Tom Morris / Harry Colt',
    description: {
      en: 'Royal County Down is often ranked the #1 golf course in the world. Located in Northern Ireland beneath the Mourne Mountains, this championship links features dramatic bunkers, heather, and blind shots. A pilgrimage course for serious golfers. Worth the long drive from Adare.',
      es: 'Royal County Down es a menudo clasificado como el campo de golf #1 del mundo. Ubicado en Irlanda del Norte bajo las montañas Mourne, este links de campeonato presenta bunkers dramáticos, brezo y golpes ciegos. Un campo de peregrinación para golfistas serios. Vale la pena el largo viaje desde Adare.',
    },
    highlights: {
      en: ['Often ranked #1 in world', 'Beneath Mourne Mountains', 'Old Tom Morris design', '4h 30min from Adare', 'Must-play for enthusiasts'],
      es: ['A menudo #1 del mundo', 'Bajo montañas Mourne', 'Diseño Old Tom Morris', '4h 30min desde Adare', 'Imprescindible para entusiastas'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200',
    coordinates: { lat: 54.2333, lng: -5.8833 },
  },
  {
    id: 'ballybunion-cashen',
    name: 'Ballybunion Golf Club (Cashen Course)',
    slug: 'ballybunion-cashen-course',
    location: 'Ballybunion',
    county: 'Kerry',
    distanceFromAdare: '1h 15min drive',
    distanceKm: 85,
    type: 'links',
    greenFee: '€80-€160',
    designer: 'Robert Trent Jones Sr.',
    description: {
      en: 'Ballybunion\'s Cashen Course is Robert Trent Jones Sr.\'s dramatic links design, running through massive sandhills and gorges. Less famous than the Old Course but equally spectacular, with more modern design features and stunning Atlantic views.',
      es: 'El Cashen Course de Ballybunion es el dramático diseño links de Robert Trent Jones Sr., que discurre por enormes colinas de arena y desfiladeros. Menos famoso que el Old Course pero igualmente espectacular, con características de diseño más modernas e impresionantes vistas atlánticas.',
    },
    highlights: {
      en: ['Robert Trent Jones Sr. design', 'Dramatic sandhills', 'Same location as Old Course', '1h 15min from Adare', 'Good value vs Old Course'],
      es: ['Diseño Robert Trent Jones Sr.', 'Colinas arena dramáticas', 'Misma ubicación Old Course', '1h 15min desde Adare', 'Buen valor vs Old Course'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200',
    coordinates: { lat: 52.5086, lng: -9.6689 },
  },
];
