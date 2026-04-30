'use client';

import { motion } from 'framer-motion';
import WeddingLandingGallery from '@/components/weddings/WeddingLandingGallery';
import WeddingLegacy from '@/components/weddings/WeddingLegacy';
import TheVisionary from '@/components/weddings/TheVisionary';
import KZNAuthority from '@/components/weddings/KZNAuthority';
import WeddingTestimonials from '@/components/weddings/WeddingTestimonials';
import ScarcityBar from '@/components/weddings/ScarcityBar';
import PricingAnchor from '@/components/weddings/PricingAnchor';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';
import CompanyStats from '@/components/shared/CompanyStats';
import WeddingPackages from '@/components/weddings/WeddingPackages';
import WeddingsNavbar from '@/components/weddings/WeddingsNavbar';

const WEDDING_STATS = [
  { value: '500+', label: 'Ceremonies Captured' },
  { value: '10 Yrs', label: 'In KwaZulu-Natal' },
  { value: '170+', label: 'Ceremonial Productions' },
  { value: '∞', label: 'Legacies Preserved' },
];

const WEDDING_SERVICES = [
  { id: 'studio-photo', number: '01', title: 'Studio Photography', description: 'Professional engagement shoots, bridal portraits, and styled sessions', ctaText: 'View Packages' },
  { id: 'studio-video', number: '02', title: 'Cinematic Videography', description: 'Highlight films, vow exchanges, and complete ceremony coverage', ctaText: 'View Packages' },
  { id: 'live-stream', number: '03', title: 'Live Streaming', description: 'Global broadcast for family and loved ones who cannot attend', ctaText: 'View Packages' },
  { id: 'drones', number: '04', title: 'Aerial Coverage', description: 'Drone cinematography of venue, entrance, and key moments', ctaText: 'View Packages' },
  { id: 'sound', number: '05', title: 'Sound & Audio', description: 'Professional PA systems, microphone management, and audio mixing', ctaText: 'View Packages' },
  { id: 'projection', number: '06', title: 'LED & Projection', description: 'Decorative displays, memory boards, and ambient lighting', ctaText: 'View Packages' },
  { id: 'lighting', number: '07', title: 'Ambient & Stage Lighting', description: 'Venue lighting design, altar setup, and romantic ambiance', ctaText: 'View Packages' },
  { id: 'product-photo', number: '08', title: 'Detail Photography', description: 'Rings, flowers, decor, fashion, and intimate detail captures', ctaText: 'View Packages' },
];

const STEPS = [
  { title: 'Get in Touch', desc: 'Call +27 12 345 6789 or message us on WhatsApp to discuss your ceremony and photography needs.' },
  { title: 'The Ceremony', desc: 'Discrete, professional production handling everything from 4K film to intimate portraits.' },
  { title: 'The Legacy', desc: 'A curated cinematic masterpiece and high-fidelity gallery delivered to preserve your story.' },
];

export default function WeddingsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-wedding-bg text-wedding-charcoal font-inter scroll-smooth" data-theme="wedding">
      {/* Scarcity Bar — above everything */}
      <ScarcityBar remainingDates={4} year={2026} />

      {/* Navbar */}
      <WeddingsNavbar isHero={true} />

      {/* Hero */}
      <header className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-wedding-charcoal">
        <div className="absolute inset-0 opacity-30">
          {/* Hero video background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale"
            poster="https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05685.jpg"
          >
            <source src="https://www.msocorockers.co.za/wp-content/uploads/2025/07/DJI_0455_1.mp4" type="video/mp4" />
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
            Heritage <br />
            <span className="italic font-light">Legacy.</span>
          </h1>
          <p className="font-playfair text-2xl md:text-3xl text-white/80 italic max-w-3xl mx-auto font-light leading-relaxed">
            Preserving KwaZulu-Natal&apos;s most sacred unions. <br />
            Umembeso. White Wedding. Both Flawless.
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

        {/* 1.5. Stats Section */}
        <CompanyStats stats={WEDDING_STATS} theme="wedding" bgColor="bg-wedding-bg" textColor="text-wedding-charcoal" />

        {/* 2. Wedding Packages — pricing options (moved higher per Zakes request) */}
        <WeddingPackages />

        {/* 3. Social proof — after pricing */}
        <WeddingTestimonials />

        {/* 3. Gallery — real images from WP */}
        <section id="gallery" className="py-40 bg-wedding-bg">
          <div className="max-w-7xl mx-auto px-8 mb-20 text-center">
            <h2 className="font-playfair text-6xl md:text-[8rem] text-wedding-charcoal mb-6 tracking-tighter leading-none">The Art.</h2>
            <p className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-wedding-gold font-black">Curation of Culture & Elegance</p>
          </div>
          <div className="max-w-7xl mx-auto px-8">
            <WeddingLandingGallery />
          </div>
          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="/weddings/gallery"
                className="inline-block font-montserrat text-[10px] font-black uppercase tracking-[0.4em] text-wedding-charcoal border border-wedding-charcoal px-12 py-4 hover:bg-wedding-charcoal hover:text-white transition-all duration-300"
              >
                View All Gallery Images
              </a>
            </motion.div>
          </div>
        </section>

        {/* 4. Authority + Legacy */}
        <div id="heritage">
          <KZNAuthority />
          <WeddingLegacy />
        </div>

        {/* 5. Process */}
        <section className="py-40 bg-wedding-bg border-y border-wedding-gold/10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-32">
              <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6 block">Our Ceremonial Approach</span>
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
        <PricingAnchor startingPrice="R12,500" premiumPrice="R28,000" />
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-wedding-bg py-40 px-12 border-t border-wedding-gold/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-32">
          <div className="max-w-2xl space-y-12">
            <MsocoLogo className="h-16 w-64 mb-16" invert={false} />
            <h3 className="font-playfair text-6xl md:text-8xl text-wedding-charcoal tracking-tighter leading-none">
              Your Legacy <br /><span className="italic font-light text-wedding-gold">Starts Here.</span>
            </h3>
            <p className="font-montserrat text-[10px] text-wedding-charcoal/50 uppercase tracking-[0.3em] font-bold max-w-md">
              Secure KwaZulu-Natal&apos;s authority in traditional and modern wedding production.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row gap-6">
              <CoreButton className="bg-wedding-gold text-white hover:bg-wedding-gold/90">Book a Consultation</CoreButton>
              <CoreButton variant="outline" className="border-wedding-gold/20 text-wedding-charcoal hover:bg-wedding-gold/5">View Full Portfolio</CoreButton>
            </div>
          </div>

          <div className="flex flex-col justify-end text-right space-y-12">
            <div className="space-y-4">
              <p className="font-montserrat text-[10px] font-black uppercase tracking-widest text-wedding-gold">Headquarters</p>
              <p className="font-playfair text-2xl text-wedding-charcoal italic">Durban, KwaZulu-Natal</p>
            </div>
            <div className="space-y-4">
              <p className="font-montserrat text-[10px] font-black uppercase tracking-widest text-wedding-gold">Direct Contact</p>
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

        <div className="max-w-7xl mx-auto mt-40 pt-12 border-t border-wedding-gold/10 flex justify-between items-center">
          <p className="font-montserrat text-[9px] font-bold text-wedding-charcoal/30 uppercase tracking-[0.2em]">© 2026 Msoco Rockers Production. All Rights Reserved.</p>
          <p className="font-montserrat text-[9px] font-bold text-wedding-charcoal/30 uppercase tracking-[0.2em]">Heirloom Quality. Durban Proud.</p>
        </div>
      </footer>
    </div>
  );
}
