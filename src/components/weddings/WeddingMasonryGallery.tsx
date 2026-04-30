'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MasonryImage {
  id: string;
  src: string;
  alt: string;
  height: number;
}

// Wedding portrait images for masonry layout
const PORTRAIT_IMAGES: MasonryImage[] = [
  { id: '1', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05685.jpg', alt: 'Wedding ceremony', height: 400 },
  { id: '2', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05410.jpg', alt: 'Wedding details', height: 500 },
  { id: '3', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05290.jpg', alt: 'Reception details', height: 450 },
  { id: '4', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05272.jpg', alt: 'Celebration', height: 420 },
  { id: '5', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0451.jpg', alt: 'Intimate moment', height: 480 },
  { id: '6', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0446.jpg', alt: 'Wedding portrait', height: 460 },
  { id: '7', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0428.jpg', alt: 'Guest interactions', height: 440 },
  { id: '8', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0423.jpg', alt: 'Bride details', height: 490 },
  { id: '9', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0391.jpg', alt: 'Wedding portrait', height: 470 },
  { id: '10', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0388.jpg', alt: 'Candid moment', height: 430 },
  { id: '11', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5783-scaled.jpg', alt: 'Portrait', height: 510 },
  { id: '12', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5690-scaled.jpg', alt: 'Portrait', height: 450 },
  { id: '13', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5672-scaled.jpg', alt: 'Portrait', height: 480 },
  { id: '14', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5669-scaled.jpg', alt: 'Portrait', height: 470 },
  { id: '15', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5653-scaled.jpg', alt: 'Portrait', height: 460 },
  { id: '16', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5650-scaled.jpg', alt: 'Portrait', height: 490 },
  { id: '17', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1796-scaled.jpg', alt: 'Portrait', height: 440 },
  { id: '18', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1800-scaled.jpg', alt: 'Portrait', height: 475 },
  { id: '19', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1794-scaled.jpg', alt: 'Portrait', height: 500 },
  { id: '20', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1791-scaled.jpg', alt: 'Portrait', height: 420 },
  { id: '21', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1790-scaled.jpg', alt: 'Portrait', height: 485 },
];

export default function WeddingMasonryGallery() {
  return (
    <div className="w-full">
      {/* Masonry grid using CSS columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {PORTRAIT_IMAGES.map((image, index) => (
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
                unoptimized
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
