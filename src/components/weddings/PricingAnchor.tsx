'use client';

import { useDiscount } from '@/lib/discount-context';

interface PricingAnchorProps {
  startingPrice: string;
  premiumPrice: string;
}

export default function PricingAnchor({ startingPrice, premiumPrice }: PricingAnchorProps) {
  const { isActive, percentage } = useDiscount();

  // Helper to parse "R12,500" and apply discount
  const applyDiscount = (priceStr: string) => {
    if (!isActive) return priceStr;
    const num = parseInt(priceStr.replace(/[^0-9]/g, ''));
    if (isNaN(num)) return priceStr;
    const discounted = Math.round(num * (1 - percentage / 100));
    return `R${discounted.toLocaleString()}`;
  };

  const finalStartingPrice = applyDiscount(startingPrice);
  const finalPremiumPrice = applyDiscount(premiumPrice);

  return (
    <section className="py-24 bg-wedding-bg border-y border-wedding-gold/10 px-8 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black block">
          Heirloom Investment
        </span>
        <h2 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal tracking-tighter">
          Legacies starting from{' '}
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-3">
            <span className="text-wedding-gold">{finalStartingPrice}</span>
            {isActive && (
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-4xl line-through text-wedding-charcoal/30 font-light">
                  {startingPrice}
                </span>
                <span className="bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">
                  Save {percentage}%
                </span>
              </div>
            )}
          </div>
        </h2>
        <p className="font-montserrat text-sm text-wedding-charcoal/50 leading-loose uppercase tracking-widest font-bold">
          Custom cinematic productions from{' '}
          <span className={isActive ? 'text-wedding-charcoal/80' : ''}>
            {finalPremiumPrice}+
          </span>
          {isActive && (
            <span className="ml-2 line-through text-wedding-charcoal/30">
              ({premiumPrice}+)
            </span>
          )}
          . Every selection includes full-day coverage, 4K film, and a curated heritage gallery.
        </p>
        <a
          href="/weddings/pricing"
          className="inline-block font-montserrat text-[10px] font-black uppercase tracking-[0.4em] text-wedding-charcoal border border-wedding-charcoal px-10 py-4 hover:bg-wedding-charcoal hover:text-white transition-all duration-300"
        >
          Explore Tiers & Specifications
        </a>
      </div>
    </section>
  );
}
