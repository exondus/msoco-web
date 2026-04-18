'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface AboutFounderProps {
  photoUrl: string;
  photoAlt: string;
  persona: 'wedding' | 'corporate';
}

const STORY_PARAGRAPHS = [
  "Zakes didn't set out to build a production house — he set out to make sure cultural moments were treated with the same technical respect as world-class productions. After a decade standing behind the cameras at sold-out concert halls, silent boardrooms, and Zulu family ceremonies across KwaZulu-Natal, he founded Msoco Rockers with a single belief: every celebration deserves a cinematic legacy.",
  "What makes Zakes rare is range. He understands that an Umembeso ceremony and a 5,000-person conference both demand the same thing from a production team: zero failures, zero excuses, and total presence. He's built Msoco Rockers around that standard.",
  "Today, Msoco Rockers is KZN's only production house that operates at full technical scale across both traditions — serving high-income families who want their heritage preserved as precisely as their wedding, and corporates who need a single partner they can trust completely.",
];

export default function AboutFounder({ photoUrl, photoAlt, persona }: AboutFounderProps) {
  const isWedding = persona === 'wedding';
  const accentColor = isWedding ? 'bg-wedding-gold' : 'bg-corporate-blue';
  const accentText = isWedding ? 'text-wedding-gold' : 'text-corporate-blue';
  const headingFont = isWedding ? 'font-playfair' : 'font-inter font-black';

  return (
    <section className="py-40 px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-24">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full lg:w-2/5 relative h-[600px] flex-shrink-0"
        >
          <div className="absolute inset-0 border-[16px] border-gray-50 z-10 shadow-2xl" />
          <Image
            src={photoUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200'}
            alt={photoAlt}
            fill
            className="object-cover"
          />
          <div className={`absolute -bottom-8 -right-8 ${accentColor} p-8 z-20 shadow-2xl hidden lg:block`}>
            <p className={`${isWedding ? 'font-playfair italic' : 'font-inter font-black uppercase tracking-tight'} text-white text-xl leading-tight`}>
              {isWedding ? '"Your story is our greatest production."' : '"Zero failures. Zero excuses."'}
            </p>
          </div>
        </motion.div>

        {/* Story */}
        <div className="flex-1 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={`font-montserrat text-[10px] font-black uppercase tracking-[0.5em] ${accentText} mb-6 block`}>
              Founder & Lead Producer
            </span>
            <h2 className={`${headingFont} text-6xl md:text-8xl text-black leading-[0.85] tracking-tighter mb-12`}>
              {isWedding ? <><span>Meet</span><br /><span className="italic font-light">Zakes.</span></> : 'ZAKES.'}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {STORY_PARAGRAPHS.map((para, i) => (
              <p key={i} className={`${isWedding ? 'font-playfair text-xl text-black/70 leading-relaxed font-light' : 'font-inter text-base text-black/60 leading-loose'}`}>
                {para}
              </p>
            ))}
          </div>

          <div className={`flex items-center gap-4 pt-6 border-t ${isWedding ? 'border-wedding-gold/20' : 'border-gray-100'}`}>
            <div className={`w-12 h-[1px] ${accentColor}`} />
            <span className={`${isWedding ? 'font-playfair italic text-black' : 'font-inter font-bold uppercase tracking-wider text-sm text-black'}`}>
              Zakes — Founder, Msoco Rockers Production
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
