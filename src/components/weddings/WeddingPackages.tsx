'use client';

import { motion } from 'framer-motion';
import { useDiscount } from '@/lib/discount-context';

const STANDARD_PACKAGES = [
  {
    name: 'Bronze',
    price: 'R12000',
    features: [
      '1x Photographer',
      '1x Videographer',
      'A4 Photobook Magazine',
      'A3 Canvas Picture',
      'Extra Photos on USB',
      'Video Output 2x USB',
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: 'Silver',
    price: 'R15000',
    features: [
      '1x Photographer',
      '1x Videographer',
      'A3 Photobook Magazine',
      'A3 Canvas Picture',
      'Drone Coverage',
      'Video Output 2x USB',
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: 'Gold',
    price: 'R18000',
    features: [
      '2x Photographers',
      '2x Videographers',
      'A3 Photobook Magazine',
      'A2 Canvas Picture',
      'Drone Coverage',
      'Video Output 2x USB',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
];

const EXCLUSIVE_PACKAGES = [
  {
    name: 'Platinum',
    price: 'R26000',
    features: [
      '1x Photographer',
      '2x Videographers',
      'Layflat Photobook',
      '2x A2 Canvas Pictures',
      'Drone Coverage',
      '2x Personalised USBs',
      'Sound System',
    ],
    highlighted: false,
    badge: 'Exclusive',
  },
  {
    name: 'Premium',
    price: 'R30000',
    features: [
      '2x Photographers',
      '2x Videographers',
      'A1 & A2 Canvas Pictures',
      'Layflat Photobook Magazine',
      'Drone Coverage',
      '2x Personalised USBs',
      'Sound System',
    ],
    highlighted: true,
    badge: 'Full Production',
  },
];

function PackageCard({
  pkg,
  idx,
  isActive,
  percentage,
  discountedPrice,
}: {
  pkg: (typeof STANDARD_PACKAGES)[number] | (typeof EXCLUSIVE_PACKAGES)[number];
  idx: number;
  isActive: boolean;
  percentage: number;
  discountedPrice: (n: number) => number;
}) {
  const raw = parseInt(pkg.price.replace(/\D/g, ''), 10);
  const discounted = isActive ? discountedPrice(raw) : raw;
  const showDiscount = isActive && discounted < raw;

  const formatPrice = (n: number) => `R${n.toLocaleString()}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.08 }}
      viewport={{ once: true }}
      className={`relative rounded-lg p-8 transition-all duration-500 flex flex-col ${
        pkg.highlighted
          ? 'border-2 border-wedding-gold bg-gradient-to-b from-wedding-gold/5 to-white md:scale-105 shadow-2xl'
          : 'border border-wedding-gold/20 hover:border-wedding-gold/40 bg-white/60'
      }`}
    >
      {pkg.badge && (
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full ${
          pkg.highlighted
            ? 'bg-wedding-gold text-wedding-charcoal'
            : 'bg-wedding-charcoal text-white'
        }`}>
          <span className="font-montserrat text-[10px] font-black uppercase tracking-[0.2em]">
            {pkg.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-playfair text-2xl text-wedding-charcoal mb-3">
          {pkg.name}
        </h3>
        <div className="flex items-baseline gap-2 flex-wrap mb-1">
          <p className={`font-montserrat text-3xl font-black ${
            pkg.highlighted ? 'text-wedding-gold' : 'text-wedding-charcoal'
          }`}>
            {showDiscount ? formatPrice(discounted) : formatPrice(raw)}
          </p>
          {showDiscount && (
            <p className="font-montserrat text-base line-through text-wedding-charcoal/30">
              {formatPrice(raw)}
            </p>
          )}
        </div>
        {showDiscount && (
          <span className="bg-rose-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">
            Save {percentage}%
          </span>
        )}
      </div>

      <div className="flex-1 border-t border-wedding-gold/15 pt-6 mb-8">
        <ul className="space-y-3">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="text-wedding-gold mt-0.5 text-base leading-none">✓</span>
              <span className="font-montserrat text-sm text-wedding-charcoal/70 leading-snug">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="/weddings/contact"
        className={`block w-full text-center font-montserrat text-[10px] font-black uppercase tracking-[0.3em] py-3 px-6 transition-all duration-300 ${
          pkg.highlighted
            ? 'bg-wedding-gold text-wedding-charcoal hover:bg-wedding-gold/90'
            : 'bg-wedding-charcoal text-white hover:bg-wedding-charcoal/90'
        }`}
      >
        Book This Package
      </a>
    </motion.div>
  );
}

export default function WeddingPackages() {
  const { isActive, percentage, discountedPrice } = useDiscount();
  const cardProps = { isActive, percentage, discountedPrice };

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
            Wedding Packages
          </p>
          <h2 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal tracking-tighter leading-tight">
            Choose Your <span className="italic font-light">Investment.</span>
          </h2>
        </motion.div>

        {/* Standard Packages */}
        <div className="mb-6">
          <p className="font-montserrat text-[9px] uppercase tracking-[0.5em] text-wedding-charcoal/30 font-black text-center mb-12">
            Standard
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STANDARD_PACKAGES.map((pkg, idx) => (
              <PackageCard key={pkg.name} pkg={pkg} idx={idx} {...cardProps} />
            ))}
          </div>
        </div>

        {/* Exclusive Packages */}
        <div className="mt-20">
          <div className="flex items-center gap-6 mb-12">
            <div className="flex-1 h-px bg-wedding-gold/15" />
            <p className="font-montserrat text-[9px] uppercase tracking-[0.5em] text-wedding-gold font-black shrink-0">
              Exclusive
            </p>
            <div className="flex-1 h-px bg-wedding-gold/15" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {EXCLUSIVE_PACKAGES.map((pkg, idx) => (
              <PackageCard key={pkg.name} pkg={pkg} idx={idx} {...cardProps} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="font-montserrat text-sm text-wedding-charcoal/50 max-w-2xl mx-auto">
            All packages include a consultation with Zakes. Pricing applies to KwaZulu-Natal venues — travel is additional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
