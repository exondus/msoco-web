'use client';

import { useDiscount } from '@/lib/discount-context';
import { motion } from 'framer-motion';
import { Sparkles, Gift, ArrowRight } from 'lucide-react';

interface ScarcityBarProps {
  remainingDates: number;
  year: number;
}

export default function ScarcityBar({ remainingDates, year }: ScarcityBarProps) {
  const { isActive, loading, percentage, copy } = useDiscount();

  // Show skeleton bar while loading to prevent layout shift
  if (loading) {
    return (
      <div className="w-full bg-gradient-to-r from-rose-700 via-rose-600 to-rose-700 py-5 px-6">
        <div className="flex flex-col items-center gap-2 max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="h-3 w-24 bg-white/20 rounded animate-pulse" />
            <div className="h-5 w-20 bg-white/20 rounded-full animate-pulse" />
            <div className="h-3 w-32 bg-white/20 rounded animate-pulse" />
          </div>
          <div className="h-3 w-64 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  // Show discount bar if active, otherwise show scarcity bar
  if (isActive) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full bg-gradient-to-r from-rose-700 via-rose-600 to-rose-700 py-5 px-6 overflow-hidden"
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_infinite] -skew-x-12" />

        <div className="relative z-10 flex flex-col items-center gap-2 max-w-5xl mx-auto">
          {/* Row 1: Offer label + percentage badge + message + CTA */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <Gift size={14} className="text-rose-200" />
              <span className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-rose-200">
                Limited Offer
              </span>
            </div>

            <span className="hidden md:block w-px h-4 bg-white/30" />

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-0.5">
                <Sparkles size={10} className="text-yellow-300" />
                <span className="font-montserrat text-[11px] font-black text-white">
                  {percentage}% OFF
                </span>
              </span>
              <span className="font-montserrat text-[11px] font-bold text-white">
                all wedding packages
              </span>
            </div>

            <span className="hidden md:block w-px h-4 bg-white/30" />

            <a
              href="/weddings/pricing"
              className="inline-flex items-center gap-1 font-montserrat text-[9px] font-black uppercase tracking-[0.2em] text-white border border-white/40 rounded-full px-3 py-1 hover:bg-white/20 transition-all"
            >
              Book Now <ArrowRight size={10} />
            </a>
          </div>

          {/* Row 2: Full copy text */}
          {copy && (
            <p className="font-montserrat text-[10px] text-white/80 italic text-center max-w-2xl">
              {copy}
            </p>
          )}
        </div>
      </motion.div>
    );
  }

  // Show scarcity bar if no discount and dates available
  if (remainingDates === 0) return null;

  return (
    <div className="w-full bg-wedding-gold py-3 px-6 text-center">
      <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.4em] text-wedding-charcoal">
        Only {remainingDates} dates remaining for the {year} season —{' '}
        <a href="#contact" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
          Secure yours →
        </a>
      </p>
    </div>
  );
}
