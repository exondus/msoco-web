'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BridgeFAB() {
  const router = useRouter();
  const pathname = usePathname();
  const [mode, setMode] = useState<'wedding' | 'corporate' | null>(null);

  useEffect(() => {
    // Read current theme from body attribute
    const currentTheme = document.body.getAttribute('data-theme') as 'wedding' | 'corporate';
    setMode(currentTheme);
  }, [pathname]);

  if (!mode || pathname === '/gateway') return null;

  const toggleMode = () => {
    const newMode = mode === 'wedding' ? 'corporate' : 'wedding';
    
    // Update persistence
    localStorage.setItem('msoco_preferred_mode', newMode);
    document.cookie = `msoco_preferred_mode=${newMode}; path=/; max-age=31536000; SameSite=Lax`;
    document.body.setAttribute('data-theme', newMode);
    
    setMode(newMode);
    
    // Route to new persona
    router.push(newMode === 'wedding' ? '/weddings' : '/corporate');
  };

  return (
    <button
      onClick={toggleMode}
      className={`fixed bottom-8 right-8 z-[100] flex h-14 w-14 items-center justify-center rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all hover:scale-110 active:scale-95 group border-2 ${
        mode === 'wedding' 
          ? 'bg-wedding-charcoal border-wedding-gold/30' 
          : 'bg-corporate-copper border-white/20'
      }`}
      aria-label="Switch Persona"
    >
      <div className="relative h-6 w-6">
        {mode === 'wedding' ? (
          /* Corporate Icon (Technical/Production) */
          <svg className="text-white group-hover:text-corporate-blue transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        ) : (
          /* Wedding Icon (Celebration) */
          <svg className="text-black group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h6a2 2 0 012 2v11a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2z" />
          </svg>
        )}
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0">
        <div className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] shadow-xl whitespace-nowrap border ${
          mode === 'wedding'
            ? 'bg-wedding-charcoal text-white border-wedding-gold/20'
            : 'bg-corporate-copper text-black border-white/20'
        }`}>
          Switch to {mode === 'wedding' ? 'Corporate' : 'Weddings'}
        </div>
      </div>
    </button>
  );
}
