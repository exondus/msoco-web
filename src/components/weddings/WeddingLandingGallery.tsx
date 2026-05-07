'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ALL_WEDDING_IMAGES } from '@/lib/media-registry';
import { cloudinaryUrl } from '@/lib/cloudinary';

const LANDING_IMAGES = ALL_WEDDING_IMAGES.filter((img) => img.orientation === 'portrait').slice(0, 9);

export default function WeddingLandingGallery() {
  if (LANDING_IMAGES.length === 0) return null;

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4">
        {LANDING_IMAGES.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden aspect-square"
          >
            <Image
              src={cloudinaryUrl(image.publicId, { width: 800, height: 800 })}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading={index < 6 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
