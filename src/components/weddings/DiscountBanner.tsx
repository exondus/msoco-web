'use client';

import { useDiscount } from '@/lib/discount-context';
import { motion } from 'framer-motion';

export default function DiscountBanner() {
  const { isActive, percentage, copy } = useDiscount();

  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 px-8 py-6 shadow-lg"
    >
      {/* Subtle animated gradient overlay */}
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-rose-500/30 via-transparent to-rose-500/30"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-white/90 mb-1">
            Exclusive Offer
          </p>
          <p className="font-playfair text-2xl md:text-3xl text-white font-light">
            Save {percentage}% on all packages
          </p>
        </div>

        {copy && (
          <p className="hidden md:block font-montserrat text-sm text-white/95 italic max-w-xs text-right">
            {copy}
          </p>
        )}
      </div>

      {/* Mobile view of copy */}
      {copy && (
        <p className="md:hidden font-montserrat text-xs text-white/95 italic mt-3 text-center">
          {copy}
        </p>
      )}
    </motion.div>
  );
}
