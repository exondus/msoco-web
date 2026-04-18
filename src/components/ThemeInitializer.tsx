'use client';

import { useEffect } from 'react';

/**
 * Reads the preference from cookies on initial load and sets the 
 * data-theme attribute on the body to ensure correct styling.
 */
export default function ThemeInitializer() {
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const preferredMode = getCookie('msoco_preferred_mode');
    if (preferredMode) {
      document.body.setAttribute('data-theme', preferredMode);
    }
  }, []);

  return null;
}
