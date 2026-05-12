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

// ─── CTA & Navigation Events ──────────────────────────────────

export function trackCTAClick(
  cta: string,
  properties?: Record<string, unknown>,
) {
  capture('cta_click', { cta_name: cta, ...properties });
}

export function trackNavClick(label: string, href: string) {
  capture('nav_click', { nav_label: label, nav_href: href });
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
}

export function trackPricingTabChange(tab: string) {
  capture('pricing_tab_change', { pricing_tab: tab });
}

export function trackBespokeQuoteClick() {
  capture('bespoke_quote_click');
}

// ─── Contact & Lead Events ─────────────────────────────────────

export function trackWhatsAppClick(source: string) {
  capture('whatsapp_click', { source });
}

export function trackPhoneCallClick(source: string) {
  capture('phone_call_click', { source });
}

export function trackEmailClick(source: string) {
  capture('email_click', { source });
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
}

export function trackContactFormError(errorType: string, errorMessage: string) {
  capture('contact_form_error', {
    error_type: errorType,
    error_message: errorMessage,
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
}

export function trackDiscountCTAClick(
  percentage: number,
  location: string,
) {
  capture('discount_cta_click', {
    discount_percentage: percentage,
    location,
  });
}

// ─── Gallery & Content Events ──────────────────────────────────

export function trackGalleryView(source: string) {
  capture('gallery_view', { source });
}

export function trackSectionViewed(section: string, page: string) {
  capture('section_viewed', { section, page });
}

// ─── Error Events ──────────────────────────────────────────────

export function trackVideoError(videoUrl: string, errorMessage?: string) {
  capture('video_error', {
    video_url: videoUrl,
    error_message: errorMessage || 'unknown',
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
}
