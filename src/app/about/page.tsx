'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AboutFounder from '@/components/shared/AboutFounder';
import AboutStats from '@/components/shared/AboutStats';
import MsocoLogo from '@/components/ui/MsocoLogo';

type Persona = 'wedding' | 'corporate';

// Placeholder team members — to be replaced after Monday meeting with Zakes
const TEAM_PLACEHOLDERS = [
  { id: '1', name: 'Coming Soon', role: 'Production Crew', initials: 'CS' },
  { id: '2', name: 'Coming Soon', role: 'Videographer', initials: 'CS' },
  { id: '3', name: 'Coming Soon', role: 'Sound Engineer', initials: 'CS' },
];

export default function AboutPage() {
  const [persona, setPersona] = useState<Persona>('wedding');

  useEffect(() => {
    const cookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('msoco_preferred_mode='));
    const value = cookie?.split('=')[1];
    if (value === 'corporate' || value === 'wedding') {
      setPersona(value);
    }
  }, []);

  const isWedding = persona === 'wedding';
  const accentText = isWedding ? 'text-wedding-gold' : 'text-corporate-blue';
  const accentBg = isWedding ? 'bg-wedding-gold' : 'bg-corporate-blue';

  return (
    <div className="flex flex-col min-h-screen bg-white scroll-smooth">
      {/* Persona-aware Navbar */}
      <nav className={`fixed w-full flex justify-between items-center px-12 py-8 z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100`}>
        <MsocoLogo className="h-12 w-48" />
        <div className={`hidden md:flex space-x-12 font-montserrat uppercase tracking-[0.3em] text-[10px] font-black text-black/40`}>
          <a href={isWedding ? '/weddings' : '/corporate'} className={`hover:${accentText} transition-colors`}>
            {isWedding ? 'Weddings' : 'Corporate'}
          </a>
          <span className={`${accentText} underline underline-offset-8 decoration-2`}>About</span>
          <a href={isWedding ? '/weddings#contact' : '/corporate#contact'} className={`hover:${accentText} transition-colors`}>Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative w-full h-[70vh] flex items-end px-12 pb-24 overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-transparent to-black" />
        {/* Replace with real photo from WordPress once available */}
        <div className="absolute inset-0 bg-gray-900" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-7xl w-full"
        >
          <span className={`font-montserrat text-[10px] font-black uppercase tracking-[0.5em] ${accentText} mb-6 block`}>
            The People Behind the Production
          </span>
          <h1 className={`${isWedding ? 'font-playfair text-8xl md:text-[11rem] font-light italic' : 'font-inter font-black text-8xl md:text-[10rem] uppercase'} text-white leading-[0.8] tracking-tighter`}>
            {isWedding ? 'Our Story.' : 'WHO WE ARE.'}
          </h1>
        </motion.div>
      </header>

      <main>
        {/* Founder Story */}
        <AboutFounder
          photoUrl=""
          photoAlt="Zakes, founder of Msoco Rockers Production"
          persona={persona}
        />

        {/* By the Numbers */}
        <AboutStats persona={persona} />

        {/* Team Section — placeholder until post-Monday data */}
        <section className="py-40 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <span className={`font-montserrat text-[10px] uppercase tracking-[0.5em] ${accentText} font-black mb-6 block`}>
                The Crew
              </span>
              <h2 className={`${isWedding ? 'font-playfair text-6xl font-light italic' : 'font-inter font-black text-6xl uppercase'} text-black tracking-tighter`}>
                {isWedding ? 'The Team.' : 'THE TEAM.'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEAM_PLACEHOLDERS.map((member) => (
                <div key={member.id} className="flex flex-col items-center gap-6 border border-gray-100 p-12 text-center">
                  <div className={`w-24 h-24 rounded-full ${accentBg} opacity-10 flex items-center justify-center`}>
                    <span className="font-inter font-black text-2xl text-white opacity-100">{member.initials}</span>
                  </div>
                  <div>
                    <p className={`${isWedding ? 'font-playfair text-2xl' : 'font-inter font-black text-xl uppercase tracking-tight'} text-black`}>
                      {member.name}
                    </p>
                    <p className={`font-montserrat text-[10px] uppercase tracking-widest ${accentText} font-black mt-2`}>
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className={`py-32 px-8 ${isWedding ? 'bg-wedding-charcoal' : 'bg-black'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <svg className={`w-12 h-12 ${accentText} mx-auto mb-12 opacity-40`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V5C1 3.89543 1.89543 3 3 3H6C8.20914 3 10 4.79086 10 7V15C10 18.3137 7.31371 21 4 21H1Z" />
            </svg>
            <blockquote className={`${isWedding ? 'font-playfair text-3xl md:text-5xl font-light italic' : 'font-inter font-black text-2xl md:text-4xl uppercase tracking-tight'} text-white leading-tight`}>
              &ldquo;We exist to ensure that every cultural moment — from an Umembeso to a 5,000-person conference — is preserved with the technical excellence it deserves.&rdquo;
            </blockquote>
            <p className={`font-montserrat text-sm uppercase tracking-[0.4em] ${accentText} font-black mt-12`}>
              Zakes — Founder, Msoco Rockers Production
            </p>
          </div>
        </section>

        {/* Dual CTA Footer */}
        <section className="flex flex-col md:flex-row min-h-[40vh]">
          <a
            href="/weddings"
            className="group flex-1 flex flex-col items-center justify-center py-24 bg-wedding-bg hover:bg-wedding-charcoal transition-colors duration-500 text-center gap-6"
          >
            <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black">Weddings & Traditions</span>
            <h3 className="font-playfair text-5xl text-wedding-charcoal group-hover:text-white transition-colors duration-500">Planning a wedding?</h3>
            <span className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-wedding-charcoal/40 group-hover:text-wedding-gold transition-colors duration-500 font-black">
              View Wedding Services →
            </span>
          </a>
          <a
            href="/corporate"
            className="group flex-1 flex flex-col items-center justify-center py-24 bg-black hover:bg-corporate-blue transition-colors duration-500 text-center gap-6"
          >
            <span className="font-inter text-[10px] uppercase tracking-[0.5em] text-corporate-blue font-black group-hover:text-white transition-colors duration-500">Corporate & Production</span>
            <h3 className="font-inter font-black text-5xl uppercase tracking-tighter text-white">Planning an event?</h3>
            <span className="font-inter text-[10px] uppercase tracking-[0.4em] text-white/30 group-hover:text-white transition-colors duration-500 font-black">
              View Corporate Services →
            </span>
          </a>
        </section>
      </main>

      <footer className="py-12 px-12 bg-white border-t border-gray-100 flex justify-between items-center">
        <p className="font-montserrat text-[9px] font-bold text-black/20 uppercase tracking-[0.2em]">© 2026 Msoco Rockers Production. All Rights Reserved.</p>
        <p className="font-montserrat text-[9px] font-bold text-black/20 uppercase tracking-[0.2em]">Crafted in KZN.</p>
      </footer>
    </div>
  );
}
