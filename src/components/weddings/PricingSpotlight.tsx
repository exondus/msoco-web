'use client';

import { motion } from 'framer-motion';
import { useDiscount } from '@/lib/discount-context';
import { trackCTAClick } from '@/lib/analytics';
import { PackageCard, STANDARD_PACKAGES } from './WeddingPackages';

// Single featured package — the full range lives on /weddings/pricing.
const FEATURED_PACKAGE = STANDARD_PACKAGES.find((p) => p.highlighted) ?? STANDARD_PACKAGES[0];

export default function PricingSpotlight() {
  const { isActive, percentage, discountedPrice } = useDiscount();

  return (
    <section className="py-32 px-8 bg-wedding-bg border-y border-wedding-gold/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6">
            Wedding Packages
          </p>
          <h2 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal tracking-tighter leading-tight">
            Our Most Popular <span className="italic font-light">Package.</span>
          </h2>
          <p className="font-montserrat text-sm text-wedding-charcoal/50 mt-8 max-w-xl mx-auto">
            Packages start from R12,000. Every package includes a photographer, videographer, and printed keepsakes.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <PackageCard
            pkg={FEATURED_PACKAGE}
            idx={0}
            isActive={isActive}
            percentage={percentage}
            discountedPrice={discountedPrice}
          />
        </div>

        <div className="mt-16 text-center">
          <a
            href="/weddings/pricing"
            onClick={() => trackCTAClick('view_all_packages', { source: 'pricing_spotlight' })}
            data-ph-capture-attribute-cta="view-all-packages"
            className="inline-block font-montserrat text-[10px] font-black uppercase tracking-[0.4em] text-wedding-charcoal border border-wedding-charcoal px-12 py-4 hover:bg-wedding-charcoal hover:text-white transition-all duration-300"
          >
            See All 5 Packages & Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
