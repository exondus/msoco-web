'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CREDENTIALS = [
  { value: '500+', label: 'Live Events' },
  { value: '10 Yrs', label: 'In KZN' },
  { value: '170+', label: 'Ceremonies' },
];

export default function TheVisionary() {
  return (
    <section className="py-40 px-8 bg-wedding-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 relative h-[700px] flex-shrink-0"
        >
          <div className="absolute inset-0 border-[20px] border-white z-10 shadow-2xl" />
          {/* Replace src with real WP media URL once available */}
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200"
            alt="Zakes, founder of Msoco Rockers"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute -bottom-10 -right-10 bg-wedding-gold p-12 z-20 shadow-2xl hidden lg:block">
            <p className="font-playfair text-white text-3xl italic leading-tight">
              &quot;Your story is <br /> our greatest <br /> production.&quot;
            </p>
          </div>
        </motion.div>

        {/* Founder Story */}
        <div className="w-full md:w-1/2 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-montserrat text-[10px] font-black uppercase tracking-[0.5em] text-wedding-gold mb-6 block">
              The Man Behind the Lens
            </span>
            <h2 className="font-playfair text-6xl md:text-8xl text-wedding-charcoal leading-[0.8] mb-12">
              Mastering the <br /><span className="italic font-light">Moment.</span>
            </h2>
          </motion.div>

          <p className="font-playfair text-2xl text-wedding-charcoal/70 leading-relaxed italic font-light">
            Zakes has engineered sound and vision for 500+ live events across Southern Africa.
          </p>

          <div className="space-y-6 font-montserrat text-sm text-wedding-charcoal/80 leading-loose max-w-xl">
            <p>
              He&apos;s stood in the back of sold-out concert halls and the quiet stillness of a family&apos;s Umembeso morning. He knows what goes wrong. Msoco Rockers exists to make sure it doesn&apos;t.
            </p>
            <p>
              Hands-on at every major ceremony, Zakes meets you in your own environment to understand your family&apos;s story — then translates that into a production worthy of it.
            </p>
          </div>

          {/* Credential Badges */}
          <div className="flex gap-10 pt-6 border-t border-wedding-gold/20">
            {CREDENTIALS.map((cred) => (
              <div key={cred.label} className="text-center">
                <p className="font-playfair text-4xl text-wedding-charcoal font-light">{cred.value}</p>
                <p className="font-montserrat text-[9px] uppercase tracking-[0.4em] text-wedding-gold font-black mt-1">{cred.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <div className="w-12 h-[1px] bg-wedding-gold" />
            <span className="font-playfair italic text-wedding-charcoal">Zakes — Founder, Msoco Rockers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
