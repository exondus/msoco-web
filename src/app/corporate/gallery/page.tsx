'use client';

import { motion } from 'framer-motion';
import CorporateNavbar from '@/components/corporate/CorporateNavbar';
import MsocoLogo from '@/components/ui/MsocoLogo';
import { CORPORATE_IMAGES } from '@/lib/media-registry';
import { cloudinaryUrl } from '@/lib/cloudinary';

export default function CorporateGalleryPage() {
  const images = CORPORATE_IMAGES;

  return (
    <div className="flex flex-col min-h-screen bg-white scroll-smooth">
      {/* Navbar */}
      <CorporateNavbar />

      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 border-2 border-gray-400 text-gray-600 text-[10px] font-black uppercase tracking-[0.5em] mb-10">
                Corporate Gallery
              </span>
              <h1 className="text-6xl md:text-[8rem] font-playfair font-light uppercase tracking-tighter leading-[0.75] mb-8 text-gray-900">
                Our <br />
                <span className="italic">Portfolio.</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-600 max-w-3xl font-playfair italic font-light">
                Professional production for corporate events, conferences, and brand experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-40 px-8">
          <div className="max-w-7xl mx-auto">
            {images.length === 0 ? (
              <p className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-gray-400 text-center py-20">
                Gallery coming soon
              </p>
            ) : (
              <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                {images.map((image, idx) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: (idx % 5) * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="relative break-inside-avoid group cursor-pointer overflow-hidden bg-gray-50 rounded-sm"
                  >
                    <div className="relative">
                      <img
                        src={cloudinaryUrl(image.publicId, {
                          width: image.orientation === 'landscape' ? 800 : 600,
                        })}
                        alt={image.alt}
                        className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-corporate-blue/0 group-hover:bg-corporate-blue/10 transition-colors duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-t from-corporate-blue/80 to-transparent">
                        <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-white font-black">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Image Count */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-center mt-16">
              <p className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-gray-600">
                Showing {images.length} images
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-12">
            <div>
              <MsocoLogo className="h-10 w-40 mb-8" />
              <p className="font-montserrat text-sm text-gray-600 max-w-md">
                Professional production specialists for corporate events.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 text-center">
            <p className="font-montserrat text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">
              © 2026 Msoco Rockers Production. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
