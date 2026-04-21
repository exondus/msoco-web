/**
 * Server-side WordPress Gallery Component
 * Fetches images directly and renders them
 * No client-side loading states needed
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

interface WordPressGalleryServerProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  title?: string;
  subtitle?: string;
}

export default function WordPressGalleryServer({
  images,
  columns = 3,
  title,
  subtitle,
}: WordPressGalleryServerProps) {
  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns];

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="mb-16 text-center">
          {title && (
            <h2 className="font-playfair text-6xl md:text-8xl text-wedding-charcoal mb-6 tracking-tighter leading-none">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-wedding-gold font-black">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {!images || images.length === 0 ? (
        <div className="w-full py-20 text-center">
          <p className="text-gray-600">No images to display</p>
        </div>
      ) : (
        <div className={`grid grid-cols-1 ${gridColsClass} gap-4 w-full`}>
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative h-64 md:h-80 group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={image.sourceUrl}
                alt={image.altText || image.title || 'Gallery image'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="text-sm font-medium line-clamp-2">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
