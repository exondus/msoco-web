'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CoreButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
}

export default function CoreButton({ children, onClick, variant = 'primary', className = "" }: CoreButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        px-10 py-4 font-montserrat font-bold uppercase tracking-widest text-[10px] transition-all
        ${variant === 'primary'
          ? 'bg-wedding-gold [data-theme=corporate]:bg-corporate-blue [data-theme=corporate]:text-white'
          : 'border border-wedding-gold text-wedding-gold [data-theme=corporate]:border-corporate-blue [data-theme=corporate]:text-corporate-blue hover:bg-white/5'
        }
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
