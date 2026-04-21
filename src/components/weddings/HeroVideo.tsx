/**
 * Hero Video Component
 * Displays a background video for hero sections
 * Falls back to image if video is not available
 */

'use client';

import { useState, useEffect } from 'react';

interface HeroVideoProps {
  videoUrl?: string;
  posterImage?: string;
  fallbackGrayscale?: boolean;
  children?: React.ReactNode;
}

export default function HeroVideo({
  videoUrl,
  posterImage = 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200',
  fallbackGrayscale = true,
  children,
}: HeroVideoProps) {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-wedding-charcoal">
      <div className="absolute inset-0 opacity-30">
        {!videoError && videoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover ${fallbackGrayscale ? 'grayscale' : ''}`}
            poster={posterImage}
            onError={() => setVideoError(true)}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={posterImage}
            alt="Hero background"
            className={`w-full h-full object-cover ${fallbackGrayscale ? 'grayscale' : ''}`}
          />
        )}
      </div>

      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
