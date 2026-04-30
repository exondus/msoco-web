'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

// Select 9 best portrait images for landing page elegance
const LANDING_GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05685.jpg', alt: 'Wedding ceremony' },
  { id: '2', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05410.jpg', alt: 'Wedding moment' },
  { id: '3', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05290.jpg', alt: 'Reception' },
  { id: '4', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05272.jpg', alt: 'Celebration' },
  { id: '5', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0451.jpg', alt: 'Intimate moment' },
  { id: '6', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0446.jpg', alt: 'Portrait' },
  { id: '7', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5783-scaled.jpg', alt: 'Portrait' },
  { id: '8', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5690-scaled.jpg', alt: 'Portrait' },
  { id: '9', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5672-scaled.jpg', alt: 'Portrait' },
];

export default function WeddingLandingGallery() {
  return (
    <div className="w-full">
      {/* Clean 3x3 grid - no borders, just elegant images */}
      <div className="grid grid-cols-3 gap-4">
        {LANDING_GALLERY_IMAGES.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden aspect-square"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
              loading={index < 3 ? 'eager' : 'lazy'}
            />
            {/* Subtle overlay on hover - no visible border */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
