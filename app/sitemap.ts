import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { golfCourses } from '@/data/courses';
import { hotels } from '@/data/hotels';
import { locations } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://irelandgolfplanner.com';
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
    '/golf-courses-near-adare',
    '/ireland-golf-trip-itineraries',
    '/ryder-cup-future-venues',
    '/contact',
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
  });

  return routes;
}
