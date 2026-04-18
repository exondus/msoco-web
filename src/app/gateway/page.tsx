'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function GatewayPage() {
  const router = useRouter();

  const setPreference = (mode: 'wedding' | 'corporate') => {
    // 1. Save to localStorage for client-side persistence
    localStorage.setItem('msoco_preferred_mode', mode);
    
    // 2. Set cookie for server-side proxy.ts logic
    // Max age 1 year
    document.cookie = `msoco_preferred_mode=${mode}; path=/; max-age=31536000; SameSite=Lax`;
    
    // 3. Set theme attribute on body for immediate style change
    document.body.setAttribute('data-theme', mode);

    // 4. Route to the landing page
    router.push(mode === 'wedding' ? '/weddings' : '/corporate');
  };

  return (
    <main className="flex min-h-screen w-full flex-col md:flex-row overflow-hidden">
      {/* Wedding Side */}
      <div 
        onClick={() => setPreference('wedding')}
        className="group relative flex h-1/2 w-full cursor-pointer flex-col items-center justify-center overflow-hidden transition-all md:h-full md:w-1/2 bg-wedding-bg"
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
        <div className="z-20 text-center px-6">
          <h2 className="font-playfair text-4xl md:text-6xl text-wedding-charcoal mb-4">
            Weddings
          </h2>
          <p className="font-montserrat text-wedding-charcoal/80 uppercase tracking-widest text-sm">
            Celebrations & Traditions
          </p>
        </div>
        {/* Visual Cue: Traditional Zulu pattern or elegant imagery would go here */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-wedding-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-30" />
      </div>

      {/* Corporate Side */}
      <div 
        onClick={() => setPreference('corporate')}
        className="group relative flex h-1/2 w-full cursor-pointer flex-col items-center justify-center overflow-hidden transition-all md:h-full md:w-1/2 bg-corporate-black"
      >
        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors z-10" />
        <div className="z-20 text-center px-6">
          <h2 className="font-inter font-bold text-4xl md:text-6xl text-corporate-white mb-4">
            Corporate
          </h2>
          <p className="font-inter text-corporate-white/60 uppercase tracking-widest text-sm">
            Production & Technical
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-corporate-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-30" />
      </div>

      {/* Center Divider Logo (Optional) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 hidden md:block">
        <div className="bg-white p-4 rounded-full shadow-2xl border border-gray-100">
          <span className="font-bold text-black tracking-tighter text-xl">MS</span>
        </div>
      </div>
    </main>
  );
}
