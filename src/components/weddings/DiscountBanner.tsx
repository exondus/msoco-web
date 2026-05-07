'use client';

import { useDiscount } from '@/lib/discount-context';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function DiscountBanner() {
  const { isActive, percentage, copy } = useDiscount();

  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden bg-white border border-rose-100 shadow-sm mb-10"
    >
      {/* Animated rose top accent */}
      <motion.div
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent origin-left"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 py-5 flex items-center justify-between gap-6">

        {/* Live indicator */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
          </span>
          <span className="hidden lg:block font-montserrat text-[9px] font-black uppercase tracking-[0.4em] text-rose-600">
            Live Offer
          </span>
        </div>

        {/* Big offer number */}
        <div className="flex items-center gap-6 md:gap-10 flex-1 justify-center">
          <div className="flex items-baseline gap-2">
            <span className="font-playfair text-4xl md:text-5xl font-black text-rose-700 leading-none">
              {percentage}%
            </span>
            <span className="font-montserrat text-[11px] font-black uppercase tracking-[0.4em] text-rose-500">
              OFF
            </span>
          </div>

          <span className="hidden sm:block w-px h-8 bg-gray-200" />

          <div className="hidden sm:flex flex-col">
            <span className="font-montserrat text-[11px] font-black uppercase tracking-[0.3em] text-gray-700">
              All Wedding Packages
            </span>
            {copy && (
              <span className="font-montserrat text-[9px] text-gray-400 tracking-wide mt-1">
                {copy}
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <a
          href="/weddings/contact"
          className="shrink-0 flex items-center gap-2 font-montserrat text-[9px] font-black uppercase tracking-[0.3em] bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 transition-colors duration-200"
        >
          Book Now <ArrowRight size={11} />
        </a>
      </div>
    </motion.div>
  );
}
