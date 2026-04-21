/**
 * WordPress Media Gallery Component
 * Displays images pulled from WordPress
 * Supports masonry layout and filtering
 */

'use client';

import { useState, useEffect } from 'react';
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

interface WordPressGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  isLoading?: boolean;
  error?: string | null;
}

export default function WordPressGallery({
  images,
  columns = 3,
  isLoading = false,
  error = null,
}: WordPressGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns];

  if (error) {
    return (
      <div className="w-full py-20 text-center">
        <p className="text-red-600 font-semibold">{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full py-20 text-center">
        <div className="inline-block">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wedding-gold"></div>
        </div>
        <p className="mt-4 text-gray-600">Loading gallery...</p>
      </div>
    );
  }

  if (!images || images.length === 0) {
    return (
      <div className="w-full py-20 text-center">
        <p className="text-gray-600">No images to display</p>
      </div>
    );
  }

  return (
    <>
      <div className={`grid grid-cols-1 ${gridColsClass} gap-4 w-full`}>
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true, margin: '-50px' }}
            onClick={() => setSelectedImage(image)}
            className="relative h-64 md:h-80 cursor-pointer group overflow-hidden rounded-lg"
          >
            <Image
              src={image.sourceUrl}
              alt={image.altText || image.title || 'Gallery image'}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium line-clamp-2">{image.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.sourceUrl}
              alt={selectedImage.altText || selectedImage.title}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-wedding-gold transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 text-white text-sm">
              <p className="font-medium">{selectedImage.title}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
