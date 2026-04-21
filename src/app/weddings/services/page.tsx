'use client';

import { motion } from 'framer-motion';
import ServicesGrid from '@/components/shared/ServicesGrid';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';

const WEDDING_SERVICES = [
  { id: 'studio-photo', number: '01', title: 'Studio Photography', description: 'Professional engagement shoots, bridal portraits, and styled sessions', ctaText: 'View Packages' },
  { id: 'studio-video', number: '02', title: 'Cinematic Videography', description: 'Highlight films, vow exchanges, and complete ceremony coverage', ctaText: 'View Packages' },
  { id: 'live-stream', number: '03', title: 'Live Streaming', description: 'Global broadcast for family and loved ones who cannot attend', ctaText: 'View Packages' },
  { id: 'drones', number: '04', title: 'Aerial Coverage', description: 'Drone cinematography of venue, entrance, and key moments', ctaText: 'View Packages' },
  { id: 'sound', number: '05', title: 'Sound & Audio', description: 'Professional PA systems, microphone management, and audio mixing', ctaText: 'View Packages' },
  { id: 'projection', number: '06', title: 'LED & Projection', description: 'Decorative displays, memory boards, and ambient lighting', ctaText: 'View Packages' },
  { id: 'lighting', number: '07', title: 'Ambient & Stage Lighting', description: 'Venue lighting design, altar setup, and romantic ambiance', ctaText: 'View Packages' },
  { id: 'product-photo', number: '08', title: 'Detail Photography', description: 'Rings, flowers, decor, fashion, and intimate detail captures', ctaText: 'View Packages' },
];

export default function WeddingsServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full flex justify-between items-center p-8 z-[100] bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <MsocoLogo className="h-10 w-44" />
        <div className="hidden md:flex space-x-12 text-[9px] font-black uppercase tracking-[0.4em] text-black/30 items-center gap-8">
          <a href="/weddings" className="hover:text-wedding-gold transition-colors">Back to Weddings</a>
          <a href="/gateway" className="hover:text-wedding-gold transition-colors">Change Division</a>
          <CoreButton variant="outline" className="py-2 px-6 border-gray-200 text-black">Inquire</CoreButton>
        </div>
      </nav>

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
                Wedding Services
              </span>
              <h1 className="text-6xl md:text-[8rem] font-playfair font-light uppercase tracking-tighter leading-[0.75] mb-8 text-wedding-charcoal">
                Every Moment <br />
                <span className="italic">Captured.</span>
              </h1>
              <p className="text-lg md:text-2xl text-wedding-charcoal/60 max-w-3xl font-playfair italic font-light">
                From the quiet intimacy of getting ready to the celebration of your union, we have specialized services to preserve every facet of your story.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesGrid services={WEDDING_SERVICES} theme="wedding" bgColor="bg-white" columns={4} ctaLink="/weddings/pricing" />

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
                Ready to Begin
              </p>
              <h2 className="font-playfair text-5xl md:text-7xl text-white mb-8 tracking-tighter leading-tight">
                Let&apos;s Plan Your <span className="italic font-light">Day.</span>
              </h2>
              <p className="font-montserrat text-white/70 text-lg mb-12 max-w-xl mx-auto">
                Every package is customizable to match your vision. Schedule a consultation with Zakes to discuss your ceremony.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a href="/weddings/pricing" className="inline-block bg-wedding-gold text-black hover:bg-wedding-gold/90 font-montserrat text-[10px] font-black uppercase tracking-[0.3em] py-4 px-12 rounded transition-all duration-300">
                  View Packages & Pricing
                </a>
              </div>
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
                <a href="/weddings" className="block font-montserrat text-wedding-charcoal/70 hover:text-wedding-gold transition-colors">Weddings Home</a>
                <a href="/gateway" className="block font-montserrat text-wedding-charcoal/70 hover:text-wedding-gold transition-colors">Corporate</a>
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
