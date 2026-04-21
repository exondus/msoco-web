'use client';

import { motion } from 'framer-motion';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';

const PACKAGES = [
  {
    name: 'The Foundation',
    price: 'R12,500',
    duration: '8 hours coverage',
    description: 'Perfect for intimate ceremonies and smaller celebrations',
    features: [
      '2 videographers',
      '4K cinema-grade video',
      '200+ edited photos',
      'Same-day highlight reel (3-5 minutes)',
      'Digital gallery access (lifetime)',
      'Standard color grading',
      'Digital delivery only',
    ],
    notIncluded: [
      'Drone coverage',
      'Live streaming',
      'Album design',
      'USB delivery',
    ],
  },
  {
    name: 'The Signature',
    price: 'R22,000',
    duration: '12 hours coverage',
    description: 'Our most popular package for comprehensive ceremony coverage',
    highlighted: true,
    features: [
      '3 videographers + drone operator',
      '4K multi-angle camera coverage',
      '400+ curated and edited photos',
      'Cinematic highlight reel (8-10 minutes)',
      'Aerial drone cinematography',
      'Premium audio mixing & editing',
      'Custom color grading',
      'Digital + USB delivery',
      'Digital gallery access (lifetime)',
    ],
    notIncluded: [
      'Live streaming',
      'Professional album design',
      'Multi-day editing',
    ],
  },
  {
    name: 'The Legacy',
    price: 'Custom Pricing',
    duration: 'Full-day + extended post-production',
    description: 'Ultimate production for the most important celebration',
    features: [
      'Full production team (3-4 videographers)',
      '4K + cinema camera suite',
      'Unlimited total hours of coverage',
      'Documentary-style feature film (20-30 minutes)',
      'Drone cinematography included',
      'Multi-day professional editing',
      'Color grading & sound design',
      'Professional album design & printing',
      'Live streaming option available',
      'Digital + USB delivery',
      'Lifetime digital gallery access',
      'Behind-the-scenes content',
    ],
    notIncluded: [],
  },
];

const ADDONS = [
  { name: 'Live Streaming (HD)', price: 'R2,500', desc: 'Real-time broadcast to family worldwide' },
  { name: 'Drone Coverage (additional)', price: 'R1,500', desc: 'For Foundation packages only' },
  { name: 'Professional Album Design', price: 'R3,000', desc: '50-page hardcover album' },
  { name: 'Additional Photographer', price: 'R2,000/day', desc: 'For larger multi-venue ceremonies' },
  { name: 'Extended Hours', price: 'R500/hour', desc: 'Beyond your package hours' },
  { name: 'Printed Copies (10)', price: 'R800', desc: 'High-quality photo prints' },
];

const FAQS = [
  {
    q: 'What if we need more than 8 hours coverage?',
    a: 'All packages allow for extension at R500 per additional hour. Or upgrade to The Signature (12 hours) or The Legacy (full-day unlimited).',
  },
  {
    q: 'Can we combine wedding and traditional ceremony?',
    a: 'Absolutely. If you have both Umembeso and White Wedding, we recommend The Signature or The Legacy for comprehensive coverage of both ceremonies.',
  },
  {
    q: 'When do we receive the final gallery and video?',
    a: 'Initial delivery: 2 weeks for The Foundation, 3-4 weeks for The Signature. The Legacy requires 4-6 weeks for documentary-style editing. All files are provided in full resolution.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We service all of KwaZulu-Natal. Travel costs apply for venues beyond Durban (calculated at R20/km return journey).',
  },
  {
    q: 'Can packages be customized?',
    a: 'Yes. Every couple is unique. Contact us to discuss custom options that fit your specific needs and budget.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'We require 50% deposit to secure your date, with the balance due one week before the ceremony. Payment plans available by request.',
  },
];

export default function WeddingsPricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full flex justify-between items-center p-8 z-[100] bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <MsocoLogo className="h-10 w-44" />
        <div className="hidden md:flex space-x-8 text-[9px] font-black uppercase tracking-[0.4em] text-wedding-charcoal/60 items-center gap-8">
          <a href="/weddings" className="hover:text-wedding-gold transition-colors">Back to Weddings</a>
          <a href="/weddings/services" className="hover:text-wedding-gold transition-colors">Services</a>
          <CoreButton variant="outline" className="py-2 px-6 border-wedding-gold text-wedding-gold">Inquire</CoreButton>
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
                Wedding Pricing
              </span>
              <h1 className="text-6xl md:text-[8rem] font-playfair font-light uppercase tracking-tighter leading-[0.75] mb-8 text-wedding-charcoal">
                Transparent <br />
                <span className="italic">Pricing.</span>
              </h1>
              <p className="text-lg md:text-2xl text-wedding-charcoal/60 max-w-3xl font-playfair italic font-light">
                Three comprehensive packages designed for different ceremony scales. All include professional production, comprehensive editing, and lifetime digital access.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-40 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PACKAGES.map((pkg, idx) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-lg p-8 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'border-2 border-wedding-gold bg-wedding-gold/5 md:scale-105 shadow-2xl'
                      : 'border-2 border-gray-200 hover:border-wedding-gold/50'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-wedding-gold text-white px-4 py-1 rounded-full">
                      <span className="font-montserrat text-[10px] font-black uppercase tracking-[0.2em]">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-playfair text-2xl text-wedding-charcoal mb-2">
                      {pkg.name}
                    </h3>
                    <p className="font-montserrat text-4xl text-wedding-gold font-black mb-2">
                      {pkg.price}
                    </p>
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-wedding-charcoal/60 mb-4">
                      {pkg.duration}
                    </p>
                    <p className="font-montserrat text-sm text-wedding-charcoal/70 italic">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mb-8 border-t border-wedding-gold/20 pt-6">
                    <p className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-wedding-gold font-black mb-4">
                      Included
                    </p>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="text-wedding-gold mt-0.5 text-lg">✓</span>
                          <span className="font-montserrat text-sm text-wedding-charcoal/70">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {pkg.notIncluded.length > 0 && (
                      <>
                        <p className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-wedding-charcoal/40 font-black mb-4">
                          Not Included
                        </p>
                        <ul className="space-y-2">
                          {pkg.notIncluded.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span className="text-gray-300 mt-0.5">−</span>
                              <span className="font-montserrat text-sm text-wedding-charcoal/40">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <CoreButton
                    className={`w-full ${
                      pkg.highlighted
                        ? 'bg-wedding-gold text-white hover:bg-wedding-gold/90'
                        : 'border-2 border-wedding-gold text-wedding-gold hover:bg-wedding-gold/10'
                    }`}
                  >
                    {pkg.price === 'Custom Pricing' ? 'Request Custom Quote' : 'Book Now'}
                  </CoreButton>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-40 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6">
                Optional Additions
              </p>
              <h2 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal tracking-tighter">
                Enhance Your <span className="italic font-light">Package</span>
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
                  className="border border-gray-200 rounded-lg p-6 hover:border-wedding-gold/50 hover:bg-white transition-all duration-300"
                >
                  <h4 className="font-playfair text-lg text-wedding-charcoal mb-2">
                    {addon.name}
                  </h4>
                  <p className="font-montserrat text-2xl text-wedding-gold font-black mb-3">
                    {addon.price}
                  </p>
                  <p className="font-montserrat text-sm text-wedding-charcoal/60">
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
                  Call +27 12 345 6789
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
                <a href="/weddings/services" className="block font-montserrat text-wedding-charcoal/70 hover:text-wedding-gold transition-colors">Services</a>
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
