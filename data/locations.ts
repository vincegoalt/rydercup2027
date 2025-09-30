export interface Location {
  id: string;
  name: string;
  slug: string;
  county: string;
  distanceFromAdare: string;
  nearestAirport: string;
  airportDistance: string;
  description: {
    en: string;
    es: string;
  };
  attractions: {
    en: string[];
    es: string[];
  };
  coordinates: { lat: number; lng: number };
}

export const locations: Location[] = [
  {
    id: 'adare',
    name: 'Adare',
    slug: 'adare',
    county: 'Limerick',
    distanceFromAdare: '0 min',
    nearestAirport: 'Shannon (SNN)',
    airportDistance: '25-30 min',
    description: {
      en: 'Adare is one of Ireland\'s prettiest villages, with thatched-roof cottages, medieval ruins, and Adare Manor - host of the 2027 Ryder Cup. The village sits in County Limerick, 25-30 minutes from Shannon Airport and 2h 30min from Dublin.',
      es: 'Adare es uno de los pueblos más bonitos de Irlanda, con cabañas de techo de paja, ruinas medievales y Adare Manor, sede de la Ryder Cup 2027. El pueblo está en el condado de Limerick, a 25-30 minutos del aeropuerto de Shannon y 2h 30min de Dublín.',
    },
    attractions: {
      en: ['Adare Manor (2027 Ryder Cup venue)', 'Thatched-roof village cottages', 'Desmond Castle ruins', 'Traditional Irish pubs', 'Holy Trinity Abbey'],
      es: ['Adare Manor (sede Ryder Cup 2027)', 'Cabañas de techo de paja', 'Ruinas del castillo Desmond', 'Pubs irlandeses tradicionales', 'Abadía Holy Trinity'],
    },
    coordinates: { lat: 52.5644, lng: -8.7889 },
  },
  {
    id: 'limerick-city',
    name: 'Limerick City',
    slug: 'limerick-city',
    county: 'Limerick',
    distanceFromAdare: '20 min',
    nearestAirport: 'Shannon (SNN)',
    airportDistance: '20 min',
    description: {
      en: 'Limerick City is the third-largest city in Ireland, 20 minutes from Adare Manor. It offers overflow accommodation, lively pubs, restaurants, and historic sites like King John\'s Castle and the Hunt Museum. A good base if Adare Village is fully booked.',
      es: 'Limerick City es la tercera ciudad más grande de Irlanda, a 20 minutos de Adare Manor. Ofrece alojamiento alternativo, pubs animados, restaurantes y sitios históricos como el castillo de King John y el museo Hunt. Una buena base si el pueblo de Adare está completo.',
    },
    attractions: {
      en: ['King John\'s Castle', 'The Hunt Museum', 'Treaty Stone', 'St Mary\'s Cathedral', 'Milk Market'],
      es: ['Castillo de King John', 'Museo Hunt', 'Piedra del Tratado', 'Catedral de St Mary', 'Mercado de leche'],
    },
    coordinates: { lat: 52.6647, lng: -8.6231 },
  },
  {
    id: 'shannon',
    name: 'Shannon',
    slug: 'shannon',
    county: 'Clare',
    distanceFromAdare: '25-30 min',
    nearestAirport: 'Shannon (SNN)',
    airportDistance: '0 min (airport town)',
    description: {
      en: 'Shannon is the gateway to Adare and the west of Ireland, home to Shannon Airport (SNN). Most international visitors to the 2027 Ryder Cup will fly into Shannon, making it the most convenient arrival point for Adare Manor.',
      es: 'Shannon es la puerta de entrada a Adare y el oeste de Irlanda, hogar del aeropuerto de Shannon (SNN). La mayoría de los visitantes internacionales a la Ryder Cup 2027 volarán a Shannon, lo que lo convierte en el punto de llegada más conveniente para Adare Manor.',
    },
    attractions: {
      en: ['Shannon Airport (SNN)', 'Bunratty Castle & Folk Park', 'Close to Cliffs of Moher', 'Gateway to Wild Atlantic Way', 'Car rental hub'],
      es: ['Aeropuerto de Shannon (SNN)', 'Castillo y parque folclórico Bunratty', 'Cerca de los acantilados de Moher', 'Puerta a la Wild Atlantic Way', 'Centro de alquiler de coches'],
    },
    coordinates: { lat: 52.7019, lng: -8.9247 },
  },
  {
    id: 'ballybunion',
    name: 'Ballybunion',
    slug: 'ballybunion',
    county: 'Kerry',
    distanceFromAdare: '1h 15min',
    nearestAirport: 'Shannon (SNN)',
    airportDistance: '1h 30min',
    description: {
      en: 'Ballybunion is a seaside town in County Kerry, home to one of the world\'s top-10 links courses. It\'s 1h 15min from Adare, making it a perfect day trip or overnight addition to a Ryder Cup golf itinerary.',
      es: 'Ballybunion es un pueblo costero en el condado de Kerry, hogar de uno de los 10 mejores campos links del mundo. Está a 1h 15min de Adare, lo que lo convierte en una excursión perfecta de un día o una adición de una noche a un itinerario de golf de la Ryder Cup.',
    },
    attractions: {
      en: ['Ballybunion Old Course (world top-10 links)', 'Atlantic beach & cliffs', 'Traditional seaside town', 'Seafood restaurants', 'Castle Green Caves'],
      es: ['Old Course de Ballybunion (top-10 mundial)', 'Playa atlántica y acantilados', 'Pueblo costero tradicional', 'Restaurantes de mariscos', 'Cuevas Castle Green'],
    },
    coordinates: { lat: 52.5086, lng: -9.6689 },
  },
  {
    id: 'lahinch',
    name: 'Lahinch',
    slug: 'lahinch',
    county: 'Clare',
    distanceFromAdare: '1h 10min',
    nearestAirport: 'Shannon (SNN)',
    airportDistance: '50 min',
    description: {
      en: 'Lahinch is Ireland\'s "St Andrews" - a surf and golf town on the west coast of County Clare. Lahinch Golf Club is a MacKenzie classic, and the town is 20 minutes from the Cliffs of Moher. 1h 10min from Adare Manor.',
      es: 'Lahinch es el "St Andrews" de Irlanda, un pueblo de surf y golf en la costa oeste del condado de Clare. Lahinch Golf Club es un clásico de MacKenzie, y el pueblo está a 20 minutos de los acantilados de Moher. 1h 10min desde Adare Manor.',
    },
    attractions: {
      en: ['Lahinch Golf Club (MacKenzie design)', 'Surfing & beach', 'Cliffs of Moher (20min)', 'Lively town center', 'Live music pubs'],
      es: ['Lahinch Golf Club (diseño MacKenzie)', 'Surf y playa', 'Acantilados de Moher (20min)', 'Centro animado', 'Pubs de música en vivo'],
    },
    coordinates: { lat: 52.9347, lng: -9.3481 },
  },
  {
    id: 'tralee',
    name: 'Tralee',
    slug: 'tralee',
    county: 'Kerry',
    distanceFromAdare: '1h 25min',
    nearestAirport: 'Shannon (SNN)',
    airportDistance: '1h 40min',
    description: {
      en: 'Tralee is the largest town in County Kerry and home to Tralee Golf Club, Arnold Palmer\'s favorite piece of links land. It\'s 1h 25min from Adare and a gateway to the Dingle Peninsula and Ring of Kerry.',
      es: 'Tralee es el pueblo más grande del condado de Kerry y hogar de Tralee Golf Club, el terreno links favorito de Arnold Palmer. Está a 1h 25min de Adare y es una puerta de entrada a la península de Dingle y el Anillo de Kerry.',
    },
    attractions: {
      en: ['Tralee Golf Club (Arnold Palmer design)', 'Gateway to Dingle Peninsula', 'Kerry County Museum', 'Traditional music scene', 'Blennerville Windmill'],
      es: ['Tralee Golf Club (diseño Arnold Palmer)', 'Puerta a la península de Dingle', 'Museo del condado de Kerry', 'Escena de música tradicional', 'Molino de viento Blennerville'],
    },
    coordinates: { lat: 52.2708, lng: -9.6969 },
  },
  {
    id: 'doonbeg',
    name: 'Doonbeg',
    slug: 'doonbeg',
    county: 'Clare',
    distanceFromAdare: '1h 20min',
    nearestAirport: 'Shannon (SNN)',
    airportDistance: '1h',
    description: {
      en: 'Doonbeg is a tiny village on the Clare coast, home to Trump International Doonbeg links resort. It\'s 1h 20min from Adare, along the Wild Atlantic Way with dramatic coastal scenery.',
      es: 'Doonbeg es un pequeño pueblo en la costa de Clare, hogar del resort links Trump International Doonbeg. Está a 1h 20min de Adare, a lo largo de la Wild Atlantic Way con espectaculares paisajes costeros.',
    },
    attractions: {
      en: ['Trump International Doonbeg (Greg Norman links)', 'Wild Atlantic Way coastal route', 'Doughmore Beach', 'Loop Head Peninsula', 'Quiet village atmosphere'],
      es: ['Trump International Doonbeg (links Greg Norman)', 'Ruta costera Wild Atlantic Way', 'Playa Doughmore', 'Península de Loop Head', 'Ambiente de pueblo tranquilo'],
    },
    coordinates: { lat: 52.7356, lng: -9.5289 },
  },
  {
    id: 'killarney',
    name: 'Killarney',
    slug: 'killarney',
    county: 'Kerry',
    distanceFromAdare: '1h',
    nearestAirport: 'Shannon (SNN)',
    airportDistance: '1h 30min',
    description: {
      en: 'Killarney is a bustling tourist town in County Kerry, gateway to Killarney National Park, the Ring of Kerry, and golf courses like Ballybunion and Waterville. It\'s 1 hour from Adare, making it a good base for combining Ryder Cup attendance with a southwest Ireland tour.',
      es: 'Killarney es un animado pueblo turístico en el condado de Kerry, puerta de entrada al Parque Nacional de Killarney, el Anillo de Kerry y campos de golf como Ballybunion y Waterville. Está a 1 hora de Adare, lo que lo convierte en una buena base para combinar la asistencia a la Ryder Cup con un tour por el suroeste de Irlanda.',
    },
    attractions: {
      en: ['Killarney National Park', 'Ross Castle', 'Ring of Kerry', 'Muckross House & Gardens', 'Gap of Dunloe'],
      es: ['Parque Nacional de Killarney', 'Castillo de Ross', 'Anillo de Kerry', 'Casa y jardines Muckross', 'Desfiladero de Dunloe'],
    },
    coordinates: { lat: 52.0589, lng: -9.5044 },
  },
];
