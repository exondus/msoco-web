'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';
import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * PostHog Provider — initializes PostHog with full analytics suite:
 * - Automatic pageviews & pageleaves
 * - Session recording
 * - Exception/error capture
 * - Reverse proxy via /ingest to bypass ad blockers
 */
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || '/ingest';

    if (key && typeof window !== 'undefined' && !posthog.__loaded) {
      posthog.init(key, {
        api_host: host,
        ui_host: 'https://us.posthog.com', // Always use direct for PostHog UI toolbar
        person_profiles: 'identified_only',

        // Pageview & navigation
        capture_pageview: false, // Handled by PostHogPageView component for App Router SPA navigation
        capture_pageleave: true, // Track when users leave — needed for time-on-page & bounce rate

        // Autocapture
        autocapture: true,

        // Session recording — critical for conversion site analysis
        session_recording: {
          maskAllInputs: false, // Package selection / pricing doesn't contain PII
          maskInputFn: (text: string, element?: HTMLElement) => {
            // Mask sensitive fields by name attribute
            const name = element?.getAttribute('name') || '';
            if (['email', 'phone', 'name'].includes(name)) {
              return '*'.repeat(text.length);
            }
            return text;
          },
        },

        // Error tracking
        capture_exceptions: true, // Auto-capture unhandled JS errors

        // Performance
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') {
            // Uncomment to debug in dev:
            // posthog.debug();
          }
        },
      });
    }
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}

/**
 * PostHog Pageview Tracker — fires $pageview on every App Router navigation.
 * Must be wrapped in Suspense because useSearchParams() requires it in Next.js.
 */
function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthogClient = usePostHog();

  useEffect(() => {
    if (pathname && posthogClient) {
      let url = window.origin + pathname;
      const search = searchParams?.toString();
      if (search) {
        url += `?${search}`;
      }
      posthogClient.capture('$pageview', { $current_url: url });
    }
  }, [pathname, searchParams, posthogClient]);

  return null;
}
