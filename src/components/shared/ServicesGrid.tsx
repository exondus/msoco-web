'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Service {
  id: string;
  number: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  ctaText?: string;
}

interface ServicesGridProps {
  services: Service[];
  theme?: 'wedding' | 'corporate';
  bgColor?: string;
  columns?: 2 | 4;
  ctaLink?: string;
}

export default function ServicesGrid({
  services,
  theme = 'wedding',
  bgColor = 'bg-white',
  columns = 4,
  ctaLink = '#'
}: ServicesGridProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const isWedding = theme === 'wedding';
  const cardBg = isWedding ? 'bg-white border border-gray-100' : 'glass-corporate border border-white/5';
  const textColor = isWedding ? 'text-wedding-charcoal' : 'text-white';
  const secondaryText = isWedding ? 'text-wedding-charcoal/60' : 'text-white/40';
  const accentText = isWedding ? 'text-wedding-gold' : 'text-corporate-copper';
  const buttonClass = isWedding
    ? 'bg-wedding-gold text-white hover:bg-wedding-gold/80'
    : 'bg-corporate-copper text-black hover:bg-corporate-orange';

  const gridCols = columns === 4 ? 'md:grid-cols-4' : 'md:grid-cols-2';

  return (
    <section ref={ref} className={`${bgColor} py-40 px-8 relative overflow-hidden`}>
      {!isWedding && (
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-corporate-copper/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      )}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className={`font-montserrat text-[10px] uppercase tracking-[0.5em] ${accentText} font-black mb-6 block`}>
            {isWedding ? 'Our Expertise' : 'Service Infrastructure'}
          </p>
          <h2 className={`${isWedding ? 'font-playfair' : 'font-inter font-black uppercase'} text-6xl md:text-8xl ${textColor} tracking-tighter leading-tight`}>
            {isWedding ? 'Comprehensive' : 'Technical'} <span className={`${isWedding ? 'italic font-light' : 'text-corporate-copper italic'}`}>{isWedding ? 'Services' : 'Ecosystem'}</span>
          </h2>
        </motion.div>

        <div className={`grid grid-cols-1 ${gridCols} gap-6 md:gap-8`}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="h-full"
            >
              <div className={`${cardBg} rounded-lg p-8 h-full flex flex-col justify-between group hover:border-corporate-copper/50 transition-all duration-500 relative overflow-hidden`}>
                {/* Icon or Number */}
                <div className="relative">
                  {service.icon ? (
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                  ) : (
                    <p className={`${isWedding ? 'font-playfair' : 'font-inter font-black'} text-6xl font-light ${textColor} mb-4 transition-colors duration-500 opacity-20 group-hover:opacity-100`}>
                      {service.number}
                    </p>
                  )}
                </div>

                {/* Title */}
                <h3 className={`font-montserrat text-lg md:text-xl font-black uppercase tracking-tight ${textColor} mb-3 group-hover:text-corporate-copper transition-colors`}>
                  {service.title}
                </h3>

                {/* Description */}
                {service.description && (
                  <p className={`font-montserrat text-sm ${secondaryText} mb-6 flex-grow leading-relaxed`}>
                    {service.description}
                  </p>
                )}

                {/* CTA Button */}
                {service.ctaText && (
                  <motion.a
                    href={ctaLink}
                    whileHover={{ x: 4 }}
                    className={`${buttonClass} font-montserrat text-[10px] font-black uppercase tracking-[0.3em] py-3 px-6 rounded transition-all duration-300 w-full block text-center`}
                  >
                    {service.ctaText} →
                  </motion.a>
                )}

                {/* Hover accent line - using gradient border */}
                <div
                  className="absolute bottom-0 left-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left w-full"
                  style={{
                    background: isWedding
                      ? 'linear-gradient(to right, rgba(212, 175, 55, 1), transparent)'
                      : 'linear-gradient(to right, rgba(230, 126, 34, 1), transparent)'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
