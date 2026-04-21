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

// Sample of images from WordPress media library
// This is intentionally hardcoded from the inventory for now
// Later, this can be replaced with dynamic GraphQL queries
const WEDDING_IMAGES: GalleryImage[] = [
  {
    id: '1',
    title: 'DSC02488',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02488.jpg',
    altText: 'Wedding ceremony moment',
    width: 917,
    height: 1500,
  },
  {
    id: '2',
    title: 'DSC02474',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02474.jpg',
    altText: 'Bride and groom',
    width: 917,
    height: 1500,
  },
  {
    id: '3',
    title: 'DSC02469',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02469.jpg',
    altText: 'Wedding detail shot',
    width: 917,
    height: 1500,
  },
  {
    id: '4',
    title: 'DSC02464',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02464.jpg',
    altText: 'Ceremony proceedings',
    width: 917,
    height: 1500,
  },
  {
    id: '5',
    title: 'DSC02438',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02438.jpg',
    altText: 'Guest moments',
    width: 917,
    height: 1500,
  },
  {
    id: '6',
    title: 'DSC02413',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02413.jpg',
    altText: 'Reception details',
    width: 917,
    height: 1500,
  },
  {
    id: '7',
    title: 'DSC02373',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02373.jpg',
    altText: 'Celebration moment',
    width: 917,
    height: 1500,
  },
  {
    id: '8',
    title: 'DSC02369',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02369.jpg',
    altText: 'Intimate moment',
    width: 917,
    height: 1500,
  },
  {
    id: '9',
    title: 'DSC02356',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02356.jpg',
    altText: 'Wedding portrait',
    width: 917,
    height: 1500,
  },
  {
    id: '10',
    title: 'DSC02351',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02351.jpg',
    altText: 'Guest interactions',
    width: 917,
    height: 1500,
  },
  {
    id: '11',
    title: 'DSC02340',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02340.jpg',
    altText: 'Bride detail shot',
    width: 917,
    height: 1500,
  },
  {
    id: '12',
    title: 'DSC02323',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02323.jpg',
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
