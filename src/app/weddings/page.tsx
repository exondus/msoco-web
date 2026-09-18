'use client';

import { motion } from 'framer-motion';
import HeroSlider from '@/components/weddings/HeroSlider';
import WeddingLandingGallery from '@/components/weddings/WeddingLandingGallery';
import WeddingTestimonials from '@/components/weddings/WeddingTestimonials';
import PricingSpotlight from '@/components/weddings/PricingSpotlight';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';
import WeddingsNavbar from '@/components/weddings/WeddingsNavbar';
import { trackCTAClick, trackGalleryView } from '@/lib/analytics';

const WEDDING_SERVICES = [
  { id: 'studio-photo', number: '01', title: 'Photography', description: 'Full-day wedding photography, engagement shoots, and bridal portraits' },
  { id: 'studio-video', number: '02', title: 'Videography', description: 'Cinematic highlight films and complete ceremony coverage in 4K' },
  { id: 'live-stream', number: '03', title: 'Live Streaming', description: 'Broadcast your ceremony to family and friends who cannot attend' },
  { id: 'drones', number: '04', title: 'Drone Coverage', description: 'Aerial footage of your venue, entrance, and key moments' },
  { id: 'sound', number: '05', title: 'Sound & Audio', description: 'PA systems, microphones, and audio mixing for speeches and vows' },
  { id: 'projection', number: '06', title: 'LED & Projection', description: 'Memory boards, decorative displays, and ambient screens' },
  { id: 'lighting', number: '07', title: 'Lighting', description: 'Venue and stage lighting design for ceremony and reception' },
  { id: 'product-photo', number: '08', title: 'Detail Shots', description: 'Rings, flowers, decor, and every detail you planned' },
];

export default function WeddingsPage() {
  const CONTACT_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
      <div className="flex flex-col min-h-screen bg-wedding-bg text-wedding-charcoal font-inter scroll-smooth" data-theme="wedding">

        {/* Hero — Full screen image slider */}
        <header className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-wedding-charcoal">

          {/* Navigation Overlay — Inside hero to guarantee transparency over slider */}
          <div className="absolute top-0 left-0 w-full z-[100] bg-transparent">
            <WeddingsNavbar isHero={true} />
          </div>

          <HeroSlider />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-5xl space-y-10 px-6"
          >
            <span className="font-montserrat text-[10px] uppercase tracking-[0.6em] text-wedding-gold font-black">
              Wedding Photography &amp; Videography — KwaZulu-Natal
            </span>
            <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl text-white leading-[0.85] tracking-tighter">
              Your Wedding. <br />
              <span className="italic font-light">Captured Completely.</span>
            </h1>
            <p className="font-montserrat text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Photography, cinematic film, drone coverage, live streaming and sound —
              one team for everything on your day. Traditional and white weddings across KwaZulu-Natal.
            </p>
            <div className="pt-6 flex flex-col md:flex-row items-center justify-center gap-6">
              <CoreButton onClick={() => { trackCTAClick('view_portfolio', { source: 'hero' }); window.location.hash = '#gallery'; }}>View Our Work</CoreButton>
              <a href="/weddings/contact" onClick={() => trackCTAClick('book_consultation', { source: 'hero' })}>
                <CoreButton variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Book a Consultation
                </CoreButton>
              </a>
            </div>
          </motion.div>
        </header>

        <main>
          {/* 1. What we provide — one team, every wedding production need */}
          <section id="services" className="py-32 px-8 bg-wedding-bg">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6 block">
                  One Team. Complete Coverage.
                </span>
                <h2 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal tracking-tighter leading-tight">
                  Everything Your <span className="italic font-light">Wedding Needs.</span>
                </h2>
                <p className="font-montserrat text-sm text-wedding-charcoal/50 mt-8 max-w-xl mx-auto">
                  No juggling separate vendors. We handle the full production so you can focus on the day itself.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
                {WEDDING_SERVICES.map((service, i) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (i % 4) * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-wedding-gold/30 font-playfair italic text-4xl block mb-4">{service.number}</span>
                    <h3 className="font-playfair text-2xl text-wedding-charcoal mb-3 tracking-tight">{service.title}</h3>
                    <p className="font-montserrat text-sm text-wedding-charcoal/50 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. Gallery — real images from WP */}
          <section id="gallery" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
              <span className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-wedding-gold font-black mb-6 block">Traditional & White Weddings</span>
              <h2 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal tracking-tighter leading-tight">Recent Weddings.</h2>
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
                  onClick={() => trackGalleryView('landing_gallery_cta')}
                  className="inline-block font-montserrat text-[10px] font-black uppercase tracking-[0.4em] text-wedding-charcoal border border-wedding-charcoal px-12 py-4 hover:bg-wedding-charcoal hover:text-white transition-all duration-300"
                >
                  View Full Gallery
                </a>
              </motion.div>
            </div>
          </section>

          {/* 3. Social proof */}
          <WeddingTestimonials />

          {/* 4. Pricing — one featured package, full range on /weddings/pricing */}
          <div id="packages">
            <PricingSpotlight />
          </div>
        </main>

        {/* Footer */}
        <footer id="contact" className="bg-wedding-bg py-32 px-12 border-t border-wedding-gold/10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-24">
            <div className="max-w-2xl space-y-10">
              <MsocoLogo className="h-16 w-64 mb-12" invert={false} />
              <h3 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal tracking-tighter leading-none">
                Ready to Book <br /><span className="italic font-light text-wedding-gold">Your Date?</span>
              </h3>
              <p className="font-montserrat text-sm text-wedding-charcoal/60 max-w-md leading-relaxed">
                Tell us your wedding date and venue, and we&apos;ll put together the right package for your day.
              </p>
              <div className="pt-6 flex flex-col sm:flex-row gap-6">
                <a href="/weddings/contact" onClick={() => trackCTAClick('book_consultation', { source: 'footer' })}>
                  <CoreButton className="bg-wedding-gold text-white hover:bg-wedding-gold/90">Book a Consultation</CoreButton>
                </a>
                <a href="/weddings/gallery" onClick={() => trackGalleryView('footer_cta')}>
                  <CoreButton variant="outline" className="border-wedding-gold/20 text-wedding-charcoal hover:bg-wedding-gold/5">View Full Gallery</CoreButton>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-end text-right space-y-12">
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-widest text-wedding-gold">Headquarters</p>
                <p className="font-playfair text-2xl text-wedding-charcoal italic">30 Impisi Grove, Ntuzuma, Durban, 4359, KwaZulu-Natal</p>
              </div>
              <div className="space-y-4">
                <p className="font-montserrat text-[10px] font-black uppercase tracking-widest text-wedding-gold">Direct Contact</p>
                <p className="font-playfair text-2xl text-wedding-charcoal italic">+{CONTACT_NUMBER}</p>
                <p className="font-playfair text-2xl text-wedding-charcoal italic">info@msocorockers.co.za</p>
              </div>
              <div className="flex justify-end space-x-8 pt-8 grayscale opacity-50">
                {['Instagram', 'Facebook', 'YouTube', 'TikTok'].map(social => (
                  <span key={social} className="font-montserrat text-[9px] font-black uppercase tracking-[0.3em] cursor-pointer hover:text-wedding-gold transition-colors">{social}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-wedding-gold/10 flex justify-between items-center">
            <p className="font-montserrat text-[9px] font-bold text-wedding-charcoal/30 uppercase tracking-[0.2em]">© 2026 Msoco Rockers Production. All Rights Reserved.</p>
            <p className="font-montserrat text-[9px] font-bold text-wedding-charcoal/30 uppercase tracking-[0.2em]">Heirloom Quality. Durban Proud.</p>
          </div>
        </footer>
      </div>
  );
}
