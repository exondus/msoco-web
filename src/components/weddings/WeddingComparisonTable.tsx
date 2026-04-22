'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import CoreButton from '@/components/ui/CoreButton';
import { Tier } from '@/app/weddings/pricing/pricingData';

interface WeddingComparisonTableProps {
  tiers: Tier[];
}

export default function WeddingComparisonTable({ tiers }: WeddingComparisonTableProps) {
  return (
    <section className="py-24 bg-wedding-bg">
      <div className="max-w-7xl mx-auto px-8">
        <AnimatePresence mode="wait">
          <motion.div 
            key={tiers.map(t => t.name).join(',')} 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {tiers.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-500 ${
                  tier.recommended 
                    ? 'border-wedding-gold bg-white shadow-2xl shadow-wedding-gold/10 scale-105 z-10' 
                    : 'border-wedding-gold/20 bg-white/50'
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-wedding-gold text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Most Coveted
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="font-playfair text-3xl text-wedding-charcoal mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="font-playfair text-4xl text-wedding-gold">{tier.price}</span>
                    <span className="font-montserrat text-[10px] uppercase tracking-widest text-wedding-charcoal/40">Starting</span>
                  </div>
                  <p className="font-playfair italic text-wedding-charcoal/60 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="flex-1 mb-8">
                  <ul className="space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 p-0.5 rounded-full bg-wedding-gold/10 text-wedding-gold">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="font-montserrat text-xs text-wedding-charcoal/70 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <CoreButton 
                  variant={tier.recommended ? 'primary' : 'outline'}
                  className={`w-full py-4 font-montserrat text-[10px] font-black uppercase tracking-[0.3em] ${
                    tier.recommended 
                      ? 'bg-wedding-gold text-white hover:bg-wedding-gold/90' 
                      : 'border-wedding-gold text-wedding-gold hover:bg-wedding-gold/5'
                  }`}
                >
                  {tier.cta}
                </CoreButton>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-16 text-center">
          <p className="font-playfair italic text-wedding-charcoal/40 text-sm">
            Custom ceremonial adjustments and multi-day legacy planning available upon consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
