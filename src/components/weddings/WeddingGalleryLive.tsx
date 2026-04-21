/**
 * Live Wedding Gallery
 * Displays real images from WordPress media library
 * Server-rendered for best performance
 */

import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryImage {
  id: string;
  sourceUrl: string;
  altText: string;
  title: string;
  width?: number;
  height?: number;
}

// Wedding/ceremonial images (swapped from Corporate)
const WEDDING_IMAGES: GalleryImage[] = [
  {
    id: '1',
    title: 'Ceremony Moment',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05685.jpg',
    altText: 'Wedding ceremony moment',
    width: 917,
    height: 1500,
  },
  {
    id: '2',
    title: 'Bride & Groom',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05438.jpg',
    altText: 'Bride and groom portrait',
    width: 917,
    height: 1500,
  },
  {
    id: '3',
    title: 'Wedding Details',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05410.jpg',
    altText: 'Wedding detail shot',
    width: 917,
    height: 1500,
  },
  {
    id: '4',
    title: 'Ceremony Proceedings',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05378.jpg',
    altText: 'Ceremony in progress',
    width: 917,
    height: 1500,
  },
  {
    id: '5',
    title: 'Guest Moments',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05321.jpg',
    altText: 'Guests enjoying ceremony',
    width: 917,
    height: 1500,
  },
  {
    id: '6',
    title: 'Reception Details',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05290.jpg',
    altText: 'Reception setup',
    width: 917,
    height: 1500,
  },
  {
    id: '7',
    title: 'Celebration',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05272.jpg',
    altText: 'Celebration moment',
    width: 917,
    height: 1500,
  },
  {
    id: '8',
    title: 'Intimate Moment',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0451.jpg',
    altText: 'Intimate moment',
    width: 917,
    height: 1500,
  },
  {
    id: '9',
    title: 'Wedding Portrait',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0446.jpg',
    altText: 'Wedding portrait',
    width: 917,
    height: 1500,
  },
  {
    id: '10',
    title: 'Guest Interactions',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0428.jpg',
    altText: 'Guests interacting',
    width: 917,
    height: 1500,
  },
  {
    id: '11',
    title: 'Bride Details',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0423.jpg',
    altText: 'Bride detail shot',
    width: 917,
    height: 1500,
  },
  {
    id: '12',
    title: 'Ceremony Highlight',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/4.jpg',
    altText: 'Ceremony highlight',
    width: 917,
    height: 1500,
  },
];

export default function WeddingGalleryLive() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WEDDING_IMAGES.map((image, index) => (
          <motion.article
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true, margin: '-50px' }}
            className="group relative h-96 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <Image
              src={image.sourceUrl}
              alt={image.altText || image.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3}
              unoptimized
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-playfair text-xl font-semibold">
                {image.title}
              </h3>
              <p className="text-white/80 text-sm mt-2">{image.altText}</p>
            </div>
          </motion.article>
        ))}
      </div>

    </div>
  );
}
