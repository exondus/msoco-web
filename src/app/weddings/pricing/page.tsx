'use client';

import { motion } from 'framer-motion';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';

const WEDDING_PACKAGES = [
  {
    name: 'The Essentials',
    price: 'R8,500',
    duration: '6 hours coverage',
    description: 'Intimate ceremonies with professional documentation',
    features: [
      '1 videographer + photographer',
      '4K video coverage',
      '150+ edited photos',
      'Same-day highlight reel (2-3 minutes)',
      'Digital gallery access (lifetime)',
      'Standard color grading',
      'Digital delivery only',
    ],
  },
  {
    name: 'The Foundation',
    price: 'R12,500',
    duration: '8 hours coverage',
    description: 'Perfect for small to medium ceremonies and celebrations',
    features: [
      '2 videographers + photographer',
      '4K cinema-grade video',
      '250+ edited photos',
      'Highlight reel (3-5 minutes)',
      'Digital gallery access (lifetime)',
      'Professional color grading',
      'Digital + USB delivery',
    ],
  },
  {
    name: 'The Signature',
    price: 'R18,000',
    duration: '10 hours coverage',
    description: 'Comprehensive two-part ceremony coverage (Umembeso + Wedding)',
    highlighted: true,
    features: [
      '2 videographers + 2 photographers',
      '4K multi-angle video',
      '350+ curated photos',
      'Cinematic highlight reel (5-8 minutes)',
      'Aerial drone footage',
      'Premium audio mixing',
      'Professional color grading',
      'Lifetime digital access',
      'Digital + USB delivery',
    ],
  },
  {
    name: 'The Premium',
    price: 'R22,000',
    duration: '12 hours coverage',
    description: 'Ultimate comprehensive production for multi-day celebrations',
    features: [
      '3 videographers + 2 photographers',
      '4K cinema camera suite',
      '400+ curated photos',
      'Extended cinematic film (8-10 minutes)',
      'Drone cinematography included',
      'Premium audio mixing & editing',
      'Custom color grading & sound design',
      'Professional album design option',
      'Behind-the-scenes content',
      'Digital + USB delivery',
      'Lifetime digital gallery access',
    ],
  },
  {
    name: 'The Presidential',
    price: 'R28,000',
    duration: '16 hours unlimited',
    description: 'Full production suite for grand multi-venue celebrations',
    features: [
      '4 videographers + 3 photographers',
      '4K + cinema-grade camera suite',
      '500+ professional photos',
      'Documentary-style film (12-15 minutes)',
      'Multiple drone operators',
      'Live streaming to family worldwide',
      'Professional sound & lighting team',
      'Professional album design & printing',
      'Multi-day professional editing',
      'Behind-the-scenes documentary',
      'Digital + USB + physical delivery',
      'Lifetime digital gallery access',
    ],
  },
];

const UNCOMMON_PACKAGES = [
  {
    name: 'Umembeso Only',
    price: 'R9,000',
    duration: '4-6 hours',
    description: 'Dedicated coverage of traditional Zulu ceremony',
    features: [
      '2 videographers',
      '1 dedicated photographer',
      '200+ photos',
      'Ceremony-focused highlight reel',
      'Digital delivery + USB',
      'Lifetime access',
    ],
  },
  {
    name: 'White Wedding Only',
    price: 'R11,000',
    duration: '6-8 hours',
    description: 'Complete coverage of modern white wedding',
    features: [
      '2 videographers',
      '1 dedicated photographer',
      '250+ curated photos',
      'Highlight reel (4-6 minutes)',
      'Drone footage option',
      'Digital + USB delivery',
    ],
  },
  {
    name: 'Engagement Sessions',
    price: 'R3,500',
    duration: '3-4 hours',
    description: 'Styled pre-wedding photography and videography',
    features: [
      '1 videographer + 1 photographer',
      '4K video reel (2-3 minutes)',
      '100+ edited photos',
      'Location scouting included',
      'Styled shoot direction',
      'Digital gallery',
    ],
  },
  {
    name: 'Reception Only',
    price: 'R6,500',
    duration: '4-6 hours',
    description: 'Dedicated coverage of reception and celebration',
    features: [
      '1 videographer + photographer',
      'Reception highlight film',
      '150+ photos',
      'Dancing & entertainment focus',
      'First dance cinematic capture',
      'Digital delivery',
    ],
  },
  {
    name: 'Highlight Package',
    price: 'R5,500',
    duration: 'Full coverage',
    description: 'Focused on key moments with fast turnaround',
    features: [
      'Single videographer',
      'Single photographer',
      'Same-day highlight reel',
      '100+ best photos',
      'Edited within 24 hours',
      'Digital + social media clips',
    ],
  },
  {
    name: 'Multi-Day Pass',
    price: 'Contact for pricing',
    duration: '2-3 days',
    description: 'Extended coverage across multiple celebration days',
    features: [
      'Full production team',
      'Each day professionally covered',
      'Combined narrative film',
      'Extended photo curation',
      'Day-by-day highlights',
      'Premium delivery package',
    ],
  },
];

const PACKAGES = [
  ...WEDDING_PACKAGES,
  // Custom package handled separately below
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
                Comprehensive <br />
                <span className="italic">Packages.</span>
              </h1>
              <p className="text-lg md:text-2xl text-wedding-charcoal/60 max-w-3xl font-playfair italic font-light">
                From intimate ceremonies to grand celebrations. Every package includes professional production, comprehensive editing, and lifetime digital access.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Wedding & Ceremonial Packages */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black">Main Packages</span>
              <h2 className="font-playfair text-6xl md:text-[8rem] text-wedding-charcoal tracking-tighter mb-6">Wedding & Ceremonial</h2>
              <p className="font-montserrat text-sm text-wedding-charcoal/60 max-w-2xl mx-auto">Professional coverage for traditional, modern, or hybrid ceremonies</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {WEDDING_PACKAGES.map((pkg, idx) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className={`relative rounded-lg p-6 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'border-2 border-wedding-gold bg-wedding-gold/5 shadow-2xl lg:col-span-2 lg:row-span-2 flex flex-col justify-between'
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

                  <div className={pkg.highlighted ? 'mb-0' : 'mb-6'}>
                    <h3 className={`font-playfair text-wedding-charcoal mb-2 ${pkg.highlighted ? 'text-3xl' : 'text-xl'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`font-montserrat font-black text-wedding-gold mb-2 ${pkg.highlighted ? 'text-5xl' : 'text-3xl'}`}>
                      {pkg.price}
                    </p>
                    <p className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-wedding-charcoal/60 mb-3">
                      {pkg.duration}
                    </p>
                    <p className={`font-montserrat text-wedding-charcoal/70 italic ${pkg.highlighted ? 'text-base' : 'text-xs'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  <div className={pkg.highlighted ? 'mb-8 border-t border-wedding-gold/20 pt-6 mt-8' : 'mb-6'}>
                    <ul className={`space-y-2 ${pkg.highlighted ? 'mb-8' : 'mb-4'}`}>
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="text-wedding-gold mt-0.5">✓</span>
                          <span className={`font-montserrat text-wedding-charcoal/70 ${pkg.highlighted ? 'text-sm' : 'text-xs'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <CoreButton
                    className={`w-full ${
                      pkg.highlighted
                        ? 'bg-wedding-gold text-white hover:bg-wedding-gold/90'
                        : 'border-2 border-wedding-gold text-wedding-gold hover:bg-wedding-gold/10'
                    }`}
                  >
                    Book Now
                  </CoreButton>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Uncommon Packages */}
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black">Specialized Offerings</span>
              <h2 className="font-playfair text-6xl md:text-[8rem] text-wedding-charcoal tracking-tighter">Uncommon Packages</h2>
              <p className="font-montserrat text-sm text-wedding-charcoal/60 max-w-2xl mx-auto mt-6">Tailored solutions for specific moments and unique celebration needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {UNCOMMON_PACKAGES.map((pkg, idx) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="border border-gray-300 rounded-lg p-6 bg-white hover:border-wedding-gold/50 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-playfair text-xl text-wedding-charcoal mb-2">
                    {pkg.name}
                  </h3>
                  <p className="font-montserrat text-3xl text-wedding-gold font-black mb-2">
                    {pkg.price}
                  </p>
                  <p className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-wedding-charcoal/60 mb-4">
                    {pkg.duration}
                  </p>
                  <p className="font-montserrat text-sm text-wedding-charcoal/70 italic mb-6">
                    {pkg.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-wedding-gold mt-0.5 text-sm">✓</span>
                        <span className="font-montserrat text-xs text-wedding-charcoal/70">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <CoreButton
                    variant="outline"
                    className="w-full border-2 border-wedding-gold text-wedding-gold hover:bg-wedding-gold/10"
                  >
                    Inquire
                  </CoreButton>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Packages Section */}
        <section className="py-20 px-8 bg-wedding-charcoal">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6 block">Bespoke Solutions</span>
              <h2 className="font-playfair text-5xl md:text-7xl text-white mb-8 tracking-tighter leading-tight">
                Custom <span className="italic font-light">Packages</span>
              </h2>
              <p className="font-montserrat text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Your celebration is unique. We craft custom packages that combine elements from our offerings and beyond—tailored specifically to your vision, budget, and ceremony requirements.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <CoreButton className="bg-wedding-gold text-black hover:bg-wedding-gold/90">
                  Request Custom Quote
                </CoreButton>
                <CoreButton variant="outline" className="border-white text-white hover:bg-white/10">
                  Discuss Your Vision
                </CoreButton>
              </div>
            </motion.div>
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
