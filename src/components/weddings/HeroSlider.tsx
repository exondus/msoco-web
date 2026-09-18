'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ALL_WEDDING_IMAGES } from '@/lib/media-registry';
import { PRESETS } from '@/lib/cloudinary';

const SLIDE_INTERVAL_MS = 5000;

const SLIDES = ALL_WEDDING_IMAGES.filter((img) => img.orientation === 'landscape').slice(0, 6);

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (SLIDES.length < 2) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  if (SLIDES.length === 0) {
    return <div className="absolute inset-0 bg-wedding-charcoal" />;
  }

  const slide = SLIDES[index];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 6, ease: 'linear' } }}
          className="absolute inset-0"
        >
          <Image
            src={PRESETS.hero(slide.publicId)}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-wedding-charcoal/60" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-wedding-charcoal/70 to-transparent" />

      {/* Slide indicators */}
      {SLIDES.length > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-[2px] transition-all duration-500 ${
                i === index ? 'w-10 bg-wedding-gold' : 'w-5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
