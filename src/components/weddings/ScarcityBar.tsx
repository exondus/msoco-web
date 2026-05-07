'use client';

import { useDiscount } from '@/lib/discount-context';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const DEADLINE = new Date('2026-05-31T23:59:59');

function getTimeLeft() {
  const diff = Math.max(0, DEADLINE.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[28px]">
      <span className="font-montserrat text-sm md:text-base font-black text-rose-700 leading-none tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="font-montserrat text-[7px] uppercase tracking-[0.15em] text-gray-400 font-bold mt-0.5">
        {label}
      </span>
    </div>
  );
}

interface ScarcityBarProps {
  remainingDates: number;
  year: number;
}

export default function ScarcityBar({ remainingDates, year }: ScarcityBarProps) {
  const { isActive, loading, percentage } = useDiscount();
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return <div className="w-full h-[56px] bg-white border-b border-gray-100 animate-pulse" />;
  }

  if (isActive) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full bg-white border-b border-rose-100 shadow-sm overflow-hidden"
      >
        <div className="relative z-10 flex items-center justify-between max-w-[1400px] mx-auto px-5 md:px-12 py-2.5">

          {/* Left: live indicator */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
            </span>
            <span className="hidden sm:block font-montserrat text-[9px] font-black uppercase tracking-[0.4em] text-rose-600">
              Live Offer
            </span>
          </div>

          {/* Center: percentage + message + countdown */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Big percentage */}
            <div className="flex items-baseline gap-1.5">
              <span className="font-playfair text-3xl md:text-4xl font-black text-rose-700 leading-none">
                {percentage}%
              </span>
              <span className="font-montserrat text-[10px] font-black uppercase tracking-[0.35em] text-rose-500">
                OFF
              </span>
            </div>

            <span className="hidden sm:block w-px h-7 bg-gray-200" />

            <span className="hidden md:block font-montserrat text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
              All Wedding Packages
            </span>

            <span className="hidden md:block w-px h-7 bg-gray-200" />

            {/* Countdown — only renders client-side to avoid SSR/hydration mismatch */}
            {timeLeft && <div className="flex items-center gap-1 md:gap-1.5">
              <span className="hidden sm:block font-montserrat text-[8px] uppercase tracking-[0.25em] text-gray-400 font-bold mr-1">
                Ends
              </span>
              <TimeUnit value={timeLeft.days} label="days" />
              <span className="font-montserrat text-[11px] font-black text-gray-300 pb-3">:</span>
              <TimeUnit value={timeLeft.hours} label="hrs" />
              <span className="font-montserrat text-[11px] font-black text-gray-300 pb-3">:</span>
              <TimeUnit value={timeLeft.minutes} label="min" />
              <span className="font-montserrat text-[11px] font-black text-gray-300 pb-3">:</span>
              <TimeUnit value={timeLeft.seconds} label="sec" />
            </div>}
          </div>

          {/* Right: CTA */}
          <a
            href="/weddings/contact"
            className="shrink-0 flex items-center gap-1.5 font-montserrat text-[9px] font-black uppercase tracking-[0.3em] bg-rose-600 hover:bg-rose-700 text-white px-4 md:px-5 py-2.5 transition-colors duration-200"
          >
            <span className="hidden sm:inline">Book Now</span>
            <span className="sm:hidden">Book</span>
            <ArrowRight size={10} />
          </a>
        </div>
      </motion.div>
    );
  }

  if (remainingDates === 0) return null;

  return (
    <div className="w-full bg-wedding-gold py-3 px-6 text-center">
      <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.4em] text-wedding-charcoal">
        Only {remainingDates} dates remaining for the {year} season —{' '}
        <a href="#contact" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
          Secure yours →
        </a>
      </p>
    </div>
  );
}
