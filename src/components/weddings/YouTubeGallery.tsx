'use client';

import { motion } from 'framer-motion';

const YOUTUBE_LINKS = [
  "https://www.youtube.com/embed/hpgwFnjhrA8",
  "https://www.youtube.com/embed/SRGNeMwBWFU",
  "https://www.youtube.com/embed/CXRqeg2NqM0"
];

export default function YouTubeGallery() {
  return (
    <section className="py-20 mt-16 border-t border-wedding-gold/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6">
          Cinematography
        </p>
        <h2 className="font-playfair text-5xl text-wedding-charcoal mb-4">
          Wedding <span className="italic font-light">Films</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {YOUTUBE_LINKS.map((link, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="aspect-video w-full rounded-sm overflow-hidden shadow-lg"
          >
            <iframe
              width="100%"
              height="100%"
              src={link}
              title={`Wedding Film ${idx + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full bg-black"
            ></iframe>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
