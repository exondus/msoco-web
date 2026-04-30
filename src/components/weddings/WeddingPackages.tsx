'use client';

import { motion } from 'framer-motion';
import CoreButton from '../ui/CoreButton';
import { useDiscount } from '@/lib/discount-context';

const PACKAGES = [
  {
    name: 'The Heritage',
    price: 'R12,500',
    duration: '8 hours coverage',
    features: [
      '2 videographers',
      '4K cinema-grade video',
      '200+ edited photos',
      'Same-day highlight reel',
      'Digital gallery access',
    ],
    highlighted: false,
  },
  {
    name: 'The Legacy',
    price: 'R22,000',
    duration: '12 hours coverage',
    features: [
      '3 videographers + drone',
      '4K multi-angle coverage',
      '400+ curated photos',
      'Cinematic highlight reel',
      'Premium audio mixing',
      'Custom color grading',
      'Digital + USB delivery',
    ],
    highlighted: true,
  },
  {
    name: 'The Dynasty',
    price: 'Custom',
    duration: 'Full-day + post-production',
    features: [
      'Full production team',
      '4K + cinema camera suite',
      'Unlimited coverage',
      'Multi-day editing',
      'Documentary-style film',
      'Professional album design',
      'Live streaming option',
    ],
    highlighted: false,
  },
];

export default function WeddingPackages() {
  const { isActive, discountedPrice } = useDiscount();

  // Parse price and apply discount
  const getPriceDisplay = (priceStr: string) => {
    if (priceStr === 'Custom') return { original: 'Custom', discounted: 'Custom', showDiscount: false };

    const match = priceStr.match(/[\d,]+/);
    if (!match) return { original: priceStr, discounted: priceStr, showDiscount: false };

    const original = parseInt(match[0].replace(/,/g, ''), 10);
    const discounted = isActive ? discountedPrice(original) : original;

    return {
      original: `R${original.toLocaleString()}`,
      discounted: `R${discounted.toLocaleString()}`,
      showDiscount: isActive && discounted < original,
    };
  };

  return (
    <section className="py-40 px-8 bg-wedding-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6">
            Service Packages
          </p>
          <h2 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal tracking-tighter leading-tight">
            Choose Your <span className="italic font-light">Investment.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-lg p-8 transition-all duration-500 ${
                pkg.highlighted
                  ? 'border-2 border-rose-300 bg-gradient-to-b from-rose-50 to-white md:scale-105 shadow-2xl'
                  : 'border border-rose-200/50 hover:border-rose-300/70 bg-white/50'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-rose-600 to-rose-700 text-white px-4 py-1 rounded-full">
                  <span className="font-montserrat text-[10px] font-black uppercase tracking-[0.2em]">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-playfair text-2xl text-wedding-charcoal mb-2">
                  {pkg.name}
                </h3>
                {(() => {
                  const priceData = getPriceDisplay(pkg.price);
                  return (
                    <>
                      <div className="flex items-baseline gap-2 mb-2">
                        <p className={`font-montserrat text-4xl font-black ${
                          pkg.highlighted ? 'bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent' : 'text-rose-600'
                        }`}>
                          {priceData.showDiscount ? priceData.discounted : priceData.original}
                        </p>
                        {priceData.showDiscount && (
                          <p className="font-montserrat text-lg line-through text-wedding-charcoal/30">
                            {priceData.original}
                          </p>
                        )}
                      </div>
                      {priceData.showDiscount && (
                        <p className="font-montserrat text-[11px] font-black text-rose-600 mb-2">
                          SAVE 5%
                        </p>
                      )}
                    </>
                  );
                })()}
                <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-wedding-charcoal/60">
                  {pkg.duration}
                </p>
              </div>

              <div className="mb-8 border-t border-rose-200/30 pt-6">
                <ul className="space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-rose-400 mt-1 text-xl">✓</span>
                      <span className="font-montserrat text-sm text-wedding-charcoal/70">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/weddings/pricing"
                className={`inline-block w-full text-center font-montserrat text-[10px] font-black uppercase tracking-[0.3em] py-3 px-6 rounded transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white hover:shadow-lg hover:shadow-rose-600/30'
                    : 'bg-wedding-charcoal text-white hover:bg-wedding-charcoal/90'
                }`}
              >
                View Full Details
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="font-montserrat text-sm text-wedding-charcoal/60 max-w-2xl mx-auto mb-6">
            All packages include a consultation with Zakes to customize your coverage based on your ceremony type, venue, and family traditions. Pricing is for KwaZulu-Natal venues; travel is additional.
          </p>
          <a
            href="/weddings/pricing"
            className="inline-block font-montserrat text-[10px] font-black uppercase tracking-[0.4em] text-wedding-charcoal border border-wedding-charcoal px-10 py-4 hover:bg-wedding-charcoal hover:text-white transition-all duration-300"
          >
            See All Packages
          </a>
        </motion.div>
      </div>
    </section>
  );
}
