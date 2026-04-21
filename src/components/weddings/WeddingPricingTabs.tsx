'use client';

import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
}

interface WeddingPricingTabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export default function WeddingPricingTabs({ tabs, activeTab, onChange }: WeddingPricingTabsProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex p-1.5 bg-wedding-gold/5 rounded-full border border-wedding-gold/20 backdrop-blur-sm">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`relative px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-wedding-charcoal/60 hover:text-wedding-charcoal'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-wedding-gold rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
