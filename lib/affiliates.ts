/**
 * Affiliate Program Configuration
 *
 * SETUP INSTRUCTIONS:
 * 1. Booking.com: Sign up at https://admin.booking.com/affiliate/
 * 2. GolfNow: Apply at https://www.golfnow.com/affiliates
 * 3. Replace placeholder IDs below with your actual affiliate IDs
 */

// Booking.com Affiliate Configuration
export const BOOKING_AFFILIATE_ID = 'YOUR_BOOKING_AFFILIATE_ID'; // Replace with your Booking.com aid
export const BOOKING_LABEL = 'adare-limerick-golf'; // Your custom label for tracking

// GolfNow Affiliate Configuration
export const GOLFNOW_AFFILIATE_ID = 'YOUR_GOLFNOW_AFFILIATE_ID'; // Replace with your GolfNow affiliate ID

/**
 * Generate Booking.com affiliate link
 * @param hotelName - Name of the hotel for search
 * @param location - City/location for search
 * @param checkIn - Check-in date (YYYY-MM-DD) - optional
 * @param checkOut - Check-out date (YYYY-MM-DD) - optional
 */
export function generateBookingLink(
  hotelName: string,
  location: string,
  checkIn?: string,
  checkOut?: string
): string {
  const baseUrl = 'https://www.booking.com/searchresults.html';

  const params = new URLSearchParams({
    ss: `${hotelName}, ${location}, Ireland`,
    aid: BOOKING_AFFILIATE_ID,
    label: BOOKING_LABEL,
    lang: 'en-us',
    // Add Ryder Cup dates if no dates provided
    ...(checkIn && { checkin: checkIn }),
    ...(checkOut && { checkout: checkOut }),
  });

  return `${baseUrl}?${params.toString()}`;
}

/**
 * Generate GolfNow tee time link
 * @param courseName - Name of the golf course
 * @param location - City/location
 */
export function generateGolfNowLink(courseName: string, location: string): string {
  const baseUrl = 'https://www.golfnow.com/tee-times';

  // GolfNow uses URL structure: /tee-times/course-name-city-state-course-id
  // For search, we'll use their search page
  const searchUrl = 'https://www.golfnow.com/search';

  const paramsObj: Record<string, string> = {
    q: `${courseName} ${location} Ireland`,
  };

  // Add affiliate ID when you have it
  if (GOLFNOW_AFFILIATE_ID !== 'YOUR_GOLFNOW_AFFILIATE_ID') {
    paramsObj.aid = GOLFNOW_AFFILIATE_ID;
  }

  const params = new URLSearchParams(paramsObj);

  return `${searchUrl}?${params.toString()}`;
}

/**
 * Generate direct course website link (fallback if no GolfNow affiliate)
 * Many Irish courses prefer direct bookings
 */
export function generateDirectCourseLink(courseSlug: string): string {
  // Map of course slugs to their official booking pages
  const directBookingUrls: Record<string, string> = {
    'adare-manor': 'https://www.adaremanor.com/golf/booking',
    'ballybunion-old-course': 'https://www.ballybuniongolfclub.com/book-a-tee-time',
    'lahinch-golf-club': 'https://www.lahinchgolf.com/book-online',
    'tralee-golf-club': 'https://www.traleegolfclub.com/visitors/book-online/',
    'doonbeg': 'https://www.trumphotels.com/doonbeg/golf/tee-times',
    'waterville-golf-links': 'https://www.watervillegolflinks.ie/tee-times/',
    'old-head-golf-links': 'https://www.oldhead.com/book-a-round/',
    'portmarnock-golf-club': 'https://portmarnockgolfclub.ie/visitor-information/',
    'royal-county-down': 'https://www.royalcountydown.org/visitors/',
    // Add more as needed
  };

  return directBookingUrls[courseSlug] || '#';
}

/**
 * Track affiliate click (for analytics)
 */
export function trackAffiliateClick(type: 'booking' | 'golfnow' | 'direct', itemName: string) {
  // This can be integrated with Google Analytics or your analytics platform
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      event_category: 'Affiliate',
      event_label: `${type}: ${itemName}`,
      value: type === 'booking' ? 'hotel' : 'tee_time',
    });
  }
}

/**
 * Helper to add UTM parameters for tracking
 */
export function addUTMParams(url: string, source: string, campaign: string): string {
  const urlObj = new URL(url);
  urlObj.searchParams.set('utm_source', source);
  urlObj.searchParams.set('utm_medium', 'affiliate');
  urlObj.searchParams.set('utm_campaign', campaign);
  return urlObj.toString();
}
