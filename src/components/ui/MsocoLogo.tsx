'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MsocoLogo({ className = "h-20 w-auto", invert = false }: { className?: string; invert?: boolean }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Link href="/" className={`relative block ${className} transition-all duration-500 z-[110] hover:scale-105 active:scale-95 cursor-pointer`}>
      <Image
        src="/logo.png"
        alt="Msoco Rockers Production"
        fill
        sizes="(max-width: 768px) 160px, 256px"
        className={`object-contain transition-all duration-500 brightness-0 ${invert ? 'invert' : ''} ${isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        priority
      />
    </Link>
  );
}
