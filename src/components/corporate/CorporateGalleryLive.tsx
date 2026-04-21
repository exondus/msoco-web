/**
 * Live Corporate Gallery
 * Displays professional/corporate event images from WordPress
 * Server-rendered for best performance
 */

import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryImage {
  id: string;
  sourceUrl: string;
  altText: string;
  title: string;
  category?: string;
  width?: number;
  height?: number;
}

// Corporate/professional event images (swapped from Wedding)
const CORPORATE_IMAGES: GalleryImage[] = [
  {
    id: '1',
    title: 'Corporate Event Setup',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02488.jpg',
    altText: 'Professional staging and lighting',
    width: 917,
    height: 1500,
  },
  {
    id: '2',
    title: 'Broadcast Production',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02474.jpg',
    altText: 'Multi-camera broadcast setup',
    width: 917,
    height: 1500,
  },
  {
    id: '3',
    title: 'LED Video Wall',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02469.jpg',
    altText: 'LED display technology',
    width: 917,
    height: 1500,
  },
  {
    id: '4',
    title: 'Executive Headshots',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02464.jpg',
    altText: 'Professional corporate portraits',
    width: 917,
    height: 1500,
  },
  {
    id: '5',
    title: 'Audio System Configuration',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02438.jpg',
    altText: 'Line array audio setup',
    width: 917,
    height: 1500,
  },
  {
    id: '6',
    title: 'Brand Activation',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02413.jpg',
    altText: 'Interactive brand experience',
    width: 917,
    height: 1500,
  },
  {
    id: '7',
    title: 'Live Event Coverage',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02373.jpg',
    altText: 'Event documentation',
    width: 917,
    height: 1500,
  },
  {
    id: '8',
    title: 'Lighting Rig Configuration',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02369.jpg',
    altText: 'Intelligent lighting design',
    width: 917,
    height: 1500,
  },
  {
    id: '9',
    title: 'Product Photography',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02356.jpg',
    altText: 'Professional product showcase',
    width: 917,
    height: 1500,
  },
  {
    id: '10',
    title: 'Conference Setup',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02351.jpg',
    altText: 'Professional conference space',
    width: 917,
    height: 1500,
  },
  {
    id: '11',
    title: 'Stage Production',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02340.jpg',
    altText: 'Full stage setup and design',
    width: 917,
    height: 1500,
  },
  {
    id: '12',
    title: 'Photo Booth Integration',
    sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02323.jpg',
    altText: 'Interactive photo booth experience',
    width: 917,
    height: 1500,
  },
];

export default function CorporateGalleryLive() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CORPORATE_IMAGES.map((image, index) => (
          <motion.article
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true, margin: '-50px' }}
            className="group relative h-72 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
          >
            <Image
              src={image.sourceUrl}
              alt={image.altText || image.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={index < 4}
              unoptimized
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              {image.category && (
                <span className="text-corporate-blue text-xs font-black uppercase tracking-wider mb-2">
                  {image.category}
                </span>
              )}
              <h3 className="text-white font-bold text-sm line-clamp-2">
                {image.title}
              </h3>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
