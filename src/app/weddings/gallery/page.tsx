'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import WeddingsNavbar from '@/components/weddings/WeddingsNavbar';
import MsocoLogo from '@/components/ui/MsocoLogo';

// All wedding gallery images
const ALL_GALLERY_IMAGES = [
  { id: '1', title: 'Ceremony Moment', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02488.jpg' },
  { id: '2', title: 'Bride & Groom', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02474.jpg' },
  { id: '3', title: 'Wedding Details', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02469.jpg' },
  { id: '4', title: 'Ceremony Proceedings', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02464.jpg' },
  { id: '5', title: 'Guest Moments', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02438.jpg' },
  { id: '6', title: 'Reception Details', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02413.jpg' },
  { id: '7', title: 'Celebration', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02373.jpg' },
  { id: '8', title: 'Intimate Moment', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02369.jpg' },
  { id: '9', title: 'Wedding Portrait', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02356.jpg' },
  { id: '10', title: 'Guest Interactions', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02351.jpg' },
  { id: '11', title: 'Bride Details', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02340.jpg' },
  { id: '12', title: 'Ceremony Highlight', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02323.jpg' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Images' },
  { id: 'ceremonies', label: 'Ceremonies' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'candid', label: 'Candid Moments' },
  { id: 'details', label: 'Details' },
];

export default function WeddingsGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') return ALL_GALLERY_IMAGES;
    return ALL_GALLERY_IMAGES.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-white scroll-smooth">
      {/* Navbar */}
      <WeddingsNavbar isHero={false} />

      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-20 px-8 bg-gradient-to-br from-wedding-bg via-white to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 border-2 border-wedding-gold text-wedding-gold text-[10px] font-black uppercase tracking-[0.5em] mb-10">
                Wedding Gallery
              </span>
              <h1 className="text-6xl md:text-[8rem] font-playfair font-light uppercase tracking-tighter leading-[0.75] mb-8 text-wedding-charcoal">
                Our <br />
                <span className="italic">Artistry.</span>
              </h1>
              <p className="text-lg md:text-2xl text-wedding-charcoal/60 max-w-3xl font-playfair italic font-light">
                A curated collection of authentic moments from ceremonies across KwaZulu-Natal. Each image tells a story of family, tradition, and celebration.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-8 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {CATEGORIES.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`font-montserrat text-[10px] font-black uppercase tracking-[0.3em] px-6 py-3 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-wedding-gold text-white shadow-lg'
                      : 'border-2 border-gray-200 text-wedding-charcoal/70 hover:border-wedding-gold'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-sm">({ALL_GALLERY_IMAGES.filter((img) => category.id === 'all' || img.category === category.id).length})</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-40 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredImages.map((image, idx) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group relative h-96 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-playfair text-xl font-semibold">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-2 capitalize">
                      {CATEGORIES.find((c) => c.id === image.category)?.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredImages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="font-montserrat text-wedding-charcoal/60 text-lg">
                  No images in this category yet.
                </p>
              </motion.div>
            )}
          </div>

          {/* Image Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-wedding-charcoal/60">
              Showing {filteredImages.length} of {ALL_GALLERY_IMAGES.length} images
            </p>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-40 px-8 bg-wedding-charcoal">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6">
                Ready to Book
              </p>
              <h2 className="font-playfair text-5xl md:text-7xl text-white mb-8 tracking-tighter leading-tight">
                Let&apos;s Capture Your <span className="italic font-light">Story.</span>
              </h2>
              <p className="font-montserrat text-white/70 text-lg mb-12 max-w-xl mx-auto">
                Every image in this gallery represents our commitment to authentic storytelling and technical excellence.
              </p>
              <a
                href="/weddings/pricing"
                className="inline-block font-montserrat text-[10px] font-black uppercase tracking-[0.4em] text-white border border-white px-12 py-4 hover:bg-white hover:text-wedding-charcoal transition-all duration-300"
              >
                View Packages & Pricing
              </a>
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
              <p className="font-montserrat text-sm text-wedding-charcoal/60 max-w-md">
                Durban-based wedding production specialists. A decade of authentic, culturally sensitive storytelling.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm">
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-wedding-gold">Navigation</p>
                <a href="/weddings" className="block font-montserrat text-wedding-charcoal/70 hover:text-wedding-gold transition-colors">Home</a>
                <a href="/weddings/services" className="block font-montserrat text-wedding-charcoal/70 hover:text-wedding-gold transition-colors">Services</a>
                <a href="/weddings/pricing" className="block font-montserrat text-wedding-charcoal/70 hover:text-wedding-gold transition-colors">Pricing</a>
              </div>
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-wedding-gold">Contact</p>
                <p className="font-montserrat text-wedding-charcoal/70">+27 12 345 6789</p>
                <p className="font-montserrat text-wedding-charcoal/70">info@msocorockers.co.za</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 text-center">
            <p className="font-montserrat text-[9px] font-bold text-wedding-charcoal/30 uppercase tracking-[0.2em]">
              © 2026 Msoco Rockers Production. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
