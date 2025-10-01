import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { golfCourses } from '@/data/courses';
import { hotels } from '@/data/hotels';
import { locations } from '@/data/locations';
import { faqs } from '@/data/faqs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.adarelimerickgolf.com';
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  const staticPages = [
    '',
    '/ryder-cup-2027-adare-manor',
    '/ryder-cup-2027-tickets-hospitality',
    '/adare-manor-golf-course',
    '/hotels-near-adare-manor',
    '/getting-to-adare-manor',
    '/ireland-golf-trip-itineraries',
    '/ryder-cup-future-venues',
    '/contact',
    '/faqs',
    '/guides',
    '/guide/best-time-visit-ireland-golf',
    '/guide/ireland-golf-trip-cost-budget',
    '/guide/ballybunion-vs-lahinch-comparison',
    '/guide/ireland-golf-courses-comparison',
    '/guide/things-to-do-near-adare-manor',
    '/guide/where-to-eat-adare-limerick',
  ];

  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      routes.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: page === '' ? 1.0 : 0.8,
      });
    });

    // Golf course pages
    golfCourses.forEach((course) => {
      routes.push({
        url: `${baseUrl}/${locale}/golf-courses/${course.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });

    // Hotel pages (if we create them)
    hotels.forEach((hotel) => {
      routes.push({
        url: `${baseUrl}/${locale}/hotels/${hotel.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });

    // Location hub pages
    locations.forEach((location) => {
      routes.push({
        url: `${baseUrl}/${locale}/${location.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });

    // Service × Location pages
    locations.forEach((location) => {
      // Golf courses near location
      routes.push({
        url: `${baseUrl}/${locale}/golf/courses-near/${location.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      });

      // Hotels near location
      routes.push({
        url: `${baseUrl}/${locale}/hotels-near-${location.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      });

      // Getting to location
      routes.push({
        url: `${baseUrl}/${locale}/getting-to-${location.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });

    // FAQ individual pages
    faqs.forEach((faq) => {
      routes.push({
        url: `${baseUrl}/${locale}/faq/${faq.id}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return routes;
}
