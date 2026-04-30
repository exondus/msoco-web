'use client';

import { motion } from 'framer-motion';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';

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

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-8 flex flex-col md:flex-row gap-6 justify-center"
          >
            <a href="/weddings">
              <CoreButton className="bg-white text-red-900 hover:bg-white/90 hover:text-gray-800 w-full md:w-auto">
                Wedding Production
              </CoreButton>
            </a>
            <a href="/corporate">
              <CoreButton variant="outline" className="border-white text-white hover:bg-white/10 w-full md:w-auto">
                Corporate Services
              </CoreButton>
            </a>
          </motion.div>
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
