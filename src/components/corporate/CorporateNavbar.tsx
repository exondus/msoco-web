'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';

export default function CorporateNavbar() {
  return (
    <nav className="fixed w-full flex justify-between items-center p-8 z-[100] bg-white border-b border-gray-100">
      <div className="flex items-center gap-8">
        <MsocoLogo className="h-10 w-44" />
      </div>
      <div className="hidden md:flex space-x-12 text-[9px] font-black uppercase tracking-[0.4em] text-gray-600 items-center gap-8">
        <Link href="/corporate" className="hover:text-wedding-gold transition-colors">Home</Link>
        <Link href="/corporate/gallery" className="hover:text-wedding-gold transition-colors">Gallery</Link>
        <Link href="/corporate/pricing" className="hover:text-wedding-gold transition-colors">Pricing</Link>
        <CoreButton variant="outline">Inquire</CoreButton>
      </div>
    </nav>
  );
}
