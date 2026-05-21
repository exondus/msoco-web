'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';
import { trackPhoneCallClick, trackWhatsAppClick, trackEmailClick } from '@/lib/analytics';

const CONTACT_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export default function CorporateContactPage() {
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
          <a href="/corporate/contact">
            <CoreButton variant="outline" className="py-2 px-6 border-white/10 text-white hover:bg-white/5 hover:border-corporate-copper">Get Quote</CoreButton>
          </a>
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
                Technical Command
              </span>
              <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.75] mb-8 text-white">
                Secure Your <br />
                <span className="text-corporate-copper italic">Backbone.</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/40 max-w-3xl font-light leading-relaxed">
                Contact our technical team to discuss your global infrastructure requirements. Precision engineering for Durban&apos;s high-stakes corporate environments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-20 px-8 bg-corporate-midnight">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Phone Card */}
              <motion.a
                href={`tel:+${CONTACT_NUMBER}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onClick={() => trackPhoneCallClick('corporate_contact_page')}
                data-ph-capture-attribute-cta="corporate-contact-phone"
                className="glass-corporate rounded-2xl p-10 border border-white/5 hover:border-corporate-copper/50 hover:shadow-2xl hover:shadow-corporate-copper/10 transition-all group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-corporate-copper/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-corporate-copper/20 transition-colors">
                  <Phone size={24} className="text-corporate-copper" />
                </div>
                <h3 className="font-black text-2xl text-white mb-2">Call Operations</h3>
                <p className="font-black text-xl text-corporate-copper mb-3">
                  +{CONTACT_NUMBER?.replace(/(\d{2})(\d{2})(\d{3})(\d{4})/, '$1 $2 $3 $4')}
                </p>
                <p className="font-montserrat text-xs text-white/40 uppercase tracking-widest">
                  Direct Line
                </p>
              </motion.a>

              {/* WhatsApp Card */}
              <motion.a
                href={`https://wa.me/${CONTACT_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20your%20corporate%20technical%20production%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onClick={() => trackWhatsAppClick('corporate_contact_page')}
                data-ph-capture-attribute-cta="corporate-contact-whatsapp"
                className="bg-[#050505] rounded-2xl p-10 border border-white/5 hover:border-corporate-copper/50 transition-all group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-corporate-copper/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-corporate-copper/20 transition-colors">
                  <MessageCircle size={24} className="text-corporate-copper" />
                </div>
                <h3 className="font-black text-2xl text-white mb-2">WhatsApp Us</h3>
                <p className="font-black text-xl text-white/80 mb-3">
                  Instant Support
                </p>
                <p className="font-montserrat text-xs text-white/40 uppercase tracking-widest">
                  Quick response guaranteed
                </p>
              </motion.a>
            </div>

            {/* Email + Location Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.a
                href="mailto:info@msocorockers.co.za"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onClick={() => trackEmailClick('corporate_contact_page')}
                data-ph-capture-attribute-cta="corporate-contact-email"
                className="glass-corporate rounded-2xl p-8 border border-white/5 hover:border-corporate-copper/50 transition-all group flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-corporate-copper/10 flex items-center justify-center flex-shrink-0 group-hover:bg-corporate-copper/20 transition-colors">
                  <Mail size={20} className="text-corporate-copper" />
                </div>
                <div>
                  <h4 className="font-black text-lg text-white mb-1">Email Command</h4>
                  <p className="font-inter text-sm text-white/60">info@msocorockers.co.za</p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-corporate rounded-2xl p-8 border border-white/5 flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-corporate-copper/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-corporate-copper" />
                </div>
                <div>
                  <h4 className="font-black text-lg text-white mb-1">Headquarters</h4>
                  <p className="font-inter text-sm text-white/60">30 Impisi Grove, Ntuzuma, Durban, 4359, KZN</p>
                </div>
              </motion.div>
            </div>

            {/* Promise Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#050505] border border-white/5 rounded-2xl p-10 md:p-14 text-center"
            >
              <h3 className="font-black text-3xl text-white mb-8">Service Guarantee</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {[
                  'Initial response within 60 minutes',
                  'Comprehensive technical consultation',
                  'Customized infrastructure quotes',
                  'Nationwide deployment capabilities',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-left">
                    <CheckCircle size={14} className="text-corporate-copper mt-0.5 flex-shrink-0" />
                    <span className="font-inter text-xs text-white/70">{item}</span>
                  </div>
                ))}
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
                Durban-based technical production specialists. 260+ corporate productions with 100% on-time delivery. Zero failure architecture.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm">
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-corporate-copper">Infrastructure</p>
                <a href="/corporate" className="block text-white/60 hover:text-corporate-copper transition-colors">Technical Home</a>
              </div>
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-corporate-copper">Contact</p>
                <p className="text-white/60">+{CONTACT_NUMBER}</p>
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
