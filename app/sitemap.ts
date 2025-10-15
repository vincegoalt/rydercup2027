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

  // Priority structure based on SEO best practices:
  // 1.0 = Homepage
  // 0.9 = Primary conversion pages (main Ryder Cup guide, top courses)
  // 0.8 = Important service pages (hotels, guides directory, itineraries)
  // 0.7 = Individual course pages, location pages
  // 0.6 = Supporting pages (FAQs, getting to locations)
  // 0.5 = Tertiary pages (future venues, contact)

  locales.forEach((locale) => {
    // Homepage - Priority 1.0, changes weekly as featured content updates
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    });

    // PRIMARY PAGES - Priority 0.9 (Main event & top courses)
    // Changes weekly during event season, monthly otherwise
    const primaryPages = [
      { path: '/ryder-cup-2027-adare-manor', freq: 'weekly' as const },
      { path: '/adare-manor-golf-course', freq: 'monthly' as const },
    ];

    primaryPages.forEach(({ path, freq }) => {
      routes.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency: freq,
        priority: 0.9,
      });
    });

    // HIGH PRIORITY PAGES - Priority 0.8 (Key service pages)
    const highPriorityPages = [
      { path: '/hotels-near-adare-manor', freq: 'weekly' as const },
      { path: '/ireland-golf-trip-itineraries', freq: 'monthly' as const },
      { path: '/guides', freq: 'monthly' as const },
      { path: '/guide/best-time-visit-ireland-golf', freq: 'monthly' as const },
      { path: '/guide/ireland-golf-trip-cost-budget', freq: 'monthly' as const },
      { path: '/guide/ballybunion-vs-lahinch-comparison', freq: 'monthly' as const },
      { path: '/guide/ireland-golf-courses-comparison', freq: 'monthly' as const },
    ];

    highPriorityPages.forEach(({ path, freq }) => {
      routes.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency: freq,
        priority: 0.8,
      });
    });

    // MEDIUM PRIORITY PAGES - Priority 0.7 (Individual listings)
    const mediumPriorityPages = [
      { path: '/ryder-cup-2027-tickets-hospitality', freq: 'weekly' as const },
      { path: '/getting-to-adare-manor', freq: 'yearly' as const },
      { path: '/guide/things-to-do-near-adare-manor', freq: 'monthly' as const },
      { path: '/guide/where-to-eat-adare-limerick', freq: 'monthly' as const },
    ];

    mediumPriorityPages.forEach(({ path, freq }) => {
      routes.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency: freq,
        priority: 0.7,
      });
    });

    // Golf course detail pages - Priority 0.7 (rarely change)
    golfCourses.forEach((course) => {
      // Featured courses get higher priority
      const isFeatured = ['adare-manor', 'ballybunion-old-course', 'lahinch-golf-club'].includes(course.slug);
      routes.push({
        url: `${baseUrl}/${locale}/golf-courses/${course.slug}`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: isFeatured ? 0.8 : 0.7,
      });
    });

    // Hotel pages - Priority 0.7
    hotels.forEach((hotel) => {
      routes.push({
        url: `${baseUrl}/${locale}/hotels/${hotel.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });

    // Location hub pages - Priority 0.7
    locations.forEach((location) => {
      const isPrimary = location.slug === 'adare';
      routes.push({
        url: `${baseUrl}/${locale}/${location.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: isPrimary ? 0.8 : 0.7,
      });

      // Golf courses near location - Priority 0.7
      routes.push({
        url: `${baseUrl}/${locale}/golf/courses-near/${location.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: isPrimary ? 0.8 : 0.7,
      });

      // Hotels near location - Priority 0.7
      routes.push({
        url: `${baseUrl}/${locale}/hotels-near-${location.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: isPrimary ? 0.8 : 0.7,
      });

      // Getting to location - Priority 0.6 (static travel info)
      routes.push({
        url: `${baseUrl}/${locale}/getting-to-${location.slug}`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.6,
      });
    });

    // LOWER PRIORITY PAGES - Priority 0.6 (FAQs)
    routes.push({
      url: `${baseUrl}/${locale}/faqs`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    });

    // Individual FAQ pages - Priority 0.5
    faqs.forEach((faq) => {
      routes.push({
        url: `${baseUrl}/${locale}/faq/${faq.id}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.5,
      });
    });

    // UTILITY PAGES - Priority 0.5
    const utilityPages = [
      { path: '/contact', freq: 'yearly' as const },
      { path: '/ryder-cup-future-venues', freq: 'yearly' as const },
    ];

    utilityPages.forEach(({ path, freq }) => {
      routes.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency: freq,
        priority: 0.5,
      });
    });
  });

  return routes;
}
