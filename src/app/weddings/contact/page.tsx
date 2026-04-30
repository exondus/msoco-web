'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import WeddingsNavbar from '@/components/weddings/WeddingsNavbar';
import ScarcityBar from '@/components/weddings/ScarcityBar';
import MsocoLogo from '@/components/ui/MsocoLogo';
import { DiscountProvider } from '@/lib/discount-context';

const CONTACT_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export default function ContactPage() {
  return (
    <DiscountProvider>
      <div className="flex flex-col min-h-screen bg-wedding-bg text-wedding-charcoal font-inter scroll-smooth" data-theme="wedding">
        <ScarcityBar remainingDates={4} year={2026} />
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
                  Get in Touch
                </span>
                <h1 className="text-6xl md:text-[8rem] font-playfair font-light uppercase tracking-tighter leading-[0.75] mb-8 text-wedding-charcoal">
                  Begin Your <br />
                  <span className="italic">Legacy.</span>
                </h1>
                <p className="text-lg md:text-2xl text-wedding-charcoal/60 max-w-3xl font-playfair italic font-light">
                  Contact Zakes directly to discuss your ceremony. Personal responses within 24 hours.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Cards */}
          <section className="py-20 px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Phone Card */}
                <motion.a
                  href={`tel:+${CONTACT_NUMBER}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-2xl p-10 border border-wedding-gold/20 hover:border-wedding-gold/50 hover:shadow-lg transition-all group text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-wedding-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-wedding-gold/20 transition-colors">
                    <Phone size={24} className="text-wedding-gold" />
                  </div>
                  <h3 className="font-playfair text-2xl text-wedding-charcoal mb-2">Call Zakes</h3>
                  <p className="font-montserrat text-lg text-wedding-charcoal/80 font-medium mb-3">
                    +{CONTACT_NUMBER?.replace(/(\d{2})(\d{2})(\d{3})(\d{4})/, '$1 $2 $3 $4')}
                  </p>
                  <p className="font-montserrat text-xs text-wedding-charcoal/40 uppercase tracking-widest">
                    Tap to call directly
                  </p>
                </motion.a>

                {/* WhatsApp Card */}
                <motion.a
                  href={`https://wa.me/${CONTACT_NUMBER}?text=Hi%20Zakes%2C%20I%27m%20interested%20in%20your%20wedding%20production%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-green-600 rounded-2xl p-10 hover:bg-green-700 transition-all group text-center text-white"
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl mb-2">WhatsApp Zakes</h3>
                  <p className="font-montserrat text-lg font-medium mb-3 text-white/90">
                    Message us anytime
                  </p>
                  <p className="font-montserrat text-xs text-white/60 uppercase tracking-widest">
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
                  className="bg-white rounded-2xl p-8 border border-wedding-gold/20 hover:border-wedding-gold/50 transition-all group flex items-center gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-wedding-gold/20 transition-colors">
                    <Mail size={20} className="text-wedding-gold" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-wedding-charcoal mb-1">Email Us</h4>
                    <p className="font-montserrat text-sm text-wedding-charcoal/60">info@msocorockers.co.za</p>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-8 border border-wedding-gold/20 flex items-center gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-wedding-gold" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-wedding-charcoal mb-1">Location</h4>
                    <p className="font-montserrat text-sm text-wedding-charcoal/60">F30 Impisi Grove, Ntuzuma, Durban, 4359, KwaZulu-Natal</p>
                  </div>
                </motion.div>
              </div>

              {/* Promise Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-wedding-charcoal rounded-2xl p-10 md:p-14 text-center"
              >
                <h3 className="font-playfair text-3xl text-white mb-8">Our Promise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {[
                    'Personal response from Zakes within 24 hours',
                    'Free initial consultation — no obligation',
                    'Custom packages tailored to your ceremony',
                    'Full KwaZulu-Natal coverage',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-left">
                      <CheckCircle size={14} className="text-wedding-gold mt-0.5 flex-shrink-0" />
                      <span className="font-montserrat text-xs text-white/70">{item}</span>
                    </div>
                  ))}
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
                  Durban-based wedding production specialists. A decade of authentic, culturally sensitive storytelling.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-12 text-sm">
                <div className="space-y-4">
                  <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-wedding-gold">Legacy</p>
                  <a href="/weddings" className="block font-inter text-wedding-charcoal/60 hover:text-wedding-gold transition-colors">Portfolio Home</a>
                  <a href="/weddings/pricing" className="block font-inter text-wedding-charcoal/60 hover:text-wedding-gold transition-colors">Pricing</a>
                </div>
                <div className="space-y-4">
                  <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] text-wedding-gold">Contact</p>
                  <p className="font-inter text-wedding-charcoal/60">+{CONTACT_NUMBER}</p>
                  <p className="font-inter text-wedding-charcoal/60">info@msocorockers.co.za</p>
                </div>
              </div>
            </div>
            <div className="border-t border-wedding-gold/10 pt-8 text-center">
              <p className="font-montserrat text-[9px] font-bold text-wedding-charcoal/20 uppercase tracking-[0.2em]">
                &copy; 2026 Msoco Rockers Production. Excellence in Heritage.
              </p>
            </div>
          </div>
        </footer>

      </div>
    </DiscountProvider>
  );
}
