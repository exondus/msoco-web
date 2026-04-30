'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

// Curated selection from WordPress inventory
const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05685.jpg', alt: 'The Sacred Exchange', caption: 'Traditional Zulu ceremony exchange' },
  { id: '2', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05410.jpg', alt: 'Golden Details', caption: 'Intricate wedding attire details' },
  { id: '3', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05290.jpg', alt: 'Reception Glow', caption: 'Elegantly set reception tables' },
  { id: '4', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05272.jpg', alt: 'Ancestral Celebration', caption: 'Vibrant ceremony performance' },
  { id: '5', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0451.jpg', alt: 'Shared Secrets', caption: 'An intimate moment between the couple' },
  { id: '6', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0446.jpg', alt: 'The Gaze', caption: 'Refined wedding portrait' },
  { id: '7', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0428.jpg', alt: 'Bridal Radiance', caption: 'The bride in her traditional finery' },
  { id: '8', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0423.jpg', alt: 'Timeless Grace', caption: 'Detail of the bridal veil and dress' },
  { id: '9', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0391.jpg', alt: 'Cultural Heritage', caption: 'Traditional Zulu wedding regalia' },
  { id: '10', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0388.jpg', alt: 'Joyous Arrival', caption: 'The wedding party enters the venue' },
  { id: '11', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5783-scaled.jpg', alt: 'The Union', caption: 'Couples portrait in the valley' },
  { id: '12', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5690-scaled.jpg', alt: 'First Look', caption: 'A moment of quiet reflection' },
  { id: '13', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5672-scaled.jpg', alt: 'Elegance in Motion', caption: 'The bridal party procession' },
  { id: '14', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5669-scaled.jpg', alt: 'Valley Vows', caption: 'Ceremony overlooking the Drakensberg' },
  { id: '15', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5653-scaled.jpg', alt: 'Floral Fantasy', caption: 'Lush floral arrangements and decor' },
  { id: '16', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5650-scaled.jpg', alt: 'Signature Portrait', caption: 'High-fashion bridal portrait' },
  { id: '17', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_1800.jpg', alt: 'Ceremonial Rhythms', caption: 'Drums beating for the union' },
  { id: '18', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_1796.jpg', alt: 'The Promise', caption: 'Exchanging rings and heritage' },
  { id: '19', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_1794.jpg', alt: 'Heritage Walk', caption: 'Walking into the new life together' },
  { id: '20', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_1791.jpg', alt: 'Community Love', caption: 'Family gathered for the celebration' },
  { id: '21', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_1790.jpg', alt: 'Dusk Departure', caption: 'Ending the day in golden light' },
];

export default function WeddingGalleryImproved() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="w-full">
      {/* Masonry Layout using CSS Columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {GALLERY_IMAGES.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: (index % 5) * 0.1,
              ease: [0.21, 0.45, 0.32, 0.9]
            }}
            viewport={{ once: true, margin: "-100px" }}
            onClick={() => setSelectedImage(image)}
            className="relative break-inside-avoid group cursor-pointer overflow-hidden bg-gray-50 rounded-sm"
          >
            {/* Aspect ratio container using padding trick or just auto height */}
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Refined Hover Overlay */}
              <div className="absolute inset-0 bg-wedding-charcoal/0 group-hover:bg-wedding-charcoal/10 transition-colors duration-500" />
              
              {/* Bottom Label Reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-t from-wedding-charcoal/60 to-transparent">
                <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-wedding-gold font-black mb-1">
                  {image.alt}
                </p>
                <p className="font-playfair italic text-white/80 text-xs">
                  {image.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-wedding-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full flex-1 mb-8 group/modal">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-0 right-0 text-white/40 hover:text-wedding-gold transition-colors p-4"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Lightbox Footer */}
              <div className="text-center max-w-2xl px-6">
                <h3 className="font-playfair text-3xl text-white mb-2 uppercase tracking-widest font-light">
                  {selectedImage.alt}
                </h3>
                <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6">
                  {selectedImage.caption}
                </p>
                <div className="w-12 h-[1px] bg-wedding-gold/30 mx-auto" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
