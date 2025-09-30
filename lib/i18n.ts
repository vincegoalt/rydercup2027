export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];
export const defaultLocale: Locale = 'en';

export interface LocaleStrings {
  en: string;
  es: string;
}

export const translations = {
  en: {
    home: 'Home',
    aboutUs: 'About Us',
    contact: 'Contact',
    golfCourses: 'Golf Courses',
    hotels: 'Hotels',
    planYourTrip: 'Plan Your Trip',
    ryderCup2027: 'Ryder Cup 2027',
    readMore: 'Read More',
    bookNow: 'Book Now',
    getDirections: 'Get Directions',
    learnMore: 'Learn More',
    viewAll: 'View All',
    exploreMore: 'Explore More',
    frequentlyAskedQuestions: 'Frequently Asked Questions',
    nearby: 'Nearby',
    distanceFrom: 'from Adare',
    greenFee: 'Green Fee',
    perNight: 'per night',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    website: 'Website',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    copyright: '© 2025 Adare Limerick Golf',
    poweredBy: 'Powered by',
    languageSelector: 'Language',
    en: 'English',
    es: 'Español',
  },
  es: {
    home: 'Inicio',
    aboutUs: 'Sobre Nosotros',
    contact: 'Contacto',
    golfCourses: 'Campos de Golf',
    hotels: 'Hoteles',
    planYourTrip: 'Planifica tu Viaje',
    ryderCup2027: 'Ryder Cup 2027',
    readMore: 'Leer Más',
    bookNow: 'Reservar Ahora',
    getDirections: 'Obtener Direcciones',
    learnMore: 'Aprender Más',
    viewAll: 'Ver Todo',
    exploreMore: 'Explorar Más',
    frequentlyAskedQuestions: 'Preguntas Frecuentes',
    nearby: 'Cerca',
    distanceFrom: 'desde Adare',
    greenFee: 'Tarifa Green',
    perNight: 'por noche',
    address: 'Dirección',
    phone: 'Teléfono',
    email: 'Correo Electrónico',
    website: 'Sitio Web',
    followUs: 'Síguenos',
    allRightsReserved: 'Todos los derechos reservados',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    copyright: '© 2025 Adare Limerick Golf',
    poweredBy: 'Desarrollado por',
    languageSelector: 'Idioma',
    en: 'English',
    es: 'Español',
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function getLocalizedValue<T>(value: { en: T; es: T }, locale: Locale): T {
  return value[locale] || value.en;
}
