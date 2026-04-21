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
    <div className="flex flex-col min-h-screen bg-wedding-bg text-wedding-charcoal font-inter scroll-smooth" data-theme="wedding">
      {/* Navbar */}
      <nav className="fixed w-full flex justify-between items-center p-8 z-[100] glass-wedding border-b border-wedding-gold/10">
        <div className="flex items-center gap-8">
          <a href="/weddings" className="group flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-wedding-gold transition-all duration-300">
            <span className="w-8 h-px bg-wedding-gold transition-all duration-300 group-hover:w-12" />
            Back to Weddings
          </a>
          <MsocoLogo className="h-10 w-44" invert={false} />
        </div>
        <div className="hidden md:flex space-x-12 text-[9px] font-black uppercase tracking-[0.4em] text-wedding-charcoal/40 items-center gap-8">
          <a href="/weddings" className="hover:text-wedding-gold transition-colors">Portfolio</a>
          <a href="/gateway" className="hover:text-wedding-gold transition-colors">Change Division</a>
          <CoreButton variant="outline" className="py-2 px-6 border-wedding-gold text-wedding-gold hover:bg-wedding-gold/5">Inquire</CoreButton>
        </div>
      </nav>

      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-20 px-8 bg-wedding-bg">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 border border-wedding-gold/30 text-wedding-gold text-[10px] font-black uppercase tracking-[0.5em] mb-10 bg-wedding-gold/5">
                Ceremonial Production
              </span>
              <h1 className="text-6xl md:text-[8rem] font-playfair font-light uppercase tracking-tighter leading-[0.75] mb-8 text-wedding-charcoal">
                The Art of <br />
                <span className="italic">Preservation.</span>
              </h1>
              <p className="text-lg md:text-2xl text-wedding-charcoal/60 max-w-3xl font-playfair italic font-light">
                From the quiet intimacy of the morning preparations to the grand celebration of your union, we capture every nuance of your heritage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesGrid services={WEDDING_SERVICES} theme="wedding" bgColor="bg-wedding-bg" columns={4} ctaLink="/weddings/pricing" />

        {/* CTA Section */}
        <section className="py-40 px-8 bg-wedding-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-wedding-gold/5 blur-[120px] rounded-full translate-y-1/2" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6">
                Begin Your Journey
              </p>
              <h2 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal mb-8 tracking-tighter leading-tight">
                Plan Your <span className="italic font-light">Heritage.</span>
              </h2>
              <p className="font-montserrat text-wedding-charcoal/50 text-lg mb-12 max-w-xl mx-auto italic">
                Every package is customizable to match your vision. Schedule a consultation with Zakes to discuss your ceremony.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a href="/weddings/pricing" className="inline-block bg-wedding-gold text-white hover:bg-wedding-gold/90 font-montserrat text-[10px] font-black uppercase tracking-[0.3em] py-4 px-12 rounded transition-all duration-300">
                  View Tiers & Specifications
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-wedding-gold/10 py-16 px-8 bg-wedding-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-12">
            <div>
              <MsocoLogo className="h-10 w-40 mb-8" invert={false} />
              <p className="font-montserrat text-[10px] text-wedding-charcoal/40 uppercase tracking-[0.2em] max-w-md font-bold">
                Durban-based wedding production specialists. A decade of authentic, culturally sensitive storytelling. Heirloom quality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm">
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-wedding-gold">Legacy</p>
                <a href="/weddings" className="block font-inter text-wedding-charcoal/60 hover:text-wedding-gold transition-colors">Portfolio Home</a>
                <a href="/weddings/pricing" className="block font-inter text-wedding-charcoal/60 hover:text-wedding-gold transition-colors">Tiers</a>
              </div>
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-wedding-gold">Contact</p>
                <p className="font-inter text-wedding-charcoal/60">+27 12 345 6789</p>
                <p className="font-inter text-wedding-charcoal/60">info@msocorockers.co.za</p>
              </div>
            </div>
          </div>
          <div className="border-t border-wedding-gold/10 pt-8 text-center">
            <p className="font-montserrat text-[9px] font-bold text-wedding-charcoal/20 uppercase tracking-[0.2em]">
              © 2026 Msoco Rockers Production. Excellence in Heritage.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
