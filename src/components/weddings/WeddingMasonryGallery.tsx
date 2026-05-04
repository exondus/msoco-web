'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MASONRY_IMAGES } from '@/lib/cloudinary-images';

export default function WeddingMasonryGallery() {
  return (
    <div className="w-full">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {MASONRY_IMAGES.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true, margin: '-50px' }}
            className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
          >
            <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
