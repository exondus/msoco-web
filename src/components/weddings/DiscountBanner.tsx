'use client';

import { useDiscount } from '@/lib/discount-context';
import { motion } from 'framer-motion';

export default function DiscountBanner() {
  const { isActive, percentage, copy } = useDiscount();

  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-10 mb-8 shadow-2xl"
    >
      {/* Animated pulse background */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 bg-emerald-500/20 rounded-lg"
      />

      <div className="relative z-10 text-center space-y-4">
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-playfair text-white text-6xl font-bold"
        >
          SAVE {percentage}%
        </motion.div>
        <p className="text-white/90 text-lg font-montserrat italic max-w-2xl mx-auto">
          {copy}
        </p>
      </div>
    </motion.div>
  );
}
