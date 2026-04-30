'use client';

import { motion } from 'framer-motion';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';

const CORPORATE_PACKAGES = [
  {
    name: 'Core Broadcast',
    price: 'R15,000',
    duration: '8 hours technical ops',
    description: 'Essential single-stream broadcast for executive presentations and internal comms.',
    features: [
      '2-Camera 4K Acquisition',
      'Dedicated Streaming Server',
      'Standard PA & Mic Suite',
      'Key Lighting Infrastructure',
      'Live Stream to 1,000 Concurrents',
      'Core Highlight Reel (4K)',
      'Digital Technical Handover',
    ],
  },
  {
    name: 'Advanced Production',
    price: 'R25,000',
    duration: '12 hours production',
    description: 'High-stakes multi-angle production for brand launches and public summits.',
    highlighted: true,
    features: [
      '4-Camera Multi-Angle Ops',
      'Primary & Backup Stream Links',
      'Aerial 4K Cinematography',
      'Line Array Audio Engineering',
      'DMX Controlled Stage Lighting',
      'LED Video Wall Support',
      'Unlimited Viewer Capacity',
      'Extended Cinematic Master (8-10 min)',
      'Behind-The-Lens Narrative',
      'Cloud Archive + Triple Backup',
    ],
  },
  {
    name: 'Global Infrastructure',
    price: 'R40,000',
    duration: '16+ hours unlimited scale',
    description: 'Full-scale technical deployment for international conferences and multi-day exhibitions.',
    features: [
      '6+ Cinema-Grade Camera Setup',
      'Redundant Satellite Uplink',
      'Multi-Drone Technical Ops',
      'Master Sound Engineering Team',
      'Stadium-Scale Lighting Rigs',
      'Custom LED Mapping & Staging',
      'Global CDN Distribution',
      'On-Site Technical Director',
      'Documentary Feature Edit (20+ min)',
      'High-End Color Grading Suite',
      'Full Digital Asset PR Kit',
      'Post-Production Analytics Suite',
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
  const CONTACT_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <div className="flex flex-col min-h-screen bg-corporate-midnight text-white scroll-smooth" data-theme="corporate">
      {/* Navbar */}
      <nav className="fixed w-full flex justify-between items-center p-8 z-[100] glass-corporate border-b border-white/5">
        <div className="flex items-center gap-8">
          <a href="/corporate" className="group flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-corporate-copper transition-all duration-300">
            <span className="w-8 h-px bg-corporate-copper transition-all duration-300 group-hover:w-12" />
            Back to Corporate
          </a>
          <MsocoLogo className="h-10 w-44" invert={true} />
        </div>
        <div className="hidden md:flex space-x-8 text-[9px] font-black uppercase tracking-[0.4em] text-white/40 items-center gap-8">
          <a href="/corporate" className="hover:text-corporate-copper transition-colors">Infrastructure</a>
          <a href="/corporate/services" className="hover:text-corporate-copper transition-colors">Solutions</a>
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
                Technical Investment
              </span>
              <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.75] mb-8 text-white">
                Service <br />
                <span className="text-corporate-copper italic">Specifications.</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/40 max-w-3xl font-light leading-relaxed">
                Precision engineering for Durban&apos;s high-stakes corporate environments. Select your deployment infrastructure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-40 px-8 bg-corporate-midnight">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CORPORATE_PACKAGES.map((pkg, idx) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-lg p-8 transition-all duration-500 glass-corporate ${pkg.highlighted
                      ? 'border border-corporate-copper/50 md:scale-105 shadow-2xl shadow-corporate-copper/10'
                      : 'border border-white/5 hover:border-white/20'
                    }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-corporate-copper text-black px-4 py-1 rounded-full">
                      <span className="font-montserrat text-[10px] font-black uppercase tracking-[0.2em]">
                        Recommended Infrastructure
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-black text-2xl text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="font-black text-4xl text-corporate-copper mb-2">
                      {pkg.price}
                    </p>
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">
                      {pkg.duration}
                    </p>
                    <p className="text-sm text-white/60">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mb-8 border-t border-white/5 pt-6">
                    <p className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-corporate-orange font-black mb-4">
                      Engineering Specs
                    </p>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="text-corporate-copper mt-0.5 text-lg">✓</span>
                          <span className="text-sm text-white/70">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <CoreButton
                    className={`w-full ${pkg.highlighted
                        ? 'bg-corporate-copper text-black hover:bg-corporate-orange'
                        : 'border border-white/10 text-white hover:bg-white/5 hover:border-corporate-copper'
                      }`}
                  >
                    Select Specification
                  </CoreButton>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-40 px-8 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-corporate-orange font-black mb-6">
                Module Upgrades
              </p>
              <h2 className="font-black text-5xl md:text-7xl text-white tracking-tighter">
                Technical <span className="text-corporate-copper italic">Add-ons</span>
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
                  className="glass-corporate border border-white/5 rounded-lg p-6 hover:border-corporate-copper/30 transition-all duration-300"
                >
                  <h4 className="font-black text-lg text-white mb-2">
                    {addon.name}
                  </h4>
                  <p className="font-black text-2xl text-corporate-copper mb-3">
                    {addon.price}
                  </p>
                  <p className="text-sm text-white/40">
                    {addon.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-40 px-8 bg-corporate-midnight">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-corporate-orange font-black mb-6">
                Infrastructure Clarity
              </p>
              <h2 className="font-black text-5xl md:text-6xl text-white tracking-tighter">
                FAQ
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
                  className="border-b border-white/5 pb-8"
                >
                  <h3 className="font-black text-xl text-white mb-4">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
                Secure Your Event
              </p>
              <h2 className="font-black text-5xl md:text-7xl text-white mb-8 tracking-tighter leading-tight">
                Engineering <span className="text-corporate-copper italic">Excellence.</span>
              </h2>
              <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto font-light">
                Contact our technical team to discuss your global infrastructure requirements. Durban-based. Globally scalable.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a href="tel:+27123456789" className="inline-block bg-corporate-copper text-black hover:bg-corporate-orange font-montserrat text-[10px] font-black uppercase tracking-[0.3em] py-4 px-12 rounded transition-all duration-300 shadow-lg shadow-corporate-copper/20">
                  Call +${CONTACT_NUMBER}
                </a>
                <a href="mailto:info@msocorockers.co.za" className="inline-block border border-white/10 text-white hover:bg-white/5 font-montserrat text-[10px] font-black uppercase tracking-[0.3em] py-4 px-12 rounded transition-all duration-300">
                  Email Command
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-16 px-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-12">
            <div>
              <MsocoLogo className="h-10 w-40 mb-8" invert={true} />
              <p className="text-sm text-white/40 max-w-md font-light">
                Durban-based technical production specialists. 260+ corporate productions with 100% on-time delivery. Zero failure architecture.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm">
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-corporate-copper">Infrastructure</p>
                <a href="/corporate" className="block text-white/60 hover:text-corporate-copper transition-colors">Technical Home</a>
                <a href="/corporate/services" className="block text-white/60 hover:text-corporate-copper transition-colors">Solution Matrix</a>
              </div>
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-corporate-copper">Contact</p>
                <p className="text-white/60">+${CONTACT_NUMBER}</p>
                <p className="text-white/60">info@msocorockers.co.za</p>
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
