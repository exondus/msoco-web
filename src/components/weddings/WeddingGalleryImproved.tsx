'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: 'wide' | 'tall' | 'normal';
}

// 21 portrait images with varied layout for visual interest
const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05685.jpg', alt: 'Wedding ceremony', span: 'tall' },
  { id: '2', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05410.jpg', alt: 'Wedding details' },
  { id: '3', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05290.jpg', alt: 'Reception details' },
  { id: '4', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05272.jpg', alt: 'Celebration', span: 'wide' },
  { id: '5', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0451.jpg', alt: 'Intimate moment' },
  { id: '6', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0446.jpg', alt: 'Wedding portrait' },
  { id: '7', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0428.jpg', alt: 'Guest interactions' },
  { id: '8', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0423.jpg', alt: 'Bride details', span: 'tall' },
  { id: '9', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0391.jpg', alt: 'Wedding portrait' },
  { id: '10', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0388.jpg', alt: 'Candid moment' },
  { id: '11', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5783-scaled.jpg', alt: 'Portrait', span: 'wide' },
  { id: '12', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5690-scaled.jpg', alt: 'Portrait' },
  { id: '13', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5672-scaled.jpg', alt: 'Portrait' },
  { id: '14', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5669-scaled.jpg', alt: 'Portrait' },
  { id: '15', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5653-scaled.jpg', alt: 'Portrait', span: 'tall' },
  { id: '16', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5650-scaled.jpg', alt: 'Portrait' },
  { id: '17', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1796-scaled.jpg', alt: 'Portrait' },
  { id: '18', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1800-scaled.jpg', alt: 'Portrait' },
  { id: '19', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1794-scaled.jpg', alt: 'Portrait', span: 'wide' },
  { id: '20', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1791-scaled.jpg', alt: 'Portrait' },
  { id: '21', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1790-scaled.jpg', alt: 'Portrait' },
];

export default function WeddingGalleryImproved() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 auto-rows-[250px] gap-4">
        {GALLERY_IMAGES.map((image, index) => {
          const colSpan = image.span === 'wide' ? 'col-span-2' : image.span === 'tall' ? 'row-span-2' : 'col-span-1';
          const rowSpan = image.span === 'tall' ? 'row-span-2' : 'row-span-1';

          return (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden ${colSpan} ${rowSpan}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 25vw"
                unoptimized
              />
              {/* No visible border - only subtle hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
