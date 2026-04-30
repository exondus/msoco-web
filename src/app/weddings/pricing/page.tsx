"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import WeddingsNavbar from '@/components/weddings/WeddingsNavbar';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';
import WeddingComparisonTable from '@/components/weddings/WeddingComparisonTable';
import WeddingPricingTabs from '@/components/weddings/WeddingPricingTabs';
import ScarcityBar from '@/components/weddings/ScarcityBar';
import { DiscountProvider } from '@/lib/discount-context';
import { PRICING_DATA } from './pricingData';

const TABS = [
  { id: 'wedding', label: 'Wedding Only' },
  { id: 'umembeso', label: 'Umembeso Only' },
  { id: 'union', label: '2-Day Union' },
];

const ADDONS = [
  { name: 'Live Streaming (HD)', price: 'R2,500', desc: 'Real-time broadcast to family worldwide' },
  { name: 'Professional Album Design', price: 'R3,000', desc: '50-page premium hardcover heirloom album' },
  { name: 'Additional Photographer', price: 'R2,000/day', desc: 'Recommended for multi-venue ceremonies' },
  { name: 'Extended Hours', price: 'R800/hour', desc: 'Beyond your selected package hours' },
  { name: 'Physical Enlargements', price: 'R1,200', desc: 'High-quality A1 canvas or photo print' },
  { name: 'Pre-Wedding Shoot', price: 'R3,500', desc: '2-hour styled engagement session' },
];

const FAQS = [
  {
    q: 'What if we need more than standard coverage?',
    a: 'All packages can be extended at R800 per additional hour. For multi-day celebrations, we recommend The Union Suites (Dynasty tiers).',
  },
  {
    q: 'Can we combine wedding and traditional ceremonies?',
    a: 'Absolutely. The Union Suites are specifically designed for this, offering a discounted bundle for both Wedding and Umembeso/Traditional ceremonies.',
  },
  {
    q: 'When do we receive our final films and photos?',
    a: 'Initial highlights are delivered within 14 days. Final documentary films and curated galleries typically require 4-6 weeks for meticulous post-production.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We service all of KwaZulu-Natal. Packages include travel up to 50km or 100km (depending on tier). Further travel is calculated at standard rates.',
  },
];

export default function WeddingsPricingPage() {
  const [activeTab, setActiveTab] = useState('wedding');

  const CONTACT_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <DiscountProvider>
      <div className="flex flex-col min-h-screen bg-wedding-bg text-wedding-charcoal font-inter scroll-smooth" data-theme="wedding">
        {/* Scarcity/Discount Bar */}
        <ScarcityBar remainingDates={4} year={2026} />

        {/* Navbar */}
        <WeddingsNavbar isHero={false} />

        <main className="flex-1">
          {/* Hero */}
          <section className="py-20 px-8 bg-wedding-bg">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-1.5 border border-wedding-gold/30 text-wedding-gold text-[10px] font-black uppercase tracking-[0.5em] mb-10 bg-wedding-gold/5">
                  Heritage Tiers
                </span>
                <h1 className="text-6xl md:text-[8rem] font-playfair font-light uppercase tracking-tighter leading-[0.75] mb-8 text-wedding-charcoal">
                  Ceremonial <br />
                  <span className="italic">Specifications.</span>
                </h1>
                <p className="text-lg md:text-2xl text-wedding-charcoal/60 max-w-3xl font-playfair italic font-light">
                  From intimate heirloom documentation to grand multi-day legacy productions. Select your category below to view our standard ceremonial suites.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Tabbed Pricing Section */}
          <section className="py-12 px-8 bg-wedding-bg">
            <div className="max-w-7xl mx-auto">
              <WeddingPricingTabs
                tabs={TABS}
                activeTab={activeTab}
                onChange={setActiveTab}
              />

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <WeddingComparisonTable tiers={PRICING_DATA[activeTab]} />
              </motion.div>
            </div>
          </section>

          {/* Custom Packages Section */}
          <section className="py-32 px-8 bg-wedding-charcoal relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6 block">Bespoke Solutions</span>
                <h2 className="font-playfair text-5xl md:text-7xl text-white mb-8 tracking-tighter leading-tight">
                  Custom <span className="italic font-light">Heirlooms.</span>
                </h2>
                <p className="font-montserrat text-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Your celebration is a unique chapter in your family&apos;s history. We craft bespoke packages that combine specific elements to fit your vision, tradition, and scale.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <CoreButton className="bg-wedding-gold text-black hover:bg-wedding-gold/90 px-10 py-5">
                    Request Bespoke Quote
                  </CoreButton>
                  <CoreButton variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-5">
                    Discuss Your Vision
                  </CoreButton>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Add-ons */}
          <section className="py-40 px-8 bg-wedding-bg">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-24"
              >
                <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6">
                  Optional Enhancements
                </p>
                <h2 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal tracking-tighter">
                  Refine Your <span className="italic font-light">Legacy.</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ADDONS.map((addon, idx) => (
                  <motion.div
                    key={addon.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    className="border border-wedding-gold/10 rounded-lg p-8 hover:border-wedding-gold/40 hover:bg-white transition-all duration-500 group"
                  >
                    <h4 className="font-playfair text-xl text-wedding-charcoal mb-2 group-hover:text-wedding-gold transition-colors">
                      {addon.name}
                    </h4>
                    <p className="font-montserrat text-2xl text-wedding-gold font-black mb-3">
                      {addon.price}
                    </p>
                    <p className="font-montserrat text-xs text-wedding-charcoal/50 leading-relaxed italic">
                      {addon.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-40 px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-24"
              >
                <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6">
                  Common Questions
                </p>
                <h2 className="font-playfair text-5xl md:text-6xl text-wedding-charcoal tracking-tighter">
                  FAQs
                </h2>
              </motion.div>

              <div className="space-y-8">
                {FAQS.map((faq, idx) => (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-200 pb-8"
                  >
                    <h3 className="font-playfair text-xl text-wedding-charcoal mb-4">
                      {faq.q}
                    </h3>
                    <p className="font-montserrat text-sm text-wedding-charcoal/70 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-40 px-8 bg-wedding-charcoal">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6">
                  Ready to Secure Your Dates
                </p>
                <h2 className="font-playfair text-5xl md:text-7xl text-white mb-8 tracking-tighter leading-tight">
                  Let&apos;s Discuss Your <span className="italic font-light">Ceremony.</span>
                </h2>
                <p className="font-montserrat text-white/70 text-lg mb-12 max-w-xl mx-auto">
                  Contact Zakes directly to discuss your specific needs, ceremony type, and customize a package that works for you.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <CoreButton className="bg-wedding-gold text-black hover:bg-wedding-gold/90">
                    Call +${CONTACT_NUMBER}
                  </CoreButton>
                  <CoreButton variant="outline" className="border-white text-white hover:bg-white/10">
                    WhatsApp Inquiry
                  </CoreButton>
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
                  <a href="/weddings/services" className="block font-inter text-wedding-charcoal/60 hover:text-wedding-gold transition-colors">Services</a>
                </div>
                <div className="space-y-4">
                  <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-wedding-gold">Contact</p>
                  <p className="font-inter text-wedding-charcoal/60">+${CONTACT_NUMBER}</p>
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
    </DiscountProvider>
  );
}
