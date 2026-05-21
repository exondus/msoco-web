/**
 * Centralized Analytics Utility — Msoco Rockers Production
 *
 * All PostHog event captures go through this module.
 * This gives us:
 * 1. Type-safe event names (no typos in event strings)
 * 2. Consistent property schemas
 * 3. Single place to audit what we track
 * 4. Easy to swap analytics provider in the future
 */

import posthog from 'posthog-js';

// ─── Helpers ───────────────────────────────────────────────────

function capture(event: string, properties?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && posthog.__loaded) {
    posthog.capture(event, properties);
  }
}

function fbqCapture(event: string, standardEvent: boolean, properties?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq(standardEvent ? 'track' : 'trackCustom', event, properties);
  }
}

// ─── CTA & Navigation Events ──────────────────────────────────

export function trackCTAClick(
  cta: string,
  properties?: Record<string, unknown>,
) {
  capture('cta_click', { cta_name: cta, ...properties });
  fbqCapture('CTAClick', false, { content_name: cta, ...properties });
}

export function trackNavClick(label: string, href: string) {
  capture('nav_click', { nav_label: label, nav_href: href });
  fbqCapture('NavClick', false, { content_name: label, nav_href: href });
}

// ─── Package & Pricing Events ──────────────────────────────────

export function trackPackageCTAClick(
  packageName: string,
  price: number,
  discountActive: boolean,
  discountPercentage: number,
) {
  capture('package_cta_click', {
    package_name: packageName,
    package_price: price,
    discount_active: discountActive,
    discount_percentage: discountPercentage,
  });
  fbqCapture('InitiateCheckout', true, {
    content_name: packageName,
    value: price,
    currency: 'ZAR',
  });
}

export function trackPricingTabChange(tab: string) {
  capture('pricing_tab_change', { pricing_tab: tab });
  fbqCapture('PricingTabChange', false, { content_name: tab });
}

export function trackBespokeQuoteClick() {
  capture('bespoke_quote_click');
  fbqCapture('BespokeQuoteClick', false);
}

// ─── Contact & Lead Events ─────────────────────────────────────

export function trackWhatsAppClick(source: string) {
  capture('whatsapp_click', { source });
  fbqCapture('Contact', true, { content_name: `WhatsApp - ${source}` });
}

export function trackPhoneCallClick(source: string) {
  capture('phone_call_click', { source });
  fbqCapture('Contact', true, { content_name: `Phone - ${source}` });
}

export function trackEmailClick(source: string) {
  capture('email_click', { source });
  fbqCapture('Contact', true, { content_name: `Email - ${source}` });
}

export function trackContactFormSubmission(
  ceremonyType: string,
  hasDate: boolean,
  hasVenue: boolean,
  selectedPackage?: string,
) {
  capture('contact_form_submission', {
    ceremony_type: ceremonyType,
    has_date: hasDate,
    has_venue: hasVenue,
    selected_package: selectedPackage || null,
  });
  fbqCapture('Lead', true, {
    content_category: ceremonyType,
    content_name: selectedPackage || 'General Lead',
  });
}

export function trackContactFormError(errorType: string, errorMessage: string) {
  capture('contact_form_error', {
    error_type: errorType,
    error_message: errorMessage,
  });
  fbqCapture('ContactFormError', false, {
    content_category: errorType,
    content_name: errorMessage,
  });
}

// ─── Discount & Scarcity Events ────────────────────────────────

export function trackDiscountViewed(
  percentage: number,
  location: string,
) {
  capture('discount_viewed', {
    discount_percentage: percentage,
    location,
  });
  fbqCapture('DiscountViewed', false, {
    content_category: location,
    value: percentage,
  });
}

export function trackDiscountCTAClick(
  percentage: number,
  location: string,
) {
  capture('discount_cta_click', {
    discount_percentage: percentage,
    location,
  });
  fbqCapture('DiscountCTAClick', false, {
    content_category: location,
    value: percentage,
  });
}

// ─── Gallery & Content Events ──────────────────────────────────

export function trackGalleryView(source: string) {
  capture('gallery_view', { source });
  fbqCapture('ViewContent', true, { content_name: `Gallery - ${source}` });
}

export function trackSectionViewed(section: string, page: string) {
  capture('section_viewed', { section, page });
  fbqCapture('SectionViewed', false, {
    content_name: section,
    content_category: page,
  });
}

// ─── Error Events ──────────────────────────────────────────────

export function trackVideoError(videoUrl: string, errorMessage?: string) {
  capture('video_error', {
    video_url: videoUrl,
    error_message: errorMessage || 'unknown',
  });
  fbqCapture('VideoError', false, {
    content_name: videoUrl,
    content_category: errorMessage || 'unknown',
  });
}

export function trackComponentError(
  componentName: string,
  error: Error,
) {
  if (typeof window !== 'undefined' && posthog.__loaded) {
    posthog.captureException(error, {
      component: componentName,
    });
  }
  fbqCapture('ComponentError', false, {
    content_name: componentName,
  });
}
