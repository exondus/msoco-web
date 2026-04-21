'use client';

import { motion } from 'framer-motion';
import CoreButton from '../ui/CoreButton';

const PACKAGES = [
  {
    name: 'The Foundation',
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
    name: 'The Signature',
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
    name: 'The Legacy',
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
  return (
    <section className="py-40 px-8 bg-white">
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
                  ? 'border-2 border-wedding-gold bg-wedding-gold/5 md:scale-105'
                  : 'border-2 border-gray-200 hover:border-wedding-gold/50'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-wedding-gold text-white px-4 py-1 rounded-full">
                  <span className="font-montserrat text-[10px] font-black uppercase tracking-[0.2em]">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-playfair text-2xl text-wedding-charcoal mb-2">
                  {pkg.name}
                </h3>
                <p className="font-montserrat text-4xl text-wedding-gold font-black mb-2">
                  {pkg.price}
                </p>
                <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-wedding-charcoal/60">
                  {pkg.duration}
                </p>
              </div>

              <div className="mb-8 border-t border-wedding-gold/20 pt-6">
                <ul className="space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-wedding-gold mt-1 text-xl">✓</span>
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
                    ? 'bg-wedding-gold text-white hover:bg-wedding-gold/90'
                    : 'border-2 border-wedding-gold text-wedding-gold hover:bg-wedding-gold/10'
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
