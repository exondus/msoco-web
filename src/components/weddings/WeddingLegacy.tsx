'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CoreButton from '../ui/CoreButton';

export default function WeddingLegacy() {
  return (
    <section className="py-32 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        {/* Visual Composition: Overlapping Image Grid */}
        <div className="relative w-full lg:w-1/2 h-[600px]">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 w-3/4 h-3/4 z-10 shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200" 
              alt="Traditional Zulu Wedding" 
              fill 
              className="object-cover rounded-sm grayscale-[10%]" 
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 w-3/4 h-3/4 z-20 shadow-2xl border-8 border-white"
          >
            <Image 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200" 
              alt="Modern White Wedding" 
              fill 
              className="object-cover rounded-sm" 
            />
          </motion.div>
          
          {/* Decorative Zulu Pattern Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-wedding-gold/20 -z-0 rotate-6" />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-montserrat text-[10px] font-black uppercase tracking-[0.5em] text-wedding-gold mb-4 block">
              The Language of Tradition
            </span>
            <h2 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal leading-none mb-8">
              We Speak <br/><span className="italic">Ceremony.</span>
            </h2>
            <div className="w-24 h-1 bg-wedding-gold mb-12" />
          </motion.div>

          <p className="font-playfair text-xl text-wedding-charcoal/60 leading-relaxed italic">
            Most photographers see a wedding. We see a ceremony. We understand the deep significance of every Zulu rite, from the sacred rhythms of Umembeso to the intricate details of Umabo.
          </p>

          <p className="font-montserrat text-sm text-wedding-charcoal/80 leading-loose max-w-xl font-medium">
            Our specialized cultural expertise ensures your family&apos;s heritage is preserved with the same meticulous care as a high-end white wedding. You focus on the ancestors and your family; we focus on the art of your legacy.
          </p>

          <div className="pt-8">
            <CoreButton variant="outline">Learn About Our Zulu Expertise</CoreButton>
          </div>
        </div>
      </div>
    </section>
  );
}
