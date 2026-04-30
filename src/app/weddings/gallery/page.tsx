'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import WeddingsNavbar from '@/components/weddings/WeddingsNavbar';
import MsocoLogo from '@/components/ui/MsocoLogo';

interface GalleryImage {
  id: string;
  title: string;
  category: string;
  src: string;
  altText: string;
}

const CATEGORIES = [
  { id: 'all', label: 'All Images' },
  { id: 'ceremonies', label: 'Ceremonies' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'candid', label: 'Candid Moments' },
  { id: 'details', label: 'Details' },
];

// Wedding gallery images with category metadata (63 total from Excel categorization)
const WEDDING_GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', title: 'DSC_3035', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_3035.jpg', altText: 'Wedding moment' },
  { id: '2', title: 'DSC_3035', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_3035.jpg', altText: 'Wedding moment' },
  { id: '3', title: 'DSC05685', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05685.jpg', altText: 'Ceremony moment' },
  { id: '4', title: 'DSC05438', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05438.jpg', altText: 'Bride and groom' },
  { id: '5', title: 'DSC05410', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05410.jpg', altText: 'Wedding details' },
  { id: '6', title: 'DSC05378', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05378.jpg', altText: 'Ceremony proceedings' },
  { id: '7', title: 'DSC05321', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05321.jpg', altText: 'Guest moments' },
  { id: '8', title: 'DSC05290', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05290.jpg', altText: 'Reception details' },
  { id: '9', title: 'DSC05272', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05272.jpg', altText: 'Celebration' },
  { id: '10', title: 'DSC_0451', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0451.jpg', altText: 'Intimate moment' },
  { id: '11', title: 'DSC_0446', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0446.jpg', altText: 'Wedding portrait' },
  { id: '12', title: 'DSC_0428', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0428.jpg', altText: 'Guest interactions' },
  { id: '13', title: 'DSC_0423', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0423.jpg', altText: 'Bride details' },
  { id: '14', title: 'DSC_0391', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0391.jpg', altText: 'Wedding portrait' },
  { id: '15', title: 'DSC_0388', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0388.jpg', altText: 'Candid moment' },
  { id: '16', title: 'IMG_5783', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_5783.jpg', altText: 'Portrait shot' },
  { id: '17', title: 'IMG_5757', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_5757.jpg', altText: 'Portrait shot' },
  { id: '18', title: 'IMG_5757', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_5757.jpg', altText: 'Portrait shot' },
  { id: '19', title: 'IMG_5690', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_5690.jpg', altText: 'Portrait shot' },
  { id: '20', title: 'IMG_5672', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_5672.jpg', altText: 'Portrait shot' },
  { id: '21', title: 'IMG_5669', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_5669.jpg', altText: 'Portrait shot' },
  { id: '22', title: 'IMG_5653', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_5653.jpg', altText: 'Portrait shot' },
  { id: '23', title: 'IMG_5650', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_5650.jpg', altText: 'Portrait shot' },
  { id: '24', title: 'IMG_5669', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_5669.jpg', altText: 'Portrait shot' },
  { id: '25', title: 'IMG_5653', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_5653.jpg', altText: 'Portrait shot' },
  { id: '26', title: 'IMG_5650', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_5650.jpg', altText: 'Portrait shot' },
  { id: '27', title: 'IMG_0776', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_0776.jpg', altText: 'Candid moment' },
  { id: '28', title: 'IMG_0714', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_0714.jpg', altText: 'Candid moment' },
  { id: '29', title: 'IMG_0698', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_0698.jpg', altText: 'Candid moment' },
  { id: '30', title: 'IMG_0694', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_0694.jpg', altText: 'Candid moment' },
  { id: '31', title: 'IMG_0689', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_0689.jpg', altText: 'Candid moment' },
  { id: '32', title: 'IMG_0639', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_0639.jpg', altText: 'Candid moment' },
  { id: '33', title: 'IMG_0432', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_0432.jpg', altText: 'Candid moment' },
  { id: '34', title: 'IMG_0362', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_0362.jpg', altText: 'Candid moment' },
  { id: '35', title: 'IMG_0146', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_0146.jpg', altText: 'Candid moment' },
  { id: '36', title: 'IMG_0432', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_0432.jpg', altText: 'Candid moment' },
  { id: '37', title: 'IMG_0362', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_0362.jpg', altText: 'Candid moment' },
  { id: '38', title: 'IMG_0146', category: 'candid', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_0146.jpg', altText: 'Candid moment' },
  { id: '39', title: 'DSC_9172', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_9172.jpg', altText: 'Ceremony' },
  { id: '40', title: 'DSC_9116', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_9116.jpg', altText: 'Ceremony' },
  { id: '41', title: 'DSC_9061', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_9061.jpg', altText: 'Ceremony' },
  { id: '42', title: 'DSC_8906', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8906.jpg', altText: 'Ceremony' },
  { id: '43', title: 'DSC_8903', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8903.jpg', altText: 'Ceremony' },
  { id: '44', title: 'DSC_8870', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8870.jpg', altText: 'Ceremony' },
  { id: '45', title: 'DSC_8860', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8860.jpg', altText: 'Ceremony' },
  { id: '46', title: 'DSC_8802', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8802.jpg', altText: 'Ceremony' },
  { id: '47', title: 'DSC_8732', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8732.jpg', altText: 'Ceremony' },
  { id: '48', title: 'DSC_8860', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8860.jpg', altText: 'Ceremony' },
  { id: '49', title: 'DSC_8802', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8802.jpg', altText: 'Ceremony' },
  { id: '50', title: 'DSC_8732', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8732.jpg', altText: 'Ceremony' },
  { id: '51', title: 'DSC_8722', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8722.jpg', altText: 'Details' },
  { id: '52', title: 'DSC_8708', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8708.jpg', altText: 'Details' },
  { id: '53', title: 'DSC_8641', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8641.jpg', altText: 'Details' },
  { id: '54', title: 'DSC_8722', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8722.jpg', altText: 'Details' },
  { id: '55', title: 'DSC_8641', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8641.jpg', altText: 'Details' },
  { id: '56', title: 'DSC_8608', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8608.jpg', altText: 'Details' },
  { id: '57', title: 'DSC_8601', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8601.jpg', altText: 'Details' },
  { id: '58', title: 'DSC_8519', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8519.jpg', altText: 'Details' },
  { id: '59', title: 'DSC_8608', category: 'details', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_8608.jpg', altText: 'Details' },
  { id: '60', title: 'DSC_9172', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_9172.jpg', altText: 'Ceremony' },
  { id: '61', title: 'DSC_9116', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_9116.jpg', altText: 'Ceremony' },
  { id: '62', title: 'DSC_9061', category: 'ceremonies', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_9061.jpg', altText: 'Ceremony' },
  { id: '63', title: 'IMG_5783', category: 'portraits', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/IMG_5783.jpg', altText: 'Portrait' },
];

export default function WeddingsGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') return WEDDING_GALLERY_IMAGES;
    return WEDDING_GALLERY_IMAGES.filter((img) => img.category === selectedCategory);
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
                  <span className="ml-2 text-sm">({WEDDING_GALLERY_IMAGES.filter((img) => category.id === 'all' || img.category === category.id).length})</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-40 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    alt={image.altText}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-700"
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

            {/* Image Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center mt-16"
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-wedding-charcoal/60">
                Showing {filteredImages.length} of {WEDDING_GALLERY_IMAGES.length} images
              </p>
            </motion.div>
          </div>
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
