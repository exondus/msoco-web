/**
 * Home/Landing Page
 * Showcases both wedding and corporate capabilities
 * Features curated images from WordPress media library
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';

const FEATURED_IMAGES = [
  {
    id: 1,
    src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02488.jpg',
    alt: 'Wedding ceremony',
    type: 'Weddings',
  },
  {
    id: 2,
    src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05685.jpg',
    alt: 'Corporate event',
    type: 'Corporate',
  },
  {
    id: 3,
    src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02469.jpg',
    alt: 'Bride portrait',
    type: 'Weddings',
  },
  {
    id: 4,
    src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05438.jpg',
    alt: 'Broadcast setup',
    type: 'Corporate',
  },
];

export default function HomePage() {
  const CONTACT_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <div className="flex flex-col min-h-screen bg-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full flex justify-between items-center p-8 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <MsocoLogo className="h-10 w-44" />
        <div className="hidden md:flex space-x-12 text-[9px] font-black uppercase tracking-[0.4em] text-black/30 items-center">
          <a href="/weddings" className="hover:text-wedding-gold transition-colors">Weddings</a>
          <a href="/corporate" className="hover:text-corporate-blue transition-colors">Corporate</a>
          <a href="/about" className="hover:text-black transition-colors">About</a>
          <CoreButton className="py-2 px-6">Get Started</CoreButton>
        </div>
      </nav>

      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="relative h-[80vh] flex items-center px-8 md:px-16 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url("https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02488.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%)',
            }}
          />

          <div className="max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-white/60 text-sm font-montserrat uppercase tracking-[0.4em] font-black mb-6 block">
                Durban&apos;s Most Awarded Production House
              </span>
              <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white mb-8 leading-tight">
                Authentic <br />
                <span className="text-transparent bg-gradient-to-r from-wedding-gold to-yellow-300 bg-clip-text">
                  Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-light mb-12 max-w-2xl">
                From traditional Zulu ceremonies to corporate broadcasts. We bring your vision to life with precision and artistry.
              </p>
              <div className="flex gap-6 flex-wrap">
                <CoreButton className="bg-wedding-gold hover:bg-yellow-400 text-black">
                  Explore Weddings
                </CoreButton>
                <CoreButton variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Explore Corporate
                </CoreButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Gallery */}
        <section className="py-40 px-8 md:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-5xl md:text-7xl font-black text-black mb-6">Featured Work</h2>
              <p className="text-black/50 text-lg">Sample of our portfolio (567 images available)</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {FEATURED_IMAGES.map((img, idx) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className={`text-xs font-black uppercase tracking-wider ${img.type === 'Weddings' ? 'text-wedding-gold' : 'text-corporate-blue'
                      }`}>
                      {img.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <CoreButton className="bg-black hover:bg-gray-900 text-white px-12 py-4 text-lg">
                View Full Portfolio
              </CoreButton>
            </div>
          </div>
        </section>

        {/* Divisions */}
        <section className="py-40 px-8 md:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-center mb-24 text-black">
              Two Divisions. <br />
              <span className="text-transparent bg-gradient-to-r from-wedding-gold to-corporate-blue bg-clip-text">
                One Commitment.
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Weddings */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
                  <Image
                    src="https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02474.jpg"
                    alt="Wedding ceremony"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-4xl font-black text-wedding-charcoal mb-4">
                  Weddings & Ceremonies
                </h3>
                <p className="text-black/60 text-lg mb-6 leading-relaxed">
                  From traditional Zulu umembeso to elegant white weddings. We capture the authenticity and elegance of your most important day.
                </p>
                <ul className="space-y-3 text-sm text-black/50 mb-8">
                  <li>✓ 4K Cinematography</li>
                  <li>✓ Multi-cam Coverage</li>
                  <li>✓ Drone Videography</li>
                  <li>✓ Professional Photography</li>
                </ul>
                <CoreButton className="bg-wedding-gold hover:bg-yellow-400 text-black">
                  Explore Weddings
                </CoreButton>
              </motion.div>

              {/* Corporate */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
                  <Image
                    src="https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05438.jpg"
                    alt="Corporate event"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-4xl font-black text-corporate-blue mb-4">
                  Corporate & Events
                </h3>
                <p className="text-black/60 text-lg mb-6 leading-relaxed">
                  Technical excellence meets creative brilliance. Broadcast-quality production for conferences, activations, and corporate events.
                </p>
                <ul className="space-y-3 text-sm text-black/50 mb-8">
                  <li>✓ Multi-cam Livestream</li>
                  <li>✓ Technical Staging</li>
                  <li>✓ LED & Audio Systems</li>
                  <li>✓ Brand Activations</li>
                </ul>
                <CoreButton className="bg-corporate-blue hover:bg-blue-700 text-white">
                  Explore Corporate
                </CoreButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-40 px-8 md:px-16 bg-gradient-to-r from-wedding-charcoal to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Ready to Create Something <span className="text-wedding-gold">Extraordinary?</span>
              </h2>
              <p className="text-xl text-white/60 mb-12">
                Let&apos;s discuss your vision and bring it to life with world-class production.
              </p>
              <CoreButton className="bg-wedding-gold hover:bg-yellow-400 text-black px-12 py-4 text-lg font-bold">
                Book a Consultation
              </CoreButton>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div>
              <MsocoLogo className="h-10 w-40 mb-6" />
              <p className="text-white/50 text-sm">
                Durban&apos;s premier production house for weddings and corporate events.
              </p>
            </div>
            <div>
              <h4 className="font-black text-white mb-4 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li><a href="/weddings" className="hover:text-white transition-colors">Weddings</a></li>
                <li><a href="/corporate" className="hover:text-white transition-colors">Corporate</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-4 uppercase tracking-wider">Services</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li>Videography</li>
                <li>Photography</li>
                <li>Live Streaming</li>
                <li>Technical Production</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li>Durban, KZN</li>
                <li>+${CONTACT_NUMBER}</li>
                <li>info@msocorockers.co.za</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/30 text-xs">© 2026 Msoco Rockers. All Rights Reserved.</p>
            <p className="text-white/30 text-xs mt-4 md:mt-0">Crafted in KZN</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
