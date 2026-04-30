'use client';

import { useDiscount } from '@/lib/discount-context';
import { motion } from 'framer-motion';

interface ScarcityBarProps {
  remainingDates: number;
  year: number;
}

export default function ScarcityBar({ remainingDates, year }: ScarcityBarProps) {
  const { isActive, percentage, copy } = useDiscount();

  // Show discount bar if active, otherwise show scarcity bar
  if (isActive) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 py-3 px-6 text-center"
      >
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.4em] text-white">
            EXCLUSIVE OFFER
          </p>
          <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.4em] text-white">
            Save {percentage}% on all packages
          </p>
          {copy && (
            <p className="font-montserrat text-[10px] italic text-white/90 max-w-md">
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
