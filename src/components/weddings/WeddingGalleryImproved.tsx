'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ALL_WEDDING_IMAGES } from '@/lib/media-registry';
import { cloudinaryUrl, type CloudinaryAsset } from '@/lib/cloudinary';

export default function WeddingGalleryImproved() {
  const [selected, setSelected] = useState<CloudinaryAsset | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (ALL_WEDDING_IMAGES.length === 0) return null;

  return (
    <div className="w-full">
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {ALL_WEDDING_IMAGES.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: (index % 5) * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
            viewport={{ once: true, margin: '-100px' }}
            onClick={() => setSelected(image)}
            className="relative break-inside-avoid group cursor-pointer overflow-hidden bg-gray-50 rounded-sm"
          >
            <div className="relative">
              <img
                src={cloudinaryUrl(image.publicId, {
                  width: image.orientation === 'landscape' ? 800 : 600,
                })}
                alt={image.alt}
                className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-wedding-charcoal/0 group-hover:bg-wedding-charcoal/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-t from-wedding-charcoal/60 to-transparent">
                <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-wedding-gold font-black">
                  {image.alt}
                </p>
                {image.weddingType && (
                  <p className="font-playfair italic text-white/80 text-xs mt-1 capitalize">
                    {image.weddingType} wedding
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-wedding-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full flex-1 mb-8">
                <img
                  src={cloudinaryUrl(selected.publicId, { width: 1600 })}
                  alt={selected.alt}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-0 right-0 text-white/40 hover:text-wedding-gold transition-colors p-4"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="text-center max-w-2xl px-6">
                <h3 className="font-playfair text-3xl text-white mb-2 uppercase tracking-widest font-light">
                  {selected.alt}
                </h3>
                {selected.weddingType && (
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6 capitalize">
                    {selected.weddingType} wedding
                  </p>
                )}
                <div className="w-12 h-[1px] bg-wedding-gold/30 mx-auto" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
