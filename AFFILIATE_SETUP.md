# Affiliate Program Setup Guide

This site is configured to use affiliate links for hotel bookings and golf tee times. Follow this guide to activate and start earning commissions.

## 🏨 Booking.com Affiliate Program (Hotels)

### Commission: 25-40% per booking
### Cookie Duration: 30 days

### Step 1: Sign Up
1. Go to https://admin.booking.com/affiliate/
2. Click "Register now" and create an account
3. Fill in your website details (www.adarelimerickgolf.com)
4. Wait for approval (usually 1-3 business days)

### Step 2: Get Your Affiliate ID
1. Log in to your Booking.com Partners dashboard
2. Navigate to "Account" → "Settings"
3. Find your **Affiliate ID (aid)**
4. Copy this ID (format: `1234567`)

### Step 3: Configure the Site
1. Open `/lib/affiliates.ts`
2. Replace `YOUR_BOOKING_AFFILIATE_ID` with your actual affiliate ID:
   ```typescript
   export const BOOKING_AFFILIATE_ID = '1234567'; // Your actual ID here
   ```
3. Save and rebuild the site

### How It Works
- Hotel cards now have "Check Availability" buttons
- Clicking takes users to Booking.com with your affiliate tracking
- You earn commission when they book (tracked for 30 days)
- Average commission: €15-40 per booking

---

## ⛳ Golf Course Tee Time Links

### Current Implementation: Direct Course Links
The site currently uses **direct booking links** to each golf course's official website.

### Option A: Keep Direct Links (Current)
**Pros:**
- Higher conversion (golfers prefer official course sites)
- No middleman fees
- Can negotiate direct referral agreements with courses
- Better trust signal

**How to monetize:**
1. Contact courses directly (emails in course data)
2. Propose referral partnership: 5-10% commission per booking
3. Use unique tracking codes: `?ref=adarelimerickgolf`
4. Track conversions via course booking confirmations

**Recommended courses to contact first:**
- Adare Manor
- Ballybunion Golf Club
- Lahinch Golf Club
- Tralee Golf Club
- Trump International Doonbeg

### Option B: Add GolfNow/TeeOff Affiliate Program

**GolfNow Affiliate Program:**
- Sign up: https://www.golfnow.com/affiliates
- Commission: $5-15 per booking
- Cookie: 30 days
- **Issue**: Limited Irish course inventory

**TeeOff.com:**
- Similar to GolfNow
- Better for US courses, limited Ireland coverage

**To implement GolfNow:**
1. Sign up and get your affiliate ID
2. Update `/lib/affiliates.ts`:
   ```typescript
   export const GOLFNOW_AFFILIATE_ID = 'your_id_here';
   ```
3. Uncomment GolfNow link generation in `generateGolfNowLink()`

---

## 📊 Tracking & Analytics

### Google Analytics Event Tracking
The site automatically tracks affiliate clicks via Google Analytics events:

**Events tracked:**
- `affiliate_click` → Hotel booking button clicked
- `affiliate_click` → Tee time button clicked

**To view in Google Analytics:**
1. Go to Events → Engagement
2. Filter by `event_name = affiliate_click`
3. See breakdown by `event_category` (Hotel Booking vs Tee Time Booking)
4. See which hotels/courses drive most clicks

### Setting Up Google Analytics
If you haven't set up GA4 yet:

1. Create GA4 property at https://analytics.google.com
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to your site by creating `/app/layout.tsx` with:
   ```typescript
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 💰 Expected Revenue (Ryder Cup 2027)

### Conservative Estimates:
**Assumptions:**
- 5,000 monthly visitors during Ryder Cup season (6 months before event)
- 2% click-through rate on hotel bookings
- 30% conversion rate (industry avg for Booking.com)
- €25 avg commission per booking

**Calculation:**
- 5,000 visitors × 2% CTR = 100 clicks/month
- 100 clicks × 30% conversion = 30 bookings/month
- 30 bookings × €25 commission = **€750/month**
- **€4,500 total (6 months)**

### Peak Month (September 2027):
- 20,000+ visitors expected
- Potential: **€3,000+ in September alone**

### Golf Course Commissions (if direct deals negotiated):
- Assume 500 tee time clicks/month
- 20% conversion rate
- €15 avg commission
- **€1,500/month additional**

---

## ✅ Quick Start Checklist

- [ ] Sign up for Booking.com Partner Program
- [ ] Get Booking.com affiliate ID
- [ ] Update `/lib/affiliates.ts` with your affiliate ID
- [ ] Rebuild and deploy site (`npm run build`)
- [ ] Test booking buttons (should show your affiliate ID in URL)
- [ ] Set up Google Analytics for tracking
- [ ] (Optional) Contact golf courses for direct referral deals
- [ ] (Optional) Sign up for GolfNow if desired

---

## 📧 Template Email for Golf Course Partnerships

Subject: Referral Partnership Opportunity - Ryder Cup 2027 Traffic

Hi [Course Manager],

I run AdareLimerickGolf.com, a comprehensive guide for Ryder Cup 2027 visitors. We're expecting 50,000+ visitors in the lead-up to the event (Sept 2027).

I'd like to discuss a referral partnership:
- We feature your course prominently on our site
- Direct "Book Tee Time" buttons link to your booking page
- We use trackable referral codes: ?ref=adarelimerickgolf
- You pay 5-10% commission on completed bookings

Expected volume: 100-500 tee time inquiries over 12 months.

Would you be interested in discussing this further?

Best regards,
[Your Name]
AdareLimerickGolf.com

---

## 🔧 Technical Details

### Affiliate Link Format (Booking.com):
```
https://www.booking.com/searchresults.html?
  ss=Adare+Manor,+Adare,+Ireland
  &aid=YOUR_AFFILIATE_ID
  &label=adare-limerick-golf
  &lang=en-us
```

### Where Affiliate Links Appear:
1. ✅ Homepage hotel cards (4 hotels)
2. ✅ Homepage golf course cards (6 courses)
3. ✅ Hotels-near-[location] pages (8 locations)
4. ✅ All hotel listing pages
5. ✅ All golf course listing pages

### Link Attributes:
All affiliate links use:
- `target="_blank"` - Opens in new tab
- `rel="noopener noreferrer sponsored"` - Proper SEO attributes
- Click tracking via Google Analytics

---

## 📈 Optimization Tips

1. **A/B Test Button Text:**
   - "Check Availability" vs "Book Now" vs "View Rates"
   - Track which gets higher CTR

2. **Add Urgency:**
   - "Only 3 rooms left at this price"
   - "Book early for Ryder Cup 2027"

3. **Promote in Blog Content:**
   - Add affiliate links in guide articles
   - Include in email newsletters

4. **Seasonal Pricing:**
   - Emphasize Ryder Cup week premium pricing
   - Encourage early bookings (higher intent = higher conversion)

---

## 📞 Support

**Booking.com Partner Support:**
- Email: affiliatehelp@booking.com
- Phone: Available in partner dashboard

**Questions about this implementation:**
- Check `/lib/affiliates.ts` for code
- All affiliate functions are documented

---

## 🚀 Ready to Launch?

Once you've added your affiliate IDs:
1. `npm run build`
2. Test a few links to verify your ID appears in URLs
3. Deploy to production
4. Monitor clicks in Google Analytics
5. Watch commissions roll in! 💰
