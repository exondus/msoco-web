'use client';

import { motion } from 'framer-motion';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';

const CORPORATE_PACKAGES = [
  {
    name: 'Standard',
    price: 'R15,000',
    duration: '8 hours coverage',
    description: 'Single-day corporate event with broadcast quality',
    features: [
      '2 cameras + livestream setup',
      '4K broadcast video',
      'PA system & microphone management',
      'Professional lighting package',
      'Live stream to 1,000+ viewers',
      'Highlight reel (3-5 minutes)',
      'Digital delivery + USB',
    ],
  },
  {
    name: 'Professional',
    price: 'R25,000',
    duration: '12 hours coverage',
    description: 'Multi-angle production with drone and advanced staging',
    highlighted: true,
    features: [
      '3-4 cameras + livestream',
      '4K multi-angle video',
      'Drone aerial cinematography',
      'Professional PA + line array audio',
      'Intelligent lighting design',
      'LED video walls available',
      'Live stream unlimited viewers',
      'Extended cinematic edit (8-10 min)',
      'Behind-the-scenes content',
      'Digital + USB + cloud backup',
    ],
  },
  {
    name: 'Enterprise',
    price: 'R40,000',
    duration: '16+ hours unlimited',
    description: 'Full production suite for grand conferences and exhibitions',
    features: [
      '5+ camera setup with multi-angle coverage',
      '4K cinema-grade production',
      'Multi-drone aerial ops',
      'Professional sound engineering',
      'Full-scale lighting rigs (DMX controlled)',
      'LED video walls & projection mapping',
      'Unlimited viewer livestream',
      'Professional production team on-site',
      'Documentary-style edit (15-20 min)',
      'Multi-day editing & color grading',
      'Digital + physical + cloud delivery',
      'Post-event analytics & reports',
    ],
  },
];

const ADDONS = [
  { name: 'Drone Package', price: 'R5,000', desc: 'Aerial cinematography with licensed operators' },
  { name: 'Extended Livestream', price: 'R3,000', desc: 'Multi-platform broadcast (YouTube, Facebook, etc)' },
  { name: 'Additional Photographer', price: 'R2,000/day', desc: 'Dedicated still photography team' },
  { name: 'Professional Lighting', price: 'R4,000', desc: 'Intelligent lighting rig for stage/venue' },
  { name: 'LED Video Wall Rental', price: 'R6,000', desc: '2-4m display for presentations' },
  { name: 'Audio Post-Production', price: 'R2,500', desc: 'Professional mixing and mastering' },
];

const FAQS = [
  {
    q: 'Can you handle live events with 5,000+ attendees?',
    a: 'Absolutely. Our Enterprise package is designed for large-scale conferences, exhibitions, and corporate galas. We manage multi-camera setups, professional audio for large venues, and unlimited-viewer livestreams.',
  },
  {
    q: 'Do you offer same-day highlight reels?',
    a: 'Yes. All packages include edited content, with same-day highlights available on request (Premium package). Enterprise includes extended documentary-style edits with 4-6 week turnaround.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We service all of KwaZulu-Natal and South Africa. Travel costs apply for venues beyond Durban (R25/km return journey). We regularly travel for national corporate events.',
  },
  {
    q: 'Can packages be customized?',
    a: 'Yes. Every event is unique. Contact us to discuss custom bundles combining livestream, drones, lighting design, and more to fit your specific vision and budget.',
  },
  {
    q: 'Do you provide technical support on the day?',
    a: 'Yes. All packages include on-site technical director and production team. We manage setup, troubleshooting, and real-time adjustments throughout your event.',
  },
  {
    q: 'How long until we receive final files?',
    a: 'Standard: 1 week. Professional: 2 weeks. Enterprise: 4-6 weeks for full documentary edit. All files delivered in multiple formats for various uses.',
  },
];

export default function CorporatePricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full flex justify-between items-center p-8 z-[100] bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <MsocoLogo className="h-10 w-44" />
        <div className="hidden md:flex space-x-8 text-[9px] font-black uppercase tracking-[0.4em] text-black/30 items-center gap-8">
          <a href="/corporate" className="hover:text-corporate-blue transition-colors">Back to Corporate</a>
          <a href="/corporate/services" className="hover:text-corporate-blue transition-colors">Services</a>
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
                Corporate Pricing
              </span>
              <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.75] mb-8 text-black">
                Technical <br />
                <span className="italic">Investment.</span>
              </h1>
              <p className="text-lg md:text-2xl text-black/60 max-w-3xl font-light leading-relaxed">
                Three comprehensive packages for corporate events, conferences, and live broadcasts. All include professional production, on-site technical direction, and comprehensive editing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-40 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CORPORATE_PACKAGES.map((pkg, idx) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-lg p-8 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'border-2 border-corporate-blue bg-corporate-blue/5 md:scale-105 shadow-2xl'
                      : 'border-2 border-gray-200 hover:border-corporate-blue/50'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-corporate-blue text-white px-4 py-1 rounded-full">
                      <span className="font-montserrat text-[10px] font-black uppercase tracking-[0.2em]">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-black text-2xl text-black mb-2">
                      {pkg.name}
                    </h3>
                    <p className="font-black text-4xl text-corporate-blue mb-2">
                      {pkg.price}
                    </p>
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-black/60 mb-4">
                      {pkg.duration}
                    </p>
                    <p className="text-sm text-black/70">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mb-8 border-t border-corporate-blue/20 pt-6">
                    <p className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-corporate-blue font-black mb-4">
                      Included
                    </p>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="text-corporate-blue mt-0.5 text-lg">✓</span>
                          <span className="text-sm text-black/70">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <CoreButton
                    className={`w-full ${
                      pkg.highlighted
                        ? 'bg-corporate-blue text-white hover:bg-corporate-blue/90'
                        : 'border-2 border-corporate-blue text-corporate-blue hover:bg-corporate-blue/10'
                    }`}
                  >
                    Get Quote
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
              <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-corporate-blue font-black mb-6">
                Optional Additions
              </p>
              <h2 className="font-black text-5xl md:text-7xl text-black tracking-tighter">
                Enhance Your <span className="italic">Package</span>
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
                  className="border border-gray-200 rounded-lg p-6 hover:border-corporate-blue/50 hover:bg-white transition-all duration-300"
                >
                  <h4 className="font-black text-lg text-black mb-2">
                    {addon.name}
                  </h4>
                  <p className="font-black text-2xl text-corporate-blue mb-3">
                    {addon.price}
                  </p>
                  <p className="text-sm text-black/60">
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
              <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-corporate-blue font-black mb-6">
                Common Questions
              </p>
              <h2 className="font-black text-5xl md:text-6xl text-black tracking-tighter">
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
                  <h3 className="font-black text-xl text-black mb-4">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-40 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-corporate-blue font-black mb-6">
                Ready to Plan Your Event
              </p>
              <h2 className="font-black text-5xl md:text-7xl text-white mb-8 tracking-tighter leading-tight">
                Let&apos;s Discuss Your <span className="text-corporate-blue italic">Requirements.</span>
              </h2>
              <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto">
                Contact our technical team to discuss your corporate event, conference, or live broadcast needs.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a href="tel:+27123456789" className="inline-block bg-corporate-blue text-white hover:bg-corporate-blue/90 font-montserrat text-[10px] font-black uppercase tracking-[0.3em] py-4 px-12 rounded transition-all duration-300">
                  Call +27 12 345 6789
                </a>
                <a href="mailto:info@msocorockers.co.za" className="inline-block border-2 border-white text-white hover:bg-white/10 font-montserrat text-[10px] font-black uppercase tracking-[0.3em] py-4 px-12 rounded transition-all duration-300">
                  Email Us
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
              <p className="text-sm text-black/60 max-w-md">
                Durban-based technical production specialists. 260+ corporate productions with 100% on-time delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm">
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-corporate-blue">Navigation</p>
                <a href="/corporate" className="block text-black/70 hover:text-corporate-blue transition-colors">Corporate Home</a>
                <a href="/corporate/services" className="block text-black/70 hover:text-corporate-blue transition-colors">Services</a>
              </div>
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-corporate-blue">Contact</p>
                <p className="text-black/70">+27 12 345 6789</p>
                <p className="text-black/70">info@msocorockers.co.za</p>
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
