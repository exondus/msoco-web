'use client';

import { motion } from 'framer-motion';
import MsocoLogo from '@/components/ui/MsocoLogo';

export default function GatewayPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero with Gateway Background */}
      <header className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/gateway-background.jpg)' }} />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl space-y-12"
        >
          <MsocoLogo className="h-12 w-48 mx-auto mb-8" invert={true} />
          <h1 className="font-playfair text-7xl md:text-[11rem] text-white leading-[0.75] tracking-tighter">
            Gateway to <br />
            <span className="italic font-light">Excellence.</span>
          </h1>
          <p className="font-playfair text-2xl md:text-3xl text-white/80 italic max-w-3xl mx-auto font-light leading-relaxed">
            Exceptional production that transcends expectations.
          </p>
        </motion.div>
      </header>

      {/* Footer */}
      <footer className="py-16 px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-montserrat text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            © 2026 Msoco Rockers Production. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
