/**
 * Anniversary Banner Configuration
 *
 * Drives the promotional bar pinned to the top of every wedding page
 * (rendered by `ScarcityBar`). This is separate from `discount-config.ts`:
 * the discount config controls site-wide percentage discounts, while this
 * controls the celebratory 27th-anniversary banner and its headline offer.
 *
 * To turn the banner off:
 * 1. Set `active: false`
 * 2. Commit the file
 * (When inactive, ScarcityBar falls back to the "dates remaining" bar.)
 */

export interface BannerConfig {
  active: boolean;
  /** Milestone number shown as the big focal figure (e.g. 27). */
  years: number;
  /** Supporting offer line, shown uppercase in the centre of the bar. */
  offer: string;
  /** Countdown deadline (local time ISO string). */
  deadline: string;
  /** Where "Book Now" points. */
  ctaHref: string;
}

export const BANNER_CONFIG: BannerConfig = {
  active: true,
  years: 27,
  offer: 'Save R6,000 on the Platinum Package',
  deadline: '2026-08-31T23:59:59',
  ctaHref: '/weddings/contact',
};
