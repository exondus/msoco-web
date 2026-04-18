'use client';

import { motion } from 'framer-motion';
import WeddingGallery from '@/components/weddings/WeddingGallery';
import WeddingLegacy from '@/components/weddings/WeddingLegacy';
import TheVisionary from '@/components/weddings/TheVisionary';
import KZNAuthority from '@/components/weddings/KZNAuthority';
import WeddingTestimonials from '@/components/weddings/WeddingTestimonials';
import ScarcityBar from '@/components/weddings/ScarcityBar';
import PricingAnchor from '@/components/weddings/PricingAnchor';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';

const STEPS = [
  { title: 'The Indaba', desc: 'A personal meeting in your environment to understand your family story and cultural needs.' },
  { title: 'The Ceremony', desc: 'Discrete, professional production handling everything from 4K film to intimate portraits.' },
  { title: 'The Legacy', desc: 'A curated cinematic masterpiece and high-fidelity gallery delivered to preserve your story.' },
];

export default function WeddingsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-wedding-bg scroll-smooth">
      {/* Scarcity Bar — above everything */}
      <ScarcityBar remainingDates={4} year={2026} />

      {/* Navbar */}
      <nav className="fixed w-full flex justify-between items-center px-12 py-8 z-[100] mix-blend-difference">
        <MsocoLogo className="h-12 w-48 invert" />
        <div className="hidden md:flex space-x-12 font-montserrat uppercase tracking-[0.3em] text-[10px] font-black text-white">
          <a href="#vision" className="hover:text-wedding-gold transition-colors underline-offset-8">The Man</a>
          <a href="#heritage" className="hover:text-wedding-gold transition-colors underline-offset-8">Authority</a>
          <a href="/about" className="hover:text-wedding-gold transition-colors underline-offset-8">About</a>
          <a href="#gallery" className="hover:text-wedding-gold transition-colors underline-offset-8">Art</a>
          <a href="#contact" className="text-wedding-gold font-black underline underline-offset-8 decoration-2">Inquire</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-wedding-charcoal">
        <div className="absolute inset-0 opacity-30">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale"
            poster="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200"
          >
            {/* Add src once video URL available from WordPress media library */}
          </video>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl space-y-12"
        >
          <span className="font-montserrat text-[10px] uppercase tracking-[0.6em] text-wedding-gold font-black">
            KwaZulu-Natal&apos;s Premier Production House
          </span>
          <h1 className="font-playfair text-7xl md:text-[11rem] text-white leading-[0.75] tracking-tighter">
            Authentic <br />
            <span className="italic font-light">Legacies.</span>
          </h1>
          <p className="font-playfair text-2xl md:text-3xl text-white/80 italic max-w-3xl mx-auto font-light leading-relaxed">
            Umembeso. White Wedding. Both Flawless. That&apos;s Msoco.
          </p>
          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <CoreButton onClick={() => { window.location.hash = '#gallery'; }}>View the Portfolio</CoreButton>
            <CoreButton variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              <a href="#contact">Book a Consultation</a>
            </CoreButton>
          </div>
        </motion.div>
      </header>

      <main>
        {/* 1. Zakes intro */}
        <div id="vision">
          <TheVisionary />
        </div>

        {/* 2. Social proof — before gallery */}
        <WeddingTestimonials />

        {/* 3. Gallery — real images from WP */}
        <section id="gallery" className="py-40 bg-wedding-bg">
          <div className="max-w-7xl mx-auto px-8 mb-20 text-center">
            <h2 className="font-playfair text-6xl md:text-[8rem] text-wedding-charcoal mb-6 tracking-tighter leading-none">The Art.</h2>
            <p className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-wedding-gold font-black">Curation of Culture & Elegance</p>
          </div>
          <WeddingGallery />
        </section>

        {/* 4. Authority + Legacy */}
        <div id="heritage">
          <KZNAuthority />
          <WeddingLegacy />
        </div>

        {/* 5. Process */}
        <section className="py-40 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-32">
              <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6 block">Our Hands-On Approach</span>
              <h2 className="font-playfair text-6xl md:text-8xl text-wedding-charcoal tracking-tighter">The Journey.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              {STEPS.map((step, i) => (
                <div key={step.title} className="text-center group">
                  <div className="w-24 h-24 rounded-full border border-wedding-gold/20 flex items-center justify-center mx-auto mb-10 group-hover:bg-wedding-gold group-hover:text-white transition-all duration-500">
                    <span className="font-playfair text-2xl italic">{i + 1}</span>
                  </div>
                  <h3 className="font-playfair text-3xl text-wedding-charcoal mb-6 uppercase tracking-tighter">{step.title}</h3>
                  <p className="font-montserrat text-sm text-wedding-charcoal/50 leading-loose font-medium px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Pricing anchor — filters leads before final CTA */}
        <PricingAnchor startingPrice="R[X]" premiumPrice="R[Y]" />
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-white py-40 px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-32">
          <div className="max-w-2xl space-y-12">
            <MsocoLogo className="h-16 w-64 mb-16" />
            <h3 className="font-playfair text-6xl md:text-8xl text-wedding-charcoal tracking-tighter leading-none">
              Your Story <br /><span className="italic font-light text-wedding-gold">is Next.</span>
            </h3>
            <p className="font-montserrat text-sm text-wedding-charcoal/50 uppercase tracking-[0.2em] font-bold max-w-md">
              Secure KwaZulu-Natal&apos;s authority in traditional and modern wedding production.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row gap-6">
              <CoreButton>Book a Consultation</CoreButton>
              <CoreButton variant="outline" className="border-gray-200 text-wedding-charcoal">View Full Portfolio</CoreButton>
            </div>
          </div>

          <div className="flex flex-col justify-end text-right space-y-12">
            <div className="space-y-4">
              <p className="font-montserrat text-[10px] font-black uppercase tracking-widest text-wedding-gold">Head Office</p>
              <p className="font-playfair text-2xl text-wedding-charcoal italic">Durban, KwaZulu-Natal</p>
            </div>
            <div className="space-y-4">
              <p className="font-montserrat text-[10px] font-black uppercase tracking-widest text-wedding-gold">Contact</p>
              <p className="font-playfair text-2xl text-wedding-charcoal italic">+27 12 345 6789</p>
              <p className="font-playfair text-2xl text-wedding-charcoal italic">info@msocorockers.co.za</p>
            </div>
            <div className="flex justify-end space-x-8 pt-8 grayscale opacity-50">
              {['Instagram', 'Facebook', 'YouTube', 'TikTok'].map(social => (
                <span key={social} className="font-montserrat text-[9px] font-black uppercase tracking-[0.3em] cursor-pointer hover:text-wedding-gold transition-colors">{social}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-40 pt-12 border-t border-gray-100 flex justify-between items-center">
          <p className="font-montserrat text-[9px] font-bold text-wedding-charcoal/30 uppercase tracking-[0.2em]">© 2026 Msoco Rockers Production. All Rights Reserved.</p>
          <p className="font-montserrat text-[9px] font-bold text-wedding-charcoal/30 uppercase tracking-[0.2em]">Crafted in KZN.</p>
        </div>
      </footer>
    </div>
  );
}
