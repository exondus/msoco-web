'use client';

import { motion } from 'framer-motion';

const CEREMONIES = [
  { name: 'Umembeso', desc: 'Capturing the exchange of gifts and the union of families.' },
  { name: 'Traditional Wedding', desc: 'Sacred ceremonies documented with cultural reverence and artistry.' },
  { name: 'White Weddings', desc: 'Timeless elegance for the modern KwaZulu-Natal bride.' },
  { name: 'Hybrid Ceremonies', desc: 'Honoring traditions while embracing modern expressions of love.' }
];

export default function KZNAuthority() {
  return (
    <section className="py-40 bg-wedding-bg border-y border-wedding-gold/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24">
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal tracking-tighter leading-none mb-10">
                KZN&apos;s <br/><span className="text-wedding-gold italic font-light">Traditional</span> <br/>Authority.
              </h2>
              <div className="w-20 h-1 bg-wedding-gold mb-10" />
              <p className="font-montserrat text-sm text-wedding-charcoal/60 uppercase tracking-widest font-black leading-relaxed">
                From the Drakensberg to the Durban Coast, we travel to you.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {CEREMONIES.map((item, i) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <span className="text-wedding-gold/20 font-playfair italic text-6xl block mb-6 transition-colors group-hover:text-wedding-gold/40">
                  0{i + 1}
                </span>
                <h3 className="font-playfair text-3xl text-wedding-charcoal mb-4 uppercase tracking-tighter">
                  {item.name}
                </h3>
                <p className="font-montserrat text-sm text-wedding-charcoal/50 leading-loose max-w-xs font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Travel Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-12 bg-wedding-charcoal text-white text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold mb-4 font-black">Mobile Production Units</p>
            <h4 className="font-playfair text-3xl md:text-5xl italic font-light">
              We meet you in your environment.
            </h4>
          </div>
          {/* Abstract KZN Map Trace / Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none text-[15rem] font-black uppercase tracking-tighter flex items-center justify-center">
            KWAZULU-NATAL
          </div>
        </motion.div>
      </div>
    </section>
  );
}
