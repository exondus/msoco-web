'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function MsocoLogo({ className = "h-20 w-auto" }: { className?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`relative ${className} transition-all duration-500 z-[110]`}>
      <Image
        src="/logo.png"
        alt="Msoco Rockers Production"
        fill
        className={`object-contain transition-all duration-500 brightness-0 ${isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        priority
      />
    </div>
  );
}
