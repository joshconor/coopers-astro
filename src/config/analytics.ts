// ── Tracking IDs — paste yours here, then commit + push to deploy ──
// Leave any value as "" to turn that tracker off. Nothing loads until you paste.

// Google Ads conversion ID — starts with "AW-".
// Powers remarketing audiences, and native Ads conversions if you use them.
export const ADS_ID = "AW-18365263054";

// Google Ads conversion label — ONLY for a conversion action created
// directly in Google Ads ("Google tag" source). Leave empty when the
// conversion action is imported from GA4 — GA_ID below handles that path.
export const ADS_CONVERSION_LABEL = "S_K3COXSwOYcEM7ZnrVE";

// Google Analytics 4 Measurement ID — starts with "G-".
// REQUIRED when the Google Ads conversion action is imported from GA4:
// the event goes to GA4, and GA4 forwards it to Google Ads via the
// linked-accounts connection. Find it in GA4 → Admin → Data Streams.
export const GA_ID = "";

// The GA4 event name that /thank-you/ fires. This must match the event
// you marked as a key event in GA4 → Admin → Events, which is the same
// event the Google Ads conversion action was imported from.
export const GA_CONVERSION_EVENT = "generate_lead";
