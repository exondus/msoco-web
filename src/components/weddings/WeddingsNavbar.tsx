'use client';

import { usePathname } from 'next/navigation';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';

interface WeddingsNavbarProps {
  isHero?: boolean; // true for hero section (dark overlay), false for regular pages
}

export default function WeddingsNavbar({ isHero = false }: WeddingsNavbarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  const navItems = [
    { label: 'Overview', href: '/weddings', active: pathname === '/weddings' },
    { label: 'Services', href: '/weddings/services', active: isActive('/weddings/services') },
    { label: 'Gallery', href: '/weddings/gallery', active: isActive('/weddings/gallery') },
    { label: 'Pricing', href: '/weddings/pricing', active: isActive('/weddings/pricing') },
  ];

  if (isHero) {
    // Landing page navbar - overlay style
    return (
      <nav className="fixed w-full flex justify-between items-center px-12 py-6 z-[100] mix-blend-difference">
        <div className="pt-4">
          <MsocoLogo className="h-12 w-48 invert" />
        </div>
        <div className="hidden md:flex space-x-8 font-montserrat uppercase tracking-[0.3em] text-[10px] font-black text-white">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-wedding-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="text-wedding-gold font-black underline underline-offset-8 decoration-2">
            Inquire
          </a>
        </div>
      </nav>
    );
  }

  // Regular pages navbar
  return (
    <nav className="fixed w-full flex justify-between items-center px-12 py-6 z-[100] glass-wedding border-b border-wedding-gold/10">
      <MsocoLogo className="h-10 w-40" invert={false} />
      <div className="hidden md:flex space-x-8 font-montserrat uppercase tracking-[0.3em] text-[10px] font-black items-center gap-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`transition-colors ${
              item.active
                ? 'text-wedding-gold border-b-2 border-wedding-gold pb-1'
                : 'text-wedding-charcoal/60 hover:text-wedding-gold'
            }`}
          >
            {item.label}
          </a>
        ))}
        <CoreButton variant="outline" className="py-2 px-6 border-wedding-gold text-wedding-gold ml-4 hover:bg-wedding-gold/5">
          Inquire
        </CoreButton>
      </div>
    </nav>
  );
}
