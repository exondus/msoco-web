'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatItem {
  value: string;
  label: string;
  icon?: string;
}

interface CompanyStatsProps {
  stats: StatItem[];
  theme?: 'wedding' | 'corporate';
  bgColor?: string;
  textColor?: string;
}

export default function CompanyStats({
  stats,
  theme = 'wedding',
  bgColor = 'bg-wedding-charcoal',
  textColor = 'text-white'
}: CompanyStatsProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const isWedding = theme === 'wedding';
  const accentGradient = isWedding
    ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), transparent)'
    : 'linear-gradient(135deg, rgba(0, 82, 255, 0.2), transparent)';
  const accentBorder = isWedding
    ? 'linear-gradient(to right, rgba(212, 175, 55, 1), transparent)'
    : 'linear-gradient(to right, rgba(0, 82, 255, 1), transparent)';
  const secondaryText = textColor === 'text-white' ? 'text-white/60' : 'text-black/40';
  const labelText = textColor === 'text-white' ? 'text-white/70' : 'text-black/60';

  return (
    <section ref={ref} className={`${bgColor} py-40 px-8 overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className={`font-montserrat text-[10px] uppercase tracking-[0.5em] ${secondaryText} font-black mb-6 block`}>
            By The Numbers
          </p>
          <h2 className={`font-playfair text-6xl md:text-8xl ${textColor} tracking-tighter leading-tight`}>
            A Decade of <span className="italic font-light">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              {/* Background accent */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 z-0"
                style={{ background: accentGradient }}
              />

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 text-center">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="mb-4"
                >
                  <p className={`font-playfair text-5xl md:text-7xl font-light ${textColor} tracking-tighter mb-2`}>
                    {stat.value}
                  </p>
                </motion.div>
                <p className={`font-montserrat text-[9px] md:text-[10px] uppercase tracking-[0.3em] ${labelText} font-black`}>
                  {stat.label}
                </p>
              </div>

              {/* Hover border */}
              <div
                className="absolute bottom-0 left-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left w-full z-10"
                style={{ background: accentBorder }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
