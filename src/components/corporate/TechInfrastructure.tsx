'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SPECS = [
  { label: 'Audio', value: 'High-Fidelity Line Array Systems' },
  { label: 'Visual', value: 'P2.5 LED Video Walls & 4K Projection' },
  { label: 'Lighting', value: 'DMX Intelligent Moving Head Rigs' },
  { label: 'Streaming', value: 'Broadcast-Grade Multi-cam Livestream' }
];

export default function TechInfrastructure() {
  return (
    <section className="bg-white py-32 px-8 overflow-hidden relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-32">
        {/* Technical Imagery */}
        <div className="w-full lg:w-1/2 relative h-[600px] group">
          <div className="absolute inset-0 border border-corporate-blue/10 -m-4 transition-all group-hover:m-0" />
          <Image 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200" 
            alt="Technical Event Setup" 
            fill 
            className="object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-1000 rounded-sm shadow-xl" 
          />
          <div className="absolute top-0 right-0 bg-corporate-blue text-white px-8 py-4 font-inter font-black uppercase text-xs">
            Infrastructure Ready
          </div>
        </div>

        {/* Technical Copy */}
        <div className="w-full lg:w-1/2 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-inter text-[10px] font-black uppercase tracking-[0.5em] text-corporate-blue mb-6 block">
              The Edge of Scale
            </span>
            <h2 className="font-inter text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none text-black mb-10">
              Technical <br/><span className="text-corporate-blue">Superiority.</span>
            </h2>
          </motion.div>

          <p className="font-inter text-xl text-black/40 font-light leading-relaxed max-w-xl">
            Individual vendors lack the infrastructure. We don&apos;t. We own and maintain our own high-end audio, visual, and lighting rigs, providing a single-source solution for the modern corporate landscape.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {SPECS.map((spec, i) => (
              <motion.div 
                key={spec.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-corporate-blue/20 pl-6 py-2"
              >
                <h4 className="font-inter font-bold text-xs uppercase tracking-widest text-black/40 mb-1">{spec.label}</h4>
                <p className="font-inter text-black font-semibold text-sm">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
