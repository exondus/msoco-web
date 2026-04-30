'use client';

import { motion } from 'framer-motion';
import WeddingsNavbar from '@/components/weddings/WeddingsNavbar';
import MsocoLogo from '@/components/ui/MsocoLogo';
import WeddingGalleryImproved from '@/components/weddings/WeddingGalleryImproved';
import ScarcityBar from '@/components/weddings/ScarcityBar';
import { DiscountProvider } from '@/lib/discount-context';

export default function WeddingsGalleryPage() {
  return (
    <DiscountProvider>
      <div className="flex flex-col min-h-screen bg-white scroll-smooth">
      {/* Scarcity/Discount Bar */}
      <ScarcityBar remainingDates={4} year={2026} />

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

        {/* Gallery Grid - Dynamic Layout */}
        <section className="py-40 px-8">
          <div className="max-w-7xl mx-auto">
            <WeddingGalleryImproved />

            {/* Image Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center mt-16"
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-wedding-charcoal/60">
                21 carefully curated wedding portraits
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
    </DiscountProvider>
  );
}
