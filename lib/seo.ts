import { Locale } from './i18n';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  locale: Locale;
  alternateLocales?: { locale: Locale; url: string }[];
}

export function generateMetadata(props: SEOProps) {
  const { title, description, keywords, ogImage, canonicalUrl, locale, alternateLocales } = props;

  const metadata: any = {
    title: title,
    description: description,
    keywords: keywords?.join(', '),
    openGraph: {
      title: title,
      description: description,
      images: ogImage ? [{ url: ogImage }] : [],
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ogImage ? [ogImage] : [],
    },
  };

  if (canonicalUrl) {
    metadata.alternates = {
      canonical: canonicalUrl,
    };

    if (alternateLocales && alternateLocales.length > 0) {
      metadata.alternates.languages = alternateLocales.reduce((acc, alt) => {
        acc[alt.locale] = alt.url;
        return acc;
      }, {} as Record<string, string>);
    }
  }

  return metadata;
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Adare Limerick Golf',
    description: 'Your guide to Ryder Cup 2027 at Adare Manor and golf trips in Ireland',
    url: 'https://www.adarelimerickgolf.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IE',
    },
    areaServed: ['Ireland', 'Limerick', 'County Clare', 'County Kerry'],
  };
}

export function generateEventSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'Ryder Cup 2027',
    description: 'The 2027 Ryder Cup at Adare Manor, County Limerick, Ireland',
    startDate: '2027-09-17',
    endDate: '2027-09-19',
    location: {
      '@type': 'Place',
      name: 'Adare Manor',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Adare Manor',
        addressLocality: 'Adare',
        addressRegion: 'County Limerick',
        addressCountry: 'IE',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Ryder Cup Europe',
      url: 'https://www.rydercup.com',
    },
  };
}

export function generateGolfCourseSchema(course: {
  name: string;
  description: string;
  location: string;
  county: string;
  greenFee?: string;
  courseType?: string;
  designer?: string;
  url?: string;
  latitude?: number;
  longitude?: number;
  imageUrl?: string;
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'GolfCourse',
    name: course.name,
    description: course.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: course.location,
      addressRegion: `County ${course.county}`,
      addressCountry: 'IE',
    },
    url: course.url,
  };

  if (course.greenFee) {
    schema.offers = {
      '@type': 'Offer',
      category: 'Green Fee',
      price: course.greenFee,
      priceCurrency: 'EUR',
    };
  }

  if (course.designer) {
    schema.additionalProperty = [
      {
        '@type': 'PropertyValue',
        name: 'Course Designer',
        value: course.designer,
      },
    ];

    if (course.courseType) {
      schema.additionalProperty.push({
        '@type': 'PropertyValue',
        name: 'Course Type',
        value: course.courseType,
      });
    }
  } else if (course.courseType) {
    schema.additionalProperty = [
      {
        '@type': 'PropertyValue',
        name: 'Course Type',
        value: course.courseType,
      },
    ];
  }

  if (course.latitude && course.longitude) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: course.latitude,
      longitude: course.longitude,
    };
  }

  if (course.imageUrl) {
    schema.image = course.imageUrl;
  }

  return schema;
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
