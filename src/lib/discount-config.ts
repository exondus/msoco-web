/**
 * Discount Configuration
 *
 * Master configuration for discount promotions.
 * This overrides the WordPress GraphQL fetch and allows discounts
 * to be managed without WordPress login.
 *
 * To run a special:
 * 1. Set `active: true`
 * 2. Fill in `percentage` (e.g., 20 for 20% off)
 * 3. Fill in `copy` (marketing message)
 * 4. Commit the file
 *
 * To end the special:
 * 1. Set `active: false`
 * 2. Commit the file
 */

export interface DiscountConfig {
  active: boolean;
  percentage: number;
  copy: string;
}

export const DISCOUNT_CONFIG: DiscountConfig = {
  active: true,
  percentage: 10,
  copy: '10% off all wedding packages — limited 2026 dates remaining',
};
