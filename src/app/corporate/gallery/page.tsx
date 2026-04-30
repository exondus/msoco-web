'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CorporateNavbar from '@/components/corporate/CorporateNavbar';
import MsocoLogo from '@/components/ui/MsocoLogo';

interface GalleryImage {
  id: string;
  title: string;
  src: string;
  altText: string;
}

// Corporate gallery images (24 total from Excel categorization)
const CORPORATE_GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', title: 'DSC02488', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02488.jpg', altText: 'Corporate Event Setup' },
  { id: '2', title: 'DSC02474', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02474.jpg', altText: 'Broadcast Production' },
  { id: '3', title: 'DSC02469', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02469.jpg', altText: 'LED Video Wall' },
  { id: '4', title: 'DSC02464', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02464.jpg', altText: 'Executive Headshots' },
  { id: '5', title: 'DSC02438', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02438.jpg', altText: 'Audio System' },
  { id: '6', title: 'DSC02413', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02413.jpg', altText: 'Brand Activation' },
  { id: '7', title: 'DSC02373', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02373.jpg', altText: 'Live Event Coverage' },
  { id: '8', title: 'DSC02369', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02369.jpg', altText: 'Lighting Rig' },
  { id: '9', title: 'DSC02356', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02356.jpg', altText: 'Product Photography' },
  { id: '10', title: 'DSC02351', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02351.jpg', altText: 'Conference Setup' },
  { id: '11', title: 'DSC02340', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02340.jpg', altText: 'Stage Production' },
  { id: '12', title: 'DSC02323', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02323.jpg', altText: 'Photo Booth' },
  { id: '13', title: 'DSC02271', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02271.jpg', altText: 'Corporate Event' },
  { id: '14', title: 'AECI', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/AECI.jpg', altText: 'Corporate Event' },
  { id: '15', title: 'DSC02241', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02241.jpg', altText: 'Corporate Event' },
  { id: '16', title: 'DSC02234', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02234.jpg', altText: 'Corporate Event' },
  { id: '17', title: 'AECI', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/AECI.jpg', altText: 'Corporate Event' },
  { id: '18', title: 'DSC_3063', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_3063.jpg', altText: 'Corporate Event' },
  { id: '19', title: 'Corporate Event', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/corporate-event-19.jpg', altText: 'Corporate Event' },
  { id: '20', title: 'Corporate Event', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/corporate-event-20.jpg', altText: 'Corporate Event' },
  { id: '21', title: 'Corporate Event', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/corporate-event-21.jpg', altText: 'Corporate Event' },
  { id: '22', title: 'PP (11)', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/PP-11.jpg', altText: 'Corporate Event' },
  { id: '23', title: 'PP-11-1', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/PP-11-1.jpg', altText: 'Corporate Event' },
  { id: '24', title: 'PP-11', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/PP-11.jpg', altText: 'Corporate Event' },
];

export default function CorporateGalleryPage() {
  const images = CORPORATE_GALLERY_IMAGES;

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
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, idx) => (
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
                    <h3 className="text-white font-playfair text-xl font-semibold">{image.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>

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
