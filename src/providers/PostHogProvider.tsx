'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

    if (key) {
      posthog.init(key, {
        api_host: host,
        person_profiles: 'identified_only',
        capture_pageview: false, // We'll handle this manually for more control in App Router if needed, or set to true for default
        autocapture: true,
      });
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
