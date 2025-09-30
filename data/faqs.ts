export interface FAQ {
  id: string;
  question: {
    en: string;
    es: string;
  };
  answer: {
    en: string;
    es: string;
  };
  category: 'ryder-cup' | 'adare-manor' | 'travel' | 'golf' | 'costs';
  relatedPages: string[];
  keywords: string[];
}

export const faqs: FAQ[] = [
  {
    id: 'where-next-five-ryder-cups',
    question: {
      en: 'Where are the next five Ryder Cups?',
      es: '¿Dónde son las próximas cinco Ryder Cups?',
    },
    answer: {
      en: '2025: Bethpage Black (New York, USA); 2027: Adare Manor (Ireland); 2029: Hazeltine (Minnesota, USA); 2031: Camiral (Costa Brava, Spain); 2033: The Olympic Club (California, USA). The 2037 Ryder Cup will be at Congressional (Maryland, USA), with 2035 Europe venue TBA.',
      es: '2025: Bethpage Black (Nueva York, EE.UU.); 2027: Adare Manor (Irlanda); 2029: Hazeltine (Minnesota, EE.UU.); 2031: Camiral (Costa Brava, España); 2033: The Olympic Club (California, EE.UU.). La Ryder Cup 2037 será en Congressional (Maryland, EE.UU.), con sede europea 2035 por anunciar.',
    },
    category: 'ryder-cup',
    relatedPages: ['/ryder-cup-future-venues', '/ryder-cup-2027-adare-manor'],
    keywords: ['ryder cup venues', 'future ryder cups', 'bethpage 2025', 'adare 2027'],
  },
  {
    id: 'when-where-ryder-cup-2025',
    question: {
      en: 'When and where is the Ryder Cup 2025?',
      es: '¿Cuándo y dónde es la Ryder Cup 2025?',
    },
    answer: {
      en: 'The 2025 Ryder Cup will be held at Bethpage Black in New York, USA. After that, the Ryder Cup returns to Europe in 2027 at Adare Manor, Ireland (September 17-19, 2027).',
      es: 'La Ryder Cup 2025 se llevará a cabo en Bethpage Black en Nueva York, EE.UU. Después de eso, la Ryder Cup regresa a Europa en 2027 en Adare Manor, Irlanda (17-19 de septiembre de 2027).',
    },
    category: 'ryder-cup',
    relatedPages: ['/ryder-cup-future-venues', '/ryder-cup-2027-adare-manor'],
    keywords: ['ryder cup 2025', 'bethpage black', 'when is ryder cup'],
  },
  {
    id: 'where-ryder-cup-2031',
    question: {
      en: 'Where will the Ryder Cup be in 2031?',
      es: '¿Dónde será la Ryder Cup en 2031?',
    },
    answer: {
      en: 'The 2031 Ryder Cup will be held at Camiral in Costa Brava, Spain. This will be Spain\'s third time hosting the Ryder Cup, after Valderrama (1997) and Club de Campo Villa de Madrid (2022).',
      es: 'La Ryder Cup 2031 se llevará a cabo en Camiral en la Costa Brava, España. Esta será la tercera vez que España alberga la Ryder Cup, después de Valderrama (1997) y Club de Campo Villa de Madrid (2022).',
    },
    category: 'ryder-cup',
    relatedPages: ['/ryder-cup-future-venues'],
    keywords: ['ryder cup 2031', 'camiral spain', 'costa brava'],
  },
  {
    id: 'how-much-adare-manor-round',
    question: {
      en: 'How much is a round at Adare Manor?',
      es: '¿Cuánto cuesta una ronda en Adare Manor?',
    },
    answer: {
      en: 'As of 2026, the resort-guest rate at Adare Manor is €550 per person. Additional costs: caddie €120, cart €70, club hire €75, electric trolley €25. Note: public access will be limited in 2027 due to Ryder Cup preparations. Always check current availability with the resort.',
      es: 'A partir de 2026, la tarifa para huéspedes del resort en Adare Manor es de €550 por persona. Costos adicionales: caddie €120, carrito €70, alquiler de palos €75, trolley eléctrico €25. Nota: el acceso público será limitado en 2027 debido a los preparativos de la Ryder Cup. Siempre verifique la disponibilidad actual con el resort.',
    },
    category: 'costs',
    relatedPages: ['/adare-manor-golf-course', '/adare-manor-green-fees-and-caddies'],
    keywords: ['adare manor green fee', 'how much adare manor', 'cost play adare'],
  },
  {
    id: 'closest-airport-adare-manor',
    question: {
      en: 'Which airport is closest to Adare Manor?',
      es: '¿Qué aeropuerto está más cerca de Adare Manor?',
    },
    answer: {
      en: 'Shannon Airport (SNN) is the closest, approximately 25-30 minutes drive from Adare Manor. Dublin Airport (DUB) is the larger hub but requires a 2h 30min drive. Most international visitors fly into Shannon for easier access to Adare and southwest Ireland golf courses.',
      es: 'El aeropuerto de Shannon (SNN) es el más cercano, aproximadamente a 25-30 minutos en coche de Adare Manor. El aeropuerto de Dublín (DUB) es el centro más grande pero requiere 2h 30min en coche. La mayoría de los visitantes internacionales vuelan a Shannon para un acceso más fácil a Adare y los campos de golf del suroeste de Irlanda.',
    },
    category: 'travel',
    relatedPages: ['/getting-to-adare-manor', '/shannon-airport-to-adare'],
    keywords: ['shannon airport adare', 'closest airport adare manor', 'how to get to adare'],
  },
  {
    id: 'ryder-cup-tickets-how-work',
    question: {
      en: 'How do Ryder Cup tickets work and when do they go on sale?',
      es: '¿Cómo funcionan las entradas de la Ryder Cup y cuándo salen a la venta?',
    },
    answer: {
      en: 'Ryder Cup tickets are sold exclusively through RyderCup.com. Practice round tickets (Sept 13-16, 2027) and competition round tickets (Sept 17-19, 2027) typically go on sale 12-18 months before the event. Hospitality packages are also available. Adare Manor does not sell tickets directly.',
      es: 'Las entradas de la Ryder Cup se venden exclusivamente a través de RyderCup.com. Las entradas para rondas de práctica (13-16 sept 2027) y rondas de competición (17-19 sept 2027) suelen salir a la venta 12-18 meses antes del evento. También hay paquetes de hospitalidad disponibles. Adare Manor no vende entradas directamente.',
    },
    category: 'ryder-cup',
    relatedPages: ['/ryder-cup-2027-tickets-hospitality', '/ryder-cup-2027-adare-manor'],
    keywords: ['ryder cup tickets', 'buy ryder cup tickets', 'when tickets on sale'],
  },
  {
    id: 'best-hotels-near-adare-manor',
    question: {
      en: 'What are the best hotels near Adare Manor?',
      es: '¿Cuáles son los mejores hoteles cerca de Adare Manor?',
    },
    answer: {
      en: 'Top options in Adare Village: Adare Manor (on-site 5-star), Dunraven Arms Hotel (0.4 mi), Fitzgerald\'s Woodlands House Hotel (0.5 mi), and Berkeley Lodge (0.3 mi). If Adare is fully booked, consider Dromoland Castle (35min), Castletroy Park Hotel in Limerick (20min), or Killarney Plaza Hotel (1h).',
      es: 'Mejores opciones en el pueblo de Adare: Adare Manor (5 estrellas en el sitio), Dunraven Arms Hotel (0.4 mi), Fitzgerald\'s Woodlands House Hotel (0.5 mi) y Berkeley Lodge (0.3 mi). Si Adare está completo, considere Dromoland Castle (35min), Castletroy Park Hotel en Limerick (20min) o Killarney Plaza Hotel (1h).',
    },
    category: 'travel',
    relatedPages: ['/hotels-near-adare-manor', '/adare-hotels-boutique-and-resorts'],
    keywords: ['hotels near adare manor', 'where to stay adare', 'accommodation ryder cup'],
  },
  {
    id: 'how-far-adare-from-dublin',
    question: {
      en: 'How far is Adare from Dublin?',
      es: '¿Qué tan lejos está Adare de Dublín?',
    },
    answer: {
      en: 'Adare Manor is approximately 2h 30min drive from Dublin Airport (DUB), covering about 200km. Most visitors fly into Shannon Airport (SNN) instead, which is only 25-30 minutes from Adare. If you do fly into Dublin, car rental is recommended for flexibility.',
      es: 'Adare Manor está a aproximadamente 2h 30min en coche desde el aeropuerto de Dublín (DUB), cubriendo unos 200km. La mayoría de los visitantes vuelan al aeropuerto de Shannon (SNN), que está a solo 25-30 minutos de Adare. Si vuela a Dublín, se recomienda el alquiler de coche para mayor flexibilidad.',
    },
    category: 'travel',
    relatedPages: ['/getting-to-adare-manor'],
    keywords: ['dublin to adare', 'how far dublin adare', 'drive time dublin adare'],
  },
  {
    id: 'best-golf-courses-near-adare',
    question: {
      en: 'What are the best golf courses near Adare?',
      es: '¿Cuáles son los mejores campos de golf cerca de Adare?',
    },
    answer: {
      en: 'Local options: Limerick Golf Club (20min) and Ballyneety (30min). Top links courses within 1-2 hours: Ballybunion Old Course (1h 15min, world top-10), Lahinch Golf Club (1h 10min, MacKenzie design), Tralee Golf Club (1h 25min, Arnold Palmer), and Trump International Doonbeg (1h 20min).',
      es: 'Opciones locales: Limerick Golf Club (20min) y Ballyneety (30min). Mejores campos links en 1-2 horas: Ballybunion Old Course (1h 15min, top-10 mundial), Lahinch Golf Club (1h 10min, diseño MacKenzie), Tralee Golf Club (1h 25min, Arnold Palmer) y Trump International Doonbeg (1h 20min).',
    },
    category: 'golf',
    relatedPages: ['/golf/courses-near/adare', '/southwest-ireland-golf-links'],
    keywords: ['golf courses near adare', 'ballybunion', 'lahinch', 'ireland golf'],
  },
  {
    id: 'best-time-play-golf-ireland',
    question: {
      en: 'When is the best time to play golf in Ireland?',
      es: '¿Cuándo es el mejor momento para jugar golf en Irlanda?',
    },
    answer: {
      en: 'May to September offers the best weather and longest daylight (up to 10pm tee times). September (Ryder Cup dates) is peak season with mild temps and fewer crowds than July-August. Spring (April-May) and early fall (Sept-Oct) provide great value and playable conditions, though expect some rain and wind on links courses.',
      es: 'De mayo a septiembre ofrece el mejor clima y más luz diurna (horarios de salida hasta las 10pm). Septiembre (fechas de la Ryder Cup) es temporada alta con temperaturas suaves y menos multitudes que julio-agosto. Primavera (abril-mayo) y principios de otoño (sept-oct) ofrecen gran valor y condiciones jugables, aunque espere algo de lluvia y viento en campos links.',
    },
    category: 'golf',
    relatedPages: ['/ireland-golf-trip-itineraries'],
    keywords: ['best time golf ireland', 'when play ireland', 'ireland golf weather'],
  },
  {
    id: 'do-i-need-caddie-adare-manor',
    question: {
      en: 'Do I have to hire a caddie at Adare Manor?',
      es: '¿Tengo que contratar un caddie en Adare Manor?',
    },
    answer: {
      en: 'Caddies are not mandatory at Adare Manor, but they are highly recommended for the full championship experience. The caddie fee is €120. Alternatively, you can rent a cart (€70), club hire (€75), or electric trolley (€25). Caddie availability should be booked in advance.',
      es: 'Los caddies no son obligatorios en Adare Manor, pero son muy recomendables para la experiencia de campeonato completa. La tarifa de caddie es de €120. Alternativamente, puede alquilar un carrito (€70), alquiler de palos (€75) o trolley eléctrico (€25). La disponibilidad de caddie debe reservarse con anticipación.',
    },
    category: 'costs',
    relatedPages: ['/adare-manor-green-fees-and-caddies', '/adare-manor-golf-course'],
    keywords: ['adare manor caddie', 'do i need caddie', 'caddie fee adare'],
  },
  {
    id: 'can-non-residents-play-adare-manor',
    question: {
      en: 'Is Adare Manor open to non-residents?',
      es: '¿Está Adare Manor abierto a no residentes?',
    },
    answer: {
      en: 'Adare Manor prioritizes tee times for resort guests. Non-resident access is limited and subject to availability, especially in 2026-2027 leading up to the Ryder Cup. The course will be closed to the public during tournament preparations. Always contact the resort directly to inquire about non-resident tee times.',
      es: 'Adare Manor prioriza los horarios de salida para los huéspedes del resort. El acceso de no residentes es limitado y está sujeto a disponibilidad, especialmente en 2026-2027 antes de la Ryder Cup. El campo estará cerrado al público durante los preparativos del torneo. Siempre contacte directamente al resort para consultar sobre horarios de no residentes.',
    },
    category: 'adare-manor',
    relatedPages: ['/adare-manor-golf-course'],
    keywords: ['adare manor non-resident', 'can i play adare manor', 'adare manor access'],
  },
  {
    id: 'book-ryder-cup-rooms-adare-manor',
    question: {
      en: 'Can I book tickets or rooms for Ryder Cup week through Adare Manor?',
      es: '¿Puedo reservar entradas o habitaciones para la semana de la Ryder Cup a través de Adare Manor?',
    },
    answer: {
      en: 'Tickets for the 2027 Ryder Cup are sold exclusively through RyderCup.com, not by Adare Manor. Rooms at Adare Manor during Ryder Cup week are extremely limited and typically allocated to teams, officials, and official hospitality packages. For accommodation, check hotels in Adare Village, Limerick City, and surrounding areas.',
      es: 'Las entradas para la Ryder Cup 2027 se venden exclusivamente a través de RyderCup.com, no por Adare Manor. Las habitaciones en Adare Manor durante la semana de la Ryder Cup son extremadamente limitadas y generalmente se asignan a equipos, oficiales y paquetes de hospitalidad oficiales. Para alojamiento, consulte hoteles en el pueblo de Adare, Limerick City y áreas circundantes.',
    },
    category: 'ryder-cup',
    relatedPages: ['/ryder-cup-2027-tickets-hospitality', '/hotels-near-adare-manor'],
    keywords: ['ryder cup accommodation', 'adare manor rooms ryder cup', 'where stay ryder cup'],
  },
];
