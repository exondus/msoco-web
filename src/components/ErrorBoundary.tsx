'use client';

import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { trackComponentError } from '@/lib/analytics';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * React Error Boundary — catches unhandled component errors,
 * reports them to PostHog, and shows a graceful fallback UI.
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    trackComponentError('ErrorBoundary', error);
    console.error('[ErrorBoundary] Caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[60vh] flex items-center justify-center px-8">
          <div className="text-center max-w-md space-y-6">
            <div className="w-16 h-16 rounded-full bg-wedding-gold/10 flex items-center justify-center mx-auto">
              <span className="text-wedding-gold text-2xl">!</span>
            </div>
            <h2 className="font-playfair text-3xl text-wedding-charcoal">
              Something went wrong
            </h2>
            <p className="font-montserrat text-sm text-wedding-charcoal/60">
              We apologize for the inconvenience. Please refresh the page or{' '}
              <a
                href="/weddings/contact"
                className="text-wedding-gold underline underline-offset-4"
              >
                contact us directly
              </a>
              .
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="font-montserrat text-[10px] font-black uppercase tracking-[0.3em] bg-wedding-charcoal text-white px-8 py-3 hover:bg-wedding-charcoal/90 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
