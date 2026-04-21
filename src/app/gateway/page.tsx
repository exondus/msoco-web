'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import MsocoLogo from '@/components/ui/MsocoLogo';

export default function GatewayPage() {
  const router = useRouter();

  const setPreference = (mode: 'wedding' | 'corporate') => {
    localStorage.setItem('msoco_preferred_mode', mode);
    document.cookie = `msoco_preferred_mode=${mode}; path=/; max-age=31536000; SameSite=Lax`;
    document.body.setAttribute('data-theme', mode);
    router.push(mode === 'wedding' ? '/weddings' : '/corporate');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="py-16 px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <MsocoLogo className="h-10 w-40 mb-16" />
          <div className="max-w-2xl">
            <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6 block">
              Where Moments Become Legacies
            </p>
            <h1 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal mb-8 tracking-tighter leading-tight">
              What brings you <span className="italic font-light">here today?</span>
            </h1>
            <p className="font-montserrat text-sm text-wedding-charcoal/60 max-w-lg leading-relaxed">
              Choose your path below. Each division is tailored to your unique needs — whether celebrating life's most important moments or amplifying your brand.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center px-8 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Weddings Card */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8 }}
              onClick={() => setPreference('wedding')}
              className="group relative flex flex-col items-start justify-between h-96 p-12 rounded-xl border-2 border-gray-200 hover:border-wedding-gold transition-all duration-500 text-left"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 h-1 bg-wedding-gold rounded-t-xl w-0 group-hover:w-full transition-all duration-700" />

              {/* Icon/Number */}
              <div className="text-6xl font-playfair font-light text-wedding-gold mb-6">
                01
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4 mb-12">
                <h2 className="font-playfair text-4xl text-wedding-charcoal leading-tight">
                  Weddings
                </h2>
                <p className="font-playfair text-lg text-wedding-charcoal/70 italic font-light">
                  Authentic Legacies
                </p>
                <p className="font-montserrat text-sm text-wedding-charcoal/60 leading-relaxed">
                  Umembeso. White Wedding. Both flawless. We preserve your family's story with precision and artistry.
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3 font-montserrat text-[10px] uppercase tracking-[0.3em] text-wedding-gold font-black group-hover:gap-6 transition-all duration-500">
                <span>Explore</span>
                <span className="text-xl">→</span>
              </div>
            </motion.button>

            {/* Corporate Card */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setPreference('corporate')}
              className="group relative flex flex-col items-start justify-between h-96 p-12 rounded-xl border-2 border-gray-200 hover:border-corporate-blue transition-all duration-500 text-left"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 h-1 bg-corporate-blue rounded-t-xl w-0 group-hover:w-full transition-all duration-700" />

              {/* Icon/Number */}
              <div className="text-6xl font-playfair font-light text-corporate-blue mb-6">
                02
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4 mb-12">
                <h2 className="font-playfair text-4xl text-wedding-charcoal leading-tight">
                  Corporate
                </h2>
                <p className="font-playfair text-lg text-wedding-charcoal/70 italic font-light">
                  Engineered Impact
                </p>
                <p className="font-montserrat text-sm text-wedding-charcoal/60 leading-relaxed">
                  Conferences. Launches. Activations. Technical excellence meets creative vision.
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3 font-montserrat text-[10px] uppercase tracking-[0.3em] text-corporate-blue font-black group-hover:gap-6 transition-all duration-500">
                <span>Explore</span>
                <span className="text-xl">→</span>
              </div>
            </motion.button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-8 px-8 text-center">
        <p className="font-montserrat text-[9px] font-bold text-wedding-charcoal/30 uppercase tracking-[0.2em]">
          © 2026 Msoco Rockers Production. Crafted in KZN.
        </p>
      </footer>
    </div>
  );
}
