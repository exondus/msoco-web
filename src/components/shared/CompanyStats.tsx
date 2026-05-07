'use client';

import { motion, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';

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

function parseStatValue(value: string): { num: number | null; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: null, suffix: value };
  return { num: parseInt(match[1]), suffix: match[2] };
}

function StatNumber({
  value,
  inView,
  textColor,
  isWedding,
}: {
  value: string;
  inView: boolean;
  textColor: string;
  isWedding: boolean;
}) {
  const { num, suffix } = parseStatValue(value);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView || num === null) return;
    const el = spanRef.current;
    if (!el) return;

    const controls = animate(0, num, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v: number) {
        el.textContent = `${Math.floor(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, num, suffix]);

  // ∞ — subtle gold pulse glow, "did I see that?" effect
  if (num === null) {
    const glowColor = isWedding
      ? 'rgba(212, 175, 55, 0.7)'
      : 'rgba(0, 82, 255, 0.5)';
    return (
      <motion.span
        className={`font-playfair text-5xl md:text-7xl font-light ${textColor} tracking-tighter mb-2`}
        animate={{
          textShadow: [
            `0 0 0px ${glowColor}`,
            `0 0 24px ${glowColor}`,
            `0 0 0px ${glowColor}`,
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 3.5 }}
      >
        {value}
      </motion.span>
    );
  }

  return (
    <span
      ref={spanRef}
      className={`font-playfair text-5xl md:text-7xl font-light ${textColor} tracking-tighter mb-2`}
    >
      0{suffix}
    </span>
  );
}

export default function CompanyStats({
  stats,
  theme = 'wedding',
  bgColor = 'bg-wedding-charcoal',
  textColor = 'text-white',
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
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Background accent on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 z-0"
                style={{ background: accentGradient }}
              />

              <div className="relative z-10 p-6 md:p-8 text-center">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="mb-4"
                >
                  <StatNumber
                    value={stat.value}
                    inView={inView}
                    textColor={textColor}
                    isWedding={isWedding}
                  />
                </motion.div>
                <p className={`font-montserrat text-[9px] md:text-[10px] uppercase tracking-[0.3em] ${labelText} font-black`}>
                  {stat.label}
                </p>
              </div>

              {/* Bottom accent on hover */}
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
