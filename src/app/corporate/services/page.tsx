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
    <div className="flex flex-col min-h-screen bg-white text-black font-inter scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full flex justify-between items-center p-8 z-[100] bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <MsocoLogo className="h-10 w-44" />
        <div className="hidden md:flex space-x-12 text-[9px] font-black uppercase tracking-[0.4em] text-black/30 items-center gap-8">
          <a href="/corporate" className="hover:text-corporate-blue transition-colors">Back to Corporate</a>
          <a href="/gateway" className="hover:text-corporate-blue transition-colors">Change Division</a>
          <CoreButton variant="outline" className="py-2 px-6 border-gray-200 text-black">Get Quote</CoreButton>
        </div>
      </nav>

      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 border-2 border-corporate-blue text-corporate-blue text-[10px] font-black uppercase tracking-[0.5em] mb-10">
                Corporate Services
              </span>
              <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.75] mb-8 text-black">
                Technical <br />
                <span className="text-corporate-blue italic">Excellence.</span>
              </h1>
              <p className="text-lg md:text-2xl text-black/60 max-w-3xl font-inter leading-relaxed">
                From broadcast-quality video to intelligent staging, every service is engineered to amplify your message and deliver measurable impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesGrid services={CORPORATE_SERVICES_GRID} theme="corporate" bgColor="bg-white" columns={4} />

        {/* CTA Section */}
        <section className="py-40 px-8 bg-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-corporate-blue font-black mb-6">
                Ready to Deploy
              </p>
              <h2 className="font-black text-5xl md:text-7xl text-white mb-8 tracking-tighter leading-tight uppercase">
                One Partner. <span className="text-corporate-blue italic">Zero Technical Anxiety.</span>
              </h2>
              <p className="font-inter text-white/70 text-lg mb-12 max-w-xl mx-auto">
                Discuss your event requirements with our technical team. We&apos;ll design a custom solution that fits your vision and budget.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <CoreButton className="bg-corporate-blue text-white hover:bg-corporate-blue/90">
                  Request a Quote
                </CoreButton>
                <CoreButton variant="outline" className="border-white text-white hover:bg-white/10">
                  View Technical Specs
                </CoreButton>
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
              <p className="font-inter text-sm text-black/60 max-w-md">
                Durban-based technical production specialists. 260+ corporate productions with 100% on-time delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm">
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-corporate-blue">Navigation</p>
                <a href="/corporate" className="block font-inter text-black/70 hover:text-corporate-blue transition-colors">Corporate Home</a>
                <a href="/gateway" className="block font-inter text-black/70 hover:text-corporate-blue transition-colors">Weddings</a>
              </div>
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-corporate-blue">Contact</p>
                <p className="font-inter text-black/70">+27 12 345 6789</p>
                <p className="font-inter text-black/70">info@msocorockers.co.za</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 text-center">
            <p className="font-montserrat text-[9px] font-bold text-black/30 uppercase tracking-[0.2em]">
              © 2026 Msoco Rockers Production. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
