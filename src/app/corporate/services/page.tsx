'use client';

import { motion } from 'framer-motion';
import ServicesGrid from '@/components/shared/ServicesGrid';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';

const CORPORATE_SERVICES_GRID = [
  { id: 'studio-photo', number: '01', title: 'Studio Photography', description: 'Executive portraits, product photography, and branded content', ctaText: 'View Packages' },
  { id: 'studio-video', number: '02', title: 'Studio Videography', description: 'Commercial production, corporate interviews, and brand films', ctaText: 'View Packages' },
  { id: 'live-stream', number: '03', title: 'Live Streaming', description: 'Multi-camera broadcast to unlimited global viewers', ctaText: 'View Packages' },
  { id: 'drones', number: '04', title: 'Flying Drones', description: 'Aerial cinematography for venues, properties, and events', ctaText: 'View Packages' },
  { id: 'sound', number: '05', title: 'PA & Sound System', description: 'Professional audio engineering and conference management', ctaText: 'View Packages' },
  { id: 'projection', number: '06', title: 'LED Screens & Projections', description: 'Large-scale video walls and projection mapping', ctaText: 'View Packages' },
  { id: 'lighting', number: '07', title: 'Stage & Lighting', description: 'Intelligent lighting rigs and custom stage design', ctaText: 'View Packages' },
  { id: 'product-photo', number: '08', title: 'Product Photography', description: 'Detail photography and commercial product imaging', ctaText: 'View Packages' },
];

export default function CorporateServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-corporate-midnight text-white font-inter scroll-smooth" data-theme="corporate">
      {/* Navbar */}
      <nav className="fixed w-full flex justify-between items-center p-8 z-[100] glass-corporate border-b border-white/5">
        <div className="flex items-center gap-8">
          <a href="/corporate" className="group flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-corporate-copper transition-all duration-300">
            <span className="w-8 h-px bg-corporate-copper transition-all duration-300 group-hover:w-12" />
            Back to Corporate
          </a>
          <MsocoLogo className="h-10 w-44" invert={true} />
        </div>
        <div className="hidden md:flex space-x-12 text-[9px] font-black uppercase tracking-[0.4em] text-white/40 items-center gap-8">
          <a href="/corporate" className="hover:text-corporate-copper transition-colors">Infrastructure</a>
          <a href="/gateway" className="hover:text-corporate-copper transition-colors">Change Division</a>
          <CoreButton variant="outline" className="py-2 px-6 border-white/10 text-white hover:bg-white/5 hover:border-corporate-copper">Get Quote</CoreButton>
        </div>
      </nav>

      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-20 px-8 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 border border-corporate-copper/30 text-corporate-copper text-[10px] font-black uppercase tracking-[0.5em] mb-10 bg-corporate-copper/5">
                Technical Solutions
              </span>
              <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.75] mb-8 text-white">
                Technical <br />
                <span className="text-corporate-copper italic">Excellence.</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/40 max-w-3xl font-inter leading-relaxed">
                From redundant broadcast infrastructure to intelligent staging, every module is engineered for zero-failure performance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesGrid services={CORPORATE_SERVICES_GRID} theme="corporate" bgColor="bg-corporate-midnight" columns={4} ctaLink="/corporate/pricing" />

        {/* CTA Section */}
        <section className="py-40 px-8 bg-[#050505] relative overflow-hidden">
          <div className="absolute inset-0 bg-corporate-copper/5 blur-[120px] rounded-full translate-y-1/2" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-corporate-orange font-black mb-6">
                Deploy Infrastructure
              </p>
              <h2 className="font-black text-5xl md:text-7xl text-white mb-8 tracking-tighter leading-tight uppercase">
                Secure Your <span className="text-corporate-copper italic">Backbone</span>
              </h2>
              <p className="font-inter text-white/40 text-lg mb-12 max-w-xl mx-auto font-light">
                Our technical team designs custom infrastructures that guarantee reliability for Durban&apos;s most critical productions.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a href="/corporate/pricing" className="inline-block bg-corporate-copper text-black hover:bg-corporate-orange font-montserrat text-[10px] font-black uppercase tracking-[0.3em] py-4 px-12 rounded transition-all duration-300 shadow-lg shadow-corporate-copper/20">
                  Review Specifications
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 px-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-12">
            <div>
              <MsocoLogo className="h-10 w-40 mb-8" invert={true} />
              <p className="font-inter text-sm text-white/40 max-w-md font-light">
                Durban-based technical production specialists. 260+ corporate productions with 100% on-time delivery. Zero failure engineering.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm">
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-corporate-copper">Infrastructure</p>
                <a href="/corporate" className="block font-inter text-white/60 hover:text-corporate-copper transition-colors">Technical Home</a>
                <a href="/corporate/pricing" className="block font-inter text-white/60 hover:text-corporate-copper transition-colors">Specifications</a>
              </div>
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-corporate-copper">Contact</p>
                <p className="font-inter text-white/60">+27 12 345 6789</p>
                <p className="font-inter text-white/60">info@msocorockers.co.za</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center">
            <p className="font-montserrat text-[9px] font-bold text-white/10 uppercase tracking-[0.2em]">
              © 2026 Msoco Rockers Production. Technical Integrity Guaranteed.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
